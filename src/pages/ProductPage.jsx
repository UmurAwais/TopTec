import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ArrowLeft, 
  ShieldCheck, 
  Settings, 
  Zap, 
  Download, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  Globe, 
  Award,
  Maximize2,
  FileText
} from 'lucide-react';

import { getProductBySlug } from '../data';

const ProductPage = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  const product = getProductBySlug(slug) || {
    name: slug?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Premium Equipment',
    category: 'Technical Solutions',
    description: 'High-performance pharmaceutical grade equipment designed for precision, durability, and compliance with global standards.',
    image: '/slider/cleanroom-hall.jpg',
    features: [
      'Full GMP Compliance',
      'Stainless Steel Grade 316L',
      'Precision Engineered Components',
      'Integrated Control Systems',
      'Energy Efficient Operation'
    ],
    specs: {
      'Material': 'SS 316L / SS 304',
      'Compliance': 'GMP / FDA / WHO',
      'Warranty': '24 Months',
      'Service': '24/7 Global Support',
      'Origin': 'Technologically Advanced'
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Globe size={16} /> },
    { id: 'features', label: 'Key Features', icon: <Settings size={16} /> },
    { id: 'technical', label: 'Technical Specs', icon: <Zap size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Premium Header/Nav Spacer */}
      <div className="h-24 sm:h-32"></div>

      <div className="container mx-auto px-6 lg:px-16 pb-16">
        {/* Breadcrumbs & Back Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <Link 
            to={-1} 
            className="flex items-center gap-2 text-sm font-bold text-[#5f6368] hover:text-[#4A93C4] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Catalog
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5f6368] bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-100/50 shadow-sm w-fit"
          >
            <Link to="/" className="hover:text-[#4A93C4] transition-colors">Home</Link>
            <ChevronRight size={10} className="text-gray-300" />
            <span className="text-[#4A93C4]">Categories</span>
            <ChevronRight size={10} className="text-gray-300" />
            <Link 
              to={`/categories/${product.category.toLowerCase().replace(/ /g, '-')}`} 
              className="hover:text-[#4A93C4] transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight size={10} className="text-gray-300" />
            <span className="text-gray-400 truncate max-w-25">{product.name}</span>
          </motion.div>
        </div>

        {/* Hero Product Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start border-b border-gray-100 pb-20">
          {/* Left: Product Image Display */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden bg-[#F8F9FA] shadow-2xl shadow-gray-200/50 group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto aspect-square object-cover"
              />
              <button className="absolute bottom-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#202124] shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                <Maximize2 size={20} />
              </button>
            </div>
            
            {/* Aesthetic Underlay */}
            <div className="absolute -inset-4 bg-linear-to-br from-[#4A93C4]/10 to-transparent z-0 rounded-[3rem] blur-2xl opacity-50"></div>
            
            {/* Quick Status Tags */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { icon: <ShieldCheck size={14} />, label: "GMP Certified" },
                { icon: <Award size={14} />, label: "Export Quality" },
                { icon: <Clock size={14} />, label: "24/7 Support" }
              ].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl border border-gray-100 text-[11px] font-bold text-[#5f6368] uppercase tracking-wider">
                  <span className="text-[#4A93C4]">{tag.icon}</span>
                  {tag.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Product Basic Info & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="inline-block px-4 py-1.5 bg-[#4A93C4]/10 text-[#4A93C4] text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 w-fit">
              TopTec Signature Series
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] mb-8 leading-tight tracking-tight">
              {product.name}
            </h1>
            
            <p className="text-xl text-[#5f6368] leading-relaxed mb-10 font-light italic border-l-4 border-[#4A93C4]/20 pl-6">
              "{product.description}"
            </p>

            {/* Quick CTA Card */}
            <div className="bg-[#202124] rounded-4xl p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A93C4]/20 rounded-bl-full transform translate-x-10 -translate-y-10 blur-2xl"></div>
              
              <h3 className="text-xl font-bold mb-2">Interested in this product?</h3>
              <p className="text-gray-400 text-sm mb-8">Get a customized technical quote within 24 hours.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="h-14 px-8 bg-[#4A93C4] text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#3b7ba8] transition-all grow group">
                  <MessageSquare size={18} />
                  Request Catalog & Quote
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="h-14 px-8 bg-white/10 text-white border border-white/20 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white/20 transition-all">
                  <Download size={18} />
                  PDF Datasheet
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Info Tabs Section */}
        <div className="mt-20">
          <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-t-2xl transition-all relative ${
                  activeTab === tab.id 
                  ? 'bg-white text-[#4A93C4] shadow-sm' 
                  : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab.icon}
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#4A93C4]" 
                  />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-110">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div 
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid md:grid-cols-2 gap-16"
                >
                  <div className="space-y-8">
                    <h4 className="text-2xl font-bold text-[#202124]">Performance Excellence</h4>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Our {product.name} is engineered to meet the highest standards of the pharmaceutical industry. Every component is selected for durability and ease of maintenance, ensuring a low total cost of ownership while maintaining mission-critical performance.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#4A93C4] mb-4 shadow-sm">
                          <ShieldCheck size={20} />
                        </div>
                        <h5 className="font-bold text-[#202124] mb-1">Safety First</h5>
                        <p className="text-xs text-gray-500">Built-in safety protocols and fail-safes.</p>
                      </div>
                      <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#4A93C4] mb-4 shadow-sm">
                          <Settings size={20} />
                        </div>
                        <h5 className="font-bold text-[#202124] mb-1">Precision</h5>
                        <p className="text-xs text-gray-500">Fine-tuned controls for consistent output.</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[2.5rem] bg-gray-50 p-10 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-[#4A93C4] mb-8 shadow-inner border border-gray-100">
                      <FileText size={32} />
                    </div>
                    <h5 className="text-xl font-bold text-[#202124] mb-4">Documentation Package</h5>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                      Full IQ/OQ/PQ validation documentation provided with every unit. Operation manuals available in multiple languages.
                    </p>
                    <button className="text-[#4A93C4] font-bold text-sm hover:underline flex items-center gap-2">
                      Request Validation Samples <ArrowLeft size={14} className="rotate-180" />
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'features' && (
                <motion.div 
                  key="features"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {product.features.map((feature, i) => (
                    <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-[#4A93C4]/30 transition-all hover:shadow-xl hover:shadow-[#4A93C4]/5 group">
                      <div className="w-12 h-12 bg-[#4A93C4]/5 rounded-2xl flex items-center justify-center text-[#4A93C4] mb-6 group-hover:bg-[#4A93C4] group-hover:text-white transition-all">
                        <CheckCircle2 size={24} />
                      </div>
                      <h5 className="text-lg font-bold text-[#202124] mb-2">{feature}</h5>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Industry-standard implementation of {feature.toLowerCase()} ensures maximum reliability.
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'technical' && (
                <motion.div 
                  key="technical"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <div className="bg-gray-50 rounded-[2.5rem] overflow-x-auto border border-gray-100 shadow-sm no-scrollbar">
                    {product.technicalTable ? (
                      <table className="w-full text-left border-collapse min-w-200">
                        <thead>
                          <tr className="bg-white">
                            {product.technicalTable.headers.map((header, i) => (
                              <th key={i} className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#202124] border-b border-gray-100 whitespace-nowrap">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {product.technicalTable.rows.map((row, i) => (
                            <tr key={i} className="hover:bg-white transition-colors group">
                              {row.map((cell, j) => (
                                <td key={j} className={`px-8 py-5 text-sm ${j === 0 ? 'font-bold text-[#4A93C4]' : 'text-[#5f6368]'} border-b border-gray-50/50`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-white">
                            <th className="px-10 py-6 text-sm font-bold uppercase tracking-[0.2em] text-[#202124] border-b border-gray-100">Parameter</th>
                            <th className="px-10 py-6 text-sm font-bold uppercase tracking-[0.2em] text-[#4A93C4] border-b border-gray-100">Specification</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(product.specs).map(([key, value], i) => (
                            <tr key={i} className="hover:bg-white transition-colors group">
                              <td className="px-10 py-6 text-sm font-medium text-[#5f6368] group-hover:text-[#202124]">{key}</td>
                              <td className="px-10 py-6 text-sm font-bold text-[#202124]">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
