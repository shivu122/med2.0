export type MedicineType = 'paracetamol' | 'ibuprofen' | 'aspirin' | 'antibiotic' | 'other';

export interface DosageRule {
  medicineType: MedicineType;
  strengthUnit: string;
  baseStrength: number;
  ageRanges: {
    range: string;
    dosage: number | [number, number]; // single value or range
    frequency: string;
    maxDoses: number;
  }[];
}