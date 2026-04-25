import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Zap, Award, Microscope, ArrowRight, Wind, Filter, FlaskConical, Settings, Building2, Layers, MessageSquare, LayoutGrid, Mail } from 'lucide-react';
import ProductCard from '../../components/ProductCard';

const relatedCategories = [
  { title: 'Air Filters', icon: <Filter size={20} />, slug: 'air-filters' },
  { title: 'Air Cleaning', icon: <Wind size={20} />, slug: 'air-cleaning' },
  { title: 'Laboratory Furniture', icon: <Building2 size={20} />, slug: 'laboratory-furniture' },
  { title: 'Production Machinery', icon: <Settings size={20} />, slug: 'production-machinery' },
  { title: 'Laboratory Equipment', icon: <FlaskConical size={20} />, slug: 'laboratory-equipment' },
  { title: 'Sterile Processing', icon: <Layers size={20} />, slug: 'sterile-processing' },
  { title: 'HVAC Systems', icon: <Zap size={20} />, slug: 'hvac-systems' },
];

const CategoryPage = ({ 
  title, 
  description, 
  icon, 
  image, 
  subcategories = [], 
  products = []
}) => {
  const PRODUCTS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [title]);

  return (
    <div className="min-h-screen bg-white selection:bg-[#4A93C4]/20">
      {/* Ultra-Premium Hero Section */}
      <section className="relative pt-42 pb-16 md:pt-32 md:pb-24 lg:pt-42 lg:pb-32 overflow-hidden">
        {/* Advanced Background System */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-[#F8F9FA] to-white"></div>
          <div className="absolute top-[-20%] left-0 w-full sm:w-250 h-150 bg-linear-to-r from-[#4A93C4]/10 to-transparent rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-100 to-transparent"></div>
          
          {/* Animated Background Shapes */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 sm:top-40 left-[5%] sm:left-[10%] w-32 sm:w-64 h-32 sm:h-64 bg-[#4A93C4]/5 rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 sm:top-60 right-[5%] sm:right-[15%] w-40 sm:w-80 h-40 sm:h-80 bg-[#4A93C4]/5 rounded-full blur-3xl"
          ></motion.div>
          
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#202124 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-start">
              {/* Premium Breadcrumbs */}
              <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#5f6368] mb-6 sm:mb-12 bg-white/50 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full border border-gray-100/50 shadow-sm w-fit box-border max-w-full">
                <Link to="/" className="hover:text-[#4A93C4] transition-colors shrink-0">Home</Link>
                <ChevronRight size={10} className="text-gray-300 shrink-0" />
                <span className="text-[#4A93C4] shrink-0">Categories</span>
                <ChevronRight size={10} className="text-gray-300 shrink-0" />
                <span className="text-gray-400 truncate max-w-30 sm:max-w-none">{title}</span>
              </div>

              <div className="max-w-xl w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {/* Left-Aligned Icon with Glassmorphism */}
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center text-[#4A93C4] shadow-[0_15px_40px_rgba(74,147,196,0.12)] border border-white relative group overflow-hidden shrink-0"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-[#4A93C4]/10 to-transparent"></div>
                    {React.cloneElement(icon, { size: 24, className: "relative z-10 sm:hidden" })}
                    {React.cloneElement(icon, { size: 32, className: "relative z-10 hidden sm:block" })}
                  </div>
                  
                  <h1 
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-[#202124] tracking-[-0.04em] leading-[1.1]"
                  >
                    {title.split(' ').map((word, i) => (
                      <span key={i} className={i === 1 ? "text-[#4A93C4]" : ""}>
                         {word}{' '}
                      </span>
                    ))}
                  </h1>
                </div>
                
                <p className="text-[#5f6368] text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-14 font-light whitespace-pre-line">
                  {description}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
                  <a 
                    href="mailto:caretoptec@gmail.com" 
                    className="h-14 sm:h-16 px-6 sm:px-10 bg-[#202124] text-white rounded-xl sm:rounded-2xl font-semibold hover:bg-[#4A93C4] transition-all duration-500 shadow-xl shadow-gray-200 hover:shadow-[#4A93C4]/30 active:scale-95 flex items-center justify-center gap-3 group text-sm sm:text-base cursor-pointer"
                  >
                    <Mail size={18} />
                    Request Quotation
                  </a>
                  <Link to="/contact" className="h-14 sm:h-16 px-6 sm:px-10 bg-white text-[#202124] border border-gray-200 rounded-xl sm:rounded-2xl font-semibold hover:border-[#4A93C4] hover:text-[#4A93C4] transition-all duration-500 active:scale-95 flex items-center justify-center gap-3 text-sm sm:text-base">
                    <MessageSquare size={18} />
                    Consult Our Experts
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side: Category Image */}
            <div className="relative mt-12 lg:mt-0">
              <div className="relative z-10 rounded-4xl sm:rounded-[3rem] overflow-hidden shadow-2xl shadow-[#4A93C4]/20 border-4 sm:border-8 border-white">
                {image ? (
                  <img src={image} alt={title} className="w-full h-auto object-cover aspect-4/3" />
                ) : (
                  <div className="bg-linear-to-br from-gray-50 to-gray-100 aspect-4/3 flex items-center justify-center">
                    {React.cloneElement(icon, { size: 80, className: "text-gray-200/50 sm:hidden" })}
                    {React.cloneElement(icon, { size: 120, className: "text-gray-200/50 hidden sm:block" })}
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-[#202124]/20 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-5 sm:-top-10 -right-5 sm:-right-10 w-24 sm:w-40 h-24 sm:h-40 bg-[#4A93C4]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-5 sm:-bottom-10 -left-5 sm:-left-10 w-24 sm:w-40 h-24 sm:h-40 bg-[#4A93C4]/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Content with Premium Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Products & Subcats */}
            <div className="lg:col-span-8 flex flex-col gap-16 md:gap-24">
              <div>
                <div className="flex items-center justify-between mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#202124]">Signature Products</h2>
                  <div className="h-px bg-gray-100 grow mx-4 sm:mx-8 hidden sm:block"></div>
                  <span className="text-[#4A93C4] font-bold text-xs sm:text-sm tracking-widest uppercase">Inventory</span>
                </div>
                
                {products.length > 0 ? (
                  <>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                      {currentProducts.map((product, idx) => (
                        <ProductCard key={idx} product={product} />
                      ))}
                    </div>
                  {totalPages > 1 && (
                    <div className="mt-8 sm:mt-12 flex justify-center items-center gap-2">
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentPage(index + 1);
                            window.scrollTo({ top: 400, behavior: 'smooth' });
                          }}
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl font-bold flex items-center justify-center transition-all ${
                            currentPage === index + 1 
                              ? 'bg-[#4A93C4] text-white shadow-lg shadow-[#4A93C4]/30' 
                              : 'bg-white text-gray-500 border border-gray-100 hover:border-[#4A93C4] hover:text-[#4A93C4]'
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  )}
                  </>
                ) : (
                  <div className="bg-linear-to-br from-gray-50 to-white border border-gray-100 rounded-4xl sm:rounded-[3rem] p-8 sm:p-20 flex flex-col items-center justify-center text-center shadow-sm group hover:shadow-xl hover:shadow-[#4A93C4]/5 transition-all duration-700">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center text-[#4A93C4] mb-6 sm:mb-8 shadow-inner border border-gray-50 group-hover:scale-110 transition-transform">
                      <Zap size={32} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#202124] mb-3 sm:mb-4">Portfolio Update in Progress</h3>
                    <p className="text-gray-500 max-w-md text-base sm:text-lg leading-relaxed">
                      We are currently digitizing our latest collection of pharmaceutical-grade equipment. Please contact us for the immediate technical specifications of our full range.
                    </p>
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#202124]">Sub-Categories</h2>
                  <div className="h-px bg-gray-100 grow mx-4 sm:mx-8 hidden sm:block"></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  {subcategories.length > 0 ? (
                    subcategories.map((sub, i) => (
                      <Link 
                        key={i} 
                        to={sub.href}
                        className="group p-8 sm:p-10 bg-white border border-gray-100 rounded-4xl sm:rounded-[2.5rem] hover:border-[#4A93C4]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-100 relative overflow-hidden flex flex-col items-start"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#4A93C4]/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 flex items-center justify-center text-[#4A93C4] group-hover:bg-[#4A93C4] group-hover:text-white transition-all">
                          <ArrowRight size={24} className="group-hover:-rotate-45deg transition-transform" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#202124] mb-2 sm:mb-3 group-hover:text-[#4A93C4] transition-colors">{sub.name}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          Professional grade {sub.name.toLowerCase()} solutions for pharmaceutical standards.
                        </p>
                      </Link>
                    ))
                  ) : (
                    [1, 2].map((i) => (
                      <div key={i} className="group p-8 sm:p-10 bg-white border border-gray-100 rounded-4xl sm:rounded-[2.5rem] animate-pulse relative overflow-hidden">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 rounded-xl sm:rounded-2xl mb-6 sm:mb-8"></div>
                        <div className="h-6 sm:h-7 bg-gray-50 rounded-lg w-3/4 mb-4"></div>
                        <div className="space-y-3">
                          <div className="h-4 bg-gray-50 rounded-lg w-full"></div>
                          <div className="h-4 bg-gray-50 rounded-lg w-5/6"></div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar Info */}
            <div className="lg:col-span-4 mt-12 lg:mt-0">
              <div className="sticky top-24 space-y-8 lg:space-y-10">
                <div className="bg-[#202124] rounded-4xl sm:rounded-[2.5rem] p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl shadow-gray-400">
                  <div className="absolute top-10 right-10 w-20 h-20 bg-[#4A93C4] rounded-full blur-[60px] opacity-30 animate-pulse"></div>
                  <h3 className="text-2xl sm:text-[28px] font-bold mb-6 sm:mb-8 leading-tight uppercase">Our Expertise</h3>
                  <div className="space-y-6 sm:space-y-8">
                    {[
                      { icon: <Building2 size={24} />, title: "Cleanroom Innovation", desc: "Modular designs providing absolute environmental control." },
                      { icon: <ShieldCheck size={24} />, title: "Pharma Equipment", desc: "Advanced interlocking technology ensuring zero-contamination." },
                      { icon: <Microscope size={24} />, title: "QC Lab Equipments", desc: "High-precision apparatus for stringent quality control." },
                      { icon: <LayoutGrid size={24} />, title: "Lab Furnitures", desc: "Technical and ergonomic solutions for modern laboratories." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 sm:gap-5 group">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-[#4A93C4] shrink-0 group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-500">
                          {React.cloneElement(item.icon, { size: 20, className: "sm:hidden" })}
                          {React.cloneElement(item.icon, { size: 24, className: "hidden sm:block" })}
                        </div>
                        <div>
                          <h4 className="font-bold text-base sm:text-lg mb-1 leading-tight">{item.title}</h4>
                          <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed font-light">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-white/10">
                    <Link to="/contact" className="w-full h-14 bg-[#4A93C4] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#3b7ba8] transition-all text-sm sm:text-base">
                      Custom Application Quote
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                {/* Explore Grid in Sidebar */}
                <div className="px-2 sm:px-4">
                  <h3 className="text-xl font-bold text-[#202124] mb-6 sm:mb-8">Related Expertise</h3>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {relatedCategories
                      .filter(cat => cat.title !== title)
                      .slice(0, 4)
                      .map((cat, idx) => (
                        <Link 
                          key={idx}
                          to={`/categories/${cat.slug}`}
                          className="p-4 sm:p-6 bg-gray-50 rounded-2xl sm:rounded-3xl flex flex-col items-center gap-2 sm:gap-3 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all border border-transparent hover:border-gray-100 group"
                        >
                          <div className="text-gray-400 group-hover:text-[#4A93C4] transition-colors group-hover:scale-110 duration-500">
                             {React.cloneElement(cat.icon, { size: 18, className: "sm:hidden" })}
                             {React.cloneElement(cat.icon, { size: 20, className: "hidden sm:block" })}
                          </div>
                          <span className="text-[9px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-tighter text-center">{cat.title}</span>
                        </Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CategoryPage;
