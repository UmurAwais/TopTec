import React from 'react';
import { Target, Zap, Award, Users, ArrowUpRight } from 'lucide-react';

const reasons = [
  {
    title: 'Pioneering Precision',
    desc: 'We engineer success by pioneering precision in machinery manufacturing. From bottle blowing to capping and sealing, our high-performance systems are designed for unwavering industrial performance.',
    icon: <Target size={28} />,
    color: 'text-[#4A93C4]',
    id: 'PRECISION'
  },
  {
    title: 'SS Fabrication Mastery',
    desc: 'Our specialized Stainless Steel (SS) fabrication and high-quality design ensure your facility is built for long-term durability, meeting the most stringent sanitary and structural requirements.',
    icon: <Zap size={28} />,
    color: 'text-[#34A853]',
    id: 'FABRICATION'
  },
  {
    title: 'Proven Track Record',
    desc: 'Since 2016, TopTec has been the trusted engineering partner for Pakistan’s leading Pharmaceuticals, Biotech, and Food firms, delivering expert solutions for complex operational challenges.',
    icon: <Users size={28} />,
    color: 'text-[#FBBC04]',
    id: 'EXPERIENCE'
  },
  {
    title: 'Controlled Environments',
    desc: 'We strictly adhere to ISO, EU GMP, and WHO guidelines to deliver flawless cleanroom equipment, air cleaning systems, and filters that guarantee safety in sterile environments.',
    icon: <Award size={28} />,
    color: 'text-[#EA4335]',
    id: 'COMPLIANCE'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#202124] tracking-tight leading-[1.1]">
              Engineered for <br />
              <span className="text-[#4A93C4]">Absolute Perfection.</span>
            </h2>
          </div>
          <p className="text-lg text-[#5f6368] leading-relaxed max-w-sm">
            TopTec brings together decades of engineering expertise and international standards to deliver world-class pharmaceutical infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => (
            <div 
              key={idx}
              className="p-10 rounded-4xl bg-[#f8f9fa] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-[#4A93C4]/10 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center ${item.color} group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-500`}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-black text-gray-300 tracking-widest group-hover:text-[#4A93C4]/30 transition-colors uppercase">
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
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#4A93C4]">Our Strength</span>
                <ArrowUpRight size={18} className="text-gray-300 group-hover:text-[#4A93C4] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
