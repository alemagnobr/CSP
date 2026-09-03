import { FAQ } from '@/types';

export const additionalFaqsBatch16: FAQ[] = [
  {
    id: 'faq-1000530',
    faqNumber: '1000530',
    name: 'Windows – Análise de Suspeita de Vírus',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Estações de Trabalho',
    subject: 'Análise de Suspeita de Vírus',
    associatedProcedureId: '',
    observacoes: 'Se confirmada suspeita de vírus no micro, desligue-o da rede e encaminhe chamado com urgência para supervisão.',
    procedure: `1. Acesse remotamente para avaliar a ocorrência.
2. Execute o Trellix Endpoint e verifique o quadro "Resumo de ameaças".
3. Clique em "Varrer sistema" para conferir a última varredura.
4. Se confirmado, peça para o usuário desligar o micro e desconectar o cabo de rede.
5. Para e-mails maliciosos suspeitos, oriente o usuário a encaminhar a mensagem para analisevirus@senado.leg.br.
6. Encaminhe o chamado para atendimento presencial do Nível 2.`,
    relatedLinks: [
      { title: 'analisevirus@senado.leg.br', url: 'mailto:analisevirus@senado.leg.br' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=530;Nav=',
    attachments: [
      {
        name: 'Windows – Análise de suspeita de vírus.pdf',
        size: '370.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=530;FileID=15286'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=530;FileID=15282' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/08/2023 17:32 (Mayara Sales)',
      alterado: '14/11/2025 16:14 (Mayara Sales)',
      atualizadoEm: '14.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=530;Nav=',
      itemId: '530'
    }
  },
  {
    id: 'faq-1000531',
    faqNumber: '1000531',
    name: 'Windows – Análise de Suspeita de Vírus (Nível 2)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Estações de Trabalho',
    subject: 'Análise de Suspeita de Vírus',
    associatedProcedureId: '',
    observacoes: 'ATENDIMENTO REALIZADO PELO NÍVEL 2. Isolamento físico da estação, coleta com GetSusp e restauração de versões de rede.',
    procedure: `1. Retire o equipamento da rede e mantenha o cabo desconectado.
2. Em pendrive com ferramentas, execute "getsusp.exe" (W:\\COATEN\\SEARP\\Getsusp).
3. Colete o pacote compactado (ex: gsusp_*.zip) e envie ao supervisor para encaminhamento ao SUAPE/COINTI.
4. Caso confirmada infecção irrecuperável, realize a Instalação Padrão preenchendo o formulário de perda de arquivos.
5. Se o drive de rede do setor foi infectado, o Gerente de Relacionamento e SUAPE conduzirão a restauração de versões anteriores de até 5 dias.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=531;Nav=',
    attachments: [
      {
        name: 'Windows – Análise de suspeita de vírus (Nível 2).pdf',
        size: '303.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=531;FileID=15287'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/08/2023 17:48 (Mayara Sales)',
      alterado: '14/11/2025 16:24 (Mayara Sales)',
      atualizadoEm: '14.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=531;Nav=',
      itemId: '531'
    }
  },
  {
    id: 'faq-1000738',
    faqNumber: '1000738',
    name: 'Windows – Erro de perfil temporário',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Software de Estação de Trabalho',
    subject: 'Erro de Perfil Temporário',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2. Ocorre quando o Windows não carrega o perfil do usuário e cria um perfil TEMP.',
    procedure: `1. Faça logon com usuário administrador local.
2. Copie a pasta do perfil do usuário em D:\\USERS\\login para um local de backup seguro.
3. Exclua ou renomeie a pasta do perfil corrompido em D:\\USERS.
4. Abra o Regedit e navegue até:
   HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList
5. Localize as chaves SID (S-1-5-21-...). Exclua a chave terminada com extensão ".bak" que aponta para o perfil com erro.
6. Reinicie o computador e peça para o usuário logar novamente na rede.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=738;Nav=',
    attachments: [
      {
        name: 'Windows – Erro de perfil temporário.pdf',
        size: '228.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=738;FileID=17231'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 12:02 (Leonardo Silva de Amarante)',
      alterado: '21/08/2026 15:21 (Mayara Sales)',
      atualizadoEm: '21.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=738;Nav=',
      itemId: '738'
    }
  },
  {
    id: 'faq-1000740',
    faqNumber: '1000740',
    name: 'Windows – Falha na relação de confiança',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Estação de Trabalho',
    subject: 'Falha na Relação de Confiança com o Windows',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2. Sincronização de conta de computador desfeita com o domínio AD.',
    procedure: `1. Inicie o micro através do pendrive com WinPE / Hiren's Boot.
2. Utilize o "NTPWEdit" apontando para F:\\WINDOWS\\SYSTEM32\\CONFIG\\SAM para desbloquear ou resetar a senha da conta de Administrador local.
3. Clique em "Save Changes" e reinicie o computador.
4. Faça logon com o Administrador local.
5. Remova o computador do domínio colocando em WORKGROUP e reinicie.
6. Faça logon novamente e reinsira o micro no domínio "senado.leg.br" com conta autorizada (_INS).
7. Reinicie e informe a ocorrência ao SUAPE para alocação na OU correta.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=740;Nav=',
    attachments: [
      {
        name: 'Windows – Falha na relação de confiança.pdf',
        size: '566.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=740;FileID=17179'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=740;FileID=17180' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 12:08 (Leonardo Silva de Amarante)',
      alterado: '19/08/2026 15:12 (Mayara Sales)',
      atualizadoEm: '19.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=740;Nav=',
      itemId: '740'
    }
  },
  {
    id: 'faq-1000746',
    faqNumber: '1000746',
    name: 'Windows 10 – Iniciar em modo de segurança (Micros Positivo)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Estação de Trabalho',
    subject: 'Windows não inicializa',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2.',
    procedure: `1. Ligue o micro pressionando repetidamente a tecla F7.
2. Na tela de recuperação, clique em "Solução de problemas".
3. Selecione "Opções Avançadas" > "Configurações de Inicialização".
4. Clique em Reiniciar.
5. Ao reiniciar, pressione F4 para carregar o Windows em Modo de Segurança.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=746;Nav=',
    attachments: [
      {
        name: 'Windows 10 – Iniciar em modo de segurança (Micros Positivo).pdf',
        size: '474.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=746;FileID=17193'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=746;FileID=17194' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 12:29 (Leonardo Silva de Amarante)',
      alterado: '19/08/2026 15:54 (Mayara Sales)',
      atualizadoEm: '19.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=746;Nav=',
      itemId: '746'
    }
  },
  {
    id: 'faq-1000747',
    faqNumber: '1000747',
    name: 'Windows 10 – Iniciar em modo de segurança',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Estação de Trabalho',
    subject: 'Iniciar o Windows 10 em Modo de Segurança',
    associatedProcedureId: '',
    observacoes: 'Quando o sistema operacional carrega mas apresenta erros de travamento ou conflito de drivers.',
    procedure: `1. Acesse Menu Iniciar > Configurações > Atualização e Segurança > Recuperação.
2. Na seção "Inicialização avançada", clique em "Reiniciar agora".
3. Após o reinício, clique em "Solução de problemas" > "Opções avançadas" > "Configurações de Inicialização" > "Reiniciar".
4. Pressione a tecla 4 ou F4 para ativar o Modo de Segurança.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=747;Nav=',
    attachments: [
      {
        name: 'Windows 10 – Iniciar em modo de segurança.pdf',
        size: '614.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=747;FileID=17184'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=747;FileID=17190' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 12:34 (Leonardo Silva de Amarante)',
      alterado: '19/08/2026 15:37 (Mayara Sales)',
      atualizadoEm: '19.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=747;Nav=',
      itemId: '747'
    }
  },
  {
    id: 'faq-1000759',
    faqNumber: '1000759',
    name: 'Windows – Menu Iniciar não abre',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Estação de Trabalho',
    subject: 'Menu Iniciar não Funciona',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2. Re-registro do pacote ShellExperienceHost via PowerShell.',
    procedure: `1. Abra o PowerShell como Administrador.
2. Execute o comando para registrar novamente todos os pacotes AppX:
   Get-AppXPackage -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\\AppXManifest.xml"}
3. Execute o comando direcionado ao ShellExperienceHost:
   Get-appxpackage -all *shellexperience* -packagetype bundle |% {add-appxpackage -register -disabledevelopmentmode ($_.installlocation + "C:\\Program Files\\WindowsApps\\Microsoft.Windows.ShellExperienceHost_1.0.0.2_neutral_ShellExperienceHost.laac0539cc_8wekyb3d8bbwe\\AppxManifest.xml")}
4. Reinicie o computador e teste o Menu Iniciar.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=759;Nav=',
    attachments: [
      {
        name: 'Windows – Menu Iniciar não abre.pdf',
        size: '309.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=759;FileID=17214'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=759;FileID=17215' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 15:17 (Leonardo Silva de Amarante)',
      alterado: '21/08/2026 14:23 (Mayara Sales)',
      atualizadoEm: '21.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=759;Nav=',
      itemId: '759'
    }
  },
  {
    id: 'faq-1000761',
    faqNumber: '1000761',
    name: 'Windows – Micro sem som',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Estação de Trabalho',
    subject: 'Micro sem Som',
    associatedProcedureId: '',
    observacoes: 'Verifique se o áudio não está saindo pelo monitor via HDMI/DisplayPort em vez da caixa/fone.',
    procedure: `1. Abra o Gerenciamento do Computador > Gerenciador de Dispositivos.
2. Clique com o botão direito nos drivers de controladores de som e selecione "Atualizar driver" > "Procurar drivers no meu computador" > "Permitir que eu escolha".
3. Selecione o driver correto (High Definition Audio Device ou Realtek) e conclua.
4. Se o monitor (ex: 24BL550J) estiver capturando o áudio:
   Acesse Configurações > Sistema > Som > Todos os dispositivos de som > selecione o monitor e clique em "Não permitir".
5. Defina os alto-falantes internos ou fone como dispositivo de saída padrão.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=761;Nav=',
    attachments: [
      {
        name: 'Windows – Micro sem som.pdf',
        size: '594.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=761;FileID=16983'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=761;FileID=15279' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 15:31 (Leonardo Silva de Amarante)',
      alterado: '05/08/2026 16:44 (Gabriel Queiroz Pires)',
      atualizadoEm: '05.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=761;Nav=',
      itemId: '761'
    }
  },
  {
    id: 'faq-1000762',
    faqNumber: '1000762',
    name: 'Windows – Não há servidores de logon disponíveis',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Estação de Trabalho',
    subject: 'Não há Servidores de Logon Disponíveis',
    associatedProcedureId: '',
    observacoes: 'Geralmente causado por falta de link de rede física, cabo desconectado ou falha na relação de confiança.',
    procedure: `1. Verifique se o cabo de rede está conectado e com LEDs acesos.
2. Faça um teste de ping para um IP da rede interna ou controlador de domínio.
3. Se o micro não responde à rede, verifique a porta do switch/ponto de rede.
4. Se o micro responde à rede mas continua apresentando a mensagem, execute o procedimento de quebra de relação de confiança (FAQ#: 1000740).`,
    relatedLinks: [
      { title: 'Windows – Falha na relação de confiança', url: 'https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=740' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=762;Nav=',
    attachments: [
      {
        name: 'Windows – Não há servidores de logon disponíveis.pdf',
        size: '267.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=762;FileID=17176'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=762;FileID=17175' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 15:37 (Leonardo Silva de Amarante)',
      alterado: '19/08/2026 14:33 (Mayara Sales)',
      atualizadoEm: '19.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=762;Nav=',
      itemId: '762'
    }
  },
  {
    id: 'faq-1000763',
    faqNumber: '1000763',
    name: 'Windows 10 – Prompt de comando não reconhece comandos',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Estação de Trabalho',
    subject: 'Prompt de Comando não Reconhece Comandos',
    associatedProcedureId: '',
    observacoes: 'Ocorre quando a variável PATH foi alterada ou não contém os caminhos padrões (%SystemRoot% e %SystemRoot%\\System32).',
    procedure: `1. Clique com botão direito em Este Computador > Propriedades > Configurações Avançadas do Sistema.
2. Clique no botão "Variáveis de Ambiente...".
3. Em "Variáveis do sistema", selecione "Path" e clique em "Editar".
4. Verifique se as entradas "%SystemRoot%\\system32" e "%SystemRoot%" estão presentes.
5. Se ausentes, clique em "Novo", insira "%SystemRoot%\\system32" e "%SystemRoot%", e mova-os para o topo da lista.
6. Clique em OK e reinicie o computador.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=763;Nav=',
    attachments: [
      {
        name: 'Windows 10 – Prompt de comando não reconhece comandos.pdf',
        size: '467.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=763;FileID=17223'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=763;FileID=17218' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 15:44 (Leonardo Silva de Amarante)',
      alterado: '21/08/2026 14:56 (Mayara Sales)',
      atualizadoEm: '21.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=763;Nav=',
      itemId: '763'
    }
  },
  {
    id: 'faq-1000769',
    faqNumber: '1000769',
    name: 'Windows – Falha ao iniciar',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Estação de Trabalho',
    subject: 'Windows não Inicializa',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2.',
    procedure: `1. Na tela de Recuperação de erro do Windows, utilize as setas do teclado para selecionar "Iniciar o Windows normalmente" e pressione Enter.
2. Se o usuário tiver selecionado "Iniciar reparo de inicialização" e for exibida a mensagem para suporte de rede, selecione "Não", clique em Reiniciar e tente novamente a opção normal.
3. Se não iniciar, realize a checagem com o pendrive de boot ou restaure a imagem padrão.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=769;Nav=',
    attachments: [
      {
        name: 'Windows – Falha ao iniciar.pdf',
        size: '465.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=769;FileID=17168'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=769;FileID=17169' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 16:39 (Leonardo Silva de Amarante)',
      alterado: '19/08/2026 14:13 (Mayara Sales)',
      atualizadoEm: '19.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=769;Nav=',
      itemId: '769'
    }
  },
  {
    id: 'faq-10001161',
    faqNumber: '10001161',
    name: 'Drive de Rede – Unidade cheia (Drive U)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Unidade de Rede Cheia (Drive U)',
    associatedProcedureId: '',
    observacoes: 'Todo departamento possui uma unidade de rede exclusiva (Drive U:) com cota pré-definida gerida pelo próprio setor.',
    procedure: `1. O setor deverá reorganizar e excluir arquivos desnecessários para liberar espaço.
2. Caso não possam excluir arquivos e necessitem de expansão da cota de armazenamento, o chefe do setor deve negociar o aumento com o Gerente de Relacionamento (SERETI).`,
    relatedLinks: [
      { title: 'Drive de Rede – Mapear em equipamento externo', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1164' },
      { title: 'Drive de Rede – Recuperar versões anteriores', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=765;Nav=' },
      { title: 'Drive de Rede – Unidade indisponível', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2250;Nav=' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1161;Nav=',
    attachments: [
      {
        name: 'Drive de Rede – Unidade cheia (Drive U).pdf',
        size: '191.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1161;FileID=15148'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      palavrasChave: 'drive de rede unidade de rede drive u',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 10:53 (Mayara Sales)',
      alterado: '12/11/2025 09:25 (Mayara Sales)',
      atualizadoEm: '11.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1161;Nav=',
      itemId: '1161'
    }
  },
  {
    id: 'faq-10002250',
    faqNumber: '10002250',
    name: 'Drive de Rede – Unidade indisponível',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Armazenamento de Arquivos - drives de rede',
    subject: 'Indisponibilidade do drive de rede',
    associatedProcedureId: '',
    observacoes: 'O mapeamento de unidades de rede NÃO deve, em hipótese alguma, ser executado manualmente pelo técnico de Nível 1.',
    procedure: `1. Verifique no Active Directory se o perfil do usuário possui o script de logon configurado na aba "Perfil".
2. Verifique se o usuário tem a permissão de acesso à pasta na Central de Serviços (Informática > Armazenamento > Concessão de acesso a pasta de rede).
3. Reinicie o micro para que o script de logon monte a unidade de rede.
4. Se persistir, teste o logon em outra estação para isolar se a falha é na máquina ou na conta do usuário.
5. Se o problema persistir, direcione para o Nível 2 / SUAPE.`,
    relatedLinks: [
      { title: 'Drive de Rede – Mapear em equipamento externo', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1164' },
      { title: 'Drive de Rede – Recuperar versões anteriores', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=765;Nav=' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2250;Nav=',
    attachments: [
      {
        name: 'Drive de Rede – Unidade indisponível.pdf',
        size: '296.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2250;FileID=15311'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2250;FileID=15144' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      palavrasChave: 'drive de rede unidade de rede drive u',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '02/09/2025 16:45 (Leonardo Silva de Amarante)',
      alterado: '18/11/2025 15:51 (Mayara Sales)',
      atualizadoEm: '18.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2250;Nav=',
      itemId: '2250'
    }
  },
  {
    id: 'faq-10002304',
    faqNumber: '10002304',
    name: 'Windows – Erro ao salvar arquivos no disco local',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Estações de Trabalho',
    subject: 'Erro ao salvar arquivos no disco local',
    associatedProcedureId: '',
    observacoes: 'Geralmente causado por bloqueio do Trellix Antivírus ou regras desatualizadas de segurança.',
    procedure: `1. Na bandeja do sistema, clique em "Mostrar ícones ocultos" e localize o Trellix Antivírus.
2. Clique com botão direito no ícone do Trellix > "Atualizar segurança".
3. Aguarde o término e clique em Fechar.
4. Abra o Prompt de Comando como administrador e execute "gpupdate /force".
5. Reinicie o computador e teste salvar arquivos localmente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2304;Nav=',
    attachments: [
      {
        name: 'Windows – Erro ao salvar arquivos no disco local.pdf',
        size: '232.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2304;FileID=17230'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2304;FileID=17225' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '26/01/2026 11:49 (Leonardo Silva de Amarante)',
      alterado: '21/08/2026 15:16 (Mayara Sales)',
      atualizadoEm: '26.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2304;Nav=',
      itemId: '2304'
    }
  },
  {
    id: 'faq-10002334',
    faqNumber: '10002334',
    name: 'Windows – Erro ferramenta de captura',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Software de Estações de Trabalho',
    subject: 'Windows – Erro ferramenta de captura',
    associatedProcedureId: '',
    observacoes: 'Quando o ScreenSketch / Snipping Tool não abre ou não responde ao atalho Win+Shift+S.',
    procedure: `1. Abra o PowerShell como Administrador (_INS).
2. Execute o comando para reinstalar o pacote da Ferramenta de Captura:
   Get-AppxPackage *Microsoft.ScreenSketch* -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\\AppXManifest.xml"}
3. Se o erro persistir, execute o script em W:\\COATEN\\SEARP\\Ferramenta de Captura.
4. Execute "gpupdate /force", reinicie o micro e teste a captura.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2334;Nav=',
    attachments: [
      {
        name: 'Windows – Erro ferramenta de captura.pdf',
        size: '639.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2334;FileID=16883'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2334;FileID=16884' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      palavrasChave: 'captura print print screen',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '13/03/2026 16:13 (Mayara Sales)',
      alterado: '16/07/2026 11:04 (Mayara Sales)',
      atualizadoEm: '24.06.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2334;Nav=',
      itemId: '2334'
    }
  },
  {
    id: 'faq-10002355',
    faqNumber: '10002355',
    name: 'Windows – Erro de Boot (DELL 7010)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Estações de Trabalho',
    subject: 'Windows – Erro de Boot (DELL 7010)',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2. Erro "Dispositivo de inicialização inacessível" após restauração de imagem.',
    procedure: `1. Reinicie o equipamento Dell 7010 e aperte repetidamente F12 para abrir o Boot Menu.
2. Selecione a opção "BIOS SETUP".
3. Em Storage / SATA Operation, se a opção estiver como "RAID On", altere para "AHCI/NVMe".
4. Clique em "Apply Changes" (não marque "Save as Custom User Settings") e confirme com OK.
5. Saia da BIOS e permita que o Windows inicie normalmente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2355;Nav=',
    attachments: [
      {
        name: 'Windows - Erro de Boot (DELL 7010).pdf',
        size: '803.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2355;FileID=17136'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2355;FileID=17140' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '23/04/2026 14:35 (Gabriel Queiroz Pires)',
      alterado: '17/08/2026 12:29 (Mayara Sales)',
      atualizadoEm: '17.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2355;Nav=',
      itemId: '2355'
    }
  },
  {
    id: 'faq-10002365',
    faqNumber: '10002365',
    name: 'Windows – Travamento e lentidão',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Software de Estações de Trabalho',
    subject: 'Windows – Travamento e lentidão',
    associatedProcedureId: '',
    observacoes: 'Diagnóstico de alto consumo de CPU, pouco espaço em disco e limpeza de cache temporário.',
    procedure: `1. Abra o Gerenciador de Tarefas (Ctrl+Shift+Esc):
   - Verifique consumo de CPU/Memória na aba Processos;
   - Verifique o tempo de atividade na aba Desempenho (se for muito longo, reiniciar é essencial).
2. Limpeza de arquivos temporários:
   - Pressione Win+R, digite "temp", selecione tudo (Ctrl+A) e delete.
   - Pressione Win+R, digite "%temp%", selecione tudo e delete.
   - Pressione Win+R, digite "prefetch", selecione tudo e delete.
3. Verifique espaço em disco (C:) e desative aplicativos de inicialização desnecessários.
4. Reinicie o computador.`,
    relatedLinks: [
      { title: 'Windows – Disco (C:) cheio', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=736;Nav=' },
      { title: 'Windows – Remover Perfil Local', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2254' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2365;Nav=',
    attachments: [
      {
        name: 'Windows – Travamento e lentidão.pdf',
        size: '953.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2365;FileID=16461'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2365;FileID=16369' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      palavrasChave: 'lento lentidão windows sistema travamento',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/05/2026 14:25 (Mayara Sales)',
      alterado: '25/05/2026 15:42 (Mayara Sales)',
      atualizadoEm: '15.05.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2365;Nav=',
      itemId: '2365'
    }
  },
  {
    id: 'faq-10002389',
    faqNumber: '10002389',
    name: 'ODBC – Erro de conexão (Animus COPAG)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Suporte a Software de Estações de Trabalho',
    subject: 'ODBC – Erro de conexão (Animus COPAG)',
    associatedProcedureId: '',
    observacoes: 'Falha ao testar conexão ODBC da fonte ANIMUS por ausência do Oracle Client for Microsoft Tools.',
    procedure: `1. Caso o teste de conexão da fonte de dados ODBC (Animus COPAG) retorne erro, verifique se o Oracle Client for Microsoft Tools está instalado.
2. Realize a instalação do Oracle Client for Microsoft Tools conforme FAQ#: 2388.
3. Repita o teste de conexão na fonte ODBC (Animus); a comunicação deverá ser estabelecida com sucesso.`,
    relatedLinks: [
      { title: 'Oracle Client for Microsoft Tools', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2388' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2389;Nav=',
    attachments: [
      {
        name: 'ODBC – Erro de conexão (Animus COPAG).pdf',
        size: '269.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2389;FileID=16754'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2389;FileID=16751' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      palavrasChave: 'ODBC COPAG complemento erro conexão falha Animus',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '09/07/2026 13:43 (Mayara Sales)',
      alterado: '09/07/2026 13:55 (Mayara Sales)',
      atualizadoEm: '09.07.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2389;Nav=',
      itemId: '2389'
    }
  },
  {
    id: 'faq-10002391',
    faqNumber: '10002391',
    name: 'ODBC – Erro de acesso negado (Animus COPAG)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
    subCategory: 'ERRO',
    system: 'Windows',
    type: 'Incidente',
    service: 'Orientação aos Usuários',
    subject: 'ODBC – Erro de acesso negado (Animus COPAG)',
    associatedProcedureId: '',
    observacoes: 'A mensagem de erro aparece se o cliente não estiver autorizado ou credenciais/senha de banco incorretas.',
    procedure: `1. Caso a conexão da fonte de dados ODBC (Animus) retorne erro de acesso negado, contate a COPAG pelo ramal 3366.
2. Solicite a confirmação das permissões de acesso ao banco de dados Animus ou a redefinição da senha do usuário.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2391;Nav=',
    attachments: [
      {
        name: 'ODBC – Erro de acesso negado (Animus COPAG).pdf',
        size: '317.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2391;FileID=16763'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2391;FileID=16762' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::ERRO',
      palavrasChave: 'ODBC copag erro conexão falha animus acesso negado',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '09/07/2026 15:11 (Mayara Sales)',
      alterado: '09/07/2026 15:16 (Mayara Sales)',
      atualizadoEm: '09.07.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2391;Nav=',
      itemId: '2391'
    }
  },
  {
    id: 'faq-1000725',
    faqNumber: '1000725',
    name: 'Windows – Alerta de exclusão de arquivos',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Windows',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Alerta de Exclusão de Arquivos',
    associatedProcedureId: '',
    observacoes: 'Configuração para que o Windows sempre solicite confirmação antes de mover arquivos para a Lixeira.',
    procedure: `1. Clique com o botão direito do mouse no ícone da Lixeira na Área de Trabalho.
2. Selecione Propriedades.
3. Marque a caixa de seleção: "Exibir caixa de diálogo de confirmação de exclusão".
4. Clique em Aplicar e depois em OK.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=725;Nav=',
    attachments: [
      {
        name: 'Windows – Alerta de exclusão de arquivos.pdf',
        size: '174.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=725;FileID=15589'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=725;FileID=15588' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 10:42 (Leonardo Silva de Amarante)',
      alterado: '13/01/2026 14:30 (Mayara Sales)',
      atualizadoEm: '13.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=725;Nav=',
      itemId: '725'
    }
  },
  {
    id: 'faq-1000726',
    faqNumber: '1000726',
    name: 'Arquivos no Modo "Somente Leitura"',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Windows',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Arquivos no Modo "Somente Leitura"',
    associatedProcedureId: '',
    observacoes: 'Ocorre em arquivos compartilhados em rede quando outro colaborador já está com o arquivo aberto ou com bloqueio de edição.',
    procedure: `1. Caso o arquivo esteja aberto por outro usuário:
   - A mensagem informará o nome do usuário. Peça ao colega que feche o documento ou salve uma cópia local.
2. Bloqueado para edição (Word/Excel):
   - Solicite ao autor ou último editor o desbloqueio.
3. Arquivo em uso pelo sistema:
   - Feche as instâncias do aplicativo ou reinicie a sessão.
4. Falta de permissão de gravação:
   - Solicite acesso via Central de Serviços: Central de Serviços Administrativos > Informática > Armazenamento > Concessão de acesso a pastas de rede.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=726;Nav=',
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=726;FileID=1041' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 10:55 (Leonardo Silva de Amarante)',
      alterado: '24/07/2024 15:40 (Mayara Sales)',
      atualizadoEm: '26.10.2023',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=726;Nav=',
      itemId: '726'
    }
  },
  {
    id: 'faq-1000727',
    faqNumber: '1000727',
    name: 'Windows – Ativação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Windows',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Configuração para ativação do Windows',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2. Se a máquina ainda possuir Windows 10, deve ser atualizada para o Windows 11.',
    procedure: `1. Para máquinas Windows 11 com pendência de ativação:
   - Acesse Configurações > Sistema > Ativação.
   - Clique em "Solução de Problemas".
   - O assistente conectará aos servidores KMS/ativação institucional do Senado e concluirá a validação.
2. Caso a máquina ainda utilize Windows 10, realize a atualização para a imagem do Windows 11 em \\\\dru\\Biblioteca de Template.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=727;Nav=',
    attachments: [
      {
        name: 'Windows – Ativação.pdf',
        size: '390.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=727;FileID=15338'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=727;FileID=15337' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SISTEMAS OPERACIONAIS > WINDOWS > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SISTEMAS OPERACIONAIS::WINDOWS::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 10:59 (Leonardo Silva de Amarante)',
      alterado: '08/12/2025 12:52 (Mayara Sales)',
      atualizadoEm: '08.12.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=727;Nav=',
      itemId: '727'
    }
  }
];
