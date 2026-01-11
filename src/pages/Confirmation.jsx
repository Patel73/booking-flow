import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import Button from '../components/Button';

const Confirmation = ({ onNewBooking }) => {
  
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-6 page-transition">
      <div className="relative inline-block">
        <div className="w-24 h-24 bg-green-500 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-200 rotate-12 animate-bounce">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="absolute -top-2 -right-2 bg-yellow-400 text-[10px] font-black px-2 py-1 rounded-lg shadow-sm uppercase tracking-tighter">Verified</span>
      </div>

      <h2 className="text-3xl font-black text-slate-900 tracking-tighter">ORDER PLACED!</h2>
      <p className="text-slate-500 mt-2 font-medium">Wait for the rider to reach your pickup.</p>
      
      <div className="mt-10 p-6 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-2">Tracking Status</p>
        <div className="flex items-center justify-center gap-2">
           <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
           <span className="text-sm font-bold text-slate-800 italic">Rider assigning in 2 mins...</span>
        </div>
      </div>

      <div className="mt-10">
        <Button onClick={onNewBooking}>Book Another Shipment</Button>
      </div>
    </div>
  );
};

export default Confirmation;