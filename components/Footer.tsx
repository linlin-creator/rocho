
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#fafafa] pt-24 pb-12 px-8 md:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5 p-1.5">
                  <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                  <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                  <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                  <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="font-bold tracking-[0.3em] text-lg uppercase">ROCHO</span>
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-xs uppercase tracking-widest">
              Nanjing cultural tourism new coordinates. Light up the city with coffee and inspiration.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs tracking-[0.4em] uppercase text-gray-900 font-semibold">Vision</h4>
            <p className="text-sm text-gray-500 font-light">"咖啡+文旅"创新空间运营模式</p>
            <p className="text-sm text-gray-500 font-light">"打造具有中国文化属性的新文旅复合空间"</p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs tracking-[0.4em] uppercase text-gray-900 font-semibold">Location</h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Mainland China, Jiangsu Province,<br />
              Nanjing City, Jianye District<br />
              ROCHO Spaces
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs tracking-[0.4em] uppercase text-gray-900 font-semibold">Social</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-gray-500 font-light hover:text-black transition-colors tracking-widest uppercase">WeChat Channels</a>
              <a href="#" className="text-sm text-gray-500 font-light hover:text-black transition-colors tracking-widest uppercase">Xiaohongshu</a>
              <a href="#" className="text-sm text-gray-500 font-light hover:text-black transition-colors tracking-widest uppercase">Weibo / @ROCHO</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100 gap-6">
          <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400">© 2019-2026 ROCHO. Life is short, let it be.</p>
          <div className="flex gap-12">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400">Privacy Policy</p>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400">Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
