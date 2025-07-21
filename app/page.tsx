import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { businessInfo, products, services } from "@/lib/data";
import { getYelpDataForPage } from "@/lib/yelp-service";
import { AnimatedSection, AnimatedGrid } from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Home, Shield, Star } from "lucide-react";
import HeroBackground from "@/public/Hero-Home.webp";
import CTA from "@/components/CTA";
import ServicesGrid from "@/components/ServicesGrid";
import YelpReviewsSection from "@/components/YelpReviewsSection";

export const metadata: Metadata = {
  title: "East Bay Blinds - Premium Norman® Window Treatments | Shutters, Blinds & Shades",
  description: "Transform your home with premium Norman® window treatments. East Bay Blinds offers custom shutters, blinds, and shades with professional installation in Solano & Contra Costa Counties. Free in-home consultation.",
  keywords: [
    "Norman shutters",
    "custom blinds",
    "window shades", 
    "plantation shutters",
    "East Bay window treatments",
    "Benicia blinds",
    "Solano County shutters",
    "professional installation",
    "free consultation",
    "energy efficient window coverings"
  ],
  openGraph: {
    title: "East Bay Blinds - Premium Norman® Window Treatments",
    description: "Transform your home with premium Norman® window treatments. Custom shutters, blinds, and shades with professional installation.",
    url: "https://eastbayblinds.com",
    images: [
      {
        url: "/Hero-Home.webp",
        width: 1200,
        height: 630,
        alt: "East Bay Blinds - Premium Window Treatments for Your Home"
      }
    ],
  },
  twitter: {
    title: "East Bay Blinds - Premium Norman® Window Treatments",
    description: "Transform your home with premium Norman® window treatments. Professional installation in Solano & Contra Costa Counties.",
    images: ["/Hero-Home.webp"],
  },
};

export default async function HomePage() {
  const featuredProducts = products.slice(0, 3);
  const featuredServices = services.slice(0, 4);
  
  // Fetch Yelp data on the server
  const yelpData = await getYelpDataForPage();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero
        title={businessInfo.name}
        subtitle="Get help finding the perfect window coverings."
        description="Transform your space with our custom-made window treatments. We provide a full-service solution that handles all aspects of installation."
        mobileDescription="Transform your space with custom window treatments and professional installation."
        ctaText="Request a Consultation"
        ctaHref="/contact"
        height="xl"
        backgroundImage={HeroBackground}
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
        <div className="container mx-auto px-4 sm:px-0">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium window treatments designed for style,
              durability, and functionality
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <AnimatedGrid key={product.id} delay={index * 0.1}>
                <ProductCard
                  product={product}
                  variant={index === 1 ? "featured" : "default"}
                />
              </AnimatedGrid>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-0">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose East Bay Blinds?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local expertise, premium quality, and exceptional service
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedGrid delay={0.1}>
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
            </AnimatedGrid>

            <AnimatedGrid delay={0.2}>
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
            </AnimatedGrid>

            <AnimatedGrid delay={0.3}>
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
            </AnimatedGrid>
          </div>
        </div>
      </section>

      {/* Yelp Reviews Section */}
      <YelpReviewsSection initialData={yelpData} />

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
