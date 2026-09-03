import { FAQ } from '@/types';
import { additionalFaqsBatch1 } from './additionalFaqsBatch1';
import { additionalFaqsBatch2 } from './additionalFaqsBatch2';
import { additionalFaqsBatch3 } from './additionalFaqsBatch3';
import { additionalFaqsBatch4 } from './additionalFaqsBatch4';
import { additionalFaqsBatch5 } from './additionalFaqsBatch5';
import { additionalFaqsBatch6 } from './additionalFaqsBatch6';
import { additionalFaqsBatch7 } from './additionalFaqsBatch7';
import { additionalFaqsBatch8 } from './additionalFaqsBatch8';
import { additionalFaqsBatch9 } from './additionalFaqsBatch9';
import { additionalFaqsBatch10 } from './additionalFaqsBatch10';
import { additionalFaqsBatch11 } from './additionalFaqsBatch11';
import { additionalFaqsBatch12 } from './additionalFaqsBatch12';
import { additionalFaqsBatch13 } from './additionalFaqsBatch13';
import { additionalFaqsBatch14 } from './additionalFaqsBatch14';
import { additionalFaqsBatch15 } from './additionalFaqsBatch15';
import { additionalFaqsBatch16 } from './additionalFaqsBatch16';
import { additionalFaqsBatch17 } from './additionalFaqsBatch17';
import { additionalFaqsBatch18 } from './additionalFaqsBatch18';
import { additionalFaqsBatch19 } from './additionalFaqsBatch19';
import { additionalFaqsBatch20 } from './additionalFaqsBatch20';
import { additionalFaqsBatch21 } from './additionalFaqsBatch21';
import { additionalFaqsBatch22 } from './additionalFaqsBatch22';
import { additionalFaqsBatch23 } from './additionalFaqsBatch23';
import { additionalFaqsBatch24 } from './additionalFaqsBatch24';
import { additionalFaqsBatch25 } from './additionalFaqsBatch25';
import { additionalFaqsBatch26 } from './additionalFaqsBatch26';
import { additionalFaqsBatch27 } from './additionalFaqsBatch27';

const initialFaqsOriginal: FAQ[] = [
  {
    id: 'faq-1000681',
    faqNumber: '1000681',
    name: '7-ZIP - Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::7-ZIP::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: '7-Zip',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do 7-ZIP',
    associatedProcedureId: '',
    technicalInfo: `• Programa utilizado para compactar e descompactar arquivos como por exemplo (.zip, .rar, etc.).\n• Tela inicial do programa.`,
    procedure: `1. Verifique a versão correspondente ao sistema operacional e execute o arquivo.\n2. Execute o arquivo localizado em X:\\7-Zip (7-Zip Software).\n3. Clique em Sim.\n4. Clique novamente em Sim.\n5. Insira o número do chamado.\n6. Clique em OK.\n7. Aguarde o progresso de instalação.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=681;Nav=',
    attachments: [
      {
        name: '7-ZIP - Instalação .pdf',
        size: '258.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=681;FileID=12373'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=681;FileID=12376' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=681;FileID=12374' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=681;FileID=12371' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=681;FileID=12372' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=681;FileID=12370' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=681;FileID=12375' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > 7-ZIP > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::7-ZIP::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '29/09/2023 14:03 (Viviane de Souza Alves dos Santos)',
      alterado: '25/03/2026 16:38 (Leonardo Silva de Amarante)',
      atualizadoEm: '13.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=681;Nav=',
      itemId: '681'
    }
  },
  {
    id: 'faq-1000545',
    faqNumber: '1000545',
    name: 'Acrobat Pro DC – Programa Fechando',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
    subCategory: 'ERRO',
    system: 'Adobe Acrobat Pro DC',
    type: 'Incidente',
    service: 'Suporte a software de Estações de Trabalho',
    subject: 'Informa que o Acrobat Pro DC está Fechando',
    associatedProcedureId: '',
    observacoes: 'ATENDIMENTO REALIZADO PELO N2',
    technicalInfo: `• Procedimento para resolução em casos de instalação do Adobe Acrobat PRO DC, porém, ao concluir a instalação, o software não apresenta nenhum erro e fecha sem ser executado nenhum comando.\n• Em Credenciais Genéricas: Remova todas as credenciais relacionadas com "Adobe".\n• Elimine TODOS os conteúdos das pastas a seguir:\n  - C:\\Program files (x86)\\Common Files\\Adobe\\Adobe PCD\n  - C:\\Program files (x86)\\Common Files\\Adobe\\SLCache\n  - C:\\ProgramData\\Adobe\\SLStore`,
    acessoUtilizacao: `1. Acesse o Gerenciador de Credenciais.\n2. Clique em Credenciais do Windows.`,
    procedure: `1. Acesse o Gerenciador de Credenciais > Credenciais do Windows.\n2. Em Credenciais Genéricas, remova todas as credenciais relacionadas com "Adobe".\n3. Elimine todos os conteúdos das pastas:\n   - C:\\Program files (x86)\\Common Files\\Adobe\\Adobe PCD\n   - C:\\Program files (x86)\\Common Files\\Adobe\\SLCache\n   - C:\\ProgramData\\Adobe\\SLStore\n4. Reinicie o computador e teste o funcionamento.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=545;Nav=',
    attachments: [
      {
        name: 'Acrobat Pro DC – Programa Fechando.pdf',
        size: '556.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=11185'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=9349' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=4455' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=9353' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=9350' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=9351' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=9348' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=9352' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '29/08/2023 15:44 (Viviane de Souza Alves dos Santos)',
      alterado: '19/05/2025 14:53 (Mayara Sales)',
      atualizadoEm: '13.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=545;Nav=',
      itemId: '545'
    }
  },
  {
    id: 'faq-10001274',
    faqNumber: '10001274',
    name: 'Adobe Reader - Erro UAC Desabilitado',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
    subCategory: 'ERRO',
    system: 'Adobe Acrobat Reader',
    type: 'Incidente',
    service: 'Suporte a Software de Estação de Trabalho.',
    subject: 'Informa mensagem de erro de UAC Desabilitado',
    associatedProcedureId: '',
    technicalInfo: `• Ao tentar abrir documentos em PDF, é apresentada uma mensagem de erro informando que o UAC está desabilitado.\n• Mensagem de erro: "O UAC está desabilitado".\n• Se o programa ainda não aparecer, desça a barra de rolagem.\n• O aplicativo encontra-se no caminho: C:\\Program Files (x86)\\Adobe\\Acrobat Reader DC\\Reader`,
    acessoUtilizacao: `1. Abra alguns arquivos em PDF para validar o procedimento.`,
    procedure: `1. Para a correção deste erro é necessário alterar o programa padrão para abrir os documentos de extensão ".pdf", escolhendo o Adobe Reader.\n2. Clique com o botão direito sobre o arquivo PDF.\n3. Selecione a opção 'Abrir com'.\n4. Clique em 'Escolher outro aplicativo'.\n5. Selecione o programa “Adobe Acrobat”.\n6. Marque a opção 'Sempre usar este aplicativo para abrir arquivos .pdf'.\n7. Caso o Adobe Acrobat não apareça na lista, verifique em ‘Mais opções'.\n8. Clique em ‘Escolha um aplicativo no seu PC’ e aponte para C:\\Program Files (x86)\\Adobe\\Acrobat Reader DC\\Reader.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1274;Nav=',
    attachments: [
      {
        name: 'Adobe Acrobat Reader - Erro UAC Desabilitado.pdf',
        size: '347.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1274;FileID=12446'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1274;FileID=11145' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1274;FileID=12444' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1274;FileID=12447' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1274;FileID=12443' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1274;FileID=12445' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1274;FileID=12448' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 14:41 (Leonardo Silva de Amarante)',
      alterado: '16/09/2025 15:25 (Gabriel Queiroz Pires)',
      atualizadoEm: '16.09.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1274;Nav=',
      itemId: '1274'
    }
  },
  {
    id: 'faq-10001523',
    faqNumber: '10001523',
    name: 'Creative Cloud Desktop – Acesso Negado',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
    subCategory: 'ERRO',
    system: 'Adobe Creative Cloud',
    type: 'Incidente',
    service: 'Suporte a software de Estações de Trabalho',
    subject: 'Erro de Acesso Negado no Adobe Creative Cloud',
    associatedProcedureId: '',
    observacoes: 'A medida de contorno encontrada até o momento é a desativação temporária do software do antivírus durante a atualização.',
    technicalInfo: `• O erro 127 pode ocorrer durante o processo de atualização do Creative Desktop App e principalmente durante as atualizações do Adobe Photoshop CC.\n• Esse erro indica acesso negado quando o aplicativo tenta copiar os arquivos para as pastas no drive C: do equipamento.\n• Identificação: Erro 127 - Acesso negado.`,
    procedure: `1. Desative temporariamente o software do antivírus durante a realização do procedimento.\n2. Tente novamente realizar a atualização pelo Creative Cloud Desktop.\n3. Após a conclusão bem-sucedida da instalação/atualização, reative o antivírus imediatamente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1523;Nav=',
    attachments: [
      {
        name: 'Creative Cloud Desktop – Acesso Negado.pdf',
        size: '267.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1523;FileID=11190'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1523;FileID=9354' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '04/03/2024 16:19 (Mayara Sales)',
      alterado: '16/09/2025 14:47 (Gabriel Queiroz Pires)',
      atualizadoEm: '13.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1523;Nav=',
      itemId: '1523'
    }
  },
  {
    id: 'faq-10001524',
    faqNumber: '10001524',
    name: 'Creative Cloud Desktop – Erro de Conflito de Processos',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
    subCategory: 'ERRO',
    system: 'Adobe Creative Cloud',
    type: 'Incidente',
    service: 'Suporte a software de Estações de Trabalho',
    subject: 'Erro de Conflito de processos no Adobe Creative Cloud',
    associatedProcedureId: '',
    observacoes: 'Nesses casos se a reinicialização do micro não resolver, é necessário finalizar o processo "explorer.exe".',
    technicalInfo: `• Esse erro ocorre pois o software identifica que existem processos conflitantes durante a atualização.\n• Esses processos conflitantes podem ser diversos como Autodesk, Outlook ou da própria Adobe.\n• Durante teste verifica-se que o processo "explorer.exe" bloqueia a DLL "CoreSync_x64.dll" utilizada nas atualizações.\n• Identificação: Erro 184 – Conflito de processos (CoreSync_x64.dll).`,
    procedure: `1. Encerre os programas que possam entrar em conflito (como Outlook, Autodesk ou outros aplicativos Adobe).\n2. Caso não resolva, reinicie o computador.\n3. Se persistir após a reinicialização, abra o Gerenciador de Tarefas e finalize o processo "explorer.exe" para liberar a DLL "CoreSync_x64.dll".\n4. Execute a atualização novamente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1524;Nav=',
    attachments: [
      {
        name: 'Creative Cloud Desktop – Erro de Conflito de Processos.pdf',
        size: '336.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1524;FileID=11191'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1524;FileID=9359' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1524;FileID=9360' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '04/03/2024 16:30 (Mayara Sales)',
      alterado: '19/05/2025 15:10 (Mayara Sales)',
      atualizadoEm: '14.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1524;Nav=',
      itemId: '1524'
    }
  },
  {
    id: 'faq-10001823',
    faqNumber: '10001823',
    name: 'Adobe Audition – Não Emite Som',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
    subCategory: 'ERRO',
    system: 'Adobe Audition',
    type: 'Incidente',
    service: 'Suporte a software de Estações de Trabalho',
    subject: 'Falha no Adobe Audition – Não Emite Som',
    associatedProcedureId: '',
    technicalInfo: `• O aplicativo Adobe Audition é aberto normalmente, mas durante a reprodução não há saída de áudio nos fones/caixas de som.`,
    procedure: `1. No menu superior do Adobe Audition, clique em “Edit” > “Preferences” > "General".\n2. Clique no botão “Reset All Warning Dialogs”.\n3. Clique em OK para confirmar.\n4. Reinicie a reprodução do áudio.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1823;Nav=',
    attachments: [
      {
        name: 'Adobe Audition – Não Emite Som.pdf',
        size: '308.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1823;FileID=11189'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1823;FileID=11140' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1823;FileID=11141' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1823;FileID=11139' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '11/07/2024 13:44 (Mayara Sales)',
      alterado: '19/05/2025 15:05 (Mayara Sales)',
      atualizadoEm: '14.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1823;Nav=',
      itemId: '1823'
    }
  },
  {
    id: 'faq-10001824',
    faqNumber: '10001824',
    name: 'Adobe Audition – Falha DLMS Format Support',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
    subCategory: 'ERRO',
    system: 'Adobe Audition',
    type: 'Incidente',
    service: 'Suporte a software de Estações de Trabalho',
    subject: 'Falha no Adobe Audition – DLMS Format Support',
    associatedProcedureId: '',
    technicalInfo: `• Mensagem de erro de suporte a formato DLMS ao abrir arquivos de áudio específicos no Adobe Audition.`,
    procedure: `1. No menu superior, clique em “Edit” > “Preferences” > "Media & Disk Cache".\n2. Marque a opção "Enable DLMS Format Support".\n3. Clique em OK para salvar as configurações.`,
    acessoUtilizacao: `1. Abra o arquivo de áudio novamente e verifique se o problema foi corrigido.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1824;Nav=',
    attachments: [
      {
        name: 'Adobe Audition – Falha DLMS Format Support.pdf',
        size: '374.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1824;FileID=11188'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1824;FileID=9362' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1824;FileID=5862' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1824;FileID=5863' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '11/07/2024 14:01 (Mayara Sales)',
      alterado: '19/05/2025 15:01 (Mayara Sales)',
      atualizadoEm: '14.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1824;Nav=',
      itemId: '1824'
    }
  },
  {
    id: 'faq-10002235',
    faqNumber: '10002235',
    name: 'Adobe Audition – Erro Menu de Edição',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
    subCategory: 'ERRO',
    system: 'Adobe Audition',
    type: 'Incidente',
    service: 'Suporte a software de Estações de Trabalho',
    subject: 'Adobe Audition – Erro Menu de Edição',
    associatedProcedureId: '',
    technicalInfo: `• A falha ocorre quando os menus e painéis de edição do Adobe Audition não são exibidos ou somem da tela de trabalho.\n• Apresenta mensagem de erro de interface.`,
    procedure: `1. Na barra superior do Adobe Audition, clique na aba “Window”.\n2. Passe o cursor sobre “Workspace”.\n3. Clique na opção “Edit Audio to Video”.\n4. Após a seleção, os menus e ferramentas de edição voltarão a ser exibidos normalmente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2235;Nav=',
    attachments: [
      {
        name: 'Adobe Audition – Erro Menu de Edição.pdf',
        size: '584.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2235;FileID=11187'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2235;FileID=11126' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2235;FileID=11123' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2235;FileID=11124' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/05/2025 10:33 (Mayara Sales)',
      alterado: '19/05/2025 14:58 (Mayara Sales)',
      atualizadoEm: '16.05.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2235;Nav=',
      itemId: '2235'
    }
  },
  {
    id: 'faq-10002244',
    faqNumber: '10002244',
    name: 'Adobe Acrobat XI Pro – Encerramento Inesperado',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
    subCategory: 'ERRO',
    system: 'Adobe Acrobat XI Pro',
    type: 'Incidente',
    service: 'Suporte a software de Estações de Trabalho.',
    subject: 'Encerramento inesperado do Adobe Acrobat XI',
    associatedProcedureId: '',
    observacoes: 'Para novas instalações, a versão do aplicativo já estará atualizada e não será necessário executar o script.',
    technicalInfo: `• Procedimento para a resolução de problemas recorrentes no Adobe Acrobat, em que o programa é encerrado de forma inesperada durante a execução.\n• O aplicativo fecha constantemente sem exibir mensagens de erro.`,
    procedure: `1. Execute o arquivo localizado em X:\\Acrobat (Adobe).\n2. Clique em Sim.\n3. Clique novamente em Sim.\n4. Insira o número do chamado.\n5. Clique em OK.\n6. Clique em Atualizar.\n7. Aguarde o processo de instalação.\n8. Clique em Concluir.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2244;Nav=',
    attachments: [
      {
        name: 'Adobe Acrobat XI Pro – Encerramento Inesperado.pdf',
        size: '299.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13391'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13385' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13392' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13387' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13390' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13389' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13388' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13386' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/08/2025 13:49 (Mayara Sales)',
      alterado: '16/09/2025 14:29 (Gabriel Queiroz Pires)',
      atualizadoEm: '01.08.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2244;Nav=',
      itemId: '2244'
    }
  },
  {
    id: 'faq-1000541',
    faqNumber: '1000541',
    name: 'Adobe Acrobat Professional 9',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Adobe Acrobat 9',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Instalação do Adobe Acrobat Professional 9',
    associatedProcedureId: '',
    observacoes: 'SOFTWARE NÃO AUTORIZADO - NÃO HÁ LICENÇA',
    permissaoAcesso: 'Observação: O uso deste software não é autorizado no Senado Federal.',
    technicalInfo: `• Motivo: Não há licença adquirida pelo Senado Federal para utilização deste software (Adobe Acrobat 9).\n• Alternativas homologadas:\n  - Adobe Acrobat Pro DC – Instalação (FAQ 544)\n  - Adobe Acrobat XI Pro - Instalação (FAQ 542)\n  - Adobe Acrobat Reader DC - Instalação (FAQ 622)`,
    procedure: `1. NÃO realizar a instalação da versão 9.\n2. Esclarecer ao cliente que não existem licenças ativas para o Adobe Acrobat 9.\n3. Indicar e oferecer a instalação de uma das versões autorizadas e homologadas pelo Senado (Acrobat Pro DC, Acrobat XI Pro ou Acrobat Reader DC).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=541;Nav=',
    relatedLinks: [
      { title: 'Adobe Acrobat Pro DC – Instalação', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=544;Nav=' },
      { title: 'Adobe Acrobat XI Pro - Instalação', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=542;Nav=' },
      { title: 'Adobe Acrobat Reader DC - Instalação', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=622;Nav=' }
    ],
    attachments: [
      {
        name: 'Adobe Acrobat Professional 9.pdf',
        size: '211.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=541;FileID=11197'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '29/08/2023 09:31 (Viviane de Souza Alves dos Santos)',
      alterado: '16/09/2025 15:55 (Gabriel Queiroz Pires)',
      atualizadoEm: '16.09.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=541;Nav=',
      itemId: '541'
    }
  },
  {
    id: 'faq-1000542',
    faqNumber: '1000542',
    name: 'Adobe Acrobat XI Pro - Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Adobe Acrobat XI Pro',
    type: 'Requisição de serviço',
    service: 'Instalação de software licenciado',
    subject: 'Instalação do Adobe Acrobat XI Pro',
    associatedProcedureId: '',
    observacoes: 'SOFTWARE RESTRITO',
    permissaoAcesso: `O software necessita de autorização para instalação, pois existe uma quantidade limitada de licenças e será necessário avaliar a necessidade da instalação.\n\nA licença é atribuída ao equipamento. Só serão autorizadas instalações em caso de: Troca de equipamento, Mudança de setor ou Instalação Padrão. Necessário solicitar autorização via Central de Serviços:\nIntranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.`,
    credenciaisAcesso: 'Insira as credenciais de rede.',
    technicalInfo: `• Programa utilizado para ler, criar e editar documentos no formato PDF.`,
    procedure: `1. Execute o arquivo localizado em X:\\Acrobat (Adobe).\n2. Clique em Sim.\n3. Clique em Prosseguir.\n4. Clique em Sim.\n5. Insira o número do chamado.\n6. Clique em OK.\n7. Selecione o idioma e clique em OK.\n8. Clique em Avançar sucessivamente (4 vezes).\n9. Clique em Instalar.\n10. Aguarde o processo de instalação.\n11. Clique em Concluir.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=542;Nav=',
    attachments: [
      {
        name: 'Adobe Acrobat XI Pro - Instalação.pdf',
        size: '461.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=13383'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=10157' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=13382' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12923' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12919' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12922' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12926' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12918' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12916' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12928' },
      { title: 'Imagem 10', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12927' },
      { title: 'Imagem 11', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12917' },
      { title: 'Imagem 12', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12925' },
      { title: 'Imagem 13', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12920' },
      { title: 'Imagem 14', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12921' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '29/08/2023 10:25 (Viviane de Souza Alves dos Santos)',
      alterado: '11/11/2025 16:59 (Gabriel Queiroz Pires)',
      atualizadoEm: '14.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=542;Nav=',
      itemId: '542'
    }
  },
  {
    id: 'faq-1000544',
    faqNumber: '1000544',
    name: 'Adobe Acrobat Pro DC – Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Adobe Acrobat Pro DC',
    type: 'Requisição de serviço',
    service: 'Instalação de software licenciado',
    subject: 'Instalação do Adobe Acrobat Pro DC',
    associatedProcedureId: '',
    observacoes: 'SOFTWARE RESTRITO',
    permissaoAcesso: `O software necessita de autorização para instalação, pois existe uma quantidade limitada de licenças e será necessário avaliar a necessidade da instalação.\n\nNecessário solicitar autorização via Central de Serviços:\nIntranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.`,
    technicalInfo: `• A licença é atribuída à conta institucional, podendo ser instalada em mais de um equipamento (com uso simultâneo de apenas 1 estação de trabalho).\n• Permite a conversão de documentos de diversos formatos em um arquivo de formato PDF.\n• Requer o aplicativo Creative Cloud Desktop previamente instalado.`,
    procedure: `1. Realize a instalação e o login no Creative Cloud Desktop com a conta corporativa.\n2. No aplicativo Creative Cloud Desktop, localize a opção Acrobat Pro.\n3. Clique em Instalar.\n4. Aguarde a finalização do processo de instalação.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=544;Nav=',
    relatedLinks: [
      { title: 'Creative Cloud Desktop', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1802;Nav=' }
    ],
    attachments: [
      {
        name: 'Adobe Acrobat Pro DC – Instalação.pdf',
        size: '355.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=544;FileID=16532'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=544;FileID=10154' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=544;FileID=9418' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '29/08/2023 14:58 (Viviane de Souza Alves dos Santos)',
      alterado: '18/06/2026 10:01 (Mayara Sales)',
      atualizadoEm: '17.06.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=544;Nav=',
      itemId: '544'
    }
  },
  {
    id: 'faq-1000554',
    faqNumber: '1000554',
    name: 'Adobe Digital Editions - Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Adobe Digital Editions',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do Adobe Digital Editions',
    associatedProcedureId: '',
    technicalInfo: `• É um software de livros digitais. Comumente utilizado para gerenciar e ler e-books, jornais digitais e outras publicações digitais.\n• Preencha o número do chamado, aceite os termos e confirme a pasta destino.`,
    procedure: `1. Execute o arquivo localizado em X:\\Digital Editions (Adobe).\n2. Clique em Sim.\n3. Clique novamente em Sim.\n4. Clique em OK.\n5. Clique em Próximo.\n6. Marque os componentes desejados.\n7. Clique em Próximo.\n8. Clique em Instalar.\n9. Aguarde o progresso de instalação.\n10. Clique em Fechar.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=554;Nav=',
    attachments: [
      {
        name: 'Adobe Digital Editions - Instalação.pdf',
        size: '403.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12405'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12402' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12401' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12399' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12406' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12408' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12400' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12404' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12407' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12403' },
      { title: 'Imagem 10', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12409' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/08/2023 11:58 (Maria Aparecida Aparecida Antunes Kikushi)',
      alterado: '27/06/2025 10:04 (Mayara Sales)',
      atualizadoEm: '17.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=554;Nav=',
      itemId: '554'
    }
  },
  {
    id: 'faq-1000602',
    faqNumber: '1000602',
    name: 'Creative Cloud Desktop – Informações',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Adobe Creative Cloud',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Informações sobre Adobe Creative Cloud',
    associatedProcedureId: '',
    observacoes: 'Para realizar a instalação de PLUGIN é necessário adicionar o LOGIN do cliente no grupo Administrador Local.',
    permissaoAcesso: `Todos os programas que compõem o produto Adobe Creative Cloud necessitam de autorização para instalação, pois existe uma quantidade limitada de licenças e será necessário avaliar a necessidade da instalação.\n\nNecessário solicitar autorização via Central de Serviços:\nIntranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.`,
    technicalInfo: `• CADASTRO DE PERFIL NA ADMINISTRAÇÃO DE CONTAS DO ADOBE:\n  - O cadastro é realizado sempre com o e-mail institucional do Senado, e o acesso deve ser feito utilizando a opção “Conta da Empresa” no momento do login.\n• Lista de programas da Adobe Creative Cloud (Suíte) disponíveis para instalação:\n  Adobe Photoshop CC, Premiere Pro CC, Premiere Rush CC, Bridge CC, Animate CC, Illustrator CC, Lightroom Classic CC, Character Animator, InDesign CC, Fresco CC, Photoshop Express CC, Audition CC, Lightroom CC, After Effects CC, Dreamweaver CC, Dimension CC.\n• Instalação de plugins no Adobe Creative Cloud (Desktop):\n  - No menu lateral esquerdo ou no menu Superior, clique em Plugins.\n  - Use a barra de pesquisa ou filtre pelo programa específico (ex: Photoshop, Premiere Pro).\n  - Uma notificação confirmará a instalação e o plugin será carregado automaticamente no software correspondente.`,
    procedure: `1. Para utilizar os softwares da Adobe Creative Cloud, é necessário que o cliente tenha o software instalado em seu computador e possua um perfil cadastrado na administração de contas da Adobe.\n2. Clique em Fazer Logon no aplicativo Creative Cloud Desktop.\n3. Insira o e-mail institucional.\n4. Selecione a opção "Conta da empresa".\n5. Para instalar plugins: clique na aba Marketplace (ou Mercado) > Plugins no menu superior > clique em Instalar (ou Obter).`,
    acessoUtilizacao: `1. Abra o aplicativo Adobe Creative Cloud (Desktop).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=602;Nav=',
    relatedLinks: [
      { title: 'FAQ#: 10001802 — Creative Cloud Desktop (Adobe) – Instalação', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1802;Nav=' }
    ],
    attachments: [
      {
        name: 'Creative Cloud Desktop - Informações.pdf',
        size: '709.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=17319'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=10153' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=14660' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=14662' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=14661' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=17314' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=17317' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=17318' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=17316' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=17315' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: 'Info Informações creative Cloud Plugin Plugins',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '11/09/2023 16:24 (Viviane de Souza Alves dos Santos)',
      alterado: '26/08/2026 12:14 (Gabriel Queiroz Pires)',
      atualizadoEm: '26.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=602;Nav=',
      itemId: '602'
    }
  },
  {
    id: 'faq-1000622',
    faqNumber: '1000622',
    name: 'Adobe Acrobat Reader DC - Instalação',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Adobe Acrobat Reader',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do Acrobat Reader DC',
    associatedProcedureId: '',
    technicalInfo: `• Leitor de PDF padrão para estações de trabalho do Senado Federal.`,
    procedure: `1. Execute o arquivo localizado em X:\\Acrobat (Adobe).\n2. Clique em Sim.\n3. Clique novamente em Sim.\n4. Insira o número do chamado.\n5. Clique em OK.\n6. Aguarde o processo de extração.\n7. Clique em Instalar.\n8. Aguarde o progresso de instalação.\n9. Clique em Concluir.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=622;Nav=',
    attachments: [
      {
        name: 'Adobe Acrobat Reader DC - Instalação.pdf',
        size: '280.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12383'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12393' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12392' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12390' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12394' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12395' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12388' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12389' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12391' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '12/09/2023 15:29 (Viviane de Souza Alves dos Santos)',
      alterado: '27/06/2025 09:00 (Mayara Sales)',
      atualizadoEm: '17.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=622;Nav=',
      itemId: '622'
    }
  }
];

const rawCombinedFaqs: FAQ[] = [
  ...initialFaqsOriginal,
  ...additionalFaqsBatch1,
  ...additionalFaqsBatch2,
  ...additionalFaqsBatch3,
  ...additionalFaqsBatch4,
  ...additionalFaqsBatch5,
  ...additionalFaqsBatch6,
  ...additionalFaqsBatch7,
  ...additionalFaqsBatch8,
  ...additionalFaqsBatch9,
  ...additionalFaqsBatch10,
  ...additionalFaqsBatch11,
  ...additionalFaqsBatch12,
  ...additionalFaqsBatch13,
  ...additionalFaqsBatch14,
  ...additionalFaqsBatch15,
  ...additionalFaqsBatch16,
  ...additionalFaqsBatch17,
  ...additionalFaqsBatch18,
  ...additionalFaqsBatch19,
  ...additionalFaqsBatch20,
  ...additionalFaqsBatch21,
  ...additionalFaqsBatch22,
  ...additionalFaqsBatch23,
  ...additionalFaqsBatch24,
  ...additionalFaqsBatch25,
  ...additionalFaqsBatch26,
  ...additionalFaqsBatch27
];

// Garantia defensiva de unicidade de chaves para evitar conflitos na renderização React
const seenFaqIds = new Set<string>();
export const initialFaqs: FAQ[] = rawCombinedFaqs.map((faq, index) => {
  if (!seenFaqIds.has(faq.id)) {
    seenFaqIds.add(faq.id);
    return faq;
  }
  const uniqueId = `${faq.id}-dup-${index}`;
  return { ...faq, id: uniqueId };
});

