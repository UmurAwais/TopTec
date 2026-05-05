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
      description={`TopTec is a leading provider of modular cleanroom solutions, offering advanced partition systems, airtight doors, and specialized antimicrobial flooring. We deliver comprehensive turnkey projects—from design and fabrication to validation and commissioning—ensuring full compliance with ISO, CGMP, and WHO standards.\n\nBy combining innovative materials with precision engineering, we create contamination-controlled environments essential for pharmaceutical and biotechnology research. Since 2016, TopTec has ensured that sterile facilities are built for high performance, long-term durability, and absolute safety.`}
      icon={<Layers size={32} />}
      image={cleanRoomBanner}
      subcategories={subcategories}
      products={sterileProcessingProducts}
    />
  );
};

export default SterileProcessing;
