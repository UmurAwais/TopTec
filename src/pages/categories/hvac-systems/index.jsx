import React from 'react';
import CategoryPage from '../CategoryPage';
import { Zap } from 'lucide-react';

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
      subcategories={subcategories}
    />
  );
};

export default HVACSystems;
