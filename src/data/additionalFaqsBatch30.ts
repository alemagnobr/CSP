import { FAQ } from '@/types';

export const additionalFaqsBatch30: FAQ[] = [
  {
    id: 'faq-10002483',
    faqNumber: '10002483',
    name: 'Gestão de Pessoas – Acesso e Serviços no Portal do Servidor (SIGEP)',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::SIGEP',
    subCategory: 'SIGEP',
    system: 'SIGEP (Portal do Servidor)',
    type: 'Requisição de serviço',
    service: 'Gestão de Recursos Humanos e Vida Funcional',
    subject: 'Consulta a Contracheque, Informe de Rendimentos para IR e Marcação de Férias',
    associatedProcedureId: '',
    observacoes: 'Acesso disponível para servidores ativos, aposentados e pensionistas do Senado Federal.',
    procedure: `1. Acesse o portal corporativo: https://portaldoservidor.senado.leg.br.
2. Autenticação:
   - Servidores ativos: Login com usuário e senha de rede do Senado;
   - Aposentados e pensionistas: Login com a conta Gov.br integrada.
3. Principais Serviços Disponíveis:
   - "Contracheque Mensal": Visualização e download em PDF com assinatura digital do Senado;
   - "Informe de Rendimentos": Disponível anualmente na aba "Imposto de Renda" para declaração de IRPF;
   - "Férias": Solicitação de parcelamento (até 3 períodos), alteração de datas e consulta de saldo de dias.
4. Para dúvidas sobre lançamentos financeiros, contate a Secretaria de Gestão de Pessoas (SEGP).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2483;Nav=',
    attachments: [
      {
        name: 'Manual do Usuário Portal do Servidor.pdf',
        size: '328.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2483;FileID=15735'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS CORPORATIVOS > SIGEP',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::SIGEP',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/03/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '15/02/2026 09:30 (Mayara Sales)',
      atualizadoEm: '15.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2483;Nav=',
      itemId: '2483'
    }
  },
  {
    id: 'faq-10002484',
    faqNumber: '10002484',
    name: 'Diárias e Passagens – Solicitação e Prestação de Contas de Viagens Oficiais (SCDP)',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::DIÁRIAS E PASSAGENS',
    subCategory: 'DIÁRIAS E PASSAGENS',
    system: 'SCDP (Diárias e Passagens)',
    type: 'Requisição de serviço',
    service: 'Gestão de Deslocamentos e Missões Institucionais',
    subject: 'Cadastro de Proposta de Concessão de Diárias (PCD) e Envio de Cartões de Embarque',
    associatedProcedureId: '',
    observacoes: 'A prestação de contas deve ser apresentada em até 5 dias úteis após o término da viagem.',
    procedure: `1. Para emissão de passagens e requisição de diárias para missão institucional:
   - Acesse o sistema de diárias e passagens: https://scdp.senado.leg.br;
   - Preencha a Proposta de Concessão de Diárias (PCD) informando o roteiro, motivo institucional e justificativa de interesse público.
2. Autorização e Emissão:
   - A PCD é encaminhada eletronicamente para assinatura da chefia imediata e ordenança de despesas da DGER.
3. Prestação de Contas Obrigatória:
   - No retorno da viagem, acesse a PCD concluída no sistema;
   - Anexe os canhotos/cartões de embarque (boarding pass) e o Relatório Circunstanciado de Viagem assinado;
   - Caso haja saldo de diárias não utilizadas, gere a GRU (Guia de Recolhimento da União) para restituição ao erário.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2484;Nav=',
    attachments: [
      {
        name: 'Guia de Prestação de Contas SCDP Senado.pdf',
        size: '312.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2484;FileID=15736'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS CORPORATIVOS > DIÁRIAS E PASSAGENS',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::DIÁRIAS E PASSAGENS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/03/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '15/02/2026 10:00 (Mayara Sales)',
      atualizadoEm: '15.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2484;Nav=',
      itemId: '2484'
    }
  },
  {
    id: 'faq-10002485',
    faqNumber: '10002485',
    name: 'Segurança Institucional – Programação e Manutenção de Rádios Transceptores (HT / TETRA)',
    category: 'CENTRAL DE ATENDIMENTO::TELEFONIA E COMUNICAÇÕES::RÁDIO TRANSCEPTOR',
    subCategory: 'RÁDIO TRANSCEPTOR',
    system: 'Rádio Comunicação (TETRA)',
    type: 'Requisição de serviço',
    service: 'Comunicação Tática e Rádio Transmissão da Polícia do Senado',
    subject: 'Carga de Chaves de Criptografia, Canais de Patrulha e Troca de Baterias',
    associatedProcedureId: '',
    observacoes: 'Serviço restrito aos membros da Secretaria de Polícia do Senado Federal (SPRES) e Brigada de Incêndio.',
    procedure: `1. Para manutenção corretiva ou nova programação de terminal de rádio portátil (HT):
   - Registre chamado na Central de Serviços: Comunicações > Rádio Transceptor > Manutenção / Programação.
2. Procedimentos Executados pelo Laboratório de Telecomunicações:
   - Programação do ID individual do terminal no sistema troncalizado digital (TETRA);
   - Injeção segura de chaves criptográficas (End-to-End Encryption) para impedir interceptações;
   - Configuração do botão de emergência tático com envio de telemetria GPS direta ao Centro de Controle Operacional (CCO).
3. Troca de bateria com desgaste: Apresente o rádio na oficina técnica no subsolo do Anexo I com o crachá funcional.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2485;Nav=',
    attachments: [
      {
        name: 'Manual Operacional Radiocomunicação TETRA.pdf',
        size: '290.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2485;FileID=15737'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > TELEFONIA E COMUNICAÇÕES > RÁDIO TRANSCEPTOR',
      categoria: 'CENTRAL DE ATENDIMENTO::TELEFONIA E COMUNICAÇÕES::RÁDIO TRANSCEPTOR',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/03/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '15/02/2026 10:30 (Mayara Sales)',
      atualizadoEm: '15.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2485;Nav=',
      itemId: '2485'
    }
  },
  {
    id: 'faq-10002486',
    faqNumber: '10002486',
    name: 'Biblioteca Digital – Pesquisa e Acesso a E-books e Bases de Dados Jurídicas Assinadas',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::BIBLIOTECA DIGITAL',
    subCategory: 'BIBLIOTECA DIGITAL',
    system: 'Biblioteca Acadêmico Luiz Viana Filho',
    type: 'Requisição de serviço',
    service: 'Gestão da Informação e Acervo Bibliográfico',
    subject: 'Acesso a Bases Jurídicas (Revista dos Tribunais, VLex, HeinOnline) e Empréstimo de Livros Digitais',
    associatedProcedureId: '',
    observacoes: 'Acesso via reconhecimento de IP interno ou login remoto com credenciais de rede corporativa.',
    procedure: `1. Para pesquisar e acessar o catálogo da Biblioteca do Senado Federal:
   - Acesse: https://biblioteca.senado.leg.br.
2. Acesso Remoto a Bases Jurídicas Restritas:
   - Caso esteja fora da rede local do Senado, ative previamente a VPN Corporativa ou faça login pelo Portal CAPES/Periódicos via CAFe;
   - As assinaturas incluem: Revista dos Tribunais Online, HeinOnline, VLex Brasil e Coleções de E-books da Saraiva/Gen.
3. Empréstimo de Obras Digitais:
   - Obras em formato digital podem ser baixadas para leitura offline pelo aplicativo Adobe Digital Editions com empréstimo de 14 dias renováveis.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2486;Nav=',
    attachments: [
      {
        name: 'Guia de Bases Jurídicas Biblioteca Senado.pdf',
        size: '345.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2486;FileID=15738'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS CORPORATIVOS > BIBLIOTECA DIGITAL',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::BIBLIOTECA DIGITAL',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/03/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '15/02/2026 11:00 (Mayara Sales)',
      atualizadoEm: '15.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2486;Nav=',
      itemId: '2486'
    }
  },
  {
    id: 'faq-10002487',
    faqNumber: '10002487',
    name: 'Transparência Pública – Atendimento a Pedidos de Informação da Lei de Acesso à Informação (e-SIC / Fala.BR)',
    category: 'CENTRAL DE ATENDIMENTO::OUVIDORIA::ACESSO À INFORMAÇÃO',
    subCategory: 'ACESSO À INFORMAÇÃO',
    system: 'Sistema Fala.BR / e-SIC',
    type: 'Requisição de serviço',
    service: 'Gestão da Transparência Passiva e Atendimento ao Cidadão',
    subject: 'Tramitação de Pedidos de Informação Pública, Prazos de Resposta e Recursos Administrativos',
    associatedProcedureId: '',
    observacoes: 'O prazo legal para resposta ao cidadão é de até 20 dias, prorrogável justificadamente por mais 10 dias.',
    procedure: `1. O cidadão registra a manifestação pela plataforma integrada: https://falabr.cgu.gov.br direcionada ao Senado Federal.
2. A Ouvidoria do Senado faz a triagem inicial e encaminha a demanda à unidade técnica competente via processo administrativo no SIGAD.
3. Elaboração da Resposta:
   - A unidade técnica redige o despacho técnico contendo a informação solicitada ou a justificativa legal em caso de sigilo/dados pessoais (LGPD);
   - Submete o processo para aprovação do Diretor da área.
4. A Ouvidoria consolida o despacho e realiza a entrega formal da resposta ao cidadão dentro do painel do Fala.BR.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2487;Nav=',
    attachments: [
      {
        name: 'Manual de Aplicação da LAI no Senado.pdf',
        size: '310.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2487;FileID=15739'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > OUVIDORIA > ACESSO À INFORMAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::OUVIDORIA::ACESSO À INFORMAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/03/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '15/02/2026 11:30 (Mayara Sales)',
      atualizadoEm: '15.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2487;Nav=',
      itemId: '2487'
    }
  },
  {
    id: 'faq-10002488',
    faqNumber: '10002488',
    name: 'Sistemas Parlamentares – Transmissão e Interatividade no Portal e-Cidadania',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS PARLAMENTARES::E-CIDADANIA',
    subCategory: 'E-CIDADANIA',
    system: 'Portal e-Cidadania',
    type: 'Requisição de serviço',
    service: 'Participação Popular e Interatividade Legislativa',
    subject: 'Envio de Perguntas a Audiências Públicas, Votação em Enquetes de Projetos e Ideias Legislativas',
    associatedProcedureId: '',
    observacoes: 'Ideias legislativas que alcançam 20 mil apoios são encaminhadas formalmente à Comissão de Direitos Humanos (CDH).',
    procedure: `1. O cidadão acessa: https://www12.senado.leg.br/ecidadania.
2. Participação em Audiências Públicas Interativas:
   - Durante a transmissão da comissão, clique em "Audiências Interativas";
   - Selecione o debate em andamento e envie sua pergunta ou comentário para os senadores e palestrantes convidados;
   - Os moderadores da Secretaria de Comissões fazem a triagem e exibem as perguntas no monitor do Plenário.
3. Consulta Pública de Projetos de Lei:
   - Vote "Sim" ou "Não" em qualquer matéria legislativa em tramitação para registrar a opinião da sociedade.
4. Para relatar problemas de lentidão ou autenticação no e-Cidadania, abra chamado na Central de Serviços.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2488;Nav=',
    attachments: [
      {
        name: 'Guia do Cidadão Portal e-Cidadania.pdf',
        size: '275.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2488;FileID=15740'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS PARLAMENTARES > E-CIDADANIA',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS PARLAMENTARES::E-CIDADANIA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/03/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '15/02/2026 12:00 (Mayara Sales)',
      atualizadoEm: '15.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2488;Nav=',
      itemId: '2488'
    }
  },
  {
    id: 'faq-10002489',
    faqNumber: '10002489',
    name: 'Infraestrutura Predial – Acesso aos Estacionamentos Privativos e Cadastro de Tags Veiculares RFID',
    category: 'CENTRAL DE ATENDIMENTO::ACESSO FÍSICO::ESTACIONAMENTO',
    subCategory: 'ESTACIONAMENTO',
    system: 'Controle de Acesso Veicular',
    type: 'Requisição de serviço',
    service: 'Segurança e Trânsito Interno do Complexo Arquitetônico',
    subject: 'Cadastro de Placa de Veículo, Emissão de Tag RFID para Cancelas Automáticas e Liberação de Garagem',
    associatedProcedureId: '',
    observacoes: 'Vagas privativas são destinadas conforme regulamentação da Diretoria-Geral e Diretoria da Polícia Legislativa.',
    procedure: `1. O servidor ou colaborador solicita a autorização de estacionamento no SIGAD com o aval da chefia do setor.
2. Registre chamado na Central de Serviços:
   Segurança e Transporte > Acesso Veicular > Cadastro de Tag de Estacionamento.
3. No chamado, anexe:
   - Cópia do Certificado de Registro e Licenciamento do Veículo (CRLV) em nome do servidor ou cônjuge;
   - Número do crachá funcional.
4. Após deferimento, compareça à Coordenação de Trânsito da Polícia do Senado (Garagem do Anexo II) para afixação da tag RFID no para-brisa do automóvel.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2489;Nav=',
    attachments: [
      {
        name: 'Norma de Estacionamento Senado Federal.pdf',
        size: '265.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2489;FileID=15741'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > ACESSO FÍSICO > ESTACIONAMENTO',
      categoria: 'CENTRAL DE ATENDIMENTO::ACESSO FÍSICO::ESTACIONAMENTO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/03/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '15/02/2026 12:30 (Mayara Sales)',
      atualizadoEm: '15.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2489;Nav=',
      itemId: '2489'
    }
  },
  {
    id: 'faq-10002490',
    faqNumber: '10002490',
    name: 'Sistemas Corporativos – Homologação de Softwares e Aquisição de Licenças Especiais de TI',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::HOMOLOGAÇÃO DE SOFTWARE',
    subCategory: 'HOMOLOGAÇÃO DE SOFTWARE',
    system: 'Catálogo de Softwares',
    type: 'Requisição de serviço',
    service: 'Governança de TI e Gestão de Licenciamento',
    subject: 'Solicitação de Análise de Compatibilidade, Análise de Vulnerabilidade e Aquisição de Software',
    associatedProcedureId: '',
    observacoes: 'É expressamente vedado instalar softwares não homologados ou não autorizados pela DITEC.',
    procedure: `1. Para softwares que não constam na Central de Aplicativos (Software Center / Company Portal):
   - A chefia imediata da unidade autua processo no SIGAD com estudo técnico preliminar justificando a necessidade institucional.
2. Registre chamado na Central de Serviços:
   Informática > Governança de TI > Homologação de Software.
3. Etapas de Avaliação Técnica pela DITEC:
   - Verificação de termos de licenciamento (GPL, Apache, Proprietária);
   - Teste de segurança e vulnerabilidade (CVEs) em laboratório isolado;
   - Validação de compatibilidade com o sistema operacional padrão e antivírus corporativo.
4. Caso aprovado, o pacote de instalação é empacotado e disponibilizado para distribuição centralizada via SCCM/Intune.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2490;Nav=',
    attachments: [
      {
        name: 'Política de Homologação de Software Senado.pdf',
        size: '298.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2490;FileID=15742'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > HOMOLOGAÇÃO DE SOFTWARE',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::HOMOLOGAÇÃO DE SOFTWARE',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '05/03/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '15/02/2026 13:00 (Mayara Sales)',
      atualizadoEm: '15.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2490;Nav=',
      itemId: '2490'
    }
  }
];
