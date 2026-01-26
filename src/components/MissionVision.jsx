import React from 'react';
import { Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-32 bg-[#202124] relative overflow-hidden">
       {/* Science Circles */}
       <div className="absolute top-[-20%] right-[-10%] w-[60%] h-full border border-white/5 rounded-full pointer-events-none"></div>
       <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-full border border-white/5 rounded-full pointer-events-none"></div>

       <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
             <div>
                <h3 className="text-5xl lg:text-7xl font-semibold text-white mb-10 tracking-tight leading-[0.9]">
                  Our Mission <br />
                  <span className="text-[#4A93C4]">is your safety.</span>
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-12">
                  To deliver zero-compromise environmental precision, ensuring every lab worker is safe and every pharmaceutical product is pristine.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                   <div className="flex flex-col gap-2">
                      <div className="text-3xl font-bold text-white">100%</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Standard Adherence</div>
                   </div>
                   <div className="flex flex-col gap-2">
                      <div className="text-3xl font-bold text-white">0</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Contamination Failures</div>
                   </div>
                </div>
             </div>
             <div className="bg-white/5 backdrop-blur-md p-12 lg:p-20 rounded-[64px] border border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-[#4A93C4] flex items-center justify-center text-white mb-10">
                   <Eye size={36} />
                </div>
                <h4 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider">The Vision</h4>
                <p className="text-xl text-gray-300 leading-relaxed italic">
                  "To become the literal air that the world's pharmacies breathe. If it's sterile, it was engineered by TopTec."
                </p>
             </div>
          </div>
       </div>
    </section>
  );
};

export default MissionVision;
