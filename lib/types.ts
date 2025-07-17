export interface Product {
  id: string;
  name: string;
  category: "shutters" | "blinds" | "shades";
  description: string;
  features: string[];
  imageUrl: string;
  price?: string;
  brand?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatarUrl: string;
  date: string;
}

export interface YelpUser {
  id: string;
  profile_url: string;
  image_url: string;
  name: string;
}

export interface YelpReview {
  id: string;
  rating: number;
  user: YelpUser;
  text: string;
  time_created: string;
  url: string;
}

export interface YelpBusinessResponse {
  id: string;
  name: string;
  rating: number;
  review_count: number;
  url: string;
  reviews: YelpReview[];
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
  hours: {
    [key: string]: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    yelp?: string;
    google?: string;
  };
}

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}
