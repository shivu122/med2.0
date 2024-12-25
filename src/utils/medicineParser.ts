import type { ParsedMedicineInfo } from '../types/medicine';
import { calculateDosage, determineMedicineType } from './dosage/calculator';

export function parseMedicineInfo(text: string): ParsedMedicineInfo {
  const sections = extractSections(text);
  const medicineType = determineMedicineType(sections.name || '', sections.category || '');
  
  return {
    basicInfo: {
      name: sections.name || '',
      type: sections.type || '',
      category: sections.category || '',
      form: sections.form || '',
      strength: sections.strength || '',
      manufacturer: sections.manufacturer || ''
    },
    uses: sections.uses || [],
    dosage: calculateDosage(medicineType, sections.strength || ''),
    warnings: (sections.warnings || []).map(cleanWarning)
  };
}

function cleanWarning(warning: string): string {
  return warning
    .replace(/\*\*/g, '')
    .replace(/^[*•-]\s*/, '')
    .trim();
}

function extractSections(text: string) {
  const lines = text.split('\n').map(line => line.trim());
  let currentSection = '';
  const sections: Record<string, any> = {
    uses: [],
    warnings: []
  };

  lines.forEach(line => {
    if (!line) return;

    const sectionMatch = line.match(/^([A-Za-z]+):/);
    if (sectionMatch) {
      currentSection = sectionMatch[1].toLowerCase();
      if (['name', 'type', 'category', 'form', 'strength', 'manufacturer'].includes(currentSection)) {
        sections[currentSection] = line.split(':')[1].trim();
      }
      return;
    }

    if (line.startsWith('-') || line.startsWith('•')) {
      const content = line.substring(1).trim();
      if (currentSection === 'uses') sections.uses.push(content);
      if (currentSection === 'warnings') sections.warnings.push(content);
    }
  });

  return sections;
}

export default parseMedicineInfo;