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
import BlindsTypesSection from "@/components/BlindsTypesSection";
import HeroBackground from "@/public/Hero-Blinds.webp";
import BlindsImage from "@/public/Ultimate-Faux-Wood-Blinds.webp";

export default async function BlindsPage() {
  const { products } = await getProductsData();
  const blindProducts = products.filter((product) => product.category === "blinds");

  const blindBenefits = [
    {
      icon: "Sun",
      title: "Light Control",
      description:
        "Precise control over natural light with adjustable slats for optimal comfort.",
    },
    {
      icon: "Shield",
      title: "Privacy Protection",
      description:
        "Complete privacy control while maintaining visibility and airflow.",
    },
    {
      icon: "Droplets",
      title: "Moisture Resistant",
      description:
        "Perfect for bathrooms and kitchens with moisture-resistant materials.",
    },
    {
      icon: "Wrench",
      title: "Easy Operation",
      description: "Smooth operation with cordless options for child safety.",
    },
  ];

  const blindFeatures = [
    "Adjustable slats for perfect light control",
    "Wide range of colors and finishes",
    "Cordless and motorized options available",
    "Easy to clean and maintain",
    "Durable construction for long-lasting use",
    "Perfect for any room in your home",
  ];

  const blindTypes = [
    {
      title: "Horizontal Blinds",
      description:
        "Classic horizontal slats perfect for most window types and room styles.",
      features: [
        "Wood, faux wood, and aluminum options",
        "Various slat sizes",
        "Cordless operation",
        "Custom colors",
      ],
    },
    {
      title: "Vertical Blinds",
      description:
        "Ideal for sliding doors and large windows with vertical light control.",
      features: [
        "Fabric and vinyl materials",
        "Smooth traversing operation",
        "Easy maintenance",
        "Modern styling",
      ],
    },
    {
      title: "Mini Blinds",
      description:
        "Compact design perfect for smaller windows and contemporary spaces.",
      features: [
        "Slim profile",
        "Aluminum construction",
        "Multiple color options",
        "Affordable pricing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        title="Premium Blinds"
        subtitle="Versatile Light Control Solutions"
        description="Explore our extensive collection of blinds that offer perfect light control, privacy, and style for every space."
        mobileDescription="Premium blinds for perfect light control and privacy."
        ctaText="Free Consultation"
        ctaHref="/contact"
        height="xl"
        backgroundImage={HeroBackground}
      />

      <ProductOverview
        title="Why Choose Our Blinds?"
        description="Our blinds combine functionality with style, offering precise light control and privacy while enhancing your home's décor. From classic wood blinds to modern faux wood options, we have the perfect solution for every room."
        features={blindFeatures}
        image={BlindsImage}
      />

      <ProductBenefits
        title="Blind Benefits"
        subtitle="Experience the advantages of professional blind installation"
        benefits={blindBenefits}
      />

      {/* Blind Types Section */}
      <BlindsTypesSection blindTypes={blindTypes} />

      <InstallationProcess
        backgroundColor="bg-gray-50"
        steps={[
          {
            step: "1",
            title: "Consultation & Measurement",
            description:
              "Our expert team visits your home to assess your windows and discuss your blind preferences.",
          },
          {
            step: "2",
            title: "Custom Manufacturing",
            description:
              "Your blinds are crafted to precise measurements using premium materials and finishes.",
          },
          {
            step: "3",
            title: "Professional Installation",
            description:
              "Our certified installers ensure perfect mounting and smooth operation of your blinds.",
          },
        ]}
      />

      <ProductCollection
        title="Our Blind Collection"
        subtitle="Premium blinds from trusted manufacturers"
        products={blindProducts}
        backgroundColor="bg-white"
      />

      <CTA
        title="Ready for Perfect Blinds?"
        description="Get the light control and privacy you need with our premium blinds and save with federal tax credits"
        primaryButtonText="Free Consultation"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
