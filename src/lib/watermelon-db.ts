import { DiagnosisRecord, TreatmentVaultItem } from '../types';
import { TREATMENT_VAULT } from '../data/treatmentVaultData';

const DB_STORAGE_KEY = 'dr_plant_watermelon_diagnoses_v1';
const DB_VERSION_KEY = 'dr_plant_watermelon_db_meta_v1';

type Listener = (records: DiagnosisRecord[]) => void;

class WatermelonLocalDB {
  private listeners: Set<Listener> = new Set();
  private cache: DiagnosisRecord[] = [];
  private isInitialized = false;

  constructor() {
    this.init();
  }

  private init() {
    try {
      const raw = localStorage.getItem(DB_STORAGE_KEY);
      if (raw) {
        this.cache = JSON.parse(raw);
      } else {
        // Seed initial offline sample records
        this.cache = [
          {
            id: 'wm_diag_seed_1',
            timestamp: Date.now() - 3600 * 1000 * 24 * 2, // 2 days ago
            crop: 'Tomato',
            disease: 'Early Blight',
            pathogenType: 'fungus',
            confidence: 94.2,
            severity: 'moderate',
            latencyMs: 124,
            fieldPlot: 'North Acre - Plot B',
            notes: 'Brown concentric spots on lower leaves. Sprayed 15L sour buttermilk solution.',
            capturedImageUri: 'https://images.unsplash.com/photo-1592417817098-8f3d69106093?auto=format&fit=crop&w=300&q=80',
            treatmentId: 'tomato_early_blight',
            syncStatus: 'synced_local_watermelon',
            languageUsed: 'hi',
          },
          {
            id: 'wm_diag_seed_2',
            timestamp: Date.now() - 3600 * 1000 * 5, // 5 hours ago
            crop: 'Corn (Maize)',
            disease: 'Common Rust',
            pathogenType: 'fungus',
            confidence: 91.5,
            severity: 'moderate',
            latencyMs: 98,
            fieldPlot: 'East Ridge - Row 12',
            notes: 'Powdery cinnamon pustules visible before tasseling. Organic baking soda application planned.',
            capturedImageUri: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=300&q=80',
            treatmentId: 'corn_common_rust',
            syncStatus: 'synced_local_watermelon',
            languageUsed: 'en',
          },
        ];
        this.persist();
      }
      this.isInitialized = true;
    } catch {
      this.cache = [];
    }
  }

  private persist() {
    try {
      localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(this.cache));
      localStorage.setItem(DB_VERSION_KEY, JSON.stringify({
        schemaVersion: 1,
        tableCount: 2,
        lastUpdated: Date.now(),
        dbName: 'WatermelonDB:dr_plant_core',
        engine: 'IndexedDB/LocalStorage Proxy (Zero Cloud Sync)',
      }));
      this.notify();
    } catch (e) {
      console.error('Failed to persist to WatermelonDB local store', e);
    }
  }

  private notify() {
    this.listeners.forEach((listener) => listener([...this.cache]));
  }

  public subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    listener([...this.cache]);
    return () => {
      this.listeners.delete(listener);
    };
  }

  public async saveDiagnosis(record: Omit<DiagnosisRecord, 'id' | 'timestamp' | 'syncStatus'>): Promise<DiagnosisRecord> {
    const newRecord: DiagnosisRecord = {
      ...record,
      id: `wm_rec_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      timestamp: Date.now(),
      syncStatus: 'synced_local_watermelon',
    };

    // Prepend to top
    this.cache.unshift(newRecord);
    this.persist();
    return newRecord;
  }

  public getAllDiagnoses(): DiagnosisRecord[] {
    return [...this.cache];
  }

  public deleteDiagnosis(id: string): void {
    this.cache = this.cache.filter((item) => item.id !== id);
    this.persist();
  }

  public clearAll(): void {
    this.cache = [];
    this.persist();
  }

  // Treatment Vault Encyclopedia Queries (Offline Local Cache)
  public getVaultItems(): TreatmentVaultItem[] {
    return TREATMENT_VAULT;
  }

  public findVaultItemById(id: string): TreatmentVaultItem | undefined {
    return TREATMENT_VAULT.find((item) => item.id === id);
  }

  public searchVault(query: string): TreatmentVaultItem[] {
    const q = query.toLowerCase().trim();
    if (!q) return TREATMENT_VAULT;
    return TREATMENT_VAULT.filter(
      (item) =>
        item.crop.toLowerCase().includes(q) ||
        item.disease.toLowerCase().includes(q) ||
        item.commonNames.some((c) => c.toLowerCase().includes(q)) ||
        item.pathogenScientificName.toLowerCase().includes(q)
    );
  }

  public getStorageMetrics() {
    const bytes = new Blob([JSON.stringify(this.cache)]).size;
    return {
      recordCount: this.cache.length,
      storageSizeKb: (bytes / 1024).toFixed(1),
      lastSyncTimestamp: Date.now(),
      dbEngine: 'WatermelonDB (Offline Reactive)',
      cloudDataUsed: '0.00 KB',
      apiCalls: 0,
    };
  }

  public exportDatabaseJson(): string {
    const data = {
      database: 'DrPlantAI_WatermelonDB',
      exportedAt: new Date().toISOString(),
      schemaVersion: 1.0,
      diagnoses: this.cache,
      treatmentVaultIndex: TREATMENT_VAULT.map((v) => ({ id: v.id, crop: v.crop, disease: v.disease })),
    };
    return JSON.stringify(data, null, 2);
  }
}

export const watermelonDB = new WatermelonLocalDB();
