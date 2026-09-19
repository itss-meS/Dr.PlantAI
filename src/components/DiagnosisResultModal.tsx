import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  AlertTriangle,
  BookmarkCheck,
  Leaf,
  FlaskConical,
  Droplet,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { InferenceResult, LanguageCode } from '../types';
import { watermelonDB } from '../lib/watermelon-db';
import { getTranslation } from '../data/translations';

interface DiagnosisResultModalProps {
  result: InferenceResult;
  onClose: () => void;
  onSaveSuccess?: () => void;
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  darkMode?: boolean;
}

export const DiagnosisResultModal: React.FC<DiagnosisResultModalProps> = ({
  result,
  onClose,
  onSaveSuccess,
  currentLanguage,
  darkMode = false,
}) => {
  const vaultItem = watermelonDB.findVaultItemById(result.treatmentId) || watermelonDB.getVaultItems()[0];

  const [activeTab, setActiveTab] = useState<'remedy' | 'chemical' | 'prevention'>('remedy');
  const [knapsackLiters, setKnapsackLiters] = useState<number>(15);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'real' | 'saliency'>('real');

  const t = getTranslation(currentLanguage);
  const translation = vaultItem.translations[currentLanguage] || vaultItem.translations.en;

  const handleSaveToWatermelon = async () => {
    try {
      await watermelonDB.saveDiagnosis({
        crop: result.crop,
        disease: result.disease,
        pathogenType: result.pathogenType,
        confidence: result.confidence,
        severity: result.severity,
        latencyMs: result.latencyMs,
        fieldPlot: 'Field Plot 1',
        notes: translation.summary,
        capturedImageUri: result.capturedImageUri,
        treatmentId: result.treatmentId,
        languageUsed: currentLanguage,
      });
      setIsSaved(true);
      onSaveSuccess?.();
    } catch (e) {
      console.error('Failed saving diagnosis', e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto select-none animate-in fade-in duration-150">
      <div
        className={`rounded-t-3xl sm:rounded-3xl w-full max-w-md max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border transition-colors ${
          darkMode
            ? 'bg-slate-900 text-white border-slate-800'
            : 'bg-white text-slate-900 border-slate-100'
        }`}
      >
        {/* Top Header Bar */}
        <div
          className={`px-4 py-3 border-b flex items-center justify-between sticky top-0 z-10 transition-colors ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="font-extrabold text-sm">{t.modalTitle}</h3>
            <span className="text-[10px] text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 font-bold px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              {result.latencyMs}ms {t.edgeSpeed}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${
              darkMode
                ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1">
          {/* Real Leaf Image Card with Vision Switch */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/40 bg-slate-950">
            <img
              src={result.capturedImageUri}
              alt={result.disease}
              className={`w-full h-48 object-cover transition-all duration-300 ${
                viewMode === 'saliency'
                  ? 'brightness-110 contrast-150 saturate-150 sepia-50 hue-rotate-90'
                  : ''
              }`}
            />

            {/* Saliency Heatmap simulated highlights */}
            {viewMode === 'saliency' && (
              <div className="absolute inset-0 pointer-events-none bg-radial from-red-500/40 via-yellow-400/20 to-transparent flex items-center justify-center">
                <span className="text-[11px] font-mono font-bold text-red-100 bg-red-950/80 px-2.5 py-1 rounded-full border border-red-500/40 shadow-sm">
                  Pathogen Saliency CAM Focus
                </span>
              </div>
            )}

            {/* View Mode Toggle Pill */}
            <div className="absolute bottom-2.5 right-2.5 flex gap-1 bg-black/75 backdrop-blur-md p-1 rounded-xl border border-white/20">
              <button
                type="button"
                onClick={() => setViewMode('real')}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                  viewMode === 'real'
                    ? 'bg-emerald-500 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {t.realLeafTab}
              </button>
              <button
                type="button"
                onClick={() => setViewMode('saliency')}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                  viewMode === 'saliency'
                    ? 'bg-[#14532D] text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {t.heatmapTab}
              </button>
            </div>

            {/* Crop & Confidence Badge */}
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-[#14532D] text-white shadow-xs">
                {result.crop}
              </span>
              <span className="text-[11px] font-bold text-white bg-black/80 backdrop-blur-xs px-2 py-0.5 rounded-md shadow-xs border border-white/20">
                {result.confidence}% {t.confidenceMatch}
              </span>
            </div>
          </div>

          {/* Disease Title & Pathogen */}
          <div
            className={`p-3.5 rounded-2xl border transition-colors ${
              darkMode
                ? 'bg-slate-800/80 border-slate-700/80'
                : 'bg-slate-50 border-slate-100'
            }`}
          >
            <h4 className="font-extrabold text-base leading-tight">
              {translation.title || result.disease}
            </h4>
            <p className="text-xs opacity-70 italic mt-0.5">
              {vaultItem.pathogenScientificName}
            </p>
          </div>

          {/* Summary Box */}
          <p
            className={`text-xs leading-relaxed p-3.5 rounded-2xl border transition-colors ${
              darkMode
                ? 'bg-slate-800/50 border-slate-700 text-slate-200'
                : 'bg-white border-slate-100 text-slate-700'
            }`}
          >
            {translation.summary}
          </p>

          {/* Low Confidence Warning Guardrail */}
          {result.isLowConfidence && (
            <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-2xl flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-amber-900 dark:text-amber-200 block">
                  Caution: Low Neural Confidence ({result.confidence}%)
                </span>
                <p className="text-[11px] text-amber-800 dark:text-amber-300 mt-0.5 leading-relaxed">
                  Lighting or leaf focus may be degraded. Confirm symptoms with local extension agronomist before spraying.
                </p>
              </div>
            </div>
          )}

          {/* Top 3 Predictions Bar */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-extrabold opacity-75 uppercase tracking-wider block">
              {t.alternativePossibilities}
            </span>
            <div className="space-y-1">
              {result.topPredictions.map((pred, pIdx) => (
                <div
                  key={pIdx}
                  className={`p-2.5 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                    pIdx === 0
                      ? darkMode
                        ? 'bg-emerald-950/40 border-emerald-800 font-bold'
                        : 'bg-[#14532D]/5 border-[#14532D]/30 font-bold'
                      : darkMode
                      ? 'bg-slate-800/40 border-slate-700/60'
                      : 'bg-slate-50 border-slate-100'
                  }`}
                >
                  <span className="truncate">{pred.label}</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-16 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${pred.confidence}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 w-10 text-right">
                      {pred.confidence}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prescriptive Treatment Tabs */}
          <div className="space-y-3 pt-1">
            <div
              className={`flex border-b text-xs font-bold transition-colors ${
                darkMode ? 'border-slate-800' : 'border-slate-200'
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveTab('remedy')}
                className={`flex-1 pb-2.5 flex items-center justify-center gap-1.5 border-b-2 cursor-pointer transition-all ${
                  activeTab === 'remedy'
                    ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-extrabold'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Leaf className="w-3.5 h-3.5" />
                <span>{t.organicRemediesTab}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('chemical')}
                className={`flex-1 pb-2.5 flex items-center justify-center gap-1.5 border-b-2 cursor-pointer transition-all ${
                  activeTab === 'chemical'
                    ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-extrabold'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <FlaskConical className="w-3.5 h-3.5" />
                <span>{t.chemicalControlTab}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('prevention')}
                className={`flex-1 pb-2.5 flex items-center justify-center gap-1.5 border-b-2 cursor-pointer transition-all ${
                  activeTab === 'prevention'
                    ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-extrabold'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Prevention</span>
              </button>
            </div>

            {/* Organic Tab Content */}
            {activeTab === 'remedy' && (
              <div className="space-y-2.5">
                {vaultItem.organicRemedies.map((rem, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl border text-xs space-y-1.5 transition-colors ${
                      darkMode
                        ? 'bg-slate-800/60 border-slate-700/80'
                        : 'bg-slate-50 border-slate-200/80'
                    }`}
                  >
                    <div className="flex justify-between items-center font-bold">
                      <span className="text-emerald-600 dark:text-emerald-400">{rem.name}</span>
                      <span className="text-[10px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                        {rem.costEstimate}
                      </span>
                    </div>
                    <p className="leading-relaxed">
                      <strong>Recipe: </strong>{rem.recipe}
                    </p>
                    <p className="opacity-75 text-[11px]">
                      <strong>Application: </strong>{rem.applicationMethod}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Chemical Knapsack Tab Content */}
            {activeTab === 'chemical' && (
              <div className="space-y-2.5">
                <div
                  className={`p-3.5 rounded-2xl border text-xs transition-colors ${
                    darkMode
                      ? 'bg-slate-800/60 border-slate-700/80'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold flex items-center gap-1.5">
                      <Droplet className="w-3.5 h-3.5 text-blue-500" />
                      Knapsack Sprayer Tank ({knapsackLiters}L)
                    </span>
                    <div className="flex gap-1">
                      {[10, 15, 20].map((liters) => (
                        <button
                          key={liters}
                          type="button"
                          onClick={() => setKnapsackLiters(liters)}
                          className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-all ${
                            knapsackLiters === liters
                              ? 'bg-[#14532D] text-white shadow-xs'
                              : darkMode
                              ? 'bg-slate-800 text-slate-300 border border-slate-700'
                              : 'bg-white text-slate-600 border border-slate-200'
                          }`}
                        >
                          {liters}L
                        </button>
                      ))}
                    </div>
                  </div>

                  {vaultItem.chemicalTreatments.map((chem, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border mb-2 last:mb-0 transition-colors ${
                        darkMode
                          ? 'bg-slate-900 border-slate-700'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="flex justify-between items-center font-bold">
                        <span>{chem.activeIngredient}</span>
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded font-bold">
                          {t.safetyIntervalLabel}: {chem.safetyIntervalDays} Days
                        </span>
                      </div>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-1">
                        Tank Dose: {knapsackLiters === 15 ? chem.dosagePer15LKnapsack : `${((knapsackLiters / 15) * 30).toFixed(0)}g - ${((knapsackLiters / 15) * 40).toFixed(0)}g`}
                      </p>
                      <p className="text-[11px] opacity-70 mt-0.5">
                        Trade Names: {chem.tradeNames.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prevention Tab Content */}
            {activeTab === 'prevention' && (
              <div
                className={`p-3.5 rounded-2xl border text-xs space-y-2 transition-colors ${
                  darkMode
                    ? 'bg-slate-800/60 border-slate-700'
                    : 'bg-slate-50 border-slate-100'
                }`}
              >
                <span className="font-bold block mb-1">Cultural Practices</span>
                {vaultItem.culturalPractices.map((prac, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span className="leading-relaxed opacity-90">{prac}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions Bar */}
        <div
          className={`p-3.5 border-t flex gap-2.5 transition-colors ${
            darkMode
              ? 'border-slate-800 bg-slate-900'
              : 'border-slate-100 bg-white'
          }`}
        >
          <button
            type="button"
            onClick={onClose}
            className={`flex-1 py-3 rounded-2xl text-xs font-bold transition-colors cursor-pointer ${
              darkMode
                ? 'bg-slate-800 hover:bg-slate-750 text-slate-300'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            {t.closeBtn}
          </button>

          <button
            type="button"
            disabled={isSaved}
            onClick={handleSaveToWatermelon}
            className={`flex-1 py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer ${
              isSaved
                ? 'bg-[#14532D]/20 text-emerald-400'
                : 'bg-[#14532D] hover:bg-[#166534] text-white shadow-emerald-950/20'
            }`}
          >
            <BookmarkCheck className="w-4 h-4" />
            <span>{isSaved ? t.savedToLedgerBtn : t.saveDiagnosisBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
