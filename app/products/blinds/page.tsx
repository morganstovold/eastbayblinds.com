"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/lib/data";
import { motion } from "framer-motion";
import { Check, Sun, Shield, Droplets, Wrench } from "lucide-react";
import CTA from "@/components/CTA";
import InstallationProcess from "@/components/InstallationProcess";
import ProductCollection from "@/components/ProductCollection";
import HeroBackground from "@/public/Hero-Blinds.webp";

export default function BlindsPage() {
  const blindProducts = products.filter(
    (product) => product.category === "blinds"
  );

  const blindBenefits = [
    {
      icon: Sun,
      title: "Light Control",
      description:
        "Precise control over natural light with adjustable slats for optimal comfort.",
    },
    {
      icon: Shield,
      title: "Privacy Protection",
      description:
        "Complete privacy control while maintaining visibility and airflow.",
    },
    {
      icon: Droplets,
      title: "Moisture Resistant",
      description:
        "Perfect for bathrooms and kitchens with moisture-resistant materials.",
    },
    {
      icon: Wrench,
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
        ctaText="Free Consultation"
        ctaHref="/contact"
        height="xl"
        backgroundImage={HeroBackground}
      />

      {/* Blinds Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Blinds?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our blinds combine functionality with style, offering precise
                light control and privacy while enhancing your home's décor.
                From classic wood blinds to modern faux wood options, we have
                the perfect solution for every room.
              </p>

              <div className="space-y-4">
                {blindFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-300 rounded-lg h-96 flex items-center justify-center"
            >
              <div className="text-center text-gray-600">
                <div className="text-6xl mb-4">🏠</div>
                <div className="text-lg font-medium">Beautiful Blinds</div>
                <div className="text-sm text-gray-500 mt-2">
                  Image Placeholder
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blind Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of professional blind installation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blindBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blind Types Section */}
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
              Types of Blinds
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect blind style for your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blindTypes.map((type, index) => (
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
        description="Get the light control and privacy you need with our premium blinds"
        primaryButtonText="Free Consultation"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
