import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="bg-[#202124] rounded-[56px] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
          
          {/* Decorative background circle */}
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-[#4A93C4]/10 rounded-full blur-[120px] pointer-events-none"></div>

          {/* Left: Contact Info */}
          <div className="lg:w-1/2 p-8 lg:p-20 relative z-10">
            <span className="text-[#4A93C4] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
              Contact Us
            </span>
            <h2 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[0.9] mb-12">
              Let's build <br />
              <span className="text-[#4A93C4]">together.</span>
            </h2>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#4A93C4] group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Our Engineers</div>
                  <div className="text-xl text-white font-medium">caretoptec@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#4A93C4] group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Global Hotline</div>
                  <div className="text-xl text-white font-medium">+92 323 8491966</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#4A93C4] group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Global HQ</div>
                  <div className="text-xl text-white font-medium">12-A, 1st Floor, 1st Commercial Lane,<br />Phase 2, DHA, Karachi, Pakistan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Form */}
          <div className="lg:w-1/2 bg-white/5 backdrop-blur-sm p-8 lg:p-20 border-l border-white/10">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-10 text-white/60">
                <MessageSquare size={20} className="text-[#4A93C4]" />
                <span className="font-medium">Direct Inquiry Form</span>
              </div>

              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#4A93C4] transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Corporate Email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#4A93C4] transition-all"
                  />
                </div>
                <div>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-gray-400 outline-none focus:border-[#4A93C4] transition-all appearance-none">
                    <option>Select Business Unit</option>
                    <option>Cleanroom Setup</option>
                    <option>HVACR Maintenance</option>
                    <option>Pharma Engineering</option>
                    <option>Other Services</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Project Brief or Specifications" 
                    rows="4"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#4A93C4] transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-[#4A93C4] text-white rounded-2xl py-5 font-bold text-lg hover:bg-[#3b7ba8] transition-all active:scale-95 flex items-center justify-center gap-3">
                  Submit Project Details <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
