import { airFiltersProducts } from './air-filters';
import { airCleaningProducts } from './air-cleaning';
import { hvacSystemsProducts } from './hvac-systems';
import { laboratoryEquipmentProducts } from './laboratory-equipment';
import { laboratoryFurnitureProducts } from './laboratory-furniture';
import { productionMachineryProducts } from './production-machinery';
import { sterileProcessingProducts } from './sterile-processing';

export const allProducts = [
  ...airFiltersProducts,
  ...airCleaningProducts,
  ...hvacSystemsProducts,
  ...laboratoryEquipmentProducts,
  ...laboratoryFurnitureProducts,
  ...productionMachineryProducts,
  ...sterileProcessingProducts
];

// Helper to get products by category
export const getProductsByCategory = (categoryName) => {
  return allProducts.filter(p => p.category === categoryName);
};

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return allProducts.find(p => p.slug === slug);
};
