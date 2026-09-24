import { FAQ } from '@/types';

export const faqsBatchMfaDriveU: FAQ[] = [
  {
    id: 'faq-1000503-mfa-alterar-aparelho',
    faqNumber: '1000503',
    name: 'Microsoft Authenticator (MFA) – Alterar aparelho telefônico',
    type: 'Requisição de serviço',
    service: 'Configuração de Software',
    subject: 'Alteração do Aparelho Telefônico no MS Authenticator',
    category: 'MURAL DE AVISOS',
    subCategory: 'AUTENTICAÇÃO / MFA',
    system: 'Segurança / Identidade e Acesso / Microsoft 365 MFA',
    associatedProcedureId: 'proc-mfa-alterar-aparelho',
    observacoes: 'Caso não apresente outra opção de autenticação diferente do Microsoft Authenticator, por exemplo "SMS", verifique se o cliente possui o aparelho antigo para realizar a autenticação. No novo dispositivo é necessário baixar o aplicativo do Microsoft Authenticator. Nos casos em que o cliente tenha alterado o número de telefone, oriente conforme o procedimento FAQ 522.',
    acessoUtilizacao: 'Acesse o endereço aka.ms/mfasetup e realize a autenticação com as credenciais de rede.',
    credenciaisAcesso: 'Acesse o endereço aka.ms/mfasetup. Realize a autenticação com as credenciais de rede corporativa.',
    procedure: `### 📌 Observação Importante
- **Aparelho Antigo:** Caso não apresente outra opção de autenticação diferente do Microsoft Authenticator, por exemplo "SMS", verifique se o cliente possui o aparelho antigo para realizar a autenticação via Microsoft Authenticator.
- **Novo Dispositivo:** No novo dispositivo é necessário baixar o aplicativo do **Microsoft Authenticator** pela Google Play Store (Android) ou Apple App Store (iOS).
- **Alteração de Número:** Nos casos em que o cliente tenha alterado o número do telefone, oriente conforme o procedimento:
  - **Microsoft Authenticator (MFA) – Alterar número de telefone** (FAQ#: 1000522).

---

### 📌 Informações e Orientações
- Se possuir o aparelho antigo, utilize o procedimento complementar:
  - **Microsoft Authenticator (MFA) – Adicionar novo método de entrada diferente** (FAQ#: 10001942).
- Em **Informações de segurança**, procure a opção **Microsoft Authenticator**.
- Será exibido o **QR Code** na tela do computador.
- Um código de acesso numérico será exibido na tela.
- Após concluir a validação, o novo aparelho estará apto para realizar a autenticação na VPN e acessos corporativos do Senado Federal.

---

### 📌 Procedimento de Configuração
1. Caso não possua o aparelho antigo, o atendimento deve seguir o fluxo normalmente utilizando outro método já cadastrado (ex.: SMS ou ligação).
2. Acesse o endereço [aka.ms/mfasetup](https://mysignins.microsoft.com/security-info) e realize o login com seu e-mail institucional (\`usuario@senado.leg.br\`) e senha de rede.
3. Na confirmação de identidade, selecione um método de verificação diferente do Microsoft Authenticator (ex.: Enviar código por SMS).
4. Na página de **Informações de segurança**, localize o Microsoft Authenticator vinculado ao aparelho antigo e clique em **Excluir**. Confirme a exclusão.
5. Clique em **+ Adicionar método de entrada**.
6. Selecione a opção **Aplicativo Authenticator** no menu e clique em **Adicionar**.
7. Clique em **Próximo**.
8. Clique novamente em **Próximo** até visualizar o QR Code na tela do computador.
9. No novo smartphone, abra o Microsoft Authenticator instalado, toque em **+** (ou Adicionar Conta) e selecione **Conta corporativa ou de estudante** > **Digitalizar código QR**.
10. Aponte a câmera do novo aparelho para o QR Code na tela.
11. Digite o código numérico exibido na tela do computador diretamente no aplicativo do novo aparelho e toque em **Sim**.
12. Clique em **Próximo**.
13. Clique novamente em **Próximo** e depois em **Concluído**. O novo aparelho estará registrado com sucesso.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=503;Nav=',
    relatedLinks: [
      {
        title: 'Microsoft Authenticator (MFA) – Adicionar novo método de entrada diferente (FAQ 1942)',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1942'
      },
      {
        title: 'Painel de Configuração MFA Microsoft (aka.ms/mfasetup)',
        url: 'https://mysignins.microsoft.com/security-info'
      },
      {
        title: 'Microsoft Authenticator (MFA) – Alterar número de telefone (FAQ 522)',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=522;Nav='
      }
    ],
    attachments: [
      {
        name: 'Microsoft Authenticator (MFA) – Alterar aparelho telefônico.pdf',
        size: '483.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=503;FileID=14982'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=503;FileID=12825' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=503;FileID=12821' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=503;FileID=12818' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=503;FileID=12823' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=503;FileID=12824' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=503;FileID=12820' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=503;FileID=12817' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=503;FileID=12819' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=503;FileID=12816' },
      { title: 'Imagem 10', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=503;FileID=12822' },
      { title: 'Imagem 11', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=503;FileID=12826' },
      { title: 'Imagem 12', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=503;FileID=12827' },
      { title: 'Imagem 13', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=503;FileID=12828' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > MURAL DE AVISOS',
      categoria: 'CENTRAL DE ATENDIMENTO::MURAL DE AVISOS',
      palavrasChave: 'microsoft authenticator mfa alterar aparelho trocar celular novo dispositivo qr code vpn dois fatores',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '25/08/2023 14:53 (Mayara Sales)',
      alterado: '02/06/2026 09:50 (Mayara Sales)',
      atualizadoEm: '08.09.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=503;Nav=',
      itemId: '503'
    }
  },
  {
    id: 'faq-1000522-mfa-alterar-numero-telefone',
    faqNumber: '1000522',
    name: 'Microsoft Authenticator (MFA) – Alterar número de telefone',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Alteração do Número de Autenticação no MS Authenticator',
    category: 'MURAL DE AVISOS',
    subCategory: 'AUTENTICAÇÃO / MFA',
    system: 'Segurança / Identidade e Acesso / Microsoft 365 MFA',
    associatedProcedureId: 'proc-mfa-alterar-numero-telefone',
    observacoes: 'Para a troca do número de autenticação de dois fatores, caso tenha sido perdido, o Chefe ou responsável deve solicitar autorização via Central de Serviços.',
    permissaoAcesso: 'Para a troca do número de autenticação de dois fatores, caso tenha sido perdido, o Chefe ou responsável deve solicitar autorização via Central de Serviços (Intranet > Central de Serviços Administrativos > Informática > Apoio a aplicativos > Autorização de acesso a sistemas).',
    procedure: `### 📌 Permissão de Acesso e Regra Obrigatória
- Para a troca do número de autenticação de dois fatores, caso o número anterior tenha sido desativado, trocado ou perdido, o **Chefe ou responsável imediato do setor deve formalizar a solicitação de autorização**.
- É obrigatório registrar a solicitação através da **Central de Serviços**:
  - Caminho na Intranet: **Intranet > Central de Serviços Administrativos > Informática > Apoio a aplicativos > Autorização de acesso a sistemas**.

---

### 📌 Informações e Roteiro de Atendimento
1. Verifique com o usuário se ele perdeu o acesso à linha telefônica cadastrada para recebimento de SMS ou chamadas de verificação do MFA.
2. Em caso de perda do número e ausência de métodos alternativos ativos:
   - Esclareça que, por normas rígidas de segurança institucional do Senado Federal, a alteração de número telefônico de autenticação exige anuência expressa da chefia imediata.
   - Oriente que o chefe da unidade acesse a Central de Serviços e preencha o formulário de autorização no caminho indicado acima.
3. Após a tramitação e aprovação do chamado pela equipe responsável (COINTI / SESIER), o atendente ou o sistema realizará a atualização cadastral do novo número para liberação da autenticação em duas etapas.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=522;Nav=',
    attachments: [
      {
        name: 'Microsoft Authenticator (MFA) – Alterar número de telefone.pdf',
        size: '248.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=522;FileID=14984'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=522;FileID=12829' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > MURAL DE AVISOS',
      categoria: 'CENTRAL DE ATENDIMENTO::MURAL DE AVISOS',
      palavrasChave: 'microsoft authenticator mfa alterar numero telefone trocar chip nova linha autorizacao chefia central servicos',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/08/2023 15:26 (Mayara Sales)',
      alterado: '16/07/2026 17:31 (Jeferson dos Santos Morais)',
      atualizadoEm: '21.07.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=522;Nav=',
      itemId: '522'
    }
  },
  {
    id: 'faq-10002231-mfa-configurar-notificacoes',
    faqNumber: '10002231',
    name: 'Microsoft Authenticator (MFA) – Configurar notificações',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Microsoft Authenticator (MFA) – Configurar Notificações',
    category: 'MURAL DE AVISOS',
    subCategory: 'AUTENTICAÇÃO / MFA',
    system: 'Segurança / Identidade e Acesso / Microsoft 365 MFA',
    associatedProcedureId: 'proc-mfa-configurar-notificacoes',
    observacoes: 'Caso as notificações estejam desabilitadas, o aplicativo não vai receber o aviso de autenticação.',
    acessoUtilizacao: 'Acesse Ajustes > Notificações > Toque em "Authenticator".',
    procedure: `### 📌 Observação Importante
- **Atenção:** Caso as notificações do aplicativo estejam desabilitadas nas configurações do aparelho celular, o **Microsoft Authenticator não receberá os alertas push de autenticação**, impedindo a validação de acesso aos sistemas do Senado Federal e à VPN.

---

### 📌 Informações e Orientações
Ao configurar o Microsoft Authenticator é possível habilitar ou desabilitar as notificações do aplicativo. Siga os passos abaixo de acordo com o sistema operacional do seu dispositivo móvel:

#### 🤖 Configuração no ANDROID:
1. Abra o aplicativo **Microsoft Authenticator**.
2. Na página inicial do aplicativo, toque no ícone de três pontinhos (menu) no canto superior e selecione **Configurações**.
3. Localize e habilite a opção **Atualizações do aplicativo** (ou Permissões de Notificação).
4. Verifique também nas **Configurações do Android > Aplicativos > Authenticator > Notificações** se a opção "Permitir notificações" está ativada e sem restrições de economia de bateria.

#### 🍏 Configuração no iOS (iPhone / iPad):
1. No aparelho, acesse o menu **Ajustes**.
2. Toque em **Notificações**.
3. Na lista de aplicativos, localize e toque em **Authenticator**.
4. Habilite a opção **Permitir Notificações**.
5. Certifique-se de marcar os tipos de alerta desejados (Tela Bloqueada, Central de Notificações e Faixas/Banners) e ativar a opção de **Sons**.

---

### 📌 Procedimento de Configuração
Para realizar a configuração basta acessar as configurações conforme o sistema operacional do dispositivo (Android ou iOS) e garantir que o app tenha permissão irrestrita para emitir alertas.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2231;Nav=',
    attachments: [
      {
        name: 'Microsoft Authenticator (MFA) – Configurar notificações.pdf',
        size: '358.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2231;FileID=14985'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2231;FileID=12830' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2231;FileID=12831' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2231;FileID=12832' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2231;FileID=12833' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > MURAL DE AVISOS',
      categoria: 'CENTRAL DE ATENDIMENTO::MURAL DE AVISOS',
      palavrasChave: 'microsoft authenticator mfa configurar notificacoes avisos push alertas pop-up android ios iphone',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '14/04/2025 16:59 (Mayara Sales)',
      alterado: '04/11/2025 10:41 (Mayara Sales)',
      atualizadoEm: '16.07.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2231;Nav=',
      itemId: '2231'
    }
  },
  {
    id: 'faq-10002042-mfa-instalacao-configuracao',
    faqNumber: '10002042',
    name: 'Microsoft Authenticator (MFA) – Instalação e Configuração',
    type: 'Requisição de serviço',
    service: 'Configuração de Software',
    subject: 'Autenticação em dois fatores utilizando o Microsoft Authenticator',
    category: 'MURAL DE AVISOS',
    subCategory: 'AUTENTICAÇÃO / MFA',
    system: 'Segurança / Identidade e Acesso / Microsoft 365 MFA',
    associatedProcedureId: 'proc-mfa-instalacao-configuracao',
    observacoes: 'Dispositivos com sistema operacional descontinuado, como Android 6.0 e iOS 15, NÃO são compatíveis com o Microsoft Authenticator (orientar a instalar o Google Authenticator). Aposentados e pensionistas NÃO precisam de MFA, mas devem utilizar o login com "@senado.leg.br" (login@senado.leg.br ou cpf@senado.leg.br).',
    acessoUtilizacao: 'Acesse a página https://aka.ms/mfasetup no computador para parear o aplicativo.',
    procedure: `### 📌 Observações Importantes
- **Observação 1 (Sistemas Descontinuados):** Alguns dispositivos com sistema operacional antigo/descontinuado, tais como **Android 6.0** e **iOS 15**, **NÃO são compatíveis** com o aplicativo Microsoft Authenticator. Para atender estes usuários específicos, orientamos a instalar e configurar o:
  - **Google Authenticator (MFA) – Instalação e Configuração** para validar a autenticação em dois fatores.
- **Observação 2 (Aposentados e Pensionistas):** Os usuários aposentados e pensionistas **NÃO precisam de autenticação multifator (MFA)**, porém houve uma alteração na forma de acesso. Agora, para acessar os serviços do Senado Federal, é obrigatório utilizar o login acompanhado de \`@senado.leg.br\` (Exemplo: \`login@senado.leg.br\` ou \`cpf@senado.leg.br\`).
- **Requisitos Mínimos Apple:** iPhone requer o **iOS 16.0** ou posterior; iPad requer o **iPadOS 16.0** ou posterior; Apple Vision requer o **VisionOS 1.0** ou posterior.
- Antes de utilizar o aplicativo, é obrigatório configurar a autenticação de entrada por meio do seu smartphone nas configurações de segurança corporativa da Microsoft.

---

### 📌 Informações e Orientações
1. No seu dispositivo móvel (Android ou iOS), abra a loja oficial de aplicativos (Google Play Store ou Apple App Store) e pesquise por **Microsoft Authenticator**.
2. Toque em **Instalar** e, ao concluir, toque em **Abrir**.
3. O ícone do aplicativo será exibido na tela inicial do dispositivo.
4. **Configurar segundo fator de autenticação com a Microsoft:**
   - Acesse o portal no navegador do computador: \`https://aka.ms/mfasetup\`.
   - Será exibida a página de **Informações de segurança**.
   - Será exibido o **QR Code** para leitura.
   - Um código de acesso numérico será exibido na tela.
   - O smartphone passará a constar como método oficial de entrada e sua conta corporativa será listada no app Microsoft Authenticator.

---

### 📌 Procedimento de Instalação e Configuração Passo a Passo
1. No computador, acesse a página: \`https://aka.ms/mfasetup\`.
2. Insira seu e-mail institucional corporativo (\`usuario@senado.leg.br\`).
3. Clique em **Avançar**.
4. Insira a sua senha de rede.
5. Clique em **Entrar**.
6. Clique em **Avançar**.
7. Insira o código SMS de verificação temporário enviado para o seu celular.
8. Clique em **Próximo** e depois em **Concluído**.
9. Marque a opção **Não mostrar isso novamente** e clique em **Sim**.
10. Na página de Informações de segurança, clique em **+ Adicionar método de entrada**.
11. Selecione a opção **Aplicativo Authenticator**.
12. Clique em **Próximo**.
13. Clique novamente em **Próximo** para que o QR Code seja gerado na tela.
14. No smartphone, abra o Microsoft Authenticator, toque no botão **+** (ou "Adicionar conta") e selecione **Conta corporativa ou de estudante** > **Digitalizar código QR**.
15. Aponte a câmera do aparelho para o QR Code na tela do computador.
16. Digite o código exibido na tela do computador no aplicativo do dispositivo móvel e toque em **Sim**.
17. Clique em **Próximo**.
18. Clique novamente em **Próximo** para finalizar.
19. Verifique se as notificações do aplicativo estão habilitadas seguindo o procedimento:
    - **Microsoft Authenticator (MFA) – Configurar notificações** (FAQ#: 10002231).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2042;Nav=',
    relatedLinks: [
      {
        title: 'Painel de Configuração MFA Microsoft (aka.ms/mfasetup)',
        url: 'https://aka.ms/mfasetup'
      },
      {
        title: 'Microsoft Authenticator (MFA) – Configurar notificações (FAQ 2231)',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2231'
      }
    ],
    attachments: [
      {
        name: 'Microsoft Authenticator (MFA) – Instalação e Configuração.pdf',
        size: '681.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=14986'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12776' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12777' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12778' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12779' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12780' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12781' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12782' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12783' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12784' },
      { title: 'Imagem 10', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12785' },
      { title: 'Imagem 11', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12786' },
      { title: 'Imagem 12', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12787' },
      { title: 'Imagem 13', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12788' },
      { title: 'Imagem 14', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12789' },
      { title: 'Imagem 15', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12790' },
      { title: 'Imagem 16', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12791' },
      { title: 'Imagem 17', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12792' },
      { title: 'Imagem 18', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12793' },
      { title: 'Imagem 19', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12794' },
      { title: 'Imagem 20', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12795' },
      { title: 'Imagem 21', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12796' },
      { title: 'Imagem 22', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12797' },
      { title: 'Imagem 23', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12798' },
      { title: 'Imagem 24', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12799' },
      { title: 'Imagem 25', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2042;FileID=12800' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > MURAL DE AVISOS',
      categoria: 'CENTRAL DE ATENDIMENTO::MURAL DE AVISOS',
      palavrasChave: 'Microsoft Authenticator MFA instalacao configuracao celular smartphone qrcode dois fatores senado',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '08/10/2024 18:26 (Leonardo Silva de Amarante)',
      alterado: '16/04/2026 08:06 (Mayara Sales)',
      atualizadoEm: '15.07.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2042;Nav=',
      itemId: '2042'
    }
  },
  {
    id: 'faq-10002404-mfa-passkey',
    faqNumber: '10002404',
    name: 'Microsoft Authenticator (MFA) – Passkey',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Autenticação Multifator (MFA) - Passkey',
    category: 'MURAL DE AVISOS',
    subCategory: 'AUTENTICAÇÃO / MFA',
    system: 'Segurança / Identidade e Acesso / Microsoft 365 MFA',
    associatedProcedureId: 'proc-mfa-passkey',
    observacoes: 'Orientações para uso e configuração de Passkey (chaves de acesso sem senha) integradas ao Microsoft Authenticator.',
    procedure: `### 📌 Informações e Orientações
O uso de **Passkey (Chaves de Acesso)** representa o modelo mais avançado de autenticação multifator, resistente a tentativas de phishing e ataques de engenharia social.

- **Conceito:** A Passkey substitui o uso convencional de senhas alfanuméricas por credenciais criptográficas vinculadas ao hardware do dispositivo do usuário (reconhecimento facial / Face ID, biometria digital ou PIN seguro do sistema).
- **Integração:** Totalmente compatível com o aplicativo Microsoft Authenticator e ecossistema Microsoft 365 do Senado Federal.
- **Utilização:** Permite login ágil, seguro e com um único toque, eliminando a digitação manual de códigos temporários ou senhas complexas.

Consulte o documento técnico anexo para instruções detalhadas de pareamento da Passkey no seu perfil institucional.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2404;Nav=',
    attachments: [
      {
        name: 'Microsoft Authenticator MFA - Passkey.pdf',
        size: '2.0 MBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2404;FileID=14987'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2404;FileID=12835' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > MURAL DE AVISOS',
      categoria: 'CENTRAL DE ATENDIMENTO::MURAL DE AVISOS',
      palavrasChave: 'microsoft authenticator mfa passkey chave de acesso biometria sem senha seguranca digital',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '10/08/2026 17:44 (Gabriel Queiroz Pires)',
      alterado: '10/08/2026 18:12 (Gabriel Queiroz Pires)',
      atualizadoEm: '10.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2404;Nav=',
      itemId: '2404'
    }
  },
  {
    id: 'faq-10002287-migracao-drive-rede-u',
    faqNumber: '10002287',
    name: 'Migração do drive de rede (U:)',
    type: 'Requisição de serviço',
    service: 'Suporte e solução de dúvida técnica/operacional',
    subject: 'Informações sobre a migração do drive de rede',
    category: 'MURAL DE AVISOS',
    subCategory: 'DRIVE DE REDE / ARMAZENAMENTO EM NUVEM',
    system: 'Infraestrutura / Armazenamento / SharePoint & Microsoft Teams',
    associatedProcedureId: 'proc-migracao-drive-u',
    observacoes: 'Atenção: futuramente, o acesso ao drive U será desabilitado por completo.',
    permissaoAcesso: 'Apenas os colaboradores que já possuem permissão de modificação nos diretórios locais terão acesso às equipes correspondentes no Teams. Solicitações adicionais de acesso devem ser encaminhadas pela chefia da área solicitante via Central de Serviços na Intranet.',
    procedure: `### 📌 Observação Importante
- **ATENÇÃO:** Futuramente, o acesso ao **Drive U será desabilitado por completo**.
- Durante e após o processo de migração, o drive U passa a ser **somente leitura (read-only)**. Os usuários poderão visualizar e copiar arquivos existentes, mas não poderão criar novas pastas nem modificar conteúdos locais no Drive U. Toda a edição ativa passa a ocorrer na nuvem.

---

### 📌 Informações e Orientações
A migração do Drive de Rede (U:) para a nuvem (**Microsoft SharePoint / Microsoft Teams**) está em fase de projeto-piloto:
- A migração dos arquivos da **COINTI** foi concluída com sucesso, sem dificuldades na execução.
- O próximo passo contempla a migração dos arquivos da **COATEN** (gabinete + diretórios dos serviços).
- A documentação será continuamente aprimorada após a migração, com inclusão de telas do sistema e melhorias nos roteiros de atendimento.

#### 📂 Visão Geral do Processo de Migração:
- Os arquivos do Drive U (ambiente local on-premise) estão sendo transferidos para o SharePoint/Teams, onde a manipulação, edição compartilhada em tempo real e criação de novos documentos passarão a ocorrer.
- Para a organização dos dados, é criada uma equipe no Teams e um site correspondente no SharePoint com o seguinte padrão de nomenclatura:
  - **Equipe no Teams:** \`Documentos-NOME_DA_ÁREA\` (Exemplo: \`Documentos-SAEQUI\`).
  - **Exceção:** O diretório Gabinete será nomeado como \`Documentos-COATEN\`.
  - **Site no SharePoint:** O site terá o mesmo nome da equipe no Teams.
- Serão utilizadas listas automáticas de setores. Uma automação é responsável por sincronizar novos usuários para o grupo correspondente.
- O tempo médio para conclusão do processo de concessão/remoção de acesso a novos usuários é de aproximadamente **1 hora**.
- Dados da migração COATEN: Total de ~70 GB de dados, tempo estimado de migração < 2 horas, mantendo disponibilidade read-only durante todo o procedimento.

---

### 📌 Permissão de Acesso
- Apenas os colaboradores que já possuíam permissão de modificação nos diretórios locais recebem inicialmente acesso à equipe correspondente no Teams.
- **Se o usuário relatar falta de acesso:**
  - O usuário deve direcionar a demanda à **chefia imediata da sua área solicitante**.
  - A chefia deverá formalizar o pedido através da **Central de Serviços**, na Intranet do Senado Federal.

---

### 🛠️ Apoio Técnico e Troubleshooting
Os arquivos continuam acessíveis durante o processo de migração (modo leitura). Caso o usuário relate erro de acesso ao ambiente SharePoint/Teams:
1. **Verificar a sincronização do OneDrive:** Cheque se o cliente OneDrive está autenticado com a conta corporativa e sincronizando sem conflitos.
2. **Limpar o cache do aplicativo Microsoft Teams:** Finalize o Teams, limpe os arquivos temporários em \`%appdata%\\Microsoft\\Teams\` e reabra o aplicativo.
3. **Checar permissões da equipe no Teams:** Confirme se o usuário consta como membro da equipe \`Documentos-NOME_DA_ÁREA\`.

#### 🚨 Quando Escalar para a Equipe Responsável:
Siga o fluxo de atendimento e encaminhe o chamado para a equipe responsável quando o usuário relatar:
- Arquivos que sumiram da nuvem (Teams/SharePoint).
- Necessidade urgente de inclusão de novos usuários nas equipes na nuvem não atendidas pela rotina de automação.
- Problemas de sincronização do OneDrive persistentes após os procedimentos básicos de suporte.
- Mensagens de erro de permissão persistentes, mesmo após a chefia ter liberado formalmente o acesso.

---

### ❓ Principais Dúvidas dos Usuários e Orientações para Atendimento
- **Por que não consigo mais editar arquivos no Drive U?**
  - O diretório local (on-premise) foi convertido para **somente leitura (read-only)**. Todas as edições e novos arquivos devem ser realizados exclusivamente no SharePoint/Teams.
- **Onde encontrar meus arquivos agora?**
  - Os arquivos mantiveram rigorosamente a mesma estrutura de diretórios e pastas. Acesse a equipe correspondente no Teams ou o site no SharePoint de acordo com a área do usuário (Exemplo: Equipe \`Documentos-NOME_DA_ÁREA\`).
- **Os arquivos antigos ainda estão disponíveis?**
  - Sim, temporariamente. Eles permanecem no mesmo local do Drive U, porém exclusivamente com permissão de leitura até a desativação definitiva do servidor local.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2287;Nav=',
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > MURAL DE AVISOS',
      categoria: 'CENTRAL DE ATENDIMENTO::MURAL DE AVISOS',
      palavrasChave: 'migracao drive u rede sharepoint teams nuvem somente leitura read only coaten cointi documentos',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '03/12/2025 17:02 (Leonardo Silva de Amarante)',
      alterado: '03/12/2025 17:06 (Leonardo Silva de Amarante)',
      atualizadoEm: '03.12.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2287;Nav=',
      itemId: '2287'
    }
  }
];
