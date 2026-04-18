import React from 'react';
import { Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#202124] relative overflow-hidden">
       {/* Science Circles */}
       <div className="absolute top-[-20%] right-[-10%] w-[60%] h-full border border-white/5 rounded-full pointer-events-none hidden sm:block"></div>
       <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-full border border-white/5 rounded-full pointer-events-none hidden sm:block"></div>

       <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-32 items-center">
             <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 sm:mb-10 tracking-tight leading-tight">
                  Our Mission <br />
                  <span className="text-[#4A93C4]">is your safety.</span>
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed mb-8 sm:mb-12">
                   To empower the pharmaceutical and biotech sectors with zero-compromise environmental precision. We are dedicated to providing a flawless array of premium stainless steel solutions that secure the safety of every lab worker and ensure every product remains pristine.
                </p>
                <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-white/10">
                   <div className="flex flex-col gap-1 sm:gap-2">
                      <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                      <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-bold">Standard Adherence</div>
                   </div>
                   <div className="flex flex-col gap-1 sm:gap-2">
                      <div className="text-2xl sm:text-3xl font-bold text-white">0</div>
                      <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-bold">Contamination Failures</div>
                   </div>
                </div>
             </div>
             <div className="bg-white/5 backdrop-blur-md p-6 sm:p-12 lg:p-20 rounded-3xl sm:rounded-[64px] border border-white/10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#4A93C4] flex items-center justify-center text-white mb-6 sm:mb-10">
                   <Eye size={28} className="sm:hidden" />
                   <Eye size={36} className="hidden sm:block" />
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-wider">The Vision</h4>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed italic">
                   "To be the global prime choice for premium stainless steel cleanroom equipment, setting the world standard for unparalleled quality and timely delivery across the pharmaceutical, biotech, and medical sectors."
                </p>
             </div>
          </div>
       </div>
    </section>
  );
};

export default MissionVision;
