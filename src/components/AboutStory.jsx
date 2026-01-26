import React from 'react';
import { Award } from 'lucide-react';

const AboutStory = () => {
  return (
    <section className="py-32 bg-[#F8F9FA]">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
             <h2 className="text-4xl lg:text-5xl font-semibold text-[#202124] mb-10 tracking-tight leading-tight">
               Legacy of precision <br /> 
               <span className="text-[#4A93C4]">since 1998.</span>
             </h2>
             <div className="space-y-8 text-lg text-[#5f6368] leading-relaxed">
                <p>
                  Founded in the heart of the emerging biotech sector, TopTec was born from a singular obsession: to eliminate the "uncontrollable" from pharmaceutical production.
                </p>
                <p>
                  From our first ISO Class 7 cleanroom in Singapore to massive vaccine manufacturing hubs in Europe, we've spent 25 years refining the intersection of mechanical engineering and sterile logistics.
                </p>
                <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                    <div className="w-16 h-16 rounded-2xl bg-[#4A93C4] flex items-center justify-center text-white shrink-0">
                       <Award size={32} />
                    </div>
                    <div>
                       <div className="font-bold text-[#202124]">Triple Certified Excellence</div>
                       <p className="text-sm text-gray-400">Awarded for 10 consecutive years of ISO & GMP regulatory mastery.</p>
                    </div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 relative">
             <div className="aspect-4/5 rounded-[64px] overflow-hidden shadow-2xl relative z-10 bg-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover"
                  alt="TopTec Advanced Engineering Facility"
                />
             </div>
             {/* Decorative Element */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-[#4A93C4]/20 rounded-[80px] z-0 rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
