import type { DosageInfo } from '../types/medicine';

export const getFoodInstruction = (timing?: string): string => {
  switch (timing) {
    case 'before': return 'Take before meals';
    case 'after': return 'Take after meals';
    case 'with': return 'Take with meals';
    default: return 'Can be taken any time';
  }
};

export const getDosageByGroup = (dosage: DosageInfo[], group: string): string => {
  return dosage.find(d => 
    d.condition.toLowerCase().includes(group.toLowerCase())
  )?.dosage || 'Not recommended';
};