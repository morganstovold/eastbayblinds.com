import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Blinds - Wood, Faux Wood & Aluminum | East Bay Blinds",
  description: "Discover our premium collection of Norman® blinds including wood, faux wood, and aluminum options. Custom blinds with professional installation in Solano & Contra Costa Counties.",
  keywords: [
    "premium blinds",
    "wood blinds",
    "faux wood blinds", 
    "aluminum blinds",
    "custom blinds",
    "Norman blinds",
    "horizontal blinds",
    "vertical blinds",
    "motorized blinds",
    "cordless blinds",
    "East Bay blinds",
    "Benicia blinds"
  ],
  openGraph: {
    title: "Premium Blinds - Wood, Faux Wood & Aluminum",
    description: "Premium Norman® blinds with professional installation. Wood, faux wood, and aluminum options with motorization available.",
    url: "https://eastbayblinds.com/products/blinds",
    images: [
      {
        url: "/Hero-Blinds.webp",
        width: 1200,
        height: 630,
        alt: "Premium Blinds Collection by East Bay Blinds"
      }
    ],
  },
  twitter: {
    title: "Premium Blinds - Wood, Faux Wood & Aluminum",
    description: "Premium Norman® blinds with professional installation in Solano & Contra Costa Counties.",
    images: ["/Hero-Blinds.webp"],
  },
};

export default function BlindsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 