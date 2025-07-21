import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Treatment Services - Installation & Consultation | East Bay Blinds",
  description: "Comprehensive window treatment services including free in-home consultation and professional installation. Norman® certified installation in Solano & Contra Costa Counties.",
  keywords: [
    "window treatment services",
    "professional installation",
    "free consultation", 
    "in-home consultation",
    "Norman certified installation",
    "window treatment consultation",
    "East Bay services",
    "Benicia installation",
    "certified installer"
  ],
  openGraph: {
    title: "East Bay Blinds - Window Treatment Services & Professional Installation",
    description: "Professional window treatment services including free consultation and certified installation. Serving Solano & Contra Costa Counties.",
    url: "https://eastbayblinds.com/services",
    images: [
      {
        url: "/Hero-Home.webp",
        width: 1200,
        height: 630,
        alt: "Professional Window Treatment Services by East Bay Blinds"
      }
    ],
  },
  twitter: {
    title: "East Bay Blinds - Window Treatment Services & Professional Installation",
    description: "Professional services including free consultation and certified installation in Solano & Contra Costa Counties.",
    images: ["/Hero-Home.webp"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 