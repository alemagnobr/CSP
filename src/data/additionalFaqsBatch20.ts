import { FAQ } from '@/types';

export const additionalFaqsBatch20: FAQ[] = [
  {
    id: 'faq-1000782',
    faqNumber: '1000782',
    name: 'Instalação Padrão – Preparação e Pendrive de Boot',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::INSTALAÇÃO PADRÃO',
    subCategory: 'INSTALAÇÃO PADRÃO',
    system: 'Instalação Padrão',
    type: 'Requisição de serviço',
    service: 'Suporte a Estações de Trabalho',
    subject: 'Criação e Atualização do Pendrive de Boot (WinPE / Ventoy)',
    associatedProcedureId: '',
    observacoes: 'EXCLUSIVO NÍVEL 2. O pendrive deve ser mantido atualizado com os scripts e ferramentas homologadas pela COATEN/SUAPE.',
    procedure: `1. Obtenha a imagem ISO mais recente do Windows PE / Implantação em \\\\dru\\Biblioteca de Template.
2. Utilize a ferramenta Ventoy ou Rufus para gravar a mídia inicializável em pendrive USB 3.0 de no mínimo 32 GB.
3. Copie para a raiz as ferramentas auxiliares: NTPWEdit, GetSusp, scripts de inventário e drivers dos modelos Dell e Positivo.
4. Teste a inicialização UEFI em um equipamento de bancada antes de utilizar em atendimentos.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=782;Nav=',
    attachments: [
      {
        name: 'Instalação Padrão – Preparação do Pendrive.pdf',
        size: '345.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=782;FileID=15638'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > INSTALAÇÃO PADRÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::INSTALAÇÃO PADRÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 09:00 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 14:00 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=782;Nav=',
      itemId: '782'
    }
  },
  {
    id: 'faq-1000783',
    faqNumber: '1000783',
    name: 'Instalação Padrão – Implantação de Imagem Windows 11',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::INSTALAÇÃO PADRÃO',
    subCategory: 'INSTALAÇÃO PADRÃO',
    system: 'Instalação Padrão',
    type: 'Requisição de serviço',
    service: 'Suporte a Estações de Trabalho',
    subject: 'Aplicação da Imagem Institucional Windows 11',
    associatedProcedureId: '',
    observacoes: 'EXCLUSIVO NÍVEL 2. Atenção para não sobrescrever partições de dados quando for manutenção.',
    procedure: `1. Conecte o pendrive de boot e ligue o computador pressionando F12 (Dell) ou F7 (Positivo) para selecionar o dispositivo de boot.
2. Inicie pelo ambiente WinPE.
3. Execute o script de particionamento e aplicação de imagem (.wim).
4. Aguarde a conclusão do processo de descompactação e aplicação do Sysprep.
5. Reinicie o equipamento removendo o pendrive e deixe o Windows concluir a inicialização inicial de hardware.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=783;Nav=',
    attachments: [
      {
        name: 'Instalação Padrão – Implantação de Imagem Windows 11.pdf',
        size: '412.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=783;FileID=15639'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > INSTALAÇÃO PADRÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::INSTALAÇÃO PADRÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 14:30 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=783;Nav=',
      itemId: '783'
    }
  },
  {
    id: 'faq-1000784',
    faqNumber: '1000784',
    name: 'Instalação Padrão – Pós-Instalação e Scripts',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::INSTALAÇÃO PADRÃO',
    subCategory: 'INSTALAÇÃO PADRÃO',
    system: 'Instalação Padrão',
    type: 'Requisição de serviço',
    service: 'Suporte a Estações de Trabalho',
    subject: 'Ingresso no Domínio e Aplicação de GPOs e Softwares Básicos',
    associatedProcedureId: '',
    observacoes: 'Garante que a máquina esteja em conformidade com as diretrizes de segurança do Senado.',
    procedure: `1. Conecte o cabo de rede institucional.
2. Efetue logon como Administrador local.
3. Execute o script de pós-instalação para inclusão no domínio "senado.leg.br" na OU correta.
4. Reinicie a estação.
5. Faça logon com usuário de teste administrativo e execute "gpupdate /force".
6. Verifique se o agente do Trellix, BigFix e SCCM estão em execução e comunicando normalmente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=784;Nav=',
    attachments: [
      {
        name: 'Instalação Padrão – Pós-Instalação e Scripts.pdf',
        size: '318.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=784;FileID=15640'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > INSTALAÇÃO PADRÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::INSTALAÇÃO PADRÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 15:00 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=784;Nav=',
      itemId: '784'
    }
  },
  {
    id: 'faq-1000785',
    faqNumber: '1000785',
    name: 'Instalação Padrão – Backup de Dados do Usuário',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::INSTALAÇÃO PADRÃO',
    subCategory: 'INSTALAÇÃO PADRÃO',
    system: 'Instalação Padrão',
    type: 'Requisição de serviço',
    service: 'Suporte a Estações de Trabalho',
    subject: 'Procedimento de Backup Prévio antes de Formatação',
    associatedProcedureId: '',
    observacoes: 'A responsabilidade primária pelo backup é do usuário, porém a TI deve auxiliar no resguardo dos arquivos institucionais.',
    procedure: `1. Solicite ao usuário que indique onde estão armazenados seus arquivos de trabalho.
2. Copie pastas de Documentos, Área de Trabalho e Favoritos para a partição D: ou para o Drive U: (rede).
3. Exporte certificados digitais instalados (caso possuam chave privada exportável).
4. Faça o usuário assinar o Termo de Ciência de Formatação e Backup caso haja risco de perda de dados locais.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=785;Nav=',
    attachments: [
      {
        name: 'Instalação Padrão – Backup de Dados.pdf',
        size: '275.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=785;FileID=15641'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > INSTALAÇÃO PADRÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::INSTALAÇÃO PADRÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 15:30 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=785;Nav=',
      itemId: '785'
    }
  },
  {
    id: 'faq-10002427',
    faqNumber: '10002427',
    name: 'Atendimento Nível 2 – Checklist de Entrega de Equipamento',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::PROCEDIMENTOS INTERNOS',
    subCategory: 'PROCEDIMENTOS INTERNOS',
    system: 'Suporte Técnico',
    type: 'Requisição de serviço',
    service: 'Atendimento Presencial Nível 2',
    subject: 'Conferência na Entrega de Computador ou Notebook ao Usuário',
    associatedProcedureId: '',
    observacoes: 'O técnico deve acompanhar o primeiro logon do usuário e garantir funcionamento pleno antes de fechar o chamado.',
    procedure: `1. Posicione o equipamento e conecte cabos de energia, rede, monitor, teclado e mouse organizadamente.
2. Peça para o titular efetuar o logon com sua credencial de rede.
3. Verifique se o perfil foi carregado sem erros temporários.
4. Teste: acesso à Internet, Outlook/Correio, drives de rede (Drive U:), impressoras e certificados.
5. Colha a assinatura do usuário na ordem de serviço ou valide no OTRS.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=786;Nav=',
    attachments: [
      {
        name: 'Checklist de Entrega de Equipamento.pdf',
        size: '264.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=786;FileID=15642'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > PROCEDIMENTOS INTERNOS',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::PROCEDIMENTOS INTERNOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 16:00 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=786;Nav=',
      itemId: '786'
    }
  },
  {
    id: 'faq-10002428',
    faqNumber: '10002428',
    name: 'Atendimento Nível 2 – Recolhimento de Equipamento com Defeito',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::PROCEDIMENTOS INTERNOS',
    subCategory: 'PROCEDIMENTOS INTERNOS',
    system: 'Suporte Técnico',
    type: 'Incidente',
    service: 'Atendimento Presencial Nível 2',
    subject: 'Remoção e Baixa de Máquina para Manutenção em Bancada',
    associatedProcedureId: '',
    observacoes: 'Identificar patrimônio, número de série e motivo do recolhimento na etiqueta física de bancada.',
    procedure: `1. Identifique o número patrimonial do Senado e número de série da CPU/Notebook.
2. Preencha o comprovante de recolhimento de equipamento e entregue uma via ao setor.
3. Cole etiqueta de identificação com o número do chamado no chassi do equipamento.
4. Transporte o equipamento até a bancada do Nível 2 na COATEN.
5. Registre no chamado OTRS a localização física e o início dos testes de bancada.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=787;Nav=',
    attachments: [
      {
        name: 'Recolhimento de Equipamento.pdf',
        size: '251.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=787;FileID=15643'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > PROCEDIMENTOS INTERNOS',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::PROCEDIMENTOS INTERNOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 11:30 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 16:30 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=787;Nav=',
      itemId: '787'
    }
  },
  {
    id: 'faq-10002429',
    faqNumber: '10002429',
    name: 'Atendimento Nível 2 – Empréstimo de Equipamentos (SEEMP)',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::PROCEDIMENTOS INTERNOS',
    subCategory: 'PROCEDIMENTOS INTERNOS',
    system: 'Suporte Técnico',
    type: 'Requisição de serviço',
    service: 'Empréstimo de Equipamentos',
    subject: 'Concessão de Notebook ou Periférico Reserva Temporário',
    associatedProcedureId: '',
    observacoes: 'Necessita autorização da chefia do setor e registro no sistema de empréstimos do Senado.',
    procedure: `1. Verifique a disponibilidade do equipamento no estoque de empréstimo (SEEMP).
2. Confira se o usuário possui solicitação formal aprovada via Central de Serviços.
3. Prepare o equipamento com a imagem atualizada e instale os aplicativos requisitados.
4. Emita o Termo de Responsabilidade e Empréstimo Temporário.
5. Entregue ao usuário mediante assinatura e configure o chamado com a data limite de devolução.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=788;Nav=',
    attachments: [
      {
        name: 'Empréstimo de Equipamentos (SEEMP).pdf',
        size: '280.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=788;FileID=15644'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > PROCEDIMENTOS INTERNOS',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::PROCEDIMENTOS INTERNOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 17:00 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=788;Nav=',
      itemId: '788'
    }
  },
  {
    id: 'faq-1000789',
    faqNumber: '1000789',
    name: 'Atendimento Nível 2 – Substituição Preventiva de Disco Rígido (SSD)',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::PROCEDIMENTOS INTERNOS',
    subCategory: 'PROCEDIMENTOS INTERNOS',
    system: 'Suporte Técnico',
    type: 'Incidente',
    service: 'Manutenção de Hardware',
    subject: 'Troca de Disco com Falha Iminente (SMART)',
    associatedProcedureId: '',
    observacoes: 'Quando o relatório do Trellix/BigFix acusa setores defeituosos ou saúde do SSD abaixo do limite aceitável.',
    procedure: `1. Conecte o equipamento na bancada e realize o backup imediato da partição do usuário.
2. Desmonte o gabinete com pulseira antiestática.
3. Remova a unidade danificada e instale o novo SSD padrão homologado.
4. Efetue a Instalação Padrão (FAQ#: 1000783).
5. Restaure os dados do usuário e registre a troca da peça no sistema patrimonial.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=789;Nav=',
    attachments: [
      {
        name: 'Substituição Preventiva de SSD.pdf',
        size: '298.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=789;FileID=15645'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > PROCEDIMENTOS INTERNOS',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::PROCEDIMENTOS INTERNOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 12:30 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 17:30 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=789;Nav=',
      itemId: '789'
    }
  },
  {
    id: 'faq-10002430',
    faqNumber: '10002430',
    name: 'Atendimento Nível 2 – Inventário Patrimonial e Etiquetagem',
    category: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::PROCEDIMENTOS INTERNOS',
    subCategory: 'PROCEDIMENTOS INTERNOS',
    system: 'Suporte Técnico',
    type: 'Requisição de serviço',
    service: 'Gestão de Ativos de TI',
    subject: 'Atualização Cadastral de Bens de Informática',
    associatedProcedureId: '',
    observacoes: 'Todo microondas, notebook, monitor ou impressora instalado deve ter conferida sua etiqueta patrimonial com código de barras.',
    procedure: `1. Localize a plaqueta metálica ou etiqueta de patrimônio fixada no equipamento.
2. Compare com o registro retornado pelo comando de inventário institucional.
3. Se a etiqueta estiver ilegível ou ausente, solicite nova emissão ao setor de patrimônio (SEPAT).
4. No chamado OTRS, registre número de patrimônio, setor de alocação, bloco, andar e sala.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=790;Nav=',
    attachments: [
      {
        name: 'Inventário Patrimonial.pdf',
        size: '260.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=790;FileID=15646'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SUPORTE TÉCNICO > PROCEDIMENTOS INTERNOS',
      categoria: 'CENTRAL DE ATENDIMENTO::SUPORTE TÉCNICO::PROCEDIMENTOS INTERNOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 13:00 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 18:00 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=790;Nav=',
      itemId: '790'
    }
  },
  {
    id: 'faq-1000791',
    faqNumber: '1000791',
    name: 'Segurança da Informação – Procedimento em caso de Perda ou Furto',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::INCIDENTES',
    subCategory: 'INCIDENTES',
    system: 'Segurança da Informação',
    type: 'Incidente',
    service: 'Tratamento de Incidentes de Segurança',
    subject: 'Comunicação e Bloqueio de Notebook ou Celular Institucional',
    associatedProcedureId: '',
    observacoes: 'Ação crítica e imediata para evitar vazamento de dados do Senado Federal.',
    procedure: `1. Oriente o usuário a registrar imediatamente Boletim de Ocorrência policial.
2. Bloqueie a conta do usuário no Active Directory e redefina a senha de rede.
3. Caso o dispositivo possua MDM / Intune, envie o comando de "Wipe" remoto (limpeza total de fábrica).
4. Revogue certificados digitais corporativos emitidos para o dispositivo.
5. Encaminhe chamado com urgência para a Coordenação de Segurança da Informação (COINTI).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=791;Nav=',
    attachments: [
      {
        name: 'Procedimento Perda ou Furto.pdf',
        size: '288.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=791;FileID=15647'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA DA INFORMAÇÃO > INCIDENTES',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::INCIDENTES',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 13:30 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 18:30 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=791;Nav=',
      itemId: '791'
    }
  },
  {
    id: 'faq-1000792',
    faqNumber: '1000792',
    name: 'Segurança da Informação – Bloqueio de Portas USB e Dispositivos Móveis',
    category: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::POLÍTICAS',
    subCategory: 'POLÍTICAS',
    system: 'Segurança da Informação',
    type: 'Requisição de serviço',
    service: 'Gestão de Acessos e Políticas de Segurança',
    subject: 'Solicitação de Liberação Temporária de Porta USB',
    associatedProcedureId: '',
    observacoes: 'Por política de segurança, portas USB são bloqueadas para mídias de armazenamento em massa.',
    procedure: `1. Esclareça ao usuário que mídias removíveis não criptografadas são bloqueadas por padrão de segurança institucional.
2. Caso o setor necessite de exceção justificada, a chefia do setor deve abrir solicitação formal na Central de Serviços > Informática > Segurança > Exceção de Política USB.
3. A liberação só poderá ser executada após aprovação técnica da COINTI.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=792;Nav=',
    attachments: [
      {
        name: 'Bloqueio de Portas USB.pdf',
        size: '267.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=792;FileID=15648'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > SEGURANÇA DA INFORMAÇÃO > POLÍTICAS',
      categoria: 'CENTRAL DE ATENDIMENTO::SEGURANÇA DA INFORMAÇÃO::POLÍTICAS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 14:00 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 19:00 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=792;Nav=',
      itemId: '792'
    }
  },
  {
    id: 'faq-1000793',
    faqNumber: '1000793',
    name: 'Rede – Configuração de Proxy Manual e Script PAC',
    category: 'CENTRAL DE ATENDIMENTO::REDE::CONFIGURAÇÃO',
    subCategory: 'CONFIGURAÇÃO',
    system: 'Rede',
    type: 'Requisição de serviço',
    service: 'Configuração de Rede',
    subject: 'Configuração do Script Automático de Proxy Institucional',
    associatedProcedureId: '',
    observacoes: 'Utilizado para permitir que aplicativos legados ou terminais Linux acessem a internet através do proxy corporativo.',
    procedure: `1. Abra as Opções da Internet (ou Configurações > Rede e Internet > Proxy).
2. Certifique-se de que a opção "Detectar configurações automaticamente" esteja ativada.
3. Em "Usar script de configuração", ative a chave e insira o endereço do PAC institucional:
   http://pac.senado.leg.br/proxy.pac
4. Clique em Salvar.
5. Em terminais Linux, defina as variáveis de ambiente:
   export http_proxy="http://proxy.senado.leg.br:8080"
   export https_proxy="http://proxy.senado.leg.br:8080"`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=793;Nav=',
    attachments: [
      {
        name: 'Configuração de Proxy Manual.pdf',
        size: '284.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=793;FileID=15649'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > REDE > CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::REDE::CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 14:30 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 19:30 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=793;Nav=',
      itemId: '793'
    }
  },
  {
    id: 'faq-1000794',
    faqNumber: '1000794',
    name: 'Rede – Liberação de Acesso a Sites Bloqueados',
    category: 'CENTRAL DE ATENDIMENTO::REDE::CONFIGURAÇÃO',
    subCategory: 'CONFIGURAÇÃO',
    system: 'Rede',
    type: 'Requisição de serviço',
    service: 'Acesso a Internet e Filtragem Web',
    subject: 'Solicitação de Desbloqueio de URL / Categoria de Conteúdo',
    associatedProcedureId: '',
    observacoes: 'Sites bloqueados pelo filtro web FortiGate / BlueCoat necessitam de análise da COINTI.',
    procedure: `1. Verifique se o bloqueio exibido na tela é de categoria de segurança (Malware, Phishing) ou política de uso (Streaming, Redes Sociais).
2. Caso o site seja essencial para o trabalho parlamentar ou administrativo:
3. O servidor ou gabinete deve abrir chamado na Central de Serviços: Informática > Acesso a Rede e Internet > Desbloqueio de sítios na Web.
4. A solicitação deve conter a URL exata e a justificativa de necessidade do trabalho legislativo.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=794;Nav=',
    attachments: [
      {
        name: 'Liberação de Sites Bloqueados.pdf',
        size: '270.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=794;FileID=15650'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > REDE > CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::REDE::CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 15:00 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 20:00 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=794;Nav=',
      itemId: '794'
    }
  },
  {
    id: 'faq-1000795',
    faqNumber: '1000795',
    name: 'Atendimento ao Usuário – Registro de Chamados na Central de Serviços',
    category: 'CENTRAL DE ATENDIMENTO::ATENDIMENTO::PROCEDIMENTOS',
    subCategory: 'PROCEDIMENTOS',
    system: 'Central de Serviços',
    type: 'Requisição de serviço',
    service: 'Central de Serviços',
    subject: 'Orientações para Abertura e Classificação de Chamados',
    associatedProcedureId: '',
    observacoes: 'Todos os atendimentos realizados pela Central 3333 devem obrigatoriamente gerar um ticket.',
    procedure: `1. Acesse o sistema OTRS de atendimento.
2. Preencha os campos obrigatórios:
   - Usuário / Solicitante (matrícula ou login de rede);
   - Localização física (Setor, Bloco, Sala, Ramal);
   - Serviço e Tipo de chamado (Incidente ou Requisição);
   - Descrição clara com os sintomas relatados pelo usuário e procedimentos já tentados.
3. Caso resolvido no primeiro contato, registre como "Primeiro Atendimento com Sucesso" e finalize.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=795;Nav=',
    attachments: [
      {
        name: 'Registro de Chamados.pdf',
        size: '310.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=795;FileID=15651'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > ATENDIMENTO > PROCEDIMENTOS',
      categoria: 'CENTRAL DE ATENDIMENTO::ATENDIMENTO::PROCEDIMENTOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 15:30 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 20:30 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=795;Nav=',
      itemId: '795'
    }
  },
  {
    id: 'faq-1000796',
    faqNumber: '1000796',
    name: 'Atendimento ao Usuário – Transferência e Escalação de Chamados OTRS',
    category: 'CENTRAL DE ATENDIMENTO::ATENDIMENTO::PROCEDIMENTOS',
    subCategory: 'PROCEDIMENTOS',
    system: 'Central de Serviços',
    type: 'Requisição de serviço',
    service: 'Central de Serviços',
    subject: 'Critérios de Encaminhamento para Filas Especializadas (Nível 2 / Sistemas)',
    associatedProcedureId: '',
    observacoes: 'Evita retrabalho e chamados devolvidos por falta de informações básicas.',
    procedure: `1. Antes de encaminhar, certifique-se de ter executado todos os passos descritos na FAQ de Nível 1 correspondente.
2. Insira nota interna registrando: testes realizados, mensagens de erro exatas, capturas de tela e patrimônio da máquina.
3. Altere a fila para a equipe responsável (ex: Suporte Presencial N2, SEDAN, SEAP, SERETEL).
4. Informe ao usuário o número do protocolo e a equipe para a qual o chamado foi transferido.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=796;Nav=',
    attachments: [
      {
        name: 'Transferência de Chamados OTRS.pdf',
        size: '294.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=796;FileID=15652'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > ATENDIMENTO > PROCEDIMENTOS',
      categoria: 'CENTRAL DE ATENDIMENTO::ATENDIMENTO::PROCEDIMENTOS',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '22/01/2024 16:00 (Leonardo Silva de Amarante)',
      alterado: '18/01/2026 21:00 (Mayara Sales)',
      atualizadoEm: '18.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=796;Nav=',
      itemId: '796'
    }
  }
];
