import React from 'react';

const Stepper = ({ currentStep }) => {

  const steps = [
    { id: 1, label: "Home" }, 
    { id: 2, label: "Package" }, 
    { id: 3, label: "Pricing" }, 
    { id: 4, label: "Payment" }  
  ];

  return (
    <div className="flex justify-between items-center px-10 py-6 bg-slate-50/30">
      {steps.map((step, index) => {
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;

        return (
          <div key={step.id} className="flex flex-col items-center gap-2 flex-1 relative">
            <div className={`h-9 w-9 rounded-2xl flex items-center justify-center text-[11px] font-black transition-all duration-500 z-10 
              ${isActive 
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 scale-110' 
                : isCompleted 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white text-slate-300 border-2 border-slate-100'}`}>
              {isCompleted ? '✓' : step.id}
            </div>

            <span className={`text-[10px] font-black uppercase tracking-[0.15em] transition-colors duration-300 
              ${isActive ? 'text-blue-600' : 'text-slate-300'}`}>
              {step.label}
            </span>
            {index < steps.length - 1 && (
              <div className="absolute top-[18px] left-[60%] w-[80%] h-[2px] bg-slate-100 -z-0">
                <div 
                  className="h-full bg-blue-600 transition-all duration-700 ease-in-out" 
                  style={{ width: isCompleted ? '100%' : '0%' }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;