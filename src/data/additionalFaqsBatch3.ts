import { FAQ } from '@/types';

export const additionalFaqsBatch3: FAQ[] = [
  {
    id: 'faq-10001219',
    faqNumber: '10001219',
    name: 'Certificado Digital Web Signer (Plug-in) – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Certificado Digital',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita informações sobre o Plug-in Web Signer',
    associatedProcedureId: '',
    observacoes: `Observação: Além da instalação do plug-in no navegador e do drive correto do token utilizado, é preciso realizar a instalação do software Web Signer "WebSignerSetup_pt-BR.msi" no micro do (a) usuário (a).
Observação: Certificado digital particular.`,
    technicalInfo: `• O plug-in é necessário para acessar alguns sites, realizar consultas processuais e utilizar certificados para assinaturas digitais em tribunais de alguns estados. Exemplo: tjam.jus.br.
• O plug-in é compatível com o navegador Edge.
• A instalação é realizada através do acesso à página do Web Signer, que identifica o navegador e apresenta o link para instalação diretamente do gerenciador de extensões.
• O fabricante não disponibiliza o "download" de arquivo .exe direto, mas sim a extensão e instalador MSI.`,
    procedure: `1. Verifique na pasta de "Downloads" do Windows Explorer ou do navegador.
2. Execute o instalador do plug-in (WebSignerSetup_pt-BR.msi).
3. Clique em Instalar.
4. Aguarde o processo de instalação e clique em Concluir.
5. Para instalação em outros navegadores, siga o fluxo de atendimento.`,
    acessoUtilizacao: `1. Acesse a página para a Instalação Softplan Web Signer (http://websigner.softplan.com.br/Setup).
2. Clique em "Adicionar Softplan Web Signer na Chrome Store" ou Edge Add-ons.
3. Clique em "Obter extensão" e confirme em "Adicionar extensão".`,
    relatedLinks: [
      { title: 'Tribunal de Justiça do Amazonas (TJAM)', url: 'https://www.tjam.jus.br/' },
      { title: 'Instalação Softplan Web Signer', url: 'http://websigner.softplan.com.br/Setup' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1219;Nav=',
    attachments: [
      {
        name: 'Certificado Digital Web Signer (Plug-in) – Instalação.pdf',
        size: '649.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16253'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16248' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16246' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16245' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '31/01/2024 15:11 (Mayara Sales)',
      alterado: '10/04/2026 16:07 (Mayara Sales)',
      atualizadoEm: '10.04.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1219;Nav=',
      itemId: '1219'
    }
  },
  {
    id: 'faq-10001682',
    faqNumber: '10001682',
    name: 'Certificado Digital Serpro – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Certificado Digital',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do software Instalador Certificado (Serpro)',
    associatedProcedureId: '',
    observacoes: 'Antes de realizar este procedimento é necessário realizar a Neoid (Serpro) – Instalação.',
    technicalInfo: `• Instalador oficial de certificados digitais do SERPRO.
• Requer a instalação prévia dos componentes do NeoID caso utilize certificado em nuvem.`,
    procedure: `1. Execute o arquivo localizado em X:\\InstaladorCertificado (Serpro).
2. Clique em Sim e depois novamente em Sim.
3. Insira o número do chamado e clique em OK.
4. Clique em Próximo 3 vezes.
5. Clique em Instalar e aguarde o processo.
6. Clique em Concluir e depois em Continuar.
7. Aguarde a conclusão do processo e clique em Executar.`,
    relatedLinks: [
      { title: 'Neoid (Serpro) – Instalação', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=935' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1682;Nav=',
    attachments: [
      {
        name: 'Certificado Digital Serpro – Instalação.pdf',
        size: '431.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=13105'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12182' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12185' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '26/04/2024 09:09 (Mayara Sales)',
      alterado: '24/07/2025 11:34 (Mayara Sales)',
      atualizadoEm: '25.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1682;Nav=',
      itemId: '1682'
    }
  },
  {
    id: 'faq-10001762',
    faqNumber: '10001762',
    name: 'Certificado Digital Bird ID – Assinar PDF',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Certificado Digital',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Assinatura de documento com o certificado digital Bird ID',
    associatedProcedureId: '',
    observacoes: 'Observação: Além do certificado Bird ID, este procedimento também funciona com o certificado digital interno.',
    technicalInfo: `• Assinatura digital direta em arquivos PDF usando o Adobe Acrobat Reader.
• O cursor mudará para formato de cruz para demarcar a área onde ficará a assinatura gráfica.
• Se for utilizado o certificado digital interno, basta inserir o PIN/senha correspondente.`,
    procedure: `1. Abra o PDF no Adobe Reader e acesse Ferramentas > Certificados.
2. Clique em "Assinar Digitalmente" e confirme em OK.
3. Arraste com o botão esquerdo do mouse para formar a área de assinatura.
4. Selecione o certificado Bird ID (ou configure o ID se necessário) e clique em Continuar.
5. Clique em "Assinar", selecione a pasta e clique em "Salvar".
6. Digite o código OTP gerado no aplicativo Bird ID do celular.
7. Clique em "Autenticar" e depois em "Permitir" para concluir a validação.`,
    acessoUtilizacao: '1. Abra o documento PDF com o Adobe Reader.\n2. Selecione Ferramentas > Certificados.',
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1762;Nav=',
    attachments: [
      {
        name: 'Certificado Digital Bird ID – Assinar PDF.pdf',
        size: '511.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=11244'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=9767' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=9766' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '04/07/2024 13:34 (Leonardo Silva de Amarante)',
      alterado: '20/05/2025 10:24 (Mayara Sales)',
      atualizadoEm: '24.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1762;Nav=',
      itemId: '1762'
    }
  },
  {
    id: 'faq-10002277',
    faqNumber: '10002277',
    name: 'Certificado Digital Certdata – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Certificado Digital',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do Certificado Digital Certdata',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2.',
    technicalInfo: `• Gerenciador de Instalação Certdata (Componentes 01, 02, 03 e 04).
• Inclui SafeSign para Firefox, SafeNet e PJE-Office.`,
    procedure: `1. Acesse W:\\COATEN\\SEARP\\Certificados\\Certificado Certdata.
2. Execute o instalador correspondente à versão do certificado.
3. Avance pelas etapas do instalador dos componentes (SafeSign e SafeNet).
4. Aceite os termos contratuais e conclua as instalações.
5. Instale e atualize o PJE-Office conforme solicitado na tela.
6. Clique em "Sair" e acesse o portal da Certdata para realizar o teste.`,
    acessoUtilizacao: '1. Acesse o link certdata.com.br.\n2. Selecione o certificado desejado para testar.',
    relatedLinks: [
      { title: 'Certdata Portal', url: 'https://certdata.com.br/' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2277;Nav=',
    attachments: [
      {
        name: 'Certificado Digital CertData – Instalação.pdf',
        size: '1.7 MBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15133'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15086' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15087' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '11/11/2025 16:18 (Gabriel Queiroz Pires)',
      alterado: '11/11/2025 17:27 (Gabriel Queiroz Pires)',
      atualizadoEm: '11.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2277;Nav=',
      itemId: '2277'
    }
  },
  {
    id: 'faq-10002301',
    faqNumber: '10002301',
    name: 'Assinador SERPRO - Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Certificado Digital',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do assinador SERPRO',
    associatedProcedureId: '',
    technicalInfo: `• Aplicativo para assinatura de documentos digitais e integração com sistemas governamentais.
• Ao abrir pela primeira vez, será exibido aviso de segurança do SERPRO Signer.`,
    procedure: `1. Execute o arquivo localizado em X:\\Assinador (Serpro).
2. Clique em Sim e novamente em Sim.
3. Selecione o idioma e clique em OK.
4. Clique em Avançar 3 vezes.
5. Clique em Instalar e aguarde o processo.
6. Clique em Avançar e finalize em Concluir.
7. Ao abrir o programa, confirme o aviso de segurança clicando em Sim.`,
    acessoUtilizacao: 'Ao abrir o programa será exibido um aviso de segurança do instalador do SERPRO Signer. Clique em "Sim" para prosseguir.',
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2301;Nav=',
    attachments: [
      {
        name: 'Assinador SERPRO - Instalação.pdf',
        size: '537.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2301;FileID=15632'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2301;FileID=15617' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2301;FileID=15618' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '14/01/2026 14:00 (Leonardo Silva de Amarante)',
      alterado: '14/01/2026 14:00 (Leonardo Silva de Amarante)',
      atualizadoEm: '14.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2301;Nav=',
      itemId: '2301'
    }
  },
  {
    id: 'faq-10002328',
    faqNumber: '10002328',
    name: 'Certificados digitais',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Certificado Digital',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Informações sobre certificados digitais',
    associatedProcedureId: '',
    technicalInfo: `• Certificados digitais fornecidos pelo Senado:
  - Bird ID
  - Interno (SIGAD)
  - Interno em equipamento particular (SIGAD)
• Certificados digitais particulares:
  - Certdata
  - OAB (Leitor Gemalto)
  - SafeNet e-gov (Token)
  - SafeSign (OAB)
  - SERPRO (Instalador e Assinador)
  - StarSign Crypto (Token)
  - Web Signer (Plug-in)`,
    procedure: `1. Identifique o modelo de certificado solicitado pelo usuário.
2. Se for fornecido pelo Senado, consulte as FAQs de Bird ID ou SIGAD.
3. Se for particular, instale o driver ou software homologado correspondente (SafeSign, SafeNet, Web Signer, etc.).`,
    relatedLinks: [
      { title: 'Bird ID (FAQ 551)', url: 'https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=551;Nav=' },
      { title: 'Interno SIGAD (FAQ 1402)', url: 'https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1402;Nav=' },
      { title: 'Interno em micro particular (FAQ 1040)', url: 'https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1040;Nav=' },
      { title: 'Certdata (FAQ 2277)', url: 'https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2277;Nav=' },
      { title: 'SafeNet e-gov (FAQ 1213)', url: 'https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1213;Nav=' },
      { title: 'SafeSign OAB (FAQ 1217)', url: 'https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1217;Nav=' },
      { title: 'SERPRO (FAQ 1682)', url: 'https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1682;Nav=' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2328;Nav=',
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '27/02/2026 12:02 (Leonardo Silva de Amarante)',
      alterado: '10/03/2026 18:06 (Leonardo Silva de Amarante)',
      atualizadoEm: '10.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2328;Nav=',
      itemId: '2328'
    }
  },
  {
    id: 'faq-10002282',
    faqNumber: '10002282',
    name: 'Cliente Oracle 19c - Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CLIENTE ORACLE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Cliente Oracle',
    type: 'Requisição de serviço',
    service: 'Instalação de software licenciado',
    subject: 'Solicita a instalação do Cliente Oracle 19c',
    associatedProcedureId: '',
    technicalInfo: `• O Cliente Oracle é um software para acessar bancos de dados Oracle. É utilizado por alguns softwares desenvolvidos pelo Prodasen.`,
    procedure: `1. Execute o arquivo localizado em X:\\Cliente Oracle 19C (Oracle).
2. Clique em Sim e novamente em Sim.
3. Aguarde o processo de Instalação.
4. Clique em OK para finalizar.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2282;Nav=',
    attachments: [
      {
        name: 'Cliente Oracle 19c - Instalação.pdf',
        size: '416.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2282;FileID=16731'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2282;FileID=16734' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2282;FileID=16732' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CLIENTE ORACLE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CLIENTE ORACLE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '13/11/2025 14:22 (Gabriel Queiroz Pires)',
      alterado: '09/07/2026 08:42 (Mayara Sales)',
      atualizadoEm: '12.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2282;Nav=',
      itemId: '2282'
    }
  },
  {
    id: 'faq-10002283',
    faqNumber: '10002283',
    name: 'Cliente Oracle 23AI - Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CLIENTE ORACLE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Cliente Oracle',
    type: 'Requisição de serviço',
    service: 'Instalação de software licenciado',
    subject: 'Solicita a instalação do Cliente Oracle 23AI',
    associatedProcedureId: '',
    observacoes: 'IMPORTANTE: A instalação do Cliente Oracle 23AI instala um TNSNAMES.ORA padrão. Caso tenha um TNSNAMES personalizado, faça BACKUP deste antes de desinstalar a versão anterior. Disponível para Oracle 23AI somente em versão 64Bits.',
    technicalInfo: `• O Cliente Oracle é um software para acessar bancos de dados Oracle. Utilizado por sistemas do Prodasen.`,
    procedure: `1. Faça backup do arquivo tnsnames.ora se houver configuração personalizada.
2. Execute o arquivo localizado em CENTRAL_ATENDIMENTO (\\DRU) (X:) Cliente Oracle 23AI (Oracle).
3. Clique em Sim e novamente em Sim.
4. Aguarde o processo de instalação silenciosa.
5. Pressione qualquer tecla para continuar e fechar.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2283;Nav=',
    attachments: [
      {
        name: 'Cliente Oracle 23AI - Instalação.pdf',
        size: '511.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2283;FileID=15240'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2283;FileID=15236' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2283;FileID=15238' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CLIENTE ORACLE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CLIENTE ORACLE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '13/11/2025 14:24 (Gabriel Queiroz Pires)',
      alterado: '13/11/2025 15:58 (Gabriel Queiroz Pires)',
      atualizadoEm: '12.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2283;Nav=',
      itemId: '2283'
    }
  },
  {
    id: 'faq-10002388',
    faqNumber: '10002388',
    name: 'Oracle Client for Microsoft Tools (COPAG) – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CLIENTE ORACLE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Cliente Oracle',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do complemento Oracle Client for Microsoft Tools',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2 | Adicione o cliente como ADM Local provisoriamente.',
    technicalInfo: `• Complemento que instala os componentes necessários para conexões ODBC de ferramentas Microsoft a bancos Oracle.
• Obrigatório nos equipamentos da COPAG (Animus) para evitar falhas de conexão de dados.`,
    procedure: `1. Execute o arquivo em W:\\COATEN\\SEARP\\Software em Teste\\Complemento Oracle 19c 64bits (COPAG).
2. Clique em Executar e em OK.
3. Aguarde o processo de extração.
4. Clique em Avançar 4 vezes.
5. Clique em Instalar e aguarde a conclusão.
6. Clique em "Finish".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2388;Nav=',
    attachments: [
      {
        name: 'Oracle Client for Microsoft Tools (COPAG) – Instalação.pdf',
        size: '415.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2388;FileID=16749'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2388;FileID=16737' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2388;FileID=16738' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CLIENTE ORACLE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CLIENTE ORACLE::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '09/07/2026 11:57 (Mayara Sales)',
      alterado: '09/07/2026 12:07 (Mayara Sales)',
      atualizadoEm: '09.07.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2388;Nav=',
      itemId: '2388'
    }
  },
  {
    id: 'faq-1000841',
    faqNumber: '1000841',
    name: 'Cobian Backup 11 – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::COBIAN BACKUP 11::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Cobian Backup 11',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do software Cobian Backup 11',
    associatedProcedureId: '',
    technicalInfo: `• Software gratuito para realizar backups automáticos ou manuais de arquivos e diretórios.
• Ao executar, o programa apresenta um ícone de engrenagem na barra de tarefas.`,
    procedure: `1. Execute o arquivo localizado em X:\\Cobian Backup (CobianSoft).
2. Clique em Sim e novamente em Sim.
3. Insira o número do chamado e clique em OK.
4. Aguarde o processo de instalação.
5. Clique com o botão direito do mouse no ícone da bandeja e clique em "Open".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=841;Nav=',
    attachments: [
      {
        name: 'Cobian Backup 11 – Instalação.pdf',
        size: '433.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=841;FileID=13120'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=841;FileID=13118' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=841;FileID=13121' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > COBIAN BACKUP 11 > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::COBIAN BACKUP 11::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 14:22 (Mayara Sales)',
      alterado: '24/07/2025 12:05 (Mayara Sales)',
      atualizadoEm: '26.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=841;Nav=',
      itemId: '841'
    }
  },
  {
    id: 'faq-10002380',
    faqNumber: '10002380',
    name: 'Instalação do Companion (Bitfocus)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::COMPANION (BITFOCUS)::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Companion (Bitfocus)',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do programa Companion Bitfocus',
    associatedProcedureId: '',
    technicalInfo: `• Bitfocus Companion é uma ferramenta para controlar switchers de apresentação, reprodução de vídeo e equipamentos de transmissão via Elgato Stream Deck.
• Permite fluxos de trabalho avançados para transmissão profissional.`,
    procedure: `1. Execute o arquivo localizado em CENTRAL_ATENDIMENTO (\\DRU) (X:) Companion (Bitfocus).
2. Clique em Sim e novamente em Sim.
3. Selecione a opção: "Para todos que usam esta máquina (todos os usuários)".
4. Clique em Próximo e em Instalar.
5. Aguarde o processo de instalação e clique em Concluir.`,
    permissaoAcesso: 'A funcionalidade "Apenas para mim (AdmInstal)" só poderá ser utilizada por usuários que estejam incluídos no grupo de Administradores locais do equipamento.',
    relatedLinks: [
      { title: 'Compartilhamento \\DRU', url: 'file://DRU' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2380;Nav=',
    attachments: [
      {
        name: 'Instalação do Companion Bitfocus.pdf',
        size: '401.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2380;FileID=16631'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2380;FileID=16632' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2380;FileID=16633' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > COMPANION (BITFOCUS) > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::COMPANION (BITFOCUS)::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/06/2026 13:54 (Gabriel Queiroz Pires)',
      alterado: '26/06/2026 11:33 (Mayara Sales)',
      atualizadoEm: '26.06.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2380;Nav=',
      itemId: '2380'
    }
  },
  {
    id: 'faq-10002410',
    faqNumber: '10002410',
    name: 'Conexão de área de trabalho remota - Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CONEXAO DE AREA DE TRABALHO REMOTA::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Conexão de área de trabalho remota',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do Cliente de Área de Trabalho Remota',
    associatedProcedureId: '',
    technicalInfo: `• A Conexão de Área de Trabalho Remota (Remote Desktop Connection - RDC) da Microsoft permite controlar computadores remotamente pela rede local ou internet corporativa.
• Ferramenta padrão para suporte e administração remota.`,
    procedure: `1. Execute o arquivo localizado em CENTRAL_ATENDIMENTO (\\DRU) (X:) CONEXÃO DE ÁREA DE TRABALHO REMOTA.
2. Clique em Sim e novamente em Sim.
3. Aguarde o processo de instalação e clique em OK.
4. Clique no menu Iniciar e selecione o atalho "Conexão de área de trabalho remota".`,
    relatedLinks: [
      { title: 'Compartilhamento \\DRU', url: 'file://DRU' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2410;Nav=',
    attachments: [
      {
        name: 'Instalação do Cliente de Área de Trabalho Remota.pdf',
        size: '439.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2410;FileID=17246'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2410;FileID=17247' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2410;FileID=17251' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CONEXAO DE AREA DE TRABALHO REMOTA > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CONEXAO DE AREA DE TRABALHO REMOTA::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '21/08/2026 14:28 (Gabriel Queiroz Pires)',
      alterado: '21/08/2026 15:51 (Gabriel Queiroz Pires)',
      atualizadoEm: '21.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2410;Nav=',
      itemId: '2410'
    }
  },
  {
    id: 'faq-10002276',
    faqNumber: '10002276',
    name: 'Instalação do Copilot',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::COPILOT (MICROSOFT)::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Copilot (Microsoft)',
    type: 'Requisição de serviço',
    service: 'Instalação de software licenciado',
    subject: 'Solicita a instalação do programa Copilot (Microsoft)',
    associatedProcedureId: '',
    technicalInfo: `• Assistente de IA corporativo da Microsoft para produtividade diária, síntese de documentos e escrita.
• Permite fixação na barra de tarefas, menu Iniciar e inicialização com o Windows.`,
    procedure: `1. Execute o arquivo localizado em CENTRAL_ATENDIMENTO (\\DRU) (X:) Copilot (Microsoft).
2. Clique em Sim e novamente em Sim.
3. Aguarde o processo de instalação e clique em Sim.
4. Insira o e-mail institucional do usuário (@senado.leg.br).
5. Selecione a opção "Trabalho" ou "Corporativa" e clique em Permitir.
6. Abra o aplicativo Copilot, clique em "Entrar" e insira a senha de rede.`,
    credenciaisAcesso: 'Insira a senha de rede institucional do Senado Federal.',
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2276;Nav=',
    attachments: [
      {
        name: 'Instalação do Copilot.pdf',
        size: '743.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2276;FileID=15083'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2276;FileID=15071' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2276;FileID=15072' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > COPILOT (MICROSOFT) > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::COPILOT (MICROSOFT)::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '11/11/2025 15:01 (Gabriel Queiroz Pires)',
      alterado: '11/11/2025 17:12 (Gabriel Queiroz Pires)',
      atualizadoEm: '11.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2276;Nav=',
      itemId: '2276'
    }
  },
  {
    id: 'faq-1000845',
    faqNumber: '1000845',
    name: 'CopySpider – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::COPYSPIDER::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'CopySpider',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do CopySpider',
    associatedProcedureId: '',
    technicalInfo: `• Software antiplágio que realiza busca por termos idênticos em documentos locais ou na web para identificar cópias em trabalhos e relatórios.
• Necessita de conta gratuita criada no site da CopySpider.`,
    procedure: `1. Execute o arquivo localizado em X:\\CopySpider (Clever Teixeira).
2. Clique em Sim e novamente em Sim. Insira o chamado e clique em OK.
3. Selecione o idioma e clique em OK.
4. Clique em Avançar 4 vezes e clique em Instalar.
5. Aguarde o processo e finalize em Concluir.
6. Ao abrir o programa, insira o e-mail cadastrado na CopySpider.`,
    permissaoAcesso: 'Não necessita de permissão especial e deve ser instalado no login do cliente.',
    relatedLinks: [
      { title: 'Cadastro CopySpider', url: 'https://copyspider.com.br/main/pt-br/user/register' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=845;Nav=',
    attachments: [
      {
        name: 'CopySpider – Instalação.pdf',
        size: '495.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13130'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13126' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13138' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > COPYSPIDER > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::COPYSPIDER::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 14:46 (Mayara Sales)',
      alterado: '24/07/2025 12:22 (Mayara Sales)',
      atualizadoEm: '26.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=845;Nav=',
      itemId: '845'
    }
  }
];
