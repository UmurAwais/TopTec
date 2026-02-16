import React from 'react';
import CategoryPage from '../CategoryPage';
import { Building2 } from 'lucide-react';

const LaboratoryFurniture = () => {
  const subcategories = [
    { name: 'Employees Lockers', href: '/furniture/employees-lockers' },
    { name: 'Stainless Steel Lockers', href: '/furniture/ss-lockers' },
    { name: 'Cupboards', href: '/furniture/cupboards' },
    { name: 'Wall Cabinets', href: '/furniture/wall-cabinets' },
    { name: 'Garment Storage Cabinets', href: '/furniture/garment-storage' },
    { name: 'Chemical / Safety Cabinets', href: '/furniture/safety-cabinets' },
    { name: 'Workstations & Tables', href: '/furniture/workstations' },
    { name: 'I-Shape Laboratory Tables', href: '/furniture/i-shape-tables' },
    { name: 'L-Shape Laboratory Tables', href: '/furniture/l-shape-tables' },
    { name: 'Continues / Modular Lab Benches', href: '/furniture/modular-benches' },
    { name: 'Central / Island Work Tables', href: '/furniture/island-tables' },
    { name: 'Designing / Drafting Tables', href: '/furniture/drafting-tables' },
    { name: 'Ss Working Tables', href: '/furniture/ss-working-tables' },
    { name: 'Stainless Steel Sinks', href: '/furniture/ss-sinks' },
    { name: 'Hand Wash Stations', href: '/furniture/hand-wash' },
    { name: 'Eye Wash / Safety Shower', href: '/furniture/safety-shower' },
    { name: 'Stainless Steel Stools', href: '/furniture/ss-stools' },
    { name: 'Stainless Steel Chairs', href: '/furniture/ss-chairs' },
    { name: 'Stainless Steel Trolleys', href: '/furniture/ss-trolleys' },
  ];

  const products = [
    { name: 'Ergo-Flow Workbench', description: 'Heavy-duty SS 304 workbench with integrated power strips and ergonomic height adjustment.', image: '/slider/lab-work.jpg' },
    { name: 'Safe-Store Chemical Unit', description: 'Ducted fire-resistant cabinet for secure storage of hazardous laboratory chemicals.', image: '/slider/cleanroom-suit.jpg' },
    { name: 'Modular Island Station', description: 'Double-sided island benching system with overhead reagent shelving and services.', image: '/slider/lab-microscope.jpg' },
    { name: 'Clean-Sweep Mobile Cart', description: 'Stainless steel mobile equipment cart with anti-static medical grade casters.', image: '/slider/cleanroom-hall.jpg' },
    { name: 'Anti-Vibration Table', description: 'Granite-surface table for high-precision analytical weighing balance.', image: '/slider/production.jpg' },
    { name: 'Pass-Through Cabinet', description: 'Stainless steel wall-mounted cabinet for aseptic material transfer.', image: '/slider/corridor.jpg' },
  ];

  return (
    <CategoryPage 
      title="Laboratory Furniture"
      description="SS 316L stainless steel workbenches, chemical-resistant lab tables, and modular storage systems for pharmaceutical QC laboratories."
      icon={<Building2 size={32} />}
      image="/slider/lab-work.jpg"
      subcategories={subcategories}
      products={products}
    />
  );
};

export default LaboratoryFurniture;
