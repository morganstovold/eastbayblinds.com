"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { businessInfo, products, services, testimonials } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Shield, Star } from "lucide-react";
import HeroBackground from "@/public/Hero-Home.webp";
import CTA from "@/components/CTA";
import ServicesGrid from "@/components/ServicesGrid";

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);
  const featuredServices = services.slice(0, 4);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        title={businessInfo.tagline}
        subtitle="Get help finding the perfect window coverings."
        description="Transform your space with our custom-made window treatments. We provide a full-service solution that handles all aspects of installation."
        ctaText="Request a Consultation"
        ctaHref="/contact"
        height="xl"
        backgroundImage={HeroBackground.src}
      />

      <ServicesGrid
        title="Our Services"
        subtitle="From consultation to installation, we provide comprehensive window treatment solutions"
        services={featuredServices}
        backgroundColor="bg-gray-50"
        showViewAllButton={true}
        viewAllButtonText="View All Services"
        viewAllButtonHref="/services"
      />

      {/* Product Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium window treatments designed for style,
              durability, and functionality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard
                  product={product}
                  variant={index === 1 ? "featured" : "default"}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
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
              Local expertise, premium quality, and exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Home className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Local Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Serving the East Bay area for over 10 years with deep
                    understanding of local home styles and climate needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Lifetime Warranty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    All our products come with comprehensive lifetime warranty
                    and professional installation guarantee.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Premium Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We partner with leading manufacturers like Norman to bring
                    you the finest window treatments available.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from satisfied customers
              across the East Bay
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Credit Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Save Money on Window Treatments with Energy Tax Credits
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Save Energy. Get Money Back.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Did you know that purchasing energy-efficient window treatments
                can help you save money now and later? The world's best selling
                Woodlore® Shutters qualify for a Federal Energy Tax Credit,
                allowing you to receive 30% of your total purchase excluding
                measure and installation (up to $1,200 per year) back in tax
                savings.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Why Choose Norman® Energy-Efficient Shutters?
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Natural insulation helps regulate indoor temperatures
                      year-round
                    </li>
                    <li>
                      • Reduce the need for heating and cooling—lowering your
                      utility bills
                    </li>
                    <li>
                      • Built with durability, quality, innovation and
                      sustainability in mind
                    </li>
                    <li>
                      • Backed by a Limited Lifetime Warranty for lasting peace
                      of mind
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Next Steps
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Shop Eligible Products – Ask us about qualifying
                      shutters
                    </li>
                    <li>
                      • Save Your Documentation – Keep a copy of your invoice
                      and download the Manufacturer's Certification Statement
                    </li>
                    <li>
                      • File Your Tax Return – Consult with a tax professional
                      or use IRS Form 5695 to claim your credit
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-6">
                <p className="text-xl font-semibold text-primary mb-2">
                  Boost Energy Efficiency & Get Money Back
                </p>
                <p className="text-lg text-gray-700">
                  Save up to $1,200 on Shutters
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA
        title="Ready to Transform Your Home?"
        description="Schedule your free consultation today and discover the perfect window treatments for your space"
        primaryButtonText="Free Consultation"
        primaryButtonHref="/contact"
      />

      <Footer />
    </div>
  );
}
