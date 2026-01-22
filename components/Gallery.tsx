
import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1501339819302-ee4b8dd5417f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1524350300363-28f806ca3989?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1497933321188-941f9ad36b12?auto=format&fit=crop&q=80&w=800"
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="flex animate-scroll hover:pause whitespace-nowrap">
        <div className="flex gap-4 min-w-full">
          {images.map((src, idx) => (
            <div key={idx} className="w-[300px] h-[400px] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700">
              <img src={src} alt="Gallery item" className="w-full h-full object-cover" />
            </div>
          ))}
          {/* Repeat for seamless loop effect */}
          {images.map((src, idx) => (
            <div key={`dup-${idx}`} className="w-[300px] h-[400px] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700">
              <img src={src} alt="Gallery item" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
