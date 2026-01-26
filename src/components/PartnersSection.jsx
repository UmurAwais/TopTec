import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "TopTec's precision in Grade A cleanroom setup was instrumental in our latest vaccine manufacturing expansion. Their engineering team is world-class.",
    author: "Dr. Sarah Chen",
    role: "Director of Operations, BioPharm International",
    location: "Singapore"
  },
  {
    quote: "The turnkey HVACR solution provided by TopTec reduced our energy consumption by 22% while maintaining tighter environmental controls than our previous system.",
    author: "Marcus Thorne",
    role: "Chief Engineer, Global Med-Tech",
    location: "Germany"
  },
  {
    quote: "Finding a partner that understands both ASME BPE standards and WHO-PQS requirements is rare. TopTec is that partner for our Middle Eastern facilities.",
    author: "Ahmed Al-Fayed",
    role: "Infrastructure Lead, PharmaSource",
    location: "Dubai"
  }
];

const PartnersSection = () => {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
              Trusted Partnerships
            </span>
            <h2 className="text-5xl lg:text-6xl font-semibold text-[#202124] tracking-tight leading-[1.1]">
              Empowering the world's <br />
              <span className="text-[#4A93C4]">leading pharma giants.</span>
            </h2>
          </div>
          <p className="text-lg text-[#5f6368] leading-relaxed max-w-sm">
            Over 150+ facilities globally rely on TopTec engineering to maintain their critical environments and production standards.
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

        {/* Client Logos Grid */}
        <div className="bg-white rounded-[48px] p-8 lg:p-12 border border-gray-100 shadow-sm overflow-hidden">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em]">Authorized Engineering Partner For</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Using text-based placeholder logos for clean corporate look */}
            <div className="text-2xl font-black tracking-tighter text-gray-900 italic">BIO<span className="text-[#4A93C4]">PHARM</span></div>
            <div className="text-2xl font-black tracking-tighter text-gray-900">MED<span className="text-[#EA4335]">GLOBAL</span></div>
            <div className="text-2xl font-black tracking-tighter text-gray-900 border-2 border-gray-900 px-2 py-0.5">VACCINE-X</div>
            <div className="text-2xl font-black tracking-tighter text-gray-900 underline decoration-[#FBBC04] decoration-4 text-center">EURO<br/>LABS</div>
            <div className="text-2xl font-black tracking-tighter text-gray-900">PHARMA<span className="text-[#34A853]">QUEST</span></div>
            <div className="text-2xl font-black tracking-tighter text-gray-900 italic">GENE<span className="text-[#4A93C4]">TECH</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
