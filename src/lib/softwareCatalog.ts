export type SoftwareGroupType = 
  | 'TODOS'
  | 'APLICATIVOS_DESKTOP'
  | 'SISTEMAS_INTERNOS'
  | 'TECNOLOGIA_INFRA'
  | 'LEGISLATIVO_PARLAMENTAR'
  | 'SEGURANCA_POLICIA'
  | 'GESTAO_RH_SAUDE';

export interface SoftwareGroupConfig {
  id: SoftwareGroupType;
  label: string;
  description: string;
  iconName: string;
}

export const SOFTWARE_GROUPS: SoftwareGroupConfig[] = [
  {
    id: 'TODOS',
    label: 'Todos os Sistemas & Softwares',
    description: 'Catálogo completo com todos os itens cadastrados',
    iconName: 'Layers'
  },
  {
    id: 'APLICATIVOS_DESKTOP',
    label: 'Softwares & Aplicativos Desktop',
    description: 'Office, Navegadores, Leitores PDF, Softwares Gráficos, Compactadores e Ferramentas Locais',
    iconName: 'Monitor'
  },
  {
    id: 'SISTEMAS_INTERNOS',
    label: 'Sistemas Internos do Senado',
    description: 'SIGAD, SICON, SENADONET, SIS, SIALM, SICONTRAT, SIPAT, Capri e Portais Corporativos',
    iconName: 'Building2'
  },
  {
    id: 'TECNOLOGIA_INFRA',
    label: 'Tecnologia & Infraestrutura de TI',
    description: 'Redes, Active Directory, Nuvem, Kubernetes, PAM, VPN, Banco de Dados, APIs e Virtualização',
    iconName: 'Server'
  },
  {
    id: 'LEGISLATIVO_PARLAMENTAR',
    label: 'Processo Legislativo & Parlamentar',
    description: 'Plenário, Votações, Comissões, Consultoria, Discursos, Emendas e Painel Eletrônico',
    iconName: 'FileCode'
  },
  {
    id: 'SEGURANCA_POLICIA',
    label: 'Segurança Orgânica & Polícia',
    description: 'CFTV, Controle de Acesso, Varreduras Técnicas, Cautela de Armas e Escolta SPOL',
    iconName: 'Shield'
  },
  {
    id: 'GESTAO_RH_SAUDE',
    label: 'Gestão de Pessoas, Saúde & Benefícios',
    description: 'SIS Saúde, Folha, Frequência, Previdência, Ergonomia e Assistência Social',
    iconName: 'HeartHandshake'
  }
];

export function categorizeSystem(systemName?: string, category?: string, subject?: string): SoftwareGroupType {
  const sys = (systemName || '').toLowerCase();
  const cat = (category || '').toLowerCase();
  const sub = (subject || '').toLowerCase();
  const combined = `${sys} ${cat} ${sub}`;

  // 1. Polícia e Segurança
  if (
    sys.includes('spol') || 
    sys.includes('polícia') || 
    sys.includes('cftv') || 
    sys.includes('videomonitoramento') || 
    sys.includes('porta giratória') || 
    sys.includes('crachá') || 
    sys.includes('segurança orgânica') ||
    sys.includes('varredura') ||
    sys.includes('armamento') ||
    cat.includes('polícia legislativa')
  ) {
    return 'SEGURANCA_POLICIA';
  }

  // 2. Saúde, SIS, RH e Pessoas
  if (
    sys.includes('sis ') || 
    sys.startsWith('sis') || 
    sys.includes('saúde') || 
    sys.includes('médic') || 
    sys.includes('odontolog') || 
    sys.includes('home care') || 
    sys.includes('ergonomia') || 
    sys.includes('segp') || 
    sys.includes('recursos humanos') || 
    sys.includes('aposentadoria') || 
    sys.includes('benefício') || 
    sys.includes('perícia') ||
    cat.includes('saúde') ||
    cat.includes('recursos humanos')
  ) {
    return 'GESTAO_RH_SAUDE';
  }

  // 3. Processo Legislativo e Parlamentar
  if (
    sys.includes('sicon') || 
    sys.includes('plenário') || 
    sys.includes('painel') || 
    sys.includes('legislativo') || 
    sys.includes('parlamentar') || 
    sys.includes('comissão') || 
    sys.includes('consultoria') || 
    sys.includes('discurso') || 
    sys.includes('taquigrafia') || 
    sys.includes('emenda') ||
    cat.includes('processo legislativo') ||
    cat.includes('consultoria')
  ) {
    return 'LEGISLATIVO_PARLAMENTAR';
  }

  // 4. Tecnologia, Infra e Nuvem
  if (
    sys.includes('nuvem') || 
    sys.includes('cloud') || 
    sys.includes('kubernetes') || 
    sys.includes('pam') || 
    sys.includes('vault') || 
    sys.includes('siem') || 
    sys.includes('splunk') || 
    sys.includes('elastic') || 
    sys.includes('api gateway') || 
    sys.includes('saml') || 
    sys.includes('single sign-on') || 
    sys.includes('ditec') || 
    sys.includes('rede') || 
    sys.includes('firewall') || 
    sys.includes('proxy') || 
    sys.includes('linux') || 
    sys.includes('vmware') || 
    sys.includes('active directory') || 
    sys.includes('vpn') || 
    sys.includes('backup') || 
    sys.includes('banco de dados') ||
    cat.includes('segurança da informação')
  ) {
    return 'TECNOLOGIA_INFRA';
  }

  // 5. Aplicativos Desktop / Comerciais
  const desktopPatterns = [
    'adobe', 'acrobat', 'reader', 'creative cloud', 'photoshop', 'illustrator', 'indesign', 'audition',
    'microsoft', 'office', 'excel', 'word', 'powerpoint', 'teams', 'outlook', 'onedrive', 'onenote',
    'chrome', 'firefox', 'edge', 'navegador', 'browser',
    '7-zip', 'winrar', 'compactador',
    'autocad', 'altoqi', 'eberick', 'corel', 'gimp', 'inkscape',
    'audacity', 'vlc', 'avidemux', 'obs studio', 'video converter',
    'libreoffice', 'writer', 'calc', 'impress',
    'notepad++', 'vscode', 'visual studio', 'pycharm', 'anaconda', 'dbeaver', 'git',
    'java', 'zoom', 'skype', 'anydesk', 'teamviewer'
  ];

  if (desktopPatterns.some(p => sys.includes(p) || cat.includes(p))) {
    return 'APLICATIVOS_DESKTOP';
  }

  // 6. Sistemas Internos do Senado (padrão para sistemas institucionais)
  return 'SISTEMAS_INTERNOS';
}
