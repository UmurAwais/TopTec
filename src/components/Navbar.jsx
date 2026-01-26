import React, { useState, useEffect } from 'react';
import { X, Search as SearchIcon, Menu, ChevronDown, Package, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/Top Tec Logo.png';
import AnnouncementBar from './AnnouncementBar';
import Search from './Search';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY > 100) {
        setIsProductsOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    { title: 'Filters', href: '#filters' },
    { title: 'Air', href: '#air' },
    { title: 'Furniture', href: '#furniture' },
    { title: 'Machine', href: '#machinery' },
    { title: 'Science', href: '#science' },
    { title: 'Sterile', href: '#sterile' },
    { title: 'HVAC', href: '#hvac' },
  ];

  const navLinks = [
    { name: 'Cleanroom Solutions', href: '/#solutions' },
    { name: 'HVACR Services', href: '/#hvacr' },
    { name: 'Pharma Engineering', href: '/#engineering' },
    { name: 'Scientific Research', href: '/#research' },
    { name: 'About TopTec', href: '/about' }
  ];

  return (
    <header className="w-full fixed top-0 z-50 flex flex-col border-b border-gray-200">
      <AnnouncementBar isScrolled={isScrolled} />

      <nav className={`w-full transition-all duration-300 relative ${
        isScrolled 
          ? 'py-2.5 bg-white/95 backdrop-blur-md shadow-[0_1px_3px_0_rgba(60,64,67,0.15)]' 
          : 'py-6 bg-white'
      }`}>
        <Search 
          isOpen={isSearchOpen} 
          onClose={() => setIsSearchOpen(false)} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
        />
        <div className="w-full px-8 lg:px-16 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <Link 
              to="/"
              className="flex items-center cursor-pointer"
            >
              <img src={logo} alt="Top Tec" className="h-7 lg:h-9 w-auto" />
            </Link>

            {/* Google's Minimal Nav Links */}
            <div className="hidden lg:flex items-center">
              {navLinks.map((item) => (
                item.href.startsWith('/') && !item.href.includes('#') ? (
                  <Link 
                    key={item.name}
                    to={item.href}
                    className="px-5 py-2 rounded-full cursor-pointer text-[14px] font-normal text-[#5f6368] hover:text-[#202124] hover:bg-gray-50 transition-all tracking-normal outline-none"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a 
                    key={item.name}
                    href={item.href}
                    className="px-5 py-2 rounded-full cursor-pointer text-[14px] font-normal text-[#5f6368] hover:text-[#202124] hover:bg-gray-50 transition-all tracking-normal outline-none"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Google Style Actions Group */}
          <div className="flex items-center gap-2">
            <button 
              className="p-3 text-[#5f6368] hover:bg-gray-100 rounded-full transition-all lg:hidden cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
            
            <div className="hidden lg:flex items-center gap-2">
              <button 
                onClick={() => { setIsSearchOpen(!isSearchOpen); setIsProductsOpen(false); }}
                className={`p-3 rounded-full transition-all cursor-pointer ${isSearchOpen ? 'bg-gray-100 text-[#4A93C4]' : 'text-[#5f6368] hover:bg-gray-100'}`}
                aria-label="Search"
              >
                <SearchIcon size={20} />
              </button>
              
              {/* Minimalist Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button 
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all cursor-pointer border ${
                    isProductsOpen 
                      ? 'bg-gray-50 text-[#4A93C4] border-gray-200' 
                      : 'bg-gray-50 text-[#3c4043] border-gray-100 hover:bg-gray-100'
                  }`}
                  aria-label="Products"
                >
                  <Package size={18} />
                  <span className="text-[13px] font-medium">Products</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full right-0 pt-2 w-64 z-60"
                    >
                      <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100 py-3 overflow-hidden">
                        <div className="px-5 py-2 mb-1 border-b border-gray-50">
                          <span className="text-[11px] font-bold text-[#4A93C4] uppercase tracking-wider">TopTec Products</span>
                        </div>
                        {productCategories.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="flex items-center px-5 py-3 text-[14px] text-[#3c4043] hover:bg-gray-50 hover:text-[#202124] transition-colors group"
                          >
                            <span className="flex-1">{item.title}</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 group-hover:translate-x-0 transform">
                              <ArrowRight size={14} className="text-[#4A93C4]" />
                            </span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <button className="ml-2 px-6 py-2.5 bg-[#4A93C4] text-white rounded-full font-medium text-sm hover:bg-[#3b7ba8] hover:shadow-md transition-all active:scale-95 cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Google Mobile App Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-100 flex flex-col"
          >
            <div className="p-4 flex justify-between items-center border-b border-gray-100">
              <img src={logo} alt="Top Tec" className="h-6 w-auto" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 flex flex-col gap-2 overflow-y-auto">
              <div className="px-4 py-2">
                <span className="text-[11px] font-bold text-[#4A93C4] uppercase tracking-wider">Main Links</span>
              </div>
              {navLinks.map((item) => (
                item.href.startsWith('/') && !item.href.includes('#') ? (
                  <Link 
                    key={item.name} 
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-4 text-lg font-medium text-[#202124] hover:bg-gray-50 rounded-xl cursor-pointer transition-colors no-underline block"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a 
                    key={item.name} 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-4 text-lg font-medium text-[#202124] hover:bg-gray-50 rounded-xl cursor-pointer transition-colors no-underline block"
                  >
                    {item.name}
                  </a>
                )
              ))}
              
              <div className="px-4 py-2 mt-4">
                <span className="text-[11px] font-bold text-[#4A93C4] uppercase tracking-wider">Products</span>
              </div>
              {productCategories.map((item) => (
                <a 
                  key={item.title} 
                  href={item.href}
                  className="p-4 text-md font-medium text-[#5f6368] hover:bg-gray-50 rounded-xl transition-colors no-underline flex items-center justify-between"
                >
                  {item.title}
                  <ArrowRight size={16} className="text-[#4A93C4]" />
                </a>
              ))}
            </div>
            <div className="mt-auto p-8 border-t border-gray-100 bg-gray-50/50">
              <button className="w-full py-4 bg-[#4A93C4] text-white rounded-full font-medium active:scale-95 transition-all cursor-pointer">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
