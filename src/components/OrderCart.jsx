import React from 'react';

const OrderCart = ({ currentOrder, orders, onMarkDone }) => {
  return (
    <aside className="w-full lg:w-[380px] xl:w-[420px] bg-white border-t lg:border-l border-slate-100 flex flex-col p-5 md:p-8 lg:sticky lg:top-0 h-auto lg:h-screen shadow-2xl z-30">
      
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </span>
          Live Fleet
        </h3>
        <span className="text-[9px] bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-bold uppercase">Active</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6 md:space-y-8 pb-20 lg:pb-0 custom-scrollbar">
        <section>
          <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3">Drafting</h4>
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 border-dashed">
            {currentOrder.pickup ? (
              <p className="text-xs font-bold text-blue-900 truncate">📍 {currentOrder.pickup}</p>
            ) : (
              <p className="text-[11px] text-blue-400 italic">No active draft...</p>
            )}
          </div>
        </section>

        <section>
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Shipments ({orders.length})</h4>
          <div className="grid grid-cols-1 gap-4">
            {orders.map((o) => (
              <div key={o.id} className="p-4 rounded-2xl border border-slate-100 bg-white shadow-sm">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-mono text-slate-400">{o.id}</span>
                  <div className={`text-[8px] font-black px-2 py-0.5 rounded-full ${o.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                    {o.status}
                  </div>
                </div>
                <p className="text-xs font-bold mt-2 truncate text-slate-800 uppercase">{o.drop}</p>
                {o.status === 'In Transit' && (
                  <button onClick={() => onMarkDone(o.id)} className="w-full mt-3 py-2 bg-slate-900 text-white text-[10px] font-bold rounded-xl uppercase tracking-wider">Done</button>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
};

export default OrderCart;