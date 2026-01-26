import React from 'react';
import { Wind, Filter, FlaskConical, Settings, Building2, Layers, Zap, ArrowRight } from 'lucide-react';

const categories = [
  { title: 'Filters', icon: <Filter size={24} />, desc: 'Industrial air filtration including HEPA, Pre-filters, Carbon, and Bag filters for sterile air quality.' },
  { title: 'Air', icon: <Wind size={24} />, desc: 'Specialized air cleaning equipment including Laminar Flow Hoods, Biosafety Cabinets, and Air Showers.' },
  { title: 'Furniture', icon: <Building2 size={24} />, desc: 'Durable laboratory furniture, Stainless Steel lockers, workstations, and safety stations.' },
  { title: 'Machine', icon: <Settings size={24} />, desc: 'Pharmaceutical production machinery for Tablet, Capsule, Liquid Syrup, and Ointment sections.' },
  { title: 'Science', icon: <FlaskConical size={24} />, desc: 'Precision laboratory equipment for Chromatography, Microbiology, and Tablet Testing.' },
  { title: 'Sterile', icon: <Layers size={24} />, desc: 'Complete cleanroom solutions including Panels, Doors, Flooring, and Turnkey setups.' },
  { title: 'HVAC', icon: <Zap size={24} />, desc: 'Integrated HVAC systems, Air Handling Units (AHU), Chillers, and Precision Air Conditioning.' },
];

const CategorySection = () => {
  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#4A93C4]/5 rounded-l-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div>
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-widest mb-4 block">
                TopTec Engineering
              </span>
              <h2 className="text-5xl lg:text-6xl font-semibold text-[#202124] tracking-tight">
                Our Specialized <br /> 
                <span className="text-[#4A93C4]">Categories.</span>
              </h2>
            </div>
            <p className="text-[#5f6368] text-lg max-w-sm">
              Explore our core business segments, each engineered to maintain absolute purity and precision in your controlled environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#4A93C4]/5 transition-all group cursor-pointer flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#202124] group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-500 mb-6 shrink-0">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#202124] mb-3 group-hover:text-[#4A93C4] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[#5f6368] text-sm leading-relaxed mb-6 grow">
                  {cat.desc}
                </p>
                <div className="flex items-center gap-2 text-[12px] font-bold text-[#4A93C4] opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 mt-auto">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
