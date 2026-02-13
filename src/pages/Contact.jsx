import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact TopTec | Cleanroom Solutions UAE, Saudi Arabia, Qatar | Get Quote";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-38 pb-16 lg:pt-52 min-h-screen bg-white font-['Outfit']">
      {/* Hero Section */}
      <div className="max-w-350 mx-auto px-6 lg:px-12 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#4A93C4] text-xs font-bold tracking-wider uppercase mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl lg:text-6xl font-semibold text-[#202124] mb-6 tracking-tight">
            Let's discuss your cleanroom project
          </h1>
          <p className="text-lg text-[#5f6368] max-w-2xl mx-auto leading-relaxed">
            Need a cleanroom quote, technical consultation, or project inquiry? Our pharmaceutical engineering team serves clients across UAE, Saudi Arabia, Qatar, Kenya, Nigeria, Bangladesh, and 14+ countries worldwide.
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
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#4A93C4]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#202124] mb-1">Email Us</h3>
                  <p className="text-[#5f6368] text-sm mb-2">Our friendly team is here to help.</p>
                  <a href="mailto: caretoptec@gmail.com" className="text-[#4A93C4] font-medium hover:underline"> caretoptec@gmail.com</a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#4A93C4]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#202124] mb-1">Call Us</h3>
                  <p className="text-[#5f6368] text-sm mb-2">Mon-Sat from 8am to 5pm.</p>
                  <a href="tel:+923238491966" className="text-[#4A93C4] font-medium hover:underline block">+92 323 8491966</a>
                  <a href="tel:+923109999414" className="text-[#4A93C4] font-medium hover:underline block">+92 310 9999414</a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#4A93C4]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#202124] mb-1">Office</h3>
                  <p className="text-[#5f6368] text-sm mb-2">Come say hello at our office HQ.</p>
                  <p className="text-[#202124] font-medium uppercase text-sm leading-relaxed">
                    House # 51, Block E, Street # 8, Fathe Abad Academy Road nearby Shair Paioo Bridge<br />
                    Lahore, Cantt, Pakistan
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#4A93C4]">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#202124] mb-1">Working Hours</h3>
                  <p className="text-[#5f6368] text-sm mb-2">We are available on</p>
                  <p className="text-[#202124] font-medium">Mon-Sat: 09:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder (or real embed) */}
            <div className="w-full h-64 bg-gray-100 rounded-3xl overflow-hidden relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6798.549646467385!2d74.3756785!3d31.5435996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc202484a008c205!2sFathe%20Abad%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709123456789!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 hover:opacity-100 transition-opacity duration-300"
              ></iframe>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-8 lg:p-10 rounded-4xl"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#202124]" htmlFor="first-name">First name</label>
                  <input 
                    type="text" 
                    id="first-name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A93C4] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                    placeholder="First name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#202124]" htmlFor="last-name">Last name</label>
                  <input 
                    type="text" 
                    id="last-name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A93C4] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#202124]" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A93C4] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                  placeholder="you@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#202124]" htmlFor="subject">Subject</label>
                <select 
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A93C4] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white text-gray-600 appearance-none cursor-pointer"
                >
                  <option>Select a subject</option>
                  <option>Sales Inquiry</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#202124]" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4A93C4] focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white resize-none"
                  placeholder="Leave us a message..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-[#4A93C4] text-white rounded-xl font-semibold text-lg hover:bg-[#3b7ba8] hover:shadow-lg hover:shadow-blue-100 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
