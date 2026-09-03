import { FAQ } from '@/types';

export const additionalFaqsBatch26: FAQ[] = [
  {
    id: 'faq-10002451',
    faqNumber: '10002451',
    name: 'Inteligência Artificial – Diretrizes e Uso Seguro de IA Generativa no Senado Federal',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::INTELIGÊNCIA ARTIFICIAL',
    subCategory: 'INTELIGÊNCIA ARTIFICIAL',
    system: 'Inteligência Artificial',
    type: 'Requisição de serviço',
    service: 'Governança e Uso Ético de Inteligência Artificial',
    subject: 'Orientações de Segurança para Elaboração de Textos, Minutas e Pareceres com Ferramentas de IA',
    associatedProcedureId: '',
    observacoes: 'É estritamente proibido inserir dados pessoais não anonimizados (LGPD) ou documentos sob sigilo em ferramentas públicas de IA.',
    procedure: `1. Para utilização de ferramentas de IA no apoio a pesquisas e redação de minutas legislativas:
   - Priorize os modelos e interfaces homologadas no ambiente corporativo do Senado (ex: Assistente Virtual Legislativo / Copilot Corporativo com proteção de dados comerciais ativada);
   - Verifique que o indicador de escudo de proteção de dados corporativos esteja verde (Commercial Data Protection);
2. Regras de Não Exposição de Dados:
   - Nunca compartilhe dados bancários, fiscais, senhas ou informações de processos sigilosos em chats abertos;
   - Substitua nomes de cidadãos e identificadores por referências genéricas (Ex: "Cidadão A", "Empresa X").
3. Revisão Humana Obrigatória:
   - Todo texto sugerido por IA deve ser checado e validado integralmente por servidor responsável antes da publicação ou juntada ao processo, evitando erros factuais e alucinações.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2451;Nav=',
    attachments: [
      {
        name: 'Guia de Uso Ético e Seguro de IA no Senado.pdf',
        size: '342.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2451;FileID=15703'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA DA INFORMAÇÃO > INTELIGÊNCIA ARTIFICIAL',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::INTELIGÊNCIA ARTIFICIAL',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/02/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '30/01/2026 09:30 (Mayara Sales)',
      atualizadoEm: '30.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2451;Nav=',
      itemId: '2451'
    }
  },
  {
    id: 'faq-10002452',
    faqNumber: '10002452',
    name: 'Inteligência Artificial – Transcrição Automatizada de Áudios de Reuniões e Audiências',
    category: 'CENTRAL DE ATENDIMENTO::MULTIMÍDIA::TRANSCRIÇÃO',
    subCategory: 'TRANSCRIÇÃO',
    system: 'Sistema de Transcrição',
    type: 'Requisição de serviço',
    service: 'Apoio a Comissões e Taquigrafia Legislativa',
    subject: 'Geração de Transcrição Textual com Marcação de Tempo e Identificação de Oradores',
    associatedProcedureId: '',
    observacoes: 'Ferramenta interna hospedada no Datacenter do Senado para preservar a custódia das gravações das comissões.',
    procedure: `1. Acesse o sistema de transcrição institucional: https://transcricao.senado.leg.br.
2. Faça login com suas credenciais de rede do Senado.
3. Clique em "Nova Transcrição" e faça o upload do arquivo de áudio ou vídeo (formatos MP3, WAV, MP4 ou M4A até 2 GB).
4. Selecione os parâmetros de processamento:
   - Idioma: Português (Brasil);
   - Ativar "Diarização" (separação automática de falantes);
   - Indicar vocabulário legislativo específico se houver termos técnicos.
5. Ao concluir o processamento, o sistema enviará notificação por e-mail com o link para visualização, edição online do texto sincronizado com o áudio e exportação em Word (.docx) ou PDF.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2452;Nav=',
    attachments: [
      {
        name: 'Manual do Sistema de Transcrição Institucional.pdf',
        size: '295.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2452;FileID=15704'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > MULTIMÍDIA > TRANSCRIÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::MULTIMÍDIA::TRANSCRIÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/02/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '30/01/2026 10:00 (Mayara Sales)',
      atualizadoEm: '30.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2452;Nav=',
      itemId: '2452'
    }
  },
  {
    id: 'faq-10002453',
    faqNumber: '10002453',
    name: 'Auditoria de TI – Solicitação de Relatório de Logs de Acesso e Auditoria de E-mail',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::AUDITORIA',
    subCategory: 'AUDITORIA',
    system: 'Segurança da Informação',
    type: 'Requisição de serviço',
    service: 'Perícia Forense e Auditoria de Sistemas',
    subject: 'Extração de Logs de Logon, Acessos a Pastas de Rede e Rastreabilidade de Mensagens',
    associatedProcedureId: '',
    observacoes: 'Solicitações de auditoria exigem formalização via processo administrativo no SIGAD autorizado pela Diretoria-Geral (DGER) ou Corregedoria.',
    procedure: `1. O órgão solicitante (Corregedoria, Comissão de Processo Disciplinar ou Chefia Imediata com autorização superior) autua processo no SIGAD.
2. Anexar o despacho formal da Diretoria-Geral autorizando a quebra de sigilo ou auditoria administrativa.
3. Especificar os parâmetros da auditoria:
   - Caixa postal ou conta de rede a ser analisada;
   - Período de apuração (data inicial e data final);
   - Tipo de relatório pretendido: registros de logon no Active Directory, histórico de deleção em pasta de rede ou rastreabilidade de entrega de e-mails (Message Trace).
4. O processo é tramitado para a Coordenação de Segurança Cibernética (COSEGI) para emissão do laudo técnico circunstanciado em sigilo.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2453;Nav=',
    attachments: [
      {
        name: 'Norma de Auditoria e Guarda de Logs.pdf',
        size: '312.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2453;FileID=15705'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA DA INFORMAÇÃO > AUDITORIA',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::AUDITORIA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/02/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '30/01/2026 10:30 (Mayara Sales)',
      atualizadoEm: '30.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2453;Nav=',
      itemId: '2453'
    }
  },
  {
    id: 'faq-10002454',
    faqNumber: '10002454',
    name: 'Auditoria de TI – Rastreabilidade de Acesso e Compartilhamento de Arquivos no OneDrive e SharePoint',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::AUDITORIA',
    subCategory: 'AUDITORIA',
    system: 'Microsoft 365',
    type: 'Requisição de serviço',
    service: 'Perícia Forense e Auditoria de Sistemas',
    subject: 'Verificação de Download, Exclusão ou Links Públicos Gerados em Repositórios em Nuvem',
    associatedProcedureId: '',
    observacoes: 'Os registros no Unified Audit Log (UAL) do Microsoft 365 são mantidos por até 365 dias para fins de conformidade legal.',
    procedure: `1. Caso haja suspeita de exclusão massiva acidental ou compartilhamento externo indevido de pastas do setor:
   - Abra chamado na Central de Serviços: Informática > Segurança da Informação > Auditoria em Nuvem.
2. Forneça a URL da pasta do SharePoint/OneDrive afetada e o período estimado do evento.
3. A equipe de administração do M365 consultará o portal de conformidade (Purview) e gerará o extrato das seguintes ações:
   - "FileAccessed" (arquivo aberto ou visualizado);
   - "FileDownloaded" (arquivo baixado para estação local);
   - "AnonymousLinkCreated" (criação de link público externo);
   - "FileDeleted" e histórico da lixeira de primeiro e segundo estágio.
4. O extrato detalhado é encaminhado ao gestor da pasta para providências de recuperação ou salvaguarda.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2454;Nav=',
    attachments: [
      {
        name: 'Manual Auditoria Microsoft Purview.pdf',
        size: '278.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2454;FileID=15706'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA DA INFORMAÇÃO > AUDITORIA',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::AUDITORIA',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/02/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '30/01/2026 11:00 (Mayara Sales)',
      atualizadoEm: '30.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2454;Nav=',
      itemId: '2454'
    }
  },
  {
    id: 'faq-10002455',
    faqNumber: '10002455',
    name: 'Capacitação e EAD – Acesso e Redefinição de Senha na Plataforma Saberes (ILB)',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::CAPACITAÇÃO',
    subCategory: 'CAPACITAÇÃO',
    system: 'Saberes (ILB)',
    type: 'Requisição de serviço',
    service: 'Suporte a Plataformas de Ensino a Distância',
    subject: 'Desbloqueio de Usuário, Acesso pelo Gov.br e Recuperação de E-mail de Notificação',
    associatedProcedureId: '',
    observacoes: 'A plataforma Saberes do Instituto Legislativo Brasileiro é aberta a servidores do Senado e cidadãos em geral.',
    procedure: `1. Acesse o portal oficial da plataforma Saberes: https://saberes.senado.leg.br.
2. Métodos de Acesso:
   - Para Servidores e Colaboradores: Utilize a opção "Entrar com Conta de Rede do Senado (Single Sign-On)";
   - Para Cidadãos e Alunos Externos: Utilize a opção "Entrar com Gov.br" ou login por e-mail e senha cadastrados.
3. Em caso de esquecimento de senha (alunos externos):
   - Clique em "Esqueceu o seu usuário ou senha?";
   - Informe seu e-mail cadastrado ou CPF e verifique a caixa de entrada (e pasta de spam) para o link de recuperação.
4. Se o e-mail não chegar ou a conta estiver bloqueada por excesso de tentativas incorretas, envie mensagem com foto do documento para suporte.saberes@senado.leg.br.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2455;Nav=',
    attachments: [
      {
        name: 'Guia do Estudante Plataforma Saberes.pdf',
        size: '320.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2455;FileID=15707'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS CORPORATIVOS > CAPACITAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::CAPACITAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/02/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '30/01/2026 11:30 (Mayara Sales)',
      atualizadoEm: '30.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2455;Nav=',
      itemId: '2455'
    }
  },
  {
    id: 'faq-10002456',
    faqNumber: '10002456',
    name: 'Capacitação e EAD – Emissão e Validação de Certificados de Cursos no Saberes (ILB)',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::CAPACITAÇÃO',
    subCategory: 'CAPACITAÇÃO',
    system: 'Saberes (ILB)',
    type: 'Requisição de serviço',
    service: 'Suporte a Plataformas de Ensino a Distância',
    subject: 'Download de Certificado com Assinatura Digital e Verificação de Autenticidade por Código Hash',
    associatedProcedureId: '',
    observacoes: 'Certificados emitidos pelo ILB pontuam para progressão funcional e Adicional de Qualificação de servidores.',
    procedure: `1. Para emissão do certificado após conclusão do curso com aproveitamento igual ou superior a 70%:
   - Acesse o curso concluído em https://saberes.senado.leg.br;
   - Role até o módulo "Avaliação Final e Certificação";
   - Preencha a Avaliação de Reação do curso;
   - O botão "Certificado de Conclusão" ficará liberado. Clique nele para gerar o PDF oficial.
2. Para validação de certificado emitido:
   - Qualquer órgão ou cidadão pode acessar: https://saberes.senado.leg.br/mod/customcert/verify_certificate.php;
   - Digite o código alfanumérico impresso no rodapé do certificado (código de autenticidade);
   - O sistema confirmará nome do concluinte, carga horária, data de conclusão e validade institucional.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2456;Nav=',
    attachments: [
      {
        name: 'Passo a Passo Emissão de Certificados ILB.pdf',
        size: '264.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2456;FileID=15708'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS CORPORATIVOS > CAPACITAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS CORPORATIVOS::CAPACITAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/02/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '30/01/2026 12:00 (Mayara Sales)',
      atualizadoEm: '30.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2456;Nav=',
      itemId: '2456'
    }
  },
  {
    id: 'faq-10002457',
    faqNumber: '10002457',
    name: 'Rede Local – Conexão e Isolamento de Equipamentos IoT / Automação Predial',
    category: 'CENTRAL DE ATENDIMENTO::REDE::CONECTIVIDADE',
    subCategory: 'CONECTIVIDADE',
    system: 'Rede e Infraestrutura',
    type: 'Requisição de serviço',
    service: 'Arquitetura e Segmentação de Redes',
    subject: 'Cadastro de Endereço MAC em VLAN Isolada para Sensores, Ar-Condicionado e Smart TVs',
    associatedProcedureId: '',
    observacoes: 'Dispositivos IoT não possuem acesso à rede corporativa interna por diretriz de segurança de perímetro.',
    procedure: `1. Todos os equipamentos inteligentes e sistemas de automação predial (termostatos, totens informativos, smart TVs e painéis digitais) devem operar na VLAN exclusiva de IoT.
2. Solicitação de conexão via chamado na Central de Serviços:
   Redes > Conectividade > Cadastro de Dispositivo IoT / Automação.
3. No chamado, informe:
   - Marca, modelo e tipo de dispositivo;
   - Endereço MAC da placa de rede (cabeada ou Wi-Fi);
   - Localização física (bloco, andar e número da sala).
4. O Serviço de Redes cadastrará o endereço MAC na porta de switch configurada com isolamento de rede e perfil restrito de navegação.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2457;Nav=',
    attachments: [
      {
        name: 'Política de Segurança para Dispositivos IoT.pdf',
        size: '284.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2457;FileID=15709'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > REDE > CONECTIVIDADE',
      categoria: 'CENTRAL DE ATENDIMENTO::REDE::CONECTIVIDADE',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/02/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '30/01/2026 12:30 (Mayara Sales)',
      atualizadoEm: '30.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2457;Nav=',
      itemId: '2457'
    }
  },
  {
    id: 'faq-10002458',
    faqNumber: '10002458',
    name: 'Sistemas Parlamentares – Acesso e Operação do Painel Eletrônico do Plenário do Senado',
    category: 'CENTRAL DE ATENDIMENTO::SISTEMAS PARLAMENTARES::PLENÁRIO',
    subCategory: 'PLENÁRIO',
    system: 'Painel Eletrônico',
    type: 'Requisição de serviço',
    service: 'Suporte à Atividade Legislativa de Plenário',
    subject: 'Registro Biométrico de Presença e Terminal de Votação na Bancada Parlamentar',
    associatedProcedureId: '',
    observacoes: 'Suporte técnico imediato presencial em plenário fornecido pela equipe de plantão durante as sessões deliberativas.',
    procedure: `1. Identificação do Parlamentar no Terminal de Bancada:
   - Aproxime o crachá parlamentar ou insira a digital no leitor biométrico acoplado à mesa da bancada;
   - O visor touchscreen exibirá o nome do(a) Senador(a) e o status de presença confirmada no quórum da sessão.
2. Votação Deliberativa:
   - Quando o Presidente da sessão abrir a votação nominal no painel geral, as opções "SIM", "NÃO" e "ABSTENÇÃO" acenderão na tela do terminal;
   - Toque na opção de voto desejada e confirme a escolha na mensagem pop-up;
   - A luz indicativa correspondente acenderá no painel principal do Plenário.
3. Em caso de falha biométrica ou travamento do terminal da bancada, acione o técnico de plantão na lateral do Plenário pelo ramal de emergência da mesa diretora.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2458;Nav=',
    attachments: [
      {
        name: 'Manual Operacional Terminal de Bancada.pdf',
        size: '380.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=2458;FileID=15710'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SISTEMAS PARLAMENTARES > PLENÁRIO',
      categoria: 'CENTRAL DE ATENDIMENTO::SISTEMAS PARLAMENTARES::PLENÁRIO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '15/02/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '30/01/2026 13:00 (Mayara Sales)',
      atualizadoEm: '30.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=2458;Nav=',
      itemId: '2458'
    }
  }
];
