import React, { useState, useRef, useEffect } from 'react';
import { Sprout, Sun, Moon, Globe, Info, Check, ChevronDown } from 'lucide-react';
import { LanguageCode } from '../types';
import { SUPPORTED_LANGUAGES } from '../data/treatmentVaultData';
import { getTranslation } from '../data/translations';

interface OfflineStatusBannerProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  onOpenArchitectureModal?: () => void;
}

export const OfflineStatusBanner: React.FC<OfflineStatusBannerProps> = ({
  darkMode,
  onToggleDarkMode,
  currentLanguage,
  onLanguageChange,
  onOpenArchitectureModal,
}) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const t = getTranslation(currentLanguage);

  const activeLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    if (isLangMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangMenuOpen]);

  return (
    <header
      className={`border-b flex items-center justify-between px-3.5 py-2.5 sticky top-0 z-30 select-none transition-colors ${
        darkMode
          ? 'bg-slate-900 border-slate-800 text-white'
          : 'bg-white border-slate-100 text-slate-900'
      }`}
    >
      {/* Brand */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-[#14532D] text-white flex items-center justify-center shrink-0 shadow-xs">
          <Sprout className="w-4 h-4 stroke-[2.4]" />
        </div>
        <h1
          className={`text-sm font-black tracking-tight leading-none ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          Dr. Plant <span className="text-emerald-500">AI</span>
        </h1>
      </div>

      {/* Action Controls: Translate, Dark/Light Mode, Info */}
      <div className="flex items-center gap-1.5 relative" ref={langMenuRef}>
        {/* Global Translation Selector */}
        <button
          type="button"
          onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
          title={t.translateApp}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
            isLangMenuOpen
              ? 'bg-[#14532D] text-white border-[#14532D] shadow-xs'
              : darkMode
              ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-750'
              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Globe className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-[11px] font-semibold flex items-center gap-1">
            <span>{activeLangObj.flag}</span>
            <span>{activeLangObj.nativeName}</span>
          </span>
          <ChevronDown className={`w-3 h-3 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Language Dropdown Menu */}
        {isLangMenuOpen && (
          <div
            className={`absolute top-full right-0 mt-1.5 w-48 rounded-2xl shadow-xl border overflow-hidden z-50 p-1 animate-in fade-in zoom-in-95 duration-150 ${
              darkMode
                ? 'bg-slate-900 border-slate-700 text-slate-100 divide-slate-800'
                : 'bg-white border-slate-200 text-slate-800 divide-slate-100'
            }`}
          >
            <div className="px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
              {t.translateApp}
            </div>
            <div className="space-y-0.5 max-h-56 overflow-y-auto">
              {SUPPORTED_LANGUAGES.map((lang) => {
                const isSelected = lang.code === currentLanguage;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full px-2.5 py-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#14532D] text-white font-bold'
                        : darkMode
                        ? 'hover:bg-slate-800 text-slate-200'
                        : 'hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.nativeName}</span>
                      <span className="text-[10px] opacity-70">({lang.name})</span>
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Dark Mode / Light Mode Toggle */}
        <button
          type="button"
          onClick={onToggleDarkMode}
          title={darkMode ? t.lightModeToggle : t.darkModeToggle}
          className={`p-2 rounded-xl text-xs transition-colors cursor-pointer border ${
            darkMode
              ? 'bg-slate-800 border-slate-700 text-amber-300 hover:bg-slate-750'
              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
          }`}
        >
          {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
        </button>

        {/* Edge Architecture Specs Modal Trigger */}
        {onOpenArchitectureModal && (
          <button
            type="button"
            onClick={onOpenArchitectureModal}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              darkMode
                ? 'border-slate-700 bg-slate-800 text-slate-400 hover:text-emerald-400 hover:bg-slate-750'
                : 'border-slate-200 bg-slate-50 text-slate-500 hover:text-[#14532D] hover:bg-slate-100'
            }`}
            title={t.architectureSpecs}
          >
            <Info className="w-4 h-4" />
          </button>
        )}
      </div>
    </header>
  );
};
