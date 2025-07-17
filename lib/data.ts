import { BusinessInfo, Product, Service, Testimonial, NavigationItem } from './types';

export const businessInfo: BusinessInfo = {
  name: "East Bay Blinds",
  tagline: "Norman Window Treatments from East Bay Blinds",
  phone: "(925) 200-4521",
  email: "",
  address: "Benicia, CA 94510-3980",
  hours: {
    "Monday": "By Appointment Only",
    "Tuesday": "By Appointment Only",
    "Wednesday": "By Appointment Only",
    "Thursday": "By Appointment Only",
    "Friday": "By Appointment Only",
    "Saturday": "By Appointment Only",
    "Sunday": "By Appointment Only"
  },
  socialLinks: {
    facebook: "https://facebook.com/eastbayblinds",
    instagram: "https://instagram.com/eastbayblinds",
    yelp: "https://yelp.com/biz/eastbayblinds",
    google: "https://maps.google.com/business/eastbayblinds"
  }
};

export const navigationItems: NavigationItem[] = [
  {
    id: "home",
    title: "Home",
    href: "/"
  },
  {
    id: "products",
    title: "Products",
    href: "/products",
    children: [
      {
        id: "shutters",
        title: "Shutters",
        href: "/products/shutters"
      },
      {
        id: "blinds",
        title: "Blinds",
        href: "/products/blinds"
      },
      {
        id: "shades",
        title: "Shades",
        href: "/products/shades"
      }
    ]
  },
  {
    id: "services",
    title: "Services",
    href: "/services"
  },
  {
    id: "about",
    title: "About",
    href: "/about"
  },
  {
    id: "contact",
    title: "Contact",
    href: "/contact"
  }
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
      "Free estimates"
    ]
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
      "Clean-up service"
    ]
  },
  {
    id: "repair",
    title: "Repair Services",
    description: "Restore your existing window treatments to like-new condition",
    icon: "Settings",
    features: [
      "Cord replacement",
      "Mechanism repair",
      "Slat replacement",
      "Motor servicing"
    ]
  },
  {
    id: "custom",
    title: "Custom Solutions",
    description: "Tailored window treatments for unique spaces and requirements",
    icon: "Palette",
    features: [
      "Custom sizing",
      "Unique shapes",
      "Special fabrics",
      "Motorization options"
    ]
  },
];

export const products: Product[] = [
  // Shutters
  {
    id: "brightwood-shutters",
    name: "Brightwood™ Shutters",
    category: "shutters",
    description: "Brightwood™ offers the luxury and premium customization of painted wood shutters, but at a more affordable price.",
    features: [
      "Affordable painted wood shutters",
      "Premium customization options",
      "Luxury appearance",
      "Multiple paint finishes",
      "Professional installation"
    ],
    imageUrl: "/brightwood-shutters.webp",
    brand: "Norman"
  },
  {
    id: "normandy-shutters",
    name: "Normandy® Shutters",
    category: "shutters",
    description: "100% premium hardwood shutter made from sustainably farmed wood. Specialty shapes, french doors & more.",
    features: [
      "100% premium hardwood",
      "Sustainably farmed wood",
      "Specialty shapes available",
      "French door options",
      "Mortise and tenon joinery",
      "Lifetime warranty"
    ],
    imageUrl: "/normandy-shutters.webp",
    brand: "Norman"
  },
  {
    id: "woodlore-plus-shutters",
    name: "Woodlore® Plus Shutters",
    category: "shutters",
    description: "Hybrid wood composite construction with waterproof option. Won't chip or crack over time.",
    features: [
      "Hybrid wood composite",
      "Waterproof option available",
      "Won't chip or crack",
      "Moisture resistant",
      "Durable construction"
    ],
    imageUrl: "/woodlore-plus-shutters.webp",
    brand: "Norman"
  },
  {
    id: "woodlore-shutters",
    name: "Woodlore® Shutters",
    category: "shutters",
    description: "Premium engineered wood composite core - real wood in an advanced state. Incredible density and strength. Durable and robust.",
    features: [
      "Engineered wood composite",
      "Real wood in advanced state",
      "Incredible density",
      "Superior strength",
      "Durable and robust"
    ],
    imageUrl: "/woodlore-shutters.webp",
    brand: "Norman"
  },

  // Blinds
  {
    id: "ultimate-faux-wood-blinds",
    name: "Ultimate™ Faux Wood Blinds",
    category: "blinds",
    description: "The Ultimate™ Blind takes light control and privacy to the next level. New innovative technology yields the safest, smoothest operating blind in the market.",
    features: [
      "Ultimate light control",
      "Enhanced privacy",
      "Innovative technology",
      "Safest operation",
      "Smoothest functionality",
      "Moisture resistant"
    ],
    imageUrl: "/ultimate-faux-wood-blinds.webp",
    brand: "Norman"
  },
  {
    id: "synchrony-vertical-blinds",
    name: "Synchrony™ Vertical Blinds",
    category: "blinds",
    description: "Synchrony™ combines the traditional practicality of vertical blinds with the improved durability and performance of modern technology.",
    features: [
      "Traditional practicality",
      "Modern technology",
      "Improved durability",
      "Enhanced performance",
      "Perfect for large windows",
      "Sliding door compatibility"
    ],
    imageUrl: "/synchrony-vertical-blinds.webp",
    brand: "Norman"
  },
  {
    id: "normandy-wood-blinds",
    name: "Ultimate™ Normandy® Wood Blinds",
    category: "blinds",
    description: "Normandy® Wood Blinds are made from the same wood as Normandy® Shutters and come in a vast array of fashionable paints and stains.",
    features: [
      "Same wood as Normandy® Shutters",
      "Vast array of finishes",
      "Fashionable paints",
      "Custom stain options",
      "Premium hardwood",
      "Sustainable materials"
    ],
    imageUrl: "/Ultimate-Normandy-Wood-Blinds.webp",
    brand: "Norman"
  },
  {
    id: "citylights-aluminum-blinds",
    name: "CityLights™ Aluminum Blinds",
    category: "blinds",
    description: "CityLights™ Aluminum Blinds offer exceptional light and privacy control. High quality materials provide optimal performance and promote durability.",
    features: [
      "Exceptional light control",
      "Superior privacy",
      "High quality materials",
      "Optimal performance",
      "Durable construction",
      "Modern styling"
    ],
    imageUrl: "/citylights-aluminum-blinds.webp",
    brand: "Norman"
  },

  // Shades
  {
    id: "smartdrape-shades",
    name: "SmartDrape™",
    category: "shades",
    description: "The best in seamless indoor-outdoor living. Walk through the shade even while it is closed.",
    features: [
      "Seamless indoor-outdoor living",
      "Walk-through design",
      "Closed-shade accessibility",
      "Innovative technology",
      "Large opening coverage"
    ],
    imageUrl: "/Smart-Drape-Shades.webp",
    brand: "Norman"
  },
  {
    id: "soluna-roller-shades",
    name: "Soluna™ Roller Shades",
    category: "shades",
    description: "Capture the spirit of modern living and celebrate a vast world of color, textures and styles.",
    features: [
      "Modern living spirit",
      "Vast color options",
      "Multiple textures",
      "Diverse styles",
      "Motorization options",
      "Cordless operation"
    ],
    imageUrl: "/soluna-roller-shades.webp",
    brand: "Norman"
  },
  {
    id: "blackout-shades",
    name: "Blackout Shades",
    category: "shades",
    description: "Norman® blackout shades have vast colors, materials, and lift options. Enjoy privacy and light control with custom blackout shades for home.",
    features: [
      "Complete light blocking",
      "Vast color selection",
      "Multiple materials",
      "Various lift options",
      "Custom sizing",
      "Enhanced privacy"
    ],
    imageUrl: "/blackout-shades.webp",
    brand: "Norman"
  },
  {
    id: "centerpiece-roman-shades",
    name: "Centerpiece™ Roman Shades",
    category: "shades",
    description: "A world of soft, luxury fabrics and exquisite details. Centerpiece™ embodies the best of tailored craftsmanship.",
    features: [
      "Luxury fabrics",
      "Exquisite details",
      "Tailored craftsmanship",
      "Soft textures",
      "Custom options",
      "Premium materials"
    ],
    imageUrl: "/centerpiece-roman-shades.webp",
    brand: "Norman"
  },
  {
    id: "perfectsheer-shades",
    name: "PerfectSheer™ Shades",
    category: "shades",
    description: "Experience light a whole new way, its warmth, its beauty, its transformational effects, while achieving a perfect balance of light control and privacy.",
    features: [
      "Transformational light effects",
      "Perfect balance control",
      "Enhanced privacy",
      "Warm lighting",
      "Beautiful aesthetics",
      "Innovative design"
    ],
    imageUrl: "/perfectsheer-shades.webp",
    brand: "Norman"
  },
  {
    id: "portrait-honeycomb-shades",
    name: "Portrait™ Honeycomb Shades",
    category: "shades",
    description: "Advanced honeycomb technology for extra insulation and home energy efficiency. Stylish and streamlined - made for every window.",
    features: [
      "Advanced honeycomb technology",
      "Extra insulation",
      "Energy efficiency",
      "Stylish design",
      "Streamlined appearance",
      "Universal compatibility"
    ],
    imageUrl: "/Portrait-Honecomb-Shades.webp",
    brand: "Norman"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "sarah-oakland",
    name: "Sarah Johnson",
    location: "Oakland, CA",
    rating: 5,
    comment: "East Bay Blinds transformed our home with beautiful shutters. The installation was flawless and the quality is exceptional. Highly recommend!",
    avatarUrl: "/placeholder-avatar-1.webp",
    date: "2024-01-15"
  },
  {
    id: "mike-berkeley",
    name: "Mike Rodriguez",
    location: "Berkeley, CA",
    rating: 5,
    comment: "Professional service from start to finish. The team helped us choose the perfect blinds for our office and installed them perfectly. Great value!",
    avatarUrl: "/placeholder-avatar-2.webp",
    date: "2024-01-10"
  },
  {
    id: "jennifer-alameda",
    name: "Jennifer Chen",
    location: "Alameda, CA",
    rating: 5,
    comment: "The motorized shades are amazing! Perfect for our smart home setup. The consultation was thorough and the installation was quick and clean.",
    avatarUrl: "/placeholder-avatar-3.webp",
    date: "2024-01-05"
  }
];

export const serviceTypes = [
  "Shutters",
  "Blinds",
  "Shades",
  "Repair Service",
  "Consultation",
  "Other"
]; 