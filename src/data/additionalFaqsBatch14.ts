import { FAQ } from '@/types';

export const additionalFaqsBatch14: FAQ[] = [
  {
    id: 'faq-10001207',
    faqNumber: '10001207',
    name: 'PJe – Processo Judicial Eletrônico',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PJE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do navegador PJe',
    associatedProcedureId: '',
    observacoes: 'Ao clicar para acessar com o certificado digital sem o PJeOffice rodando, será exibida a mensagem de que o assinador não foi encontrado.',
    procedure: `1. Acesse o portal oficial do PJe (https://www.pje.jus.br/navegador/).
2. Selecione o Estado e o Tribunal desejado e clique em "IR AO SITE".
3. Clique em "Entrar com PDPJ" (Plataforma Digital do Poder Judiciário).
4. Selecione a opção "Seu certificado digital".
5. Caso o assinador ainda não esteja ativo, instale e execute o PJeOffice conforme procedimento correspondente.
6. Selecione o certificado na lista e digite o PIN correspondente.`,
    relatedLinks: [
      { title: 'PJe Navegador', url: 'https://www.pje.jus.br/navegador/' },
      { title: 'PJeOffice – Instalação', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1208' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1207;Nav=',
    attachments: [
      {
        name: 'PJe – Processo Judicial Eletrônico.pdf',
        size: '375.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1207;FileID=12138'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1207;FileID=12141' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1207;FileID=12142' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > PJE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PJE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '31/01/2024 12:33 (Leonardo Silva de Amarante)',
      alterado: '17/06/2025 13:48 (Mayara Sales)',
      atualizadoEm: '17.06.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1207;Nav=',
      itemId: '1207'
    }
  },
  {
    id: 'faq-10001208',
    faqNumber: '10001208',
    name: 'PJeOffice – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PJE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do PJe Office',
    associatedProcedureId: '',
    observacoes: 'Software oficial do CNJ para assinatura eletrônica de documentos e autenticação em tribunais pelo sistema PJe.',
    procedure: `1. Execute o instalador em X:\\Pje (CNJ)\\PjeOffice (CNJ).
2. Clique em "Sim" nas telas de controle e informe o número do chamado.
3. Clique em "Instalar" e aguarde a conclusão.
4. Clique em "Concluir" para iniciar o PJeOffice.
5. Ao conectar na Plataforma Digital do Poder Judiciário (PDPJ), autorize o acesso clicando em "Sempre".
6. Selecione o certificado na janela "Certificados Disponíveis" e digite o PIN correspondente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1208;Nav=',
    attachments: [
      {
        name: 'PJeOffice – Instalação.pdf',
        size: '551.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1208;FileID=12200'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1208;FileID=12151' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1208;FileID=12149' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > PJE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PJE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '31/01/2024 12:38 (Leonardo Silva de Amarante)',
      alterado: '18/06/2025 07:37 (Mayara Sales)',
      atualizadoEm: '17.06.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1208;Nav=',
      itemId: '1208'
    }
  },
  {
    id: 'faq-10002327',
    faqNumber: '10002327',
    name: 'Informações sobre o certificado PJe',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PJE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Solicita orientações sobre o certificado PJe',
    associatedProcedureId: '',
    observacoes: 'Para assinar no PJe o certificado deve ser e-CPF ICP-Brasil. Também é possível entrar com conta Gov.br nível Ouro.',
    procedure: `1. O acesso e a assinatura de documentos no PJe exigem certificado do tipo e-CPF emitido sob a cadeia oficial ICP-Brasil.
2. Tipos suportados:
   - Tipo A1: arquivo instalado diretamente no computador (.pfx / .p12).
   - Tipo A3: armazenado em mídia física criptográfica (Token USB ou Cartão Smartcard com leitora) ou certificado em nuvem.
3. Se o acesso for feito via conta gov.br na PDPJ, ela deve possuir obrigatoriamente nível Ouro para viabilizar assinatura de peças processuais.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2327;Nav=',
    attachments: [
      {
        name: 'Informações sobre o certificado PJe.pdf',
        size: '214.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2327;FileID=16006'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2327;FileID=16005' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > PJE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PJE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '26/02/2026 18:15 (Leonardo Silva de Amarante)',
      alterado: '26/02/2026 18:16 (Leonardo Silva de Amarante)',
      atualizadoEm: '26.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2327;Nav=',
      itemId: '2327'
    }
  },
  {
    id: 'faq-1000896',
    faqNumber: '1000896',
    name: 'Power BI Desktop – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::POWER BI DESKTOP::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do Power BI Desktop',
    associatedProcedureId: '',
    observacoes: 'SOFTWARE RESTRITO. Solução de análise e modelagem de relatórios (.pbix). Necessário solicitar autorização via Central de Serviços.',
    procedure: `1. Solicitar autorização de uso na Central de Serviços:
   Intranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.
2. Execute o instalador em X:\\Power BI Desktop (Microsoft).
3. Confirme o prompt de segurança e informe o número do chamado.
4. Conclua a instalação e abra o Power BI Desktop.
5. Na tela de login, insira o e-mail corporativo (@senado.leg.br) e senha de rede.
6. Após a autenticação, os recursos autorizados estarão disponíveis.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=896;Nav=',
    attachments: [
      {
        name: 'Power BI Desktop – Instalação.pdf',
        size: '581.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=896;FileID=16077'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=896;FileID=16080' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=896;FileID=13954' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > POWER BI DESKTOP > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::POWER BI DESKTOP::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 10:16 (Leonardo Silva de Amarante)',
      alterado: '13/03/2026 11:44 (Mayara Sales)',
      atualizadoEm: '13.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=896;Nav=',
      itemId: '896'
    }
  },
  {
    id: 'faq-1000894',
    faqNumber: '1000894',
    name: 'Power Log 430 – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::POWER LOG 430::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do software Power Log 430',
    associatedProcedureId: '',
    observacoes: 'SOFTWARE RESTRITO. Utilizado exclusivamente por técnicos da SINFRA para conexão aos analisadores de qualidade de energia elétrica Fluke.',
    procedure: `1. Requer autorização prévia na Central de Serviços (SINFRA).
2. Execute o instalador localizado em X:\\Power Log 430-II (Fluke).
3. Confirme os avisos do sistema e informe o número do chamado.
4. Avance pelas etapas do instalador da Fluke e clique em "Instalar".
5. Conclua a instalação e conecte o equipamento via cabo USB.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=894;Nav=',
    attachments: [
      {
        name: 'Power Log 430 – Instalação.pdf',
        size: '455.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=894;FileID=14086'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=894;FileID=14087' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=894;FileID=14076' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > POWER LOG 430 > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::POWER LOG 430::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '14/10/2025 11:30 (Mayara Sales)',
      atualizadoEm: '14.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=894;Nav=',
      itemId: '894'
    }
  },
  {
    id: 'faq-1000892',
    faqNumber: '1000892',
    name: 'Presence Suite – Possíveis Erros',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PRESENCE SUITE::ERRO',
    subCategory: 'ERRO',
    system: 'Telefonia',
    type: 'Incidente',
    service: 'Suporte a Software de Estação de Trabalho',
    subject: 'Informações sobre erros no Presence Suite',
    associatedProcedureId: '',
    observacoes: 'SEMPRE conectar o headset antes de efetuar login no sistema. Se o fone estiver desconectado ocorrem os erros PPN: 0100000 (tempo de espera superado) e SRV-02010007 (impossível realizar login no ACD).',
    procedure: `1. Caso o fone não esteja conectado, conecte o headset USB.
2. Abra o Gerenciador de Tarefas do Windows > guia "Serviços".
3. Localize e pare o serviço "tSIP" clicando em Parar, depois reinicie-o clicando em Iniciar.
4. Para corrigir delay na chamada ou áudio ecoando:
   - Clique com botão direito no ícone de som na bandeja > "Sons" (ou Dispositivos de Gravação).
   - Na aba Gravação, desabilite "Mixagem Estéreo" e deixe apenas o Microfone do Headset como padrão.
   - Na aba Reprodução, confirme o Headset como dispositivo de comunicação padrão.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=892;Nav=',
    attachments: [
      {
        name: 'Presence Suite – Possíveis Erros.pdf',
        size: '1.2 MBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=892;FileID=14095'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=892;FileID=14098' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=892;FileID=14092' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > PRESENCE SUITE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PRESENCE SUITE::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 09:51 (Leonardo Silva de Amarante)',
      alterado: '14/10/2025 13:30 (Mayara Sales)',
      atualizadoEm: '14.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=892;Nav=',
      itemId: '892'
    }
  },
  {
    id: 'faq-1000887',
    faqNumber: '1000887',
    name: 'Presence Suite – Acesso ao Agent',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PRESENCE SUITE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Telefonia',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Informações sobre Acesso ao Agent',
    associatedProcedureId: '',
    observacoes: 'O cadastro do colaborador é realizado pela equipe da COOTELE (ramal 7000) com envio de nome completo, CPF e turno de trabalho.',
    procedure: `1. O primeiro acesso ao Agent deve ser feito utilizando o CPF como login e o campo de senha em branco.
2. O sistema solicitará o cadastramento imediato de uma nova senha pessoal.
3. Digite e confirme a nova senha.
4. Em caso de esquecimento da senha, o supervisor deve entrar em contato com a equipe COOTELE no ramal 7000 solicitando o reset.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=887;Nav=',
    attachments: [
      {
        name: 'Presence Suite – Acesso ao Agent.pdf',
        size: '255.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=887;FileID=14100'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=887;FileID=14102' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=887;FileID=14101' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > PRESENCE SUITE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PRESENCE SUITE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 09:28 (Leonardo Silva de Amarante)',
      alterado: '14/10/2025 13:45 (Mayara Sales)',
      atualizadoEm: '14.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=887;Nav=',
      itemId: '887'
    }
  },
  {
    id: 'faq-1000888',
    faqNumber: '1000888',
    name: 'Presence Suite – Atender Ligação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PRESENCE SUITE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Telefonia',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Informações sobre atendimento de ligação no Agent',
    associatedProcedureId: '',
    procedure: `1. Ao tocar uma chamada na fila do atendimento, é possível atendê-la por duas formas:
   - Clicando diretamente sobre a janela pop-up de 'Notificação de chamada' exibida no canto inferior direito da tela;
   - Clicando no ícone do telefone na barra de ferramentas do Presence Agent e selecionando a opção 'Atender'.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=888;Nav=',
    attachments: [
      {
        name: 'Presence Suite – Atender Ligação.pdf',
        size: '284.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=888;FileID=14103'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=888;FileID=14104' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=888;FileID=14105' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > PRESENCE SUITE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PRESENCE SUITE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 09:36 (Leonardo Silva de Amarante)',
      alterado: '14/10/2025 13:59 (Mayara Sales)',
      atualizadoEm: '14.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=888;Nav=',
      itemId: '888'
    }
  },
  {
    id: 'faq-1000889',
    faqNumber: '1000889',
    name: 'Presence Suite – Função Chat',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PRESENCE SUITE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Telefonia',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Informações sobre Função Chat',
    associatedProcedureId: '',
    procedure: `1. Na janela do Presence Agent, clique no ícone em formato de "mão" levantada (Pedido de Assistência).
2. Selecione o supervisor que estiver com status disponível para atendimento.
3. Será enviado um alerta na tela do supervisor para interagir com o agente.
4. Assim que o supervisor aceitar, a janela de Chat será aberta para troca de mensagens em tempo real.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=889;Nav=',
    attachments: [
      {
        name: 'Presence Suite – Função Chat.pdf',
        size: '403.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=889;FileID=14108'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=889;FileID=14106' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=889;FileID=14107' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > PRESENCE SUITE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PRESENCE SUITE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 09:38 (Leonardo Silva de Amarante)',
      alterado: '14/10/2025 14:15 (Mayara Sales)',
      atualizadoEm: '14.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=889;Nav=',
      itemId: '889'
    }
  },
  {
    id: 'faq-1000890',
    faqNumber: '1000890',
    name: 'Presence Suite – Opções de Pausas e Encerrando a P.A.',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PRESENCE SUITE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Telefonia',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Informações sobre Opções de Pausas e Encerrando a P.A',
    associatedProcedureId: '',
    observacoes: 'Para finalizar o turno é obrigatório selecionar a pausa "Fim de Expediente" antes de clicar em Sair.',
    procedure: `1. No canto superior esquerdo da tela do Presence Agent, clique na opção Iniciar/Parar Pausa.
2. Selecione o tipo de pausa desejada (ex.: Lanche, Banheiro, Treinamento, Feedback).
3. Clique em "Aceitar".
4. Ao retornar da pausa, clique novamente para retomar o status disponível.
5. Para encerrar o expediente: selecione a pausa "Fim de Expediente", confirme em "Aceitar" e em seguida clique no botão vermelho "Sair" na parte superior da janela.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=890;Nav=',
    attachments: [
      {
        name: 'Presence Suite – Opções de Pausas e Encerrando a P.A..pdf',
        size: '531.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=890;FileID=14114'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=890;FileID=14111' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=890;FileID=14110' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > PRESENCE SUITE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PRESENCE SUITE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 09:41 (Leonardo Silva de Amarante)',
      alterado: '14/10/2025 15:26 (Mayara Sales)',
      atualizadoEm: '14.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=890;Nav=',
      itemId: '890'
    }
  },
  {
    id: 'faq-1000891',
    faqNumber: '1000891',
    name: 'Presence Suite – Perfil Supervisor',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PRESENCE SUITE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Telefonia',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Informações sobre Perfil Supervisor do Presence',
    associatedProcedureId: '',
    observacoes: 'Acesso web em http://172.31.250.44/websupervisor. Modos de escuta pelo 3CXPhone: *37 (tempo real), *38 (fantasma - supervisor e agente) e *39 (participação na chamada).',
    procedure: `1. Acesse o Presence Web Supervisor (http://172.31.250.44/websupervisor).
2. Na aba Monitores, crie fichas de painel arrastando os componentes da equipe para monitorar filas e status dos agentes.
3. Para envio de avisos: acesse Administração > Avisos > selecione os grupos ("PRODASEN - MANHÃ", "PRODASEN - TARDE") e envie o comunicado.
4. Para escuta de gravações: acesse o ícone "Gravações", filtre pelo ramal (8017 a 8028) e data/hora.
5. Para escuta em tempo real: utilize o 3CXPhone discando o prefixo desejado (*37, *38 ou *39) + o ramal do atendente.`,
    relatedLinks: [
      { title: 'Presence Web Supervisor', url: 'http://172.31.250.44/websupervisor' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=891;Nav=',
    attachments: [
      {
        name: 'Presence Suite – Perfil Supervisor.pdf',
        size: '783.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=891;FileID=14116'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=891;FileID=14118' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=891;FileID=14125' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > PRESENCE SUITE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PRESENCE SUITE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 09:45 (Leonardo Silva de Amarante)',
      alterado: '14/10/2025 16:29 (Mayara Sales)',
      atualizadoEm: '14.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=891;Nav=',
      itemId: '891'
    }
  },
  {
    id: 'faq-1000893',
    faqNumber: '1000893',
    name: 'Presence Suite – Transferência de Ligação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PRESENCE SUITE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Telefonia',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Informações sobre Transferência de Ligações no Agent',
    associatedProcedureId: '',
    procedure: `1. Na barra do Presence Agent, clique na opção "Softphone".
2. Clique em "Agente" e selecione "Atendimento Prodasen 2000".
3. Localize o técnico desejado e verifique se ele está com status Disponível.
4. Para transferência com consulta (recomendada):
   - Chame o outro técnico para informá-lo da solicitação;
   - Em seguida, clique no botão "Transferência" para repassar o cliente.
5. O software Agent entrará momentaneamente em "Pós-chamada" e voltará a ficar disponível para nova ligação.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=893;Nav=',
    attachments: [
      {
        name: 'Presence Suite – Transferência de Ligação.pdf',
        size: '767.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=893;FileID=14128'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=893;FileID=14130' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=893;FileID=14126' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > PRESENCE SUITE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PRESENCE SUITE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 09:54 (Leonardo Silva de Amarante)',
      alterado: '15/10/2025 09:15 (Mayara Sales)',
      atualizadoEm: '14.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=893;Nav=',
      itemId: '893'
    }
  },
  {
    id: 'faq-1000884',
    faqNumber: '1000884',
    name: 'ProjectLibre – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PROJECTLIBRE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do ProjectLibre',
    associatedProcedureId: '',
    observacoes: 'Alternativa open source ao Microsoft Project, compatível com importação e exportação de arquivos no formato do Project.',
    procedure: `1. Execute o arquivo em X:\\ProjectLibre (ProjectLibre Team).
2. Confirme o prompt do Windows e informe o número do chamado.
3. Clique em "Install".
4. Aceite os termos de licença e conclua a instalação.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=884;Nav=',
    attachments: [
      {
        name: 'ProjectLibre – Instalação.pdf',
        size: '545.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=884;FileID=14134'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=884;FileID=14141' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=884;FileID=14139' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > PROJECTLIBRE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::PROJECTLIBRE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 09:03 (Leonardo Silva de Amarante)',
      alterado: '15/10/2025 09:56 (Mayara Sales)',
      atualizadoEm: '15.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=884;Nav=',
      itemId: '884'
    }
  },
  {
    id: 'faq-10002267',
    faqNumber: '10002267',
    name: 'Instalação do QGIS',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::QGIS FOUNDATION::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do programa QGIS',
    associatedProcedureId: '',
    observacoes: 'Sistema de Informação Geográfica (SIG) open-source para edição, análise e produção de mapas e dados geoespaciais.',
    procedure: `1. Execute o instalador localizado em CENTRAL_ATENDIMENTO (\\\\DRU) (X:) QGIS (QGIS Foundation).
2. Confirme clicando em "Sim" nos prompts de segurança.
3. Aguarde o processo de instalação e configuração de dependências.
4. Ao finalizar, inicie pelo Menu Iniciar: "QGIS Desktop 3.x".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2267;Nav=',
    attachments: [
      {
        name: 'Instalação do QGIS.pdf',
        size: '589.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2267;FileID=14561'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2267;FileID=14551' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2267;FileID=14552' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > QGIS FOUNDATION > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::QGIS FOUNDATION::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '23/10/2025 10:37 (Gabriel Queiroz Pires)',
      alterado: '23/10/2025 11:38 (Gabriel Queiroz Pires)',
      atualizadoEm: '23.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2267;Nav=',
      itemId: '2267'
    }
  },
  {
    id: 'faq-1000883',
    faqNumber: '1000883',
    name: 'Galileu 2.0 (QLIK SENSE)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::QLIK SENSE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Suporte a dúvida técnica/operacional',
    subject: 'Informações sobre o Galileu 2.0 (QLIK SENSE)',
    associatedProcedureId: '',
    observacoes: 'Plataforma corporativa de Business Intelligence para criação de painéis e análise analítica de dados no Senado Federal.',
    procedure: `1. Acesse a Intranet do Senado.
2. Navegue pelo menu: Ferramentas > Serviços Analíticos.
3. Clique no link "Galileu 2.0".
4. Autentique-se com sua senha de rede institucional.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=883;Nav=',
    attachments: [
      {
        name: 'Galileu 2.0 (QLIK SENSE).pdf',
        size: '281.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=883;FileID=14153'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=883;FileID=14146' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=883;FileID=14152' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > QLIK SENSE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::QLIK SENSE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 08:57 (Leonardo Silva de Amarante)',
      alterado: '15/10/2025 10:30 (Mayara Sales)',
      atualizadoEm: '30.09.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=883;Nav=',
      itemId: '883'
    }
  },
  {
    id: 'faq-1000882',
    faqNumber: '1000882',
    name: 'Galileu (QlikView)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::QLIKVIEW::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Suporte a dúvida técnica/operacional.de software',
    subject: 'Informações sobre o Galileu (QlikView)',
    associatedProcedureId: '',
    observacoes: 'O sistema Galileu (QlikView) é utilizado para visualização de dashboards prontos de consulta, exibindo as atividades da área de lotação do usuário.',
    procedure: `1. Acesse a Intranet.
2. Navegue até Ferramentas > Serviços Analíticos.
3. Clique em "Galileu" (QlikView).
4. O sistema carregará os painéis conforme permissão do usuário.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=882;Nav=',
    attachments: [
      {
        name: 'Galileu (QlikView).pdf',
        size: '279.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=882;FileID=14154'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=882;FileID=14149' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=882;FileID=14150' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > QLIKVIEW > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::QLIKVIEW::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 08:53 (Leonardo Silva de Amarante)',
      alterado: '15/10/2025 10:31 (Mayara Sales)',
      atualizadoEm: '30.09.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=882;Nav=',
      itemId: '882'
    }
  },
  {
    id: 'faq-10002341',
    faqNumber: '10002341',
    name: 'Instalação do QuickLook',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::QUICKLOOK (EMAKO)::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do programa QuickLook',
    associatedProcedureId: '',
    observacoes: 'Aplicativo open-source que permite pré-visualizar arquivos (PDFs, imagens, textos, documentos Office) no Windows apenas pressionando a barra de espaço.',
    procedure: `1. Execute o instalador localizado em CENTRAL_ATENDIMENTO (\\\\DRU) (X:) QuickLook (Emako).
2. Confirme os avisos de segurança clicando em "Sim".
3. Aguarde o processo de instalação automática.
4. Inicie o "QuickLook" pelo Menu Iniciar.
5. No Explorador de Arquivos, selecione qualquer arquivo e pressione a barra de espaço para ver a prévia instantânea.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2341;Nav=',
    attachments: [
      {
        name: 'Instalação do QuickLook (Emako).pdf',
        size: '430.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2341;FileID=16128'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2341;FileID=16122' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2341;FileID=16123' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > QUICKLOOK (EMAKO) > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::QUICKLOOK (EMAKO)::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: 'Emako',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '24/03/2026 11:38 (Gabriel Queiroz Pires)',
      alterado: '24/03/2026 11:38 (Gabriel Queiroz Pires)',
      atualizadoEm: '24.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2341;Nav=',
      itemId: '2341'
    }
  },
  {
    id: 'faq-1000881',
    faqNumber: '1000881',
    name: 'QWare – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::QWARE CLIENT::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Solicita instalação do QWare',
    associatedProcedureId: '',
    observacoes: 'SOFTWARE RESTRITO. Instalação e parametrização realizadas pelos próprios analistas do PRODASEN em conjunto com a equipe do SUAPE.',
    procedure: `1. Requer autorização formal na Central de Serviços:
   Intranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.
2. A instalação e configuração dos parâmetros de conexão e propagação de dados devem ser conduzidas sob supervisão direta do analista responsável do PRODASEN.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=881;Nav=',
    attachments: [
      {
        name: 'Manual_de_instalacao_do_Q-Ware_Client.pdf',
        size: '1.1 MBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=881;FileID=14158'
      },
      {
        name: 'QWare – Instalação.pdf',
        size: '166.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=881;FileID=14159'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=881;FileID=14157' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > QWARE CLIENT > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::QWARE CLIENT::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 08:49 (Leonardo Silva de Amarante)',
      alterado: '15/10/2025 10:43 (Mayara Sales)',
      atualizadoEm: '15.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=881;Nav=',
      itemId: '881'
    }
  },
  {
    id: 'faq-1000829',
    faqNumber: '1000829',
    name: 'Sistemas R (IRaMuTeQ) – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::R - FOUNDATION::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do software IRaMuTeQ',
    associatedProcedureId: '',
    observacoes: 'Software livre acoplado ao ambiente estatístico R para análises multivariadas de conteúdo, lexicometria e análise do discurso.',
    procedure: `1. Execute o instalador em X:\\Sistemas R (R Foundation).
2. Confirme os avisos do sistema e informe o número do chamado.
3. Escolha o idioma e avance pelas etapas do assistente.
4. Selecione as tarefas adicionais desejadas (atalho no Menu Iniciar/Área de Trabalho).
5. Clique em "Instalar" e aguarde a conclusão.
6. Clique em "Concluir".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=829;Nav=',
    attachments: [
      {
        name: 'Sistemas R (IRaMuTeQ) – Instalação.pdf',
        size: '514.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=829;FileID=14163'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=829;FileID=14171' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=829;FileID=14167' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > R - FOUNDATION > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::R - FOUNDATION::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 11:25 (Leonardo Silva de Amarante)',
      alterado: '15/10/2025 11:16 (Mayara Sales)',
      atualizadoEm: '15.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=829;Nav=',
      itemId: '829'
    }
  },
  {
    id: 'faq-1000830',
    faqNumber: '1000830',
    name: 'Sistemas R (R Foundation) – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::R - FOUNDATION::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do R Foundation',
    associatedProcedureId: '',
    observacoes: 'Ambiente computacional e linguagem de programação para análise estatística, mineração e visualização gráfica de dados.',
    procedure: `1. Execute o instalador em X:\\Sistemas R (R Foundation).
2. Confirme o Controle de Conta de Usuário e insira o número do chamado.
3. Escolha o idioma do instalador e clique em OK.
4. Clique em Avançar e selecione a arquitetura desejada (x64).
5. Escolha se deseja personalizar as opções de inicialização ou aceitar os padrões.
6. Aguarde a instalação e clique em "Concluir".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=830;Nav=',
    attachments: [
      {
        name: 'Sistemas R (R Foundation) – Instalação.pdf',
        size: '448.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=830;FileID=14196'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=830;FileID=14198' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=830;FileID=14190' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > R - FOUNDATION > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::R - FOUNDATION::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 11:32 (Leonardo Silva de Amarante)',
      alterado: '15/10/2025 14:47 (Mayara Sales)',
      atualizadoEm: '15.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=830;Nav=',
      itemId: '830'
    }
  },
  {
    id: 'faq-1000831',
    faqNumber: '1000831',
    name: 'Sistemas R (RStudio) – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::R - FOUNDATION::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do RStudio',
    associatedProcedureId: '',
    observacoes: 'IDE (Ambiente de Desenvolvimento Integrado) oficial para programação e visualização estatística em linguagem R.',
    procedure: `1. Certifique-se de que o pacote R Foundation (base do R) já esteja instalado na máquina.
2. Execute o instalador do RStudio localizado em X:\\Sistemas R (R Foundation).
3. Confirme com "Sim" e informe o número do chamado.
4. Avance nas telas de destino e clique em "Instalar".
5. Aguarde o término e clique em "Concluir".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=831;Nav=',
    attachments: [
      {
        name: 'Sistemas R (RStudio) – Instalação.pdf',
        size: '430.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=831;FileID=14181'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=831;FileID=14174' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=831;FileID=14176' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > R - FOUNDATION > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::R - FOUNDATION::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 11:37 (Leonardo Silva de Amarante)',
      alterado: '15/10/2025 13:57 (Mayara Sales)',
      atualizadoEm: '15.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=831;Nav=',
      itemId: '831'
    }
  }
];
