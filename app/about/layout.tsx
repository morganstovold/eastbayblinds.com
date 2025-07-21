import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About East Bay Blinds - 20+ Years Experience | Norman® Dealer",
  description: "Learn about East Bay Blinds, a family-owned Norman® dealer with over 20 years of experience. Owner Larry Collins provides personalized service and certified installation in Solano & Contra Costa Counties.",
  keywords: [
    "about East Bay Blinds",
    "Larry Collins",
    "Norman dealer",
    "certified installer",
    "20 years experience",
    "family owned business",
    "Benicia window treatments",
    "professional installation",
    "no pressure consultation",
    "owner operated"
  ],
  openGraph: {
    title: "East Bay Blinds - About Us | 20+ Years Experience Norman® Dealer",
    description: "Family-owned Norman® dealer with over 20 years of experience. Personalized service and certified installation in Solano & Contra Costa Counties.",
    url: "https://eastbayblinds.com/about",
    images: [
      {
        url: "/Hero-About.jpg",
        width: 1200,
        height: 630,
        alt: "About East Bay Blinds - Your Local Window Treatment Experts"
      }
    ],
  },
  twitter: {
    title: "East Bay Blinds - About Us | 20+ Years Experience",
    description: "Family-owned Norman® dealer with certified installation. Serving Solano & Contra Costa Counties with personalized service.",
    images: ["/Hero-About.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 