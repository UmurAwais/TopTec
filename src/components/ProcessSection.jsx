import React from 'react';
import { ClipboardCheck, Construction, Settings2, ShieldCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Consultancy & Design',
    desc: 'BIM-integrated engineering designs tailored to specific ISO and Grade classifications.',
    icon: <ClipboardCheck size={28} className="text-[#4A93C4]" />,
    color: 'bg-blue-50'
  },
  {
    title: 'Precision Manufacturing',
    desc: 'State-of-the-art production of cleanroom panels, AHUs, and sterile equipment.',
    icon: <Settings2 size={28} className="text-[#FBBC04]" />,
    color: 'bg-yellow-50'
  },
  {
    title: 'Construction & Setup',
    desc: 'Expert on-site installation with seamless integration of HVAC and electrical systems.',
    icon: <Construction size={28} className="text-[#EA4335]" />,
    color: 'bg-red-50'
  },
  {
    title: 'Validation & Handover',
    desc: 'Comprehensive DQ/IQ/OQ/PQ documentation and final certification compliance.',
    icon: <ShieldCheck size={28} className="text-[#34A853]" />,
    color: 'bg-green-50'
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden">
      {/* Subtle background branding */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[30%] h-[60%] bg-[#4A93C4]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
              The TopTec Method
            </span>
            <h2 className="text-5xl lg:text-6xl font-semibold text-[#202124] tracking-tight leading-[1.1]">
              Turnkey engineering <br />
              <span className="text-[#4A93C4]">from concept to sterile.</span>
            </h2>
          </div>
          <p className="text-lg text-[#5f6368] leading-relaxed max-w-sm">
            We manage the entire project lifecycle, ensuring zero contamination risk and single-point accountability for your pharmaceutical facility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="relative p-10 bg-white rounded-4xl border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#4A93C4]/10 group"
            >
              {/* Step Number Badge */}
              <div className="absolute top-8 right-8 text-5xl font-black text-gray-50 group-hover:text-[#4A93C4]/5 transition-colors">
                0{idx + 1}
              </div>

              <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-8 shrink-0 relative z-10`}>
                {step.icon}
              </div>

              <h3 className="text-2xl font-semibold text-[#202124] mb-4 relative z-10 group-hover:text-[#4A93C4] transition-colors">
                {step.title}
              </h3>
              
              <p className="text-[#5f6368] leading-relaxed mb-8 relative z-10">
                {step.desc}
              </p>

              <div className="flex items-center gap-2 text-sm font-bold text-[#4A93C4] transition-all opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer">
                Process Details <ArrowRight size={16} />
              </div>

              {/* Connecting line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-100 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="mt-20 p-8 lg:p-12 bg-[#202124] rounded-4xl flex flex-col lg:flex-row items-center justify-between gap-8 group cursor-pointer hover:bg-black transition-colors">
          <div>
            <h4 className="text-2xl lg:text-3xl font-medium text-white mb-2">Ready to start your next cleanroom project?</h4>
            <p className="text-gray-400">Consult with our lead engineers today for a custom infrastructure masterplan.</p>
          </div>
          <button className="px-10 py-5 bg-[#4A93C4] text-white rounded-full font-bold text-lg hover:bg-[#3b7ba8] transition-all active:scale-95 flex items-center gap-3">
            Book Engineering Consult <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
