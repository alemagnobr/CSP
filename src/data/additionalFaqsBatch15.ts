import { FAQ } from '@/types';

export const additionalFaqsBatch15: FAQ[] = [
  {
    id: 'faq-1000867',
    faqNumber: '1000867',
    name: 'R-Project – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::R-PROJECT::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do R-Project',
    associatedProcedureId: '',
    observacoes: 'Lembrando que para realizar a instalação do software, o solicitante tem que estar como administrador do micro. Após o término da instalação retire o privilégio de administrador.',
    procedure: `1. Acesse o site r-project.org e clique em "Download R".
2. Na página de mirrors (cran.r-project.org/mirrors.html), escolha o país e o estado (Brazil, SP - vps.fmvz.usp.br/CRAN/).
3. Clique em "Download R for Windows" > "install R for first time" > "Download R-4.x for Windows (64bit)".
4. Execute o arquivo instalador baixado.
5. Selecione o idioma e clique em OK.
6. Avance pelas telas de boas-vindas e termos.
7. Selecione os componentes desejados e pasta de destino.
8. Conclua a instalação e finalize.`,
    relatedLinks: [
      { title: 'r-project.org', url: 'http://r-project.org/' },
      { title: 'CRAN Mirrors', url: 'https://cran.r-project.org/mirrors.html' },
      { title: 'CRAN USP', url: 'https://vps.fmvz.usp.br/CRAN/' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=867;Nav=',
    attachments: [
      {
        name: 'R-Project – Instalação.pdf',
        size: '792.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=867;FileID=14215'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=867;FileID=14218' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=867;FileID=14202' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > R-PROJECT > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::R-PROJECT::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 17:09 (Leonardo Silva de Amarante)',
      alterado: '15/10/2025 15:53 (Mayara Sales)',
      atualizadoEm: '15.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=867;Nav=',
      itemId: '867'
    }
  },
  {
    id: 'faq-1000868',
    faqNumber: '1000868',
    name: 'RawTherapee – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::RAWTHERAPEE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do RawTherapee',
    associatedProcedureId: '',
    observacoes: 'O RawTherapee é um sistema de processamento de fotos em plataforma cruzada com processamento não destrutivo de arquivos RAW.',
    procedure: `1. Execute o arquivo localizado em X:\\RawTherapee (RawTherapee).
2. Confirme o prompt do Windows clicando em Sim e informe o número do chamado.
3. Selecione o idioma e clique em OK.
4. Avance pelas etapas do assistente clicando em Próximo.
5. Marque a opção de atalho na Área de Trabalho caso solicitado pelo cliente.
6. Clique em Instalar, aguarde a extração e clique em Concluir.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=868;Nav=',
    attachments: [
      {
        name: 'RawTherapee – Instalação.pdf',
        size: '470.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=868;FileID=14223'
      }
    ],
    visualRefs: [
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=868;FileID=14224' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=868;FileID=14232' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > RAWTHERAPEE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::RAWTHERAPEE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 17:14 (Leonardo Silva de Amarante)',
      alterado: '15/10/2025 16:38 (Mayara Sales)',
      atualizadoEm: '15.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=868;Nav=',
      itemId: '868'
    }
  },
  {
    id: 'faq-1000859',
    faqNumber: '1000859',
    name: 'SaúdeSF (Benner) – Erro no Sistema',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SAÚDESF::ERRO',
    subCategory: 'ERRO',
    system: 'Saúde',
    type: 'Incidente',
    service: 'Suporte a aplicações corporativas',
    subject: 'Erro no Sistema Benner (Saúde SF)',
    associatedProcedureId: '',
    observacoes: 'Erro H80004003 (Valor Não Pode ser Nulo) referente a DLL Oracle.ManagedDataAccess desatualizada ou ausente.',
    procedure: `1. Para dúvidas internas no Benner, contate masant@senado.leg.br ou sis@senado.leg.br.
2. Para solucionar o erro da DLL, substitua o arquivo oracle.manageddataaccess.dll em:
   C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Oracle.ManagedDataAccess\\v4.0_4.121.2.0__89b483f429c47342\\oracle.manageddataaccess.dll
   pelo arquivo de mesmo nome localizado na pasta do Benner:
   C:\\Program Files (x86)\\Benner\\SAUDESF\\oracle.manageddataaccess.dll.
3. Reinicie o sistema Benner e realize novo teste.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=859;Nav=',
    attachments: [
      {
        name: 'SaúdeSF (Benner) – Erro no Sistema.pdf',
        size: '381.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=859;FileID=16030'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=859;FileID=14241' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=859;FileID=14242' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SAÚDESF > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SAÚDESF::ERRO',
      palavrasChave: 'saúdeSF benner sis',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 16:03 (Leonardo Silva de Amarante)',
      alterado: '05/08/2026 14:42 (Mayara Sales)',
      atualizadoEm: '10.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=859;Nav=',
      itemId: '859'
    }
  },
  {
    id: 'faq-1000858',
    faqNumber: '1000858',
    name: 'SaúdeSF (Benner) – Ambiente Web do Sistema',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SAÚDESF::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Saúde',
    type: 'Requisição de serviço',
    service: 'Suporte a dúvida técnica/operacional',
    subject: 'Ambiente Web do Sistema Saúde-SF',
    associatedProcedureId: '',
    observacoes: 'Módulo de gestão hospitalar da suíte de aplicações Saúde SF.',
    procedure: `1. Caso o usuário não tenha acesso ao sistema web, solicitar liberação através do e-mail SESTI@senado.leg.br.
2. Para acessar o Sistema Hospitalar Benner Web, utilize os navegadores Edge, Chrome ou Mozilla Firefox pelo endereço:
   http://intra4s1:81/SISTEMA/ABERTURA/login.ASPX.
3. Autentique-se com as credenciais autorizadas.`,
    relatedLinks: [
      { title: 'Sistema Benner Web', url: 'http://intra4s1:81/SISTEMA/ABERTURA/login.ASPX' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=858;Nav=',
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=858;FileID=14244' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SAÚDESF > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SAÚDESF::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 16:00 (Leonardo Silva de Amarante)',
      alterado: '16/10/2025 10:54 (Mayara Sales)',
      atualizadoEm: '16.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=858;Nav=',
      itemId: '858'
    }
  },
  {
    id: 'faq-1000860',
    faqNumber: '1000860',
    name: 'SaúdeSF (Benner) – Configuração do Sistema (Nível 1)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SAÚDESF::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Saúde',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Solicita a configuração do Saúde-SF',
    associatedProcedureId: '',
    observacoes: 'Realize com perfil de administrador do técnico. Adicione o usuário aplic-benner e o login do solicitante com permissão total na pasta.',
    procedure: `1. Verifique se a pasta C:\\Program Files (x86)\\Benner existe. Se não existir, encaminhe para o setor responsável/N2 para instalação.
2. Clique com botão direito na pasta Benner > Propriedades > Segurança > Editar.
3. Adicione o usuário "aplic-benner" e o login do solicitante, concedendo Controle Total.
4. Execute "gpedit.msc": Configurações do Computador > Configurações do Windows > Políticas locais > Atribuição de direitos de usuário > "Representar um cliente após autenticação".
5. Adicione "aplic-benner" e o login do usuário.
6. Copie o atalho SAUDESF para a Área de Trabalho do solicitante.
7. Se persistir falha de login, contate SESTI@senado.leg.br para liberação de acesso.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=860;Nav=',
    attachments: [
      {
        name: 'SaúdeSF (Benner) – Configuração do Sistema (Nível 1).pdf',
        size: '679.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=860;FileID=15484'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=860;FileID=14257' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=860;FileID=14266' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SAÚDESF > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SAÚDESF::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 16:07 (Leonardo Silva de Amarante)',
      alterado: '19/12/2025 16:34 (Leonardo Silva de Amarante)',
      atualizadoEm: '19.12.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=860;Nav=',
      itemId: '860'
    }
  },
  {
    id: 'faq-1000861',
    faqNumber: '1000861',
    name: 'SaúdeSF (Benner) – Configuração do Sistema (Nível 2)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SAÚDESF::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Saúde',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do Saúde-SF',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2. Instalação do Cliente Oracle 23AI, .NET Framework 4.6.2 e pacote SaúdeSF.',
    procedure: `1. Execute o instalador do Cliente Oracle localizado em X:\\Cliente Oracle 23AI (Oracle).
2. Conceda no gpedit.msc o direito de "Representar um cliente após autenticação" para "aplic-benner" e o solicitante.
3. Adicione "aplic-benner" no Gerenciador de Usuários Locais.
4. Execute o arquivo em X:\\Saude-SF (Benner Saúde).
5. Confirme os prompts, informe o chamado e instale o .NET Framework 4.6.2 se solicitado.
6. Configure o servidor: INTRA4S1 | Porta: 5342.
7. Selecione a opção "SAUDESF" e conclua a instalação.
8. Configure permissões de Controle Total na pasta C:\\Program Files (x86)\\Benner para "aplic-benner" e para o solicitante.
9. Reinicie o sistema.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=861;Nav=',
    attachments: [
      {
        name: 'SaúdeSF (Benner) – Configuração do Sistema (Nível 2).pdf',
        size: '929.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=861;FileID=16350'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=861;FileID=16351' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=861;FileID=14283' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SAÚDESF > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SAÚDESF::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 16:17 (Leonardo Silva de Amarante)',
      alterado: '11/05/2026 11:25 (Gabriel Queiroz Pires)',
      atualizadoEm: '11.05.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=861;Nav=',
      itemId: '861'
    }
  },
  {
    id: 'faq-10001249',
    faqNumber: '10001249',
    name: 'SCCM 2012 – Erro na Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::ERRO',
    subCategory: 'ERRO',
    system: 'Outros Aplicativos',
    type: 'Incidente',
    service: 'Suporte a software de estação de trabalho',
    subject: 'Erro na Instalação do SCCM',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2. Erros de compilação MOF/WMI.',
    procedure: `MÉTODO 01:
1. Abra o prompt de comando como Administrador e acesse C:\\windows\\system32\\wbem.
2. Execute o comando:
   dir /b *.mof *.mfl | findstr /v /i uninstall > moflist.txt & for /F %s in (moflist.txt) do mofcomp %s
3. Aguarde a compilação completa.
4. Execute novamente a instalação em X:\\SCCM - System Center Configuration Manager (Microsoft).

MÉTODO 02:
1. Caso persista, execute o script em W:\\COATEN\\SEARP\\SCCM – Correcao.
2. Reinicie o computador e tente a instalação novamente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1249;Nav=',
    attachments: [
      {
        name: 'SCCM 2012 – Erro na Instalação.pdf',
        size: '456.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1249;FileID=14398'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1249;FileID=14397' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1249;FileID=14391' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SCCM > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/02/2024 15:24 (Jeferson dos Santos Morais)',
      alterado: '14/11/2025 14:58 (Mayara Sales)',
      atualizadoEm: '21.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1249;Nav=',
      itemId: '1249'
    }
  },
  {
    id: 'faq-10001255',
    faqNumber: '10001255',
    name: 'SCCM 2012 – Possíveis Erros',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::ERRO',
    subCategory: 'ERRO',
    system: 'Outros Aplicativos',
    type: 'Incidente',
    service: 'Suporte a software de estação de trabalho',
    subject: 'Erro SCCM',
    associatedProcedureId: '',
    observacoes: 'Quando o micro do solicitante está bloqueado ou não responde a comandos de gerenciamento remoto.',
    procedure: `1. Verifique se o equipamento está ligado e conectado à rede (teste de ping).
2. Verifique se o serviço BITS (Serviço de Transferência Inteligente em Segundo Plano) está ativo no micro remoto.
3. Verifique se o Firewall do Windows está bloqueando as portas WMI/RPC (135, portas dinâmicas).
4. Caso o cliente SCCM esteja corrompido, proceda com a reinstalação direta pelo console ou execute a correção de WMI.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1255;Nav=',
    attachments: [
      {
        name: 'SCCM 2012 – Possíveis Erros.pdf',
        size: '242.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1255;FileID=14386'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1255;FileID=14387' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SCCM > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/02/2024 17:10 (Jeferson dos Santos Morais)',
      alterado: '21/10/2025 14:20 (Mayara Sales)',
      atualizadoEm: '21.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1255;Nav=',
      itemId: '1255'
    }
  },
  {
    id: 'faq-10001250',
    faqNumber: '10001250',
    name: 'SCCM 2012 – Instalação do Console',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do SCCM',
    associatedProcedureId: '',
    observacoes: 'Ferramenta da Microsoft para acesso remoto e gerenciamento de estações pelos técnicos autorizados.',
    procedure: `1. Requer autorização via Central de Serviços: Intranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.
2. Execute o instalador em X:\\SCCM - System Center Configuration Manager (Microsoft).
3. Confirme com Sim e insira o número do chamado.
4. Clique em Avançar e informe o servidor: SCCM12.SENADO.GOV.BR.
5. Marque "Não quero ingressar no programa agora" e avance.
6. Clique em Instalar, aguarde e clique em Concluir.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1250;Nav=',
    attachments: [
      {
        name: 'SCCM 2012 – Instalação do Console.pdf',
        size: '487.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1250;FileID=14344'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1250;FileID=14340' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SCCM > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/02/2024 16:00 (Jeferson dos Santos Morais)',
      alterado: '21/10/2025 11:39 (Mayara Sales)',
      atualizadoEm: '21.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1250;Nav=',
      itemId: '1250'
    }
  },
  {
    id: 'faq-10001251',
    faqNumber: '10001251',
    name: 'SCCM 2012 – Instalação do Cliente',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do Cliente do SCCM',
    associatedProcedureId: '',
    observacoes: 'Software homologado. Permite receber conexões de suporte remoto dos técnicos da casa.',
    procedure: `1. Execute o instalador localizado em X:\\SCCM - System Center Configuration Manager (Microsoft).
2. Confirme o prompt clicando em Sim e insira o número do chamado.
3. Aguarde o processo de instalação automática.
4. Clique em OK para finalizar.`,
    relatedLinks: [
      { title: 'SCCM 2012 – Utilização do Cliente', url: 'https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1254;Nav=' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1251;Nav=',
    attachments: [
      {
        name: 'SCCM 2012 – Instalação do Cliente.pdf',
        size: '315.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1251;FileID=14374'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1251;FileID=14373' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SCCM > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/02/2024 16:05 (Jeferson dos Santos Morais)',
      alterado: '21/10/2025 12:04 (Mayara Sales)',
      atualizadoEm: '21.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1251;Nav=',
      itemId: '1251'
    }
  },
  {
    id: 'faq-10001252',
    faqNumber: '10001252',
    name: 'SCCM 2012 – Instalação do Cliente Direto do Console',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do SCCM',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2.',
    procedure: `1. Abra a console do Configuration Manager.
2. Acesse "Coleção de Dispositivos" > "All Systems (001)".
3. Localize o equipamento pelo nome de rede (endereço lógico).
4. Clique com o botão direito no equipamento e selecione "Instalar Cliente".
5. Marque as 3 opções no assistente (inclusive desinstalar cliente existente se houver).
6. Avance e clique em Fechar.
7. Aguarde de 5 a 10 minutos para atualização do serviço no host cliente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1252;Nav=',
    attachments: [
      {
        name: 'SCCM 2012 – Instalação do Cliente Direto do Console.pdf',
        size: '779.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1252;FileID=14360'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1252;FileID=14352' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SCCM > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/02/2024 16:09 (Jeferson dos Santos Morais)',
      alterado: '21/10/2025 11:51 (Mayara Sales)',
      atualizadoEm: '21.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1252;Nav=',
      itemId: '1252'
    }
  },
  {
    id: 'faq-10001253',
    faqNumber: '10001253',
    name: 'SCCM 2012 – Serviço de Transferência Inteligente em Segundo Plano',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Instalação do SCCM',
    associatedProcedureId: '',
    observacoes: 'Antes de instalar o SCCM pela console, ative o serviço BITS.',
    procedure: `1. Abra o Gerenciamento do Computador.
2. Clique em Ação > Conectar a outro computador e insira o endereço lógico do equipamento.
3. Acesse Serviços e Aplicativos > Serviços.
4. Localize "Serviço de transferência inteligente em segundo plano" (BITS).
5. Se estiver desativado, altere o tipo de inicialização para "Automático (Atraso na Inicialização)" e inicie o serviço.
6. Aguarde 5 minutos antes de tentar instalar o cliente pela console.`,
    relatedLinks: [
      { title: 'SCCM 2012 – Instalação do Cliente Direto da Console', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1252;Nav=' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1253;Nav=',
    attachments: [
      {
        name: 'SCCM 2012 – Serviço de Transferência Inteligente em Segundo Plano.pdf',
        size: '449.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1253;FileID=14366'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1253;FileID=14368' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SCCM > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/02/2024 17:03 (Jeferson dos Santos Morais)',
      alterado: '21/10/2025 11:58 (Mayara Sales)',
      atualizadoEm: '21.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1253;Nav=',
      itemId: '1253'
    }
  },
  {
    id: 'faq-10001254',
    faqNumber: '10001254',
    name: 'SCCM 2012 – Utilização do Console',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Utilizando o SCCM',
    associatedProcedureId: '',
    observacoes: 'Permite troca de usuário sem perder conexão, transferência de arquivos via clipboard e bloqueio de periféricos.',
    procedure: `1. Abra o programa "Visualizador de Controle Remoto".
2. Selecione Arquivo > Conectar.
3. Digite o endereço lógico do micro e clique em OK.
4. Solicite ao usuário cliente que clique em "Approve" no pop-up de permissão que surgirá em sua tela.
5. Após aprovação, a sessão de controle remoto estará aberta.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1254;Nav=',
    attachments: [
      {
        name: 'SCCM 2012 – Utilização do Console.pdf',
        size: '539.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1254;FileID=17229'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1254;FileID=15352' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SCCM > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/02/2024 17:09 (Jeferson dos Santos Morais)',
      alterado: '21/08/2026 15:13 (Leonardo Silva de Amarante)',
      atualizadoEm: '21.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1254;Nav=',
      itemId: '1254'
    }
  },
  {
    id: 'faq-10002409',
    faqNumber: '10002409',
    name: 'SCCM 01 – Instalação do Console',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do SCCM 01',
    associatedProcedureId: '',
    observacoes: 'Instalação automatizada do módulo console SCCM01 para conexão e suporte aos clientes.',
    procedure: `1. Execute o arquivo localizado em X:\\SCCM - System Center Configuration Manager (Microsoft)\\SCCM01.
2. Confirme com "Sim" nos prompts e clique em "Concluir".
3. Os ícones serão criados na Área de Trabalho.
4. Abra o "Visualizador de Controle Remoto", insira o endereço lógico do micro e clique em OK.
5. Peça para o usuário aceitar a conexão clicando em "Approve".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2409;Nav=',
    attachments: [
      {
        name: 'SCCM 01 – Instalação do Console.pdf',
        size: '313.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2409;FileID=17211'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2409;FileID=17202' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SCCM > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCCM::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '21/08/2026 11:45 (Leonardo Silva de Amarante)',
      alterado: '21/08/2026 11:47 (Leonardo Silva de Amarante)',
      atualizadoEm: '21.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2409;Nav=',
      itemId: '2409'
    }
  },
  {
    id: 'faq-1000856',
    faqNumber: '1000856',
    name: 'SCRIBUS – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCRIBUS::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do Scribus',
    associatedProcedureId: '',
    observacoes: 'Editor de editoração eletrônica open source para diagramação de jornais, brochuras e cartazes.',
    procedure: `1. Execute o arquivo em X:\\Scribus (The Scribus Team).
2. Confirme com Sim e insira o número do chamado.
3. Avance pelas telas aceitando os termos (I Agree / Next).
4. Selecione o idioma e conclua o assistente.
5. Inicie o Scribus pelo atalho gerado.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=856;Nav=',
    attachments: [
      {
        name: 'SCRIBUS – Instalação.pdf',
        size: '726.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=856;FileID=14585'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=856;FileID=14419' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SCRIBUS > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SCRIBUS::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 15:48 (Leonardo Silva de Amarante)',
      alterado: '23/10/2025 14:58 (Mayara Sales)',
      atualizadoEm: '22.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=856;Nav=',
      itemId: '856'
    }
  },
  {
    id: 'faq-10002412',
    faqNumber: '10002412',
    name: 'Shure Designer 6 - Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SHURE DESIGNER 6::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do Shure Designer 6 (Shure Inc)',
    associatedProcedureId: '',
    observacoes: 'Software gratuito para configuração de sistemas de áudio de conferência (Microflex Ecosystem).',
    procedure: `1. Execute o arquivo em CENTRAL_ATENDIMENTO (\\\\DRU) (X:) SHURE DESIGNER 6 (Shure Inc).
2. Clique em Sim nos prompts de segurança.
3. Avance pelas etapas clicando em Next.
4. Aguarde a instalação e clique em Finish.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2412;Nav=',
    attachments: [
      {
        name: 'Instalação do Shure Designer 6.pdf',
        size: '456.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2412;FileID=17270'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2412;FileID=17261' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SHURE DESIGNER 6 > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SHURE DESIGNER 6::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: 'shure designer designer 6',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '21/08/2026 17:13 (Gabriel Queiroz Pires)',
      alterado: '24/08/2026 09:43 (Gabriel Queiroz Pires)',
      atualizadoEm: '21.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2412;Nav=',
      itemId: '2412'
    }
  },
  {
    id: 'faq-10001229',
    faqNumber: '10001229',
    name: 'Sistema SIAFI – Possíveis Erros',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAFI::ERRO',
    subCategory: 'ERRO',
    system: 'SIAFI',
    type: 'Incidente',
    service: 'Suporte a Aplicações Corporativas',
    subject: 'Erro SIAFI',
    associatedProcedureId: '',
    observacoes: 'Erros comuns no SIAFI e direcionamento.',
    procedure: `1. Para falhas de conexão ou autenticação, verifique se o usuário utiliza Passkey ou Certificado Digital ICP-Brasil.
2. Certifique-se de que o Bluetooth do dispositivo e do PC estejam pareados para autenticação com Passkey.
3. Se o erro for de certificado, confirme se o Java 32 bits e o lançador javaws.exe estão configurados.
4. Persistindo dúvidas operacionais, o contato deve ser feito com a Secretaria do Tesouro Nacional (e-servicos.tesouro.gov.br).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1229;Nav=',
    attachments: [
      {
        name: 'Sistema SIAFI – Possíveis Erros.pdf',
        size: '273.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1229;FileID=14501'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1229;FileID=14460' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SIAFI > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAFI::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/02/2024 10:54 (Jeferson dos Santos Morais)',
      alterado: '22/10/2025 13:24 (Mayara Sales)',
      atualizadoEm: '22.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1229;Nav=',
      itemId: '1229'
    }
  },
  {
    id: 'faq-10002143',
    faqNumber: '10002143',
    name: 'Sistema SIAFI Web - Erro de Acesso com Passkey',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAFI::ERRO',
    subCategory: 'ERRO',
    system: 'SIAFI',
    type: 'Incidente',
    service: 'Suporte a Aplicações Corporativas',
    subject: 'SIAFI Web - Erro de Acesso com Passkey',
    associatedProcedureId: '',
    observacoes: 'O bluetooth é um pré-requisito obrigatório para o acesso com Passkey no SIAFI.',
    procedure: `1. Caso seja exibida a mensagem "Insira a chave de segurança na USB", significa que o computador não possui Bluetooth ou que este está desativado.
2. Como os computadores do Senado Federal não possuem Bluetooth integrado de fábrica, é necessário utilizar um adaptador USB Bluetooth compatível (5.0/5.3 Plug & Play).
3. Conecte e ative o Bluetooth, emparelhe o smartphone cadastrado e repita a autenticação via Passkey.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2143;Nav=',
    attachments: [
      {
        name: 'Sistema SIAFI Web - Erro de Acesso com Passkey.pdf',
        size: '228.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2143;FileID=14424'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2143;FileID=14425' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SIAFI > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAFI::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/11/2024 14:25 (Mayara Sales)',
      alterado: '22/10/2025 10:00 (Mayara Sales)',
      atualizadoEm: '22.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2143;Nav=',
      itemId: '2143'
    }
  },
  {
    id: 'faq-10001228',
    faqNumber: '10001228',
    name: 'Sistema SIAFI Operacional',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAFI::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'SIAFI',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Acesso ao sistema SIAFI Operacional',
    associatedProcedureId: '',
    observacoes: 'Desde 18/11/2024 não é mais possível acessar o SIAFI com CPF e senha simples.',
    procedure: `1. Acesse o Sistema SIAFI Web (https://siafi.tesouro.gov.br/senha/public/pages/security/login.jsf).
2. Selecione a forma de entrada: "Entrar com PassKey" ou "Entrar com gov.br" (certificado digital autenticado pelo SERPRO).
3. Realize a validação no dispositivo Bluetooth habilitado ou selecione o certificado digital.
4. Na tela do sistema, selecione "Siafi Operacional", clique em "Concordar" e copie o código de acesso gerado.
5. Abra o arquivo JNLP baixado através do "javaws.exe" localizado em C:\\Program Files (x86)\\Java\\versão_do_java\\bin.
6. Na tela do terminal Java, cole o código de acesso e aperte Enter.`,
    relatedLinks: [
      { title: 'Sistema SIAFI Web', url: 'https://siafi.tesouro.gov.br/senha/public/pages/security/login.jsf' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1228;Nav=',
    attachments: [
      {
        name: 'Sistema SIAFI Operacional.pdf',
        size: '685.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1228;FileID=14483'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1228;FileID=14496' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SIAFI > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAFI::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/02/2024 10:52 (Jeferson dos Santos Morais)',
      alterado: '22/05/2026 09:10 (Jeferson dos Santos Morais)',
      atualizadoEm: '22.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1228;Nav=',
      itemId: '1228'
    }
  },
  {
    id: 'faq-10001235',
    faqNumber: '10001235',
    name: 'Sistema SIAFI',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAFI::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'SIAFI',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Acesso ao SIAFI',
    associatedProcedureId: '',
    observacoes: 'Horário de funcionamento do Novo SIAFI: 08:30 às 21:30 (horário de Brasília). Exige Bluetooth e PassKey para perfil consulta.',
    procedure: `1. Para novos usuários, o acesso deve ser solicitado pelo Chefe de Serviço via Central de Serviços:
   Intranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.
2. Na descrição deve conter: Nome completo, CPF, Matrícula, Cargo/Função, E-mail e Ramal.
3. Para desbloqueio ou atualização de dados (como inclusão de PassKey), o ramal 2000 registra o chamado e direciona para a fila SUAPE.
4. Para perfis executivos, contate a SAFIN pelos ramais 3605 e 4562.`,
    relatedLinks: [
      { title: 'Mudanças no acesso ao Siafi', url: 'https://www.gov.br/tesouronacional/pt-br/siafi/como-acessar/mudancas_acesso-siafi' },
      { title: 'Sistema SIAFI Web - Acesso Passkey', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2142;Nav=' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1235;Nav=',
    attachments: [
      {
        name: 'Sistema SIAFI.pdf',
        size: '270.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1235;FileID=14464'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1235;FileID=14598' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SIAFI > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAFI::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/02/2024 11:01 (Jeferson dos Santos Morais)',
      alterado: '23/10/2025 14:59 (Mayara Sales)',
      atualizadoEm: '22.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1235;Nav=',
      itemId: '1235'
    }
  },
  {
    id: 'faq-10001243',
    faqNumber: '10001243',
    name: 'Sistema SIAFI – Tesouro Gerencial',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAFI::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'SIAFI',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Acesso ao Tesouro Gerencial.',
    associatedProcedureId: '',
    observacoes: 'Ferramenta de Business Intelligence do Governo Federal para extração e consulta de dados orçamentários do SIAFI.',
    procedure: `1. Acesse o portal do Tesouro Gerencial pelo link oficial:
   http://tesourogerencial.tesouro.gov.br/tg/servlet/mstrWeb?pg=login
2. Autentique-se com seu certificado digital ou credenciais cadastradas pelo Tesouro Nacional.
3. Para capacitação e dúvidas de uso, assista à playlist do Curso do Tesouro Gerencial no YouTube.`,
    relatedLinks: [
      { title: 'Tesouro Gerencial', url: 'http://tesourogerencial.tesouro.gov.br/tg/servlet/mstrWeb?pg=login&v=1696620007410' },
      { title: 'Curso sobre o Tesouro Gerencial', url: 'http://youtube.com/playlist?list=PLJDqJWGmL7ka5wyBT7jP_jQ1MFtg5R9Em' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1243;Nav=',
    attachments: [
      {
        name: 'Sistema SIAFI – Tesouro Gerencial.pdf',
        size: '299.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1243;FileID=14502'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1243;FileID=14462' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SIAFI > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAFI::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/02/2024 11:06 (Jeferson dos Santos Morais)',
      alterado: '22/10/2025 13:23 (Mayara Sales)',
      atualizadoEm: '22.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1243;Nav=',
      itemId: '1243'
    }
  },
  {
    id: 'faq-10002142',
    faqNumber: '10002142',
    name: 'Sistema SIAFI Web – Acesso Passkey',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAFI::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'SIAFI',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Acesso ao SIAFI Web',
    associatedProcedureId: '',
    observacoes: 'Mantenha o dispositivo com Bluetooth ativado no mesmo ambiente físico do micro para validar a autenticação.',
    procedure: `1. Acesse o portal: https://siafi.tesouro.gov.br/senha/public/pages/security/login.jsf.
2. Clique em "Entrar com Passkey".
3. Confirme o aviso no navegador e verifique seu smartphone cadastrado.
4. No dispositivo móvel, confirme a biometria/PIN de segurança.
5. O navegador autenticará e exibirá a página principal do SIAFI Web.
6. Clique em "Siafi Operacional", aceite os termos e continue para gerar o código de acesso.`,
    relatedLinks: [
      { title: 'Sistema SIAFI Web', url: 'https://siafi.tesouro.gov.br/senha/public/pages/security/login.jsf' },
      { title: 'Sistema SIAFI Web - Erro de Acesso com Passkey', url: 'http://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2143' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2142;Nav=',
    attachments: [
      {
        name: 'Sistema SIAFI Web – Acesso Passkey.pdf',
        size: '842.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2142;FileID=15688'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2142;FileID=14472' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SIAFI > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAFI::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/11/2024 11:33 (Mayara Sales)',
      alterado: '29/01/2026 11:37 (Gabriel Queiroz Pires)',
      atualizadoEm: '29.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2142;Nav=',
      itemId: '2142'
    }
  },
  {
    id: 'faq-10002147',
    faqNumber: '10002147',
    name: 'Sistema SIAFI Web – Acesso Certificado Digital',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAFI::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'SIAFI',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Acesso ao SIAFI Web com certificado digital.',
    associatedProcedureId: '',
    observacoes: 'Requisitos: Certificado ICP-Brasil (físico A1/A3 ou em nuvem) e conta Gov.br nível Prata ou Ouro com 2FA habilitado.',
    procedure: `1. Acesse o portal do Sistema SIAFI Web.
2. Clique no botão "Entrar com gov.br".
3. Escolha "Seu certificado digital" (token/cartão/A1) ou "Seu certificado digital em nuvem" (NeoID, Bird ID, SafeID, etc.).
4. Selecione o certificado na lista, digite o PIN correspondente e autorize a conexão.`,
    relatedLinks: [
      { title: 'Sistema SIAFI Web', url: 'https://siafi.tesouro.gov.br/senha/public/pages/security/login.jsf' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2147;Nav=',
    attachments: [
      {
        name: 'Sistema SIAFI Web – Acesso Certificado Digital.pdf',
        size: '373.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2147;FileID=14480'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2147;FileID=14481' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SIAFI > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAFI::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/11/2024 15:20 (Mayara Sales)',
      alterado: '22/10/2025 12:29 (Mayara Sales)',
      atualizadoEm: '22.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2147;Nav=',
      itemId: '2147'
    }
  },
  {
    id: 'faq-1000854',
    faqNumber: '1000854',
    name: 'Sistema SIAGS',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAGS::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Saúde',
    type: 'Requisição de serviço',
    service: 'Suporte a dúvida técnica/operacional.',
    subject: 'Orientações sobre o SIAGS',
    associatedProcedureId: '',
    observacoes: 'O sistema SIAGS (antigo SISBE) é um sistema de autorização externa do Saúde Caixa para informações de saúde dos beneficiários do plano.',
    procedure: `1. O acesso ao SIAGS é privativo do pessoal do SIS e extremamente restrito por tratar de informações sigilosas de saúde.
2. É expressamente vedado qualquer tipo de acesso sem prévia autorização da Coordenação de Autorização do SIS (COASIS) e Coordenação Geral de Saúde.
3. Para dúvidas e esclarecimentos contate: coasis@senado.leg.br.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=854;Nav=',
    attachments: [
      {
        name: 'Sistema SIAGS.pdf',
        size: '187.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=854;FileID=14504'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SIAGS > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIAGS::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 15:38 (Leonardo Silva de Amarante)',
      alterado: '22/10/2025 14:44 (Mayara Sales)',
      atualizadoEm: '22.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=854;Nav=',
      itemId: '854'
    }
  },
  {
    id: 'faq-1000852',
    faqNumber: '1000852',
    name: 'SideSync – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIDESYNC::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do software SideSync',
    associatedProcedureId: '',
    observacoes: 'Aplicativo da Samsung que permite compartilhamento de arquivos e espelhamento entre dispositivo móvel e PC.',
    procedure: `1. Execute o arquivo em X:\\SideSync (Samsung).
2. Confirme o prompt clicando em Sim e informe o número do chamado.
3. Avance pelas etapas aceitando os termos e clique em Instalar.
4. Conclua a instalação e clique em Iniciar.
5. Conecte o smartphone via cabo USB e desative o Wi-Fi do celular para forçar a conexão direta e estável.
6. Digite o código PIN ou faça a leitura do QR Code exibido na tela.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=852;Nav=',
    attachments: [
      {
        name: 'SideSync – Instalação.pdf',
        size: '424.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=852;FileID=14611'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=852;FileID=14513' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SIDESYNC > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIDESYNC::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 15:29 (Leonardo Silva de Amarante)',
      alterado: '23/10/2025 15:41 (Mayara Sales)',
      atualizadoEm: '22.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=852;Nav=',
      itemId: '852'
    }
  },
  {
    id: 'faq-1000851',
    faqNumber: '1000851',
    name: 'SIGEP – Erro no Banco de Dados',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIGEP::ERRO',
    subCategory: 'ERRO',
    system: 'Outros Aplicativos',
    type: 'Incidente',
    service: 'Suporte a aplicações corporativas',
    subject: 'Erro no Banco de Dados no SIGEP',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2. Ocorre ao atualizar dados: "Ocorreu um erro na atualização dos dados, por favor tente novamente".',
    procedure: `1. Atualize para a versão mais recente do Java em W:\\COATEN\\SEARP\\JAVA.
2. Abra o SIGEP: Configurações > Configurações SIGEP CLIENTE.
3. Insira usuário e senha para autenticar no Proxy av-web.senado.gov.br.
4. Reinicie o sistema SIGEP após salvar as configurações.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=851;Nav=',
    attachments: [
      {
        name: 'SIGEP - Erro de Banco de Dados.pdf',
        size: '305.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=851;FileID=14510'
      }
    ],
    visualRefs: [
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=851;FileID=14508' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SIGEP > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIGEP::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 15:19 (Leonardo Silva de Amarante)',
      alterado: '22/10/2025 15:11 (Mayara Sales)',
      atualizadoEm: '22.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=851;Nav=',
      itemId: '851'
    }
  },
  {
    id: 'faq-1000850',
    faqNumber: '1000850',
    name: 'SIGEP – Configuração de Proxy Após a Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIGEP::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Configuração de Proxy no SIGEP',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2. A instalação do software é feita pelos Correios; o suporte do Senado auxilia na configuração do Proxy.',
    procedure: `1. No SIGEP, selecione as configurações de Proxy.
2. Configure: Endereço: av-web.senado.gov.br | Porta: 80.
3. Insira usuário e senha corporativos autorizados.
4. Salve e reinicie o SIGEP.`,
    relatedLinks: [
      { title: 'SIGEP Update Correios', url: 'http://apps.correios.com.br/sigep/update/' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=850;Nav=',
    attachments: [
      {
        name: 'SIGEP – Configuração de Proxy Após a Instalação.pdf',
        size: '322.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=850;FileID=14507'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=850;FileID=14505' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SIGEP > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIGEP::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 15:15 (Leonardo Silva de Amarante)',
      alterado: '22/10/2025 15:01 (Mayara Sales)',
      atualizadoEm: '22.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=850;Nav=',
      itemId: '850'
    }
  },
  {
    id: 'faq-1000849',
    faqNumber: '1000849',
    name: 'Sign Pro PDF (Wacom) – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIGN PRO PDF (WACOM)::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do Sign Pro PDF (Wacom)',
    associatedProcedureId: '',
    observacoes: 'É necessário conectar o equipamento (Pad Wacom) ao computador para capturar assinaturas eletrônicas com segurança.',
    procedure: `1. Conecte a mesa digitalizadora (Pad) Wacom à porta USB do computador.
2. Execute o instalador localizado em X:\\Sign Pro PDF (Wacom).
3. Confirme com Sim e insira o número do chamado.
4. Avance pelas etapas do assistente clicando em Avançar.
5. Selecione as opções de componentes desejadas e clique em Instalar.
6. Aguarde a finalização e clique em Concluir.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=849;Nav=',
    attachments: [
      {
        name: 'Sign Pro PDF (Wacom) – Instalação.pdf',
        size: '457.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=849;FileID=14628'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=849;FileID=14533' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SIGN PRO PDF (WACOM) > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SIGN PRO PDF (WACOM)::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 15:09 (Leonardo Silva de Amarante)',
      alterado: '23/10/2025 16:07 (Mayara Sales)',
      atualizadoEm: '23.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=849;Nav=',
      itemId: '849'
    }
  },
  {
    id: 'faq-1000847',
    faqNumber: '1000847',
    name: 'Sistema SILB – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SILB::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do SILB',
    associatedProcedureId: '',
    observacoes: 'Sistema de Informações do ILB para planejamento e realização de cursos internos e externos gerenciados pelo ILB.',
    procedure: `1. Execute o arquivo no caminho X:\\SILB (Prodasen).
2. Confirme clicando em Sim nos prompts e informe o número do chamado.
3. Clique em OK para confirmar a instalação.
4. O ícone de acesso será criado na Área de Trabalho.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=847;Nav=',
    attachments: [
      {
        name: 'Sistema SILB – Instalação.pdf',
        size: '249.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=847;FileID=14633'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=847;FileID=14549' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SILB > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SILB::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 14:54 (Leonardo Silva de Amarante)',
      alterado: '23/10/2025 16:11 (Mayara Sales)',
      atualizadoEm: '23.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=847;Nav=',
      itemId: '847'
    }
  },
  {
    id: 'faq-1000833',
    faqNumber: '1000833',
    name: 'Sistema SINDORC',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SINDORC::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Outros Aplicativos',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Orientações sobre o SINDORC',
    associatedProcedureId: '',
    observacoes: 'Criado para substituir os ofícios de indicação para execução de emenda de Relator-geral (RP9). Acesso exclusivo via Google Chrome.',
    procedure: `1. Acesse o sistema pelo link sindorc.camara.leg.br/login ou pelo menu "Destaques" na página da CMO.
2. Senhas de acesso:
   - Deputados: mesma senha de acesso aos sistemas da Câmara dos Deputados;
   - Senadores: mesma senha de acesso ao LEXOR;
   - Público externo: conta GOV.BR.
3. Em caso de erro, realize a limpeza de cache do navegador. Se persistir, acione o suporte da Câmara dos Deputados: (61) 3216-3636 ou 0800-0-619-619.`,
    relatedLinks: [
      { title: 'SINDORC Login', url: 'https://sindorc.camara.leg.br/login' },
      { title: 'Dúvidas Frequentes', url: 'https://sindorc.camara.leg.br/duvidas-frequentes' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=833;Nav=',
    attachments: [
      {
        name: 'Sistema SINDORC.pdf',
        size: '198.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=833;FileID=15152'
      },
      {
        name: 'Tutorial Sindoc.pdf',
        size: '1.0 MBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=833;FileID=4699'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > SINDORC > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::SINDORC::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 11:58 (Leonardo Silva de Amarante)',
      alterado: '12/11/2025 11:01 (Mayara Sales)',
      atualizadoEm: '12.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=833;Nav=',
      itemId: '833'
    }
  }
];
