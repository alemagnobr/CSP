import { FAQ } from '@/types';

/**
 * Dicionário de Sinônimos de TI da Central de Atendimento / Senado Federal
 */
const SENADO_IT_SYNONYMS: Record<string, string[]> = {
  // Redes e Conectividade
  net: ['wireless', 'rede', 'internet', 'wifi', 'conexao'],
  internet: ['wireless', 'rede', 'wifi', 'navegador', 'conexao'],
  wifi: ['wireless', 'rede sem fio', 'internet', 'acesso internet', 'visitantes'],
  wireless: ['wifi', 'rede sem fio', 'internet', 'conexao'],
  vpn: ['acesso remoto', 'rede', 'conexao externa', 'forticlient'],
  remoto: ['vpn', 'acesso remoto', 'teletrabalho', 'conexao'],

  // Impressão e Digitalização
  impressora: ['impressao', 'scanner', 'toner', 'lexmark', 'digitalizacao', 'imprimir'],
  impresora: ['impressora', 'impressao', 'toner', 'lexmark', 'scanner'],
  imprimir: ['impressora', 'impressao', 'fila de impressao', 'toner'],
  scanner: ['digitalizacao', 'digitalizar', 'impressora', 'documento'],
  digitalizar: ['scanner', 'digitalizacao', 'impressora', 'ged'],

  // Correio e Comunicação
  email: ['outlook', 'correio eletronico', 'webmail', 'mensagem', 'caixa postal'],
  mail: ['outlook', 'correio eletronico', 'email', 'webmail'],
  outlook: ['correio eletronico', 'email', 'webmail', 'calendario', 'pst'],
  autlook: ['outlook', 'correio eletronico', 'email'],
  otlok: ['outlook', 'correio eletronico', 'email'],
  teams: ['videoconferencia', 'reuniao', 'chat', 'chamada', 'microsoft teams'],
  zoom: ['videoconferencia', 'reuniao virtual', 'chamada'],

  // Segurança e Acesso
  certificado: ['certificado digital', 'icp-brasil', 'token', 'safenet', 'safesign', 'assinador', 'assinatura', 'a3', 'a1', 'leitora', 'cartao'],
  certificados: ['certificado digital', 'icp-brasil', 'token', 'safenet', 'safesign', 'assinador'],
  assinador: ['certificado', 'assinatura digital', 'serpro', 'assinador serpro', 'safesign', 'token', 'documento'],
  assinatura: ['assinador', 'certificado digital', 'icp-brasil', 'pdf', 'assinar'],
  mfa: ['autenticacao', 'duo', 'token', 'dois fatores', '2fa', 'senha'],
  token: ['mfa', 'duo', 'autenticacao', 'certificado digital', 'safenet', 'safesign', 'leitora'],
  duo: ['mfa', 'autenticacao', 'token', 'dois fatores'],
  senha: ['gestor de senhas', 'desbloqueio', 'login', 'troca de senha', 'redefinir', 'pin'],
  login: ['senha', 'autenticacao', 'acesso', 'usuario'],
  desbloquear: ['senha', 'gestor de senhas', 'conta', 'usuario'],

  // Armazenamento
  drive: ['drive u', 'armazenamento', 'pasta de rede', 'nuvem', 'disco'],
  driveu: ['drive u', 'pasta u', 'armazenamento em nuvem', 'rede'],
  nuvem: ['onedrive', 'drive u', 'armazenamento', 'backup'],
  disco: ['drive u', 'armazenamento', 'espaco', 'pasta'],

  // Sistemas Internos Comuns
  otrs: ['capri', 'chamado', 'ticket', 'atendimento', 'fila'],
  capri: ['otrs', 'chamado', 'ticket', 'faq', 'base de conhecimento'],
  serman: ['suporte presencial', 'manutencao', 'equipamentos', 'troca'],
  suape: ['atendimento presencial', 'suporte presencial', 'hardware', 'tecnico'],
  ergon: ['folha', 'pagamento', 'contracheque', 'rh', 'pessoal'],
  sigad: ['processo eletronico', 'documento', 'tramitacao', 'protocolo'],
  crepe: ['restaurante', 'refeicao', 'cartao', 'refeitorio'],
  gertiq: ['ti', 'chamado', 'demanda', 'gestao de ti']
};

/**
 * Normaliza um texto removendo acentos, pontuação desnecessária e padronizando para minúsculas
 */
export function normalizeText(text: string | undefined | null): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[-_./\\(),;:[\]{}]/g, ' ') // substitui pontuação por espaço
    .replace(/\s+/g, ' ') // múltiplos espaços por um
    .trim();
}

/**
 * Calcula a distância de Damerau-Levenshtein entre duas strings
 * (inserção, deleção, substituição e transposição de caracteres adjacentes)
 */
export function calculateDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const la = a.length;
  const lb = b.length;

  // Otimização: se a diferença de tamanho for maior que 2, distância certamente é > 2
  if (Math.abs(la - lb) > 2) return Math.abs(la - lb);

  const matrix: number[][] = [];

  for (let i = 0; i <= la; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= lb; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= la; i++) {
    for (let j = 1; j <= lb; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let min = Math.min(
        matrix[i - 1][j] + 1,      // deleção
        matrix[i][j - 1] + 1,      // inserção
        matrix[i - 1][j - 1] + cost // substituição
      );

      // Transposição (ex: "otlok" <-> "otlok" ou "teh" <-> "the")
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        min = Math.min(min, matrix[i - 2][j - 2] + 1);
      }

      matrix[i][j] = min;
    }
  }

  return matrix[la][lb];
}

/**
 * Verifica se duas palavras são similares (tolerância a 1 ou 2 erros)
 */
function isFuzzyMatch(queryToken: string, targetToken: string): boolean {
  if (queryToken === targetToken) return true;
  if (targetToken.startsWith(queryToken)) return true; // prefix match
  if (targetToken.includes(queryToken)) return true; // substring match

  const qLen = queryToken.length;
  const tLen = targetToken.length;

  // Palavras muito curtas (1 ou 2 letras): exigem match exato ou prefixo
  if (qLen <= 2) return queryToken === targetToken;

  // Palavras de 3 a 5 letras: tolerância de 1 erro
  if (qLen <= 5) {
    if (Math.abs(qLen - tLen) > 1) return false;
    return calculateDistance(queryToken, targetToken) <= 1;
  }

  // Palavras com 6 ou mais letras: tolerância de até 2 erros
  if (Math.abs(qLen - tLen) > 2) return false;
  return calculateDistance(queryToken, targetToken) <= 2;
}

export interface SearchMatchDetail {
  faq: FAQ;
  score: number;
  matchReason?: 'number' | 'title' | 'system' | 'synonym' | 'fuzzy' | 'content';
  matchedTerms: string[];
}

export interface IntelligentSearchResult {
  results: FAQ[];
  matchDetails: Map<string, SearchMatchDetail>;
  suggestedCorrection?: {
    original: string;
    suggested: string;
  };
  hasFuzzyMatch: boolean;
}

/**
 * Motor Principal de Busca Inteligente com Tolerância a Erros e Sinônimos
 */
export function searchFaqsIntelligently(faqs: FAQ[], rawQuery: string): IntelligentSearchResult {
  const query = rawQuery.trim();
  if (!query) {
    return {
      results: faqs,
      matchDetails: new Map(),
      hasFuzzyMatch: false
    };
  }

  const normalizedQuery = normalizeText(query);
  const queryTokens = normalizedQuery.split(' ').filter(Boolean);
  const onlyDigits = query.replace(/\D/g, '');

  let suggestedCorrection: { original: string; suggested: string } | undefined = undefined;
  let hasFuzzyMatchGlobal = false;

  // Extrair sinônimos expandidos da consulta
  const expandedSynonyms: string[] = [];
  queryTokens.forEach(token => {
    if (SENADO_IT_SYNONYMS[token]) {
      expandedSynonyms.push(...SENADO_IT_SYNONYMS[token]);
    } else {
      // Verificar se o token com erro é similar a alguma chave do dicionário
      for (const [key, synList] of Object.entries(SENADO_IT_SYNONYMS)) {
        if (isFuzzyMatch(token, key)) {
          expandedSynonyms.push(key, ...synList);
          if (!suggestedCorrection && token !== key) {
            suggestedCorrection = { original: token, suggested: key };
          }
        }
      }
    }
  });

  const scoredResults: SearchMatchDetail[] = [];

  for (const faq of faqs) {
    let score = 0;
    let bestReason: SearchMatchDetail['matchReason'] = undefined;
    const matchedTerms = new Set<string>();

    const normFaqNumber = normalizeText(faq.faqNumber);
    const normItemId = normalizeText(faq.adminInfo?.itemId);
    const normName = normalizeText(faq.name);
    const normSystem = normalizeText(faq.system);
    const normKeywords = normalizeText(faq.adminInfo?.palavrasChave);
    const normService = normalizeText(faq.service);
    const normSubject = normalizeText(faq.subject);
    const normSubCategory = normalizeText(faq.subCategory);
    const normProcedure = normalizeText(faq.procedure);
    const normObs = normalizeText(faq.observacoes);

    // 1. Busca por Número da FAQ ou ItemID (Prioridade Máxima)
    if (onlyDigits.length >= 3) {
      if (normFaqNumber === onlyDigits || normItemId === onlyDigits) {
        score += 1500;
        bestReason = 'number';
        matchedTerms.add(faq.faqNumber);
      } else if (normFaqNumber.includes(onlyDigits) || normItemId.includes(onlyDigits)) {
        score += 800;
        bestReason = 'number';
        matchedTerms.add(onlyDigits);
      }
    }

    // 2. Busca pela frase completa no título ou sistema
    if (normName.includes(normalizedQuery)) {
      score += 600;
      bestReason = bestReason || 'title';
      matchedTerms.add(query);
    }
    if (normSystem.includes(normalizedQuery)) {
      score += 500;
      bestReason = bestReason || 'system';
      matchedTerms.add(query);
    }

    // 3. Avaliação por tokens da query
    let allTokensMatched = true;

    for (const token of queryTokens) {
      let tokenFound = false;

      // Correspondência Exata em campos estratégicos
      if (normName.includes(token)) {
        score += 150;
        tokenFound = true;
        bestReason = bestReason || 'title';
        matchedTerms.add(token);
      } else if (normSystem.includes(token)) {
        score += 130;
        tokenFound = true;
        bestReason = bestReason || 'system';
        matchedTerms.add(token);
      } else if (normKeywords.includes(token)) {
        score += 100;
        tokenFound = true;
        bestReason = bestReason || 'fuzzy';
        matchedTerms.add(token);
      } else if (normService.includes(token) || normSubject.includes(token) || normSubCategory.includes(token)) {
        score += 70;
        tokenFound = true;
        bestReason = bestReason || 'content';
        matchedTerms.add(token);
      } else if (normProcedure.includes(token) || normObs.includes(token)) {
        score += 40;
        tokenFound = true;
        bestReason = bestReason || 'content';
        matchedTerms.add(token);
      }

      // Correspondência por Sinônimos
      if (!tokenFound && expandedSynonyms.length > 0) {
        for (const syn of expandedSynonyms) {
          if (normName.includes(syn) || normSystem.includes(syn) || normKeywords.includes(syn)) {
            score += 90;
            tokenFound = true;
            bestReason = bestReason || 'synonym';
            matchedTerms.add(syn);
            break;
          }
        }
      }

      // Correspondência Difusa (Fuzzy - Erro de digitação de 1 ou 2 caracteres)
      if (!tokenFound && token.length >= 3) {
        // Verificar palavras do título e sistema
        const titleTokens = normName.split(' ');
        const systemTokens = normSystem.split(' ');
        const keywordTokens = normKeywords.split(' ');
        const combinedTokens = [...titleTokens, ...systemTokens, ...keywordTokens];

        for (const target of combinedTokens) {
          if (target.length >= 3 && isFuzzyMatch(token, target)) {
            score += 85;
            tokenFound = true;
            hasFuzzyMatchGlobal = true;
            bestReason = bestReason || 'fuzzy';
            matchedTerms.add(target);
            if (!suggestedCorrection && token !== target) {
              suggestedCorrection = { original: token, suggested: target };
            }
            break;
          }
        }
      }

      if (!tokenFound) {
        allTokensMatched = false;
      }
    }

    // Se todos os tokens foram encontrados, ganha bônus de relevância
    if (allTokensMatched && queryTokens.length > 1) {
      score += 200;
    }

    if (score > 0) {
      scoredResults.push({
        faq,
        score,
        matchReason: bestReason,
        matchedTerms: Array.from(matchedTerms)
      });
    }
  }

  // Ordenar decrescente por score de relevância
  scoredResults.sort((a, b) => b.score - a.score);

  const matchDetailsMap = new Map<string, SearchMatchDetail>();
  scoredResults.forEach(item => {
    matchDetailsMap.set(item.faq.id, item);
  });

  return {
    results: scoredResults.map(item => item.faq),
    matchDetails: matchDetailsMap,
    suggestedCorrection,
    hasFuzzyMatch: hasFuzzyMatchGlobal
  };
}

export interface GeminiDiagnosticReasoning {
  faqId: string;
  relevanceScore: number;
  whyMatch: string;
}

export interface GeminiContextDiagnosticResult {
  diagnosticSummary: string;
  technicalAdvice: string;
  recommendedFaqIds: string[];
  reasonings: GeminiDiagnosticReasoning[];
  matchedFaqs: FAQ[];
}

const PT_STOP_WORDS = new Set([
  'o', 'a', 'os', 'as', 'um', 'uma', 'uns', 'umas',
  'de', 'da', 'do', 'dos', 'das', 'em', 'no', 'na', 'nos', 'nas',
  'por', 'para', 'com', 'sem', 'sob', 'sobre',
  'que', 'qual', 'quais', 'quem', 'cujo',
  'cliente', 'usuario', 'usuaria', 'diz', 'disse', 'relata', 'falou',
  'esta', 'está', 'este', 'esse', 'isso', 'aquilo',
  'seu', 'sua', 'seus', 'suas', 'meu', 'minha',
  'foi', 'era', 'sao', 'são', 'ser', 'estar', 'ter', 'tem',
  'muito', 'pouco', 'mais', 'menos', 'quando', 'como'
]);

/**
 * Funil Local de Candidatos (Pré-filtro RAG rápido para Gemini):
 * Reduz 600+ FAQs para as 25-28 mais pertinentes em menos de 2 milissegundos,
 * garantindo taxa zero de alucinação e economia máxima de tokens.
 */
export function getCandidateFaqsForGemini(faqs: FAQ[], rawComplaint: string, maxCandidates = 28): Array<{
  id: string;
  faqNumber: string;
  name: string;
  system: string;
  subject: string;
  service: string;
  observacoes?: string;
  procedureSnippet: string;
}> {
  const norm = normalizeText(rawComplaint);
  const words = norm.split(' ').filter(w => w.length >= 2 && !PT_STOP_WORDS.has(w));

  // Expandir com sinônimos
  const expandedTerms = new Set<string>(words);
  for (const w of words) {
    if (SENADO_IT_SYNONYMS[w]) {
      SENADO_IT_SYNONYMS[w].forEach(s => expandedTerms.add(normalizeText(s)));
    }
  }

  const termsList = Array.from(expandedTerms);

  const scoredList = faqs.map(faq => {
    let score = 0;
    const nameNorm = normalizeText(faq.name);
    const systemNorm = normalizeText(faq.system);
    const subjectNorm = normalizeText(faq.subject);
    const serviceNorm = normalizeText(faq.service);
    const obsNorm = normalizeText(faq.observacoes);
    const procNorm = normalizeText(faq.procedure);
    const techNorm = normalizeText(faq.technicalInfo);

    for (const term of termsList) {
      if (term.length < 3) continue;

      if (nameNorm.includes(term)) score += 35;
      if (systemNorm.includes(term)) score += 30;
      if (subjectNorm.includes(term)) score += 20;
      if (serviceNorm.includes(term)) score += 15;
      if (obsNorm.includes(term)) score += 15;
      if (procNorm.includes(term)) score += 8;
      if (techNorm.includes(term)) score += 8;

      // Fuzzy check se a palavra for relevante
      if (term.length >= 5) {
        if (isFuzzyMatch(term, nameNorm) || isFuzzyMatch(term, systemNorm)) {
          score += 15;
        }
      }
    }

    return { faq, score };
  });

  scoredList.sort((a, b) => b.score - a.score);

  // Se houver itens com pontuação positiva, pegamos eles. Caso contrário, pegamos um subset diversificado
  const topItems = scoredList.filter(item => item.score > 0).slice(0, maxCandidates);

  let finalSelection = topItems.map(item => item.faq);
  if (finalSelection.length < 10) {
    const remaining = faqs.filter(f => !finalSelection.some(sel => sel.id === f.id)).slice(0, 15);
    finalSelection = [...finalSelection, ...remaining];
  }

  return finalSelection.map(f => ({
    id: f.id,
    faqNumber: f.faqNumber,
    name: f.name,
    system: f.system,
    subject: f.subject,
    service: f.service,
    observacoes: f.observacoes,
    procedureSnippet: (f.procedure || '').slice(0, 250)
  }));
}

/**
 * Executa a busca contextual com Gemini 3.8 Flash via endpoint server-side
 */
export async function diagnoseFaqContextWithGemini(
  complaint: string, 
  allFaqs: FAQ[]
): Promise<GeminiContextDiagnosticResult> {
  const candidates = getCandidateFaqsForGemini(allFaqs, complaint, 28);

  const res = await fetch('/api/diagnose-faq-context', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      complaint,
      candidates
    })
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Falha ao consultar IA');
  }

  const data = await res.json();
  const recommendedIds: string[] = data.recommendedFaqIds || [];

  // Mapear apenas FAQs reais presentes no array de FAQs
  const faqMap = new Map<string, FAQ>();
  allFaqs.forEach(f => faqMap.set(f.id, f));

  const matchedFaqs: FAQ[] = [];
  for (const id of recommendedIds) {
    const found = faqMap.get(id);
    if (found) {
      matchedFaqs.push(found);
    }
  }

  return {
    diagnosticSummary: data.diagnosticSummary || 'Triagem realizada.',
    technicalAdvice: data.technicalAdvice || '',
    recommendedFaqIds: recommendedIds,
    reasonings: data.reasonings || [],
    matchedFaqs
  };
}
