import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Treatment Products - Shutters, Blinds & Shades | East Bay Blinds",
  description: "Browse our complete collection of Norman® window treatments including premium shutters, custom blinds, and energy-efficient shades. Professional installation in Solano & Contra Costa Counties.",
  keywords: [
    "window treatment products",
    "Norman products",
    "shutters blinds shades",
    "window coverings",
    "custom window treatments",
    "East Bay products",
    "Benicia window treatments",
    "plantation shutters",
    "wood blinds",
    "cellular shades",
    "motorized options"
  ],
  openGraph: {
    title: "Window Treatment Products - Shutters, Blinds & Shades",
    description: "Complete collection of Norman® window treatments with professional installation. Shutters, blinds, and shades for every home.",
    url: "https://eastbayblinds.com/products",
    images: [
      {
        url: "/Hero-Home.webp",
        width: 1200,
        height: 630,
        alt: "Complete Window Treatment Products by East Bay Blinds"
      }
    ],
  },
  twitter: {
    title: "Window Treatment Products - Shutters, Blinds & Shades",
    description: "Complete Norman® collection with professional installation in Solano & Contra Costa Counties.",
    images: ["/Hero-Home.webp"],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 