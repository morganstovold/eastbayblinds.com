"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/lib/data";
import { motion } from "framer-motion";
import { Check, Sun, Moon, Thermometer, Palette } from "lucide-react";
import CTA from "@/components/CTA";
import ProductBenefits from "@/components/ProductBenefits";
import InstallationProcess from "@/components/InstallationProcess";
import ProductOverview from "@/components/ProductOverview";
import ProductCollection from "@/components/ProductCollection";
import TaxCreditSection from "@/components/TaxCreditSection";
import HeroBackground from "@/public/Hero-Shades.webp";
import ShadesImage from "@/public/Portrait-Honecomb-Shades.webp";

export default function ShadesPage() {
  const shadeProducts = products.filter(
    (product) => product.category === "shades"
  );

  const shadeBenefits = [
    {
      icon: Sun,
      title: "Light Filtering",
      description:
        "Control natural light while maintaining your view and connection to the outdoors.",
    },
    {
      icon: Moon,
      title: "Privacy Options",
      description:
        "From sheer to blackout, choose your level of privacy and light control.",
    },
    {
      icon: Thermometer,
      title: "Energy Efficiency",
      description:
        "Cellular construction provides insulation to reduce heating and cooling costs.",
    },
    {
      icon: Palette,
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Shades
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect shade style for your home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shadeTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <p className="text-gray-600">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      <TaxCreditSection backgroundColor="bg-gray-50" />

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
