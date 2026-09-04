import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  Layers, 
  Monitor, 
  Building2, 
  Server, 
  FileCode, 
  Shield, 
  HeartHandshake,
  CheckCircle2,
  X,
  FileText
} from 'lucide-react';
import { FAQ } from '@/types';
import { SoftwareGroupType, SOFTWARE_GROUPS, categorizeSystem } from '@/lib/softwareCatalog';

interface SoftwareDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  faqs: FAQ[];
  onSelectSystem: (systemName: string, group: SoftwareGroupType) => void;
}

const ICONS_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Monitor,
  Building2,
  Server,
  FileCode,
  Shield,
  HeartHandshake,
};

export const SoftwareDirectoryModal: React.FC<SoftwareDirectoryModalProps> = ({
  isOpen,
  onClose,
  faqs,
  onSelectSystem,
}) => {
  const [search, setSearch] = useState('');
  const [selectedTab, setSelectedTab] = useState<SoftwareGroupType>('TODOS');

  // Mapeamento de cada sistema com sua contagem de FAQs e grupo
  const systemsData = useMemo(() => {
    const map = new Map<string, { system: string; count: number; group: SoftwareGroupType; sampleFaq: string }>();

    faqs.forEach((faq) => {
      const sys = faq.system?.trim();
      if (!sys) return;
      const group = categorizeSystem(sys, faq.category, faq.subject);
      const existing = map.get(sys);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(sys, {
          system: sys,
          count: 1,
          group,
          sampleFaq: faq.name,
        });
      }
    });

    return Array.from(map.values()).sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      return a.system.localeCompare(b.system);
    });
  }, [faqs]);

  // Filtragem
  const filteredSystems = useMemo(() => {
    const query = search.toLowerCase().trim();
    return systemsData.filter((item) => {
      const matchesGroup = selectedTab === 'TODOS' || item.group === selectedTab;
      const matchesQuery = !query || item.system.toLowerCase().includes(query) || item.sampleFaq.toLowerCase().includes(query);
      return matchesGroup && matchesQuery;
    });
  }, [systemsData, selectedTab, search]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
              <Layers className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">Diretório Completo de Softwares & Sistemas</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Navegue visualmente por todos os softwares comerciais e sistemas internos catalogados no Senado Federal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 rounded-xl transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Filter bar and search */}
        <div className="p-6 border-b border-slate-200 space-y-4 bg-white">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Digite o nome de um software ou sistema para filtrar (ex: Adobe, Teams, SIGAD, SIS, Kubernetes)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 text-slate-800"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-200/80 px-2 py-0.5 rounded"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {SOFTWARE_GROUPS.map((group) => {
              const isSelected = selectedTab === group.id;
              const Icon = ICONS_MAP[group.iconName] || Layers;
              const count = group.id === 'TODOS' 
                ? systemsData.length 
                : systemsData.filter(s => s.group === group.id).length;

              return (
                <button
                  key={group.id}
                  onClick={() => setSelectedTab(group.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg font-bold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{group.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold ${
                      isSelected ? 'bg-indigo-800 text-indigo-100' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-3 px-1">
            <span>Encontrados <strong>{filteredSystems.length}</strong> sistemas / softwares</span>
            <span>Clique em qualquer item para filtrar na Base de FAQs</span>
          </div>

          {filteredSystems.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
              <Layers className="h-10 w-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-700">Nenhum software ou sistema encontrado</p>
              <p className="text-xs text-slate-500 mt-1">Tente remover os filtros ou pesquisar com outro termo.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredSystems.map((item) => {
                const groupConfig = SOFTWARE_GROUPS.find(g => g.id === item.group) || SOFTWARE_GROUPS[0];
                const Icon = ICONS_MAP[groupConfig.iconName] || Layers;

                return (
                  <button
                    key={item.system}
                    onClick={() => {
                      onSelectSystem(item.system, item.group);
                      onClose();
                    }}
                    className="flex flex-col text-left p-4 bg-white border border-slate-200 hover:border-indigo-500/60 rounded-xl hover:shadow-md transition-all group relative overflow-hidden"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="p-2 bg-indigo-50 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-lg transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-full group-hover:bg-indigo-50 group-hover:text-indigo-700">
                        <FileText className="h-3 w-3" />
                        {item.count} {item.count === 1 ? 'procedimento' : 'procedimentos'}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {item.system}
                    </h4>

                    <span className="text-[11px] font-medium text-slate-400 mt-1">
                      {groupConfig.label}
                    </span>

                    <p className="text-[11px] text-slate-500 mt-2 line-clamp-1 italic">
                      Ex: {item.sampleFaq}
                    </p>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-white flex items-center justify-between text-xs text-slate-500">
          <span>Dica: utilize a barra de busca para localizar tanto o nome oficial quanto termos populares.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
