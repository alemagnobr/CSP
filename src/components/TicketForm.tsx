/**
 * TicketForm Component
 * 
 * Provides ticket editing, timer tracking, AI-powered summary structuring,
 * predefined FAQ/Solution suggestions, and interactive procedure/verification checklists.
 * 
 * Features:
 * - Drag and Drop (using native HTML5 Drag & Drop) to reorder procedures and verifications.
 * - Live countdown timer and SLA status display.
 * - Auto-saving to Firestore and integration with Gemini / OpenRouter API.
 */
import { Play, Pause, Copy, Trash2, Sparkles, Search, Save, Loader2, X, Edit3, Info, Plus, Check, AlertTriangle, ArrowLeft, ChevronDown, ChevronUp, GripVertical } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { ActiveTicket, AppSettings, Ticket } from '@/types';
import { cn } from '@/lib/utils';
import { generateTicketStructure, searchSolutions, generateProfessionalTitle, formatAiError } from '@/lib/gemini';
import { SmartSuggestions } from './SmartSuggestions';

interface TicketFormProps {
  key?: React.Key;
  ticket: ActiveTicket;
  onUpdate: (ticket: ActiveTicket) => void;
  onFinish: (ticket: ActiveTicket) => void;
  onDuplicate: (ticket: ActiveTicket) => void;
  onUpdateSettings: (settings: AppSettings) => void;
  isActive: boolean;
  appSettings: AppSettings;
  onNavigate?: (route: string) => void;
  finishedTickets: Ticket[];
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export function TicketForm({ ticket, onUpdate, onFinish, onDuplicate, onUpdateSettings, isActive, appSettings, onNavigate, finishedTickets }: TicketFormProps) {
  const [isPaused, setIsPaused] = useState(ticket.isPaused || false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState<string | null>(ticket.structuredResult || null);
  const [aiViewMode, setAiViewMode] = useState<'preview' | 'code'>('preview');

  const [draggedProcIndex, setDraggedProcIndex] = useState<number | null>(null);
  const [draggedVerifIndex, setDraggedVerifIndex] = useState<number | null>(null);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [showPredefinedSolutions, setShowPredefinedSolutions] = useState(false);
  const [isSearchingSolution, setIsSearchingSolution] = useState(false);
  const [searchedSolution, setSearchedSolution] = useState<{
    faqs: any[];
    procedures: any[];
    orientations: any[];
    tickets: Ticket[];
  } | null>(null);
  const [selectedSolutionItem, setSelectedSolutionItem] = useState<{ type: string; item: any } | null>(null);
  const [copiedResult, setCopiedResult] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isGeneratingTitle, setIsGeneratingTitle] = useState(false);
  const ticketIdInputRef = useRef<HTMLInputElement>(null);

  // Direct Verifications and Procedures Creation/Deletion State
  const [isCreatingVerif, setIsCreatingVerif] = useState(false);
  const [newVerifName, setNewVerifName] = useState('');
  const [newVerifDesc, setNewVerifDesc] = useState('');

  const [isCreatingProc, setIsCreatingProc] = useState(false);
  const [newProcName, setNewProcName] = useState('');
  const [newProcDesc, setNewProcDesc] = useState('');
  const [newProcColor, setNewProcColor] = useState('#3b82f6');

  const handleAddVerificationInForm = () => {
    if (newVerifName.trim() && newVerifDesc.trim()) {
      const newVerif = {
        id: Date.now().toString(),
        name: newVerifName.trim(),
        description: newVerifDesc.trim()
      };
      onUpdateSettings({
        ...appSettings,
        verifications: [...(appSettings.verifications || []), newVerif]
      });
      setNewVerifName('');
      setNewVerifDesc('');
      setIsCreatingVerif(false);
    }
  };

  const handleRemoveVerificationInForm = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const updatedVerifs = (appSettings.verifications || []).filter(v => v.id !== id);
    onUpdateSettings({
      ...appSettings,
      verifications: updatedVerifs
    });
    if (ticket.selectedVerifications?.includes(id)) {
      handleChange('selectedVerifications', ticket.selectedVerifications.filter(vId => vId !== id));
    }
  };

  const handleAddProcedureInForm = () => {
    if (newProcName.trim() && newProcDesc.trim()) {
      const newProc = {
        id: Date.now().toString(),
        name: newProcName.trim(),
        description: newProcDesc.trim(),
        color: newProcColor
      };
      onUpdateSettings({
        ...appSettings,
        procedures: [...(appSettings.procedures || []), newProc]
      });
      setNewProcName('');
      setNewProcDesc('');
      setNewProcColor('#3b82f6');
      setIsCreatingProc(false);
    }
  };

  const handleRemoveProcedureInForm = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const updatedProcs = (appSettings.procedures || []).filter(p => p.id !== id);
    onUpdateSettings({
      ...appSettings,
      procedures: updatedProcs
    });
    if (ticket.selectedProcedures?.includes(id)) {
      handleChange('selectedProcedures', ticket.selectedProcedures.filter(pId => pId !== id));
    }
  };

  const handleCopyResult = () => {
    if (aiResult) {
      navigator.clipboard.writeText(aiResult);
      setCopiedResult(true);
      setTimeout(() => setCopiedResult(false), 2000);
    }
  };

  const ticketRef = useRef(ticket);
  const onUpdateRef = useRef(onUpdate);

  useEffect(() => {
    setIsPaused(ticket.isPaused || false);
    setAiResult(ticket.structuredResult || null);
    setIsAddingCategory(false);
    setNewCategory('');
    setAiViewMode('preview');
  }, [ticket.tabId || ticket.id]);

  useEffect(() => {
    ticketRef.current = ticket;
  }, [ticket]);

  useEffect(() => {
    onUpdateRef.current = onUpdate;
  }, [onUpdate]);

  // Timer logic
  const lastTickRef = useRef(Date.now());

  useEffect(() => {
    if (!isActive || isPaused) {
      lastTickRef.current = Date.now();
      return;
    }

    lastTickRef.current = Date.now();
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.floor((now - lastTickRef.current) / 1000);
      if (diff > 0) {
        lastTickRef.current = now;
        onUpdateRef.current({ ...ticketRef.current, durationSeconds: ticketRef.current.durationSeconds + diff });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const handleChange = (field: keyof ActiveTicket, value: any) => {
    if (field === 'associatedFaqId' && value) {
      const selectedFaq = appSettings.faqs?.find(f => f.id === value);
      if (selectedFaq) {
        const faqProcIds = selectedFaq.associatedProcedureIds || (selectedFaq.associatedProcedureId ? [selectedFaq.associatedProcedureId] : []);
        if (faqProcIds.length > 0) {
          const currentProcs = ticket.selectedProcedures || [];
          const mergedProcs = Array.from(new Set([...currentProcs, ...faqProcIds]));
          onUpdate({
            ...ticket,
            associatedFaqId: value,
            selectedProcedures: mergedProcs
          });
          return;
        }
      }
    }
    onUpdate({ ...ticket, [field]: value });
  };

  const handleMoveProcedure = (index: number, direction: 'up' | 'down') => {
    const list = [...(appSettings.procedures || [])];
    if (direction === 'up' && index > 0) {
      const temp = list[index];
      list[index] = list[index - 1];
      list[index - 1] = temp;
    } else if (direction === 'down' && index < list.length - 1) {
      const temp = list[index];
      list[index] = list[index + 1];
      list[index + 1] = temp;
    }
    onUpdateSettings({ ...appSettings, procedures: list });
  };

  const handleDragOverProc = (e: React.DragEvent, overIndex: number) => {
    e.preventDefault();
    if (draggedProcIndex === null || draggedProcIndex === overIndex) return;
    
    const list = [...(appSettings.procedures || [])];
    const draggedItem = list[draggedProcIndex];
    list.splice(draggedProcIndex, 1);
    list.splice(overIndex, 0, draggedItem);
    
    setDraggedProcIndex(overIndex);
    onUpdateSettings({ ...appSettings, procedures: list });
  };

  const handleMoveVerification = (index: number, direction: 'up' | 'down') => {
    const list = [...(appSettings.verifications || [])];
    if (direction === 'up' && index > 0) {
      const temp = list[index];
      list[index] = list[index - 1];
      list[index - 1] = temp;
    } else if (direction === 'down' && index < list.length - 1) {
      const temp = list[index];
      list[index] = list[index + 1];
      list[index + 1] = temp;
    }
    onUpdateSettings({ ...appSettings, verifications: list });
  };

  const handleDragOverVerif = (e: React.DragEvent, overIndex: number) => {
    e.preventDefault();
    if (draggedVerifIndex === null || draggedVerifIndex === overIndex) return;
    
    const list = [...(appSettings.verifications || [])];
    const draggedItem = list[draggedVerifIndex];
    list.splice(draggedVerifIndex, 1);
    list.splice(overIndex, 0, draggedItem);
    
    setDraggedVerifIndex(overIndex);
    onUpdateSettings({ ...appSettings, verifications: list });
  };

  const handleFinalizeIA = async () => {
    if (!ticket.description.trim()) return;
    setAiError(null);
    
    const provider = appSettings.aiProvider || 'gemini';
    const apiKey = provider === 'openrouter' ? appSettings.openRouterApiKey : appSettings.geminiApiKey;

    if (!apiKey) {
      setAiError(`Por favor, configure sua chave da API ${provider === 'openrouter' ? 'OpenRouter' : 'Gemini'} nas Configurações primeiro.`);
      return;
    }
    
    setIsAiLoading(true);
    try {
      // Preserve selection order by mapping over the selected arrays instead of filtering the source arrays
      const selectedProcs = (ticket.selectedProcedures || [])
        .map(id => appSettings.procedures?.find(p => p.id === id))
        .filter(Boolean) as typeof appSettings.procedures;
        
      const selectedVerifs = (ticket.selectedVerifications || [])
        .map(id => appSettings.verifications?.find(v => v.id === id))
        .filter(Boolean) as typeof appSettings.verifications;
      
      const resultText = await generateTicketStructure(apiKey, provider, { 
        description: ticket.description,
        procedures: selectedProcs.map(p => ({ name: p.name, description: p.description })),
        verifications: selectedVerifs.map(v => ({ name: v.name, description: v.description })),
        problemSolved: ticket.problemSolved,
        clientValidated: ticket.clientValidated,
        isEscalated: ticket.isEscalated,
        isFormatMicro: ticket.isFormatMicro,
        formatMicroDetails: ticket.formatMicroDetails,
        escalationDetails: ticket.escalationDetails,
        closingText: appSettings.closingTextEnabled ? appSettings.closingText : '',
        aiGuidelines: appSettings.aiGuidelines,
        aiPromptStandard: appSettings.aiPromptStandard,
        aiPromptEscalated: appSettings.aiPromptEscalated,
        openRouterModel: appSettings.openRouterModel
      });
      
      if (resultText) {
        let finalResult = resultText.trim();
        
        // Remove markdown formatting if present
        finalResult = finalResult.replace(/^```html\s*/i, '').replace(/```$/i, '').trim();

        // Ensure it starts at the first <div (strips out any prepended hallucinations)
        if (!ticket.isEscalated) {
          const firstDivIndex = finalResult.indexOf('<div');
          if (firstDivIndex > 0) {
            finalResult = finalResult.substring(firstDivIndex);
          }
        } else {
           // For escalation, find the first <!-- ENCAMINHAMENTO ou <div
           const firstDivIndex = finalResult.indexOf('<');
           if (firstDivIndex > 0) {
             finalResult = finalResult.substring(firstDivIndex);
           }
        }
        
        if (!ticket.isEscalated && appSettings.closingTextEnabled && appSettings.closingText.trim()) {
          const closingHtml = `\n<!--{cke_protected}{C}%3C!%2D%2D%20ASSINATURA%20%2D%2D%3E-->\n<div style="margin-top:8px; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; background:#ffffff">\n<div>${appSettings.closingText.trim().replace(/\n/g, '<br>')}</div>\n</div>`;
          if (finalResult.trim().endsWith('</div>')) {
            const lastDivIndex = finalResult.lastIndexOf('</div>');
            finalResult = finalResult.substring(0, lastDivIndex) + closingHtml + '\n</div>';
          } else {
            finalResult += '\n\n' + closingHtml;
          }
        }
        setAiResult(finalResult);
        // Cronômetro continua correndo durante a visualização da tela de finalização
      }
    } catch (error) {
      console.error('Failed to structure ticket:', error);
      setAiError(formatAiError((error as Error).message, provider));
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSearchSolution = async () => {
    if (!ticket.description.trim()) return;
    setAiError(null);

    const provider = appSettings.aiProvider || 'gemini';
    const apiKey = provider === 'openrouter' ? appSettings.openRouterApiKey : appSettings.geminiApiKey;

    if (!apiKey) {
      setAiError(`Por favor, configure sua chave da API ${provider === 'openrouter' ? 'OpenRouter' : 'Gemini'} nas Configurações primeiro.`);
      return;
    }
    
    setIsSearchingSolution(true);
    setSearchedSolution(null);
    setSelectedSolutionItem(null);
    try {
      const ticketsToSearch = finishedTickets.slice(0, 50);
      const resultJson = await searchSolutions(apiKey, provider, {
        description: ticket.description,
        faqs: appSettings.faqs || [],
        procedures: appSettings.procedures || [],
        orientations: appSettings.orientations || [],
        tickets: ticketsToSearch.map(t => ({
          id: t.id,
          description: t.description,
          structuredResult: t.structuredResult,
          category: t.category,
          status: t.status
        })),
        openRouterModel: appSettings.openRouterModel
      });
      
      if (resultJson) {
        const faqsMatched = (appSettings.faqs || []).filter(f => (resultJson.faqs || []).includes(f.id));
        const proceduresMatched = (appSettings.procedures || []).filter(p => (resultJson.procedures || []).includes(p.id));
        const orientationsMatched = (appSettings.orientations || []).filter(o => (resultJson.orientations || []).includes(o.id));
        const ticketsMatched = ticketsToSearch.filter(t => (resultJson.tickets || []).includes(t.id));
        
        setSearchedSolution({
          faqs: faqsMatched,
          procedures: proceduresMatched,
          orientations: orientationsMatched,
          tickets: ticketsMatched
        });
        setIsPaused(true); // Pause timer while reviewing
      }
    } catch (error) {
      console.error('Failed to search solutions:', error);
      setAiError(formatAiError((error as Error).message, provider));
    } finally {
      setIsSearchingSolution(false);
    }
  };

  const handleEditResult = () => {
    if (aiResult) {
      onUpdate({ ...ticket, description: aiResult });
      setAiResult(null);
      setIsPaused(false); // Resume timer
    }
  };

  const handleSaveResult = () => {
    if (!ticket.id || !ticket.id.trim()) {
      setValidationError('É necessário colocar o número do chamado antes de salvar.');
      setAiResult(null);
      setTimeout(() => ticketIdInputRef.current?.focus(), 100);
      return;
    }
    if (aiResult) {
      onFinish({ ...ticket, description: ticket.description, structuredResult: aiResult });
      setAiResult(null);
    }
  };

  const handleSaveWithValidation = () => {
    if (!ticket.id || !ticket.id.trim()) {
      setValidationError('É necessário colocar o número do chamado antes de salvar.');
      ticketIdInputRef.current?.focus();
      return;
    }
    setValidationError(null);
    onFinish(ticket);
  };

  const handleGenerateTitle = async () => {
    setAiError(null);
    const provider = appSettings.aiProvider || 'gemini';
    const apiKey = provider === 'openrouter' ? appSettings.openRouterApiKey : appSettings.geminiApiKey;

    if (!apiKey) {
      setAiError(`Por favor, configure sua chave da API ${provider === 'openrouter' ? 'OpenRouter' : 'Gemini'} nas Configurações primeiro.`);
      return;
    }

    setIsGeneratingTitle(true);
    try {
      const generated = await generateProfessionalTitle(apiKey, provider, {
        currentTitle: ticket.title || '',
        description: ticket.description || '',
        category: ticket.category || '',
        openRouterModel: appSettings.openRouterModel
      });

      if (generated) {
        handleChange('title', generated);
      }
    } catch (error) {
      console.error('Failed to generate title:', error);
      setAiError(formatAiError((error as Error).message, provider));
    } finally {
      setIsGeneratingTitle(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm relative">
      {/* AI Result Modal Overlay */}
      {aiResult && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-[100] p-4 animate-in fade-in duration-200"
          onClick={() => setAiResult(null)}
        >
          <div 
            className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-5xl w-full h-[85vh] max-h-[750px] flex flex-col p-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  Revisão e Finalização do Chamado
                </h3>
                <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-200">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                  <span>Tempo em andamento: {formatTime(ticket.durationSeconds)}</span>
                </div>
              </div>
              <button 
                onClick={() => setAiResult(null)}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col md:flex-row gap-4 mb-6 min-h-0">
              <div className="flex-1 overflow-y-auto bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-3 shrink-0">
                  <div className="flex gap-1.5 bg-slate-200/60 p-1 rounded-lg">
                    <button
                      onClick={() => setAiViewMode('preview')}
                      className={cn(
                        "px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer",
                        aiViewMode === 'preview'
                          ? "bg-white text-slate-800 shadow-xs"
                          : "text-slate-500 hover:text-slate-700"
                      )}
                    >
                      Visualização Formatada
                    </button>
                    <button
                      onClick={() => setAiViewMode('code')}
                      className={cn(
                        "px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer",
                        aiViewMode === 'code'
                          ? "bg-white text-slate-800 shadow-xs"
                          : "text-slate-500 hover:text-slate-700"
                      )}
                    >
                      Código HTML (Editar)
                    </button>
                  </div>
                  <button
                    onClick={handleCopyResult}
                    className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors bg-white border border-slate-200 px-2.5 py-1 rounded-md self-start sm:self-auto cursor-pointer shadow-xs"
                  >
                    {copiedResult ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                    {copiedResult ? <span className="text-emerald-500">Copiado!</span> : <span>Copiar HTML</span>}
                  </button>
                </div>
                <div className="flex-1 min-h-0 overflow-y-auto">
                  {aiViewMode === 'preview' ? (
                    <div 
                      className="prose prose-slate max-w-none text-sm text-slate-700 p-4 bg-white rounded-lg border border-slate-200 shadow-xs leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: aiResult || '' }}
                    />
                  ) : (
                    <textarea
                      value={aiResult || ''}
                      onChange={(e) => setAiResult(e.target.value)}
                      placeholder="Cole ou edite o código HTML aqui..."
                      className="w-full h-full min-h-[300px] font-mono text-xs text-slate-800 leading-relaxed bg-white rounded-lg border border-slate-200 p-4 shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  )}
                </div>
              </div>
              
              <div className="w-full md:w-80 overflow-y-auto bg-slate-50 border border-slate-200 rounded-lg p-4 shrink-0">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Dados do Chamado</h4>
                <div className="space-y-4">
                  <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Login de Rede</span>
                    <span className="text-sm font-medium text-slate-800">{ticket.networkLogin || <span className="text-slate-400 italic">Não informado</span>}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Ramal</span>
                    <span className="text-sm font-medium text-slate-800">{ticket.extension || <span className="text-slate-400 italic">Não informado</span>}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Celular</span>
                    <span className="text-sm font-medium text-slate-800">{ticket.mobile || <span className="text-slate-400 italic">Não informado</span>}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email</span>
                    <span className="text-sm font-medium text-slate-800">{ticket.clientEmail || <span className="text-slate-400 italic">Não informado</span>}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Endereço Lógico</span>
                    <div className="text-sm font-medium text-slate-800 flex flex-col gap-1 mt-1">
                      <span>Micro: {ticket.microLogicalAddress || '-'}</span>
                      <span>Imp: {ticket.printerLogicalAddress || '-'}</span>
                      <span>Mon: {ticket.monitorLogicalAddress || '-'}</span>
                      <span>Outros: {ticket.otherLogicalAddress || '-'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button 
                onClick={handleEditResult}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <Edit3 className="h-4 w-4" />
                Adicionar/editar informações
              </button>
              <button 
                onClick={handleSaveResult}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
              >
                <Save className="h-4 w-4" />
                Gravar chamado
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Searched Solution Modal Overlay */}
      {searchedSolution && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-[100] p-4 animate-in fade-in duration-200"
          onClick={() => { setSearchedSolution(null); setSelectedSolutionItem(null); setIsPaused(false); }}
        >
          <div 
            className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-5xl w-full h-[85vh] max-h-[750px] flex flex-col p-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                {selectedSolutionItem && (
                  <button 
                    onClick={() => setSelectedSolutionItem(null)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    title="Voltar para a lista de soluções"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Voltar
                  </button>
                )}
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <Search className="h-5 w-5 text-blue-600" />
                  {selectedSolutionItem ? 'Detalhes da Solução' : 'Soluções Encontradas'}
                </h3>
              </div>
              <button 
                onClick={() => { setSearchedSolution(null); setSelectedSolutionItem(null); setIsPaused(false); }}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6 min-h-0">
              {selectedSolutionItem ? (
                <div className="space-y-4">
                  {selectedSolutionItem.type === 'faq' && (
                    <>
                      <h4 className="font-bold text-slate-800 mb-2">{selectedSolutionItem.item.name}</h4>
                      <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm">
                        <strong className="block text-slate-600 mb-2">Informação Técnica:</strong>
                        {(selectedSolutionItem.item.technicalInfo || '').includes('<') && (selectedSolutionItem.item.technicalInfo || '').includes('>') ? (
                          <div className="text-slate-700 leading-relaxed [&>p]:mb-2 [&>ul]:list-disc [&>ul]:ml-4 [&>ol]:list-decimal [&>ol]:ml-4" dangerouslySetInnerHTML={{ __html: selectedSolutionItem.item.technicalInfo }} />
                        ) : (
                          <p className="whitespace-pre-wrap font-sans text-slate-700">{selectedSolutionItem.item.technicalInfo}</p>
                        )}
                      </div>
                      {selectedSolutionItem.item.procedure && (
                        <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm mt-4">
                          <strong className="block text-slate-600 mb-2">Procedimento:</strong>
                          {(selectedSolutionItem.item.procedure || '').includes('<') && (selectedSolutionItem.item.procedure || '').includes('>') ? (
                            <div className="text-slate-700 leading-relaxed [&>p]:mb-2 [&>ul]:list-disc [&>ul]:ml-4 [&>ol]:list-decimal [&>ol]:ml-4" dangerouslySetInnerHTML={{ __html: selectedSolutionItem.item.procedure }} />
                          ) : (
                            <p className="whitespace-pre-wrap font-sans text-slate-700">{selectedSolutionItem.item.procedure}</p>
                          )}
                        </div>
                      )}
                    </>
                  )}
                  {selectedSolutionItem.type === 'procedure' && (
                    <>
                      <h4 className="font-bold text-slate-800 mb-2">{selectedSolutionItem.item.name}</h4>
                      <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm">
                        <strong className="block text-slate-600 mb-2">Descrição do Procedimento:</strong>
                        {(selectedSolutionItem.item.description || '').includes('<') && (selectedSolutionItem.item.description || '').includes('>') ? (
                          <div className="text-slate-700 leading-relaxed [&>p]:mb-2 [&>ul]:list-disc [&>ul]:ml-4 [&>ol]:list-decimal [&>ol]:ml-4" dangerouslySetInnerHTML={{ __html: selectedSolutionItem.item.description }} />
                        ) : (
                          <p className="whitespace-pre-wrap font-sans text-slate-700">{selectedSolutionItem.item.description}</p>
                        )}
                      </div>
                    </>
                  )}
                  {selectedSolutionItem.type === 'orientation' && (
                    <>
                      <h4 className="font-bold text-slate-800 mb-2">{selectedSolutionItem.item.name}</h4>
                      <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm">
                        <strong className="block text-slate-600 mb-2">Orientação:</strong>
                        {(selectedSolutionItem.item.description || '').includes('<') && (selectedSolutionItem.item.description || '').includes('>') ? (
                          <div className="text-slate-700 leading-relaxed [&>p]:mb-2 [&>ul]:list-disc [&>ul]:ml-4 [&>ol]:list-decimal [&>ol]:ml-4" dangerouslySetInnerHTML={{ __html: selectedSolutionItem.item.description }} />
                        ) : (
                          <p className="whitespace-pre-wrap font-sans text-slate-700">{selectedSolutionItem.item.description}</p>
                        )}
                      </div>
                    </>
                  )}
                  {selectedSolutionItem.type === 'ticket' && (
                    <>
                      <h4 className="font-bold text-slate-800 mb-2">Chamado {selectedSolutionItem.item.id}</h4>
                      <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm">
                        <strong className="block text-slate-600 mb-2">Relato Inicial:</strong>
                        <p className="whitespace-pre-wrap text-slate-700 mb-4">{selectedSolutionItem.item.description}</p>
                        <strong className="block text-slate-600 mb-2">Estruturação (Solução):</strong>
                        {selectedSolutionItem.item.structuredResult && (
                          selectedSolutionItem.item.structuredResult.includes('<') && selectedSolutionItem.item.structuredResult.includes('>') ? (
                            <div 
                              className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm leading-relaxed text-slate-800 [&>p]:mb-2 [&>ul]:list-disc [&>ul]:ml-4 [&>ol]:list-decimal [&>ol]:ml-4"
                              dangerouslySetInnerHTML={{ __html: selectedSolutionItem.item.structuredResult }}
                            />
                          ) : (
                            <p className="whitespace-pre-wrap font-sans text-sm text-slate-700 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                              {selectedSolutionItem.item.structuredResult}
                            </p>
                          )
                        )}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {(searchedSolution.faqs.length === 0 && searchedSolution.procedures.length === 0 && searchedSolution.orientations.length === 0 && searchedSolution.tickets.length === 0) ? (
                    <p className="text-slate-500 text-center py-8">Nenhuma solução encontrada na base de conhecimento.</p>
                  ) : (
                    <>
                      {searchedSolution.faqs.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">FAQs Relacionadas</h4>
                          <div className="space-y-2">
                            {searchedSolution.faqs.map(faq => (
                              <button
                                key={faq.id}
                                onClick={() => setSelectedSolutionItem({ type: 'faq', item: faq })}
                                className="w-full text-left p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all cursor-pointer"
                              >
                                <span className="font-bold text-slate-800 block">{faq.name}</span>
                                <span className="text-sm text-slate-500 truncate block">{faq.subject} - {faq.service}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {searchedSolution.procedures.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Procedimentos</h4>
                          <div className="space-y-2">
                            {searchedSolution.procedures.map(proc => (
                              <button
                                key={proc.id}
                                onClick={() => setSelectedSolutionItem({ type: 'procedure', item: proc })}
                                className="w-full text-left p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all cursor-pointer"
                              >
                                <span className="font-bold text-slate-800 block">{proc.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {searchedSolution.orientations.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Orientações</h4>
                          <div className="space-y-2">
                            {searchedSolution.orientations.map(ori => (
                              <button
                                key={ori.id}
                                onClick={() => setSelectedSolutionItem({ type: 'orientation', item: ori })}
                                className="w-full text-left p-3 bg-white border border-slate-200 rounded-lg hover:border-amber-400 hover:shadow-sm transition-all cursor-pointer"
                              >
                                <span className="font-bold text-slate-800 block">{ori.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {searchedSolution.tickets.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Chamados Anteriores</h4>
                          <div className="space-y-2">
                            {searchedSolution.tickets.map(t => (
                              <button
                                key={t.id}
                                onClick={() => setSelectedSolutionItem({ type: 'ticket', item: t })}
                                className="w-full text-left p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all cursor-pointer"
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className="font-bold text-slate-800 text-sm">{t.category || 'Chamado'}</span>
                                  <span className="text-xs font-bold text-slate-400">#{t.id}</span>
                                </div>
                                <span className="text-xs text-slate-500 truncate block">{t.description}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              {selectedSolutionItem ? (
                <button 
                  onClick={() => setSelectedSolutionItem(null)}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Voltar para resultados
                </button>
              ) : <div />}
              <button 
                onClick={() => { setSearchedSolution(null); setSelectedSolutionItem(null); setIsPaused(false); }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm ml-auto cursor-pointer"
              >
                Voltar ao chamado
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Validation Error Banner */}
      {validationError && (
        <div className="mb-6 p-4 bg-red-50 border-2 border-red-400 text-red-900 rounded-xl flex items-center justify-between shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-3 font-bold text-sm">
            <AlertTriangle className="h-5 w-5 text-red-600 shrink-0" />
            <span>{validationError}</span>
          </div>
          <button 
            type="button"
            onClick={() => setValidationError(null)}
            className="p-1 hover:bg-red-100 rounded-lg text-red-700 transition-colors cursor-pointer"
            title="Fechar aviso"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <label htmlFor="ticket-id-field" className="text-lg font-bold text-slate-800 shrink-0">
            Chamado
          </label>
          <div className="relative">
            <input 
              id="ticket-id-field"
              ref={ticketIdInputRef}
              type="text" 
              value={ticket.id || ''}
              onChange={(e) => {
                handleChange('id', e.target.value);
                if (validationError && e.target.value.trim()) {
                  setValidationError(null);
                }
              }}
              placeholder="Digite o nº do chamado..."
              className={cn(
                "px-3 py-1.5 text-lg font-bold text-slate-900 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs transition-all w-56 placeholder:font-normal placeholder:text-slate-400 placeholder:text-xs",
                validationError && !ticket.id?.trim() 
                  ? "border-red-500 ring-2 ring-red-200 bg-red-50/50" 
                  : "border-slate-300 hover:border-slate-400"
              )}
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-slate-600 flex-wrap">
          <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-md font-bold text-slate-700">
            {formatTime(ticket.durationSeconds)}
          </div>
          <button 
            type="button"
            onClick={() => {
              setIsPaused(!isPaused);
              onUpdate({ ...ticket, isPaused: !isPaused });
            }}
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium cursor-pointer"
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            {isPaused ? 'Retomar' : 'Pausar'}
          </button>
          <button 
            type="button"
            onClick={() => onDuplicate(ticket)}
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium cursor-pointer">
            <Copy className="h-4 w-4" />
            Duplicar
          </button>
          <span className="text-slate-400 text-xs">Rascunho salvo no navegador</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Caixa de Título do Chamado com Gerador de Título IA */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 shadow-2xs">
          <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Edit3 className="h-4 w-4 text-blue-600" />
              Título / Assunto do Chamado
            </span>
            {ticket.title && (
              <span className="text-[11px] font-normal text-slate-400 font-sans normal-case">
                {ticket.title.length} caracteres
              </span>
            )}
          </label>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <input 
              type="text" 
              value={ticket.title || ''}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Digite o título do chamado ou clique em 'Gerar Título (IA)' para aprimorá-lo..."
              className="flex-1 p-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium text-slate-800 placeholder:text-slate-400 shadow-2xs" 
            />
            <button
              type="button"
              onClick={handleGenerateTitle}
              disabled={isGeneratingTitle || (!ticket.title?.trim() && !ticket.description?.trim())}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg text-sm font-bold shadow-xs transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0 cursor-pointer active:scale-95"
              title="Aperte para transformar e aperfeiçoar o título em linguagem técnica e profissional usando IA"
            >
              {isGeneratingTitle ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="h-4 w-4 text-amber-300" />
              )}
              <span>{isGeneratingTitle ? 'Gerando Título...' : 'Gerar Título (IA)'}</span>
            </button>
          </div>
          <p className="text-[11px] text-slate-500 mt-2 flex items-center gap-1">
            <Info className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            Digite um título rascunho ou clique em <strong>Gerar Título (IA)</strong> para transformá-lo em uma versão técnica e formal.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Login de rede</label>
            <input 
              type="text" 
              value={ticket.networkLogin}
              onChange={(e) => handleChange('networkLogin', e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
            />
          </div>
          <div>
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Ramal</label>
            <input 
              type="text" 
              value={ticket.extension}
              onChange={(e) => handleChange('extension', e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
            />
          </div>
          <div>
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Celular</label>
            <input 
              type="text" 
              value={ticket.mobile}
              onChange={(e) => handleChange('mobile', e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
            />
          </div>
          <div>
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Email</label>
            <input 
              type="email" 
              value={ticket.clientEmail || ''}
              onChange={(e) => handleChange('clientEmail', e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">End. lógico micro</label>
            <input 
              type="text" 
              value={ticket.microLogicalAddress}
              onChange={(e) => handleChange('microLogicalAddress', e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
            />
          </div>
          <div>
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">End. lógico impressora</label>
            <input 
              type="text" 
              value={ticket.printerLogicalAddress}
              onChange={(e) => handleChange('printerLogicalAddress', e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
            />
          </div>
          <div>
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">End. lógico monitor</label>
            <input 
              type="text" 
              value={ticket.monitorLogicalAddress}
              onChange={(e) => handleChange('monitorLogicalAddress', e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
            />
          </div>
          <div>
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">End. lógico (Outros)</label>
            <input 
              type="text" 
              value={ticket.otherLogicalAddress || ''}
              onChange={(e) => handleChange('otherLogicalAddress', e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Categoria</label>
            {isAddingCategory ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  autoFocus
                  value={newCategory}
                  onChange={e => setNewCategory(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Nova categoria..."
                />
                <button 
                  onClick={() => {
                    if (newCategory.trim() && !appSettings.categories.includes(newCategory.trim())) {
                      onUpdateSettings({ ...appSettings, categories: [...appSettings.categories, newCategory.trim()] });
                      handleChange('category', newCategory.trim());
                    } else if (appSettings.categories.includes(newCategory.trim())) {
                      handleChange('category', newCategory.trim());
                    }
                    setIsAddingCategory(false);
                    setNewCategory('');
                  }} 
                  className="px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Confirmar
                </button>
                <button 
                  onClick={() => setIsAddingCategory(false)} 
                  className="px-3 bg-slate-200 text-slate-600 rounded-lg hover:bg-slate-300 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <select
                  value={ticket.category || ''}
                  onChange={(e) => handleChange('category', e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                >
                  <option value="">Selecione uma categoria...</option>
                  {appSettings.categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <button 
                  onClick={() => setIsAddingCategory(true)} 
                  className="px-4 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center font-bold text-sm"
                >
                  + Adicionar
                </button>
              </div>
            )}
          </div>
          <div>
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Associar FAQ (Opcional)</label>
            <select
              value={ticket.associatedFaqId || ''}
              onChange={(e) => handleChange('associatedFaqId', e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
            >
              <option value="">Nenhuma FAQ associada</option>
              {(appSettings.faqs || []).map(faq => (
                <option key={faq.id} value={faq.id}>{faq.faqNumber || faq.id} - {faq.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6 bg-slate-50 border border-slate-100 rounded-lg p-4">
          <div className="flex flex-col sm:flex-row gap-6 mb-2">
            <label className="flex items-center cursor-pointer relative">
              <input 
                type="checkbox" 
                className="sr-only" 
                checked={ticket.isEscalated || false} 
                onChange={(e) => {
                  const checked = e.target.checked;
                  handleChange('isEscalated', checked);
                  if (checked && !ticket.escalationDetails) {
                    const contatoParts = [];
                    if (ticket.extension) contatoParts.push(`Ramal: ${ticket.extension}`);
                    if (ticket.mobile) contatoParts.push(`Celular: ${ticket.mobile}`);
                    const contato = contatoParts.join(' / ');
                    
                    handleChange('escalationDetails', {
                      setor: '',
                      edificio: '',
                      complemento: '',
                      pontoReferencia: '',
                      contato: contato,
                      setorAbertoFechado: '',
                      local: 'Senado'
                    });
                  }
                }} 
              />
              <div className={`relative w-11 h-6 rounded-full transition-colors ${ticket.isEscalated ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${ticket.isEscalated ? 'translate-x-5' : ''}`}></div>
              </div>
              <span className="ml-3 text-sm font-bold text-slate-700">Escalonamento</span>
            </label>

            <label className="flex items-center cursor-pointer relative">
              <input 
                type="checkbox" 
                className="sr-only" 
                checked={ticket.isFormatMicro || false} 
                onChange={(e) => {
                  const checked = e.target.checked;
                  handleChange('isFormatMicro', checked);
                  if (checked) {
                    if (!ticket.escalationDetails) {
                      const contatoParts = [];
                      if (ticket.extension) contatoParts.push(`Ramal: ${ticket.extension}`);
                      if (ticket.mobile) contatoParts.push(`Celular: ${ticket.mobile}`);
                      const contato = contatoParts.join(' / ');
                      
                      handleChange('escalationDetails', {
                        setor: '',
                        edificio: '',
                        complemento: '',
                        pontoReferencia: '',
                        contato: contato,
                        setorAbertoFechado: '',
                        local: 'Senado'
                      });
                    }
                    if (!ticket.formatMicroDetails) {
                      handleChange('formatMicroDetails', {
                        motivo: '',
                        motivoOutros: '',
                        autorizacaoChefe: '',
                        outrosClientes: '',
                        necessitaBackup: ''
                      });
                    }
                  }
                }} 
              />
              <div className={`relative w-11 h-6 rounded-full transition-colors ${ticket.isFormatMicro ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${ticket.isFormatMicro ? 'translate-x-5' : ''}`}></div>
              </div>
              <span className="ml-3 text-sm font-bold text-slate-700">Instalação padrão (Formatar Micro)</span>
            </label>
          </div>
          
          {(ticket.isEscalated || ticket.isFormatMicro) && ticket.escalationDetails && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-lg border border-indigo-100">
               <div className="col-span-1 md:col-span-2">
                 <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Dados do Escalonamento</h4>
               </div>
               <div>
                  <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Setor</label>
                  <input
                    type="text"
                    value={ticket.escalationDetails.setor || ''}
                    onChange={(e) => handleChange('escalationDetails', { ...ticket.escalationDetails!, setor: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
               </div>
               <div>
                  <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Edifício</label>
                  <input
                    type="text"
                    value={ticket.escalationDetails.edificio}
                    onChange={(e) => handleChange('escalationDetails', { ...ticket.escalationDetails!, edificio: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
               </div>
               <div>
                  <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Complemento</label>
                  <input
                    type="text"
                    value={ticket.escalationDetails.complemento}
                    onChange={(e) => handleChange('escalationDetails', { ...ticket.escalationDetails!, complemento: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
               </div>
               <div className="md:col-span-2">
                  <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Ponto de referência</label>
                  <input
                    type="text"
                    value={ticket.escalationDetails.pontoReferencia}
                    onChange={(e) => handleChange('escalationDetails', { ...ticket.escalationDetails!, pontoReferencia: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
               </div>
               <div>
                  <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Contato</label>
                  <input
                    type="text"
                    value={ticket.escalationDetails.contato}
                    onChange={(e) => handleChange('escalationDetails', { ...ticket.escalationDetails!, contato: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
               </div>
               
               <div>
                  <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Setor</label>
                  <div className="flex items-center gap-4 h-[38px] px-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name={`setor-${ticket.id}`} checked={ticket.escalationDetails.setorAbertoFechado === 'Aberto'} onChange={() => handleChange('escalationDetails', { ...ticket.escalationDetails!, setorAbertoFechado: 'Aberto' })} className="text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-slate-700">Aberto</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name={`setor-${ticket.id}`} checked={ticket.escalationDetails.setorAbertoFechado === 'Fechado'} onChange={() => handleChange('escalationDetails', { ...ticket.escalationDetails!, setorAbertoFechado: 'Fechado' })} className="text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-slate-700">Fechado</span>
                    </label>
                  </div>
               </div>
               
               <div className="md:col-span-2">
                  <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Local</label>
                  <div className="flex items-center gap-4 h-[38px] px-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name={`local-${ticket.id}`} checked={ticket.escalationDetails.local === 'Teletrabalho'} onChange={() => handleChange('escalationDetails', { ...ticket.escalationDetails!, local: 'Teletrabalho' })} className="text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-slate-700">Teletrabalho</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name={`local-${ticket.id}`} checked={ticket.escalationDetails.local === 'Senado'} onChange={() => handleChange('escalationDetails', { ...ticket.escalationDetails!, local: 'Senado' })} className="text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-slate-700">Senado</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name={`local-${ticket.id}`} checked={ticket.escalationDetails.local === 'Externo'} onChange={() => handleChange('escalationDetails', { ...ticket.escalationDetails!, local: 'Externo' })} className="text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-slate-700">Externo</span>
                    </label>
                  </div>
               </div>
            </div>
          )}

          {ticket.isFormatMicro && ticket.formatMicroDetails && (
            <div className="mt-4 bg-white p-4 rounded-lg border border-indigo-100 space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Instalação padrão (Formatar Micro)</h4>
              </div>

              {/* Motivo da solicitação */}
              <div>
                <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Motivo da solicitação:</label>
                <div className="flex flex-col sm:flex-row gap-4 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name={`motivo-${ticket.id}`} 
                      checked={ticket.formatMicroDetails.motivo === 'Lentidão'} 
                      onChange={() => handleChange('formatMicroDetails', { ...ticket.formatMicroDetails!, motivo: 'Lentidão' })} 
                      className="text-indigo-600 focus:ring-indigo-500" 
                    />
                    <span className="text-sm text-slate-700">Lentidão</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name={`motivo-${ticket.id}`} 
                      checked={ticket.formatMicroDetails.motivo === 'Troca de micro'} 
                      onChange={() => handleChange('formatMicroDetails', { ...ticket.formatMicroDetails!, motivo: 'Troca de micro' })} 
                      className="text-indigo-600 focus:ring-indigo-500" 
                    />
                    <span className="text-sm text-slate-700">Troca de micro</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name={`motivo-${ticket.id}`} 
                      checked={ticket.formatMicroDetails.motivo === 'Outros'} 
                      onChange={() => handleChange('formatMicroDetails', { ...ticket.formatMicroDetails!, motivo: 'Outros' })} 
                      className="text-indigo-600 focus:ring-indigo-500" 
                    />
                    <span className="text-sm text-slate-700">Outros:</span>
                  </label>
                </div>
                {ticket.formatMicroDetails.motivo === 'Outros' && (
                  <input
                    type="text"
                    value={ticket.formatMicroDetails.motivoOutros || ''}
                    onChange={(e) => handleChange('formatMicroDetails', { ...ticket.formatMicroDetails!, motivoOutros: e.target.value })}
                    placeholder="Especifique o motivo..."
                    className="mt-2 w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Autorização do chefe do setor */}
                <div>
                  <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Autorização do chefe do setor:</label>
                  <div className="flex items-center gap-4 h-[38px] px-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name={`chefe-${ticket.id}`} checked={ticket.formatMicroDetails.autorizacaoChefe === 'Sim'} onChange={() => handleChange('formatMicroDetails', { ...ticket.formatMicroDetails!, autorizacaoChefe: 'Sim' })} className="text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-slate-700">Sim</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name={`chefe-${ticket.id}`} checked={ticket.formatMicroDetails.autorizacaoChefe === 'Não'} onChange={() => handleChange('formatMicroDetails', { ...ticket.formatMicroDetails!, autorizacaoChefe: 'Não' })} className="text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-slate-700">Não</span>
                    </label>
                  </div>
                </div>

                {/* Outros clientes utilizam o micro */}
                <div>
                  <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Outros clientes utilizam o micro:</label>
                  <div className="flex items-center gap-4 h-[38px] px-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name={`outros-${ticket.id}`} checked={ticket.formatMicroDetails.outrosClientes === 'Sim'} onChange={() => handleChange('formatMicroDetails', { ...ticket.formatMicroDetails!, outrosClientes: 'Sim' })} className="text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-slate-700">Sim</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name={`outros-${ticket.id}`} checked={ticket.formatMicroDetails.outrosClientes === 'Não'} onChange={() => handleChange('formatMicroDetails', { ...ticket.formatMicroDetails!, outrosClientes: 'Não' })} className="text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-slate-700">Não</span>
                    </label>
                  </div>
                </div>

                {/* Necessita de backup */}
                <div>
                  <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Necessita de backup:</label>
                  <div className="flex items-center gap-4 h-[38px] px-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name={`backup-${ticket.id}`} checked={ticket.formatMicroDetails.necessitaBackup === 'Sim'} onChange={() => handleChange('formatMicroDetails', { ...ticket.formatMicroDetails!, necessitaBackup: 'Sim' })} className="text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-slate-700">Sim</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name={`backup-${ticket.id}`} checked={ticket.formatMicroDetails.necessitaBackup === 'Não'} onChange={() => handleChange('formatMicroDetails', { ...ticket.formatMicroDetails!, necessitaBackup: 'Não' })} className="text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-slate-700">Não</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
              Descrição livre
            </label>
            <textarea 
              value={ticket.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Descreva a demanda, a solicitação e a tratativa/solução..."
              className="w-full min-h-[160px] p-3 rounded-lg border border-amber-200 bg-amber-50/40 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-y text-sm transition-colors flex-1"
            />
            <div className="flex justify-end mt-2 mb-2 gap-2">
              <div className="relative">
                <button 
                  onClick={() => setShowPredefinedSolutions(!showPredefinedSolutions)}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Soluções Padrão
                </button>
                
                {showPredefinedSolutions && (
                  <div className="absolute right-0 top-full mt-1 w-72 bg-white border border-slate-200 rounded-lg shadow-xl z-50 py-1 max-h-64 overflow-y-auto">
                    {(appSettings.predefinedSolutions || []).map((sol) => (
                      <button
                        key={sol.id}
                        onClick={() => {
                          setAiResult(sol.content);
                          setShowPredefinedSolutions(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-medium truncate"
                      >
                        {sol.title}
                      </button>
                    ))}
                    {(appSettings.predefinedSolutions || []).length === 0 && (
                      <div className="px-4 py-3 text-sm text-slate-500 italic text-center">Nenhuma solução padrão cadastrada</div>
                    )}
                    <div className="border-t border-slate-100 mt-1"></div>
                    <button
                      onClick={() => {
                        setShowPredefinedSolutions(false);
                        if (onNavigate) onNavigate('Configurações');
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-slate-50 font-medium flex items-center gap-1.5"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Cadastrar Solução
                    </button>
                  </div>
                )}
              </div>
              <button 
                onClick={handleSearchSolution}
                disabled={isSearchingSolution || !ticket.description.trim()}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearchingSolution ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Search className="h-3.5 w-3.5" />}
                Buscar solução (IA)
              </button>
            </div>
          </div>

          <div>
            <SmartSuggestions 
              description={ticket.description}
              appSettings={appSettings}
              finishedTickets={finishedTickets}
              ticket={ticket}
              onUpdate={onUpdate}
            />
          </div>
        </div>

          {/* Verificações Section */}
          <div className="mb-4 p-4 bg-slate-50 border border-slate-100 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-800">Verificações</h3>
              <button
                type="button"
                onClick={() => setIsCreatingVerif(!isCreatingVerif)}
                className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                title="Cadastrar verificação no próprio chamado"
              >
                <Plus className="h-3.5 w-3.5" />
                {isCreatingVerif ? "Fechar formulário" : "Cadastrar verificação"}
              </button>
            </div>

            {/* Inline Creation Form for Verificações */}
            {isCreatingVerif && (
              <div className="mb-4 p-3 bg-white border border-blue-200 rounded-lg shadow-2xs space-y-2 animate-in fade-in duration-150">
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wide">Nova Verificação</div>
                <input
                  type="text"
                  value={newVerifName}
                  onChange={(e) => setNewVerifName(e.target.value)}
                  placeholder="Nome (ex: Ping no Servidor)"
                  className="w-full px-3 py-1.5 border border-slate-200 rounded-md text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="text"
                  value={newVerifDesc}
                  onChange={(e) => setNewVerifDesc(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddVerificationInForm()}
                  placeholder="Descrição do que deve ser checado..."
                  className="w-full px-3 py-1.5 border border-slate-200 rounded-md text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsCreatingVerif(false)}
                    className="px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={handleAddVerificationInForm}
                    disabled={!newVerifName.trim() || !newVerifDesc.trim()}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded transition-colors disabled:opacity-50"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {(appSettings.verifications || []).map((verif, index) => {
                const allSelectedIds = [...(ticket.selectedVerifications || []), ...(ticket.selectedProcedures || [])];
                const globalIndex = allSelectedIds.indexOf(verif.id);
                const isChecked = globalIndex !== -1;
                return (
                  <div 
                    key={verif.id} 
                    draggable={true}
                    onDragStart={() => setDraggedVerifIndex(index)}
                    onDragEnd={() => setDraggedVerifIndex(null)}
                    onDragOver={(e) => handleDragOverVerif(e, index)}
                    className={`flex items-center gap-1.5 group/item hover:bg-slate-100/70 p-1 rounded-md transition-colors border border-transparent ${
                      draggedVerifIndex === index 
                        ? "opacity-30 border-dashed border-blue-400 bg-blue-50/50 scale-[0.98]" 
                        : ""
                    }`}
                  >
                    <div 
                      className="cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 shrink-0 p-0.5 rounded hover:bg-slate-200/50 opacity-0 group-hover/item:opacity-100 transition-opacity"
                      title="Arraste para reordenar"
                    >
                      <GripVertical className="h-3.5 w-3.5" />
                    </div>
                    <div className="relative flex items-center justify-center shrink-0">
                      <input 
                        type="checkbox" 
                        id={`verif-${verif.id}`}
                        checked={isChecked}
                        onChange={(e) => {
                          const currentVerifs = ticket.selectedVerifications || [];
                          const updatedVerifs = e.target.checked 
                            ? [...currentVerifs, verif.id]
                            : currentVerifs.filter(id => id !== verif.id);
                          handleChange('selectedVerifications', updatedVerifs);
                        }}
                        className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                      />
                      {isChecked && (
                        <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center pointer-events-none shadow-sm border border-white">
                          {globalIndex + 1}
                        </div>
                      )}
                    </div>
                    <label htmlFor={`verif-${verif.id}`} className="text-sm text-slate-700 font-medium cursor-pointer flex-1 truncate" title={verif.name}>
                      {verif.name}
                    </label>

                    <div className="flex items-center gap-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <button
                        type="button"
                        onClick={() => handleMoveVerification(index, 'up')}
                        disabled={index === 0}
                        className="p-0.5 text-slate-400 hover:text-blue-600 disabled:opacity-20 transition-colors"
                        title="Mover para trás/esquerda"
                      >
                        <ChevronUp className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMoveVerification(index, 'down')}
                        disabled={index === (appSettings.verifications || []).length - 1}
                        className="p-0.5 text-slate-400 hover:text-blue-600 disabled:opacity-20 transition-colors"
                        title="Mover para frente/direita"
                      >
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="group relative shrink-0">
                      <Info className="h-3.5 w-3.5 text-slate-400 cursor-help" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {verif.description}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800"></div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleRemoveVerificationInForm(verif.id, e)}
                      className="p-0.5 text-slate-300 hover:text-red-600 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0 cursor-pointer"
                      title="Excluir verificação"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
            {(appSettings.verifications || []).length === 0 && !isCreatingVerif && (
              <p className="text-xs text-slate-400 italic">Nenhuma verificação cadastrada. Clique em '+ Cadastrar verificação' para adicionar.</p>
            )}
          </div>

          {/* Procedimentos Executados Section */}
          <div className="mb-6 p-4 bg-slate-50 border border-slate-100 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider">Procedimentos Executados</label>
              <button
                type="button"
                onClick={() => setIsCreatingProc(!isCreatingProc)}
                className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                title="Cadastrar procedimento no próprio chamado"
              >
                <Plus className="h-3.5 w-3.5" />
                {isCreatingProc ? "Fechar formulário" : "Cadastrar procedimento"}
              </button>
            </div>

            {/* Inline Creation Form for Procedimentos */}
            {isCreatingProc && (
              <div className="mb-4 p-3 bg-white border border-blue-200 rounded-lg shadow-2xs space-y-2 animate-in fade-in duration-150">
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wide">Novo Procedimento</div>
                <input
                  type="text"
                  value={newProcName}
                  onChange={(e) => setNewProcName(e.target.value)}
                  placeholder="Comando / Nome (ex: gpupdate /force)"
                  className="w-full px-3 py-1.5 border border-slate-200 rounded-md text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="text"
                  value={newProcDesc}
                  onChange={(e) => setNewProcDesc(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddProcedureInForm()}
                  placeholder="Descrição do procedimento..."
                  className="w-full px-3 py-1.5 border border-slate-200 rounded-md text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-medium">Cor de realce:</span>
                  <input
                    type="color"
                    value={newProcColor}
                    onChange={(e) => setNewProcColor(e.target.value)}
                    className="w-7 h-7 p-0.5 border border-slate-200 rounded cursor-pointer"
                    title="Selecione a cor do indicador"
                  />
                </div>
                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsCreatingProc(false)}
                    className="px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={handleAddProcedureInForm}
                    disabled={!newProcName.trim() || !newProcDesc.trim()}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded transition-colors disabled:opacity-50"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {(appSettings.procedures || []).map((proc, index) => {
                const allSelectedIds = [...(ticket.selectedVerifications || []), ...(ticket.selectedProcedures || [])];
                const globalIndex = allSelectedIds.indexOf(proc.id);
                const isChecked = globalIndex !== -1;
                return (
                  <div 
                    key={proc.id} 
                    draggable={true}
                    onDragStart={() => setDraggedProcIndex(index)}
                    onDragEnd={() => setDraggedProcIndex(null)}
                    onDragOver={(e) => handleDragOverProc(e, index)}
                    className={`flex items-center gap-1.5 group/item hover:bg-slate-100/70 p-1 rounded-md transition-colors border border-transparent ${
                      draggedProcIndex === index 
                        ? "opacity-30 border-dashed border-blue-400 bg-blue-50/50 scale-[0.98]" 
                        : ""
                    }`}
                  >
                    <div 
                      className="cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 shrink-0 p-0.5 rounded hover:bg-slate-200/50 opacity-0 group-hover/item:opacity-100 transition-opacity"
                      title="Arraste para reordenar"
                    >
                      <GripVertical className="h-3.5 w-3.5" />
                    </div>
                    <div className="relative flex items-center justify-center shrink-0">
                      <input 
                        type="checkbox" 
                        id={`proc-${proc.id}`}
                        checked={isChecked}
                        onChange={(e) => {
                          const current = ticket.selectedProcedures || [];
                          const updated = e.target.checked 
                            ? [...current, proc.id]
                            : current.filter(id => id !== proc.id);
                          handleChange('selectedProcedures', updated);
                        }}
                        className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                      />
                      {isChecked && (
                        <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center pointer-events-none shadow-sm border border-white">
                          {globalIndex + 1}
                        </div>
                      )}
                    </div>
                    <label htmlFor={`proc-${proc.id}`} className="text-sm text-slate-700 font-medium cursor-pointer flex-1 truncate flex items-center gap-1.5" title={proc.name}>
                      {proc.color && (
                        <span 
                          className="w-2.5 h-2.5 rounded-full shrink-0" 
                          style={{ backgroundColor: proc.color }}
                          title={`Cor: ${proc.color}`}
                        />
                      )}
                      <span className="truncate">{proc.name}</span>
                    </label>
                    
                    <div className="flex items-center gap-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <button
                        type="button"
                        onClick={() => handleMoveProcedure(index, 'up')}
                        disabled={index === 0}
                        className="p-0.5 text-slate-400 hover:text-blue-600 disabled:opacity-20 transition-colors"
                        title="Mover para trás/esquerda"
                      >
                        <ChevronUp className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMoveProcedure(index, 'down')}
                        disabled={index === (appSettings.procedures || []).length - 1}
                        className="p-0.5 text-slate-400 hover:text-blue-600 disabled:opacity-20 transition-colors"
                        title="Mover para frente/direita"
                      >
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="group relative shrink-0">
                      <Info className="h-3.5 w-3.5 text-slate-400 cursor-help" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {proc.description}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800"></div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleRemoveProcedureInForm(proc.id, e)}
                      className="p-0.5 text-slate-300 hover:text-red-600 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0 cursor-pointer"
                      title="Excluir procedimento"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
            {(appSettings.procedures || []).length === 0 && !isCreatingProc && (
              <p className="text-xs text-slate-400 italic">Nenhum procedimento cadastrado. Clique em '+ Cadastrar procedimento' para adicionar.</p>
            )}
          </div>

          {!ticket.isEscalated && (
            <div className="mb-6 p-4 bg-slate-50 border border-slate-100 rounded-lg flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="problemSolved"
                  checked={ticket.problemSolved || false}
                  onChange={(e) => handleChange('problemSolved', e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                />
                <label htmlFor="problemSolved" className="text-sm text-slate-700 font-medium cursor-pointer">
                  Após os procedimentos, o problema foi solucionado?
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="clientValidated"
                  checked={ticket.clientValidated || false}
                  onChange={(e) => handleChange('clientValidated', e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                />
                <label htmlFor="clientValidated" className="text-sm text-slate-700 font-medium cursor-pointer">
                  Cliente validou o chamado?
                </label>
              </div>
            </div>
          )}
        </div>

        {aiError && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-start gap-3 relative animate-in fade-in slide-in-from-top-2 duration-200">
            <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
            <div className="flex-1 text-sm">
              <strong className="font-bold block mb-0.5">Erro no processamento da IA:</strong>
              <p className="leading-relaxed whitespace-pre-line">{aiError}</p>
              {aiError.toLowerCase().includes('unavailable') && (
                <div className="mt-2 text-xs text-red-700 font-medium bg-red-100/50 p-2 rounded border border-red-200/50">
                  💡 O modelo gratuito selecionado no OpenRouter está congestionado ou indisponível no momento. Tente selecionar outro modelo gratuito (como <strong className="font-bold">DeepSeek R1 Free</strong> ou <strong className="font-bold">Llama 3.3 70B Free</strong>) na barra superior ou nas Configurações!
                </div>
              )}
              {aiError.includes('PERMISSION_DENIED') && (
                <div className="mt-2 text-xs text-red-700 font-medium bg-red-100/50 p-2 rounded border border-red-200/50">
                  💡 Permissão negada pelo Google Gemini. Verifique se a sua chave de API do Gemini nas Configurações é válida e está ativa.
                </div>
              )}
            </div>
            <button 
              onClick={() => setAiError(null)}
              className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-colors"
              title="Fechar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
          <button 
            onClick={handleFinalizeIA}
            disabled={!ticket.description.trim() || isAiLoading}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm",
              ticket.description.trim() && !isAiLoading
                ? "bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100" 
                : "text-slate-400 border border-slate-200 bg-slate-50 cursor-not-allowed"
            )}
          >
            {isAiLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="h-4 w-4" />
            )}
            {isAiLoading ? 'Processando...' : 'Finalizar (IA)'}
          </button>
          
          <button 
            type="button"
            onClick={handleSaveWithValidation}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm cursor-pointer active:scale-95"
          >
            <Save className="h-4 w-4" />
            Gravar e finalizar
          </button>
        </div>
      </div>
    </div>
  );
}
