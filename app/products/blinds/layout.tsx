import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Premium Wood & Faux Wood Blinds | Motorized Options | East Bay Blinds",
  description:
    "Premium wood, faux wood & aluminum blinds with motorized options. Custom fit for East Bay homes. Professional installation in Lafayette, Orinda, Danville. Call (925) 200-4521!",
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
    "Lafayette blinds",
    "Orinda custom blinds",
    "Walnut Creek wood blinds",
    "Moraga faux wood blinds",
    "Danville premium blinds",
    "Alamo motorized blinds",
    "Martinez custom blinds",
    "Pleasant Hill wood blinds",
    "Dublin blinds installation",
    "San Ramon blinds",
    "Bay Area blinds",
    "East Bay blinds",
    "2 inch wood blinds",
    "faux wood bathroom blinds",
    "motorized blinds smart home",
    "cordless blinds child safety",
    "venetian blinds",
    "wide slat blinds",
    "vertical blinds patio doors",
    "mini blinds office",
    "blackout blinds bedroom",
    "waterproof bathroom blinds",
    "1 inch mini blinds",
    "2.5 inch wood blinds",
    "bamboo blinds",
    "composite blinds",
    "PVC blinds",
    "moisture resistant blinds",
    "energy efficient blinds",
    "UV protection blinds",
    "light filtering blinds",
    "room darkening blinds",
    "custom blind colors",
    "stained wood blinds",
    "painted wood blinds",
    "natural wood blinds",
    "white blinds",
    "bedroom blinds",
    "living room blinds",
    "kitchen blinds",
    "bathroom blinds",
    "office blinds",
    "dining room blinds",
    "family room blinds",
    "smart blinds automation",
    "remote control blinds",
    "app controlled blinds",
    "Alexa compatible blinds",
    "Google Home blinds",
    "automated window blinds",
    "professional blind installation",
    "blind repair services",
    "blind maintenance",
    "custom blind sizing",
    "inside mount blinds",
    "outside mount blinds",
  ],
  openGraph: {
    title: "East Bay Blinds - Premium Blinds | Wood, Faux Wood & Aluminum",
    description:
      "Premium Norman® blinds with professional installation. Wood, faux wood, and aluminum options with motorization available.",
    url: "https://www.eastbayblinds.com/products/blinds",
    images: [
      {
        url: "/Hero-Blinds.webp",
        width: 1200,
        height: 630,
        alt: "Premium Blinds Collection by East Bay Blinds",
      },
    ],
  },
  twitter: {
    title: "East Bay Blinds - Premium Blinds | Wood, Faux Wood & Aluminum",
    description:
      "Premium Norman® blinds with professional installation in Lafayette, Orinda, Walnut Creek & East Bay communities.",
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
