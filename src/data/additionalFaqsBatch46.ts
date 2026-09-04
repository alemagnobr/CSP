import { FAQ } from '@/types';

export const additionalFaqsBatch46: FAQ[] = [
  {
    id: 'faq-10002611',
    faqNumber: '10002611',
    name: 'Processo Legislativo – Recursos ao Plenário contra Pareceres Terminativos das Comissões',
    category: 'CENTRAL DE ATENDIMENTO::PROCESSO LEGISLATIVO::RECURSOS AO PLENÁRIO',
    subCategory: 'RECURSOS AO PLENÁRIO',
    system: 'Sistema Integrado de Processo Legislativo (SIGAD / SICON)',
    type: 'Requisição de serviço',
    service: 'Subsecretaria de Coordenação Legislativa do Senado (SLEG)',
    subject: 'Apresentação de Recurso para Apreciação em Plenário de Projeto Rejeitado ou Aprovado em Caráter Terminativo',
    associatedProcedureId: '',
    observacoes: 'Exige assinatura de no mínimo um décimo da composição do Senado (8 senadores) dentro do prazo improrrogável.',
    procedure: `1. Prazos e Legitimidade Regimental:
   - Publicado no Diário do Senado Federal o parecer conclusivo da comissão terminativa, abre-se o prazo de 5 (cinco) dias úteis para interposição de recurso;
   - O recurso deve ser subscrito por pelo menos um décimo da composição da Casa (8 senadores).
2. Protocolo Eletrônico no SIGAD:
   - O gabinete autor autua o recurso instruído com a lista de assinaturas eletrônicas autenticadas;
3. Efeito Suspensivo e Inclusão em Pauta:
   - O recebimento do recurso suspende a remessa da matéria à sanção ou à Câmara dos Deputados, encaminhando o projeto para deliberação soberana do Plenário do Senado.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2611;Nav=',
    attachments: [
      {
        name: 'Guia de Recursos ao Plenário e Prazos Regimentais SLEG.pdf',
        size: '315.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2611;FileID=15863'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > PROCESSO LEGISLATIVO > RECURSOS AO PLENÁRIO',
      categoria: 'CENTRAL DE ATENDIMENTO::PROCESSO LEGISLATIVO::RECURSOS AO PLENÁRIO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '19/04/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '15/03/2026 09:30 (Mayara Sales)',
      atualizadoEm: '15.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2611;Nav=',
      itemId: '2611'
    }
  },
  {
    id: 'faq-10002612',
    faqNumber: '10002612',
    name: 'Segurança da Informação – Gestão de Acessos Privilegiados (PAM / Vault de Senhas)',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::GESTÃO DE ACESSOS PRIVILEGIADOS',
    subCategory: 'GESTÃO DE ACESSOS PRIVILEGIADOS',
    system: 'Solução de Privileged Access Management (PAM / CyberArk / HashiCorp Vault)',
    type: 'Requisição de serviço',
    service: 'Segurança Cibernética, Governança de Contas Root e Auditoria de Sessões',
    subject: 'Elevação Temporária de Privilégios, Senhas Dinâmicas de Administrador e Gravação de Sessões SSH/RDP',
    associatedProcedureId: '',
    observacoes: 'Contas de administrador genéricas são proibidas; o acesso temporário é auditado segundo a ISO 27001.',
    procedure: `1. Requerimento Justificado de Acesso Privilegiado:
   - O analista técnico de infraestrutura ou banco de dados acessa o portal PAM indicando o chamado de mudança (GMUD) correspondente;
2. Check-out de Credencial e Rotação Automática:
   - O cofre digital gera credencial temporária (válida por 2 a 4 horas) com senha descartada e rotacionada automaticamente após o encerramento da sessão;
3. Gravação e Auditoria de Sessões:
   - Todas as ações executadas via terminal SSH ou área de trabalho remota (RDP) são gravadas em vídeo e logs indexados para auditoria da equipe de segurança.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2612;Nav=',
    attachments: [
      {
        name: 'Politica de Gestao de Contas Privilegiadas PAM DITEC.pdf',
        size: '348.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2612;FileID=15864'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA DA INFORMAÇÃO > GESTÃO DE ACESSOS PRIVILEGIADOS',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::GESTÃO DE ACESSOS PRIVILEGIADOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '19/04/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '15/03/2026 10:00 (Mayara Sales)',
      atualizadoEm: '15.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2612;Nav=',
      itemId: '2612'
    }
  },
  {
    id: 'faq-10002613',
    faqNumber: '10002613',
    name: 'Saúde (SIS) – Reembolso Odontológico e Tratamentos Ortodônticos e Proéticos',
    category: 'CENTRAL DE ATENDIMENTO::SAÚDE (SIS)::ODONTOLOGIA',
    subCategory: 'ODONTOLOGIA',
    system: 'Portal SIS / Módulo Odontológico de Reembolso',
    type: 'Requisição de serviço',
    service: 'Assistência Odontológica, Auditoria Dentária e Reembolso',
    subject: 'Solicitação de Ressarcimento Odontológico, Documentos Radiográficos e Cobertura de Próteses',
    associatedProcedureId: '',
    observacoes: 'Procedimentos complexos (implantes e próteses) exigem radiografia panorâmica inicial e final.',
    procedure: `1. Documentação Exigida para Pedido de Reembolso:
   - Nota fiscal discriminando os dentes tratados e valores unitários de cada procedimento;
   - Relatório odontológico detalhado assinado pelo cirurgião-dentista com CRO;
   - Radiografias periapicais ou panorâmicas pré e pós-tratamento.
2. Inclusão no Portal do SIS:
   - Acesse: SIS Online > Reembolso > Nova Solicitação > Categoria Odontologia;
   - Anexe os documentos digitalizados em formato PDF legível.
3. Auditoria e Crédito em Conta:
   - Os peritos dentistas do SIS analisam a documentação em até 10 dias úteis e autorizam o reembolso conforme tabela de coparticipação vigente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2613;Nav=',
    attachments: [
      {
        name: 'Tabela de Cobertura e Procedimentos Odontologicos SIS.pdf',
        size: '390.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2613;FileID=15865'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SAÚDE (SIS) > ODONTOLOGIA',
      categoria: 'CENTRAL DE ATENDIMENTO::SAÚDE (SIS)::ODONTOLOGIA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '19/04/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '15/03/2026 10:30 (Mayara Sales)',
      atualizadoEm: '15.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2613;Nav=',
      itemId: '2613'
    }
  },
  {
    id: 'faq-10002614',
    faqNumber: '10002614',
    name: 'Comunicação – Rádio Senado, Rede Legislativa e Distribuição de Conteúdo Jornalístico',
    category: 'CENTRAL DE ATENDIMENTO::COMUNICAÇÃO::RÁDIO SENADO',
    subCategory: 'RÁDIO SENADO',
    system: 'Sistema de Automação de Áudio e Acervo Rádio Senado',
    type: 'Requisição de serviço',
    service: 'Radiodifusão Pública, Jornalismo Legislativo e Parcerias de Retransmissão',
    subject: 'Solicitação de Cópias de Matérias Radiofônicas, Retransmissão por Emissoras Comunitárias e Podcasts',
    associatedProcedureId: '',
    observacoes: 'A programação da Rádio Senado é de sinal aberto, público e gratuito para retransmissão não comercial.',
    procedure: `1. Solicitação de Gravações de Debates e Entrevistas:
   - Emissoras parceiras e ouvintes podem solicitar arquivos em alta fidelidade pelo formulário: radiosenado@senado.leg.br;
2. Adesão à Rede Legislativa de Rádio:
   - Câmaras municipais e assembleias legislativas podem firmar termo de cooperação técnica para compartilhar transmissores e frequências FM;
3. Acesso aos Podcasts e Programas Culturais:
   - Todo o conteúdo veiculado fica disponível sob demanda no portal da Rádio Senado e nas principais plataformas de streaming.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2614;Nav=',
    attachments: [
      {
        name: 'Guia de Adesao e Manual Tecnico da Rede Legislativa de Radio.pdf',
        size: '320.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2614;FileID=15866'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > COMUNICAÇÃO > RÁDIO SENADO',
      categoria: 'CENTRAL DE ATENDIMENTO::COMUNICAÇÃO::RÁDIO SENADO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '19/04/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '15/03/2026 11:00 (Mayara Sales)',
      atualizadoEm: '15.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2614;Nav=',
      itemId: '2614'
    }
  },
  {
    id: 'faq-10002615',
    faqNumber: '10002615',
    name: 'Logística e Suprimentos – Gestão de Estoque de Segurança e Materiais Críticos (SIALM)',
    category: 'CENTRAL DE ATENDIMENTO::ALMOXARIFADO::ESTOQUE DE SEGURANÇA',
    subCategory: 'ESTOQUE DE SEGURANÇA',
    system: 'Sistema Integrado de Almoxarifado (SIALM) / Gestão de Compras',
    type: 'Requisição de serviço',
    service: 'Logística de Suprimentos, Curva ABC e Ponto de Ressuprimento Automático',
    subject: 'Controle de Materiais Críticos de Manutenção, Higienização e Papelaria Parlamentar',
    associatedProcedureId: '',
    observacoes: 'Monitoramento em tempo real evita a ruptura de insumos indispensáveis ao funcionamento das sessões.',
    procedure: `1. Definição do Ponto de Pedido no SIALM:
   - Cada item crítico de consumo possui estoque mínimo e lote econômico de reposição parametrizados no sistema;
2. Disparo do Processo de Compra Preventivo:
   - Quando o saldo atinge a margem de segurança (estoque mínimo), o SIALM autua automaticamente termo de referência para registro de preços;
3. Recebimento e Inspeção de Qualidade:
   - A equipe técnica de almoxarifado confere laudos de conformidade antes de atestar a nota fiscal e liberar os lotes para entrega setorial.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2615;Nav=',
    attachments: [
      {
        name: 'Manual de Gestao Logistica de Estoques SIALM.pdf',
        size: '290.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2615;FileID=15867'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > ALMOXARIFADO > ESTOQUE DE SEGURANÇA',
      categoria: 'CENTRAL DE ATENDIMENTO::ALMOXARIFADO::ESTOQUE DE SEGURANÇA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '19/04/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '15/03/2026 11:30 (Mayara Sales)',
      atualizadoEm: '15.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2615;Nav=',
      itemId: '2615'
    }
  },
  {
    id: 'faq-10002616',
    faqNumber: '10002616',
    name: 'Infraestrutura Predial – Sistema de Tratamento e Reúso de Água Pluvial e Jardins',
    category: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::SUSTENTABILIDADE HÍDRICA',
    subCategory: 'SUSTENTABILIDADE HÍDRICA',
    system: 'Supervisório Hídrico e Reservatórios de Reúso (DINFRA)',
    type: 'Requisição de serviço',
    service: 'Gestão Sustentável da Água, Estação de Tratamento e Irrigação Automatizada',
    subject: 'Captação de Água de Chuva das Coberturas, Filtração e Irrigação dos Jardins de Burle Marx',
    associatedProcedureId: '',
    observacoes: 'Gera economia de até 40% no consumo de água tratada fornecida pela concessionária pública.',
    procedure: `1. Funcionamento do Sistema de Captação Pluvial:
   - Calhas especiais nas coberturas dos blocos drenam a água da chuva para tanques de decantação e bacias de retenção de 200 mil litros;
2. Filtração e Tratamento com Cloração Controlada:
   - A água passa por filtros de areia e carvão ativado, recebendo dosagem de cloro para evitar proliferação bacteriana e mau odor;
3. Distribuição para Irrigação e Vasos Sanitários:
   - O fluido de reúso abastece os aspersores automáticos dos espelhos d'água e jardins históricos, além das caixas acopladas de descargas ecológicas.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2616;Nav=',
    attachments: [
      {
        name: 'Plano Diretor Hidrico e Reuso de Agua Senado Federal.pdf',
        size: '335.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2616;FileID=15868'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > INFRAESTRUTURA > SUSTENTABILIDADE HÍDRICA',
      categoria: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::SUSTENTABILIDADE HÍDRICA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '19/04/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '15/03/2026 12:00 (Mayara Sales)',
      atualizadoEm: '15.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2616;Nav=',
      itemId: '2616'
    }
  },
  {
    id: 'faq-10002617',
    faqNumber: '10002617',
    name: 'Polícia Legislativa – Cadastro, Controle Balístico e Porte Funcional de Armas',
    category: 'CENTRAL DE ATENDIMENTO::POLÍCIA LEGISLATIVA::CONTROLE DE ARMAS',
    subCategory: 'CONTROLE DE ARMAS',
    system: 'Sistema de Controle Bélico e Portes Funcionais (SPOL / SIGMA)',
    type: 'Requisição de serviço',
    service: 'Armamento e Tiro, Laudo Psicológico e Concessão de Porte Funcional',
    subject: 'Renovação de Cautela de Pistolas Institucionais, Exame Psicológico e Teste de Aptidão de Tiro',
    associatedProcedureId: '',
    observacoes: 'Destinado exclusivamente aos policiais legislativos federais em pleno exercício de suas atribuições.',
    procedure: `1. Requisitos para Porte Funcional de Arma de Fogo:
   - Ter aprovação no teste anual de aptidão psicológica para manuseio de arma de fogo com psicólogo credenciado na PF;
   - Obter pontuação mínima no Teste de Tiro Prático Institucional realizado no estande subterrâneo do Senado.
2. Cautela Fixa ou Diária do Armamento:
   - O policial assina termo de cautela no Sistema Bélico da SPOL com registro do número de série e microestriamento balístico;
3. Guarda e Devolução em Licenças:
   - Em afastamentos médicos prolongados ou férias superiores a 30 dias, o armamento deve ser recolhido à Reserva Central de Armas.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2617;Nav=',
    attachments: [
      {
        name: 'Regulamento de Armamento e Tiro da Policia Legislativa.pdf',
        size: '360.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2617;FileID=15869'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > POLÍCIA LEGISLATIVA > CONTROLE DE ARMAS',
      categoria: 'CENTRAL DE ATENDIMENTO::POLÍCIA LEGISLATIVA::CONTROLE DE ARMAS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '19/04/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '15/03/2026 12:30 (Mayara Sales)',
      atualizadoEm: '15.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2617;Nav=',
      itemId: '2617'
    }
  },
  {
    id: 'faq-10002618',
    faqNumber: '10002618',
    name: 'Recursos Humanos – Auxílio-Funeral e Pensão por Morte Provisória',
    category: 'CENTRAL DE ATENDIMENTO::RECURSOS HUMANOS::BENEFÍCIOS SOCIAIS',
    subCategory: 'BENEFÍCIOS SOCIAIS',
    system: 'SENADONET / Coordenação de Acolhimento e Pensões (SEGP)',
    type: 'Requisição de serviço',
    service: 'Benefícios Previdenciários, Apoio a Familiares e Auxílio Funeral',
    subject: 'Ressarcimento de Despesas com Funeral e Habilitação de Dependentes para Pensão por Morte',
    associatedProcedureId: '',
    observacoes: 'Pagamento em rito sumaríssimo em até 48 horas após a entrega das notas fiscais das despesas fúnebres.',
    procedure: `1. Requerimento do Auxílio-Funeral:
   - O familiar ou terceiro que custeou o funeral apresenta certidão de óbito do servidor e notas fiscais da funerária em seu nome;
   - O pagamento é creditado em conta corrente com rito prioritário de urgência.
2. Habilitação de Dependentes para Pensão por Morte:
   - Cônjuges, companheiros com união estável reconhecida e filhos menores ou inválidos protocolam documentação comprobatória na SEGP;
3. Concessão Provisória e Auditoria:
   - É emitida pensão provisória imediata para assegurar o sustento familiar enquanto corre a instrução conclusiva com a Advocacia do Senado.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2618;Nav=',
    attachments: [
      {
        name: 'Instrucoes de Auxilio Funeral e Pensao por Morte SEGP.pdf',
        size: '275.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2618;FileID=15870'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > RECURSOS HUMANOS > BENEFÍCIOS SOCIAIS',
      categoria: 'CENTRAL DE ATENDIMENTO::RECURSOS HUMANOS::BENEFÍCIOS SOCIAIS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '19/04/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '15/03/2026 13:00 (Mayara Sales)',
      atualizadoEm: '15.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2618;Nav=',
      itemId: '2618'
    }
  }
];
