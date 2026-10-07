import { 
  Eye, 
  Edit, 
  Trash2, 
  Search as SearchIcon, 
  Copy, 
  Check, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Monitor, 
  Printer, 
  Tv, 
  HardDrive, 
  Share2, 
  Tag, 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  X, 
  Sparkles, 
  FileText,
  Building,
  Laptop
} from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';
import { isToday, isThisWeek, isThisMonth, isThisYear, format } from 'date-fns';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { Ticket, AppSettings } from '@/types';
import { cn, stripAndFormatHtml, parseTicketHtmlSections } from '@/lib/utils';
import { SearchableFaqSelect } from './SearchableFaqSelect';
import { SearchableCategorySelect } from './SearchableCategorySelect';

interface TicketListProps {
  tickets: Ticket[];
  appSettings: AppSettings;
  onArchive?: (id: string) => void;
  onRestore?: (id: string) => void;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
  onUpdate?: (ticket: Ticket) => void;
}

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

function formatDateStr(dateString: string) {
  const d = new Date(dateString);
  return d.toLocaleString('pt-BR', { 
    day: '2-digit', month: '2-digit', year: 'numeric', 
    hour: '2-digit', minute: '2-digit', second: '2-digit' 
  });
}

export function TicketList({ tickets, appSettings, onArchive, onRestore, onDelete, onEdit, onUpdate }: TicketListProps) {
  const defaultMap: Record<string, string> = {
    'day': 'Dia',
    'week': 'Semana',
    'month': 'Mês',
    'year': 'Ano',
    'all': 'Todos'
  };
  const [filter, setFilter] = useState(appSettings.defaultSlaTimeFilter ? defaultMap[appSettings.defaultSlaTimeFilter] : 'Mês');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewingTicket, setViewingTicket] = useState<Ticket | null>(null);
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [isEditingTime, setIsEditingTime] = useState(false);
  const [editMinutes, setEditMinutes] = useState('0');
  const [editSeconds, setEditSeconds] = useState('0');
  const [copiedResult, setCopiedResult] = useState(false);
  const [copiedTextResult, setCopiedTextResult] = useState(false);
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);
  const [copiedTicketId, setCopiedTicketId] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [slaFilter, setSlaFilter] = useState<'10' | '15' | '20' | '30' | null>(null);
  const [chartTab, setChartTab] = useState<'sla' | 'distribution'>('sla');
  const [selectedMonth, setSelectedMonth] = useState<string>(format(new Date(), 'yyyy-MM'));
  const [showArchived, setShowArchived] = useState(false);

  const archivedCount = useMemo(() => {
    return tickets.filter(t => t.archived && !t.deleted).length;
  }, [tickets]);

  useEffect(() => {
    if (appSettings.defaultSlaTimeFilter) {
      setFilter(defaultMap[appSettings.defaultSlaTimeFilter] || 'Mês');
    } else {
      setFilter('Mês');
    }
  }, [appSettings.defaultSlaTimeFilter]);

  const handleCopyResult = () => {
    if (viewingTicket?.structuredResult) {
      navigator.clipboard.writeText(viewingTicket.structuredResult);
      setCopiedResult(true);
      setTimeout(() => setCopiedResult(false), 2000);
    }
  };

  const handleCopyTextResult = () => {
    if (viewingTicket?.structuredResult) {
      const plainText = stripAndFormatHtml(viewingTicket.structuredResult);
      navigator.clipboard.writeText(plainText);
      setCopiedTextResult(true);
      setTimeout(() => setCopiedTextResult(false), 2000);
    }
  };

  const baseFilteredTickets = useMemo(() => {
    return tickets.filter(ticket => {
      // Hide deleted tickets
      if (ticket.deleted) return false;
      
      if (showArchived) {
        if (!ticket.archived) return false;
      } else {
        if (ticket.archived) return false;
      }
      
      // Date filter
      const dateStr = ticket.finishedAt || ticket.createdAt;
      if (!dateStr) return false;
      const date = new Date(dateStr);
      const now = new Date();
      const diffDays = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
      let dateMatch = true;
      if (filter === 'Dia') dateMatch = isToday(date);
      else if (filter === 'Semana') dateMatch = diffDays >= 0 && diffDays <= 7;
      else if (filter === 'Mês') dateMatch = format(date, 'yyyy-MM') === selectedMonth;
      else if (filter === 'Ano') dateMatch = diffDays >= 0 && diffDays <= 365;
      
      if (!dateMatch) return false;

      // Category filter
      if (categoryFilter && ticket.category !== categoryFilter) return false;

      // Search filter
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const content = `
          ${ticket.title || ''}
          ${ticket.description || ''} 
          ${ticket.id || ''}
          ${ticket.networkLogin || ''}
          ${ticket.extension || ''}
          ${ticket.mobile || ''}
          ${ticket.clientEmail || ''}
          ${ticket.otherLogicalAddress || ''}
        `.toLowerCase();
        
        if (!content.includes(term)) return false;
      }

      return true;
    });
  }, [tickets, filter, categoryFilter, searchTerm, selectedMonth]);

  // Dashboard Metrics Calculation - over base filters (without duration filter)
  const finishedFilteredTickets = useMemo(() => {
    return baseFilteredTickets.filter(t => t.status === 'FINALIZADO');
  }, [baseFilteredTickets]);

  const filteredTickets = useMemo(() => {
    if (!slaFilter) return baseFilteredTickets;
    
    return baseFilteredTickets.filter(ticket => {
      if (ticket.status !== 'FINALIZADO') return false;
      const duration = ticket.durationSeconds;
      if (slaFilter === '10') {
        return duration <= 10 * 60;
      } else if (slaFilter === '15') {
        return duration <= 15 * 60;
      } else if (slaFilter === '20') {
        return duration <= 20 * 60;
      } else if (slaFilter === '30') {
        return duration <= 30 * 60;
      }
      return true;
    });
  }, [baseFilteredTickets, slaFilter]);
  
  const buckets = [
    { name: 'Até 3 min', max: 3 * 60, count: 0 },
    { name: '3 a 5 min', max: 5 * 60, count: 0 },
    { name: '5 a 10 min', max: 10 * 60, count: 0 },
    { name: '10 a 15 min', max: 15 * 60, count: 0 },
    { name: '15 a 20 min', max: 20 * 60, count: 0 },
    { name: '20 a 30 min', max: 30 * 60, count: 0 },
    { name: 'Mais de 30 min', max: Infinity, count: 0 },
  ];

  finishedFilteredTickets.forEach(ticket => {
    for (const bucket of buckets) {
      if (ticket.durationSeconds <= bucket.max) {
        bucket.count++;
        break;
      }
    }
  });

  const totalSeconds = finishedFilteredTickets.reduce((acc, t) => acc + t.durationSeconds, 0);
  const avgSeconds = finishedFilteredTickets.length > 0 ? totalSeconds / finishedFilteredTickets.length : 0;
  const avgMinutes = avgSeconds / 60;

  const slaChartData = useMemo(() => {
    const total = finishedFilteredTickets.length;
    
    const count10 = finishedFilteredTickets.filter(t => t.durationSeconds <= 10 * 60).length;
    const count15 = finishedFilteredTickets.filter(t => t.durationSeconds <= 15 * 60).length;
    const count20 = finishedFilteredTickets.filter(t => t.durationSeconds <= 20 * 60).length;
    const count30 = finishedFilteredTickets.filter(t => t.durationSeconds <= 30 * 60).length;

    const pct10 = total > 0 ? Math.round((count10 / total) * 100) : 0;
    const pct15 = total > 0 ? Math.round((count15 / total) * 100) : 0;
    const pct20 = total > 0 ? Math.round((count20 / total) * 100) : 0;
    const pct30 = total > 0 ? Math.round((count30 / total) * 100) : 0;

    return [
      {
        name: '0 a 10 min',
        key: '10' as const,
        'Meta SLA': 70,
        'Realizado': pct10,
        count: count10,
        total: total,
        intervalText: `${pct10}% fechados em 0 a 10 min`,
        isCritical: false,
      },
      {
        name: '0 a 15 min',
        key: '15' as const,
        'Meta SLA': 85,
        'Realizado': pct15,
        count: count15,
        total: total,
        intervalText: `${pct15}% fechados em 0 a 15 min`,
        isCritical: false,
      },
      {
        name: '0 a 20 min',
        key: '20' as const,
        'Meta SLA': 95,
        'Realizado': pct20,
        count: count20,
        total: total,
        intervalText: `${pct20}% fechados em 0 a 20 min`,
        isCritical: false,
      },
      {
        name: '0 a 30 min',
        key: '30' as const,
        'Meta SLA': 99,
        'Realizado': pct30,
        count: count30,
        total: total,
        intervalText: `${pct30}% fechados em 0 a 30 min (Meta: 99%)`,
        isCritical: true,
      }
    ];
  }, [finishedFilteredTickets]);

  let slaStatus = 'Sem dados';
  let slaColor = 'bg-slate-200';
  let slaTextColor = 'text-slate-500';

  if (finishedFilteredTickets.length > 0) {
    if (avgMinutes <= appSettings.sla.otima) {
      slaStatus = 'Ótima';
      slaColor = 'bg-emerald-500';
      slaTextColor = 'text-emerald-700';
    } else if (avgMinutes <= appSettings.sla.boa) {
      slaStatus = 'Boa';
      slaColor = 'bg-blue-500';
      slaTextColor = 'text-blue-700';
    } else if (avgMinutes <= appSettings.sla.atencao) {
      slaStatus = 'Atenção';
      slaColor = 'bg-amber-500';
      slaTextColor = 'text-amber-700';
    } else if (avgMinutes <= appSettings.sla.ruim) {
      slaStatus = 'Ruim';
      slaColor = 'bg-orange-500';
      slaTextColor = 'text-orange-700';
    } else {
      slaStatus = 'Crítica';
      slaColor = 'bg-red-500';
      slaTextColor = 'text-red-700';
    }
  }

  const formatAvg = (secs: number) => {
    if (secs === 0) return '00:00';
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const shortRecommendation = useMemo(() => {
    if (finishedFilteredTickets.length === 0) return null;
    
    const otima = appSettings.sla.otima * 60;
    const boa = appSettings.sla.boa * 60;
    const atencao = appSettings.sla.atencao * 60;
    const ruim = appSettings.sla.ruim * 60;

    let targetSlaSecs = otima;
    let targetName = 'Ótima';

    if (avgSeconds <= otima) {
      return null;
    } else if (avgSeconds <= boa) {
      targetSlaSecs = otima;
      targetName = 'Ótima';
    } else if (avgSeconds <= atencao) {
      targetSlaSecs = boa;
      targetName = 'Boa';
    } else if (avgSeconds <= ruim) {
      targetSlaSecs = atencao;
      targetName = 'Atenção';
    } else {
      targetSlaSecs = ruim;
      targetName = 'Ruim';
    }

    const totalCurrentSecs = avgSeconds * finishedFilteredTickets.length;
    const nextTicketsCount = 10;
    const allowedTotalSecs = targetSlaSecs * (finishedFilteredTickets.length + nextTicketsCount);
    const requiredSecsForNext = allowedTotalSecs - totalCurrentSecs;
    const maxAvgSecsForNext = requiredSecsForNext / nextTicketsCount;

    if (maxAvgSecsForNext <= 0) {
      return `Foque em reduzir o tempo gradativamente nos próximos chamados.`;
    } else {
      const maxMins = Math.floor(maxAvgSecsForNext / 60);
      const maxSecs = Math.floor(maxAvgSecsForNext % 60);
      return `Próx ${nextTicketsCount} chamados em até ${maxMins}m${maxSecs}s para SLA ${targetName}.`;
    }
  }, [avgSeconds, finishedFilteredTickets.length, appSettings.sla]);

  return (
    <div className="space-y-8 mt-8">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <h3 className="font-bold text-slate-800">Tempo de finalização de chamados</h3>
            <p className="text-xs text-slate-400 mt-1">{finishedFilteredTickets.length} chamado(s) finalizado(s) no período</p>
            {shortRecommendation && (
              <p className="text-[11px] font-medium text-blue-600 mt-2 bg-blue-50 px-2 py-1 rounded inline-block">💡 {shortRecommendation}</p>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">SLA Médio</span>
                <span className={cn("text-sm font-bold", slaTextColor)}>{formatAvg(avgSeconds)}</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <div className={cn("h-2.5 w-2.5 rounded-full", slaColor)}></div>
                <span className={cn("text-sm font-bold", slaTextColor)}>{slaStatus}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 py-3 bg-slate-50/50 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => setChartTab('sla')}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all",
                chartTab === 'sla'
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              )}
            >
              Metas de SLA (0 a 10, 15, 20 e 30 min)
            </button>
            <button
              onClick={() => setChartTab('distribution')}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all",
                chartTab === 'distribution'
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              )}
            >
              Distribuição de Tempo Geral
            </button>
          </div>
          <span className="text-[11px] text-slate-400 font-semibold italic">
            💡 Dica: Clique nos cards abaixo para aplicar filtros rápidos
          </span>
        </div>

        {finishedFilteredTickets.length > 0 ? (
          <div className="p-6">
            {chartTab === 'sla' ? (
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={slaChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                    <YAxis unit="%" domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                    <Tooltip 
                      cursor={{ fill: '#f1f5f9' }}
                      contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      formatter={(value: any, name: string) => [`${value}%`, name]}
                    />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '11px', marginTop: '10px' }} />
                    <Bar dataKey="Meta SLA" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={36} />
                    <Bar dataKey="Realizado" radius={[4, 4, 0, 0]} barSize={36}>
                      {slaChartData.map((entry, index) => {
                        const isMet = entry.Realizado >= entry['Meta SLA'];
                        let barFill = '#3b82f6';
                        if (entry.isCritical) {
                          barFill = isMet ? '#10b981' : '#ef4444';
                        } else {
                          barFill = isMet ? '#10b981' : '#f59e0b';
                        }
                        return <Cell key={`cell-${index}`} fill={barFill} />;
                      })}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={buckets} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                    <YAxis allowDecimals={false} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                    <Tooltip 
                      cursor={{ fill: '#f1f5f9' }}
                      contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="count" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={55} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        ) : (
          <div className="p-12 text-center text-slate-400 text-sm">
            Nenhum chamado finalizado neste período para gerar gráficos.
          </div>
        )}

        {/* Clickable SLA Cards */}
        {finishedFilteredTickets.length > 0 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50/40">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Parâmetros SLA & Filtros Rápidos (Clique para filtrar)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {slaChartData.map(item => {
                const isActive = slaFilter === item.key;
                const isMeetingTarget = item.Realizado >= item['Meta SLA'];
                const isCriticalNonCompliant = item.isCritical && !isMeetingTarget;

                return (
                  <button
                    key={item.key}
                    onClick={() => setSlaFilter(prev => prev === item.key ? null : (item.key as any))}
                    className={cn(
                      "p-4 rounded-xl border text-left transition-all duration-200 relative overflow-hidden group cursor-pointer",
                      isActive 
                        ? (isCriticalNonCompliant ? "border-rose-500 bg-rose-50 ring-2 ring-rose-200 shadow-sm" : "border-blue-500 bg-blue-50 ring-2 ring-blue-100 shadow-sm")
                        : (isCriticalNonCompliant 
                            ? "border-rose-200 bg-rose-50/30 hover:border-rose-300 hover:shadow-sm" 
                            : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm")
                    )}
                  >
                    <div className="flex justify-between items-start gap-1">
                      <span className={cn(
                        "text-[11px] font-bold uppercase tracking-wider",
                        isCriticalNonCompliant ? "text-rose-700" : "text-slate-500"
                      )}>
                        {item.name}
                      </span>
                      <span className={cn(
                        "text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap",
                        isMeetingTarget 
                          ? "bg-emerald-100 text-emerald-700" 
                          : (item.isCritical ? "bg-rose-100 text-rose-700 border border-rose-200" : "bg-amber-100 text-amber-700")
                      )}>
                        {isMeetingTarget ? 'Meta Atingida' : (item.isCritical ? 'Crítico' : 'Abaixo da Meta')}
                      </span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className={cn(
                        "text-2xl font-black",
                        isCriticalNonCompliant ? "text-rose-700" : "text-slate-800"
                      )}>
                        {item.Realizado}%
                      </span>
                      <span className="text-[11px] text-slate-500">de real (Meta: {item['Meta SLA']}%)</span>
                    </div>
                    <div className="mt-2.5">
                      <div className={cn("h-1.5 w-full rounded-full overflow-hidden", isCriticalNonCompliant ? "bg-rose-100" : "bg-slate-100")}>
                        <div 
                          className={cn(
                            "h-full rounded-full transition-all duration-500", 
                            isMeetingTarget ? "bg-emerald-500" : (item.isCritical ? "bg-rose-500" : "bg-amber-500")
                          )}
                          style={{ width: `${Math.min(item.Realizado, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    {item.intervalText && (
                      <div className={cn(
                        "mt-2 text-[10.5px] font-medium text-center py-1 px-1 rounded-md border",
                        isCriticalNonCompliant 
                          ? "bg-rose-50 border-rose-100 text-rose-700 font-bold" 
                          : "bg-slate-50 border-slate-100 text-slate-500"
                      )}>
                        {item.intervalText}
                      </div>
                    )}
                    <div className="mt-3 flex items-center justify-between text-[11px]">
                      <span className={cn(isCriticalNonCompliant ? "text-rose-600 font-medium" : "text-slate-400")}>
                        {item.count} de {item.total} chamados
                      </span>
                      <span className={cn(
                        "font-bold transition-colors",
                        isActive 
                          ? (isCriticalNonCompliant ? "text-rose-700" : "text-blue-700")
                          : (isCriticalNonCompliant ? "text-rose-600 group-hover:text-rose-800" : "text-blue-600 group-hover:text-blue-800")
                      )}>
                        {isActive ? "✓ Ativo" : "Filtrar"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="font-bold text-slate-800">
              {showArchived ? 'Chamados Arquivados' : 'Últimos chamados registrados'}
            </h3>
            <button
              onClick={() => setShowArchived(!showArchived)}
              className={cn(
                "px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors self-start sm:self-auto",
                showArchived 
                  ? "bg-amber-100 text-amber-800 border-amber-200" 
                  : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
              )}
            >
              {showArchived ? 'Ver Ativos / SLA' : `Chamados Arquivados (${archivedCount})`}
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar em chamados finalizados..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <SearchableCategorySelect
            value={categoryFilter}
            onChange={setCategoryFilter}
            categories={appSettings.categories}
            variant="filter"
            emptyLabel="Todas as categorias"
          />
          {filter === 'Mês' && (
            <input 
              type="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Dia</option>
            <option>Semana</option>
            <option>Mês</option>
            <option>Ano</option>
            <option>Todos</option>
          </select>
        </div>
      </div>

      {slaFilter && (
        <div className="flex items-center justify-between bg-blue-50 border border-blue-100 text-blue-800 px-4 py-3 rounded-xl text-sm font-medium mb-4 shadow-sm animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>
              Filtrando chamados finalizados{' '}
              {slaFilter === '10' ? (
                <>de <strong className="font-bold">0 a 10 minutos</strong></>
              ) : slaFilter === '15' ? (
                <>de <strong className="font-bold">10,01 a 15 minutos</strong></>
              ) : (
                <>de <strong className="font-bold">15,01 a 20 minutos</strong></>
              )}
              . Exibindo {filteredTickets.length} de {finishedFilteredTickets.length} chamado(s).
            </span>
          </div>
          <button 
            onClick={() => setSlaFilter(null)}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 bg-white border border-blue-200 hover:border-blue-300 px-2.5 py-1 rounded-lg transition-all shadow-xs cursor-pointer"
          >
            Limpar Filtro
          </button>
        </div>
      )}

      <div className="space-y-4">
        {filteredTickets.map(ticket => (
          <div key={ticket.id} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors shadow-sm">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "px-2.5 py-0.5 rounded-full text-xs font-bold",
                    ticket.status === 'FINALIZADO' ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                  )}>
                    {ticket.status === 'FINALIZADO' ? 'FINALIZADO' : 'EM ANDAMENTO'}
                  </span>
                  {onUpdate ? (
                    <div className="flex items-center gap-2">
                      <SearchableCategorySelect
                        value={ticket.category || ''}
                        onChange={(cat) => {
                          onUpdate({ ...ticket, category: cat });
                        }}
                        categories={appSettings.categories}
                        variant="badge"
                      />
                      
                      <SearchableFaqSelect
                        value={ticket.associatedFaqId || ''}
                        onChange={(faqId) => {
                          onUpdate({ ...ticket, associatedFaqId: faqId });
                        }}
                        faqs={appSettings.faqs || []}
                        variant="badge"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      {ticket.category && (
                        <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold">
                          {ticket.category}
                        </span>
                      )}
                      {ticket.associatedFaqId && (
                        <span className="max-w-[150px] truncate px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold"
                          title={appSettings.faqs?.find(f => f.id === ticket.associatedFaqId)?.name}
                        >
                          FAQ: {appSettings.faqs?.find(f => f.id === ticket.associatedFaqId)?.faqNumber}
                        </span>
                      )}
                    </div>
                  )}
                  {ticket.isEscalated && (
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold">
                      ESCALONADO
                    </span>
                  )}
                  {ticket.status === 'FINALIZADO' ? (
                    <div className="flex items-center gap-2 group">
                      <span className={cn(
                        "text-sm font-bold flex items-center gap-1.5",
                        ticket.durationSeconds > 30 * 60 ? "text-rose-600 font-extrabold" : "text-slate-600"
                      )}>
                        {formatDuration(ticket.durationSeconds)}
                        {ticket.durationSeconds > 30 * 60 && (
                          <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 border border-rose-200 uppercase tracking-tight">
                            Crítico (&gt;30m)
                          </span>
                        )}
                      </span>
                      {onUpdate && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setViewingTicket(ticket);
                            setEditMinutes(Math.floor(ticket.durationSeconds / 60).toString());
                            setEditSeconds((ticket.durationSeconds % 60).toString());
                            setIsEditingTime(true);
                          }}
                          className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-all"
                          title="Editar tempo"
                        >
                          <Edit className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  ) : (
                    <span className={cn(
                      "text-sm font-bold flex items-center gap-1.5",
                      ticket.durationSeconds > 30 * 60 ? "text-rose-600 font-extrabold" : "text-slate-600"
                    )}>
                      {formatDuration(ticket.durationSeconds)}
                      {ticket.durationSeconds > 30 * 60 && (
                        <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 border border-rose-200 uppercase tracking-tight">
                          Crítico (&gt;30m)
                        </span>
                      )}
                    </span>
                  )}
                </div>
                
                {ticket.title && (
                  <h3 className="text-base font-bold text-slate-800 tracking-tight">
                    {ticket.title}
                  </h3>
                )}

                <h4 className="text-sm font-medium text-slate-900">
                  {ticket.networkLogin} <span className="text-slate-400 font-normal">· Ramal {ticket.extension}</span>
                </h4>
                
                <p className="text-sm text-slate-600 line-clamp-2">
                  <span className="font-medium text-slate-700">Problema:</span> {ticket.description}
                </p>
                
                <div className="text-xs text-slate-400 mt-1 flex flex-wrap gap-x-2 gap-y-1">
                  <span>ID: {ticket.id}</span>
                  {ticket.networkLogin && <span>• Login: {ticket.networkLogin}</span>}
                  {ticket.extension && <span>• Ramal: {ticket.extension}</span>}
                  {ticket.clientEmail && <span>• Email: {ticket.clientEmail}</span>}
                  {ticket.microLogicalAddress && <span>• Micro: {ticket.microLogicalAddress}</span>}
                  {ticket.printerLogicalAddress && <span>• Impressora: {ticket.printerLogicalAddress}</span>}
                  {ticket.monitorLogicalAddress && <span>• Monitor: {ticket.monitorLogicalAddress}</span>}
                  {ticket.otherLogicalAddress && <span>• Outros: {ticket.otherLogicalAddress}</span>}
                  <span>• Finalizado: {ticket.finishedAt ? formatDateStr(ticket.finishedAt) : '-'}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setViewingTicket(ticket)}
                  className="text-blue-600 text-xs font-bold hover:text-blue-800 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  VER
                </button>
                {onEdit && (
                  <button 
                    onClick={() => onEdit(ticket.id)}
                    className="text-slate-600 text-xs font-bold hover:text-slate-800 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    EDITAR
                  </button>
                )}
                {showArchived ? (
                  onRestore && (
                    <button 
                      onClick={() => onRestore(ticket.id)} 
                      className="text-emerald-700 text-xs font-bold hover:text-emerald-900 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
                    >
                      RESTAURAR
                    </button>
                  )
                ) : (
                  onArchive && (
                    <button 
                      onClick={() => onArchive(ticket.id)} 
                      className="text-amber-700 text-xs font-bold hover:text-amber-900 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors"
                    >
                      ARQUIVAR
                    </button>
                  )
                )}
                {onDelete && (
                  <button 
                    onClick={() => {
                      if (window.confirm(`Tem certeza que deseja excluir o chamado ${ticket.id}?`)) {
                        onDelete(ticket.id);
                      }
                    }} 
                    className="text-rose-600 text-xs font-bold hover:text-rose-800 px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors"
                    title="Excluir chamado"
                  >
                    EXCLUIR
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {filteredTickets.length === 0 && (
          <div className="text-center py-10 bg-white rounded-xl border border-slate-200 border-dashed">
            <p className="text-slate-500 text-sm font-medium">Nenhum chamado registrado ainda.</p>
          </div>
        )}
      </div>

      {viewingTicket && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Cabeçalho do Modal */}
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Chamado</span>
                  <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded-lg shadow-2xs">
                    <span className="text-base font-black text-slate-800 tracking-tight font-mono">{viewingTicket.id}</span>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(viewingTicket.id);
                        setCopiedTicketId(true);
                        setTimeout(() => setCopiedTicketId(false), 2000);
                      }}
                      className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer p-0.5"
                      title="Copiar número do chamado"
                    >
                      {copiedTicketId ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                  
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    FINALIZADO
                  </span>

                  {viewingTicket.isEscalated && (
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-[11px] font-bold flex items-center gap-1">
                      <Share2 className="h-3 w-3" />
                      ESCALONADO
                    </span>
                  )}

                  {viewingTicket.isFormatMicro && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[11px] font-bold flex items-center gap-1">
                      <HardDrive className="h-3 w-3" />
                      FORMATAÇÃO
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  Finalizado em <span className="font-semibold text-slate-700">{viewingTicket.finishedAt ? formatDateStr(viewingTicket.finishedAt) : '-'}</span>
                </p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                {onEdit && (
                  <button 
                    onClick={() => {
                      const id = viewingTicket.id;
                      setViewingTicket(null);
                      onEdit(id);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-all shadow-2xs cursor-pointer"
                  >
                    <Edit className="h-3.5 w-3.5 text-slate-500" />
                    Editar
                  </button>
                )}
                <button 
                  onClick={() => setViewingTicket(null)}
                  className="p-1.5 hover:bg-slate-200/60 rounded-lg text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  title="Fechar"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Conteúdo com Scroll */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 min-h-0 bg-white">
              
              {/* Seção 1: Indicadores e Classificação */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Duração & SLA */}
                <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      Duração
                    </span>
                    {onUpdate && !isEditingTime && (
                      <button 
                        onClick={() => {
                          setEditMinutes(Math.floor(viewingTicket.durationSeconds / 60).toString());
                          setEditSeconds((viewingTicket.durationSeconds % 60).toString());
                          setIsEditingTime(true);
                        }}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                        title="Editar duração"
                      >
                        <Edit className="h-3 w-3" />
                        Editar
                      </button>
                    )}
                  </div>

                  {isEditingTime ? (
                    <div className="flex flex-wrap items-center gap-1.5 mt-1 bg-white p-2 rounded-lg border border-blue-200">
                      <input 
                        type="number" 
                        value={editMinutes} 
                        onChange={e => setEditMinutes(e.target.value)} 
                        className="w-12 px-2 py-1 text-xs border border-slate-300 rounded font-semibold focus:outline-none focus:border-blue-500" 
                        min="0"
                      />
                      <span className="text-xs text-slate-500 font-bold">m</span>
                      <input 
                        type="number" 
                        value={editSeconds} 
                        onChange={e => setEditSeconds(e.target.value)} 
                        className="w-12 px-2 py-1 text-xs border border-slate-300 rounded font-semibold focus:outline-none focus:border-blue-500" 
                        min="0" max="59"
                      />
                      <span className="text-xs text-slate-500 font-bold">s</span>
                      <button 
                        onClick={() => {
                          const newSeconds = parseInt(editMinutes || '0', 10) * 60 + parseInt(editSeconds || '0', 10);
                          const updated = { ...viewingTicket, durationSeconds: newSeconds };
                          setViewingTicket(updated);
                          if (onUpdate) onUpdate(updated);
                          setIsEditingTime(false);
                        }}
                        className="p-1 rounded bg-emerald-100 text-emerald-700 hover:bg-emerald-200 cursor-pointer ml-1"
                        title="Salvar"
                      >
                        <Check className="h-3.5 w-3.5" />
                      </button>
                      <button 
                        onClick={() => setIsEditingTime(false)} 
                        className="p-1 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
                        title="Cancelar"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-slate-800">
                        {formatDuration(viewingTicket.durationSeconds)}
                      </span>
                      {viewingTicket.durationSeconds <= (appSettings?.sla?.otima || 10) * 60 ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Dentro da Meta</span>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">Acima de {appSettings?.sla?.otima || 10}m</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Categoria */}
                <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5 text-slate-400" />
                    Categoria
                  </span>
                  {onUpdate ? (
                    <div className="bg-white rounded-lg border border-slate-200 px-1 py-0.5">
                      <SearchableCategorySelect
                        value={viewingTicket.category || ''}
                        onChange={(cat) => {
                          const updated = { ...viewingTicket, category: cat };
                          setViewingTicket(updated);
                          onUpdate(updated);
                        }}
                        categories={appSettings.categories}
                        variant="underlined"
                      />
                    </div>
                  ) : (
                    <span className="text-sm font-bold text-slate-800 truncate">
                      {viewingTicket.category || <span className="text-slate-400 font-normal italic">Sem categoria</span>}
                    </span>
                  )}
                </div>

                {/* FAQ Associada */}
                <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-slate-400" />
                    FAQ Associada
                  </span>
                  {onUpdate ? (
                    <div className="bg-white rounded-lg border border-slate-200 px-1 py-0.5">
                      <SearchableFaqSelect
                        value={viewingTicket.associatedFaqId || ''}
                        onChange={(faqId) => {
                          const updated = { ...viewingTicket, associatedFaqId: faqId };
                          setViewingTicket(updated);
                          onUpdate(updated);
                        }}
                        faqs={appSettings.faqs || []}
                        variant="underlined"
                      />
                    </div>
                  ) : (
                    <span className="text-sm font-bold text-slate-800 truncate" title={appSettings.faqs?.find(f => f.id === viewingTicket.associatedFaqId)?.name}>
                      {viewingTicket.associatedFaqId 
                        ? `FAQ #${appSettings.faqs?.find(f => f.id === viewingTicket.associatedFaqId)?.faqNumber || viewingTicket.associatedFaqId}` 
                        : <span className="text-slate-400 font-normal italic">Sem FAQ associada</span>
                      }
                    </span>
                  )}
                </div>
              </div>

              {/* Seção 2: Dados do Solicitante / Contato */}
              <div className="bg-slate-50/60 rounded-xl border border-slate-200 p-4 space-y-3">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-slate-500" />
                  Dados do Solicitante
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {/* Login e Ramal */}
                  <div className="bg-white p-3 rounded-lg border border-slate-200 flex items-start gap-2.5">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Login de Rede / Nome</span>
                      <p className="text-xs font-bold text-slate-800 break-words leading-relaxed mt-0.5">
                        {viewingTicket.networkLogin || <span className="text-slate-400 font-normal italic">Não informado</span>}
                      </p>
                      {viewingTicket.extension && (
                        <p className="text-[11px] font-medium text-slate-600 mt-1 flex items-center gap-1">
                          <Phone className="h-3 w-3 text-slate-400" />
                          Ramal: <strong className="text-slate-800">{viewingTicket.extension}</strong>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Celular / WhatsApp */}
                  <div className="bg-white p-3 rounded-lg border border-slate-200 flex items-start gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Telefone / Celular</span>
                      <p className="text-xs font-bold text-slate-800 mt-0.5">
                        {viewingTicket.mobile || <span className="text-slate-400 font-normal italic">-</span>}
                      </p>
                    </div>
                  </div>

                  {/* E-mail */}
                  <div className="bg-white p-3 rounded-lg border border-slate-200 flex items-start gap-2.5 sm:col-span-2 lg:col-span-1">
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">E-mail</span>
                        {viewingTicket.clientEmail && (
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(viewingTicket.clientEmail || '');
                              setCopiedEmail(true);
                              setTimeout(() => setCopiedEmail(false), 2000);
                            }}
                            className="text-slate-400 hover:text-blue-600 text-[10px] flex items-center gap-1 cursor-pointer"
                            title="Copiar e-mail"
                          >
                            {copiedEmail ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                          </button>
                        )}
                      </div>
                      <p className="text-xs font-bold text-slate-800 break-all mt-0.5">
                        {viewingTicket.clientEmail || <span className="text-slate-400 font-normal italic">-</span>}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seção 3: Endereços Lógicos */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Monitor className="h-3.5 w-3.5 text-slate-500" />
                  Endereços Lógicos dos Equipamentos
                </h4>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {/* Micro */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                      <Laptop className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">Micro</span>
                      <span className="text-xs font-bold text-slate-800 truncate block">
                        {viewingTicket.microLogicalAddress || <span className="text-slate-400 font-normal">-</span>}
                      </span>
                    </div>
                  </div>

                  {/* Impressora */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                      <Printer className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">Impressora</span>
                      <span className="text-xs font-bold text-slate-800 truncate block">
                        {viewingTicket.printerLogicalAddress || <span className="text-slate-400 font-normal">-</span>}
                      </span>
                    </div>
                  </div>

                  {/* Monitor */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                      <Tv className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">Monitor</span>
                      <span className="text-xs font-bold text-slate-800 truncate block">
                        {viewingTicket.monitorLogicalAddress || <span className="text-slate-400 font-normal">-</span>}
                      </span>
                    </div>
                  </div>

                  {/* Outros */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                      <HardDrive className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">Outros</span>
                      <span className="text-xs font-bold text-slate-800 truncate block">
                        {viewingTicket.otherLogicalAddress || <span className="text-slate-400 font-normal">-</span>}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seção 4: Detalhes de Escalonamento (se houver) */}
              {viewingTicket.isEscalated && viewingTicket.escalationDetails && (
                <div className="bg-blue-50/60 rounded-xl border border-blue-200 p-4 space-y-3">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
                    <Building className="h-4 w-4 text-blue-600" />
                    Dados do Escalonamento
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">Setor</span>
                      <span className="font-semibold text-slate-800">{viewingTicket.escalationDetails.setor || '-'}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">Edifício</span>
                      <span className="font-semibold text-slate-800">{viewingTicket.escalationDetails.edificio || '-'}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">Ponto de Referência</span>
                      <span className="font-semibold text-slate-800">{viewingTicket.escalationDetails.pontoReferencia || '-'}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">Contato no Local</span>
                      <span className="font-semibold text-slate-800">{viewingTicket.escalationDetails.contato || '-'}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Seção 5: Texto Estruturado (Solução da IA / Base) */}
              {viewingTicket.structuredResult && (
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4 text-purple-600" />
                        Texto Estruturado (Solução)
                      </h4>
                      <div className="flex gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                        <button
                          type="button"
                          onClick={() => setViewMode('preview')}
                          className={cn(
                            "px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer",
                            viewMode === 'preview'
                              ? "bg-white text-slate-800 shadow-2xs"
                              : "text-slate-500 hover:text-slate-700"
                          )}
                        >
                          Visualização Formatada
                        </button>
                        <button
                          type="button"
                          onClick={() => setViewMode('code')}
                          className={cn(
                            "px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer",
                            viewMode === 'code'
                              ? "bg-white text-slate-800 shadow-2xs"
                              : "text-slate-500 hover:text-slate-700"
                          )}
                        >
                          Código HTML
                        </button>
                      </div>
                    </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={handleCopyTextResult}
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors bg-white hover:bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg cursor-pointer shadow-2xs"
                      title="Copiar texto limpo sem tags HTML (ideal para colar em chamados ou chats)"
                    >
                      {copiedTextResult ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <FileText className="h-3.5 w-3.5 text-indigo-600" />}
                      {copiedTextResult ? <span className="text-emerald-600">Texto Copiado!</span> : <span>Copiar Texto</span>}
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyResult}
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors bg-white hover:bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg cursor-pointer shadow-2xs"
                    >
                      {copiedResult ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                      {copiedResult ? <span className="text-emerald-600">HTML Copiado!</span> : <span>Copiar HTML</span>}
                    </button>
                  </div>
                </div>
                  
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                    {/* Barra de atalhos rápidos por campo */}
                    {viewMode === 'preview' && (() => {
                      const parsedSections = parseTicketHtmlSections(viewingTicket.structuredResult);
                      if (parsedSections.length === 0) return null;

                      return (
                        <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 shadow-2xs flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 pl-1">
                            <Copy className="h-3.5 w-3.5 text-indigo-600" />
                            Copiar por campo (somente texto):
                          </span>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {parsedSections.map((sec) => {
                              const isCopied = copiedSectionId === sec.id;
                              return (
                                <button
                                  key={sec.id}
                                  type="button"
                                  onClick={() => {
                                    navigator.clipboard.writeText(sec.content);
                                    setCopiedSectionId(sec.id);
                                    setTimeout(() => setCopiedSectionId(null), 2000);
                                  }}
                                  className={cn(
                                    "flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all cursor-pointer shadow-2xs",
                                    isCopied
                                      ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200"
                                  )}
                                  title={`Copiar apenas o texto de: ${sec.title}`}
                                >
                                  {isCopied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5 opacity-60" />}
                                  <span>{isCopied ? `${sec.title} copiada!` : sec.title}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })()}

                    {viewMode === 'preview' ? (
                      <div 
                        className="text-sm text-slate-800 leading-relaxed bg-white rounded-lg border border-slate-200 p-4 shadow-2xs [&>p]:mb-2 [&>ul]:list-disc [&>ul]:ml-5 [&>ol]:list-decimal [&>ol]:ml-5 select-text"
                        onCopy={(e) => {
                          const selection = window.getSelection();
                          if (selection && selection.toString()) {
                            e.clipboardData.setData('text/plain', selection.toString());
                            e.preventDefault();
                          }
                        }}
                        dangerouslySetInnerHTML={{ __html: viewingTicket.structuredResult }}
                      />
                    ) : (
                      <pre className="whitespace-pre-wrap font-mono text-xs text-slate-700 leading-relaxed bg-white rounded-lg border border-slate-200 p-4 shadow-2xs overflow-x-auto">
                        {viewingTicket.structuredResult}
                      </pre>
                    )}
                  </div>
                </div>
              )}

              {/* Seção 6: Descrição Original */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-slate-500" />
                  Descrição Original Registrada
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <pre className="whitespace-pre-wrap font-sans text-xs text-slate-700 leading-relaxed">
                    {viewingTicket.description || <span className="italic text-slate-400">Nenhuma descrição original registrada.</span>}
                  </pre>
                </div>
              </div>

            </div>

            {/* Rodapé do Modal */}
            <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-400">
                Registro arquivado e finalizado no sistema.
              </span>
              <button 
                type="button"
                onClick={() => setViewingTicket(null)}
                className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors shadow-2xs cursor-pointer"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}
      </div>
    </div>
  );
}
