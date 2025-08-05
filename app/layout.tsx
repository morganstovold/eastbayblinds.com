import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eastbayblinds.com/"),
  title: {
    default:
      "East Bay Blinds - Premium Norman® Window Treatments | Lafayette, Orinda, Walnut Creek",
    template: "%s | East Bay Blinds",
  },
  description:
    "Transform your East Bay home with premium Norman® shutters, blinds & shades. Free in-home consultation in Lafayette, Orinda, Walnut Creek & surrounding areas. Call (925) 200-4521 today!",
  applicationName: "East Bay Blinds",
  keywords: [
    "window treatments",
    "shutters",
    "blinds",
    "shades",
    "Norman shutters",
    "plantation shutters",
    "custom blinds",
    "cellular shades",
    "roller shades",
    "roman shades",
    "East Bay",
    "Lafayette",
    "Orinda",
    "Moraga",
    "Danville",
    "Alamo",
    "Walnut Creek",
    "Martinez",
    "Pleasant Hill",
    "Dublin",
    "San Ramon",
    "Benicia",
    "Vallejo",
    "Fairfield",
    "Vacaville",
    "Concord",
    "Solano County",
    "Contra Costa County",
    "California",
    "Bay Area window treatments",
    "San Francisco Bay Area blinds",
    "Bay Area shutters",
    "Bay Area custom blinds",
    "Northern California window treatments",
    "East Bay interior design",
    "Bay Area home improvement",
    "window coverings",
    "interior design",
    "home improvement",
    "motorized blinds",
    "cordless blinds",
    "energy efficient",
    "UV protection",
    "privacy",
    "light control",
    "window treatment installation cost",
    "affordable custom blinds",
    "discount Norman shutters",
    "window treatment sale",
    "best window blinds Bay Area",
    "professional blind installation",
    "same day window treatment service",
    "free window treatment consultation",
    "window treatment financing",
    "2025 window treatment trends",
    "smart home window treatments",
    "energy saving window treatments",
    "child safe window treatments",
    "motorized window blinds",
    "automated home blinds",
    "eco friendly window treatments",
    "sustainable window coverings",
    "bedroom window treatments",
    "living room blinds",
    "kitchen window blinds",
    "bathroom window treatments",
    "office window blinds",
    "dining room shutters",
    "family room window treatments",
    "master bedroom blinds",
    "home office window coverings",
    "sliding door window treatments",
    "interior plantation shutters",
    "shutters for sliding doors",
    "shutters for french doors",
    "shutters for bay windows",
    "white plantation shutters",
    "natural wood shutters",
    "moisture resistant shutters",
    "bathroom shutters",
    "bedroom shutters",
    "living room shutters",
    "2 inch wood blinds",
    "faux wood bathroom blinds",
    "motorized blinds smart home",
    "cordless blinds child safety",
    "venetian blinds",
    "wide slat blinds",
    "vertical blinds patio doors",
    "mini blinds office",
    "blackout blinds bedroom",
    "waterproof bathroom blinds",
    "cellular honeycomb shades",
    "top down bottom up shades",
    "blackout roller shades",
    "light filtering shades",
    "motorized roller shades",
    "cordless cellular shades",
    "energy efficient shades",
    "room darkening shades",
    "solar screen shades",
    "natural woven shades",
  ],
  authors: [{ name: "East Bay Blinds" }],
  creator: "East Bay Blinds",
  publisher: "East Bay Blinds",
  category: "Home Improvement",
  classification: "Window Treatments",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.eastbayblinds.com/",
    siteName: "East Bay Blinds",
    title:
      "East Bay Blinds - Premium Norman® Window Treatments | Lafayette, Orinda, Walnut Creek",
    description:
      "Transform your East Bay home with premium Norman® shutters, blinds & shades. Free in-home consultation in Lafayette, Orinda, Walnut Creek & surrounding areas. Call (925) 200-4521 today!",
    images: [
      {
        url: "/Hero-Home.webp",
        width: 1200,
        height: 630,
        alt: "East Bay Blinds - Premium Window Treatments",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@eastbayblinds",
    creator: "@eastbayblinds",
    title: "East Bay Blinds - Premium Norman® Window Treatments",
    description:
      "Premium Norman® shutters, blinds & shades. Professional installation in Lafayette, Orinda, Walnut Creek & East Bay communities.",
    images: ["/Hero-Home.webp"],
  },
  alternates: {
    canonical: "https://www.eastbayblinds.com/",
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Benicia, California",
    "geo.position": "38.049430;-122.158170",
    ICBM: "38.049430, -122.158170",
    "DC.title": "East Bay Blinds - Premium Window Treatments",
    "DC.creator": "East Bay Blinds",
    "DC.subject": "Window Treatments, Shutters, Blinds, Shades",
    "DC.description":
      "Premium Norman® window treatments with professional installation",
    "DC.publisher": "East Bay Blinds",
    "DC.contributor": "East Bay Blinds",
    "DC.date": new Date().toISOString(),
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://www.eastbayblinds.com/",
    "DC.language": "en",
    "DC.coverage": "East Bay, Solano County, Contra Costa County, California",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.eastbayblinds.com/",
              name: "East Bay Blinds",
              alternateName: "East Bay Blinds & Shutters",
              description:
                "East Bay Blinds provides premium Norman® window treatments including custom shutters, blinds, and shades. Serving the East Bay with professional installation and lifetime warranties.",
              url: "https://www.eastbayblinds.com/",
              telephone: "(925) 200-4521",
              email: "mailto:larry@eastbayblinds.com",
              foundingDate: "2006",
              founder: {
                "@type": "Person",
                name: "Larry Collins",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "",
                addressLocality: "Benicia",
                addressRegion: "CA",
                postalCode: "94510",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.04943,
                longitude: -122.15817,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Lafayette, CA",
                },
                {
                  "@type": "City",
                  name: "Orinda, CA",
                },
                {
                  "@type": "City",
                  name: "Moraga, CA",
                },
                {
                  "@type": "City",
                  name: "Danville, CA",
                },
                {
                  "@type": "City",
                  name: "Alamo, CA",
                },
                {
                  "@type": "City",
                  name: "Walnut Creek, CA",
                },
                {
                  "@type": "City",
                  name: "Martinez, CA",
                },
                {
                  "@type": "City",
                  name: "Pleasant Hill, CA",
                },
                {
                  "@type": "City",
                  name: "Dublin, CA",
                },
                {
                  "@type": "City",
                  name: "San Ramon, CA",
                },
                {
                  "@type": "City",
                  name: "Benicia, CA",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Solano County, CA",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Contra Costa County, CA",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "East Bay, California",
                },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "17:00",
                validFrom: "2024-01-01",
                description: "By appointment only",
              },
              serviceType: [
                "Window Treatment Installation",
                "Custom Shutters",
                "Blinds Installation",
                "Shades Installation",
                "In-Home Consultation",
                "Professional Measurement",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Window Treatment Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Norman Plantation Shutters",
                      description:
                        "Custom interior plantation shutters with professional installation",
                    },
                    areaServed: "East Bay, California",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Wood and Faux Wood Blinds",
                      description:
                        "Premium horizontal and vertical blinds with motorization options",
                    },
                    areaServed: "East Bay, California",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cellular and Roller Shades",
                      description:
                        "Energy-efficient window shades with light filtering and blackout options",
                    },
                    areaServed: "East Bay, California",
                  },
                ],
              },
              logo: "https://www.eastbayblinds.com/EastBayBlinds-logo.png",
              image: "https://www.eastbayblinds.com/Hero-Home.webp",
              sameAs: [
                "https://www.yelp.com/biz/east-bay-blinds-benicia-2",
                "https://www.houzz.com/professionals/window-treatments/east-bay-blinds-pfvwus-pf~1292857805",
              ],
              priceRange: "$$-$$$",
              paymentAccepted: "Cash, Credit Card, Check",
              currenciesAccepted: "USD",
            }),
          }}
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
