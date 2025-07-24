import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { getProductsData } from "@/lib/admin-actions";
import CTA from "@/components/CTA";
import ProductBenefits from "@/components/ProductBenefits";
import InstallationProcess from "@/components/InstallationProcess";
import ProductOverview from "@/components/ProductOverview";
import ProductCollection from "@/components/ProductCollection";
import ShadesTypesSection from "@/components/ShadesTypesSection";
import HeroBackground from "@/public/Hero-Shades.webp";
import ShadesImage from "@/public/Portrait-Honecomb-Shades.webp";

export default async function ShadesPage() {
  const { products } = await getProductsData();
  const shadeProducts = products.filter((product) => product.category === "shades");

  const shadeBenefits = [
    {
      icon: "Sun",
      title: "Light Filtering",
      description:
        "Control natural light while maintaining your view and connection to the outdoors.",
    },
    {
      icon: "Moon",
      title: "Privacy Options",
      description:
        "From sheer to blackout, choose your level of privacy and light control.",
    },
    {
      icon: "Thermometer",
      title: "Energy Efficiency",
      description:
        "Cellular construction provides insulation to reduce heating and cooling costs.",
    },
    {
      icon: "Palette",
      title: "Style Variety",
      description:
        "Wide range of fabrics, textures, and colors to match any decor.",
    },
  ];

  const shadeFeatures = [
    "Cordless and motorized options for safety",
    "Energy-efficient cellular construction",
    "UV protection for furniture and flooring",
    "Sound absorption for quieter spaces",
    "Easy operation and maintenance",
    "Custom sizing for perfect fit",
  ];

  const shadeTypes = [
    {
      title: "Cellular/Honeycomb Shades",
      description:
        "Energy-efficient shades with honeycomb construction for superior insulation.",
      features: [
        "Maximum energy efficiency",
        "Sound absorption",
        "Light filtering options",
        "Cordless safety",
      ],
    },
    {
      title: "Roller Shades",
      description:
        "Clean, modern design with smooth operation and endless fabric options.",
      features: [
        "Modern aesthetics",
        "Motorization ready",
        "Blackout options",
        "Easy maintenance",
      ],
    },
    {
      title: "Roman Shades",
      description:
        "Elegant fabric shades that fold into soft pleats for a luxurious look.",
      features: [
        "Luxury fabrics",
        "Tailored appearance",
        "Custom options",
        "Sophisticated style",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        title="Window Shades"
        subtitle="Elegant Light Control Solutions"
        description="Discover our comprehensive collection of window shades that combine style, functionality, and energy efficiency."
        mobileDescription="Stylish window shades with energy efficiency."
        ctaText="Free Consultation"
        ctaHref="/contact"
        height="xl"
        backgroundImage={HeroBackground}
      />

      <ProductOverview
        title="Why Choose Window Shades?"
        description="Window shades offer the perfect blend of style and functionality. From energy-efficient cellular shades to elegant roman shades, our collection provides solutions for every room and design preference while delivering superior light control and privacy."
        features={shadeFeatures}
        image={ShadesImage}
      />

      <ProductBenefits
        title="Shade Benefits"
        subtitle="Experience the advantages of premium window shades"
        benefits={shadeBenefits}
      />

      {/* Shade Types Section */}
      <ShadesTypesSection shadeTypes={shadeTypes} />

      <InstallationProcess
        backgroundColor="bg-gray-50"
        steps={[
          {
            step: "1",
            title: "Consultation & Measurement",
            description:
              "Our expert team visits your home to assess your windows and discuss your shade preferences.",
          },
          {
            step: "2",
            title: "Custom Manufacturing",
            description:
              "Your shades are crafted to precise measurements using premium fabrics and materials.",
          },
          {
            step: "3",
            title: "Professional Installation",
            description:
              "Our certified installers ensure perfect mounting and smooth operation of your shades.",
          },
        ]}
      />

      <ProductCollection
        title="Our Shade Collection"
        subtitle="Premium shades featuring innovative technology and beautiful design"
        products={shadeProducts}
        backgroundColor="bg-white"
      />

      <CTA
        title="Ready for Beautiful Shades?"
        description="Transform your windows with our premium shade collection and save with federal tax credits"
        primaryButtonText="Free Consultation"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
