"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Check,
  Award,
  Users,
  Heart,
  Star,
  Shield,
  Home,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import CTA from "@/components/CTA";
import HeroImage from "@/public/Hero-About.jpg";
import AboutImage from "@/public/Ultimate-Normandy-Wood-Blinds.webp";
import LarryCollins from "@/public/Larry-Collins.webp";

export default function AboutPage() {
  const companyValues = [
    {
      icon: Heart,
      title: "No Pressure Approach",
      description:
        "We listen to your needs and provide solutions that fit your lifestyle and budget with no pressure.",
    },
    {
      icon: Shield,
      title: "Owner-Operated Quality",
      description:
        "Sales and installation handled personally by certified professionals - no subcontractors.",
    },
    {
      icon: Users,
      title: "Shop-at-Home Experience",
      description:
        "Unique in-home consultation with samples and all the information needed for confident decisions.",
    },
    {
      icon: Home,
      title: "Norman® Products",
      description:
        "We specialize exclusively in Norman® window treatments, offering premium shutters, blinds, and shades.",
    },
  ];

  const teamMembers = [
    {
      name: "Larry Collins",
      role: "Owner & Founder",
      experience: "20+ years",
      specialties: [
        "Art & Advertising Background",
        "In-Home Consultation",
        "Certified Installation",
      ],
      image: LarryCollins,
      bio: "Larry Collins has had the pleasure of being self employed for over 20 years. With a background in art and advertising, he really enjoys meeting clients in their homes and guiding them through the vast array of window treatments. Larry is a certified installer who handles both sales and installation personally.",
    },
  ];

  const certifications = [
    {
      title: "Norman Certified Dealer",
      description: "Authorized dealer and installer for Norman Window Fashions",
      icon: Award,
    },
    {
      title: "Licensed & Insured",
      description:
        "Fully licensed contractor with comprehensive insurance coverage",
      icon: Shield,
    },
    {
      title: "Certified Installer",
      description: "Owner-operated with certified installation expertise",
      icon: Star,
    },
    {
      title: "Manufacturer Warranties",
      description:
        "Authorized to provide full manufacturer warranties on all products",
      icon: Check,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        title="About East Bay Blinds"
        subtitle="Your Local Window Treatment Experts"
        description="Since 2006, we've been transforming East Bay homes with premium window treatments and exceptional service."
        mobileDescription="East Bay's trusted window treatment experts since 2006."
        ctaText="Meet Our Team"
        ctaHref="#team"
        height="lg"
        backgroundImage={HeroImage}
      />

      {/* Company Story */}
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
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Serving Benicia, CA and the surrounding areas, East Bay Blinds
                  offers a wide selection of Norman® blinds, shades, shutters
                  and sheers. We bring our showroom to you! We want you to have
                  a great shopping experience with our professional service
                  before and after every sale.
                </p>
                <p>
                  East Bay Blinds is committed to excellent customer service.
                  Our unique shop-at-home experience provides you with samples
                  and all the information needed to make a confident window
                  treatment decision. We serve Solano and Contra Costa counties
                  with a goal to listen to your needs and provide the best
                  possible solution that fits your lifestyle and your budget.
                </p>
                <p>
                  Our certified installers will come to your home and install
                  your window treatments professionally. Since we're locally
                  owned and operated, we take our long-term commitment to the
                  community seriously, and we are proud of the professional
                  products and services we provide.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-300 rounded-lg h-96 flex items-center justify-center"
            >
              <Image
                src={AboutImage}
                alt="About Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
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
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The skilled professionals who make your window treatment dreams a
              reality
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 lg:w-1/4"
              >
                <Card className="h-full p-0 gap-0 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={200}
                    className="w-full h-72 object-cover object-top"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-3">
                      {member.experience} experience
                    </p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-gray-900">
                        Specialties:
                      </p>
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <div
                          key={specialtyIndex}
                          className="flex items-center gap-2 text-xs text-gray-600"
                        >
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Certifications & Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is backed by industry certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                      <cert.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
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
                Proudly Serving the East Bay
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're deeply rooted in the East Bay community and understand the
                unique character of local homes. We proudly serve Solano and
                Contra Costa counties, bringing the right expertise to every
                project.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Benicia",
                  "Vallejo",
                  "Fairfield",
                  "Vacaville",
                  "Suisun City",
                  "Dixon",
                  "Concord",
                  "Walnut Creek",
                  "Richmond",
                  "Antioch",
                  "Pittsburg",
                  "Brentwood",
                ].map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{city}</span>
                  </div>
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
                <div className="text-6xl mb-4">🗺️</div>
                <div className="text-lg font-medium">Service Area Map</div>
                <div className="text-sm text-gray-500 mt-2">
                  East Bay Coverage
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Work with Us?"
        description="Experience the East Bay Blinds difference. Let's transform your home together."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
