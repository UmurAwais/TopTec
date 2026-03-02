import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, Grid, List, ArrowUpDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { airFiltersProducts } from '../data/air-filters';
import { airCleaningProducts } from '../data/air-cleaning';
import { laboratoryEquipmentProducts } from '../data/laboratory-equipment';
import { productionMachineryProducts } from '../data/production-machinery';
import { sterileProcessingProducts } from '../data/sterile-processing';

const AllProducts = () => {
  // Combine all products from data files
  const allProducts = [
    ...airFiltersProducts,
    ...airCleaningProducts,
    ...laboratoryEquipmentProducts,
    ...productionMachineryProducts,
    ...sterileProcessingProducts
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(allProducts.map(p => p.category))];
  
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white pt-48 pb-24">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
            Product Catalog
          </span>
          <h1 className="text-5xl lg:text-6xl font-semibold text-[#202124] tracking-tight leading-[1.1] mb-8">
            Complete range of <br />
            <span className="text-[#4A93C4]">pharmaceutical solutions.</span>
          </h1>
          <p className="text-[#5f6368] text-xl font-light leading-relaxed">
            Browse our full selection of equipment, components, and machinery designed for the highest industry standards.
          </p>
        </div>

        {/* Filters & Tools */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center mb-12 py-8 border-y border-gray-100">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#4A93C4]/30 focus:ring-4 focus:ring-[#4A93C4]/5 transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3 items-center w-full lg:w-auto">
            <div className="text-sm font-bold text-[#202124] mr-2 uppercase tracking-widest flex items-center gap-2">
              <Filter size={16} /> Filter:
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-xl cursor-pointer text-xs font-bold transition-all border ${
                  selectedCategory === cat 
                    ? 'bg-[#4A93C4] text-white border-[#4A93C4] shadow-lg shadow-[#4A93C4]/20' 
                    : 'bg-white text-gray-500 border-gray-100 hover:border-[#4A93C4] hover:text-[#4A93C4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mx-auto mb-6">
              <Search size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#202124] mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
