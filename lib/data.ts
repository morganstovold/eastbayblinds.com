import { BusinessInfo, Service, NavigationItem } from "./types";

export const businessInfo: BusinessInfo = {
  name: "East Bay Blinds",
  tagline: "Its your home, Get inspired.",
  phone: "(925) 200-4521",
  email: "",
  address: "Benicia, CA 94510-3980",
  hours: {
    Monday: "By Appointment Only",
    Tuesday: "By Appointment Only",
    Wednesday: "By Appointment Only",
    Thursday: "By Appointment Only",
    Friday: "By Appointment Only",
    Saturday: "By Appointment Only",
    Sunday: "By Appointment Only",
  },
  socialLinks: {
    yelp: "https://www.yelp.com/biz/east-bay-blinds-benicia-2",
    houzz:
      "https://www.houzz.com/professionals/window-treatments/east-bay-blinds-pfvwus-pf~1292857805",
  },
};

// Reviews are now managed through the admin dashboard and stored in the database
// Mock data removed - check /api/reviews endpoint for current reviews

export const navigationItems: NavigationItem[] = [
  {
    id: "home",
    title: "Home",
    href: "/",
  },
  {
    id: "products",
    title: "Products",
    href: "/products",
    children: [
      {
        id: "shutters",
        title: "Shutters",
        href: "/products/shutters",
      },
      {
        id: "blinds",
        title: "Blinds",
        href: "/products/blinds",
      },
      {
        id: "shades",
        title: "Shades",
        href: "/products/shades",
      },
    ],
  },
  {
    id: "services",
    title: "Services",
    href: "/services",
  },
  {
    id: "about",
    title: "About",
    href: "/about",
  },
  {
    id: "contact",
    title: "Contact",
    href: "/contact",
  },
];

export const services: Service[] = [
  {
    id: "consultation",
    title: "Free Consultation",
    description: "Expert advice on the perfect window treatments for your home",
    icon: "Users",
    features: [
      "In-home measurement",
      "Design consultation",
      "Product recommendations",
      "Free estimates",
    ],
  },
  {
    id: "installation",
    title: "Professional Installation",
    description: "Certified installers ensure perfect fit and finish",
    icon: "Wrench",
    features: [
      "Certified installers",
      "Precision mounting",
      "Quality guarantee",
      "Clean-up service",
    ],
  },
  {
    id: "custom",
    title: "Custom Solutions",
    description:
      "Tailored window treatments for unique spaces and requirements",
    icon: "Palette",
    features: [
      "Custom sizing",
      "Unique shapes",
      "Special fabrics",
      "Motorization options",
    ],
  },
];

export const serviceTypes = [
  { value: "purchase", label: "Purchase Window Treatment" },
  { value: "consultation", label: "Free In-Home Consultation" },
];
