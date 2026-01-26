import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Filter, FlaskConical, Settings, Building2, Layers, Zap, ArrowRight } from 'lucide-react';

const categories = [
  { title: 'Air Filtration', icon: <Filter size={24} />, desc: 'High-efficiency particulate air systems for sterile zones.' },
  { title: 'HVACR Systems', icon: <Zap size={24} />, desc: 'Precision climate control tailored for pharmaceutical labs.' },
  { title: 'Cleanroom Sol.', icon: <Layers size={24} />, desc: 'Modular and comprehensive contamination control environments.' },
  { title: 'Pharma Machines', icon: <Settings size={24} />, desc: 'Advanced processing equipment for medical manufacturing.' },
  { title: 'Lab Furniture', icon: <Building2 size={24} />, desc: 'Ergonomic and specialized stainless steel laboratory units.' },
  { title: 'Lab Equipment', icon: <FlaskConical size={24} />, desc: 'State-of-the-art diagnostic and research tools.' },
];

const CategorySection = () => {
  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#4A93C4]/5 rounded-l-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#4A93C4] font-bold text-sm uppercase tracking-widest mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-semibold text-[#202124] tracking-tight"
            >
              Core Divisions in <br /> 
              <span className="text-[#4A93C4]">Technical Engineering.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#5f6368] text-lg max-w-sm"
          >
            Specialized solutions designed to meet stringent global standards in pharmaceutical and medical manufacturing.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
