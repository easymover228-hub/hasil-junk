import { ServiceItem, TruckTier, QuickCalcItem, BeforeAfterProject, CustomerReview, FaqItem } from '../types';
import heroTeamImg from '../assets/images/hero_male_team_jeddah_1791764441853.jpg';
import heroTruckCleanImg from '../assets/images/real_hero_truck_clean_1791762925559.jpg';
import furnitureMovingImg from '../assets/images/feature_furniture_appliance_1791727381470.jpg';
import applianceHaulingImg from '../assets/images/real_appliance_hauling_1791762935382.jpg';
import garageCleanoutImg from '../assets/images/real_garage_cleanout_1791762944907.jpg';
import commercialOfficeImg from '../assets/images/feature_commercial_office_1791727396739.jpg';
import constructionDebrisImg from '../assets/images/feature_construction_demolition_1791727406337.jpg';
import shedDemolitionImg from '../assets/images/real_shed_demolition_1791762967052.jpg';
import yardStormWasteImg from '../assets/images/real_yard_storm_waste_1791762955786.jpg';
import ecoRecyclingImg from '../assets/images/feature_eco_recycling_1791727419535.jpg';
import propertyCleanoutImg from '../assets/images/feature_property_cleanout_1791727435515.jpg';

export const REAL_IMAGES = {
  heroTeam: heroTeamImg,
  heroTruckClean: heroTruckCleanImg,
  furnitureMoving: furnitureMovingImg,
  applianceHauling: applianceHaulingImg,
  garageCleanout: garageCleanoutImg,
  commercialOffice: commercialOfficeImg,
  constructionDebris: constructionDebrisImg,
  shedDemolition: shedDemolitionImg,
  yardStormWaste: yardStormWasteImg,
  ecoRecycling: ecoRecyclingImg,
  propertyCleanout: propertyCleanoutImg,
};

// Preload all compressed images in the background so transitions & scrolling are instant
if (typeof window !== 'undefined') {
  Object.values(REAL_IMAGES).forEach((src) => {
    const img = new Image();
    img.decoding = 'async';
    img.src = src;
  });
}

export const BUSINESS_INFO = {
  name: 'Jeddah Junk Removal Service',
  tagline: 'Same-Day Hauling, Villa & Apartment Cleanouts Across Jeddah',
  phone: '0575771358',
  phoneClean: '0575771358',
  whatsapp: '0575771358',
  whatsappInternational: '966575771358',
  email: 'info@jeddahjunkremoval.com',
  hours: 'Saturday – Friday: 7:00 AM – 10:00 PM',
  sameDayCutoff: 'Book or WhatsApp by 2:00 PM for Guaranteed Same-Day Service in Jeddah',
  stats: [
    { label: 'Tons Diverted & Recycled in Jeddah', value: '4,500+' },
    { label: 'Villas, Apartments & Offices Cleared', value: '18,200+' },
    { label: 'On-Time 2-Hour Window Arrival Rate', value: '98.6%' },
    { label: 'Verified Client Satisfaction Rating', value: '4.9 / 5.0' },
  ],
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = 'Assalam o Alaikum! I need Jeddah Junk Removal Service (0575771358). Please share availability.';
  const encoded = encodeURIComponent(customMessage || defaultMsg);
  return `https://api.whatsapp.com/send?phone=966575771358&text=${encoded}`;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'furniture-removal',
    title: '01. Furniture & Majlis Removal',
    category: 'residential',
    description: 'Old sofas, Arabic majlis sets, sectionals, wardrobes, mattresses, and bed frames safely dismantled and carried out without scratching walls or floors.',
    iconName: 'Armchair',
    image: REAL_IMAGES.furnitureMoving,
    commonItems: ['Sofas & Majlis Sets', 'King/Queen Mattresses', 'Dining Tables & Chairs', 'Wardrobes & Dressers', 'Home Office Desks'],
    popular: true,
    crewSpec: '2-Man Padded Dolly Team · Wall & Floor Protection',
  },
  {
    id: 'appliance-disposal',
    title: '02. Heavy Appliance Hauling',
    category: 'residential',
    description: 'Commercial-grade lifting for refrigerators, deep freezers, washing machines, dryers, ovens, dishwashers, and split/window AC units across Jeddah.',
    iconName: 'Refrigerator',
    image: REAL_IMAGES.applianceHauling,
    commonItems: ['Refrigerators & Freezers', 'Washers & Dryers', 'Ovens & Stoves', 'Water Heaters', 'Split & Window AC Units'],
    popular: true,
    crewSpec: 'Heavy-Duty Appliance Straps · Safe Disconnection',
  },
  {
    id: 'cleanouts',
    title: '03. Full Villa & Apartment Cleanouts',
    category: 'residential',
    description: 'End-to-end cleanouts for villas, apartments, garages, rooftops, and storage rooms across Jeddah with a complete broom-swept finish.',
    iconName: 'Home',
    image: REAL_IMAGES.garageCleanout,
    commonItems: ['Full Villa Clearances', 'Apartment Move-Out Hauls', 'Garage & Rooftop Cleanouts', 'Storage Room Decluttering', 'Family Estate Sorting'],
    popular: true,
    crewSpec: '16ft High-Capacity Hauler · Broom-Sweep Finish',
  },
  {
    id: 'commercial-liquidation',
    title: '04. Commercial & Office Liquidation',
    category: 'commercial',
    description: 'Rapid off-hours clearance for corporate offices, retail showrooms, and warehouses in Jeddah—including cubicles, conference tables, shelving, and IT racks.',
    iconName: 'Building2',
    image: REAL_IMAGES.commercialOffice,
    commonItems: ['Workstations & Cubicles', 'Conference Room Tables', 'Retail Showroom Fixtures', 'Warehouse Pallets & Racks', 'Filing Cabinets'],
    popular: true,
    crewSpec: 'After-Hours & Weekend Fleet · Elevator Protection Pads',
  },
  {
    id: 'construction-debris',
    title: '05. Construction & Renovation Debris',
    category: 'specialty',
    description: 'Fast job-site clearing for contractors and villa renovations: gypsum board, timber, ceramic tiles, cabinetry tear-outs, carpet rolls, and masonry rubble.',
    iconName: 'HardHat',
    image: REAL_IMAGES.constructionDebris,
    commonItems: ['Gypsum & Drywall', 'Timber & Framing Scrap', 'Flooring, Tile & Marble', 'Kitchen & Bath Tear-Outs', 'Carpet & Padding Rolls'],
    crewSpec: 'Reinforced Steel Dump Bed · Same-Day Contractor Dispatch',
  },
  {
    id: 'light-demolition',
    title: '06. Light Demolition & Outdoor Structures',
    category: 'specialty',
    description: 'Controlled dismantling and complete haul-away of old outdoor sheds, pergolas, wooden decks, partitions, fencing, and courtyard structures.',
    iconName: 'Hammer',
    image: REAL_IMAGES.shedDemolition,
    commonItems: ['Outdoor Sheds & Pergolas', 'Wooden Decks & Partitions', 'Courtyard Structures', 'Fencing & Gates', 'Rooftop Enclosures'],
    crewSpec: 'Full Dismantling Tools · Magnetic Nail-Sweep Guarantee',
  },
  {
    id: 'yard-waste',
    title: '07. Green Garden Waste & Palm Cleanup',
    category: 'residential',
    description: 'Palm fronds, tree branches, landscaping trimmings, old planters, soil bags, and villa garden clutter hauled directly to organic mulching hubs.',
    iconName: 'Trees',
    image: REAL_IMAGES.yardStormWaste,
    commonItems: ['Palm Fronds & Tree Limbs', 'Garden Brush Piles', 'Old Patio Furniture', 'Timber Planters & Pots', 'Outdoor Yard Debris'],
    crewSpec: 'Organic Mulch Routing · Driveway Sweep-Up',
  },
  {
    id: 'e-waste',
    title: '08. E-Waste & Certified Recycling',
    category: 'commercial',
    description: 'Responsible disposal for televisions, desktop computers, server racks, printers, copiers, and commercial electronics at certified facilities.',
    iconName: 'Tv',
    image: REAL_IMAGES.ecoRecycling,
    commonItems: ['LED, Plasma & Smart TVs', 'Office Computers & Monitors', 'Commercial Copiers & Printers', 'Server Racks & UPS Units', 'Cables & Telecom Gear'],
    crewSpec: 'Certified Transfer Center · Eco-Friendly Sorting',
  },
];

export const TRUCK_TIERS: TruckTier[] = [
  {
    id: 'min-load',
    name: 'Single Item / Mini Load',
    fraction: '1/8 Truck',
    percentage: 12.5,
    cubicFeet: 55,
    pickupLoads: 'Equivalent to 1 standard pickup bed',
    crewTime: '15 – 20 Mins Loading Time',
    idealFor: '1 to 3 bulky items or a compact stack of moving boxes',
    examples: ['1 Sofa or Majlis Piece', '1 Refrigerator or Washer', '1 King Mattress & Frame', '6–8 Packed Moving Boxes'],
  },
  {
    id: 'quarter-load',
    name: 'Quarter Truck Load',
    fraction: '1/4 Truck',
    percentage: 25,
    cubicFeet: 115,
    pickupLoads: 'Equivalent to 2 standard pickup beds',
    crewTime: '25 – 35 Mins Loading Time',
    idealFor: 'Single room declutter or small balcony/patio clearance',
    examples: ['Sofa + Coffee Table + TV Stand', 'Small Bedroom Furniture Set', '12–16 Moving Boxes & Bags', 'Bathroom Remodel Debris'],
  },
  {
    id: 'half-load',
    name: 'Half Truck Load',
    fraction: '1/2 Truck',
    percentage: 50,
    cubicFeet: 225,
    pickupLoads: 'Equivalent to 4 standard pickup beds',
    crewTime: '45 – 60 Mins Loading Time',
    idealFor: 'Garage cleanout or full apartment move-out in Jeddah',
    examples: ['Complete Living Room Set', 'Villa Garage Clutter & Racks', 'Office Cubicles & 6 Chairs', 'Kitchen Renovation Cabinets'],
  },
  {
    id: 'three-quarter-load',
    name: 'Three-Quarter Load',
    fraction: '3/4 Truck',
    percentage: 75,
    cubicFeet: 340,
    pickupLoads: 'Equivalent to 6 standard pickup beds',
    crewTime: '60 – 90 Mins Loading Time',
    idealFor: 'Multi-room villa cleanout or large commercial renovation',
    examples: ['2-Car Garage Full Overhaul', 'Multi-Bedroom Furniture & Appliances', 'Retail Shop Fixture Strip-Out', 'Large Shed Demolition Debris'],
  },
  {
    id: 'full-load',
    name: 'Full 16ft Box Truck',
    fraction: 'Full Truck',
    percentage: 100,
    cubicFeet: 450,
    pickupLoads: 'Equivalent to 8 standard pickup beds (450 cu.ft.)',
    crewTime: '90 – 120 Mins Loading Time',
    idealFor: 'Complete villa liquidation, warehouse clearance, or major cleanout',
    examples: ['Entire Villa / Home Contents', 'Commercial Floor Liquidation', 'Heavy Construction Site Haul', 'Full Storage Facility Clearance'],
  },
];

export const QUICK_CALC_ITEMS: QuickCalcItem[] = [
  { id: 'sofa', name: '3-Seater Sofa / Majlis', category: 'Furniture', volumeUnits: 35, icon: 'Sofa', color3D: '#10b981' },
  { id: 'sectional', name: 'L-Shape Sectional Sofa', category: 'Furniture', volumeUnits: 70, icon: 'Sofa', color3D: '#059669' },
  { id: 'mattress', name: 'King Mattress & Bed Frame', category: 'Furniture', volumeUnits: 30, icon: 'Bed', color3D: '#3b82f6' },
  { id: 'dining-table', name: 'Dining Table & 6 Chairs', category: 'Furniture', volumeUnits: 45, icon: 'Utensils', color3D: '#f59e0b' },
  { id: 'refrigerator', name: 'Double-Door Refrigerator', category: 'Appliances', volumeUnits: 40, icon: 'Refrigerator', color3D: '#64748b' },
  { id: 'washer-dryer', name: 'Washer & Dryer Pair', category: 'Appliances', volumeUnits: 35, icon: 'WashingMachine', color3D: '#475569' },
  { id: 'office-desk', name: 'Executive Office Desk & Chair', category: 'Commercial', volumeUnits: 40, icon: 'Building2', color3D: '#8b5cf6' },
  { id: 'tv-electronics', name: 'Large Screen TV & Media Unit', category: 'Electronics', volumeUnits: 20, icon: 'Tv', color3D: '#06b6d4' },
  { id: 'treadmill', name: 'Treadmill / Home Gym Rig', category: 'Heavy Gear', volumeUnits: 45, icon: 'Dumbbell', color3D: '#ec4899' },
  { id: 'debris-load', name: 'Renovation Debris (10 Bags)', category: 'Construction', volumeUnits: 50, icon: 'Layers', color3D: '#d97706' },
  { id: 'boxes-stack', name: 'Stack of 10 Storage Boxes', category: 'Boxes', volumeUnits: 25, icon: 'Box', color3D: '#eab308' },
  { id: 'shed-demo', name: 'Outdoor Shed / Pergola Debris', category: 'Demolition', volumeUnits: 110, icon: 'Hammer', color3D: '#ef4444' },
];

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: 'proj-1',
    title: '2-Car Villa Garage Overhaul',
    location: 'Al Rawdah District, Jeddah',
    timeSpent: '2 Hours 15 Mins',
    itemsRemoved: 'Accumulated cartons, old appliances, broken workbenches & scrap timber',
    beforeImage: REAL_IMAGES.constructionDebris,
    afterImage: REAL_IMAGES.garageCleanout,
    description: 'The villa owner could not park vehicles inside for years. Our 2-man crew sorted recyclable metals, loaded 340 cubic feet of clutter, and swept the concrete floor spotless.',
  },
  {
    id: 'proj-2',
    title: 'Courtyard Shed & Garden Debris Clearance',
    location: 'Obhur Al Shamaliyah, Jeddah',
    timeSpent: '1 Hour 50 Mins',
    itemsRemoved: 'Weathered wooden shed, broken deck planks, and overgrown palm fronds',
    beforeImage: REAL_IMAGES.shedDemolition,
    afterImage: REAL_IMAGES.yardStormWaste,
    description: 'Dismantled an old timber shed and cleared palm branches in a single afternoon, leaving the villa garden neat and ready for new landscaping.',
  },
  {
    id: 'proj-3',
    title: 'Full Living Room & Heavy Appliance Haul',
    location: 'Al Salamah District, Jeddah',
    timeSpent: '1 Hour 20 Mins',
    itemsRemoved: 'Oversized sofa, washer & dryer stack, stainless refrigerator & old furniture',
    beforeImage: REAL_IMAGES.applianceHauling,
    afterImage: REAL_IMAGES.heroTruckClean,
    description: 'Dispatched within 90 minutes of a WhatsApp photo message to 0575771358. Heavy items were removed via padded dollies with zero marks on floors.',
  },
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Tariq Al-Mansoor',
    role: 'Villa Homeowner, Al Rawdah, Jeddah',
    city: 'Al Rawdah, Jeddah',
    rating: 5,
    date: '2 days ago',
    service: 'Full Villa Garage & Furniture Cleanout',
    comment: 'I sent photos of our packed villa garage on WhatsApp to 0575771358 at 9:00 AM, and the Jeddah Junk Removal Service crew arrived at 11:30 AM the same morning. They cleared out old furniture and renovation scrap in two hours and swept the entire floor clean.',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Faisal Al-Harbi',
    role: 'Operations Manager, Tahlia Commercial Tower',
    city: 'Al Andalus, Jeddah',
    rating: 5,
    date: '1 week ago',
    service: 'Commercial Office Liquidation (18 Workstations)',
    comment: 'We needed an entire office floor cleared on Tahlia Street before our lease handover. The crew brought flatbed dollies, protected every glass hallway, and completed the entire haul in one afternoon.',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Khalid & Nadia Siddiqui',
    role: 'Property Owners, Al Salamah, Jeddah',
    city: 'Al Salamah, Jeddah',
    rating: 5,
    date: '2 weeks ago',
    service: 'Heavy Appliance & Majlis Removal',
    comment: 'Moving a double-door refrigerator, old split AC units, and a large majlis set down a tight staircase is no joke. Their two-man uniformed team used heavy-duty lifting straps, didn’t touch a single wall, and loaded the truck in under 30 minutes.',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Eng. Omar Al-Zahrani',
    role: 'Renovation Contractor, Obhur, Jeddah',
    city: 'Obhur, Jeddah',
    rating: 5,
    date: '3 weeks ago',
    service: 'Construction Debris & Timber Hauling',
    comment: 'Whenever we finish a villa kitchen or bathroom renovation in Jeddah, we message 0575771358 on WhatsApp and their dump truck clears all the tiles, gypsum, and wood the same afternoon.',
    verified: true,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How do I get a fast quote from Jeddah Junk Removal Service?',
    category: 'Instant Quotes',
    answer: 'Simply send a quick photo or short video of the items you need removed to our WhatsApp at 0575771358, or select your approximate truck volume online. Our Jeddah dispatch team responds within minutes with availability and a free, no-obligation on-site quote.',
  },
  {
    question: 'Do you offer same-day junk removal across all Jeddah districts?',
    category: 'Same-Day Dispatch',
    answer: 'Yes! We keep dedicated 16-foot hauling trucks stationed across North, Central, and South Jeddah (including Al Rawdah, Al Salamah, Al Hamra, Obhur, Al Zahra, Al Nahdah, and Al Bawadi). Contact us on WhatsApp at 0575771358 for guaranteed same-day pickup.',
  },
  {
    question: 'Do I need to carry heavy furniture downstairs before the truck arrives?',
    category: 'Full-Service Labor',
    answer: 'Not at all. Every booking includes our two-person uniformed crew, padded dollies, lifting straps, and dismantling tools. Whether your items are in an upper-floor apartment, villa rooftop, or garage, we handle 100% of the lifting, dismantling, loading, and final broom sweep-up.',
  },
  {
    question: 'What types of items can you haul away?',
    category: 'Accepted Items',
    answer: 'We take almost anything non-hazardous that two people can lift: sofas, Arabic majlis sets, mattresses, beds, wardrobes, refrigerators, washers, AC units, TVs, office desks, gym equipment, garden branches, renovation drywall, wood, tiles, and general clutter.',
  },
  {
    question: 'What happens to usable furniture and appliances after pickup?',
    category: 'Eco-Recycling',
    answer: 'We operate a strict Donation & Recycling First workflow in Jeddah. Up to 70% of collected volume is diverted away from landfills. Clean, usable furniture is donated to local charities, and scrap metal, appliances, and electronics go to certified recovery facilities.',
  },
  {
    question: 'Are your crews and trucks fully licensed and insured?',
    category: 'Safety & Protection',
    answer: 'Yes, 100%. Our fleet and crew members carry comprehensive commercial liability and property protection coverage. We use floor runners, padded hand trucks, and doorjamb protectors on every villa, apartment, and office job in Jeddah.',
  },
];
