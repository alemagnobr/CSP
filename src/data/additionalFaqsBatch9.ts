import { FAQ } from '@/types';

export const additionalFaqsBatch9: FAQ[] = [
  {
    id: 'faq-10001264',
    faqNumber: '10001264',
    name: 'Outlook – Programa Travando',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
    subCategory: 'ERRO',
    system: 'Office',
    type: 'Incidente',
    service: 'Suporte a Aplicações Corporativas',
    subject: 'Outlook Travando',
    associatedProcedureId: '',
    observacoes: 'Desabilitar os suplementos do Adobe Document Cloud não prejudica o uso normal do Outlook ou Acrobat.',
    procedure: `1. No Outlook, clique em Arquivo > Opções > Suplementos.
2. No rodapé em Gerenciar Suplementos COM, clique em Ir...
3. Desmarque "Acrobat PDFMaker" e "Adobe Document Cloud".
4. Clique em OK e reinicie o Outlook.
5. Caso persista, realize reparo do Office ou crie um novo perfil de e-mail.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1264;Nav=',
    attachments: [
      {
        name: 'Outlook – Programa Travando.pdf',
        size: '230.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1264;FileID=11507'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1264;FileID=10840' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1264;FileID=10841' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 10:44 (Mayara Sales)',
      alterado: '17/09/2025 14:32 (Jeferson dos Santos Morais)',
      atualizadoEm: '23.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1264;Nav=',
      itemId: '1264'
    }
  },
  {
    id: 'faq-10001266',
    faqNumber: '10001266',
    name: 'Outlook – Mensagem Não é Salva na Pasta de Itens Enviados',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
    subCategory: 'ERRO',
    system: 'Office',
    type: 'Incidente',
    service: 'Suporte a Aplicações Corporativas',
    subject: 'Mensagem Não é Salva na Pasta de Itens Enviados',
    associatedProcedureId: '',
    procedure: `1. Pressione Windows + R, digite regedit e pressione Enter.
2. Navegue até HKEY_CURRENT_USER\\Software\\Microsoft\\Office\\15.0\\Outlook\\Preferences (ou 16.0 para versões mais novas).
3. Clique com o botão direito na área livre > Novo > Valor DWORD (32 bits).
4. Nomeie como DelegateSentItemsStyle.
5. Dê duplo clique e defina o valor como 1 (caso já exista como 1, mude para 0, dê OK e depois volte para 1).
6. Feche o Editor do Registro e reinicie o Outlook.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1266;Nav=',
    attachments: [
      {
        name: 'Outlook – Mensagem Não é Salva na Pasta de Itens Enviados.pdf',
        size: '505.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1266;FileID=11508'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1266;FileID=10843' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1266;FileID=10848' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1266;FileID=10844' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1266;FileID=10846' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1266;FileID=10847' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1266;FileID=10849' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 10:56 (Mayara Sales)',
      alterado: '17/09/2025 14:32 (Jeferson dos Santos Morais)',
      atualizadoEm: '23.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1266;Nav=',
      itemId: '1266'
    }
  },
  {
    id: 'faq-10001277',
    faqNumber: '10001277',
    name: 'Outlook – Ferramenta de Reparo para Arquivos (.ost) e (.pst)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
    subCategory: 'ERRO',
    system: 'Office',
    type: 'Incidente',
    service: 'Suporte a Aplicações Corporativas',
    subject: 'Ferramenta de Reparo para Arquivos .OST e .PST do Outlook',
    associatedProcedureId: '',
    observacoes: 'PROCEDIMENTO REALIZADO PELO NÍVEL 2. O sufixo da pasta do Office identifica a versão (ex.: Office16 para Office 2016/365).',
    procedure: `1. Feche o Outlook e verifique se não há instâncias de OUTLOOK.EXE ativas no Gerenciador de Tarefas.
2. Acesse C:\\Arquivos de Programas (x86)\\Microsoft Office\\Office16 (ou pasta correspondente).
3. Execute o aplicativo SCANPST.EXE.
4. Selecione o arquivo .pst ou .ost danificado e clique em Iniciar.
5. Aguarde a verificação, marque para fazer backup antes do reparo e conclua o reparo.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1277;Nav=',
    attachments: [
      {
        name: 'Outlook – Ferramenta de Reparo para Arquivos (.ost) e (.pst).pdf',
        size: '285.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1277;FileID=11509'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1277;FileID=10852' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1277;FileID=10850' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1277;FileID=6443' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1277;FileID=10851' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 15:00 (Mayara Sales)',
      alterado: '17/09/2025 14:31 (Jeferson dos Santos Morais)',
      atualizadoEm: '23.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1277;Nav=',
      itemId: '1277'
    }
  },
  {
    id: 'faq-10001280',
    faqNumber: '10001280',
    name: 'Outlook – Suplemento Outlook Scan',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
    subCategory: 'ERRO',
    system: 'Office',
    type: 'Incidente',
    service: 'Suporte a Aplicações Corporativas',
    subject: 'Erro no Outlook 2013 – Outlook Scan',
    associatedProcedureId: '',
    technicalInfo: `• Erro: O suplemento Outlook Scan (MFEOtlk.dll da McAfee) não pode ser carregado e foi desabilitado pelo Outlook.`,
    procedure: `1. No Outlook, clique em Arquivo > Opções > Suplementos.
2. Em Gerenciar, selecione Suplementos COM e clique em Ir...
3. Desmarque ou remova a referência ao suplemento Outlook Scan.
4. Clique em OK e reinicie o aplicativo.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1280;Nav=',
    attachments: [
      {
        name: 'Outlook – Suplemento Outlook Scan.pdf',
        size: '279.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1280;FileID=11506'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1280;FileID=10856' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1280;FileID=10859' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1280;FileID=10857' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1280;FileID=10855' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 15:17 (Mayara Sales)',
      alterado: '17/09/2025 14:31 (Jeferson dos Santos Morais)',
      atualizadoEm: '23.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1280;Nav=',
      itemId: '1280'
    }
  },
  {
    id: 'faq-10001281',
    faqNumber: '10001281',
    name: 'Outlook – Erro na Pesquisa',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
    subCategory: 'ERRO',
    system: 'Office',
    type: 'Incidente',
    service: 'Suporte a Aplicações Corporativas',
    subject: 'Erro na Pesquisa do Outlook',
    associatedProcedureId: '',
    observacoes: 'Quando a pesquisa não exibe resultados ou a indexação permanece paralisada, é necessário reconstruir o índice do Windows.',
    procedure: `1. Feche o Outlook.
2. No menu Iniciar, digite "Opções de Indexação" e abra o painel.
3. Clique em Modificar, desmarque Microsoft Outlook da lista e clique em OK.
4. Clique em Avançado > na guia Configurações do Arquivo clique no botão "Recriar".
5. Clique em OK e aguarde a indexação ser finalizada em segundo plano.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1281;Nav=',
    attachments: [
      {
        name: 'Outlook – Erro na Pesquisa.pdf',
        size: '329.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1281;FileID=11510'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1281;FileID=10864' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1281;FileID=10865' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1281;FileID=10863' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1281;FileID=10861' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1281;FileID=10866' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1281;FileID=10860' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1281;FileID=10867' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 15:23 (Mayara Sales)',
      alterado: '17/09/2025 14:31 (Jeferson dos Santos Morais)',
      atualizadoEm: '23.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1281;Nav=',
      itemId: '1281'
    }
  },
  {
    id: 'faq-10001282',
    faqNumber: '10001282',
    name: 'Outlook – Erro de Suplemento',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
    subCategory: 'ERRO',
    system: 'Office',
    type: 'Incidente',
    service: 'Suporte a Aplicações Corporativas',
    subject: 'Erro de Suplemento do Outlook',
    associatedProcedureId: '',
    technicalInfo: `• Erro: "Um problema foi detectado – Modo desabilitado suplementos" afetando Outlook Social Connector ou Lync Meeting.`,
    procedure: `1. Na barra amarela de alerta do Outlook, clique em "Modo desabilitado de suplementos".
2. Na janela de diálogo, selecione o suplemento corporativo e marque "Sempre habilitar este suplemento".
3. Confirme e reinicie o aplicativo.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1282;Nav=',
    attachments: [
      {
        name: 'Outlook – Erro de Suplemento.pdf',
        size: '394.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1282;FileID=11511'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1282;FileID=10870' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1282;FileID=10869' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 15:27 (Mayara Sales)',
      alterado: '17/09/2025 14:31 (Jeferson dos Santos Morais)',
      atualizadoEm: '23.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1282;Nav=',
      itemId: '1282'
    }
  },
  {
    id: 'faq-10001284',
    faqNumber: '10001284',
    name: 'Outlook – Erro ao Iniciar',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
    subCategory: 'ERRO',
    system: 'Office',
    type: 'Incidente',
    service: 'Suporte a Aplicações Corporativas',
    subject: 'Erro ao Iniciar o Outlook',
    associatedProcedureId: '',
    observacoes: 'Ao recriar o perfil, mantenha o mesmo nome do perfil antigo para preservar histórico de destinatários e associação com o arquivo .ost.',
    procedure: `1. Feche o Outlook e abra o Painel de Controle > Mail (Microsoft Outlook).
2. Clique em "Mostrar Perfis".
3. Selecione o perfil corrompido e clique em Remover.
4. Clique em Adicionar, digite o nome do perfil, insira e-mail e senha institucional e conclua o assistente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1284;Nav=',
    attachments: [
      {
        name: 'Outlook – Erro ao Iniciar.pdf',
        size: '333.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1284;FileID=11512'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1284;FileID=10877' },
      { title: 'Imagem 2', url: 'https://capri.senado.gov.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1329;FileID=4026' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1284;FileID=10871' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1284;FileID=10873' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1284;FileID=10875' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1284;FileID=10876' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1284;FileID=10874' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1284;FileID=10878' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1284;FileID=10872' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 15:38 (Mayara Sales)',
      alterado: '17/09/2025 14:31 (Jeferson dos Santos Morais)',
      atualizadoEm: '23.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1284;Nav=',
      itemId: '1284'
    }
  },
  {
    id: 'faq-10001286',
    faqNumber: '10001286',
    name: 'Outlook – Erro ao Abrir o programa (.pst)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
    subCategory: 'ERRO',
    system: 'Office',
    type: 'Incidente',
    service: 'Suporte a Aplicações Corporativas',
    subject: 'Erro ao Abrir o Outlook (PST)',
    associatedProcedureId: '',
    observacoes: 'Ocorre quando o arquivo de pasta particular (.pst) foi renomeado, movido ou a unidade de rede mapeada está inacessível.',
    procedure: `1. Ao abrir o Outlook e surgir o erro solicitando a localização do arquivo .pst, clique em OK.
2. Na janela do Explorer que abrir, localize onde está o arquivo .pst correto no disco local ou rede.
3. Selecione o arquivo e clique em Abrir para restaurar a vinculação normal do Outlook.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1286;Nav=',
    attachments: [
      {
        name: 'Outlook – Erro ao Abrir o programa (.pst) .pdf',
        size: '214.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1286;FileID=11513'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1286;FileID=10880' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1286;FileID=10883' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1286;FileID=10882' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 15:46 (Mayara Sales)',
      alterado: '17/09/2025 14:30 (Jeferson dos Santos Morais)',
      atualizadoEm: '23.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1286;Nav=',
      itemId: '1286'
    }
  },
  {
    id: 'faq-10001289',
    faqNumber: '10001289',
    name: 'Outlook – E-mails Apagados Automaticamente pelo Lixo Eletrônico',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
    subCategory: 'ERRO',
    system: 'Office',
    type: 'Incidente',
    service: 'Suporte a Aplicações Corporativas',
    subject: 'E-mails Apagados Automaticamente pelo Lixo Eletrônico',
    associatedProcedureId: '',
    procedure: `1. Clique com o botão direito sobre um dos e-mails na caixa de entrada.
2. Selecione Lixo Eletrônico > Opções de Lixo Eletrônico.
3. Marque a opção "Sem Filtragem Automática".
4. Na guia "Remetentes Confiáveis", certifique-se de cadastrar os remetentes corporativos e verifique a lista de "Remetentes Bloqueados".
5. Clique em OK.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1289;Nav=',
    attachments: [
      {
        name: 'Outlook – E-mails Apagados Automaticamente pelo Lixo Eletrônico.pdf',
        size: '237.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1289;FileID=11514'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1289;FileID=10887' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1289;FileID=10888' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1289;FileID=10889' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1289;FileID=10885' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1289;FileID=10886' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/02/2024 16:03 (Mayara Sales)',
      alterado: '17/09/2025 14:30 (Jeferson dos Santos Morais)',
      atualizadoEm: '23.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1289;Nav=',
      itemId: '1289'
    }
  },
  {
    id: 'faq-10002264',
    faqNumber: '10002264',
    name: 'Possíveis erros de migração',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
    subCategory: 'ERRO',
    system: 'Office',
    type: 'Incidente',
    service: 'E-mail corporativo - Exchange',
    subject: 'Informações sobre possíveis erros de migração',
    associatedProcedureId: '',
    procedure: `1. Calendário do Teams não aparece após migração: O processo de sincronização leva de 1 a 2 dias; desconecte e reconecte no Teams.
2. Outlook no celular parou: remova e adicione a conta novamente.
3. Outlook Desktop parou: Arquivo > Configurações de Conta > Configurações de Conta... > Email > Reparar.
4. Se apresentar link de redirecionamento, a caixa ainda está alocada no Exchange local.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2264;Nav=',
    attachments: [
      {
        name: 'Possíveis erros de migração.pdf',
        size: '298.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2264;FileID=14599'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2264;FileID=14600' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2264;FileID=14320' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2264;FileID=14321' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '17/10/2025 15:50 (Leonardo Silva de Amarante)',
      alterado: '23/10/2025 15:41 (Leonardo Silva de Amarante)',
      atualizadoEm: '17.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2264;Nav=',
      itemId: '2264'
    }
  },
  {
    id: 'faq-10002332',
    faqNumber: '10002332',
    name: 'Outlook Web – Falha de acesso',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
    subCategory: 'ERRO',
    system: 'Office',
    type: 'Incidente',
    service: 'Suporte a Aplicações Corporativas',
    subject: 'Outlook Web – Falha de acesso',
    associatedProcedureId: '',
    observacoes: 'Indica que o usuário não possui licença adequada atribuída ao perfil no AD.',
    procedure: `1. Verifique no Active Directory (AD) o perfil do usuário:
   - Se possuir a licença Lic-ExchK: encaminhar chamado para análise da equipe N2.
   - Se não possuir a licença: direcionar à equipe do SUAPE para verificação e concessão de acesso ao ambiente Web.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2332;Nav=',
    attachments: [
      {
        name: 'Outlook Web - Falha de acesso.pdf',
        size: '270.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2332;FileID=16711'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2332;FileID=16064' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
      palavrasChave: 'licença aposentado',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '12/03/2026 08:50 (Mayara Sales)',
      alterado: '02/07/2026 15:06 (Leonardo Silva de Amarante)',
      atualizadoEm: '02.07.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2332;Nav=',
      itemId: '2332'
    }
  },
  {
    id: 'faq-10002333',
    faqNumber: '10002333',
    name: 'Outlook – Modo de segurança',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
    subCategory: 'ERRO',
    system: 'Office',
    type: 'Incidente',
    service: 'Suporte a Aplicações Corporativas',
    subject: 'Outlook – Modo de segurança',
    associatedProcedureId: '',
    procedure: `1. Na mensagem solicitando abertura em Modo de Segurança, clique em Sim.
2. No Outlook aberto, clique em Arquivo > Opções > Suplementos.
3. No rodapé, clique em Ir...
4. Desmarque o suplemento "Microsoft Teams Meeting Add-in for Microsoft Office".
5. Clique em OK e reinicie o Outlook normalmente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2333;Nav=',
    attachments: [
      {
        name: 'Outlook – Modo de Segurança.pdf',
        size: '286.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2333;FileID=16073'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2333;FileID=16070' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2333;FileID=16071' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2333;FileID=16072' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::ERRO',
      palavrasChave: 'Modo de segurança',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '12/03/2026 11:28 (Mayara Sales)',
      alterado: '12/03/2026 11:37 (Mayara Sales)',
      atualizadoEm: '12.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2333;Nav=',
      itemId: '2333'
    }
  },
  {
    id: 'faq-10001142',
    faqNumber: '10001142',
    name: 'Outlook Web – Abrir Caixa Institucional',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de Aplicações Corporativas',
    subject: 'Solicita abrir a caixa postal institucional no Outlook Web',
    associatedProcedureId: '',
    observacoes: 'A caixa institucional permanece acessível enquanto a sessão da conta pessoal estiver conectada.',
    procedure: `1. Acesse https://outlook.live.com/mail/0/ (ou portal corporativo) com seu e-mail e senha do Senado e autentique via Microsoft Authenticator.
2. Clique na foto do seu perfil (canto superior direito) e selecione "Abrir outra caixa de correio".
3. Digite o nome ou alias da caixa institucional e clique em Abrir.
4. Caso surja mensagem de acesso negado, solicite permissão formal via Central de Serviços (Correio Eletrônico > Autorização de acesso a caixa postal institucional).`,
    relatedLinks: [
      { title: 'Outlook Web', url: 'https://outlook.live.com/mail/0/' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1142;Nav=',
    attachments: [
      {
        name: 'Outlook Web – Abrir Caixa Institucional.pdf',
        size: '357.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1142;FileID=16766'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1142;FileID=14445' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1142;FileID=14438' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1142;FileID=14444' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1142;FileID=14443' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1142;FileID=14440' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1142;FileID=14442' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1142;FileID=14439' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1142;FileID=14441' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 09:34 (Samantha Hellen da Silva Menezes)',
      alterado: '09/07/2026 15:52 (Mayara Sales)',
      atualizadoEm: '17.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1142;Nav=',
      itemId: '1142'
    }
  },
  {
    id: 'faq-10001144',
    faqNumber: '10001144',
    name: 'Outlook Web – Acesso',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de Aplicações Corporativas',
    subject: 'Solicita orientação para acessar o Outlook Web',
    associatedProcedureId: '',
    procedure: `1. Acesse o portal do Outlook Web pelo navegador.
2. Digite o e-mail institucional e clique em Avançar.
3. Insira a senha de rede e valide a autenticação em dois fatores com o aplicativo Microsoft Authenticator.`,
    relatedLinks: [
      { title: 'Outlook Web', url: 'https://outlook.live.com/mail/0/' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1144;Nav=',
    attachments: [
      {
        name: 'Outlook Web - Acesso.pdf',
        size: '285.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1144;FileID=16767'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1144;FileID=14435' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1144;FileID=14434' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1144;FileID=14433' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 09:38 (Samantha Hellen da Silva Menezes)',
      alterado: '09/07/2026 15:52 (Mayara Sales)',
      atualizadoEm: '16.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1144;Nav=',
      itemId: '1144'
    }
  },
  {
    id: 'faq-10001148',
    faqNumber: '10001148',
    name: 'Outlook – Adicionar Lembrete',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de Aplicações Corporativas',
    subject: 'Configuração para adicionar lembrete no Outlook',
    associatedProcedureId: '',
    procedure: `1. Abra a mensagem de e-mail desejada.
2. Na faixa de opções, clique em Acompanhamento > "Adicionar Lembrete...".
3. Configure a data e a hora do lembrete e clique em OK.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1148;Nav=',
    attachments: [
      {
        name: 'Outlook – Adicionar Lembrete.pdf',
        size: '142.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1148;FileID=11558'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1148;FileID=10905' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1148;FileID=10907' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1148;FileID=10906' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 09:54 (Samantha Hellen da Silva Menezes)',
      alterado: '18/09/2025 16:00 (Gabriel Queiroz Pires)',
      atualizadoEm: '24.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1148;Nav=',
      itemId: '1148'
    }
  },
  {
    id: 'faq-10001150',
    faqNumber: '10001150',
    name: 'Outlook – Adicionar Lista de Distribuição',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de Aplicações Corporativas',
    subject: 'Configuração para adicionar lista de distribuição no Outlook',
    associatedProcedureId: '',
    observacoes: 'As listas de distribuição são gerenciadas pelo MidPoint e requerem permissão prévia via Central de Serviços.',
    procedure: `1. Ao redigir uma mensagem, clique no campo "Para..." ou em Catálogo de Endereços.
2. Na caixa de catálogo, selecione "All Distribution Lists".
3. Localize a lista de distribuição desejada e clique em OK.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1150;Nav=',
    attachments: [
      {
        name: 'Outlook – Adicionar Lista de Distribuição.pdf',
        size: '314.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1150;FileID=11557'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1150;FileID=10908' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1150;FileID=10911' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1150;FileID=10909' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 10:06 (Samantha Hellen da Silva Menezes)',
      alterado: '18/09/2025 15:59 (Gabriel Queiroz Pires)',
      atualizadoEm: '24.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1150;Nav=',
      itemId: '1150'
    }
  },
  {
    id: 'faq-10001155',
    faqNumber: '10001155',
    name: 'Outlook – Alterar a Cor dos E-mails',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de Aplicações Corporativas',
    subject: 'Solicita a configuração para alterar a cor dos e-mails recebidos',
    associatedProcedureId: '',
    procedure: `1. No Outlook, clique na guia Exibir > "Configurações do Modo de Exibição".
2. Clique em "Formatação Condicional..." > Adicionar.
3. Defina um nome para a regra e clique em Fonte para escolher a cor desejada.
4. Clique em Condição... e defina os critérios (exemplo: remetente específico ou somente e-mails não lidos).
5. Clique em OK até fechar todas as janelas. Para restaurar o padrão, clique em "Redefinir Modo de Exibição".`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1155;Nav=',
    attachments: [
      {
        name: 'Outlook – Alterar a Cor dos E-mails.pdf',
        size: '459.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1155;FileID=11556'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1155;FileID=10913' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1155;FileID=10912' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1155;FileID=5036' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1155;FileID=10914' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1155;FileID=10920' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1155;FileID=10918' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1155;FileID=10915' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 10:21 (Samantha Hellen da Silva Menezes)',
      alterado: '18/09/2025 15:58 (Gabriel Queiroz Pires)',
      atualizadoEm: '24.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1155;Nav=',
      itemId: '1155'
    }
  },
  {
    id: 'faq-10001157',
    faqNumber: '10001157',
    name: 'Outlook – Atualizar Catálogo de Endereço',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de Aplicações Corporativas',
    subject: 'Solicita a atualização do catálogo de endereços do Outlook',
    associatedProcedureId: '',
    procedure: `1. Clique em Arquivo > Configurações de Conta.
2. Selecione "Baixar o Catálogo de Endereços...".
3. Marque "Baixar alterações desde a última operação Enviar/Receber" e confirme em OK.
4. Aguarde o download sumir da tela e reinicie o Outlook.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1157;Nav=',
    attachments: [
      {
        name: 'Outlook – Atualizar Catálogo de Endereço.pdf',
        size: '259.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1157;FileID=11555'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1157;FileID=10923' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1157;FileID=10924' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1157;FileID=10921' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1157;FileID=10922' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 10:32 (Samantha Hellen da Silva Menezes)',
      alterado: '18/09/2025 15:57 (Gabriel Queiroz Pires)',
      atualizadoEm: '24.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1157;Nav=',
      itemId: '1157'
    }
  },
  {
    id: 'faq-10001163',
    faqNumber: '10001163',
    name: 'Outlook – Ausência Temporária',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de Aplicações Corporativas',
    subject: 'Configuração de ausência temporária no Outlook',
    associatedProcedureId: '',
    procedure: `1. Clique em Arquivo > Respostas Automáticas.
2. Marque a opção "Enviar respostas automáticas".
3. Opcionalmente, marque "Só enviar durante este intervalo de tempo" e defina início e término.
4. Digite a mensagem na guia "Dentro da minha organização" e, se necessário, na guia "Fora da minha organização".
5. Clique em OK.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1163;Nav=',
    attachments: [
      {
        name: 'Outlook – Ausência Temporária.pdf',
        size: '307.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1163;FileID=11554'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1163;FileID=10929' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1163;FileID=10927' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1163;FileID=10931' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1163;FileID=10928' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1163;FileID=10930' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 10:58 (Samantha Hellen da Silva Menezes)',
      alterado: '18/09/2025 15:55 (Gabriel Queiroz Pires)',
      atualizadoEm: '24.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1163;Nav=',
      itemId: '1163'
    }
  },
  {
    id: 'faq-10001168',
    faqNumber: '10001168',
    name: 'Outlook – Backup Arquivos de Dados (.pst)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de Aplicações Corporativas',
    subject: 'Solicita o backup do Outlook (Arquivo dados .pst)',
    associatedProcedureId: '',
    procedure: `1. No Outlook, clique em Arquivo > Abrir e Exportar > Importar/Exportar.
2. Escolha "Exportar para um arquivo" > Avançar.
3. Selecione "Arquivo de Dados do Outlook (.pst)" > Avançar.
4. Selecione a caixa inteira ou pastas específicas que deseja exportar (marque "Incluir subpastas").
5. Defina o local de destino do backup e clique em Concluir.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1168;Nav=',
    attachments: [
      {
        name: 'Outlook – Backup Arquivos de Dados (.pst).pdf',
        size: '493.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1168;FileID=11553'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1168;FileID=10949' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1168;FileID=10945' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1168;FileID=10946' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1168;FileID=10948' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1168;FileID=10943' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1168;FileID=10944' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1168;FileID=10947' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 11:13 (Samantha Hellen da Silva Menezes)',
      alterado: '18/09/2025 15:54 (Gabriel Queiroz Pires)',
      atualizadoEm: '25.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1168;Nav=',
      itemId: '1168'
    }
  },
  {
    id: 'faq-10001182',
    faqNumber: '10001182',
    name: 'Outlook – Caixa Institucional (Primeira Opção)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de Aplicações Corporativas',
    subject: 'Solicita a configuração da caixa institucional como primeira opção',
    associatedProcedureId: '',
    procedure: `1. Clique com o botão direito sobre o nome da caixa postal pessoal e selecione "Propriedades de Arquivo de Dados...".
2. Clique em Avançado > guia Avançado > Adicionar...
3. Digite o nome da caixa institucional e confirme em OK.
4. No painel de navegação esquerdo, clique na caixa institucional adicionada, segure e arraste-a para a posição superior desejada.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1182;Nav=',
    attachments: [
      {
        name: 'Outlook – Caixa Institucional (Primeira Opção).pdf',
        size: '325.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1182;FileID=11552'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1182;FileID=10952' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1182;FileID=10954' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1182;FileID=10951' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 13:10 (Samantha Hellen da Silva Menezes)',
      alterado: '18/09/2025 15:53 (Gabriel Queiroz Pires)',
      atualizadoEm: '25.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1182;Nav=',
      itemId: '1182'
    }
  },
  {
    id: 'faq-10001183',
    faqNumber: '10001183',
    name: 'Outlook – Caixa Institucional',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de caixa postal institucional',
    subject: 'Solicita a configuração da caixa institucional',
    associatedProcedureId: '',
    observacoes: 'Para Senadores, o endereço sempre inicia por "sen." (exemplo: sen.nome@senado.leg.br).',
    procedure: `1. No Outlook, clique em Arquivo > Adicionar Conta.
2. Digite o endereço de e-mail da caixa institucional.
3. Clique em Conectar. Quando solicitado credencial, insira o e-mail e senha do usuário atendido.
4. Clique em Concluído e reinicie o Outlook.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1183;Nav=',
    attachments: [
      {
        name: 'Outlook – Caixa Institucional.pdf',
        size: '387.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1183;FileID=11549'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1183;FileID=10959' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1183;FileID=10955' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1183;FileID=10958' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1183;FileID=10961' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1183;FileID=10960' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1183;FileID=10957' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1183;FileID=10956' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1183;FileID=10963' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1183;FileID=10962' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '30/01/2024 17:47 (Samantha Hellen da Silva Menezes)',
      alterado: '17/10/2025 13:59 (Leonardo Silva de Amarante)',
      atualizadoEm: '17.10.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1183;Nav=',
      itemId: '1183'
    }
  },
  {
    id: 'faq-10001204',
    faqNumber: '10001204',
    name: 'Outlook – Caixa Institucional (Separada)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de caixa Postal Institucional',
    subject: 'Solicita a configuração da caixa institucional separada',
    associatedProcedureId: '',
    procedure: `1. Feche o Outlook e abra o Painel de Controle > Mail (Microsoft Outlook).
2. Clique em "Mostrar perfis..." > "Adicionar" e dê um nome ao perfil (ex.: Caixa Setor).
3. Selecione "Microsoft 365" e insira o e-mail institucional.
4. Marque a opção "Solicitar um perfil a ser usado", clique em Aplicar e em OK.
5. Ao abrir o Outlook, selecione o perfil da caixa institucional para carregá-la de forma independente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1204;Nav=',
    attachments: [
      {
        name: 'Outlook – Caixa Institucional (Separada).pdf',
        size: '559.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1204;FileID=16995'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1204;FileID=16986' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1204;FileID=16988' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1204;FileID=16991' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1204;FileID=16989' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1204;FileID=16990' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1204;FileID=16987' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1204;FileID=16992' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1204;FileID=16994' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1204;FileID=16993' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '31/01/2024 12:14 (Samantha Hellen da Silva Menezes)',
      alterado: '07/08/2026 15:46 (Leonardo Silva de Amarante)',
      atualizadoEm: '07.08.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1204;Nav=',
      itemId: '1204'
    }
  },
  {
    id: 'faq-10001210',
    faqNumber: '10001210',
    name: 'Outlook – Calendário Sobreposto',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de Aplicações Corporativas',
    subject: 'Calendário Sobreposto',
    associatedProcedureId: '',
    procedure: `1. No Outlook, selecione a visualização de Calendário.
2. Na guia Exibir, verifique se a opção "Sobreposição" está ativa na barra de ferramentas ou na guia da aba do calendário secundário (seta virada para a esquerda/direita).
3. Desative a sobreposição para que os calendários sejam exibidos lado a lado.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1210;Nav=',
    attachments: [
      {
        name: 'Outlook – Calendário Sobreposto.pdf',
        size: '284.0 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1210;FileID=11548'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1210;FileID=10979' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1210;FileID=10978' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1210;FileID=10980' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '31/01/2024 13:49 (Samantha Hellen da Silva Menezes)',
      alterado: '18/09/2025 15:49 (Gabriel Queiroz Pires)',
      atualizadoEm: '28.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1210;Nav=',
      itemId: '1210'
    }
  },
  {
    id: 'faq-10001211',
    faqNumber: '10001211',
    name: 'Outlook – Categorizar E-mail',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de Aplicações Corporativas',
    subject: 'Solicita a configuração para categorizar os e-mails',
    associatedProcedureId: '',
    procedure: `1. Clique com o botão direito sobre um e-mail.
2. Selecione Categorizar > "Todas as Categorias...".
3. Clique em "Nova...", defina o nome, escolha a cor e atribua tecla de atalho opcional.
4. Clique em OK para salvar. Para aplicar, basta clicar na categoria ou usar o atalho.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1211;Nav=',
    attachments: [
      {
        name: 'Outlook – Categorizar E-mail.pdf',
        size: '244.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1211;FileID=11546'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1211;FileID=10985' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1211;FileID=10984' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1211;FileID=10983' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1211;FileID=10982' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '31/01/2024 14:00 (Samantha Hellen da Silva Menezes)',
      alterado: '18/09/2025 15:48 (Gabriel Queiroz Pires)',
      atualizadoEm: '28.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1211;Nav=',
      itemId: '1211'
    }
  },
  {
    id: 'faq-10001212',
    faqNumber: '10001212',
    name: 'Outlook – Cancelar E-mail Enviado',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de Aplicações Corporativas',
    subject: 'Configuração para cancelar um e-mail já enviado',
    associatedProcedureId: '',
    observacoes: 'O cancelamento só funciona para destinatários da organização (Exchange) que ainda não leram a mensagem.',
    procedure: `1. Na pasta Itens Enviados, abra com duplo clique a mensagem enviada.
2. Na guia Mensagem, grupo Mover, clique em Ações > "Cancelar Mensagem Enviada...".
3. Escolha "Excluir cópias não lidas desta mensagem" e marque para ser avisado sobre o êxito do cancelamento.
4. Clique em OK.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1212;Nav=',
    attachments: [
      {
        name: 'Outlook – Cancelar E-mail Enviado.pdf',
        size: '217.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1212;FileID=11547'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1212;FileID=10989' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1212;FileID=10988' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '31/01/2024 14:08 (Samantha Hellen da Silva Menezes)',
      alterado: '18/09/2025 15:47 (Gabriel Queiroz Pires)',
      atualizadoEm: '28.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1212;Nav=',
      itemId: '1212'
    }
  },
  {
    id: 'faq-10001244',
    faqNumber: '10001244',
    name: 'Outlook – Criar Regra na Caixa Institucional',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Criação/exclusão de regras em e-mails',
    subject: 'Solicita a configuração para criar regra em caixas institucionais',
    associatedProcedureId: '',
    observacoes: 'Recomenda-se criar a regra via Outlook Web para que ela seja executada no servidor e compartilhada com toda a equipe do setor.',
    procedure: `1. Acesse o Outlook Web com sua conta e autentique via Microsoft Authenticator.
2. Clique na sua foto de perfil > "Abrir outra caixa de correio" e insira a caixa institucional.
3. Na janela da caixa institucional, clique no ícone da engrenagem (Configurações) > Email > Regras.
4. Clique em "Adicionar nova regra", defina condição, ação e marque "Executar regra agora".
5. Clique em Salvar.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1244;Nav=',
    attachments: [
      {
        name: 'Outlook – Criar Regra na Caixa Institucional.pdf',
        size: '321.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1244;FileID=13495'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1244;FileID=13496' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1244;FileID=13494' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1244;FileID=10993' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1244;FileID=10992' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1244;FileID=11003' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1244;FileID=10999' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1244;FileID=10997' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1244;FileID=11000' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/02/2024 11:07 (Samantha Hellen da Silva Menezes)',
      alterado: '24/02/2026 13:25 (Jeferson dos Santos Morais)',
      atualizadoEm: '29.04.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1244;Nav=',
      itemId: '1244'
    }
  },
  {
    id: 'faq-10001246',
    faqNumber: '10001246',
    name: 'Outlook – Criar Grupo de Contatos no Outlook',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Office',
    type: 'Requisição de serviço',
    service: 'Configuração de Aplicações Corporativas',
    subject: 'Configuração para criar grupo de contatos no Outlook',
    associatedProcedureId: '',
    observacoes: 'Para listas de distribuição corporativas com abrangência institucional, deve-se solicitar pela Central de Serviços.',
    procedure: `1. No Outlook, selecione o ícone "Pessoas" (Contatos).
2. Clique em "Novo Grupo de Contatos".
3. Digite o nome do grupo e clique em "Adicionar Membros" > "Do Catálogo de Endereços" ou "Novos Contatos de Email".
4. Adicione todos os membros desejados e clique em OK.
5. Clique em "Salvar e Fechar".`,
    relatedLinks: [
      { title: 'Senadores em Exercício', url: 'https://www25.senado.leg.br/web/senadores/em-exercicio' }
    ],
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1246;Nav=',
    attachments: [
      {
        name: 'Outlook – Criar Grupo de Contatos no Outlook.pdf',
        size: '313.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1246;FileID=15268'
      }
    ],
    visualRefs: [
      { title: 'Imagem 1', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1246;FileID=15269' },
      { title: 'Imagem 2', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1246;FileID=11005' },
      { title: 'Imagem 3', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1246;FileID=11004' },
      { title: 'Imagem 4', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1246;FileID=11008' },
      { title: 'Imagem 5', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1246;FileID=15264' },
      { title: 'Imagem 6', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1246;FileID=15267' },
      { title: 'Imagem 7', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1246;FileID=15266' },
      { title: 'Imagem 8', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1246;FileID=11009' },
      { title: 'Imagem 9', url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=1246;FileID=15265' }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > OFFICE > OUTLOOK > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::OFFICE::OUTLOOK::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/02/2024 11:36 (Samantha Hellen da Silva Menezes)',
      alterado: '14/11/2025 10:17 (Jeferson dos Santos Morais)',
      atualizadoEm: '14.11.2025',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=1246;Nav=',
      itemId: '1246'
    }
  }
];
