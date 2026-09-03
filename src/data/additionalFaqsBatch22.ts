import { FAQ } from '@/types';

export const additionalFaqsBatch22: FAQ[] = [
  {
    id: 'faq-1000811',
    faqNumber: '1000811',
    name: 'Wi-Fi Institucional – Conexão e Certificado na Rede "Senado"',
    category: 'CENTRAL DE ATENDIMENTO::REDE::CONECTIVIDADE SEM FIO',
    subCategory: 'CONECTIVIDADE SEM FIO',
    system: 'Rede Sem Fio',
    type: 'Requisição de serviço',
    service: 'Conectividade Wi-Fi e Mobilidade',
    subject: 'Configuração da Rede Sem Fio Corporativa (WPA2/WPA3-Enterprise)',
    associatedProcedureId: '',
    observacoes: 'Disponível exclusivamente para servidores, comissionados e estagiários com conta ativa de rede.',
    procedure: `1. Selecione a rede Wi-Fi denominada "Senado" na lista de redes disponíveis.
2. Ao solicitar autenticação, utilize o método EAP: PEAP com MSCHAPv2.
3. Insira sua credencial de rede (apenas o login, sem @senado.leg.br) e a senha institucional.
4. Se o dispositivo solicitar a validação do certificado do servidor:
   - Escolha "Confiar" ou selecione a Autoridade Certificadora "AC Senado Federal".
5. Em notebooks corporativos do Senado, a conexão à rede "Senado" ocorre de forma automática via GPO.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=811;Nav=',
    attachments: [
      {
        name: 'Manual Conexão Wi-Fi Senado.pdf',
        size: '312.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=811;FileID=15667'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > REDE > CONECTIVIDADE SEM FIO',
      categoria: 'CENTRAL DE ATENDIMENTO::REDE::CONECTIVIDADE SEM FIO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/01/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '20/01/2026 09:30 (Mayara Sales)',
      atualizadoEm: '20.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=811;Nav=',
      itemId: '811'
    }
  },
  {
    id: 'faq-1000812',
    faqNumber: '1000812',
    name: 'Wi-Fi Visitantes – Cadastro de Acesso Temporário (Senado-Visitantes)',
    category: 'CENTRAL DE ATENDIMENTO::REDE::CONECTIVIDADE SEM FIO',
    subCategory: 'CONECTIVIDADE SEM FIO',
    system: 'Rede Sem Fio',
    type: 'Requisição de serviço',
    service: 'Conectividade Wi-Fi e Mobilidade',
    subject: 'Autocadastro e Liberação de Internet para Visitantes e Cidadãos',
    associatedProcedureId: '',
    observacoes: 'Acesso com velocidade controlada e restrição a protocolos de streaming e jogos.',
    procedure: `1. Conecte-se à rede sem fio "Senado-Visitantes".
2. Abra qualquer navegador web para ser redirecionado ao Portal de Boas-Vindas (Captive Portal).
3. Caso o portal não abra automaticamente, acesse o endereço http://wifi.senado.leg.br.
4. Escolha "Primeiro Acesso", informe seu Nome Completo, CPF e número de celular com DDD.
5. Digite o código de validação de 6 dígitos recebido por SMS.
6. A sessão tem validade de 24 horas, renovável diariamente mediante novo token SMS.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=812;Nav=',
    attachments: [
      {
        name: 'Passo a Passo Wi-Fi Visitantes.pdf',
        size: '289.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=812;FileID=15668'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > REDE > CONECTIVIDADE SEM FIO',
      categoria: 'CENTRAL DE ATENDIMENTO::REDE::CONECTIVIDADE SEM FIO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/01/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '20/01/2026 10:00 (Mayara Sales)',
      atualizadoEm: '20.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=812;Nav=',
      itemId: '812'
    }
  },
  {
    id: 'faq-1000813',
    faqNumber: '1000813',
    name: 'Rede Eduroam – Acesso para Comunidade Acadêmica e Pesquisadores',
    category: 'CENTRAL DE ATENDIMENTO::REDE::CONECTIVIDADE SEM FIO',
    subCategory: 'CONECTIVIDADE SEM FIO',
    system: 'Rede Sem Fio',
    type: 'Requisição de serviço',
    service: 'Conectividade Wi-Fi e Mobilidade',
    subject: 'Autenticação Federada na Rede Mundial Eduroam nas Dependências do Senado',
    associatedProcedureId: '',
    observacoes: 'Disponível no ILB (Instituto Legislativo Brasileiro) e Biblioteca Acadêmica.',
    procedure: `1. Conecte-se ao SSID "eduroam".
2. No campo de identificação/usuário, insira seu e-mail institucional completo da sua instituição de ensino superior de origem (ex: usuario@unb.br ou matricula@usp.br).
3. Digite a senha cadastrada na sua instituição de vínculo.
4. Caso ocorra erro de autenticação, o usuário deve consultar o suporte de TI da sua universidade, pois a validação é federada via RNP (Rede Nacional de Ensino e Pesquisa).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=813;Nav=',
    attachments: [
      {
        name: 'Guia Eduroam Senado.pdf',
        size: '265.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=813;FileID=15669'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > REDE > CONECTIVIDADE SEM FIO',
      categoria: 'CENTRAL DE ATENDIMENTO::REDE::CONECTIVIDADE SEM FIO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/01/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '20/01/2026 10:30 (Mayara Sales)',
      atualizadoEm: '20.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=813;Nav=',
      itemId: '813'
    }
  },
  {
    id: 'faq-1000814',
    faqNumber: '1000814',
    name: 'Rede Sem Fio – Instabilidade ou Desconexões Frequentes no Notebook',
    category: 'CENTRAL DE ATENDIMENTO::REDE::CONECTIVIDADE SEM FIO',
    subCategory: 'CONECTIVIDADE SEM FIO',
    system: 'Rede Sem Fio',
    type: 'Incidente',
    service: 'Conectividade Wi-Fi e Mobilidade',
    subject: 'Diagnóstico de Queda de Sinal e Reconfiguração de Placa Wi-Fi',
    associatedProcedureId: '',
    observacoes: 'Pode ocorrer por conflito de canal de rádio, economia de energia ou driver desatualizado.',
    procedure: `1. Abra o Gerenciador de Dispositivos (devmgmt.msc) e localize a placa de rede sem fio (Intel Wi-Fi 6 / Realtek).
2. Clique com botão direito > Propriedades > Gerenciamento de Energia e desmarque: "O computador pode desligar este dispositivo para economizar energia".
3. Na aba Avançado, altere "Agressividade de Roaming" para "Médio-Baixo" para evitar trocas constantes de access point.
4. Se o problema persistir, execute no prompt com privilégio administrativo:
   netsh wlan delete profile name="Senado"
   netsh int ip reset
5. Reinicie o notebook e realize nova autenticação na rede.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=814;Nav=',
    attachments: [
      {
        name: 'Solução de Instabilidade Wi-Fi.pdf',
        size: '335.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=814;FileID=15670'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > REDE > CONECTIVIDADE SEM FIO',
      categoria: 'CENTRAL DE ATENDIMENTO::REDE::CONECTIVIDADE SEM FIO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/01/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '20/01/2026 11:00 (Mayara Sales)',
      atualizadoEm: '20.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=814;Nav=',
      itemId: '814'
    }
  },
  {
    id: 'faq-1000815',
    faqNumber: '1000815',
    name: 'Telefonia VoIP – Softphone Corporativo (Cisco Jabber / Webex)',
    category: 'CENTRAL DE ATENDIMENTO::TELEFONIA::VOIP',
    subCategory: 'VOIP',
    system: 'Telefonia VoIP',
    type: 'Requisição de serviço',
    service: 'Telefonia Fixa e Comunicação Unificada',
    subject: 'Instalação e Login no Softphone de Ramal no Computador',
    associatedProcedureId: '',
    observacoes: 'Permite realizar e receber chamadas do ramal institucional pelo computador ou celular em teletrabalho.',
    procedure: `1. O usuário deve ter autorização prévia da chefia cadastrada no Serviço de Telefonia (SERETEL).
2. O aplicativo Cisco Jabber / Webex é distribuído pelo Centro de Software (SCCM).
3. Na tela inicial do aplicativo, insira o usuário no formato: login@senado.leg.br.
4. Quando solicitado o servidor CUCM (Call Manager), utilize: cucm.senado.leg.br.
5. Digite a senha de rede do Senado e clique em Conectar.
6. Teste microfone e fone de ouvido (headset) nas preferências de Áudio do aplicativo.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=815;Nav=',
    attachments: [
      {
        name: 'Guia Cisco Jabber Senado.pdf',
        size: '410.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=815;FileID=15671'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > TELEFONIA > VOIP',
      categoria: 'CENTRAL DE ATENDIMENTO::TELEFONIA::VOIP',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/01/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '20/01/2026 11:30 (Mayara Sales)',
      atualizadoEm: '20.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=815;Nav=',
      itemId: '815'
    }
  },
  {
    id: 'faq-1000816',
    faqNumber: '1000816',
    name: 'Telefonia VoIP – Transferência e Desvio de Ramal Telefônico',
    category: 'CENTRAL DE ATENDIMENTO::TELEFONIA::VOIP',
    subCategory: 'VOIP',
    system: 'Telefonia VoIP',
    type: 'Requisição de serviço',
    service: 'Telefonia Fixa e Comunicação Unificada',
    subject: 'Configuração de Desvio Incondicional (Call Forward) e Transferência',
    associatedProcedureId: '',
    observacoes: 'O desvio para números externos (celulares particulares) exige habilitação de categoria tarifária especial.',
    procedure: `1. No aparelho IP Cisco de mesa:
   - Para desviar chamadas: Pressione a tecla programável "DesvTds" (Forward All) e disque o ramal de destino (4 dígitos) ou número externo autorizado (com 0).
   - Para cancelar o desvio: Pressione a mesma tecla, agora com o rótulo "CancDesv".
2. No Softphone Cisco Jabber:
   - Clique no ícone de controle de chamadas no canto inferior esquerdo;
   - Selecione "Desviar chamadas para" e escolha outro ramal ou Correio de Voz.
3. Para transferência durante a ligação: Pressione "Transf", disque o ramal, anuncie a chamada e pressione "Transf" novamente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=816;Nav=',
    attachments: [
      {
        name: 'Manual de Facilidades Telefônicas.pdf',
        size: '278.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=816;FileID=15672'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > TELEFONIA > VOIP',
      categoria: 'CENTRAL DE ATENDIMENTO::TELEFONIA::VOIP',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/01/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '20/01/2026 12:00 (Mayara Sales)',
      atualizadoEm: '20.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=816;Nav=',
      itemId: '816'
    }
  },
  {
    id: 'faq-1000817',
    faqNumber: '1000817',
    name: 'Telefonia VoIP – Aparelho IP Mudo ou Sem Tom de Discagem',
    category: 'CENTRAL DE ATENDIMENTO::TELEFONIA::VOIP',
    subCategory: 'VOIP',
    system: 'Telefonia VoIP',
    type: 'Incidente',
    service: 'Telefonia Fixa e Comunicação Unificada',
    subject: 'Diagnóstico de Falha de Conexão de Rede e Alimentação PoE do Telefone IP',
    associatedProcedureId: '',
    observacoes: 'Os aparelhos IP Cisco são alimentados por PoE (Power over Ethernet) através do switch de rede da sala.',
    procedure: `1. Verifique se o visor do telefone IP está aceso ou totalmente apagado.
2. Se estiver apagado:
   - Verifique a conexão do cabo de rede na porta "SW" ou "Network" traseira do telefone e na tomada de rede da parede (ponto de rede).
   - Não conecte o cabo de rede na porta "PC" do telefone.
3. Se estiver ligado exibindo mensagem "Configuring IP" ou "Registration Rejected":
   - Desconecte o cabo de rede da tomada, aguarde 15 segundos e reconecte para reiniciar o telefone.
4. Caso o telefone permaneça sem registrar, escalone o chamado para a equipe do SERETEL informando o MAC Address impresso na etiqueta traseira.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=817;Nav=',
    attachments: [
      {
        name: 'Checklist Aparelho IP Mudo.pdf',
        size: '302.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=817;FileID=15673'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > TELEFONIA > VOIP',
      categoria: 'CENTRAL DE ATENDIMENTO::TELEFONIA::VOIP',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/01/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '20/01/2026 12:30 (Mayara Sales)',
      atualizadoEm: '20.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=817;Nav=',
      itemId: '817'
    }
  },
  {
    id: 'faq-1000818',
    faqNumber: '1000818',
    name: 'Controle de Acesso Físico – Emissão e Liberação de Crachá Funcional',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA INSTITUCIONAL::CONTROLE DE ACESSO',
    subCategory: 'CONTROLE DE ACESSO',
    system: 'Controle de Acesso',
    type: 'Requisição de serviço',
    service: 'Gestão de Identificação Funcional e Portarias',
    subject: 'Primeira Via, Segunda Via ou Habilitação de Acesso em Catracas',
    associatedProcedureId: '',
    observacoes: 'Atendimento sob responsabilidade da Secretaria de Polícia Legislativa (SPOL / SEINFRA).',
    procedure: `1. O servidor, terceirizado ou estagiário recém-empossado deve comparecer ao posto da SPOL portando documento oficial com foto e portaria de nomeação.
2. Para liberação de acesso a anexos restritos fora do expediente (fins de semana/madrugada):
   - A chefia imediata deve encaminhar memorando ou processo no SIGAD com antecedência mínima de 24h para a SPOL;
   - Informar matrículas, datas, horários e justificativa da necessidade operacional.
3. Em caso de extravio ou perda de crachá, realize imediatamente o bloqueio preventivo junto à Central de Monitoramento SPOL.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=818;Nav=',
    attachments: [
      {
        name: 'Regulamento de Segurança e Acesso SPOL.pdf',
        size: '360.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=818;FileID=15674'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA INSTITUCIONAL > CONTROLE DE ACESSO',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA INSTITUCIONAL::CONTROLE DE ACESSO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/01/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '20/01/2026 13:00 (Mayara Sales)',
      atualizadoEm: '20.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=818;Nav=',
      itemId: '818'
    }
  },
  {
    id: 'faq-1000819',
    faqNumber: '1000819',
    name: 'Controle de Acesso Físico – Crachá Não Reconhecido nas Catracas',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA INSTITUCIONAL::CONTROLE DE ACESSO',
    subCategory: 'CONTROLE DE ACESSO',
    system: 'Controle de Acesso',
    type: 'Incidente',
    service: 'Gestão de Identificação Funcional e Portarias',
    subject: 'Falha de Leitura por Proximidade (RFID/Mifare) ou Bloqueio de Tarjeta',
    associatedProcedureId: '',
    observacoes: 'Se o crachá estiver dobrado, fissurado ou com a antena interna rompida, será necessária a troca física.',
    procedure: `1. Peça para o usuário testar a leitura em outra catraca do mesmo bloco para descartar defeito no leitor individual.
2. Se a mensagem na catraca for "Acesso Negado - Horário Inválido" ou "Sem Permissão", a permissão setorial precisa ser renovada no sistema da SPOL.
3. Se a catraca não emitir nenhum bipe ou sinal de luz:
   - A tarjeta RFID interna provavelmente está danificada por pressão física;
   - Oriente o servidor a comparecer ao guichê de identificação da SPOL (Anexo I) para teste no leitor de mesa e emissão de segunda via.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=819;Nav=',
    attachments: [
      {
        name: 'Procedimento Falha de Catraca.pdf',
        size: '254.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=819;FileID=15675'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA INSTITUCIONAL > CONTROLE DE ACESSO',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA INSTITUCIONAL::CONTROLE DE ACESSO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/01/2024 13:00 (Leonardo Silva de Amarante)',
      alterado: '20/01/2026 13:30 (Mayara Sales)',
      atualizadoEm: '20.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=819;Nav=',
      itemId: '819'
    }
  },
  {
    id: 'faq-1000820',
    faqNumber: '1000820',
    name: 'CCTV e Monitoramento – Solicitação de Imagens de Câmeras de Segurança',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA INSTITUCIONAL::MONITORAMENTO',
    subCategory: 'MONITORAMENTO',
    system: 'Segurança Institucional',
    type: 'Requisição de serviço',
    service: 'Polícia Legislativa e Videomonitoramento',
    subject: 'Procedimento Jurídico e Administrativo para Guarda e Cópia de Imagens',
    associatedProcedureId: '',
    observacoes: 'Imagens de segurança são de custódia restrita da SPOL e submetidas a sigilo legal.',
    procedure: `1. Informar ao solicitante que o Nível 1 ou TI geral não possui acesso ao circuito fechado de TV (CFTV).
2. O pedido de preservação ou cópia de imagens deve ser feito mediante requerimento formal fundamentado endereçado à Diretoria-Geral ou Secretaria de Polícia Legislativa.
3. Deve ser informado o local exato (Bloco, Pavimento, Corredor), data e intervalo de horário com a maior precisão possível.
4. As gravações são preservadas pelo período regulamentar e sua liberação exige despacho da autoridade policial competente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=820;Nav=',
    attachments: [
      {
        name: 'Norma de Acesso a Gravações CFTV.pdf',
        size: '280.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=820;FileID=15676'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA INSTITUCIONAL > MONITORAMENTO',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA INSTITUCIONAL::MONITORAMENTO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/01/2024 13:30 (Leonardo Silva de Amarante)',
      alterado: '20/01/2026 14:00 (Mayara Sales)',
      atualizadoEm: '20.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=820;Nav=',
      itemId: '820'
    }
  },
  {
    id: 'faq-1000821',
    faqNumber: '1000821',
    name: 'Estacionamento – Cadastro de Veículos e Acesso a Garagens Privativas',
    category: 'CENTRAL DE ATENDIMENTO::SERVIÇOS GERAIS::ESTACIONAMENTO',
    subCategory: 'ESTACIONAMENTO',
    system: 'Serviços Gerais',
    type: 'Requisição de serviço',
    service: 'Gestão de Vagas e Acesso Veicular',
    subject: 'Cadastro de Placas e TAGs Eletrônicas para Entrada nas Garagens Subterrâneas',
    associatedProcedureId: '',
    observacoes: 'Vagas cobertas são vinculadas à cota setorial distribuída pela Diretoria-Geral.',
    procedure: `1. O servidor com direito à vaga na garagem setorial deve preencher o formulário de cadastro veicular no Portal do Servidor.
2. Devem ser anexados: cópia do CRLV do veículo em nome do servidor ou cônjuge e carteira funcional.
3. A Secretaria de Transporte e Segurança Veicular (SETRAN/SPOL) providencia a instalação do adesivo/TAG veicular no para-brisa.
4. Em caso de substituição provisória de veículo (oficina/carro alugado), contate a portaria de controle de garagem para credencial de visitante temporária.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=821;Nav=',
    attachments: [
      {
        name: 'Formulário de Cadastro de Veículos.pdf',
        size: '270.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=821;FileID=15677'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SERVIÇOS GERAIS > ESTACIONAMENTO',
      categoria: 'CENTRAL DE ATENDIMENTO::SERVIÇOS GERAIS::ESTACIONAMENTO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/01/2024 14:00 (Leonardo Silva de Amarante)',
      alterado: '20/01/2026 14:30 (Mayara Sales)',
      atualizadoEm: '20.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=821;Nav=',
      itemId: '821'
    }
  },
  {
    id: 'faq-10002431',
    faqNumber: '10002431',
    name: 'Ambiente de Impressão Corporativa – Instalação de Filas de Rede via Print Server',
    category: 'CENTRAL DE ATENDIMENTO::IMPRESSÃO::CONFIGURAÇÃO',
    subCategory: 'CONFIGURAÇÃO',
    system: 'Impressão',
    type: 'Requisição de serviço',
    service: 'Gestão do Parque de Impressão e Bilhetagem',
    subject: 'Mapeamento de Impressoras Multifuncionais Seguras (Follow Me / SafeQ)',
    associatedProcedureId: '',
    observacoes: 'Impressão retida por crachá corporativo: os trabalhos só são liberados quando o usuário aproxima seu crachá da impressora.',
    procedure: `1. Abra o diálogo Executar (Win + R) e digite o caminho do servidor de impressão do seu bloco:
   \\\\printserver.senado.leg.br
2. Localize a fila correspondente ao seu setor ou a fila segura global: \\\\printserver\\Impressao-Segura.
3. Dê um duplo clique sobre o ícone da impressora para iniciar o download e instalação automática do driver homologado.
4. Após a conclusão, defina a impressora como padrão nas configurações do Windows se desejado.
5. Para liberar a impressão física, dirija-se a qualquer multifuncional Ricoh/Lexmark do prédio e aproxime o seu crachá no leitor lateral.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=822;Nav=',
    attachments: [
      {
        name: 'Manual de Impressão Segura FollowMe.pdf',
        size: '348.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=822;FileID=15678'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > IMPRESSÃO > CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::IMPRESSÃO::CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '28/01/2024 14:30 (Leonardo Silva de Amarante)',
      alterado: '20/01/2026 15:00 (Mayara Sales)',
      atualizadoEm: '20.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=822;Nav=',
      itemId: '822'
    }
  }
];
