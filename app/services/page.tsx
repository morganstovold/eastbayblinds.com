"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { services } from "@/lib/data";
import { motion } from "framer-motion";
import { Check, Award, Users, Wrench } from "lucide-react";
import CTA from "@/components/CTA";
import Image from "next/image";
import ServicesGrid from "@/components/ServicesGrid";
import HeroBackground from "@/public/Hero-Shutters.jpg";
import OurServiceGuarantee from "@/public/Woodlore-Shutters.webp";

export default function ServicesPage() {
  const processSteps = [
    {
      step: "1",
      title: "Free Consultation",
      description:
        "Schedule your complimentary in-home consultation where our experts will assess your windows and discuss your needs.",
      icon: Users,
    },
    {
      step: "2",
      title: "Design & Selection",
      description:
        "Choose from our extensive collection of samples and work with our designers to find the perfect solution.",
      icon: Award,
    },
    {
      step: "3",
      title: "Precise Measurement",
      description:
        "Our professionals take exact measurements to ensure your custom window treatments fit perfectly.",
      icon: Wrench,
    },
    {
      step: "4",
      title: "Manufacturing",
      description:
        "Your window treatments are custom-made with premium materials and attention to detail.",
      icon: Award,
    },
    {
      step: "5",
      title: "Professional Installation",
      description:
        "Our certified installers ensure perfect mounting and smooth operation of your new window treatments.",
      icon: Wrench,
    },
  ];

  const serviceGuarantees = [
    "Free in-home consultation and measurement",
    "Lifetime warranty on all products",
    "Professional installation included",
    "Expert design consultation",
    "Child-safe cordless options",
    "Motorization and smart home integration",
    "Post-installation support and maintenance",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        title="Our Services"
        subtitle="Complete Window Treatment Solutions"
        description="From consultation to installation and beyond, we provide comprehensive services to transform your windows with style and functionality."
        mobileDescription="Complete window treatment services from consultation to installation."
        ctaText="Free Consultation"
        ctaHref="/contact"
        height="xl"
        backgroundImage={HeroBackground}
      />

      <ServicesGrid
        title="What We Offer"
        subtitle="Comprehensive services designed to meet all your window treatment needs"
        services={services}
        backgroundColor="bg-gray-50"
        showAllFeatures={true}
        showViewAllButton={false}
      />

      {/* Service Process */}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final installation, we ensure a
              smooth and professional experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full font-bold text-xl mb-4">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Service Guarantee
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We stand behind our work with comprehensive guarantees and
                exceptional service standards. Your satisfaction is our priority
                from the first consultation through ongoing support.
              </p>

              <div className="space-y-4">
                {serviceGuarantees.map((guarantee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{guarantee}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src={OurServiceGuarantee}
                alt="Our Service Guarantee"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Get Started?"
        description="Schedule your free consultation today and experience the East Bay Blinds difference"
        primaryButtonText="Schedule Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="Call Now"
        secondaryButtonHref="tel:(925) 200-4521"
      />

      <Footer />
    </div>
  );
}
