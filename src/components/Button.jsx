import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  icon: Icon,
  type = 'button' 
}) => {
  const baseStyles = "px-8 py-3.5 rounded-full font-bold tracking-tight flex items-center justify-center gap-2 cursor-pointer shadow-sm text-sm transition-all duration-300 border active:scale-95";
  
  const variants = {
    primary: "bg-[#050505] text-white border-transparent hover:bg-gray-800 hover:shadow-xl hover:shadow-black/10",
    secondary: "bg-white text-gray-900 border-gray-100 hover:bg-gray-50 hover:border-gray-200",
    blue: "bg-[#4285F4] text-white border-transparent hover:bg-[#3367D6] hover:shadow-lg hover:shadow-blue-500/20",
    outline: "bg-transparent text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {Icon && (
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon size={16} />
        </motion.div>
      )}
    </button>
  );
};

export default Button;
