import { FAQ } from '@/types';

export const additionalFaqsBatch44: FAQ[] = [
  {
    id: 'faq-10002595',
    faqNumber: '10002595',
    name: 'Cerimonial e Eventos – Cessão de Espaços Nobres (Auditórios, Salão Negro e Salão Nobre)',
    category: 'CENTRAL DE ATENDIMENTO::CERIMONIAL::CESSÃO DE ESPAÇOS',
    subCategory: 'CESSÃO DE ESPAÇOS',
    system: 'Sistema de Agendamento de Eventos (SICER / SIGAD)',
    type: 'Requisição de serviço',
    service: 'Gestão de Espaços Nobres, Exposições Culturais e Solenidades',
    subject: 'Reserva do Auditório Petrônio Portella, Salão Negro para Lançamento de Livros e Exposições',
    associatedProcedureId: '',
    observacoes: 'A cessão deve ser autorizada pela Primeira-Secretaria do Senado ou Diretoria-Geral.',
    procedure: `1. Formalização do Pedido de Cessão de Espaço:
   - Encaminhe requerimento via SIGAD à Primeira-Secretaria com antecedência mínima de 30 dias do evento;
   - Anexe: projeto básico do evento, cronograma de montagem/desmontagem e estimativa de público presente.
2. Vistoria Técnica e Segurança Orgânica:
   - A equipe do Cerimonial, Engenharia e Polícia Legislativa realiza vistoria técnica para aprovar o layout de estandes e capacidade elétrica;
3. Termo de Responsabilidade e Execução:
   - O solicitante assina termo comprometendo-se com a integridade do patrimônio tombado pelo IPHAN e respeito às normas de segurança contra incêndio e pânico.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2595;Nav=',
    attachments: [
      {
        name: 'Regulamento de Uso dos Espacos Nobres do Senado Federal.pdf',
        size: '350.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2595;FileID=15847'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > CERIMONIAL > CESSÃO DE ESPAÇOS',
      categoria: 'CENTRAL DE ATENDIMENTO::CERIMONIAL::CESSÃO DE ESPAÇOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/04/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '13/03/2026 09:30 (Mayara Sales)',
      atualizadoEm: '13.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2595;Nav=',
      itemId: '2595'
    }
  },
  {
    id: 'faq-10002596',
    faqNumber: '10002596',
    name: 'Segurança da Informação – Testes de Intrusão (Pentest) e Gestão Contínua de Vulnerabilidades',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::GESTÃO DE VULNERABILIDADES',
    subCategory: 'GESTÃO DE VULNERABILIDADES',
    system: 'Plataforma de Gestão de Vulnerabilidades (Tenable / Qualys / DITEC)',
    type: 'Requisição de serviço',
    service: 'Segurança Ofensiva, Varreduras de Vulnerabilidade e Pentest',
    subject: 'Homologação de Segurança de Novos Sistemas Web, Varredura de Portas e Correção de Falhas',
    associatedProcedureId: '',
    observacoes: 'Nenhum sistema institucional entra em produção sem o parecer conclusivo de segurança (ASVS/OWASP).',
    procedure: `1. Requisito de Varredura de Segurança Pré-Produção:
   - A equipe de desenvolvimento submete o novo software ou portal web na Central de Serviços de TI;
   - A área de segurança ofensiva agenda os testes em ambiente de homologação espelhado.
2. Execução dos Testes Automatizados e Manuais (Pentest):
   - Avaliação contra as 10 principais vulnerabilidades da OWASP (SQL Injection, XSS, Broken Access Control, CSRF);
   - Varredura de portas abertas e versões de bibliotecas desatualizadas em contêineres Docker/Kubernetes.
3. Emissão do Relatório de Vulnerabilidades e Plano de Ação:
   - Os apontamentos de severidade Crítica e Alta devem ser corrigidos em até 5 dias úteis para emissão do Termo de Homologação de Segurança.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2596;Nav=',
    attachments: [
      {
        name: 'Politica de Gestao de Vulnerabilidades e Seguranca Ofensiva DITEC.pdf',
        size: '375.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2596;FileID=15848'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA DA INFORMAÇÃO > GESTÃO DE VULNERABILIDADES',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::GESTÃO DE VULNERABILIDADES',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/04/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '13/03/2026 10:00 (Mayara Sales)',
      atualizadoEm: '13.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2596;Nav=',
      itemId: '2596'
    }
  },
  {
    id: 'faq-10002597',
    faqNumber: '10002597',
    name: 'Processo Legislativo – Votação em Sessão Conjunta do Congresso Nacional (Vetos e Orçamento)',
    category: 'CENTRAL DE ATENDIMENTO::PROCESSO LEGISLATIVO::SESSÃO CONJUNTA',
    subCategory: 'SESSÃO CONJUNTA',
    system: 'Sistema Integrado do Congresso Nacional (SICON / Painel Plenário da Câmara)',
    type: 'Requisição de serviço',
    service: 'Mesa do Congresso Nacional e Secretaria-Geral da Mesa',
    subject: 'Apreciação de Vetos Presidenciais, Lei Orçamentária Anual (LOA) e LDO em Sessão Conjunta',
    associatedProcedureId: '',
    observacoes: 'A votação ocorre com a presença simultânea de 513 deputados e 81 senadores sob presidência do Senado.',
    procedure: `1. Convocação da Sessão Conjunta:
   - O Presidente do Senado Federal, na qualidade de Presidente da Mesa do Congresso Nacional, publica a pauta de deliberação;
2. Funcionamento do Painel Integrado de Votação:
   - A equipe técnica de TI unifica os sistemas de biometria e contagem de votos das duas Casas Legislativas;
   - Os deputados votam em suas bancadas habituais no Plenário Ulysses Guimarães e os senadores ocupam as primeiras fileiras ou votam remotamente no aplicativo oficial.
3. Apuração Separada por Casa Legislativa:
   - Para a derrubada de veto presidencial, exige-se a maioria absoluta concomitante: no mínimo 257 votos na Câmara e 41 votos no Senado Federal.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2597;Nav=',
    attachments: [
      {
        name: 'Regimento Comum do Congresso Nacional e Rito de Vetos.pdf',
        size: '342.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2597;FileID=15849'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > PROCESSO LEGISLATIVO > SESSÃO CONJUNTA',
      categoria: 'CENTRAL DE ATENDIMENTO::PROCESSO LEGISLATIVO::SESSÃO CONJUNTA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/04/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '13/03/2026 10:30 (Mayara Sales)',
      atualizadoEm: '13.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2597;Nav=',
      itemId: '2597'
    }
  },
  {
    id: 'faq-10002598',
    faqNumber: '10002598',
    name: 'Biblioteca do Senado – Acervo de Obras Raras, Restauração e Consulta Supervisionada',
    category: 'CENTRAL DE ATENDIMENTO::BIBLIOTECA::OBRAS RARAS',
    subCategory: 'OBRAS RARAS',
    system: 'Biblioteca Digital Acadêmica / Seção de Obras Raras',
    type: 'Requisição de serviço',
    service: 'Preservação de Patrimônio Bibliográfico e Restauração Documental',
    subject: 'Agendamento de Pesquisa em Manuscritos do Império, Livros Raros e Laboratório de Restauro',
    associatedProcedureId: '',
    observacoes: 'O manuseio de obras centenárias obedece a rigorosos protocolos de conservação física.',
    procedure: `1. Agendamento Prévio para Consulta a Obras Raras:
   - Pesquisadores, historiadores e servidores devem solicitar agendamento prévio com 48 horas de antecedência na Biblioteca;
   - Indique o título, ano e objetivo da pesquisa científica ou acadêmica.
2. Protocolo de Acesso e Manuseio na Sala Especial:
   - A consulta ocorre em sala climatizada com temperatura e umidade controladas;
   - É obrigatório o uso de luvas de algodão e apoio para livros (berço para encadernação); proibido uso de canetas esferográficas ou flashes fotográficos.
3. Laboratório de Conservação e Restauro:
   - Especialistas em papel tratam acidez, realizam enxertos em folhas danificadas e higienização mecânica de códices históricos.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2598;Nav=',
    attachments: [
      {
        name: 'Norma de Acesso e Preservacao do Acervo de Obras Raras.pdf',
        size: '310.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2598;FileID=15850'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > BIBLIOTECA > OBRAS RARAS',
      categoria: 'CENTRAL DE ATENDIMENTO::BIBLIOTECA::OBRAS RARAS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/04/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '13/03/2026 11:00 (Mayara Sales)',
      atualizadoEm: '13.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2598;Nav=',
      itemId: '2598'
    }
  },
  {
    id: 'faq-10002599',
    faqNumber: '10002599',
    name: 'Logística de Transporte – Apoio Parlamentar em Aeroportos e Sala VIP do Congresso',
    category: 'CENTRAL DE ATENDIMENTO::TRANSPORTE::APOIO AEROPORTUÁRIO',
    subCategory: 'APOIO AEROPORTUÁRIO',
    system: 'Sistema de Transporte e Apoio Aeroportuário (SISTRAN)',
    type: 'Requisição de serviço',
    service: 'Recepção Aeroportuária, Despacho de Bagagens e Sala VIP',
    subject: 'Atendimento aos Senadores no Aeroporto Internacional de Brasília e Acesso à Sala de Espera Parlamentar',
    associatedProcedureId: '',
    observacoes: 'Serviço restrito a senadores no desempenho de suas funções constitucionais e missões parlamentares.',
    procedure: `1. Notificação do Voo no SISTRAN:
   - O gabinete parlamentar cadastra os dados do bilhete aéreo (companhia, número do voo, horário de pouso ou decolagem) com 6 horas de antecedência;
2. Recepção e Embarque Supervisionado:
   - A equipe de apoio do Senado no Aeroporto JK auxilia no check-in, pesagem e etiquetagem prioritária de bagagens;
3. Uso da Sala de Apoio do Congresso Nacional:
   - Ambiente reservado dotado de conexão de internet de alta velocidade, impressoras e terminal de TV institucional para acompanhamento das votações até o horário de chamada do voo.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2599;Nav=',
    attachments: [
      {
        name: 'Guia de Apoio Aeroportuario e Servicos SISTRAN.pdf',
        size: '265.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2599;FileID=15851'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > TRANSPORTE > APOIO AEROPORTUÁRIO',
      categoria: 'CENTRAL DE ATENDIMENTO::TRANSPORTE::APOIO AEROPORTUÁRIO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/04/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '13/03/2026 11:30 (Mayara Sales)',
      atualizadoEm: '13.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2599;Nav=',
      itemId: '2599'
    }
  },
  {
    id: 'faq-10002600',
    faqNumber: '10002600',
    name: 'Saúde e Ergonomia – Programa de Ginástica Laboral e Prevenção de LER/DORT (SIS Ocupacional)',
    category: 'CENTRAL DE ATENDIMENTO::SAÚDE (SIS)::ERGONOMIA E PREVENÇÃO',
    subCategory: 'ERGONOMIA E PREVENÇÃO',
    system: 'Sistema SIS Medicina Ocupacional e Ergonomia',
    type: 'Requisição de serviço',
    service: 'Medicina do Trabalho, Fisioterapia Preventiva e Ergonomia',
    subject: 'Visita de Fisioterapeutas nos Setores, Ajuste de Cadeiras/Monitores e Pausas Ativas Guiadas',
    associatedProcedureId: '',
    observacoes: 'Iniciativa voltada para redução do absenteísmo e preservação da saúde física dos servidores.',
    procedure: `1. Solicitação de Intervenção Ergonômica Setorial:
   - A chefia da unidade pode solicitar a visita da equipe de ergonomia pelo SIS: Saúde > Medicina do Trabalho > Análise Ergonômica;
2. Avaliação do Posto de Trabalho:
   - O fisioterapeuta avalia o alinhamento da altura da cadeira, suporte de pés, distância do monitor e posicionamento do teclado e mouse;
3. Sessões de Ginástica Laboral:
   - Educadores físicos visitam os setores duas vezes por semana ministrando exercícios de alongamento, mobilidade articular e relaxamento com duração de 15 minutos.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2600;Nav=',
    attachments: [
      {
        name: 'Manual de Ergonomia e Exercicios no Trabalho SIS.pdf',
        size: '298.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2600;FileID=15852'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SAÚDE (SIS) > ERGONOMIA E PREVENÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::SAÚDE (SIS)::ERGONOMIA E PREVENÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/04/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '13/03/2026 12:00 (Mayara Sales)',
      atualizadoEm: '13.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2600;Nav=',
      itemId: '2600'
    }
  },
  {
    id: 'faq-10002601',
    faqNumber: '10002601',
    name: 'Contratos Administrativos – Repactuação de Preços e Reajuste por Índices Oficiais (SICONTRAT)',
    category: 'CENTRAL DE ATENDIMENTO::CONTRATOS::REPACTUAÇÃO DE PREÇOS',
    subCategory: 'REPACTUAÇÃO DE PREÇOS',
    system: 'SICONTRAT / Secretaria de Finanças e Contratos',
    type: 'Requisição de serviço',
    service: 'Equilíbrio Econômico-Financeiro de Contratos Administrativos',
    subject: 'Análise de Planilhas de Custo, Dissídios Coletivos e Aplicação de Índices IPCA/INPC',
    associatedProcedureId: '',
    observacoes: 'Garante o equilíbrio econômico do contrato após convenções coletivas de trabalho ou inflação anual.',
    procedure: `1. Requerimento da Empresa Contratada:
   - A contratada protocola requerimento formal no SIGAD demonstrando a variação salarial decorrente de convenção coletiva ou decurso de 12 meses de vigência;
   - Anexe a nova planilha analítica de custos e formação de preços.
2. Instrução Técnica pela Fiscalização e Secretaria de Contratos:
   - O fiscal administrativo confere os cálculos com as tabelas de referência de insumos e mão de obra terceirizada;
3. Parecer Jurídico da ADVOSF e Termo Aditivo:
   - Após parecer favorável da Advocacia do Senado, é lavrado o Termo Aditivo de repactuação com publicação do extrato no DOU.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2601;Nav=',
    attachments: [
      {
        name: 'Guia de Repactuacao e Reajuste de Contratos Senado.pdf',
        size: '385.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2601;FileID=15853'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > CONTRATOS > REPACTUAÇÃO DE PREÇOS',
      categoria: 'CENTRAL DE ATENDIMENTO::CONTRATOS::REPACTUAÇÃO DE PREÇOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/04/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '13/03/2026 12:30 (Mayara Sales)',
      atualizadoEm: '13.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2601;Nav=',
      itemId: '2601'
    }
  },
  {
    id: 'faq-10002602',
    faqNumber: '10002602',
    name: 'Comunicação Digital – Notificações Push e Personalização de Alertas no Aplicativo Senado',
    category: 'CENTRAL DE ATENDIMENTO::COMUNICAÇÃO::APLICATIVO SENADO',
    subCategory: 'APLICATIVO SENADO',
    system: 'Aplicativo Oficial Senado Federal (iOS / Android) / DITEC Mídias',
    type: 'Requisição de serviço',
    service: 'Canais Digitais, Informação ao Cidadão e Notificações Mobile',
    subject: 'Acompanhamento em Tempo Real de Projetos de Lei por Notificação Push no Celular',
    associatedProcedureId: '',
    observacoes: 'Disponível gratuitamente para cidadãos e assessores nas lojas App Store e Google Play.',
    procedure: `1. Como Baixar e Configurar o Aplicativo Oficial:
   - Baixe o aplicativo "Senado Federal" na loja do seu smartphone;
   - Faça login com sua conta Gov.br para sincronizar seus favoritos em múltiplos aparelhos.
2. Como Seguir Matérias e Parlamentares Específicos:
   - Na barra de busca, pesquise pelo número da proposição (ex.: "PL 1234/2024") e toque no ícone de estrela "Seguir Matéria";
   - Ative as notificações push nas preferências do aplicativo.
3. Alertas Recebidos Automaticamente:
   - O aplicativo dispara alertas imediatos sempre que houver: designação de relator, emissão de parecer na comissão ou inclusão da matéria na Ordem do Dia do Plenário.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2602;Nav=',
    attachments: [
      {
        name: 'Manual do Usuario Aplicativo Senado Federal.pdf',
        size: '252.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2602;FileID=15854'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > COMUNICAÇÃO > APLICATIVO SENADO',
      categoria: 'CENTRAL DE ATENDIMENTO::COMUNICAÇÃO::APLICATIVO SENADO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/04/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '13/03/2026 13:00 (Mayara Sales)',
      atualizadoEm: '13.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2602;Nav=',
      itemId: '2602'
    }
  }
];
