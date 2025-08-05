import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Custom Norman® Plantation Shutters | Professional Installation | East Bay Blinds",
  description:
    "Custom Norman® plantation shutters for any window size or shape. Professional installation in Lafayette, Orinda, Walnut Creek. Energy efficient with lifetime warranty. Free consultation!",
  keywords: [
    "Norman shutters",
    "plantation shutters",
    "interior shutters",
    "custom shutters",
    "wood shutters",
    "Lafayette shutters",
    "Orinda plantation shutters",
    "Walnut Creek custom shutters",
    "Moraga interior shutters",
    "Danville shutters",
    "Alamo plantation shutters",
    "Martinez custom shutters",
    "Pleasant Hill shutters",
    "Dublin plantation shutters",
    "San Ramon interior shutters",
    "Bay Area shutters",
    "East Bay shutters",
    "Solano County shutters",
    "Contra Costa County shutters",
    "energy efficient shutters",
    "professional shutter installation",
    "interior plantation shutters",
    "shutters for sliding doors",
    "shutters for french doors",
    "shutters for bay windows",
    "white plantation shutters",
    "natural wood shutters",
    "painted shutters",
    "stained wood shutters",
    "moisture resistant shutters",
    "bathroom shutters",
    "bedroom shutters",
    "living room shutters",
    "kitchen shutters",
    "office shutters",
    "custom shutter colors",
    "shutter louver sizes",
    "full height shutters",
    "cafe shutters",
    "tier on tier shutters",
    "motorized shutters",
    "cordless shutters",
    "child safe shutters",
    "energy saving shutters",
    "UV protection shutters",
    "noise reduction shutters",
    "custom shutter installation",
    "shutter repair services",
    "shutter maintenance",
    "premium shutter materials",
    "lifetime warranty shutters",
  ],
  openGraph: {
    title:
      "East Bay Blinds - Custom Norman® Plantation Shutters | Professional Installation",
    description:
      "Custom Norman® plantation shutters with professional installation. Energy efficient and beautiful interior shutters for your East Bay home.",
    url: "https://www.eastbayblinds.com/products/shutters",
    images: [
      {
        url: "/Hero-Shutters.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Norman Plantation Shutters by East Bay Blinds",
      },
    ],
  },
  twitter: {
    title:
      "East Bay Blinds - Custom Norman® Plantation Shutters | Professional Installation",
    description:
      "Custom plantation shutters with professional installation in Lafayette, Orinda, Walnut Creek & East Bay communities.",
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
