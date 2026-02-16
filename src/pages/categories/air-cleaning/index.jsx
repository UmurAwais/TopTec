import React from 'react';
import CategoryPage from '../CategoryPage';
import { Wind } from 'lucide-react';

import { airCleaningProducts } from '../../../data/air-cleaning';

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

  return (
    <CategoryPage 
      title="Air Cleaning"
      description="Laminar flow hoods, Class II biosafety cabinets, and dynamic air showers that maintain ISO Class 5 cleanroom standards for biotech labs."
      icon={<Wind size={32} />}
      image="/slider/cleanroom-hall.jpg"
      subcategories={subcategories}
      products={airCleaningProducts}
    />
  );
};

export default AirCleaning;
