import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShoppingCart, Info } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'H14 HEPA Filter',
    category: 'Filtration',
    price: 'Contact for Quote',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400',
    specs: '99.995% Efficiency'
  },
  {
    id: 2,
    name: 'Laminar Flow Hood',
    category: 'Air Cleaning',
    price: 'Contact for Quote',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400',
    specs: 'ISO Class 5 compliant'
  },
  {
    id: 3,
    name: 'Pass Box - SS 316L',
    category: 'Sterile Transfer',
    price: 'Contact for Quote',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400',
    specs: 'Electromagnetic Interlocking'
  },
  {
    id: 4,
    name: 'Dynamic Air Shower',
    category: 'Sterile Entrance',
    price: 'Contact for Quote',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=400',
    specs: '25 m/s Air Velocity'
  },
  {
    id: 5,
    name: 'Bio-Safety Cabinet',
    category: 'Air Cleaning',
    price: 'Contact for Quote',
    image: 'https://images.unsplash.com/photo-1579152276532-a399723a7bca?auto=format&fit=crop&q=80&w=400',
    specs: 'Class II Type A2'
  },
  {
    id: 6,
    name: 'Fume Hood Controller',
    category: 'Automation',
    price: 'Contact for Quote',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e92c859?auto=format&fit=crop&q=80&w=400',
    specs: 'VAV Integration'
  },
  {
    id: 7,
    name: 'Cleanroom Bench',
    category: 'Furniture',
    price: 'Contact for Quote',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1794713?auto=format&fit=crop&q=80&w=400',
    specs: 'Stainless Steel Polished'
  },
  {
    id: 8,
    name: 'Pressure Monitor',
    category: 'Monitoring',
    price: 'Contact for Quote',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400',
    specs: 'Accuracy ±0.25%'
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
              Specialized Equipment
            </span>
            <h2 className="text-5xl lg:text-6xl font-semibold text-[#202124] tracking-tight leading-[1.1]">
              Engineered products for <br />
              <span className="text-[#4A93C4]">sterile excellence.</span>
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

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div 
              key={product.id}
              className="min-w-[45%] lg:min-w-[calc(25%-18px)] snap-start group"
            >
              <div className="bg-white rounded-4xl border border-gray-100 p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-[#4A93C4]/10 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-[#4A93C4] uppercase tracking-widest border border-white/20">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="px-2 grow">
                  <h3 className="text-xl font-bold text-[#202124] mb-2 group-hover:text-[#4A93C4] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#5f6368] text-sm mb-4 line-clamp-1">
                    {product.specs}
                  </p>
                </div>

                <div className="px-2 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="text-sm font-bold text-[#202124]">
                    {product.price}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-xl bg-gray-50 text-gray-400 hover:bg-[#4A93C4] hover:text-white transition-all cursor-pointer">
                      <Info size={18} />
                    </button>
                    <button className="p-2 rounded-xl bg-gray-50 text-gray-400 hover:bg-[#4A93C4] hover:text-white transition-all cursor-pointer">
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
