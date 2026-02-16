import React from 'react';
import CategoryPage from '../CategoryPage';
import { Zap } from 'lucide-react';

import { hvacSystemsProducts } from '../../../data/hvac-systems';

const HVACSystems = () => {
  const subcategories = [
    { name: 'AHU (Air Handling Units)', href: '/hvac/ahu' },
    { name: 'FCU (Fan Coil Units)', href: '/hvac/fcu' },
    { name: 'Chillers', href: '/hvac/chillers' },
    { name: 'Dehumidifiers / Humidifiers', href: '/hvac/dehumidifiers' },
    { name: 'Ducting Systems', href: '/hvac/ducting' },
    { name: 'Air Diffusers / Grilles', href: '/hvac/diffusers' },
    { name: 'Exhaust & Fresh Air Systems', href: '/hvac/exhaust' },
    { name: 'Pressurization Systems', href: '/hvac/pressurization' },
    { name: 'Precision Air Conditioning', href: '/hvac/precision-ac' },
  ];

  return (
    <CategoryPage 
      title="HVAC Systems"
      description="Custom air handling units, pharmaceutical-grade chillers, precision HVAC controls, and validated environmental monitoring systems."
      icon={<Zap size={32} />}
      image="/slider/cleanroom-suit.jpg"
      subcategories={subcategories}
      products={hvacSystemsProducts}
    />
  );
};

export default HVACSystems;
