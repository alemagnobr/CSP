import { FAQ } from '@/types';

export const additionalFaqsBatch45: FAQ[] = [
  {
    id: 'faq-10002603',
    faqNumber: '10002603',
    name: 'Ouvidoria Geral – Tratamento de Reclamações, Denúncias e Elogios a Serviços Internos',
    category: 'CENTRAL DE ATENDIMENTO::OUVIDORIA::MANIFESTAÇÕES INTERNAS',
    subCategory: 'MANIFESTAÇÕES INTERNAS',
    system: 'Sistema de Ouvidoria Integrada (Fala.BR / Ouvidoria Senado)',
    type: 'Incidente',
    service: 'Cidadania Institucional, Mediação de Conflitos e Pesquisa de Satisfação',
    subject: 'Abertura e Acompanhamento de Manifestações Internas, SLA de Resposta e Anonimato',
    associatedProcedureId: '',
    observacoes: 'Garante a melhoria contínua da qualidade do atendimento e das rotinas administrativas da Casa.',
    procedure: `1. Registro da Manifestação:
   - Qualquer servidor, colaborador terceirizado ou cidadão pode registrar manifestação no portal: https://senado.leg.br/ouvidoria;
   - Escolha a tipologia: Elogio, Sugestão, Reclamação ou Denúncia (com opção expressa de anonimato ou sigilo dos dados do denunciante).
2. Triagem e Encaminhamento às Unidades Administrativas:
   - A Ouvidoria analisa a admissibilidade da manifestação em 48 horas e encaminha o pedido de esclarecimento à diretoria responsável;
   - O órgão demandado tem prazo regulamentar de até 15 dias úteis para prestar informações detalhadas.
3. Resposta Conclusiva e Pesquisa de Satisfação:
   - O manifestante recebe a resposta formal pelo sistema com possibilidade de avaliar a clareza e utilidade da solução fornecida.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2603;Nav=',
    attachments: [
      {
        name: 'Relatorio Anual e Rito de Manifestacoes Ouvidoria Senado.pdf',
        size: '312.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2603;FileID=15855'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > OUVIDORIA > MANIFESTAÇÕES INTERNAS',
      categoria: 'CENTRAL DE ATENDIMENTO::OUVIDORIA::MANIFESTAÇÕES INTERNAS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '17/04/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '14/03/2026 09:30 (Mayara Sales)',
      atualizadoEm: '14.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2603;Nav=',
      itemId: '2603'
    }
  },
  {
    id: 'faq-10002604',
    faqNumber: '10002604',
    name: 'Tecnologia da Informação – Catálogo de APIs e Integração Corporativa (API Gateway)',
    category: 'CENTRAL DE ATENDIMENTO::TECNOLOGIA DA INFORMAÇÃO::API GATEWAY',
    subCategory: 'API GATEWAY',
    system: 'API Gateway Corporativo (Kong / WSO2 / DITEC)',
    type: 'Requisição de serviço',
    service: 'Arquitetura de Software, Microsserviços e Integração entre Sistemas',
    subject: 'Cadastro de Consumidores de APIs, Geração de Tokens OAuth2 / JWT e Políticas de Rate Limiting',
    associatedProcedureId: '',
    observacoes: 'Padroniza o tráfego seguro de dados entre sistemas internos e com a Câmara dos Deputados e TCU.',
    procedure: `1. Requerimento de Acesso a APIs Internas:
   - Os desenvolvedores de soluções institucionais acessam o portal de desenvolvedores no API Gateway;
   - Especifique quais microsserviços deseja consumir (ex.: API de Parlamentares, API de Processos do SIGAD ou API de RH).
2. Geração de Credenciais de Aplicação (Client ID e Client Secret):
   - Aprovado o termo de responsabilidade, o gateway gera as credenciais seguras para autenticação OAuth2 (Client Credentials Flow);
3. Monitoramento de Tráfego e Limites de Consumo:
   - As requisições são protegidas por barreiras de Rate Limiting (ex.: 500 req/minuto) e criptografia TLS 1.3 ponta a ponta com logs auditados no Elastic/Splunk.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2604;Nav=',
    attachments: [
      {
        name: 'Manual de Governanca de APIs e Integracoes DITEC.pdf',
        size: '388.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2604;FileID=15856'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > TECNOLOGIA DA INFORMAÇÃO > API GATEWAY',
      categoria: 'CENTRAL DE ATENDIMENTO::TECNOLOGIA DA INFORMAÇÃO::API GATEWAY',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '17/04/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '14/03/2026 10:00 (Mayara Sales)',
      atualizadoEm: '14.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2604;Nav=',
      itemId: '2604'
    }
  },
  {
    id: 'faq-10002605',
    faqNumber: '10002605',
    name: 'Recursos Humanos – Simulação de Aposentadoria e Concessão de Abono de Permanência (SENADONET)',
    category: 'CENTRAL DE ATENDIMENTO::RECURSOS HUMANOS::APOSENTADORIA',
    subCategory: 'APOSENTADORIA',
    system: 'SENADONET / Sistema de Previdência e Aposentadorias',
    type: 'Requisição de serviço',
    service: 'Gestão de Benefícios Previdenciários e Contagem de Tempo',
    subject: 'Simulação de Regras de Transição (EC 103/2019), Averbação de Tempo de Contribuição e Abono',
    associatedProcedureId: '',
    observacoes: 'Abono de permanência equivale ao ressarcimento integral da contribuição previdenciária descontada.',
    procedure: `1. Simulação Online de Tempo e Regras Previdenciárias:
   - No portal SENADONET, acesse o módulo "Aposentadoria" > "Simulador Previdenciário";
   - O sistema calcula o tempo líquido de efetivo exercício público e aponta o cumprimento dos requisitos (regras de pontos, pedágio de 50% ou 100%).
2. Concessão Automática ou Requerida do Abono de Permanência:
   - Ao atingir os requisitos para aposentadoria voluntária e optar por permanecer em atividade, o servidor faz o requerimento eletrônico;
   - O abono é pago a partir da data de protocolo da solicitação.
3. Pedido Formal de Aposentadoria Voluntária:
   - O servidor agenda atendimento na Secretaria de Gestão de Pessoas para conferência da pasta funcional e elaboração da minuta de Portaria de Aposentadoria.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2605;Nav=',
    attachments: [
      {
        name: 'Guia de Aposentadoria e Abono de Permanencia Senado.pdf',
        size: '340.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2605;FileID=15857'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > RECURSOS HUMANOS > APOSENTADORIA',
      categoria: 'CENTRAL DE ATENDIMENTO::RECURSOS HUMANOS::APOSENTADORIA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '17/04/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '14/03/2026 10:30 (Mayara Sales)',
      atualizadoEm: '14.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2605;Nav=',
      itemId: '2605'
    }
  },
  {
    id: 'faq-10002606',
    faqNumber: '10002606',
    name: 'Polícia Legislativa – Escolta Armada de Senadores em Situação de Ameaça ou Risco',
    category: 'CENTRAL DE ATENDIMENTO::POLÍCIA LEGISLATIVA::PROTEÇÃO E ESCOLTA',
    subCategory: 'PROTEÇÃO E ESCOLTA',
    system: 'Coordenação de Proteção a Autoridades (SPOL)',
    type: 'Requisição de serviço',
    service: 'Segurança Institucional, Proteção Pessoal e Escolta Armada',
    subject: 'Solicitação de Segurança Aproximada para Parlamentares, Avaliação de Risco e Articulação Federativa',
    associatedProcedureId: '',
    observacoes: 'Medida protetiva deferida pelo Presidente do Senado ou Diretor da Secretaria de Polícia.',
    procedure: `1. Notificação de Ameaça ou Situação de Risco Iminente:
   - O senador comunica formalmente à Presidência do Senado ou à Secretaria de Polícia (ramal de emergência 3303-3333);
   - Apresente mensagens, e-mails, vídeos ou relatos de coação relacionados ao exercício parlamentar.
2. Análise de Inteligência e Avaliação da Matriz de Risco:
   - A inteligência policial do Senado afere o grau de periculosidade, abrangência territorial e perfil da ameaça;
3. Destacamento de Equipe de Segurança Aproximada:
   - Agentes de Polícia Legislativa fortemente equipados passam a realizar escolta armada nas dependências do Congresso e em deslocamentos no DF;
   - Em caso de viagens aos estados de origem, a Polícia articula cooperação com a Polícia Federal e Polícias Militares locais.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2606;Nav=',
    attachments: [
      {
        name: 'Diretrizes de Seguranca Pessoal e Escolta Parlamentar SPOL.pdf',
        size: '320.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2606;FileID=15858'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > POLÍCIA LEGISLATIVA > PROTEÇÃO E ESCOLTA',
      categoria: 'CENTRAL DE ATENDIMENTO::POLÍCIA LEGISLATIVA::PROTEÇÃO E ESCOLTA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '17/04/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '14/03/2026 11:00 (Mayara Sales)',
      atualizadoEm: '14.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2606;Nav=',
      itemId: '2606'
    }
  },
  {
    id: 'faq-10002607',
    faqNumber: '10002607',
    name: 'Infraestrutura Sustentável – Eficiência Energética, Iluminação LED e Automação Predial (BMS)',
    category: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::EFICIÊNCIA ENERGÉTICA',
    subCategory: 'EFICIÊNCIA ENERGÉTICA',
    system: 'Sistema de Automação Predial (BMS / Supervisório de Energia)',
    type: 'Requisição de serviço',
    service: 'Eficiência Energética, Automação Predial e Sustentabilidade',
    subject: 'Programação de Horários de Ar Condicionado, Iluminação Automática com Sensores e Desligamento Noturno',
    associatedProcedureId: '',
    observacoes: 'Parte do Plano de Gestão de Logística Sustentável do Senado Federal (PLS).',
    procedure: `1. Desligamento Automático de Circuitos e Iluminação:
   - A iluminação das áreas de circulação comum, garagens e gabinetes é controlada pelo sistema BMS com sensores de presença e timers programados;
   - Às 21h nos dias úteis e aos finais de semana, os circuitos não essenciais entram em modo de conservação de energia.
2. Requerimento de Extensão de Carga Elétrica para Trabalho Noturno:
   - Setores que demandarem expediente extraordinário além das 21h devem solicitar manutenção do ar condicionado e iluminação via Central de Serviços;
3. Substituição Contínua por Tecnologia LED:
   - Todas as luminárias fluorescentes do Senado foram substituídas por painéis LED inteligentes de baixo consumo térmico e elétrico.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2607;Nav=',
    attachments: [
      {
        name: 'Plano de Eficiencia Energetica e Automacao BMS Senado.pdf',
        size: '295.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2607;FileID=15859'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > INFRAESTRUTURA > EFICIÊNCIA ENERGÉTICA',
      categoria: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::EFICIÊNCIA ENERGÉTICA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '17/04/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '14/03/2026 11:30 (Mayara Sales)',
      atualizadoEm: '14.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2607;Nav=',
      itemId: '2607'
    }
  },
  {
    id: 'faq-10002608',
    faqNumber: '10002608',
    name: 'Comunicação Social – Mídias Sociais Oficiais, Moderação de Comentários e Canal Oficial',
    category: 'CENTRAL DE ATENDIMENTO::COMUNICAÇÃO::MÍDIAS SOCIAIS',
    subCategory: 'MÍDIAS SOCIAIS',
    system: 'Plataforma de Gestão de Mídias Sociais do Senado / SECOM',
    type: 'Requisição de serviço',
    service: 'Comunicação Digital, Redes Sociais Institucionais e Engajamento',
    subject: 'Diretrizes Editoriais de Postagens, Política de Moderação de Comentários e Resposta ao Cidadão',
    associatedProcedureId: '',
    observacoes: 'Canais oficiais no YouTube, Instagram, X (Twitter) e TikTok com foco estritamente institucional e educativo.',
    procedure: `1. Diretrizes de Publicação nas Redes Oficiais:
   - O conteúdo divulgado pela SECOM tem foco na explicação didática de leis sancionadas, votações do Plenário e serviços ao cidadão, com linguagem acessível e neutra;
2. Política de Moderação de Comentários da Comunidade:
   - São preservadas todas as opiniões críticas ou elogiosas; são ocultados ou excluídos apenas comentários contendo discurso de ódio, racismo, pornografia ou ofensas criminosas diretas;
3. Parcerias de Divulgação com Comissões e Frentes Parlamentares:
   - As secretarias de comissões que desejarem veiculação de campanhas institucionais ou seminários temáticos devem encaminhar briefing para a SECOM com 5 dias de antecedência.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2608;Nav=',
    attachments: [
      {
        name: 'Politica de Comunicacao Digital e Redes Sociais do Senado.pdf',
        size: '310.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2608;FileID=15860'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > COMUNICAÇÃO > MÍDIAS SOCIAIS',
      categoria: 'CENTRAL DE ATENDIMENTO::COMUNICAÇÃO::MÍDIAS SOCIAIS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '17/04/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '14/03/2026 12:00 (Mayara Sales)',
      atualizadoEm: '14.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2608;Nav=',
      itemId: '2608'
    }
  },
  {
    id: 'faq-10002609',
    faqNumber: '10002609',
    name: 'Assistência Médica (SIS) – Transporte de Urgência em Ambulância e Atendimento em UTI Móvel',
    category: 'CENTRAL DE ATENDIMENTO::SAÚDE (SIS)::AMBULÂNCIA E UTI MÓVEL',
    subCategory: 'AMBULÂNCIA E UTI MÓVEL',
    system: 'Central de Regulação Médica e Resgate do Senado (SIS Emergência)',
    type: 'Incidente',
    service: 'Atendimento Pré-Hospitalar (APH), Resgate e UTI Móvel',
    subject: 'Acionamento Imediato de Ambulância de Suporte Avançado (UTI) no Complexo do Senado',
    associatedProcedureId: '',
    observacoes: 'Equipes médicas e socorristas de prontidão 24 horas por dia durante as sessões deliberativas.',
    procedure: `1. Acionamento do Resgate Médico de Emergência:
   - Em caso de parada cardiorrespiratória, síncope, traumatismos graves ou dores torácicas súbitas:
   - Ligue imediatamente para o ramal interno de emergência médica: 3303-1222 ou 3303-1111;
   - Informe: local exato (Bloco, Andar, Sala) e sintomas visíveis da vítima.
2. Despacho da Equipe de Suporte Avançado (UTI Móvel):
   - A ambulância UTI tripulada por médico plantonista, enfermeiro e socorrista chega ao local em menos de 5 minutos equipada com desfibrilador (DEA) e kit de reanimação;
3. Estabilização e Remoção Hospitalar:
   - Após a estabilização clínica, a vítima é transportada prioritariamente para os hospitais credenciados de referência do DF com escolta da Polícia Legislativa.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2609;Nav=',
    attachments: [
      {
        name: 'Protocolo de Resgate e Suporte Avancado de Vida SIS.pdf',
        size: '345.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2609;FileID=15861'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SAÚDE (SIS) > AMBULÂNCIA E UTI MÓVEL',
      categoria: 'CENTRAL DE ATENDIMENTO::SAÚDE (SIS)::AMBULÂNCIA E UTI MÓVEL',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '17/04/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '14/03/2026 12:30 (Mayara Sales)',
      atualizadoEm: '14.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2609;Nav=',
      itemId: '2609'
    }
  },
  {
    id: 'faq-10002610',
    faqNumber: '10002610',
    name: 'Processo Legislativo – Medidas Provisórias (MPV) e Monitoramento de Prazos Constitucionais',
    category: 'CENTRAL DE ATENDIMENTO::PROCESSO LEGISLATIVO::MEDIDAS PROVISÓRIAS',
    subCategory: 'MEDIDAS PROVISÓRIAS',
    system: 'Sistema de Informações do Congresso Nacional (SICON / Tramitação de MPV)',
    type: 'Requisição de serviço',
    service: 'Comissão Mista de Medidas Provisórias e Secretaria-Geral da Mesa',
    subject: 'Contagem do Prazo de 60 Dias, Prorrogação, Regime de Urgência e Trancamento de Pauta',
    associatedProcedureId: '',
    observacoes: 'Após 45 dias de edição sem votação, a MPV tranca a pauta de deliberações da Casa onde estiver.',
    procedure: `1. Edição e Instalação da Comissão Mista de Medidas Provisórias:
   - Editada pelo Presidente da República, a MPV tem vigência imediata e é remetida ao Congresso;
   - Instala-se comissão mista paritária (composta por deputados e senadores) para emitir o parecer sobre os pressupostos de relevância e urgência.
2. Contagem do Prazo de Tramitação:
   - Vigência de 60 dias, prorrogável automaticamente por igual período uma única vez se a votação não for concluída;
   - Atingidos 45 dias de publicação, entra em regime de urgência, sobrestando todas as demais deliberações legislativas ordinárias.
3. Apreciação Sucessiva:
   - Votada inicialmente no Plenário da Câmara dos Deputados e, se aprovada, segue para deliberação final no Plenário do Senado Federal.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2610;Nav=',
    attachments: [
      {
        name: 'Rito de Tramitacao de Medidas Provisorias no Congresso.pdf',
        size: '360.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2610;FileID=15862'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > PROCESSO LEGISLATIVO > MEDIDAS PROVISÓRIAS',
      categoria: 'CENTRAL DE ATENDIMENTO::PROCESSO LEGISLATIVO::MEDIDAS PROVISÓRIAS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '17/04/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '14/03/2026 13:00 (Mayara Sales)',
      atualizadoEm: '14.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2610;Nav=',
      itemId: '2610'
    }
  }
];
