import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact East Bay Blinds - Free In-Home Consultation | Window Treatment Experts",
  description: "Get your free in-home consultation for premium Norman® window treatments. East Bay Blinds serves Solano & Contra Costa Counties with expert installation. Call (925) 200-4521 or request consultation online.",
  keywords: [
    "free consultation",
    "in-home consultation", 
    "window treatment consultation",
    "East Bay Blinds contact",
    "Benicia window treatments",
    "Solano County blinds",
    "Contra Costa County shutters",
    "professional installation",
    "(925) 200-4521",
    "appointment scheduling"
  ],
  openGraph: {
    title: "East Bay Blinds - Contact Us for Free In-Home Consultation",
    description: "Get your free in-home consultation for premium Norman® window treatments. Expert service in Solano & Contra Costa Counties.",
    url: "https://eastbayblinds.com/contact",
    images: [
      {
        url: "/Hero-Contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact East Bay Blinds for Free In-Home Consultation"
      }
    ],
  },
  twitter: {
    title: "East Bay Blinds - Contact Us for Free In-Home Consultation",
    description: "Get your free consultation for premium window treatments. Serving Solano & Contra Costa Counties with expert installation.",
    images: ["/Hero-Contact.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 