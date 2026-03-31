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
      description="TopTec is Pakistan's premier manufacturer of high-performance air filtration systems since 2016. We engineer ISO-certified H14 HEPA filters, activated carbon systems, and multi-stage pre-filters specifically for pharmaceutical cleanrooms and sterile manufacturing environments."
      icon={<Filter size={32} />}
      image="https://toptec.pk/wp-content/uploads/2024/07/201909101442246985.jpg"
      subcategories={subcategories}
      products={airFiltersProducts}
    />
  );
};

export default AirFilters;
