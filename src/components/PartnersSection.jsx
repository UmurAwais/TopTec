import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "TopTec's expertise in cleanroom accessories and SS fabrication has been vital for our Lahore facility. Their engineering quality and attention to GMP standards are unmatched in Pakistan.",
    author: "M. Ahmed",
    role: "Plant Manager, Saffron Pharmaceuticals",
    location: "Lahore"
  },
  {
    quote: "We have been sourcing our HEPA filters and air showers from TopTec since 2018. Their reliability and dedication to quality control have made them our preferred engineering partner.",
    author: "Dr. Kamran Malik",
    role: "Quality Assurance Head, Hilton Pharma",
    location: "Karachi"
  },
  {
    quote: "The analytical instruments and laboratory equipment provided by TopTec are top-notch. Their after-sales support and installation services are highly professional and reliable.",
    author: "Zubair Khan",
    role: "Lead Engineer, High-Q International",
    location: "Islamabad"
  }
];

const clientLogos = Object.values(import.meta.glob('../assets/clients/*.{png,jpg,jpeg,svg,webp}', { eager: true, import: 'default' }));

const PartnersSection = () => {
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
          <p className="text-lg text-[#5f6368] leading-relaxed max-w-sm">
            Dozens of laboratories and pharmaceutical facilities across the country rely on TopTec for their critical infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-4xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full group">
              <div className="mb-8">
                <Quote size={40} className="text-[#4A93C4]/20 group-hover:text-[#4A93C4] transition-colors duration-500" />
              </div>
              <p className="text-[#202124] text-lg leading-relaxed mb-8 grow">
                "{t.quote}"
              </p>
              <div className="pt-8 border-t border-gray-50 mt-auto">
                <div className="font-bold text-[#202124]">{t.author}</div>
                <div className="text-sm text-[#5f6368]">{t.role}</div>
                <div className="text-xs font-bold text-[#4A93C4] mt-1 uppercase tracking-widest">{t.location}</div>
              </div>
            </div>
          ))}
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
                    className="h-14 md:h-20 w-auto object-contain transition-all duration-300 shrink-0"
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
