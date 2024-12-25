import React from 'react';
import { Baby, User, UserCog } from 'lucide-react';
import { Card } from '../ui/Card';
import { getDosageByGroup } from '../../utils/dosage';
import type { DosageInfo } from '../../types/medicine';

interface DosageRecommendationsProps {
  dosage: DosageInfo[];
}

const DosageRecommendations = ({ dosage }: DosageRecommendationsProps) => {
  const recommendations = [
    {
      icon: Baby,
      group: 'Children',
      dosage: getDosageByGroup(dosage, 'children'),
      note: 'Based on age and weight'
    },
    {
      icon: User,
      group: 'Adults',
      dosage: getDosageByGroup(dosage, 'adults'),
      note: 'Standard dosage'
    },
    {
      icon: UserCog,
      group: 'Elderly',
      dosage: getDosageByGroup(dosage, 'elderly'),
      note: 'May require adjustment'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recommendations.map(({ icon: Icon, group, dosage, note }) => (
        <Card key={group} className="p-4 bg-purple-50">
          <div className="flex items-center space-x-3 mb-2">
            <Icon className="h-6 w-6 text-purple-600" />
            <h4 className="font-semibold text-purple-900">{group}</h4>
          </div>
          <p className="text-gray-700 font-medium mb-1">{dosage}</p>
          <p className="text-sm text-gray-500">{note}</p>
        </Card>
      ))}
    </div>
  );
};

export default DosageRecommendations;