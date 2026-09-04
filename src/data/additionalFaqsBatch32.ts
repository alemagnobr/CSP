import { FAQ } from '@/types';

export const additionalFaqsBatch32: FAQ[] = [
  {
    id: 'faq-10002499',
    faqNumber: '10002499',
    name: 'Saúde e Benefícios – Atendimento e Serviços no Sistema Integrado de Saúde (SIS)',
    category: 'CENTRAL DE ATENDIMENTO::BENEFÍCIOS::SAÚDE SIS',
    subCategory: 'SAÚDE SIS',
    system: 'Sistema Integrado de Saúde (SIS)',
    type: 'Requisição de serviço',
    service: 'Gestão do Plano de Saúde dos Servidores e Parlamentares',
    subject: 'Solicitação de Reembolso Médico, Emissão de Carteira Digital e Guia de Autorização Prévia',
    associatedProcedureId: '',
    observacoes: 'Atendimento aos beneficiários titulares e dependentes legalmente cadastrados.',
    procedure: `1. O beneficiário do SIS acessa o portal: https://sis.senado.leg.br ou o aplicativo móvel "SIS Senado".
2. Autenticação:
   - Login com CPF e senha cadastrada ou via conta Gov.br integrada.
3. Principais Serviços Disponíveis:
   - "Carteira Digital": Apresentação do cartão virtual com QR Code para atendimento na rede credenciada;
   - "Autorização Prévia": Envio de laudo médico e pedido para exames de alta complexidade, cirurgias e internações;
   - "Solicitação de Reembolso": Para atendimentos fora da rede credenciada, anexe nota fiscal eletrônica legível e relatório do profissional de saúde.
4. O acompanhamento dos prazos de análise e extratos de coparticipação é realizado diretamente pelo painel do usuário.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2499;Nav=',
    attachments: [
      {
        name: 'Manual do Beneficiário SIS Senado.pdf',
        size: '345.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2499;FileID=15751'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > BENEFÍCIOS > SAÚDE SIS',
      categoria: 'CENTRAL DE ATENDIMENTO::BENEFÍCIOS::SAÚDE SIS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/03/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '25/02/2026 09:30 (Mayara Sales)',
      atualizadoEm: '25.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2499;Nav=',
      itemId: '2499'
    }
  },
  {
    id: 'faq-10002500',
    faqNumber: '10002500',
    name: 'Desenvolvimento e QA – Testes de Carga, Estresse e Performance de Aplicações Críticas',
    category: 'CENTRAL DE ATENDIMENTO::DESENVOLVIMENTO::TESTES',
    subCategory: 'TESTES',
    system: 'Ambiente de Testes de Carga (k6 / JMeter)',
    type: 'Requisição de serviço',
    service: 'Garantia da Qualidade de Software (QA)',
    subject: 'Simulação de Alto Volume de Concorrência para Votações e Transmissões de Grande Impacto',
    associatedProcedureId: '',
    observacoes: 'Testes de estresse em larga escala devem ser previamente acordados com o Datacenter para não interferir na produção.',
    procedure: `1. O líder da Squad ou arquiteto de software solicita o teste na Central de Serviços:
   Informática > QA e Testes > Simulação de Carga e Performance.
2. Forneça o plano de testes contendo:
   - Cenário de uso (ex: 50.000 usuários simultâneos acessando página de votação no portal);
   - Endpoints da API ou URLs do ambiente de homologação espelhado;
   - Critérios de aceitação: tempo de resposta (p95 abaixo de 500ms) e taxa de erro HTTP (menor que 0.1%).
3. A equipe de QA executa os scripts de teste utilizando ferramentas homologadas (k6 / Apache JMeter) integradas aos pipelines CI/CD.
4. É emitido o relatório de gargalos identificando índices de lentidão em consultas SQL, memória ou concorrência de pods.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2500;Nav=',
    attachments: [
      {
        name: 'Guia de Testes de Performance DITEC.pdf',
        size: '318.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2500;FileID=15752'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > DESENVOLVIMENTO > TESTES',
      categoria: 'CENTRAL DE ATENDIMENTO::DESENVOLVIMENTO::TESTES',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/03/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '25/02/2026 10:00 (Mayara Sales)',
      atualizadoEm: '25.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2500;Nav=',
      itemId: '2500'
    }
  },
  {
    id: 'faq-10002501',
    faqNumber: '10002501',
    name: 'Sustentabilidade e Patrimônio – Descarte Ecológico e Desfazimento de Resíduos Eletrônicos (Lixo Eletrônico)',
    category: 'CENTRAL DE ATENDIMENTO::PATRIMÔNIO::DESCARTE SUSTENTÁVEL',
    subCategory: 'DESCARTE SUSTENTÁVEL',
    system: 'Logística Sustentável (PLS)',
    type: 'Requisição de serviço',
    service: 'Gestão Ambiental e Responsabilidade Socioambiental',
    subject: 'Descarte Correto de Pilhas, Baterias, Cabos, Monitores e Desfazimento de Computadores Inservíveis',
    associatedProcedureId: '',
    observacoes: 'Equipamentos patrimoniados passam por processo formal de baixa e desmagnetização de dados antes da doação ou reciclagem.',
    procedure: `1. Descarte de Pilhas, Baterias e Pequenos Periféricos Inservíveis:
   - Deposite os itens nos coletores verdes identificados como "Papa-Pilhas" distribuídos nos halls de elevadores de todos os blocos do Senado.
2. Descarte de Equipamentos Patrimoniados Obsoletos (CPUs, Notebooks, Impressoras):
   - Abra processo de recolhimento no SIGAD direcionado ao Serviço de Patrimônio (SEPAT);
   - A equipe técnica da DITEC realiza a higienização de dados (Wipe de segurança certificado ou destruição mecânica de HDs/SSDs);
   - Os equipamentos em condição de uso são doados para escolas públicas e telecentros comunitários conforme a Política de Logística Sustentável do Senado (PLS).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2501;Nav=',
    attachments: [
      {
        name: 'Cartilha de Gestão de Resíduos Eletrônicos Senado.pdf',
        size: '280.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2501;FileID=15753'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > PATRIMÔNIO > DESCARTE SUSTENTÁVEL',
      categoria: 'CENTRAL DE ATENDIMENTO::PATRIMÔNIO::DESCARTE SUSTENTÁVEL',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/03/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '25/02/2026 10:30 (Mayara Sales)',
      atualizadoEm: '25.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2501;Nav=',
      itemId: '2501'
    }
  },
  {
    id: 'faq-10002502',
    faqNumber: '10002502',
    name: 'Sistemas Corporativos – Contratações Públicas e Fiscalização de Contratos de TI (SISCON)',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::CONTRATOS',
    subCategory: 'CONTRATOS',
    system: 'SISCON (Gestão de Contratos)',
    type: 'Requisição de serviço',
    service: 'Gestão de Licitações, Contratos e Fiscalização Técnica',
    subject: 'Registro de Termo de Recebimento Provisório (TRP), Atestação de Faturas e Gestão de Riscos',
    associatedProcedureId: '',
    observacoes: 'Obrigatório para fiscais técnicos e administrativos designados por portaria.',
    procedure: `1. O fiscal técnico ou administrativo acessa o SISCON: https://siscon.senado.leg.br.
2. Acompanhamento de Ordens de Serviço (OS):
   - Registro de emissão de OS com especificação de produtos, prazos e métricas de pagamento (Pontos de Função ou Unidades de Serviço);
   - Análise dos relatórios de entrega submetidos pelas empresas contratadas.
3. Emissão de Documentos Fiscais:
   - "Termo de Recebimento Provisório (TRP)": Lavrado em até 15 dias após a entrega dos bens/serviços para conferência técnica;
   - "Termo de Recebimento Definitivo (TRD)": Emitido após validação e ateste da nota fiscal eletrônica.
4. Para suporte sobre cálculos de glosas ou aditivos contratuais, procure a Coordenação de Contratos (SCON).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2502;Nav=',
    attachments: [
      {
        name: 'Manual de Fiscalização de Contratos Senado.pdf',
        size: '360.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2502;FileID=15754'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS CORPORATIVOS > CONTRATOS',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::CONTRATOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/03/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '25/02/2026 11:00 (Mayara Sales)',
      atualizadoEm: '25.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2502;Nav=',
      itemId: '2502'
    }
  },
  {
    id: 'faq-10002503',
    faqNumber: '10002503',
    name: 'Comunicação Oficial – Transmissão Simultânea e Tradução em Libras em Sessões Plenárias',
    category: 'CENTRAL DE ATENDIMENTO::ACESSIBILIDADE::LIBRAS',
    subCategory: 'LIBRAS',
    system: 'Acessibilidade em Transmissões',
    type: 'Requisição de serviço',
    service: 'Acessibilidade Comunicacional e Inclusão Social',
    subject: 'Solicitação de Janela de Libras e Legenda Oculta (Closed Caption) para Eventos e Audiências',
    associatedProcedureId: '',
    observacoes: 'Sessões do Plenário e comissões regimentais contam com tradução obrigatória ininterrupta.',
    procedure: `1. Para solicitar equipe de intérpretes de Libras ou legendagem oculta (Closed Caption) para eventos institucionais especiais:
   - Abra chamado com antecedência mínima de 3 dias úteis: Central de Atendimento > Acessibilidade > Tradução em Libras.
2. No formulário do chamado, especifique:
   - Data, horário de início, duração estimada e sala/plenário onde ocorrerá o evento;
   - Indicação se haverá transmissão ao vivo pela TV Senado, canal do YouTube ou Teams.
3. A equipe de Acessibilidade da SECOM agenda os intérpretes credenciados e coordena o sinal da câmera de Libras com a bancada de corte do switcher.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2503;Nav=',
    attachments: [
      {
        name: 'Guia de Acessibilidade em Eventos do Senado.pdf',
        size: '295.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2503;FileID=15755'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > ACESSIBILIDADE > LIBRAS',
      categoria: 'CENTRAL DE ATENDIMENTO::ACESSIBILIDADE::LIBRAS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/03/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '25/02/2026 11:30 (Mayara Sales)',
      atualizadoEm: '25.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2503;Nav=',
      itemId: '2503'
    }
  },
  {
    id: 'faq-10002504',
    faqNumber: '10002504',
    name: 'Sistemas Corporativos – Gestão de Viagens e Transporte Oficial Terrestre (FROTA)',
    category: 'CENTRAL DE ATENDIMENTO::TRANSPORTE::FROTA',
    subCategory: 'FROTA',
    system: 'Sistema de Frotas e Transporte',
    type: 'Requisição de serviço',
    service: 'Apoio Logístico e Transporte Institucional',
    subject: 'Solicitação de Carro Oficial com Motorista para Deslocamentos Institucionais em Brasília',
    associatedProcedureId: '',
    observacoes: 'Atendimento estritamente para deslocamentos a serviço dos órgãos do Senado Federal e comissões.',
    procedure: `1. O servidor autorizado da unidade acessa o sistema de transporte institucional: https://frota.senado.leg.br.
2. Preencha a Requisição de Transporte Terrestre:
   - Data e horário pretendido da saída;
   - Ponto de partida no complexo do Senado e endereço de destino no Distrito Federal;
   - Nome e contato dos passageiros participantes da missão institucional;
   - Justificativa do interesse público do deslocamento.
3. O pedido é aprovado pela chefia imediata e distribuído eletronicamente para a escala da Coordenação de Transporte (COTRAN).
4. O solicitante recebe SMS e notificação no Teams com a identificação do veículo, placa e contato do motorista escalado.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2504;Nav=',
    attachments: [
      {
        name: 'Regulamento de Uso da Frota de Veículos Senado.pdf',
        size: '270.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2504;FileID=15756'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > TRANSPORTE > FROTA',
      categoria: 'CENTRAL DE ATENDIMENTO::TRANSPORTE::FROTA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/03/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '25/02/2026 12:00 (Mayara Sales)',
      atualizadoEm: '25.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2504;Nav=',
      itemId: '2504'
    }
  },
  {
    id: 'faq-10002505',
    faqNumber: '10002505',
    name: 'Tecnologia da Informação – Procedimento para Restauração de Arquivos Deletados no Servidor de Rede (Shadow Copy)',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::ARQUIVOS',
    subCategory: 'ARQUIVOS',
    system: 'Servidor de Arquivos (SMB)',
    type: 'Requisição de serviço',
    service: 'Armazenamento Corporativo e Recuperação de Documentos',
    subject: 'Recuperação de Pastas e Arquivos Acidentalmente Excluídos em Pastas Departamentais (Drive P: ou S:)',
    associatedProcedureId: '',
    observacoes: 'O recurso de Versões Anteriores (VSS) tira cópias automáticas em dois horários diários (12h e 18h).',
    procedure: `1. Autoatendimento pelo Usuário (Versões Anteriores):
   - Abra o Windows Explorer e localize a pasta onde o arquivo excluído estava armazenado;
   - Clique com o botão direito do mouse no espaço vazio da pasta (ou na pasta-mãe) e selecione "Propriedades";
   - Acesse a aba "Versões Anteriores" (Previous Versions);
   - Selecione a cópia de sombra com a data e horário anterior à exclusão;
   - Clique em "Abrir" para inspecionar o conteúdo ou "Restaurar" para recuperá-lo.
2. Caso o arquivo não apareça na lista de cópias de sombra automáticas:
   - Registre chamado na Central de Serviços: Informática > Infraestrutura > Recuperação de Backup de Pastas de Rede;
   - Informe o caminho de rede completo (ex: \\\\senado.leg.br\\setores\\SECONT\\processos) e o nome do arquivo.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2505;Nav=',
    attachments: [
      {
        name: 'Guia Prático Recuperação de Arquivos VSS.pdf',
        size: '264.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2505;FileID=15757'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > ARQUIVOS',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::ARQUIVOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/03/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '25/02/2026 12:30 (Mayara Sales)',
      atualizadoEm: '25.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2505;Nav=',
      itemId: '2505'
    }
  },
  {
    id: 'faq-10002506',
    faqNumber: '10002506',
    name: 'Sistemas Corporativos – Cadastro e Gestão de Estagiários e Menores Aprendizes no Senado (SIGEST)',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::ESTÁGIO',
    subCategory: 'ESTÁGIO',
    system: 'SIGEST (Gestão de Estágios)',
    type: 'Requisição de serviço',
    service: 'Gestão de Programas de Estágio e Formação Profissional',
    subject: 'Homologação de Termo de Compromisso de Estágio (TCE), Relatório de Atividades e Folha de Ponto',
    associatedProcedureId: '',
    observacoes: 'Atendimento supervisionado pela Coordenação de Capacitação e Estágio da Secretaria de Gestão de Pessoas.',
    procedure: `1. O supervisor de estágio designado no gabinete ou diretoria acessa o SIGEST: https://sigest.senado.leg.br.
2. Validação de Ingresso:
   - Conferência eletrônica do Termo de Compromisso de Estágio (TCE) e plano de atividades;
   - Liberação de conta de e-mail institucional padronizada para estagiário (@senado.leg.br).
3. Acompanhamento Semestral:
   - Preenchimento obrigatório do Relatório Semestral de Avaliação de Desempenho e Aproveitamento Escolar;
   - Registro e homologação mensal da folha de frequência e controle da jornada máxima de 20 ou 30 horas semanais.
4. Ao final do estágio, emita a Certidão de Conclusão e Termo de Desligamento no portal.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2506;Nav=',
    attachments: [
      {
        name: 'Manual do Supervisor de Estágio Senado.pdf',
        size: '308.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2506;FileID=15758'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS CORPORATIVOS > ESTÁGIO',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::ESTÁGIO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/03/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '25/02/2026 13:00 (Mayara Sales)',
      atualizadoEm: '25.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2506;Nav=',
      itemId: '2506'
    }
  }
];
