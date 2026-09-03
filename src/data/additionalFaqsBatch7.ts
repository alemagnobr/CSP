import { FAQ } from '@/types';

export const additionalFaqsBatch7: FAQ[] = [
  {
    id: 'faq-1000941',
    faqNumber: '1000941',
    name: 'Módulo de Segurança do Banco do Brasil – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::MÓDULOS BANCÁRIOS::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Módulos Bancários',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do módulo de segurança do Banco do Brasil',
    associatedProcedureId: '',
    observacoes: 'É imprescindível executar com credenciais administrativas (perfil login_INS do técnico ou elevação temporária do usuário no grupo Administradores).',
    technicalInfo: `• Módulo Warsaw (GAS Tecnologia) para proteção de transações no portal Internet Banking do Banco do Brasil.`,
    procedure: `1. Acesse o portal do Banco do Brasil (bb.com.br) e clique em "Acesse sua conta".
2. Na página de diagnóstico ou bloqueio do módulo, clique em "Mais detalhes" > "Diagnóstico do módulo de segurança".
3. Baixe e execute o arquivo "DiagnosticoBB" com credenciais de administrador (login_INS).
4. Siga as instruções do assistente e aceite o reinício do computador.
5. Após o reinício, o módulo concluirá a instalação automaticamente. Abra o navegador e teste o acesso à conta.`,
    credenciaisAcesso: 'Requer privilégios administrativos no Windows (login_INS).',
    relatedLinks: [
      { title: 'Banco do Brasil', url: 'https://www.bb.com.br/site/' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=941;Nav=',
    attachments: [
      {
        name: 'Módulo de Segurança do Banco do Brasil – Instalação.pdf',
        size: '646.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=941;FileID=15843'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=941;FileID=13908' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=941;FileID=13910' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > MÓDULOS BANCÁRIOS > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::MÓDULOS BANCÁRIOS::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '23/01/2024 15:11 (Leonardo Silva de Amarante)',
      alterado: '11/02/2026 15:05 (Gabriel Queiroz Pires)',
      atualizadoEm: '11.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=941;Nav=',
      itemId: '941'
    }
  },
  {
    id: 'faq-1000943',
    faqNumber: '1000943',
    name: 'Módulo de Segurança do BRB – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::MÓDULOS BANCÁRIOS::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Módulos Bancários',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do módulo de segurança do BRB',
    associatedProcedureId: '',
    observacoes: 'É imprescindível executar com credenciais administrativas (perfil login_INS do técnico ou elevação temporária do usuário no grupo Administradores).',
    technicalInfo: `• Módulo Warsaw de segurança bancária para o portal BRB Netbanking.`,
    procedure: `1. Acesse o portal do BRB Netbanking (brbbanknet.brb.com.br/netbanking/).
2. Clique no link para "Baixar Módulo de Segurança".
3. Execute o instalador com privilégios de administrador (login_INS).
4. Avance pelo assistente, aguarde a finalização e clique em OK.
5. Reabra o navegador e confirme o acesso.`,
    credenciaisAcesso: 'Requer privilégios administrativos no Windows (login_INS).',
    relatedLinks: [
      { title: 'BRB Netbanking', url: 'https://brbbanknet.brb.com.br/netbanking/' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=943;Nav=',
    attachments: [
      {
        name: 'Módulo de Segurança do BRB – Instalação.pdf',
        size: '537.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=943;FileID=15841'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=943;FileID=13903' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=943;FileID=13898' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > MÓDULOS BANCÁRIOS > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::MÓDULOS BANCÁRIOS::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '23/01/2024 15:13 (Leonardo Silva de Amarante)',
      alterado: '11/02/2026 14:58 (Gabriel Queiroz Pires)',
      atualizadoEm: '11.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=943;Nav=',
      itemId: '943'
    }
  },
  {
    id: 'faq-10002269',
    faqNumber: '10002269',
    name: 'Módulo de Segurança da Caixa Econômica – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::MÓDULOS BANCÁRIOS::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Módulos Bancários',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do módulo de segurança da Caixa Econômica',
    associatedProcedureId: '',
    observacoes: 'É imprescindível executar com credenciais administrativas (perfil login_INS do técnico ou elevação temporária do usuário no grupo Administradores).',
    technicalInfo: `• Módulo Warsaw de proteção para transações no Internet Banking Caixa.`,
    procedure: `1. Acesse o Internet Banking da Caixa (internetbanking.caixa.gov.br).
2. O site solicitará o download do executável de segurança; baixe o arquivo.
3. Execute o instalador com privilégios de administrador (login_INS).
4. Aceite os termos, clique em Continuar e aguarde o processo de instalação.
5. Clique em OK e acesse sua conta normalmente informando usuário e senha no teclado virtual.`,
    credenciaisAcesso: 'Requer privilégios administrativos no Windows (login_INS).',
    relatedLinks: [
      { title: 'Caixa Econômica Internet Banking', url: 'https://internetbanking.caixa.gov.br/sinbc/#!nb/login' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2269;Nav=',
    attachments: [
      {
        name: 'Módulo de Segurança da Caixa Econômica – Instalação.pdf',
        size: '489.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2269;FileID=15842'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2269;FileID=14838' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2269;FileID=14837' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > MÓDULOS BANCÁRIOS > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::MÓDULOS BANCÁRIOS::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '29/10/2025 10:16 (Mayara Sales)',
      alterado: '11/02/2026 15:03 (Gabriel Queiroz Pires)',
      atualizadoEm: '11.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2269;Nav=',
      itemId: '2269'
    }
  },
  {
    id: 'faq-1000939',
    faqNumber: '1000939',
    name: 'Movie Maker – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::MOVIE MAKER::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Movie Maker',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do Movie Maker',
    associatedProcedureId: '',
    technicalInfo: `• Editor clássico de vídeo da Microsoft pertencente à suíte Windows Essentials.`,
    procedure: `1. Execute o arquivo localizado em X:\\Movie Maker (Microsoft).
2. Clique em Sim e novamente em Sim.
3. Insira o número do chamado e clique em OK.
4. Clique em "Instalar todos os programas...".
5. Clique em "Baixar e instalar este recurso", aguarde e clique em Fechar.
6. Localize o Movie Maker no Menu Iniciar e crie um atalho na Área de Trabalho.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=939;Nav=',
    attachments: [
      {
        name: 'Movie Maker – Instalação.pdf',
        size: '472.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=939;FileID=13896'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=939;FileID=13893' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=939;FileID=13890' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > MOVIE MAKER > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::MOVIE MAKER::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '23/01/2024 15:04 (Leonardo Silva de Amarante)',
      alterado: '12/09/2025 13:23 (Mayara Sales)',
      atualizadoEm: '14.03.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=939;Nav=',
      itemId: '939'
    }
  },
  {
    id: 'faq-1000938',
    faqNumber: '1000938',
    name: 'Natron – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NATRON::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Natron',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do software Natron',
    associatedProcedureId: '',
    technicalInfo: `• Compositor digital open-source baseado em nós (node-based) capaz de atender demandas de composição 2D e 2.5D.`,
    procedure: `1. Execute o arquivo localizado em X:\\Natron (Natron).
2. Clique em Sim e novamente em Sim.
3. Insira o número do chamado e clique em OK.
4. Clique em "Next" 5 vezes consecutivas.
5. Clique em "Install", aguarde a conclusão e finalize em "Finish".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=938;Nav=',
    attachments: [
      {
        name: 'Natron – Instalação.pdf',
        size: '397.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=938;FileID=12162'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=938;FileID=12102' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=938;FileID=12115' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > NATRON > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NATRON::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '23/01/2024 14:57 (Leonardo Silva de Amarante)',
      alterado: '17/06/2025 14:34 (Mayara Sales)',
      atualizadoEm: '12.06.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=938;Nav=',
      itemId: '938'
    }
  },
  {
    id: 'faq-10001201',
    faqNumber: '10001201',
    name: 'Firefox – Falha de Estabilidade ou Segurança do Web PKI',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::ERRO',
    subCategory: 'ERRO',
    system: 'Navegadores',
    type: 'Incidente',
    service: 'Suporte a software de estações de trabalho',
    subject: 'Falha de Estabilidade ou Segurança do Web PKI no Firefox',
    associatedProcedureId: '',
    observacoes: 'Ao concluir os passos, feche e reabra o Firefox e recarregue as páginas desejadas.',
    technicalInfo: `• Contorno temporário para bloqueio de extensão Web PKI de certificação digital por lista de bloqueio do Firefox.`,
    procedure: `1. No Firefox, digite na barra de endereços: about:config e pressione Enter.
2. Clique em "Aceitar o risco e continuar".
3. Na barra de pesquisa de preferências, digite: extensions.blocklist.enabled.
4. Dê um duplo clique para alterar o valor de "true" para "false".
5. Feche e reabra o navegador.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1201;Nav=',
    attachments: [
      {
        name: 'Firefox – Falha de Estabilidade ou Segurança do Web PKI.pdf',
        size: '279.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1201;FileID=12120'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1201;FileID=12119' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1201;FileID=12116' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > NAVEGADORES > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '31/01/2024 11:56 (Leonardo Silva de Amarante)',
      alterado: '13/06/2025 14:23 (Mayara Sales)',
      atualizadoEm: '13.06.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1201;Nav=',
      itemId: '1201'
    }
  },
  {
    id: 'faq-10002280',
    faqNumber: '10002280',
    name: 'Microsoft Edge – Limpeza de Cache e Cookies do Navegador',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::ERRO',
    subCategory: 'ERRO',
    system: 'Navegadores',
    type: 'Incidente',
    service: 'Suporte a software de estações de trabalho',
    subject: 'Limpeza de cache e cookies do navegador.',
    associatedProcedureId: '',
    technicalInfo: `• Corrige falhas de carregamento, sessões presas ou erro 400/500 em sistemas web corporativos.`,
    procedure: `1. Abra o Microsoft Edge e pressione o atalho Ctrl + Shift + Delete.
2. Na janela "Excluir dados de navegação", selecione no Intervalo de tempo: "Desde o começo".
3. Marque "Histórico de navegação", "Cookies e outros dados do site" e "Arquivos e imagens armazenados em cache".
4. Clique em "Limpar agora" e reinicie o navegador.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2280;Nav=',
    attachments: [
      {
        name: 'Microsoft Edge – Limpeza de Cache e Cookies do Navegador.pdf',
        size: '330.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2280;FileID=15175'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2280;FileID=15172' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2280;FileID=15173' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > NAVEGADORES > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '12/11/2025 16:24 (Mayara Sales)',
      alterado: '12/11/2025 16:24 (Mayara Sales)',
      atualizadoEm: '12.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2280;Nav=',
      itemId: '2280'
    }
  },
  {
    id: 'faq-10002281',
    faqNumber: '10002281',
    name: 'Google Chrome – Limpeza de Cache e Cookies do Navegador',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::ERRO',
    subCategory: 'ERRO',
    system: 'Navegadores',
    type: 'Incidente',
    service: 'Suporte a software de estações de trabalho',
    subject: 'Limpeza de cache e cookies do navegador.',
    associatedProcedureId: '',
    technicalInfo: `• Resolução de inconsistências de autenticação e falha de scripts em páginas internas do Senado.`,
    procedure: `1. Abra o Google Chrome e pressione o atalho Ctrl + Shift + Delete.
2. Na aba Avançado, em Período selecione "Todo o período".
3. Marque "Cookies e outros dados do site" e "Imagens e arquivos em cache".
4. Clique em "Excluir dados" e reinicie o navegador.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2281;Nav=',
    attachments: [
      {
        name: 'Google Chrome – Limpeza de Cache e Cookies do Navegador.pdf',
        size: '300.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2281;FileID=15176'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2281;FileID=15177' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2281;FileID=15178' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > NAVEGADORES > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '12/11/2025 16:29 (Mayara Sales)',
      alterado: '12/11/2025 16:29 (Mayara Sales)',
      atualizadoEm: '12.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2281;Nav=',
      itemId: '2281'
    }
  },
  {
    id: 'faq-1000543',
    faqNumber: '1000543',
    name: 'Google Chrome – Alterar Idioma',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Navegadores',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Solicita a alteração do idioma do Chrome',
    associatedProcedureId: '',
    observacoes: 'A alteração manual de idioma pelas configurações do Chrome está disponível apenas no Windows. No Mac/Linux, segue o idioma do SO.',
    technicalInfo: `• Procedimento para redefinir o idioma da interface do Google Chrome para Português (Brasil).`,
    procedure: `1. Clique no botão de três pontos no canto superior direito ("Personalizar e controlar o Google Chrome").
2. Clique em "Configurações" (Settings) > "Idiomas" (Languages).
3. Localize o idioma desejado (Português - Brasil) ou clique em "Adicionar idiomas" caso não esteja listado.
4. Marque a opção "Mostrar o Chrome neste idioma" e clique em Reiniciar.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=543;Nav=',
    attachments: [
      {
        name: 'Google Chrome – Alterar Idioma.pdf',
        size: '272.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=543;FileID=12131'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=543;FileID=12127' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=543;FileID=12128' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > NAVEGADORES > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '29/08/2023 14:50 (Marco Túlio Caixeta Calazans)',
      alterado: '16/06/2025 15:09 (Mayara Sales)',
      atualizadoEm: '16.06.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=543;Nav=',
      itemId: '543'
    }
  },
  {
    id: 'faq-10001202',
    faqNumber: '10001202',
    name: 'Google Chrome – Tela Preta',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Navegadores',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Google Chrome Apresentando Tela Preta',
    associatedProcedureId: '',
    technicalInfo: `• Ocorre frequentemente ao alternar janelas (ALT+TAB) ou restaurar de minimizado em placas gráficas integradas com aceleração por hardware ativada.`,
    procedure: `1. Na barra de endereços do Chrome, digite: chrome://settings/system e pressione Enter.
2. Desmarque a opção "Usar aceleração gráfica quando disponível".
3. Clique no botão "Reiniciar" exibido ao lado da opção.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1202;Nav=',
    attachments: [
      {
        name: 'Google Chrome – Tela Preta.pdf',
        size: '321.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1202;FileID=12137'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1202;FileID=12133' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1202;FileID=12132' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > NAVEGADORES > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '31/01/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '16/06/2025 16:05 (Mayara Sales)',
      atualizadoEm: '16.06.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1202;Nav=',
      itemId: '1202'
    }
  },
  {
    id: 'faq-10001205',
    faqNumber: '10001205',
    name: 'Google Chrome - Tornar Mecanismo de Pesquisa Padrão',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Navegadores',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Solicita a configuração para tornar o Google meu mecanismo de pesquisa padrão',
    associatedProcedureId: '',
    technicalInfo: `• Restauração do mecanismo de busca Google quando alterado indevidamente por extensões ou softwares de terceiros.`,
    procedure: `1. Clique nos três pontos superiores e vá em Configurações.
2. Selecione a aba "Mecanismo de pesquisa" no menu à esquerda.
3. Clique em "Alterar" ou gerenciar mecanismos de pesquisa.
4. Selecione "Google" e clique em "Definir como padrão".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1205;Nav=',
    attachments: [
      {
        name: 'Google Chrome - Tornar Mecanismo de Pesquisa Padrão.pdf',
        size: '267.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1205;FileID=12125'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1205;FileID=12126' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1205;FileID=12121' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > NAVEGADORES > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '31/01/2024 12:19 (Leonardo Silva de Amarante)',
      alterado: '16/06/2025 14:37 (Mayara Sales)',
      atualizadoEm: '13.06.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1205;Nav=',
      itemId: '1205'
    }
  },
  {
    id: 'faq-10002368',
    faqNumber: '10002368',
    name: 'Microsoft Edge – Desativar notificação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Navegadores',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Solicita a desativação de notificações no navegador Microsoft Edge.',
    associatedProcedureId: '',
    technicalInfo: `• Bloqueia pop-ups e avisos intrusivos enviados por websites no Microsoft Edge.`,
    procedure: `1. Abra o Edge e pressione Alt + F (ou clique nos três pontos) > Configurações.
2. Clique em "Cookies e permissões do site" > "Notificações".
3. Habilite a opção "Perguntar antes de enviar (recomendado)" e remova ou bloqueie os sites indesejados na lista de permitidos.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2368;Nav=',
    attachments: [
      {
        name: 'Microsoft Edge – Desativar notificação.pdf',
        size: '547.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2368;FileID=16470'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2368;FileID=16464' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2368;FileID=16465' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > NAVEGADORES > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '03/06/2026 11:31 (Mayara Sales)',
      alterado: '03/06/2026 11:31 (Mayara Sales)',
      atualizadoEm: '03.06.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2368;Nav=',
      itemId: '2368'
    }
  },
  {
    id: 'faq-10002369',
    faqNumber: '10002369',
    name: 'Google Chrome – Desativar notificação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Navegadores',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Solicita a desativação de notificações no navegador Google Chrome.',
    associatedProcedureId: '',
    technicalInfo: `• Desativação de notificações e alertas persistentes no Google Chrome.`,
    procedure: `1. Clique nos três pontos e vá em Configurações.
2. Acesse "Privacidade e segurança" > "Configurações do site".
3. Clique em "Notificações".
4. Marque "Não permitir que os sites enviem notificações" ou exclua os sites listados em "Permitido enviar notificações".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2369;Nav=',
    attachments: [
      {
        name: 'Google Chrome – Desativar notificação.pdf',
        size: '418.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2369;FileID=16477'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2369;FileID=16471' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2369;FileID=16472' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > NAVEGADORES > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '03/06/2026 11:41 (Mayara Sales)',
      alterado: '03/06/2026 11:41 (Mayara Sales)',
      atualizadoEm: '03.06.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2369;Nav=',
      itemId: '2369'
    }
  },
  {
    id: 'faq-10002403',
    faqNumber: '10002403',
    name: 'Google Chrome – Atualizar navegador',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Navegadores',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Solicita atualização do Google Chrome',
    associatedProcedureId: '',
    technicalInfo: `• Atualização da compilação do Google Chrome para aplicação de correções de segurança e novas APIs.`,
    procedure: `1. Clique no menu de três pontos no canto superior direito.
2. Passe o mouse sobre "Ajuda" e clique em "Sobre o Google Chrome" (ou acesse chrome://settings/help).
3. O Chrome verificará automaticamente atualizações e fará o download.
4. Ao concluir, clique no botão "Reiniciar" para aplicar a versão mais recente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2403;Nav=',
    attachments: [
      {
        name: 'Google Chrome – Atualizar navegador.pdf',
        size: '326.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2403;FileID=16996'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2403;FileID=16997' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2403;FileID=16998' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > NAVEGADORES > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NAVEGADORES::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '07/08/2026 16:28 (Leonardo Silva de Amarante)',
      alterado: '07/08/2026 16:31 (Leonardo Silva de Amarante)',
      atualizadoEm: '07.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2403;Nav=',
      itemId: '2403'
    }
  },
  {
    id: 'faq-1000936',
    faqNumber: '1000936',
    name: 'NDI Tools – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NDI TOOLS::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'NDI Tools',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do NDI Tools',
    associatedProcedureId: '',
    technicalInfo: `• Suíte Network Device Interface (NDI) da NewTek para transmissão e recebimento de vídeo e áudio em rede IP sem cabos SDI/HDMI.`,
    procedure: `1. Execute o arquivo localizado em X:\\Ndi Tools (Newtek Inc).
2. Clique em Sim e novamente em Sim.
3. Insira o número do chamado e clique em OK.
4. Aguarde o processo de instalação e clique em OK.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=936;Nav=',
    attachments: [
      {
        name: 'NDI Tools – Instalação.pdf',
        size: '270.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=936;FileID=12164'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=936;FileID=12167' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=936;FileID=12169' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > NDI TOOLS > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NDI TOOLS::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '23/01/2024 14:51 (Leonardo Silva de Amarante)',
      alterado: '17/06/2025 14:50 (Mayara Sales)',
      atualizadoEm: '17.06.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=936;Nav=',
      itemId: '936'
    }
  },
  {
    id: 'faq-1000935',
    faqNumber: '1000935',
    name: 'Neoid (Serpro) – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NEOID (SERPRO)::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'NeoID',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do software Certificado Neoid (Serpro)',
    associatedProcedureId: 'faq-10001682',
    technicalInfo: `• Aplicativo cliente para gerenciamento e sincronização de certificados digitais em nuvem NeoID Serpro.`,
    procedure: `1. Execute o arquivo em X:\\Neoid (Serpro).
2. Clique em Sim e novamente em Sim.
3. Insira o número do chamado e clique em OK.
4. Aguarde a preparação e a instalação.
5. Após a instalação, prossiga com as orientações conforme a FAQ 1682 (Certificado Digital Serpro – Instalação).`,
    relatedLinks: [
      { title: 'Certificado Digital Serpro – Instalação (FAQ 1682)', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1682' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=935;Nav=',
    attachments: [
      {
        name: 'Neoid (Serpro) – Instalação.pdf',
        size: '338.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=935;FileID=17201'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=935;FileID=12176' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=935;FileID=12171' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > NEOID (SERPRO) > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NEOID (SERPRO)::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '23/01/2024 14:46 (Leonardo Silva de Amarante)',
      alterado: '21/08/2026 11:06 (Gabriel Queiroz Pires)',
      atualizadoEm: '21.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=935;Nav=',
      itemId: '935'
    }
  },
  {
    id: 'faq-1000930',
    faqNumber: '1000930',
    name: 'Notepad++ – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NOTEPAD++::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Notepad++',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do NOTEPAD++',
    associatedProcedureId: '',
    technicalInfo: `• Editor de texto e código-fonte avançado com realce de sintaxe e suporte a múltiplos idiomas de programação.`,
    procedure: `1. Execute o arquivo localizado em X:\\Notepad++ (Don Ho).
2. Clique em Sim e novamente em Sim.
3. Insira o número do chamado e confirme duas vezes em OK.
4. Clique em Próximo, em "Eu Concordo" e em Próximo duas vezes.
5. Clique em Instalar, aguarde e finalize em Concluir.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=930;Nav=',
    attachments: [
      {
        name: 'Notepad++ – Instalação.pdf',
        size: '682.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=930;FileID=12312'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=930;FileID=12212' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=930;FileID=12214' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > NOTEPAD++ > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NOTEPAD++::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '23/01/2024 13:58 (Leonardo Silva de Amarante)',
      alterado: '25/06/2025 16:33 (Mayara Sales)',
      atualizadoEm: '18.06.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=930;Nav=',
      itemId: '930'
    }
  },
  {
    id: 'faq-1000928',
    faqNumber: '1000928',
    name: 'Emulador NVDA – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NVDA::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'NVDA',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do software NVDA',
    associatedProcedureId: '',
    technicalInfo: `• O NVDA (NonVisual Desktop Access) é um leitor de tela livre e open-source para Windows sob licença GPL.`,
    procedure: `1. Execute o arquivo em X:\\Emulador NVDA (NV Access).
2. Clique em Sim e novamente em Sim.
3. Insira o número do chamado e clique em OK.
4. Aceite os termos clicando em "Concordo".
5. Clique em "Instalar o NVDA neste computador".
6. Clique em Continuar e confirme em OK duas vezes.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=928;Nav=',
    attachments: [
      {
        name: 'Emulador NVDA – Instalação.pdf',
        size: '367.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=928;FileID=12309'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=928;FileID=12302' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=928;FileID=12303' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > NVDA > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::NVDA::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '23/01/2024 13:51 (Leonardo Silva de Amarante)',
      alterado: '25/06/2025 16:27 (Mayara Sales)',
      atualizadoEm: '18.06.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=928;Nav=',
      itemId: '928'
    }
  }
];
