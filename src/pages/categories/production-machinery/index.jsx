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

  return (
    <CategoryPage 
      title="Production Machinery"
      description="GMP-compliant tablet presses, capsule filling machines, liquid filling lines, and ointment manufacturing equipment for pharma production."
      icon={<Settings size={32} />}
      subcategories={subcategories}
    />
  );
};

export default ProductionMachinery;
