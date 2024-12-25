export interface DosageInfo {
  ageGroup: string;
  dose: string;
  frequency: string;
  maxDosesPerDay: string;
  withFood?: 'before' | 'after' | 'with' | 'any';
  timing?: string;
}

export interface MedicineInfo {
  name: string;
  type: string;
  category: string;
  form: string;
  strength: string;
  manufacturer: string;
  uses: string[];
  dosage: DosageInfo[];
  warnings: string[];
}

export interface ParsedMedicineInfo {
  basicInfo: Omit<MedicineInfo, 'uses' | 'dosage' | 'warnings'>;
  uses: string[];
  dosage: DosageInfo[];
  warnings: string[];
}