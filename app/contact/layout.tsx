import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact East Bay Blinds - Free Consultation | Lafayette, Orinda, Walnut Creek",
  description:
    "Schedule your free in-home window treatment consultation today! Serving Lafayette, Orinda, Moraga, Danville, Walnut Creek & East Bay. Call (925) 200-4521 or request online.",
  keywords: [
    "free consultation",
    "in-home consultation",
    "window treatment consultation",
    "East Bay Blinds contact",
    "Lafayette window treatments",
    "Orinda consultation",
    "Walnut Creek window treatments",
    "Moraga blinds consultation",
    "Danville shutters consultation",
    "Alamo window treatment consultation",
    "Martinez blinds contact",
    "Pleasant Hill shutters consultation",
    "Dublin window treatment consultation",
    "San Ramon blinds consultation",
    "Bay Area window treatment consultation",
    "Solano County blinds",
    "Contra Costa County shutters",
    "professional installation",
    "(925) 200-4521",
    "appointment scheduling",
    "free estimate",
    "free measurement",
    "no obligation consultation",
    "expert consultation",
    "professional advice",
    "custom window treatments",
    "Norman dealer consultation",
    "certified installer contact",
    "window treatment expert",
    "local window treatment company",
    "family owned business",
    "owner operated",
    "Larry Collins",
    "East Bay window treatment specialist",
    "same day consultation",
    "evening appointments",
    "weekend consultations",
    "flexible scheduling",
    "home visit",
    "showroom at home",
    "samples brought to you",
    "measure and quote",
    "design consultation",
    "style consultation",
    "color consultation",
    "product selection help",
    "budget consultation",
    "financing options",
    "payment plans",
    "warranty information",
    "installation timeline",
    "project planning",
  ],
  openGraph: {
    title: "East Bay Blinds - Contact Us for Free In-Home Consultation",
    description:
      "Get your free in-home consultation for premium Norman® window treatments. Expert service in Lafayette, Orinda, Walnut Creek & East Bay communities.",
    url: "https://www.eastbayblinds.com/contact",
    images: [
      {
        url: "/Hero-Contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact East Bay Blinds for Free In-Home Consultation",
      },
    ],
  },
  twitter: {
    title: "East Bay Blinds - Contact Us for Free In-Home Consultation",
    description:
      "Get your free consultation for premium window treatments. Serving Lafayette, Orinda, Walnut Creek & East Bay with expert installation.",
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
