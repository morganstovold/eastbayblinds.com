"use client";

import React from "react";
import Link from "next/link";
import { businessInfo } from "@/lib/data";
import { Phone, MapPin, ExternalLink, Star, Home } from "lucide-react";

import Image from "next/image";
import Logo from "@/public/EastBayBlinds-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
  ];

  const productLinks = [
    { title: "Shutters", href: "/products/shutters" },
    { title: "Blinds", href: "/products/blinds" },
    { title: "Shades", href: "/products/shades" },
    { title: "All Products", href: "/products" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-0">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Image
                src={Logo}
                alt="East Bay Blinds Logo"
                width={125}
                height={125}
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                {businessInfo.tagline}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Serving Solano and Contra Costa counties with premium Norman®
                window treatments since 2006. Professional installation and
                lifetime warranty on all products.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Products</h3>
                <ul className="space-y-2">
                  {productLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-400 text-sm">
                      {businessInfo.address}
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Available by appointment only
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Find Us Online</h3>
                <div className="space-y-3">
                  <a
                    href={businessInfo.socialLinks.yelp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <Star className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">Read our Yelp reviews</span>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href={businessInfo.socialLinks.houzz}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <Home className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">View our Houzz portfolio</span>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm font-medium"
                >
                  Free Consultation
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} {businessInfo.name}. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <Link
                href="/admin"
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                title="Admin Dashboard"
              >
                Admin
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
