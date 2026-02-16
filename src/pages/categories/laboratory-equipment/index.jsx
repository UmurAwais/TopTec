import React from 'react';
import CategoryPage from '../CategoryPage';
import { FlaskConical } from 'lucide-react';

import { laboratoryEquipmentProducts } from '../../../data/laboratory-equipment';

const LaboratoryEquipment = () => {
  const subcategories = [
    { name: 'Chromatography Equipment', href: '/science/chromatography' },
    { name: 'General Lab Equipment', href: '/science/general' },
    { name: 'Microbiological Equipment', href: '/science/microbiological' },
    { name: 'Optical / Analytical', href: '/science/optical' },
    { name: 'Tablet Testing Equipment', href: '/science/tablet-testing' },
    { name: 'Titration / Measuring', href: '/science/titration' },
  ];

  return (
    <CategoryPage 
      title="Laboratory Equipment"
      description="HPLC systems, dissolution testers, microbiology incubators, and analytical instruments for pharmaceutical quality control testing."
      icon={<FlaskConical size={32} />}
      image="/slider/lab-microscope.jpg"
      subcategories={subcategories}
      products={laboratoryEquipmentProducts}
    />
  );
};

export default LaboratoryEquipment;
