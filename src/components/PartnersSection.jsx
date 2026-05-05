import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "TopTec has been instrumental in maintaining our cleanroom standards. Their modular partition systems and HVAC solutions meet the highest global compliance requirements, ensuring our sterile manufacturing remains uninterrupted.",
    author: "Usman Ghani",
    role: "Technical Director, GSK Pakistan",
    location: "Karachi"
  },
  {
    quote: "The specialized SS fabrication and production machinery from TopTec have significantly improved our operational efficiency. Their attention to detail in stainless steel work is truly top-tier.",
    author: "Dr. Fawad Ahmed",
    role: "Operations Manager, Hilton Pharma",
    location: "Lahore"
  },
  {
    quote: "We rely on TopTec for our most critical laboratory instruments. Their range of chromatographic and titrometric equipment is highly reliable, backed by expert technical support.",
    author: "Sarah Mansoor",
    role: "Quality Control Lead, Getz Pharma",
    location: "Karachi"
  },
  {
    quote: "TopTec's air filtration solutions, specifically their HEPA and V-Bank filters, have been vital for our controlled environments. Their engineering team understands the complexities of pharma manufacturing.",
    author: "M. Faisal",
    role: "Plant Head, Saffron Pharmaceuticals",
    location: "Faisalabad"
  },
  {
    quote: "Their turnkey approach to cleanroom setup—from design to validation—is exceptional. TopTec is more than a supplier; they are a strategic engineering partner for our growth.",
    author: "Zubair Khan",
    role: "Projects Lead, High-Q International",
    location: "Islamabad"
  },
  {
    quote: "Reliable, professional, and technically sound. TopTec’s after-sales service for laboratory and production equipment is the best we've experienced in the industry.",
    author: "Kamran Malik",
    role: "Maintenance Manager, Bosch Pharmaceuticals",
    location: "Karachi"
  }
];

const clientLogos = Object.values(import.meta.glob('../assets/clients/*.{png,jpg,jpeg,svg,webp}', { eager: true, import: 'default' }));

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Split logos into two rows for the marquee
  const half = Math.ceil(clientLogos.length / 2);
  const row1 = clientLogos.slice(0, half);
  const row2 = clientLogos.slice(half);

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
              Trusted Partners
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#202124] tracking-tight leading-[1.1]">
              Serving Pakistan's <br />
              <span className="text-[#4A93C4]">Leading Pharma Firms.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#4A93C4] hover:text-white hover:border-[#4A93C4] transition-all duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#4A93C4] hover:text-white hover:border-[#4A93C4] transition-all duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Shifting Testimonials Slider */}
        <div className="relative mb-24 overflow-hidden py-8 px-4">
          <motion.div 
            className="flex gap-8 items-stretch"
            animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                style={{ width: itemsToShow === 1 ? '100%' : itemsToShow === 2 ? 'calc(50% - 16px)' : 'calc(33.333% - 21.333px)' }}
                className="shrink-0 bg-white p-10 rounded-4xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group min-h-[450px] h-full"
              >
                <div className="mb-6">
                  <Quote size={40} className="text-[#4A93C4]/20 group-hover:text-[#4A93C4] transition-colors duration-500" />
                </div>
                <p className="text-[#202124] text-lg leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-gray-50 mt-auto">
                  <div className="font-bold text-[#202124]">{t.author}</div>
                  <div className="text-sm text-[#5f6368]">{t.role}</div>
                  <div className="text-xs font-bold text-[#4A93C4] mt-1 uppercase tracking-widest">{t.location}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-10 bg-[#4A93C4]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos Marquee Section */}
        <div className="bg-white rounded-[48px] py-12 lg:py-16 border border-gray-100 shadow-sm overflow-hidden relative">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em]">Authorized Engineering Partner For</span>
          </div>

          {/* Fade Mask */}
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex flex-col gap-12 pause-on-hover">
            {/* Row 1: Scrolling Left */}
            <div className="flex overflow-hidden group">
              <div className="flex animate-scroll-left gap-16 md:gap-24 px-12">
                {[...row1, ...row1].map((logo, index) => (
                  <img 
                    key={`row1-${index}`} 
                    src={logo} 
                    alt="Client Logo" 
                    className="h-14 md:h-24 w-auto object-contain transition-all duration-300 shrink-0"
                  />
                ))}
              </div>
            </div>

            {/* Row 2: Scrolling Right */}
            <div className="flex overflow-hidden group">
              <div className="flex animate-scroll-right gap-16 md:gap-24 px-12">
                {[...row2, ...row2].map((logo, index) => (
                  <img 
                    key={`row2-${index}`} 
                    src={logo} 
                    alt="Client Logo" 
                    className="h-14 md:h-20 w-auto object-contain transition-all duration-300 shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

