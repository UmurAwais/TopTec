import React, { useState, useEffect } from 'react';
import { X, Search as SearchIcon, Grid3X3, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Top Tec Logo.png';
import AnnouncementBar from './AnnouncementBar';
import Search from './Search';
import SolutionsGrid from './SolutionsGrid';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY > 100) {
        setIsGridOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isGridOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isGridOpen, isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsGridOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Cleanroom Solutions', href: '#solutions' },
    { name: 'HVACR Services', href: '#hvacr' },
    { name: 'Pharma Engineering', href: '#engineering' },
    { name: 'Scientific Research', href: '#research' },
    { name: 'About TopTec', href: '#about' }
  ];

  return (
    <header className="w-full fixed top-0 z-50 flex flex-col">
      <AnnouncementBar isScrolled={isScrolled} />

      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'py-2.5 bg-white/95 backdrop-blur-md shadow-[0_1px_3px_0_rgba(60,64,67,0.15)]' 
          : 'py-6 bg-white'
      }`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center relative">
          
          {/* Google Style Brand Group */}
          <div className="flex items-center gap-10">
            <motion.div 
              whileTap={{ scale: 0.95 }}
              className="flex items-center cursor-pointer"
            >
              <img src={logo} alt="Top Tec" className="h-7 lg:h-9 w-auto" />
            </motion.div>

            {/* Google's Minimal Nav Links - SEO Keyword Rich */}
            <div className="hidden lg:flex items-center">
              {navLinks.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="px-5 py-2 rounded-full cursor-pointer text-[14px] font-normal text-[#5f6368] hover:text-[#202124] hover:bg-gray-50 transition-all tracking-normal outline-none"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Google Style Actions Group */}
          <div className="flex items-center gap-2">
            <Search 
              isOpen={isSearchOpen} 
              onClose={() => setIsSearchOpen(false)} 
              query={searchQuery} 
              setQuery={setSearchQuery} 
            />

            <button 
              className="p-3 text-[#5f6368] hover:bg-gray-100 rounded-full transition-all lg:hidden cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
            
            <div className="hidden lg:flex items-center gap-2">
              <button 
                onClick={() => { setIsSearchOpen(!isSearchOpen); setIsGridOpen(false); }}
                className={`p-3 rounded-full transition-all cursor-pointer ${isSearchOpen ? 'bg-gray-100 text-[#4A93C4]' : 'text-[#5f6368] hover:bg-gray-100'}`}
                aria-label="Search"
              >
                <SearchIcon size={20} />
              </button>
              
              <button 
                onClick={() => { setIsGridOpen(!isGridOpen); setIsSearchOpen(false); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all cursor-pointer border ${
                  isGridOpen 
                    ? 'bg-[#4A93C4] text-white border-[#4A93C4]' 
                    : 'bg-gray-50 text-[#3c4043] border-gray-100 hover:bg-gray-100'
                }`}
                aria-label="All Divisions"
              >
                <Grid3X3 size={18} />
                <span className="text-[13px] font-medium">All Divisions</span>
              </button>
            </div>

            <button className="ml-2 px-6 py-2.5 bg-[#4A93C4] text-white rounded-full font-medium text-sm hover:bg-[#3b7ba8] hover:shadow-md transition-all active:scale-95 cursor-pointer">
              Sign In
            </button>
          </div>
        </div>

        <SolutionsGrid 
          isOpen={isGridOpen} 
          onClose={() => setIsGridOpen(false)} 
        />
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
            <div className="p-6 flex flex-col gap-2">
              {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="p-4 text-lg font-medium text-[#202124] hover:bg-gray-50 rounded-xl cursor-copy transition-colors no-underline"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-auto p-8 border-t border-gray-100 bg-gray-50/50">
              <button className="w-full py-4 bg-[#4A93C4] text-white rounded-full font-medium active:scale-95 transition-all cursor-pointer">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
