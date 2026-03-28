import React from 'react';
import { ShieldCheck, Microscope, Building2, LayoutGrid, ArrowRight } from 'lucide-react';

const pillars = [
  {
    title: "Cleanroom Innovation",
    desc: "Modular designs providing absolute environmental control for sensitive pharmaceutical manufacturing processes.",
    icon: Building2,
    color: "text-[#4A93C4]",
    bg: "bg-[#4A93C4]/10",
    hover: "group-hover:bg-[#4A93C4]"
  },
  {
    title: "Pharma Process Equipment",
    desc: "Advanced electromagnetic interlocking technology ensuring zero-contamination transfer and product integrity.",
    icon: ShieldCheck,
    color: "text-[#34A853]",
    bg: "bg-[#34A853]/10",
    hover: "group-hover:bg-[#34A853]"
  },
  {
    title: "QC Lab Equipments",
    desc: "High-precision laboratory apparatus designed for the stringent quality control requirements of modern labs.",
    icon: Microscope,
    color: "text-[#FBBC04]",
    bg: "bg-[#FBBC04]/10",
    hover: "group-hover:bg-[#FBBC04]"
  },
  {
    title: "Laboratory Furnitures",
    desc: "High-quality, specialized furniture designed to meet the technical and ergonomic needs of modern laboratories.",
    icon: LayoutGrid,
    color: "text-[#4A93C4]",
    bg: "bg-[#4A93C4]/10",
    hover: "group-hover:bg-[#4A93C4]"
  }
];

const ExpertisePillars = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 text-center mb-12 sm:mb-16">
         <span className="text-[#4A93C4] font-bold text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#202124] tracking-tight leading-tight uppercase">Precision. <br className="sm:hidden" /> <span className="text-[#4A93C4]">Performance. </span>Perfection</h2>
      </div>
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="relative p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] bg-[#F8F9FA] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group flex flex-col h-full overflow-hidden">
                <div className="absolute top-0 right-0 p-4 sm:p-6 text-5xl sm:text-6xl font-black text-gray-200/20 pointer-events-none group-hover:text-[#4A93C4]/10 transition-colors">
                   0{idx + 1}
                </div>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 sm:mb-8 ${pillar.hover} group-hover:text-white transition-all duration-300`}>
                    <Icon className={`${pillar.color} group-hover:text-white transition-colors duration-300`} size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#202124] mb-3 sm:mb-4 leading-tight">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-[#5f6368] leading-relaxed mb-6 sm:mb-8 grow">{pillar.desc}</p>
                {/* <div className={`mt-auto flex items-center gap-2 ${pillar.color} font-bold tracking-wider text-[10px] sm:text-[11px] uppercase`}>
                   Learn More <ArrowRight size={14} />
                </div> */}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default ExpertisePillars;

