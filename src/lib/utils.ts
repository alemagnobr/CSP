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
  const acoesRegex = /(?:^|\n)\s*(?:<b>|<strong>)?\s*A[cç][oõ]es\s+realizadas\s*:?\s*(?:<\/b>|<\/strong>)?\s*\n*([\s\S]*?)(?=(?:^|\n)\s*(?:<b>|<strong>)?\s*(?:Dados\s+da\s+instala[cç][aã]o\s+padr[aã]o|Resultado)\s*:?|$)/i;
  const instalacaoRegex = /(?:^|\n)\s*(?:<b>|<strong>)?\s*Dados\s+da\s+instala[cç][aã]o\s+padr[aã]o\s*:?\s*(?:<\/b>|<\/strong>)?\s*\n*([\s\S]*?)(?=(?:^|\n)\s*(?:<b>|<strong>)?\s*Resultado\s*:?|$)/i;
  const resultadoRegex = /(?:^|\n)\s*(?:<b>|<strong>)?\s*Resultado\s*:?\s*(?:<\/b>|<\/strong>)?\s*\n*([\s\S]*?)$/i;

  const analiseMatch = rawTrimmed.match(analiseRegex);
  const acoesMatch = rawTrimmed.match(acoesRegex);
  const instalacaoMatch = rawTrimmed.match(instalacaoRegex);
  const resultadoMatch = rawTrimmed.match(resultadoRegex);

  if (analiseMatch && acoesMatch) {
    const textSections: ParsedTicketSection[] = [];
    const analiseContent = cleanSectionText(analiseMatch[1]);
    const acoesContent = cleanSectionText(acoesMatch[1]);
    const instalacaoContent = instalacaoMatch ? cleanSectionText(instalacaoMatch[1]) : '';
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
      const listItems = acoesContent.split('\n').map(l => l.trim()).filter(Boolean).map(l => {
        const cleaned = l.replace(/^(?:[•\-\*]|\d+[\.\-\)])\s*/, '').trim();
        return `<li class="ml-4 list-disc mb-1">${cleaned || l}</li>`;
      }).join('');

      textSections.push({
        id: 'acoes',
        title: 'Ações realizadas',
        content: acoesContent,
        htmlContent: `<ul class="list-disc pl-4 space-y-1">${listItems}</ul>`
      });
    }

    if (instalacaoContent) {
      textSections.push({
        id: 'instalacao',
        title: 'Dados da instalação padrão',
        content: instalacaoContent,
        htmlContent: instalacaoContent.split('\n').filter(Boolean).map(l => `<p class="mb-1">${l}</p>`).join('')
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

  // Tentar extração para chamados de Escalonamento (A solicitação / A tratativa / Dados do escalonamento)
  const solicitacaoRegex = /(?:^|\n)\s*(?:<b>|<strong>)?\s*A\s+solicita[cç][aã]o\s*:?\s*(?:<\/b>|<\/strong>)?\s*\n*([\s\S]*?)(?=(?:^|\n)\s*(?:<b>|<strong>)?\s*A\s+tratativa\s*:?|$)/i;
  const tratativaRegex = /(?:^|\n)\s*(?:<b>|<strong>)?\s*A\s+tratativa\s*:?\s*(?:<\/b>|<\/strong>)?\s*\n*([\s\S]*?)(?=(?:^|\n)\s*(?:<b>|<strong>)?\s*Dados\s+do\s+escalonamento\s*:?|$)/i;
  const escalonamentoRegex = /(?:^|\n)\s*(?:<b>|<strong>)?\s*Dados\s+do\s+escalonamento\s*:?\s*(?:<\/b>|<\/strong>)?\s*\n*([\s\S]*?)$/i;

  const solMatch = rawTrimmed.match(solicitacaoRegex);
  const tratMatch = rawTrimmed.match(tratativaRegex);
  const escMatch = rawTrimmed.match(escalonamentoRegex);

  if (solMatch && tratMatch) {
    const textSections: ParsedTicketSection[] = [];
    const solContent = cleanSectionText(solMatch[1]);
    const tratContent = cleanSectionText(tratMatch[1]);
    const escContent = escMatch ? cleanSectionText(escMatch[1]) : '';

    if (solContent) {
      textSections.push({
        id: 'solicitacao',
        title: 'A solicitação',
        content: solContent,
        htmlContent: solContent.split('\n').filter(Boolean).map(l => `<p class="mb-1">${l}</p>`).join('')
      });
    }

    if (tratContent) {
      const listItems = tratContent.split('\n').map(l => l.trim()).filter(Boolean).map(l => {
        const cleaned = l.replace(/^(?:[•\-\*]|\d+[\.\-\)])\s*/, '').trim();
        return `<li class="ml-4 list-disc mb-1">${cleaned || l}</li>`;
      }).join('');

      textSections.push({
        id: 'tratativa',
        title: 'A tratativa',
        content: tratContent,
        htmlContent: `<ul class="list-disc pl-4 space-y-1">${listItems}</ul>`
      });
    }

    if (escContent) {
      textSections.push({
        id: 'escalonamento',
        title: 'Dados do escalonamento',
        content: escContent,
        htmlContent: escContent.split('\n').filter(Boolean).map(l => `<p class="mb-1">${l}</p>`).join('')
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

/**
 * Constrói o HTML exatamente conforme o modelo padronizado exigido:
 * - Contêiner externo cinza (#fafafa) com borda arredondada e fonte Arial 12px
 * - Cada bloco em cartão branco (#ffffff) com borda arredondada de 10px
 * - Análise técnica com quebras de linha (<br />)
 * - Ações realizadas com lista não-ordenada <ul><li>...</li></ul>
 * - Resultado com validações
 * - Cartão âmbar com nota sobre pesquisa de satisfação
 */
export function buildStandardTicketHtml(input: string | undefined | null, options?: { includeSatisfaction?: boolean }): string {
  if (!input || !input.trim()) return '';

  const includeSatisfaction = options?.includeSatisfaction ?? true;
  const sections = parseTicketHtmlSections(input);

  const formatParagraphs = (content: string): string => {
    const lines = content.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length === 0) return '<div>&nbsp;</div>';
    return `<div>${lines.join('<br />\n')}\n&nbsp;</div>`;
  };

  const formatListItems = (content: string): string => {
    const rawLines = content.split('\n').map(l => l.trim()).filter(Boolean);
    if (rawLines.length === 0) {
      return '<ul>\n\t<li>&nbsp;</li>\n</ul>';
    }

    const items = rawLines.map(line => {
      const cleaned = line.replace(/^(?:[•\-\*]|\d+[\.\-\)])\s*/, '').trim();
      return `\t<li>${cleaned || line}</li>`;
    });

    return `<ul>\n${items.join('\n')}\n</ul>`;
  };

  let cardsHtml = '';

  if (sections.length > 0) {
    cardsHtml = sections.map(sec => {
      const lowerId = sec.id.toLowerCase();
      const lowerTitle = sec.title.toLowerCase();

      if (lowerId === 'acoes' || lowerTitle.includes('ações') || lowerTitle.includes('acoes')) {
        return `<!-- AÇÕES REALIZADAS -->\n<div style="border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; margin-bottom:8px; background:#ffffff">\n<div style="font-weight:bold; margin-bottom:4px">${sec.title}:</div>\n\n${formatListItems(sec.content)}\n</div>`;
      }

      if (lowerId === 'resultado' || lowerTitle.includes('resultado')) {
        return `<!-- RESULTADO -->\n<div style="border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; margin-bottom:8px; background:#ffffff">\n<div style="font-weight:bold; margin-bottom:4px">${sec.title}:</div>\n\n${formatParagraphs(sec.content)}\n</div>`;
      }

      if (lowerId === 'instalacao' || lowerTitle.includes('instalação') || lowerTitle.includes('instalacao')) {
        const hasBullets = sec.content.includes('•') || sec.content.includes('-');
        const inner = hasBullets ? formatListItems(sec.content) : formatParagraphs(sec.content);
        return `<!-- DADOS DA INSTALAÇÃO PADRÃO -->\n<div style="border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; margin-bottom:8px; background:#ffffff">\n<div style="font-weight:bold; margin-bottom:4px">${sec.title}:</div>\n\n${inner}\n</div>`;
      }

      if (lowerId === 'tratativa' || lowerTitle.includes('tratativa')) {
        const hasBullets = sec.content.includes('•') || sec.content.includes('-');
        const inner = hasBullets ? formatListItems(sec.content) : formatParagraphs(sec.content);
        return `<!-- A TRATATIVA -->\n<div style="border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; margin-bottom:8px; background:#ffffff">\n<div style="font-weight:bold; margin-bottom:4px">${sec.title}:</div>\n\n${inner}\n</div>`;
      }

      if (lowerId === 'escalonamento' || lowerTitle.includes('escalonamento')) {
        const hasBullets = sec.content.includes('•') || sec.content.includes('-');
        const inner = hasBullets ? formatListItems(sec.content) : formatParagraphs(sec.content);
        return `<!-- DADOS DO ESCALONAMENTO -->\n<div style="border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; margin-bottom:8px; background:#ffffff">\n<div style="font-weight:bold; margin-bottom:4px">${sec.title}:</div>\n\n${inner}\n</div>`;
      }

      return `<div style="border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; margin-bottom:8px; background:#ffffff">\n<div style="font-weight:bold; margin-bottom:4px">${sec.title}:</div>\n\n${formatParagraphs(sec.content)}\n</div>`;
    }).join('\n');
  } else {
    cardsHtml = `<div style="border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; margin-bottom:8px; background:#ffffff">\n${formatParagraphs(input)}\n</div>`;
  }

  const satisfactionNote = includeSatisfaction ? `<!-- NOTA SOBRE PESQUISA DE SATISFAÇÃO -->\n<div style="border:1px solid #f59e0b; border-radius:10px; padding:10px 12px; background:#fffbeb; color:#92400e">\n<div style="font-weight:bold; margin-bottom:4px">Sua opinião é importante!</div>\n\n<div>Após o fechamento deste chamado, <em><u>você receberá um novo e-mail com um link para a pesquisa de satisfação</u></em>. Sua participação é muito importante para melhorarmos continuamente nosso atendimento.<br />\n<br />\nMuito obrigado!</div>\n</div>` : '';

  return `<div style="font-family:Arial,Helvetica,sans-serif; font-size:12px; color:#111827">
<div style="font-size:12px">
<div style="border:1px solid #e5e7eb; border-radius:10px; padding:10px 14px; background:#fafafa; margin-top:10px; margin-right:0; margin-bottom:10px; margin-left:0">
${cardsHtml}
${satisfactionNote}
</div>
</div>
</div>`.trim();
}

/**
 * Escreve código HTML no clipboard como text/html e text/plain,
 * garantindo compatibilidade total com editores visuais (TinyMCE, CKEditor, GLPI, Zendesk)
 * e também com editores de código e áreas de texto puro.
 */
export async function copyHtmlToClipboard(htmlContent: string, plainTextFallback?: string): Promise<boolean> {
  const plainText = plainTextFallback !== undefined ? plainTextFallback : htmlContent;
  
  try {
    if (typeof ClipboardItem !== 'undefined' && navigator.clipboard && navigator.clipboard.write) {
      const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
      const textBlob = new Blob([plainText], { type: 'text/plain' });
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': htmlBlob,
          'text/plain': textBlob,
        })
      ]);
      return true;
    }
  } catch (err) {
    console.warn('ClipboardItem write failed, fallback to writeText:', err);
  }

  try {
    await navigator.clipboard.writeText(htmlContent);
    return true;
  } catch (e) {
    console.error('Failed to copy to clipboard:', e);
    return false;
  }
}

