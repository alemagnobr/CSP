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
  Filter
} from 'lucide-react';
import { AppSettings, FAQ, FAQAttachment, FAQVisualRef } from '@/types';
import { initialFaqs } from '@/data/defaultFaqs';
import { cleanFaq, stripAndFormatHtml } from '@/lib/utils';
import { SoftwareGroupType, SOFTWARE_GROUPS, categorizeSystem } from '@/lib/softwareCatalog';
import { SoftwareGroupSelector } from '@/components/SoftwareGroupSelector';
import { SoftwareDirectoryModal } from '@/components/SoftwareDirectoryModal';

interface FaqPanelProps {
  appSettings: AppSettings;
  onUpdateSettings: (settings: AppSettings) => void;
  tickets?: any;
}

export function FaqPanel({ appSettings, onUpdateSettings }: FaqPanelProps) {
  // Ensure faqs list is strictly the 15 official FAQs, cleaned of HTML tags
  const faqs: FAQ[] = useMemo(() => {
    const list = (appSettings.faqs && appSettings.faqs.length > 0) ? appSettings.faqs : initialFaqs;
    const officialNumbers = new Set(initialFaqs.map(f => f.faqNumber));
    const filtered = list.filter(f => f.faqNumber !== '1000601' && (officialNumbers.has(f.faqNumber) || f.id.startsWith('faq-user-')));
    return (filtered.length > 0 ? filtered : initialFaqs).map(cleanFaq);
  }, [appSettings.faqs]);

  // Search and Filter States
  const [searchTerm, setSearchTerm] = useState('');
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

  // Statistics
  const stats = useMemo(() => {
    const total = faqs.length;
    const instalacaoCount = faqs.filter(f => f.subCategory?.toUpperCase().includes('INSTAL')).length;
    const erroCount = faqs.filter(f => f.subCategory?.toUpperCase().includes('ERRO')).length;
    const restritoCount = faqs.filter(f => f.observacoes?.toLowerCase().includes('restrito') || f.observacoes?.toLowerCase().includes('não autorizado')).length;
    return { total, instalacaoCount, erroCount, restritoCount };
  }, [faqs]);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      // Group match
      if (selectedSoftwareGroup !== 'TODOS') {
        const group = categorizeSystem(faq.system, faq.category, faq.subject);
        if (group !== selectedSoftwareGroup) return false;
      }

      // Search text match
      const search = searchTerm.toLowerCase().trim();
      const matchesSearch = !search || (
        (faq.faqNumber || '').toLowerCase().includes(search) ||
        (faq.name || '').toLowerCase().includes(search) ||
        (faq.system || '').toLowerCase().includes(search) ||
        (faq.subject || '').toLowerCase().includes(search) ||
        (faq.service || '').toLowerCase().includes(search) ||
        (faq.technicalInfo || '').toLowerCase().includes(search) ||
        (faq.procedure || '').toLowerCase().includes(search) ||
        (faq.observacoes || '').toLowerCase().includes(search) ||
        (faq.adminInfo?.palavrasChave || '').toLowerCase().includes(search)
      );

      // SubCategory match
      const matchesSubCategory = selectedSubCategory === 'TODOS' || 
        (selectedSubCategory === 'INSTALACAO' && faq.subCategory?.toUpperCase().includes('INSTAL')) ||
        (selectedSubCategory === 'ERRO' && faq.subCategory?.toUpperCase().includes('ERRO'));

      // Type match
      const matchesType = selectedType === 'TODOS' || faq.type === selectedType;

      // System match
      const matchesSystem = selectedSystem === 'TODOS' || faq.system === selectedSystem;

      return matchesSearch && matchesSubCategory && matchesType && matchesSystem;
    });
  }, [faqs, searchTerm, selectedSubCategory, selectedType, selectedSystem, selectedSoftwareGroup]);

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

    const userOnlyFaqs = updatedList.filter(item => item.id?.startsWith('faq-user-'));
    onUpdateSettings({
      ...appSettings,
      userFaqs: userOnlyFaqs,
      faqs: updatedList.map(cleanFaq)
    });

    setIsModalOpen(false);
  };

  // Delete FAQ
  const handleDeleteFaq = (id: string, name: string) => {
    if (window.confirm(`Deseja realmente remover a FAQ "${name}"?`)) {
      const updatedList = faqs.filter(item => item.id !== id);
      const userOnlyFaqs = updatedList.filter(item => item.id?.startsWith('faq-user-'));
      onUpdateSettings({
        ...appSettings,
        userFaqs: userOnlyFaqs,
        faqs: updatedList
      });
      showToast('FAQ removida.');
    }
  };

  // Restore Default FAQs (Strictly the official FAQs)
  const handleRestoreDefaults = () => {
    if (window.confirm(`Deseja restaurar a base oficial com todas as ${initialFaqs.length} FAQs do Senado? As FAQs padrões serão recarregadas e as personalizadas serão desfeitas.`)) {
      onUpdateSettings({
        ...appSettings,
        userFaqs: [],
        faqs: initialFaqs
      });
      showToast(`Base restaurada com as ${initialFaqs.length} FAQs oficiais.`);
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
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsDirectoryModalOpen(true)}
              title="Abrir diretório completo com todos os softwares e sistemas"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors border border-indigo-200 shadow-xs"
            >
              <Grid className="h-4 w-4 text-indigo-600" />
              Diretório de Softwares & Sistemas
            </button>
            <button
              onClick={handleRestoreDefaults}
              title="Restaurar lista com as 15 FAQs padrão"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            >
              <RotateCcw className="h-4 w-4" />
              Restaurar Padrões
            </button>
            <button
              onClick={handleOpenAddModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm hover:shadow transition-all"
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

        {/* Metric summary counters */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex items-center gap-3">
            <div className="p-2.5 bg-blue-100/60 rounded-lg text-blue-700">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total de FAQs</p>
              <p className="text-xl font-extrabold text-slate-800">{stats.total}</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex items-center gap-3">
            <div className="p-2.5 bg-emerald-100/60 rounded-lg text-emerald-700">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Instalação / Config.</p>
              <p className="text-xl font-extrabold text-slate-800">{stats.instalacaoCount}</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex items-center gap-3">
            <div className="p-2.5 bg-amber-100/60 rounded-lg text-amber-700">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Erros & Incidentes</p>
              <p className="text-xl font-extrabold text-slate-800">{stats.erroCount}</p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex items-center gap-3">
            <div className="p-2.5 bg-purple-100/60 rounded-lg text-purple-700">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Restritos / N2</p>
              <p className="text-xl font-extrabold text-slate-800">{stats.restritoCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-slate-200 px-6 py-3.5 shadow-sm space-y-3">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          {/* Top Line: Full-width high-contrast search input */}
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
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 hover:text-slate-700 bg-slate-200 hover:bg-slate-300 rounded-lg px-2.5 py-1 transition-colors"
              >
                Limpar
              </button>
            ) : (
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-medium text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded">
                Ctrl + K
              </span>
            )}
          </div>

          {/* Bottom Line: Responsive Filters and Selects */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2.5">
              {/* SubCategory Filter */}
              <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1">
                <button
                  onClick={() => setSelectedSubCategory('TODOS')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${selectedSubCategory === 'TODOS' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Todas Categorias
                </button>
                <button
                  onClick={() => setSelectedSubCategory('INSTALACAO')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${selectedSubCategory === 'INSTALACAO' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Instalação
                </button>
                <button
                  onClick={() => setSelectedSubCategory('ERRO')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${selectedSubCategory === 'ERRO' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Erros
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
        {filteredFaqs.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-12 text-center shadow-sm">
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
              }}
              className="px-4 py-2 text-sm font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
            >
              Limpar todos os filtros
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>Exibindo <strong>{filteredFaqs.length}</strong> de <strong>{faqs.length}</strong> FAQs</span>
            </div>

            {filteredFaqs.map((faq) => {
              const isExpanded = expandedFaqIds[faq.id] ?? false;
              const isInstalacao = faq.subCategory?.toUpperCase().includes('INSTAL') || faq.service?.toLowerCase().includes('instalação');
              const isRestrito = faq.observacoes?.toLowerCase().includes('restrito') || faq.observacoes?.toLowerCase().includes('não autorizado') || faq.observacoes?.toLowerCase().includes('n2');

              return (
                <div 
                  key={faq.id}
                  className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border-b border-slate-100">
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* FAQ Number Pill */}
                        <button
                          onClick={() => handleCopy(faq.faqNumber, 'Número da FAQ', faq.id)}
                          title="Clique para copiar o número da FAQ"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition-colors"
                        >
                          <span>FAQ#: {faq.faqNumber}</span>
                          {copiedFaqId === faq.id && copiedSection === 'Número da FAQ' ? (
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="h-3.5 w-3.5 text-indigo-400" />
                          )}
                        </button>

                        {/* Software System Badge */}
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                          <Tag className="h-3 w-3 text-slate-400" />
                          {faq.system || 'Software'}
                        </span>

                        {/* Subcategory Badge */}
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold border ${
                          isInstalacao 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}>
                          {isInstalacao ? <Wrench className="h-3 w-3" /> : <AlertTriangle className="h-3 w-3" />}
                          {faq.subCategory || (isInstalacao ? 'INSTALAÇÃO' : 'ERRO')}
                        </span>

                        {/* Type Badge */}
                        {faq.type && (
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium ${
                            faq.type === 'Incidente'
                              ? 'bg-purple-50 text-purple-700 border border-purple-200'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}>
                            {faq.type}
                          </span>
                        )}

                        {/* Restrito / N2 Warning Badge */}
                        {isRestrito && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                            <ShieldAlert className="h-3 w-3" />
                            {faq.observacoes?.includes('N2') ? 'ATENDIMENTO N2' : 'RESTRITO / AUTORIZAÇÃO'}
                          </span>
                        )}
                      </div>

                      {/* FAQ Title */}
                      <h2 className="text-lg font-bold text-slate-900 tracking-tight">
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
                    </div>

                    {/* Header Action Buttons */}
                    <div className="flex items-center gap-2 self-end md:self-center">
                      <button
                        onClick={() => handleCopy(faq.procedure, 'Procedimento', faq.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition-colors"
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
                            <span>Copiar Procedimento</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => handleCopyFullFaq(faq)}
                        className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Copiar FAQ completa"
                      >
                        <FileText className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() => handleOpenEditModal(faq)}
                        className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Editar FAQ"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() => handleDeleteFaq(faq.id, faq.name)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Excluir FAQ"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() => toggleExpand(faq.id)}
                        className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                        title={isExpanded ? "Recolher detalhes" : "Expandir detalhes"}
                      >
                        {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Highlight Banner (if restricted or N2) */}
                  {faq.observacoes && (
                    <div className={`px-5 py-2.5 text-xs font-semibold border-b flex items-start gap-2 ${
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

                  {/* Primary Fast Procedure View (Visible always or expanded) */}
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
                        <div className="bg-slate-50 border border-slate-200/90 rounded-lg p-4 font-sans text-sm text-slate-800 whitespace-pre-line leading-relaxed selection:bg-indigo-100">
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
                        <div className="bg-slate-50/70 border border-slate-200/70 rounded-lg p-3.5 text-xs text-slate-700 whitespace-pre-line leading-relaxed">
                          {faq.technicalInfo}
                        </div>
                      </div>
                    )}

                    {/* Details section visible when expanded */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-slate-100 space-y-4 animate-in fade-in duration-150">
                        {/* Permissão de Acesso / Licenciamento */}
                        {faq.permissaoAcesso && (
                          <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-lg text-xs text-amber-900 leading-relaxed">
                            <strong className="block font-bold mb-1 flex items-center gap-1.5">
                              <ShieldAlert className="h-4 w-4 text-amber-700" />
                              Regras de Acesso e Licenciamento:
                            </strong>
                            <p className="whitespace-pre-line">{faq.permissaoAcesso}</p>
                          </div>
                        )}

                        {/* Credenciais de Acesso */}
                        {faq.credenciaisAcesso && (
                          <div className="p-3 bg-blue-50/80 border border-blue-200/80 rounded-lg text-xs text-blue-900">
                            <strong>Credenciais de Acesso:</strong> {faq.credenciaisAcesso}
                          </div>
                        )}

                        {/* Acesso e Utilização */}
                        {faq.acessoUtilizacao && (
                          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800">
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
                                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-slate-800 transition-colors group"
                                  >
                                    <span className="font-medium group-hover:text-indigo-600 truncate">{att.name}</span>
                                    {att.size && <span className="text-[10px] text-slate-400 shrink-0 ml-2 font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">{att.size}</span>}
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
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
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
                          <div className="bg-slate-100/70 rounded-lg p-3 text-[11px] text-slate-500 space-y-1 border border-slate-200/70">
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
                      </div>
                    )}
                  </div>
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
