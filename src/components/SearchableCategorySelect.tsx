import { useState, useRef, useEffect, useMemo } from 'react';
import { Search, Check, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchableCategorySelectProps {
  value: string;
  onChange: (value: string) => void;
  categories: string[];
  variant?: 'badge' | 'underlined' | 'filter';
  emptyLabel?: string;
}

export function SearchableCategorySelect({ value, onChange, categories = [], variant = 'badge', emptyLabel = 'Sem categoria' }: SearchableCategorySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return categories;
    const lowerSearch = search.toLowerCase();
    return categories.filter(cat => cat.toLowerCase().includes(lowerSearch));
  }, [categories, search]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Focus search input on open
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (cat: string) => {
    onChange(cat);
    setIsOpen(false);
    setSearch('');
  };

  const getTriggerClasses = () => {
    if (variant === 'badge') {
      return "inline-flex items-center gap-1 max-w-[150px] truncate px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold outline-none cursor-pointer hover:bg-indigo-100 transition-colors text-left";
    }
    if (variant === 'filter') {
      return "bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between px-3 py-1.5 outline-none font-medium h-[36px] w-[180px]";
    }
    return "inline-flex items-center justify-between gap-2 text-sm font-bold text-slate-800 bg-transparent outline-none cursor-pointer border-b border-slate-200 hover:border-slate-400 truncate w-full py-0.5 text-left";
  };

  return (
    <div className={cn("relative", variant !== 'badge' ? "w-full" : "inline-block")} ref={containerRef}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className={getTriggerClasses()}
        title={value || emptyLabel}
      >
        <span className="truncate flex-1">
          {value || emptyLabel}
        </span>
        <ChevronDown className={cn("h-3 w-3 shrink-0 opacity-60 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div 
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "absolute z-[9999] mt-1 bg-white rounded-xl shadow-xl border border-slate-200 py-2 text-left animate-fade-in",
            variant === 'underlined' ? "w-full min-w-[200px] left-0 sm:left-auto sm:right-0" : 
            variant === 'filter' ? "w-full min-w-[220px] left-0" : 
            "w-[260px] left-0 sm:left-auto sm:right-0"
          )}
        >
          {/* Search Header */}
          <div className="px-3 pb-2 pt-1 border-b border-slate-100 flex items-center gap-2">
            <Search className="h-4 w-4 text-slate-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar categoria..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-xs text-slate-800 placeholder-slate-400 focus:ring-0 p-0"
            />
            {search && (
              <button onClick={() => setSearch('')} className="p-0.5 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600">
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* List of Categories */}
          <div className="max-h-[240px] overflow-y-auto py-1 divide-y divide-slate-50">
            {/* Empty Option */}
            <button
              type="button"
              onClick={() => handleSelect('')}
              className={cn(
                "w-full text-left pl-9 pr-4 py-2 text-xs flex items-center justify-between transition-colors hover:bg-slate-50",
                !value ? "text-indigo-700 bg-indigo-50/50 font-bold" : "text-slate-600"
              )}
            >
              <span>{emptyLabel}</span>
              {!value && <Check className="h-3 w-3 text-indigo-600" />}
            </button>

            {filteredCategories.length === 0 ? (
              <div className="pl-9 pr-4 py-3 text-xs text-slate-400 italic text-left">
                Nenhuma categoria encontrada
              </div>
            ) : (
              filteredCategories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleSelect(cat)}
                  className={cn(
                    "w-full text-left pl-9 pr-4 py-2 text-xs flex items-center justify-between transition-colors hover:bg-slate-50",
                    value === cat ? "bg-indigo-50/50 text-indigo-900 font-bold" : "text-slate-700"
                  )}
                >
                  <span className="truncate">{cat}</span>
                  {value === cat && <Check className="h-3 w-3 text-indigo-600 shrink-0" />}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
