import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  Image as ImageIcon, 
  AlertTriangle, 
  ShieldAlert, 
  Wrench, 
  Folder, 
  Tag, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  Edit2, 
  Trash2, 
  RotateCcw,
  Sparkles,
  Layers,
  BookOpen,
  Grid,
  Filter,
  Bot,
  Loader2,
  Zap,
  CheckCircle2,
  HelpCircle,
  Send
} from 'lucide-react';
import { AppSettings, FAQ, FAQAttachment, FAQVisualRef } from '@/types';
import { initialFaqs } from '@/data/defaultFaqs';
import { cleanFaq, stripAndFormatHtml } from '@/lib/utils';
import { SoftwareGroupType, SOFTWARE_GROUPS, categorizeSystem } from '@/lib/softwareCatalog';
import { SoftwareGroupSelector } from '@/components/SoftwareGroupSelector';
import { SoftwareDirectoryModal } from '@/components/SoftwareDirectoryModal';
import { 
  searchFaqsIntelligently, 
  diagnoseFaqContextWithGemini, 
  GeminiContextDiagnosticResult 
} from '@/lib/faqSearchEngine';

interface FaqPanelProps {
  appSettings: AppSettings;
  onUpdateSettings: (settings: AppSettings) => void;
  tickets?: any;
}

export function FaqPanel({ appSettings, onUpdateSettings }: FaqPanelProps) {
  const faqs: FAQ[] = useMemo(() => {
    const list = Array.isArray(appSettings.faqs) ? appSettings.faqs : (Array.isArray(appSettings.userFaqs) ? appSettings.userFaqs : initialFaqs);
    return list.map(cleanFaq);
  }, [appSettings.faqs, appSettings.userFaqs]);

  // Search and Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMode, setSearchMode] = useState<'standard' | 'gemini'>('standard');
  const [isGeminiLoading, setIsGeminiLoading] = useState(false);
  const [geminiResult, setGeminiResult] = useState<GeminiContextDiagnosticResult | null>(null);
  const [geminiError, setGeminiError] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('TODOS');
  const [selectedType, setSelectedType] = useState<string>('TODOS');
  const [selectedSystem, setSelectedSystem] = useState<string>('TODOS');
  const [selectedSoftwareGroup, setSelectedSoftwareGroup] = useState<SoftwareGroupType>('TODOS');
  const [isDirectoryModalOpen, setIsDirectoryModalOpen] = useState(false);

  // UI States
  const [expandedFaqIds, setExpandedFaqIds] = useState<Record<string, boolean>>({});
  const [copiedFaqId, setCopiedFaqId] = useState<string | null>(null);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modal State for Add / Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<FAQ>>({
    faqNumber: '',
    name: '',
    system: '',
    subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
    category: '',
    type: 'Requisição de serviço',
    service: '',
    subject: '',
    technicalInfo: '',
    procedure: '',
    observacoes: '',
    permissaoAcesso: '',
    acessoUtilizacao: '',
    originalLink: '',
  });

  // Calculate software group metrics (count of FAQs and unique systems)
  const { groupCounts, systemsCountByGroup, systemsByGroupMap } = useMemo(() => {
    const counts: Record<SoftwareGroupType, number> = {
      TODOS: faqs.length,
      APLICATIVOS_DESKTOP: 0,
      SISTEMAS_INTERNOS: 0,
      TECNOLOGIA_INFRA: 0,
      LEGISLATIVO_PARLAMENTAR: 0,
      SEGURANCA_POLICIA: 0,
      GESTAO_RH_SAUDE: 0,
    };

    const sysSets: Record<SoftwareGroupType, Set<string>> = {
      TODOS: new Set<string>(),
      APLICATIVOS_DESKTOP: new Set<string>(),
      SISTEMAS_INTERNOS: new Set<string>(),
      TECNOLOGIA_INFRA: new Set<string>(),
      LEGISLATIVO_PARLAMENTAR: new Set<string>(),
      SEGURANCA_POLICIA: new Set<string>(),
      GESTAO_RH_SAUDE: new Set<string>(),
    };

    faqs.forEach(f => {
      const sys = f.system?.trim();
      const group = categorizeSystem(sys, f.category, f.subject);
      counts[group] = (counts[group] || 0) + 1;

      if (sys) {
        sysSets.TODOS.add(sys);
        sysSets[group].add(sys);
      }
    });

    const sysCounts: Record<SoftwareGroupType, number> = {
      TODOS: sysSets.TODOS.size,
      APLICATIVOS_DESKTOP: sysSets.APLICATIVOS_DESKTOP.size,
      SISTEMAS_INTERNOS: sysSets.SISTEMAS_INTERNOS.size,
      TECNOLOGIA_INFRA: sysSets.TECNOLOGIA_INFRA.size,
      LEGISLATIVO_PARLAMENTAR: sysSets.LEGISLATIVO_PARLAMENTAR.size,
      SEGURANCA_POLICIA: sysSets.SEGURANCA_POLICIA.size,
      GESTAO_RH_SAUDE: sysSets.GESTAO_RH_SAUDE.size,
    };

    const sysLists: Record<SoftwareGroupType, string[]> = {
      TODOS: Array.from(sysSets.TODOS).sort(),
      APLICATIVOS_DESKTOP: Array.from(sysSets.APLICATIVOS_DESKTOP).sort(),
      SISTEMAS_INTERNOS: Array.from(sysSets.SISTEMAS_INTERNOS).sort(),
      TECNOLOGIA_INFRA: Array.from(sysSets.TECNOLOGIA_INFRA).sort(),
      LEGISLATIVO_PARLAMENTAR: Array.from(sysSets.LEGISLATIVO_PARLAMENTAR).sort(),
      SEGURANCA_POLICIA: Array.from(sysSets.SEGURANCA_POLICIA).sort(),
      GESTAO_RH_SAUDE: Array.from(sysSets.GESTAO_RH_SAUDE).sort(),
    };

    return {
      groupCounts: counts,
      systemsCountByGroup: sysCounts,
      systemsByGroupMap: sysLists,
    };
  }, [faqs]);

  // Extract systems for dropdown based on active group
  const systemsList = useMemo(() => {
    return systemsByGroupMap[selectedSoftwareGroup] || systemsByGroupMap.TODOS;
  }, [systemsByGroupMap, selectedSoftwareGroup]);

  // Helper classification functions for consistent stats & filtering
  const isInstalacaoFaq = (faq: FAQ) => {
    const sub = (faq.subCategory || '').toUpperCase();
    const serv = (faq.service || '').toLowerCase();
    const type = (faq.type || '').toLowerCase();
    const name = (faq.name || '').toLowerCase();
    return (
      sub.includes('INSTAL') ||
      type.includes('requisi') ||
      serv.includes('instal') ||
      serv.includes('software') ||
      name.includes('instala') ||
      name.includes('configura') ||
      name.includes('acesso')
    );
  };

  const isErroFaq = (faq: FAQ) => {
    const sub = (faq.subCategory || '').toUpperCase();
    const type = (faq.type || '').toLowerCase();
    const name = (faq.name || '').toLowerCase();
    const subject = (faq.subject || '').toLowerCase();
    const serv = (faq.service || '').toLowerCase();
    return (
      sub.includes('ERRO') ||
      type.includes('incidente') ||
      name.includes('erro') ||
      name.includes('falha') ||
      name.includes('problema') ||
      subject.includes('erro') ||
      subject.includes('indisponibilidade') ||
      serv.includes('incidente')
    );
  };

  const isRestritoFaq = (faq: FAQ) => {
    const obs = (faq.observacoes || '').toLowerCase();
    const sub = (faq.subCategory || '').toUpperCase();
    const cat = (faq.category || '').toUpperCase();
    return (
      obs.includes('restrito') ||
      obs.includes('não autorizado') ||
      obs.includes('somente') ||
      sub.includes('TREINAMENTO') ||
      sub.includes('NÍVEL 2') ||
      sub.includes('SAEQUI') ||
      sub.includes('SERMAN') ||
      sub.includes('SUAPE') ||
      cat.includes('TREINAMENTO')
    );
  };

  // Statistics
  const stats = useMemo(() => {
    const total = faqs.length;
    const instalacaoCount = faqs.filter(isInstalacaoFaq).length;
    const erroCount = faqs.filter(isErroFaq).length;
    const restritoCount = faqs.filter(isRestritoFaq).length;
    return { total, instalacaoCount, erroCount, restritoCount };
  }, [faqs]);

  // Intelligent Search with Fuzzy Matching, Typo Tolerance and IT Synonyms
  const intelligentSearchResult = useMemo(() => {
    return searchFaqsIntelligently(faqs, searchTerm);
  }, [faqs, searchTerm]);

  // Context Diagnosis with Gemini AI
  const handleRunGeminiDiagnosis = async (complaintText?: string) => {
    const query = (complaintText !== undefined ? complaintText : searchTerm).trim();
    if (!query) {
      showToast('Digite o relato do cliente antes de buscar.');
      return;
    }

    setIsGeminiLoading(true);
    setGeminiError(null);

    try {
      const result = await diagnoseFaqContextWithGemini(query, faqs);
      setGeminiResult(result);
      if (result.recommendedFaqIds.length === 0) {
        showToast('Nenhuma FAQ específica identificada para o relato.');
      } else {
        showToast(`${result.recommendedFaqIds.length} FAQ(s) identificadas pelo Gemini.`);
      }
    } catch (err: any) {
      console.error('Error during Gemini diagnosis:', err);
      setGeminiError(err.message || 'Erro ao processar diagnóstico com IA.');
      showToast('Falha no diagnóstico com IA.');
    } finally {
      setIsGeminiLoading(false);
    }
  };

  // Map of Gemini reasonings for fast lookup in cards
  const geminiReasoningsMap = useMemo(() => {
    const map = new Map<string, { relevanceScore: number; whyMatch: string }>();
    if (geminiResult?.reasonings) {
      geminiResult.reasonings.forEach(r => map.set(r.faqId, r));
    }
    return map;
  }, [geminiResult]);

  // Filtered FAQs (applies group, category, type, and system filters on top of search)
  const filteredFaqs = useMemo(() => {
    const sourceList = (searchMode === 'gemini' && geminiResult)
      ? geminiResult.matchedFaqs
      : intelligentSearchResult.results;

    return sourceList.filter(faq => {
      // Group match
      if (selectedSoftwareGroup !== 'TODOS') {
        const group = categorizeSystem(faq.system, faq.category, faq.subject);
        if (group !== selectedSoftwareGroup) return false;
      }

      // SubCategory / Quick filter match
      const matchesSubCategory = 
        selectedSubCategory === 'TODOS' || 
        (selectedSubCategory === 'INSTALACAO' && isInstalacaoFaq(faq)) ||
        (selectedSubCategory === 'ERRO' && isErroFaq(faq)) ||
        (selectedSubCategory === 'RESTRITO' && isRestritoFaq(faq));

      // Type match
      const matchesType = selectedType === 'TODOS' || faq.type === selectedType;

      // System match
      const matchesSystem = selectedSystem === 'TODOS' || faq.system === selectedSystem;

      return matchesSubCategory && matchesType && matchesSystem;
    });
  }, [
    searchMode, 
    geminiResult, 
    intelligentSearchResult.results, 
    selectedSubCategory, 
    selectedType, 
    selectedSystem, 
    selectedSoftwareGroup
  ]);

  // Helper to show temporary toast
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Copy helpers
  const handleCopy = (text: string, label: string, faqId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFaqId(faqId);
    setCopiedSection(label);
    showToast(`${label} copiado para a área de transferência!`);
    setTimeout(() => {
      setCopiedFaqId(null);
      setCopiedSection(null);
    }, 2000);
  };

  const handleCopyFullFaq = (faq: FAQ) => {
    const fullText = `[FAQ# ${faq.faqNumber}] ${faq.name}
Tipo: ${faq.type || 'N/A'}
Serviço: ${faq.service || 'N/A'}
Assunto: ${faq.subject || 'N/A'}

INFORMAÇÕES E ORIENTAÇÕES:
${faq.technicalInfo || 'N/A'}

PROCEDIMENTO:
${faq.procedure || 'N/A'}
${faq.observacoes ? `\nOBSERVAÇÕES: ${faq.observacoes}` : ''}
${faq.permissaoAcesso ? `\nPERMISSÃO DE ACESSO: ${faq.permissaoAcesso}` : ''}
${faq.originalLink ? `\nLink Original CAPRI: ${faq.originalLink}` : ''}`;

    navigator.clipboard.writeText(fullText);
    showToast(`FAQ# ${faq.faqNumber} copiada na íntegra!`);
  };

  const toggleExpand = (id: string) => {
    setExpandedFaqIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleExpandAll = () => {
    const allMap: Record<string, boolean> = {};
    filteredFaqs.forEach(f => {
      allMap[f.id] = true;
    });
    setExpandedFaqIds(allMap);
  };

  const handleCollapseAll = () => {
    setExpandedFaqIds({});
  };

  // Open Modal for New FAQ
  const handleOpenAddModal = () => {
    setEditingFaq(null);
    setFormData({
      faqNumber: '',
      name: '',
      system: 'Adobe',
      subCategory: 'INSTALAÇÃO/CONFIGURAÇÃO',
      category: 'CENTRAL DE ATENDIMENTO::APLICATIVOS::COMERCIAIS::ADOBE::INSTALAÇÃO/CONFIGURAÇÃO',
      type: 'Requisição de serviço',
      service: 'Instalação de software',
      subject: '',
      technicalInfo: '',
      procedure: '',
      observacoes: '',
      permissaoAcesso: '',
      acessoUtilizacao: '',
      originalLink: '',
    });
    setIsModalOpen(true);
  };

  // Open Modal for Editing FAQ
  const handleOpenEditModal = (faq: FAQ) => {
    setEditingFaq(faq);
    setFormData({ ...faq });
    setIsModalOpen(true);
  };

  // Save FAQ (Add or Edit)
  const handleSaveFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name?.trim()) {
      alert('Por favor, informe o título da FAQ.');
      return;
    }

    let updatedList: FAQ[];

    if (editingFaq) {
      // Edit existing
      updatedList = faqs.map(item => 
        item.id === editingFaq.id ? ({ ...item, ...formData } as FAQ) : item
      );
      showToast(`FAQ# ${formData.faqNumber || editingFaq.faqNumber} atualizada com sucesso!`);
    } else {
      // Create new
      const newFaq: FAQ = {
        id: `faq-user-${Date.now()}`,
        faqNumber: formData.faqNumber?.trim() || String(Math.floor(1000000 + Math.random() * 9000000)),
        name: stripAndFormatHtml(formData.name),
        system: stripAndFormatHtml(formData.system) || 'Geral',
        subCategory: formData.subCategory || 'INSTALAÇÃO/CONFIGURAÇÃO',
        category: formData.category || 'CENTRAL DE ATENDIMENTO',
        type: formData.type || 'Requisição de serviço',
        service: stripAndFormatHtml(formData.service) || '',
        subject: stripAndFormatHtml(formData.subject) || '',
        associatedProcedureId: '',
        technicalInfo: stripAndFormatHtml(formData.technicalInfo) || '',
        procedure: stripAndFormatHtml(formData.procedure) || '',
        observacoes: stripAndFormatHtml(formData.observacoes) || '',
        permissaoAcesso: stripAndFormatHtml(formData.permissaoAcesso) || '',
        acessoUtilizacao: stripAndFormatHtml(formData.acessoUtilizacao) || '',
        originalLink: formData.originalLink || '',
      };
      updatedList = [newFaq, ...faqs];
      showToast(`Nova FAQ cadastrada com sucesso!`);
    }

    onUpdateSettings({
      ...appSettings,
      userFaqs: updatedList,
      faqs: updatedList.map(cleanFaq)
    });

    setIsModalOpen(false);
  };

  // Delete FAQ
  const handleDeleteFaq = (id: string, name: string) => {
    if (window.confirm(`Deseja realmente remover a FAQ "${name}"?`)) {
      const updatedList = faqs.filter(item => item.id !== id);
      onUpdateSettings({
        ...appSettings,
        userFaqs: updatedList,
        faqs: updatedList
      });
      showToast('FAQ removida.');
    }
  };

  // Clear all FAQs (Start from zero)
  const handleClearAllFaqs = () => {
    if (window.confirm('Deseja realmente limpar todas as FAQs da base de conhecimento e começar do zero?')) {
      onUpdateSettings({
        ...appSettings,
        userFaqs: [],
        faqs: []
      });
      showToast('Todas as FAQs foram removidas com sucesso. A base está zerada!');
    }
  };

  // Restore Default FAQs
  const handleRestoreDefaults = () => {
    if (initialFaqs.length === 0) {
      if (window.confirm('A base padrão inicial está zerada. Deseja manter a base completamente vazia para começar do zero?')) {
        onUpdateSettings({
          ...appSettings,
          userFaqs: [],
          faqs: []
        });
        showToast('Base de FAQs mantida zerada.');
      }
      return;
    }
    if (window.confirm(`Deseja restaurar a base com as ${initialFaqs.length} FAQs oficiais?`)) {
      onUpdateSettings({
        ...appSettings,
        userFaqs: [],
        faqs: initialFaqs
      });
      showToast(`Base restaurada com ${initialFaqs.length} FAQs oficiais.`);
    }
  };

  return (
    <div className="flex-1 h-full flex flex-col bg-slate-50 overflow-y-auto relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200 border border-slate-700">
          <Check className="h-5 w-5 text-emerald-400" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Top Banner & Header */}
      <div className="bg-white border-b border-slate-200 p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <h1 className="text-2xl font-black tracking-tight text-slate-900">Base de Conhecimento & FAQs</h1>
            </div>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Catálogo oficial de perguntas frequentes, instruções de instalação, resolução de erros de softwares e regras de licenciamento do Senado Federal.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <button
              onClick={() => setIsDirectoryModalOpen(true)}
              title="Abrir diretório completo com todos os softwares e sistemas"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50/90 hover:bg-indigo-100/90 rounded-xl transition-all border border-indigo-200/80 shadow-xs cursor-pointer"
            >
              <Grid className="h-4 w-4 text-indigo-600" />
              Diretório de Softwares & Sistemas
            </button>
            {initialFaqs.length > 0 && (
              <button
                onClick={handleRestoreDefaults}
                title="Restaurar lista com as FAQs padrão"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 bg-white hover:bg-slate-50 rounded-xl transition-all border border-slate-200 shadow-xs cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5 text-slate-500" />
                Restaurar Padrões
              </button>
            )}
            {faqs.length > 0 && (
              <button
                onClick={handleClearAllFaqs}
                title="Limpar todas as FAQs da base (começar do zero)"
                className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-medium text-slate-400 hover:text-rose-600 bg-transparent hover:bg-rose-50/60 rounded-xl transition-all border border-transparent hover:border-rose-200 cursor-pointer"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Limpar Tudo
              </button>
            )}
            <button
              onClick={handleOpenAddModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              Nova FAQ
            </button>
          </div>
        </div>

        {/* Software Group Selector (Hierarquia: Softwares Desktop, Sistemas Internos, etc.) */}
        <div className="max-w-7xl mx-auto mt-6">
          <SoftwareGroupSelector
            selectedGroup={selectedSoftwareGroup}
            onSelectGroup={(group) => {
              setSelectedSoftwareGroup(group);
              setSelectedSystem('TODOS');
            }}
            groupCounts={groupCounts}
            systemsCountByGroup={systemsCountByGroup}
          />
        </div>

        {/* Metric summary counters - Interactive filter cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-5">
          {/* Card 1: Total */}
          <button
            type="button"
            onClick={() => {
              setSelectedSubCategory('TODOS');
              setSelectedSoftwareGroup('TODOS');
              setSelectedType('TODOS');
              setSelectedSystem('TODOS');
            }}
            title="Clique para visualizar todo o catálogo de FAQs"
            className={`group text-left rounded-2xl p-4 flex items-center gap-3.5 transition-all duration-200 border cursor-pointer outline-none ${
              selectedSubCategory === 'TODOS' && selectedSoftwareGroup === 'TODOS' && selectedType === 'TODOS'
                ? 'bg-blue-50/80 border-blue-300 ring-2 ring-blue-500/25 shadow-sm'
                : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs'
            }`}
          >
            <div className={`p-3 rounded-xl transition-colors ${
              selectedSubCategory === 'TODOS' && selectedSoftwareGroup === 'TODOS'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-blue-100/70 text-blue-700 group-hover:bg-blue-100'
            }`}>
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total de FAQs</p>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-2xl font-black text-slate-800">{stats.total}</span>
                <span className="text-[11px] text-blue-600 font-semibold">todas</span>
              </div>
            </div>
          </button>

          {/* Card 2: Instalação / Configuração */}
          <button
            type="button"
            onClick={() => {
              setSelectedSubCategory(selectedSubCategory === 'INSTALACAO' ? 'TODOS' : 'INSTALACAO');
            }}
            title="Clique para filtrar apenas procedimentos de Instalação e Requisições"
            className={`group text-left rounded-2xl p-4 flex items-center gap-3.5 transition-all duration-200 border cursor-pointer outline-none ${
              selectedSubCategory === 'INSTALACAO'
                ? 'bg-emerald-50/80 border-emerald-300 ring-2 ring-emerald-500/25 shadow-sm'
                : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs'
            }`}
          >
            <div className={`p-3 rounded-xl transition-colors ${
              selectedSubCategory === 'INSTALACAO'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-emerald-100/70 text-emerald-700 group-hover:bg-emerald-100'
            }`}>
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Instalação & Config.</p>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-2xl font-black text-slate-800">{stats.instalacaoCount}</span>
                <span className="text-[11px] text-emerald-600 font-semibold">requisições</span>
              </div>
            </div>
          </button>

          {/* Card 3: Erros & Incidentes */}
          <button
            type="button"
            onClick={() => {
              setSelectedSubCategory(selectedSubCategory === 'ERRO' ? 'TODOS' : 'ERRO');
            }}
            title="Clique para filtrar apenas Incidentes e Resolução de Erros"
            className={`group text-left rounded-2xl p-4 flex items-center gap-3.5 transition-all duration-200 border cursor-pointer outline-none ${
              selectedSubCategory === 'ERRO'
                ? 'bg-amber-50/80 border-amber-300 ring-2 ring-amber-500/25 shadow-sm'
                : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs'
            }`}
          >
            <div className={`p-3 rounded-xl transition-colors ${
              selectedSubCategory === 'ERRO'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-amber-100/70 text-amber-700 group-hover:bg-amber-100'
            }`}>
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Erros & Incidentes</p>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-2xl font-black text-slate-800">{stats.erroCount}</span>
                <span className="text-[11px] text-amber-600 font-semibold">chamados</span>
              </div>
            </div>
          </button>

          {/* Card 4: Treinamento / Restritos / N2 */}
          <button
            type="button"
            onClick={() => {
              setSelectedSubCategory(selectedSubCategory === 'RESTRITO' ? 'TODOS' : 'RESTRITO');
            }}
            title="Clique para filtrar Manuais, Treinamento e Nível 2"
            className={`group text-left rounded-2xl p-4 flex items-center gap-3.5 transition-all duration-200 border cursor-pointer outline-none ${
              selectedSubCategory === 'RESTRITO'
                ? 'bg-purple-50/80 border-purple-300 ring-2 ring-purple-500/25 shadow-sm'
                : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs'
            }`}
          >
            <div className={`p-3 rounded-xl transition-colors ${
              selectedSubCategory === 'RESTRITO'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-purple-100/70 text-purple-700 group-hover:bg-purple-100'
            }`}>
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Treinamento & N2</p>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-2xl font-black text-slate-800">{stats.restritoCount}</span>
                <span className="text-[11px] text-purple-600 font-semibold">manuais/N2</span>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-slate-200 px-6 py-3.5 shadow-sm space-y-3">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          {/* Search Mode Toggle Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-100/90 border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => {
                  setSearchMode('standard');
                  setGeminiResult(null);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  searchMode === 'standard'
                    ? 'bg-white text-indigo-700 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Search className="h-3.5 w-3.5 text-indigo-500" />
                <span>Busca Padrão (Fuzzy)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSearchMode('gemini');
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  searchMode === 'gemini'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xs'
                    : 'text-purple-700 hover:text-purple-900'
                }`}
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>Diagnóstico com IA Gemini</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-200 px-1 rounded uppercase font-mono">Anti-Alucinação</span>
              </button>
            </div>

            {searchMode === 'gemini' ? (
              <span className="text-[11px] text-slate-500 flex items-center gap-1">
                <Bot className="h-3.5 w-3.5 text-purple-600" />
                Triagem em funil inteligente sobre 600+ FAQs reais
              </span>
            ) : (
              <span className="text-[11px] text-slate-400">
                Tolerância a erros de digitação e sinônimos ativos
              </span>
            )}
          </div>

          {/* Search input line */}
          {searchMode === 'gemini' ? (
            <div className="relative w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="relative flex-1">
                <Bot className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-purple-600" />
                <input
                  type="text"
                  placeholder="Descreva o relato do cliente (ex: 'Cliente diz que seu certificado digital não abre')..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleRunGeminiDiagnosis();
                    }
                  }}
                  className="w-full pl-11 pr-20 py-2.5 text-sm bg-purple-50/40 hover:bg-purple-50/60 focus:bg-white border border-purple-200 focus:border-purple-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-500/15 transition-all text-slate-800 font-medium placeholder:text-slate-400 shadow-inner"
                />
                {searchTerm && (
                  <button 
                    type="button"
                    onClick={() => {
                      setSearchTerm('');
                      setGeminiResult(null);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 hover:text-slate-700 bg-slate-200 hover:bg-slate-300 rounded-lg px-2.5 py-1 transition-colors cursor-pointer"
                  >
                    Limpar
                  </button>
                )}
              </div>

              <button
                type="button"
                disabled={isGeminiLoading || !searchTerm.trim()}
                onClick={() => handleRunGeminiDiagnosis()}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-xs hover:shadow transition-all shrink-0 cursor-pointer"
              >
                {isGeminiLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                    <span>Triando com IA...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 text-amber-300" />
                    <span>Diagnosticar com Gemini</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-500" />
              <input
                type="text"
                placeholder="Buscar por número (ex: 1000681), título, software, erro ou palavra-chave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-24 py-2.5 text-sm bg-slate-50 hover:bg-slate-100/90 focus:bg-white border border-slate-300/80 focus:border-indigo-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/15 transition-all text-slate-800 font-medium placeholder:text-slate-400 shadow-inner"
              />
              {searchTerm ? (
                <button 
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 hover:text-slate-700 bg-slate-200 hover:bg-slate-300 rounded-lg px-2.5 py-1 transition-colors cursor-pointer"
                >
                  Limpar
                </button>
              ) : (
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-medium text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded">
                  Ctrl + K
                </span>
              )}
            </div>
          )}

          {/* Gemini Active Diagnosis Banner */}
          {searchMode === 'gemini' && geminiResult && (
            <div className="bg-gradient-to-r from-purple-50 via-indigo-50/80 to-blue-50 border border-purple-200 rounded-2xl p-4 shadow-xs animate-fadeIn space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-200/80 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-lg shadow-2xs">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-purple-950 uppercase tracking-wider flex items-center gap-1.5">
                      Diagnóstico Contextual Gemini 3.8 Flash
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full border border-emerald-200">
                        {geminiResult.recommendedFaqIds.length} Soluções Viáveis
                      </span>
                    </h4>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setGeminiResult(null);
                      setSearchMode('standard');
                    }}
                    className="text-[11px] font-semibold text-slate-600 hover:text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                  >
                    Voltar à busca padrão
                  </button>
                </div>
              </div>

              <div className="text-xs text-slate-800 space-y-1.5">
                <div className="flex items-start gap-1.5">
                  <strong className="text-purple-900 shrink-0">Resumo da Triagem:</strong>
                  <span className="font-medium text-purple-950">{geminiResult.diagnosticSummary}</span>
                </div>

                {geminiResult.technicalAdvice && (
                  <div className="flex items-start gap-1.5 p-2 rounded-lg bg-white/80 border border-indigo-100 text-[11px] text-indigo-900">
                    <strong className="shrink-0 text-indigo-950">Dica Técnica de Atendimento:</strong>
                    <span>{geminiResult.technicalAdvice}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Smart Search Assistant & Typo Correction Banner (Standard Mode) */}
          {searchMode === 'standard' && searchTerm.trim().length >= 2 && (
            <div className="animate-fadeIn">
              {intelligentSearchResult.suggestedCorrection ? (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 text-indigo-950 px-4 py-2.5 rounded-xl shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1 bg-indigo-600 text-white rounded-md shrink-0">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <span>
                      Você quis dizer:{' '}
                      <button
                        type="button"
                        onClick={() => setSearchTerm(intelligentSearchResult.suggestedCorrection!.suggested)}
                        className="font-bold text-indigo-700 hover:text-indigo-900 underline decoration-indigo-400 decoration-2 cursor-pointer ml-1"
                        title="Clique para aplicar a palavra sugerida"
                      >
                        "{intelligentSearchResult.suggestedCorrection.suggested}"
                      </button>
                      ? Mostrando resultados tolerantes a erro de digitação.
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 bg-white px-2 py-0.5 rounded-md border border-indigo-200/80 shadow-2xs self-start sm:self-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Fuzzy Search Ativo
                  </span>
                </div>
              ) : intelligentSearchResult.hasFuzzyMatch ? (
                <div className="flex items-center justify-between text-xs bg-slate-50 border border-slate-200/90 text-slate-700 px-3.5 py-2 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                    <span>
                      Busca inteligente com tolerância a digitação e sinônimos de TI do Senado Federal.
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Aproximação Ativa</span>
                </div>
              ) : null}
            </div>
          )}

          {/* Bottom Line: Responsive Filters and Selects */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2.5">
              {/* SubCategory Filter */}
              <div className="flex items-center rounded-xl border border-slate-200 bg-slate-100/80 p-1">
                <button
                  onClick={() => setSelectedSubCategory('TODOS')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    selectedSubCategory === 'TODOS' 
                      ? 'bg-white shadow-xs text-slate-900 font-bold' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Todas ({stats.total})
                </button>
                <button
                  onClick={() => setSelectedSubCategory('INSTALACAO')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    selectedSubCategory === 'INSTALACAO' 
                      ? 'bg-emerald-600 text-white shadow-xs font-bold' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Instalação ({stats.instalacaoCount})
                </button>
                <button
                  onClick={() => setSelectedSubCategory('ERRO')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    selectedSubCategory === 'ERRO' 
                      ? 'bg-amber-600 text-white shadow-xs font-bold' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Erros ({stats.erroCount})
                </button>
                <button
                  onClick={() => setSelectedSubCategory('RESTRITO')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    selectedSubCategory === 'RESTRITO' 
                      ? 'bg-purple-600 text-white shadow-xs font-bold' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Treinamento / N2 ({stats.restritoCount})
                </button>
              </div>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="py-1.5 px-3 bg-white border border-slate-200 rounded-lg font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="TODOS">Todos os Tipos</option>
                <option value="Requisição de serviço">Requisição de serviço</option>
                <option value="Incidente">Incidente</option>
              </select>

              {/* System Filter */}
              <div className="flex items-center gap-1.5">
                <select
                  value={selectedSystem}
                  onChange={(e) => setSelectedSystem(e.target.value)}
                  className="py-1.5 px-3 bg-white border border-slate-200 rounded-lg font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 max-w-[280px]"
                >
                  <option value="TODOS">
                    {selectedSoftwareGroup === 'TODOS' ? 'Todos os Softwares & Sistemas' : `Todos de ${SOFTWARE_GROUPS.find(g => g.id === selectedSoftwareGroup)?.label.split('&')[0]}`} ({systemsList.length})
                  </option>
                  {systemsList.map(sys => (
                    <option key={sys} value={sys}>{sys}</option>
                  ))}
                </select>

                {(selectedSoftwareGroup !== 'TODOS' || selectedSystem !== 'TODOS') && (
                  <button
                    onClick={() => {
                      setSelectedSoftwareGroup('TODOS');
                      setSelectedSystem('TODOS');
                    }}
                    className="px-2.5 py-1 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-md transition-colors"
                    title="Limpar filtros de grupo e software"
                  >
                    Limpar Categoria
                  </button>
                )}
              </div>
            </div>

            {/* Total Results indicator */}
            <div className="text-xs text-slate-500 font-medium">
              Procedimentos visíveis: <strong className="text-slate-800">{filteredFaqs.length}</strong> de <strong className="text-slate-800">{faqs.length}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl w-full mx-auto p-6 space-y-4">
        {faqs.length === 0 ? (
          <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-12 text-center shadow-xs">
            <div className="w-16 h-16 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Base de FAQs Limpa</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              Todas as FAQs foram limpas e a base está pronta para você começar do zero. Cadastre novos procedimentos e soluções personalizadas.
            </p>
            <button
              onClick={handleOpenAddModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <Plus className="h-4 w-4" />
              Cadastrar Primeira FAQ
            </button>
          </div>
        ) : filteredFaqs.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-xs">
            {searchMode === 'gemini' && geminiResult ? (
              <div className="space-y-3">
                <div className="p-3 bg-purple-100 text-purple-700 rounded-2xl w-14 h-14 flex items-center justify-center mx-auto shadow-2xs">
                  <Bot className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  Nenhuma FAQ específica cadastrada para este problema
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  {geminiResult.diagnosticSummary || 'O Gemini avaliou as FAQs da base de conhecimento e identificou que este problema não possui um procedimento direto cadastrado.'}
                </p>
                {geminiResult.technicalAdvice && (
                  <div className="p-3.5 bg-purple-50 border border-purple-200 rounded-xl text-xs text-purple-900 max-w-md mx-auto text-left shadow-2xs">
                    <strong className="block font-bold mb-1 flex items-center gap-1.5 text-purple-950">
                      <Sparkles className="h-3.5 w-3.5 text-purple-600" />
                      Orientação Técnica:
                    </strong>
                    <span>{geminiResult.technicalAdvice}</span>
                  </div>
                )}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setGeminiResult(null);
                      setSearchMode('standard');
                    }}
                    className="px-4 py-2 text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors cursor-pointer"
                  >
                    Voltar para a Busca Padrão
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Info className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800 mb-1">Nenhuma FAQ encontrada</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto mb-4">
                  Não encontramos resultados para os filtros ou termo de busca selecionados. Tente ajustar a pesquisa.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSubCategory('TODOS');
                    setSelectedType('TODOS');
                    setSelectedSystem('TODOS');
                    setSelectedSoftwareGroup('TODOS');
                  }}
                  className="px-4 py-2 text-sm font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors cursor-pointer"
                >
                  Limpar todos os filtros
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="space-y-3.5">
            {/* Header controls: Counter and Expand/Collapse All */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 px-1 pb-1">
              <div className="flex items-center gap-2">
                <span>Exibindo <strong>{filteredFaqs.length}</strong> de <strong>{faqs.length}</strong> FAQs</span>
                {filteredFaqs.length !== faqs.length && (
                  <span className="text-[11px] text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md font-medium border border-indigo-200/60">
                    Filtro ativo
                  </span>
                )}
              </div>

              {filteredFaqs.length > 0 && (
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={handleExpandAll}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-2xs transition-all cursor-pointer"
                    title="Abrir o procedimento de todas as FAQs exibidas"
                  >
                    <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
                    Expandir todas
                  </button>
                  <button
                    type="button"
                    onClick={handleCollapseAll}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-2xs transition-all cursor-pointer"
                    title="Minimizar todas as FAQs para navegação ágil"
                  >
                    <ChevronUp className="h-3.5 w-3.5 text-slate-400" />
                    Recolher todas
                  </button>
                </div>
              )}
            </div>

            {filteredFaqs.map((faq) => {
              const isExpanded = expandedFaqIds[faq.id] ?? false;
              const isInstalacao = faq.subCategory?.toUpperCase().includes('INSTAL') || faq.service?.toLowerCase().includes('instalação');
              const isRestrito = faq.observacoes?.toLowerCase().includes('restrito') || faq.observacoes?.toLowerCase().includes('não autorizado') || faq.observacoes?.toLowerCase().includes('n2');

              return (
                <div 
                  key={faq.id}
                  className={`bg-white border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isExpanded 
                      ? 'border-indigo-400 shadow-md ring-2 ring-indigo-500/10' 
                      : 'border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-sm'
                  }`}
                >
                  {/* Card Header (Clickable to toggle expansion) */}
                  <div 
                    onClick={() => toggleExpand(faq.id)}
                    className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white hover:bg-slate-50/70 transition-colors cursor-pointer select-none"
                  >
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* FAQ Number Pill */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(faq.faqNumber, 'Número da FAQ', faq.id);
                          }}
                          title="Clique para copiar o número da FAQ"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-mono text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition-colors cursor-pointer"
                        >
                          <span>FAQ#: {faq.faqNumber}</span>
                          {copiedFaqId === faq.id && copiedSection === 'Número da FAQ' ? (
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="h-3.5 w-3.5 text-indigo-400" />
                          )}
                        </button>

                        {/* Software System Badge */}
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                          <Tag className="h-3 w-3 text-slate-400" />
                          {faq.system || 'Software'}
                        </span>

                        {/* Subcategory Badge */}
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                          isInstalacao 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}>
                          {isInstalacao ? <Wrench className="h-3 w-3" /> : <AlertTriangle className="h-3 w-3" />}
                          {faq.subCategory || (isInstalacao ? 'INSTALAÇÃO' : 'ERRO')}
                        </span>

                        {/* Type Badge */}
                        {faq.type && (
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-lg text-[11px] font-medium ${
                            faq.type === 'Incidente'
                              ? 'bg-purple-50 text-purple-700 border border-purple-200'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}>
                            {faq.type}
                          </span>
                        )}

                        {/* Restrito / N2 Warning Badge */}
                        {isRestrito && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                            <ShieldAlert className="h-3 w-3" />
                            {faq.observacoes?.includes('N2') ? 'ATENDIMENTO N2' : 'RESTRITO / AUTORIZAÇÃO'}
                          </span>
                        )}

                        {/* Search Match Reason Indicator */}
                        {searchTerm.trim().length >= 2 && intelligentSearchResult.matchDetails.has(faq.id) && (() => {
                          const detail = intelligentSearchResult.matchDetails.get(faq.id);
                          if (detail?.matchReason === 'fuzzy') {
                            return (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/90 shadow-2xs">
                                <Sparkles className="h-3 w-3 text-indigo-500" />
                                Termo aproximado: {detail.matchedTerms.slice(0, 1).join(', ')}
                              </span>
                            );
                          }
                          if (detail?.matchReason === 'synonym') {
                            return (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/90 shadow-2xs">
                                <Sparkles className="h-3 w-3 text-emerald-500" />
                                Sinônimo: {detail.matchedTerms.slice(0, 1).join(', ')}
                              </span>
                            );
                          }
                          return null;
                        })()}
                      </div>

                      {/* FAQ Title */}
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                        {faq.name}
                      </h2>

                      {/* Service and Subject Meta */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                        {faq.service && (
                          <span><strong>Serviço:</strong> {faq.service}</span>
                        )}
                        {faq.subject && (
                          <span><strong>Assunto:</strong> {faq.subject}</span>
                        )}
                      </div>

                      {/* Gemini Diagnosis Match Reason Banner */}
                      {searchMode === 'gemini' && geminiReasoningsMap.has(faq.id) && (() => {
                        const r = geminiReasoningsMap.get(faq.id)!;
                        return (
                          <div className="mt-2 flex items-start gap-2.5 p-2.5 bg-gradient-to-r from-purple-50 to-indigo-50/80 border border-purple-200/90 rounded-xl text-xs text-purple-950 font-medium shadow-2xs">
                            <div className="p-1 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-md shrink-0 mt-0.5 shadow-2xs">
                              <Bot className="h-3.5 w-3.5" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-purple-900">Solução recomendada pelo Gemini</span>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-200 text-purple-800 font-extrabold border border-purple-300/60">
                                  {r.relevanceScore}% Certeza
                                </span>
                              </div>
                              <p className="text-purple-900/90 text-[11px] leading-relaxed">
                                {r.whyMatch}
                              </p>
                            </div>
                          </div>
                        );
                      })()}
                    </div>

                    {/* Header Action Buttons */}
                    <div 
                      className="flex items-center gap-2 shrink-0 self-end md:self-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Primary Toggle Button */}
                      <button
                        type="button"
                        onClick={() => toggleExpand(faq.id)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                          isExpanded 
                            ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200' 
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs hover:shadow'
                        }`}
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="h-4 w-4" />
                            <span>Recolher</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4" />
                            <span>Ver Procedimento</span>
                          </>
                        )}
                      </button>

                      {/* Fast Copy Procedure */}
                      <button
                        type="button"
                        onClick={() => handleCopy(faq.procedure, 'Procedimento', faq.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50/90 hover:bg-indigo-100 border border-indigo-200/80 rounded-xl transition-colors cursor-pointer"
                        title="Copiar apenas os passos do procedimento"
                      >
                        {copiedFaqId === faq.id && copiedSection === 'Procedimento' ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopyFullFaq(faq)}
                        className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                        title="Copiar FAQ completa"
                      >
                        <FileText className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleOpenEditModal(faq)}
                        className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                        title="Editar FAQ"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteFaq(faq.id, faq.name)}
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                        title="Excluir FAQ"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Expandable Procedure & Details Content */}
                  {isExpanded && (
                    <div className="border-t border-slate-100 bg-slate-50/40 animate-fadeIn">
                      {/* Highlight Banner (if restricted or N2) */}
                      {faq.observacoes && (
                        <div className={`px-5 py-3 text-xs font-semibold border-b flex items-start gap-2.5 ${
                          faq.observacoes.includes('NÃO AUTORIZADO')
                            ? 'bg-rose-50 border-rose-200 text-rose-800'
                            : faq.observacoes.includes('N2')
                            ? 'bg-purple-50 border-purple-200 text-purple-800'
                            : 'bg-amber-50 border-amber-200 text-amber-900'
                        }`}>
                          <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                          <div>
                            <strong>Observação Importante:</strong> {faq.observacoes}
                          </div>
                        </div>
                      )}

                      <div className="p-5 space-y-4">
                        {/* Procedimento Passo a Passo */}
                        {faq.procedure ? (
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                                <Check className="h-4 w-4 text-emerald-600" />
                                Procedimento de Resolução / Instalação
                              </h4>
                              <span className="text-[11px] text-slate-400 font-medium">Passo a passo padronizado</span>
                            </div>
                            <div className="bg-white border border-slate-200/90 rounded-xl p-4 font-sans text-sm text-slate-800 whitespace-pre-line leading-relaxed selection:bg-indigo-100 shadow-2xs">
                              {faq.procedure}
                            </div>
                          </div>
                        ) : null}

                        {/* Informações e Orientações (Bullet points) */}
                        {faq.technicalInfo && (
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5 mb-2">
                              <Info className="h-4 w-4 text-indigo-500" />
                              Informações e Orientações Técnicas
                            </h4>
                            <div className="bg-white border border-slate-200/70 rounded-xl p-3.5 text-xs text-slate-700 whitespace-pre-line leading-relaxed shadow-2xs">
                              {faq.technicalInfo}
                            </div>
                          </div>
                        )}

                        {/* Permissão de Acesso / Licenciamento */}
                        {faq.permissaoAcesso && (
                          <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-900 leading-relaxed">
                            <strong className="block font-bold mb-1 flex items-center gap-1.5">
                              <ShieldAlert className="h-4 w-4 text-amber-700" />
                              Regras de Acesso e Licenciamento:
                            </strong>
                            <p className="whitespace-pre-line">{faq.permissaoAcesso}</p>
                          </div>
                        )}

                        {/* Credenciais de Acesso */}
                        {faq.credenciaisAcesso && (
                          <div className="p-3 bg-blue-50/80 border border-blue-200/80 rounded-xl text-xs text-blue-900">
                            <strong>Credenciais de Acesso:</strong> {faq.credenciaisAcesso}
                          </div>
                        )}

                        {/* Acesso e Utilização */}
                        {faq.acessoUtilizacao && (
                          <div className="p-3.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 shadow-2xs">
                            <strong className="block font-bold mb-1 text-slate-700">Validação / Acesso e Utilização:</strong>
                            <p className="whitespace-pre-line">{faq.acessoUtilizacao}</p>
                          </div>
                        )}

                        {/* Links Relacionados */}
                        {faq.relatedLinks && faq.relatedLinks.length > 0 && (
                          <div>
                            <h5 className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                              <ExternalLink className="h-3.5 w-3.5 text-indigo-500" />
                              Procedimentos e Links Relacionados
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {faq.relatedLinks.map((link, idx) => (
                                <a
                                  key={idx}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition-colors"
                                >
                                  <span>{link.title}</span>
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Anexos e Imagens */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Anexos (PDFs) */}
                          {faq.attachments && faq.attachments.length > 0 && (
                            <div>
                              <h5 className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                                <FileText className="h-3.5 w-3.5 text-rose-500" />
                                Anexos Oficiais (PDF)
                              </h5>
                              <div className="space-y-1.5">
                                {faq.attachments.map((att, idx) => (
                                  <a
                                    key={idx}
                                    href={att.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs text-slate-800 transition-colors group shadow-2xs"
                                  >
                                    <span className="font-medium group-hover:text-indigo-600 truncate">{att.name}</span>
                                    {att.size && <span className="text-[10px] text-slate-400 shrink-0 ml-2 font-mono bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">{att.size}</span>}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Referências Visuais */}
                          {faq.visualRefs && faq.visualRefs.length > 0 && (
                            <div>
                              <h5 className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                                <ImageIcon className="h-3.5 w-3.5 text-blue-500" />
                                Referências Visuais ({faq.visualRefs.length} capturas)
                              </h5>
                              <div className="flex flex-wrap gap-1.5">
                                {faq.visualRefs.map((img, idx) => (
                                  <a
                                    key={idx}
                                    href={img.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium transition-colors shadow-2xs"
                                  >
                                    <span>{img.title}</span>
                                    <ExternalLink className="h-2.5 w-2.5 text-slate-400" />
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Administrative Details Accordion Footer */}
                        {faq.adminInfo && (
                          <div className="bg-slate-100/70 rounded-xl p-3 text-[11px] text-slate-500 space-y-1 border border-slate-200/70">
                            {faq.adminInfo.caminho && (
                              <p><strong className="text-slate-700">Caminho:</strong> {faq.adminInfo.caminho}</p>
                            )}
                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                              {faq.adminInfo.criado && <span><strong>Criado em:</strong> {faq.adminInfo.criado}</span>}
                              {faq.adminInfo.alterado && <span><strong>Alterado em:</strong> {faq.adminInfo.alterado}</span>}
                              {faq.adminInfo.atualizadoEm && <span><strong>Conteúdo atualizado:</strong> {faq.adminInfo.atualizadoEm}</span>}
                              {faq.adminInfo.itemId && <span><strong>ItemID:</strong> {faq.adminInfo.itemId}</span>}
                            </div>
                            {faq.originalLink && (
                              <div className="pt-1">
                                <a
                                  href={faq.originalLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-semibold"
                                >
                                  Abrir FAQ original no sistema CAPRI/OTRS
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Bottom Collapse Button */}
                        <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400">
                            FAQ#{faq.faqNumber} • {faq.system}
                          </span>
                          <button
                            type="button"
                            onClick={() => toggleExpand(faq.id)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl shadow-2xs transition-colors cursor-pointer"
                          >
                            <ChevronUp className="h-3.5 w-3.5" />
                            Recolher procedimento
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal for Add / Edit FAQ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden my-auto animate-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-indigo-600" />
                {editingFaq ? `Editar FAQ#: ${editingFaq.faqNumber}` : 'Cadastrar Nova FAQ'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-200/50 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleSaveFaq} className="p-6 overflow-y-auto space-y-4 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Número FAQ# <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: 1000681"
                    value={formData.faqNumber || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, faqNumber: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Título / Pergunta <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: 7-ZIP - Instalação"
                    value={formData.name || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Software / Sistema
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Adobe Acrobat, 7-Zip"
                    value={formData.system || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, system: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Subcategoria
                  </label>
                  <select
                    value={formData.subCategory || 'INSTALAÇÃO/CONFIGURAÇÃO'}
                    onChange={(e) => setFormData(prev => ({ ...prev, subCategory: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  >
                    <option value="INSTALAÇÃO/CONFIGURAÇÃO">INSTALAÇÃO/CONFIGURAÇÃO</option>
                    <option value="ERRO">ERRO</option>
                    <option value="DÚVIDA">DÚVIDA</option>
                    <option value="SOLICITAÇÃO">SOLICITAÇÃO</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tipo de Chamado
                  </label>
                  <select
                    value={formData.type || 'Requisição de serviço'}
                    onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as any }))}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  >
                    <option value="Requisição de serviço">Requisição de serviço</option>
                    <option value="Incidente">Incidente</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Serviço
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Instalação de software"
                    value={formData.service || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Instalação do 7-ZIP"
                    value={formData.subject || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Procedimento de Resolução / Instalação (Passo a passo)
                </label>
                <textarea
                  rows={5}
                  placeholder="1. Execute o arquivo localizado em X:\...&#10;2. Clique em Sim.&#10;3. Insira o número do chamado."
                  value={formData.procedure || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, procedure: e.target.value }))}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-mono text-xs leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Informações e Orientações Técnicas (Tópicos)
                </label>
                <textarea
                  rows={3}
                  placeholder="• Programa utilizado para compactar e descompactar arquivos (.zip, .rar)..."
                  value={formData.technicalInfo || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, technicalInfo: e.target.value }))}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Observação Importante (ex: N2, Software Restrito)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: ATENDIMENTO REALIZADO PELO N2"
                    value={formData.observacoes || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, observacoes: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Link Original CAPRI / OTRS
                  </label>
                  <input
                    type="url"
                    placeholder="https://capri.senado.leg.br/..."
                    value={formData.originalLink || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, originalLink: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Regras de Permissão de Acesso / Licenciamento
                </label>
                <textarea
                  rows={2}
                  placeholder="Necessário solicitar autorização via Central de Serviços..."
                  value={formData.permissaoAcesso || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, permissaoAcesso: e.target.value }))}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs"
                />
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors"
                >
                  Salvar FAQ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Modal de Diretório Completo de Softwares & Sistemas */}
      <SoftwareDirectoryModal
        isOpen={isDirectoryModalOpen}
        onClose={() => setIsDirectoryModalOpen(false)}
        faqs={faqs}
        onSelectSystem={(systemName, group) => {
          setSelectedSoftwareGroup(group);
          setSelectedSystem(systemName);
        }}
      />
    </div>
  );
}
