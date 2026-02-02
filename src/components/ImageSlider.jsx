import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ 
  images = [], 
  autoPlayInterval = 8000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Premium pharmaceutical/laboratory themed slides
  const defaultSlides = [
    {
      url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=800&fit=crop&q=80',
      title: 'TopTec - Cleanroom Excellence',
      subtitle: 'Delivering turnkey pharmaceutical cleanroom solutions and precision HVAC systems to healthcare facilities worldwide',
      badge: 'Trusted Since 1999',
      isMainSlide: true,
      stats: [
        { value: '25+', label: 'Years Experience' },
        { value: '150+', label: 'Global Projects' },
        { value: '300+', label: 'Specialist Engineers' }
      ],
      certifications: ['GMP Certified', 'ISO 14644-1', 'H14 HEPA Systems']
    },
    {
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=800&fit=crop&q=80',
      title: 'Complete Cleanroom Solutions',
      subtitle: 'From modular cleanroom panels and HEPA filtration to pharmaceutical-grade HVAC systems - we deliver ISO-certified sterile environments for biotech, pharma, and healthcare facilities across UAE, Saudi Arabia, and beyond',
      badge: 'ISO 14644-1 Certified'
    },
    {
      url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&h=800&fit=crop&q=80',
      title: 'Precision Laboratory Equipment',
      subtitle: 'HPLC systems, dissolution testers, analytical instruments, and GMP-compliant production machinery for pharmaceutical quality control and manufacturing excellence',
      badge: 'GMP Compliant'
    }
  ];

  const slides = images.length > 0 ? images : defaultSlides;

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    // Don't auto-play if user is hovering
    if (isHovered) return;
    
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [goToNext, autoPlayInterval, isHovered]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <div 
      className={`relative w-full h-100 sm:h-125 md:h-150 lg:h-175 overflow-hidden shadow-2xl group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="relative w-full h-full">
              <img
                src={slides[currentIndex].url}
                alt={slides[currentIndex].title}
                className="w-full h-full object-cover"
              />
              
              {/* Multi-layer Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Content Container */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="max-w-4xl"
                  >
                    {/* Badge */}
                    {/* <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="mb-6"
                    >
                      <span className="inline-block px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-widest">
                        {slides[currentIndex].badge}
                      </span>
                    </motion.div> */}

                    {/* Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className={`font-bold text-white leading-[1.1] tracking-tight ${
                        slides[currentIndex].isMainSlide 
                          ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 md:mb-5' 
                          : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 lg:mb-6'
                      }`}
                    >
                      {slides[currentIndex].title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className={`text-gray-200 font-light ${
                        slides[currentIndex].isMainSlide 
                          ? 'text-xs sm:text-sm md:text-base lg:text-lg mb-5 sm:mb-6 md:mb-8 max-w-xl leading-relaxed' 
                          : 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-5 sm:mb-6 md:mb-8'
                      }`}
                    >
                      {slides[currentIndex].subtitle}
                    </motion.p>

                    {/* Stats - Only for Main Slide */}
                    {slides[currentIndex].isMainSlide && slides[currentIndex].stats && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-5 sm:mb-6 md:mb-8 max-w-xl"
                      >
                        {slides[currentIndex].stats.map((stat, idx) => (
                          <div key={idx} className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-5 hover:bg-black/40 transition-all">
                            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1 md:mb-1.5">{stat.value}</div>
                            <div className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-gray-300 font-semibold uppercase tracking-wider leading-tight">{stat.label}</div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: slides[currentIndex].isMainSlide ? 0.8 : 0.7, duration: 0.6 }}
                    >
                      <button className="group px-5 sm:px-6 md:px-7 lg:px-9 xl:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-[#4A93C4] hover:bg-[#3b7ba8] text-white font-semibold text-xs sm:text-sm md:text-base rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#4A93C4]/30 hover:scale-105 active:scale-95 flex items-center gap-2">
                        {slides[currentIndex].isMainSlide ? 'Request Quote' : 'Explore Solutions'}
                        <ChevronRight size={16} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls - Show on Hover (Hidden on Mobile) */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="relative w-full h-full container mx-auto px-4 lg:px-8">
          {/* Previous Button */}
          <motion.button
            onClick={goToPrevious}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 lg:p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20 group"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="lg:w-6 lg:h-6 group-hover:-translate-x-0.5 transition-transform" />
          </motion.button>

          {/* Next Button */}
          <motion.button
            onClick={goToNext}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 lg:p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20 group"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="lg:w-6 lg:h-6 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 sm:w-10 md:w-12 h-1.5 sm:h-2 bg-white'
                : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {!isHovered && (
        <motion.div
          className="absolute top-0 left-0 h-0.5 sm:h-1 bg-[#4A93C4] z-30"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: autoPlayInterval / 1000, ease: 'linear' }}
          key={currentIndex}
        />
      )}

      {/* Slide Counter */}
      <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 z-20 px-3 sm:px-4 py-1.5 sm:py-2 bg-black/30 backdrop-blur-md rounded-full border border-white/20">
        <span className="text-white text-[10px] sm:text-xs md:text-sm font-medium">
          {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
