import { FAQ } from '@/types';

export const additionalFaqsBatch39: FAQ[] = [
  {
    id: 'faq-10002555',
    faqNumber: '10002555',
    name: 'Comissão Diretora – Pauta Administrativa e Deliberações Colegiadas da Mesa',
    category: 'CENTRAL DE ATENDIMENTO::MESA DIRETORA::COMISSÃO DIRETORA',
    subCategory: 'COMISSÃO DIRETORA',
    system: 'Sistema de Apoio à Comissão Diretora e SIGAD',
    type: 'Requisição de serviço',
    service: 'Gestão Superior, Deliberações Colegiadas e Atos da Mesa',
    subject: 'Autuação de Processos para a Comissão Diretora, Pareceres da Advocacia e Publicação de Atos',
    associatedProcedureId: '',
    observacoes: 'Competência exclusiva da Mesa Diretora para decisões de reestruturação administrativa e fixação de diretrizes orçamentárias.',
    procedure: `1. Requisitos para Inclusão de Matéria na Pauta da Comissão Diretora:
   - O processo deve ser autuado no SIGAD pela Diretoria-Geral ou Secretaria-Geral da Mesa;
   - É obrigatória a instrução com parecer jurídico conclusivo da Advocacia do Senado Federal (ADVOSF) e manifestação técnica da Secretaria de Finanças/Orçamento.
2. Elaboração e Distribuição da Pauta aos Senadores Membros:
   - A Secretaria da Comissão Diretora consolida a pauta com os projetos de atos e pareceres com antecedência mínima de 48 horas da reunião;
   - Os senadores membros da Mesa (Presidente, Vice-Presidentes e Secretários) recebem acesso eletrônico aos autos.
3. Lavratura de Atas e Publicação de Atos da Comissão Diretora:
   - Aprovada a matéria, a ata é assinada eletronicamente pelos membros presentes e os Atos da Comissão Diretora são publicados no Boletim Administrativo do Senado (BAS) e no Diário Oficial da União (DOU).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2555;Nav=',
    attachments: [
      {
        name: 'Regimento e Competencias da Comissao Diretora.pdf',
        size: '328.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2555;FileID=15807'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > MESA DIRETORA > COMISSÃO DIRETORA',
      categoria: 'CENTRAL DE ATENDIMENTO::MESA DIRETORA::COMISSÃO DIRETORA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '03/04/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '08/03/2026 09:30 (Mayara Sales)',
      atualizadoEm: '08.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2555;Nav=',
      itemId: '2555'
    }
  },
  {
    id: 'faq-10002556',
    faqNumber: '10002556',
    name: 'Infraestrutura Elétrica – Manutenção Preventiva em Nobreaks (UPS) e Geradores do Data Center',
    category: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::ENERGIA E DATA CENTER',
    subCategory: 'ENERGIA E DATA CENTER',
    system: 'Sistema de Supervisão Predial e Gerenciamento de Energia',
    type: 'Requisição de serviço',
    service: 'Subestações, Grupos Geradores a Diesel e Nobreaks de Grande Porte',
    subject: 'Procedimentos de Chaveamento para By-Pass, Teste de Carga em Geradores e Alertas Preventivos',
    associatedProcedureId: '',
    observacoes: 'Atividades coordenadas em conjunto com a equipe técnica da DITEC e da Diretoria de Engenharia (DINFRA).',
    procedure: `1. Notificação Prévia de Janela Elétrica:
   - A equipe de engenharia elétrica emite comunicado com 5 dias úteis de antecedência para as diretorias do Senado informando a janela de testes em grupos geradores ou baterias de nobreak;
2. Procedimento Operacional Padrão de Chaveamento de Nobreaks:
   - O chaveamento dos sistemas UPS de missão crítica é efetuado em regime de redundância N+1, sem corte de energia para os servidores e switches dos racks;
   - Caso seja necessária transferência para By-Pass estático de manutenção, os alertas nos consoles de monitoramento (Zabbix/Nagios) são silenciados temporariamente.
3. Teste Periódico de Grupos Geradores a Diesel:
   - Realizado mensalmente com acionamento automático por falha simulada da concessionária (Neoenergia), operando em carga real por 60 minutos contínuos.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2556;Nav=',
    attachments: [
      {
        name: 'Procedimento Operacional Padrao Energia Data Center.pdf',
        size: '345.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2556;FileID=15808'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > INFRAESTRUTURA > ENERGIA E DATA CENTER',
      categoria: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::ENERGIA E DATA CENTER',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '03/04/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '08/03/2026 10:00 (Mayara Sales)',
      atualizadoEm: '08.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2556;Nav=',
      itemId: '2556'
    }
  },
  {
    id: 'faq-10002557',
    faqNumber: '10002557',
    name: 'Assistência à Saúde (SIS) – Autorização Prévia para Exames de Alta Complexidade e Cirurgias',
    category: 'CENTRAL DE ATENDIMENTO::SAÚDE (SIS)::AUTORIZAÇÕES PRÉVIAS',
    subCategory: 'AUTORIZAÇÕES PRÉVIAS',
    system: 'Sistema SIS Autorizações Online',
    type: 'Requisição de serviço',
    service: 'Perícia Médica, Regulação e Auditoria Prévia do SIS',
    subject: 'Solicitação de Guia para Ressonância Magnética, Cirurgias Eletivas, Quimioterapia e Terapias Especiais',
    associatedProcedureId: '',
    observacoes: 'Urgências e emergências médicas hospitalares não dependem de autorização prévia.',
    procedure: `1. Procedimentos que Exigem Autorização Prévia da Perícia:
   - Ressonâncias magnéticas, PET-CT, cintilografias, cirurgias eletivas, procedimentos ortopédicos de alto custo, tratamento oncológico (quimioterapia/radioterapia) e sessões continuadas de fisioterapia/psicoterapia.
2. Como Submeter o Pedido de Autorização:
   - Acesse o aplicativo ou portal do SIS: https://senado.leg.br/sis;
   - Faça upload do pedido médico legível contendo: indicação clínica detalhada, hipótese diagnóstica (CID) e código TUSS do procedimento;
   - Anexe laudos de exames anteriores que fundamentam a indicação cirúrgica ou diagnóstica.
3. Prazo de Emissão da Guia Autorizada:
   - Exames diagnósticos e terapias: liberação em até 48 horas úteis;
   - Cirurgias eletivas programadas: análise pela junta de auditores em até 5 dias úteis com emissão da autorização eletrônica direcionada ao hospital credenciado.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2557;Nav=',
    attachments: [
      {
        name: 'Guia de Autorizacoes Previas e Exames SIS.pdf',
        size: '310.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2557;FileID=15809'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SAÚDE (SIS) > AUTORIZAÇÕES PRÉVIAS',
      categoria: 'CENTRAL DE ATENDIMENTO::SAÚDE (SIS)::AUTORIZAÇÕES PRÉVIAS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '03/04/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '08/03/2026 10:30 (Mayara Sales)',
      atualizadoEm: '08.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2557;Nav=',
      itemId: '2557'
    }
  },
  {
    id: 'faq-10002558',
    faqNumber: '10002558',
    name: 'Sistemas Corporativos – Cadastro de Visitantes e Agendamento de Reuniões em Gabinetes (SIVIS)',
    category: 'CENTRAL DE ATENDIMENTO::ACESSO FÍSICO::VISITANTES SIVIS',
    subCategory: 'VISITANTES SIVIS',
    system: 'SIVIS (Sistema de Visitantes do Senado)',
    type: 'Requisição de serviço',
    service: 'Polícia Legislativa e Recepção de Autoridades e Visitantes',
    subject: 'Pré-Agendamento de Visitas aos Gabinetes, Liberação de Entrada Rápida nas Portarias e Crachás',
    associatedProcedureId: '',
    observacoes: 'O pré-cadastro agiliza o atendimento evitando filas na recepção principal da Chapelaria e Anexo II.',
    procedure: `1. Como Fazer o Pré-Agendamento de Visitantes no SIVIS:
   - O servidor do gabinete ou setor administrativo acessa o sistema SIVIS pela Intranet;
   - Informe: nome completo do visitante, CPF ou documento de identidade oficial com foto, data e horário previstos da reunião e nome do responsável que o receberá.
2. Entrada do Visitante nas Portarias:
   - O visitante dirige-se ao balcão de credenciamento e apresenta o documento com foto;
   - O recepcionista localiza o pré-agendamento no sistema, captura a biometria facial fotográfica e entrega o crachá de visitante programado para as catracas do respectivo anexo/bloco.
3. Autoridades e Delegações Oficiais:
   - Para embaixadas, governadores e prefeitos, notifique a Polícia Legislativa e o Cerimonial para recepção privativa na rampa principal ou chapelaria.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2558;Nav=',
    attachments: [
      {
        name: 'Manual de Controle de Visitantes SIVIS.pdf',
        size: '278.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2558;FileID=15810'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > ACESSO FÍSICO > VISITANTES SIVIS',
      categoria: 'CENTRAL DE ATENDIMENTO::ACESSO FÍSICO::VISITANTES SIVIS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '03/04/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '08/03/2026 11:00 (Mayara Sales)',
      atualizadoEm: '08.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2558;Nav=',
      itemId: '2558'
    }
  },
  {
    id: 'faq-10002559',
    faqNumber: '10002559',
    name: 'Sistemas Corporativos – Gestão de Obras e Manutenção Predial Corretiva (SISOBRAS)',
    category: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA PREDIAL::MANUTENÇÃO PREDIAL',
    subCategory: 'MANUTENÇÃO PREDIAL',
    system: 'SISOBRAS / Central de Serviços Prediais',
    type: 'Incidente',
    service: 'Engenharia Civil, Hidráulica, Ar Condicionado e Pintura',
    subject: 'Reparos Hidráulicos em Sanitários, Falhas no Ar Condicionado Central e Pequenas Reformas',
    associatedProcedureId: '',
    observacoes: 'Atendimento emergencial de vazamentos ou riscos de curto-circuito possui SLA de até 30 minutos.',
    procedure: `1. Abertura de Chamado de Manutenção Predial:
   - Abra chamado na Central de Serviços: Infraestrutura Predial > Manutenção > Selecione a especialidade (Civil, Elétrica, Hidráulica, Refrigeração ou Marcenaria);
   - Indique o local exato com precisão: Bloco, Andar, Sala e descrição da anomalia (ex.: vazamento sob a pia, ar condicionado gotejando ou lâmpada piscando).
2. Triagem e Despacho de Oficinas:
   - A Central de Operações Prediais despacha a equipe de oficiais de manutenção plantonistas com ferramentas apropriadas;
3. Homologação do Serviço Concluído:
   - Após o término do conserto, o solicitante assina a ordem de serviço física ou eletrônica atestando a qualidade do reparo.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2559;Nav=',
    attachments: [
      {
        name: 'Guia de Servicos de Manutencao Predial DINFRA.pdf',
        size: '295.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2559;FileID=15811'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > INFRAESTRUTURA PREDIAL > MANUTENÇÃO PREDIAL',
      categoria: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA PREDIAL::MANUTENÇÃO PREDIAL',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '03/04/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '08/03/2026 11:30 (Mayara Sales)',
      atualizadoEm: '08.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2559;Nav=',
      itemId: '2559'
    }
  },
  {
    id: 'faq-10002560',
    faqNumber: '10002560',
    name: 'Sistemas Corporativos – Solicitação de Diárias de Alimentação e Auxílio-Transporte (SENADONET)',
    category: 'CENTRAL DE ATENDIMENTO::BENEFÍCIOS::AUXÍLIO-TRANSPORTE E ALIMENTAÇÃO',
    subCategory: 'AUXÍLIO-TRANSPORTE E ALIMENTAÇÃO',
    system: 'SENADONET (Benefícios do Servidor)',
    type: 'Requisição de serviço',
    service: 'Gestão de Benefícios e Folha de Pagamento',
    subject: 'Atualização de Trajeto de Transporte Público, Opção pelo Auxílio-Transporte e Auxílio-Alimentação',
    associatedProcedureId: '',
    observacoes: 'O auxílio-transporte tem caráter indenizatório para deslocamentos residência-trabalho em transporte público coletivo.',
    procedure: `1. Requerimento de Concessão ou Atualização do Auxílio-Transporte:
   - Acesse o portal SENADONET: https://senadonet.senado.leg.br no menu: "Benefícios" > "Auxílio-Transporte";
   - Informe o endereço residencial atualizado, as linhas de ônibus/metrô utilizadas e o custo diário das passagens;
   - Declare estar ciente de que o benefício não se aplica nos dias de teletrabalho integral ou férias.
2. Auxílio-Alimentação:
   - Servidores ativos recebem o benefício automaticamente na folha de pagamento;
   - Em caso de cessão para outro órgão ou exercício de mandato eletivo externo, atualize a opção pela fonte pagadora no SENADONET.
3. Prazos de Efetivação Financeira:
   - Solicitações deferidas até o dia 10 do mês vigente produzem efeitos financeiros na folha de pagamento do mês subsequente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2560;Nav=',
    attachments: [
      {
        name: 'Manual de Beneficios e Auxilio-Transporte.pdf',
        size: '260.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2560;FileID=15812'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > BENEFÍCIOS > AUXÍLIO-TRANSPORTE E ALIMENTAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::BENEFÍCIOS::AUXÍLIO-TRANSPORTE E ALIMENTAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '03/04/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '08/03/2026 12:00 (Mayara Sales)',
      atualizadoEm: '08.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2560;Nav=',
      itemId: '2560'
    }
  },
  {
    id: 'faq-10002561',
    faqNumber: '10002561',
    name: 'Sistemas Corporativos – Emissão e Validação de Diploma do Instituto Legislativo Brasileiro (ILB)',
    category: 'CENTRAL DE ATENDIMENTO::CAPACITAÇÃO::DIPLOMAS ILB',
    subCategory: 'DIPLOMAS ILB',
    system: 'Saberes / Plataforma EaD do ILB',
    type: 'Requisição de serviço',
    service: 'Capacitação, Pós-Graduação e Treinamento Parlamentar',
    subject: 'Emissão de Certificados de Cursos Sem Tutoria, Diplomas de Especialização e Validação Eletrônica',
    associatedProcedureId: '',
    observacoes: 'Certificados emitidos pela plataforma Saberes com código de autenticidade eletrônica aceitos em todo o Brasil.',
    procedure: `1. Conclusão de Cursos Online sem Tutoria no ILB:
   - Após obter nota igual ou superior a 70% na avaliação final do curso na plataforma Saberes (https://saberes.senado.leg.br);
   - O certificado digital é liberado automaticamente para download em formato PDF na aba "Meus Cursos" > "Emitir Certificado".
2. Diplomas de Cursos de Especialização / Pós-Graduação Lato Sensu:
   - Após a defesa aprovada do Trabalho de Conclusão de Curso (TCC) e conferência de documentos de graduação;
   - A Secretaria Acadêmica do ILB emite o diploma oficial com registro no MEC no prazo de até 60 dias úteis.
3. Validação Pública de Autenticidade do Certificado:
   - Qualquer instituição de ensino ou empregador pode validar o certificado acessando o link oficial: https://saberes.senado.leg.br/validar e digitando o código de autenticação impresso.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2561;Nav=',
    attachments: [
      {
        name: 'Regulamento de Cursos e Certificacao ILB.pdf',
        size: '304.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2561;FileID=15813'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > CAPACITAÇÃO > DIPLOMAS ILB',
      categoria: 'CENTRAL DE ATENDIMENTO::CAPACITAÇÃO::DIPLOMAS ILB',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '03/04/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '08/03/2026 12:30 (Mayara Sales)',
      atualizadoEm: '08.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2561;Nav=',
      itemId: '2561'
    }
  },
  {
    id: 'faq-10002562',
    faqNumber: '10002562',
    name: 'Sistemas Corporativos – Gestão de Chaves e Acesso a Claviculários de Gabinetes e Setores',
    category: 'CENTRAL DE ATENDIMENTO::ACESSO FÍSICO::CHAVES E CLAVICULÁRIOS',
    subCategory: 'CHAVES E CLAVICULÁRIOS',
    system: 'Sistema de Controle de Claviculários (SPOL)',
    type: 'Requisição de serviço',
    service: 'Polícia do Senado e Controle de Chaves Institucionais',
    subject: 'Retirada e Devolução de Chaves de Salas e Gabinetes, Claviculários Eletrônicos com Biometria',
    associatedProcedureId: '',
    observacoes: 'A retirada de chaves é restrita aos servidores e terceirizados expressamente autorizados pela chefia do setor.',
    procedure: `1. Autorização para Retirada de Chaves da Unidade:
   - A chefia do gabinete ou órgão cadastra a lista de pessoas autorizadas na Central de Serviços ou entrega ofício na portaria policial do respectivo bloco;
2. Uso dos Claviculários Eletrônicos Inteligentes:
   - Aproxime seu crachá funcional ou faça autenticação biométrica no terminal do claviculário;
   - A porta do armário inteligente destrava e o LED da posição correspondente à chave da sua sala acende em verde;
   - Retire a chave. O sistema registra automaticamente a data, hora e matrícula do portador.
3. Perda de Chave ou Chave Trancada por Dentro:
   - Em caso de travamento ou esquecimento de chaves, acione a ronda da Polícia Legislativa pelo ramal 3303-3333 para abertura acompanhada da porta.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2562;Nav=',
    attachments: [
      {
        name: 'Norma de Gestao de Chaves e Clavicularios Senado.pdf',
        size: '250.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2562;FileID=15814'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > ACESSO FÍSICO > CHAVES E CLAVICULÁRIOS',
      categoria: 'CENTRAL DE ATENDIMENTO::ACESSO FÍSICO::CHAVES E CLAVICULÁRIOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '03/04/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '08/03/2026 13:00 (Mayara Sales)',
      atualizadoEm: '08.03.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2562;Nav=',
      itemId: '2562'
    }
  }
];
