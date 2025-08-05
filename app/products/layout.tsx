import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Norman® Window Treatments - Shutters, Blinds & Shades | East Bay Blinds",
  description:
    "Browse our complete Norman® collection: custom shutters, wood blinds, cellular shades & more. Professional installation throughout the East Bay. Free consultation available.",
  keywords: [
    "window treatment products",
    "Norman products",
    "shutters blinds shades",
    "window coverings",
    "custom window treatments",
    "East Bay products",
    "Lafayette window treatments",
    "Orinda blinds products",
    "Walnut Creek shutters",
    "Moraga window products",
    "Danville window treatments",
    "Alamo blinds and shutters",
    "Martinez window products",
    "Pleasant Hill window treatments",
    "Dublin blinds and shades",
    "San Ramon window coverings",
    "Bay Area window products",
    "plantation shutters",
    "wood blinds",
    "faux wood blinds",
    "cellular shades",
    "honeycomb shades",
    "roller shades",
    "roman shades",
    "vertical blinds",
    "horizontal blinds",
    "motorized options",
    "cordless window treatments",
    "energy efficient products",
    "child safe window treatments",
    "smart home integration",
    "automated window treatments",
    "custom sizing",
    "professional grade products",
    "premium materials",
    "lifetime warranty products",
  ],
  openGraph: {
    title:
      "East Bay Blinds - Norman® Window Treatment Products | Shutters, Blinds & Shades",
    description:
      "Complete Norman® collection with professional installation. Shutters, blinds, and shades for every home in the East Bay.",
    url: "https://www.eastbayblinds.com/products",
    images: [
      {
        url: "/Hero-Home.webp",
        width: 1200,
        height: 630,
        alt: "Complete Window Treatment Products by East Bay Blinds",
      },
    ],
  },
  twitter: {
    title:
      "East Bay Blinds - Norman® Window Treatment Products | Shutters, Blinds & Shades",
    description:
      "Complete Norman® collection with professional installation in Lafayette, Orinda, Walnut Creek & East Bay communities.",
    images: ["/Hero-Home.webp"],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
