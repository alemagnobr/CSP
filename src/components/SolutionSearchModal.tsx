import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  FileText, 
  BookOpen, 
  Info, 
  History, 
  Check, 
  Plus, 
  Copy, 
  Code,
  X,
  Search,
  ArrowRight,
  Pin
} from 'lucide-react';
import { ActiveTicket, AppSettings, Ticket } from '@/types';
import { cn } from '@/lib/utils';
import { SafeErrorBoundary } from './SafeErrorBoundary';

interface SolutionSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  description?: string;
  appSettings: AppSettings;
  finishedTickets?: Ticket[];
  ticket: ActiveTicket;
  onUpdate: (ticket: ActiveTicket) => void;
}

const STOPWORDS = new Set([
  'o', 'a', 'os', 'as', 'um', 'uma', 'uns', 'umas',
  'de', 'do', 'da', 'dos', 'das', 'em', 'no', 'na', 'nos', 'nas',
  'para', 'com', 'sem', 'por', 'pelo', 'pela', 'pelos', 'pelas',
  'que', 'se', 'ao', 'aos', 'ou', 'e', 'mas', 'como', 'mais',
  'foi', 'foram', 'ser', 'ter', 'esta', 'este', 'isso', 'isto',
  'nao', 'não', 'esta', 'está', 'ele', 'ela', 'eles', 'elas',
  'me', 'te', 'se', 'nos', 'vos', 'lhe', 'lhes', 'meu', 'minha',
  'meus', 'minhas', 'seu', 'sua', 'seus', 'suas', 'teu', 'tua',
  'sobre', 'entre', 'até', 'ate', 'num', 'numa', 'você', 'voce',
  'ele', 'ela', 'outra', 'outro', 'outros', 'outras', 'esta', 'está'
]);

interface SuggestionItem {
  id: string;
  type: 'faq' | 'procedure' | 'orientation' | 'information' | 'doubt' | 'ticket';
  title: string;
  subtitle: string;
  content: string;
  extraContent?: string;
  score: number;
  original: any;
}

type TabType = 'all' | 'faqs' | 'orientations' | 'procedures' | 'doubts' | 'informations' | 'tickets';

export function SolutionSearchModal({
  isOpen,
  onClose,
  description = '',
  appSettings,
  finishedTickets = [],
  ticket,
  onUpdate
}: SolutionSearchModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<SuggestionItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedHtmlId, setCopiedHtmlId] = useState<string | null>(null);

  const cleanDescription = (description || '').trim().toLowerCase();

  // Extração e pontuação sem IA protegida contra nulos
  const suggestions = useMemo(() => {
    if (!isOpen) return [];
    const searchTarget = (searchQuery || '').trim().toLowerCase();
    const isManualSearch = searchTarget.length >= 2;
    const activeQuery = isManualSearch ? searchTarget : cleanDescription;

    const words = activeQuery ? activeQuery.split(/[\s,.\-()]+/) : [];
    const keywords = words.filter(w => w.length >= 3 && !STOPWORDS.has(w));
    if (keywords.length === 0 && words.length > 0) {
      keywords.push(...words.filter(w => w.length >= 2));
    }

    const list: SuggestionItem[] = [];

    // 1. Processar FAQs
    if (Array.isArray(appSettings?.faqs)) {
      appSettings.faqs.forEach(faq => {
        if (!faq) return;
        const id = `faq-${faq.id || Math.random()}`;
        let score = 0;
        const faqNumClean = String(faq.faqNumber || '').toLowerCase();
        const nameClean = String(faq.name || '').toLowerCase();
        const techClean = String(faq.technicalInfo || '').toLowerCase();
        const procClean = String(faq.procedure || '').toLowerCase();
        const subjectClean = String(faq.subject || '').toLowerCase();
        const sysClean = String(faq.system || '').toLowerCase();

        if (activeQuery && nameClean.includes(activeQuery)) score += 180;
        if (activeQuery && faqNumClean && activeQuery.includes(faqNumClean)) score += 200;

        keywords.forEach(kw => {
          if (nameClean.includes(kw)) score += 40;
          if (faqNumClean && faqNumClean.includes(kw)) score += 50;
          if (techClean.includes(kw)) score += 15;
          if (procClean.includes(kw)) score += 15;
          if (subjectClean.includes(kw)) score += 20;
          if (sysClean.includes(kw)) score += 20;
        });

        if (!activeQuery) score = 1;

        if (score > 0) {
          list.push({
            id,
            type: 'faq',
            title: faq.faqNumber ? `FAQ# ${faq.faqNumber} — ${faq.name || 'Sem título'}` : (faq.name || 'FAQ sem título'),
            subtitle: faq.category ? `FAQ • ${faq.category}` : 'FAQ',
            content: faq.technicalInfo || faq.procedure || '',
            extraContent: faq.procedure || undefined,
            score,
            original: faq
          });
        }
      });
    }

    // 2. Processar Orientações
    if (Array.isArray(appSettings?.orientations)) {
      appSettings.orientations.forEach(ori => {
        if (!ori) return;
        const id = `ori-${ori.id || Math.random()}`;
        let score = 0;
        const nameClean = String(ori.name || '').toLowerCase();
        const descClean = String(ori.description || '').toLowerCase();
        const stepsClean = String(ori.steps || '').toLowerCase();

        if (activeQuery && nameClean.includes(activeQuery)) score += 150;

        keywords.forEach(kw => {
          if (nameClean.includes(kw)) score += 40;
          if (descClean.includes(kw)) score += 10;
          if (stepsClean.includes(kw)) score += 10;
        });

        if (!activeQuery) score = 1;

        if (score > 0) {
          list.push({
            id,
            type: 'orientation',
            title: `Orientação: ${ori.name || 'Sem título'}`,
            subtitle: ori.category ? `Orientação • ${ori.category}` : 'Orientação',
            content: ori.description || '',
            extraContent: ori.steps || undefined,
            score,
            original: ori
          });
        }
      });
    }

    // 3. Processar Procedimentos
    if (Array.isArray(appSettings?.procedures)) {
      appSettings.procedures.forEach(proc => {
        if (!proc) return;
        const id = `proc-${proc.id || Math.random()}`;
        let score = 0;
        const nameClean = String(proc.name || '').toLowerCase();
        const descClean = String(proc.description || '').toLowerCase();
        const stepsClean = String(proc.steps || '').toLowerCase();

        if (activeQuery && nameClean.includes(activeQuery)) score += 150;

        keywords.forEach(kw => {
          if (nameClean.includes(kw)) score += 40;
          if (descClean.includes(kw)) score += 10;
          if (stepsClean.includes(kw)) score += 10;
        });

        if (!activeQuery) score = 1;

        if (score > 0) {
          list.push({
            id,
            type: 'procedure',
            title: `Procedimento: ${proc.name || 'Sem título'}`,
            subtitle: proc.category ? `Procedimento • ${proc.category}` : 'Procedimento',
            content: proc.description || '',
            extraContent: proc.steps || undefined,
            score,
            original: proc
          });
        }
      });
    }

    // 4. Processar Dúvidas Técnicas
    if (Array.isArray(appSettings?.technicalDoubts)) {
      appSettings.technicalDoubts.forEach(doubt => {
        if (!doubt) return;
        const id = `doubt-${doubt.id || Math.random()}`;
        const isResolved = doubt.status === 'ESCLARECIDA';
        let score = 0;
        const titleClean = String(doubt.title || '').toLowerCase();
        const descClean = String(doubt.problemDescription || '').toLowerCase();
        const solClean = String(doubt.supervisorSolution || '').toLowerCase();

        if (activeQuery && titleClean.includes(activeQuery)) score += 180;
        if (activeQuery && solClean.includes(activeQuery)) score += 140;

        keywords.forEach(kw => {
          if (titleClean.includes(kw)) score += 50;
          if (solClean.includes(kw)) score += 35;
          if (descClean.includes(kw)) score += 15;
        });

        if (isResolved && score > 0) score += 20;
        if (!activeQuery) score = 1;

        if (score > 0) {
          list.push({
            id,
            type: 'doubt',
            title: doubt.title || 'Dúvida sem título',
            subtitle: isResolved ? `Dúvida Esclarecida • ${doubt.supervisorName || 'Supervisão'}` : 'Dúvida com Supervisão',
            content: doubt.problemDescription || '',
            extraContent: doubt.supervisorSolution || undefined,
            score,
            original: doubt
          });
        }
      });
    }

    // 5. Processar Informações Técnicas Gerais
    if (Array.isArray(appSettings?.informations)) {
      appSettings.informations.forEach(inf => {
        if (!inf) return;
        const id = `info-${inf.id || Math.random()}`;
        let score = 0;
        const titleClean = String(inf.title || '').toLowerCase();
        const contentClean = String(inf.content || '').toLowerCase();

        if (activeQuery && titleClean.includes(activeQuery)) score += 160;
        if (activeQuery && contentClean.includes(activeQuery)) score += 80;

        keywords.forEach(kw => {
          if (titleClean.includes(kw)) score += 45;
          if (contentClean.includes(kw)) score += 20;
        });

        if (!activeQuery) score = 1;

        if (score > 0) {
          list.push({
            id,
            type: 'information',
            title: inf.title || 'Informativo',
            subtitle: 'Informação Técnica',
            content: inf.content || '',
            score,
            original: inf
          });
        }
      });
    }

    // 6. Processar Chamados Anteriores
    if (Array.isArray(finishedTickets)) {
      finishedTickets.slice(0, 100).forEach(t => {
        if (!t) return;
        const id = `ticket-${t.id || Math.random()}`;
        let score = 0;
        const idClean = String(t.id || '').toLowerCase();
        const descClean = String(t.description || '').toLowerCase();
        const resClean = String(t.structuredResult || '').toLowerCase();
        const catClean = String(t.category || '').toLowerCase();

        if (activeQuery && idClean === activeQuery) score += 300;
        if (activeQuery && descClean.includes(activeQuery)) score += 100;

        keywords.forEach(kw => {
          if (descClean.includes(kw)) score += 25;
          if (resClean.includes(kw)) score += 15;
          if (catClean.includes(kw)) score += 10;
        });

        if (!activeQuery) score = 1;

        if (score > 0) {
          list.push({
            id,
            type: 'ticket',
            title: t.category || `Chamado #${t.id || 'Sem ID'}`,
            subtitle: t.category ? `Histórico • #${t.id}` : 'Histórico',
            content: t.description || '',
            extraContent: t.structuredResult || undefined,
            score,
            original: t
          });
        }
      });
    }

    return list.sort((a, b) => b.score - a.score);
  }, [cleanDescription, searchQuery, appSettings, finishedTickets]);

  const filteredSuggestions = useMemo(() => {
    if (activeTab === 'all') return suggestions;
    if (activeTab === 'faqs') return suggestions.filter(s => s.type === 'faq');
    if (activeTab === 'procedures') return suggestions.filter(s => s.type === 'procedure');
    if (activeTab === 'orientations') return suggestions.filter(s => s.type === 'orientation');
    if (activeTab === 'doubts') return suggestions.filter(s => s.type === 'doubt');
    if (activeTab === 'informations') return suggestions.filter(s => s.type === 'information');
    if (activeTab === 'tickets') return suggestions.filter(s => s.type === 'ticket');
    return suggestions;
  }, [suggestions, activeTab]);

  if (!isOpen) return null;

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text || '');
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyHtml = (html: string, id: string) => {
    navigator.clipboard.writeText(html || '');
    setCopiedHtmlId(id);
    setTimeout(() => setCopiedHtmlId(null), 2000);
  };

  const handleAppendToDescription = (content: string) => {
    const plainText = (content || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const current = ticket?.description || '';
    const updated = current.trim() ? `${current}\n\n${plainText}` : plainText;
    onUpdate({ ...ticket, description: updated });
  };

  const handleAssociateFaq = (faqId: string) => {
    if (!ticket) return;
    const isCurrentlyAssociated = ticket.associatedFaqId === faqId;
    const newAssociatedFaqId = isCurrentlyAssociated ? undefined : faqId;
    let newSelectedProcs = ticket.selectedProcedures || [];

    if (!isCurrentlyAssociated) {
      const selectedFaq = appSettings?.faqs?.find(f => f && f.id === faqId);
      if (selectedFaq) {
        const faqProcIds = selectedFaq.associatedProcedureIds || (selectedFaq.associatedProcedureId ? [selectedFaq.associatedProcedureId] : []);
        if (faqProcIds.length > 0) {
          newSelectedProcs = Array.from(new Set([...newSelectedProcs, ...faqProcIds]));
        }
      }
    }

    onUpdate({
      ...ticket,
      associatedFaqId: newAssociatedFaqId,
      selectedProcedures: newSelectedProcs
    });
  };

  const handleToggleProcedure = (procId: string) => {
    if (!ticket) return;
    const currentProcs = ticket.selectedProcedures || [];
    const exists = currentProcs.includes(procId);
    const updated = exists ? currentProcs.filter(id => id !== procId) : [...currentProcs, procId];
    onUpdate({
      ...ticket,
      selectedProcedures: updated
    });
  };

  return (
    <SafeErrorBoundary fallbackTitle="Ocorreu um erro ao carregar o localizador de soluções sem IA." onReset={onClose}>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
        <div 
          className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl h-[88vh] max-h-[800px] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Cabeçalho */}
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-100 text-blue-700">
                <Search className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800 leading-tight">
                  {selectedItem ? 'Detalhes da Solução' : 'Buscar Solução na Base de Conhecimento (Sem IA)'}
                </h3>
                <p className="text-xs text-slate-500">
                  {selectedItem ? selectedItem.title : 'Busca direta por palavras-chave em FAQs, Orientações, Dúvidas, Informativos e Chamados'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
              title="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Barra de Pesquisa Manual e Abas */}
          <div className="p-4 border-b border-slate-100 bg-white space-y-3">
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar por palavras-chave em FAQs, procedimentos, orientações ou chamados..."
                className="w-full pl-10 pr-9 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all text-slate-800 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
                  title="Limpar pesquisa"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Abas com contador */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {(['all', 'faqs', 'orientations', 'doubts', 'informations', 'procedures', 'tickets'] as TabType[]).map((tab) => {
                const count = tab === 'all'
                  ? suggestions.length
                  : suggestions.filter(s => {
                      if (tab === 'faqs') return s.type === 'faq';
                      if (tab === 'orientations') return s.type === 'orientation';
                      if (tab === 'procedures') return s.type === 'procedure';
                      if (tab === 'doubts') return s.type === 'doubt';
                      if (tab === 'informations') return s.type === 'information';
                      if (tab === 'tickets') return s.type === 'ticket';
                      return false;
                    }).length;

                const label = {
                  all: 'Tudo',
                  faqs: 'FAQs',
                  orientations: 'Orientações',
                  doubts: 'Dúvidas',
                  informations: 'Informativos',
                  procedures: 'Procedimentos',
                  tickets: 'Chamados'
                }[tab];

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab);
                      setSelectedItem(null);
                    }}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5",
                      activeTab === tab
                        ? "bg-slate-900 text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
                    )}
                  >
                    <span>{label}</span>
                    <span className={cn(
                      "text-[10px] px-1.5 py-0.2 rounded-full",
                      activeTab === tab ? "bg-slate-700 text-slate-200" : "bg-white text-slate-500 border border-slate-200"
                    )}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Corpo: Lista ou Detalhes */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50/60 min-h-0">
            {selectedItem ? (
              /* Visualização Detalhada */
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col h-full">
                <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {selectedItem.subtitle}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 mt-1">
                      {selectedItem.title}
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Voltar à lista
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      {selectedItem.type === 'ticket' ? 'Relato do Chamado' : 'Informações Técnicas'}
                    </h5>
                    <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {(selectedItem.content || '').includes('<') && (selectedItem.content || '').includes('>') ? (
                        <div dangerouslySetInnerHTML={{ __html: selectedItem.content }} className="quill-content text-slate-800" />
                      ) : (
                        selectedItem.content || <span className="text-slate-400 italic">Sem conteúdo registrado</span>
                      )}
                    </div>
                  </div>

                  {selectedItem.extraContent && (
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        {selectedItem.type === 'ticket' ? 'Solução Estruturada' : 'Procedimento / Passos / Orientação da Supervisão'}
                      </h5>
                      <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                        {(selectedItem.extraContent || '').includes('<') && (selectedItem.extraContent || '').includes('>') ? (
                          <div dangerouslySetInnerHTML={{ __html: selectedItem.extraContent }} className="quill-content text-slate-800" />
                        ) : (
                          selectedItem.extraContent
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Ações Rápidas no Detalhe */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {selectedItem.type === 'faq' && selectedItem.original?.id && (
                      <button
                        type="button"
                        onClick={() => handleAssociateFaq(selectedItem.original.id)}
                        className={cn(
                          "flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-lg cursor-pointer transition-all",
                          ticket?.associatedFaqId === selectedItem.original.id
                            ? "bg-purple-100 text-purple-800 border border-purple-300"
                            : "bg-purple-600 text-white hover:bg-purple-700"
                        )}
                      >
                        {ticket?.associatedFaqId === selectedItem.original.id ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        {ticket?.associatedFaqId === selectedItem.original.id ? 'FAQ Associada' : 'Associar FAQ'}
                      </button>
                    )}

                    {selectedItem.type === 'procedure' && selectedItem.original?.id && (
                      <button
                        type="button"
                        onClick={() => handleToggleProcedure(selectedItem.original.id)}
                        className={cn(
                          "flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-lg cursor-pointer transition-all",
                          (ticket?.selectedProcedures || []).includes(selectedItem.original.id)
                            ? "bg-blue-100 text-blue-800 border border-blue-300"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        )}
                      >
                        {(ticket?.selectedProcedures || []).includes(selectedItem.original.id) ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        {(ticket?.selectedProcedures || []).includes(selectedItem.original.id) ? 'Procedimento Marcado' : 'Marcar Procedimento'}
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => handleAppendToDescription(selectedItem.content)}
                      className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg cursor-pointer transition-all"
                    >
                      <Plus className="h-4 w-4" />
                      Mesclar na Descrição
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {selectedItem.extraContent && (
                      <button
                        type="button"
                        onClick={() => handleCopyHtml(selectedItem.extraContent || selectedItem.content, selectedItem.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-blue-600 hover:text-blue-800 bg-white hover:bg-blue-50 border border-blue-200 rounded-lg text-xs font-bold transition-all cursor-pointer"
                      >
                        {copiedHtmlId === selectedItem.id ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Code className="h-3.5 w-3.5" />}
                        {copiedHtmlId === selectedItem.id ? 'HTML Copiado!' : 'Copiar HTML'}
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => handleCopyText(selectedItem.content, selectedItem.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold transition-all cursor-pointer"
                    >
                      {copiedId === selectedItem.id ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                      {copiedId === selectedItem.id ? 'Copiado!' : 'Copiar Texto'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Lista de Itens */
              <div className="space-y-2.5">
                {filteredSuggestions.length === 0 ? (
                  <div className="py-16 text-center">
                    <div className="inline-flex p-3 rounded-full bg-slate-100 text-slate-400 mb-3">
                      <Search className="h-6 w-6" />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-700">Nenhuma solução encontrada</h4>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                      Tente outras palavras-chave ou digite termos específicos da solicitação no campo de pesquisa acima.
                    </p>
                  </div>
                ) : (
                  filteredSuggestions.map((item) => {
                    const plainText = (item.content || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
                    const isFaqAssoc = item.type === 'faq' && item.original?.id && ticket?.associatedFaqId === item.original.id;
                    const isProcSelected = item.type === 'procedure' && item.original?.id && (ticket?.selectedProcedures || []).includes(item.original.id);

                    const badgeColor = {
                      faq: 'bg-purple-50 text-purple-700 border-purple-200',
                      procedure: 'bg-blue-50 text-blue-700 border-blue-200',
                      orientation: 'bg-amber-50 text-amber-700 border-amber-200',
                      doubt: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                      ticket: 'bg-slate-100 text-slate-700 border-slate-200',
                      information: 'bg-cyan-50 text-cyan-700 border-cyan-200'
                    }[item.type];

                    return (
                      <div
                        key={item.id}
                        className={cn(
                          "bg-white rounded-xl border p-4 transition-all hover:shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 group cursor-pointer",
                          isFaqAssoc || isProcSelected ? "border-blue-300 ring-1 ring-blue-300/50" : "border-slate-200 hover:border-blue-300"
                        )}
                        onClick={() => setSelectedItem(item)}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className={cn("text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border", badgeColor)}>
                              {item.subtitle}
                            </span>
                            {isFaqAssoc && (
                              <span className="text-[10px] font-bold bg-purple-600 text-white px-2 py-0.5 rounded-full">
                                Associada
                              </span>
                            )}
                            {isProcSelected && (
                              <span className="text-[10px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full">
                                Selecionado
                              </span>
                            )}
                          </div>
                          <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h4>
                          {plainText && (
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                              {plainText}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-end md:self-center" onClick={(e) => e.stopPropagation()}>
                          <button
                            type="button"
                            onClick={() => setSelectedItem(item)}
                            className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                          >
                            Ver Detalhes
                          </button>

                          <button
                            type="button"
                            onClick={() => handleAppendToDescription(item.content)}
                            className="px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
                            title="Inserir texto na Descrição Livre"
                          >
                            Usar
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>

          {/* Rodapé do Modal */}
          <div className="px-6 py-3 border-t border-slate-100 bg-white flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Dica: Clique em <strong className="text-slate-600">Ver Detalhes</strong> para conferir o procedimento completo ou copiar partes específicas.
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </SafeErrorBoundary>
  );
}
