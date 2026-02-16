import React from 'react';
import CategoryPage from '../CategoryPage';
import { Layers } from 'lucide-react';

import { sterileProcessingProducts } from '../../../data/sterile-processing';

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

  return (
    <CategoryPage 
      title="Sterile Processing"
      description="Modular cleanroom panels, hermetic doors, ESD flooring, and complete turnkey cleanroom construction from Grade A to Grade D."
      icon={<Layers size={32} />}
      image="/slider/slide2.webp"
      subcategories={subcategories}
      products={sterileProcessingProducts}
    />
  );
};

export default SterileProcessing;
