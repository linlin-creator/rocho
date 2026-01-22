
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-8 md:px-16 flex justify-between items-center ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent text-white'}`}>
      <div className="flex items-center gap-3">
        {/* Simplified ROCHO Logo based on manual */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${scrolled ? 'bg-black' : 'bg-white/20'}`}>
           <div className="grid grid-cols-2 gap-1 p-2">
             <div className="w-1 h-1 bg-white rounded-full"></div>
             <div className="w-1 h-1 bg-white rounded-full"></div>
             <div className="w-1 h-1 bg-white rounded-full"></div>
             <div className="w-1 h-1 bg-white rounded-full"></div>
           </div>
        </div>
        <span className="font-bold tracking-widest text-xl">ROCHO</span>
      </div>
      
      <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-[0.2em] uppercase">
        <a href="#about" className="hover:opacity-60 transition-opacity">Philosophy</a>
        <a href="#projects" className="hover:opacity-60 transition-opacity">Spaces</a>
        <a href="#services" className="hover:opacity-60 transition-opacity">Experience</a>
        <a href="#contact" className="hover:opacity-60 transition-opacity">Connect</a>
      </div>

      <div className="md:hidden">
        <button className="p-2">
          <div className={`w-6 h-[1px] mb-1.5 ${scrolled ? 'bg-black' : 'bg-white'}`}></div>
          <div className={`w-6 h-[1px] ${scrolled ? 'bg-black' : 'bg-white'}`}></div>
        </button>
      </div>
    </nav>
  );
};
