import { FAQ } from '@/types';

/**
 * Base de FAQs oficial da aplicação.
 * Construída a partir das especificações exatas passadas pelo usuário.
 */
export const initialFaqs: FAQ[] = [
  {
    id: 'faq-1000681',
    faqNumber: '1000681',
    name: '7-ZIP - Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do 7-ZIP',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: '7-ZIP',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- Programa utilizado para compactar e descompactar arquivos como por exemplo (.zip, .rar, etc.).
- Tela inicial do programa.

---

### 📌 Procedimento de Instalação

1. Verifique a versão correspondente ao sistema operacional e execute o arquivo.
2. Execute o arquivo localizado em **X:\\7-Zip (7-Zip Software)**.
3. Clique em **Sim**.
4. Clique novamente em **Sim**.
5. Insira o número do chamado.
6. Clique em **OK**.
7. Aguarde o progresso de instalação.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=681;Nav=',
    attachments: [
      {
        name: '7-ZIP - Instalação .pdf',
        size: '258.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=681;FileID=12373'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=681;FileID=12376'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=681;FileID=12374'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=681;FileID=12371'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=681;FileID=12372'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=681;FileID=12370'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=681;FileID=12375'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > 7-ZIP > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::7-ZIP::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
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
    type: 'Incidente',
    service: 'Suporte a software de Estações de Trabalho',
    subject: 'Informa que o Acrobat Pro DC está Fechando',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-troubleshoot-adobe',
    procedure: `### 📌 Informações Complementares

**OBSERVAÇÃO:**
ATENDIMENTO REALIZADO PELO N2

---

### 📌 Informações e Orientações

- Procedimento para resolução em casos de instalação do Adobe Acrobat PRO DC, porém, ao concluir a instalação, o software não apresenta nenhum erro e fecha sem ser executado nenhum comando.
- Em Credenciais Genéricas Remova todas as credenciais relacionadas com "Adobe".
- Elimine TODOS os conteúdos das pastas a seguir:
  - \`C:\\Program files (x86)\\Common Files\\Adobe\\Adobe PCD\`
  - \`C:\\Program files (x86)\\Common Files\\Adobe\\SLCache\`
  - \`C:\\ProgramData\\Adobe\\SLStore\`

---

### 📌 Acesso e Utilização

1. Acesse o Gerenciador de Credenciais.
2. Clique em **Credenciais do Windows**.

---

### 📌 Procedimento de Correção

1. Reinicie o computador.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=545;Nav=',
    attachments: [
      {
        name: 'Acrobat Pro DC – Programa Fechando.pdf',
        size: '556.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=11185'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=9349'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=4455'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=9353'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=9350'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=9351'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=9348'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=545;FileID=9352'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '[não informadas]',
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
    id: 'faq-10002244',
    faqNumber: '10002244',
    name: 'Adobe Acrobat XI Pro – Encerramento Inesperado',
    type: 'Incidente',
    service: 'Suporte a software de Estações de Trabalho',
    subject: '[não informado]',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-troubleshoot-adobe',
    procedure: `### 📌 Informações Complementares

Encerramento inesperado do Adobe Acrobat XI.

---

### 📌 Observação Importante

**Observação:** Para novas instalações, a versão do aplicativo já estará atualizada e não será necessário executar o script.

---

### 📌 Informações e Orientações

- Procedimento para a resolução de problemas recorrentes no Adobe Acrobat, em que o programa é encerrado de forma inesperada durante a execução.
- O aplicativo fecha constantemente sem exibir mensagens de erro.

---

### 📌 Procedimento de Correção

1. Execute o arquivo localizado em **X:\\Acrobat (Adobe)**.
2. Clique em **Sim**.
3. Clique novamente em **Sim**.
4. Insira o número do chamado.
5. Clique em **OK**.
6. Clique em **Atualizar**.
7. Aguarde o processo de instalação.
8. Clique em **Concluir**.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2244;Nav=',
    attachments: [
      {
        name: 'Adobe Acrobat XI Pro – Encerramento Inesperado.pdf',
        size: '299.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13391'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13385'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13392'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13387'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13390'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13389'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13388'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2244;FileID=13386'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '[não informadas]',
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
    id: 'faq-10002235',
    faqNumber: '10002235',
    name: 'Adobe Audition – Erro Menu de Edição',
    type: 'Incidente',
    service: 'Suporte a software de Estações de Trabalho',
    subject: 'Adobe Audition – Erro Menu de Edição',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-troubleshoot-adobe',
    procedure: `### 📌 Informações e Orientações

- A falha ocorre quando os menus de edição do Adobe Audition não são exibidos.
- Mensagem de erro.

---

### 📌 Procedimento de Correção

1. Para ativar os menus de edição:
2. Clique na aba **“Window”**.
3. Clique em **“Workspace”**.
4. Clique em **“Edit Audio to Video”**.
5. Após a configuração o menu de edição é apresentado.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2235;Nav=',
    attachments: [
      {
        name: 'Adobe Audition – Erro Menu de Edição.pdf',
        size: '584.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2235;FileID=11187'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2235;FileID=11126'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2235;FileID=11123'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2235;FileID=11124'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '[não informadas]',
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
    id: 'faq-10001824',
    faqNumber: '10001824',
    name: 'Adobe Audition – Falha DLMS Format Support',
    type: 'Incidente',
    service: 'Suporte a software de Estações de Trabalho',
    subject: 'Falha no Adobe Audition – DLMS Format Support',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-troubleshoot-adobe',
    procedure: `### 📌 Informações e Orientações

- Mensagem de Erro.

---

### 📌 Procedimento de Correção

1. Clique em **“Edit” > “Preferences” > "Media & Disk Cache"**.
2. Marque a opção **"Enable DLMS Format Support"**.

---

### 📌 Acesso e Utilização

1. Abra o arquivo de áudio novamente.
2. Verifique se o problema foi corrigido.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1824;Nav=',
    attachments: [
      {
        name: 'Adobe Audition – Falha DLMS Format Support.pdf',
        size: '374.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1824;FileID=11188'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1824;FileID=9362'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1824;FileID=5862'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1824;FileID=5863'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '[não informadas]',
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
    id: 'faq-10001823',
    faqNumber: '10001823',
    name: 'Adobe Audition – Não Emite Som',
    type: 'Incidente',
    service: 'Suporte a software de Estações de Trabalho',
    subject: 'Falha no Adobe Audition – Não Emite Som',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-troubleshoot-adobe',
    procedure: `### 📌 Informações e Orientações

- Mensagem de Erro.

---

### 📌 Procedimento de Correção

1. Clique em **“Edit” > “Preferences” > "General"**.
2. Clique em **“Reset All Warning Dialogs”**.
3. Clique em **OK**.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1823;Nav=',
    attachments: [
      {
        name: 'Adobe Audition – Não Emite Som.pdf',
        size: '308.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1823;FileID=11189'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1823;FileID=11140'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1823;FileID=11141'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1823;FileID=11139'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '[não informadas]',
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
    id: 'faq-10001274',
    faqNumber: '10001274',
    name: 'Adobe Reader - Erro UAC Desabilitado',
    type: 'Incidente',
    service: 'Suporte a Software de Estação de Trabalho.',
    subject: 'Informa mensagem de erro de UAC Desabilitado',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-troubleshoot-adobe',
    procedure: `### 📌 Informações e Orientações

- Ao tentar abrir documentos em PDF, é apresentada uma mensagem de erro informando que o UAC está desabilitado.
- Mensagem de erro UAC está desabilitado.
- Se o programa ainda não aparecer, desça a barra de rolagem.
- O aplicativo encontra-se no caminho \`C:\\Program Files (x86)\\Adobe\\Acrobat Reader DC\\Reader\`.

---

### 📌 Procedimento de Correção

1. Para a correção deste erro é necessário alterar o programa padrão para abrir os documentos de extensão ".pdf", escolhendo o Adobe Reader.
2. Clique com o botão direito sobre o arquivo PDF.
3. Selecione a opção 'Abrir com'.
4. Clique em **'Escolher outro aplicativo'**.
5. Selecione o programa “Adobe Acrobat”.
6. Marque a opção 'Sempre usar este aplicativo para abrir arquivos .pdf'.
7. Caso o Adobe Acrobat não apareça na lista Verifique em ‘Mais opções'.
8. Clique em **‘Escolha um aplicativo no seu PC’**.

---

### 📌 Acesso e Utilização

1. Abra alguns arquivos em PDF para validar o procedimento.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1274;Nav=',
    attachments: [
      {
        name: 'Adobe Acrobat Reader - Erro UAC Desabilitado.pdf',
        size: '347.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1274;FileID=12446'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1274;FileID=11145'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1274;FileID=12444'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1274;FileID=12447'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1274;FileID=12443'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1274;FileID=12445'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1274;FileID=12448'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '[não informadas]',
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
    type: 'Incidente',
    service: 'Suporte a software de Estações de Trabalho',
    subject: 'Erro de Acesso Negado no Adobe Creative Cloud',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-troubleshoot-adobe',
    procedure: `### 📌 Observação Importante

**Observação:** A medida de contorno encontrada até o momento é a desativação do software do antivírus durante a atualização.

---

### 📌 Informações e Orientações

- O erro 127 pode ocorrer durante o processo de atualização do Creative Desktop App e principalmente durante as atualizações do Adobe Photoshop CC.
- Esse erro indica acesso negado quando aplicativo tenta copiar os arquivos para as pastas no drive C: do equipamento.
- Erro 127 - Acesso negado.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1523;Nav=',
    attachments: [
      {
        name: 'Creative Cloud Desktop – Acesso Negado.pdf',
        size: '267.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1523;FileID=11190'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1523;FileID=9354'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '[não informadas]',
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
    type: 'Incidente',
    service: 'Suporte a software de Estações de Trabalho',
    subject: 'Erro de Conflito de processos no Adobe Creative Cloud',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-troubleshoot-adobe',
    procedure: `### 📌 Observação Importante

**Observação:** Nesses casos se a reinicialização do micro não resolver, é necessário finalizar o processo "explorer.exe".

---

### 📌 Informações e Orientações

- Esse erro ocorre, pois, o software identifica que existem processos conflitantes durante a atualização.
- Esses processos conflitantes podem ser diversos como Autodesk ou Outlook ou da própria Adobe.
- Durante teste verifica-se que o processo "explorer.exe" bloqueia a dll "CoreSync_x64.dll" utilizada nas atualizações.
- Erro 184 – Conflito de processos.
- CoreSync_x64.dll.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1524;Nav=',
    attachments: [
      {
        name: 'Creative Cloud Desktop – Erro de Conflito de Processos.pdf',
        size: '336.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1524;FileID=11191'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1524;FileID=9359'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1524;FileID=9360'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::ERRO',
      palavrasChave: '[não informadas]',
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
    id: 'faq-1000544',
    faqNumber: '1000544',
    name: 'Adobe Acrobat Pro DC – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software licenciado',
    subject: 'Instalação do Adobe Acrobat Pro DC',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações Complementares

**SOFTWARE RESTRITO**

---

### 📌 Informações e Orientações

- A licença é atribuída à conta institucional, podendo ser instalada em mais de um equipamento (com uso simultâneo de apenas 1 estação de trabalho).
- Permite a conversão de documentos de diversos formatos em um arquivo de formato PDF.
- Realize a instalação do Creative Cloud Desktop.

---

### 📌 Procedimento de Instalação

1. Clique em **Instalar**.

---

### 📌 Permissão de Acesso

O software necessita de autorização para instalação, pois existe uma quantidade limitada de licenças e será necessário avaliar a necessidade da instalação.

Necessário solicitar autorização via Central de Serviços.

**Intranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.**

---

### 🔗 Procedimentos e Links Relacionados

- [**Creative Cloud Desktop**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1802;Nav=)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=544;Nav=',
    attachments: [
      {
        name: 'Adobe Acrobat Pro DC – Instalação.pdf',
        size: '355.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=544;FileID=16532'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=544;FileID=10154'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=544;FileID=9418'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
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
    id: 'faq-1000541',
    faqNumber: '1000541',
    name: 'Adobe Acrobat Professional 9',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Instalação do Adobe Acrobat Professional 9',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- **Motivo:** Não há licença adquirida pelo Senado Federal para utilização deste software.
- **Alternativas:** Adobe Acrobat Pro DC – Instalação, Adobe Acrobat XI Pro - Instalação, Adobe Acrobat Reader DC - Instalação.

---

### 📌 Permissão de Acesso

**Observação:** O uso deste software não é autorizado.

---

### 🔗 Procedimentos e Links Relacionados

- [**Adobe Acrobat Pro DC – Instalação**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=544;Nav=)
- [**Adobe Acrobat XI Pro - Instalação**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=542;Nav=)
- [**Adobe Acrobat Reader DC - Instalação**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=622;Nav=)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=541;Nav=',
    attachments: [
      {
        name: 'Adobe Acrobat Professional 9.pdf',
        size: '211.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=541;FileID=11197'
      }
    ],
    visualRefs: [],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
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
    id: 'faq-10002278',
    faqNumber: '10002278',
    name: 'Adobe Acrobat Reader – Habilitando o visualizador de miniaturas no Windows Explorer',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Habilitando o visualizador de miniaturas no Windows Explorer',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-config-software',
    procedure: `### 📌 Informações e Orientações

- Ao tentar visualizar um documento PDF, é apresentada uma mensagem de erro informando que *"O arquivo que você deseja visualizar pode prejudicar o computador. Caso confie no arquivo e na fonte da qual o recebeu, abra o arquivo para visualizar seu conteúdo."*.
- No menu editar.
- No menu preferências.

---

### 📌 Procedimento de Instalação

1. Selecione o arquivo com a extensão PDF.
2. Clique com o botão direito.
3. Selecione **Propriedades**.
4. Selecione a opção **Desbloquear**.
5. Selecione a opção **Preferências**.
6. Selecione a opção **Geral Ativar visualizações de miniaturas do Windows Explorer**.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2278;Nav=',
    attachments: [
      {
        name: 'Adobe Acrobat Reader – Habilitando o visualizador de miniaturas no Windows Explorer.pdf',
        size: '413.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2278;FileID=15159'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2278;FileID=15153'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2278;FileID=15154'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2278;FileID=15155'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2278;FileID=15156'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2278;FileID=15157'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '12/11/2025 11:11 (Gabriel Queiroz Pires)',
      alterado: '06/02/2026 11:23 (Mayara Sales)',
      atualizadoEm: '12.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2278;Nav=',
      itemId: '2278'
    }
  },
  {
    id: 'faq-1000622',
    faqNumber: '1000622',
    name: 'Adobe Acrobat Reader DC - Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do Acrobat Reader DC',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **X:\\Acrobat (Adobe)**.
2. Clique em **Sim**.
3. Clique novamente em **Sim**.
4. Insira o número do chamado.
5. Clique em **OK**.
6. Aguarde o processo de extração.
7. Clique em **Instalar**.
8. Aguarde o progresso de instalação.
9. Clique em **Concluir**.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=622;Nav=',
    attachments: [
      {
        name: 'Adobe Acrobat Reader DC - Instalação.pdf',
        size: '280.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12383'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12393'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12392'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12390'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12394'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12395'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12388'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12389'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=622;FileID=12391'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '12/09/2023 15:29 (Viviane de Souza Alves dos Santos)',
      alterado: '27/06/2025 09:00 (Mayara Sales)',
      atualizadoEm: '17.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=622;Nav=',
      itemId: '622'
    }
  },
  {
    id: 'faq-1000542',
    faqNumber: '1000542',
    name: 'Adobe Acrobat XI Pro - Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software licenciado',
    subject: 'Instalação do Adobe Acrobat XI Pro',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações Complementares

**SOFTWARE RESTRITO**

---

### 📌 Informações e Orientações

- Programa utilizado para ler, criar e editar documentos no formato PDF.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **X:\\Acrobat (Adobe)**.
2. Clique em **Sim**.
3. Clique em **Prosseguir**.
4. Clique em **Sim**.
5. Insira o número do chamado.
6. Clique em **OK**.
7. Selecione o idioma.
8. Clique em **OK**.
9. Clique em **Avançar**.
10. Clique novamente em **Avançar**.
11. Clique novamente em **Avançar**.
12. Clique novamente em **Avançar**.
13. Clique em **Instalar**.
14. Aguarde o processo de instalação.
15. Clique em **Concluir**.

---

### 📌 Credenciais de Acesso

Insira as credenciais de rede.

---

### 📌 Permissão de Acesso

O software necessita de autorização para instalação, pois existe uma quantidade limitada de licenças e será necessário avaliar a necessidade da instalação.

A licença é atribuída ao equipamento. Só serão autorizadas instalações em caso de:
- Troca de equipamento
- Mudança de setor
- Instalação Padrão

Necessário solicitar autorização via Central de Serviços:
**Intranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.**`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=542;Nav=',
    attachments: [
      {
        name: 'Adobe Acrobat XI Pro - Instalação.pdf',
        size: '461.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=13383'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=10157'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=13382'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12923'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12919'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12922'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12926'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12918'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12916'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12928'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12927'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12917'
      },
      {
        title: 'Imagem 12',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12925'
      },
      {
        title: 'Imagem 13',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12920'
      },
      {
        title: 'Imagem 14',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=542;FileID=12921'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
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
    id: 'faq-1000554',
    faqNumber: '1000554',
    name: 'Adobe Digital Editions - Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do Adobe Digital Editions',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- É um software de livros digitais. Comumente utilizado para gerenciar e ler e-books, jornais digitais e outras publicações digitais.
- Preencha o número do chamado.
- Aceite os termos.
- Confirme a pasta destino.
- Tela inicial do programa.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **X:\\Digital Editions (Adobe)**.
2. Clique em **Sim**.
3. Clique novamente em **Sim**.
4. Clique em **OK**.
5. Clique em **Próximo**.
6. Marque os componentes desejados.
7. Clique em **Próximo**.
8. Clique em **Instalar**.
9. Aguarde o progresso de instalação.
10. Clique em **Fechar**.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=554;Nav=',
    attachments: [
      {
        name: 'Adobe Digital Editions - Instalação.pdf',
        size: '403.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12405'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12402'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12401'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12399'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12406'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12408'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12400'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12404'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12407'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12403'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=554;FileID=12409'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
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
    id: 'faq-1000641',
    faqNumber: '1000641',
    name: 'Adobe Master Collection CS6 - Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software licenciado',
    subject: 'Instalação do Adobe Master Collection CS6',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- CENTRAL_ATENDIMENTO (\\\\DRU) (X:) Creative Suite 6 (Adobe).
- Lista dos programas após a instalação do Adobe Master Collection CS6.
- Alguns produtos da linha Adobe Creative Suite CS6 em executáveis individuais para instalação separada:
  - Audition CS6 64 bits (Adobe)
  - Illustrator CS6 64 bits (Adobe)
  - InCopy CS6 64 bits (Adobe)
  - InDesign CS6 64 bits (Adobe)
  - Master Collection CS6 64 bits (Adobe)
  - Photoshop CS6 64 bits (Adobe)
  - Photoshop Extended CS6 64 bits (Adobe)
  - Photoshop Lightroom 4 64 bits (Adobe)
  - Plugin Camera Raw (Adobe)

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em.
2. Clique em **Sim**.
3. Clique novamente em **Sim**.
4. Aguarde o processo de instalação.
5. Clique em **OK**.

---

### 📌 Permissão de Acesso

Todos os programas exibidos na imagem abaixo requerem autorização prévia para instalação, incluindo o Adobe Acrobat Professional, devido à quantidade limitada de licenças disponíveis. A necessidade da instalação será avaliada caso a caso.

Necessário solicitar autorização via Central de Serviços:
**Intranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.**`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=641;Nav=',
    attachments: [
      {
        name: 'Adobe Master Collection CS6 - Instalação.pdf',
        size: '405.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=641;FileID=14659'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=641;FileID=10151'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=641;FileID=14658'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=641;FileID=14653'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=641;FileID=14652'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=641;FileID=14655'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=641;FileID=14654'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=641;FileID=14651'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '13/09/2023 14:58 (Viviane de Souza Alves dos Santos)',
      alterado: '13/01/2026 14:57 (Leonardo Silva de Amarante)',
      atualizadoEm: '13.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=641;Nav=',
      itemId: '641'
    }
  },
  {
    id: 'faq-1000602',
    faqNumber: '1000602',
    name: 'Creative Cloud Desktop – Informações',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Informações sobre Adobe Creative Cloud',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-config-software',
    procedure: `### 📌 Informações e Orientações

- **CADASTRO DE PERFIL NA ADMINISTRAÇÃO DE CONTAS DO ADOBE:**
  O cadastro é realizado sempre com o e-mail institucional do Senado, e o acesso deve ser feito utilizando a opção **“Conta da Empresa”** no momento do login.
- Tela inicial do programa.
- **Lista de programas da Adobe Creative Cloud (Suíte) disponíveis para instalação:**
  - Adobe Photoshop CC
  - Adobe Premiere Pro CC
  - Adobe Premiere Rush CC
  - Adobe Bridge CC
  - Adobe Animate CC
  - Adobe Illustrator CC
  - Adobe Lightroom Classic CC
  - Adobe Character Animator
  - Adobe InDesign CC
  - Adobe Fresco CC
  - Adobe Photoshop Express CC
  - Adobe Audition CC
  - Adobe Lightroom CC
  - Adobe After Effects CC
  - Adobe Dreamweaver CC
  - Adobe Dimension CC

---

### 📌 Procedimento de Instalação e Utilização

1. Para utilizar os softwares da Adobe Creative Cloud, é necessário que o cliente tenha o software instalado em seu computador e possua um perfil cadastrado na administração de contas da Adobe.
2. Para mais informações sobre a instalação do Creative Cloud acesse a **FAQ#: 10001802 — Creative Cloud Desktop (Adobe) – Instalação**.
3. Clique em **Fazer logon**.
4. Insira o e-mail institucional.
5. Selecione a opção **Conta da empresa**.

---

### 📌 Instalação de Plugins no Adobe Creative Cloud (Desktop)

1. No menu lateral esquerdo ou no menu superior, clique na aba **Marketplace (ou Mercado)**.
2. Clique em **Plugins** no menu superior.
3. Use a barra de pesquisa ou filtre pelo programa específico (ex: Photoshop, Premiere Pro).
4. Ao encontrar o plugin desejado, clique em **Instalar (ou Obter)**.
5. Uma notificação confirmará a instalação. O plugin será carregado automaticamente no software correspondente.

---

### 📌 Observações sobre o Login

**Observação:** Para realizar a instalação do PLUGIN é necessário adicionar o LOGIN do cliente no grupo **Administrador Local**.

---

### 📌 Permissão de Acesso

Todos os programas que compõem o produto Adobe Creative Cloud necessitam de autorização para instalação, pois existe uma quantidade limitada de licenças e será necessário avaliar a necessidade da instalação.

Necessário solicitar autorização via Central de Serviços:
**Intranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.**

---

### 🔗 Procedimentos e Links Relacionados

- [**FAQ#: 10001802 — Creative Cloud Desktop (Adobe) – Instalação**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1802;Nav=)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=602;Nav=',
    attachments: [
      {
        name: 'Creative Cloud Desktop - Informações.pdf',
        size: '709.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=17319'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=10153'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=14660'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=14662'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=14661'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=17314'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=17317'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=17318'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=17316'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=602;FileID=17315'
      }
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
    id: 'faq-10001802',
    faqNumber: '10001802',
    name: 'Creative Cloud Desktop (Adobe) – Instalação/Atualização',
    type: 'Requisição de serviço',
    service: 'Instalação de software licenciado',
    subject: 'Instalação/Atualização do Adobe Creative Cloud',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ADOBE',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações Complementares

**OBSERVAÇÃO: PROCEDIMENTO REALIZADO PELO NÍVEL 2**

---

### 📌 Informações e Orientações

- Informações sobre Licenças.
- Preencha o número do chamado.
- Tela inicial do programa.
- Programas da suíte.
- Atualizar o Creative Cloud Desktop.
- FAQ#: 10002249 — Windows – Perfil de administrador.
- Realize o Logoff/login.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **X:\\Creative Cloud Desktop (Adobe)**.
2. Clique em **Sim**.
3. Clique em **Prosseguir**.
4. Clique em **Sim**.
5. Clique em **OK**.
6. Insira o e-mail institucional.
7. Marque a opção **‘Não mostra isso novamente’**.
8. Clique em **Sim**.
9. Aguarde o processo de instalação.
10. Clique em **OK**.
11. Clique no Menu **“Iniciar/Sair”**.

---

### 📌 Acesso e Utilização (Atualização dos Aplicativos)

1. Acesse outros procedimentos para mais informações: Informações sobre o Adobe Cloud.
2. Abra o aplicativo **“Creative Cloud” Desktop**.
3. Clique na aba **“Aplicativos (ou Apps)”**, em seguida clique na opção **“Atualizações”**.
4. Clique em **“Update All/Atualizar tudo”**, OU:
5. Selecione o aplicativo desejado e clique em **“Update/Atualizar”**.

---

### 📌 Credenciais de Acesso

- Insira as credenciais de rede.
- Insira a senha de rede.

---

### 📌 Observações sobre o Login

**Observação:** Adicione o LOGIN do cliente no grupo **“Administrador local”** temporariamente, para seguir com o processo de atualização do aplicativo.

---

### 📌 Permissão de Acesso

Todos os programas da imagem abaixo necessitam de autorização para instalação, pois existe uma quantidade limitada de licenças e será necessário avaliar a necessidade da instalação.

Necessário solicitar autorização via Central de Serviços:
**Intranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.**

---

### 🔗 Procedimentos e Links Relacionados

- [**Informações sobre o Adobe Cloud**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=602)
- [**Informações sobre Licenças**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=601;Nav=)
- [**FAQ#: 10002249 — Windows – Perfil de administrador**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2249;Nav=)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1802;Nav=',
    attachments: [
      {
        name: 'Creative Cloud Desktop (Adobe) – Instalação-Atualização.pdf',
        size: '843.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=16694'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=10147'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=12934'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=12939'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=12935'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=12936'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=12940'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=12932'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=12929'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=12930'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=12941'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=12933'
      },
      {
        title: 'Imagem 12',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=12938'
      },
      {
        title: 'Imagem 13',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=12937'
      },
      {
        title: 'Imagem 14',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=16692'
      },
      {
        title: 'Imagem 15',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=16693'
      },
      {
        title: 'Imagem 16',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1802;FileID=16691'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ADOBE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: 'Atualizar creative atualizar creative cloud instalar creative',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '09/07/2024 08:51 (Mayara Sales)',
      alterado: '13/07/2026 15:22 (Leonardo Silva de Amarante)',
      atualizadoEm: '13.07.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1802;Nav=',
      itemId: '1802'
    }
  },
  {
    id: 'faq-10002285',
    faqNumber: '10002285',
    name: 'Instalação do Affinity',
    type: 'Requisição de serviço',
    service: 'Instalação de software licenciado',
    subject: 'Solicita a instalação do programa Affinity',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'AFFINITY (CANVA)',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- O Affinity é um software gratuito para edição de fotos, design gráfico e layout de página.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **CENTRAL_ATENDIMENTO (\\\\DRU) (X:) Affinity (Canva)**.
2. Clique em **"Sim"**.
3. Clique novamente em **"Sim"**.
4. Aguarde o processo de instalação.
5. Clique em **"Instalar"**.
6. Aguarde o processo de instalação.
7. Clique em **"Fechar"**.
8. Clique em **"Entrar ou registre-se"**.
9. Selecione a melhor forma de realizar o Login.
10. Insira o E-mail cadastrado.
11. Clique em **"Avançar"**.
12. Digite a sua Senha.
13. Clique em **"Avançar"**.
14. Clique em **"Continuar"**.
15. Clique em **"Abrir"**.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2285;Nav=',
    attachments: [
      {
        name: 'Instalação do Affinity.pdf',
        size: '865.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=16613'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=15220'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=15221'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=16612'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=15223'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=15224'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=15225'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=15226'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=15227'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=15228'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=15229'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=15230'
      },
      {
        title: 'Imagem 12',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=15231'
      },
      {
        title: 'Imagem 13',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=15232'
      },
      {
        title: 'Imagem 14',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=15233'
      },
      {
        title: 'Imagem 15',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2285;FileID=15234'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > AFFINITY (CANVA) > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::AFFINITY (CANVA)::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: 'afinity afftinity affinite',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '13/11/2025 15:19 (Gabriel Queiroz Pires)',
      alterado: '25/06/2026 09:58 (Gabriel Queiroz Pires)',
      atualizadoEm: '25.06.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2285;Nav=',
      itemId: '2285'
    }
  },
  {
    id: 'faq-10002308',
    faqNumber: '10002308',
    name: 'AltoQi (Eberick e Builder) – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do AltoQi',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ALTOQi (EBERICK E BUILDER)',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações Complementares

**OBSERVAÇÃO: PROCEDIMENTO REALIZADO PELO ATENDIMENTO PRESENCIAL (SUAPE/NÍVEL 2)**

**SOFTWARE RESTRITO**

---

### 📌 Observação Importante

A ferramenta é destinada **EXCLUSIVAMENTE** à Secretaria de Infraestrutura (SINFRA).

---

### 📌 Informações e Orientações

- O software Alto Qi é utilizado por engenheiros e projetistas, para elaboração de projetos, cálculos e modelagem de edificações com base na metodologia BIM (Building Information Modeling).
- Entre com a conta cadastrada.
- Na aba ‘Soluções atribuídas para você’ Baixe o instalador do Eberick ou Builder.
- Aceite os termos.
- Realize a instalação do Microsoft Visual C++ (Não é necessário caso a instalação tenha sido realizada pelo \`X:\\Visual C++ (Microsoft)\`).

---

### 📌 Procedimento de Instalação

1. Para a instalação, é necessário baixar apenas um dos instaladores: **AltoQi Eberick** ou **AltoQi Builder**. Durante o processo de instalação, é possível selecionar, por meio de uma caixa de seleção, a opção para instalar ambas as ferramentas.
2. Clique em uma das opções e aguarde a conclusão do download.
3. Após o download, realize a instalação com o login **“INS”**.
4. Clique em **Avançar**.
5. Clique em **Continuar instalação**.
6. Clique em **Avançar**.
7. Selecione os componentes.
8. Clique em **Instalar**.
9. Clique em **Concluir**.

---

### 📌 Acesso e Utilização

1. Acesse a página de download dos arquivos AltoQi Builder e AutoQi Eberick (É necessário que o usuário esteja autenticado para realizar o download).
2. Clique em **‘Faça seu login AltoQi’**.

---

### 📌 Permissão de Acesso

**Requisitos:** Microsoft Visual C++, disponível no procedimento de instalação do Visual C++.
Necessário solicitar autorização via Central de Serviços:
**Intranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.**

---

### 🔗 Procedimentos e Links Relacionados

- [**Visual C++**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2306)
- [**Download AltoQi (Área do Cliente)**](https://areacliente.altoqi.com.br/solucoes-atribuidas-para-voce)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2308;Nav=',
    attachments: [
      {
        name: 'AltoQi (Eberick e Builder) – Instalação.pdf',
        size: '835.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2308;FileID=15783'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2308;FileID=15770'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2308;FileID=15771'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2308;FileID=15772'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2308;FileID=15773'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2308;FileID=15774'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2308;FileID=15775'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2308;FileID=15776'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2308;FileID=15777'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2308;FileID=15778'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2308;FileID=15779'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2308;FileID=15780'
      },
      {
        title: 'Imagem 12',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2308;FileID=15781'
      },
      {
        title: 'Imagem 13',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2308;FileID=15782'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ALTOQi (EBERICK E BUILDER) > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ALTOQi (EBERICK E BUILDER)::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: 'Eberick Builder AltoQi SINFRA projetos edificações',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '10/02/2026 12:17 (Mayara Sales)',
      alterado: '10/02/2026 12:23 (Mayara Sales)',
      atualizadoEm: '10.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2308;Nav=',
      itemId: '2308'
    }
  },
  {
    id: 'faq-1000721',
    faqNumber: '1000721',
    name: 'Anaconda - Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do Anaconda',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ANACONDA',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações Complementares

**OBSERVAÇÃO: PROCEDIMENTO REALIZADO PELO NÍVEL 2**

---

### 📌 Informações e Orientações

- É uma distribuição gratuita e de código aberto das linguagens de programação Python e R para aplicativos relacionados à ciência de dados e aprendizado de máquina.
- Aceite os termos de licença.
- Tela inicial do programa.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **X:\\Anaconda (Anaconda, Inc.)**.
2. Clique em **Sim**.
3. Clique novamente em **Sim**.
4. Aguarde o carregamento do assistente de instalação.
5. Clique em **“Next”**.
6. Clique em **“I Agree”**.
7. Selecione o tipo de instalação.
8. Clique em **“Next”**.
9. Selecione o diretório de instalação.
10. Clique em **“Next”**.
11. Marque as 3 opções abaixo.
12. Clique em **“Install”**.
13. Aguarde o processo de instalação.
14. Clique em **“Next”**.
15. Clique em **"Next"**.
16. Clique em **“Finish”**.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=721;Nav=',
    attachments: [
      {
        name: 'Anaconda - Instalação.pdf',
        size: '513.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17324'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17307'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17310'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17311'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17312'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17306'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17305'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17308'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17303'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17299'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17301'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17302'
      },
      {
        title: 'Imagem 12',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17304'
      },
      {
        title: 'Imagem 13',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17300'
      },
      {
        title: 'Imagem 14',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=721;FileID=17309'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ANACONDA > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ANACONDA::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 08:33 (Mayara Sales)',
      alterado: '27/08/2026 14:59 (Mayara Sales)',
      atualizadoEm: '27.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=721;Nav=',
      itemId: '721'
    }
  },
  {
    id: 'faq-1000722',
    faqNumber: '1000722',
    name: 'Anki - Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do software Anki',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ANKI',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- É um software livre de cartões de memorização.
- Feche a janela do prompt.
- Tela inicial do programa.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **X:\\Anki (Damien Elmes)**.
2. Clique em **Sim**.
3. Clique novamente em **Sim**.
4. Insira o número do chamado.
5. Clique em **OK**.
6. Clique em **“Install”**.
7. Pressione a tecla "Enter".
8. Aguarde o fim da instalação dos pacotes.
9. Clique em **OK**.
10. Clique em **“Yes”**.
11. Após a instalação, será criado um atalho na área de trabalho.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=722;Nav=',
    attachments: [
      {
        name: 'Anki - Instalação.pdf',
        size: '411.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=722;FileID=15260'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=722;FileID=12435'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=722;FileID=15252'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=722;FileID=15258'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=722;FileID=12426'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=722;FileID=15254'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=722;FileID=15255'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=722;FileID=15251'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=722;FileID=15259'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=722;FileID=15257'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=722;FileID=15256'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=722;FileID=15250'
      },
      {
        title: 'Imagem 12',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=722;FileID=15253'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ANKI > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ANKI::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 09:01 (Mayara Sales)',
      alterado: '13/11/2025 18:07 (Jeferson dos Santos Morais)',
      atualizadoEm: '13.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=722;Nav=',
      itemId: '722'
    }
  },
  {
    id: 'faq-1000723',
    faqNumber: '1000723',
    name: 'AntConc – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do software AntConc',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ANTCONC',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- É um software concordanciador, programa que constrói concordâncias automaticamente.
- Tela inicial do programa.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **X:\\AntConc (Laurence Anthony)**.
2. Clique em **Sim**.
3. Clique novamente em **Sim**.
4. Insira o número do chamado.
5. Clique em **OK**.
6. Clique novamente em **OK**.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=723;Nav=',
    attachments: [
      {
        name: 'AntConc – Instalação.pdf',
        size: '330.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=723;FileID=12438'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=723;FileID=12436'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=723;FileID=12439'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=723;FileID=12442'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=723;FileID=12440'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=723;FileID=12437'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=723;FileID=12441'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ANTCONC > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ANTCONC::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 09:14 (Mayara Sales)',
      alterado: '27/06/2025 10:22 (Mayara Sales)',
      atualizadoEm: '18.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=723;Nav=',
      itemId: '723'
    }
  },
  {
    id: 'faq-10002316',
    faqNumber: '10002316',
    name: 'Bloqueio do antivírus',
    type: 'Requisição de serviço',
    service: 'Instalação/atualização de antivírus',
    subject: 'Bloqueio do antivírus',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ANTIVÍRUS',
    associatedProcedureId: 'proc-troubleshoot-security',
    procedure: `### 📌 Observações Importantes

- **Observação 1:** Se o problema continuar após reiniciar o sistema, siga para o próximo passo.
- **Observação 2:** A guia “Log de eventos” monitora atividades, erros e ameaças nos sistemas, sendo essencial para diagnósticos.
- **Observação 3:** Se o problema de bloqueio do antivírus persistir, documente todo o chamado, incluindo os prints de evidência, e siga o fluxo de atendimento.

---

### 📌 Informações e Orientações

- **NÃO É ACONSELHÁVEL A REMOÇÃO DO ANTIVÍRUS PARA FINS DE TESTE.**
- Identificar a classificação do evento (*Bloquearia*, *Bloquear/Bloqueado* ou *Confinado*):
  - **Bloquearia:** Indica que existe uma política configurada que permite a execução do arquivo; o evento foi apenas registrado como potencial ameaça, porém, liberado automaticamente.
    - *Ação:* Análise técnica local (N1/N2), sem necessidade obrigatória de escalonamento.
  - **Bloquear/Bloqueado:** Refere-se a uma regra aplicada a arquivos ou aplicações não reconhecidos, não homologados ou fora dos padrões institucionais; o antivírus realizou bloqueio efetivo.
    - *Ação:* Escalonamento para SUAPE com prints comprobatórios.
    - As capturas de tela devem apresentar, de forma clara: **Log de eventos > Ação realizada > Código identificador > Destino**.
  - **Confinar:** Ocorre quando um arquivo previamente autorizado sofre alteração (ex.: atualização de versão do aplicativo). O antivírus identifica a modificação e move o arquivo para quarentena.
    - *Ação:* Escalonamento de chamado para SUAPE, para avaliação e liberação pelo Analista, identificando a versão do aplicativo para atualização.

---

### 📌 Procedimento de Correção e Imposição de Políticas

1. O procedimento correto consiste na verificação rigorosa dos logs e, caso o problema persista, no escalonamento imediato do chamado para o nível superior.
2. Clique com o botão direito no ícone do **Trellix**.
3. Selecione a opção **“Atualizar segurança...”**.
4. Aguarde a conclusão da atualização.
5. Clique com o botão direito no ícone do Trellix.
6. Selecione a opção **“Monitor de status do Trellix Agent...”**.
7. Selecione as 4 primeiras opções, seguindo rigorosamente a ordem:
   - **Coletar e enviar props**
   - **Enviar eventos**
   - **Verificar novas políticas**
   - **Impor políticas**
8. Após a conclusão, clique em **“Fechar”** e reinicie o computador.
9. Clique novamente com o botão direito no ícone do Trellix.
10. Selecione a opção **“Trellix Endpoint Security”** para validar o status.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2316;Nav=',
    attachments: [
      {
        name: 'Bloqueio do antivírus.pdf',
        size: '604.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2316;FileID=16672'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2316;FileID=15908'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2316;FileID=15909'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2316;FileID=16668'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2316;FileID=16671'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2316;FileID=16675'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2316;FileID=16666'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2316;FileID=16670'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2316;FileID=16674'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2316;FileID=16673'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2316;FileID=16669'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2316;FileID=16667'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ANTIVÍRUS > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ANTIVÍRUS::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: 'antivirus trelix',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '23/02/2026 18:06 (Leonardo Silva de Amarante)',
      alterado: '26/06/2026 16:12 (Gabriel Queiroz Pires)',
      atualizadoEm: '26.06.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2316;Nav=',
      itemId: '2316'
    }
  },
  {
    id: 'faq-10001462',
    faqNumber: '10001462',
    name: 'Getsusp – Verificação de Vírus',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do Getsusp (Verificação de Vírus)',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ANTIVÍRUS',
    associatedProcedureId: 'proc-troubleshoot-security',
    procedure: `### 📌 Informações Complementares

**OBSERVAÇÃO: PROCEDIMENTO REALIZADO PELO NÍVEL 2**

---

### 📌 Observação Importante

**A máquina infectada pelo vírus deve ficar desligada e com o cabo de rede desconectado.**

---

### 📌 Informações e Orientações

- É importante que o técnico tenha em seu HD Externo ou pendrive o arquivo "getsusp.exe".
- Acesso à ferramenta de configuração através do comando \`msconfig\` no Executar do Windows.

---

### 📌 Procedimento de Instalação e Varredura

1. Execute o arquivo localizado em **W:\\COATEN\\SEARP\\Getsusp\\Getsusp Atualizado**.
2. Clique em **OK**.
3. Pressione **Win + R**, digite \`msconfig\` e pressione Enter.
4. Clique na aba **‘Inicialização do Sistema’**.
5. Marque a opção **Inicialização segura**.
6. Marque a opção **Rede**.
7. Clique na aba **‘Serviços’**.
8. Marque a opção **‘Ocultar todos os serviços Microsoft’**.
9. Clique em **‘Desativar tudo’**.
10. Clique em **OK**.
11. Reinicie o computador e faça logon com o perfil institucional **‘_INS’**.
12. Execute o arquivo **getsusp Novo**, localizado no pendrive ou na biblioteca setorial.
13. Aceite os termos de uso.
14. Clique em **"Custom Scan"**.
15. Selecione as partições **C:** e **D:** e clique em **"Select"**.
16. Clique em **OK**.
17. Clique em **"Scan now"**.
18. Aguarde o processo de varredura completa.
19. Marque a opção **"Include all files"**.
20. Clique em **OK**.
21. Clique em **"View Results"**.
22. Copie o arquivo gerado e anexe ao chamado ou encaminhe para a supervisão.
23. Clique em **OK**.
24. Pressione **Win + R**, digite \`msconfig\` novamente.
25. Clique na aba **‘Inicialização do Sistema’** e desmarque **‘Inicialização segura’**.
26. Clique em **OK** e reinicie o computador para restaurar a operação normal.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1462;Nav=',
    attachments: [
      {
        name: 'Getsusp – Verificação de Vírus.pdf',
        size: '838.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=12863'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=12839'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=12864'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=12841'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=12862'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=9484'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=9481'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=12865'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=9478'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=9475'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=9487'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=9485'
      },
      {
        title: 'Imagem 12',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=9476'
      },
      {
        title: 'Imagem 13',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=9482'
      },
      {
        title: 'Imagem 14',
        url: 'https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1462;Nav='
      },
      {
        title: 'Imagem 15',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1462;FileID=11206'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ANTIVÍRUS > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ANTIVÍRUS::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '26/02/2024 10:01 (Mayara Sales)',
      alterado: '22/07/2025 16:15 (Mayara Sales)',
      atualizadoEm: '18.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1462;Nav=',
      itemId: '1462'
    }
  },
  {
    id: 'faq-1000739',
    faqNumber: '1000739',
    name: 'Any Vídeo Converter – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do Any Vídeo Converter',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ANY VIDEO CONVERTER',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- Conversor de áudio e vídeo compatível com múltiplos formatos.
- Tela inicial do programa.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **X:\\Any Video Converter (Anvsoft)**.
2. Clique em **Sim**.
3. Clique novamente em **Sim**.
4. Insira o número do chamado.
5. Clique em **OK**.
6. Aguarde o carregamento do arquivo.
7. Clique em **Instalar**.
8. Aguarde o processo de instalação.
9. Clique em **Começar agora**.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=739;Nav=',
    attachments: [
      {
        name: 'Any Vídeo Converter – Instalação.pdf',
        size: '357.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=739;FileID=12867'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=739;FileID=12846'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=739;FileID=12870'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=739;FileID=12873'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=739;FileID=12872'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=739;FileID=12869'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=739;FileID=12874'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=739;FileID=12871'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=739;FileID=12866'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=739;FileID=12868'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ANY VIDEO CONVERTER > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ANY VIDEO CONVERTER::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 12:05 (Mayara Sales)',
      alterado: '22/07/2025 16:26 (Mayara Sales)',
      atualizadoEm: '18.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=739;Nav=',
      itemId: '739'
    }
  },
  {
    id: 'faq-1000744',
    faqNumber: '1000744',
    name: 'Aplicações EFI (Command WorkStation e Fiery Scan) – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação das aplicações EFI (Command WorkStation e Fiery Scan)',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'APLICAÇÕES EFI (GRÁFICA)',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Observação Importante

**Observação:** O aplicativo **“Fiery Software Manager”** é essencial e mantém todas as aplicações atualizadas.

---

### 📌 Informações e Orientações

- Em ‘Produtos’, preencha o formulário com os campos marcados com “*”.
- Escolha a opção desejada: Windows ou Mac.
- O download será realizado com o nome \`Fiery-Software-Manager.exe\`. Essa é a aplicação que gerencia a instalação das demais ferramentas.
- Baixe e instale o **“Fiery Software Manager”**. A janela aberta exibirá todas as aplicações disponíveis.
- Ao finalizar a instalação, execute a **“Command WorkStation”**.
- Adicione as impressoras na tecla **“+”** incluindo o IP, ou selecione-as caso sejam detectadas pelo software.
- **Observação:** A senha padrão de fábrica/rede é \`Fiery.1\`.
- Referência de atendimento: Chamado **2021011410000744**.

---

### 📌 Procedimento de Instalação

1. Acesse o portal **fiery.com**.
2. Clique em **‘Fiery Command WorkStation’**.
3. Clique em **Download gratuito**.
4. Preencha o formulário e clique em **“Submit”**.
5. Clique em **“Fazer Download”** e instale **“Command WorkStation”** e **“Fiery Remote Scan”**.
6. Para configurar o “Fiery Remote Scan”, consulte o documento em anexo da FAQ#: 10001422.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=744;Nav=',
    attachments: [
      {
        name: 'Aplicações EFI (Command WorkStation e Fiery Scan) – Instalação.pdf',
        size: '635.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=744;FileID=11208'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=744;FileID=10350'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=744;FileID=10348'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=744;FileID=10347'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=744;FileID=10351'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=744;FileID=10346'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=744;FileID=10349'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=744;FileID=10352'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=744;FileID=1130'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > APLICAÇÕES EFI (GRÁFICA) > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::APLICAÇÕES EFI (GRÁFICA)::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 12:20 (Mayara Sales)',
      alterado: '20/05/2025 08:20 (Mayara Sales)',
      atualizadoEm: '10.03.2024',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=744;Nav=',
      itemId: '744'
    }
  },
  {
    id: 'faq-10001422',
    faqNumber: '10001422',
    name: 'Fiery Remote Scan',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Fiery Remote Scan – Guia e Procedimento de Configuração',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'APLICAÇÕES EFI (GRÁFICA)',
    associatedProcedureId: 'proc-config-software',
    procedure: `### 📌 Informações Complementares

**PROCEDIMENTO EM ANEXO**

Consulte o documento técnico anexo (\`fiery_scan_config.pdf\`) para orientações passo a passo detalhadas sobre o fluxo de configuração do Fiery Remote Scan.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1422;Nav=',
    attachments: [
      {
        name: 'fiery_scan_config.pdf',
        size: '1.4 MBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1422;FileID=4296'
      }
    ],
    visualRefs: [],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > APLICAÇÕES EFI (GRÁFICA) > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::APLICAÇÕES EFI (GRÁFICA)::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/02/2024 10:52 (Mayara Sales)',
      alterado: '16/09/2025 16:27 (Gabriel Queiroz Pires)',
      atualizadoEm: '16.09.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1422;Nav=',
      itemId: '1422'
    }
  },
  {
    id: 'faq-1000752',
    faqNumber: '1000752',
    name: 'Assistente Pimaco (BIC) – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do Assistente Pimaco (BIC)',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ASSISTENTE PIMACO (BIC)',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- Software utilizado para organizar, identificar, controlar e sinalizar etiquetas.
- Tela inicial do programa.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **X:\\Assistente Pimaco (BIC)**.
2. Clique em **Sim**.
3. Clique novamente em **Sim**.
4. Insira o número do chamado.
5. Clique em **OK**.
6. Clique novamente em **OK**.
7. Clique novamente em **OK**.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=752;Nav=',
    attachments: [
      {
        name: 'Assistente Pimaco (BIC) – Instalação.pdf',
        size: '287.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=752;FileID=13048'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=752;FileID=12847'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=752;FileID=12878'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=752;FileID=12881'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=752;FileID=12877'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=752;FileID=12879'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=752;FileID=12875'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=752;FileID=12880'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ASSISTENTE PIMACO (BIC) > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ASSISTENTE PIMACO (BIC)::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 14:13 (Mayara Sales)',
      alterado: '24/07/2025 08:55 (Mayara Sales)',
      atualizadoEm: '19.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=752;Nav=',
      itemId: '752'
    }
  },
  {
    id: 'faq-1000754',
    faqNumber: '1000754',
    name: 'Atuação Parlamentar (GEGAB)',
    type: 'Requisição de serviço',
    service: 'Instalação de software não homologado',
    subject: 'Informações sobre Atuação Parlamentar (GEGAB)',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'ATUAÇÃO PARLAMENTAR',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações Complementares

**OBSERVAÇÃO: PROCEDIMENTO REALIZADO PELO SUAPE**

---

### 📌 Observação Importante

**Observação:** A instalação do software QlikView Desktop é realizada exclusivamente pela equipe do SUAPE.

Antes de abrir o Dashboard do Atuação Parlamentar é necessário que o QlikView Desktop esteja instalado na máquina do usuário. Para efetuar a instalação do QlikView Desktop, siga as orientações abaixo:

---

### 📌 Informações e Orientações

- A solicitação deve ser registrada pelo chefe de serviço por meio da Central de Serviços.
- Efetuar um duplo clique no executável: \`QlikViewDesktop_x64Setup.exe\`. Escolher o idioma de instalação.
- Na tela inicial clicar no botão “Seguinte”.
- Escolher a opção “Aceito os termos do contrato de licença” e clicar no botão “Seguinte”.
- Na tela de informações do Cliente, deixar os campos em branco e clicar no botão “Seguinte”.
- Na tela da pasta de destino, deixar o caminho padrão sugerido pelo instalador e clicar no botão “Seguinte”.
- Na tela de tipo de configuração, selecionar a opção “Completa” e clicar no botão “Seguinte”.
- Na tela de pronto para instalar, clicar no botão “Instalar”.
- Dentro da pasta do Gabinete, localize a pasta Dashboards e entre nela.
- Efetue um duplo-clique no arquivo “Painel Gestão Gabinetes.qvd”.
- Por fim, basta clicar no botão verde “Carregar Dados” para que os dados da exportação do GEGAB sejam carregados no Dashboard.
- Pronto! Os dados do GEGAB no Atuação Parlamentar já estão prontos para serem consultados.

---

### 📌 Procedimento de Instalação e Execução

1. Após a instalação, a tela de conclusão será apresentada.
2. Para finalizar clique no botão **“Concluir”**.
3. Para abrir o Dashboard do Atuação Parlamentar que dá acesso aos dados que estavam no GEGAB quando da saída do Senador, entre na pasta do Gabinete.
4. Caso apareça o aviso de segurança, marque a opção **“Sim, desejo continuar (não recomendado)”** e clique no botão **“Continuar”**.
5. Caso apareça a mensagem sobre macros, selecione a opção **“Permitir Macros Seguras”** e clique no botão **“OK”**.
6. Caso o usuário queira abrir o painel direto da Área de Trabalho do Windows, basta criar um atalho: abra o Windows Explorer, vá na pasta onde se encontra o arquivo “Painel Gestão Gabinete.qvw”, clique com o botão direito, opção “Enviar para” e selecione “Área de trabalho (criar atalho)”.

---

### 📌 Permissão de Acesso

**Intranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.**`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=754;Nav=',
    attachments: [
      {
        name: 'Atuação Parlamentar (GEGAB).pdf',
        size: '539.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=754;FileID=15312'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=754;FileID=10158'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=754;FileID=14065'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=754;FileID=14069'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=754;FileID=14070'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=754;FileID=14060'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=754;FileID=14066'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=754;FileID=14068'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=754;FileID=14067'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=754;FileID=14064'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=754;FileID=14071'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=754;FileID=14061'
      },
      {
        title: 'Imagem 12',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=754;FileID=14062'
      },
      {
        title: 'Imagem 13',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=754;FileID=14059'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > ATUAÇÃO PARLAMENTAR > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ATUAÇÃO PARLAMENTAR::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 14:46 (Mayara Sales)',
      alterado: '25/11/2025 13:03 (Gabriel Queiroz Pires)',
      atualizadoEm: '25.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=754;Nav=',
      itemId: '754'
    }
  },
  {
    id: 'faq-1000756',
    faqNumber: '1000756',
    name: 'Audacity – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do Audacity',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'AUDACITY',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- Trata-se de um software livre para gravação e edição digital de áudio.
- Tela inicial do programa.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **X:\\Audacity (Audacity Team)**.
2. Clique em **Sim**.
3. Clique novamente em **Sim**.
4. Insira o número do chamado.
5. Clique em **OK**.
6. Selecione o idioma.
7. Clique em **OK**.
8. Clique em **Avançar**.
9. Clique novamente em **Avançar**.
10. Selecione a pasta de destino no micro.
11. Clique em **Avançar**.
12. Marque a opção **'Criar um ícone na área de Trabalho'**.
13. Clique em **Avançar**.
14. Clique em **Instalar**.
15. Aguarde o processo de instalação.
16. Clique em **Concluir**.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=756;Nav=',
    attachments: [
      {
        name: 'Audacity – Instalação.pdf',
        size: '498.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=756;FileID=12883'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=756;FileID=12849'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=756;FileID=12893'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=756;FileID=12884'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=756;FileID=12887'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=756;FileID=12894'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=756;FileID=12889'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=756;FileID=12892'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=756;FileID=12886'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=756;FileID=12890'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=756;FileID=12888'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=756;FileID=12891'
      },
      {
        title: 'Imagem 12',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=756;FileID=12882'
      },
      {
        title: 'Imagem 13',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=756;FileID=12885'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > AUDACITY > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::AUDACITY::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 15:03 (Mayara Sales)',
      alterado: '23/07/2025 12:28 (Mayara Sales)',
      atualizadoEm: '19.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=756;Nav=',
      itemId: '756'
    }
  },
  {
    id: 'faq-1000760',
    faqNumber: '1000760',
    name: 'Autodesk (AutoCAD) – Erro de Loop',
    type: 'Incidente',
    service: 'Suporte a Software de Estação de Trabalho',
    subject: 'Erro de Loop na Instalação do Autodesk',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'AUTOCAD',
    associatedProcedureId: 'proc-troubleshoot-workstation',
    procedure: `### 📌 Observação Importante

Antes de iniciar a instalação, adicione o login do técnico como administrador.
Crie manualmente na pasta \`C:\\USERS\` a pasta \`Public\`.
Crie as subpastas \`Desktop\`, \`Documents\` e \`Public Documents\` (Não pode haver erro de digitação).

---

### 📌 Informações e Orientações

- Em seguida, pode ser pesquisada a origem na página de Suporte do Autodesk.

---

### 📌 Procedimento de Correção

1. Após criar as pastas, favor seguir os procedimentos na seguinte ordem:
2. Reinicie o micro e desative/remova o antivírus temporariamente.
3. Execute o Script de Instalação.
4. Caso ocorra algum erro na instalação, o mesmo pode ser verificado nos logs que ficam na pasta \`C:\\AUTODESK\\logs\`.

---

### 🔗 Procedimentos e Links Relacionados

- [**Script de Instalação (FAQ 773)**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=773;Nav=)
- [**Suporte Oficial do Autodesk**](https://knowledge.autodesk.com/pt-br/support/autocad?sort=score)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=760;Nav=',
    attachments: [
      {
        name: 'Autodesk (AutoCAD) – Erro de Loop.pdf',
        size: '215.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=760;FileID=11212'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=760;FileID=9563'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > AUTOCAD > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::AUTOCAD::ERRO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 15:18 (Mayara Sales)',
      alterado: '16/09/2025 17:16 (Gabriel Queiroz Pires)',
      atualizadoEm: '19.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=760;Nav=',
      itemId: '760'
    }
  },
  {
    id: 'faq-1000773',
    faqNumber: '1000773',
    name: 'AutoDesk (AutoCAD) – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do AutoDesk (AutoCad)',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'AUTOCAD',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações Complementares

**OBSERVAÇÃO: PROCEDIMENTO REALIZADO PELO NÍVEL 2**

---

### 📌 Observação Importante

**Observação:** Antes de iniciar a instalação, consulte o documento [**Erro de Loop (FAQ#: 1000760)**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=760;Nav=).

---

### 📌 Informações e Orientações

- Temos outros softwares dentro da suíte da Autodesk que também fazem criação, modelagem e animação tridimensional como o 3DS MAX e o ReCap 360.
- A suíte AEC COLLECTION é composta pelos programas listados abaixo, tendo a opção de instalar todo o pacote ou individual já que os programas foram desmembrados:
  - Pasta 2022
  - Pasta 2023
  - Pasta 2024
- A suíte M&E Collection (Autodesk) é composta pelos programas listados abaixo, tendo a opção de instalar os programas individualmente.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **X:\\AEC Collection (Autodesk)**.
2. Execute os arquivos da pasta **X:\\M&E Collection (Autodesk)**.

---

### 📌 Permissão de Acesso

O AutoDesk necessita de autorização para sua instalação. A solicitação deverá ser aberta pelo Chefe de Setor via Central de Serviços:
**Intranet > Central de Serviços > Informática > Apoio a Aplicativos > Autorização de acesso a sistemas.**

---

### 🔗 Procedimentos e Links Relacionados

- [**Erro de Loop (FAQ#: 1000760)**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=760;Nav=)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=773;Nav=',
    attachments: [
      {
        name: 'AutoDesk (AutoCAD) – Instalação.pdf',
        size: '327.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=773;FileID=12896'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=773;FileID=10160'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=773;FileID=12852'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=773;FileID=12857'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=773;FileID=12856'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=773;FileID=12855'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=773;FileID=12895'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > AUTOCAD > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::AUTOCAD::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '17/01/2024 08:32 (Mayara Sales)',
      alterado: '23/07/2025 12:33 (Mayara Sales)',
      atualizadoEm: '19.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=773;Nav=',
      itemId: '773'
    }
  },
  {
    id: 'faq-10002370',
    faqNumber: '10002370',
    name: 'AutoDesk (AutoCAD) – Instalação do pacote de idiomas',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do pacote de idiomas',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'AUTOCAD',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Observações Importantes

- **Observação 1:** Certifique-se de que o cliente possua uma licença ativa dos produtos Autodesk antes de prosseguir.
- **Observação 2:** Após a instalação do idioma, o AutoCAD cria automaticamente um atalho correspondente ao idioma selecionado.
- **Observação sobre o Login:** Antes de iniciar o procedimento, é necessário adicionar o login do cliente ao grupo “Administradores”.

---

### 📌 Informações e Orientações

- Realize o LOGIN com (E-mail e Senha) institucionais do Senado Federal.

---

### 📌 Acesso e Utilização

1. Acesse sua conta na Autodesk Account em [**https://manage.autodesk.com**](https://manage.autodesk.com).
2. Acesse o menu: **“Produtos e serviços > Todos os produtos e serviços > Idiomas”**.
3. Selecione o **“Idioma”** desejado.
4. Clique em **“Instalar”** e em seguida **“Aceitar”**.
5. Aguarde o download do instalador.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo baixado e siga as instruções na tela.
2. Clique em **“Instalar”**.
3. Aguarde o processo de instalação.
4. Clique em **“Finalizar”**.
5. Clique no **“Menu Iniciar”**.
6. Selecione a **“Versão desejada”** através do novo atalho de idioma criado.

---

### 🔗 Procedimentos e Links Relacionados

- [**Portal Autodesk Account**](https://manage.autodesk.com/)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2370;Nav=',
    attachments: [
      {
        name: 'AutoDesk (AutoCAD) – Instalação do pacote de idiomas.pdf',
        size: '962.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2370;FileID=16496'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2370;FileID=16481'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2370;FileID=16482'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2370;FileID=16483'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2370;FileID=16484'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2370;FileID=16485'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2370;FileID=16486'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2370;FileID=16487'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2370;FileID=16488'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2370;FileID=16489'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2370;FileID=16490'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2370;FileID=16491'
      },
      {
        title: 'Imagem 12',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2370;FileID=16492'
      },
      {
        title: 'Imagem 13',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2370;FileID=16494'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > AUTOCAD > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::AUTOCAD::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: 'idiomas auto cad auto desk',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '10/06/2026 17:39 (Gabriel Queiroz Pires)',
      alterado: '11/06/2026 11:06 (Jeferson dos Santos Morais)',
      atualizadoEm: '11.06.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2370;Nav=',
      itemId: '2370'
    }
  },
  {
    id: 'faq-1000771',
    faqNumber: '1000771',
    name: 'DWG TrueView (AutoCAD) – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do software DWG TrueView',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'AUTOCAD',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- Ferramenta DWG TrueView apenas para visualização de arquivos com extensões do AutoCAD.
- Aceite os termos de licença.
- Tela inicial do programa.

---

### 📌 Procedimento de Instalação

1. Instale a versão de acordo com a arquitetura do sistema operacional instalado.
2. Execute o arquivo localizado em **X:\\DWG TrueView (AutoDesk)**.
3. Clique em **Sim**.
4. Clique novamente em **Sim**.
5. Insira o número do chamado.
6. Clique em **OK**.
7. Aguarde o processo de preparação e extração.
8. Clique em **"Next"**.
9. Clique em **"Install"**.
10. Aguarde o progresso de instalação.
11. Clique em **“Start”**.

---

### 📌 Permissão de Acesso

Pode ser instalado em qualquer equipamento institucional sem a necessidade de autorização prévia.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=771;Nav=',
    attachments: [
      {
        name: 'DWG TrueView (AutoCAD) – Instalação.pdf',
        size: '468.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=771;FileID=12899'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=771;FileID=12859'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=771;FileID=12897'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=771;FileID=12901'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=771;FileID=12900'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=771;FileID=12902'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=771;FileID=9571'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=771;FileID=9570'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=771;FileID=9574'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=771;FileID=12898'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=771;FileID=9575'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > AUTOCAD > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::AUTOCAD::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '16/01/2024 16:56 (Mayara Sales)',
      alterado: '23/07/2025 13:16 (Mayara Sales)',
      atualizadoEm: '19.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=771;Nav=',
      itemId: '771'
    }
  },
  {
    id: 'faq-1000778',
    faqNumber: '1000778',
    name: 'AvideMux – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do software AvideMux',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'AVIDEMUX',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- Trata-se de um software livre para edição de vídeos.
- Tela inicial do programa.

---

### 📌 Procedimento de Instalação

1. Instale a versão de acordo com a arquitetura do sistema operacional instalado.
2. Execute o arquivo localizado em **X:\\AvideMux (AvideMux Development Team)**.
3. Clique em **Sim**.
4. Clique novamente em **Sim**.
5. Insira o número do chamado.
6. Clique em **OK**.
7. Clique em **"Next"**.
8. Clique em **“I Agree”**.
9. Selecione o Tipo de Instalação **“Standard”**.
10. Clique em **"Next"**.
11. Marque a criação de atalhos que desejar.
12. Clique em **"Next"**.
13. Clique novamente em **"Next"**.
14. Clique em **"Install"**.
15. Aguarde o processo de instalação.
16. Marque as opções se desejar executar o aplicativo imediatamente.
17. Clique em **"Finish"**.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=778;Nav=',
    attachments: [
      {
        name: 'AvideMux – Instalação.pdf',
        size: '503.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=12914'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=12861'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=12913'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=12907'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=12906'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=12905'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=12904'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=12909'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=12908'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=12915'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=12903'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=12910'
      },
      {
        title: 'Imagem 12',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=12912'
      },
      {
        title: 'Imagem 13',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=12911'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > AVIDEMUX > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::AVIDEMUX::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '17/01/2024 10:03 (Mayara Sales)',
      alterado: '23/07/2025 13:31 (Mayara Sales)',
      atualizadoEm: '19.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=778;Nav=',
      itemId: '778'
    }
  },
  {
    id: 'faq-1000779',
    faqNumber: '1000779',
    name: 'Basic Miktex-x32 – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do Basic Miktex-x32',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'BASIC-MIKTEX',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- Sistema de composição, destinado a criar livros e artigos com fórmulas matemáticas complexas.
- Fornece as ferramentas necessárias para preparar documentos usando a linguagem de marcação TeX / LaTeX, bem como um simples editor de texto.
- Consiste numa implementação do sistema TeX e um conjunto de programas relacionados.
- **Recomendação importante:** Para o correto funcionamento da ferramenta, recomenda-se a instalação do Basic Miktex em conjunto com o **[TeXstudio – Instalação (FAQ#: 1000784)](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=784;Nav=)**.
- Aceite os termos.
- Altere a opção **“Install missing packages on the-fly”** para **“Yes”**.
- Tela inicial do programa.

---

### 📌 Procedimento de Instalação

1. Instale a versão de acordo com a arquitetura do sistema operacional instalado (32-bit).
2. Execute o arquivo localizado em **X:\\Basic-miktex-x32 (Miktex Software)**.
3. Clique em **Sim**.
4. Clique novamente em **Sim**.
5. Insira o número do chamado.
6. Clique em **OK**.
7. Clique em **Avançar**.
8. Clique novamente em **Avançar**.
9. Clique novamente em **Avançar**.
10. Clique novamente em **Avançar**.
11. Clique em **"Start"**.
12. Aguarde o progresso de instalação.
13. Clique em **Avançar**.
14. Clique novamente em **Avançar**.
15. Clique em **"Close"**.

---

### 🔗 Procedimentos e Links Relacionados

- [**TeXstudio – Instalação (FAQ#: 1000784)**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=784;Nav=)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=779;Nav=',
    attachments: [
      {
        name: 'Basic Miktex-x32 – Instalação.pdf',
        size: '464.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12973'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12976'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12969'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12970'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12967'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12964'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12963'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12971'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12962'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12975'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12968'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12974'
      },
      {
        title: 'Imagem 12',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12972'
      },
      {
        title: 'Imagem 13',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12966'
      },
      {
        title: 'Imagem 14',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=12965'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > BASIC-MIKTEX > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::BASIC-MIKTEX::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '17/01/2024 11:08 (Mayara Sales)',
      alterado: '23/07/2025 15:45 (Mayara Sales)',
      atualizadoEm: '20.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=779;Nav=',
      itemId: '779'
    }
  },
  {
    id: 'faq-1000780',
    faqNumber: '1000780',
    name: 'Basic Miktex-x64 – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do Basic Miktex-x64',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'BASIC-MIKTEX',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- Sistema de composição, destinado a criar livros e artigos com fórmulas matemáticas complexas.
- Fornece as ferramentas necessárias para preparar documentos usando a linguagem de marcação TeX / LaTeX, bem como um simples editor de texto.
- Consiste numa implementação do sistema TeX e um conjunto de programas relacionados.
- **Recomendação importante:** Para o correto funcionamento da ferramenta, recomenda-se a instalação do Basic Miktex em conjunto com o **[TeXstudio – Instalação (FAQ#: 1000784)](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=784;Nav=)**.
- Aceite os termos.
- Altere a opção **“Install missing packages on the-fly”** para **“Yes”**.
- Tela inicial do programa.

---

### 📌 Procedimento de Instalação

1. Instale a versão de acordo com a arquitetura do sistema operacional instalado (64-bit).
2. Execute o arquivo localizado em **X:\\Basic-miktex-x64 (Miktex Software)**.
3. Clique em **Sim**.
4. Clique novamente em **Sim**.
5. Insira o número do chamado.
6. Clique em **OK**.
7. Clique em **Avançar**.
8. Clique novamente em **Avançar**.
9. Clique novamente em **Avançar**.
10. Clique novamente em **Avançar**.
11. Clique em **"Start"**.
12. Aguarde o progresso de instalação.
13. Clique em **Avançar**.
14. Clique novamente em **Avançar**.
15. Clique em **"Close"**.

---

### 🔗 Procedimentos e Links Relacionados

- [**TeXstudio – Instalação (FAQ#: 1000784)**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=784;Nav=)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=780;Nav=',
    attachments: [
      {
        name: 'Basic Miktex-x64 – Instalação.pdf',
        size: '465.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12951'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12959'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12948'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12958'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12961'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12956'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12955'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12950'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12953'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12952'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12949'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12960'
      },
      {
        title: 'Imagem 12',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12954'
      },
      {
        title: 'Imagem 13',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12947'
      },
      {
        title: 'Imagem 14',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=12957'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > BASIC-MIKTEX > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::BASIC-MIKTEX::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '17/01/2024 11:20 (Mayara Sales)',
      alterado: '23/07/2025 15:20 (Mayara Sales)',
      atualizadoEm: '20.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=780;Nav=',
      itemId: '780'
    }
  },
  {
    id: 'faq-1000546',
    faqNumber: '1000546',
    name: 'Certificado Digital Bird ID - Como Emitir e Utilizar (Manual)',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Como emitir e utilizar seu Bird ID (Manual)',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CERTIFICADO DIGITAL',
    associatedProcedureId: 'proc-troubleshoot-workstation',
    procedure: `### 📌 Informações Complementares

**OBSERVAÇÃO: PROCEDIMENTO EM ANEXO**

Consulte o arquivo oficial anexado abaixo para visualizar o manual passo a passo de emissão e utilização do Certificado Digital Bird ID no Senado Federal.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=546;Nav=',
    attachments: [
      {
        name: 'Certificado Digital Bird ID - Como Emitir e Utilizar (Manual).pdf',
        size: '10.4 MBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=546;FileID=9747'
      }
    ],
    visualRefs: [],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '29/08/2023 15:51 (Jeferson dos Santos Morais)',
      alterado: '16/09/2025 19:47 (Gabriel Queiroz Pires)',
      atualizadoEm: '24.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=546;Nav=',
      itemId: '546'
    }
  },
  {
    id: 'faq-1000550',
    faqNumber: '1000550',
    name: 'Certificado Digital Bird ID - Redefinir a Senha do Aplicativo',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Solicita a redefinição da senha do aplicativo Bird ID',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CERTIFICADO DIGITAL',
    associatedProcedureId: 'proc-troubleshoot-workstation',
    procedure: `### 📌 Informações Complementares

**OBSERVAÇÃO: PROCEDIMENTO EM ANEXO**

Consulte o arquivo oficial anexado abaixo para o guia ilustrado com as orientações para recuperação e redefinição de senha do aplicativo Bird ID.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=550;Nav=',
    attachments: [
      {
        name: 'Certificado Digital Bird ID - Redefinir a Senha do Aplicativo.PDF',
        size: '409.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=550;FileID=9748'
      }
    ],
    visualRefs: [],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/08/2023 11:00 (Jeferson dos Santos Morais)',
      alterado: '24/02/2025 13:31 (Mayara Sales)',
      atualizadoEm: '24.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=550;Nav=',
      itemId: '550'
    }
  },
  {
    id: 'faq-1000551',
    faqNumber: '1000551',
    name: 'Certificado Digital Bird ID - Solicitação e Renovação',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Solicita instalação do Certificado Digital Bird ID',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CERTIFICADO DIGITAL',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- **SUAPE:** O chamado deve ser direcionado para a equipe do **SERETI**.
- A equipe do **SERETI** ficará responsável por encaminhar o passo a passo para o cliente adquirir o "voucher".
- **Emissão do certificado digital Bird ID:** Procedimento realizado exclusivamente pelo próprio cliente.
- **Roteiro Emissão/Configuração do Certificado:** Encaminhe para o cliente o [**Manual de Emissão e Utilização (FAQ 546)**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=546;Nav=).
- Oriente o cliente a realizar a instalação do aplicativo Bird ID no smartphone para dar prosseguimento na instalação do certificado digital:
  - [**Aplicativo Bird ID para iOS (App Store)**](https://apps.apple.com/br/app/birdid/id1450002184)
  - [**Aplicativo Bird ID para Android (Google Play)**](https://play.google.com/store/apps/details?id=br.com.vaultid.apps.authenticator&hl=pt_BR&gl=US)
  - Consulte também o procedimento complementar: [**Certificado Digital Bird ID - Instalação (FAQ 549)**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=549;Nav=).
- **Validade:** A data de validade do certificado é visualizada pelo aplicativo do Bird ID através da opção **“Meu plano”**.

---

### 📌 Procedimento de Instalação e Renovação

1. Para instalação e utilização do Certificado Digital Bird ID, é necessário que o cliente obtenha o “voucher” através da Central de Serviços para iniciar o processo.
2. Para renovação do Certificado Digital Bird ID, o caminho é o mesmo. Ao clicar na opção de solicitação do certificado será exibida a tela de solicitação, na qual a opção de renovação está destacada.

---

### 📌 Acesso e Utilização

Acesse pelo caminho na Intranet:
**Intranet > Central de Serviços > Polícia e Segurança > Certificados Digitais > Solicitação de Certificado Digital ICP-Brasil.**

---

### 🔗 Procedimentos e Links Relacionados

- [**Manual de Emissão e Utilização (FAQ 546)**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=546;Nav=)
- [**Aplicativo iOS (App Store)**](https://apps.apple.com/br/app/birdid/id1450002184)
- [**Aplicativo Android (Google Play)**](https://play.google.com/store/apps/details?id=br.com.vaultid.apps.authenticator&hl=pt_BR&gl=US)
- [**Certificado Digital Bird ID - Instalação (FAQ 549)**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=549;Nav=)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=551;Nav=',
    attachments: [
      {
        name: 'Certificado Digital Bird ID - Solicitação e Renovação.pdf',
        size: '343.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=551;FileID=16012'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=551;FileID=15698'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=551;FileID=15697'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=551;FileID=15699'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/08/2023 11:12 (Jeferson dos Santos Morais)',
      alterado: '10/03/2026 12:04 (Jeferson dos Santos Morais)',
      atualizadoEm: '05.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=551;Nav=',
      itemId: '551'
    }
  },
  {
    id: 'faq-10001762',
    faqNumber: '10001762',
    name: 'Certificado Digital Bird ID – Assinar PDF',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Assinatura de documento com o certificado digital Bird ID',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CERTIFICADO DIGITAL',
    associatedProcedureId: 'proc-troubleshoot-workstation',
    procedure: `### 📌 Observação Importante

**Observação:** Além do certificado Bird ID, este procedimento também funciona com o certificado digital interno.

---

### 📌 Informações e Orientações

- Novas opções serão apresentadas no menu 'Certificados'.
- Uma janela de alerta será exibida informando como marcar a área de assinatura. Não é recomendado selecionar a caixa para não mostrar a mensagem novamente, pois este pequeno tutorial pode auxiliar os usuários caso esqueçam de como funciona esta ferramenta.
- O cursor mudará para um formato de cruz, de modo a demarcar o espaço onde ficará a assinatura. Escolha o ponto de início.
- Uma pré-visualização da assinatura será exibida se tudo estiver correto.
- Uma nova janela será aberta para indicar o local para salvar o novo documento, já no formato PDF e devidamente assinado.
- Se a assinatura foi realizada com o certificado digital interno, basta inserir a senha do mesmo.
- A assinatura será exibida com êxito no documento.

---

### 📌 Acesso e Utilização

1. Abra o documento PDF com o **Adobe Acrobat Reader**.
2. Selecione **Ferramentas > Certificados**.

---

### 📌 Procedimento de Assinatura

1. Clique em **“Assinar Digitalmente”**.
2. Clique apenas em **OK** na mensagem de orientação.
3. Clique e segure o botão esquerdo do mouse, arraste para formar a área de assinatura e solte o botão esquerdo em seguida.
4. Caso a tela de configuração seja exibida, clique em **“Configurar ID digital”** para que os certificados sejam exibidos.
5. Selecione o certificado **Bird ID** (ou certificado digital interno).
6. Clique em **Continuar**.
7. Clique em **Assinar**.
8. Selecione a pasta desejada no computador.
9. Clique em **Salvar**.
10. Digite o código **OTP** gerado no aplicativo Bird ID do smartphone.
11. Clique em **“Autenticar”**.
12. Clique em **“Permitir”** para prosseguir com a validação.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1762;Nav=',
    attachments: [
      {
        name: 'Certificado Digital Bird ID – Assinar PDF.pdf',
        size: '511.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=11244'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=9767'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=9766'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=9759'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=9763'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=9757'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=9764'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=9762'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=9753'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=9755'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=9761'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1762;FileID=9754'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
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
    id: 'faq-1000549',
    faqNumber: '1000549',
    name: 'Certificado Digital Bird ID – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do Certificado Digital Bird ID',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CERTIFICADO DIGITAL',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Observações Importantes

- **Observação 1:** Para seguir com a instalação, é necessária a confirmação do usuário se o app do BirdID está instalado e configurado em seu Smartphone. Este procedimento é realizado exclusivamente pelo usuário.
- **Observação 2:** Acesse o caminho **W:\\COATEN\\SEARP\\Certificados\\BirdID-Desktop** e copie o executável para o micro do usuário.
- **Observação 3:** Certificado digital fornecido pelo Senado Federal.
- **Observação 4:** O usuário consegue confirmar o funcionamento do seu certificado digital acessando o **Portal eCAC**.

---

### 📌 Informações e Orientações

- **Requisito:** Windows 8 ou superior.
- Alternativamente, realize o download diretamente da página do fabricante: [soluti.com.br/certificado-bird-id/](https://soluti.com.br/certificado-bird-id/) ou [birdid.com.br/](https://birdid.com.br/).
- Clique na opção “Windows”.
- Defina um nome identificador para o seu computador.
- Na próxima tela, insira as credenciais solicitadas.
- Certificado instalado e autenticado com sucesso.

---

### 📌 Procedimento de Instalação

1. Selecione a versão correspondente ao sistema operacional.
2. Após o download, execute a instalação como usuário diferente (usando credenciais com privilégios administrativos).
3. Clique em **OK**.
4. Aguarde o processo de instalação.
5. Clique em **Concluir**.
6. Clique em **Registrar**.
7. Aguarde a inicialização do módulo.
8. Clique em **Registrar**.
9. Clique em **Entrar com gov.br**.
10. Clique em **'Seu certificado digital'**.
11. Selecione o certificado.
12. Clique em **OK**.
13. Digite o código OTP gerado em seu celular para autenticar.

---

### 📌 Credenciais de Acesso

Insira o login e senha do perfil **_INS** (técnico/administrador).

---

### 🔗 Procedimentos e Links Relacionados

- [**Página Oficial Soluti (Bird ID)**](https://soluti.com.br/certificado-bird-id/)
- [**Portal Bird ID**](https://birdid.com.br/)
- [**Portal e-CAC (Receita Federal)**](https://cav.receita.fazenda.gov.br/autenticacao/login)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=549;Nav=',
    attachments: [
      {
        name: 'Certificado Digital Bird ID – Instalação.pdf',
        size: '930.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=13117'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=13116'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=13112'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=13113'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=13107'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=13114'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=13106'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=13110'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=13111'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=13109'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=13108'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=13115'
      },
      {
        title: 'Imagem 12',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=9738'
      },
      {
        title: 'Imagem 13',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=9740'
      },
      {
        title: 'Imagem 14',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=9733'
      },
      {
        title: 'Imagem 15',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=549;FileID=9736'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/08/2023 10:55 (Jeferson dos Santos Morais)',
      alterado: '27/02/2026 11:52 (Gabriel Queiroz Pires)',
      atualizadoEm: '24.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=549;Nav=',
      itemId: '549'
    }
  },
  {
    id: 'faq-10002277',
    faqNumber: '10002277',
    name: 'Certificado Digital Certdata – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do Certificado Digital Certdata',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CERTIFICADO DIGITAL',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações Complementares

**OBSERVAÇÃO: PROCEDIMENTO REALIZADO PELO NÍVEL 2**

---

### 📌 Informações e Orientações

- Gerenciador de Instalação Certdata: Instalar componente 01.
- Gerenciador de Instalação Certdata: Instalar componente 02.
- Gerenciador de Instalação Certdata: Instalar componente 03.
- Aceite os termos de licença.
- Instalar o SafeSign no Navegador Firefox (*Observação: Caso o cliente tenha o Navegador Firefox Instalado*).
- Gerenciador de Instalação Certdata: Instalar componente 04.
- Instalação do SafeNet.
- Aceite os termos.
- Instalando o PJE-Office.
- Atualização do PJE-Office.
- Teste seu Certificado.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **BIBLIOTECA_SETORIAL (\\\\DRU) (W:) COATEN\\SEARP\\Certificados\\Certificado Certdata**.
2. Execute o arquivo de instalação correspondente à versão do certificado digital.
3. Clique em **Avançar**.
4. Selecione o idioma.
5. Clique em **OK**.
6. Clique em **Avançar**.
7. Clique novamente em **Avançar**.
8. Clique novamente em **Avançar**.
9. Clique novamente em **Avançar**.
10. Clique em **Instalar**.
11. Clique em **Concluir**.
12. Clique em **Next**.
13. Clique novamente em **Next**.
14. Clique novamente em **Next**.
15. Clique novamente em **Next**.
16. Clique em **Install**.
17. Clique em **Finish**.
18. Aguarde a instalação dos componentes do SafeNet.
19. Clique em **Sim**.
20. Clique em **Avançar**.
21. Clique em **Instalar**.
22. Clique em **Concluir**.
23. Clique em **Baixar e Instalar**.
24. Clique em **Instalar**.
25. Clique em **Concluir**.
26. Clique em **Sair**.

---

### 📌 Acesso e Utilização

1. Acesse o link: [**certdata.com.br**](https://certdata.com.br/).
2. Selecione o certificado desejado para download e validação.

---

### 🔗 Procedimentos e Links Relacionados

- [**Portal Certdata**](https://certdata.com.br/)`,
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
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15087' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15088' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15089' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15090' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15091' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15092' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15093' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15094' },
      { title: 'Imagem 10', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15095' },
      { title: 'Imagem 11', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15096' },
      { title: 'Imagem 12', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15097' },
      { title: 'Imagem 13', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15098' },
      { title: 'Imagem 14', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15099' },
      { title: 'Imagem 15', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15100' },
      { title: 'Imagem 16', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15101' },
      { title: 'Imagem 17', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15102' },
      { title: 'Imagem 18', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15103' },
      { title: 'Imagem 19', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15104' },
      { title: 'Imagem 20', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15105' },
      { title: 'Imagem 21', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15106' },
      { title: 'Imagem 22', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15107' },
      { title: 'Imagem 23', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15108' },
      { title: 'Imagem 24', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15109' },
      { title: 'Imagem 25', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15110' },
      { title: 'Imagem 26', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15111' },
      { title: 'Imagem 27', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15112' },
      { title: 'Imagem 28', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15113' },
      { title: 'Imagem 29', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15114' },
      { title: 'Imagem 30', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15115' },
      { title: 'Imagem 31', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15116' },
      { title: 'Imagem 32', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15117' },
      { title: 'Imagem 33', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15118' },
      { title: 'Imagem 34', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15119' },
      { title: 'Imagem 35', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15120' },
      { title: 'Imagem 36', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15121' },
      { title: 'Imagem 37', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15122' },
      { title: 'Imagem 38', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15123' },
      { title: 'Imagem 39', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15124' },
      { title: 'Imagem 40', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15125' },
      { title: 'Imagem 41', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15126' },
      { title: 'Imagem 42', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15127' },
      { title: 'Imagem 43', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15128' },
      { title: 'Imagem 44', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15129' },
      { title: 'Imagem 45', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15130' },
      { title: 'Imagem 46', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15131' },
      { title: 'Imagem 47', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2277;FileID=15132' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
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
    id: 'faq-10001213',
    faqNumber: '10001213',
    name: 'Certificado Digital SafeNet e-gov (Token) – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do Driver do Token - SafeNet e-gov',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CERTIFICADO DIGITAL',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Observação Importante

**Observação:** Certificado digital particular.

---

### 📌 Informações e Orientações

- Baixe a Cadeia de Certificados na Autoridade Certificadora SERPRO.
- Ou instale direto do caminho: **W:\\COATEN\\SEARP\\Certificados\\Certificado Compras Net\\Cadeia de Certificado**.
- Utilização do **ASSINADOR LIVRE**.
- Em 'Arquivo de entrada', procure qualquer arquivo PDF para teste.

---

### 📌 Procedimento de Instalação

1. Instale o driver disponível em **W:\\COATEN\\SEARP\\Certificados\\Certificado Compras Net\\Token SafeNet e-gov**.
2. Instale os três certificados identificados direcionando para o caminho de repositórios de certificados do navegador: **Abrir > Instalar certificado > Avançar > Avançar > Concluir**.
3. Verifique no caminho **Opções de Internet > Conteúdo > Certificado** se o certificado está listado no navegador.
4. Execute o arquivo localizado em **X:\\Assinador Livre** (TJRJ) e efetue o teste do certificado.
5. Clique em **Assinar** para efetuar o teste de assinatura. Verifique se corresponde ao certificado correto; se aparecer o certificado correspondente, o token funcionará normalmente.
6. Clique em **Assinar** para concluir a validação.

---

### 🔗 Procedimentos e Links Relacionados

- [**Cadeia de Certificados AR SERPRO**](https://certificados.serpro.gov.br/arserpro/pages/information/certificate_chain.jsf)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1213;Nav=',
    attachments: [
      {
        name: 'Certificado Digital SafeNet e-gov (Token) – Instalação.pdf',
        size: '242.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1213;FileID=13063'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1213;FileID=13064'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1213;FileID=13060'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1213;FileID=13061'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1213;FileID=13065'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1213;FileID=13062'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '31/01/2024 14:14 (Mayara Sales)',
      alterado: '10/03/2026 18:05 (Gabriel Queiroz Pires)',
      atualizadoEm: '24.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1213;Nav=',
      itemId: '1213'
    }
  },
  {
    id: 'faq-10001217',
    faqNumber: '10001217',
    name: 'Certificado Digital SafeSign (OAB) – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do Drive do Token OAB',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CERTIFICADO DIGITAL',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Observação Importante

**Observação:** Certificado digital particular.

---

### 📌 Informações e Orientações

- Aceite os termos de licença durante o assistente.
- Utilização do **ASSINADOR LIVRE**.
- Em 'Arquivo de entrada', procure qualquer arquivo PDF para teste.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo **3.0.124** localizado em **W:\\COATEN\\SEARP\\Certificados\\Certificado OAB**. Instale o driver correspondente à versão/arquitetura do sistema operacional.
2. Selecione o idioma.
3. Clique em **OK**.
4. Clique em **Avançar**.
5. Clique novamente em **Avançar**.
6. Clique novamente em **Avançar**.
7. Clique novamente em **Avançar**.
8. Clique em **Instalar**.
9. Aguarde o processo de instalação.
10. Clique em **Concluir**.
11. Execute o arquivo localizado em **X:\\Assinador Livre** (TJRJ) para efetuar o teste do certificado.
12. Clique em **Assinar** para efetuar o teste de assinatura. Verifique se corresponde ao certificado correto; se aparecer o certificado correspondente, o token funcionará normalmente.
13. Clique em **Assinar** para validar a funcionalidade.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1217;Nav=',
    attachments: [
      {
        name: 'Certificado Digital SafeSign (OAB) – Instalação.pdf',
        size: '449.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1217;FileID=13093'
      }
    ],
    visualRefs: [
      {
        title: 'Imagem 1',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1217;FileID=13088'
      },
      {
        title: 'Imagem 2',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1217;FileID=13089'
      },
      {
        title: 'Imagem 3',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1217;FileID=13082'
      },
      {
        title: 'Imagem 4',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1217;FileID=13092'
      },
      {
        title: 'Imagem 5',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1217;FileID=13087'
      },
      {
        title: 'Imagem 6',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1217;FileID=13086'
      },
      {
        title: 'Imagem 7',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1217;FileID=13084'
      },
      {
        title: 'Imagem 8',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1217;FileID=13083'
      },
      {
        title: 'Imagem 9',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1217;FileID=13090'
      },
      {
        title: 'Imagem 10',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1217;FileID=13091'
      },
      {
        title: 'Imagem 11',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1217;FileID=13085'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '31/01/2024 14:51 (Mayara Sales)',
      alterado: '10/03/2026 18:04 (Gabriel Queiroz Pires)',
      atualizadoEm: '25.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1217;Nav=',
      itemId: '1217'
    }
  },
  {
    id: 'faq-10001682',
    faqNumber: '10001682',
    name: 'Certificado Digital Serpro – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do software Instalador Certificado (Serpro)',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CERTIFICADO DIGITAL',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Observação Importante

**Antes de realizar este procedimento é necessário realizar a [Neoid (Serpro) – Instalação](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=935).**

---

### 📌 Informações e Orientações

- Tela Inicial do programa de instalação Serpro.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **X:\\InstaladorCertificado (Serpro)**.
2. Clique em **Sim** para autorizar a execução.
3. Clique novamente em **Sim** na confirmação de instalação.
4. Insira o número do chamado.
5. Clique em **OK**.
6. Clique em **Próximo**.
7. Clique novamente em **Próximo**.
8. Clique novamente em **Próximo**.
9. Clique em **Instalar**.
10. Aguarde o processo de instalação.
11. Clique em **Concluir**.
12. Clique em **Continuar**.
13. Aguarde a conclusão do processo.
14. Clique em **Executar**.

---

### 🔗 Procedimentos e Links Relacionados

- [**Neoid (Serpro) – Instalação**](https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=935)`,
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
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12185' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12191' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12195' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12183' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12186' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12192' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12181' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12187' },
      { title: 'Imagem 10', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12189' },
      { title: 'Imagem 11', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12190' },
      { title: 'Imagem 12', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12188' },
      { title: 'Imagem 13', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12194' },
      { title: 'Imagem 14', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1682;FileID=12184' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
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
    id: 'faq-10001214',
    faqNumber: '10001214',
    name: 'Certificado Digital StarSign Crypto (Token) – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do driver do Token - StarSign Crypto',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CERTIFICADO DIGITAL',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Observação Importante

**Observação:** Certificado digital particular.

---

### 📌 Informações e Orientações

- Disponível para sistemas operacionais de 32 Bits e 64 Bits.
- Baixe a Cadeia de Certificados no portal do SERPRO.
- Ou instale direto do caminho: **W:\\COATEN\\SEARP\\Certificados\\Certificado Compras Net\\Cadeia de Certificado**.
- Utilização do **ASSINADOR LIVRE**.
- Em 'Arquivo de entrada', procure qualquer arquivo PDF para teste.

---

### 📌 Procedimento de Instalação

1. Instale o driver correspondente à versão do sistema operacional em **W:\\COATEN\\SEARP\\Certificados\\Certificado Compras Net\\Token StarSign Crypto**.
2. Instale os três certificados identificados direcionando para o repositório de certificados do navegador: **Abrir > Instalar certificado > Avançar > Avançar > Concluir**.
3. Verifique no caminho **Opções de Internet > Conteúdo > Certificados** se o certificado está listado no navegador.
4. Execute o arquivo localizado em **X:\\Assinador Livre** (TJRJ) e efetue o teste do certificado.
5. Clique em **Assinar** para efetuar o teste de assinatura. Verifique se corresponde ao certificado correto; se aparecer o certificado correspondente, o Token funcionará normalmente.
6. Clique em **Assinar** para confirmar a emissão da assinatura.

---

### 🔗 Procedimentos e Links Relacionados

- [**Cadeia de Certificados AR SERPRO**](https://certificados.serpro.gov.br/arserpro/pages/information/certificate_chain.jsf)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1214;Nav=',
    attachments: [
      {
        name: 'Certificado Digital StarSign Crypto (Token) – Instalação.pdf',
        size: '271.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1214;FileID=13070'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1214;FileID=13068' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1214;FileID=13073' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1214;FileID=13069' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1214;FileID=13071' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1214;FileID=13072' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1214;FileID=13067' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1214;FileID=13066' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '31/01/2024 14:22 (Mayara Sales)',
      alterado: '10/03/2026 18:07 (Gabriel Queiroz Pires)',
      atualizadoEm: '24.02.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1214;Nav=',
      itemId: '1214'
    }
  },
  {
    id: 'faq-10001219',
    faqNumber: '10001219',
    name: 'Certificado Digital Web Signer (Plug-in) – Instalação',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita informações sobre o Plug-in Web Signer',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CERTIFICADO DIGITAL',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Observação Importante

- **Observação 1:** Além da instalação do plug-in no navegador e do driver correto do token utilizado, é preciso realizar a instalação do software desktop Web Signer (**WebSignerSetup_pt-BR.msi**) no computador do usuário.
- **Observação 2:** Certificado digital particular.

---

### 📌 Informações e Orientações

- O plug-in é necessário para acessar alguns sites, realizar consultas processuais e utilizar certificados para assinaturas digitais em tribunais estaduais (Exemplo: [tjam.jus.br](https://www.tjam.jus.br/)).
- O plug-in é compatível com o navegador Microsoft Edge e Google Chrome.
- A instalação é realizada através do acesso à página do Web Signer; a página identifica o navegador e apresenta o link para instalação diretamente da loja/gerenciador de extensões.
- O fabricante não disponibiliza o download de arquivo .exe tradicional, operando via pacote .msi e extensão do navegador.
- Aceite os termos para concluir a instalação do Web Signer.

---

### 📌 Acesso e Utilização no Navegador

1. Acesse a página para [**Instalação Softplan Web Signer**](http://websigner.softplan.com.br/Setup).
2. Clique em **Adicionar Softplan Web Signer na Chrome Store** (ou Edge Add-ons).
3. Clique em **Obter extensão**.
4. Clique em **Adicionar extensão**.
5. Se o download do instalador nativo (.msi) não iniciar automaticamente, clique no local indicado na página para realizá-lo.

---

### 📌 Procedimento de Instalação do Pacote Desktop

1. Verifique na pasta de “Downloads" do Windows Explorer ou do próprio navegador o arquivo **WebSignerSetup_pt-BR.msi**.
2. Execute o instalador do plug-in.
3. Clique em **Instalar**.
4. Aguarde o processo de instalação.
5. Clique em **Concluir**.
6. Para instalação em outros navegadores, siga o fluxo de atendimento correspondente.

---

### 🔗 Procedimentos e Links Relacionados

- [**Tribunal de Justiça do Amazonas (TJAM)**](https://www.tjam.jus.br/)
- [**Instalação Softplan Web Signer**](http://websigner.softplan.com.br/Setup)`,
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
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16245' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16247' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16241' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16251' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16240' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16249' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16250' },
      { title: 'Imagem 10', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16239' },
      { title: 'Imagem 11', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16252' },
      { title: 'Imagem 12', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16244' },
      { title: 'Imagem 13', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1219;FileID=16242' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: 'web signer certificado particular navegadores',
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
    id: 'faq-10002328',
    faqNumber: '10002328',
    name: 'Certificados digitais',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Informações sobre certificados digitais',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CERTIFICADO DIGITAL',
    associatedProcedureId: 'proc-support-doubt',
    procedure: `### 📌 Informações e Orientações

**Certificados digitais fornecidos pelo Senado Federal:**
- [**Bird ID**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=551;Nav=)
- [**Interno (SIGAD)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1402;Nav=)
- [**Interno em equipamento particular (SIGAD)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1040;Nav=)

---

**Certificados digitais particulares suportados:**
- [**Certdata**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2277;Nav=)
- [**OAB**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1218;Nav=)
- [**SafeNet e-gov**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1213;Nav=)
- [**SafeSign (OAB)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1217;Nav=)
- [**SERPRO**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1682;Nav=)
- [**StarSign Crypto (Token)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1214;Nav=)
- [**Web Signer (Plug-in)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1219;Nav=)

---

### 🔗 Procedimentos e Links Relacionados

- [**Bird ID (FAQ 551)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=551;Nav=)
- [**Interno - SIGAD (FAQ 1402)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1402;Nav=)
- [**Interno em equipamento particular - SIGAD (FAQ 1040)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1040;Nav=)
- [**Certdata (FAQ 2277)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2277;Nav=)
- [**OAB (FAQ 1218)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1218;Nav=)
- [**SafeNet e-gov (FAQ 1213)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1213;Nav=)
- [**SafeSign - OAB (FAQ 1217)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1217;Nav=)
- [**SERPRO (FAQ 1682)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1682;Nav=)
- [**StarSign Crypto - Token (FAQ 1214)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1214;Nav=)
- [**Web Signer - Plug-in (FAQ 1219)**](https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1219;Nav=)`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2328;Nav=',
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: 'certificado digital',
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
    type: 'Requisição de serviço',
    service: 'Instalação de software licenciado',
    subject: 'Solicita a instalação do Cliente Oracle 19c',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CLIENTE ORACLE',
    associatedProcedureId: 'proc-install-licensed',
    procedure: `### 📌 Informações e Orientações

O **Cliente Oracle** é um software essencial para acessar bancos de dados Oracle no ambiente do Senado Federal. É amplamente utilizado por soluções e sistemas corporativos desenvolvidos pelo Prodasen.

---

### 📌 Procedimento de Instalação

1. Execute o instalador localizado na rede em: **X:\\Cliente Oracle 19C (Oracle)**.
2. Clique em **Sim** na janela de Controle de Conta de Usuário.
3. Clique novamente em **Sim** para confirmar o início da instalação.
4. Aguarde o processo silencioso/assistido de Instalação.
5. Ao finalizar, clique em **OK**.`,
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
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2282;FileID=16732' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2282;FileID=16735' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2282;FileID=16733' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2282;FileID=16736' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CLIENTE ORACLE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CLIENTE ORACLE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
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
    type: 'Requisição de serviço',
    service: 'Instalação de software licenciado',
    subject: 'Solicita a instalação do Cliente Oracle 23AI',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CLIENTE ORACLE',
    associatedProcedureId: 'proc-install-licensed',
    procedure: `### 📌 Observação Importante

⚠️ **IMPORTANTE:** A instalação do Cliente Oracle 23AI instala um arquivo **TNSNAMES.ORA** padrão. Caso o usuário tenha um **TNSNAMES personalizado**, faça **BACKUP** desse arquivo antes de desinstalar a versão anterior ou prosseguir. Está disponível para o Oracle 23AI somente a versão em **64 Bits**.

---

### 📌 Informações e Orientações

O **Cliente Oracle 23AI** é o software de conectividade para acessar instâncias de bancos de dados Oracle, utilizado por ferramentas e softwares desenvolvidos pelo Prodasen.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em: **CENTRAL_ATENDIMENTO (\\\\DRU) (X:) Cliente Oracle 23AI (Oracle)**.
2. Clique em **Sim** na janela de controle de privilégios.
3. Clique novamente em **Sim** para confirmar a instalação.
4. Aguarde o processo de cópia e configuração de pacotes.
5. Ao concluir o script no terminal/assistente, pressione **qualquer tecla para continuar...**`,
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
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2283;FileID=15238' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2283;FileID=15235' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2283;FileID=15237' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2283;FileID=15239' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CLIENTE ORACLE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CLIENTE ORACLE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
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
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do complemento Oracle Client for Microsoft Tools',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CLIENTE ORACLE',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações Complementares

**OBSERVAÇÃO: PROCEDIMENTO REALIZADO PELO NÍVEL 2**

---

### 📌 Observação Importante

**Observação:** Adicione o usuário/cliente como **ADM Local (Provisoriamente)** durante a execução.

---

### 📌 Informações e Orientações

- O **Oracle Client for Microsoft Tools** é um complemento do Oracle Client que instala os componentes necessários para permitir a conexão de ferramentas Microsoft (Power BI, Excel, Access e ferramentas administrativas) a bancos de dados Oracle.
- É estritamente necessária a instalação deste complemento nos equipamentos da **COPAG**, pois disponibiliza componentes indispensáveis para o correto funcionamento das conexões **ODBC** (sistema Animus e afins). Sua ausência pode ocasionar falhas de conexão após a configuração das fontes de dados ODBC.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em: **W:\\COATEN\\SEARP\\Software em Teste\\Complemento Oracle 19c 64bits (COPAG)**.
2. Clique em **Executar**.
3. Clique em **OK**.
4. Aguarde o processo de extração dos arquivos.
5. Clique em **Avançar**.
6. Clique novamente em **Avançar**.
7. Clique novamente em **Avançar**.
8. Clique novamente em **Avançar**.
9. Clique em **Instalar**.
10. Aguarde o processo de instalação dos componentes.
11. Clique em **Finish**.`,
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
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2388;FileID=16738' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2388;FileID=16739' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2388;FileID=16740' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2388;FileID=16741' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2388;FileID=16742' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2388;FileID=16743' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2388;FileID=16744' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2388;FileID=16745' },
      { title: 'Imagem 10', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=16746' },
      { title: 'Imagem 11', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=16747' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CLIENTE ORACLE > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CLIENTE ORACLE::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: 'ODBC COPAG Animus complemento oracle tools ferramentas',
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
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita instalação do software Cobian Backup 11',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'COBIAN BACKUP 11',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- Software gratuito para realizar backups de arquivos e diretórios.
- Ao executar, o programa apresentará um ícone no canto direito da barra de tarefas (área de notificação).
- Tela do programa.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **X:\\Cobian Backup (CobianSoft)**.
2. Clique em **Sim**.
3. Clique novamente em **Sim**.
4. Insira o número do chamado.
5. Clique em **OK**.
6. Aguarde o processo de instalação.
7. Clique com o botão direito do mouse sobre o ícone do Cobian na barra de tarefas.
8. Clique em **“Open”** para abrir o gerenciador.`,
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
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=841;FileID=13121' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=841;FileID=13124' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=841;FileID=13122' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=841;FileID=13119' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=841;FileID=9854' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=841;FileID=13123' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > COBIAN BACKUP 11 > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::COBIAN BACKUP 11::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
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
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do programa Companion Bitfocus',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'COMPANION (BITFOCUS)',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

O **Bitfocus Companion** é uma ferramenta de software poderosa que permite aos usuários controlar vários switchers de apresentação, softwares de reprodução de vídeo e equipamentos de transmissão usando dispositivos como o Elgato Stream Deck. Ele oferece controle de nível profissional e permite a criação de fluxos de trabalho personalizados adaptados às necessidades específicas.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **CENTRAL_ATENDIMENTO (\\\\DRU) (X:) Companion (Bitfocus)**.
2. Clique em **“Sim”**.
3. Clique novamente em **“Sim”**.
4. Selecione a opção: **“Para todos que usam esta máquina (todos os usuários)”**.
5. Clique em **“Próximo”**.
6. Clique em **“Instalar”**.
7. Aguarde o processo de instalação.
8. Clique em **“Concluir”**.

---

### 📌 Permissão de Acesso

**Observação:** A funcionalidade “Apenas para mim (AdmInstal)” só poderá ser utilizada por usuários que estejam incluídos no grupo de Administradores locais do equipamento.

---

### 🔗 Procedimentos e Links Relacionados

- [**Rede DRU**](https://capri.senado.leg.brfile://DRU)`,
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
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2380;FileID=16633' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2380;FileID=16634' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2380;FileID=16635' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2380;FileID=16636' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2380;FileID=16637' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2380;FileID=16638' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2380;FileID=16639' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > COMPANION (BITFOCUS) > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::COMPANION (BITFOCUS)::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: 'instalação companion bitfocus bitf compani bit',
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
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do Cliente de Área de Trabalho Remota',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'CONEXAO DE AREA DE TRABALHO REMOTA',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- A Conexão de Área de Trabalho Remota (Remote Desktop Connection - RDC) é um recurso da Microsoft que permite acessar e controlar um computador remotamente por meio de uma rede local ou da internet. Com ela, o usuário pode visualizar a área de trabalho, utilizar aplicativos, acessar arquivos e executar tarefas no computador remoto como se estivesse fisicamente diante dele.
- Essa ferramenta é amplamente utilizada por equipes de suporte técnico, administradores de TI e usuários que precisam acessar seus computadores corporativos ou pessoais à distância de forma segura e eficiente.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **CENTRAL_ATENDIMENTO (\\\\DRU) (X:) CONEXÃO DE ÁREA DE TRABALHO REMOTA**.
2. Clique em **Sim**.
3. Clique novamente em **Sim**.
4. Aguarde o processo de instalação.
5. Clique em **OK**.
6. Clique no ícone Iniciar do Windows.
7. Selecione o atalho **Conexão de área de trabalho remota**.

---

### 🔗 Procedimentos e Links Relacionados

- [**Rede DRU**](https://capri.senado.leg.brfile://DRU)`,
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
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2410;FileID=17251' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2410;FileID=17250' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2410;FileID=17248' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2410;FileID=17245' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2410;FileID=17249' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CONEXAO DE AREA DE TRABALHO REMOTA > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CONEXAO DE AREA DE TRABALHO REMOTA::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: 'conexão area de trabalho área de trabalho remota',
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
    type: 'Requisição de serviço',
    service: 'Instalação de software licenciado',
    subject: 'Solicita a instalação do programa Copilot (Microsoft)',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'COPILOT (MICROSOFT)',
    associatedProcedureId: 'proc-install-licensed',
    procedure: `### 📌 Informações e Orientações

- O **Copilot** se encaixa no seu fluxo de trabalho com um formato intuitivo e adaptável. O Copilot é seu companheiro de IA diário que ajuda você a realizar tarefas, resolver problemas e atingir seus objetivos. Transforme ideias em visuais impressionantes, simplifique informações densas em percepções claras, profissionalize sua escrita, explore e descubra novas soluções e eleve o padrão do que você achava ser possível.
- Pode ser configurado para: Fixar na barra de tarefas, Fixar no menu iniciar, Criar atalho na área de trabalho e Início automático ao entrar no dispositivo.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **CENTRAL_ATENDIMENTO (\\\\DRU) (X:) Copilot (Microsoft)**.
2. Clique em **Sim**.
3. Clique novamente em **Sim**.
4. Aguarde o processo de instalação.
5. Clique em **Sim** na janela de conclusão.
6. Insira o e-mail institucional do cliente/usuário.
7. Selecione a opção **Trabalho ou Escola**.
8. Clique em **Permitir**.

---

### 📌 Acesso e Utilização

1. Acesse o aplicativo Copilot instalado.
2. Clique em **Entrar**.
3. Clique novamente em **Entrar**.

---

### 📌 Credenciais e Permissões de Acesso

- Insira a **senha de rede** do usuário.
- Selecione as permissões de acesso recomendadas.`,
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
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2276;FileID=15072' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2276;FileID=15073' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2276;FileID=15074' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2276;FileID=15075' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2276;FileID=15076' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2276;FileID=15077' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2276;FileID=15078' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2276;FileID=15079' },
      { title: 'Imagem 10', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2276;FileID=15080' },
      { title: 'Imagem 11', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2276;FileID=15081' },
      { title: 'Imagem 12', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2276;FileID=15082' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > COPILOT (MICROSOFT) > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::COPILOT (MICROSOFT)::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
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
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Solicita a instalação do CopySpider',
    category: 'APLICATIVOS',
    subCategory: 'COMERCIAIS',
    system: 'COPYSPIDER',
    associatedProcedureId: 'proc-install-software',
    procedure: `### 📌 Informações e Orientações

- Software antiplágio que realiza busca por termos idênticos em documentos locais ou na web para identificar cópias em trabalhos acadêmicos.
- Aceite os termos de licença durante a instalação.
- É necessário possuir uma conta no site da CopySpider para ativação completa.

---

### 📌 Procedimento de Instalação

1. Execute o arquivo localizado em **X:\\CopySpider (Clever Teixeira)**.
2. Clique em **Sim**.
3. Clique novamente em **Sim**.
4. Insira o número do chamado.
5. Clique em **OK**.
6. Selecione o idioma desejado.
7. Clique em **OK**.
8. Clique em **Avançar**.
9. Clique novamente em **Avançar**.
10. Clique novamente em **Avançar**.
11. Clique novamente em **Avançar**.
12. Clique em **Instalar**.
13. Aguarde o processo de instalação.
14. Clique em **Avançar**.
15. Clique em **Concluir**.
16. Aguarde o programa abrir automaticamente.
17. Insira o e-mail cadastrado na plataforma CopySpider para utilizar o programa corretamente.

---

### 📌 Permissão de Acesso

Não necessita de permissão especial administrativa e precisa ser instalado no perfil (login) do cliente.

---

### 🔗 Procedimentos e Links Relacionados

- [**Página de Cadastro CopySpider**](https://copyspider.com.br/main/pt-br/user/register)`,
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
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13138' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13137' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13140' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13125' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13135' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13136' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13128' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13127' },
      { title: 'Imagem 10', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13134' },
      { title: 'Imagem 11', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13132' },
      { title: 'Imagem 12', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13133' },
      { title: 'Imagem 13', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13129' },
      { title: 'Imagem 14', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13131' },
      { title: 'Imagem 15', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=9860' },
      { title: 'Imagem 16', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=845;FileID=13139' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > COPYSPIDER > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::COPYSPIDER::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: '[não informadas]',
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





