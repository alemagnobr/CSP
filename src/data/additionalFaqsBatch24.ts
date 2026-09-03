import { FAQ } from '@/types';

export const additionalFaqsBatch24: FAQ[] = [
  {
    id: 'faq-10002435',
    faqNumber: '10002435',
    name: 'Segurança da Informação – Notificação de Incidente de Segurança ou Vazamento de Dados (LGPD)',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::INCIDENTES',
    subCategory: 'INCIDENTES',
    system: 'Segurança da Informação',
    type: 'Incidente',
    service: 'Gestão de Incidentes de Segurança e Privacidade',
    subject: 'Comunicação Obrigatória à ETIR e ao Encarregado de Proteção de Dados',
    associatedProcedureId: '',
    observacoes: 'Qualquer suspeita de vazamento de dados pessoais de cidadãos ou servidores deve ser reportada em até 24 horas.',
    procedure: `1. Caso identifique envio indevido de dados pessoais, invasão de conta ou vazamento de banco de dados:
   - Desconecte imediatamente o equipamento da rede cabeada e desligue o Wi-Fi;
   - Não reinicie e não desligue o computador para preservar as evidências na memória volátil (RAM).
2. Comunique imediatamente a Equipe de Tratamento e Resposta a Incidentes de Segurança Cibernética (ETIR) pelo ramal de emergência ou e-mail: seguranca@senado.leg.br.
3. Abra chamado urgente na Central de Serviços no tipo: "Incidente de Segurança da Informação / LGPD".
4. Preencha o Formulário Preliminar de Notificação de Incidente indicando volume estimado de titulares afetados e sistemas envolvidos.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2435;Nav=',
    attachments: [
      {
        name: 'Guia de Resposta a Incidentes LGPD.pdf',
        size: '345.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2435;FileID=15687'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA DA INFORMAÇÃO > INCIDENTES',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::INCIDENTES',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '25/01/2026 09:30 (Mayara Sales)',
      atualizadoEm: '25.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2435;Nav=',
      itemId: '2435'
    }
  },
  {
    id: 'faq-10002436',
    faqNumber: '10002436',
    name: 'Segurança da Informação – Classificação da Informação e Tratamento de Dados Sigilosos',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::CONFORMIDADE',
    subCategory: 'CONFORMIDADE',
    system: 'Segurança da Informação',
    type: 'Requisição de serviço',
    service: 'Conformidade e Política de Segurança',
    subject: 'Aplicação de Etiquetas de Sensibilidade no Microsoft 365 e SIGAD',
    associatedProcedureId: '',
    observacoes: 'Documentos sigilosos recebem criptografia automática e controle de encaminhamento externo.',
    procedure: `1. No Word, Excel ou PowerPoint corporativo, clique no botão "Sensibilidade" na barra de ferramentas superior.
2. Selecione a classificação adequada ao documento:
   - "Público": Acesso irrestrito permitido;
   - "Interno": Uso exclusivo do Senado e órgãos do Congresso;
   - "Restrito": Acesso condicionado a membros do setor produtor;
   - "Sigiloso / Secreto": Criptografado por RMS (Rights Management), impedindo impressão e cópia de texto.
3. No SIGAD, a classificação deve ser atribuída no momento da autuação do processo administrativo.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2436;Nav=',
    attachments: [
      {
        name: 'Manual de Classificação da Informação.pdf',
        size: '298.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2436;FileID=15688'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA DA INFORMAÇÃO > CONFORMIDADE',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::CONFORMIDADE',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '25/01/2026 10:00 (Mayara Sales)',
      atualizadoEm: '25.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2436;Nav=',
      itemId: '2436'
    }
  },
  {
    id: 'faq-10002437',
    faqNumber: '10002437',
    name: 'Segurança da Informação – Homologação de Software de Terceiros e Análise de Risco',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::HOMOLOGAÇÃO',
    subCategory: 'HOMOLOGAÇÃO',
    system: 'Segurança da Informação',
    type: 'Requisição de serviço',
    service: 'Governança de TI e Avaliação de Risco',
    subject: 'Solicitação de Avaliação de Segurança para Novos Aplicativos ou Serviços em Nuvem',
    associatedProcedureId: '',
    observacoes: 'É proibido instalar softwares não homologados ou utilizar ferramentas SaaS que manipulem dados institucionais sem parecer da CGTI.',
    procedure: `1. O solicitante deve abrir chamado na Central de Serviços:
   Informática > Segurança da Informação > Homologação de Softwares e Serviços.
2. Informar: fabricante, versão exata, termos de uso / licença, finalidade institucional e se haverá processamento de dados de parlamentares ou cidadãos.
3. A equipe de Segurança realizará análise de vulnerabilidades, histórico de breaches do fabricante e conformidade LGPD.
4. Após parecer favorável da CGTI, o instalador será empacotado para o Centro de Software (SCCM).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2437;Nav=',
    attachments: [
      {
        name: 'Formulário Avaliação de Software Terceiro.pdf',
        size: '310.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2437;FileID=15689'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA DA INFORMAÇÃO > HOMOLOGAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::HOMOLOGAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '25/01/2026 10:30 (Mayara Sales)',
      atualizadoEm: '25.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2437;Nav=',
      itemId: '2437'
    }
  },
  {
    id: 'faq-10002438',
    faqNumber: '10002438',
    name: 'Desenvolvimento – Liberação de Regras de Firewall para Ambientes de Teste e Homologação',
    category: 'CENTRAL DE ATENDIMENTO::DESENVOLVIMENTO::INFRAESTRUTURA',
    subCategory: 'INFRAESTRUTURA',
    system: 'Rede e Infraestrutura',
    type: 'Requisição de serviço',
    service: 'Suporte ao Desenvolvimento e DevOps',
    subject: 'Abertura de Portas e Liberação de Roteamento entre VLANs de Homologação',
    associatedProcedureId: '',
    observacoes: 'Liberações de acesso externo exigem justificativa técnica e aprovação do Gestor de Segurança da Informação.',
    procedure: `1. A equipe de desenvolvimento deve preencher a planilha de Requisição de Mudança de Firewall (RMF).
2. Especificar:
   - IP de origem (estação do desenvolvedor ou servidor de CI/CD);
   - IP de destino e DNS do servidor de homologação;
   - Portas TCP/UDP necessárias (ex: 8080, 5432, 9092);
   - Período de validade da regra (regras temporárias são revogadas após 90 dias).
3. Registrar chamado na categoria: Informática > Redes e Conectividade > Firewall > Mudança de Regra.
4. A equipe de Segurança de Redes valida os parâmetros e aplica a política nos firewalls perimetrais.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2438;Nav=',
    attachments: [
      {
        name: 'Modelo RMF Firewall.pdf',
        size: '275.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2438;FileID=15690'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > DESENVOLVIMENTO > INFRAESTRUTURA',
      categoria: 'CENTRAL DE ATENDIMENTO::DESENVOLVIMENTO::INFRAESTRUTURA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '25/01/2026 11:00 (Mayara Sales)',
      atualizadoEm: '25.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2438;Nav=',
      itemId: '2438'
    }
  },
  {
    id: 'faq-10002439',
    faqNumber: '10002439',
    name: 'Desenvolvimento – Acesso ao Repositório Git Institucional (GitLab Senado)',
    category: 'CENTRAL DE ATENDIMENTO::DESENVOLVIMENTO::FERRAMENTAS',
    subCategory: 'FERRAMENTAS',
    system: 'GitLab',
    type: 'Requisição de serviço',
    service: 'Gestão do Ciclo de Vida de Software (DevSecOps)',
    subject: 'Cadastro de Conta, Configuração de Chave SSH e Permissões em Grupos de Projetos',
    associatedProcedureId: '',
    observacoes: 'O acesso via SSH exige chave pública moderna (ED25519 ou RSA 4096 bits). Chaves DSA são bloqueadas.',
    procedure: `1. Acesse o portal interno https://gitlab.senado.leg.br com suas credenciais de rede do Senado.
2. Para adicionar sua chave pública SSH:
   - Abra o terminal do computador e gere sua chave: ssh-keygen -t ed25519 -C "login@senado.leg.br";
   - Copie o conteúdo de ~/.ssh/id_ed25519.pub;
   - No GitLab, acesse Perfil > Preferências > Chaves SSH e cole a chave no campo indicado.
3. Para acesso a repositórios de projetos existentes, solicite ao líder técnico da Squad que adicione seu usuário ao grupo com o papel "Developer" ou "Maintainer".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2439;Nav=',
    attachments: [
      {
        name: 'Guia GitLab Senado.pdf',
        size: '330.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2439;FileID=15691'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > DESENVOLVIMENTO > FERRAMENTAS',
      categoria: 'CENTRAL DE ATENDIMENTO::DESENVOLVIMENTO::FERRAMENTAS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '25/01/2026 11:30 (Mayara Sales)',
      atualizadoEm: '25.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2439;Nav=',
      itemId: '2439'
    }
  },
  {
    id: 'faq-10002440',
    faqNumber: '10002440',
    name: 'Desenvolvimento – Solicitação de Usuário e Permissões em Bancos de Homologação (PostgreSQL/Oracle)',
    category: 'CENTRAL DE ATENDIMENTO::DESENVOLVIMENTO::BANCO DE DADOS',
    subCategory: 'BANCO DE DADOS',
    system: 'Banco de Dados',
    type: 'Requisição de serviço',
    service: 'Administração de Bancos de Dados (DBA)',
    subject: 'Criação de Schema, Tabelas e Concessão de Privilégios (Grants)',
    associatedProcedureId: '',
    observacoes: 'Bancos de homologação não devem conter dados reais não mascarados (LGPD).',
    procedure: `1. O gestor do projeto de software deve abrir chamado para o Serviço de Administração de Dados (SEDAN):
   Informática > Banco de Dados > Homologação > Criação de Usuário / Permissões.
2. No corpo do chamado, informe:
   - SGBD: PostgreSQL ou Oracle Database;
   - Nome do schema / banco de dados da aplicação;
   - Matrículas dos desenvolvedores que receberão as credenciais de acesso;
   - Nível de privilégio necessário (DML para dados, DDL apenas para ambiente sandbox).
3. O DBA criará as credenciais vinculadas ao grupo do Active Directory ou senha temporária com expiração em 30 dias.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2440;Nav=',
    attachments: [
      {
        name: 'Norma de Acesso a Bases de Teste.pdf',
        size: '288.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2440;FileID=15692'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > DESENVOLVIMENTO > BANCO DE DADOS',
      categoria: 'CENTRAL DE ATENDIMENTO::DESENVOLVIMENTO::BANCO DE DADOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '25/01/2026 12:00 (Mayara Sales)',
      atualizadoEm: '25.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2440;Nav=',
      itemId: '2440'
    }
  },
  {
    id: 'faq-10002441',
    faqNumber: '10002441',
    name: 'Ergonomia no Trabalho – Solicitação de Acessórios Ergonômicos (Suporte de Monitor / Apoio de Pés)',
    category: 'CENTRAL DE ATENDIMENTO::SERVIÇOS GERAIS::ERGONOMIA',
    subCategory: 'ERGONOMIA',
    system: 'Serviços Gerais',
    type: 'Requisição de serviço',
    service: 'Saúde Ocupacional e Adequação Ergonômica de Posto',
    subject: 'Fornecimento de Apoio de Pés, Suporte Elevador Articulado e Mousepad com Gel',
    associatedProcedureId: '',
    observacoes: 'Disponibilizado a todos os servidores e estagiários para conformidade com a NR-17.',
    procedure: `1. O servidor pode solicitar itens ergonômicos básicos diretamente pelo Portal de Serviços Administrativos:
   Serviços Gerais > Mobiliário e Ergonomia > Solicitação de Itens Ergonômicos.
2. Selecione os itens desejados:
   - Suporte articulado para notebook com ajuste de altura;
   - Suporte para elevação de monitor LCD de mesa;
   - Apoio para pés com regulagem de inclinação;
   - Apoio ergonômico de punho para teclado e mouse.
3. A equipe de Patrimônio e Almoxarifado entrega os itens no gabinete/setor em até 3 dias úteis.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2441;Nav=',
    attachments: [
      {
        name: 'Guia Ergonômico de Posto de Trabalho.pdf',
        size: '390.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2441;FileID=15693'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SERVIÇOS GERAIS > ERGONOMIA',
      categoria: 'CENTRAL DE ATENDIMENTO::SERVIÇOS GERAIS::ERGONOMIA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '25/01/2026 12:30 (Mayara Sales)',
      atualizadoEm: '25.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2441;Nav=',
      itemId: '2441'
    }
  },
  {
    id: 'faq-10002442',
    faqNumber: '10002442',
    name: 'Ergonomia no Trabalho – Teclado Adaptado e Mouse Vertical com Recomendação Médica (SIS)',
    category: 'CENTRAL DE ATENDIMENTO::SERVIÇOS GERAIS::ERGONOMIA',
    subCategory: 'ERGONOMIA',
    system: 'Serviços Gerais',
    type: 'Requisição de serviço',
    service: 'Saúde Ocupacional e Adequação Ergonômica de Posto',
    subject: 'Atendimento a Servidores com Lesão por Esforço Repetitivo (LER/DORT)',
    associatedProcedureId: '',
    observacoes: 'Exige laudo médico emitido ou homologado pelo Serviço Médico do Senado (SASIS).',
    procedure: `1. O servidor com diagnóstico de LER, DORT ou síndrome do túnel do carpo deve apresentar o laudo médico ao SASIS (Serviço Médico).
2. O médico do trabalho do Senado emitirá o Parecer Ergonômico indicando a especificação do periférico adaptado (ex: mouse vertical ergonômico, teclado bipartido ergonômico ou trackball).
3. O servidor abre chamado na Central de Serviços:
   Informática > Suporte Técnico > Equipamentos Especiais / Ergonômicos.
4. Anexe o parecer médico do SASIS.
5. A equipe de Nível 2 providenciará a entrega e configuração do periférico no posto de trabalho.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2442;Nav=',
    attachments: [
      {
        name: 'Procedimento Periféricos Médicos SASIS.pdf',
        size: '265.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2442;FileID=15694'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SERVIÇOS GERAIS > ERGONOMIA',
      categoria: 'CENTRAL DE ATENDIMENTO::SERVIÇOS GERAIS::ERGONOMIA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '25/01/2026 13:00 (Mayara Sales)',
      atualizadoEm: '25.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2442;Nav=',
      itemId: '2442'
    }
  }
];
