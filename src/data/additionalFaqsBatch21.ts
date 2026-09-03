import { FAQ } from '@/types';

export const additionalFaqsBatch21: FAQ[] = [
  {
    id: 'faq-1000797',
    faqNumber: '1000797',
    name: 'SIGAD – Erro ao Assinar Documento Digitalmente',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS ADMINISTRATIVOS::SIGAD',
    subCategory: 'SIGAD',
    system: 'SIGAD',
    type: 'Incidente',
    service: 'Sistemas Administrativos',
    subject: 'Falha no Componente de Assinatura Digital do SIGAD',
    associatedProcedureId: '',
    observacoes: 'Geralmente associado ao WebPKI desatualizado ou certificado digital A1/A3 não reconhecido pelo navegador.',
    procedure: `1. Verifique se a extensão WebPKI está instalada e ativa no Google Chrome ou Edge.
2. Certifique-se de que o token/cartão criptográfico esteja conectado e reconhecido no Gerenciador de Certificados (certmgr.msc).
3. Caso o erro informe "Falha de comunicação com o assinador", encerre o processo do WebPKI no Gerenciador de Tarefas e recarregue a página (F5).
4. Limpe o cache e cookies do navegador (Ctrl + Shift + Del) selecionando as últimas 24 horas.
5. Se persistir, reinstale a extensão e o aplicativo desktop WebPKI a partir da intranet do Senado.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=797;Nav=',
    attachments: [
      {
        name: 'SIGAD – Guia de Solução de Assinatura.pdf',
        size: '352.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=797;FileID=15653'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS ADMINISTRATIVOS > SIGAD',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS ADMINISTRATIVOS::SIGAD',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/01/2024 09:00 (Mayara Sales)',
      alterado: '19/01/2026 10:00 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=797;Nav=',
      itemId: '797'
    }
  },
  {
    id: 'faq-1000798',
    faqNumber: '1000798',
    name: 'SIGAD – Permissão de Acesso a Processos Restritos e Sigilosos',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS ADMINISTRATIVOS::SIGAD',
    subCategory: 'SIGAD',
    system: 'SIGAD',
    type: 'Requisição de serviço',
    service: 'Sistemas Administrativos',
    subject: 'Concessão de Credencial e Acesso a Processos Sigilosos',
    associatedProcedureId: '',
    observacoes: 'Processos com nível de sigilo reservado ou confidencial exigem formalização do gestor da unidade produtora.',
    procedure: `1. Informe ao usuário que a concessão de acesso a processos restritos/sigilosos depende de autorização expressa da unidade de origem.
2. A chefia da unidade solicitante deve despachar o pedido formal dentro do próprio processo ou via memorando eletrônico direcionado à unidade custodiante.
3. Após o deferimento, o administrador local da unidade inclui a matrícula do servidor no grupo de acesso do documento.
4. O suporte Nível 1 não possui prerrogativa de quebra de sigilo ou inclusão manual de permissão sem trâmite oficial.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=798;Nav=',
    attachments: [
      {
        name: 'SIGAD – Manual de Níveis de Sigilo.pdf',
        size: '289.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=798;FileID=15654'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS ADMINISTRATIVOS > SIGAD',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS ADMINISTRATIVOS::SIGAD',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/01/2024 09:30 (Mayara Sales)',
      alterado: '19/01/2026 10:30 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=798;Nav=',
      itemId: '798'
    }
  },
  {
    id: 'faq-1000799',
    faqNumber: '1000799',
    name: 'ERGON – Falha no Acesso ao Portal do Servidor / Contracheque',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS ADMINISTRATIVOS::ERGON',
    subCategory: 'ERGON',
    system: 'ERGON',
    type: 'Incidente',
    service: 'Sistemas de Recursos Humanos',
    subject: 'Erro de Autenticação ou Bloqueio no Portal do Servidor (ERGON)',
    associatedProcedureId: '',
    observacoes: 'Servidores ativos, aposentados e pensionistas utilizam a autenticação integrada com o Gov.br ou login de rede.',
    procedure: `1. Verifique se o servidor está tentando acessar via Portal do Servidor (intranet) ou pelo aplicativo móvel.
2. Se o erro for "Usuário ou senha inválidos", tente a redefinição de senha do login institucional (FAQ#: 1000701).
3. Se for aposentado/pensionista sem rede do Senado, oriente o acesso pelo Gov.br (nível Prata ou Ouro).
4. Caso a conta esteja bloqueada por excesso de tentativas, contate o Serviço de Cadastro e Pagamento de Pessoal (SECAPP/DGP).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=799;Nav=',
    attachments: [
      {
        name: 'ERGON – Instruções de Acesso ao Contracheque.pdf',
        size: '304.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=799;FileID=15655'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS ADMINISTRATIVOS > ERGON',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS ADMINISTRATIVOS::ERGON',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/01/2024 10:00 (Mayara Sales)',
      alterado: '19/01/2026 11:00 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=799;Nav=',
      itemId: '799'
    }
  },
  {
    id: 'faq-1000800',
    faqNumber: '1000800',
    name: 'ERGON – Homologação de Férias e Afastamentos',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS ADMINISTRATIVOS::ERGON',
    subCategory: 'ERGON',
    system: 'ERGON',
    type: 'Requisição de serviço',
    service: 'Sistemas de Recursos Humanos',
    subject: 'Trâmite e Dúvidas sobre Marcação de Férias no ERGON Online',
    associatedProcedureId: '',
    observacoes: 'A homologação deve ser feita pela chefia imediata no prazo estipulado pelo calendário da DGP.',
    procedure: `1. O servidor deve cadastrar a programação de férias no ERGON Online no menu: Férias > Agendamento.
2. A chefia imediata recebe notificação por e-mail e deve acessar a tela "Homologação de Férias de Subordinados".
3. Se a chefia não conseguir visualizar o servidor na sua equipe, verifique se a lotação física e chefia estão devidamente atualizadas no SECAPP.
4. Para alterações ou interrupções de férias já homologadas, deve ser autuado processo no SIGAD.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=800;Nav=',
    attachments: [
      {
        name: 'ERGON – Agendamento e Homologação de Férias.pdf',
        size: '315.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=800;FileID=15656'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS ADMINISTRATIVOS > ERGON',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS ADMINISTRATIVOS::ERGON',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/01/2024 10:30 (Mayara Sales)',
      alterado: '19/01/2026 11:30 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=800;Nav=',
      itemId: '800'
    }
  },
  {
    id: 'faq-1000801',
    faqNumber: '1000801',
    name: 'Microsoft Teams – Falha de Logon com Conta Institucional',
    category: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::TEAMS',
    subCategory: 'TEAMS',
    system: 'Microsoft 365',
    type: 'Incidente',
    service: 'Ferramentas de Colaboração e Videoconferência',
    subject: 'Erro de Autenticação / Código CAA2000B ou CAA5004B no Teams',
    associatedProcedureId: '',
    observacoes: 'Comum após troca de senha de rede ou expiração do token de autenticação moderna (ADAL/MSAL).',
    procedure: `1. Feche completamente o Microsoft Teams (clique com o botão direito no ícone da bandeja perto do relógio e escolha Encerrar).
2. Abra o diálogo Executar (Win + R) e digite: %appdata%\\Microsoft\\Teams
3. Exclua todos os arquivos e pastas contidos nesse diretório (ou limpe a pasta %localappdata%\\Packages\\MSTeams_8wekyb3d8bbwe no novo Teams).
4. Abra o Gerenciador de Credenciais do Windows > Credenciais do Windows e remova entradas que iniciem com "msteams" ou "MicrosoftAccount".
5. Reinicie o aplicativo Teams e efetue logon com login@senado.leg.br e a senha institucional.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=801;Nav=',
    attachments: [
      {
        name: 'Teams – Limpeza de Cache de Autenticação.pdf',
        size: '340.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=801;FileID=15657'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > FERRAMENTAS COLABORATIVAS > TEAMS',
      categoria: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::TEAMS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/01/2024 11:00 (Mayara Sales)',
      alterado: '19/01/2026 12:00 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=801;Nav=',
      itemId: '801'
    }
  },
  {
    id: 'faq-1000802',
    faqNumber: '1000802',
    name: 'Microsoft Teams – Gravação de Reuniões e Compartilhamento',
    category: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::TEAMS',
    subCategory: 'TEAMS',
    system: 'Microsoft 365',
    type: 'Requisição de serviço',
    service: 'Ferramentas de Colaboração e Videoconferência',
    subject: 'Permissões e Armazenamento de Vídeos Gravados no Teams/OneDrive',
    associatedProcedureId: '',
    observacoes: 'As gravações de reuniões são armazenadas no OneDrive do organizador ou no canal SharePoint da equipe.',
    procedure: `1. Para iniciar uma gravação, o usuário deve ser organizador ou apresentador da reunião: clique em "Mais" (...) > "Gravar e transcrever" > "Iniciar gravação".
2. Ao finalizar, o vídeo é processado e disponibilizado automaticamente no chat da reunião.
3. Para conceder acesso a participantes externos ou convidados que não estiveram na chamada:
   - Abra o vídeo no OneDrive/SharePoint;
   - Clique em "Compartilhar" e defina o nível de permissão (exibir ou editar);
   - Copie o link e envie aos interessados.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=802;Nav=',
    attachments: [
      {
        name: 'Teams – Gestão de Gravações e Permissões.pdf',
        size: '276.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=802;FileID=15658'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > FERRAMENTAS COLABORATIVAS > TEAMS',
      categoria: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::TEAMS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/01/2024 11:30 (Mayara Sales)',
      alterado: '19/01/2026 12:30 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=802;Nav=',
      itemId: '802'
    }
  },
  {
    id: 'faq-1000803',
    faqNumber: '1000803',
    name: 'Videoconferência – Integração Zoom / Webex em Comissões',
    category: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::VIDEOCONFERÊNCIA',
    subCategory: 'VIDEOCONFERÊNCIA',
    system: 'Videoconferência',
    type: 'Requisição de serviço',
    service: 'Apoio a Reuniões de Comissões e Audiências Públicas',
    subject: 'Configuração de Sala Híbrida e Equipamentos Audiovisuais',
    associatedProcedureId: '',
    observacoes: 'Atendimento prioritário prestado em conjunto com a Coordenação de Áudio e Vídeo (SEAV).',
    procedure: `1. Verifique se o evento foi previamente cadastrado na pauta de audiências ou comissões permanentes.
2. Certifique-se de que os codecs Cisco/Polycom da sala estejam ligados e conectados à rede dedicada de streaming.
3. No terminal de controle de mesa, selecione o perfil da transmissão (Zoom Rooms ou Webex Teams).
4. Teste os microfones da mesa diretora e os retornos de áudio para os participantes remotos.
5. Em caso de falha de retorno ou atraso (delay), contate imediatamente o operador de plantão da SEAV via rádio/ramal interno.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=803;Nav=',
    attachments: [
      {
        name: 'Guia Rápido Audiências Híbridas.pdf',
        size: '420.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=803;FileID=15659'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > FERRAMENTAS COLABORATIVAS > VIDEOCONFERÊNCIA',
      categoria: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::VIDEOCONFERÊNCIA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/01/2024 12:00 (Mayara Sales)',
      alterado: '19/01/2026 13:00 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=803;Nav=',
      itemId: '803'
    }
  },
  {
    id: 'faq-1000804',
    faqNumber: '1000804',
    name: 'Sistema de Deliberação Remota (SDR) – Acesso de Senadores',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS LEGISLATIVOS::SDR',
    subCategory: 'SDR',
    system: 'SDR',
    type: 'Incidente',
    service: 'Sistemas de Apoio ao Plenário',
    subject: 'Autenticação Biométrica e Conexão no Aplicativo SDR',
    associatedProcedureId: '',
    observacoes: 'Uso exclusivo de Senadores da República e equipe de apoio credenciada pela Mesa Diretora.',
    procedure: `1. O aplicativo SDR deve estar instalado no tablet/iPad institucional oficial fornecido pela SEEMP.
2. Certifique-se de que o dispositivo possui conexão de dados segura (SIM card 5G ou Wi-Fi institucional).
3. A autenticação exige validação biométrica facial e PIN de segurança individual do parlamentar.
4. Em caso de erro "Sessão não autorizada" ou "Fora do horário de votação", confirme se a ordem do dia está aberta no painel da Mesa.
5. Suporte emergencial de plenário deve acionar o ramal 3333 opção 1 (Urgência Plenário/Comissões).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=804;Nav=',
    attachments: [
      {
        name: 'Manual Operacional do SDR.pdf',
        size: '512.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=804;FileID=15660'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS LEGISLATIVOS > SDR',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS LEGISLATIVOS::SDR',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/01/2024 12:30 (Mayara Sales)',
      alterado: '19/01/2026 13:30 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=804;Nav=',
      itemId: '804'
    }
  },
  {
    id: 'faq-1000805',
    faqNumber: '1000805',
    name: 'Painel Eletrônico do Plenário – Verificação e Suporte Operacional',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS LEGISLATIVOS::PAINEL PLENÁRIO',
    subCategory: 'PAINEL PLENÁRIO',
    system: 'Painel do Plenário',
    type: 'Incidente',
    service: 'Sistemas de Apoio ao Plenário',
    subject: 'Conferência de Quórum, Terminais de Bancada e Telão Central',
    associatedProcedureId: '',
    observacoes: 'Procedimento conjunto entre a equipe de Engenharia de Plenário (SEDAN/COTIS) e Nível 2.',
    procedure: `1. Antes do início da sessão deliberativa, realize o autoteste em todos os terminais biométricos das bancadas dos Senadores.
2. Verifique se o software de totalização de votos está sincronizado com a base de dados principal e espelho.
3. No caso de não registro de presença em uma bancada específica:
   - Reinicie o leitor biométrico USB do terminal;
   - Realize a calibração com cartão magnético mestre de teste;
   - Se a falha persistir, direcione o parlamentar para o terminal reserva imediatamente ao lado.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=805;Nav=',
    attachments: [
      {
        name: 'Painel Eletrônico – Procedimento Preventivo.pdf',
        size: '388.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=805;FileID=15661'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS LEGISLATIVOS > PAINEL PLENÁRIO',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS LEGISLATIVOS::PAINEL PLENÁRIO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/01/2024 13:00 (Mayara Sales)',
      alterado: '19/01/2026 14:00 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=805;Nav=',
      itemId: '805'
    }
  },
  {
    id: 'faq-1000806',
    faqNumber: '1000806',
    name: 'SICON – Pesquisa de Legislação e Normas Jurídicas',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS LEGISLATIVOS::SICON',
    subCategory: 'SICON',
    system: 'SICON',
    type: 'Requisição de serviço',
    service: 'Sistemas de Informações Jurídicas e Legislativas',
    subject: 'Consultas Avançadas de Leis, Decretos e Proposições no SICON',
    associatedProcedureId: '',
    observacoes: 'Base referencial de legislação federal e regimental mantida pela Secretaria Geral da Mesa.',
    procedure: `1. Acesse o portal SICON pela intranet ou pelo endereço público: https://legis.senado.leg.br/sicon/.
2. Utilize operadores booleanos (E, OU, NÃO) e aspas para termos exatos na busca textual.
3. É possível filtrar por tipo de norma (Emenda Constitucional, Lei Ordinária, Decreto, Resolução do Senado).
4. Para dúvidas sobre vigência ou revogação de dispositivos legais, consulte a equipe da Coordenação de Indexação e Atualização de Legislação (COINLEG).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=806;Nav=',
    attachments: [
      {
        name: 'Guia do Usuário SICON.pdf',
        size: '298.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=806;FileID=15662'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS LEGISLATIVOS > SICON',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS LEGISLATIVOS::SICON',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/01/2024 13:30 (Mayara Sales)',
      alterado: '19/01/2026 14:30 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=806;Nav=',
      itemId: '806'
    }
  },
  {
    id: 'faq-1000807',
    faqNumber: '1000807',
    name: 'Diário do Senado Federal (DSF) – Consulta e Publicações Oficiais',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS LEGISLATIVOS::PUBLICAÇÕES',
    subCategory: 'PUBLICAÇÕES',
    system: 'DSF',
    type: 'Requisição de serviço',
    service: 'Sistemas de Publicação Oficial e Gráfica',
    subject: 'Envio de Matérias e Consulta às Edições do Diário Oficial',
    associatedProcedureId: '',
    observacoes: 'Submissão de matérias segue horário de corte fixado pela Coordenação de Edição do Diário.',
    procedure: `1. Para submeter textos para publicação no Diário do Senado Federal, a unidade deve utilizar o módulo editorial do SIGAD.
2. Os arquivos devem obedecer aos padrões tipográficos definidos pela Secretaria de Editoração e Publicações (SEEP).
3. O download de edições anteriores está disponível na Biblioteca Digital e no Portal do Senado em formato PDF pesquisável (OCR).
4. Em caso de retificação de matéria já publicada, deve ser solicitada formalmente via errata autuada no SIGAD.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=807;Nav=',
    attachments: [
      {
        name: 'Normas de Publicação no DSF.pdf',
        size: '310.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=807;FileID=15663'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS LEGISLATIVOS > PUBLICAÇÕES',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS LEGISLATIVOS::PUBLICAÇÕES',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/01/2024 14:00 (Mayara Sales)',
      alterado: '19/01/2026 15:00 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=807;Nav=',
      itemId: '807'
    }
  },
  {
    id: 'faq-1000808',
    faqNumber: '1000808',
    name: 'Biblioteca Digital do Senado (BDS) – Acesso e Empréstimo',
    category: 'CENTRAL DE ATENDIMENTO::SERVIÇOS AO CIDADÃO::BIBLIOTECA DIGITAL',
    subCategory: 'BIBLIOTECA DIGITAL',
    system: 'Biblioteca Digital',
    type: 'Requisição de serviço',
    service: 'Acervo Bibliográfico e Repositórios',
    subject: 'Cadastro de Usuários, Reserva de Obras e Download de Livros Digitais',
    associatedProcedureId: '',
    observacoes: 'Acesso público para obras de domínio público e edições próprias do Conselho Editorial.',
    procedure: `1. Acesse https://www2.senado.leg.br/bdsf/.
2. Servidores e assessores parlamentares podem efetuar login para renovação de empréstimos físicos de livros do acervo acadêmico.
3. Para solicitar digitalização de capítulos ou artigos para pesquisa legislativa, abra solicitação no catálogo da Biblioteca Acadêmico Luiz Viana Filho.
4. E-books das coleções históricas podem ser baixados gratuitamente em formatos PDF e EPUB sem necessidade de login.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=808;Nav=',
    attachments: [
      {
        name: 'Manual da Biblioteca Digital.pdf',
        size: '275.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=808;FileID=15664'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SERVIÇOS AO CIDADÃO > BIBLIOTECA DIGITAL',
      categoria: 'CENTRAL DE ATENDIMENTO::SERVIÇOS AO CIDADÃO::BIBLIOTECA DIGITAL',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/01/2024 14:30 (Mayara Sales)',
      alterado: '19/01/2026 15:30 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=808;Nav=',
      itemId: '808'
    }
  },
  {
    id: 'faq-1000809',
    faqNumber: '1000809',
    name: 'Portal e-Cidadão – Gestão de Ideias Legislativas e Consultas Públicas',
    category: 'CENTRAL DE ATENDIMENTO::SERVIÇOS AO CIDADÃO::E-CIDADÃO',
    subCategory: 'E-CIDADÃO',
    system: 'e-Cidadão',
    type: 'Requisição de serviço',
    service: 'Participação Popular e Cidadania',
    subject: 'Moderação e Apoio Técnico ao Portal e-Cidadão',
    associatedProcedureId: '',
    observacoes: 'Canal de interação direta entre a população e os projetos em tramitação no Senado.',
    procedure: `1. As propostas de ideias legislativas que alcançam 20.000 apoios em 4 meses são encaminhadas à Comissão de Direitos Humanos e Legislação Participativa (CDH).
2. Dúvidas de cidadãos sobre confirmação de voto em consultas públicas: orientar a verificação da caixa de spam do e-mail cadastrado ou login Gov.br.
3. Gabinetes parlamentares que desejam obter relatórios estatísticos de engajamento devem contatar a Coordenação de Relacionamento com o Cidadão (SELEG).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=809;Nav=',
    attachments: [
      {
        name: 'Regras de Moderação do e-Cidadão.pdf',
        size: '284.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=809;FileID=15665'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SERVIÇOS AO CIDADÃO > E-CIDADÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::SERVIÇOS AO CIDADÃO::E-CIDADÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/01/2024 15:00 (Mayara Sales)',
      alterado: '19/01/2026 16:00 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=809;Nav=',
      itemId: '809'
    }
  },
  {
    id: 'faq-1000810',
    faqNumber: '1000810',
    name: 'Portal da Transparência – Informações Financeiras e Orçamentárias',
    category: 'CENTRAL DE ATENDIMENTO::SERVIÇOS AO CIDADÃO::TRANSPARÊNCIA',
    subCategory: 'TRANSPARÊNCIA',
    system: 'Transparência',
    type: 'Requisição de serviço',
    service: 'Dados Abertos e Transparência Pública',
    subject: 'Consultas sobre Cota Parlamentar (CEAPS), Contratos e Remunerações',
    associatedProcedureId: '',
    observacoes: 'Cumprimento integral à Lei de Acesso à Informação (LAI) e recomendações do TCU.',
    procedure: `1. O Portal da Transparência reúne dados sobre execução orçamentária, gastos da CEAPS de senadores, licitações, contratos e quadro funcional.
2. Caso um gabinete reporte atraso na consolidação de notas fiscais de despesa, verifique se o envio na Secretaria de Finanças, Orçamento e Contabilidade (SAF) foi finalizado no prazo contábil.
3. Pedidos formais de informações não constantes no portal devem ser direcionados à Ouvidoria do Senado Federal via sistema e-SIC.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=810;Nav=',
    attachments: [
      {
        name: 'Guia de Navegação na Transparência.pdf',
        size: '295.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=810;FileID=15666'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SERVIÇOS AO CIDADÃO > TRANSPARÊNCIA',
      categoria: 'CENTRAL DE ATENDIMENTO::SERVIÇOS AO CIDADÃO::TRANSPARÊNCIA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/01/2024 15:30 (Mayara Sales)',
      alterado: '19/01/2026 16:30 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=810;Nav=',
      itemId: '810'
    }
  }
];
