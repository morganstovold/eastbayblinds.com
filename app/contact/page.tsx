"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { businessInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Phone, MapPin, Car, Shield, User } from "lucide-react";
import HeroContactImage from "@/public/Hero-Contact.jpg";
import CTA from "@/components/CTA";

export default function ContactPage() {
  const whyChooseUs = [
    {
      icon: User,
      title: "Expert Consultation",
      description: "Professional advice tailored to your needs and budget",
    },
    {
      icon: Car,
      title: "Free In-Home Service",
      description: "We come to you with samples and measurements",
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "All products backed by comprehensive warranty",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        title="Contact Us"
        subtitle="Get Your Free In-Home Consultation"
        description="Ready to transform your windows? We bring the showroom to you with our convenient in-home consultation service."
        mobileDescription="Ready to transform your windows? We come to you!"
        ctaText="Schedule Consultation"
        ctaHref="#contact-form"
        height="lg"
        backgroundImage={HeroContactImage}
        showPhone={false}
      />

      {/* Contact Information & Form */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide convenient in-home consultations throughout the East
              Bay area
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Right Side - Contact Information */}
            <div className="flex flex-col justify-center space-y-12">
              {/* Phone Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Call for Consultation
                </h3>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors block mb-2"
                >
                  {businessInfo.phone}
                </a>
                <p className="text-gray-600">Available by appointment only</p>
              </motion.div>

              {/* Service Area */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Service Area
                </h3>
                <p className="font-semibold text-gray-900 text-lg mb-2">
                  Solano & Contra Costa Counties
                </p>
                <p className="text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Including Benicia, Vallejo, Fairfield, Vacaville, Concord,
                  Walnut Creek, and surrounding areas
                </p>
              </motion.div>
            </div>

            {/* Left Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Request Your Free Consultation
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll schedule your in-home
                    consultation within 24 hours.
                  </p>
                </div>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose East Bay Blinds?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of professional service and quality
              products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Transform Your Windows?"
        description="Schedule your free in-home consultation today and discover the perfect window treatments for your space"
        primaryButtonText="Schedule Consultation"
        primaryButtonHref="#contact-form"
        secondaryButtonText="Call Now"
        secondaryButtonHref={`tel:${businessInfo.phone}`}
      />

      <Footer />
    </div>
  );
}
