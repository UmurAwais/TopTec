import React from 'react';
import CategoryPage from '../CategoryPage';
import { Wind } from 'lucide-react';

const AirCleaning = () => {
  const subcategories = [
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
  ];

  const products = [
    { name: 'Laminar Air Flow Pro', description: 'Advanced ISO Class 5 laminar flow hood for sterile pharmaceutical compounding.', image: '/slider/cleanroom-suit.jpg' },
    { name: 'Biosafety Cabinet Gen-2', description: 'Class II Type A2 cabinet providing personnel, product, and environmental protection.', image: '/slider/lab-work.jpg' },
    { name: 'Mobile Air Shower', description: 'Automated high-velocity air shower for cleanroom entry and exit contamination control.', image: '/slider/cleanroom-hall.jpg' },
    { name: 'Fume Extraction System', description: 'High-efficiency extraction system for chemical vapors and laboratory fumes.', image: '/slider/lab-microscope.jpg' },
    { name: 'Dynamic Pass Box', description: 'Interlocked transfer hatch with HEPA filtration for material movement.', image: '/slider/corridor.jpg' },
    { name: 'Sampling Booth', description: 'Negative pressure booth for safe sampling and weighing of powders.', image: '/slider/production.jpg' },
  ];

  return (
    <CategoryPage 
      title="Air Cleaning"
      description="Laminar flow hoods, Class II biosafety cabinets, and dynamic air showers that maintain ISO Class 5 cleanroom standards for biotech labs."
      icon={<Wind size={32} />}
      image="/slider/cleanroom-hall.jpg"
      subcategories={subcategories}
      products={products}
    />
  );
};

export default AirCleaning;
