import React from 'react';
import CategoryPage from '../CategoryPage';
import { Layers } from 'lucide-react';

const SterileProcessing = () => {
  const subcategories = [
    { name: 'Cleanroom Panels', href: '/sterile/panels' },
    { name: 'Cleanroom Doors', href: '/sterile/doors' },
    { name: 'Flooring (Epoxy / Vinyl)', href: '/sterile/flooring' },
    { name: 'Cleanroom Lighting', href: '/sterile/lighting' },
    { name: 'Cleanroom Furniture', href: '/sterile/furniture' },
    { name: 'Garment Storage Cabinets', href: '/sterile/storage' },
    { name: 'Clean Tunnels', href: '/sterile/tunnels' },
    { name: 'Validation Services', href: '/sterile/validation' },
    { name: 'Turnkey Cleanroom Setup', href: '/sterile/turnkey' },
  ];

  const products = [
    { name: 'Pure-Entry Air Shower', description: 'Dual-side entry air shower with HEPA-filtered vertical airflow and interlocking doors.', image: '/slider/cleanroom-hall.jpg' },
    { name: 'Dynamic Pass Box Plus', description: 'Self-cleaning pass-through hatch with UV sterilization and electromagnetic interlocking.', image: '/slider/cleanroom-suit.jpg' },
    { name: 'Crystal-Floor Epoxy Kit', description: 'Self-leveling pharmaceutical grade epoxy flooring system with anti-bacterial properties.', image: '/slider/corridor.jpg' },
    { name: 'Pharma-Light Panel', description: 'IP65 rated recessed cleanroom LED light panels with bottom-opening access.', image: '/slider/slide2.webp' },
    { name: 'Hermetic Sliding Door', description: 'High-seal automatic sliding doors for positive/negative pressure maintenance.', image: '/slider/cleanroom-hall.jpg' },
    { name: 'Modular Wall Panel System', description: 'Quick-install PIR insulated panels with powder-coated antimicrobial finish.', image: '/slider/lab-work.jpg' },
  ];

  return (
    <CategoryPage 
      title="Sterile Processing"
      description="Modular cleanroom panels, hermetic doors, ESD flooring, and complete turnkey cleanroom construction from Grade A to Grade D."
      icon={<Layers size={32} />}
      image="/slider/slide2.webp"
      subcategories={subcategories}
      products={products}
    />
  );
};

export default SterileProcessing;
