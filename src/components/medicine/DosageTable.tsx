import React from 'react';
import type { DosageInfo } from '../../types/medicine';

interface DosageTableProps {
  dosage: DosageInfo[];
}

const DosageTable = ({ dosage }: DosageTableProps) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-purple-200">
      <thead className="bg-purple-100">
        <tr>
          <th className="px-4 py-3 text-left text-sm font-semibold text-purple-900">Age</th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-purple-900">Dose</th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-purple-900">Dose Frequency</th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-purple-900">Maximum Doses Per Day</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-purple-100">
        {dosage.map((item, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-purple-50' : 'bg-white'}>
            <td className="px-4 py-3 text-gray-700">{item.ageGroup}</td>
            <td className="px-4 py-3 text-gray-700">{item.dose}</td>
            <td className="px-4 py-3 text-gray-700">{item.frequency}</td>
            <td className="px-4 py-3 text-gray-700">{item.maxDosesPerDay}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DosageTable;