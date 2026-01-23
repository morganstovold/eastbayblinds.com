import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.eastbayblinds.com"),
	title: {
		default:
			"East Bay Blinds | Custom Window Treatments Lafayette, Walnut Creek",
		template: "%s | East Bay Blinds",
	},
	description:
		"Family-owned window treatment specialist serving Lafayette, Walnut Creek, Orinda since 2006. Hunter Douglas & Norman authorized dealer. 100+ 5-star reviews. Free consultation. Call (925) 200-4521.",
	keywords: [
		"window treatments Lafayette",
		"custom blinds Walnut Creek",
		"plantation shutters Orinda",
		"Hunter Douglas Lafayette",
		"Norman shutters East Bay",
		"motorized blinds Walnut Creek",
		"window shades Lafayette CA",
		"custom shutters Moraga",
		"blinds installation Danville",
		"window treatment installer East Bay",
	],
	authors: [
		{ name: "Larry Collins", url: "https://www.eastbayblinds.com/about" },
	],
	creator: "East Bay Blinds",
	publisher: "East Bay Blinds",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.eastbayblinds.com",
		siteName: "East Bay Blinds",
		title: "East Bay Blinds | Custom Window Treatments Lafayette, Walnut Creek",
		description:
			"Family-owned since 2006. Hunter Douglas & Norman authorized dealer. 100+ 5-star reviews. Free consultation. Serving Lafayette, Walnut Creek, Orinda.",
		images: [
			{
				url: "/og-image.jpg", // You'll need to create this
				width: 1200,
				height: 630,
				alt: "East Bay Blinds - Custom Window Treatments",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "East Bay Blinds | Custom Window Treatments Lafayette, Walnut Creek",
		description:
			"Family-owned since 2006. Hunter Douglas & Norman authorized dealer. 100+ 5-star reviews. Free consultation.",
		images: ["/og-image.jpg"],
	},
	verification: {
		google: "your-google-verification-code", // Larry will get this from Google Search Console
	},
	alternates: {
		canonical: "https://www.eastbayblinds.com",
	},
};

const localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	"@id": "https://www.eastbayblinds.com/#organization",
	name: "East Bay Blinds",
	image: "https://www.eastbayblinds.com/logo.jpg",
	logo: "https://www.eastbayblinds.com/logo.jpg",
	url: "https://www.eastbayblinds.com",
	telephone: "+19252004521",
	priceRange: "$$",
	email: "larry@eastbayblinds.com",
	address: {
		"@type": "PostalAddress",
		streetAddress: "", // Larry's street address if he wants it public
		addressLocality: "Lafayette",
		addressRegion: "CA",
		postalCode: "94549",
		addressCountry: "US",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 37.8857,
		longitude: -122.118,
	},
	areaServed: [
		{
			"@type": "City",
			name: "Lafayette",
			"@id": "https://en.wikipedia.org/wiki/Lafayette,_California",
		},
		{
			"@type": "City",
			name: "Walnut Creek",
			"@id": "https://en.wikipedia.org/wiki/Walnut_Creek,_California",
		},
		{
			"@type": "City",
			name: "Orinda",
			"@id": "https://en.wikipedia.org/wiki/Orinda,_California",
		},
		{
			"@type": "City",
			name: "Moraga",
			"@id": "https://en.wikipedia.org/wiki/Moraga,_California",
		},
		{
			"@type": "City",
			name: "Danville",
			"@id": "https://en.wikipedia.org/wiki/Danville,_California",
		},
	],
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			],
			opens: "09:00",
			closes: "18:00",
		},
	],
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "5.0",
		reviewCount: "100",
		bestRating: "5",
		worstRating: "1",
	},
	founder: {
		"@type": "Person",
		name: "Larry Collins",
		jobTitle: "Owner & Founder",
	},
	sameAs: [
		"https://www.yelp.com/biz/east-bay-blinds-benicia-2",
		// Add other social profiles if Larry has them
	],
};

// Service schema
const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	serviceType: "Window Treatment Installation",
	provider: {
		"@id": "https://www.eastbayblinds.com/#organization",
	},
	areaServed: {
		"@type": "State",
		name: "California",
	},
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Window Treatment Services",
		itemListElement: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Custom Blinds Installation",
					description:
						"Professional custom blinds installation for homes and businesses",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Plantation Shutters Installation",
					description:
						"Hunter Douglas and Norman plantation shutters installation",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Motorized Window Treatments",
					description:
						"Smart home integration with motorized blinds and shades",
				},
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={dmSans.variable} lang="en" suppressHydrationWarning>
			<head>
				<Script
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(localBusinessSchema),
					}}
					id="local-business-schema"
					type="application/ld+json"
				/>
				<Script
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(serviceSchema),
					}}
					id="service-schema"
					type="application/ld+json"
				/>

				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=AW-17894895218"
				/>
				<Script>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'AW-17894895218');
					`}
				</Script>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
