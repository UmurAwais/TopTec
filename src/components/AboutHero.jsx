import React from 'react';
import { Zap, Globe, Users, Microscope } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '25+', icon: <Zap size={20} /> },
  { label: 'Global Projects', value: '150+', icon: <Globe size={20} /> },
  { label: 'Specialist Engineers', value: '300+', icon: <Users size={20} /> },
  { label: 'Patented Solutions', value: '12', icon: <Microscope size={20} /> }
];

const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-56 pb-24 overflow-hidden">
      {/* Abstract Engineering Background */}
      <div className="absolute inset-0 z-0 opacity-40">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] bg-[#4A93C4]/5 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-[#34A853]/5 rounded-full blur-[100px]"></div>
         <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A93C4]/10 rounded-full text-[#4A93C4] text-xs font-black uppercase tracking-[0.2em] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#4A93C4] animate-pulse"></span>
              The TopTec Standard
            </span>
            <h1 className="text-6xl lg:text-8xl font-semibold text-[#202124] leading-[0.9] mb-10 tracking-tight">
              Architecting <br />
              <span className="text-[#4A93C4]">Absolute Purity.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#5f6368] leading-relaxed max-w-2xl font-light">
              TopTec isn't just an engineering firm. We are the architects of the invisible—building the sterile frameworks that protect global health innovation.
            </p>
          </div>
          <div className="lg:col-span-5 relative hidden lg:block">
             <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-8 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl transition-all group">
                     <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-[#4A93C4] mb-6 group-hover:bg-[#4A93C4] group-hover:text-white transition-all">
                        {stat.icon}
                     </div>
                     <div className="text-4xl font-bold text-[#202124] mb-1">{stat.value}</div>
                     <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
