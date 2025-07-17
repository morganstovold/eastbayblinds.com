"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Car,
  Shield,
  User,
  Calendar,
} from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our experts directly",
      value: businessInfo.phone,
      action: `tel:${businessInfo.phone}`,
      buttonText: "Call Now",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our showroom",
      value: businessInfo.address,
      action: `https://maps.google.com/?q=${encodeURIComponent(
        businessInfo.address
      )}`,
      buttonText: "Get Directions",
    },
  ];

  const serviceAreas = [
    "Oakland",
    "Berkeley",
    "Alameda",
    "Richmond",
    "Albany",
    "Emeryville",
    "Piedmont",
    "San Leandro",
    "Hayward",
    "Fremont",
    "Union City",
    "Newark",
  ];

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
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Appointments available evenings and weekends",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        title="Contact Us"
        subtitle="Get Your Free Consultation"
        description="Ready to transform your windows? Contact our expert team today for personalized service and professional installation."
        ctaText="Call Now"
        ctaHref={`tel:${businessInfo.phone}`}
        height="lg"
      />

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              Multiple ways to reach us for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                      <method.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <p className="text-gray-600">{method.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-medium text-gray-900">{method.value}</p>
                    <Button asChild className="w-full">
                      <a
                        href={method.action}
                        target={
                          method.action.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                      >
                        {method.buttonText}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Business Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm showTitle={false} />
            </motion.div>

            {/* Business Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(businessInfo.hours).map(([day, hours]) => (
                      <div
                        key={day}
                        className="flex justify-between items-center"
                      >
                        <span className="font-medium">{day}</span>
                        <span className="text-gray-600">{hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <div className="text-lg font-medium">Interactive Map</div>
                      <div className="text-sm text-gray-500 mt-1">
                        {businessInfo.address}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              For urgent repairs or consultations, call us directly. We offer
              same-day service for emergency situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="secondary"
                size="xl"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <a href={`tel:${businessInfo.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: {businessInfo.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
