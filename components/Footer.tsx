"use client";

import React from "react";
import Link from "next/link";
import { businessInfo, navigationItems } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  ExternalLink,
} from "lucide-react";

import Image from "next/image";
import Logo from "@/public/EastBayBlinds-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {item.title}
                    </Link>
                    {item.children && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <Link
                              href={child.href}
                              className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-sm"
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us & Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href={businessInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={businessInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={businessInfo.socialLinks.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
                <a
                  href={businessInfo.socialLinks.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400 text-sm">
                    {businessInfo.address}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm font-medium border border-gray-600"
                >
                  Free Consultation
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Business Hours</h3>
              <div className="space-y-3">
                <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
                  <div className="text-left">
                    <p className="text-gray-400 text-sm mb-2">All Days:</p>
                    <p className="text-white font-medium mb-1">
                      By Appointment Only
                    </p>
                    <p className="text-gray-400 text-xs">
                      Call {businessInfo.phone} to schedule
                    </p>
                  </div>
                </div>
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
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
