import React from 'react';
import CategoryPage from '../CategoryPage';
import { Filter } from 'lucide-react';

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
      description="H14 HEPA filters, pre-filters, activated carbon filters, and bag filters engineered for pharmaceutical cleanrooms and sterile manufacturing environments."
      icon={<Filter size={32} />}
      subcategories={subcategories}
    />
  );
};

export default AirFilters;
