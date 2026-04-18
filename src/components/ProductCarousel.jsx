import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Bag Filter',
    category: 'Air Filters',
    price: 'Request Quote',
    image: 'https://toptec.pk/wp-content/uploads/2024/07/1-2-f5-f9-medium-replacement-air-filter_01m.jpg',
    specs: 'F6-F9 Efficiency, Synthetic Fiber'
  },
  {
    id: 2,
    name: 'Deep Pleated HEPA Filter',
    category: 'Air Filters',
    price: 'Request Quote',
    image: 'https://toptec.pk/wp-content/uploads/2024/07/thumbnail-720-tiny.jpg',
    specs: 'H13 / H14 (up to 99.995%)'
  },
  {
    id: 3,
    name: 'Air Shower',
    category: 'Air Cleaning',
    price: 'Request Quote',
    image: 'https://toptec.pk/wp-content/uploads/2024/04/Air-Shower-Image-768x768.png',
    specs: 'High-velocity nozzle decontamination'
  },
  {
    id: 4,
    name: 'Biological Safety Cabinet (Class II)',
    category: 'Air Cleaning',
    price: 'Request Quote',
    image: 'https://toptec.pk/wp-content/uploads/2024/04/BSC-B2-48-2.jpg',
    specs: 'NSF/ANSI 49 Certified'
  },
  {
    id: 5,
    name: 'Dispensing/Sampling Booth',
    category: 'Air Cleaning',
    price: 'Request Quote',
    image: 'https://toptec.pk/wp-content/uploads/2024/12/Dispensingsampling-768x768.jpg',
    specs: 'Negative pressure environment'
  },
  {
    id: 6,
    name: 'Fan Filter Unit',
    category: 'Air Cleaning Equipments',
    price: 'Request Quote',
    image: 'https://toptec.pk/wp-content/uploads/2024/04/fan-filter-unit.png',
    specs: 'Integrated HEPA & fan system'
  },
  {
    id: 7,
    name: 'Micro-Scan Digital 4K',
    category: 'Laboratory Equipment',
    price: 'Request Quote',
    image: '/slider/lab-microscope.jpg',
    specs: 'Ultra-HD digital imaging'
  },
  {
    id: 8,
    name: 'Precision Dissolution X4',
    category: 'Laboratory Equipment',
    price: 'Request Quote',
    image: '/slider/lab-work.jpg',
    specs: 'Automated dissolution testing'
  },
  {
    id: 9,
    name: 'Analytical Balance Pro',
    category: 'Laboratory Equipment',
    price: 'Request Quote',
    image: '/slider/corridor.jpg',
    specs: 'High-precision stability'
  },
  {
    id: 10,
    name: 'Rotary Tablet Press 3000',
    category: 'Production Machinery',
    price: 'Request Quote',
    image: '/slider/production.jpg',
    specs: 'High-speed tablet compaction'
  },
  {
    id: 11,
    name: 'Precision Capsule Filler',
    category: 'Production Machinery',
    price: 'Request Quote',
    image: '/slider/pharma-pills.jpg',
    specs: 'Accurate powder/pellet dosing'
  },
  {
    id: 12,
    name: 'Fluid Bed Dryer',
    category: 'Production Machinery',
    price: 'Request Quote',
    image: '/slider/cleanroom-suit.jpg',
    specs: 'Efficient granulation & drying'
  }
];

const ProductCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
              Featured Machinery
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#202124] tracking-tight leading-[1.1]">
              Quality Engineering <br />
              <span className="text-[#4A93C4]">You Can Trust.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 mb-4 lg:mb-0">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-gray-200 text-gray-400 hover:text-[#4A93C4] hover:border-[#4A93C4] hover:bg-gray-50 transition-all cursor-pointer"
              aria-label="Previous products"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-gray-200 text-gray-400 hover:text-[#4A93C4] hover:border-[#4A93C4] hover:bg-gray-50 transition-all cursor-pointer"
              aria-label="Next products"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container - 1 Row, 4 Items visible */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-[calc(25%-18px)] snap-start"
            />
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default ProductCarousel;
