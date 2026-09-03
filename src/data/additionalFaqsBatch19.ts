import { FAQ } from '@/types';

export const additionalFaqsBatch19: FAQ[] = [
  {
    id: 'faq-10002421',
    faqNumber: '10002421',
    name: 'Certificado Digital – Instalação (SafeSign / Token)',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Certificado Digital',
    type: 'Requisição de serviço',
    service: 'Instalação de software',
    subject: 'Instalação do SafeSign Identity Client e Drivers de Token',
    associatedProcedureId: '',
    observacoes: 'Necessário para leitura de tokens e smartcards de certificação ICP-Brasil (OAB, Serpro, Certisign).',
    procedure: `1. Acesse o compartilhamento: X:\\Certificado Digital.
2. Execute o instalador do SafeSign Identity Client compatível com a arquitetura (64 bits).
3. Conecte o Token USB ou leitora de cartão.
4. Abra o "Utilitário de Administração de Token SafeSign" e confira se o dispositivo e os certificados digitais são listados com status operacional.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=766;Nav=',
    attachments: [
      {
        name: 'Certificado Digital – Instalação.pdf',
        size: '315.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=766;FileID=15623'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      palavrasChave: 'certificado token safesign serpro certisign smartcard',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 09:30 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 10:00 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=766;Nav=',
      itemId: '766'
    }
  },
  {
    id: 'faq-1000767',
    faqNumber: '1000767',
    name: 'Certificado Digital – Leitora de Cartão não reconhece',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::ERRO',
    subCategory: 'ERRO',
    system: 'Certificado Digital',
    type: 'Incidente',
    service: 'Suporte a Estação de Trabalho',
    subject: 'Leitora de Cartão SmartCard não Reconhecida',
    associatedProcedureId: '',
    observacoes: 'Verificar serviço de Cartão Inteligente do Windows e porta USB.',
    procedure: `1. Desconecte e reconecte a leitora em uma porta USB traseira da estação de trabalho.
2. Pressione Win + R, digite "services.msc" e tecle Enter.
3. Localize o serviço "Cartão Inteligente" (SCardSvr).
4. Verifique se o status está "Em Execução". Se estiver parado, inicie o serviço e defina o Tipo de Inicialização como "Automático".
5. Teste novamente no aplicativo de administração do token.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=767;Nav=',
    attachments: [
      {
        name: 'Certificado Digital – Leitora de Cartão não reconhece.pdf',
        size: '278.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=767;FileID=15624'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 09:45 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 10:15 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=767;Nav=',
      itemId: '767'
    }
  },
  {
    id: 'faq-1000768',
    faqNumber: '1000768',
    name: 'Certificado Digital – Inicialização de Token',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Certificado Digital',
    type: 'Requisição de serviço',
    service: 'Configuração de software',
    subject: 'Inicialização e Troca de PIN/PUK do Token',
    associatedProcedureId: '',
    observacoes: 'Atenção: A inicialização apaga permanentemente todos os certificados digitais contidos no dispositivo.',
    procedure: `1. Abra o SafeSign Identity Client ou o utilitário do fabricante (GD Starsign, SafeNet, etc.).
2. Para alterar o PIN: clique em "Alterar PIN do Token", insira o PIN atual e defina a nova senha numérica.
3. Para desbloquear com PUK: clique em "Desbloquear PIN", digite o PUK do usuário e cadastre novo PIN.
4. Caso o PUK tenha sido bloqueado por excesso de tentativas, o token se tornará irrecuperável e deverá ser descartado.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=768;Nav=',
    attachments: [
      {
        name: 'Certificado Digital – Inicialização de Token.pdf',
        size: '295.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=768;FileID=15625'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > CERTIFICADO DIGITAL > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::CERTIFICADO DIGITAL::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 10:00 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 10:30 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=768;Nav=',
      itemId: '768'
    }
  },
  {
    id: 'faq-1000770',
    faqNumber: '1000770',
    name: 'Impressora – Fila de Impressão Travada',
    category: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::IMPRESSORAS::ERRO',
    subCategory: 'ERRO',
    system: 'Impressoras',
    type: 'Incidente',
    service: 'Suporte a Impressoras',
    subject: 'Fila do Spooler de Impressão Travada',
    associatedProcedureId: '',
    observacoes: 'Quando documentos ficam com status "Excluindo..." ou "Imprimindo" indefinidamente.',
    procedure: `1. Abra o Prompt de Comando como Administrador (_INS).
2. Pare o serviço do Spooler:
   net stop spooler
3. Exclua os arquivos temporários da fila de impressão:
   del /Q /F /S "%systemroot%\\System32\\Spool\\Printers\\*.*"
4. Reinicie o serviço:
   net start spooler
5. Abra a fila da impressora e verifique se foi limpa. Solicite ao usuário que envie a impressão novamente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=770;Nav=',
    attachments: [
      {
        name: 'Impressora – Fila de Impressão Travada.pdf',
        size: '289.4 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=770;FileID=15626'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > EQUIPAMENTOS > IMPRESSORAS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::IMPRESSORAS::ERRO',
      palavrasChave: 'impressora spooler fila travada cancelando',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 10:30 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 10:45 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=770;Nav=',
      itemId: '770'
    }
  },
  {
    id: 'faq-10002422',
    faqNumber: '10002422',
    name: 'Impressora – Instalar Impressora de Rede',
    category: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::IMPRESSORAS::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Impressoras',
    type: 'Requisição de serviço',
    service: 'Instalação de impressora',
    subject: 'Mapeamento de Impressora Corporativa de Rede',
    associatedProcedureId: '',
    observacoes: 'Instalação através dos servidores de impressão institucionais do Senado (ex: \\\\print ou \\\\spool).',
    procedure: `1. Pressione Win + R e digite o endereço do servidor de impressão (ex: \\\\print).
2. Pressione Enter para abrir a lista de filas compartilhadas.
3. Localize a impressora pelo nome do setor ou etiqueta patrimonial (ex: IMP-COATEN-01).
4. Dê um duplo-clique sobre a impressora.
5. O Windows fará o download e instalação automática do driver homologado.
6. Ao abrir a janela da fila, a instalação estará concluída.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=771;Nav=',
    attachments: [
      {
        name: 'Impressora – Instalar Impressora de Rede.pdf',
        size: '320.1 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=771;FileID=15627'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > EQUIPAMENTOS > IMPRESSORAS > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::IMPRESSORAS::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 11:00 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 11:00 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=771;Nav=',
      itemId: '771'
    }
  },
  {
    id: 'faq-1000772',
    faqNumber: '1000772',
    name: 'Impressora – Impressão Falha ou Manchada',
    category: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::IMPRESSORAS::ERRO',
    subCategory: 'ERRO',
    system: 'Impressoras',
    type: 'Incidente',
    service: 'Suporte a Impressoras',
    subject: 'Diagnóstico de Manchas, Listras ou Falha na Impressão',
    associatedProcedureId: '',
    observacoes: 'Geralmente causado por toner desgastado, cilindro/fotocondutor com resíduo ou fusor danificado.',
    procedure: `1. Abra a tampa frontal da impressora e remova com cuidado o cartucho de toner.
2. Verifique se há vazamento visível de pó dentro da impressora.
3. Agite suavemente o cartucho na horizontal e reinstale.
4. Imprima uma página de teste através do painel do equipamento.
5. Se persistirem riscos repetitivos ou manchas escuras, solicite abertura de chamado para manutenção contratual ou troca de suprimento pelo Nível 2.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=772;Nav=',
    attachments: [
      {
        name: 'Impressora – Impressão Falha ou Manchada.pdf',
        size: '284.7 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=772;FileID=15628'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > EQUIPAMENTOS > IMPRESSORAS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::IMPRESSORAS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 11:20 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 11:15 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=772;Nav=',
      itemId: '772'
    }
  },
  {
    id: 'faq-10002423',
    faqNumber: '10002423',
    name: 'Impressora – Troca de Toner',
    category: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::IMPRESSORAS::INSTALAÇÃO/CONFIGURAÇÃO',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    system: 'Impressoras',
    type: 'Requisição de serviço',
    service: 'Suporte a Impressoras',
    subject: 'Procedimento para Substituição de Toner',
    associatedProcedureId: '',
    observacoes: 'Cartuchos vazios devem ser encaminhados para descarte ecologicamente correto.',
    procedure: `1. Desligue a impressora ou abra a tampa de acesso com o equipamento ocioso.
2. Pressione a trava de liberação do cartucho de toner e puxe para fora.
3. Retire o novo toner da embalagem e remova todas as travas e fitas plásticas protetoras.
4. Agite o cartucho novo suavemente de um lado para o outro.
5. Insira o novo cartucho no trilho guia até ouvir o clique de travamento.
6. Feche a tampa frontal e aguarde a calibração automática.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=773;Nav=',
    attachments: [
      {
        name: 'Impressora – Troca de Toner.pdf',
        size: '264.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=773;FileID=15629'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > EQUIPAMENTOS > IMPRESSORAS > INSTALAÇÃO/CONFIGURAÇÃO',
      categoria: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::IMPRESSORAS::INSTALAÇÃO/CONFIGURAÇÃO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 11:40 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 11:30 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=773;Nav=',
      itemId: '773'
    }
  },
  {
    id: 'faq-1000774',
    faqNumber: '1000774',
    name: 'Scanner – Digitalização não funciona',
    category: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::SCANNERS::ERRO',
    subCategory: 'ERRO',
    system: 'Scanners',
    type: 'Incidente',
    service: 'Suporte a Estações de Trabalho',
    subject: 'Scanner não Comunica ou Trava Durante a Digitalização',
    associatedProcedureId: '',
    observacoes: 'Verificar conexão USB, cabo de alimentação e software Twain/WIA.',
    procedure: `1. Verifique se o scanner está ligado e conectado à porta USB da máquina.
2. Abra o "Painel de Controle" > "Dispositivos e Impressoras".
3. Localize o scanner, clique com botão direito e selecione "Iniciar digitalização".
4. Caso dê erro de comunicação:
   - Reinicie o serviço "Aquisição de Imagens do Windows (WIA)" em services.msc.
   - Troque a porta USB.
5. Se persistir, reinstale o driver do scanner localizado em X:\\Scanners.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=774;Nav=',
    attachments: [
      {
        name: 'Scanner – Digitalização não funciona.pdf',
        size: '276.9 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=774;FileID=15630'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > EQUIPAMENTOS > SCANNERS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::SCANNERS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 12:00 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 11:45 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=774;Nav=',
      itemId: '774'
    }
  },
  {
    id: 'faq-1000775',
    faqNumber: '1000775',
    name: 'Monitor – Resolução Inadequada ou Tela Piscando',
    category: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::MONITORES::ERRO',
    subCategory: 'ERRO',
    system: 'Monitores',
    type: 'Incidente',
    service: 'Suporte a Estação de Trabalho',
    subject: 'Tela Piscando, Sem Sinal ou com Resolução Distorcida',
    associatedProcedureId: '',
    observacoes: 'Geralmente causado por cabo HDMI/DisplayPort frouxo ou taxa de atualização incorreta.',
    procedure: `1. Verifique as conexões do cabo de vídeo no micro e atrás do monitor, reconectando com firmeza.
2. Acesse Configurações de Exibição > "Configurações avançadas de tela".
3. Verifique a taxa de atualização (deve estar em 60 Hz).
4. No caso de monitores duplos: pressione Win + P e escolha "Estender" para configurar duas áreas de trabalho independentes.
5. Se persistir a falta de sinal, teste com outro cabo de vídeo ou acione o Nível 2 para substituição.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=775;Nav=',
    attachments: [
      {
        name: 'Monitor – Resolução Inadequada ou Tela Piscando.pdf',
        size: '288.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=775;FileID=15631'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > EQUIPAMENTOS > MONITORES > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::MONITORES::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 12:20 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 12:00 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=775;Nav=',
      itemId: '775'
    }
  },
  {
    id: 'faq-1000776',
    faqNumber: '1000776',
    name: 'Teclado/Mouse – Teclado com caracteres trocados (ABNT2)',
    category: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::PERIFÉRICOS::ERRO',
    subCategory: 'ERRO',
    system: 'Periféricos',
    type: 'Incidente',
    service: 'Configuração de software',
    subject: 'Teclado Digitando Caracteres Incorretos ou Falta de Ç',
    associatedProcedureId: '',
    observacoes: 'Layout de idioma incorreto configurado no Windows.',
    procedure: `1. Clique no seletor de idioma próximo ao relógio do Windows (ex: ENG ou POR).
2. Selecione "Português (Brasil) - Teclado Português (Brasil ABNT2)".
3. Se não constar ABNT2:
   - Acesse Configurações > Hora e Idioma > Idioma.
   - Em "Idiomas preferidos", selecione Português (Brasil) > Opções.
   - Na seção Teclados, adicione "Português (Brasil ABNT2)" e remova os layouts incompatíveis (como Estados Unidos Internacional).`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=776;Nav=',
    attachments: [
      {
        name: 'Teclado – Caracteres trocados ABNT2.pdf',
        size: '249.6 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=776;FileID=15632'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > EQUIPAMENTOS > PERIFÉRICOS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::PERIFÉRICOS::ERRO',
      palavrasChave: 'teclado abnt2 caracteres cedilha layout',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 12:40 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 12:15 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=776;Nav=',
      itemId: '776'
    }
  },
  {
    id: 'faq-1000777',
    faqNumber: '1000777',
    name: 'Nobreak – Apitando continuamente',
    category: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::NOBREAKS::ERRO',
    subCategory: 'ERRO',
    system: 'Nobreaks',
    type: 'Incidente',
    service: 'Suporte a Estação de Trabalho',
    subject: 'Nobreak com Alarme Sonoro Contínuo ou Bateria Exaurida',
    associatedProcedureId: '',
    observacoes: 'Alarme contínuo indica sobrecarga ou falha crítica nas baterias internas do nobreak.',
    procedure: `1. Desconecte aparelhos não essenciais ligados ao nobreak (como aquecedores, cafeteiras ou impressoras a laser).
2. Verifique se o cabo de energia principal do nobreak está conectado à tomada estabilizada.
3. Desligue e ligue o nobreak pelo botão frontal.
4. Se o apito persistir contínuo sem fornecimento de energia para o micro, desligue o equipamento imediatamente.
5. Abra chamado para o Nível 2 / Manutenção Elétrica para troca do nobreak/bateria.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=777;Nav=',
    attachments: [
      {
        name: 'Nobreak – Apitando continuamente.pdf',
        size: '261.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=777;FileID=15633'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > EQUIPAMENTOS > NOBREAKS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::NOBREAKS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 13:00 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 12:30 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=777;Nav=',
      itemId: '777'
    }
  },
  {
    id: 'faq-10002424',
    faqNumber: '10002424',
    name: 'Ponto de Rede – Identificação e Teste de Conectividade',
    category: 'CENTRAL DE ATENDIMENTO::REDE::CONECTIVIDADE::ERRO',
    subCategory: 'ERRO',
    system: 'Rede',
    type: 'Incidente',
    service: 'Conectividade e Cabeamento de Rede',
    subject: 'Estação Sem Link de Rede Local',
    associatedProcedureId: '',
    observacoes: 'Procedimento para identificação do espelho de rede e validação física.',
    procedure: `1. Verifique a identificação do ponto de rede no espelho da parede/tomada (ex: P-204-A).
2. Verifique se os LEDs da porta de rede do computador estão acesos (verde/laranja).
3. Teste reconectar o patch cord em outra tomada disponível na mesma caixa.
4. Pressione Win + R, digite "cmd" e execute:
   ipconfig /all
5. Se o IP estiver no padrão 169.254.x.x (APIPA) ou a mídia desconectada, direcione o chamado ao suporte presencial de redes com a identificação do ponto.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=778;Nav=',
    attachments: [
      {
        name: 'Ponto de Rede – Identificação e Teste.pdf',
        size: '274.3 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=778;FileID=15634'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > REDE > CONECTIVIDADE > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::REDE::CONECTIVIDADE::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 13:20 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 12:45 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=778;Nav=',
      itemId: '778'
    }
  },
  {
    id: 'faq-10002425',
    faqNumber: '10002425',
    name: 'Telefone IP – Sem Tom de Discagem',
    category: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::TELEFONIA::ERRO',
    subCategory: 'ERRO',
    system: 'Telefonia IP',
    type: 'Incidente',
    service: 'Suporte a Telefonia',
    subject: 'Aparelho Telefônico IP Desconectado ou sem Sinal',
    associatedProcedureId: '',
    observacoes: 'Os telefones IP utilizam alimentação PoE ou fonte externa conectada à rede de voz.',
    procedure: `1. Verifique se o visor do aparelho telefônico está aceso.
2. Certifique-se de que o cabo de rede está conectado na porta "LAN / Network" do aparelho e não na porta "PC".
3. Se o micro estiver em cascata (ligado no telefone), verifique se o micro possui rede normalmente.
4. Reinicie o aparelho desconectando o cabo de rede ou fonte e aguardando o boot.
5. Se persistir mensagem de registro não localizado ("Unregistered"), direcione para o SERETEL.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=779;Nav=',
    attachments: [
      {
        name: 'Telefone IP – Sem Tom de Discagem.pdf',
        size: '282.8 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=779;FileID=15635'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > EQUIPAMENTOS > TELEFONIA > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::TELEFONIA::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 13:40 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 13:00 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=779;Nav=',
      itemId: '779'
    }
  },
  {
    id: 'faq-10002426',
    faqNumber: '10002426',
    name: 'WebCam – Não reconhecida no Teams ou Zoom',
    category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::MULTIMÍDIA::ERRO',
    subCategory: 'ERRO',
    system: 'Multimídia',
    type: 'Incidente',
    service: 'Suporte a Estações de Trabalho',
    subject: 'Câmera não Transmite Vídeo ou Bloqueada por Privacidade',
    associatedProcedureId: '',
    observacoes: 'Comum após atualizações do Windows devido às permissões de privacidade de câmera.',
    procedure: `1. Acesse Configurações > Privacidade > Câmera.
2. Certifique-se de que a opção "Permitir que os aplicativos acessem sua câmera" está Ativada.
3. Role até "Permitir que aplicativos da área de trabalho acessem sua câmera" e certifique-se de que o Teams/navegadores estão habilitados.
4. Verifique a chave física de privacidade (obturador deslizante) na lente da câmera.
5. Reinicie o aplicativo de videoconferência e teste novamente.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=780;Nav=',
    attachments: [
      {
        name: 'WebCam – Não reconhecida no Teams.pdf',
        size: '291.5 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=780;FileID=15636'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > APLICATIVOS > COMERCIAIS > MULTIMÍDIA > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::MULTIMÍDIA::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 14:00 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 13:15 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=780;Nav=',
      itemId: '780'
    }
  },
  {
    id: 'faq-1000781',
    faqNumber: '1000781',
    name: 'Headset – Microfone ou Áudio Mudo',
    category: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::PERIFÉRICOS::ERRO',
    subCategory: 'ERRO',
    system: 'Periféricos',
    type: 'Incidente',
    service: 'Suporte a Estações de Trabalho',
    subject: 'Microfone ou Fone de Ouvido USB Sem Som',
    associatedProcedureId: '',
    observacoes: 'Verificar botão de Mute no fio do headset e permissões de privacidade do Windows.',
    procedure: `1. Verifique o controlador integrado no cabo do headset (botão de microfone mudo aceso em vermelho).
2. Acesse Configurações > Privacidade > Microfone e habilite o acesso para os aplicativos.
3. Clique com o botão direito no ícone de som na barra de tarefas > "Sons" > guia "Gravação".
4. Defina o fone USB como "Dispositivo Padrão" e "Dispositivo de Comunicação Padrão".
5. Fale no microfone e confira se a barra verde oscila.`,
    originalLink: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=781;Nav=',
    attachments: [
      {
        name: 'Headset – Microfone ou Áudio Mudo.pdf',
        size: '272.2 KBytes',
        url: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;Subaction=DownloadAttachment;ItemID=781;FileID=15637'
      }
    ],
    adminInfo: {
      caminho: 'FAQ > CENTRAL DE ATENDIMENTO > EQUIPAMENTOS > PERIFÉRICOS > ERRO',
      categoria: 'CENTRAL DE ATENDIMENTO::EQUIPAMENTOS::PERIFÉRICOS::ERRO',
      estado: 'interno (atendente)',
      validade: 'válido',
      criado: '18/01/2024 14:20 (Leonardo Silva de Amarante)',
      alterado: '15/01/2026 13:30 (Mayara Sales)',
      atualizadoEm: '15.01.2026',
      paginaOriginal: 'https://capri.senado.leg.br/otrs/index.pl?Action=AgentFAQZoom;ItemID=781;Nav=',
      itemId: '781'
    }
  }
];
