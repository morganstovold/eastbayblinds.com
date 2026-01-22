import BrightwoodShutters from "@/assets/Brightwood-Shutters.webp";
import BlackoutShades from "@/assets/blackout-shades.webp";
import CenterpieceRomanShades from "@/assets/Centerpiece-Roman-Shades.webp";
import CityLightsAluminumBlinds from "@/assets/CityLights-Aluminum-Blinds.webp";
import NormandyShutters from "@/assets/Normandy-Shutters.webp";
import PerfectSheerShades from "@/assets/PerfectSheer-Shades.webp";
import PortraitHoneycombShades from "@/assets/Portrait-Honecomb-Shades.webp";
import SmartDrapeShades from "@/assets/Smart-Drape-Shades.webp";
import SolunaRollerShades from "@/assets/Soluna-Roller-Shades.webp";
import SynchronyVerticalBlinds from "@/assets/Synchrony-Vertical-Blinds.webp";
import UltimateFauxWoodBlinds from "@/assets/Ultimate-Faux-Wood-Blinds.webp";
import UltimateNormandyWoodBlinds from "@/assets/Ultimate-Normandy-Wood-Blinds.webp";
import WoodlorePlusShutters from "@/assets/Woodlore-Plus-Shutters.webp";
import WoodloreShutters from "@/assets/Woodlore-Shutters.webp";
import type { BusinessInfo, NavigationItem, Review, Service } from "./types";

export const businessInfo: BusinessInfo = {
	name: "East Bay Blinds",
	tagline: "It's your home. Get inspired.",
	phone: "(925) 200-4521",
	email: "",
	address: "Benicia, CA 94510-3980",
	socialLinks: {
		yelp: "https://www.yelp.com/biz/east-bay-blinds-benicia-2",
		houzz:
			"https://www.houzz.com/professionals/window-treatments/east-bay-blinds-pfvwus-pf~1292857805",
	},
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

export const SITE_REVIEWS: Review[] = [
	{
		customerName: "Connie S.",
		rating: 5,
		text: "Larry is the best! Very responsive. Gives great personalized and cost efficient recommendations. He guided us through selecting blackout blinds, as well as how to prep our bedroom/wall for installation. Our motorized blinds look and work great. I will absolutely work with him again in the future when the need arises!",
		location: "Lafayette, CA",
		reviewDate: new Date("2025-07-21 00:00:00"),
	},
	{
		customerName: "Cindy T.",
		rating: 5,
		text: "I had Larry install shutters for the upstairs.. as before, he was prompt to give me an estimate but the installation is where he really shines.. him and his son installed the shutters with expert workmanship, very minimal noise and the best part? My bedrooms were left clean!!! I am so happy and impressed with East Bay Blinds.. the shutters transforms the house and are great quality (no problems ever with the shutters he installed before)! The only downside? All windows are done so we won't have the pleasure of working with Larry!!",
		location: "Benicia, CA",
		reviewDate: new Date("2025-07-21 00:00:00"),
	},
	{
		customerName: "Gene l.",
		rating: 5,
		text: `This review is long overdue -- Larry installed my blinds back in 2018, and they're still in great shape today! From start to finish, the experience was top-notch.

Larry was prompt, patient, and never pushy -- a true professional who clearly knows his craft. He took the time to walk me through the options, offered expert advice, and made sure I felt confident in my choices. Installation was smooth and efficient, and the results speak for themselves.

What really stood out was the exceptional customer service. Larry was courteous, respectful, and genuinely cared about getting everything just right.

If you want high quality, long-lasting blinds and a smooth, stress-free experience, Larry is your guy. Highly recommend!`,
		location: "San Francisco, CA",
		reviewDate: new Date("2025-07-21 00:00:00"),
	},
];

export const serviceTypes = [
	{ value: "purchase", label: "Purchase Window Treatment" },
	{ value: "consultation", label: "Free In-Home Consultation" },
];

export const SITE_SERVICES: Service[] = [
	{
		title: "No-Pressure Design Consultation",
		description:
			"We bring you options for every budget, and provide honest recommendations. No sales pitch, just expert guidance.",
		icon: "Users",
		features: [
			"In-home measurement & assessment",
			"View samples in your actual lighting",
			"Honest budget recommendations",
			"Same-day quote",
		],
		cta: "Schedule Your Visit",
	},
	{
		title: "Expert Installation, Guaranteed",
		description:
			"20+ years installing window treatments in East Bay homes. We handle everything from measurement to final cleanup—backed by our lifetime warranty.",
		icon: "Wrench",
		features: [
			"Professional installation team",
			"Precise measurements",
			"Complete cleanup",
			"Lifetime warranty",
		],
		cta: "See Our Work",
	},
	{
		title: "Options for Every Budget",
		description:
			"Whether you want luxury plantation shutters or quality blinds, we work with premium brands to find the perfect fit for your budget and style.",
		icon: "Palette",
		features: [
			"Multiple price points",
			"Premium & value options",
			"Custom sizing",
			"Motorization available",
		],
		cta: "Browse Options",
	},
];

export const SITE_PRODUCTS = [
	{
		category: "shutters",
		image: BrightwoodShutters,
		name: "Brightwood™ Shutters",
		description:
			"Premium hardwood shutters with superior craftsmanship and timeless elegance for any home decor style.",
		features: [
			"100% North American hardwood construction",
			"Mortise and tenon joinery",
			"Hidden hinges for clean lines",
			"Variety of stains and paint finishes",
			"Lifetime warranty",
		],
		featured: true,
	},
	{
		category: "shutters",
		image: NormandyShutters,
		name: "Normandy™ Shutters",
		description:
			"Classic plantation shutters offering exceptional light control and privacy with traditional styling.",
		features: [
			"Durable hardwood construction",
			"Adjustable louvers for light control",
			"Custom painted finishes available",
			"Professional installation included",
			"Energy efficient design",
		],
		featured: false,
	},
	{
		category: "shutters",
		image: WoodlorePlusShutters,
		name: "Woodlore Plus™ Shutters",
		description:
			"Enhanced composite shutters with the beauty of wood and superior moisture resistance.",
		features: [
			"Moisture-resistant composite construction",
			"Wood-like appearance and feel",
			"Ideal for high-humidity areas",
			"Multiple color options",
			"Limited lifetime warranty",
		],
		featured: false,
	},
	{
		category: "shutters",
		image: WoodloreShutters,
		name: "Woodlore™ Shutters",
		description:
			"Affordable composite shutters that deliver the look of real wood with enhanced durability.",
		features: [
			"Composite construction",
			"Authentic wood grain texture",
			"Excellent value option",
			"Easy to maintain",
			"Available in multiple colors",
		],
		featured: false,
	},

	// Blinds
	{
		category: "blinds",
		image: UltimateFauxWoodBlinds,
		name: "Ultimate™ Faux Wood Blinds",
		description:
			"Premium faux wood blinds offering the beauty of real wood with superior durability and moisture resistance.",
		features: [
			"Durable faux wood construction",
			"Moisture resistant finish",
			"Coordinating cloth tapes available",
			"Multiple slat sizes",
			"Cordless options for safety",
		],
		featured: true,
	},
	{
		category: "blinds",
		image: SynchronyVerticalBlinds,
		name: "Synchrony™ Vertical Blinds",
		description:
			"Modern vertical blinds perfect for sliding doors and large windows with smooth operation.",
		features: [
			"Fabric and vinyl options",
			"Smooth traversing system",
			"Custom width capabilities",
			"Easy maintenance",
			"Contemporary styling",
		],
		featured: false,
	},
	{
		category: "blinds",
		image: UltimateNormandyWoodBlinds,
		name: "Ultimate Normandy™ Wood Blinds",
		description:
			"Genuine hardwood blinds featuring premium basswood construction and elegant finishes.",
		features: [
			"Premium basswood construction",
			"Rich stained finishes",
			"Decorative cloth tapes",
			"Smooth operation",
			"Custom sizing available",
		],
		featured: false,
	},
	{
		category: "blinds",
		image: CityLightsAluminumBlinds,
		name: "CityLights™ Aluminum Blinds",
		description:
			"Sleek aluminum mini blinds with contemporary styling and precise light control.",
		features: [
			"Lightweight aluminum construction",
			'Slim 1" slats',
			"Multiple color options",
			"Affordable pricing",
			"Easy installation",
		],
		featured: false,
	},

	// Shades
	{
		category: "shades",
		image: SmartDrapeShades,
		name: "Smart Drape™ Shades",
		description:
			"Innovative motorized shades with smart home integration for ultimate convenience and style.",
		features: [
			"Motorized operation",
			"Smart home compatibility",
			"Remote control included",
			"Multiple fabric options",
			"Programmable settings",
		],
		featured: false,
	},
	{
		category: "shades",
		image: SolunaRollerShades,
		name: "Soluna™ Roller Shades",
		description:
			"Clean, modern roller shades with smooth operation and endless fabric possibilities.",
		features: [
			"Modern minimalist design",
			"Hundreds of fabric options",
			"Cordless operation",
			"Blackout and light filtering",
			"Easy maintenance",
		],
		featured: false,
	},
	{
		category: "shades",
		image: BlackoutShades,
		name: "Blackout Shades",
		description:
			"Complete light blocking shades perfect for bedrooms and media rooms requiring total darkness.",
		features: [
			"100% light blocking",
			"Room darkening technology",
			"Energy efficient",
			"Sound absorption",
			"Multiple mounting options",
		],
		featured: false,
	},
	{
		category: "shades",
		image: CenterpieceRomanShades,
		name: "Centerpiece™ Roman Shades",
		description:
			"Elegant fabric shades with soft folds that add sophistication to any room.",
		features: [
			"Premium designer fabrics",
			"Soft fold construction",
			"Custom sizing",
			"Cordless lift options",
			"Professional installation",
		],
		featured: false,
	},
	{
		category: "shades",
		image: PerfectSheerShades,
		name: "PerfectSheer™ Shades",
		description:
			"Innovative sheer shades offering privacy with natural light and outside views.",
		features: [
			"Dual fabric construction",
			"Privacy and view options",
			"Natural light filtering",
			"Modern design",
			"Easy operation",
		],
		featured: false,
	},
	{
		category: "shades",
		image: PortraitHoneycombShades,
		name: "Portrait™ Honeycomb Shades",
		description:
			"Energy-efficient cellular shades with superior insulation and light filtering capabilities.",
		features: [
			"Energy efficient honeycomb design",
			"Superior insulation properties",
			"Light filtering options",
			"Cordless and motorized options",
			"Sound absorption benefits",
		],
		featured: true,
	},
];
