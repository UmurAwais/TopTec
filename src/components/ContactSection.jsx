import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Building2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  const [status, setStatus] = useState(""); // "", "SENDING", "SUCCESS", "ERROR"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mbdpdpya", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="bg-[#202124] rounded-4xl sm:rounded-[56px] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative min-h-0 lg:min-h-[700px]">
          
          {/* Decorative background circle */}
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-[#4A93C4]/10 rounded-full blur-[120px] pointer-events-none hidden sm:block"></div>

          {/* Left: Contact Info */}
          <div className="lg:w-1/2 p-6 sm:p-12 lg:p-20 relative z-10">
            <span className="text-[#4A93C4] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4 block">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-tight lg:leading-[0.9] mb-8 sm:mb-12">
              Let's build <br className="hidden sm:block" />
              <span className="text-[#4A93C4]">together.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-10">
              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#4A93C4] group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-300 shrink-0">
                  <Mail size={20} className="sm:hidden" />
                  <Mail size={24} className="hidden sm:block" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Engineers</div>
                  <div className="text-sm sm:text-xl text-white font-medium break-all">caretoptec@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#4A93C4] group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-300 shrink-0">
                  <Phone size={20} className="sm:hidden" />
                  <Phone size={24} className="hidden sm:block" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Global Hotline</div>
                  <div className="text-sm sm:text-xl text-white font-medium">+92 323 8491966</div>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#4A93C4] group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-300 shrink-0">
                  <MapPin size={20} className="sm:hidden" />
                  <MapPin size={24} className="hidden sm:block" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Corporate HQ</div>
                  <div className="text-xs sm:text-lg lg:text-xl text-white font-medium leading-relaxed">Office#01, Block A, Gohawa, Ring Road, Lahore</div>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#4A93C4] group-hover:bg-[#4A93C4] group-hover:text-white transition-all duration-300 shrink-0">
                  <Building2 size={20} className="sm:hidden" />
                  <Building2 size={24} className="hidden sm:block" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Warehouse</div>
                  <div className="text-xs sm:text-lg lg:text-xl text-white font-medium">Block E, Fathe Abad Academy Road, Lahore</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Form */}
          <div className="lg:w-1/2 bg-white/5 backdrop-blur-sm p-6 sm:p-12 lg:p-20 border-t lg:border-t-0 lg:border-l border-white/10 relative">
            <AnimatePresence>
              {status === "SUCCESS" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-[#202124] flex flex-col items-center justify-center text-white p-6 sm:p-8 text-center"
                >
                  <CheckCircle2 size={48} className="sm:size-16 text-[#4A93C4] mb-6 animate-bounce" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">Inquiry Received</h3>
                  <p className="text-base sm:text-lg text-gray-400 max-w-xs mx-auto mb-8">
                    Your specifications have been sent to our desk. We'll contact you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus("")}
                    className="px-8 py-3 bg-[#4A93C4] text-white rounded-xl font-bold hover:bg-[#3b7ba8] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 mb-8 sm:mb-10 text-white/60">
                <MessageSquare size={18} sm:size={20} className="text-[#4A93C4]" />
                <span className="text-sm sm:text-base font-medium">Direct Inquiry Form</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Full Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#4A93C4] transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Corporate Email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#4A93C4] transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <select 
                    name="unit"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-gray-400 outline-none focus:border-[#4A93C4] transition-all appearance-none text-sm sm:text-base"
                  >
                    <option value="">Select Business Unit</option>
                    <option value="Cleanroom">Cleanroom Setup</option>
                    <option value="HVACR">HVACR Maintenance</option>
                    <option value="Pharma">Pharma Engineering</option>
                    <option value="Other">Other Services</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    name="message"
                    required
                    placeholder="Project Brief or Specifications" 
                    rows="4"
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#4A93C4] transition-all resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === "SENDING"}
                  className="w-full bg-[#4A93C4] text-white rounded-xl sm:rounded-2xl py-4 sm:py-5 font-bold text-base sm:text-lg hover:bg-[#3b7ba8] transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "SENDING" ? "Submitting..." : "Submit Project Details"} <ArrowRight size={20} />
                </button>
                
                {status === "ERROR" && (
                  <div className="flex items-center gap-2 text-red-400 text-xs sm:text-sm mt-4 justify-center">
                    <AlertCircle size={16} />
                    <span>Error submitting form. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

