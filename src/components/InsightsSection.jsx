import React from 'react';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

const articles = [
  {
    category: 'Laboratory',
    title: 'Biological Safety Cabinets: Classes I, II & III Explained',
    excerpt: 'Detailed guide on understanding the differences between BSC classes for your laboratory protection.',
    date: 'April 17, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: 'Equipment',
    title: 'Biological Safety Cabinet vs. Fume Hood: Key Differences',
    excerpt: 'Choosing the right ventilation system. A comparison between BSCs and standard laboratory fume hoods.',
    date: 'April 17, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: 'Safety',
    title: 'Complete Guide to Biological Safety Cabinet Safe Use',
    excerpt: 'Best practices for operating BSCs to ensure the safety of personnel and the integrity of research samples.',
    date: 'April 17, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  }
];

const InsightsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
              Knowledge Hub
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#202124] tracking-tight leading-[1.1]">
              Technical insights <br />
              <span className="text-[#4A93C4]">from our lead engineers.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg text-[#5f6368] leading-relaxed max-w-sm">
              Discover the latest breakthroughs in pharmaceutical infrastructure and sterile environment management.
            </p>
            <button className="flex items-center gap-2 text-[#4A93C4] font-bold hover:gap-4 transition-all w-fit group cursor-pointer">
              Explore All Insights <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col h-full">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 shadow-sm">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-bold text-[#4A93C4] uppercase tracking-widest border border-white/20">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-5 mb-4 text-[#5f6368] text-xs font-medium">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[#4A93C4]" /> {article.readTime}
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen size={14} className="text-[#4A93C4]" /> {article.date}
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-[#202124] mb-4 group-hover:text-[#4A93C4] transition-colors leading-tight grow">
                {article.title}
              </h3>
              
              <p className="text-[#5f6368] text-sm leading-relaxed mb-6 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-2 font-bold text-[#4A93C4] text-xs group-hover:gap-3 transition-all mt-auto uppercase tracking-wider">
                Read Full Paper <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
