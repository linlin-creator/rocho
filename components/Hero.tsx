
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - Representing the misty forest from manual page 2 */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105 hover:scale-100"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2560")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative text-center text-white px-4 animate-fade-in">
        <p className="text-sm md:text-base tracking-[0.5em] uppercase mb-6 font-light">Nanjing • Coffee • Culture</p>
        <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight tracking-tight">
          LIFE IS SHORT<br />
          <span className="italic">LET IT BE</span>
        </h1>
        <div className="w-px h-24 bg-white/40 mx-auto mt-12 animate-bounce"></div>
      </div>

      <div className="absolute bottom-12 left-8 md:left-16 text-white text-xs tracking-[0.3em] uppercase vertical-text hidden md:block">
        Est. 2019
      </div>
    </section>
  );
};
