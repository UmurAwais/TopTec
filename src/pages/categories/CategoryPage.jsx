import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Zap, Award, Microscope, ArrowRight, Wind, Filter, FlaskConical, Settings, Building2, Layers, Download, MessageSquare } from 'lucide-react';

const relatedCategories = [
  { title: 'Air Filters', icon: <Filter size={20} />, slug: 'air-filters' },
  { title: 'Air Cleaning', icon: <Wind size={20} />, slug: 'air-cleaning' },
  { title: 'Laboratory Furniture', icon: <Building2 size={20} />, slug: 'laboratory-furniture' },
  { title: 'Production Machinery', icon: <Settings size={20} />, slug: 'production-machinery' },
  { title: 'Laboratory Equipment', icon: <FlaskConical size={20} />, slug: 'laboratory-equipment' },
  { title: 'Sterile Processing', icon: <Layers size={20} />, slug: 'sterile-processing' },
  { title: 'HVAC Systems', icon: <Zap size={20} />, slug: 'hvac-systems' },
];

const CategoryPage = ({ title, description, icon, image, subcategories = [], products = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#4A93C4]/20">
      {/* Ultra-Premium Hero Section */}
      <section className="relative pt-42 pb-32 overflow-hidden">
        {/* Advanced Background System */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-[#F8F9FA] to-white"></div>
          <div className="absolute top-[-20%] left-0 w-250 h-150 bg-linear-to-r from-[#4A93C4]/10 to-transparent rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-100 to-transparent"></div>
          
          {/* Animated Background Shapes */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 left-[10%] w-64 h-64 bg-[#4A93C4]/5 rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-60 right-[15%] w-80 h-80 bg-[#4A93C4]/5 rounded-full blur-3xl"
          ></motion.div>
          
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#202124 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
        </div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start">
              {/* Premium Breadcrumbs */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5f6368] mb-12 bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-100/50 shadow-sm w-fit"
              >
                <Link to="/" className="hover:text-[#4A93C4] transition-colors">Home</Link>
                <ChevronRight size={10} className="text-gray-300" />
                <span className="text-[#4A93C4]">Categories</span>
                <ChevronRight size={10} className="text-gray-300" />
                <span className="text-gray-400">{title}</span>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-xl"
              >
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8"
                >
                  {/* Left-Aligned Icon with Glassmorphism */}
                  <div 
                    className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#4A93C4] shadow-[0_15px_40px_rgba(74,147,196,0.12)] border border-white relative group overflow-hidden shrink-0"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-[#4A93C4]/10 to-transparent"></div>
                    {React.cloneElement(icon, { size: 32, className: "relative z-10" })}
                  </div>
                  
                  <h1 
                    className="text-5xl md:text-6xl lg:text-[64px] font-bold text-[#202124] tracking-[-0.04em] leading-[1.1] whitespace-nowrap"
                  >
                    {title.split(' ').map((word, i) => (
                      <span key={i} className={i === 1 ? "text-[#4A93C4]" : ""}>
                         {word}{' '}
                      </span>
                    ))}
                  </h1>
                </motion.div>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-[#5f6368] text-xl lg:text-xl leading-relaxed mb-14 font-light"
                >
                  {description}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-row items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-2">
                  <button className="h-14 sm:h-16 px-6 sm:px-10 bg-[#202124] text-white rounded-2xl font-semibold hover:bg-[#4A93C4] transition-all duration-500 shadow-xl shadow-gray-200 hover:shadow-[#4A93C4]/30 active:scale-95 flex items-center gap-3 group shrink-0 text-sm sm:text-base">
                    <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                    Technical Catalog
                  </button>
                  <Link to="/contact" className="h-14 sm:h-16 px-6 sm:px-10 bg-white text-[#202124] border border-gray-200 rounded-2xl font-semibold hover:border-[#4A93C4] hover:text-[#4A93C4] transition-all duration-500 active:scale-95 flex items-center gap-3 shrink-0 text-sm sm:text-base">
                    <MessageSquare size={18} />
                    Consult Our Experts
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side: Category Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-[#4A93C4]/20 border-8 border-white">
                {image ? (
                  <img src={image} alt={title} className="w-full h-auto object-cover aspect-4/3" />
                ) : (
                  <div className="bg-linear-to-br from-gray-50 to-gray-100 aspect-4/3 flex items-center justify-center">
                    {React.cloneElement(icon, { size: 120, className: "text-gray-200/50" })}
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-[#202124]/20 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#4A93C4]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#4A93C4]/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Structured Content with Premium Grid */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Left Column: Products & Subcats */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 flex flex-col gap-24"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl font-bold text-[#202124]">Signature Products</h2>
                  <div className="h-px bg-gray-100 grow mx-8 hidden md:block"></div>
                  <span className="text-[#4A93C4] font-bold text-sm tracking-widest uppercase">Inventory</span>
                </div>
                
                {products.length > 0 ? (
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {products.map((product, idx) => {
                      const slug = product.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');
                      return (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="group bg-white border border-gray-100 rounded-2xl flex flex-col h-full hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
                        >
                          <Link to={`/product/${slug}`} className="cursor-pointer flex flex-col h-full">
                            {/* Image Container - Premium Display */}
                            <div className="relative aspect-4/3 bg-gray-100 overflow-hidden">
                              <img 
                                src={product.image || "/slider/cleanroom-hall.jpg"} 
                                alt={product.name} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                              />
                              <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-[#202124] text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                                  Model {2026 + idx}
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
                                  {product.description}
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
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-linear-to-br from-gray-50 to-white border border-gray-100 rounded-[3rem] p-20 flex flex-col items-center justify-center text-center shadow-sm group hover:shadow-xl hover:shadow-[#4A93C4]/5 transition-all duration-700">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#4A93C4] mb-8 shadow-inner border border-gray-50 group-hover:scale-110 transition-transform">
                      <Zap size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#202124] mb-4">Portfolio Update in Progress</h3>
                    <p className="text-gray-500 max-w-md text-lg leading-relaxed">
                      We are currently digitizing our latest collection of pharmaceutical-grade equipment. Please contact us for the immediate technical specifications of our full range.
                    </p>
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl font-bold text-[#202124]">Sub-Categories</h2>
                  <div className="h-px bg-gray-100 grow mx-8 hidden md:block"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {subcategories.length > 0 ? (
                    subcategories.map((sub, i) => (
                      <Link 
                        key={i} 
                        to={sub.href}
                        className="group p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:border-[#4A93C4]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-100 relative overflow-hidden flex flex-col items-start"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#4A93C4]/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl mb-8 flex items-center justify-center text-[#4A93C4] group-hover:bg-[#4A93C4] group-hover:text-white transition-all">
                          <ArrowRight size={24} className="group-hover:-rotate-45deg transition-transform" />
                        </div>
                        <h3 className="text-xl font-bold text-[#202124] mb-3 group-hover:text-[#4A93C4] transition-colors">{sub.name}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          Professional grade {sub.name.toLowerCase()} solutions for pharmaceutical standards.
                        </p>
                      </Link>
                    ))
                  ) : (
                    [1, 2].map((i) => (
                      <div key={i} className="group p-10 bg-white border border-gray-100 rounded-[2.5rem] animate-pulse relative overflow-hidden">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl mb-8"></div>
                        <div className="h-7 bg-gray-50 rounded-lg w-3/4 mb-4"></div>
                        <div className="space-y-3">
                          <div className="h-4 bg-gray-50 rounded-lg w-full"></div>
                          <div className="h-4 bg-gray-50 rounded-lg w-5/6"></div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Sticky Sidebar Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-18 space-y-10">
                <div className="bg-[#202124] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-gray-400">
                  <div className="absolute top-10 right-10 w-20 h-20 bg-[#4A93C4] rounded-full blur-[60px] opacity-30 animate-pulse"></div>
                  <h3 className="text-[28px] font-bold mb-6 leading-tight">Certified Quality Assurance</h3>
                  <div className="space-y-8">
                    {[
                      { icon: <ShieldCheck size={24} />, title: "GMP Compliant", desc: "Rigorous alignment with WHO & FDA standards." },
                      { icon: <Microscope size={24} />, title: "Precision Built", desc: "Engineered for zero-tolerance performance." },
                      { icon: <Award size={24} />, title: "Global Export", desc: "Trusted by facilities in 40+ countries." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#4A93C4] shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 pt-10 border-t border-white/10">
                    <Link to="/contact" className="w-full h-14 bg-[#4A93C4] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#3b7ba8] transition-all">
                      Custom Application Quote
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                {/* Explore Grid in Sidebar */}
                <div className="px-4">
                  <h3 className="text-xl font-bold text-[#202124] mb-8">Related Expertise</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {relatedCategories
                      .filter(cat => cat.title !== title)
                      .slice(0, 4)
                      .map((cat, idx) => (
                        <Link 
                          key={idx}
                          to={`/categories/${cat.slug}`}
                          className="p-6 bg-gray-50 rounded-3xl flex flex-col items-center gap-3 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all border border-transparent hover:border-gray-100 group"
                        >
                          <div className="text-gray-400 group-hover:text-[#4A93C4] transition-colors group-hover:scale-110 duration-500">{cat.icon}</div>
                          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-tighter text-center">{cat.title}</span>
                        </Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
