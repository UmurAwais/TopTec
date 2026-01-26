import React from 'react';
import { ShieldCheck, Zap, Thermometer, Droplets } from 'lucide-react';

const stats = [
  { 
    label: 'Filtration Efficiency', 
    value: '99.99%', 
    desc: 'H14 Grade HEPA integration for absolute sterile environments.',
    icon: <ShieldCheck size={24} className="text-[#4A93C4]" />
  },
  { 
    label: 'Air Exchanges', 
    value: '600+', 
    desc: 'High-frequency air changes per hour for Grade A classifications.',
    icon: <Zap size={24} className="text-[#FBBC04]" />
  },
  { 
    label: 'Temp. Precision', 
    value: '±0.5°C', 
    desc: 'Ultra-tight environmental control for sensitive biotech processes.',
    icon: <Thermometer size={24} className="text-[#EA4335]" />
  },
  { 
    label: 'Humidity Control', 
    value: '±2%', 
    desc: 'Advanced dehumidification systems for dry-powder production.',
    icon: <Droplets size={24} className="text-[#34A853]" />
  }
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
              Performance by Design
            </span>
            <h2 className="text-5xl lg:text-6xl font-semibold text-[#202124] tracking-tight leading-[1.1]">
              Engineering standards <br />
              <span className="text-[#4A93C4]">define industry limits.</span>
            </h2>
          </div>
          <p className="text-lg text-[#5f6368] leading-relaxed max-w-sm">
            TopTec is not just a supplier. We are an engineering partner. Our systems are built to exceed ISO 14644-1 and GMP standards, ensuring your production never stops.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-4xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-[#4A93C4]/10 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-[#202124] mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[14px] font-bold text-[#4A93C4] uppercase tracking-wider mb-4">
                {stat.label}
              </div>
              <p className="text-[#5f6368] text-sm leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
