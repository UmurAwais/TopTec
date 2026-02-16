export const airCleaningProducts = [
  {
    slug: 'laminar-air-flow-pro',
    name: 'Laminar Air Flow Pro',
    category: 'Air Cleaning',
    description: 'Advanced ISO Class 5 laminar flow hood for sterile pharmaceutical compounding.',
    image: '/slider/cleanroom-suit.jpg',
    features: [
      'ISO Class 5 (Class 100) environment',
      'H14 HEPA filtration (99.995% efficiency)',
      'Digital airflow velocity monitoring',
      'Stainless steel 304/316L construction',
      'Low noise centrifugal fans'
    ],
    specs: {
      'Working Area': '1200 x 600 x 600 mm',
      'Filter Type': 'H14 HEPA Filter',
      'Air Velocity': '0.45 m/s ± 20%',
      'Power Supply': '220V / 50Hz',
      'Noise Level': '< 60 dB(A)'
    }
  },
  {
    slug: 'biosafety-cabinet-gen-2',
    name: 'Biosafety Cabinet Gen-2',
    category: 'Air Cleaning',
    description: 'Class II Type A2 cabinet providing personnel, product, and environmental protection.',
    image: '/slider/lab-work.jpg',
    features: [
      'Motorized front window',
      'ULPA filter (99.999% efficiency)',
      'Real-time LCD status display',
      'UV sterilization cycle',
      'Ergonomic 10° tilted front'
    ],
    specs: {
      'Protection Type': 'Class II Type A2',
      'Inflow Velocity': '0.53 m/s',
      'Downflow Velocity': '0.33 m/s',
      'Filters': 'Dual ULPA Filters',
      'Lighting': '> 1000 Lux'
    }
  },
  {
    slug: 'mobile-air-shower',
    name: 'Mobile Air Shower',
    category: 'Air Cleaning',
    description: 'Automated high-velocity air shower for cleanroom entry and exit contamination control.',
    image: '/slider/cleanroom-hall.jpg',
    features: [
      'High velocity nozzles (>25m/s)',
      'HEPA filtered air recirculation',
      'PLC control system with sensors',
      'Interlocking door system',
      'Emergency release buttons'
    ],
    specs: {
      'Material': 'Powder Coated Steel / SS',
      'Nozzles': '12-24 Stainless Steel',
      'Filtration': 'HEPA 99.99%',
      'Noise': '< 65 dB',
      'Timer': '0-99 seconds'
    }
  },
  {
    slug: 'fume-extraction-system',
    name: 'Fume Extraction System',
    category: 'Air Cleaning',
    description: 'High-efficiency extraction system for chemical vapors and laboratory fumes.',
    image: '/slider/lab-microscope.jpg',
    features: [
      'High suction power centrifugal fan',
      'Multi-stage filtration (HEPA + Carbon)',
      'Adjustable extraction arms',
      'Compact and mobile design',
      'Filter saturation indicator'
    ],
    specs: {
      'Suction Flow': '500-1500 m³/h',
      'Static Pressure': '1200 Pa',
      'Motor Power': '0.75 kW',
      'Noise Level': '58 dB',
      'Control': 'Variable Speed'
    }
  },
  {
    slug: 'dynamic-pass-box',
    name: 'Dynamic Pass Box',
    category: 'Air Cleaning',
    description: 'Interlocked transfer hatch with HEPA filtration for material movement.',
    image: '/slider/corridor.jpg',
    features: [
      'Laminar airflow inside chamber',
      'Electromagnetic interlocking doors',
      'UV light for sterilization',
      'Differential pressure gauge',
      'Stainless steel 316 construction'
    ],
    specs: {
      'HEPA Efficiency': '99.99%',
      'Laminar Velocity': '0.45 m/s',
      'UV Source': 'Ultraviolet Germicidal Lamp',
      'Internal Finish': 'Mirror Polished SS 316',
      'Safety': 'Double Door Interlock'
    }
  },
  {
    slug: 'sampling-booth',
    name: 'Sampling Booth',
    category: 'Air Cleaning',
    description: 'Negative pressure booth for safe sampling and weighing of powders.',
    image: '/slider/production.jpg',
    features: [
      'Protection for operator and products',
      'Triple stage filtration (G4, F9, H14)',
      'Side wall cooling (optional)',
      'Explosion-proof components (optional)',
      'PVC curtain or double door entry'
    ],
    specs: {
      'Class': 'ISO Class 5',
      'Velocity': '0.45 ± 0.05 m/s',
      'Pressure Diff': '-10 to -25 Pa',
      'Illumination': '> 500 Lux',
      'Material': 'SS 304 / 316L'
    }
  }
];
