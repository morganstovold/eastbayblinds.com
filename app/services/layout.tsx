import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Treatment Services - Free Consultation & Installation | East Bay Blinds",
  description: "Professional window treatment services including free consultation, expert measurement, and certified installation. Serving Lafayette, Orinda, Moraga, Danville & East Bay communities.",
  keywords: [
    "window treatment services",
    "professional installation",
    "free consultation", 
    "in-home consultation",
    "Norman certified installation",
    "window treatment consultation",
    "East Bay services",
    "Lafayette installation",
    "Orinda window treatment services",
    "Walnut Creek installation",
    "Moraga window treatments",
    "Danville installation services",
    "Alamo window treatment consultation",
    "Martinez installation",
    "Pleasant Hill window services",
    "Dublin installation services",
    "San Ramon window treatments",
    "Bay Area installation services",
    "certified installer",
    "professional measurement",
    "expert installation",
    "window treatment repair",
    "maintenance services",
    "same day service",
    "emergency repair",
    "commercial installation",
    "residential services",
    "office window treatments",
    "home consultation",
    "appointment scheduling"
  ],
  openGraph: {
    title: "East Bay Blinds - Window Treatment Services & Professional Installation",
    description: "Professional window treatment services including free consultation, expert measurement, and certified installation. Serving Lafayette, Orinda, Moraga, Danville & East Bay communities.",
    url: "https://www.eastbayblinds.com/services",
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
    description: "Professional services including free consultation and certified installation in Lafayette, Orinda, Walnut Creek & East Bay communities.",
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