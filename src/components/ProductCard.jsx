import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product, className = "" }) => {
  const slug = product.slug || product.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');
  
  return (
    <div className={`group bg-white border border-gray-100 rounded-2xl flex flex-col h-full hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden ${className}`}>
      <Link to={`/product/${slug}`} className="cursor-pointer flex flex-col h-full">
        {/* Image Container */}
        <div className="relative aspect-4/3 bg-gray-100 overflow-hidden">
          <img 
            src={product.image || "/slider/cleanroom-hall.jpg"} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-[#4A93C4] text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-[#4A93C4]/20 border border-white/20 flex items-center justify-center">
              Premium Grade
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col grow">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-[#202124] mb-2 group-hover:text-[#4A93C4] transition-colors line-clamp-1">
              {product.name}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
              {product.description || product.specs}
            </p>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">Status</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span className="text-[11px] font-bold text-[#202124]">Available</span>
              </div>
            </div>
            
            <div className="h-10 px-5 bg-gray-50 text-[#202124] rounded-xl text-xs font-bold group-hover:bg-[#202124] group-hover:text-white transition-all flex items-center gap-2">
              View Details
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
