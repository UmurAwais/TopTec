import React from "react";
import { motion } from "framer-motion";

const AnnouncementBar = ({ isScrolled }) => {
  return (
    <motion.div 
      initial={{ height: '40px', opacity: 1 }}
      animate={{ 
        height: isScrolled ? '0px' : '40px', 
        opacity: isScrolled ? 0 : 1
      }}
      transition={{ duration: 0.3 }}
      className="w-full bg-[#f8f9fa] border-b border-gray-200 overflow-hidden relative"
    >
      <div className="container mx-auto h-full flex justify-center items-center px-6">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 bg-[#4A93C4] text-white text-[10px] font-bold rounded uppercase tracking-wider">
            Update
          </span>
          <span className="text-[13px] font-normal text-[#3c4043]">
            Explore our new 2026 Biotech sterile engineering whitepaper. <button className="text-[#1a73e8] hover:underline font-medium ml-1">Learn more</button>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;
