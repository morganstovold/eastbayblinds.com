import {
  BusinessInfo,
  Product,
  Service,
  NavigationItem,
  YelpBusinessResponse,
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
  tagline: "Norman Window Treatments from East Bay Blinds",
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
    facebook: "https://facebook.com/eastbayblinds",
    instagram: "https://instagram.com/eastbayblinds",
    yelp: "https://yelp.com/biz/eastbayblinds",
    google: "https://maps.google.com/business/eastbayblinds",
  },
};

// Mock Yelp Business Data
export const mockYelpBusinessData: YelpBusinessResponse = {
  id: "east-bay-blinds-benicia",
  name: "East Bay Blinds",
  rating: 4.9,
  review_count: 131,
  url: "https://www.yelp.com/biz/east-bay-blinds-benicia",
  reviews: [
    {
      id: "yelp-review-1",
      rating: 5,
      user: {
        id: "sarah-m-oakland",
        profile_url: "https://www.yelp.com/user_details?userid=sarah-m-oakland",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/photo/placeholder-avatar-1.jpg",
        name: "Cindy T.",
      },
      text: "I had Larry install shutters for the upstairs.. as before, he was prompt to give me an estimate but the installation is where he really shines.. him and his son installed the shutters with expert workmanship, very minimal noise and the best part? My bedrooms were left clean!!! I am so happy and impressed with East Bay Blinds.. the shutters transforms the house and are great quality (no problems ever with the shutters he installed before)! The only downside? All windows are done so we won't have the pleasure of working with Larry!!",
      time_created: "2025-04-18T14:30:00",
      url: "https://www.yelp.com/biz/east-bay-blinds-benicia?hrid=yelp-review-1",
    },
    {
      id: "yelp-review-2",
      rating: 5,
      user: {
        id: "mike-r-berkeley",
        profile_url: "https://www.yelp.com/user_details?userid=mike-r-berkeley",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/photo/placeholder-avatar-2.jpg",
        name: "Connie S.",
      },
      text: "Larry is the best! Very responsive. Gives great personalized and cost efficient recommendations. He guided us through selecting blackout blinds, as well as how to prep our bedroom/wall for installation. Our motorized blinds look and work great. I will absolutely work with him again in the future when the need arises!",
      time_created: "2025-01-10T09:15:00",
      url: "https://www.yelp.com/biz/east-bay-blinds-benicia?hrid=yelp-review-2",
    },
    {
      id: "yelp-review-3",
      rating: 5,
      user: {
        id: "jennifer-c-alameda",
        profile_url:
          "https://www.yelp.com/user_details?userid=jennifer-c-alameda",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/photo/placeholder-avatar-3.jpg",
        name: "Allison F.",
      },
      text: "After comparing a few companies, we chose East Bay Blinds to replace all of the very old, non-child-friendly blinds in our new home. Larry was very responsive, knowledgeable and even helpful with design questions. The process was seamless from start to finish and we are so happy with our new window treatments.",
      time_created: "2024-01-05T16:45:00",
      url: "https://www.yelp.com/biz/east-bay-blinds-benicia?hrid=yelp-review-3",
    },
    {
      id: "yelp-review-4",
      rating: 5,
      user: {
        id: "david-l-vallejo",
        profile_url: "https://www.yelp.com/user_details?userid=david-l-vallejo",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/photo/placeholder-avatar-4.jpg",
        name: "David L.",
      },
      text: "We needed shutters for our entire house and Larry made the process so easy. His prices were competitive and the quality is top-notch. Norman shutters are definitely worth the investment. Installation took two days but Larry was punctual and professional throughout. Our home value has definitely increased!",
      time_created: "2023-12-28T11:20:00",
      url: "https://www.yelp.com/biz/east-bay-blinds-benicia?hrid=yelp-review-4",
    },
    {
      id: "yelp-review-5",
      rating: 5,
      user: {
        id: "maria-g-fairfield",
        profile_url:
          "https://www.yelp.com/user_details?userid=maria-g-fairfield",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/photo/placeholder-avatar-5.jpg",
        name: "Maria G.",
      },
      text: "East Bay Blinds exceeded our expectations! Larry brought tons of samples to our home and patiently explained all the options. We went with Norman roller shades and they're perfect. The fabric quality is excellent and the child-safe features give us peace of mind. Lifetime warranty is a huge bonus!",
      time_created: "2023-12-20T13:10:00",
      url: "https://www.yelp.com/biz/east-bay-blinds-benicia?hrid=yelp-review-5",
    },
    {
      id: "yelp-review-6",
      rating: 4,
      user: {
        id: "robert-k-concord",
        profile_url:
          "https://www.yelp.com/user_details?userid=robert-k-concord",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/photo/placeholder-avatar-6.jpg",
        name: "Robert K.",
      },
      text: "Very satisfied with our Norman wood blinds. Larry was professional and the installation was done well. Only minor issue was scheduling took a few weeks, but that's because he's popular! The quality is excellent and the lifetime warranty gives us confidence in our purchase.",
      time_created: "2023-12-15T10:30:00",
      url: "https://www.yelp.com/biz/east-bay-blinds-benicia?hrid=yelp-review-6",
    },
    {
      id: "yelp-review-7",
      rating: 5,
      user: {
        id: "lisa-h-walnut-creek",
        profile_url:
          "https://www.yelp.com/user_details?userid=lisa-h-walnut-creek",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/photo/placeholder-avatar-7.jpg",
        name: "Lisa H.",
      },
      text: "Outstanding service and quality! We had shutters installed in our master bedroom and they're gorgeous. Larry's attention to detail is impressive - everything was measured perfectly and installed with care. The Norman shutters are exactly what we wanted. Will definitely use East Bay Blinds again!",
      time_created: "2023-12-08T14:55:00",
      url: "https://www.yelp.com/biz/east-bay-blinds-benicia?hrid=yelp-review-7",
    },
    {
      id: "yelp-review-8",
      rating: 5,
      user: {
        id: "thomas-w-suisun",
        profile_url: "https://www.yelp.com/user_details?userid=thomas-w-suisun",
        image_url:
          "https://s3-media0.fl.yelpcdn.com/photo/placeholder-avatar-8.jpg",
        name: "Thomas W.",
      },
      text: "Highly recommend East Bay Blinds! Larry helped us choose the perfect combination of shutters and blinds for our home. His expertise really shows - he understood our style preferences and budget constraints. Installation was professional and the results look amazing. Great local business!",
      time_created: "2023-11-30T16:20:00",
      url: "https://www.yelp.com/biz/east-bay-blinds-benicia?hrid=yelp-review-8",
    },
  ],
};

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
    id: "repair",
    title: "Repair Services",
    description:
      "Restore your existing window treatments to like-new condition",
    icon: "Settings",
    features: [
      "Cord replacement",
      "Mechanism repair",
      "Slat replacement",
      "Motor servicing",
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
  // Shutters
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
    brand: "Norman",
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
    brand: "Norman",
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
    brand: "Norman",
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
    brand: "Norman",
  },

  // Blinds
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
    brand: "Norman",
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
    brand: "Norman",
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
    brand: "Norman",
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
    brand: "Norman",
  },

  // Shades
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
    brand: "Norman",
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
    brand: "Norman",
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
    brand: "Norman",
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
    brand: "Norman",
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
    brand: "Norman",
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
    brand: "Norman",
  },
];

export const serviceTypes = [
  "Purchase Window Treatment",
  "Get Service & Repair",
];
