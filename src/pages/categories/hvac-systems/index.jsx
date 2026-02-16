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

  const products = [
    { name: 'Precision AHU Connect', description: 'Modular air handling units with integrated Siemens controls for precise environment management.', image: '/slider/cleanroom-suit.jpg' },
    { name: 'Silent Stream Chiller', description: 'Pharmaceutical-grade water-cooled chillers with ultra-quiet operation and high COP.', image: '/slider/cleanroom-hall.jpg' },
    { name: 'Humidiguard Pro', description: 'Advanced steam humidifiers with precise microprocessor control for tight RH tolerances.', image: '/slider/lab-work.jpg' },
    { name: 'Variable Flow VAV Box', description: 'Energy-efficient air distribution boxes for dynamic room pressurization control.', image: '/slider/corridor.jpg' },
    { name: 'Dehumidification AHU', description: 'Desiccant cooling systems for moisture-sensitive manufacturing areas.', image: '/slider/production.jpg' },
    { name: 'Digital BMS Controller', description: 'Integrated building management system for HVAC validation and monitoring.', image: '/slider/lab-microscope.jpg' },
  ];

  return (
    <CategoryPage 
      title="HVAC Systems"
      description="Custom air handling units, pharmaceutical-grade chillers, precision HVAC controls, and validated environmental monitoring systems."
      icon={<Zap size={32} />}
      image="/slider/cleanroom-suit.jpg"
      subcategories={subcategories}
      products={products}
    />
  );
};

export default HVACSystems;
