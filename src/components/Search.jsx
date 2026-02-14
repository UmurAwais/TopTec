import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon, ArrowRight, CornerDownLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { searchData } from '../data/searchData';

const Search = ({ isOpen, onClose, query, setQuery }) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length > 1) {
      const filtered = searchData.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);
      setResults(filtered);
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleNavigate = (path) => {
    navigate(path);
    setQuery('');
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    }
    if (e.key === 'Enter' && results.length > 0) {
      handleNavigate(results[selectedIndex].href);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#202124]/40 backdrop-blur-sm z-[100] flex flex-col pt-24 lg:pt-32 px-6"
          onClick={onClose}
        >
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="w-full max-w-3xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-4 px-8 py-6 border-b border-gray-100">
              <SearchIcon size={24} className="text-[#4A93C4] shrink-0" />
              <input 
                ref={inputRef}
                type="text" 
                placeholder="Search products, categories, or services..." 
                className="flex-1 bg-transparent border-none outline-none text-xl text-[#202124] placeholder:text-gray-300 font-medium"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-gray-100 rounded-full transition-all cursor-pointer"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Results Area */}
            <div className="max-h-[60vh] overflow-y-auto overflow-x-hidden p-4">
              {query.length > 1 ? (
                results.length > 0 ? (
                  <div className="space-y-1">
                    <div className="px-4 py-2 mb-2">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Search Results</span>
                    </div>
                    {results.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavigate(item.href)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all text-left group ${
                          selectedIndex === idx ? 'bg-[#4A93C4]/5 text-[#4A93C4]' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                            selectedIndex === idx ? 'bg-[#4A93C4] text-white' : 'bg-gray-100 text-gray-400'
                          }`}>
                            <SearchIcon size={18} />
                          </div>
                          <div>
                            <div className={`font-semibold ${selectedIndex === idx ? 'text-[#202124]' : 'text-[#5f6368]'}`}>
                              {item.name}
                            </div>
                            <div className="text-[11px] font-bold uppercase tracking-wider opacity-60">
                              {item.type}
                            </div>
                          </div>
                        </div>
                        {selectedIndex === idx && (
                          <div className="flex items-center gap-2 text-[10px] font-bold border border-[#4A93C4]/20 px-2 py-1 rounded-md bg-white">
                            <span>ENTER</span>
                            <CornerDownLeft size={10} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 flex flex-col items-center justify-center text-center opacity-40">
                    <SearchIcon size={48} className="mb-4" />
                    <p className="text-lg font-medium">No matches found for "{query}"</p>
                    <p className="text-sm">Try searching for HEPA, HVAC, or Laboratory</p>
                  </div>
                )
              ) : (
                <div className="py-12 px-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-widest">Popular Categories</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {searchData.filter(i => i.type === 'Category').slice(0, 4).map((cat, i) => (
                      <button 
                        key={i}
                        onClick={() => handleNavigate(cat.href)}
                        className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-[#4A93C4]/5 rounded-2xl border border-gray-100 hover:border-[#4A93C4]/20 transition-all text-left group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-400 group-hover:text-[#4A93C4] shadow-sm">
                          <ArrowRight size={16} />
                        </div>
                        <span className="text-sm font-semibold text-gray-600 group-hover:text-[#202124]">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-8 py-4 bg-gray-50 flex items-center justify-between text-[11px] text-gray-400">
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><kbd className="bg-white border border-gray-200 px-1 rounded shadow-sm font-sans">↑↓</kbd> Select</span>
                <span className="flex items-center gap-1"><kbd className="bg-white border border-gray-200 px-1 rounded shadow-sm font-sans">Enter</kbd> Open</span>
              </div>
              <span>Press <kbd className="bg-white border border-gray-200 px-1 rounded shadow-sm font-sans">Esc</kbd> to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Search;
