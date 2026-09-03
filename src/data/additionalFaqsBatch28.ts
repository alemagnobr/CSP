import { FAQ } from '@/types';

export const additionalFaqsBatch28: FAQ[] = [
  {
    id: 'faq-10002467',
    faqNumber: '10002467',
    name: 'Sistemas Operacionais – Configuração e Integração de Computadores Apple (macOS) na Rede',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::SISTEMAS OPERACIONAIS',
    subCategory: 'SISTEMAS OPERACIONAIS',
    system: 'Ambiente macOS',
    type: 'Requisição de serviço',
    service: 'Suporte a Estações de Trabalho e Mobilidade',
    subject: 'Matrícula no MDM Institucional, Certificados Digitais e Acesso à Rede Wi-Fi Corporativa',
    associatedProcedureId: '',
    observacoes: 'Disponível para computadores Mac patrimoniados ou autorizados em gabinetes parlamentares e assessorias.',
    procedure: `1. O equipamento Mac deve estar atualizado com uma das três últimas versões estáveis do macOS.
2. Matrícula no MDM (Gerenciamento de Dispositivos Móveis):
   - Acesse o portal corporativo: https://portal.manage.microsoft.com;
   - Baixe o aplicativo "Portal da Empresa" (Company Portal);
   - Efetue login com as credenciais de rede (@senado.leg.br) e aprove a instalação dos perfis de gerenciamento em Preferências do Sistema > Privacidade e Segurança > Perfis.
3. Instalação do Agente de Segurança e Criptografia FileVault:
   - O FileVault (criptografia de disco) será ativado automaticamente com chave sob custódia institucional;
   - O antivírus/EDR corporativo será instalado via push do MDM.
4. Conexão à Rede Interna:
   - Selecione a rede Wi-Fi "Senado-Corporativo", inserindo usuário e senha de rede com aceite do certificado raiz da AC Senado.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2467;Nav=',
    attachments: [
      {
        name: 'Guia de Configuração macOS no Senado.pdf',
        size: '340.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2467;FileID=15719'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > SISTEMAS OPERACIONAIS',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::SISTEMAS OPERACIONAIS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/02/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '05/02/2026 09:30 (Mayara Sales)',
      atualizadoEm: '05.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2467;Nav=',
      itemId: '2467'
    }
  },
  {
    id: 'faq-10002468',
    faqNumber: '10002468',
    name: 'Sistemas Operacionais – Estações de Trabalho Linux (Ubuntu / Debian LTS) para Desenvolvedores',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::SISTEMAS OPERACIONAIS',
    subCategory: 'SISTEMAS OPERACIONAIS',
    system: 'Ambiente Linux',
    type: 'Requisição de serviço',
    service: 'Suporte a Estações de Desenvolvimento',
    subject: 'Instalação de Distribuição Homologada, Repositórios Internos e Autenticação SSSD/Active Directory',
    associatedProcedureId: '',
    observacoes: 'Destinado exclusivamente a analistas e desenvolvedores de software lotados na Coordenação de TI (DITEC).',
    procedure: `1. A equipe técnica utiliza a imagem corporativa homologada: Ubuntu LTS (Long Term Support) com kernel institucional assinado.
2. Ingresso no Domínio do Senado:
   - A autenticação é configurada via SSSD (System Security Services Daemon) integrado ao Active Directory;
   - Permite login com a mesma conta de rede corporativa e montagem automática da pasta de usuário no NFS/SMB.
3. Repositórios de Pacotes e Espelhos (Mirrors):
   - Os arquivos /etc/apt/sources.list são configurados apontando para o espelho interno: http://mirror.senado.leg.br/ubuntu;
   - Docker CE e ferramentas de desenvolvimento são instalados via repositório interno seguro.
4. Para solicitar auxílio na configuração do ambiente Linux, abra chamado em: Informática > Suporte Técnico > Estação Linux.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2468;Nav=',
    attachments: [
      {
        name: 'Manual Estação Linux Senado.pdf',
        size: '315.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2468;FileID=15720'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > SISTEMAS OPERACIONAIS',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::SISTEMAS OPERACIONAIS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/02/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '05/02/2026 10:00 (Mayara Sales)',
      atualizadoEm: '05.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2468;Nav=',
      itemId: '2468'
    }
  },
  {
    id: 'faq-10002469',
    faqNumber: '10002469',
    name: 'Desenvolvimento e Segurança – Gerenciamento de Segredos e Cofre de Senhas (Vault / Key Vault)',
    category: 'CENTRAL DE ATENDIMENTO::DESENVOLVIMENTO::SEGURANÇA',
    subCategory: 'SEGURANÇA',
    system: 'Cofre de Senhas (Vault)',
    type: 'Requisição de serviço',
    service: 'Gestão de Credenciais e Segurança em DevSecOps',
    subject: 'Armazenamento Seguro de Chaves de API, Tokens JWT e Strings de Conexão com Banco de Dados',
    associatedProcedureId: '',
    observacoes: 'É estritamente proibido incluir senhas ou chaves em texto claro em commits no GitLab (proibição de hardcoded secrets).',
    procedure: `1. Todos os sistemas desenvolvidos no Senado devem recuperar credenciais dinamicamente a partir do cofre de segredos institucional:
   - Para aplicações em nuvem: Azure Key Vault com Managed Identity;
   - Para aplicações on-premises e contêineres: HashiCorp Vault integrado ao Kubernetes via agente sidecar.
2. Solicitação de Criação de Path/Secret:
   - Abra chamado na Central de Serviços: Informática > DevSecOps > Cofre de Segredos > Novo Segredo;
   - Indique o nome do projeto no GitLab e a política de rotação automática de senhas.
3. Varredura Automática de Código (SAST):
   - Os pipelines de CI/CD executam verificação com Gitleaks em todo push; commits que contiverem tokens serão bloqueados automaticamente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2469;Nav=',
    attachments: [
      {
        name: 'Norma de Gestão de Segredos Senado.pdf',
        size: '295.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2469;FileID=15721'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > DESENVOLVIMENTO > SEGURANÇA',
      categoria: 'CENTRAL DE ATENDIMENTO::DESENVOLVIMENTO::SEGURANÇA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/02/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '05/02/2026 10:30 (Mayara Sales)',
      atualizadoEm: '05.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2469;Nav=',
      itemId: '2469'
    }
  },
  {
    id: 'faq-10002470',
    faqNumber: '10002470',
    name: 'Desenvolvimento – Esteira de Integração e Entrega Contínua (CI/CD GitLab Runners)',
    category: 'CENTRAL DE ATENDIMENTO::DESENVOLVIMENTO::DEVOPS',
    subCategory: 'DEVOPS',
    system: 'GitLab CI/CD',
    type: 'Requisição de serviço',
    service: 'Gestão de Ciclo de Vida de Aplicações',
    subject: 'Uso de Runners Compartilhados, Execução de Testes Automatizados e Deploy em Homologação',
    associatedProcedureId: '',
    observacoes: 'Pipelines utilizam contêineres Docker isolados e efêmeros para cada etapa do build.',
    procedure: `1. Para configurar a esteira automatizada no seu repositório:
   - Crie o arquivo .gitlab-ci.yml na raiz do projeto;
   - Defina os estágios (stages): build, test, security_scan e deploy.
2. Utilização dos Runners Oficiais:
   - Utilize as tags corporativas: "docker-shared", "sonarqube" e "k8s-deploy";
   - Evite salvar dados no disco local do runner; use artefatos (artifacts) e cache compartilhado.
3. Variáveis de Ambiente da Esteira:
   - Configure variáveis protegidas e mascaradas em Settings > CI/CD > Variables no GitLab para evitar vazamentos em logs de build.
4. Para habilitar um runner dedicado para projetos de alta demanda computacional, contate a equipe de DevOps via Central de Serviços.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2470;Nav=',
    attachments: [
      {
        name: 'Manual GitLab CI CD Senado.pdf',
        size: '325.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2470;FileID=15722'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > DESENVOLVIMENTO > DEVOPS',
      categoria: 'CENTRAL DE ATENDIMENTO::DESENVOLVIMENTO::DEVOPS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/02/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '05/02/2026 11:00 (Mayara Sales)',
      atualizadoEm: '05.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2470;Nav=',
      itemId: '2470'
    }
  },
  {
    id: 'faq-10002471',
    faqNumber: '10002471',
    name: 'Comunicação Oficial – Criação e Gestão de Caixas Postais Departamentais / Compartilhadas',
    category: 'CENTRAL DE ATENDIMENTO::CORREIO ELETRÔNICO::CAIXAS COMPARTILHADAS',
    subCategory: 'CAIXAS COMPARTILHADAS',
    system: 'Correio Eletrônico',
    type: 'Requisição de serviço',
    service: 'Administração de Mensageria e Correio Eletrônico',
    subject: 'Solicitação de E-mail Setorial, Concessão de Permissão Enviar Como (Send As) e Acesso Compartilhado',
    associatedProcedureId: '',
    observacoes: 'Caixas compartilhadas não consomem licença nominal e devem representar um setor ou comissão oficial.',
    procedure: `1. A chefia imediata da unidade autua chamado na Central de Serviços:
   Informática > Correio Eletrônico > Caixa Compartilhada > Criação / Alteração.
2. No corpo do chamado, forneça:
   - Nome de exibição pretendido (Ex: "Comissão de Ética e Decoro Parlamentar");
   - Endereço de e-mail solicitado (Ex: comissao.etica@senado.leg.br);
   - Lista de matrículas e nomes dos servidores que terão permissão de leitura ("Full Access");
   - Lista de servidores autorizados a responder em nome da caixa ("Send As" ou "Send on Behalf").
3. Abertura da Caixa no Outlook:
   - No Outlook Web (OWA): Clique na foto de perfil > "Abrir outra caixa de correio" e digite o endereço;
   - No Outlook Desktop: A caixa é mapeada automaticamente no painel lateral esquerdo em até 2 horas.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2471;Nav=',
    attachments: [
      {
        name: 'Procedimento Caixas Compartilhadas O365.pdf',
        size: '280.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2471;FileID=15723'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > CORREIO ELETRÔNICO > CAIXAS COMPARTILHADAS',
      categoria: 'CENTRAL DE ATENDIMENTO::CORREIO ELETRÔNICO::CAIXAS COMPARTILHADAS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/02/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '05/02/2026 11:30 (Mayara Sales)',
      atualizadoEm: '05.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2471;Nav=',
      itemId: '2471'
    }
  },
  {
    id: 'faq-10002472',
    faqNumber: '10002472',
    name: 'Comunicação Oficial – Criação e Modificação de Listas de Distribuição de E-mail',
    category: 'CENTRAL DE ATENDIMENTO::CORREIO ELETRÔNICO::LISTAS DE DISTRIBUIÇÃO',
    subCategory: 'LISTAS DE DISTRIBUIÇÃO',
    system: 'Correio Eletrônico',
    type: 'Requisição de serviço',
    service: 'Administração de Mensageria e Correio Eletrônico',
    subject: 'Cadastro de Grupos de Distribuição Internos, Regras de Moderação e Restrição de Remetentes',
    associatedProcedureId: '',
    observacoes: 'Listas amplas com envio para mais de 500 destinatários exigem aprovação da Secretaria de Comunicação (SECOM).',
    procedure: `1. O gestor da unidade deve registrar chamado na Central de Serviços:
   Informática > Correio Eletrônico > Lista de Distribuição.
2. Parâmetros da Lista:
   - Endereço da lista (Ex: lista.nucleotecnico@senado.leg.br);
   - Matrículas dos proprietários responsáveis pela inclusão e exclusão de membros;
   - Tipo de restrição de envio: "Somente remetentes internos" (padrão) ou "Recebe mensagens de e-mails externos".
3. Ativação de Moderação:
   - Para listas institucionais de avisos gerais, é ativada a moderação obrigatória onde cada mensagem necessita de aprovação manual do moderador antes do envio aos membros.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2472;Nav=',
    attachments: [
      {
        name: 'Norma de Uso de Listas de E-mail.pdf',
        size: '270.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2472;FileID=15724'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > CORREIO ELETRÔNICO > LISTAS DE DISTRIBUIÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::CORREIO ELETRÔNICO::LISTAS DE DISTRIBUIÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/02/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '05/02/2026 12:00 (Mayara Sales)',
      atualizadoEm: '05.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2472;Nav=',
      itemId: '2472'
    }
  },
  {
    id: 'faq-10002473',
    faqNumber: '10002473',
    name: 'Trabalho Híbrido – Empréstimo de Equipamentos de TI para Viagens Oficiais e Missões Internacionais',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::EQUIPAMENTOS ESPECIAIS',
    subCategory: 'EQUIPAMENTOS ESPECIAIS',
    system: 'Patrimônio de TI',
    type: 'Requisição de serviço',
    service: 'Apoio a Missões Parlamentares e Viagens Oficiais',
    subject: 'Solicitação de Notebook Seguro e Modem 4G/5G Portátil para Atividade Parlamentar Externa',
    associatedProcedureId: '',
    observacoes: 'Solicitar com antecedência mínima de 5 dias úteis antes da data de embarque da comitiva.',
    procedure: `1. O gabinete ou comissão autua processo no SIGAD contendo a Portaria de Designação de Missão Oficial.
2. Registre chamado na Central de Serviços:
   Informática > Suporte Técnico > Empréstimo Temporário de TI para Missão Oficial.
3. Equipamentos disponibilizados:
   - Notebook corporativo pré-configurado com VPN, certificados e criptografia de disco;
   - Modem Wi-Fi 4G/5G portátil (mini roteador) com franquia de dados ativada para território nacional ou roaming internacional aprovado;
   - Adaptadores universais de tomada e travas de segurança Kensington.
4. O servidor responsável assina o Termo de Cautela Provisória na retirada e devolve os itens em até 2 dias úteis após o retorno.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2473;Nav=',
    attachments: [
      {
        name: 'Termo de Cautela Equipamentos Missão.pdf',
        size: '260.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2473;FileID=15725'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > EQUIPAMENTOS ESPECIAIS',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::EQUIPAMENTOS ESPECIAIS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/02/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '05/02/2026 12:30 (Mayara Sales)',
      atualizadoEm: '05.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2473;Nav=',
      itemId: '2473'
    }
  },
  {
    id: 'faq-10002474',
    faqNumber: '10002474',
    name: 'Acessibilidade Digital – Suporte a Leitores de Tela e Tecnologias Assistivas no Senado',
    category: 'CENTRAL DE ATENDIMENTO::ACESSIBILIDADE::TECNOLOGIA ASSISTIVA',
    subCategory: 'TECNOLOGIA ASSISTIVA',
    system: 'Acessibilidade Digital',
    type: 'Requisição de serviço',
    service: 'Inclusão Digital e Adaptação de Posto de Trabalho',
    subject: 'Instalação e Configuração de NVDA, JAWS, Ampliadores de Tela e Linhas Braille',
    associatedProcedureId: '',
    observacoes: 'Atendimento prioritário prestado pelo Núcleo de Acessibilidade e Inclusão da DITEC.',
    procedure: `1. Para servidores, colaboradores ou estagiários com deficiência visual ou baixa visão que necessitem de software de tecnologia assistiva:
   - Abra chamado na Central de Serviços: Informática > Acessibilidade > Tecnologia Assistiva.
2. Softwares Homologados e Disponíveis:
   - NVDA (NonVisual Desktop Access): Instalado com sintetizadores de voz de alta naturalidade;
   - JAWS for Windows: Disponível mediante licença institucional;
   - ZoomText / Lupa do Windows: Para servidores com baixa visão;
   - Teclados com marcações Braille em alto-relevo e suporte a linhas Braille eletrônicas via USB.
3. A equipe técnica especializada realiza a visita técnica presencial ou remota para calibração personalizada dos atalhos de navegação no SIGAD e sistemas legislativos.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2474;Nav=',
    attachments: [
      {
        name: 'Manual Tecnologias Assistivas Senado.pdf',
        size: '335.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2474;FileID=15726'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > ACESSIBILIDADE > TECNOLOGIA ASSISTIVA',
      categoria: 'CENTRAL DE ATENDIMENTO::ACESSIBILIDADE::TECNOLOGIA ASSISTIVA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/02/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '05/02/2026 13:00 (Mayara Sales)',
      atualizadoEm: '05.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2474;Nav=',
      itemId: '2474'
    }
  }
];
