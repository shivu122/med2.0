import React from 'react';
import { Clock, Coffee } from 'lucide-react';
import type { DosageInfo } from '../../types/medicine';

interface DosageScheduleProps {
  dosage: DosageInfo;
}

const DosageSchedule = ({ dosage }: DosageScheduleProps) => {
  const getFoodInstruction = (timing?: string) => {
    switch (timing) {
      case 'before': return 'Take before meals';
      case 'after': return 'Take after meals';
      case 'with': return 'Take with meals';
      default: return 'Can be taken any time';
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2 text-gray-700">
        <Clock className="h-4 w-4 text-purple-600" />
        <span>{dosage.frequency}</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-700">
        <Coffee className="h-4 w-4 text-purple-600" />
        <span>{getFoodInstruction(dosage.withFood)}</span>
      </div>
      {dosage.timing && (
        <p className="text-sm text-gray-600 ml-6">
          {dosage.timing}
        </p>
      )}
    </div>
  );
};

export default DosageSchedule;