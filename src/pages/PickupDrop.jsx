import React from 'react';
import { LOCATIONS } from '../mockData';
import Button from '../components/Button';

const PickupDrop = ({ data, setData, next }) => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-black text-slate-800 italic">Select Route</h2>
      
      <div>
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pickup Location</label>
        <select 
          className="w-full mt-1 p-3 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none appearance-none bg-slate-50"
          value={data.pickup}
          onChange={(e) => setData({...data, pickup: e.target.value})}
        >
          <option value="">Choose Pickup...</option>
          {LOCATIONS.map(l => <option key={l.name} value={l.name}>{l.name}</option>)}
        </select>
      </div>

      <div>
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Drop Location</label>
        <select 
          className="w-full mt-1 p-3 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none appearance-none bg-slate-50"
          value={data.drop}
          onChange={(e) => setData({...data, drop: e.target.value})}
        >
          <option value="">Choose Destination...</option>
          {LOCATIONS.map(l => <option key={l.name} value={l.name}>{l.name}</option>)}
        </select>
      </div>

      <Button onClick={next} disabled={!data.pickup || !data.drop || data.pickup === data.drop}>
        {data.pickup === data.drop ? "Locations can't be same" : "Calculate Fare"}
      </Button>
    </div>
  );
};

export default PickupDrop;