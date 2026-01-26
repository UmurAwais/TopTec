import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Filter, FlaskConical, Settings, Building2, Layers, Zap, ArrowRight } from 'lucide-react';

const categories = [
  { title: 'TopTec Filters', icon: <Filter size={24} />, desc: 'Industrial air filtration including HEPA, Pre-filters, Carbon, and Bag filters for sterile air quality.' },
  { title: 'TopTec Air', icon: <Wind size={24} />, desc: 'Specialized air cleaning equipment including Laminar Flow Hoods, Biosafety Cabinets, and Air Showers.' },
  { title: 'TopTec Furniture', icon: <Building2 size={24} />, desc: 'Durable laboratory furniture, Stainless Steel lockers, workstations, and safety stations.' },
  { title: 'TopTec Machine', icon: <Settings size={24} />, desc: 'Pharmaceutical production machinery for Tablet, Capsule, Liquid Syrup, and Ointment sections.' },
  { title: 'TopTec Science', icon: <FlaskConical size={24} />, desc: 'Precision laboratory equipment for Chromatography, Microbiology, and Tablet Testing.' },
  { title: 'TopTec Sterile', icon: <Layers size={24} />, desc: 'Complete cleanroom solutions including Panels, Doors, Flooring, and Turnkey setups.' },
  { title: 'TopTec HVAC', icon: <Zap size={24} />, desc: 'Integrated HVAC systems, Air Handling Units (AHU), Chillers, and Precision Air Conditioning.' },
];

const CategorySection = () => {
  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#4A93C4]/5 rounded-l-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-widest mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#202124] tracking-tight">
                Our Specialized <br /> 
                <span className="text-[#4A93C4]">Product Collections.</span>
              </h2>
            </div>
            <p className="text-[#5f6368] text-lg max-w-sm">
              Specialized solutions designed to meet stringent global standards in pharmaceutical and medical manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-4xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#4A93C4]/5 transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#202124] group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-500 mb-8">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#202124] mb-4 group-hover:text-[#4A93C4] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[#5f6368] leading-relaxed mb-8">
                  {cat.desc}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-[#4A93C4] opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2.5 group-hover:translate-x-0">
                  View Solutions <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
