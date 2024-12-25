import { DosageInfo } from '../../types/medicine';
import { dosageRules } from './rules';
import { MedicineType } from './types';

export function calculateDosage(medicineType: MedicineType, strength: string): DosageInfo[] {
  const rules = dosageRules[medicineType] || dosageRules.other;
  
  return rules.ageRanges.map(range => ({
    ageGroup: range.range,
    dose: formatDose(range.dosage, rules.strengthUnit),
    frequency: range.frequency,
    maxDosesPerDay: `${range.maxDoses} Doses`,
    withFood: medicineType === 'ibuprofen' ? 'with' : 'any'
  }));
}

function formatDose(dosage: number | [number, number], unit: string): string {
  if (Array.isArray(dosage)) {
    return `${dosage[0]} ${unit} - ${dosage[1]} ${unit}`;
  }
  return `${dosage} ${unit}`;
}

export function determineMedicineType(name: string, category: string): MedicineType {
  const lowerName = name.toLowerCase();
  const lowerCategory = category.toLowerCase();
  
  if (lowerName.includes('paracetamol') || lowerName.includes('acetaminophen')) {
    return 'paracetamol';
  }
  if (lowerName.includes('ibuprofen')) {
    return 'ibuprofen';
  }
  if (lowerName.includes('aspirin')) {
    return 'aspirin';
  }
  if (lowerCategory.includes('antibiotic')) {
    return 'antibiotic';
  }
  return 'other';
}