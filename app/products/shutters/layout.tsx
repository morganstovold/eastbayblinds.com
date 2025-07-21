import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Norman® Shutters - Plantation Shutters | East Bay Blinds",
  description: "Transform your home with premium Norman® plantation shutters. Custom interior shutters with professional installation in Solano & Contra Costa Counties. Energy efficient, durable, and beautiful.",
  keywords: [
    "Norman shutters",
    "plantation shutters",
    "interior shutters",
    "custom shutters",
    "wood shutters",
    "Benicia shutters",
    "East Bay shutters",
    "Solano County shutters",
    "energy efficient shutters",
    "professional shutter installation"
  ],
  openGraph: {
    title: "Premium Norman® Shutters - Plantation Shutters",
    description: "Custom Norman® plantation shutters with professional installation. Energy efficient and beautiful interior shutters for your home.",
    url: "https://eastbayblinds.com/products/shutters",
    images: [
      {
        url: "/Hero-Shutters.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Norman Plantation Shutters by East Bay Blinds"
      }
    ],
  },
  twitter: {
    title: "Premium Norman® Shutters - Plantation Shutters",
    description: "Custom plantation shutters with professional installation in Solano & Contra Costa Counties.",
    images: ["/Hero-Shutters.jpg"],
  },
};

export default function ShuttersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 