import { FAQ } from '@/types';

export const additionalFaqsBatch25: FAQ[] = [
  {
    id: 'faq-10002443',
    faqNumber: '10002443',
    name: 'Audiovisual – Operação de Salas de Reunião Híbridas (Webex Room Kit e Câmeras PTZ)',
    category: 'CENTRAL DE ATENDIMENTO::MULTIMÍDIA::SALAS DE REUNIÃO',
    subCategory: 'SALAS DE REUNIÃO',
    system: 'Multimídia',
    type: 'Requisição de serviço',
    service: 'Suporte a Videoconferência e Eventos Híbridos',
    subject: 'Inicialização do Sistema Touch 10, Seleção de Layout e Enquadramento Inteligente',
    associatedProcedureId: '',
    observacoes: 'Salas com agendamento prévio no Outlook possuem botão verde "Entrar" (One Button to Push).',
    procedure: `1. Toque na tela do painel de controle Cisco Touch 10 sobre a mesa da sala de reunião para despertar o sistema.
2. Caso a reunião tenha sido agendada pelo Outlook incluindo a sala como recurso:
   - Toque no botão verde "Entrar" correspondente à pauta do dia.
3. Para iniciar reunião avulsa ou discar para endpoint externo:
   - Toque em "Chamar" e digite o número da sala virtual Webex ou endereço SIP (ex: reuniao@senado.webex.com);
   - Pressione o botão verde de discagem.
4. Ajuste da Câmera PTZ:
   - No painel Touch, selecione "Câmera";
   - Ative a opção "SpeakerTrack" ou "Best Overview" para enquadramento automático da pessoa que estiver com a palavra.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2443;Nav=',
    attachments: [
      {
        name: 'Manual Operação Salas Híbridas.pdf',
        size: '350.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2443;FileID=15695'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > MULTIMÍDIA > SALAS DE REUNIÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::MULTIMÍDIA::SALAS DE REUNIÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '10/02/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '28/01/2026 09:30 (Mayara Sales)',
      atualizadoEm: '28.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2443;Nav=',
      itemId: '2443'
    }
  },
  {
    id: 'faq-10002444',
    faqNumber: '10002444',
    name: 'Audiovisual – Compartilhamento sem Fio (Proximity / Miracast / AirPlay) nas Salas de Reunião',
    category: 'CENTRAL DE ATENDIMENTO::MULTIMÍDIA::SALAS DE REUNIÃO',
    subCategory: 'SALAS DE REUNIÃO',
    system: 'Multimídia',
    type: 'Requisição de serviço',
    service: 'Suporte a Videoconferência e Eventos Híbridos',
    subject: 'Transmissão de Tela de Notebooks e Dispositivos Móveis sem Uso de Cabo HDMI',
    associatedProcedureId: '',
    observacoes: 'O notebook deve estar conectado à rede Wi-Fi "Senado-Corporativo" ou à rede cabeada local.',
    procedure: `1. Para transmissão via aplicativo Cisco Webex (Recomendado):
   - Abra o aplicativo Webex no seu notebook;
   - O aplicativo detectará por ultrassom o codec da sala e exibirá a opção "Conectar a um dispositivo";
   - Clique em "Compartilhar tela" e selecione se deseja transmitir a tela inteira ou uma janela específica.
2. Para transmissão nativa via Windows (Miracast):
   - Pressione o atalho Windows + K no notebook;
   - Selecione o nome da sala exibido no canto superior direito do monitor principal da sala;
   - Digite o código PIN de 4 dígitos gerado temporariamente na tela da sala.
3. Para conexões cabeadas legadas, utilize o cabo HDMI retrátil central na mesa com adaptador USB-C homologado.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2444;Nav=',
    attachments: [
      {
        name: 'Guia Compartilhamento sem Fio.pdf',
        size: '280.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2444;FileID=15696'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > MULTIMÍDIA > SALAS DE REUNIÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::MULTIMÍDIA::SALAS DE REUNIÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '10/02/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '28/01/2026 10:00 (Mayara Sales)',
      atualizadoEm: '28.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2444;Nav=',
      itemId: '2444'
    }
  },
  {
    id: 'faq-10002445',
    faqNumber: '10002445',
    name: 'Assinatura Digital Avançada – Assinatura Eletrônica via Conta Gov.br',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL',
    subCategory: 'CERTIFICADO DIGITAL',
    system: 'Assinador Digital',
    type: 'Requisição de serviço',
    service: 'Identificação Digital e Assinatura Eletrônica',
    subject: 'Uso do Assinador do Portal Gov.br (Nível Prata ou Ouro) em Documentos Administrativos',
    associatedProcedureId: '',
    observacoes: 'A assinatura eletrônica avançada Gov.br possui validade legal plena no âmbito da Administração Pública Federal (Lei 14.063/2020).',
    procedure: `1. Acesse o portal oficial de assinatura do Governo Federal: https://assinador.iti.br (ou assine.iti.br).
2. Faça login com CPF e senha da sua conta Gov.br (obrigatório selo nível Prata ou Ouro).
3. Clique em "Escolher arquivo" e selecione o documento PDF que deseja assinar (limite de 100 MB).
4. Posicione o retângulo visual da assinatura na página e local desejados do documento.
5. Clique em "Avançar" e confirme a autenticação via código enviado ao aplicativo Gov.br no smartphone.
6. Baixe o documento assinado digitalmente para juntada ao processo no SIGAD.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2445;Nav=',
    attachments: [
      {
        name: 'Passo a Passo Assinador Gov.br.pdf',
        size: '315.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2445;FileID=15697'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '10/02/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '28/01/2026 10:30 (Mayara Sales)',
      atualizadoEm: '28.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2445;Nav=',
      itemId: '2445'
    }
  },
  {
    id: 'faq-10002446',
    faqNumber: '10002446',
    name: 'Assinatura Digital – Validação de Conformidade e Carimbo do Tempo (Verificador ITI)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL',
    subCategory: 'CERTIFICADO DIGITAL',
    system: 'Assinador Digital',
    type: 'Requisição de serviço',
    service: 'Identificação Digital e Assinatura Eletrônica',
    subject: 'Conferência de Autenticidade, Cadeia de Certificação e Integridade de Documentos Recebidos',
    associatedProcedureId: '',
    observacoes: 'O Verificador do ITI é o padrão oficial para conferência de documentos recebidos de órgãos externos.',
    procedure: `1. Acesse o Verificador de Conformidade do Instituto Nacional de Tecnologia da Informação: https://verificador.iti.gov.br.
2. Marque a concordância com os termos de privacidade e clique em "Selecionar arquivo".
3. Envie o arquivo PDF que contém a assinatura digital recebida de terceiros ou parlamentares.
4. Clique no botão "Verificar conformidade".
5. O sistema exibirá o relatório oficial contendo:
   - Status da assinatura: "Aprovado" ou "Reprovado";
   - Titular e autoridade certificadora emissora (ICP-Brasil);
   - Validade do carimbo do tempo e integridade do hash criptográfico.
6. Caso o parecer seja aprovado, o documento pode ser aceito para instrução processual.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2446;Nav=',
    attachments: [
      {
        name: 'Guia Validação de Assinaturas ITI.pdf',
        size: '260.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2446;FileID=15698'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '10/02/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '28/01/2026 11:00 (Mayara Sales)',
      atualizadoEm: '28.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2446;Nav=',
      itemId: '2446'
    }
  },
  {
    id: 'faq-10002447',
    faqNumber: '10002447',
    name: 'Patrimônio e Desfazimento – Recolhimento de Microcomputadores e Periféricos Obsoletos',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::PATRIMÔNIO',
    subCategory: 'PATRIMÔNIO',
    system: 'Patrimônio de TI',
    type: 'Requisição de serviço',
    service: 'Gestão de Ativos e Logística Reversa',
    subject: 'Devolução de Equipamentos Antigos, Quebrados ou Fora do Ciclo de Vida',
    associatedProcedureId: '',
    observacoes: 'Nenhum equipamento patrimoniado pode ser descartado em lixo comum ou transferido sem registro no SIGPAT.',
    procedure: `1. O responsável patrimonial do setor ou gabinete deve realizar o levantamento dos números de plaqueta (etiqueta patrimonial do Senado).
2. Abra chamado na Central de Serviços:
   Informática > Suporte Técnico > Recolhimento de Equipamento / Baixa.
3. Liste os números de patrimônio e a localização exata das estações, monitores ou nobreaks.
4. A equipe de Nível 2 comparecerá ao local com Termo de Devolução Provisório para conferência física.
5. Os equipamentos recolhidos são encaminhados para a triagem da Coordenação de Suporte para reaproveitamento ou doação oficial a escolas públicas.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2447;Nav=',
    attachments: [
      {
        name: 'Norma de Desfazimento de Bens de TI.pdf',
        size: '302.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2447;FileID=15699'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > PATRIMÔNIO',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::PATRIMÔNIO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '10/02/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '28/01/2026 11:30 (Mayara Sales)',
      atualizadoEm: '28.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2447;Nav=',
      itemId: '2447'
    }
  },
  {
    id: 'faq-10002448',
    faqNumber: '10002448',
    name: 'Segurança da Informação – Procedimento de Descarte Seguro e Sanitização de Mídias de Armazenamento',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::DESCARTE',
    subCategory: 'DESCARTE',
    system: 'Segurança da Informação',
    type: 'Requisição de serviço',
    service: 'Proteção de Dados e Descarte Seguro de Mídias',
    subject: 'Sanitização Criptográfica (NIST SP 800-88) e Desmagnetização de HDs e SSDs',
    associatedProcedureId: '',
    observacoes: 'Garante que dados confidenciais do Senado não possam ser recuperados após a doação ou leilão de computadores.',
    procedure: `1. Todas as mídias magnéticas (HDDs) e em estado sólido (SSDs) recolhidas são direcionadas ao laboratório de segurança da DITEC.
2. Execução da sanitização conforme norma NIST SP 800-88 Rev 1:
   - Discos reaproveitáveis: Execução de sobrescrita segura com algoritmo de múltiplos passos (Cryptographic Erase / ATA Secure Erase);
   - Discos defeituosos ou irrecuperáveis: Submissão ao equipamento de desmagnetização física (Degausser) seguido de perfuração mecânica.
3. É emitido o Certificado de Destruição Segura de Dados com número de série e hash da mídia para juntada ao processo de baixa patrimonial.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2448;Nav=',
    attachments: [
      {
        name: 'Procedimento Sanitização NIST 800-88.pdf',
        size: '318.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2448;FileID=15700'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA DA INFORMAÇÃO > DESCARTE',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::DESCARTE',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '10/02/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '28/01/2026 12:00 (Mayara Sales)',
      atualizadoEm: '28.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2448;Nav=',
      itemId: '2448'
    }
  },
  {
    id: 'faq-10002449',
    faqNumber: '10002449',
    name: 'Impressão Corporativa – Liberação de Impressão Segura por Crachá (Follow-Me / SafeQ)',
    category: 'CENTRAL DE ATENDIMENTO::IMPRESSÃO::LIBERAÇÃO SEGURA',
    subCategory: 'LIBERAÇÃO SEGURA',
    system: 'Sistema de Impressão',
    type: 'Requisição de serviço',
    service: 'Gestão Centralizada de Impressão (Pull Printing)',
    subject: 'Autenticação RFID por Crachá Funcional e Liberação de Trabalhos em Qualquer Multifuncional',
    associatedProcedureId: '',
    observacoes: 'Trabalhos não liberados no equipamento em até 24 horas são cancelados automaticamente para economia de papel.',
    procedure: `1. Ao imprimir um documento no computador, selecione a impressora corporativa "\\\\printserver\\Fila-Segura-Senado".
2. Dirija-se a qualquer multifuncional corporativa espalhada pelos corredores ou prédios do Senado.
3. Aproxime o seu crachá funcional do leitor RFID identificado na lateral da multifuncional:
   - Se for o primeiro acesso, o painel solicitará que informe seu login de rede e senha uma única vez para vincular o cartão.
4. No painel de toque da impressora, selecione "Trabalhos de Impressão".
5. Marque os documentos desejados e toque em "Imprimir".
6. Pressione o botão "Sair" (Logout) no painel após recolher os documentos impressos.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2449;Nav=',
    attachments: [
      {
        name: 'Manual Fila Segura Follow-Me.pdf',
        size: '290.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2449;FileID=15701'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > IMPRESSÃO > LIBERAÇÃO SEGURA',
      categoria: 'CENTRAL DE ATENDIMENTO::IMPRESSÃO::LIBERAÇÃO SEGURA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '10/02/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '28/01/2026 12:30 (Mayara Sales)',
      atualizadoEm: '28.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2449;Nav=',
      itemId: '2449'
    }
  },
  {
    id: 'faq-10002450',
    faqNumber: '10002450',
    name: 'Telefonia – Configuração de Siga-me (Desvio de Chamadas do Ramal para Celular)',
    category: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::TELEFONIA',
    subCategory: 'TELEFONIA',
    system: 'Telefonia',
    type: 'Requisição de serviço',
    service: 'Gestão de Ramais e Telefonia IP',
    subject: 'Programação de Desvio de Ligações em Períodos de Teletrabalho ou Missão Oficial',
    associatedProcedureId: '',
    observacoes: 'Desvio para telefones celulares externos requer perfil de discagem habilitado para o ramal pela SERETEL.',
    procedure: `1. Para ativar o Siga-me diretamente no aparelho telefônico IP:
   - Pressione a tecla de função correspondente a "Desvio" (ou "CFwdALL" / "Siga-me");
   - Digite o número de destino:
     - Para outro ramal interno: digite apenas os 4 dígitos do ramal;
     - Para celular corporativo: digite 0 + DDD (se fora de Brasília) + número do celular;
   - Uma mensagem com seta indicativa confirmará o desvio ativo na tela do aparelho.
2. Para desativar o Siga-me:
   - Pressione novamente a tecla "Canc Desvio" (ou "CFwdALL") no aparelho telefônico;
   - O visor voltará a exibir seu nome e número de ramal padrão.
3. Em caso de dúvidas sobre autorização de chamadas para celular, abra chamado para o Serviço de Redes e Telefonia (SERETEL).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2450;Nav=',
    attachments: [
      {
        name: 'Guia Prático Siga-me Telefonia.pdf',
        size: '255.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2450;FileID=15702'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > EQUIPAMENTOS > TELEFONIA',
      categoria: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::TELEFONIA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '10/02/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '28/01/2026 13:00 (Mayara Sales)',
      atualizadoEm: '28.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2450;Nav=',
      itemId: '2450'
    }
  }
];
