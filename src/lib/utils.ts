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

  // Cria um elemento DOM em memória para fazer parsing seguro do HTML gerado
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const sections: ParsedTicketSection[] = [];

    // 1. Procura por caixas com títulos específicos
    // Procura por divs ou elementos com texto de cabeçalho
    const allDivs = Array.from(doc.querySelectorAll('div'));
    
    // Procura Análise técnica
    const analiseHeader = allDivs.find(d => /an[aá]lise\s+t[eé]cnica/i.test(d.textContent || ''));
    if (analiseHeader) {
      // Pega o card pai ou o conteúdo logo após o título
      const parentCard = analiseHeader.parentElement || analiseHeader;
      // Procura a div de conteúdo (irmão ou segundo elemento)
      const contentEl = analiseHeader.nextElementSibling || parentCard.querySelector('div:not(:first-child)');
      const rawText = contentEl ? stripAndFormatHtml(contentEl.innerHTML) : stripAndFormatHtml(parentCard.innerHTML).replace(/an[aá]lise\s+t[eé]cnica:?/i, '').trim();
      if (rawText) {
        sections.push({
          id: 'analise',
          title: 'Análise técnica',
          content: rawText,
          htmlContent: contentEl ? contentEl.outerHTML : parentCard.innerHTML
        });
      }
    }

    // Procura Ações realizadas
    const acoesHeader = allDivs.find(d => /a[cç][oõ]es\s+realizadas/i.test(d.textContent || ''));
    if (acoesHeader) {
      const parentCard = acoesHeader.parentElement || acoesHeader;
      const contentEl = acoesHeader.nextElementSibling || parentCard.querySelector('ul') || parentCard.querySelector('div:not(:first-child)');
      const rawText = contentEl ? stripAndFormatHtml(contentEl.innerHTML) : stripAndFormatHtml(parentCard.innerHTML).replace(/a[cç][oõ]es\s+realizadas:?/i, '').trim();
      if (rawText) {
        sections.push({
          id: 'acoes',
          title: 'Ações realizadas',
          content: rawText,
          htmlContent: contentEl ? contentEl.outerHTML : parentCard.innerHTML
        });
      }
    }

    // Procura Resultado
    const resultadoHeader = allDivs.find(d => /resultado:?/i.test(d.textContent || '') && !/sua\s+opini/i.test(d.textContent || ''));
    if (resultadoHeader) {
      const parentCard = resultadoHeader.parentElement || resultadoHeader;
      const contentEl = resultadoHeader.nextElementSibling || parentCard.querySelector('div:not(:first-child)');
      const rawText = contentEl ? stripAndFormatHtml(contentEl.innerHTML) : stripAndFormatHtml(parentCard.innerHTML).replace(/resultado:?/i, '').trim();
      if (rawText) {
        sections.push({
          id: 'resultado',
          title: 'Resultado',
          content: rawText,
          htmlContent: contentEl ? contentEl.outerHTML : parentCard.innerHTML
        });
      }
    }

    // Caso seja chamado escalonado:
    // Procura "A solicitação"
    const solicitacaoHeader = allDivs.find(d => /a\s+solicita[cç][aã]o:?/i.test(d.textContent || ''));
    if (solicitacaoHeader) {
      const rawText = stripAndFormatHtml(solicitacaoHeader.innerHTML).replace(/.*a\s+solicita[cç][aã]o:?/i, '').trim();
      if (rawText) {
        sections.push({
          id: 'solicitacao',
          title: 'A solicitação',
          content: rawText,
          htmlContent: solicitacaoHeader.innerHTML
        });
      }
    }

    // Procura "A tratativa"
    const tratativaHeader = allDivs.find(d => /a\s+tratativa/i.test(d.textContent || ''));
    if (tratativaHeader) {
      const parentCard = tratativaHeader.parentElement || tratativaHeader;
      const contentEl = tratativaHeader.nextElementSibling || parentCard.querySelector('div:not(:first-child)');
      const rawText = contentEl ? stripAndFormatHtml(contentEl.innerHTML) : stripAndFormatHtml(parentCard.innerHTML).replace(/a\s+tratativa/i, '').trim();
      if (rawText) {
        sections.push({
          id: 'tratativa',
          title: 'A tratativa',
          content: rawText,
          htmlContent: contentEl ? contentEl.outerHTML : parentCard.innerHTML
        });
      }
    }

    return sections;
  } catch (e) {
    console.error('Error parsing ticket html sections:', e);
    return [];
  }
}
