import React from 'react';
import {
  X,
  Cpu,
  ShieldCheck,
  Zap,
  HardDrive,
  Globe,
  Radio,
  CheckCircle2
} from 'lucide-react';

interface EdgeArchitectureModalProps {
  onClose: () => void;
  darkMode?: boolean;
}

export const EdgeArchitectureModal: React.FC<EdgeArchitectureModalProps> = ({
  onClose,
  darkMode = false,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto select-none animate-in fade-in duration-150">
      <div
        className={`rounded-3xl w-full max-w-md max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border transition-colors ${
          darkMode
            ? 'bg-slate-900 text-white border-slate-800'
            : 'bg-white text-slate-900 border-slate-100'
        }`}
      >
        {/* Header */}
        <div
          className={`p-4 border-b flex items-center justify-between sticky top-0 z-10 transition-colors ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Edge Architecture</h3>
              <p className="text-[10px] opacity-60">Zero-Latency On-Device AI</p>
            </div>
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

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs">
          {/* Mission Card */}
          <div
            className={`p-3.5 rounded-2xl border ${
              darkMode
                ? 'bg-emerald-950/20 border-emerald-800/40 text-slate-200'
                : 'bg-[#14532D]/5 border-[#14532D]/15 text-slate-800'
            }`}
          >
            <div className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400 mb-1">
              <Radio className="w-4 h-4" />
              <span>For Digital Dead Zones</span>
            </div>
            <p className="text-xs opacity-90 leading-relaxed">
              Designed for farmers in remote rural regions with zero 4G/5G connectivity. Instant on-device diagnosis prevents crop failure before it spreads.
            </p>
          </div>

          {/* 4 Pillars */}
          <div className="grid grid-cols-2 gap-2.5">
            <div
              className={`p-3 rounded-2xl border ${
                darkMode
                  ? 'bg-slate-800/50 border-slate-750'
                  : 'bg-slate-50 border-slate-100'
              }`}
            >
              <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-0.5">
                Model
              </p>
              <p className="font-bold text-xs">MobileNetV2 / CNN</p>
              <p className="text-[10px] opacity-60 mt-1">
                Optimized model executing in under 500ms on device.
              </p>
            </div>

            <div
              className={`p-3 rounded-2xl border ${
                darkMode
                  ? 'bg-slate-800/50 border-slate-750'
                  : 'bg-slate-50 border-slate-100'
              }`}
            >
              <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-0.5">
                Pipeline
              </p>
              <p className="font-bold text-xs">224×224 Tensor</p>
              <p className="text-[10px] opacity-60 mt-1">
                Direct bilinear image preprocessing and inference.
              </p>
            </div>

            <div
              className={`p-3 rounded-2xl border ${
                darkMode
                  ? 'bg-slate-800/50 border-slate-750'
                  : 'bg-slate-50 border-slate-100'
              }`}
            >
              <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-0.5">
                Database
              </p>
              <p className="font-bold text-xs">WatermelonDB</p>
              <p className="text-[10px] opacity-60 mt-1">
                Offline reactive SQLite storage on device.
              </p>
            </div>

            <div
              className={`p-3 rounded-2xl border ${
                darkMode
                  ? 'bg-slate-800/50 border-slate-750'
                  : 'bg-slate-50 border-slate-100'
              }`}
            >
              <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-0.5">
                Localization
              </p>
              <p className="font-bold text-xs">7 Regional Languages</p>
              <p className="text-[10px] opacity-60 mt-1">
                Instant UI and treatment translation for farmers.
              </p>
            </div>
          </div>

          {/* Safety Safeguards */}
          <div
            className={`p-3.5 rounded-2xl border ${
              darkMode
                ? 'bg-slate-850 border-slate-750'
                : 'bg-slate-50 border-slate-100'
            }`}
          >
            <h4 className="font-bold text-xs mb-2 flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Diagnostic Safeguards</span>
            </h4>
            <ul className="space-y-1.5 text-xs opacity-90">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>&lt;75% Confidence Warning:</strong> Alerts farmers to verify before applying sprays.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Knapsack Ratios:</strong> 10L/15L/20L tank dilution calculations to prevent overdose.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`p-4 border-t transition-colors ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
          }`}
        >
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-2xl bg-[#14532D] hover:bg-[#166534] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
