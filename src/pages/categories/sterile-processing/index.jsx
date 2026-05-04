import React from 'react';
import CategoryPage from '../CategoryPage';
import { Layers } from 'lucide-react';
import cleanRoomBanner from '../../../assets/clean room banner.webp';

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
      title="Clean Room Solutions"
      description="Advanced modular cleanroom partition systems, airtight doors, and specialized flooring. We provide complete turnkey solutions from design to validation, ensuring ISO Grade and CGMP compliance for pharmaceutical, electronic, and healthcare industries."
      icon={<Layers size={32} />}
      image={cleanRoomBanner}
      subcategories={subcategories}
      products={sterileProcessingProducts}
    />
  );
};

export default SterileProcessing;
