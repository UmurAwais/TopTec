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

  const products = [
    { name: 'Ultra-Flow HEPA H14', description: '99.995% efficiency filters for absolute air purity in critical manufacturing zones.', image: '/slider/corridor.jpg' },
    { name: 'Activated Carbon Nexus', description: 'Multi-stage molecular filtration for superior odor and VOC removal.', image: '/slider/cleanroom-suit.jpg' },
    { name: 'V-Bank High Capacity', description: 'Large surface area filters designed for high airflow HVAC systems.', image: '/slider/cleanroom-hall.jpg' },
    { name: 'Washable Pre-Filter Pro', description: 'Durable and reusable pre-filtration stages to extend primary filter life.', image: '/slider/production.jpg' },
    { name: 'Compact Bag Filter', description: 'Multi-pocket synthetic media filters for high dust holding capacity.', image: '/slider/lab-work.jpg' },
    { name: 'Terminal HEPA Module', description: 'Ceiling mount filtration units for laminar air distribution in cleanrooms.', image: '/slider/lab-microscope.jpg' },
  ];

  return (
    <CategoryPage 
      title="Air Filters"
      description="H14 HEPA filters, pre-filters, activated carbon filters, and bag filters engineered for pharmaceutical cleanrooms and sterile manufacturing environments."
      icon={<Filter size={32} />}
      image="/slider/corridor.jpg"
      subcategories={subcategories}
      products={products}
    />
  );
};

export default AirFilters;
