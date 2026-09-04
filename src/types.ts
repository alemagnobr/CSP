export type TicketStatus = 'EM_ANDAMENTO' | 'FINALIZADO';

export interface Ticket {
  id: string;
  status: TicketStatus;
  title?: string;
  description: string;
  networkLogin: string;
  extension: string; // Ramal
  mobile: string;
  clientEmail?: string;
  microLogicalAddress: string;
  printerLogicalAddress: string;
  monitorLogicalAddress: string;
  otherLogicalAddress?: string;
  createdAt: string; // ISO date string
  finishedAt?: string; // ISO date string
  durationSeconds: number; // For active tracking and final reporting
  category?: string;
  associatedFaqId?: string;
  structuredResult?: string;
  isPaused?: boolean;
  selectedProcedures?: string[];
  selectedVerifications?: string[];
  problemSolved?: boolean;
  clientValidated?: boolean;
  isEscalated?: boolean;
  isFormatMicro?: boolean;
  formatMicroDetails?: {
    motivo: 'Lentidão' | 'Troca de micro' | 'Outros' | '';
    motivoOutros: string;
    autorizacaoChefe: 'Sim' | 'Não' | '';
    outrosClientes: 'Sim' | 'Não' | '';
    necessitaBackup: 'Sim' | 'Não' | '';
  };
  escalationDetails?: {
    setor: string;
    edificio: string;
    complemento: string;
    pontoReferencia: string;
    contato: string;
    setorAbertoFechado: 'Aberto' | 'Fechado' | '';
    local: 'Teletrabalho' | 'Senado' | 'Externo' | '';
  };
  user?: {
    name: string;
    email: string;
    id: string;
  };
  deleted?: boolean;
  archived?: boolean;
}

export interface ActiveTicket extends Ticket {
  tabId?: string;
  // Active tickets might have drafts or unsaved states
  isDraft: boolean;
}

export interface Procedure {
  id: string;
  name: string;
  description: string;
  steps?: string;
  category?: string;
  color?: string;
}

export interface Verification {
  id: string;
  name: string;
  description: string;
}

export interface Orientation {
  id: string;
  name: string;
  description: string;
  steps?: string;
  category?: string;
}

export interface PredefinedSolution {
  id: string;
  title: string;
  content: string;
}

export interface FAQAttachment {
  name: string;
  url: string;
  size?: string;
}

export interface FAQVisualRef {
  title: string;
  url: string;
}

export interface FAQAdminInfo {
  caminho?: string;
  categoria?: string;
  palavrasChave?: string;
  estado?: string;
  validade?: string;
  criado?: string;
  alterado?: string;
  atualizadoEm?: string;
  paginaOriginal?: string;
  itemId?: string;
}

export interface FAQ {
  id: string;
  faqNumber: string;
  category: string;
  name: string;
  technicalInfo?: string;
  type: 'Incidente' | 'Requisição de serviço' | '';
  service: string;
  subject: string;
  system: string;
  associatedProcedureId: string;
  associatedProcedureIds?: string[];
  procedure: string;
  originalLink?: string;
  subCategory?: string;
  observacoes?: string;
  acessoUtilizacao?: string;
  permissaoAcesso?: string;
  credenciaisAcesso?: string;
  attachments?: FAQAttachment[];
  visualRefs?: FAQVisualRef[];
  adminInfo?: FAQAdminInfo;
  relatedLinks?: { title: string; url: string }[];
}

export interface Information {
  id: string;
  title: string;
  content: string;
}

export interface TechnicalDoubt {
  id: string;
  title: string;
  problemDescription: string;
  category?: string;
  system?: string;
  ticketNumber?: string;
  status: 'PENDENTE' | 'ESCLARECIDA';
  supervisorSolution?: string;
  supervisorName?: string;
  createdAt: string;
  resolvedAt?: string;
  analystName?: string;
}

export interface Shortcut {
  id: string;
  title: string;
  url: string;
}

export interface AppSettings {
  profileManagerPath?: string;
  sla: {
    otima: number;
    boa: number;
    atencao: number;
    ruim: number;
    critica: number;
  };
  closingTextEnabled: boolean;
  closingText: string;
  categories: string[];
  procedures: Procedure[];
  verifications?: Verification[];
  predefinedSolutions: PredefinedSolution[];
  aiGuidelines: string[];
  aiPromptStandard?: string;
  aiPromptEscalated?: string;
  faqs?: FAQ[];
  userFaqs?: FAQ[];
  systems?: string[];
  orientations?: Orientation[];
  technicalDoubts?: TechnicalDoubt[];
  aiProvider?: 'gemini' | 'openrouter';
  openRouterModel?: string;
  geminiApiKey?: string;
  openRouterApiKey?: string;
  informations?: Information[];
  shortcuts?: Shortcut[];
  tools?: { id: string, name: string, url: string, description?: string }[];
  defaultSlaTimeFilter?: 'day' | 'week' | 'month' | 'year' | 'all';
}

