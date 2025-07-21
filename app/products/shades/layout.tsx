import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Shades - Cellular, Roller & Roman Shades | East Bay Blinds",
  description: "Energy-efficient Norman® window shades including cellular, roller, and roman styles. Professional installation of custom shades in Solano & Contra Costa Counties.",
  keywords: [
    "window shades",
    "cellular shades",
    "honeycomb shades",
    "roller shades",
    "roman shades",
    "energy efficient shades",
    "Norman shades",
    "custom shades",
    "motorized shades",
    "blackout shades",
    "East Bay shades",
    "Benicia shades"
  ],
  openGraph: {
    title: "East Bay Blinds - Window Shades | Cellular, Roller & Roman Shades",
    description: "Energy-efficient Norman® window shades with professional installation. Cellular, roller, and roman styles available.",
    url: "https://www.eastbayblinds.com//products/shades",
    images: [
      {
        url: "/Hero-Shades.webp",
        width: 1200,
        height: 630,
        alt: "Premium Window Shades Collection by East Bay Blinds"
      }
    ],
  },
  twitter: {
    title: "East Bay Blinds - Window Shades | Cellular, Roller & Roman Shades", 
    description: "Energy-efficient Norman® window shades with professional installation in Solano & Contra Costa Counties.",
    images: ["/Hero-Shades.webp"],
  },
};

export default function ShadesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 