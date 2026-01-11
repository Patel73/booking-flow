import React from 'react';
import { calculateDistance } from '../mockData';
import Button from '../components/Button';

const PricingSummary = ({ data, next, back }) => {
  const distance = calculateDistance(data.pickup, data.drop);
  const ratePerKm = 15;
  const baseFare = distance * ratePerKm;
  const weightCharge = data.weight * 10;
  const expressCharge = data.deliveryType === 'Express' ? 100 : 0;
  const total = baseFare + weightCharge + expressCharge;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <h2 className="text-2xl font-black text-slate-900">₹{total}</h2>
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{distance} KM Distance</span>
      </div>

      <div className="p-5 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Distance Fare ({distance}km x ₹15)</span>
          <span className="font-bold">₹{baseFare}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-500">Weight Surcharge</span>
          <span className="font-bold">₹{weightCharge}</span>
        </div>
        {expressCharge > 0 && (
          <div className="flex justify-between text-sm text-blue-600 font-bold">
            <span>Express Priority</span>
            <span>+₹{expressCharge}</span>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <Button variant="secondary" onClick={back}>Back</Button>
        <Button onClick={next}>Confirm & Pay</Button>
      </div>
    </div>
  );
};

export default PricingSummary;