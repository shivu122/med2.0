import { DosageRule, MedicineType } from './types';

export const dosageRules: Record<MedicineType, DosageRule> = {
  paracetamol: {
    medicineType: 'paracetamol',
    strengthUnit: 'mg',
    baseStrength: 500,
    ageRanges: [
      { range: '16 - 17 Years', dosage: [500, 1000], frequency: 'After Every 4-6 Hours', maxDoses: 4 },
      { range: '12 - 15 Years', dosage: [480, 750], frequency: 'After Every 4-6 Hours', maxDoses: 4 },
      { range: '10 - 11 Years', dosage: [480, 500], frequency: 'After Every 4-6 Hours', maxDoses: 4 },
      { range: '08 - 09 Years', dosage: [360, 375], frequency: 'After Every 4-6 Hours', maxDoses: 4 },
      { range: '06 - 07 Years', dosage: [240, 250], frequency: 'After Every 4-6 Hours', maxDoses: 4 },
      { range: '04 - 05 Years', dosage: 240, frequency: 'After Every 4-6 Hours', maxDoses: 4 },
      { range: '02 - 03 Years', dosage: 180, frequency: 'After Every 4-6 Hours', maxDoses: 4 },
      { range: '06 - 23 Months', dosage: 120, frequency: 'After Every 4-6 Hours', maxDoses: 4 },
      { range: '03 - 05 Months', dosage: 60, frequency: 'After Every 4-6 Hours', maxDoses: 4 }
    ]
  },
  ibuprofen: {
    medicineType: 'ibuprofen',
    strengthUnit: 'mg',
    baseStrength: 400,
    ageRanges: [
      { range: '16 - 17 Years', dosage: [200, 400], frequency: 'After Every 6-8 Hours', maxDoses: 3 },
      { range: '12 - 15 Years', dosage: [200, 400], frequency: 'After Every 6-8 Hours', maxDoses: 3 },
      { range: '10 - 11 Years', dosage: 200, frequency: 'After Every 6-8 Hours', maxDoses: 3 },
      { range: '08 - 09 Years', dosage: 200, frequency: 'After Every 6-8 Hours', maxDoses: 3 },
      { range: '06 - 07 Years', dosage: 150, frequency: 'After Every 6-8 Hours', maxDoses: 3 },
      { range: '04 - 05 Years', dosage: 150, frequency: 'After Every 6-8 Hours', maxDoses: 3 },
      { range: '02 - 03 Years', dosage: 100, frequency: 'After Every 6-8 Hours', maxDoses: 3 }
    ]
  },
  aspirin: {
    medicineType: 'aspirin',
    strengthUnit: 'mg',
    baseStrength: 300,
    ageRanges: [
      { range: '16 Years and above', dosage: [300, 900], frequency: 'After Every 4-6 Hours', maxDoses: 4 }
    ]
  },
  antibiotic: {
    medicineType: 'antibiotic',
    strengthUnit: 'mg',
    baseStrength: 500,
    ageRanges: [
      { range: 'Adults', dosage: 500, frequency: 'Every 8-12 Hours', maxDoses: 2 },
      { range: '12 - 17 Years', dosage: [250, 500], frequency: 'Every 8-12 Hours', maxDoses: 2 },
      { range: '6 - 11 Years', dosage: 250, frequency: 'Every 8-12 Hours', maxDoses: 2 }
    ]
  },
  other: {
    medicineType: 'other',
    strengthUnit: 'mg',
    baseStrength: 0,
    ageRanges: [
      { range: 'All Ages', dosage: 0, frequency: 'As prescribed', maxDoses: 0 }
    ]
  }
};