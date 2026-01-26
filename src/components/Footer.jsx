import React from 'react';
import logo from '../assets/Top Tec Logo.png';
import { Linkedin, Twitter, Youtube, ArrowRight, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <img src={logo} alt="TopTec" className="h-10 w-auto mb-8" />
            <p className="text-[#5f6368] text-lg leading-relaxed mb-8 max-w-sm">
              Global leaders in Pharmaceutical Engineering, Cleanroom Setup, and specialized HVACR services. Maintaining purity in production since 1998.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#5f6368] hover:bg-[#4A93C4] hover:text-white hover:border-[#4A93C4] transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#5f6368] hover:bg-[#1a73e8] hover:text-white hover:border-[#1a73e8] transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#5f6368] hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[#202124] uppercase tracking-[0.2em] text-sm mb-8">Solutions</h4>
            <ul className="space-y-4">
              {['Filters', 'Air Handling', 'Furniture', 'Machinery', 'Science Lab', 'Sterile Rooms'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#5f6368] hover:text-[#4A93C4] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[#202124] uppercase tracking-[0.2em] text-sm mb-8">Company</h4>
            <ul className="space-y-4">
              {['About TopTec', 'Certifications', 'Our Process', 'Technical Papers', 'Case Studies', 'Global Presence'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#5f6368] hover:text-[#4A93C4] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-[#202124] uppercase tracking-[0.2em] text-sm mb-8">Industry Updates</h4>
            <p className="text-[#5f6368] mb-8">Get the latest technical briefs and compliance news from our engineers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Business Email" 
                className="w-full bg-gray-50 border border-gray-100 rounded-full px-6 py-4 outline-none focus:border-[#4A93C4] transition-all"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-[#4A93C4] text-white rounded-full flex items-center justify-center hover:bg-[#3b7ba8] transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>



        {/* Legal Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#5f6368] text-[13px]">
            © {currentYear} TopTec Private Limited. All engineering specifications reserved.
          </div>
          <div className="flex items-center gap-8 text-[13px] font-medium text-[#5f6368]">
            <a href="#" className="hover:text-[#4A93C4]">Standard Terms & Conditions</a>
            <a href="#" className="hover:text-[#4A93C4]">Data Privacy Policy</a>
            <a href="#" className="hover:text-[#4A93C4]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
