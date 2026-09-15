import React, { useRef } from 'react';
import {
  Camera,
  Upload,
  BookOpen,
  History,
  ShieldCheck,
  Zap,
  Leaf,
  WifiOff,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { LANDING_HERO_IMG } from '../data/treatmentVaultData';
import { DiagnosisRecord, LanguageCode } from '../types';
import { getTranslation } from '../data/translations';

interface LandingPageViewProps {
  onOpenCamera: () => void;
  onUploadFile: (file: File) => void;
  onNavigateTab: (tab: 'vault' | 'history') => void;
  recentRecords: DiagnosisRecord[];
  onInspectRecord: (record: DiagnosisRecord) => void;
  currentLanguage: LanguageCode;
  darkMode?: boolean;
}

export const LandingPageView: React.FC<LandingPageViewProps> = ({
  onOpenCamera,
  onUploadFile,
  onNavigateTab,
  recentRecords,
  onInspectRecord,
  currentLanguage,
  darkMode = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = getTranslation(currentLanguage);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUploadFile(file);
    }
  };

  return (
    <div
      className={`flex-1 overflow-y-auto select-none pb-6 transition-colors ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Real Agriculture Photography Hero Section */}
      <div className="relative w-full h-52 sm:h-60 overflow-hidden">
        <img
          src={LANDING_HERO_IMG}
          alt="Indian farmer inspecting tomato and potato crops in agricultural field"
          className="w-full h-full object-cover brightness-90"
        />
        {/* Soft natural dark-green gradient overlay for legibility */}
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
          <p className="text-xs text-white/90 font-medium tracking-normal leading-relaxed">
            {t.landingSubtitle}
          </p>
        </div>
      </div>

      {/* Main Action Hub */}
      <div className="px-4 -mt-4 relative z-10 space-y-3.5">
        {/* Primary Action Card */}
        <div
          className={`rounded-3xl p-4 shadow-xl border space-y-3 transition-colors ${
            darkMode
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-100'
          }`}
        >
          {/* Primary Action: OPEN CAMERA BUTTON */}
          <button
            type="button"
            onClick={onOpenCamera}
            className="w-full py-4 px-5 rounded-2xl bg-[#14532D] hover:bg-[#166534] active:scale-98 text-white font-black text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/20 transition-all cursor-pointer"
          >
            <Camera className="w-5 h-5 stroke-[2.5]" />
            <span>{t.openCameraBtn}</span>
          </button>

          {/* Secondary Action: Upload Image */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={`w-full py-3 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 border transition-all cursor-pointer active:scale-98 ${
              darkMode
                ? 'bg-slate-800 hover:bg-slate-750 text-slate-200 border-slate-750'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
            }`}
          >
            <Upload className="w-4 h-4 text-emerald-500" />
            <span>{t.uploadPhotoBtn}</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* Quick Access Tiles */}
        <div className="space-y-2.5">
          <div
            onClick={() => onNavigateTab('vault')}
            className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all shadow-xs group ${
              darkMode
                ? 'bg-slate-900 hover:bg-slate-850 border-slate-800'
                : 'bg-white hover:bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#14532D] text-white flex items-center justify-center shadow-xs shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-xs group-hover:text-emerald-500 transition-colors">
                  {t.vaultTileTitle}
                </h4>
                <p className="text-[11px] opacity-60">
                  {t.vaultTileDesc}
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 opacity-40 group-hover:text-emerald-500 transition-colors shrink-0" />
          </div>

          <div
            onClick={() => onNavigateTab('history')}
            className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all shadow-xs group ${
              darkMode
                ? 'bg-slate-900 hover:bg-slate-850 border-slate-800'
                : 'bg-white hover:bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  darkMode ? 'bg-slate-800 text-emerald-400' : 'bg-slate-100 text-[#14532D]'
                }`}
              >
                <History className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-xs group-hover:text-emerald-500 transition-colors">
                  {t.historyTileTitle} ({recentRecords.length})
                </h4>
                <p className="text-[11px] opacity-60">
                  {t.historyTileDesc}
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 opacity-40 group-hover:text-emerald-500 transition-colors shrink-0" />
          </div>
        </div>

        {/* Recent Diagnoses (if any) */}
        {recentRecords.length > 0 && (
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold">{t.recentScansTitle}</span>
              <button
                type="button"
                onClick={() => onNavigateTab('history')}
                className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                {t.viewAllBtn}
              </button>
            </div>

            <div className="space-y-2">
              {recentRecords.slice(0, 2).map((rec) => (
                <div
                  key={rec.id}
                  onClick={() => onInspectRecord(rec)}
                  className={`p-2.5 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition-all shadow-xs ${
                    darkMode
                      ? 'bg-slate-900 border-slate-800 hover:border-emerald-500/50'
                      : 'bg-white border-slate-200 hover:border-[#14532D]'
                  }`}
                >
                  <img
                    src={rec.capturedImageUri}
                    alt={rec.disease}
                    className="w-11 h-11 rounded-xl object-cover border border-slate-100 dark:border-slate-800 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      {rec.crop}
                    </span>
                    <h5 className="font-bold text-xs truncate mt-0.5">
                      {rec.disease}
                    </h5>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    {rec.confidence}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3 Value Badges */}
        <div className="grid grid-cols-3 gap-2.5 pt-1">
          <div
            className={`p-3 rounded-2xl border text-center transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'
            }`}
          >
            <div className="w-7 h-7 mx-auto rounded-xl bg-[#14532D] text-white flex items-center justify-center mb-1.5 font-bold shadow-xs">
              <Zap className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold block">{t.instantBadgeTitle}</span>
            <span className="text-[9px] opacity-60 font-medium">{t.instantBadgeDesc}</span>
          </div>

          <div
            className={`p-3 rounded-2xl border text-center transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'
            }`}
          >
            <div className="w-7 h-7 mx-auto rounded-xl bg-[#14532D] text-white flex items-center justify-center mb-1.5 font-bold shadow-xs">
              <WifiOff className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold block">{t.offlineBadgeTitle}</span>
            <span className="text-[9px] opacity-60 font-medium">{t.offlineBadgeDesc}</span>
          </div>

          <div
            className={`p-3 rounded-2xl border text-center transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'
            }`}
          >
            <div className="w-7 h-7 mx-auto rounded-xl bg-[#14532D] text-white flex items-center justify-center mb-1.5 font-bold shadow-xs">
              <Leaf className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold block">{t.remediesBadgeTitle}</span>
            <span className="text-[9px] opacity-60 font-medium">{t.remediesBadgeDesc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
