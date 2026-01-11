import React from 'react';
import Button from '../components/Button';

const PackageVehicle = ({ data, setData, next, back }) => {
  const maxWeight = 20;

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700">Weight (kg)</label>
        <input 
          type="number" 
          className={`w-full border p-2 rounded-lg outline-none transition ${data.weight > maxWeight ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:ring-2 focus:ring-blue-200'}`}
          value={data.weight}
          onChange={(e) => setData({...data, weight: e.target.value})}
        />
        {data.weight > maxWeight ? (
          <p className="text-red-500 text-xs mt-1 font-medium">Weight exceeds limit of {maxWeight}kg!</p>
        ) : (
          <p className="text-xs text-gray-500 mt-1">Maximum allowed: {maxWeight}kg</p>
        )}
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">Delivery Type</label>
        <div 
          onClick={() => setData({ ...data, deliveryType: 'Normal' })}
          className={`p-4 border rounded-xl cursor-pointer transition flex justify-between items-center ${data.deliveryType === 'Normal' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
        >
          <div>
            <p className="font-bold text-gray-800">Normal Delivery</p>
            <p className="text-sm text-gray-600">Standard rates (4-6 hours)</p>
          </div>
          {data.deliveryType === 'Normal' && <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>}
        </div>
        
        <div 
          onClick={() => setData({ ...data, deliveryType: 'Express' })}
          className={`p-4 border rounded-xl cursor-pointer transition flex justify-between items-center ${data.deliveryType === 'Express' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
        >
          <div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-gray-800">Express Delivery</p>
              <span className="text-[10px] bg-yellow-400 text-black px-2 py-0.5 rounded-full font-black">FAST</span>
            </div>
            <p className="text-sm text-gray-600">Instant priority (60-90 mins)</p>
          </div>
          {data.deliveryType === 'Express' && <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>}
        </div>
      </div>

      <div className="flex gap-4 pt-4 border-t">
        <Button onClick={back} variant="secondary">Back</Button>
        <Button onClick={next} disabled={data.weight > maxWeight || !data.weight}>Continue</Button>
      </div>
    </div>
  );
};

export default PackageVehicle;