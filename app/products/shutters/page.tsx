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
import TaxCreditSection from "@/components/TaxCreditSection";
import HeroBackground from "@/public/Hero-Shutters.jpg";
import ShuttersImage from "@/public/Normandy-Shutters.webp";

export default async function ShuttersPage() {
  const { products } = await getProductsData();
  const shutterProducts = products.filter((product) => product.category === "shutters");

  const shutterBenefits = [
    {
      icon: "Shield",
      title: "Durability & Longevity",
      description:
        "Built to last with premium materials that withstand daily use and weather conditions.",
    },
    {
      icon: "Palette",
      title: "Customizable Style",
      description:
        "Choose from various finishes, colors, and louver sizes to match your home decor.",
    },
    {
      icon: "Home",
      title: "Increased Home Value",
      description:
        "Shutters are a premium feature that adds lasting value to your property.",
    },
    {
      icon: "Wrench",
      title: "Easy Maintenance",
      description:
        "Simple to clean and maintain with occasional dusting and gentle cleaning.",
    },
  ];

  const shutterFeatures = [
    "Light control with adjustable louvers",
    "Enhanced privacy and security",
    "Energy efficiency and insulation",
    "Noise reduction capabilities",
    "UV protection for furniture and flooring",
    "Moisture resistance in high-humidity areas",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        title="Shutters"
        subtitle="Any Color. Any Size. Any Shape."
        description="Interior shutters, often referred to as plantation shutters, are one of the most versatile, timeless and elegant window treatments available. Norman® shutters are designed to fit any size or shape including sliding glass doors, specialty shapes and french doors."
        mobileDescription="Timeless plantation shutters for any window size or shape."
        ctaText="Free Consultation"
        ctaHref="/contact"
        height="xl"
        backgroundImage={HeroBackground}
      />

      <ProductOverview
        title="Why Choose Shutters?"
        description="Shutters offer the ultimate in light control, privacy and insulating value. They combine the charm of traditional window treatments with modern functionality, perfect for any room in your home, from living spaces to bedrooms and bathrooms."
        features={shutterFeatures}
        image={ShuttersImage}
      />

      <ProductBenefits
        title="Shutter Benefits"
        subtitle="Experience the advantages of professional shutter installation"
        benefits={shutterBenefits}
      />

      <InstallationProcess
        backgroundColor="bg-white"
        steps={[
          {
            step: "1",
            title: "Consultation & Measurement",
            description:
              "Our expert team visits your home to assess your windows and discuss your preferences.",
          },
          {
            step: "2",
            title: "Custom Manufacturing",
            description:
              "Your shutters are crafted to precise measurements using premium materials.",
          },
          {
            step: "3",
            title: "Professional Installation",
            description:
              "Our certified installers ensure perfect mounting and smooth operation.",
          },
        ]}
      />

      <ProductCollection
        title="Our Shutter Collection"
        subtitle="Explore our range of shutters crafted to fit any size, shape, color, lifestyle or budget"
        products={shutterProducts}
        backgroundColor="bg-gray-50"
      />

      <TaxCreditSection backgroundColor="bg-white" />

      <CTA
        title="Ready for Beautiful Shutters?"
        description="Transform your windows with our premium shutters and save with federal tax credits"
        primaryButtonText="Free Consultation"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
