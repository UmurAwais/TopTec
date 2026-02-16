import React from 'react';
import CategoryPage from '../CategoryPage';
import { Settings } from 'lucide-react';

const ProductionMachinery = () => {
  const subcategories = [
    { name: 'Tablet Section Machines', href: '/machinery/tablet' },
    { name: 'Capsule Section Machines', href: '/machinery/capsule' },
    { name: 'Liquid Syrup Section', href: '/machinery/liquid-syrup' },
    { name: 'Dry-Syrup Section', href: '/machinery/dry-syrup' },
    { name: 'Ointment/Cream Section', href: '/machinery/ointment' },
    { name: 'Sachet Section Machine', href: '/machinery/sachet' },
    { name: 'Eye Drop Section Machine', href: '/machinery/eye-drop' },
    { name: 'Inspection & Packaging', href: '/machinery/packaging' },
  ];

  const products = [
    { name: 'Rotary Tablet Press 3000', description: 'High-speed force-fed rotary tablet press with automated weight control and reject system.', image: '/slider/production.jpg' },
    { name: 'Precision Capsule Filler', description: 'Semi-automatic capsule filling machine with high dosing accuracy for powder and pellets.', image: '/slider/pharma-pills.jpg' },
    { name: 'Liquid Filling Monoblock', description: 'Integrated filling and capping monoblock for pharmaceutical syrups and suspensions.', image: '/slider/cleanroom-hall.jpg' },
    { name: 'Sachet-Flow Packer', description: 'Four-side seal multi-lane sachet packaging machine for granules and liquids.', image: '/slider/corridor.jpg' },
    { name: 'Fluid Bed Dryer', description: 'Efficient drying and granulation system for pharmaceutical solid dosage forms.', image: '/slider/cleanroom-suit.jpg' },
    { name: 'Auto-Coater Advanced', description: 'Fully automatic tablet coating system with precise spray technology.', image: '/slider/lab-work.jpg' },
  ];

  return (
    <CategoryPage 
      title="Production Machinery"
      description="GMP-compliant tablet presses, capsule filling machines, liquid filling lines, and ointment manufacturing equipment for pharma production."
      icon={<Settings size={32} />}
      image="/slider/production.jpg"
      subcategories={subcategories}
      products={products}
    />
  );
};

export default ProductionMachinery;
