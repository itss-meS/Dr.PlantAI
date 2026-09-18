import React, { useState, useEffect } from 'react';
import {
  History,
  Trash2,
  Download,
  HardDrive,
  Calendar,
  Layers,
  Leaf,
  Filter,
  ArrowRight
} from 'lucide-react';
import { DiagnosisRecord, LanguageCode } from '../types';
import { watermelonDB } from '../lib/watermelon-db';
import { getTranslation } from '../data/translations';

interface DiagnosisHistoryViewProps {
  onInspectRecord: (record: DiagnosisRecord) => void;
  currentLanguage: LanguageCode;
  darkMode?: boolean;
}

export const DiagnosisHistoryView: React.FC<DiagnosisHistoryViewProps> = ({
  onInspectRecord,
  currentLanguage,
  darkMode = false,
}) => {
  const [records, setRecords] = useState<DiagnosisRecord[]>([]);
  const [metrics, setMetrics] = useState(watermelonDB.getStorageMetrics());
  const [filterType, setFilterType] = useState<string>('all');

  const t = getTranslation(currentLanguage);

  useEffect(() => {
    const unsubscribe = watermelonDB.subscribe((updated) => {
      setRecords(updated);
      setMetrics(watermelonDB.getStorageMetrics());
    });
    return unsubscribe;
  }, []);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Delete this diagnosis record from device storage?')) {
      watermelonDB.deleteDiagnosis(id);
    }
  };

  const handleClearAll = () => {
    if (confirm('Clear all local diagnosis history records?')) {
      watermelonDB.clearAll();
    }
  };

  const handleExportJson = () => {
    const jsonStr = watermelonDB.exportDatabaseJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dr_plant_records_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredRecords = records.filter((rec) => {
    if (filterType === 'all') return true;
    return rec.pathogenType === filterType;
  });

  const getFilterLabel = (type: string) => {
    switch (type) {
      case 'all':
        return t.filterAll;
      case 'fungus':
        return t.filterFungus;
      case 'bacteria':
        return t.filterBacteria;
      case 'virus':
        return t.filterVirus;
      case 'healthy':
        return t.filterHealthy;
      default:
        return type;
    }
  };

  return (
    <div
      className={`flex-1 overflow-y-auto p-4 space-y-3.5 select-none transition-colors ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Telemetry Storage Card */}
      <div
        className={`border rounded-3xl p-4 shadow-xs transition-colors ${
          darkMode
            ? 'bg-emerald-950/20 border-emerald-800/40'
            : 'bg-[#14532D]/5 border-[#14532D]/15'
        }`}
      >
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#14532D] text-white flex items-center justify-center shadow-xs">
              <HardDrive className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-extrabold">{t.ledgerTitle}</h2>
              <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                {t.ledgerSubtitle}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleExportJson}
            className={`px-3 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer ${
              darkMode
                ? 'bg-slate-900 border-emerald-500/40 text-emerald-400 hover:bg-slate-800'
                : 'bg-white border-[#14532D]/30 text-[#14532D] hover:bg-[#14532D]/10'
            }`}
            title="Download offline JSON backup"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.exportJsonBtn}</span>
          </button>
        </div>

        {/* 3 Metric Tiles */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div
            className={`p-2.5 rounded-2xl border shadow-xs transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200/80'
            }`}
          >
            <span className="opacity-60 text-[10px] block font-semibold">{t.metricScans}</span>
            <span className="font-extrabold text-base">{metrics.recordCount}</span>
          </div>

          <div
            className={`p-2.5 rounded-2xl border shadow-xs transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200/80'
            }`}
          >
            <span className="opacity-60 text-[10px] block font-semibold">{t.metricMemory}</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-extrabold text-base">
              {metrics.storageSizeKb} KB
            </span>
          </div>

          <div
            className={`p-2.5 rounded-2xl border shadow-xs transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200/80'
            }`}
          >
            <span className="opacity-60 text-[10px] block font-semibold">{t.metricIntegrity}</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-extrabold text-base">
              100%
            </span>
          </div>
        </div>
      </div>

      {/* Filter Chips Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {['all', 'fungus', 'bacteria', 'virus', 'healthy'].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setFilterType(type)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              filterType === type
                ? 'bg-[#14532D] text-white shadow-xs'
                : darkMode
                ? 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-850'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {getFilterLabel(type)}
          </button>
        ))}
      </div>

      {/* History Items List */}
      <div className="space-y-2.5 pb-4">
        <div className="flex items-center justify-between text-xs px-1">
          <span className="font-extrabold flex items-center gap-1.5">
            <History className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            {t.historyTileTitle} ({filteredRecords.length})
          </span>
          {records.length > 0 && (
            <button
              type="button"
              onClick={handleClearAll}
              className="text-slate-400 hover:text-red-500 text-[11px] font-bold transition-colors cursor-pointer"
            >
              {t.clearHistoryBtn}
            </button>
          )}
        </div>

        {filteredRecords.length === 0 ? (
          <div
            className={`border rounded-3xl p-8 text-center text-xs transition-colors ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-400'
                : 'bg-slate-50 border-slate-200 text-slate-400'
            }`}
          >
            <Leaf className="w-8 h-8 mx-auto mb-2 text-slate-400 opacity-60" />
            <p className="font-bold text-sm mb-1">{t.noRecordsTitle}</p>
            <p className="opacity-80 max-w-xs mx-auto">{t.noRecordsDesc}</p>
          </div>
        ) : (
          filteredRecords.map((rec) => {
            const dateStr = new Date(rec.timestamp).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            });

            return (
              <div
                key={rec.id}
                onClick={() => onInspectRecord(rec)}
                className={`border rounded-2xl p-3 flex items-center justify-between gap-3 cursor-pointer shadow-xs transition-all group ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 hover:border-emerald-500/50'
                    : 'bg-white border-slate-200 hover:border-[#14532D]'
                }`}
              >
                {/* Real Leaf Image */}
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shrink-0 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={rec.capturedImageUri}
                    alt={rec.disease}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      {rec.crop}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-1.5 py-0.2 rounded border border-emerald-500/20">
                      {rec.confidence}% {t.confidenceMatch}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-xs truncate">{rec.disease}</h4>
                  <div className="flex items-center gap-3 text-[11px] opacity-60 mt-0.5">
                    <span>{dateStr}</span>
                    <span>• {rec.latencyMs}ms</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => handleDelete(rec.id, e)}
                    className="p-2 text-slate-400 hover:text-red-500 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Delete record"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
