import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Building2, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState(""); // "", "SENDING", "SUCCESS", "ERROR"

  useEffect(() => {
    document.title = "Contact | Quality Clean Equipment | Precision Engineering Globally";
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    const form = e.target;
    const data = new FormData(form);

    try {
      // Note: Replace 'xqegbpqd' with your actual Formspree ID or caretoptec@gmail.com if using paid plan
      const response = await fetch("https://formspree.io/f/xqegbpqd", {
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
    <div className="pt-42 pb-16 lg:pt-46 min-h-screen bg-white font-['Outfit']">
      {/* Hero Section */}
      <div className="max-w-350 mx-auto px-6 lg:px-12 mb-12 sm:mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#4A93C4] text-xs font-bold tracking-wider uppercase mb-4">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-[#202124] mb-6 tracking-tight leading-tight">
             Engineering Precision. <br />
             <span className="text-[#4A93C4]">Global Solutions.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#5f6368] max-w-2xl mx-auto leading-relaxed px-4">
            Registered for international export, we deliver high-performance cleanroom and laboratory solutions to the pharmaceutical and biotech sectors worldwide.
          </p>
        </motion.div>
      </div>

      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 lg:gap-10">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#4A93C4]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#202124] mb-1">Email Us</h3>
                  <p className="text-[#5f6368] text-sm mb-2">Our friendly team is here to help.</p>
                  <a href="mailto: caretoptec@gmail.com" className="text-[#4A93C4] font-medium hover:underline break-all"> caretoptec@gmail.com</a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#4A93C4]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#202124] mb-1">Call Us</h3>
                  <p className="text-[#5f6368] text-sm mb-2">Mon-Sat from 8am to 5pm.</p>
                  <a href="tel:+923238491966" className="text-[#4A93C4] font-medium hover:underline block text-sm sm:text-base">+92 323 8491966</a>
                  <a href="tel:+923109999414" className="text-[#4A93C4] font-medium hover:underline block text-sm sm:text-base">+92 310 9999414</a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#4A93C4]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#202124] mb-1">Corporate Office</h3>
                  <p className="text-[#5f6368] text-sm mb-2">Primary HQ for business.</p>
                  <p className="text-[#202124] font-medium uppercase text-xs sm:text-sm leading-relaxed">
                    Office#01, Block A, Gohawa Service Lane,<br />
                    Ring Road (Near Netsol), Lahore Cantt
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#4A93C4]">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#202124] mb-1">Warehouse Facility</h3>
                  <p className="text-[#5f6368] text-sm mb-2">For logistics & inspection.</p>
                  <p className="text-[#202124] font-medium uppercase text-xs sm:text-sm leading-relaxed">
                    House # 51, Block E, Street # 8,<br />
                    Fathe Abad Academy Road, Lahore Cantt
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:col-span-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#4A93C4]">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#202124] mb-1">Working Hours</h3>
                  <p className="text-[#5f6368] text-sm mb-2">Available Mon-Sat</p>
                  <p className="text-[#202124] font-medium text-sm sm:text-base">09:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Map  */}
            <div className="w-full h-64 sm:h-80 bg-gray-100 rounded-3xl sm:rounded-4xl overflow-hidden relative border border-gray-100 shadow-sm">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5513251501534!2d74.40618051514334!3d31.481549481381395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919058f9a2e6e87%3A0x6b69b92ed357f864!2sNETSOL%20Technologies%20Limited!5e0!3m2!1sen!2s!4v1711620000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
              ></iframe>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-6 sm:p-10 rounded-3xl sm:rounded-4xl relative"
          >
            <AnimatePresence>
              {status === "SUCCESS" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-50 bg-[#4A93C4] rounded-3xl sm:rounded-4xl flex flex-col items-center justify-center text-white p-8 text-center"
                >
                  <CheckCircle2 size={64} className="mb-6 animate-bounce" />
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-lg text-blue-50 opacity-90 max-w-xs mx-auto">
                    Thank you for reaching out. Our engineering team will review your query and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus("")}
                    className="mt-10 px-8 py-3 bg-white text-[#4A93C4] rounded-xl font-bold hover:bg-blue-50 transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#202124]" htmlFor="first-name">First name</label>
                  <input 
                    type="text" 
                    name="first_name"
                    id="first-name" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A93C4] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                    placeholder="First name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#202124]" htmlFor="last-name">Last name</label>
                  <input 
                    type="text" 
                    name="last_name"
                    id="last-name" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A93C4] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#202124]" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  name="email"
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A93C4] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                  placeholder="you@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#202124]" htmlFor="subject">Subject</label>
                <select 
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A93C4] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white text-gray-600 appearance-none cursor-pointer"
                >
                  <option>Select a subject</option>
                  <option>Sales Inquiry</option>
                  <option>Technical Support</option>
                  {/* <option>Partnership</option> */}
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#202124]" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A93C4] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white resize-none"
                  placeholder="Leave us a message..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "SENDING"}
                className="w-full py-4 bg-[#4A93C4] text-white rounded-xl font-semibold text-lg hover:bg-[#3b7ba8] hover:shadow-lg hover:shadow-blue-100 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "SENDING" ? "Processing..." : "Send Message"}
                <Send size={18} />
              </button>

              {status === "ERROR" && (
                <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                  <AlertCircle size={16} />
                  <span>Something went wrong. Please try again or email us directly.</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

