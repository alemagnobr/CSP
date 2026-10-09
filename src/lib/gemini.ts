import { GoogleGenAI } from '@google/genai';

// Modelos oficiais suportados pela SDK @google/genai com alta estabilidade
const PRIMARY_GEMINI_MODEL = 'gemini-3.8-flash';
const FALLBACK_GEMINI_MODELS = ['gemini-3.1-flash-lite', 'gemini-flash-latest'];

/**
 * Fecha automaticamente quaisquer tags HTML abertas (<div>, <ul>, <li>, <strong>, etc.)
 * caso a resposta da IA termine incompleta ou truncada.
 */
export function repairIncompleteHtml(html: string): string {
  if (!html || !html.trim()) return html;
  let fixed = html.trim();

  // Verifica contagem de tags div abertas vs fechadas
  const openDivs = (fixed.match(/<div(\s+[^>]*)?>/gi) || []).length;
  const closeDivs = (fixed.match(/<\/div>/gi) || []).length;
  
  // Se faltam fechamentos de li ou ul
  const openLis = (fixed.match(/<li(\s+[^>]*)?>/gi) || []).length;
  const closeLis = (fixed.match(/<\/li>/gi) || []).length;
  if (openLis > closeLis) {
    fixed += '</li>'.repeat(openLis - closeLis);
  }

  const openUls = (fixed.match(/<ul(\s+[^>]*)?>/gi) || []).length;
  const closeUls = (fixed.match(/<\/ul>/gi) || []).length;
  if (openUls > closeUls) {
    fixed += '</ul>'.repeat(openUls - closeUls);
  }

  if (openDivs > closeDivs) {
    fixed += '</div>'.repeat(openDivs - closeDivs);
  }

  return fixed;
}

/**
 * Executa uma chamada ao GoogleGenAI com limite de tokens ampliado (4096 tokens)
 * para NUNCA cortar a resposta pela metade, e fallback automático para modelos secundários.
 */
async function generateGeminiContentWithFallback(
  ai: GoogleGenAI,
  prompt: string,
  preferredModel?: string,
  customConfig?: any
): Promise<string> {
  const modelsToTry = preferredModel 
    ? [preferredModel, ...FALLBACK_GEMINI_MODELS.filter(m => m !== preferredModel)]
    : [PRIMARY_GEMINI_MODEL, ...FALLBACK_GEMINI_MODELS];

  let lastError: any = null;

  for (const model of modelsToTry) {
    try {
      const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
        config: {
          temperature: 0.15, // Resposta direta, consistente e sem enrolação
          maxOutputTokens: 4096, // Limite amplo de 4096 para NUNCA cortar a resposta pela metade
          ...customConfig
        }
      });

      if (response && response.text) {
        return repairIncompleteHtml(response.text);
      }
    } catch (err: any) {
      console.warn(`[Gemini] Falha ou lentidão no modelo ${model}. Tentando próximo...`, err?.message || err);
      lastError = err;
      // Se for erro de autenticação ou chave inválida, não adianta tentar outros modelos
      const errMsg = (err?.message || '').toLowerCase();
      if (errMsg.includes('api key') || errMsg.includes('invalid') || errMsg.includes('permission_denied')) {
        throw err;
      }
    }
  }

  throw lastError || new Error('Não foi possível obter resposta do Gemini com os modelos disponíveis.');
}

async function fetchOpenRouter(
  apiKey: string,
  model: string,
  messages: any[],
  extraBody: Record<string, any> = {}
): Promise<any> {
  const payload = {
    model: model,
    messages: messages,
    ...extraBody
  };

  let res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': 'https://ai.studio.google.com/',
      'X-Title': 'SLA Tracker AI'
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    let errorText = '';
    try {
      const errorData = await res.json();
      errorText = errorData.error?.message || res.statusText;
    } catch (e) {
      errorText = res.statusText;
    }

    // Check if error contains model fallback instruction
    if (errorText.includes('use this slug instead:')) {
      const match = errorText.match(/use this slug instead:\s*([a-zA-Z0-9\-\/_.:]+)/);
      if (match && match[1]) {
        const fallbackModel = match[1].trim();
        console.warn(`Retrying OpenRouter with suggested model slug: ${fallbackModel}`);
        
        const retryPayload = {
          ...payload,
          model: fallbackModel
        };

        const retryRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'HTTP-Referer': 'https://ai.studio.google.com/',
            'X-Title': 'SLA Tracker AI'
          },
          body: JSON.stringify(retryPayload)
        });

        if (retryRes.ok) {
          return await retryRes.json();
        } else {
          let retryErrorText = '';
          try {
            const retryErrorData = await retryRes.json();
            retryErrorText = retryErrorData.error?.message || retryRes.statusText;
          } catch (e) {
            retryErrorText = retryRes.statusText;
          }
          throw new Error(`OpenRouter API Error (Retry failed): ${retryErrorText}`);
        }
      }
    }

    throw new Error(`OpenRouter API Error: ${errorText}`);
  }

  return await res.json();
}

export const generateTicketStructure = async (
  apiKey: string,
  provider: 'gemini' | 'openrouter',
  data: any
) => {
  const { description, procedures, verifications, problemSolved, clientValidated, aiGuidelines, aiPromptStandard } = data;

  let guidelinesContext = '';
  if (aiGuidelines && aiGuidelines.length > 0) {
    const guidelinesList = aiGuidelines.map((g: string) => `- ${g}`).join('\n');
    guidelinesContext = `\n\nDiretrizes a seguir:\n${guidelinesList}`;
  }

  let proceduresContext = '';
  if (procedures && procedures.length > 0) {
    const proceduresList = procedures.map((p: any) => `- ${p.name}: ${p.description}`).join('\n');
    proceduresContext += `\nAlém disso, os seguintes procedimentos técnicos foram executados com sucesso:\n${proceduresList}\nInclua menção direta a esses procedimentos nas "Ações realizadas".`;
  }
  if (verifications && verifications.length > 0) {
    const verificationsList = verifications.map((v: any) => `- ${v.name}: ${v.description}`).join('\n');
    proceduresContext += `\nTambém foram realizadas as seguintes verificações com sucesso:\n${verificationsList}\nInclua menção a essas verificações nas "Ações realizadas".`;
  }

  const validationSentences: string[] = [];
  if (problemSolved) {
    validationSentences.push('Problema solucionado.');
  }
  if (clientValidated) {
    validationSentences.push('Cliente validou o atendimento.');
  }
  const validationText = validationSentences.join(' ');

  const prompt = `Você é um assistente técnico de TI e analista de suporte.
Sua tarefa é reestruturar o relato do chamado técnico EXATAMENTE na estrutura de TEXTO PURO abaixo.
NÃO use nenhuma tag HTML (NÃO use <div>, <ul>, <li>, <p>, <br>, etc.).
NÃO use blocos markdown (não use \`\`\` nem asteriscos de negrito **).
Use estritamente texto puro e limpo.

ESTRUTURA OBRIGATÓRIA DA RESPOSTA:
Análise técnica:
[Relato claro, objetivo e profissional do problema informado pelo usuário]

Ações realizadas:
• [Primeira ação ou procedimento executado de forma concisa]
• [Segunda ação ou procedimento executado]
• [Demais ações executadas em tópicos bem organizados]

Resultado:
[Breve resumo da conclusão das tratativas]${validationText ? `\n\n${validationText}` : ''}

REGRAS:
- Retorne EXCLUSIVAMENTE TEXTO PURO. Sem HTML e sem formatação markdown.
- Nas "Ações realizadas", coloque as bolinhas em tópicos bem organizados ("• ") para cada procedimento/ação.
- Corrija erros gramaticais e mantenha tom técnico e direto.
- Não invente procedimentos que não foram informados nem no relato nem na lista de procedimentos.
- Não adicione saudações, introduções ou assinaturas ("Atenciosamente", "Obrigado", etc.).
${validationText ? `- Ao final da seção "Resultado:", inclua exatamente a frase: "${validationText}"` : ''}

RELATO DO ATENDIMENTO:
"${description}"
${proceduresContext}${guidelinesContext}
`;

  if (provider === 'openrouter') {
    const responseData = await fetchOpenRouter(
      apiKey,
      data.openRouterModel || 'openrouter/free',
      [{ role: 'user', content: prompt }],
      { max_tokens: 2048, temperature: 0.15 }
    );
    const content = responseData.choices?.[0]?.message?.content || '';
    return content.trim().replace(/^```[a-z]*\s*/i, '').replace(/```$/i, '').trim();
  } else {
    const ai = new GoogleGenAI({ apiKey });
    const text = await generateGeminiContentWithFallback(ai, prompt, data.geminiModel, { maxOutputTokens: 2048, temperature: 0.15 });
    return text.trim().replace(/^```[a-z]*\s*/i, '').replace(/```$/i, '').trim();
  }
};

export const searchSolutions = async (apiKey: string, provider: 'gemini' | 'openrouter', data: any) => {
  const { description, faqs, procedures, orientations, technicalDoubts, informations, tickets } = data;
  
  const prompt = `Você é um mecanismo inteligente de indexação e localização da base de conhecimento de suporte técnico.
IMPORTANTE: Você NÃO deve gerar textos, explicações, soluções ou inventar respostas. Sua ÚNICA função é apontar os links/IDs dos itens já cadastrados no aplicativo que possuem relação direta ou contextual com o problema relatado.

RELATO DO PROBLEMA / DEMANDA DO USUÁRIO:
"""
${description}
"""

ITENS CADASTRADOS NO APLICATIVO (BASE DE CONHECIMENTO):

1. FAQs (Perguntas Frequentes):
${JSON.stringify((faqs || []).map((f: any) => ({
  id: f.id,
  numero: f.faqNumber,
  titulo: f.name,
  assunto: f.subject,
  sistema: f.system,
  categoria: f.category,
  resumoTecnico: (f.technicalInfo || '').replace(/<[^>]+>/g, ' ').substring(0, 300),
  procedimento: (f.procedure || '').replace(/<[^>]+>/g, ' ').substring(0, 300)
})))}

2. Orientações Técnicas:
${JSON.stringify((orientations || []).map((o: any) => ({
  id: o.id,
  titulo: o.name,
  categoria: o.category,
  descricao: (o.description || '').replace(/<[^>]+>/g, ' ').substring(0, 300),
  passos: (o.steps || '').replace(/<[^>]+>/g, ' ').substring(0, 300)
})))}

3. Dúvidas Técnicas com Supervisão:
${JSON.stringify((technicalDoubts || []).map((d: any) => ({
  id: d.id,
  titulo: d.title,
  categoria: d.category,
  sistema: d.system,
  problema: (d.problemDescription || '').replace(/<[^>]+>/g, ' ').substring(0, 300),
  solucaoSupervisao: (d.supervisorSolution || '').replace(/<[^>]+>/g, ' ').substring(0, 300)
})))}

4. Informações Técnicas Gerais:
${JSON.stringify((informations || []).map((inf: any) => ({
  id: inf.id,
  titulo: inf.title,
  conteudo: (inf.content || '').replace(/<[^>]+>/g, ' ').substring(0, 300)
})))}

5. Procedimentos Padronizados:
${JSON.stringify((procedures || []).map((p: any) => ({
  id: p.id,
  nome: p.name,
  categoria: p.category,
  descricao: (p.description || '').replace(/<[^>]+>/g, ' ').substring(0, 300)
})))}

6. Chamados Anteriores Concluídos:
${JSON.stringify((tickets || []).map((t: any) => ({
  id: t.id,
  categoria: t.category,
  descricao: (t.description || '').substring(0, 300),
  solucao: (t.structuredResult || '').replace(/<[^>]+>/g, ' ').substring(0, 300)
})))}

INSTRUÇÕES DE RESPOSTA:
Retorne EXCLUSIVAMENTE um objeto JSON com os IDs dos itens existentes apontados como relevantes para o operador acessar no app (máximo 4 IDs por categoria). Não crie novos IDs nem escreva respostas. Se não encontrar correspondência, deixe o array vazio [].

Formato JSON esperado:
{
  "faqs": ["id_faq1", "id_faq2"],
  "orientations": ["id_orientacao1"],
  "technicalDoubts": ["id_duvida1"],
  "informations": ["id_info1"],
  "procedures": ["id_procedimento1"],
  "tickets": ["id_chamado1"]
}`;

  if (provider === 'openrouter') {
    const responseData = await fetchOpenRouter(
      apiKey,
      data.openRouterModel || 'openrouter/free',
      [{ role: 'user', content: prompt }],
      { response_format: { type: 'json_object' }, max_tokens: 1200 }
    );
    const resultText = responseData.choices?.[0]?.message?.content || '{}';
    
    try {
      const parsed = JSON.parse(resultText);
      return {
        faqs: parsed.faqs || [],
        orientations: parsed.orientations || [],
        technicalDoubts: parsed.technicalDoubts || [],
        informations: parsed.informations || [],
        procedures: parsed.procedures || [],
        tickets: parsed.tickets || []
      };
    } catch (e) {
      return { faqs: [], orientations: [], technicalDoubts: [], informations: [], procedures: [], tickets: [] };
    }
  } else {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            faqs: { type: "array", items: { type: "string" } },
            orientations: { type: "array", items: { type: "string" } },
            technicalDoubts: { type: "array", items: { type: "string" } },
            informations: { type: "array", items: { type: "string" } },
            procedures: { type: "array", items: { type: "string" } },
            tickets: { type: "array", items: { type: "string" } }
          }
        }
      }
    });

    const resultText = response.text;
    let resultJson = { faqs: [], orientations: [], technicalDoubts: [], informations: [], procedures: [], tickets: [] };
    if (resultText) {
      try {
        resultJson = JSON.parse(resultText);
      } catch (e) {
        console.error("Failed to parse AI response as JSON", e);
      }
    }
    return resultJson;
  }
};

export const generateProfessionalTitle = async (
  apiKey: string,
  provider: 'gemini' | 'openrouter',
  data: { currentTitle?: string; description?: string; category?: string; openRouterModel?: string }
): Promise<string> => {
  const { currentTitle, description, category, openRouterModel } = data;

  const prompt = `Você é um especialista em suporte de TI e ITSM.
Sua tarefa é criar ou aprimorar o TÍTULO do chamado técnico fornecido, tornando-o claro, conciso, padronizado, técnico e profissional (com tamanho ideal entre 4 a 10 palavras).

${currentTitle && currentTitle.trim() ? `Título Atual/Rascunho fornecido pelo usuário: "${currentTitle}"` : 'Nenhum título foi informado previamente pelo usuário.'}
${description && description.trim() ? `Relato/Descrição do Chamado: "${description}"` : ''}
${category && category.trim() ? `Categoria do Chamado: "${category}"` : ''}

Requisitos para o Título:
- Deve ser objetivo e usar terminologia técnica adequada de suporte técnico (ex: "Falha de Autenticação no Domínio", "Solicitação de Formatação e Reinstalação de SO", "Lentidão Excessiva no Sistema Operacional", "Configuração de Impressora em Rede").
- Se o usuário digitou um título básico (ex: "micro lento", "imp sem funcionar"), transforme-o na versão técnica e formal correspondente.
- Retorne APENAS o título gerado, sem aspas, sem formatação markdown, sem comentários ou explicações adicionais.`;

  if (provider === 'openrouter') {
    const responseData = await fetchOpenRouter(
      apiKey,
      openRouterModel || 'openrouter/free',
      [{ role: 'user', content: prompt }],
      { max_tokens: 100 }
    );
    const content = responseData.choices?.[0]?.message?.content || '';
    return content.trim().replace(/^["']|["']$/g, '').replace(/```/g, '');
  } else {
    const ai = new GoogleGenAI({ apiKey });
    const content = await generateGeminiContentWithFallback(ai, prompt, undefined, { maxOutputTokens: 100, temperature: 0.1 });
    return content.trim().replace(/^["']|["']$/g, '').replace(/```/g, '');
  }
};

export function formatAiError(errorMsg: string, provider: 'gemini' | 'openrouter'): string {
  try {
    const parsed = JSON.parse(errorMsg);
    if (parsed.error) {
      const innerMessage = parsed.error.message || '';
      const status = parsed.error.status || '';
      
      if (status === 'PERMISSION_DENIED' || innerMessage.includes('permission') || innerMessage.includes('denied')) {
        return `Acesso Negado (403): O Google Gemini recusou a chamada. Verifique se a sua Chave de API do Gemini nas Configurações é válida e está ativa no Google AI Studio.`;
      }
      
      return `${status ? `Erro [${status}]: ` : ''}${innerMessage || errorMsg}`;
    }
  } catch (e) {
    // Not a JSON string, continue with regex/string checks
  }

  const lowerMsg = errorMsg.toLowerCase();
  
  if (lowerMsg.includes('permission_denied') || lowerMsg.includes('caller does not have permission') || lowerMsg.includes('403')) {
    return `Acesso Negado: Chave de API do Gemini inválida ou sem permissão. Por favor, verifique se inseriu a chave correta e se ela está ativa no console do Google AI Studio.`;
  }
  
  if (lowerMsg.includes('api key not found') || lowerMsg.includes('invalid api key') || lowerMsg.includes('api_key_invalid')) {
    return `Chave de API inválida: A chave fornecida para o provedor ${provider === 'gemini' ? 'Gemini' : 'OpenRouter'} não é válida. Verifique se copiou a chave inteira corretamente nas Configurações.`;
  }

  if (lowerMsg.includes('unavailable') && lowerMsg.includes('free')) {
    return `Modelo Gratuito Indisponível: O modelo gratuito selecionado no OpenRouter está temporariamente indisponível ou com limite excedido. Tente selecionar outro modelo gratuito (como DeepSeek R1 Free, Llama 3.3 Free ou Qwen 2.5 Free) no menu de IA na barra superior ou nas Configurações, ou use o Google Gemini diretamente!`;
  }
  
  if (lowerMsg.includes('credit') || lowerMsg.includes('insufficient_funds') || lowerMsg.includes('balance') || lowerMsg.includes('insufficient credits')) {
    return `Crédito Insuficiente: Sua conta no OpenRouter não possui saldo/crédito para realizar essa chamada com o modelo pago recomendado de fallback. Por favor, adicione saldo ao OpenRouter ou use o Google Gemini diretamente.`;
  }

  return errorMsg;
}

