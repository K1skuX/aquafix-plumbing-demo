export type PlumbingServiceId =
  | 'leak-repairs'
  | 'tap-installation'
  | 'drain-cleaning'
  | 'pipe-repairs'
  | 'water-heater-installation'
  | 'general-inquiry';

export interface PlumbingService {
  id: PlumbingServiceId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  timeEstimate: string;
  priceNote: string;
  image: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  neighborhood: string;
  serviceReceived: string;
  quote: string;
  timeframe: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface QuoteFormData {
  fullName: string;
  phoneNumber: string;
  service: PlumbingServiceId;
  urgency: 'routine' | 'next-day' | 'urgent';
  message: string;
}
