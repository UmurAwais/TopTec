import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Top Tec Logo.png';

const TopBar = ({ isScrolled }) => {
  return (
    <div 
      className={`w-full bg-white border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? 'py-5' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10 flex justify-between items-center">
        {/* Left Side - About Us & Contact Us Buttons */}
        <div className="flex items-center gap-3">
          <Link 
            to="/about"
            className="px-5 py-2.5 text-[13px] font-medium text-[#3c4043] border border-gray-300 rounded-full hover:text-[#4A93C4] hover:border-[#4A93C4] transition-all whitespace-nowrap"
          >
            About Us
          </Link>
          
          <Link 
            to="/contact"
            className="px-5 py-2.5 bg-[#4A93C4] text-white rounded-full text-[13px] font-medium hover:bg-[#3b7ba8] hover:shadow-md transition-all active:scale-95 whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>

        {/* Center - Logo */}
        <Link 
          to="/"
          className="flex items-center cursor-pointer"
        >
          <img src={logo} alt="Top Tec" className="h-10 lg:h-12 w-auto" />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
