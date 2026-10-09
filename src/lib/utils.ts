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

  // Função auxiliar para limpar assinatura e notas de pesquisa de um texto
  const cleanSectionText = (raw: string): string => {
    let t = stripAndFormatHtml(raw);
    // Remove menções de pesquisa de satisfação se vazou
    t = t.replace(/Sua opinião é importante[\s\S]*?Muito obrigado!?/gi, '');
    // Remove assinatura institucional se vazou
    t = t.replace(/Para melhorarmos continuamente[\s\S]*?Central de Atendimento\.?/gi, '');
    t = t.replace(/Atenciosamente[\s\S]*?Central de Atendimento\.?/gi, '');
    return t.trim();
  };

  const rawTrimmed = html.trim();

  // 1. Tentar extração direta por texto puro / marcações simples
  const analiseRegex = /(?:^|\n)\s*(?:<b>|<strong>)?\s*An[aá]lise\s+t[eé]cnica\s*:?\s*(?:<\/b>|<\/strong>)?\s*\n*([\s\S]*?)(?=(?:^|\n)\s*(?:<b>|<strong>)?\s*A[cç][oõ]es\s+realizadas\s*:?|$)/i;
  const acoesRegex = /(?:^|\n)\s*(?:<b>|<strong>)?\s*A[cç][oõ]es\s+realizadas\s*:?\s*(?:<\/b>|<\/strong>)?\s*\n*([\s\S]*?)(?=(?:^|\n)\s*(?:<b>|<strong>)?\s*Resultado\s*:?|$)/i;
  const resultadoRegex = /(?:^|\n)\s*(?:<b>|<strong>)?\s*Resultado\s*:?\s*(?:<\/b>|<\/strong>)?\s*\n*([\s\S]*?)$/i;

  const analiseMatch = rawTrimmed.match(analiseRegex);
  const acoesMatch = rawTrimmed.match(acoesRegex);
  const resultadoMatch = rawTrimmed.match(resultadoRegex);

  if (analiseMatch && acoesMatch) {
    const textSections: ParsedTicketSection[] = [];
    const analiseContent = cleanSectionText(analiseMatch[1]);
    const acoesContent = cleanSectionText(acoesMatch[1]);
    const resultadoContent = resultadoMatch ? cleanSectionText(resultadoMatch[1]) : '';

    if (analiseContent) {
      textSections.push({
        id: 'analise',
        title: 'Análise técnica',
        content: analiseContent,
        htmlContent: analiseContent.split('\n').filter(Boolean).map(l => `<p class="mb-1">${l}</p>`).join('')
      });
    }

    if (acoesContent) {
      textSections.push({
        id: 'acoes',
        title: 'Ações realizadas',
        content: acoesContent,
        htmlContent: acoesContent.split('\n').filter(Boolean).map(l => `<p class="mb-1">${l}</p>`).join('')
      });
    }

    if (resultadoContent) {
      textSections.push({
        id: 'resultado',
        title: 'Resultado',
        content: resultadoContent,
        htmlContent: resultadoContent.split('\n').filter(Boolean).map(l => `<p class="mb-1">${l}</p>`).join('')
      });
    }

    if (textSections.length > 0) {
      return textSections;
    }
  }

  // 2. Fallback para documentos HTML com marcação DOM complexa
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const sections: ParsedTicketSection[] = [];

    // 1. Procurar Análise técnica
    const allElements = Array.from(doc.querySelectorAll('div, b, u, strong'));
    const analiseTitleEl = allElements.find(el => {
      const txt = (el.textContent || '').trim().toLowerCase();
      return txt === 'análise técnica:' || txt === 'analise tecnica:' || txt === 'análise técnica' || txt === 'analise tecnica';
    });

    if (analiseTitleEl) {
      // Pega o card que envolve ou o irmão seguinte
      const card = analiseTitleEl.closest('div');
      const nextSibling = analiseTitleEl.nextElementSibling;
      const text = nextSibling 
        ? cleanSectionText(nextSibling.innerHTML)
        : (card ? cleanSectionText(card.innerHTML).replace(/an[aá]lise\s+t[eé]cnica:?/i, '').trim() : '');
      if (text) {
        sections.push({
          id: 'analise',
          title: 'Análise técnica',
          content: text,
          htmlContent: nextSibling ? nextSibling.outerHTML : (card ? card.innerHTML : '')
        });
      }
    }

    // 2. Procurar Ações realizadas
    const acoesTitleEl = allElements.find(el => {
      const txt = (el.textContent || '').trim().toLowerCase();
      return txt === 'ações realizadas:' || txt === 'acoes realizadas:' || txt === 'ações realizadas' || txt === 'acoes realizadas';
    });

    if (acoesTitleEl) {
      const card = acoesTitleEl.closest('div');
      const nextSibling = acoesTitleEl.nextElementSibling;
      const text = nextSibling 
        ? cleanSectionText(nextSibling.innerHTML)
        : (card ? cleanSectionText(card.innerHTML).replace(/a[cç][oõ]es\s+realizadas:?/i, '').trim() : '');
      if (text) {
        sections.push({
          id: 'acoes',
          title: 'Ações realizadas',
          content: text,
          htmlContent: nextSibling ? nextSibling.outerHTML : (card ? card.innerHTML : '')
        });
      }
    }

    // 3. Procurar Resultado
    const resultadoTitleEl = allElements.find(el => {
      const txt = (el.textContent || '').trim().toLowerCase();
      return (txt === 'resultado:' || txt === 'resultado') && !txt.includes('opinião');
    });

    if (resultadoTitleEl) {
      const card = resultadoTitleEl.closest('div');
      const nextSibling = resultadoTitleEl.nextElementSibling;
      const text = nextSibling 
        ? cleanSectionText(nextSibling.innerHTML)
        : (card ? cleanSectionText(card.innerHTML).replace(/resultado:?/i, '').trim() : '');
      if (text) {
        sections.push({
          id: 'resultado',
          title: 'Resultado',
          content: text,
          htmlContent: nextSibling ? nextSibling.outerHTML : (card ? card.innerHTML : '')
        });
      }
    }

    // Se NÃO achou Análise técnica/Ações/Resultado, procura seções de Escalonamento (A solicitação / A tratativa)
    if (sections.length === 0) {
      const solEl = allElements.find(el => /a\s+solicita[cç][aã]o:?/i.test(el.textContent || ''));
      if (solEl) {
        const parent = solEl.closest('div') || solEl.parentElement;
        if (parent) {
          let text = cleanSectionText(parent.innerHTML);
          text = text.replace(/.*a\s+solicita[cç][aã]o:?/i, '').replace(/prezados,?\s*/i, '').trim();
          if (text) {
            sections.push({
              id: 'solicitacao',
              title: 'A solicitação',
              content: text,
              htmlContent: parent.innerHTML
            });
          }
        }
      }

      const tratEl = allElements.find(el => /a\s+tratativa/i.test(el.textContent || ''));
      if (tratEl) {
        const card = tratEl.closest('div');
        const nextSibling = tratEl.nextElementSibling;
        const text = nextSibling
          ? cleanSectionText(nextSibling.innerHTML)
          : (card ? cleanSectionText(card.innerHTML).replace(/a\s+tratativa/i, '').trim() : '');
        if (text) {
          sections.push({
            id: 'tratativa',
            title: 'A tratativa',
            content: text,
            htmlContent: nextSibling ? nextSibling.outerHTML : (card ? card.innerHTML : '')
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
