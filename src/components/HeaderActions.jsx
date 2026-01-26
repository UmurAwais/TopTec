import React from 'react';
import { Search as SearchIcon, LayoutGrid, Menu, ArrowRight } from 'lucide-react';
import Button from './Button';
import Search from './Search';

const HeaderActions = ({ 
  isSearchOpen, 
  setIsSearchOpen, 
  isGridOpen, 
  setIsGridOpen, 
  searchQuery, 
  setSearchQuery,
  setIsMobileMenuOpen 
}) => {
  return (
    <div className="flex items-center gap-2 lg:gap-3 relative">
      <Search 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        query={searchQuery} 
        setQuery={setSearchQuery} 
      />

      <button 
        onClick={() => { setIsSearchOpen(!isSearchOpen); setIsGridOpen(false); }}
        className={`p-2.5 rounded-full transition-all cursor-pointer ${
          isSearchOpen ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
        }`}
      >
        <SearchIcon size={18} />
      </button>

      <div className="hidden md:flex items-center">
        <button 
          onClick={() => { setIsGridOpen(!isGridOpen); setIsSearchOpen(false); }}
          className={`p-2.5 rounded-full transition-all cursor-pointer ${
            isGridOpen ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
          }`}
        >
          <LayoutGrid size={18} />
        </button>
      </div>

      <div className="hidden sm:block pl-2">
        <Button variant="primary" icon={ArrowRight}>
          Get Started
        </Button>
      </div>

      <button 
        className="xl:hidden p-2.5 text-gray-800 hover:bg-gray-100 rounded-full transition-all" 
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu size={24} />
      </button>
    </div>
  );
};

export default HeaderActions;
