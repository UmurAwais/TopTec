import React from 'react';
import { ShieldCheck, Award, Building2, ArrowRight } from 'lucide-react';

const pillars = [
  {
    title: "Cleanroom Innovation",
    desc: "Setting the benchmark for ISO Class 1-9 environments with modular precision.",
    icon: <Building2 className="text-[#4A93C4]" size={32} />
  },
  {
    title: "Sterile Logistics",
    desc: "Ensuring zero-contamination transfer through electromagnetic interlocking tech.",
    icon: <ShieldCheck className="text-[#34A853]" size={32} />
  },
  {
    title: "Regulatory Mastery",
    desc: "Deep-domain expertise in EU GMP, WHO PQS, and ASME BPE standards.",
    icon: <Award className="text-[#FBBC04]" size={32} />
  }
];

const ExpertisePillars = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-8 lg:px-16 text-center mb-20">
         <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
         <h2 className="text-5xl lg:text-7xl font-semibold text-[#202124] tracking-tight">The pillars of <span className="text-[#4A93C4]">TopTec engineering.</span></h2>
      </div>
      <div className="container mx-auto px-8 lg:px-16 grid lg:grid-cols-3 gap-12">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="relative p-12 rounded-[56px] bg-[#F8F9FA] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-gray-200/20 pointer-events-none group-hover:text-[#4A93C4]/10 transition-colors">
                0{idx + 1}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-10 group-hover:bg-[#4A93C4] group-hover:text-white transition-all">
                 {pillar.icon}
              </div>
              <h3 className="text-3xl font-bold text-[#202124] mb-6 leading-tight">{pillar.title}</h3>
              <p className="text-lg text-[#5f6368] leading-relaxed mb-10 grow">{pillar.desc}</p>
              <div className="mt-auto flex items-center gap-3 text-[#4A93C4] font-bold tracking-wider text-sm">
                 Capability Details <ArrowRight size={18} />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ExpertisePillars;
