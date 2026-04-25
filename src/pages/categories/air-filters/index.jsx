import React from 'react';
import CategoryPage from '../CategoryPage';
import { Filter } from 'lucide-react';

import { airFiltersProducts } from '../../../data/air-filters';

const AirFilters = () => {
  const subcategories = [
    { name: 'Hepa Filters', href: '/filters/hepa' },
    { name: 'Pre Filters', href: '/filters/pre' },
    { name: 'Carbon/Activated Carbon Filters', href: '/filters/carbon' },
    { name: 'Bag Filters', href: '/filters/bag' },
    { name: 'V-Bank Filters', href: '/filters/v-bank' },
    { name: 'Box/Panel Filters', href: '/filters/box-panel' },
    { name: 'Compact Filters', href: '/filters/compact' },
    { name: 'Washable / Reusable Filters', href: '/filters/washable' },
    { name: 'Terminal Hepa Box', href: '/filters/terminal-hepa' },
  ];

  return (
    <CategoryPage 
      title="Air Filters"
      description={"Air filters are vital for removing airborne pollutants and microorganisms, safeguarding health and preserving industrial product quality. In cleanrooms and laboratories, they provide critical particle control while protecting sensitive equipment from environmental damage.\n\nWidely utilized in HVAC and AHU systems across pharmaceutical and medical facilities, we offer a comprehensive selection to meet diverse technical needs, including HEPA, V-bank, carbon, and specialized multi-stage pre-filters."}
      icon={<Filter size={32} />}
      image="https://toptec.pk/wp-content/uploads/2024/07/201909101442246985.jpg"
      subcategories={subcategories}
      products={airFiltersProducts}
    />
  );
};

export default AirFilters;
