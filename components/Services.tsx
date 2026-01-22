
import React from 'react';

const coreCompetitive = [
  { name: 'Specialty Coffee', icon: '☕' },
  { name: 'Ancient Noodles', icon: '🍜' },
  { name: 'Handmade Burgers', icon: '🍔' },
  { name: 'Urban Cycling', icon: '🚲' },
  { name: 'Craft Baking', icon: '🥐' },
  { name: 'Book Space', icon: '📚' }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-40 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <h3 className="text-xs tracking-[0.4em] uppercase text-gray-400 font-semibold">Core Competency</h3>
          <h2 className="text-4xl md:text-5xl font-serif">
            New Cultural Tourism<br />Composite Space Model
          </h2>
          <div className="w-16 h-px bg-black mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-12">
          {coreCompetitive.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="text-4xl mb-6 transform transition-transform duration-500 group-hover:scale-125">
                {item.icon}
              </div>
              <h4 className="text-lg font-medium tracking-widest uppercase mb-2">{item.name}</h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-light">The core of ROCHO identity</p>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-[#1a1a1a] text-white rounded-sm flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-serif italic">"Event Planning & Operation"</h3>
            <p className="font-light text-gray-400 leading-relaxed">
              We connect brands and audiences through creative execution, turning abstract goals into tangible emotional experiences.
            </p>
          </div>
          <button className="px-12 py-4 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 text-xs tracking-[0.4em] uppercase">
            Collaborate With Us
          </button>
        </div>
      </div>
    </section>
  );
};
