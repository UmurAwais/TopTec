import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon, ArrowRight, CornerDownLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { searchData } from '../data/searchData';

const Search = ({ isOpen, onClose, query, setQuery }) => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, results, selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="absolute top-full right-0 mt-4 w-150 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-50 text-[#202124]"
        >
          {/* Results Area */}
          <div className="max-h-[70vh] overflow-y-auto overflow-x-hidden p-3 sm:p-4">
            {query.length > 1 ? (
              results.length > 0 ? (
                <div className="space-y-1">
                  <div className="px-4 py-2 border-b border-gray-50 mb-2">
                    <span className="text-[10px] font-bold text-[#4A93C4] uppercase tracking-widest">Search Results</span>
                  </div>
                  {results.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavigate(item.href)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all text-left group ${
                        selectedIndex === idx ? 'bg-gray-50 text-[#4A93C4]' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          selectedIndex === idx ? 'bg-[#4A93C4] text-white' : 'bg-gray-100 text-gray-400'
                        }`}>
                          <SearchIcon size={16} />
                        </div>
                        <div>
                          <div className={`text-sm font-bold ${selectedIndex === idx ? 'text-[#202124]' : 'text-[#5f6368]'}`}>
                            {item.name}
                          </div>
                          <div className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                            {item.type}
                          </div>
                        </div>
                      </div>
                      {selectedIndex === idx && (
                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                          <span>OPEN</span>
                          <CornerDownLeft size={10} />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center opacity-40">
                  <SearchIcon size={32} className="mb-4" />
                  <p className="text-base font-bold">No results found for "{query}"</p>
                </div>
              )
            ) : (
              <div className="py-6 px-4">
                <h4 className="text-[10px] font-bold text-[#4A93C4] mb-4 uppercase tracking-[0.2em]">Popular Quick Links</h4>
                <div className="grid grid-cols-2 gap-2">
                  {searchData.filter(i => i.type === 'Category').slice(0, 4).map((cat, i) => (
                    <button 
                      key={i}
                      onClick={() => handleNavigate(cat.href)}
                      className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-white rounded-xl border border-transparent hover:border-gray-100 hover:shadow-sm transition-all text-left group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-[#4A93C4]">
                        <ArrowRight size={14} />
                      </div>
                      <span className="text-xs font-bold text-gray-600 group-hover:text-[#202124]">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-3 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 font-medium">
            <div className="flex gap-4">
              <span className="flex items-center gap-1">↑↓ Navigate</span>
              <span className="flex items-center gap-1">Enter Open</span>
            </div>
            <span>Esc to close</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Search;
