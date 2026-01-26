import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Search = ({ isOpen, onClose, query, setQuery }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="flex items-center relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "220px", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex items-center bg-gray-50 border border-gray-100 rounded-full px-4 py-2 mr-2 overflow-hidden shadow-sm"
          >
            <input 
              ref={inputRef}
              type="text" 
              placeholder="Search..." 
              className="w-full bg-transparent border-none outline-none text-[13px] font-bold text-gray-900 placeholder:text-gray-300"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button 
              onClick={onClose} 
              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X size={14} className="text-gray-500" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
