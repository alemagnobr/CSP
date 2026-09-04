import React from 'react';
import { 
  Layers, 
  Monitor, 
  Building2, 
  Server, 
  FileCode, 
  Shield, 
  HeartHandshake,
  Check
} from 'lucide-react';
import { SoftwareGroupType, SOFTWARE_GROUPS } from '@/lib/softwareCatalog';

interface SoftwareGroupSelectorProps {
  selectedGroup: SoftwareGroupType;
  onSelectGroup: (group: SoftwareGroupType) => void;
  groupCounts: Record<SoftwareGroupType, number>;
  systemsCountByGroup: Record<SoftwareGroupType, number>;
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

export const SoftwareGroupSelector: React.FC<SoftwareGroupSelectorProps> = ({
  selectedGroup,
  onSelectGroup,
  groupCounts,
  systemsCountByGroup,
}) => {
  return (
    <div className="w-full bg-slate-900 text-white rounded-2xl p-4 shadow-md border border-slate-800">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
        <div>
          <h2 className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Categorização de Softwares & Sistemas
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Selecione uma categoria para filtrar instantaneamente os softwares ou sistemas correspondentes
          </p>
        </div>
        <div className="text-xs font-semibold px-2.5 py-1 bg-slate-800/90 text-indigo-300 border border-slate-700/60 rounded-lg self-start md:self-auto">
          {groupCounts[selectedGroup] || 0} procedimentos encontrados
        </div>
      </div>

      {/* Grid of categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
        {SOFTWARE_GROUPS.map((group) => {
          const isSelected = selectedGroup === group.id;
          const IconComponent = ICONS_MAP[group.iconName] || Layers;
          const faqCount = groupCounts[group.id] || 0;
          const sysCount = systemsCountByGroup[group.id] || 0;

          return (
            <button
              key={group.id}
              type="button"
              onClick={() => onSelectGroup(group.id)}
              className={`relative flex flex-col items-start p-3 rounded-xl transition-all duration-200 text-left border ${
                isSelected
                  ? 'bg-gradient-to-b from-indigo-600 to-indigo-700 border-indigo-400/80 text-white shadow-lg shadow-indigo-950/40 ring-2 ring-indigo-400/40'
                  : 'bg-slate-800/70 hover:bg-slate-800 border-slate-700/70 text-slate-200 hover:border-slate-600'
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 p-0.5 bg-white/20 rounded-full">
                  <Check className="h-3 w-3 text-white" />
                </div>
              )}
              <div
                className={`p-2 rounded-lg mb-2 ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-700/70 text-indigo-300'
                }`}
              >
                <IconComponent className="h-4 w-4" />
              </div>
              <span className="text-xs font-bold leading-snug line-clamp-1">
                {group.label}
              </span>
              <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-300/80">
                <span className="font-semibold text-white">{faqCount}</span> FAQs
                {group.id !== 'TODOS' && (
                  <>
                    <span>•</span>
                    <span>{sysCount} sist.</span>
                  </>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
