import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import whyimg from '../assets/why.jpg';

const AboutStory = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Dynamic Image with Offset Effect */}
          <div className="relative group max-w-lg lg:max-w-none mx-auto w-full">
             {/* Decorative 3D Frame */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border border-[#4A93C4]/15 rounded-3xl sm:rounded-[60px] z-0 rotate-3 group-hover:rotate-6 transition-transform duration-700 hidden sm:block"></div>
             
             <div className="relative z-10 aspect-4/5 rounded-3xl sm:rounded-[56px] overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
                <img 
                  src={whyimg}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Precision Engineering Detail"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
             </div>

             {/* Floating Quality Badge */}
             <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 p-4 sm:p-8 bg-white rounded-2xl sm:rounded-4xl shadow-xl border border-gray-100 z-20 max-w-35 sm:max-w-50 hover:-translate-y-2 transition-transform duration-500">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#34A853] flex items-center justify-center text-white mb-3 sm:mb-4">
                   <ShieldCheck size={24} className="sm:hidden" />
                   <ShieldCheck size={28} className="hidden sm:block" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#202124] mb-1 leading-tight">Zero-Defect Standard</div>
                <div className="text-[9px] sm:text-[11px] text-gray-400 font-medium uppercase tracking-wider">ISO & GMP Compliant</div>
             </div>
          </div>

          {/* Right: The Quality Philosophy Content */}
          <div className="space-y-8 sm:space-y-10">
            <div>
              <span className="inline-flex items-center gap-2 text-[#4A93C4] font-black uppercase text-[10px] sm:text-xs tracking-[0.3em] mb-4 sm:mb-6">
                 <Award size={14} /> Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#202124] leading-tight tracking-tight mb-6 sm:mb-8">
                Precision <br />
                <span className="text-[#4A93C4]">Cleanroom Solutions</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-[#5f6368] leading-relaxed font-light">
                <p>
                  We, Quality Clean Equipment, began our journey with a dedicated approach toward quality in the year 2016. We had a clear vision in mind when the company established—to cater to the requirements of customers with a flawless array of cleanroom equipment.
                </p>
                <p>
                  Over the years, we have emerged as a prime choice when it comes to premium quality of stainless steel Fabricated industrial cleanroom equipment.
                </p>
                <p>
                  With the expertise of an expert team, we design products for specific application requirements of Pharmaceutical, Biotech, Chemical, Food, Hospital, and Microelectronics segments.
                </p>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 flex flex-row items-center gap-8 sm:gap-12">
               <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#202124]">2016</div>
                  <div className="text-[10px] sm:text-sm text-gray-400 font-medium uppercase tracking-widest mt-1">Established</div>
               </div>
               <div className="w-px h-10 sm:h-12 bg-gray-200"></div>
               <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#202124]">Premium</div>
                  <div className="text-[10px] sm:text-sm text-gray-400 font-medium uppercase tracking-widest mt-1">Quality Grade</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;

