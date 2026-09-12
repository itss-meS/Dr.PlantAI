import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Camera,
  ArrowLeft,
  RefreshCw,
  Flashlight,
  Upload,
  Leaf,
  X
} from 'lucide-react';
import { SAMPLE_SPECIMENS } from '../data/treatmentVaultData';
import { preprocessImageToTensor, runLocalTFLiteInference } from '../lib/tflite-pipeline';
import { InferenceResult, SampleLeafSpecimen, LanguageCode } from '../types';
import { getTranslation } from '../data/translations';

interface CameraViewfinderProps {
  onDiagnosisComplete: (result: InferenceResult) => void;
  onCloseCamera: () => void;
  lowEndMode?: boolean;
  sunlightMode?: boolean;
  initialUploadFile?: File | null;
  currentLanguage: LanguageCode;
  darkMode?: boolean;
}

export const CameraViewfinder: React.FC<CameraViewfinderProps> = ({
  onDiagnosisComplete,
  onCloseCamera,
  initialUploadFile,
  currentLanguage,
  darkMode = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [cameraFacing, setCameraFacing] = useState<'environment' | 'user'>('environment');
  const [isFlashActive, setIsFlashActive] = useState<boolean>(false);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisStatus, setAnalysisStatus] = useState<string>('');
  const [selectedSample, setSelectedSample] = useState<SampleLeafSpecimen | null>(null);

  const t = getTranslation(currentLanguage);


  const startCamera = useCallback(async () => {
    try {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setHasCameraPermission(false);
        return;
      }

      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: { ideal: cameraFacing },
          width: { ideal: 720 },
          height: { ideal: 720 },
        },
        audio: false,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setHasCameraPermission(true);
      }
    } catch (err) {
      console.warn('Camera access unavailable:', err);
      setHasCameraPermission(false);
    }
  }, [cameraFacing]);

  useEffect(() => {
    startCamera();
    return () => {

      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [startCamera]);

  const processImageSource = async (
    source: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement,
    originalUri: string,
    specimenHint?: string
  ) => {
    try {
      setIsAnalyzing(true);
      setAnalysisStatus(t.analyzingText);

      const preprocessed = await preprocessImageToTensor(source);
      setAnalysisStatus(t.analyzingText);

      const result = await runLocalTFLiteInference(preprocessed, originalUri, specimenHint);

      setTimeout(() => {
        setIsAnalyzing(false);
        onDiagnosisComplete(result);
      }, 150);
    } catch (err) {
      console.error('Inference error:', err);
      setIsAnalyzing(false);
      alert('Could not analyze leaf. Please try again with clear lighting.');
    }
  };


  useEffect(() => {
    if (initialUploadFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUri = event.target?.result as string;
        const img = new Image();
        img.onload = () => {
          processImageSource(img, dataUri);
        };
        img.src = dataUri;
      };
      reader.readAsDataURL(initialUploadFile);
    }
  }, [initialUploadFile]);

  const toggleCameraFacing = () => {
    setCameraFacing((prev) => (prev === 'environment' ? 'user' : 'environment'));
  };

  const handleCapture = () => {
    if (isAnalyzing) return;

    if (selectedSample) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        processImageSource(img, selectedSample.thumbnailUrl, selectedSample.diseaseId);
      };
      img.src = selectedSample.thumbnailUrl;
      return;
    }

    if (videoRef.current && videoRef.current.readyState >= 2) {
      const video = videoRef.current;
      const snapCanvas = document.createElement('canvas');
      snapCanvas.width = video.videoWidth || 480;
      snapCanvas.height = video.videoHeight || 480;
      const ctx = snapCanvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const dataUrl = snapCanvas.toDataURL('image/jpeg', 0.9);
        processImageSource(snapCanvas, dataUrl);
      }
    } else {

      const fallback = SAMPLE_SPECIMENS[0];
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        processImageSource(img, fallback.thumbnailUrl, fallback.diseaseId);
      };
      img.src = fallback.thumbnailUrl;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUri = event.target?.result as string;
      const img = new Image();
      img.onload = () => {
        setSelectedSample(null);
        processImageSource(img, dataUri);
      };
      img.src = dataUri;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={`flex-1 flex flex-col justify-between select-none overflow-hidden transition-colors ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
      }`}
    >
      {}
      <div
        className={`grid grid-cols-3 items-center px-4 py-3 border-b shrink-0 transition-colors ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
        }`}
      >
        {}
        <div className="flex items-center justify-start">
          <button
            type="button"
            onClick={onCloseCamera}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
              darkMode
                ? 'bg-slate-800 hover:bg-slate-750 text-slate-200'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.closeBtn}</span>
          </button>
        </div>

        {}
        <div className="flex items-center justify-center">
          <h3 className="font-extrabold text-sm tracking-tight text-center whitespace-nowrap">
            {t.scannerTitle}
          </h3>
        </div>

        {}
        <div className="flex items-center justify-end gap-1.5">
          <button
            type="button"
            onClick={() => setIsFlashActive((prev) => !prev)}
            className={`p-2 rounded-xl text-xs transition-colors cursor-pointer border ${
              isFlashActive
                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                : darkMode
                ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
            title="Torch Light"
          >
            <Flashlight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={toggleCameraFacing}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              darkMode
                ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
            title={t.switchCameraBtn}
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {}
      <div className="flex-1 px-4 py-3 flex flex-col items-center justify-center min-h-0 overflow-hidden">
        <div className="w-full max-w-[290px] sm:max-w-[310px] aspect-square relative rounded-3xl overflow-hidden bg-slate-950 shadow-xl border-2 border-[#14532D]">
          {}
          <video
            ref={videoRef}
            playsInline
            muted
            className={`w-full h-full object-cover ${
              hasCameraPermission && !selectedSample ? 'opacity-100' : 'opacity-15'
            }`}
          />

          {}
          {selectedSample && (
            <img
              src={selectedSample.thumbnailUrl}
              alt={selectedSample.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {}
          {isFlashActive && (
            <div className="absolute inset-0 bg-white/50 pointer-events-none animate-pulse" />
          )}

          {}
          {selectedSample && (
            <div className="absolute top-3 left-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] font-bold text-white flex items-center justify-between border border-white/20 z-20">
              <span className="truncate">{selectedSample.title}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSample(null);
                  startCamera();
                }}
                className="text-emerald-300 hover:text-white underline text-[10px] shrink-0 ml-2 cursor-pointer"
              >
                Use Camera
              </button>
            </div>
          )}
        </div>

        {}
        <p className="mt-2.5 text-xs opacity-60 font-medium text-center">
          {t.alignLeafHint}
        </p>
      </div>

      {}
      <div
        className={`px-4 py-2 border-t shrink-0 transition-colors ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'
        }`}
      >
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-extrabold uppercase tracking-wider opacity-75">
            {t.specimensTitle}:
          </span>
          {selectedSample && (
            <button
              type="button"
              onClick={() => {
                setSelectedSample(null);
                startCamera();
              }}
              className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {SAMPLE_SPECIMENS.slice(0, 4).map((specimen) => (
            <button
              key={specimen.id}
              type="button"
              onClick={() => setSelectedSample(specimen)}
              className={`shrink-0 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                selectedSample?.id === specimen.id
                  ? 'bg-[#14532D] text-white border-[#14532D] shadow-xs'
                  : darkMode
                  ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-750'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {specimen.crop} ({specimen.condition.split(' ')[0]})
            </button>
          ))}
        </div>
      </div>

      {}
      <div
        className={`grid grid-cols-3 items-center px-6 py-3.5 border-t shrink-0 transition-colors ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
        }`}
      >
        {}
        <div className="flex items-center justify-start">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all cursor-pointer shadow-xs active:scale-95 ${
              darkMode
                ? 'bg-slate-800 hover:bg-slate-750 border-slate-700 text-slate-200'
                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
            }`}
            title={t.galleryBtn}
          >
            <Upload className="w-5 h-5 text-emerald-500" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image}
        <div className="flex items-center justify-center">
          <button
            type="button"
            disabled={isAnalyzing}
            onClick={handleCapture}
            className="w-18 h-18 rounded-full bg-[#14532D] hover:bg-[#166534] active:scale-95 text-white flex items-center justify-center shadow-lg shadow-emerald-950/30 transition-all border-4 border-white dark:border-slate-800 ring-2 ring-[#14532D] cursor-pointer"
            title={t.captureBtn}
          >
            <Camera className="w-8 h-8 stroke-[2.3]" />
          </button>
        </div>

        {}
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={onCloseCamera}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all cursor-pointer shadow-xs active:scale-95 ${
              darkMode
                ? 'bg-slate-800 hover:bg-slate-750 border-slate-700 text-slate-200'
                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
            }`}
            title={t.closeBtn}
          >
            <X className="w-5 h-5 opacity-75" />
          </button>
        </div>
      </div>

      {}
      {isAnalyzing && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className={`rounded-3xl p-6 w-full max-w-xs shadow-2xl border text-center ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-white'
                : 'bg-white border-slate-100 text-slate-900'
            }`}
          >
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#14532D]/15 text-emerald-500 flex items-center justify-center mb-3">
              <Leaf className="w-7 h-7 animate-spin" />
            </div>
            <h3 className="text-base font-extrabold mb-1">{t.scannerTitle}</h3>
            <p className="text-xs opacity-70 mb-3">{analysisStatus}</p>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
              <div className="bg-[#14532D] h-2 rounded-full animate-indeterminate w-3/4" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
