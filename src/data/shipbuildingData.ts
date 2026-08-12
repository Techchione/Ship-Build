import shipConstructionImg from '../assets/images/ship_construction_1786560124139.jpg';
import containerShipImg from '../assets/images/container_ship_sea_1786560133831.jpg';
import marineEngineersImg from '../assets/images/marine_engineers_1786560142491.jpg';
import shipyardCranesImg from '../assets/images/shipyard_cranes_1786560152474.jpg';
import shipyardFacilityImg from '../assets/images/shipyard_facility_1786560162893.jpg';

import { HeroSlide, ServiceItem, StatItem, Certification } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    image: shipConstructionImg,
    title: 'BUILDING THE FUTURE OF MARITIME',
    subtitle: 'Engineering and constructing reliable vessels with precision, innovation, and uncompromising quality.',
    category: 'Commercial & Defense Shipbuilding',
    location: 'Primary Heavy Basin Drydock 01'
  },
  {
    id: 'slide-2',
    image: containerShipImg,
    title: 'GLOBAL OCEAN TRANSPORT SOLUTIONS',
    subtitle: 'Designing fuel-efficient, high-capacity cargo container ships and LNG-powered transport vessels.',
    category: 'Ocean Freight Vessels',
    location: 'Deep Sea Sea-Trials'
  },
  {
    id: 'slide-3',
    image: marineEngineersImg,
    title: 'ADVANCED MARINE ENGINEERING',
    subtitle: 'Next-generation naval architecture, hydrodynamics, and sustainable propulsion systems.',
    category: 'Naval Engineering & R&D',
    location: 'Shipyard Innovation Lab'
  },
  {
    id: 'slide-4',
    image: shipyardCranesImg,
    title: 'STATE-OF-THE-ART SHIPYARD FACILITIES',
    subtitle: 'Equipped with 900T gantry cranes, automated laser welding, and climate-controlled assembly bays.',
    category: 'Heavy Industrial Fabrication',
    location: 'Oceanic Docklands Facility'
  }
];

export const ABOUT_IMAGE = shipyardFacilityImg;

export const COMPANY_STATS: StatItem[] = [
  {
    value: '38+',
    label: 'Years of Excellence',
    description: 'Leading global shipbuilding and drydock services since 1988'
  },
  {
    value: '420+',
    label: 'Vessels Built & Delivered',
    description: 'Commercial tankers, tugs, cargo, and specialized offshore vessels'
  },
  {
    value: '180,000T',
    label: 'Annual Steel Capacity',
    description: 'Automated plasma cutting and robotic block welding technology'
  },
  {
    value: '100%',
    label: 'Classification Rate',
    description: 'Fully compliant with DNV, Lloyd’s Register, ABS, and Bureau Veritas'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'DNV GL Certified',
    code: 'DNV-ST-0145',
    description: 'Global standard for naval architecture and offshore hull structures'
  },
  {
    name: 'Lloyd\'s Register',
    code: 'LR-QA-9001',
    description: 'Quality assurance in commercial vessel construction & retrofitting'
  },
  {
    name: 'American Bureau of Shipping',
    code: 'ABS-MODU-2024',
    description: 'Classed design for offshore drilling and support vessel fabrication'
  },
  {
    name: 'ISO 14001 & 45001',
    code: 'ISO-EHS-SAFETY',
    description: 'Environmental management and occupational health & safety excellence'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'shipbuilding',
    title: 'Shipbuilding & Construction',
    iconName: 'Ship',
    shortDescription: 'Turnkey construction of commercial cargo vessels, container ships, oil tankers, research ships, and specialized tugboats.',
    fullDescription: 'Our state-of-the-art shipyard builds vessels up to 250 meters in length using modular block construction techniques. From steel plate cutting to final sea trials, we ensure exceptional structural integrity and hydrodynamic performance.',
    features: [
      'Commercial Cargo & Container Ships',
      'Oil, Chemical & LNG Gas Tankers',
      'Harbor & Ocean-Going Tugboats',
      'Naval Auxiliary & Patrol Crafts',
      'Research & Survey Vessels'
    ],
    specs: [
      { label: 'Max Length (LOA)', value: '280 meters' },
      { label: 'Max Beam', value: '42 meters' },
      { label: 'Docking Capacity', value: '120,000 DWT' },
      { label: 'Annual Build Capacity', value: '12 Major Hull Blocks' }
    ],
    tag: 'Construction',
    image: shipConstructionImg
  },
  {
    id: 'marine-engineering',
    title: 'Marine Engineering',
    iconName: 'Compass',
    shortDescription: 'Advanced naval architecture, computational fluid dynamics (CFD), structural analysis, and hybrid propulsion design.',
    fullDescription: 'Our team of marine engineers and naval architects utilize 3D parametric modeling and hydrodynamic simulation tools to engineer high-efficiency hull forms and low-emission dual-fuel engines.',
    features: [
      'Computational Fluid Dynamics (CFD)',
      'Dual-Fuel & Hybrid Electric Retrofits',
      'Finite Element Analysis (FEA)',
      'Propulsion & Shaft Line Alignment',
      'Vessel Noise & Vibration Control'
    ],
    specs: [
      { label: 'Software Suite', value: 'NAPA, AVEVA Marine, ANSYS' },
      { label: 'Efficiency Gain', value: 'Up to 18% Fuel Savings' },
      { label: 'Propulsion Options', value: 'LNG, Ammonia, Electric, Diesel' }
    ],
    tag: 'Engineering',
    image: marineEngineersImg
  },
  {
    id: 'ship-repair',
    title: 'Ship Repair & Maintenance',
    iconName: 'Wrench',
    shortDescription: '24/7 drydock overhaul, hull surface treatment, engine reconditioning, propeller balancing, and emergency voyage repairs.',
    fullDescription: 'We operate two large floating drydocks and a graving dock equipped with high-pressure hydro-blasting and robotic painting systems to restore vessels to optimal operating efficiency with minimal downtime.',
    features: [
      'Drydocking & Bottom Hull Painting',
      'Main Engine Overhaul & Reconditioning',
      'Propeller & Rudder Shaft Repairs',
      'Pipe Work & Valve Replacement',
      'Emergency 24/7 Voyage Repair Squads'
    ],
    specs: [
      { label: 'Graving Dock Size', value: '300m x 48m' },
      { label: 'Floating Drydock', value: '25,000 Ton Lifting Power' },
      { label: 'Turnaround Time', value: 'Express 7-14 Day Drydocking' }
    ],
    tag: 'Maintenance',
    image: shipyardFacilityImg
  },
  {
    id: 'steel-fabrication',
    title: 'Steel Fabrication',
    iconName: 'ShieldAlert',
    shortDescription: 'High-precision heavy steel structure fabrication, automated CNC plasma cutting, robotic welding, and modular block assembly.',
    fullDescription: 'Equipped with heavy plate bending rollers, automatic sub-arc welding stations, and 900T overhead gantry cranes, our fabrication shop handles thick marine grade steel and specialized aluminum alloys.',
    features: [
      'Modular Hull Block Assembly',
      'CNC Underwater Plasma & Fiber Laser Cutting',
      'Submerged Arc Automated Welding (SAW)',
      'Pressure Vessel & Piping Systems',
      'High-Tensile Steel & Aluminum Alloys'
    ],
    specs: [
      { label: 'Plate Cutting Thickness', value: 'Up to 120mm Steel' },
      { label: 'Monthly Steel Throughput', value: '15,000 Tons' },
      { label: 'Welding Standards', value: 'AWS D1.1, ISO 3834-2' }
    ],
    tag: 'Fabrication',
    image: shipyardCranesImg
  },
  {
    id: 'vessel-design',
    title: 'Vessel Design & Engineering',
    iconName: 'DraftingCompass',
    shortDescription: 'Custom conceptual design, class approval drawing packages, stability book calculations, and digital twin creation.',
    fullDescription: 'From initial concept sketches to detailed manufacturing shop drawings, our design bureau delivers class-certified blueprints customized to shipowner operational routes and cargo specifications.',
    features: [
      'Concept & Detailed Design Packages',
      'Intact & Damage Stability Calculations',
      '3D Piping & Cable Tray Routing',
      'Class Society Approval Documentation',
      'Digital Twin & Hull Lifecycle Modeling'
    ],
    specs: [
      { label: 'Class Approvals', value: 'ABS, DNV, LR, BV, RINA' },
      { label: 'Design Precision', value: 'Sub-millimeter 3D Scanning' },
      { label: 'Deliverables', value: 'Full 3D CAD / Production Nesting' }
    ],
    tag: 'Design',
    image: containerShipImg
  },
  {
    id: 'offshore-solutions',
    title: 'Offshore & Marine Solutions',
    iconName: 'Anchor',
    shortDescription: 'Manufacturing and fitting of offshore support structures, FPSO topsides, subsea manifolds, and offshore wind installation barges.',
    fullDescription: 'Supporting the offshore energy sector with heavy marine construction, wind turbine installation vessel (WTIV) conversions, subsea template fabrication, and mooring equipment integration.',
    features: [
      'Offshore Wind Installation Sub-structures',
      'FPSO & FSRU Topside Module Fabrication',
      'Subsea Pipe Structures & Manifolds',
      'Dynamic Positioning (DP2/DP3) Integration',
      'Offshore Crane & A-Frame Assembly'
    ],
    specs: [
      { label: 'Max Lifting Weight', value: '1,200 Tons Single Module' },
      { label: 'Offshore Rating', value: 'North Sea & Deepwater Proven' },
      { label: 'Coating Protection', value: 'NORSOK M-501 System 1' }
    ],
    tag: 'Offshore',
    image: shipyardCranesImg
  }
];

export const COMPANY_INFO = {
  name: 'Oceanic Marine Shipbuilding & Engineering Co.',
  tagline: 'Precision Marine Engineering & International Vessel Construction',
  established: 1988,
  address: 'Oceanic Drydock Complex, Pier 14 - Maritime Industrial Hub, Port District 4082',
  phone: '+1 (800) 555-SHIP / +1 (888) 927-4632',
  emergencyPhone: '+1 (800) 911-DOCK (24/7 Emergency Repairs)',
  email: 'inquiries@oceanicmarineshipbuilding.com',
  hours: 'Monday - Friday: 07:00 - 19:00 EST | Drydock Repairs: 24/7 Operations',
  locations: [
    { city: 'North America Hub', desc: 'Main Construction Basin & 300m Drydock' },
    { city: 'European Marine Yard', desc: 'Offshore Wind & Repair Terminal' },
    { city: 'Asia-Pacific Docklands', desc: 'Component Fabrication & Engineering Office' }
  ]
};
