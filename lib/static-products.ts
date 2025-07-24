import { StaticImageData } from "next/image";

// Import all product images
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

export interface StaticProduct {
  id: string;
  category: "shutters" | "blinds" | "shades";
  image: StaticImageData;
  defaultName: string;
  defaultDescription: string;
  defaultFeatures: string[];
  defaultIsFeatured: boolean;
}

export interface ConfigurableProduct extends StaticProduct {
  // Current configured values (merged from database)
  name: string;
  description: string;
  features: string[];
  isFeatured: boolean;
}

export const staticProducts: StaticProduct[] = [
  // Shutters
  {
    id: "brightwood-shutters",
    category: "shutters",
    image: BrightwoodShutters,
    defaultName: "Brightwood™ Shutters",
    defaultDescription: "Premium hardwood shutters with superior craftsmanship and timeless elegance for any home decor style.",
    defaultFeatures: [
      "100% North American hardwood construction",
      "Mortise and tenon joinery",
      "Hidden hinges for clean lines",
      "Variety of stains and paint finishes",
      "Lifetime warranty"
    ],
    defaultIsFeatured: true,
  },
  {
    id: "normandy-shutters",
    category: "shutters",
    image: NormandyShutters,
    defaultName: "Normandy™ Shutters",
    defaultDescription: "Classic plantation shutters offering exceptional light control and privacy with traditional styling.",
    defaultFeatures: [
      "Durable hardwood construction",
      "Adjustable louvers for light control",
      "Custom painted finishes available",
      "Professional installation included",
      "Energy efficient design"
    ],
    defaultIsFeatured: false,
  },
  {
    id: "woodlore-plus-shutters",
    category: "shutters",
    image: WoodlorePlusShutters,
    defaultName: "Woodlore Plus™ Shutters",
    defaultDescription: "Enhanced composite shutters with the beauty of wood and superior moisture resistance.",
    defaultFeatures: [
      "Moisture-resistant composite construction",
      "Wood-like appearance and feel",
      "Ideal for high-humidity areas",
      "Multiple color options",
      "Limited lifetime warranty"
    ],
    defaultIsFeatured: false,
  },
  {
    id: "woodlore-shutters",
    category: "shutters",
    image: WoodloreShutters,
    defaultName: "Woodlore™ Shutters",
    defaultDescription: "Affordable composite shutters that deliver the look of real wood with enhanced durability.",
    defaultFeatures: [
      "Composite construction",
      "Authentic wood grain texture",
      "Excellent value option",
      "Easy to maintain",
      "Available in multiple colors"
    ],
    defaultIsFeatured: false,
  },

  // Blinds
  {
    id: "ultimate-faux-wood-blinds",
    category: "blinds",
    image: UltimateFauxWoodBlinds,
    defaultName: "Ultimate™ Faux Wood Blinds",
    defaultDescription: "Premium faux wood blinds offering the beauty of real wood with superior durability and moisture resistance.",
    defaultFeatures: [
      "Durable faux wood construction",
      "Moisture resistant finish",
      "Coordinating cloth tapes available",
      "Multiple slat sizes",
      "Cordless options for safety"
    ],
    defaultIsFeatured: true,
  },
  {
    id: "synchrony-vertical-blinds",
    category: "blinds",
    image: SynchronyVerticalBlinds,
    defaultName: "Synchrony™ Vertical Blinds",
    defaultDescription: "Modern vertical blinds perfect for sliding doors and large windows with smooth operation.",
    defaultFeatures: [
      "Fabric and vinyl options",
      "Smooth traversing system",
      "Custom width capabilities",
      "Easy maintenance",
      "Contemporary styling"
    ],
    defaultIsFeatured: false,
  },
  {
    id: "ultimate-normandy-wood-blinds",
    category: "blinds",
    image: UltimateNormandyWoodBlinds,
    defaultName: "Ultimate Normandy™ Wood Blinds",
    defaultDescription: "Genuine hardwood blinds featuring premium basswood construction and elegant finishes.",
    defaultFeatures: [
      "Premium basswood construction",
      "Rich stained finishes",
      "Decorative cloth tapes",
      "Smooth operation",
      "Custom sizing available"
    ],
    defaultIsFeatured: false,
  },
  {
    id: "citylights-aluminum-blinds",
    category: "blinds",
    image: CityLightsAluminumBlinds,
    defaultName: "CityLights™ Aluminum Blinds",
    defaultDescription: "Sleek aluminum mini blinds with contemporary styling and precise light control.",
    defaultFeatures: [
      "Lightweight aluminum construction",
      "Slim 1\" slats",
      "Multiple color options",
      "Affordable pricing",
      "Easy installation"
    ],
    defaultIsFeatured: false,
  },

  // Shades
  {
    id: "smart-drape-shades",
    category: "shades",
    image: SmartDrapeShades,
    defaultName: "Smart Drape™ Shades",
    defaultDescription: "Innovative motorized shades with smart home integration for ultimate convenience and style.",
    defaultFeatures: [
      "Motorized operation",
      "Smart home compatibility",
      "Remote control included",
      "Multiple fabric options",
      "Programmable settings"
    ],
    defaultIsFeatured: false,
  },
  {
    id: "soluna-roller-shades",
    category: "shades",
    image: SolunaRollerShades,
    defaultName: "Soluna™ Roller Shades",
    defaultDescription: "Clean, modern roller shades with smooth operation and endless fabric possibilities.",
    defaultFeatures: [
      "Modern minimalist design",
      "Hundreds of fabric options",
      "Cordless operation",
      "Blackout and light filtering",
      "Easy maintenance"
    ],
    defaultIsFeatured: false,
  },
  {
    id: "blackout-shades",
    category: "shades",
    image: BlackoutShades,
    defaultName: "Blackout Shades",
    defaultDescription: "Complete light blocking shades perfect for bedrooms and media rooms requiring total darkness.",
    defaultFeatures: [
      "100% light blocking",
      "Room darkening technology",
      "Energy efficient",
      "Sound absorption",
      "Multiple mounting options"
    ],
    defaultIsFeatured: false,
  },
  {
    id: "centerpiece-roman-shades",
    category: "shades",
    image: CenterpieceRomanShades,
    defaultName: "Centerpiece™ Roman Shades",
    defaultDescription: "Elegant fabric shades with soft folds that add sophistication to any room.",
    defaultFeatures: [
      "Premium designer fabrics",
      "Soft fold construction",
      "Custom sizing",
      "Cordless lift options",
      "Professional installation"
    ],
    defaultIsFeatured: false,
  },
  {
    id: "perfectsheer-shades",
    category: "shades",
    image: PerfectSheerShades,
    defaultName: "PerfectSheer™ Shades",
    defaultDescription: "Innovative sheer shades offering privacy with natural light and outside views.",
    defaultFeatures: [
      "Dual fabric construction",
      "Privacy and view options",
      "Natural light filtering",
      "Modern design",
      "Easy operation"
    ],
    defaultIsFeatured: false,
  },
  {
    id: "portrait-honeycomb-shades",
    category: "shades",
    image: PortraitHoneycombShades,
    defaultName: "Portrait™ Honeycomb Shades",
    defaultDescription: "Energy-efficient cellular shades with superior insulation and light filtering capabilities.",
    defaultFeatures: [
      "Energy efficient honeycomb design",
      "Superior insulation properties",
      "Light filtering options",
      "Cordless and motorized options",
      "Sound absorption benefits"
    ],
    defaultIsFeatured: true,
  },
];

export function getStaticProductById(id: string): StaticProduct | undefined {
  return staticProducts.find(product => product.id === id);
}

export function getStaticProductsByCategory(category: string): StaticProduct[] {
  return staticProducts.filter(product => product.category === category);
} 