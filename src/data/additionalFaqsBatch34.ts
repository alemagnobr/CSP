import { FAQ } from '@/types';

export const additionalFaqsBatch34: FAQ[] = [
  {
    id: 'faq-10002515',
    faqNumber: '10002515',
    name: 'Processo Legislativo – Suporte Tecnológico e Segurança de Dados em CPIs e CPMIs',
    category: 'CENTRAL DE ATENDIMENTO::COMISSÕES::CPI E CPMI',
    subCategory: 'CPI E CPMI',
    system: 'Sistema de CPIs e Cofre Digital',
    type: 'Requisição de serviço',
    service: 'Comissões Parlamentares de Inquérito e Sigilo de Dados',
    subject: 'Transmissão de Reuniões Reservadas, Oitivas Híbridas e Cadeia de Custódia de Documentos Sigilosos',
    associatedProcedureId: '',
    observacoes: 'Acesso a documentos com quebra de sigilo telemático, telefônico ou fiscal restrito a parlamentares e servidores credenciados.',
    procedure: `1. Reuniões Reservadas e Secretas:
   - Solicite suporte operacional de transmissão fechada à Central de Serviços com antecedência mínima de 24 horas;
   - Os técnicos da DITEC e da Secretaria de Comissões configuram salas privativas isoladas da transmissão aberta da TV Senado e internet;
   - O sinal audiovisual interno é criptografado ponto a ponto com geração de ata taquigráfica sigilosa.
2. Custódia de Documentos com Sigilo Judicial/Fiscal:
   - Todo documento oriundo de quebra de sigilo recebido pela CPI é autuado em ambiente de Cofre Digital isolado;
   - A visualização ocorre apenas em terminais autenticados com duplo fator e registro detalhado de logs de acesso e download para auditoria forense.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2515;Nav=',
    attachments: [
      {
        name: 'Manual de Procedimentos Tecnicos CPI Senado.pdf',
        size: '348.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2515;FileID=15767'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > COMISSÕES > CPI E CPMI',
      categoria: 'CENTRAL DE ATENDIMENTO::COMISSÕES::CPI E CPMI',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/03/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '03/03/2026 09:30 (Mayara Sales)',
      atualizadoEm: '03.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2515;Nav=',
      itemId: '2515'
    }
  },
  {
    id: 'faq-10002516',
    faqNumber: '10002516',
    name: 'Infraestrutura Cloud – Gestão de Contêineres, Namespaces e CI/CD (Kubernetes / OpenShift)',
    category: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::NUVEM E CONTÊINERES',
    subCategory: 'NUVEM E CONTÊINERES',
    system: 'Cluster Kubernetes / OpenShift Senado',
    type: 'Requisição de serviço',
    service: 'Computação em Nuvem e Orquestração de Microsserviços',
    subject: 'Criação de Namespaces, Ajuste de Quotas (CPU/Memória) e Configuração de Pipelines no GitLab',
    associatedProcedureId: '',
    observacoes: 'Destinado a equipes de desenvolvimento de software e sustentação de sistemas do Senado Federal.',
    procedure: `1. Requisição de Novo Namespace no Cluster Institucional:
   - Abra chamado na Central de Serviços: Informática > Nuvem e Servidores > Provisionamento de Namespace em Contêineres;
   - Informe a sigla do projeto, responsáveis técnicos, ambiente desejado (Desenvolvimento, Homologação ou Produção) e estimativa de recursos (CPU Cores, RAM e Storage PVC).
2. Integração com CI/CD (GitLab Runner):
   - Configure o arquivo .gitlab-ci.yml com as credenciais do Service Account fornecido;
   - Os builds de imagens Docker são automaticamente validados por escaneamento de vulnerabilidades (Trivy) antes da publicação no Harbor Registry interno.
3. Monitoramento e Métricas:
   - Acompanhe o consumo de pods, latência e logs através dos dashboards corporativos do Grafana e Kibana.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2516;Nav=',
    attachments: [
      {
        name: 'Guia de Deploy em Contêineres OpenShift.pdf',
        size: '412.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2516;FileID=15768'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > INFRAESTRUTURA > NUVEM E CONTÊINERES',
      categoria: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::NUVEM E CONTÊINERES',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/03/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '03/03/2026 10:00 (Mayara Sales)',
      atualizadoEm: '03.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2516;Nav=',
      itemId: '2516'
    }
  },
  {
    id: 'faq-10002517',
    faqNumber: '10002517',
    name: 'Saúde Ocupacional – Solicitação de Avaliação Ergonômica do Posto de Trabalho e Acessórios',
    category: 'CENTRAL DE ATENDIMENTO::SAÚDE OCUPACIONAL::ERGONOMIA',
    subCategory: 'ERGONOMIA',
    system: 'SIS (Medicina do Trabalho)',
    type: 'Requisição de serviço',
    service: 'Medicina e Segurança do Trabalho (NR-17)',
    subject: 'Laudo Ergonômico de Posto de Trabalho, Apoio para Pés, Suporte para Monitores e Cadeira Ajustável',
    associatedProcedureId: '',
    observacoes: 'Atendimento presencial realizado por fisioterapeutas ou médicos do trabalho do Serviço Médico do Senado.',
    procedure: `1. O servidor abre processo no SIGAD endereçado ao Serviço Médico e Saúde Ocupacional (SIS).
2. Agendamento da Visita Técnica:
   - A equipe de ergonomia entra em contato e agenda visita ao posto de trabalho do solicitante;
   - Realização de medições antropométricas, altura da mesa, posicionamento da tela do monitor, ângulo de iluminação e hábitos posturais.
3. Emissão de Parecer e Fornecimento de Itens:
   - Caso indicada a necessidade, é expedida autorização para concessão de:
     * Apoio ergonômico regulável para os pés;
     * Suporte articulado com regulagem de altura para monitor/notebook;
     * Teclado e mouse anatômicos;
     * Substituição da cadeira por modelo ergonômico padrão NR-17.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2517;Nav=',
    attachments: [
      {
        name: 'Manual de Ergonomia e Postura no Trabalho.pdf',
        size: '295.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2517;FileID=15769'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SAÚDE OCUPACIONAL > ERGONOMIA',
      categoria: 'CENTRAL DE ATENDIMENTO::SAÚDE OCUPACIONAL::ERGONOMIA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/03/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '03/03/2026 10:30 (Mayara Sales)',
      atualizadoEm: '03.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2517;Nav=',
      itemId: '2517'
    }
  },
  {
    id: 'faq-10002518',
    faqNumber: '10002518',
    name: 'Sistemas Corporativos – Painel Eletrônico de Votação em Comissões (SICON)',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS LEGISLATIVOS::PAINEL DE COMISSÕES',
    subCategory: 'PAINEL DE COMISSÕES',
    system: 'SICON (Comissões)',
    type: 'Incidente',
    service: 'Sistemas Plenários e Deliberação em Comissões',
    subject: 'Registro Biométrico de Presença, Controle de Quorum, Inscrição para a Palavra e Votação Nominal',
    associatedProcedureId: '',
    observacoes: 'Operado pelos secretários de mesa das comissões permanentes e temporárias.',
    procedure: `1. Procedimentos de Abertura da Sessão de Comissão:
   - O secretário autentica no sistema SICON da sala e carrega a pauta legislativa do dia;
   - Os senadores titulares e suplentes registram presença aproximando o crachá funcional ou por biometria digital no terminal de sua bancada.
2. Tratativa de Incidentes Frequentes:
   - "Terminal de Bancada não reconhece crachá": Verifique a integridade do leitor RFID e reinicie o mini-PC da bancada pelo botão traseiro;
   - "Voto não computado": O secretário da mesa pode realizar o registro manual do voto manifestado oralmente pelo parlamentar, com confirmação expressa do Presidente da Comissão;
   - "Falha na sincronização com o telão": Verifique os cabos HDMI/DisplayPort do switcher de vídeo e acione o ramal de emergência de plenário: 3303-1212.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2518;Nav=',
    attachments: [
      {
        name: 'Manual de Operacao SICON Comissoes.pdf',
        size: '378.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2518;FileID=15770'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS LEGISLATIVOS > PAINEL DE COMISSÕES',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS LEGISLATIVOS::PAINEL DE COMISSÕES',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/03/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '03/03/2026 11:00 (Mayara Sales)',
      atualizadoEm: '03.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2518;Nav=',
      itemId: '2518'
    }
  },
  {
    id: 'faq-10002519',
    faqNumber: '10002519',
    name: 'Rede Sem Fio – Acesso à Rede Wi-Fi de Visitantes, Eventos e Imprensa (Senado-Visitante)',
    category: 'CENTRAL DE ATENDIMENTO::REDE E CONECTIVIDADE::WI-FI VISITANTES',
    subCategory: 'WI-FI VISITANTES',
    system: 'Rede Wi-Fi Visitantes (Captive Portal)',
    type: 'Requisição de serviço',
    service: 'Conectividade sem Fio para Convidados e Jornalistas',
    subject: 'Autenticação no Captive Portal, Validação por Código SMS e Renovação de Sessão Diária',
    associatedProcedureId: '',
    observacoes: 'Rede aberta ao público visitante nas dependências do Palácio do Congresso e anexos.',
    procedure: `1. Conecte o smartphone ou notebook à rede SSID: "Senado-Visitante".
2. Redirecionamento ao Captive Portal:
   - Abra o navegador web; caso não abra automaticamente, acesse: http://wifi.senado.leg.br;
   - Leia e aceite os Termos de Uso e Política de Privacidade da rede pública institucional.
3. Cadastro e Ativação:
   - Informe nome completo, CPF (ou passaporte para estrangeiros) e número de telefone celular com DDD;
   - Digite o código token de 6 dígitos recebido instantaneamente por mensagem SMS;
   - A conexão é liberada com validade de até 24 horas consecutivas.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2519;Nav=',
    attachments: [
      {
        name: 'Instrucoes de Acesso Wi-Fi Senado Visitante.pdf',
        size: '220.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2519;FileID=15771'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > REDE E CONECTIVIDADE > WI-FI VISITANTES',
      categoria: 'CENTRAL DE ATENDIMENTO::REDE E CONECTIVIDADE::WI-FI VISITANTES',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/03/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '03/03/2026 11:30 (Mayara Sales)',
      atualizadoEm: '03.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2519;Nav=',
      itemId: '2519'
    }
  },
  {
    id: 'faq-10002520',
    faqNumber: '10002520',
    name: 'Segurança da Informação – Cadastro e Uso de Chaves SSH em Servidores e Bastion Hosts',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::CHAVES SSH',
    subCategory: 'CHAVES SSH',
    system: 'Servidores Linux / Bastion Host',
    type: 'Requisição de serviço',
    service: 'Acesso Administrativo Seguro a Servidores e Infraestrutura',
    subject: 'Geração de Par de Chaves Ed25519/RSA 4096, Instalação no authorized_keys e Acesso via Jump Server',
    associatedProcedureId: '',
    observacoes: 'É estritamente proibido o uso de senhas fracas ou chaves privadas sem senha protetora (passphrase).',
    procedure: `1. Geração da Chave Criptográfica no computador do analista/desenvolvedor:
   - Execute no terminal: ssh-keygen -t ed25519 -C "nome.sobrenome@senado.leg.br"
   - Defina uma senha forte (passphrase) para proteção do arquivo da chave privada.
2. Solicitação de Cadastro da Chave Pública:
   - Abra chamado na Central de Serviços: Segurança da Informação > Acesso a Servidores > Cadastro de Chave SSH;
   - Anexe APENAS a chave pública gerada (arquivo .pub); JAMAIS compartilhe a chave privada (.pem / id_ed25519).
3. Conexão Segura com Bastion Host:
   - Todos os acessos a servidores internos de produção ocorrem obrigatoriamente através do Jump Server:
     ssh -J seu.login@bastion.senado.leg.br seu.login@servidor-alvo.senado.leg.br`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2520;Nav=',
    attachments: [
      {
        name: 'Norma Tecnica de Acesso SSH Senado.pdf',
        size: '284.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2520;FileID=15772'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA DA INFORMAÇÃO > CHAVES SSH',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::CHAVES SSH',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/03/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '03/03/2026 12:00 (Mayara Sales)',
      atualizadoEm: '03.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2520;Nav=',
      itemId: '2520'
    }
  },
  {
    id: 'faq-10002521',
    faqNumber: '10002521',
    name: 'Pesquisa Documental – Acervo Histórico e Pesquisa de Pronunciamentos e Discursos',
    category: 'CENTRAL DE ATENDIMENTO::DOCUMENTAÇÃO::DISCURSOS HISTÓRICOS',
    subCategory: 'DISCURSOS HISTÓRICOS',
    system: 'Sistema de Discursos Parlamentares',
    type: 'Requisição de serviço',
    service: 'Arquivo do Senado e Memória Legislativa',
    subject: 'Consulta a Discursos, Apartes, Sessões Históricas do Império e República desde 1826',
    associatedProcedureId: '',
    observacoes: 'Acesso público e gratuito disponibilizado pela Secretaria de Arquivo e Documentação (SEARQ).',
    procedure: `1. Acesse o portal de pesquisa histórica de discursos: https://legis.senado.leg.br/dadosabertos/docs/ui/discursos.
2. Filtros e Mecanismo de Busca:
   - "Por Parlamentar": Selecione o nome político do senador ou orador histórico;
   - "Por Período Cronológico": Filtre por legislatura, ano, mês ou data exata da sessão;
   - "Por Expressão Textual": Busque termos, trechos de manifestações orais ou temas de repercussão nacional.
3. Obtenção do Inteiro Teor e Áudio:
   - Para discursos recentes, o sistema disponibiliza o vídeo integral sincronizado da transmissão da TV Senado;
   - Para registros históricos, é possível fazer o download do documento taquigráfico digitalizado em PDF com transcrição oficial.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2521;Nav=',
    attachments: [
      {
        name: 'Guia de Pesquisa de Discursos do Senado.pdf',
        size: '315.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2521;FileID=15773'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > DOCUMENTAÇÃO > DISCURSOS HISTÓRICOS',
      categoria: 'CENTRAL DE ATENDIMENTO::DOCUMENTAÇÃO::DISCURSOS HISTÓRICOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/03/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '03/03/2026 12:30 (Mayara Sales)',
      atualizadoEm: '03.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2521;Nav=',
      itemId: '2521'
    }
  },
  {
    id: 'faq-10002522',
    faqNumber: '10002522',
    name: 'Comunicação Interna – Submissão de Avisos no Boletim Administrativo do Senado (BAP)',
    category: 'CENTRAL DE ATENDIMENTO::COMUNICAÇÃO INTERNA::BOLETIM BAP',
    subCategory: 'BOLETIM BAP',
    system: 'Boletim Administrativo do Pessoal (BAP)',
    type: 'Requisição de serviço',
    service: 'Comunicação Interna e Informativos aos Servidores',
    subject: 'Publicação de Informes de Gestão de Pessoas, Campanhas Institucionais e Avisos de Utilidade Pública',
    associatedProcedureId: '',
    observacoes: 'Submissão restrita a unidades administrativas oficiais do Senado Federal.',
    procedure: `1. A chefia da unidade elabora a matéria ou comunicado interno no SIGAD.
2. Prazos Regimentais de Envio:
   - Os textos para a edição semanal devem ser encaminhados até as 17h de quarta-feira;
   - O informativo eletrônico é disparado todas as sextas-feiras no e-mail funcional de todos os colaboradores e publicado na Intranet.
3. Requisitos do Texto:
   - Linguagem concisa, clara e acessível;
   - Inclusão de hiperlinks oficiais internos (@senado.leg.br);
   - Imagens de apoio em formato JPG/PNG com boa resolução e descrição de texto alternativo para acessibilidade.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2522;Nav=',
    attachments: [
      {
        name: 'Manual de Redacao e Publicacao no BAP.pdf',
        size: '260.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2522;FileID=15774'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > COMUNICAÇÃO INTERNA > BOLETIM BAP',
      categoria: 'CENTRAL DE ATENDIMENTO::COMUNICAÇÃO INTERNA::BOLETIM BAP',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/03/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '03/03/2026 13:00 (Mayara Sales)',
      atualizadoEm: '03.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2522;Nav=',
      itemId: '2522'
    }
  }
];
