export type LanguageCode = 'en' | 'hi' | 'sw' | 'es' | 'te' | 'bn' | 'mr';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
}

export type PathogenType = 'fungus' | 'bacteria' | 'virus' | 'healthy' | 'pest';

export type SeverityLevel = 'mild' | 'moderate' | 'critical' | 'healthy';

export interface TopPrediction {
  label: string;
  crop: string;
  disease: string;
  confidence: number;
}

export interface InferenceResult {
  id: string;
  timestamp: number;
  label: string;
  crop: string;
  disease: string;
  pathogenType: PathogenType;
  confidence: number; // 0 to 100
  latencyMs: number;
  tensorDimensions: [number, number, number, number]; // [1, 224, 224, 3]
  topPredictions: TopPrediction[];
  severity: SeverityLevel;
  isLowConfidence: boolean; // true if < 75%
  heatMapDataUri?: string;
  treatmentId: string;
  capturedImageUri: string;
  engineMode?: 'deep_learning' | 'heuristic';
}

export interface OrganicRemedy {
  name: string;
  recipe: string;
  prepTime: string;
  costEstimate: 'Free / Kitchen Waste' | 'Very Low (< $0.50)' | 'Low (< $2.00)';
  applicationMethod: string;
}

export interface ChemicalTreatment {
  activeIngredient: string;
  tradeNames: string[];
  dosagePer15LKnapsack: string;
  safetyIntervalDays: number;
  precautions: string;
  toxicityLevel: 'Low' | 'Moderate' | 'Hazardous';
}

export interface RegionalTranslation {
  title: string;
  summary: string;
  symptoms: string;
  organicAdvice: string;
  chemicalAdvice: string;
  emergencyAlert: string;
}

export interface TreatmentVaultItem {
  id: string;
  crop: string;
  disease: string;
  pathogenType: PathogenType;
  pathogenScientificName: string;
  commonNames: string[];
  symptomsDescription: string;
  favorableConditions: string;
  severityLevel: SeverityLevel;
  organicRemedies: OrganicRemedy[];
  chemicalTreatments: ChemicalTreatment[];
  culturalPractices: string[];
  preventionTips: string[];
  imageUrl?: string;
  translations: Record<LanguageCode, RegionalTranslation>;
}

export interface DiagnosisRecord {
  id: string;
  timestamp: number;
  crop: string;
  disease: string;
  pathogenType: PathogenType;
  confidence: number;
  severity: SeverityLevel;
  latencyMs: number;
  fieldPlot: string;
  notes: string;
  capturedImageUri: string;
  treatmentId: string;
  syncStatus: 'offline_stored' | 'synced_local_watermelon';
  languageUsed: LanguageCode;
}

export interface SampleLeafSpecimen {
  id: string;
  title: string;
  crop: string;
  condition: string;
  thumbnailUrl: string;
  description: string;
  expectedConfidence: number;
  diseaseId: string;
}
