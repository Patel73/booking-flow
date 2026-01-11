import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Services', path: '#' },
    { name: 'Fleet', path: '#' },
  ];

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">

        <div 
          onClick={() => navigate('/home')} 
          className="flex items-center gap-2 md:gap-3 cursor-pointer group"
        >
          <div className="bg-blue-600 w-9 h-9 md:w-11 md:h-11 rounded-2xl flex items-center justify-center text-white font-black italic shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
            L
          </div>
          <span className="text-lg md:text-xl font-black text-slate-900 tracking-tighter italic uppercase">
            LET'S SHYP <span className="text-blue-600">PRO</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => link.path !== '#' && navigate(link.path)}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                location.pathname === link.path 
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                : 'text-slate-400 hover:text-slate-900'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block bg-green-100 text-green-600 text-[9px] font-black px-2 py-1 rounded-lg uppercase tracking-tighter">
            System Online
          </span>

          <div className="flex items-center gap-2 bg-slate-900 p-1 md:p-1.5 rounded-2xl md:pr-4 border border-slate-800 shadow-xl ml-2">
             <div className="h-7 w-7 md:h-8 md:w-8 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-xs shadow-inner">
               👤
             </div>
             <div className="hidden md:block leading-none">
                <p className="text-[10px] text-white font-black uppercase tracking-tighter">Nadim Khan</p>
                <p className="text-[8px] text-blue-400 font-bold uppercase tracking-tighter mt-1">Developer</p>
             </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;