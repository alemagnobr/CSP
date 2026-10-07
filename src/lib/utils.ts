import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stripAndFormatHtml(input: string | undefined | null): string {
  if (!input) return '';
  let str = input;
  
  // Convert block elements and line breaks to newlines
  str = str.replace(/<\/(p|div|h[1-6]|tr)>/gi, '\n');
  str = str.replace(/<br\s*[\/]?>/gi, '\n');
  str = str.replace(/<li[^>]*>/gi, '\n• ');
  
  // Strip all remaining HTML tags
  str = str.replace(/<[^>]+>/g, '');
  
  // Decode HTML entities
  str = str
    .replace(/&nbsp;/gi, ' ')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&amp;/gi, '&');
  
  // Clean multiple whitespace characters and consecutive empty lines
  const lines = str.split('\n').map(l => l.trim());
  const cleanedLines: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.length > 0 || (cleanedLines.length > 0 && cleanedLines[cleanedLines.length - 1].length > 0)) {
      cleanedLines.push(line);
    }
  }
  
  return cleanedLines.join('\n').trim();
}

export function cleanFaq<T extends Record<string, any>>(faq: T): T {
  if (!faq) return faq;
  return {
    ...faq,
    name: stripAndFormatHtml(faq.name),
    subject: stripAndFormatHtml(faq.subject),
    service: stripAndFormatHtml(faq.service),
    technicalInfo: stripAndFormatHtml(faq.technicalInfo),
    procedure: stripAndFormatHtml(faq.procedure),
    observacoes: stripAndFormatHtml(faq.observacoes),
    permissaoAcesso: stripAndFormatHtml(faq.permissaoAcesso),
    acessoUtilizacao: stripAndFormatHtml(faq.acessoUtilizacao),
    credenciaisAcesso: stripAndFormatHtml(faq.credenciaisAcesso),
  };
}

export interface ParsedTicketSection {
  id: string;
  title: string;
  content: string;
  htmlContent: string;
}

export function parseTicketHtmlSections(html: string | undefined | null): ParsedTicketSection[] {
  if (!html || !html.trim()) return [];

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Remove blocos de assinatura e pesquisa de satisfação do documento analisado para nunca misturar
    const allDivs = Array.from(doc.querySelectorAll('div'));
    allDivs.forEach(div => {
      const text = (div.textContent || '').toLowerCase();
      if (text.includes('sua opinião é importante') || text.includes('atenciosamente') || text.includes('pesquisa de satisfação') || text.includes('central de atendimento')) {
        div.remove();
      }
    });

    const isEscalatedMode = doc.body.textContent?.includes('ENCAMINHAMENTO') || 
                            doc.body.textContent?.includes('A tratativa') || 
                            doc.body.textContent?.includes('A solicitação');

    const sections: ParsedTicketSection[] = [];

    if (isEscalatedMode) {
      // 1. A solicitação
      const allElements = Array.from(doc.querySelectorAll('div, strong, b'));
      const solEl = allElements.find(el => /a\s+solicita[cç][aã]o:?/i.test(el.textContent || ''));
      if (solEl) {
        const parentContainer = solEl.closest('div') || solEl.parentElement;
        if (parentContainer) {
          let text = stripAndFormatHtml(parentContainer.innerHTML);
          text = text.replace(/.*a\s+solicita[cç][aã]o:?/i, '').replace(/prezados,?\s*/i, '').trim();
          if (text) {
            sections.push({
              id: 'solicitacao',
              title: 'A solicitação',
              content: text,
              htmlContent: parentContainer.innerHTML
            });
          }
        }
      }

      // 2. A tratativa
      const tratEl = allElements.find(el => /a\s+tratativa/i.test(el.textContent || ''));
      if (tratEl) {
        const card = tratEl.closest('div') || tratEl.parentElement;
        if (card) {
          const sibling = tratEl.nextElementSibling || (card.children.length > 1 ? card.children[1] : null);
          const rawText = sibling 
            ? stripAndFormatHtml(sibling.innerHTML) 
            : stripAndFormatHtml(card.innerHTML).replace(/a\s+tratativa/i, '').trim();
          if (rawText) {
            sections.push({
              id: 'tratativa',
              title: 'A tratativa',
              content: rawText,
              htmlContent: sibling ? sibling.outerHTML : card.innerHTML
            });
          }
        }
      }
    } else {
      // Modo Padrão (Análise técnica, Ações realizadas, Resultado)
      const allDivsInDoc = Array.from(doc.querySelectorAll('div'));

      // 1. Análise técnica
      const analiseHeader = allDivsInDoc.find(d => {
        const t = (d.textContent || '').trim().toLowerCase();
        return t === 'análise técnica:' || t === 'analise tecnica:' || (t.startsWith('análise técnica') && t.length < 30);
      });
      if (analiseHeader) {
        const contentEl = analiseHeader.nextElementSibling;
        const text = contentEl ? stripAndFormatHtml(contentEl.innerHTML) : '';
        if (text) {
          sections.push({
            id: 'analise',
            title: 'Análise técnica',
            content: text,
            htmlContent: contentEl ? contentEl.outerHTML : ''
          });
        }
      }

      // 2. Ações realizadas
      const acoesHeader = allDivsInDoc.find(d => {
        const t = (d.textContent || '').trim().toLowerCase();
        return t === 'ações realizadas:' || t === 'acoes realizadas:' || (t.startsWith('ações realizadas') && t.length < 30);
      });
      if (acoesHeader) {
        const contentEl = acoesHeader.nextElementSibling;
        const text = contentEl ? stripAndFormatHtml(contentEl.innerHTML) : '';
        if (text) {
          sections.push({
            id: 'acoes',
            title: 'Ações realizadas',
            content: text,
            htmlContent: contentEl ? contentEl.outerHTML : ''
          });
        }
      }

      // 3. Resultado
      const resultadoHeader = allDivsInDoc.find(d => {
        const t = (d.textContent || '').trim().toLowerCase();
        return t === 'resultado:' || (t.startsWith('resultado') && t.length < 20);
      });
      if (resultadoHeader) {
        const contentEl = resultadoHeader.nextElementSibling;
        const text = contentEl ? stripAndFormatHtml(contentEl.innerHTML) : '';
        if (text) {
          sections.push({
            id: 'resultado',
            title: 'Resultado',
            content: text,
            htmlContent: contentEl ? contentEl.outerHTML : ''
          });
        }
      }
    }

    return sections;
  } catch (e) {
    console.error('Error parsing ticket html sections:', e);
    return [];
  }
}
