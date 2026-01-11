import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrderCart from './components/OrderCart';
import Stepper from './components/Stepper';
import PickupDrop from './pages/PickupDrop'; 
import PackageVehicle from './pages/PackageVehicle';
import PricingSummary from './pages/PricingSummary';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [orders, setOrders] = useState([]);
  

  const [formData, setFormData] = useState({
    id: '', pickup: '', drop: '', instructions: '', weight: 1,
    deliveryType: 'Normal', name: '', phone: '', status: 'Draft'
  });


  const stepMap = {
    '/home': 1,
    '/package': 2,
    '/pricing': 3,
    '/checkout': 4,
    '/success': 5
  };
  const step = stepMap[location.pathname] || 1;


  useEffect(() => {
    const titles = {
      '/home': "Route ",
      '/package': "Details",
      '/pricing': "Pricing ",
      '/checkout': "Payment",
      '/success': "Success "
    };
    document.title = titles[location.pathname] || "Let's Shyp Pro";
  }, [location]);


  const handleFinalConfirm = () => {
    const newOrder = { 
      ...formData, 
      id: `LS-${Math.floor(100000 + Math.random() * 900000)}`,
      status: 'In Transit',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setOrders([newOrder, ...orders]);
    setFormData({ id: '', pickup: '', drop: '', instructions: '', weight: 1, deliveryType: 'Normal', name: '', phone: '', status: 'Draft' });
    navigate('/home'); 
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      

      <Navbar />

      <div className="flex flex-col lg:flex-row flex-1 w-full max-w-[1600px] mx-auto overflow-hidden">

        <main className="flex-1 flex flex-col items-center px-4 py-6 md:py-10">
          <div className="w-full max-w-xl bg-white border border-slate-200 shadow-2xl rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden">

            <div className="bg-slate-900 p-6 md:p-8 text-white flex justify-between items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-black italic uppercase tracking-tight">
                  {step === 1 && "Select Route"}
                  {step === 2 && "Package Details"}
                  {step === 3 && "Pricing Plan"}
                  {step === 4 && "Final Checkout"}
                  {step === 5 && "All Done!"}
                </h2>
                <p className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-1 opacity-90">
                  {step < 5 ? `Step ${step} of 4 • Active` : "Completed"}
                </p>
              </div>
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-2xl bg-white/10 flex items-center justify-center font-bold text-xs border border-white/5 shadow-inner italic">
                S{step}
              </div>
            </div>

            {step < 5 && (
              <div className="border-b border-slate-50">
                <Stepper currentStep={step} />
              </div>
            )}


            <div className="p-6 md:p-12 min-h-[450px]">
              <Routes>

                <Route path="/" element={<Navigate to="/home" replace />} />
                

                <Route path="/home" element={<PickupDrop data={formData} setData={setFormData} next={() => navigate('/package')} />} />
                <Route path="/package" element={<PackageVehicle data={formData} setData={setFormData} next={() => navigate('/pricing')} back={() => navigate('/home')} />} />
                <Route path="/pricing" element={<PricingSummary data={formData} next={() => navigate('/checkout')} back={() => navigate('/package')} />} />
                <Route path="/checkout" element={<Checkout data={formData} setData={setFormData} next={() => navigate('/success')} back={() => navigate('/pricing')} />} />
                <Route path="/success" element={<Confirmation onNewBooking={handleFinalConfirm} />} />
              </Routes>
            </div>
          </div>

          <p className="mt-8 text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] text-center">
            Secured Hyperlocal Delivery Network
          </p>
        </main>

        <div className="w-full lg:w-[400px] xl:w-[450px]">
          <OrderCart 
            currentOrder={formData} 
            orders={orders} 
            onMarkDone={(id) => setOrders(orders.map(o => o.id === id ? {...o, status: 'Delivered'} : o))} 
          />
        </div>
      </div>

      <Footer />

      <div className="h-20 lg:hidden"></div>
    </div>
  );
}

export default App;