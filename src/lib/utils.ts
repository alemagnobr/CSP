import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Ticket } from "@/types";

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

  // Tentar extração para chamados de Escalonamento (A solicitação / A tratativa / Localização ou Dados do escalonamento)
  const solicitacaoRegex = /(?:^|\n)\s*(?:<b>|<strong>)?\s*A\s+solicita[cç][aã]o\s*:?\s*(?:<\/b>|<\/strong>)?\s*(?:&nbsp;)?\s*\n*([\s\S]*?)(?=(?:^|\n)\s*(?:<b>|<strong>|<u>)?\s*A\s+tratativa\s*:?|$)/i;
  const tratativaRegex = /(?:^|\n)\s*(?:<b>|<strong>|<u>)?\s*A\s+tratativa\s*:?\s*(?:<\/b>|<\/strong>|<\/u>)?\s*\n*([\s\S]*?)(?=(?:^|\n)\s*(?:<b>|<strong>|<u>)?\s*(?:Localiza[cç][aã]o|Dados\s+do\s+escalonamento)\s*:?|$)/i;
  const escalonamentoRegex = /(?:^|\n)\s*(?:<b>|<strong>|<u>)?\s*(?:Localiza[cç][aã]o|Dados\s+do\s+escalonamento)\s*:?\s*(?:<\/b>|<\/strong>|<\/u>)?\s*\n*([\s\S]*?)(?=(?:^|\n)\s*(?:Atenciosamente|--|<p>Atenciosamente|$))/i;

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
        htmlContent: tratContent.includes('•') || tratContent.includes('-')
          ? `<ul class="list-disc pl-4 space-y-1">${listItems}</ul>`
          : tratContent.split('\n').filter(Boolean).map(l => `<p class="mb-1">${l}</p>`).join('')
      });
    }

    if (escContent) {
      textSections.push({
        id: 'localizacao',
        title: 'Localização',
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

    // Se NÃO achou Análise técnica/Ações/Resultado, procura seções de Escalonamento (A solicitação / A tratativa / Localização)
    if (sections.length === 0) {
      const solEl = allElements.find(el => /a\s+solicita[cç][aã]o/i.test(el.textContent || ''));
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
              htmlContent: `<p class="mb-1">${text}</p>`
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
            htmlContent: nextSibling ? nextSibling.outerHTML : `<p class="mb-1">${text}</p>`
          });
        }
      }

      const locEl = allElements.find(el => {
        const txt = (el.textContent || '').trim().toLowerCase();
        return txt === 'localização' || txt === 'localizacao' || txt === 'dados do escalonamento';
      });
      if (locEl) {
        const card = locEl.closest('div');
        if (card) {
          const clone = card.cloneNode(true) as HTMLElement;
          const titleInClone = clone.querySelector('div, u, b, strong');
          if (titleInClone && /localiza[cç][aã]o|dados\s+do\s+escalonamento/i.test(titleInClone.textContent || '')) {
            titleInClone.remove();
          }
          const text = cleanSectionText(clone.innerHTML);
          if (text) {
            sections.push({
              id: 'localizacao',
              title: 'Localização',
              content: text,
              htmlContent: clone.innerHTML
            });
          }
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
 * Constrói o HTML de Escalonamento exatamente conforme o modelo padronizado:
 * - Cabeçalho: <!-- ENCAMINHAMENTO PARA ATENDIMENTO ESPECIALIZADO – MODELO PARA ATENDENTE -->
 * - Saudação e A solicitação
 * - CAIXA BASE com A tratativa e Localização (com campos e marcação de caixas de seleção)
 * - Assinatura do atendente do Nível 1
 */
export function buildEscalationTicketHtml(
  input: string | undefined | null,
  options?: {
    escalationDetails?: {
      setor?: string;
      edificio?: string;
      complemento?: string;
      pontoReferencia?: string;
      contato?: string;
      setorAbertoFechado?: 'Aberto' | 'Fechado' | '';
      local?: 'Teletrabalho' | 'Senado' | 'Externo' | '';
    };
    ticket?: Partial<Ticket>;
    analystName?: string;
    analystRamal?: string;
  }
): string {
  const raw = input || '';
  const sections = parseTicketHtmlSections(raw);

  // 1. Extrair "A solicitação"
  let solicitacao = '';
  const solSec = sections.find(s => s.id === 'solicitacao' || /solicita/i.test(s.title));
  if (solSec && solSec.content.trim()) {
    solicitacao = solSec.content.trim();
  } else {
    const solMatch = raw.match(/<strong>\s*A\s+solicita[cç][aã]o\s*<\/strong>\s*:?\s*(?:&nbsp;)?\s*([^\n<]+)/i) ||
                     raw.match(/A\s+solicita[cç][aã]o\s*:?\s*([^\n<]+)/i);
    if (solMatch && solMatch[1]?.trim()) {
      solicitacao = solMatch[1].trim();
    } else if (options?.ticket?.title?.trim()) {
      solicitacao = options.ticket.title.trim();
    } else if (options?.ticket?.description?.trim()) {
      solicitacao = options.ticket.description.trim().split('\n')[0].trim();
    } else {
      solicitacao = 'Micro não liga';
    }
  }

  // 2. Extrair "A tratativa"
  let tratativa = '';
  const tratSec = sections.find(s => s.id === 'tratativa' || /tratativa/i.test(s.title));
  if (tratSec && tratSec.content.trim()) {
    const lines = tratSec.content.split('\n').map(l => l.trim()).filter(Boolean);
    tratativa = lines.join('<br />\n');
  } else {
    const tratMatch = raw.match(/<u>\s*A\s+tratativa\s*<\/u>[\s\S]*?<div>([\s\S]*?)<\/div>/i) ||
                      raw.match(/A\s+tratativa\s*:?\s*([\s\S]*?)(?=(?:Localiza[cç][aã]o|Dados\s+do\s+escalonamento|<div style="border:1px solid #e5e7eb|<!-- LOCALIZAÇÃO|$))/i);
    if (tratMatch && tratMatch[1]?.trim()) {
      tratativa = stripAndFormatHtml(tratMatch[1]).split('\n').map(l => l.trim()).filter(Boolean).join('<br />\n');
    } else {
      tratativa = 'Após tratativas realizadas pelo analista de Nível 1, verificou-se a necessidade de atendimento especializado para solução do chamado.';
    }
  }

  // 3. Extrair dados de Localização
  const extractLocField = (fieldPattern: string): string => {
    const regex = new RegExp(`(?:<div>)?\\s*(?:•\\s*)?${fieldPattern}\\s*:\\s*(?:&nbsp;)?\\s*([^\\n<]+)`, 'i');
    const m = raw.match(regex);
    return m ? m[1].replace(/&nbsp;/g, ' ').trim() : '';
  };

  const escDetails = options?.escalationDetails || options?.ticket?.escalationDetails;

  const setor = escDetails?.setor ?? extractLocField('Setor') ?? '';
  const edificio = escDetails?.edificio ?? extractLocField('Edif[íi]cio|Edificio') ?? '';
  const complemento = escDetails?.complemento ?? extractLocField('Complemento') ?? '';
  const pontoReferencia = escDetails?.pontoReferencia ?? extractLocField('Ponto\\s+de\\s+refer[êe]ncia|Ponto\\s+de\\s+referencia') ?? '';
  const contato = escDetails?.contato ?? extractLocField('Contato') ?? '';

  // Checkboxes Setor
  const isAberto = escDetails?.setorAbertoFechado === 'Aberto' || /\(\s*[xX]\s*\)\s*Aberto/i.test(raw);
  const isFechado = escDetails?.setorAbertoFechado === 'Fechado' || /\(\s*[xX]\s*\)\s*Fechado/i.test(raw);

  // Checkboxes Local
  const isTele = escDetails?.local === 'Teletrabalho' || /\(\s*[xX]\s*\)\s*Teletrabalho/i.test(raw);
  const isSenado = escDetails?.local === 'Senado' || /\(\s*[xX]\s*\)\s*Senado/i.test(raw);
  const isExterno = escDetails?.local === 'Externo' || /\(\s*[xX]\s*\)\s*Externo/i.test(raw);

  // Atendente
  const analystName = options?.analystName || options?.ticket?.user?.name || 'Alexandre Magno dos Santos Linhares';
  const analystRamal = options?.analystRamal || '(61) 3303- 2000';

  return `<!-- ENCAMINHAMENTO PARA ATENDIMENTO ESPECIALIZADO – MODELO PARA ATENDENTE -->
<div style="font-family:Arial,Helvetica,sans-serif; font-size:12px; color:#111827"><!-- TEXTO INICIAL -->
<div style="font-size:12px; color:#000000; margin-bottom:8px"><strong>Prezados,</strong><br />
<br />
<strong>A solicitação</strong>:&nbsp;${solicitacao}</div>
<!-- CAIXA BASE -->

<div style="border:1px solid #e5e7eb; border-radius:10px; padding:10px 14px; background:#fafafa; margin-top:10px; margin-right:0; margin-bottom:10px; margin-left:0"><!-- ATENDIMENTO ESPECIALIZADO -->
<div style="border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; margin-bottom:8px; background:#ffffff">
<div style="font-weight:bold; margin-bottom:4px"><u>A tratativa</u></div>

<div>${tratativa}</div>
</div>
<!-- LOCALIZAÇÃO -->

<div style="border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; background:#ffffff">
<div style="font-weight:bold; margin-bottom:4px"><u>Localização</u></div>

<div>Setor:&nbsp;${setor}</div>

<div>Edifício:&nbsp;${edificio}</div>

<div>Complemento:&nbsp;${complemento}</div>

<div>Ponto de referência:&nbsp;${pontoReferencia}</div>

<div>Contato:&nbsp;${contato}</div>

<div style="margin-top:6px">Setor:&nbsp; (${isAberto ? 'X' : ' '}) Aberto &nbsp;&nbsp; (${isFechado ? 'X' : ' '}) Fechado</div>

<div style="margin-top:4px">Local:&nbsp; (${isTele ? 'X' : ' '}) Teletrabalho &nbsp;&nbsp; (${isSenado ? 'X' : ' '}) Senado &nbsp;&nbsp; (${isExterno ? 'X' : ' '}) Externo</div>
</div>
</div>
<!-- /CAIXA BASE -->

<p>Atenciosamente,</p>

<p>--<br />
<strong><em>${analystName}</em></strong><br />
<em>Analista de Suporte Junior<br />
Senado Federal | PRODASEN | COATEN | SEARP<br />
Ramal: ${analystRamal}</em></p>
</div>`.trim();
}

/**
 * Constrói o texto do chamado de Instalação Padrão (Formatar Micro) exatamente
 * no modelo padronizado em texto puro (sem HTML):
 * 
 * Prezados,
 * 
 * A solicitação: ...
 * A tratativa: ...
 * 
 * Motivo da solicitação:
 * (x) Lentidão
 * ( ) Troca de micro
 * (x) Outros: ...
 * 
 * Autorização do chefe do setor:
 * (x) Sim
 * ( ) Não
 * 
 * Outros clientes utilizam o micro:
 * ( ) Sim
 * (x) Não
 * 
 * Necessita de backup:
 * (x) Sim
 * ( ) Não
 * 
 * Localização
 * ***********
 * Setor: ...
 * Edifício: ...
 * Complemento: ...
 * Ponto de referência: ...
 * Contato: ...
 * Setor aberto (x) ou fechado ( ) 
 * Em teletrabalho ( ) ou no Senado (x)
 */
export function buildFormatMicroTicketText(
  input: string | undefined | null,
  options?: {
    formatMicroDetails?: {
      motivo?: 'Lentidão' | 'Troca de micro' | 'Outros' | '';
      motivoLentidao?: boolean;
      motivoTrocaMicro?: boolean;
      motivoOutrosCheck?: boolean;
      motivoOutros?: string;
      autorizacaoChefe?: 'Sim' | 'Não' | '';
      outrosClientes?: 'Sim' | 'Não' | '';
      necessitaBackup?: 'Sim' | 'Não' | '';
    };
    escalationDetails?: {
      setor?: string;
      edificio?: string;
      complemento?: string;
      pontoReferencia?: string;
      contato?: string;
      setorAbertoFechado?: 'Aberto' | 'Fechado' | '';
      local?: 'Teletrabalho' | 'Senado' | 'Externo' | '';
    };
    ticket?: Partial<Ticket>;
  }
): string {
  const raw = (input || '').trim();
  const details = options?.formatMicroDetails || options?.ticket?.formatMicroDetails;
  const escDetails = options?.escalationDetails || options?.ticket?.escalationDetails;

  // Se já contiver as marcações clássicas do template de instalação padrão
  if (
    raw.includes('Prezados,') &&
    raw.includes('A solicitação:') &&
    raw.includes('Motivo da solicitação:') &&
    raw.includes('Localização')
  ) {
    return raw;
  }

  // 1. Extrair Solicitação
  let solicitacao = '';
  const solMatch = raw.match(/A\s+solicita[cç][aã]o\s*:?\s*([^\n]+)/i);
  if (solMatch && solMatch[1]?.trim()) {
    solicitacao = solMatch[1].trim();
  } else if (options?.ticket?.title?.trim()) {
    solicitacao = options.ticket.title.trim();
  } else if (options?.ticket?.description?.trim()) {
    solicitacao = options.ticket.description.trim().split('\n')[0].trim();
  } else {
    solicitacao = 'Usuário solicita instalação padrão do equipamento. Sistema com erros graves';
  }

  // 2. Extrair Tratativa
  let tratativa = '';
  const tratMatch = raw.match(/A\s+tratativa\s*:?\s*([^\n]+(?:\n[^\n]+)?)/i);
  if (tratMatch && tratMatch[1]?.trim()) {
    tratativa = tratMatch[1].trim();
  } else {
    tratativa = 'Foi realizado o checklist de informações.';
  }

  // 3. Motivos
  const isLentidao = !!details?.motivoLentidao || details?.motivo === 'Lentidão' || /\(\s*[xX]\s*\)\s*Lentid[aã]o/i.test(raw);
  const isTrocaMicro = !!details?.motivoTrocaMicro || details?.motivo === 'Troca de micro' || /\(\s*[xX]\s*\)\s*Troca\s+de\s+micro/i.test(raw);
  const isOutros = !!details?.motivoOutrosCheck || details?.motivo === 'Outros' || !!details?.motivoOutros || /\(\s*[xX]\s*\)\s*Outros/i.test(raw);

  let motivoOutrosTexto = details?.motivoOutros || '';
  if (!motivoOutrosTexto) {
    const outrosMatch = raw.match(/\(\s*[xX]\s*\)\s*Outros\s*:\s*([^\n]+)/i);
    if (outrosMatch && outrosMatch[1]) {
      motivoOutrosTexto = outrosMatch[1].trim();
    }
  }

  // 4. Checklist Chefia, Outros clientes, Backup
  const isChefeSim = details?.autorizacaoChefe === 'Sim' || /Autoriza[cç][aã]o[\s\S]*?\(\s*[xX]\s*\)\s*Sim/i.test(raw);
  const isChefeNao = details?.autorizacaoChefe === 'Não' || /Autoriza[cç][aã]o[\s\S]*?\(\s*[xX]\s*\)\s*N[aã]o/i.test(raw);

  const isOutrosClientesSim = details?.outrosClientes === 'Sim' || /Outros\s+clientes[\s\S]*?\(\s*[xX]\s*\)\s*Sim/i.test(raw);
  const isOutrosClientesNao = details?.outrosClientes === 'Não' || /Outros\s+clientes[\s\S]*?\(\s*[xX]\s*\)\s*N[aã]o/i.test(raw) || (!isOutrosClientesSim && !!details?.outrosClientes);

  const isBackupSim = details?.necessitaBackup === 'Sim' || /backup[\s\S]*?\(\s*[xX]\s*\)\s*Sim/i.test(raw);
  const isBackupNao = details?.necessitaBackup === 'Não' || /backup[\s\S]*?\(\s*[xX]\s*\)\s*N[aã]o/i.test(raw);

  // 5. Localização
  const extractLocField = (fieldPattern: string): string => {
    const regex = new RegExp(`(?:•\\s*)?${fieldPattern}\\s*:\\s*(?:&nbsp;)?\\s*([^\\n<]+)`, 'i');
    const m = raw.match(regex);
    return m ? m[1].replace(/&nbsp;/g, ' ').trim() : '';
  };

  const setor = escDetails?.setor || extractLocField('Setor') || '';
  const edificio = escDetails?.edificio || extractLocField('Edif[íi]cio|Edificio') || '';
  const complemento = escDetails?.complemento || extractLocField('Complemento') || '';
  const pontoReferencia = escDetails?.pontoReferencia || extractLocField('Ponto\\s+de\\s+refer[êe]ncia|Ponto\\s+de\\s+referencia') || '';
  const contato = escDetails?.contato || extractLocField('Contato') || '';

  const isSetorAberto = escDetails?.setorAbertoFechado === 'Aberto' || /Setor\s+aberto\s*\(\s*[xX]\s*\)/i.test(raw);
  const isSetorFechado = escDetails?.setorAbertoFechado === 'Fechado' || /fechado\s*\(\s*[xX]\s*\)/i.test(raw);

  const isTele = escDetails?.local === 'Teletrabalho' || /teletrabalho\s*\(\s*[xX]\s*\)/i.test(raw);
  const isSenado = escDetails?.local === 'Senado' || /no\s+Senado\s*\(\s*[xX]\s*\)/i.test(raw);
  const isExterno = escDetails?.local === 'Externo' || /Externo\s*\(\s*[xX]\s*\)/i.test(raw);

  const localLinha = isExterno
    ? `Em teletrabalho ( ) ou no Senado ( ) ou Externo (x)`
    : `Em teletrabalho (${isTele ? 'x' : ' '}) ou no Senado (${isSenado ? 'x' : ' '})`;

  return `Prezados,

A solicitação: ${solicitacao}
A tratativa: ${tratativa}

Motivo da solicitação:
(${isLentidao ? 'x' : ' '}) Lentidão
(${isTrocaMicro ? 'x' : ' '}) Troca de micro
(${isOutros ? 'x' : ' '}) Outros${motivoOutrosTexto ? `: ${motivoOutrosTexto}` : ''}

Autorização do chefe do setor:
(${isChefeSim ? 'x' : ' '}) Sim
(${isChefeNao ? 'x' : ' '}) Não

Outros clientes utilizam o micro:
(${isOutrosClientesSim ? 'x' : ' '}) Sim
(${isOutrosClientesNao ? 'x' : ' '}) Não

Necessita de backup:
(${isBackupSim ? 'x' : ' '}) Sim
(${isBackupNao ? 'x' : ' '}) Não

Localização
***********
Setor: ${setor}
Edifício: ${edificio}
Complemento: ${complemento}
Ponto de referência: ${pontoReferencia}
Contato: ${contato}
Setor aberto (${isSetorAberto ? 'x' : ' '}) ou fechado (${isSetorFechado ? 'x' : ' '}) 
${localLinha}`.trim();
}

/**
 * Constrói o HTML exatamente conforme o modelo padronizado exigido:
 * - Se for instalação padrão (formatar micro), gera exatamente o modelo em texto puro sem HTML.
 * - Se for chamado de escalonamento, gera exatamente o modelo de Encaminhamento para Atendimento Especializado.
 * - Se for chamado padrão/resolução, gera o contêiner cinza com caixas brancas e nota de pesquisa de satisfação.
 */
export function buildStandardTicketHtml(
  input: string | undefined | null,
  options?: {
    includeSatisfaction?: boolean;
    isEscalated?: boolean;
    isFormatMicro?: boolean;
    formatMicroDetails?: any;
    escalationDetails?: {
      setor?: string;
      edificio?: string;
      complemento?: string;
      pontoReferencia?: string;
      contato?: string;
      setorAbertoFechado?: 'Aberto' | 'Fechado' | '';
      local?: 'Teletrabalho' | 'Senado' | 'Externo' | '';
    };
    ticket?: Partial<Ticket>;
    analystName?: string;
    analystRamal?: string;
  }
): string {
  if (!input || !input.trim()) return '';

  const isFormatMicro = options?.isFormatMicro ||
    options?.ticket?.isFormatMicro ||
    /Motivo da solicita[cç][aã]o:[\s\S]*?Localiza[cç][aã]o/i.test(input) ||
    (input.includes('Prezados,') && input.includes('Necessita de backup:'));

  if (isFormatMicro) {
    return buildFormatMicroTicketText(input, options);
  }

  const isEscalation = options?.isEscalated ||
    options?.ticket?.isEscalated ||
    /<!--\s*ENCAMINHAMENTO PARA ATENDIMENTO ESPECIALIZADO/i.test(input) ||
    /ENCAMINHAMENTO PARA ATENDIMENTO ESPECIALIZADO/i.test(input) ||
    (/(?:a\s+solicita[cç][aã]o)/i.test(input) && /(?:a\s+tratativa)/i.test(input));

  if (isEscalation) {
    return buildEscalationTicketHtml(input, options);
  }

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

      if (lowerId === 'localizacao' || lowerId === 'escalonamento' || lowerTitle.includes('localização') || lowerTitle.includes('escalonamento')) {
        const hasBullets = sec.content.includes('•') || sec.content.includes('-');
        const inner = hasBullets ? formatListItems(sec.content) : formatParagraphs(sec.content);
        return `<!-- LOCALIZAÇÃO -->\n<div style="border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; margin-bottom:8px; background:#ffffff">\n<div style="font-weight:bold; margin-bottom:4px">${sec.title}:</div>\n\n${inner}\n</div>`;
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
  const plainText = plainTextFallback !== undefined ? plainTextFallback : stripAndFormatHtml(htmlContent);

  // Método 1: Clipboard API com ClipboardItem (moderno, suportado pela maioria dos browsers)
  if (typeof ClipboardItem !== 'undefined' && navigator.clipboard && navigator.clipboard.write) {
    try {
      const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
      const textBlob = new Blob([plainText], { type: 'text/plain' });
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': htmlBlob,
          'text/plain': textBlob,
        })
      ]);
      return true;
    } catch (err) {
      console.warn('ClipboardItem write failed, trying fallback methods:', err);
    }
  }

  // Método 2: Evento 'copy' sintético com DataTransfer (excelente para navegadores que bloqueiam ClipboardItem text/html em iframes)
  try {
    let success = false;
    const listener = (e: ClipboardEvent) => {
      e.preventDefault();
      if (e.clipboardData) {
        e.clipboardData.setData('text/html', htmlContent);
        e.clipboardData.setData('text/plain', plainText);
        success = true;
      }
    };

    document.addEventListener('copy', listener);
    try {
      document.execCommand('copy');
    } finally {
      document.removeEventListener('copy', listener);
    }

    if (success) {
      return true;
    }
  } catch (err) {
    console.warn('Synthetic copy event failed:', err);
  }

  // Método 3: Criar um container temporário no DOM, selecionar o conteúdo HTML renderizado e executar execCommand
  try {
    const container = document.createElement('div');
    container.setAttribute('contenteditable', 'true');
    container.style.position = 'fixed';
    container.style.pointerEvents = 'none';
    container.style.opacity = '0';
    container.style.left = '-9999px';
    container.style.top = '0';
    container.innerHTML = htmlContent;
    document.body.appendChild(container);

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(container);

    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
      const copied = document.execCommand('copy');
      selection.removeAllRanges();
      document.body.removeChild(container);
      if (copied) {
        return true;
      }
    } else {
      document.body.removeChild(container);
    }
  } catch (err) {
    console.warn('DOM selection copy fallback failed:', err);
  }

  // Método 4: Fallback final para texto puro / código HTML
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(htmlContent);
      return true;
    }
  } catch (e) {
    console.error('Final fallback copy failed:', e);
  }

  return false;
}

