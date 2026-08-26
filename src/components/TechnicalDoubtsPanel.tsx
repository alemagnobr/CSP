import React, { useState, useMemo } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit2, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Search, 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  MessageSquare, 
  Copy, 
  Check, 
  HelpCircle, 
  Tag, 
  Hash,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Send
} from 'lucide-react';
import { AppSettings, TechnicalDoubt } from '@/types';
import { cn } from '@/lib/utils';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { format } from 'date-fns';
import { User } from 'firebase/auth';

interface TechnicalDoubtsPanelProps {
  appSettings: AppSettings;
  onUpdateSettings: (settings: AppSettings) => void;
  currentUser?: User | null;
}

export function TechnicalDoubtsPanel({ 
  appSettings, 
  onUpdateSettings,
  currentUser 
}: TechnicalDoubtsPanelProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'PENDENTE' | 'ESCLARECIDA'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  
  // Modal states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingDoubt, setEditingDoubt] = useState<TechnicalDoubt | null>(null);
  const [isSolutionModalOpen, setIsSolutionModalOpen] = useState(false);
  const [targetDoubtForSolution, setTargetDoubtForSolution] = useState<TechnicalDoubt | null>(null);
  
  // Quick solution form state
  const [quickSupervisorName, setQuickSupervisorName] = useState('');
  const [quickSupervisorSolution, setQuickSupervisorSolution] = useState('');

  // Full form state
  const [formData, setFormData] = useState<Omit<TechnicalDoubt, 'id' | 'createdAt'>>({
    title: '',
    problemDescription: '',
    category: '',
    system: '',
    ticketNumber: '',
    status: 'PENDENTE',
    supervisorSolution: '',
    supervisorName: '',
    analystName: currentUser?.displayName || currentUser?.email?.split('@')[0] || 'Analista',
    resolvedAt: undefined,
  });

  const [expandedDoubts, setExpandedDoubts] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const doubts = useMemo(() => {
    return appSettings.technicalDoubts || [];
  }, [appSettings.technicalDoubts]);

  // Counters
  const totalCount = doubts.length;
  const pendingCount = doubts.filter(d => d.status === 'PENDENTE').length;
  const resolvedCount = doubts.filter(d => d.status === 'ESCLARECIDA').length;

  // Filtered doubts
  const filteredDoubts = useMemo(() => {
    return doubts.filter(doubt => {
      // Status filter
      if (statusFilter !== 'ALL' && doubt.status !== statusFilter) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'ALL' && doubt.category !== selectedCategory) {
        return false;
      }
      // Search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const titleMatch = doubt.title.toLowerCase().includes(query);
        const descMatch = doubt.problemDescription.toLowerCase().includes(query);
        const solMatch = (doubt.supervisorSolution || '').toLowerCase().includes(query);
        const ticketMatch = (doubt.ticketNumber || '').toLowerCase().includes(query);
        const superMatch = (doubt.supervisorName || '').toLowerCase().includes(query);
        const catMatch = (doubt.category || '').toLowerCase().includes(query);
        const sysMatch = (doubt.system || '').toLowerCase().includes(query);
        return titleMatch || descMatch || solMatch || ticketMatch || superMatch || catMatch || sysMatch;
      }
      return true;
    }).sort((a, b) => {
      // Put pending on top, then by creation date descending
      if (a.status === 'PENDENTE' && b.status !== 'PENDENTE') return -1;
      if (a.status !== 'PENDENTE' && b.status === 'PENDENTE') return 1;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [doubts, statusFilter, selectedCategory, searchTerm]);

  const handleOpenForm = (doubt?: TechnicalDoubt) => {
    if (doubt) {
      setEditingDoubt(doubt);
      setFormData({
        title: doubt.title || '',
        problemDescription: doubt.problemDescription || '',
        category: doubt.category || '',
        system: doubt.system || '',
        ticketNumber: doubt.ticketNumber || '',
        status: doubt.status || 'PENDENTE',
        supervisorSolution: doubt.supervisorSolution || '',
        supervisorName: doubt.supervisorName || '',
        analystName: doubt.analystName || currentUser?.displayName || 'Analista',
        resolvedAt: doubt.resolvedAt,
      });
    } else {
      setEditingDoubt(null);
      setFormData({
        title: '',
        problemDescription: '',
        category: appSettings.categories?.[0] || '',
        system: appSettings.systems?.[0] || '',
        ticketNumber: '',
        status: 'PENDENTE',
        supervisorSolution: '',
        supervisorName: '',
        analystName: currentUser?.displayName || currentUser?.email?.split('@')[0] || 'Analista',
        resolvedAt: undefined,
      });
    }
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingDoubt(null);
  };

  const handleSaveFull = () => {
    if (!formData.title.trim()) {
      alert('Por favor, preencha o título ou assunto da dúvida.');
      return;
    }

    let updatedDoubts = [...doubts];
    const nowISO = new Date().toISOString();

    if (editingDoubt) {
      // Editing existing
      const isNowResolved = formData.status === 'ESCLARECIDA' || Boolean(formData.supervisorSolution?.trim());
      const updated: TechnicalDoubt = {
        ...editingDoubt,
        ...formData,
        status: isNowResolved ? 'ESCLARECIDA' : 'PENDENTE',
        resolvedAt: isNowResolved ? (editingDoubt.resolvedAt || nowISO) : undefined,
      };
      updatedDoubts = updatedDoubts.map(d => d.id === editingDoubt.id ? updated : d);
    } else {
      // Creating new
      const isResolved = formData.status === 'ESCLARECIDA' || Boolean(formData.supervisorSolution?.trim());
      const newDoubt: TechnicalDoubt = {
        id: Date.now().toString(),
        ...formData,
        status: isResolved ? 'ESCLARECIDA' : 'PENDENTE',
        createdAt: nowISO,
        resolvedAt: isResolved ? nowISO : undefined,
      };
      updatedDoubts = [newDoubt, ...updatedDoubts];
    }

    onUpdateSettings({
      ...appSettings,
      technicalDoubts: updatedDoubts
    });
    handleCloseForm();
  };

  // Quick solution action
  const handleOpenQuickSolution = (doubt: TechnicalDoubt) => {
    setTargetDoubtForSolution(doubt);
    setQuickSupervisorName(doubt.supervisorName || '');
    setQuickSupervisorSolution(doubt.supervisorSolution || '');
    setIsSolutionModalOpen(true);
  };

  const handleSaveQuickSolution = () => {
    if (!targetDoubtForSolution) return;
    if (!quickSupervisorSolution.trim()) {
      alert('Por favor, descreva a solução ou orientação atribuída pela supervisão.');
      return;
    }

    const nowISO = new Date().toISOString();
    const updated: TechnicalDoubt = {
      ...targetDoubtForSolution,
      supervisorSolution: quickSupervisorSolution,
      supervisorName: quickSupervisorName.trim() || 'Supervisão / Líder Técnico',
      status: 'ESCLARECIDA',
      resolvedAt: targetDoubtForSolution.resolvedAt || nowISO,
    };

    const updatedDoubts = doubts.map(d => d.id === targetDoubtForSolution.id ? updated : d);

    onUpdateSettings({
      ...appSettings,
      technicalDoubts: updatedDoubts
    });

    setIsSolutionModalOpen(false);
    setTargetDoubtForSolution(null);
    setExpandedDoubts(prev => ({ ...prev, [updated.id]: true }));
  };

  const handleDelete = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (confirm('Tem certeza que deseja excluir este registro de dúvida técnica?')) {
      const updatedDoubts = doubts.filter(d => d.id !== id);
      onUpdateSettings({
        ...appSettings,
        technicalDoubts: updatedDoubts
      });
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedDoubts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopySolution = (doubt: TechnicalDoubt, e: React.MouseEvent) => {
    e.stopPropagation();
    const cleanText = doubt.supervisorSolution?.replace(/<[^>]+>/g, '') || '';
    const textToCopy = `[DÚVIDA TÉCNICA - ORIENTAÇÃO DA SUPERVISÃO]\nAssunto: ${doubt.title}\n${doubt.ticketNumber ? `Chamado: ${doubt.ticketNumber}\n` : ''}Orientação / Solução: ${cleanText}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(doubt.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories = appSettings.categories || ['Impressora', 'Office', 'Sistema', 'Rede', 'Hardware', 'Outros'];
  const systems = appSettings.systems || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-black text-slate-800 tracking-tight">Dúvidas Técnicas</h2>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
              Suporte & Supervisão
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1 max-w-2xl">
            Espaço para registrar dúvidas sobre procedimentos e problemas técnicos, alinhar com o <strong>Líder Técnico / Supervisão</strong> e salvar as orientações e soluções como histórico de aprendizado.
          </p>
        </div>
        <button
          onClick={() => handleOpenForm()}
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-sm shrink-0"
        >
          <Plus className="h-4 w-4" />
          Registrar Dúvida
        </button>
      </div>

      {/* KPI Cards / Status Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          onClick={() => setStatusFilter('ALL')}
          className={cn(
            "p-4 rounded-xl border text-left transition-all relative overflow-hidden",
            statusFilter === 'ALL' 
              ? "border-blue-500 bg-blue-50/70 ring-2 ring-blue-100 shadow-2xs" 
              : "border-slate-200 bg-white hover:border-slate-300"
          )}
        >
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total de Dúvidas</span>
            <HelpCircle className="h-4 w-4 text-slate-400" />
          </div>
          <div className="mt-2 text-2xl font-black text-slate-800">{totalCount}</div>
          <div className="mt-1 text-[11px] text-slate-500">Histórico completo de registros</div>
        </button>

        <button
          onClick={() => setStatusFilter('PENDENTE')}
          className={cn(
            "p-4 rounded-xl border text-left transition-all relative overflow-hidden",
            statusFilter === 'PENDENTE' 
              ? "border-amber-500 bg-amber-50/70 ring-2 ring-amber-100 shadow-2xs" 
              : "border-slate-200 bg-white hover:border-amber-300"
          )}
        >
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Aguardando Supervisão</span>
            <Clock className="h-4 w-4 text-amber-500" />
          </div>
          <div className="mt-2 text-2xl font-black text-amber-600">{pendingCount}</div>
          <div className="mt-1 text-[11px] text-amber-700/80 font-medium">Pendentes para tirar com líder</div>
        </button>

        <button
          onClick={() => setStatusFilter('ESCLARECIDA')}
          className={cn(
            "p-4 rounded-xl border text-left transition-all relative overflow-hidden",
            statusFilter === 'ESCLARECIDA' 
              ? "border-emerald-500 bg-emerald-50/70 ring-2 ring-emerald-100 shadow-2xs" 
              : "border-slate-200 bg-white hover:border-emerald-300"
          )}
        >
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Esclarecidas / Solucionadas</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="mt-2 text-2xl font-black text-emerald-700">{resolvedCount}</div>
          <div className="mt-1 text-[11px] text-emerald-700/80 font-medium">Soluções atribuídas pela supervisão</div>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 bg-white p-4 rounded-xl border border-slate-200">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por título, problema, solução da supervisão, chamado..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="ALL">Todas as Categorias</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          >
            <option value="ALL">Todos os Status</option>
            <option value="PENDENTE">Aguardando Supervisão</option>
            <option value="ESCLARECIDA">Esclarecidas</option>
          </select>
        </div>
      </div>

      {/* Doubts List */}
      <div className="space-y-4">
        {filteredDoubts.length === 0 ? (
          <div className="bg-white border border-slate-200 border-dashed rounded-2xl p-12 text-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-700 text-base">Nenhuma dúvida técnica encontrada</h3>
            <p className="text-slate-400 text-sm mt-1 max-w-md mx-auto">
              {searchTerm || statusFilter !== 'ALL' || selectedCategory !== 'ALL'
                ? 'Nenhum registro corresponde aos filtros selecionados. Tente limpar os filtros.'
                : 'Quando tiver incertezas sobre problemas ou procedimentos, registre aqui para alinhar com a supervisão!'}
            </p>
            <button
              onClick={() => handleOpenForm()}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-2xs"
            >
              <Plus className="h-4 w-4" />
              Registrar primeira dúvida
            </button>
          </div>
        ) : (
          filteredDoubts.map((doubt, index) => {
            const isExpanded = expandedDoubts[doubt.id] !== false; // Default expanded for good visibility
            const isResolved = doubt.status === 'ESCLARECIDA';

            return (
              <div 
                key={doubt.id}
                className={cn(
                  "bg-white border rounded-2xl transition-all shadow-2xs overflow-hidden",
                  isResolved 
                    ? "border-slate-200 hover:border-emerald-300" 
                    : "border-amber-200 bg-amber-50/10 hover:border-amber-400"
                )}
              >
                {/* Card Header */}
                <div 
                  onClick={() => toggleExpand(doubt.id)}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors select-none"
                >
                  <div className="flex items-start gap-3.5 flex-1">
                    <button 
                      type="button"
                      className="mt-0.5 text-slate-400 hover:text-slate-600 shrink-0"
                    >
                      {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </button>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={cn(
                          "px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5",
                          isResolved 
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-200" 
                            : "bg-amber-100 text-amber-800 border border-amber-300 animate-pulse"
                        )}>
                          {isResolved ? (
                            <>
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                              Esclarecida pela Supervisão
                            </>
                          ) : (
                            <>
                              <Clock className="h-3.5 w-3.5 text-amber-600" />
                              Aguardando Supervisão
                            </>
                          )}
                        </span>

                        {doubt.ticketNumber && (
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-md flex items-center gap-1 border border-slate-200">
                            <Hash className="h-3 w-3 text-slate-400" />
                            Chamado {doubt.ticketNumber}
                          </span>
                        )}

                        {doubt.category && (
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md border border-blue-100">
                            {doubt.category}
                          </span>
                        )}

                        {doubt.system && (
                          <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-xs font-semibold rounded-md border border-purple-100">
                            {doubt.system}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {doubt.title}
                      </h3>

                      <div className="text-xs text-slate-400 flex items-center gap-3">
                        <span>Registrado por: <strong className="text-slate-600">{doubt.analystName || 'Analista'}</strong></span>
                        <span>•</span>
                        <span>{format(new Date(doubt.createdAt), 'dd/MM/yyyy HH:mm')}</span>
                        {doubt.resolvedAt && (
                          <>
                            <span>•</span>
                            <span className="text-emerald-600 font-medium">
                              Solucionado em {format(new Date(doubt.resolvedAt), 'dd/MM/yyyy')}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions Header */}
                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0" onClick={(e) => e.stopPropagation()}>
                    {!isResolved ? (
                      <button
                        onClick={() => handleOpenQuickSolution(doubt)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-2xs transition-colors"
                      >
                        <UserCheck className="h-3.5 w-3.5" />
                        Registrar Solução da Supervisão
                      </button>
                    ) : (
                      doubt.supervisorSolution && (
                        <button
                          onClick={(e) => handleCopySolution(doubt, e)}
                          className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-colors"
                          title="Copiar orientação da supervisão"
                        >
                          {copiedId === doubt.id ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-600" />
                              <span className="text-emerald-600 font-bold">Copiado</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5 text-slate-500" />
                              <span>Copiar Solução</span>
                            </>
                          )}
                        </button>
                      )
                    )}

                    <button
                      onClick={() => handleOpenForm(doubt)}
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Editar registro"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => handleDelete(doubt.id, e)}
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Excluir"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-4 bg-slate-50/40">
                    {/* Section 1: Analyst's Doubt / Uncertainty */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-4 w-4 text-amber-500" />
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          Dúvida / Incerteza do Analista (Problema & Procedimento)
                        </span>
                      </div>
                      <div 
                        className="text-sm text-slate-800 leading-relaxed ql-editor !p-0"
                        dangerouslySetInnerHTML={{ __html: doubt.problemDescription }}
                      />
                    </div>

                    {/* Section 2: Supervision Solution / Guidance */}
                    {isResolved && doubt.supervisorSolution ? (
                      <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200 shadow-2xs">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <UserCheck className="h-4 w-4 text-emerald-600" />
                            <span className="text-xs font-black text-emerald-800 uppercase tracking-wider">
                              Solução / Orientação Atribuída pela Supervisão
                            </span>
                          </div>
                          {doubt.supervisorName && (
                            <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md border border-emerald-200">
                              Orientador: {doubt.supervisorName}
                            </span>
                          )}
                        </div>
                        <div 
                          className="text-sm text-slate-900 leading-relaxed ql-editor !p-0 bg-white p-3 rounded-lg border border-emerald-100 mt-1"
                          dangerouslySetInnerHTML={{ __html: doubt.supervisorSolution }}
                        />
                      </div>
                    ) : (
                      <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 text-amber-800 text-xs font-medium">
                          <Clock className="h-4 w-4 text-amber-600 shrink-0" />
                          <span>Esta dúvida ainda aguarda alinhamento com a liderança técnica / supervisão.</span>
                        </div>
                        <button
                          onClick={() => handleOpenQuickSolution(doubt)}
                          className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition-colors shrink-0 shadow-2xs flex items-center gap-1.5"
                        >
                          <Send className="h-3.5 w-3.5" />
                          Inserir resposta da supervisão
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Modal 1: Quick Supervision Solution */}
      {isSolutionModalOpen && targetDoubtForSolution && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-emerald-50/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base">Registrar Solução da Supervisão</h3>
                  <p className="text-xs text-slate-500">Dúvida: {targetDoubtForSolution.title}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsSolutionModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
                <strong className="text-slate-700 block mb-1">Dúvida relatada:</strong>
                <div 
                  className="ql-editor !p-0 max-h-32 overflow-y-auto text-slate-700" 
                  dangerouslySetInnerHTML={{ __html: targetDoubtForSolution.problemDescription }} 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                  Nome do Líder Técnico / Supervisor
                </label>
                <input
                  type="text"
                  placeholder="Ex: João Silva (Supervisão), Maria (Líder TI)..."
                  value={quickSupervisorName}
                  onChange={(e) => setQuickSupervisorName(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                  Solução / Orientação Atribuída pela Supervisão *
                </label>
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500">
                  <ReactQuill
                    theme="snow"
                    value={quickSupervisorSolution}
                    onChange={setQuickSupervisorSolution}
                    placeholder="Descreva o procedimento correto e a orientação oficial repassada pela liderança..."
                    className="min-h-[140px]"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setIsSolutionModalOpen(false)}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSaveQuickSolution}
                className="px-5 py-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-2xs flex items-center gap-1.5"
              >
                <CheckCircle2 className="h-4 w-4" />
                Salvar & Marcar como Esclarecida
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Full Form (Create / Edit Doubt) */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-4 sm:my-8 relative overflow-hidden border border-slate-200">
            <div className="flex items-center justify-between p-6 border-b border-slate-200 sticky top-0 bg-white rounded-t-2xl z-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-800">
                    {editingDoubt ? 'Editar Dúvida Técnica' : 'Registrar Nova Dúvida Técnica'}
                  </h2>
                  <p className="text-xs text-slate-400">
                    Registre problemas e procedimentos incertos para alinhamento com a liderança.
                  </p>
                </div>
              </div>
              <button 
                onClick={handleCloseForm} 
                className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Row 1: Title and Ticket Number */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Título / Resumo da Dúvida *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Como proceder com falha de autenticação no sistema X?"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Nº do Chamado (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 2026/04812"
                    value={formData.ticketNumber || ''}
                    onChange={(e) => setFormData({ ...formData, ticketNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Row 2: Category and System and Analyst */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Categoria
                  </label>
                  <select
                    value={formData.category || ''}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecione uma categoria...</option>
                    {categories.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Sistema / Equipamento
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: SEI, SIGA, Windows 11..."
                    value={formData.system || ''}
                    onChange={(e) => setFormData({ ...formData, system: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Analista Solicitante
                  </label>
                  <input
                    type="text"
                    value={formData.analystName || ''}
                    onChange={(e) => setFormData({ ...formData, analystName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Problem / Uncertainty Description */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                  Descrição Detalhada do Problema / Incerteza *
                </label>
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                  <ReactQuill
                    theme="snow"
                    value={formData.problemDescription}
                    onChange={(val) => setFormData({ ...formData, problemDescription: val })}
                    placeholder="Descreva detalhadamente o cenário, comportamento do sistema e o procedimento sobre o qual você tem dúvidas..."
                    className="min-h-[160px]"
                  />
                </div>
              </div>

              {/* Supervision Section */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <UserCheck className="h-4 w-4 text-emerald-600" />
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Retorno da Supervisão / Líder Técnico (Opcional ou após alinhamento)
                  </h4>
                </div>

                <div className="space-y-4 bg-emerald-50/40 p-4 rounded-xl border border-emerald-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Nome do Supervisor / Líder
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Carlos (Líder Técnico)"
                        value={formData.supervisorName || ''}
                        onChange={(e) => setFormData({ ...formData, supervisorName: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Status do Registro
                      </label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                        className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold"
                      >
                        <option value="PENDENTE">Aguardando Supervisão</option>
                        <option value="ESCLARECIDA">Esclarecida / Solucionada pela Supervisão</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      Solução / Orientação Atribuída pela Supervisão
                    </label>
                    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500">
                      <ReactQuill
                        theme="snow"
                        value={formData.supervisorSolution || ''}
                        onChange={(val) => setFormData({ ...formData, supervisorSolution: val })}
                        placeholder="Insira a orientação técnica oficial dada pela supervisão..."
                        className="min-h-[140px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3 sticky bottom-0 bg-white z-10">
              <button
                type="button"
                onClick={handleCloseForm}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSaveFull}
                className="px-6 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-2xs"
              >
                {editingDoubt ? 'Salvar Alterações' : 'Cadastrar Dúvida'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
