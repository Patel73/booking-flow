import React from 'react';

const SummaryCard = ({ pickup, drop, details }) => (
  <div className="border border-dashed border-blue-300 bg-blue-50 p-4 rounded-xl">
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center gap-1 mt-1">
        <div className="w-3 h-3 rounded-full border-2 border-blue-600" />
        <div className="w-0.5 h-10 bg-gray-300" />
        <div className="w-3 h-3 bg-red-500 rotate-45" />
      </div>
      <div className="flex-1 space-y-4 text-sm">
        <div>
          <p className="text-xs text-gray-500 uppercase font-bold">Pickup</p>
          <p className="font-medium text-gray-800">{pickup}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase font-bold">Drop</p>
          <p className="font-medium text-gray-800">{drop}</p>
        </div>
      </div>
    </div>
    {details && <div className="mt-3 pt-3 border-t border-blue-100 text-xs font-semibold text-blue-700">{details}</div>}
  </div>
);

export default SummaryCard;