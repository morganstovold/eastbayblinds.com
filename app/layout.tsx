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
      "East Bay Blinds - Premium Window Treatments | Shutters, Blinds & Shades | Benicia, CA",
    template: "%s | East Bay Blinds",
  },
  description:
    "East Bay Blinds provides premium Norman® window treatments including custom shutters, blinds, and shades. Serving Solano & Contra Costa Counties with professional installation and lifetime warranties.",
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
    "Benicia",
    "Vallejo",
    "Fairfield",
    "Vacaville",
    "Concord",
    "Walnut Creek",
    "Solano County",
    "Contra Costa County",
    "California",
    "window coverings",
    "interior design",
    "home improvement",
    "motorized blinds",
    "cordless blinds",
    "energy efficient",
    "UV protection",
    "privacy",
    "light control",
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
      "East Bay Blinds - Premium Window Treatments | Shutters, Blinds & Shades",
    description:
      "East Bay Blinds provides premium Norman® window treatments including custom shutters, blinds, and shades. Serving Solano & Contra Costa Counties with professional installation and lifetime warranties.",
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
    title: "East Bay Blinds - Premium Window Treatments",
    description:
      "Premium Norman® shutters, blinds & shades. Professional installation in Solano & Contra Costa Counties.",
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
    "DC.coverage": "Solano County, Contra Costa County, California",
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
              description:
                "East Bay Blinds provides premium Norman® window treatments including custom shutters, blinds, and shades. Serving Solano & Contra Costa Counties with professional installation and lifetime warranties.",
              url: "https://www.eastbayblinds.com/",
              telephone: "(925) 200-4521",
              email: "mailto:info@eastbayblinds.com",
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
                  name: "Benicia, CA",
                },
                {
                  "@type": "City",
                  name: "Concord, CA",
                },
                {
                  "@type": "City",
                  name: "Walnut Creek, CA",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Solano County, CA",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Contra Costa County, CA",
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
              serviceType: "Window Treatment Installation",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Window Treatment Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Shutters",
                      description:
                        "Premium Norman® plantation shutters with professional installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Blinds",
                      description:
                        "Wood, faux wood, and aluminum blinds with motorization options",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Shades",
                      description:
                        "Cellular, roller, and roman shades with energy efficiency",
                    },
                  },
                ],
              },
              logo: "https://www.eastbayblinds.com//EastBayBlinds-logo.png",
              image: "https://www.eastbayblinds.com//Hero-Home.webp",
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
