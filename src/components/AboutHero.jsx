import React from 'react';
import { Zap } from 'lucide-react';
import Aboutimg from '../assets/about.jpg'


const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-42 sm:pt-40 lg:pt-42 pb-16 lg:pb-24 overflow-hidden">
      {/* Abstract Engineering Background */}
      <div className="absolute inset-0 z-0 opacity-40">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] bg-[#4A93C4]/5 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-[#34A853]/5 rounded-full blur-[100px]"></div>
         <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16 lg:gap-8">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A93C4]/10 rounded-full text-[#4A93C4] text-xs font-black uppercase tracking-[0.2em] mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-[#4A93C4] animate-pulse"></span>
              The TopTec Standard
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-[#202124] leading-tight mb-8 sm:mb-10 tracking-tight">
              Cleanroom & Pharma 
              <span className="text-[#4A93C4]"> Solutions.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#5f6368] leading-relaxed max-w-2xl font-light">
              Since 2016, we've provided precision-built cleanroom environments and pharmaceutical infrastructure. Specializing in advanced lab equipment, furniture, and production machinery, we serve leaders in the pharmaceutical, food, and medical device industries with a focus on innovation and quality.
            </p>
          </div>
          <div className="lg:col-span-5 relative w-full max-w-lg lg:max-w-none mx-auto">
             <div className="relative z-10 p-2 sm:p-2 bg-white rounded-3xl sm:rounded-[48px] shadow-2xl border border-gray-100 overflow-hidden group">
               <div className="aspect-4/3 lg:aspect-square w-full rounded-2xl sm:rounded-[36px] overflow-hidden bg-gray-50 relative">
                 <img 
                   src={Aboutimg} 
                   className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                   alt="TopTec Advanced Engineering Facility"
                 />
                 <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
               </div>
             </div>
             
             {/* Decorative Background Element */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-[#4A93C4]/10 rounded-[40px] sm:rounded-[80px] z-0 -rotate-3 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
