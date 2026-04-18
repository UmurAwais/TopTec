import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import cleanRoomImg from '../assets/clean room.webp';
import cleanRoomMobileImg from '../assets/clean room mobile.webp';
import lab from '../assets/lab.webp';
import labMobile from '../assets/lab mobile.webp'

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
      url: cleanRoomImg,
      mobileUrl: cleanRoomMobileImg,
      // title: 'Complete Cleanroom Solutions',
      // subtitle: 'From modular cleanroom panels and HEPA filtration to pharmaceutical-grade HVAC systems - we deliver ISO-certified sterile environments for biotech, pharma, and healthcare facilities across UAE, Saudi Arabia, and beyond',
      // badge: 'ISO 14644-1 Certified'
    },
    {
      url: lab,
      mobileUrl: labMobile,
      // title: 'Precision Laboratory Equipment',
      // subtitle: 'HPLC systems, dissolution testers, analytical instruments, and GMP-compliant production machinery for pharmaceutical quality control and manufacturing excellence',
      // badge: 'GMP Compliant'
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
      className={`relative w-full h-125 sm:h-125 md:h-150 lg:h-160 overflow-hidden shadow-2xl group bg-gray-900 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full bg-gray-900">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <picture>
                {slides[currentIndex].mobileUrl && (
                  <source media="(max-width: 640px)" srcSet={slides[currentIndex].mobileUrl} />
                )}
                <img
                  src={slides[currentIndex].url}
                  alt={slides[currentIndex].title || 'Banner'}
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls - Show on Hover (Hidden on Mobile) */}
      <div className="absolute inset-0 pointer-events-none hidden md:block z-30">
        {/* Previous Button */}
        <motion.button
          onClick={goToPrevious}
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="opacity-0 pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 p-3 lg:p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full transition-transform duration-300 hover:scale-110 active:scale-95 border border-white/20 group"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="lg:w-6 lg:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </motion.button>

        {/* Next Button */}
        <motion.button
          onClick={goToNext}
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="opacity-0 pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 p-3 lg:p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full transition-transform duration-300 hover:scale-110 active:scale-95 border border-white/20 group"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="lg:w-6 lg:h-6 group-hover:translate-x-0.5 transition-transform" />
        </motion.button>
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
      <div className="absolute top-16 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 z-20 px-3 sm:px-4 py-1.5 sm:py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
        <span className="text-white text-xs sm:text-xs md:text-sm font-semibold">
          {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
