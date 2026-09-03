import { FAQ } from '@/types';

export const additionalFaqsBatch23: FAQ[] = [
  {
    id: 'faq-10002432',
    faqNumber: '10002432',
    name: 'OneDrive Institucional – Sincronização Seletiva e Arquivos sob Demanda',
    category: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::ONEDRIVE',
    subCategory: 'ONEDRIVE',
    system: 'Microsoft 365',
    type: 'Requisição de serviço',
    service: 'Armazenamento em Nuvem e Colaboração',
    subject: 'Otimização de Espaço em Disco com Recursos Sob Demanda (Files On-Demand)',
    associatedProcedureId: '',
    observacoes: 'Evita lotação da unidade C: do computador local com dados armazenados na nuvem do Senado.',
    procedure: `1. Clique com o botão direito no ícone da nuvem azul do OneDrive na barra de tarefas (próximo ao relógio) e selecione Configurações (ícone de engrenagem).
2. Na guia "Sincronização e Backup", vá até "Configurações Avançadas".
3. Localize "Arquivos sob Demanda" e selecione "Liberar espaço em disco".
4. Para manter pastas críticas permanentemente disponíveis offline no notebook:
   - Abra o Explorador de Arquivos;
   - Clique com o botão direito na pasta desejada no OneDrive corporativo;
   - Selecione "Sempre manter neste dispositivo".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=823;Nav=',
    attachments: [
      {
        name: 'Guia OneDrive Files On-Demand.pdf',
        size: '320.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=823;FileID=15679'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > FERRAMENTAS COLABORATIVAS > ONEDRIVE',
      categoria: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::ONEDRIVE',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '22/01/2026 10:00 (Mayara Sales)',
      atualizadoEm: '22.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=823;Nav=',
      itemId: '823'
    }
  },
  {
    id: 'faq-1000824',
    faqNumber: '1000824',
    name: 'OneDrive Institucional – Recuperação de Arquivos Excluídos e Histórico de Versões',
    category: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::ONEDRIVE',
    subCategory: 'ONEDRIVE',
    system: 'Microsoft 365',
    type: 'Requisição de serviço',
    service: 'Armazenamento em Nuvem e Colaboração',
    subject: 'Restauração de Documentos Sobrescritos ou Deletados Acidentalmente',
    associatedProcedureId: '',
    observacoes: 'A Lixeira do OneDrive preserva itens excluídos por até 93 dias a partir da data de deleção.',
    procedure: `1. Acesse o portal Microsoft 365 institucional (https://portal.office.com) e clique no aplicativo OneDrive.
2. Para recuperar arquivos apagados:
   - Clique em "Lixeira" no menu lateral esquerdo;
   - Marque os itens desejados e clique em "Restaurar".
   - Se já passaram mais de 30 dias, verifique no link "Lixeira de segundo estágio" no rodapé da página.
3. Para reverter alterações em um arquivo (Histórico de Versões):
   - Clique com o botão direito no arquivo no OneDrive Web ou no Windows Explorer;
   - Escolha "Histórico de Versões";
   - Selecione a data/hora anterior desejada e clique em "Restaurar".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=824;Nav=',
    attachments: [
      {
        name: 'Manual Recuperação OneDrive.pdf',
        size: '295.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=824;FileID=15680'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > FERRAMENTAS COLABORATIVAS > ONEDRIVE',
      categoria: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::ONEDRIVE',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '22/01/2026 10:30 (Mayara Sales)',
      atualizadoEm: '22.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=824;Nav=',
      itemId: '824'
    }
  },
  {
    id: 'faq-1000825',
    faqNumber: '1000825',
    name: 'SharePoint Institucional – Permissões e Criação de Sites de Equipe',
    category: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::SHAREPOINT',
    subCategory: 'SHAREPOINT',
    system: 'Microsoft 365',
    type: 'Requisição de serviço',
    service: 'Gestão de Conteúdo e Portais Corporativos',
    subject: 'Solicitação de Espaço Colaborativo para Comissões ou Setores',
    associatedProcedureId: '',
    observacoes: 'Sites institucionais devem respeitar a hierarquia da estrutura organizacional do Senado.',
    procedure: `1. Para solicitar novo site de equipe no SharePoint, o titular da unidade administrativa deve abrir chamado na Central de Serviços:
   Informática > Ferramentas Colaborativas > SharePoint > Criação de Site.
2. Devem ser indicados: nome da equipe, proprietários (gestores com permissão total) e membros.
3. Para compartilhar pastas com públicos externos (outros órgãos públicos):
   - Apenas os proprietários do site possuem permissão de envio de links para usuários externos autenticados;
   - Links anônimos ("qualquer pessoa com o link") são bloqueados por política de segurança institucional.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=825;Nav=',
    attachments: [
      {
        name: 'Governança SharePoint Senado.pdf',
        size: '340.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=825;FileID=15681'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > FERRAMENTAS COLABORATIVAS > SHAREPOINT',
      categoria: 'CENTRAL DE ATENDIMENTO::FERRAMENTAS COLABORATIVAS::SHAREPOINT',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '22/01/2026 11:00 (Mayara Sales)',
      atualizadoEm: '22.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=825;Nav=',
      itemId: '825'
    }
  },
  {
    id: 'faq-1000826',
    faqNumber: '1000826',
    name: 'Ambiente Apple / macOS – Configuração de Rede e Certificados Institucionais',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::MACOS',
    subCategory: 'MACOS',
    system: 'Apple macOS',
    type: 'Requisição de serviço',
    service: 'Suporte a Estações de Trabalho',
    subject: 'Instalação do Perfil de Configuração e Raiz AC Senado no macOS',
    associatedProcedureId: '',
    observacoes: 'Exclusivo para MacBooks institucionais alocados na Secretaria de Comunicação Social (SECOM) e gabinetes autorizados.',
    procedure: `1. Conecte o Mac à rede cabeada ou configure temporariamente o Wi-Fi "Senado-Visitantes".
2. Baixe o certificado da Autoridade Certificadora do Senado (AC Senado Federal) na intranet.
3. Dê duplo clique no certificado (.cer) para abrir o aplicativo "Acesso às Chaves" (Keychain Access).
4. Selecione o chaveiro "Sistema", clique com o botão direito no certificado e escolha "Obter Informações".
5. Expanda a seção "Confiar" e defina "Ao usar este certificado: Confiar Sempre".
6. Feche a janela e informe a senha de administrador local do Mac para salvar a alteração.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=826;Nav=',
    attachments: [
      {
        name: 'Guia de Configuração macOS Senado.pdf',
        size: '385.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=826;FileID=15682'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > MACOS',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::MACOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '22/01/2026 11:30 (Mayara Sales)',
      atualizadoEm: '22.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=826;Nav=',
      itemId: '826'
    }
  },
  {
    id: 'faq-1000827',
    faqNumber: '1000827',
    name: 'Ambiente Apple / macOS – Mapeamento de Pastas de Rede (Drive U: / SMB)',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::MACOS',
    subCategory: 'MACOS',
    system: 'Apple macOS',
    type: 'Requisição de serviço',
    service: 'Suporte a Estações de Trabalho',
    subject: 'Conexão ao Compartilhamento de Arquivos do Senado via Protocolo SMB',
    associatedProcedureId: '',
    observacoes: 'Requer estar conectado à rede interna do Senado ou com o túnel VPN ativo.',
    procedure: `1. No Finder do macOS, clique no menu superior "Ir" > "Conectar ao Servidor..." (ou pressione Cmd + K).
2. No campo "Endereço do Servidor", digite:
   smb://dru.senado.leg.br/usuarios$/<matricula> (para pasta pessoal)
   smb://dru.senado.leg.br/setorial (para pastas de departamento)
3. Clique no botão "+" para adicionar à lista de favoritos.
4. Clique em "Conectar".
5. Quando solicitado, selecione "Usuário Registrado", informe Nome: SENADO\\<login> e sua senha de rede.
6. Marque a opção "Lembrar esta senha nas minhas chaves" para conexões futuras automáticas.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=827;Nav=',
    attachments: [
      {
        name: 'Mapeamento SMB no macOS.pdf',
        size: '272.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=827;FileID=15683'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > MACOS',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::MACOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '22/01/2026 12:00 (Mayara Sales)',
      atualizadoEm: '22.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=827;Nav=',
      itemId: '827'
    }
  },
  {
    id: 'faq-1000828',
    faqNumber: '1000828',
    name: 'Atendimento Parlamentar – Plantão de Apoio a Comissões e Plenário',
    category: 'CENTRAL DE ATENDIMENTO::ATENDIMENTO VIP::PARLAMENTAR',
    subCategory: 'PARLAMENTAR',
    system: 'Suporte VIP',
    type: 'Requisição de serviço',
    service: 'Atendimento Prioritário a Gabinetes e Comissões',
    subject: 'Protocolo de Resposta Rápida para Sessões Legislativas',
    associatedProcedureId: '',
    observacoes: 'SLA de primeiro atendimento presencial imediato (inferior a 15 minutos) durante sessões ativas.',
    procedure: `1. Os chamados originados da Mesa Diretora, Plenário e salas de Comissões em andamento possuem prioridade máxima (Urgente).
2. O atendente Nível 1 deve registrar o ticket e despachar imediatamente via rádio transmissor ou ramal direto para o Técnico de Prontidão de Plenário (COATEN).
3. O técnico escalado deve se dirigir ao local portando kit de emergência: cabo HDMI/DisplayPort, adaptador USB-C multi-portas, mouse sem fio e token de contingência.
4. Caso a solução demande mais de 5 minutos de intervenção na bancada, substitua imediatamente o computador pelo equipamento reserva de bancada homologado.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=828;Nav=',
    attachments: [
      {
        name: 'Protocolo de Prontidão de Plenário.pdf',
        size: '305.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=828;FileID=15684'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > ATENDIMENTO VIP > PARLAMENTAR',
      categoria: 'CENTRAL DE ATENDIMENTO::ATENDIMENTO VIP::PARLAMENTAR',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '22/01/2026 12:30 (Mayara Sales)',
      atualizadoEm: '22.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=828;Nav=',
      itemId: '828'
    }
  },
  {
    id: 'faq-10002433',
    faqNumber: '10002433',
    name: 'Atendimento Parlamentar – Instalação de Gabinete de Senador Recém-Empossado',
    category: 'CENTRAL DE ATENDIMENTO::ATENDIMENTO VIP::PARLAMENTAR',
    subCategory: 'PARLAMENTAR',
    system: 'Suporte VIP',
    type: 'Requisição de serviço',
    service: 'Atendimento Prioritário a Gabinetes e Comissões',
    subject: 'Setup Completo de Estações, Impressoras e Telefonia para Nova Legislatura',
    associatedProcedureId: '',
    observacoes: 'Operação coordenada entre COATEN, SERETEL, SEDAN e Coordenação de Infraestrutura.',
    procedure: `1. Verifique a ordem de serviço emitida pela Secretaria-Geral da Mesa com a composição do novo gabinete.
2. Entregue e configure a cota padrão de estações de trabalho e notebooks Dell corporativos.
3. Configure os ramais telefônicos dos assessores e o aparelho com viva-voz dedicado na sala do Senador.
4. Mapeie as impressoras do corredor e a impressora executiva de gabinete.
5. Realize a criação das caixas postais setoriais e listas de distribuição da assessoria.
6. Acompanhe os primeiros logons da equipe e preste treinamento rápido sobre SIGAD, SDR e Intranet.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=829;Nav=',
    attachments: [
      {
        name: 'Checklist Transição de Gabinete.pdf',
        size: '412.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=829;FileID=15685'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > ATENDIMENTO VIP > PARLAMENTAR',
      categoria: 'CENTRAL DE ATENDIMENTO::ATENDIMENTO VIP::PARLAMENTAR',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '22/01/2026 13:00 (Mayara Sales)',
      atualizadoEm: '22.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=829;Nav=',
      itemId: '829'
    }
  },
  {
    id: 'faq-10002434',
    faqNumber: '10002434',
    name: 'Backup Institucional – Solicitação de Restauração de Volume no Servidor de Arquivos',
    category: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::STORAGE E BACKUP',
    subCategory: 'STORAGE E BACKUP',
    system: 'Storage e Backup',
    type: 'Requisição de serviço',
    service: 'Gestão de Armazenamento Centralizado',
    subject: 'Restauração de Arquivos Deletados do Drive Compartilhado Setorial (U: / Z:)',
    associatedProcedureId: '',
    observacoes: 'O storage corporativo executa snapshots horários (Shadow Copies) e backup diário em fita/cloud.',
    procedure: `1. Antes de abrir chamado para a equipe de Storage:
   - Clique com o botão direito na pasta pai onde o arquivo estava localizado no Windows Explorer;
   - Selecione "Restaurar versões anteriores";
   - Verifique se o snapshot do dia/horário desejado está listado e selecione "Abrir" ou "Restaurar".
2. Caso o arquivo tenha sido excluído há mais de 7 dias e não conste nas versões anteriores:
   - Abra chamado para a equipe de Storage informando o caminho completo do arquivo (UNC: \\\\servidor\\setor\\arquivo.docx) e a data aproximada da última versão íntegra.
   - O tempo de recuperação varia conforme o volume de fita a ser montado no robô de backup.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=830;Nav=',
    attachments: [
      {
        name: 'Manual Restauração Shadow Copies.pdf',
        size: '286.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=830;FileID=15686'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > INFRAESTRUTURA > STORAGE E BACKUP',
      categoria: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::STORAGE E BACKUP',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '22/01/2026 13:30 (Mayara Sales)',
      atualizadoEm: '22.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=830;Nav=',
      itemId: '830'
    }
  }
];
