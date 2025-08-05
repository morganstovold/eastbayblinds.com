import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About East Bay Blinds - Larry Collins, Norman® Certified Dealer | 20+ Years Experience",
  description:
    "Meet Larry Collins, owner of East Bay Blinds with 20+ years experience. Norman® certified dealer serving Lafayette, Orinda, Walnut Creek with personalized service & expert installation.",
  keywords: [
    "about East Bay Blinds",
    "Larry Collins",
    "Norman dealer",
    "certified installer",
    "20 years experience",
    "family owned business",
    "Lafayette window treatments",
    "Orinda blinds company",
    "Walnut Creek shutters",
    "Moraga window treatment company",
    "Danville blinds installer",
    "Alamo shutters dealer",
    "Martinez window treatments",
    "Pleasant Hill blinds company",
    "Dublin shutters installer",
    "San Ramon window treatment dealer",
    "Bay Area Norman dealer",
    "East Bay window treatment company",
    "professional installation",
    "no pressure consultation",
    "owner operated",
    "certified professional",
    "licensed installer",
    "insured contractor",
    "local business",
    "community focused",
    "personalized service",
    "expert advice",
    "quality workmanship",
    "reliable service",
    "trusted installer",
    "experienced professional",
    "art background",
    "advertising background",
    "design expertise",
    "color consultation expert",
    "style advisor",
    "home improvement specialist",
    "interior design consultant",
    "window treatment specialist",
    "Norman certified",
    "manufacturer trained",
    "installation expert",
    "measurement specialist",
    "custom solutions",
    "problem solver",
    "customer focused",
    "satisfaction guaranteed",
    "lifetime warranty provider",
    "after sales support",
    "maintenance services",
    "repair services",
    "East Bay resident",
    "local community member",
    "small business owner",
    "entrepreneur",
  ],
  openGraph: {
    title:
      "East Bay Blinds - About Us | Larry Collins, Norman® Certified Dealer",
    description:
      "Family-owned Norman® dealer with over 20 years of experience. Personalized service and certified installation in Lafayette, Orinda, Walnut Creek & East Bay communities.",
    url: "https://www.eastbayblinds.com/about",
    images: [
      {
        url: "/Hero-About.jpg",
        width: 1200,
        height: 630,
        alt: "About East Bay Blinds - Your Local Window Treatment Experts",
      },
    ],
  },
  twitter: {
    title: "East Bay Blinds - About Us | 20+ Years Experience",
    description:
      "Family-owned Norman® dealer with certified installation. Serving Lafayette, Orinda, Walnut Creek & East Bay communities with personalized service.",
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
