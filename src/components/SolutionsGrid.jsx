import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Wind, Filter, FlaskConical, Settings, Building2, Layers, Zap } from 'lucide-react';

const solutions = [
  { title: 'Air Filtration', icon: <Filter size={32} />, color: 'text-gray-900' },
  { title: 'Air Cleaning', icon: <Wind size={32} />, color: 'text-gray-900' },
  { title: 'Lab Furniture', icon: <Building2 size={32} />, color: 'text-gray-900' },
  { title: 'Pharma Machines', icon: <Settings size={32} />, color: 'text-gray-900' },
  { title: 'Lab Equipment', icon: <FlaskConical size={32} />, color: 'text-gray-900' },
  { title: 'Cleanroom Sol.', icon: <Layers size={32} />, color: 'text-gray-900' },
  { title: 'HVAC Systems', icon: <Zap size={32} />, color: 'text-gray-900' },
];

const SolutionsGrid = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "linear" }}
          className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center p-6 lg:p-24"
        >
          {/* Minimalist Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-12 right-12 p-3 text-gray-300 hover:text-gray-900 transition-colors cursor-pointer group"
            aria-label="Close"
          >
            <X size={40} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Centered Minimalist Navigation */}
          <div className="w-full max-w-6xl">
            <div className="mb-20">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#4A93C4] block mb-4">Core Divisions</span>
              <h2 className="text-6xl lg:text-[82px] font-semibold text-[#202124] tracking-[-0.04em] leading-tight">Expertise.</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
              {solutions.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group cursor-pointer flex flex-col gap-6"
                >
                  <div className="text-[#202124] opacity-30 group-hover:opacity-100 group-hover:text-[#4A93C4] transition-all duration-500 transform group-hover:scale-110">
                    {React.cloneElement(item.icon, { strokeWidth: 1.5 })}
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-semibold text-[#202124] tracking-tight group-hover:text-[#4A93C4] transition-colors">
                      {item.title}
                    </h4>
                    <div className="h-[2px] w-0 group-hover:w-12 bg-[#4A93C4] transition-all duration-500 mt-3"></div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A93C4] opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2">
                    Explore Details <ArrowRight size={12} />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SolutionsGrid;
