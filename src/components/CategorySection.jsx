import React from 'react';
import { Wind, Filter, FlaskConical, Settings, Building2, Layers, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { 
    title: 'Air Filters', 
    icon: <Filter size={24} />, 
    desc: 'High-efficiency HEPA filters and pre-filters designed for sterile environments and pharma labs.',
    slug: 'air-filters'
  },
  { 
    title: 'Air Cleaning', 
    icon: <Wind size={24} />, 
    desc: 'Advanced biosafety cabinets and laminar flow hoods to maintain ISO Grade A standards.',
    slug: 'air-cleaning'
  },
  { 
    title: 'Laboratory Furniture', 
    icon: <Building2 size={24} />, 
    desc: 'Durable SS 316L stainless steel workbenches and modular storage for medical laboratories.',
    slug: 'laboratory-furniture'
  },
  { 
    title: 'Production Machinery', 
    icon: <Settings size={24} />, 
    desc: 'Reliable tablet section, capsule filling, and liquid syrup section machinery for manufacturers.',
    slug: 'production-machinery'
  },
  { 
    title: 'Laboratory Equipment', 
    icon: <FlaskConical size={24} />, 
    desc: 'Precision analytical instruments and general lab equipment for strict quality control.',
    slug: 'laboratory-equipment'
  },
  { 
    title: 'Sterile Processing', 
    icon: <Layers size={24} />, 
    desc: 'Turnkey cleanroom panels and flooring for pharmaceutical and medical device industries.',
    slug: 'sterile-processing'
  },
  { 
    title: 'HVAC', 
    icon: <Zap size={24} />, 
    desc: 'Specialized environmental control systems maintaining humidity and temperature for pharma.',
    slug: 'hvac-systems'
  },
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
                Quality Control Expert
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#202124] tracking-tight leading-[1.1]">
                Clean Room & <br /> 
                <span className="text-[#4A93C4]">Industrial Engineering.</span>
              </h2>
            </div>
            <p className="text-[#5f6368] text-lg max-w-sm">
              Serving pharmaceuticals, nutraceuticals, and medical device industries with high-quality engineering and manufacturing services since 2016.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                to={`/categories/${cat.slug}`}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#4A93C4]/5 transition-all group cursor-pointer flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#202124] group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-500 mb-6 shrink-0 group-hover:scale-110">
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
              </Link>
            ))}

            {/* Browse All Products Card */}
            <Link
              to="/all-products"
              className="bg-[#202124] p-8 rounded-3xl border border-transparent shadow-xl hover:shadow-[#202124]/20 transition-all group cursor-pointer flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-[#4A93C4] transition-all duration-500 mb-6 shrink-0 group-hover:scale-110">
                <ArrowRight size={24} className="-rotate-45" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 transition-colors">
                Browse All Products
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                Explore our comprehensive catalog of 500+ pharmaceutical-grade machines and components.
              </p>
              <div className="flex items-center gap-2 text-[12px] font-bold text-[#4A93C4] mt-auto">
                View Catalog <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
