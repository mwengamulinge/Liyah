export type ServiceCategory = 'all' | 'knotless' | 'boho' | 'bobs' | 'stitch' | 'kids' | 'addons';

export interface ServiceSizeOption {
  size: 'Small' | 'Smedium' | 'Medium' | 'Large';
  regularPrice: number;
  salePrice: number;
  estimatedHours: string;
  recommendedFor: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: 'knotless' | 'boho' | 'bobs' | 'stitch' | 'kids' | 'addons';
  tagline: string;
  description: string;
  image: string;
  hairIncluded: boolean;
  startingPrice: number;
  saleStartingPrice?: number;
  badge?: string;
  sizes?: ServiceSizeOption[];
  priceNote?: string;
  popular?: boolean;
  descriptionExtra?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'knotless' | 'boho' | 'bobs' | 'stitch' | 'kids' | 'addons';
  style: string;
  duration: string;
  image: string;
  caption: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  service: string;
  date: string;
  comment: string;
  avatar: string;
  verified: boolean;
}

export interface StudioInfo {
  name: string;
  owner: string;
  tagline: string;
  address: string;
  cityStateZip: string;
  phone: string;
  email: string;
  bookingUrl: string;
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
  hours: {
    day: string;
    time: string;
  }[];
}

export interface BookingFormState {
  serviceId: string;
  serviceName: string;
  size: 'Small' | 'Smedium' | 'Medium' | 'Large' | 'Standard';
  length: 'Mid-Back (Standard)' | 'Waist Length (+$30)' | 'Butt Length (+$50)' | 'Thigh Length (+$80)';
  curlType: 'Standard Synthetic Curl' | '100% Raw Human Hair Curl Blend (+$60)' | 'None';
  travelOption: 'In-Studio (DeSoto, TX)' | 'Mobile Travel (DFW Area - Fee Applies)';
  travelAddress?: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  hairColor: string;
  specialNotes: string;
  agreedToPolicy: boolean;
}
