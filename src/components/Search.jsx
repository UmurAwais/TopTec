import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon } from 'lucide-react';

const Search = ({ isOpen, onClose, query, setQuery }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute inset-0 bg-white z-100 flex items-center px-6 lg:px-12"
        >
          <div className="container mx-auto flex items-center gap-6">
            <SearchIcon size={24} className="text-[#4A93C4] shrink-0" />
            <input 
              ref={inputRef}
              type="text" 
              placeholder="What are you looking for today? (e.g. HEPA Filters, HVAC Services...)" 
              className="flex-1 bg-transparent border-none outline-none text-xl lg:text-2xl text-[#202124] placeholder:text-gray-300 font-medium tracking-tight"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Escape' && onClose()}
            />
            <button 
              onClick={onClose} 
              className="p-3 hover:bg-gray-100 rounded-full transition-all cursor-pointer group"
              aria-label="Close search"
            >
              <X size={28} className="text-gray-400 group-hover:text-[#202124] transition-colors" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Search;
