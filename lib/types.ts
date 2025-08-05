export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface NavigationItem {
  id: string;
  title: string;
  href: string;
  children?: NavigationItem[];
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  socialLinks: {
    yelp?: string;
    houzz?: string;
  };
}

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

// Simple Review interface matching database schema
export interface Review {
  id: string;
  customerName: string;
  rating: number;
  text: string;
  location: string | null;
  reviewDate: Date | null;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface ReviewsData {
  featuredReviews: Review[];
  allReviews: Review[];
  averageRating: number;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  zipCode: string;
  serviceType: string;
  message?: string;
}
