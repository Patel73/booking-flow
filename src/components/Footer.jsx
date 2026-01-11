import React from 'react';

const Footer = () => {
  const whatsappMsg = encodeURIComponent("Hello Nadim, I saw your 'Let's Shyp' project and I'd like to talk to you!");
  const whatsappLink = `https://wa.me/917387020567?text=${whatsappMsg}`;
  
  const emailLink = "mailto:mrnadimofficial99@gmail.com";

  return (
    <footer className="fixed bottom-0 w-full bg-slate-900 text-white py-4 px-8 z-50 border-t border-slate-800 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition-all duration-300 cursor-pointer group"
          >
            <span className="relative flex h-3 w-3 items-center justify-center">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20"></span>
               <span className="text-blue-500 text-sm group-hover:scale-125 transition-transform">📞</span>
            </span>
            7387020567
          </a>

          <a 
            href={emailLink}
            className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 cursor-pointer group"
          >
            <span className="text-blue-500 text-sm group-hover:scale-125 transition-transform">📧</span> 
            mrnadimofficial99@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-1 w-8 bg-blue-600 rounded-full hidden md:block"></div>
          <p className="text-xs font-medium text-slate-300">
            {/* Let's Shyp Pro <span className="mx-2 text-slate-600">|</span>  */}
            Developed by <span className="text-white font-black hover:text-blue-400 transition-all cursor-default uppercase">Nadim Khan</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-tighter text-green-500">System Live</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;