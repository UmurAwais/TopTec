import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FlaskConical, Beaker, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white px-6 lg:px-24 pt-32 lg:pt-44 pb-32 lg:pb-44 overflow-hidden signal-bg">
      {/* Google-Product-Style Soft Background Gradient */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-[#4A93C4]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] bg-[#34A853]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto relative z-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content - SEO Optimized Editorial Layout */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl lg:text-[92px] font-semibold text-[#202124] leading-[0.95] mb-8 tracking-[-0.04em]">
                Engineered <br />
                <span className="text-[#4A93C4]">Purity.</span>
              </h1>
              
              <p className="text-[#5f6368] text-lg lg:text-[18px] leading-relaxed mb-12 max-w-lg">
                TopTec provides advanced Pharmaceutical Engineering and HVACR services. 
                We design and manufacture ISO-compliant Cleanrooms that guarantee 
                unmatched contamination control and environmental precision.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <button className="google-button-primary bg-[#4A93C4]! hover:bg-[#3b7ba8]! cursor-pointer transition-all active:scale-95 shadow-lg shadow-[#4A93C4]/20">
                  Explore Cleanroom Services
                </button>
                <button className="px-8 py-3 rounded-full border border-gray-200 text-[#3c4043] font-medium hover:bg-gray-50 transition-all cursor-pointer hover:border-gray-300 active:scale-95">
                  View Specialized Equipment
                </button>
              </div>

              {/* Google-style Trust Indicators - Keyword Rich */}
              <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 grayscale opacity-60">
                <div className="flex items-center gap-2 cursor-help group" title="Good Manufacturing Practice">
                  <FlaskConical size={20} className="group-hover:text-[#4A93C4] transition-colors" />
                  <span className="text-sm font-medium group-hover:text-[#202124] transition-colors">GMP Certified Design</span>
                </div>
                <div className="flex items-center gap-2 cursor-help group" title="ISO 14644-1 Standards">
                  <Beaker size={20} className="group-hover:text-[#4A93C4] transition-colors" />
                  <span className="text-sm font-medium group-hover:text-[#202124] transition-colors">ISO 7 & 8 Standards</span>
                </div>
                <div className="flex items-center gap-2 cursor-help group" title="Contamination Control">
                  <Activity size={20} className="group-hover:text-[#4A93C4] transition-colors" />
                  <span className="text-sm font-medium group-hover:text-[#202124] transition-colors">HEPA/ULPA Filtration</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Asset - Product Card Style */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 p-4 bg-white rounded-[48px] shadow-2xl border border-gray-100 overflow-hidden group cursor-pointer"
            >
              <div className="aspect-4/3 rounded-[36px] overflow-hidden bg-gray-50 relative">
                <div 
                  className="w-full h-full bg-cover bg-center mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('/hero_family.png')` }}
                ></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-3xl border border-white/50 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#4A93C4] flex items-center justify-center text-white">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#202124]">Sterile Grade A</div>
                      <div className="text-xs text-[#5f6368]">Contamination Status: 0.0%</div>
                    </div>
                  </div>
                  <div className="text-[#4A93C4] font-medium text-sm group-hover:underline">View Live Data</div>
                </div>
              </div>
            </motion.div>

            {/* Floating "Material" Elements */}
            <div className="absolute -top-6 -right-6 p-6 bg-white rounded-4xl shadow-lg border border-gray-100 z-20 flex flex-col gap-2 cursor-default">
              <div className="w-10 h-10 rounded-full bg-[#FBBC04] flex items-center justify-center text-white">
                <FlaskConical size={20} />
              </div>
              <div className="text-[12px] font-bold text-[#202124]">HVACR Efficiency</div>
              <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-[#FBBC04]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
