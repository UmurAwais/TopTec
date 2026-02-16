import React from 'react';
import CategoryPage from '../CategoryPage';
import { FlaskConical } from 'lucide-react';

const LaboratoryEquipment = () => {
  const subcategories = [
    { name: 'Chromatography Equipment', href: '/science/chromatography' },
    { name: 'General Lab Equipment', href: '/science/general' },
    { name: 'Microbiological Equipment', href: '/science/microbiological' },
    { name: 'Optical / Analytical', href: '/science/optical' },
    { name: 'Tablet Testing Equipment', href: '/science/tablet-testing' },
    { name: 'Titration / Measuring', href: '/science/titration' },
  ];

  const products = [
    { name: 'Micro-Scan Digital 4K', description: 'Ultra-high definition digital microscope with integrated measurement and analysis software.', image: '/slider/lab-microscope.jpg' },
    { name: 'Precision Dissolution X4', description: 'Fully automated 8-vessel dissolution tester for pharmaceutical release profiling.', image: '/slider/lab-work.jpg' },
    { name: 'Spin-Force Centrifuge', description: 'Refrigerated high-speed centrifuge with brushless motor and programmable cycles.', image: '/slider/cleanroom-suit.jpg' },
    { name: 'Thermal Stable Incubator', description: 'Fan-forced CO2 incubator with HEPA filtered air and decontamination cycle.', image: '/slider/cleanroom-hall.jpg' },
    { name: 'Analytical Balance Pro', description: 'High-precision weighing scale with internal calibration and windshield.', image: '/slider/corridor.jpg' },
    { name: 'UV-Vis Spectrophotometer', description: 'Double-beam scanning spectrophotometer for precise chemical analysis.', image: '/slider/production.jpg' },
  ];

  return (
    <CategoryPage 
      title="Laboratory Equipment"
      description="HPLC systems, dissolution testers, microbiology incubators, and analytical instruments for pharmaceutical quality control testing."
      icon={<FlaskConical size={32} />}
      image="/slider/lab-microscope.jpg"
      subcategories={subcategories}
      products={products}
    />
  );
};

export default LaboratoryEquipment;
