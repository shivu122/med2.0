import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface WarningsListProps {
  warnings: string[];
}

const WarningsList = ({ warnings }: WarningsListProps) => {
  const cleanWarning = (warning: string) => {
    return warning
      .replace(/\*\*/g, '') // Remove asterisks
      .replace(/^[*•-]\s*/, '') // Remove bullet points at start
      .trim();
  };

  return (
    <ul className="space-y-4">
      {warnings.map((warning, index) => (
        <li key={index} className="flex items-start gap-3 text-yellow-700">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5 text-yellow-600" />
          <span className="flex-1">{cleanWarning(warning)}</span>
        </li>
      ))}
    </ul>
  );
};

export default WarningsList;