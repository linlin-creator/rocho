
import React from 'react';

export const Culture: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 px-8 md:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.4em] uppercase text-gray-400 font-semibold">Brand Culture</h3>
            <h2 className="text-4xl md:text-5xl font-serif leading-snug">
              白驹过隙，自在随行。
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
            <p>
              作为城市生活的提案者，我们用美食与聚会赞美生活，描绘不同人的生活风貌。
              ROCHO不仅仅是一个品牌，它是一种对生活态度的无声表达。
            </p>
            <p>
              来自南京的ROCHO，拥有与这座城市相同的DNA：开放、包容、悠闲。我们敢于开拓，且从不止步，在每一个空间里注入文化的灵感。
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-6 border-t border-gray-100">
            <div>
              <p className="text-2xl font-serif">Top 1</p>
              <p className="text-xs tracking-widest uppercase text-gray-400 mt-1">Cafe Ranking</p>
            </div>
            <div>
              <p className="text-2xl font-serif">20,000+</p>
              <p className="text-xs tracking-widest uppercase text-gray-400 mt-1">Daily Max Visitors</p>
            </div>
            <div>
              <p className="text-2xl font-serif">National First</p>
              <p className="text-xs tracking-widest uppercase text-gray-400 mt-1">Mobile Coffee Tram</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1507133750040-4a8f5704633f?auto=format&fit=crop&q=80&w=1200" 
              alt="Lifestyle ROCHO" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 border-[1px] border-gray-100 -z-10"></div>
        </div>
      </div>
    </section>
  );
};
