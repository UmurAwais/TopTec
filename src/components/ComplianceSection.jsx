import React from 'react';
import { ShieldCheck, Globe, Award, FileCheck, ArrowUpRight } from 'lucide-react';

const standards = [
  {
    title: 'ISO 14644-1 Cleanrooms',
    desc: 'Complete cleanroom design, construction, and certification for ISO Class 1 through Class 9 controlled environments.',
    icon: <Globe size={28} className="text-[#4A93C4]" />,
    id: 'ISO-14644'
  },
  {
    title: 'EU GMP Compliance',
    desc: 'Pharmaceutical cleanrooms meeting EU GMP Annex 1 requirements for Grade A, B, C, and D sterile manufacturing.',
    icon: <ShieldCheck size={28} className="text-[#34A853]" />,
    id: 'EU-GMP'
  },
  {
    title: 'WHO Prequalification',
    desc: 'WHO-PQS certified equipment and cleanroom infrastructure for global vaccine and essential medicine production.',
    icon: <Award size={28} className="text-[#FBBC04]" />,
    id: 'WHO-PQS'
  },
  {
    title: 'FDA 21 CFR Part 11',
    desc: 'Electronic monitoring systems and cleanroom controls compliant with FDA regulations for pharmaceutical manufacturing.',
    icon: <FileCheck size={28} className="text-[#EA4335]" />,
    id: 'FDA-CFR'
  }
];

const ComplianceSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
              Regulatory Compliance
            </span>
            <h2 className="text-5xl lg:text-6xl font-semibold text-[#202124] tracking-tight leading-[1.1]">
              Meeting global standards <br />
              <span className="text-[#4A93C4]">in every market.</span>
            </h2>
          </div>
          <p className="text-lg text-[#5f6368] leading-relaxed max-w-sm">
            Our cleanroom solutions comply with FDA, WHO, EMA, and local regulatory requirements across UAE, Saudi Arabia, Qatar, Kenya, Nigeria, Bangladesh, Sri Lanka, Vietnam, Jordan, USA, Germany, and UK pharmaceutical markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item, idx) => (
            <div 
              key={idx}
              className="p-10 rounded-4xl bg-[#f8f9fa] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-[#4A93C4]/10 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black text-gray-300 tracking-widest group-hover:text-[#4A93C4]/30 transition-colors">
                  {item.id}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#202124] mb-4 group-hover:text-[#4A93C4] transition-colors leading-tight">
                {item.title}
              </h3>
              
              <p className="text-[#5f6368] text-sm leading-relaxed mb-8 grow">
                {item.desc}
              </p>

              <div className="pt-6 border-t border-gray-100 mt-auto flex items-center justify-between group-hover:border-[#4A93C4]/20 transition-colors">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#4A93C4]">Regulation Met</span>
                <ArrowUpRight size={18} className="text-gray-300 group-hover:text-[#4A93C4] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Certification Logo Bar */}
        <div className="mt-20 py-12 border-y border-gray-100 flex flex-wrap justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <div className="text-2xl font-black tracking-tighter text-gray-900 italic">ISO 9001:2015</div>
             <div className="text-2xl font-black tracking-tighter text-gray-900">GMP <span className="text-[#4A93C4]">GRADE A</span></div>
             <div className="text-2xl font-black tracking-tighter text-gray-900 border-2 border-gray-900 px-3 py-1">WHO CERTIFIED</div>
             <div className="text-2xl font-black tracking-tighter text-gray-900 underline decoration-[#4A93C4] decoration-4">ISO 14644-1</div>
             <div className="text-2xl font-black tracking-tighter text-gray-900">ASME <span className="text-[#EA4335]">BPE</span></div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
