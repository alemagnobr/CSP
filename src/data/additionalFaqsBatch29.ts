import { FAQ } from '@/types';

export const additionalFaqsBatch29: FAQ[] = [
  {
    id: 'faq-10002475',
    faqNumber: '10002475',
    name: 'Protocolo Digital – Peticionamento Eletrônico e Recebimento de Documentos Externos',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::PROTOCOLO',
    subCategory: 'PROTOCOLO',
    system: 'Protocolo Digital',
    type: 'Requisição de serviço',
    service: 'Gestão Documental e Protocolo Eletrônico',
    subject: 'Envio de Ofícios, Petições e Requerimentos por Cidadãos e Entidades Externas',
    associatedProcedureId: '',
    observacoes: 'Substitui a necessidade de protocolo presencial físico ou envio via correspondência postal.',
    procedure: `1. O cidadão, advogado ou representante de órgão público acessa: https://protocolo.senado.leg.br.
2. Login com a conta Gov.br (selo Prata ou Ouro obrigatório para validação de identidade).
3. Preenchimento dos dados da solicitação:
   - Seleção do órgão ou gabinete destinatário no Senado Federal;
   - Informação do assunto resumido e dados para contato;
   - Upload do documento principal e eventuais anexos em formato PDF pesquisável (OCR), com limite de até 50 MB por arquivo.
4. Conclusão e Protocolo:
   - O sistema gera automaticamente o Recibo Eletrônico de Protocolo contendo número NUP, data, horário oficial de Brasília e código verificador de autenticidade;
   - O documento ingressa diretamente no SIGAD para autuação e distribuição processual imediata.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2475;Nav=',
    attachments: [
      {
        name: 'Manual Peticionamento Eletrônico Cidadão.pdf',
        size: '315.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2475;FileID=15727'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS CORPORATIVOS > PROTOCOLO',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::PROTOCOLO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/03/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '10/02/2026 09:30 (Mayara Sales)',
      atualizadoEm: '10.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2475;Nav=',
      itemId: '2475'
    }
  },
  {
    id: 'faq-10002476',
    faqNumber: '10002476',
    name: 'Monitoramento de Serviços – Acionamento do Plantão do NOC (Network Operations Center)',
    category: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::MONITORAMENTO',
    subCategory: 'MONITORAMENTO',
    system: 'Monitoramento (NOC)',
    type: 'Incidente',
    service: 'Operações de Rede e Alta Disponibilidade',
    subject: 'Reportar Queda Crítica de Portais Públicos, Streaming da TV Senado ou Rádio Senado',
    associatedProcedureId: '',
    observacoes: 'O NOC opera em regime de escala 24x7 para assegurar a continuidade dos canais de transparência legislativa.',
    procedure: `1. Caso seja identificada lentidão generalizada ou indisponibilidade total em serviços públicos do Senado:
   - Portal Institucional (senado.leg.br);
   - Transmissões ao vivo do Plenário e Comissões pela TV/Rádio Senado;
   - Portal da Transparência ou Consulta de Matérias Legislativas.
2. Contato de Emergência com o NOC:
   - Ligue diretamente para o ramal do plantão 24h: 3303-3330 (ou linha direta externa oficial);
   - E-mail de contingência: noc@senado.leg.br.
3. Informações a fornecer:
   - URL exata ou canal afetado;
   - Código de erro HTTP exibido (ex: 502 Bad Gateway, 504 Gateway Timeout);
   - Horário exato de início da falha.
4. O operador do NOC dispara os alertas automáticos via Zabbix/Grafana e convoca os especialistas do Datacenter em esquema de contingência.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2476;Nav=',
    attachments: [
      {
        name: 'Matriz de Escalação e Incidentes Críticos NOC.pdf',
        size: '280.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2476;FileID=15728'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > INFRAESTRUTURA > MONITORAMENTO',
      categoria: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::MONITORAMENTO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/03/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '10/02/2026 10:00 (Mayara Sales)',
      atualizadoEm: '10.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2476;Nav=',
      itemId: '2476'
    }
  },
  {
    id: 'faq-10002477',
    faqNumber: '10002477',
    name: 'Gestão de Pessoas – Procedimento de Desligamento, Exoneração e Revogação de Acessos de TI',
    category: 'CENTRAL DE ATENDIMENTO::GESTÃO DE IDENTIDADES::DESLIGAMENTO',
    subCategory: 'DESLIGAMENTO',
    system: 'Gestão de Identidades',
    type: 'Requisição de serviço',
    service: 'Gestão de Ciclo de Vida de Contas e Acessos',
    subject: 'Bloqueio de Conta de Rede, Desativação de Caixa Postal e Devolução de Ativos',
    associatedProcedureId: '',
    observacoes: 'Garante a conformidade de segurança e encerramento seguro de vínculos comissionados e terceirizados.',
    procedure: `1. O órgão de gestão de pessoas (SEGP) ou o gestor do contrato de terceirização autua o Termo de Desligamento no SIGAD.
2. Ações automáticas disparadas no ecossistema de TI:
   - Desativação imediata da conta no Active Directory e revogação de tokens de autenticação M365 (Revoke Sessions);
   - Conversão da caixa postal individual em caixa inativa (Inactive Mailbox) para fins de retenção legal por 180 dias;
   - Bloqueio de permissões em pastas de rede (SMB/NFS) e grupos do Microsoft Teams.
3. Devolução de Equipamentos e Acessórios:
   - Notebooks, carregadores, crachás RFID e tokens criptográficos devem ser devolvidos com recibo de quitação patrimonial.
4. Caso a unidade necessite de acesso aos e-mails para continuidade do serviço público, a chefia solicita a delegação temporária via processo administrativo formal.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2477;Nav=',
    attachments: [
      {
        name: 'Procedimento Operacional Padrão Desligamento TI.pdf',
        size: '302.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2477;FileID=15729'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > GESTÃO DE IDENTIDADES > DESLIGAMENTO',
      categoria: 'CENTRAL DE ATENDIMENTO::GESTÃO DE IDENTIDADES::DESLIGAMENTO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/03/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '10/02/2026 10:30 (Mayara Sales)',
      atualizadoEm: '10.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2477;Nav=',
      itemId: '2477'
    }
  },
  {
    id: 'faq-10002478',
    faqNumber: '10002478',
    name: 'Segurança da Informação – Assinatura do Termo de Confidencialidade e Responsabilidade (TCR)',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::POLÍTICAS',
    subCategory: 'POLÍTICAS',
    system: 'Segurança da Informação',
    type: 'Requisição de serviço',
    service: 'Conformidade e Governança de Segurança da Informação',
    subject: 'Aceite Obrigatório da Política de Segurança da Informação para Novos Usuários',
    associatedProcedureId: '',
    observacoes: 'O não aceite do termo bloqueia automaticamente o primeiro logon na rede corporativa.',
    procedure: `1. Ao ser cadastrado no ecossistema do Senado Federal, o usuário recebe notificação para aceite do TCR.
2. No primeiro login no portal corporativo:
   - Uma tela de bloqueio apresenta o texto integral da Política de Segurança da Informação (PSI);
   - O documento detalha as regras de uso aceitável de internet, correio eletrônico, guarda de senhas e sigilo de dados protegidos pela LGPD.
3. Para validar o termo:
   - Leia as cláusulas e clique em "Li e concordo com os termos";
   - A confirmação registra carimbo temporal com matrícula, IP e data/hora.
4. Para consultar os termos vigentes a qualquer momento, acesse a Intranet: Segurança da Informação > Políticas e Normas.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2478;Nav=',
    attachments: [
      {
        name: 'Termo de Confidencialidade e Responsabilidade TCR.pdf',
        size: '254.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2478;FileID=15730'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA DA INFORMAÇÃO > POLÍTICAS',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::POLÍTICAS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/03/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '10/02/2026 11:00 (Mayara Sales)',
      atualizadoEm: '10.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2478;Nav=',
      itemId: '2478'
    }
  },
  {
    id: 'faq-10002479',
    faqNumber: '10002479',
    name: 'Rede Local – Conexão e Isolamento de Visitantes e Imprensa (Wi-Fi Senado-Visitantes)',
    category: 'CENTRAL DE ATENDIMENTO::REDE::WI-FI',
    subCategory: 'WI-FI',
    system: 'Rede Sem Fio',
    type: 'Requisição de serviço',
    service: 'Conectividade e Redes Sem Fio',
    subject: 'Acesso à Internet para Visitantes em Audiências Públicas, Turistas e Jornalistas',
    associatedProcedureId: '',
    observacoes: 'Rede aberta ao público externo que não requer credenciais corporativas do Senado.',
    procedure: `1. No dispositivo móvel ou notebook do visitante, localize a rede sem fio: "Senado-Visitantes".
2. Conecte-se à rede (não há senha de chave WPA pré-compartilhada).
3. Uma página de autenticação (Portal Captivo) será aberta automaticamente no navegador:
   - Informe nome completo, CPF (ou passaporte para estrangeiros) e número de telefone celular;
   - Aceite os termos de uso e política de privacidade.
4. Digite o código de validação SMS de 4 dígitos enviado ao seu celular para liberar o acesso.
5. A conexão é válida por até 12 horas seguidas, permitindo renovação diária durante a permanência nas dependências do Congresso.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2479;Nav=',
    attachments: [
      {
        name: 'Guia Wi-Fi Visitantes Senado.pdf',
        size: '240.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2479;FileID=15731'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > REDE > WI-FI',
      categoria: 'CENTRAL DE ATENDIMENTO::REDE::WI-FI',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/03/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '10/02/2026 11:30 (Mayara Sales)',
      atualizadoEm: '10.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2479;Nav=',
      itemId: '2479'
    }
  },
  {
    id: 'faq-10002480',
    faqNumber: '10002480',
    name: 'Banco de Dados Corporativo – Homologação de Scripts DDL/DML e Janelas de Manutenção',
    category: 'CENTRAL DE ATENDIMENTO::BANCO DE DADOS::PROCEDIMENTOS',
    subCategory: 'PROCEDIMENTOS',
    system: 'Banco de Dados',
    type: 'Requisição de serviço',
    service: 'Administração de Bancos de Dados (DBA)',
    subject: 'Solicitação de Execução de Scripts em Oracle, PostgreSQL e SQL Server em Ambiente de Produção',
    associatedProcedureId: '',
    observacoes: 'Alterações estruturais em tabelas críticas exigem execução prévia e validada em ambiente de homologação.',
    procedure: `1. O líder técnico da Squad submete chamado na Central de Serviços:
   Informática > Banco de Dados > Execução de Script DDL/DML em Produção.
2. O chamado deve conter obrigatoriamente:
   - Script SQL formatado com comandos de transação segura (BEGIN TRANSACTION / COMMIT);
   - Script reverso de rollback em caso de falha;
   - Estimativa de tempo de execução e impacto de lock em tabelas principais;
   - Parecer de homologação emitido pelo analista responsável.
3. Janelas de Manutenção:
   - Scripts de baixo impacto são executados em dias úteis das 19h às 21h;
   - Scripts de grande porte e migrações são agendados para o final de semana conforme calendário oficial de janelas da DITEC.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2480;Nav=',
    attachments: [
      {
        name: 'Manual de Políticas para DBAs Senado.pdf',
        size: '318.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2480;FileID=15732'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > BANCO DE DADOS > PROCEDIMENTOS',
      categoria: 'CENTRAL DE ATENDIMENTO::BANCO DE DADOS::PROCEDIMENTOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/03/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '10/02/2026 12:00 (Mayara Sales)',
      atualizadoEm: '10.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2480;Nav=',
      itemId: '2480'
    }
  },
  {
    id: 'faq-10002481',
    faqNumber: '10002481',
    name: 'Backup e Restauração – Recuperação de Bases de Dados e Retenção de Snapshots',
    category: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::BACKUP',
    subCategory: 'BACKUP',
    system: 'Backup Corporativo',
    type: 'Requisição de serviço',
    service: 'Gestão de Continuidade e Recuperação de Desastres',
    subject: 'Restauração de Dump de Banco de Dados ou Snapshot Point-in-Time (PITR)',
    associatedProcedureId: '',
    observacoes: 'Bases de produção possuem backups incrementais diários e full semanais mantidos por até 5 anos.',
    procedure: `1. Caso haja corrupção de dados ou necessidade de auditoria retrospectiva em um banco corporativo:
   - Abra chamado na Central de Serviços: Informática > Infraestrutura > Restauração de Backup de Banco.
2. Especifique no chamado:
   - Nome da base de dados e servidor/cluster de origem;
   - Data e horário exato pretendido para a restauração ponto-a-ponto (Point-in-Time Recovery);
   - Ambiente de destino da restauração (por segurança, backups são restaurados em instâncias de auditoria ou homologação).
3. A equipe de infraestrutura valida o espaço em disco no storage e executa o job de restore via Veeam / Commvault.
4. É fornecida a string de conexão temporária ao analista solicitante para validação dos dados recuperados.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2481;Nav=',
    attachments: [
      {
        name: 'Política de Backup e Continuidade DITEC.pdf',
        size: '345.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2481;FileID=15733'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > INFRAESTRUTURA > BACKUP',
      categoria: 'CENTRAL DE ATENDIMENTO::INFRAESTRUTURA::BACKUP',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/03/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '10/02/2026 12:30 (Mayara Sales)',
      atualizadoEm: '10.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2481;Nav=',
      itemId: '2481'
    }
  },
  {
    id: 'faq-10002482',
    faqNumber: '10002482',
    name: 'Desenvolvimento – Homologação e Publicação de Aplicativos Móveis (Senado nas Lojas App Store e Google Play)',
    category: 'CENTRAL DE ATENDIMENTO::DESENVOLVIMENTO::APLICATIVOS MÓVEIS',
    subCategory: 'APLICATIVOS MÓVEIS',
    system: 'Lojas de Aplicativos',
    type: 'Requisição de serviço',
    service: 'Publicação e Gestão de Apps Móveis Institucionais',
    subject: 'Certificados de Assinatura de Apps, Política de Privacidade e Submissão para Aprovação da Apple e Google',
    associatedProcedureId: '',
    observacoes: 'Todos os aplicativos oficiais do Senado são publicados exclusivamente pela conta corporativa da Diretoria-Geral.',
    procedure: `1. A Squad responsável pelo desenvolvimento do aplicativo móvel deve cumprir o checklist de conformidade:
   - Política de privacidade aderente à LGPD hospedada no portal institucional;
   - Suporte a acessibilidade (VoiceOver no iOS e TalkBack no Android);
   - Assinatura digital com os certificados de distribuição oficiais do Senado Federal.
2. Registre chamado na Central de Serviços:
   Informática > Desenvolvimento > Publicação de App Móvel.
3. Anexe ao chamado os pacotes de distribuição compilados (.aab para Android e .ipa/TestFlight para iOS), capturas de tela e notas de versão (Release Notes).
4. A equipe de governança de TI submete os pacotes às lojas oficiais (Google Play Console e Apple Developer) e acompanha o ciclo de revisão técnica das lojas até a liberação pública.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2482;Nav=',
    attachments: [
      {
        name: 'Diretrizes para Apps Móveis Senado.pdf',
        size: '368.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2482;FileID=15734'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > DESENVOLVIMENTO > APLICATIVOS MÓVEIS',
      categoria: 'CENTRAL DE ATENDIMENTO::DESENVOLVIMENTO::APLICATIVOS MÓVEIS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '01/03/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '10/02/2026 13:00 (Mayara Sales)',
      atualizadoEm: '10.02.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2482;Nav=',
      itemId: '2482'
    }
  }
];
