import {
  BusinessInfo,
  Product,
  Service,
  NavigationItem,

} from "./types";

import BrightwoodShutters from "@/public/Brightwood-Shutters.webp";
import NormandyShutters from "@/public/Normandy-Shutters.webp";
import WoodlorePlusShutters from "@/public/Woodlore-Plus-Shutters.webp";
import WoodloreShutters from "@/public/Woodlore-Shutters.webp";
import UltimateFauxWoodBlinds from "@/public/Ultimate-Faux-Wood-Blinds.webp";
import SynchronyVerticalBlinds from "@/public/Synchrony-Vertical-Blinds.webp";
import UltimateNormandyWoodBlinds from "@/public/Ultimate-Normandy-Wood-Blinds.webp";
import CityLightsAluminumBlinds from "@/public/CityLights-Aluminum-Blinds.webp";
import SmartDrapeShades from "@/public/Smart-Drape-Shades.webp";
import SolunaRollerShades from "@/public/Soluna-Roller-Shades.webp";
import BlackoutShades from "@/public/blackout-shades.webp";
import CenterpieceRomanShades from "@/public/Centerpiece-Roman-Shades.webp";
import PerfectSheerShades from "@/public/PerfectSheer-Shades.webp";
import PortraitHoneycombShades from "@/public/Portrait-Honecomb-Shades.webp";

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

export const products: Product[] = [
  {
    id: "brightwood-shutters",
    name: "Brightwood™ Shutters",
    category: "shutters",
    description:
      "Brightwood™ offers the luxury and premium customization of painted wood shutters, but at a more affordable price.",
    features: [
      "Affordable painted wood shutters",
      "Premium customization options",
      "Luxury appearance",
      "Multiple paint finishes",
      "Professional installation",
    ],
    image: BrightwoodShutters,
  },
  {
    id: "normandy-shutters",
    name: "Normandy® Shutters",
    category: "shutters",
    description:
      "100% premium hardwood shutter made from sustainably farmed wood. Specialty shapes, french doors & more.",
    features: [
      "100% premium hardwood",
      "Sustainably farmed wood",
      "Specialty shapes available",
      "French door options",
      "Mortise and tenon joinery",
      "Lifetime warranty",
    ],
    image: NormandyShutters,
  },
  {
    id: "woodlore-plus-shutters",
    name: "Woodlore® Plus Shutters",
    category: "shutters",
    description:
      "Hybrid wood composite construction with waterproof option. Won't chip or crack over time.",
    features: [
      "Hybrid wood composite",
      "Waterproof option available",
      "Won't chip or crack",
      "Moisture resistant",
      "Durable construction",
    ],
    image: WoodlorePlusShutters,
  },
  {
    id: "woodlore-shutters",
    name: "Woodlore® Shutters",
    category: "shutters",
    description:
      "Premium engineered wood composite core - real wood in an advanced state. Incredible density and strength. Durable and robust.",
    features: [
      "Engineered wood composite",
      "Real wood in advanced state",
      "Incredible density",
      "Superior strength",
      "Durable and robust",
    ],
    image: WoodloreShutters,
  },
  {
    id: "ultimate-faux-wood-blinds",
    name: "Ultimate™ Faux Wood Blinds",
    category: "blinds",
    description:
      "The Ultimate™ Blind takes light control and privacy to the next level. New innovative technology yields the safest, smoothest operating blind in the market.",
    features: [
      "Ultimate light control",
      "Enhanced privacy",
      "Innovative technology",
      "Safest operation",
      "Smoothest functionality",
      "Moisture resistant",
    ],
    image: UltimateFauxWoodBlinds,
  },
  {
    id: "synchrony-vertical-blinds",
    name: "Synchrony™ Vertical Blinds",
    category: "blinds",
    description:
      "Synchrony™ combines the traditional practicality of vertical blinds with the improved durability and performance of modern technology.",
    features: [
      "Traditional practicality",
      "Modern technology",
      "Improved durability",
      "Enhanced performance",
      "Perfect for large windows",
      "Sliding door compatibility",
    ],
    image: SynchronyVerticalBlinds,
  },
  {
    id: "normandy-wood-blinds",
    name: "Ultimate™ Normandy® Wood Blinds",
    category: "blinds",
    description:
      "Normandy® Wood Blinds are made from the same wood as Normandy® Shutters and come in a vast array of fashionable paints and stains.",
    features: [
      "Same wood as Normandy® Shutters",
      "Vast array of finishes",
      "Fashionable paints",
      "Custom stain options",
      "Premium hardwood",
      "Sustainable materials",
    ],
    image: UltimateNormandyWoodBlinds,
  },
  {
    id: "citylights-aluminum-blinds",
    name: "CityLights™ Aluminum Blinds",
    category: "blinds",
    description:
      "CityLights™ Aluminum Blinds offer exceptional light and privacy control. High quality materials provide optimal performance and promote durability.",
    features: [
      "Exceptional light control",
      "Superior privacy",
      "High quality materials",
      "Optimal performance",
      "Durable construction",
      "Modern styling",
    ],
    image: CityLightsAluminumBlinds,
  },
  {
    id: "smartdrape-shades",
    name: "SmartDrape™",
    category: "shades",
    description:
      "The best in seamless indoor-outdoor living. Walk through the shade even while it is closed.",
    features: [
      "Seamless indoor-outdoor living",
      "Walk-through design",
      "Closed-shade accessibility",
      "Innovative technology",
      "Large opening coverage",
    ],
    image: SmartDrapeShades,
  },
  {
    id: "soluna-roller-shades",
    name: "Soluna™ Roller Shades",
    category: "shades",
    description:
      "Capture the spirit of modern living and celebrate a vast world of color, textures and styles.",
    features: [
      "Modern living spirit",
      "Vast color options",
      "Multiple textures",
      "Diverse styles",
      "Motorization options",
      "Cordless operation",
    ],
    image: SolunaRollerShades,
  },
  {
    id: "blackout-shades",
    name: "Blackout Shades",
    category: "shades",
    description:
      "Norman® blackout shades have vast colors, materials, and lift options. Enjoy privacy and light control with custom blackout shades for home.",
    features: [
      "Complete light blocking",
      "Vast color selection",
      "Multiple materials",
      "Various lift options",
      "Custom sizing",
      "Enhanced privacy",
    ],
    image: BlackoutShades,
  },
  {
    id: "centerpiece-roman-shades",
    name: "Centerpiece™ Roman Shades",
    category: "shades",
    description:
      "A world of soft, luxury fabrics and exquisite details. Centerpiece™ embodies the best of tailored craftsmanship.",
    features: [
      "Luxury fabrics",
      "Exquisite details",
      "Tailored craftsmanship",
      "Soft textures",
      "Custom options",
      "Premium materials",
    ],
    image: CenterpieceRomanShades,
  },
  {
    id: "perfectsheer-shades",
    name: "PerfectSheer™ Shades",
    category: "shades",
    description:
      "Experience light a whole new way, its warmth, its beauty, its transformational effects, while achieving a perfect balance of light control and privacy.",
    features: [
      "Transformational light effects",
      "Perfect balance control",
      "Enhanced privacy",
      "Warm lighting",
      "Beautiful aesthetics",
      "Innovative design",
    ],
    image: PerfectSheerShades,
  },
  {
    id: "portrait-honeycomb-shades",
    name: "Portrait™ Honeycomb Shades",
    category: "shades",
    description:
      "Advanced honeycomb technology for extra insulation and home energy efficiency. Stylish and streamlined - made for every window.",
    features: [
      "Advanced honeycomb technology",
      "Extra insulation",
      "Energy efficiency",
      "Stylish design",
      "Streamlined appearance",
      "Universal compatibility",
    ],
    image: PortraitHoneycombShades,
  },
];

export const serviceTypes = [
  { value: "purchase", label: "Purchase Window Treatment" },
  { value: "consultation", label: "Free In-Home Consultation" },
];
