import { FAQ } from '@/types';

export const additionalFaqsBatch27: FAQ[] = [
  {
    id: 'faq-10002459',
    faqNumber: '10002459',
    name: 'Computação em Nuvem – Provisionamento de Recursos e Máquinas Virtuais (Azure / AWS)',
    category: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::NUVEM',
    subCategory: 'NUVEM',
    system: 'Ambiente em Nuvem',
    type: 'Requisição de serviço',
    service: 'Gestão de Infraestrutura Cloud Institucional',
    subject: 'Solicitação de Criação de VM, Contêineres AKS/EKS ou Buckets de Armazenamento',
    associatedProcedureId: '',
    observacoes: 'Todo recurso em nuvem deve possuir justificativa técnica e alinhamento com o Plano Diretor de TI (PDTI).',
    procedure: `1. O líder técnico ou gestor da Squad autua chamado na Central de Serviços:
   Informática > Infraestrutura de TI > Computação em Nuvem > Solicitação de Recurso.
2. No formulário do chamado, preencha a Ficha Técnica de Dimensionamento:
   - Provedor: Microsoft Azure ou AWS Gov;
   - Tipo de recurso: Máquina Virtual (especificar vCPU e RAM), cluster Kubernetes, banco PaaS ou Object Storage (Blob/S3);
   - Ambiente: Desenvolvimento, Homologação ou Produção;
   - Estimativa de tráfego e política de desligamento automático fora do expediente (economia de custos).
3. A equipe de Arquitetura Cloud valida os parâmetros de rede privada (VNet/VPC Peering com Datacenter do Senado) e provisiona via IaC (Terraform).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2459;Nav=',
    attachments: [
      {
        name: 'Guia de Arquitetura Cloud Senado.pdf',
        size: '348.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2459;FileID=15711'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > INFRAESTRUTURA > NUVEM',
      categoria: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::NUVEM',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '20/02/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '02/02/2026 09:30 (Mayara Sales)',
      atualizadoEm: '02.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2459;Nav=',
      itemId: '2459'
    }
  },
  {
    id: 'faq-10002460',
    faqNumber: '10002460',
    name: 'Computação em Nuvem – Marcação de Tags de Faturamento e Controle Orçamentário (FinOps)',
    category: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::NUVEM',
    subCategory: 'NUVEM',
    system: 'Ambiente em Nuvem',
    type: 'Requisição de serviço',
    service: 'Gestão de Custos e Governança Cloud',
    subject: 'Aplicação de Tags Obrigatórias de Projeto, Centro de Custo e Responsável Técnico',
    associatedProcedureId: '',
    observacoes: 'Recursos sem tags obrigatórias são identificados pela política de conformidade e suspensos após 5 dias úteis.',
    procedure: `1. Todos os recursos criados nas assinaturas do Senado devem conter as seguintes tags obrigatórias:
   - "Projeto": Nome da iniciativa ou sistema corporativo;
   - "Ambiente": Prod | Hml | Dev;
   - "Gestor": Matrícula do servidor gestor do contrato/projeto;
   - "CentroDeCusto": Código orçamentário da unidade demandante.
2. Para consultar o dashboard de custos e consumo do projeto:
   - Acesse o portal FinOps interno: https://finops.senado.leg.br;
   - Filtre pelo nome da Squad para visualizar relatórios de consumo diário e alertas de orçamento extrapolado.
3. Solicitações de alteração de limites de faturamento (Budget Alert) devem ser encaminhadas ao Serviço de Gestão Orçamentária da DITEC.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2460;Nav=',
    attachments: [
      {
        name: 'Manual de FinOps e Marcação de Tags.pdf',
        size: '286.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2460;FileID=15712'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > INFRAESTRUTURA > NUVEM',
      categoria: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::NUVEM',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '20/02/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '02/02/2026 10:00 (Mayara Sales)',
      atualizadoEm: '02.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2460;Nav=',
      itemId: '2460'
    }
  },
  {
    id: 'faq-10002461',
    faqNumber: '10002461',
    name: 'Formulários Eletrônicos – Criação e Compartilhamento de Enquetes no Microsoft Forms',
    category: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::MICROSOFT FORMS',
    subCategory: 'MICROSOFT FORMS',
    system: 'Microsoft 365',
    type: 'Requisição de serviço',
    service: 'Suporte a Ferramentas de Produtividade e Colaboração',
    subject: 'Pesquisas de Clima, Enquetes Internas e Coleta Rápida de Respostas',
    associatedProcedureId: '',
    observacoes: 'Para pesquisas que envolvam dados sensíveis de cidadãos com alta volumetria, prefira o LimeSurvey institucional.',
    procedure: `1. Acesse o portal do Microsoft 365: https://forms.office.com com a conta institucional (@senado.leg.br).
2. Clique em "Novo Formulário" (para pesquisas de opinião) ou "Novo Teste" (com atribuição de notas).
3. Insira o título, descrição e adicione perguntas (Escolha, Texto, Classificação ou Data).
4. Configurações de Acesso:
   - "Somente pessoas na minha organização podem responder": Grava automaticamente o nome e e-mail do respondente interno;
   - "Qualquer pessoa pode responder": Gera link público para audiências ou cidadãos (não grava identificação individual).
5. Para exportar respostas consolidadas, acesse a aba "Respostas" e clique em "Abrir no Excel".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2461;Nav=',
    attachments: [
      {
        name: 'Guia Prático Microsoft Forms.pdf',
        size: '304.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2461;FileID=15713'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > FERRAMENTAS COLABORATIVAS > MICROSOFT FORMS',
      categoria: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::MICROSOFT FORMS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '20/02/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '02/02/2026 10:30 (Mayara Sales)',
      atualizadoEm: '02.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2461;Nav=',
      itemId: '2461'
    }
  },
  {
    id: 'faq-10002462',
    faqNumber: '10002462',
    name: 'Formulários Eletrônicos – Pesquisas Estruturadas e Anonimizadas com LimeSurvey Institucional',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::LIMESURVEY',
    subCategory: 'LIMESURVEY',
    system: 'LimeSurvey',
    type: 'Requisição de serviço',
    service: 'Gestão de Pesquisas de Opinião e Consultas Públicas',
    subject: 'Formulários com Lógica Condicional Complexa, Quotas e Anonimato Garantido',
    associatedProcedureId: '',
    observacoes: 'Ideal para pesquisas eleitorais internas, pesquisas científicas da Consultoria e consultas com anonimato estrito.',
    procedure: `1. O servidor responsável pelo projeto de pesquisa deve solicitar acesso à plataforma LimeSurvey:
   Central de Serviços > Sistemas Corporativos > LimeSurvey > Solicitação de Acesso / Criação de Pesquisa.
2. Acesse o painel administrativo: https://pesquisas.senado.leg.br/admin com usuário autorizado.
3. Criação de questionários avançados:
   - Suporte a salto de perguntas com lógica booleana condicional;
   - Envio de convites personalizados com tokens individuais de preenchimento;
   - Ativação do modo "Respostas Anônimas" (separa o token do participante das respostas fornecidas).
4. Ao encerrar a pesquisa, exporte os microdados em formatos CSV, SPSS ou PDF.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2462;Nav=',
    attachments: [
      {
        name: 'Manual LimeSurvey Senado.pdf',
        size: '360.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2462;FileID=15714'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS CORPORATIVOS > LIMESURVEY',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::LIMESURVEY',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '20/02/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '02/02/2026 11:00 (Mayara Sales)',
      atualizadoEm: '02.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2462;Nav=',
      itemId: '2462'
    }
  },
  {
    id: 'faq-10002463',
    faqNumber: '10002463',
    name: 'Comunicação e Colaboração – Criação de Equipes e Canais no Microsoft Teams',
    category: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::MICROSOFT TEAMS',
    subCategory: 'MICROSOFT TEAMS',
    system: 'Microsoft 365',
    type: 'Requisição de serviço',
    service: 'Gestão de Ambientes Colaborativos',
    subject: 'Solicitação de Nova Equipe, Política de Nomenclatura e Gestão de Membros',
    associatedProcedureId: '',
    observacoes: 'Equipes do Teams possuem expiração anual automática caso fiquem inativas por mais de 180 dias.',
    procedure: `1. Para solicitar a criação de uma nova equipe departamental ou de projeto transversal:
   - Abra chamado na Central de Serviços: Informática > Microsoft 365 > Teams > Criação de Equipe.
2. Padrão de nomenclatura obrigatório:
   - Estrutura: [SIGLA_SETOR] - [NOME_DO_PROJETO_OU_EQUIPE] (Ex: "SECONT - Auditoria Folha 2026");
   - Indicar pelo menos dois servidores como "Proprietários" (Owners) para evitar equipes órfãs.
3. Configuração de Canais:
   - Canais Padrão: Visíveis para todos os membros da equipe;
   - Canais Privados: Com acesso restrito a um subconjunto específico de membros;
   - Canais Compartilhados: Permitem cooperação com colaboradores externos previamente autorizados.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2463;Nav=',
    attachments: [
      {
        name: 'Guia Boas Práticas Microsoft Teams.pdf',
        size: '312.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2463;FileID=15715'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > FERRAMENTAS COLABORATIVAS > MICROSOFT TEAMS',
      categoria: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::MICROSOFT TEAMS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '20/02/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '02/02/2026 11:30 (Mayara Sales)',
      atualizadoEm: '02.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2463;Nav=',
      itemId: '2463'
    }
  },
  {
    id: 'faq-10002464',
    faqNumber: '10002464',
    name: 'Comunicação e Colaboração – Gravação de Reuniões e Política de Retenção no Teams',
    category: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::MICROSOFT TEAMS',
    subCategory: 'MICROSOFT TEAMS',
    system: 'Microsoft 365',
    type: 'Requisição de serviço',
    service: 'Gestão de Ambientes Colaborativos',
    subject: 'Início de Gravação, Consentimento dos Participantes e Armazenamento no OneDrive/SharePoint',
    associatedProcedureId: '',
    observacoes: 'Avisar previamente todos os participantes antes de iniciar a gravação é dever legal (LGPD).',
    procedure: `1. Para gravar uma reunião no Microsoft Teams:
   - Na barra de controles da reunião, clique no botão "Mais" (...) > "Gravar e transcrever" > "Iniciar gravação";
   - Uma faixa de notificação informará a todos os participantes que a reunião está sendo gravada.
2. Local de Armazenamento:
   - Reuniões em canais: O vídeo MP4 é salvo na pasta do SharePoint da respectiva equipe;
   - Reuniões de calendário/avulsas: O vídeo é salvo na pasta "Recordings" do OneDrive do organizador.
3. Política de Expiração:
   - Por padrão de conformidade, gravações expiram em 60 dias a menos que o organizador altere a data de expiração nas propriedades do arquivo.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2464;Nav=',
    attachments: [
      {
        name: 'Manual Gravações no Teams.pdf',
        size: '272.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2464;FileID=15716'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > FERRAMENTAS COLABORATIVAS > MICROSOFT TEAMS',
      categoria: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::MICROSOFT TEAMS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '20/02/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '02/02/2026 12:00 (Mayara Sales)',
      atualizadoEm: '02.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2464;Nav=',
      itemId: '2464'
    }
  },
  {
    id: 'faq-10002465',
    faqNumber: '10002465',
    name: 'Segurança da Informação – Procedimento de Bloqueio Preventivo de Phishing e Fraudes',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::ANTIVÍRUS E AMEAÇAS',
    subCategory: 'ANTIVÍRUS E AMEAÇAS',
    system: 'Segurança da Informação',
    type: 'Incidente',
    service: 'Defesa Cibernética e Proteção de Endpoint',
    subject: 'Reportar Mensagens Falsas, Tentativas de Golpe via WhatsApp Institucional e URLs Maliciosas',
    associatedProcedureId: '',
    observacoes: 'A DITEC nunca solicita confirmação de senha por e-mail, link externo ou mensagens de WhatsApp.',
    procedure: `1. Caso receba e-mail suspeito contendo ameaça de cancelamento de conta, link para recadastramento ou anexo duvidoso:
   - Não clique em nenhum link e não abra anexos;
   - No Outlook, clique no botão oficial "Reportar Phishing" na barra de ferramentas superior;
   - A mensagem será encaminhada para o sandbox da Segurança da Informação e isolada da sua caixa postal.
2. Caso tenha clicado no link ou digitado sua senha em página falsa:
   - Troque imediatamente sua senha de rede pelo portal https://trocasenha.senado.leg.br a partir de outro dispositivo;
   - Ligue para a Central de Atendimento pelo ramal 3333 informando o incidente para bloqueio temporário da sessão.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2465;Nav=',
    attachments: [
      {
        name: 'Cartilha Antifraude e Phishing.pdf',
        size: '358.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2465;FileID=15717'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA DA INFORMAÇÃO > ANTIVÍRUS E AMEAÇAS',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::ANTIVÍRUS E AMEAÇAS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '20/02/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '02/02/2026 12:30 (Mayara Sales)',
      atualizadoEm: '02.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2465;Nav=',
      itemId: '2465'
    }
  },
  {
    id: 'faq-10002466',
    faqNumber: '10002466',
    name: 'Central de Serviços – Acompanhamento de Chamados, SLA, Reabertura e Pesquisa de Satisfação',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::PROCEDIMENTOS INTERNOS',
    subCategory: 'PROCEDIMENTOS INTERNOS',
    system: 'Central de Serviços (OTRS)',
    type: 'Requisição de serviço',
    service: 'Gestão da Central de Atendimento ao Usuário',
    subject: 'Ciclo de Vida do Chamado, Prazos de Resolução e Reabertura dentro de 48 Horas',
    associatedProcedureId: '',
    observacoes: 'Chamados encerrados podem ser reabertos pelo usuário caso a solução aplicada não tenha resolvido o problema.',
    procedure: `1. Para consultar seus chamados abertos e histórico de solicitações:
   - Acesse o portal: https://servicos.senado.leg.br;
   - No menu superior, clique em "Meus Chamados".
2. Prazos de Atendimento (SLA):
   - Incidentes Críticos (interrupção total de sessão plenária/gabinete): Resolução em até 1 hora;
   - Incidentes Normais: Resolução em até 4 a 8 horas úteis;
   - Requisições de Serviço: Resolução em até 3 a 5 dias úteis.
3. Reabertura de Chamado:
   - Caso o chamado tenha sido encerrado mas a demanda persista, o usuário tem até 48 horas úteis para clicar em "Reabrir Chamado" e registrar sua réplica.
4. Avaliação de Qualidade:
   - Responda à Pesquisa de Satisfação enviada por e-mail após o encerramento para garantir o controle contínuo do serviço.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2466;Nav=',
    attachments: [
      {
        name: 'Guia de SLA Central de Serviços.pdf',
        size: '298.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2466;FileID=15718'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > PROCEDIMENTOS INTERNOS',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::PROCEDIMENTOS INTERNOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '20/02/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '02/02/2026 13:00 (Mayara Sales)',
      atualizadoEm: '02.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2466;Nav=',
      itemId: '2466'
    }
  }
];
