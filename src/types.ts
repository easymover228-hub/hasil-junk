export type ServiceCategory = 'all' | 'residential' | 'commercial' | 'specialty';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'specialty';
  description: string;
  iconName: string;
  image: string;
  commonItems: string[];
  popular?: boolean;
  crewSpec: string;
}

export interface FeatureSlideItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  category: string;
  metrics: string;
  highlights: string[];
  whatsappMessage: string;
}

export interface TruckTier {
  id: string;
  name: string;
  fraction: string;
  percentage: number;
  cubicFeet: number;
  pickupLoads: string;
  crewTime: string;
  idealFor: string;
  examples: string[];
}

export interface QuickCalcItem {
  id: string;
  name: string;
  category: string;
  volumeUnits: number; // approximate cubic feet in 3D truck bed
  icon: string;
  color3D: string;
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  location: string;
  timeSpent: string;
  itemsRemoved: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  role: string;
  city: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface BookingFormData {
  serviceType: string;
  loadEstimate: string;
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  zipCode: string;
  notes: string;
  photos: { name: string; size: number; url?: string }[];
}
