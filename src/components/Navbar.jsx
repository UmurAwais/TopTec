import React, { useState, useEffect } from 'react';
import { X, Search as SearchIcon, Menu, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/Top Tec Logo.png';
import AnnouncementBar from './AnnouncementBar';
import Search from './Search';
import NavItem from './NavItem';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY > 100) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Air Filters', 
      href: '/categories/air-filters',
      subcategories: [
        { name: 'Hepa Filters', href: '/filters/hepa' },
        { name: 'Pre Filters', href: '/filters/pre' },
        { name: 'Carbon/Activated Carbon Filters', href: '/filters/carbon' },
        { name: 'Bag Filters', href: '/filters/bag' },
        { name: 'V-Bank Filters', href: '/filters/v-bank' },
        { name: 'Box/Panel Filters', href: '/filters/box-panel' },
        { name: 'Compact Filters', href: '/filters/compact' },
        { name: 'Washable / Reusable Filters', href: '/filters/washable' },
        { name: 'Terminal Hepa Box', href: '/filters/terminal-hepa' },
      ]
    },
    { 
      name: 'Air Cleaning', 
      href: '/categories/air-cleaning',
      subcategories: [
        { name: 'Laminar Air Flow Hoods', href: '/air/laminar-flow' },
        { name: 'Biosafety Cabinets', href: '/air/biosafety-cabinets' },
        { name: 'Fume Hoods / Fume Extraction', href: '/air/fume-hoods' },
        { name: 'Air Purifiers', href: '/air/purifiers' },
        { name: 'Pass Boxes', href: '/air/pass-boxes' },
        { name: 'Sampling Booths', href: '/air/sampling-booths' },
        { name: 'Dispensing Booths', href: '/air/dispensing-booths' },
        { name: 'Air Showers', href: '/air/air-showers' },
        { name: 'Fan Filter Units (Ffu)', href: '/air/ffu' },
        { name: 'Pharma Doors', href: '/air/doors' },
        { name: 'Pharma Windows', href: '/air/windows' },
        { name: 'Cross-Over Bench', href: '/air/cross-over-bench' },
      ]
    },
    { 
      name: 'Laboratory Furniture', 
      href: '/categories/laboratory-furniture',
      subcategories: [
        { name: 'Employees Lockers', href: '/furniture/employees-lockers' },
        { name: 'Stainless Steel Lockers', href: '/furniture/ss-lockers' },
        { name: 'Cupboards', href: '/furniture/cupboards' },
        { name: 'Wall Cabinets', href: '/furniture/wall-cabinets' },
        { name: 'Garment Storage Cabinets', href: '/furniture/garment-storage' },
        { name: 'Chemical / Safety Cabinets', href: '/furniture/safety-cabinets' },
        { name: 'Workstations & Tables', href: '/furniture/workstations' },
        { name: 'I-Shape Laboratory Tables', href: '/furniture/i-shape-tables' },
        { name: 'L-Shape Laboratory Tables', href: '/furniture/l-shape-tables' },
        { name: 'Continues / Modular Lab Benches', href: '/furniture/modular-benches' },
        { name: 'Central / Island Work Tables', href: '/furniture/island-tables' },
        { name: 'Designing / Drafting Tables', href: '/furniture/drafting-tables' },
        { name: 'Ss Working Tables (Hygienic Grade)', href: '/furniture/ss-working-tables' },
        { name: 'Stainless Steel Sinks', href: '/furniture/ss-sinks' },
        { name: 'Hand Wash Stations', href: '/furniture/hand-wash' },
        { name: 'Eye Wash / Safety Shower', href: '/furniture/safety-shower' },
        { name: 'Stainless Steel Stools', href: '/furniture/ss-stools' },
        { name: 'Stainless Steel Chairs', href: '/furniture/ss-chairs' },
        { name: 'Stainless Steel Trolleys', href: '/furniture/ss-trolleys' },
      ]
    },
    { 
      name: 'Production Machinery', 
      href: '/categories/production-machinery',
      subcategories: [
        {
          name: 'Tablet Section Machines',
          href: '/machinery/tablet',
          subcategories: [
            { name: 'Oscillation Granulator', href: '/machinery/tablet/oscillation-granulator' },
            { name: 'Wet Granulator', href: '/machinery/tablet/wet-granulator' },
            { name: 'Powder Tray Dryer', href: '/machinery/tablet/tray-dryer' },
            { name: 'Ribbon Mixer', href: '/machinery/tablet/ribbon-mixer' },
            { name: 'Double Cone Mixer', href: '/machinery/tablet/double-cone-mixer' },
            { name: 'Fluidized Bed Dryer', href: '/machinery/tablet/fluidized-bed-dryer' },
          ]
        },
        {
          name: 'Capsule Section Machines',
          href: '/machinery/capsule',
          subcategories: [
            { name: 'Double Cone Mixer', href: '/machinery/capsule/double-cone-mixer' },
            { name: 'Capsule Polisher', href: '/machinery/capsule/polisher' },
            { name: 'Capsule Filling Machine', href: '/machinery/capsule/filling-machine' },
            { name: 'Ss Tub For Powder', href: '/machinery/capsule/ss-tub' },
          ]
        },
        {
          name: 'Liquid Syrup Section',
          href: '/machinery/liquid-syrup',
          subcategories: [
            { name: 'Liquid Filling Line', href: '/machinery/liquid/filling-line' },
            { name: 'Manufacturing Tank With Silversan', href: '/machinery/liquid/tank' },
            { name: 'Storage Tank', href: '/machinery/liquid/storage-tank' },
            { name: 'Silver San', href: '/machinery/liquid/silver-san' },
            { name: 'Filtration Unit With Pump', href: '/machinery/liquid/filtration' },
            { name: 'Bottle Blowing Machine', href: '/machinery/liquid/bottle-blowing' },
            { name: 'Labeling Machine', href: '/machinery/liquid/labeling' },
            { name: 'Colloid Mill', href: '/machinery/liquid/colloid-mill' },
            { name: 'Dispensing Booth', href: '/machinery/liquid/dispensing' },
            { name: 'Sampling Booth', href: '/machinery/liquid/sampling' },
          ]
        },
        {
          name: 'Dry-Syrup Section',
          href: '/machinery/dry-syrup',
          subcategories: [
            { name: 'Dry Powder Filling Line', href: '/machinery/dry-syrup/filling-line' },
            { name: 'Semi-Auto Filling Machine', href: '/machinery/dry-syrup/semi-auto' },
            { name: 'Sugar Grinder', href: '/machinery/dry-syrup/sugar-grinder' },
            { name: 'Labeling Machine', href: '/machinery/dry-syrup/labeling' },
          ]
        },
        {
          name: 'Ointment/Cream Section',
          href: '/machinery/ointment',
          subcategories: [
            { name: 'Cream Ointment Mixer', href: '/machinery/ointment/mixer' },
            { name: 'Tube Filling Machine', href: '/machinery/ointment/tube-filling' },
            { name: 'Double Jacket Tank For Mixing', href: '/machinery/ointment/jacket-tank' },
            { name: 'Colloid Mill', href: '/machinery/ointment/colloid-mill' },
          ]
        },
        {
          name: 'Sachet Section Machine',
          href: '/machinery/sachet',
          subcategories: [
            { name: 'Powder Sachet Machine', href: '/machinery/sachet/machine' },
            { name: 'Powder Shifter', href: '/machinery/sachet/shifter' },
            { name: 'V-Shape Mixer', href: '/machinery/sachet/mixer' },
          ]
        },
        {
          name: 'Eye Drop Section Machine',
          href: '/machinery/eye-drop',
          subcategories: [
            { name: 'Eye Drop Filling Machine', href: '/machinery/eye-drop/filling' },
            { name: 'Pressure Vassel Double Jecket', href: '/machinery/eye-drop/pressure-vessel' },
            { name: 'Filter Assembly', href: '/machinery/eye-drop/filter' },
            { name: 'Labeling Machine', href: '/machinery/eye-drop/labeling' },
          ]
        },
        {
          name: 'Inspection & Packaging',
          href: '/machinery/packaging',
          subcategories: [
            { name: 'Packing Conveyor Belt', href: '/machinery/packaging/belt' },
            { name: 'Optical Table', href: '/machinery/packaging/optical-table' },
          ]
        },
      ]
    },
    { 
      name: 'Laboratory Equipment', 
      href: '/categories/laboratory-equipment',
      subcategories: [
        {
          name: 'Chromatography Equipment',
          href: '/science/chromatography',
          subcategories: [
            { name: 'Hplc', href: '/science/chromatography/hplc' },
            { name: 'Uv Spectrophotometer', href: '/science/chromatography/uv' },
            { name: 'Atomic Absorption (Aas)', href: '/science/chromatography/aas' },
            { name: 'Liquid Particle Counter', href: '/science/chromatography/particle-counter' },
            { name: 'Toc Analyzer', href: '/science/chromatography/toc' },
          ]
        },
        {
          name: 'General Lab Equipment',
          href: '/science/general',
          subcategories: [
            { name: 'Analytical Balance', href: '/science/general/balance' },
            { name: 'Centrifuge', href: '/science/general/centrifuge' },
            { name: 'Distillation Apparatus', href: '/science/general/distillation' },
            { name: 'Filtration Assembly', href: '/science/general/filtration' },
            { name: 'Flame Photometer', href: '/science/general/photometer' },
            { name: 'Hot Plate Magnetic Stirrer', href: '/science/general/stirrer' },
            { name: 'Stability Chamber', href: '/science/general/stability-chamber' },
            { name: 'Sonicator', href: '/science/general/sonicator' },
            { name: 'Moisture Analyzer', href: '/science/general/moisture' },
            { name: 'Microscope', href: '/science/general/microscope' },
            { name: 'Viscometer', href: '/science/general/viscometer' },
            { name: 'Vortex Mixer', href: '/science/general/vortex' },
            { name: 'Water Bath', href: '/science/general/water-bath' },
          ]
        },
        {
          name: 'Microbiological Equipment',
          href: '/science/microbiological',
          subcategories: [
            { name: 'Air Particle Counter', href: '/science/microbiological/particle-counter' },
            { name: 'Autoclave', href: '/science/microbiological/autoclave' },
            { name: 'Colony Counter', href: '/science/microbiological/colony-counter' },
            { name: 'Co2 / Cool Incubator', href: '/science/microbiological/incubator' },
            { name: 'Microbial Air Sampler', href: '/science/microbiological/air-sampler' },
            { name: 'Anemometer / Nano Meters', href: '/science/microbiological/anemometer' },
            { name: 'Biological Microscope', href: '/science/microbiological/microscope' },
            { name: 'Hot Air Oven', href: '/science/microbiological/oven' },
          ]
        },
        {
          name: 'Optical / Analytical',
          href: '/science/optical',
          subcategories: [
            { name: 'Stereo Microscope', href: '/science/optical/stereo-microscope' },
            { name: 'Polarimeter', href: '/science/optical/polarimeter' },
            { name: 'Refractometer', href: '/science/optical/refractometer' },
            { name: 'Uv Inspection Lamp (Tlc)', href: '/science/optical/uv-lamp' },
            { name: 'Colorimeter', href: '/science/optical/colorimeter' },
            { name: 'Turbidity Meter', href: '/science/optical/turbidity' },
            { name: 'Lux Meter', href: '/science/optical/lux' },
            { name: 'Magnifying Inspection Lamps', href: '/science/optical/magnifying-lamps' },
          ]
        },
        {
          name: 'Tablet Testing Equipment',
          href: '/science/tablet-testing',
          subcategories: [
            { name: 'Dissolution Apparatus', href: '/science/tablet/dissolution' },
            { name: 'Disintegration Apparatus', href: '/science/tablet/disintegration' },
            { name: 'Friability Tester', href: '/science/tablet/friability' },
            { name: 'Hardness Tester', href: '/science/tablet/hardness' },
            { name: 'Leakage / Leak Test Apparatus', href: '/science/tablet/leak-test' },
          ]
        },
        {
          name: 'Titration / Measuring',
          href: '/science/titration',
          subcategories: [
            { name: 'Ph Meter', href: '/science/titration/ph' },
            { name: 'Conductivity Meter', href: '/science/titration/conductivity' },
            { name: 'Karl Fischer Titrator', href: '/science/titration/karl-fischer' },
            { name: 'Potentiometric Titrator', href: '/science/titration/potentiometric' },
            { name: 'Melting Point Apparatus', href: '/science/titration/melting-point' },
            { name: 'Cod / Bod Analyzer', href: '/science/titration/cod-bod' },
            { name: 'Dissolved Oxygen (Do) Meter', href: '/science/titration/do-meter' },
            { name: 'Tds Meter', href: '/science/titration/tds' },
            { name: 'Viscosity Measuring Apparatus', href: '/science/titration/viscosity' },
            { name: 'Auto Titrator / Digital Burette', href: '/science/titration/auto-titrator' },
          ]
        },
      ]
    },
    { 
      name: 'Sterile Processing', 
      href: '/categories/sterile-processing',
      subcategories: [
        { name: 'Cleanroom Panels (Puf / Pir / Modular)', href: '/sterile/panels' },
        { name: 'Cleanroom Doors (Hermetically Sealed / Ss)', href: '/sterile/doors' },
        { name: 'Flooring (Epoxy / Vinyl)', href: '/sterile/flooring' },
        { name: 'Cleanroom Lighting', href: '/sterile/lighting' },
        { name: 'Cleanroom Furniture (Ss & Ms Powder Coated)', href: '/sterile/furniture' },
        { name: 'Garment Storage Cabinets', href: '/sterile/storage' },
        { name: 'Clean Tunnels', href: '/sterile/tunnels' },
        { name: 'Validation & Certification Services', href: '/sterile/validation' },
        { name: 'Turnkey Cleanroom Setup', href: '/sterile/turnkey' },
      ]
    },
    { 
      name: 'HVAC', 
      href: '/categories/hvac-systems',
      subcategories: [
        { name: 'AHU (Air Handling Units)', href: '/hvac/ahu' },
        { name: 'FCU (Fan Coil Units)', href: '/hvac/fcu' },
        { name: 'Chillers', href: '/hvac/chillers' },
        { name: 'Dehumidifiers / Humidifiers', href: '/hvac/dehumidifiers' },
        { name: 'Ducting Systems', href: '/hvac/ducting' },
        { name: 'Air Diffusers / Grilles', href: '/hvac/diffusers' },
        { name: 'Exhaust & Fresh Air Systems', href: '/hvac/exhaust' },
        { name: 'Pressurization Systems', href: '/hvac/pressurization' },
        { name: 'Precision Air Conditioning (HVAC)', href: '/hvac/precision-ac' },
      ]
    },
  ];

  return (
    <header className="w-full fixed top-0 z-50 flex flex-col border-b border-gray-200">
      <AnnouncementBar isScrolled={isScrolled} />

      <nav className={`w-full transition-all duration-300 relative ${
        isScrolled 
          ? 'py-2.5 bg-white/95 backdrop-blur-md shadow-[0_1px_3px_0_rgba(60,64,67,0.15)]' 
          : 'py-6 bg-white'
      }`}>
        <Search 
          isOpen={isSearchOpen} 
          onClose={() => setIsSearchOpen(false)} 
          query={searchQuery} 
          setQuery={setSearchQuery} 
        />
        <div className="w-full px-4 lg:px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link 
              to="/"
              className="flex items-center cursor-pointer"
            >
              <img src={logo} alt="Top Tec" className="h-7 lg:h-9 w-auto" />
            </Link>

            {/* Google's Minimal Nav Links */}
            <div className="hidden lg:flex items-center">
              {navLinks.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Google Style Actions Group */}
          <div className="flex items-center gap-2">
            <button 
              className="p-3 text-[#5f6368] hover:bg-gray-100 rounded-full transition-all lg:hidden cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
            
            <div className="hidden lg:flex items-center gap-2">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-3 rounded-full transition-all cursor-pointer ${isSearchOpen ? 'bg-gray-100 text-[#4A93C4]' : 'text-[#5f6368] hover:bg-gray-100'}`}
                aria-label="Search"
              >
                <SearchIcon size={20} />
              </button>
              
              <Link 
                to="/about"
                className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-gray-50 text-[#3c4043] border border-gray-100 hover:bg-gray-100 transition-all cursor-pointer text-[13px] font-medium"
              >
                About Us
              </Link>
            </div>

            <Link to="/contact" className="ml-2 px-6 py-2.5 bg-[#4A93C4] text-white rounded-full font-medium text-sm hover:bg-[#3b7ba8] hover:shadow-md transition-all active:scale-95 cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Google Mobile App Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-100 flex flex-col"
          >
            <div className="p-4 flex justify-between items-center border-b border-gray-100">
              <img src={logo} alt="Top Tec" className="h-6 w-auto" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 flex flex-col gap-2 overflow-y-auto">
              <div className="px-4 py-2">
                <span className="text-[11px] font-bold text-[#4A93C4] uppercase tracking-wider">Main Links</span>
              </div>
              {navLinks.map((item) => (
                item.href.startsWith('/') && !item.href.includes('#') ? (
                  <Link 
                    key={item.name} 
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-4 text-lg font-medium text-[#202124] hover:bg-gray-50 rounded-xl cursor-pointer transition-colors no-underline block"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a 
                    key={item.name} 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-4 text-lg font-medium text-[#202124] hover:bg-gray-50 rounded-xl cursor-pointer transition-colors no-underline block"
                  >
                    {item.name}
                  </a>
                )
              ))}
              
              <div className="px-4 py-2 mt-4">
                <span className="text-[11px] font-bold text-[#4A93C4] uppercase tracking-wider">Contact</span>
              </div>
            </div>
            <div className="mt-auto p-8 border-t border-gray-100 bg-gray-50/50">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 bg-[#4A93C4] text-white rounded-full font-medium active:scale-95 transition-all cursor-pointer block text-center">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
