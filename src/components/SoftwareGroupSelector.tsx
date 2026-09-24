import React from 'react';
import { 
  Layers, 
  Monitor, 
  Building2, 
  Server, 
  FileCode, 
  Shield, 
  HeartHandshake,
  Check,
  X
} from 'lucide-react';
import { SoftwareGroupType, SOFTWARE_GROUPS } from '@/lib/softwareCatalog';

interface SoftwareGroupSelectorProps {
  selectedGroup: SoftwareGroupType;
  onSelectGroup: (group: SoftwareGroupType) => void;
  groupCounts: Record<SoftwareGroupType, number>;
  systemsCountByGroup: Record<SoftwareGroupType, number>;
}

interface GroupMetadata {
  shortLabel: string;
  tagline: string;
  accentColor: string;
  iconBg: string;
  activeBg: string;
  activeBorder: string;
  icon: React.ComponentType<{ className?: string }>;
}

const GROUP_CONFIG: Record<SoftwareGroupType, GroupMetadata> = {
  TODOS: {
    shortLabel: 'Todos os Sistemas',
    tagline: 'Visão geral consolidada',
    accentColor: 'text-blue-400',
    iconBg: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    activeBg: 'from-blue-600 to-indigo-700',
    activeBorder: 'border-blue-400',
    icon: Layers
  },
  APLICATIVOS_DESKTOP: {
    shortLabel: 'Softwares Gerais',
    tagline: 'Apps locais & desktop',
    accentColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    activeBg: 'from-indigo-600 to-indigo-800',
    activeBorder: 'border-indigo-400',
    icon: Monitor
  },
  SISTEMAS_INTERNOS: {
    shortLabel: 'Sistemas Internos',
    tagline: 'Portais & sistemas SF',
    accentColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    activeBg: 'from-emerald-600 to-teal-800',
    activeBorder: 'border-emerald-400',
    icon: Building2
  },
  TECNOLOGIA_INFRA: {
    shortLabel: 'Tecnologia & Infra',
    tagline: 'Rede, nuvem & suporte',
    accentColor: 'text-violet-400',
    iconBg: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    activeBg: 'from-violet-600 to-purple-800',
    activeBorder: 'border-violet-400',
    icon: Server
  },
  LEGISLATIVO_PARLAMENTAR: {
    shortLabel: 'Processo Legislativo',
    tagline: 'Plenário, votações & leis',
    accentColor: 'text-amber-400',
    iconBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    activeBg: 'from-amber-600 to-orange-700',
    activeBorder: 'border-amber-400',
    icon: FileCode
  },
  SEGURANCA_POLICIA: {
    shortLabel: 'Segurança & Polícia',
    tagline: 'Acesso, CFTV & SPOL',
    accentColor: 'text-rose-400',
    iconBg: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    activeBg: 'from-rose-600 to-red-800',
    activeBorder: 'border-rose-400',
    icon: Shield
  },
  GESTAO_RH_SAUDE: {
    shortLabel: 'Gestão de Pessoas / RH',
    tagline: 'SIS Saúde, benefícios & folha',
    accentColor: 'text-teal-400',
    iconBg: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    activeBg: 'from-teal-600 to-cyan-800',
    activeBorder: 'border-teal-400',
    icon: HeartHandshake
  }
};

export const SoftwareGroupSelector: React.FC<SoftwareGroupSelectorProps> = ({
  selectedGroup,
  onSelectGroup,
  groupCounts,
  systemsCountByGroup,
}) => {
  const currentTotal = groupCounts[selectedGroup] || 0;

  return (
    <div className="w-full bg-slate-900/95 text-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-800/90 backdrop-blur-sm">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 mb-3.5 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse ring-4 ring-indigo-400/20"></span>
            <h2 className="text-sm sm:text-base font-bold tracking-tight text-white">
              Categorização de Softwares & Sistemas
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Selecione uma categoria para filtrar instantaneamente os softwares ou sistemas correspondentes
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {selectedGroup !== 'TODOS' && (
            <button
              onClick={() => onSelectGroup('TODOS')}
              className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors"
              title="Voltar para todos os sistemas"
            >
              <X className="h-3.5 w-3.5 text-slate-400" />
              Limpar filtro
            </button>
          )}
          <div className="text-xs font-semibold px-3 py-1 bg-slate-800 text-indigo-300 border border-slate-700/70 rounded-lg shadow-inner">
            <span className="text-white font-bold">{currentTotal}</span> FAQs disponíveis
          </div>
        </div>
      </div>

      {/* Grid of categories - Responsive with no text truncation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
        {SOFTWARE_GROUPS.map((group) => {
          const isSelected = selectedGroup === group.id;
          const config = GROUP_CONFIG[group.id] || GROUP_CONFIG.TODOS;
          const IconComponent = config.icon;
          const faqCount = groupCounts[group.id] || 0;
          const sysCount = systemsCountByGroup[group.id] || 0;

          return (
            <button
              key={group.id}
              type="button"
              onClick={() => onSelectGroup(group.id)}
              title={group.description}
              className={`relative group flex flex-col justify-between p-3 rounded-xl transition-all duration-200 text-left border cursor-pointer outline-none ${
                isSelected
                  ? `bg-gradient-to-b ${config.activeBg} ${config.activeBorder} text-white shadow-lg ring-2 ring-white/20 scale-[1.02]`
                  : 'bg-slate-800/80 hover:bg-slate-800 border-slate-700/80 hover:border-slate-600 text-slate-200 hover:shadow-md'
              }`}
            >
              {isSelected && (
                <div className="absolute top-2.5 right-2.5 p-1 bg-white/20 rounded-full shadow-xs">
                  <Check className="h-3 w-3 text-white" />
                </div>
              )}

              <div>
                {/* Icon box */}
                <div
                  className={`inline-flex p-2 rounded-lg mb-2.5 border transition-transform duration-200 group-hover:scale-105 ${
                    isSelected ? 'bg-white/20 text-white border-white/30' : config.iconBg
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                </div>

                {/* Readable Title without truncation */}
                <div className="min-h-[2.4rem] flex items-center mb-1">
                  <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-slate-100 group-hover:text-white'}`}>
                    {config.shortLabel}
                  </span>
                </div>
              </div>

              {/* Counters */}
              <div className="pt-2 border-t border-white/10 mt-1 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 font-medium">
                  <span className={`font-bold ${isSelected ? 'text-white' : 'text-slate-100'}`}>
                    {faqCount}
                  </span>
                  <span className={isSelected ? 'text-blue-100' : 'text-slate-400'}>
                    FAQs
                  </span>
                </div>

                {group.id !== 'TODOS' && sysCount > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-white font-medium' : 'bg-slate-700/60 text-slate-300'
                  }`}>
                    {sysCount} sist.
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
