import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const DropdownItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasSub = item.subcategories && item.subcategories.length > 0;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={item.href}
        className="flex items-center justify-between px-4 py-2.5 text-[13px] text-[#3c4043] hover:bg-gray-50 hover:text-[#4A93C4] transition-colors group"
      >
        <span className="flex-1 mr-2">{item.name}</span>
        {hasSub && (
          <ChevronRight size={14} className="text-gray-400 group-hover:text-[#4A93C4]" />
        )}
      </Link>

      <AnimatePresence>
        {hasSub && isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-full top-0 pl-1 w-64 z-50"
          >
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.15)] border border-gray-100 py-2">
               <div className="px-4 py-2 border-b border-gray-50 mb-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.name}</span>
              </div>
              {item.subcategories.map((sub, idx) => (
                <Link
                  key={idx}
                  to={sub.href}
                  className="flex items-center justify-between px-4 py-2.5 text-[13px] text-[#3c4043] hover:bg-gray-50 hover:text-[#4A93C4] transition-colors"
                >
                  <span className="flex-1">{sub.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubcategories = item.subcategories && item.subcategories.length > 0;

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {item.href.startsWith('/') && !item.href.includes('#') ? (
        <Link 
          to={item.href}
          className={`flex items-center gap-1 px-4 py-2 cursor-pointer text-[13px] font-medium transition-all tracking-wide outline-none whitespace-nowrap ${
            isOpen ? 'text-[#4A93C4]' : 'text-[#3c4043] hover:text-[#4A93C4]'
          }`}
        >
          {item.name}
          {hasSubcategories && (
            <ChevronDown 
              size={12} 
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#4A93C4]' : ''}`} 
            />
          )}
        </Link>
      ) : (
        <a 
          href={item.href}
          className={`flex items-center gap-1 px-4 py-2 cursor-pointer text-[13px] font-medium transition-all tracking-wide outline-none whitespace-nowrap ${
            isOpen ? 'text-[#4A93C4]' : 'text-[#3c4043] hover:text-[#4A93C4]'
          }`}
        >
          {item.name}
          {hasSubcategories && (
            <ChevronDown 
              size={12} 
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#4A93C4]' : ''}`} 
            />
          )}
        </a>
      )}

      <AnimatePresence>
        {hasSubcategories && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 pt-2 w-64 z-50"
          >
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-gray-100 py-2">
              <div className="px-4 py-2 border-b border-gray-50 mb-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.name}</span>
              </div>
              {item.subcategories.map((sub, idx) => (
                <DropdownItem key={idx} item={sub} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavItem;
