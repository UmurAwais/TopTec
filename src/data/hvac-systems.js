export const hvacSystemsProducts = [
  {
    slug: 'precision-ahu-connect',
    name: 'Precision AHU Connect',
    category: 'HVAC Systems',
    description: 'Modular air handling units with integrated Siemens controls for precise environment management.',
    image: '/slider/cleanroom-suit.jpg',
    features: [
      'Twin skin thermal bridge-free design',
      'Plug-and-play Siemens control logic',
      'High density PUF insulation',
      'Electronic EC fans for energy saving',
      'Eurovent certified performance'
    ],
    specs: {
      'Static Pressure': 'up to 2500 Pa',
      'Airflow Range': '2000 - 80000 m³/h',
      'Panel Thickness': '25mm / 50mm',
      'Fan Type': 'EC Plug Fan / DIDW',
      'Filter Stages': 'G4 + F9 + H13'
    }
  },
  {
    slug: 'silent-stream-chiller',
    name: 'Silent Stream Chiller',
    category: 'HVAC Systems',
    description: 'Pharmaceutical-grade water-cooled chillers with ultra-quiet operation and high COP.',
    image: '/slider/cleanroom-hall.jpg',
    features: [
      'Semi-hermetic screw compressors',
      'BMS integration via Modbus/BACnet',
      'Low noise acoustic enclosure',
      'Precision temperature control ±0.5°C',
      'Environment friendly R134a refrigerant'
    ],
    specs: {
      'Cooling Capacity': '100 - 1500 kW',
      'Refrigerant': 'R134a / R410A',
      'COP': 'up to 5.8',
      'Control Range': '5°C to 15°C',
      'Power': '380-415V / 3Ph / 50Hz'
    }
  },
  {
    slug: 'humidiguard-pro',
    name: 'Humidiguard Pro',
    category: 'HVAC Systems',
    description: 'Advanced steam humidifiers with precise microprocessor control for tight RH tolerances.',
    image: '/slider/lab-work.jpg',
    features: [
      'Electrode steam generation',
      'Auto-drain for scale management',
      'External signal control (0-10V)',
      'Replaceable steam cylinders',
      'Integrated LCD diagnostic panel'
    ],
    specs: {
      'Steam Output': '1.5 - 65 kg/h',
      'Control Precision': '± 2% RH',
      'Cylinder life': 'up to 3000 hours',
      'Cabinet': 'IP54 Stainless Steel',
      'Water Type': 'Potable / Demineralized'
    }
  },
  {
    slug: 'variable-flow-vav-box',
    name: 'Variable Flow VAV Box',
    category: 'HVAC Systems',
    description: 'Energy-efficient air distribution boxes for dynamic room pressurization control.',
    image: '/slider/corridor.jpg',
    features: [
      'Digital airflow sensor technology',
      'Acoustic insulation lining',
      'Low leakage damper blades',
      'Pressure independent operation',
      'Factory calibrated for precision'
    ],
    specs: {
      'Inlet sizes': '100 - 400 mm',
      'Capacity': '100 - 5000 m³/h',
      'Housing': 'Galvanized Steel',
      'Insulation': 'Fiberglass / Neoprene',
      'Control': 'Belimo / Siemens Actuator'
    }
  },
  {
    slug: 'dehumidification-ahu',
    name: 'Dehumidification AHU',
    category: 'HVAC Systems',
    description: 'Desiccant cooling systems for moisture-sensitive manufacturing areas.',
    image: '/slider/production.jpg',
    features: [
      'Silica gel desiccant rotor',
      'Integrated regeneration heater',
      'Dew point control to -40°C',
      'Heat recovery bypass system',
      'Compact modular construction'
    ],
    specs: {
      'Moisture Removal': 'up to 500 kg/h',
      'Rotor Origin': 'Proflute / Sweden',
      'Efficiency': 'High sorption capacity',
      'Heating Source': 'Electric / Steam / Gas',
      'Application': 'Oral Solid Dosage Rooms'
    }
  },
  {
    slug: 'digital-bms-controller',
    name: 'Digital BMS Controller',
    category: 'HVAC Systems',
    description: 'Integrated building management system for HVAC validation and monitoring.',
    image: '/slider/lab-microscope.jpg',
    features: [
      'Real-time data logging & reporting',
      '21 CFR Part 11 compliant software',
      'Remote monitoring via web server',
      'Custom alarm notification system',
      'Modular I/O for future expansion'
    ],
    specs: {
      'Processor': 'Dual-core ARM Cortex',
      'Interface': 'RS485 / Ethernet / WiFi',
      'Display': '10" Industrial Touchscreen',
      'Compliance': 'GAMP 5 / FDA',
      'Backup': 'UPS Integrated'
    }
  }
];
