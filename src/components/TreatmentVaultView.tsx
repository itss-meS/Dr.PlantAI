import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  Leaf,
  FlaskConical,
  ChevronDown,
  ChevronUp,
  Languages,
  Bug,
  Sparkles,
  Droplet
} from 'lucide-react';
import { TreatmentVaultItem, LanguageCode } from '../types';
import { SUPPORTED_LANGUAGES, FARM_CANOPY_IMG } from '../data/treatmentVaultData';
import { watermelonDB } from '../lib/watermelon-db';
import { getTranslation } from '../data/translations';

interface TreatmentVaultViewProps {
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  onSelectForInspection?: (item: TreatmentVaultItem) => void;
  darkMode?: boolean;
}

export const TreatmentVaultView: React.FC<TreatmentVaultViewProps> = ({
  currentLanguage,
  onLanguageChange,
  darkMode = false,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCrop, setSelectedCrop] = useState<string>('All');
  const [expandedItemId, setExpandedItemId] = useState<string | null>('tomato_early_blight');
  const [tankSize, setTankSize] = useState<number>(15);

  const t = getTranslation(currentLanguage);
  const vaultItems = watermelonDB.searchVault(searchQuery);
  const crops = ['All', ...Array.from(new Set(watermelonDB.getVaultItems().map((v) => v.crop)))];

  const filteredItems = vaultItems.filter((item) => {
    if (selectedCrop === 'All') return true;
    return item.crop === selectedCrop;
  });

  const getPathogenBadge = (type: string) => {
    switch (type) {
      case 'fungus':
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
            Fungal
          </span>
        );
      case 'bacteria':
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30">
            Bacterial
          </span>
        );
      case 'virus':
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">
            Viral
          </span>
        );
      case 'healthy':
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            Optimal Vitality
          </span>
        );
      default:
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            Pathology
          </span>
        );
    }
  };

  return (
    <div
      className={`flex-1 overflow-y-auto p-4 space-y-3.5 select-none transition-colors ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Visual Header Banner with Farm Canopy */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xs">
        <img
          src={FARM_CANOPY_IMG}
          alt="Agricultural crop field canopy"
          className="w-full h-24 object-cover brightness-95"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-3.5 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-[#14532D] text-white flex items-center justify-center shadow-xs">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-black tracking-tight">{t.vaultTitle}</h2>
                <span className="text-[10px] text-emerald-300 font-semibold">
                  {t.vaultSubtitle}
                </span>
              </div>
            </div>

            {/* In-Vault Language Picker */}
            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-xl px-2 py-1">
              <Languages className="w-3.5 h-3.5 text-emerald-300" />
              <select
                value={currentLanguage}
                onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
                className="bg-transparent text-xs font-bold text-white outline-none cursor-pointer"
              >
                {SUPPORTED_LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code} className="text-slate-900">
                    {l.flag} {l.nativeName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          className={`w-full pl-9 pr-3 py-2.5 rounded-2xl border text-xs placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-all shadow-xs ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-white focus:bg-slate-850'
              : 'bg-slate-50 border-slate-200 text-slate-900 focus:bg-white'
          }`}
        />
      </div>

      {/* Crop Filter Horizontal Carousel */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {crops.map((crop) => (
          <button
            key={crop}
            type="button"
            onClick={() => setSelectedCrop(crop)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCrop === crop
                ? 'bg-[#14532D] text-white shadow-xs'
                : darkMode
                ? 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-850'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {crop === 'All' ? t.allCropsFilter : crop}
          </button>
        ))}
      </div>

      {/* Vault Items List */}
      <div className="space-y-3">
        {filteredItems.map((item) => {
          const trans = item.translations[currentLanguage] || item.translations.en;
          const isExpanded = expandedItemId === item.id;

          return (
            <div
              key={item.id}
              className={`rounded-3xl border transition-all overflow-hidden shadow-xs ${
                isExpanded
                  ? darkMode
                    ? 'border-emerald-500/50 bg-slate-900 ring-1 ring-emerald-500/20'
                    : 'border-[#14532D]/40 bg-white ring-1 ring-[#14532D]/15'
                  : darkMode
                  ? 'border-slate-800 bg-slate-900/70 hover:border-slate-700'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {/* Item Card Header */}
              <div
                onClick={() => setExpandedItemId(isExpanded ? null : item.id)}
                className="p-3.5 flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Crop Leaf Photo */}
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 relative">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.disease}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-emerald-500/10 text-emerald-500">
                        <Leaf className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                        {item.crop}
                      </span>
                      {getPathogenBadge(item.pathogenType)}
                    </div>
                    <h3 className="font-extrabold text-xs truncate">
                      {trans.title || item.disease}
                    </h3>
                    <p className="text-[11px] opacity-60 italic truncate">
                      {item.pathogenScientificName}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  <div className="p-1 opacity-50">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Expanded Details with Photo & Remedies */}
              {isExpanded && (
                <div
                  className={`p-4 pt-0 border-t space-y-3.5 text-xs transition-colors ${
                    darkMode ? 'border-slate-800' : 'border-slate-100'
                  }`}
                >
                  {/* Real Image Banner Preview */}
                  {item.imageUrl && (
                    <div className="relative rounded-2xl overflow-hidden mt-3 border border-slate-200 dark:border-slate-700">
                      <img
                        src={item.imageUrl}
                        alt={item.disease}
                        className="w-full h-36 object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>Field Specimen Photo</span>
                      </div>
                    </div>
                  )}

                  {/* Pathology Summary */}
                  <div
                    className={`p-3 rounded-2xl border ${
                      darkMode
                        ? 'bg-emerald-950/20 border-emerald-800/40 text-slate-200'
                        : 'bg-[#14532D]/5 border-[#14532D]/15 text-slate-800'
                    }`}
                  >
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400 block mb-0.5">
                      {trans.title}
                    </span>
                    <p className="leading-relaxed opacity-90">{trans.summary}</p>
                  </div>

                  {/* Knapsack Sprayer Dosage Calculator */}
                  <div
                    className={`p-3.5 rounded-2xl border ${
                      darkMode
                        ? 'bg-slate-850 border-slate-750'
                        : 'bg-slate-50 border-slate-200/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 font-extrabold text-xs">
                        <Droplet className="w-4 h-4 text-blue-500" />
                        <span>{t.knapsackCalculatorTitle}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700">
                        {[10, 15, 20].map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setTankSize(size)}
                            className={`px-2 py-0.5 rounded-lg text-[10px] font-bold cursor-pointer transition-all ${
                              tankSize === size
                                ? 'bg-[#14532D] text-white shadow-xs'
                                : 'opacity-60 hover:opacity-100'
                            }`}
                          >
                            {size}L
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                      <div className="p-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-750">
                        <span className="opacity-60 block font-medium">{t.waterLabel}</span>
                        <span className="font-extrabold text-blue-600 dark:text-blue-400 text-xs">
                          {tankSize} Liters
                        </span>
                      </div>
                      <div className="p-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-750">
                        <span className="opacity-60 block font-medium">{t.dosageLabel}</span>
                        <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-xs">
                          {((tankSize / 15) * 35).toFixed(0)} - {((tankSize / 15) * 45).toFixed(0)} ml/g
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Organic Bio-Remedies Section */}
                  <div className="space-y-2">
                    <span className="font-extrabold text-xs flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                      <Leaf className="w-3.5 h-3.5" />
                      {t.organicRemediesTab}
                    </span>

                    <div className="space-y-2">
                      {item.organicRemedies.map((rem, rIdx) => (
                        <div
                          key={rIdx}
                          className={`p-3 rounded-2xl border space-y-1.5 ${
                            darkMode
                              ? 'bg-slate-900 border-slate-750'
                              : 'bg-white border-slate-200'
                          }`}
                        >
                          <div className="flex items-center justify-between font-bold text-xs">
                            <span>{rem.name}</span>
                            <span className="text-[10px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                              {rem.costEstimate}
                            </span>
                          </div>

                          <div className="text-[11px] space-y-1 opacity-90 leading-relaxed">
                            <p>
                              <strong>Recipe:</strong> {rem.recipe}
                            </p>
                            <p>
                              <strong>Application:</strong> {rem.applicationMethod}
                            </p>
                            <div className="flex gap-4 pt-0.5 opacity-60 text-[10px]">
                              <span>⏱ Prep: {rem.prepTime}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Chemical Treatments Table */}
                  <div className="space-y-2 pt-1">
                    <span className="font-extrabold text-xs flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                      <FlaskConical className="w-3.5 h-3.5" />
                      {t.chemicalControlTab}
                    </span>

                    <div className="space-y-2">
                      {item.chemicalTreatments.map((chem, cIdx) => (
                        <div
                          key={cIdx}
                          className={`p-3 rounded-2xl border space-y-1 text-xs ${
                            darkMode
                              ? 'bg-slate-900 border-slate-750'
                              : 'bg-white border-slate-200'
                          }`}
                        >
                          <div className="flex items-center justify-between font-bold">
                            <span>{chem.activeIngredient}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400">
                              {chem.toxicityLevel}
                            </span>
                          </div>
                          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                            Tank Dose (15L): {chem.dosagePer15LKnapsack}
                          </p>
                          <div className="flex items-center justify-between text-[10px] opacity-70 pt-0.5">
                            <span>Trade Names: {chem.tradeNames.join(', ')}</span>
                            <span className="font-bold">PHI: {chem.safetyIntervalDays} Days</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
