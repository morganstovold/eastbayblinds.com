"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/lib/data";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  mobileDescription?: string; // Optional shorter description for mobile
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: StaticImageData;
  height?: "sm" | "md" | "lg" | "xl" | "full";
  showPhone?: boolean; // Option to hide phone on mobile
}

export default function Hero({
  title,
  subtitle,
  description,
  mobileDescription,
  ctaText = "Free Consultation",
  ctaHref = "/contact",
  backgroundImage,
  height = "lg",
  showPhone = true,
}: HeroProps) {
  const heightClasses = {
    sm: "h-[50vh] min-h-[400px]",
    md: "h-[55vh] min-h-[450px]", 
    lg: "h-[65vh] min-h-[500px]",
    xl: "h-[75vh] min-h-[600px]",
    full: "h-screen",
  };

  // Truncate long titles on mobile
  const truncateTitle = (text: string, maxLength: number = 50) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gray-400">
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover"
            fill
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 flex items-center justify-center">
            <div className="text-gray-600 text-center">
              <div className="text-4xl mb-2">🏠</div>
              <div className="text-lg font-medium">
                Beautiful Window Treatments
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Hero Background Image
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-0 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-lg lg:text-xl text-white/90 mb-3 sm:mb-4 font-medium"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            {/* Show truncated title on very small screens */}
            <span className="block sm:hidden">{truncateTitle(title, 40)}</span>
            <span className="hidden sm:block">{title}</span>
          </motion.h1>

          {(description || mobileDescription) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-6 sm:mb-8"
            >
              {/* Mobile description (shorter) */}
              {mobileDescription && (
                <p className="block sm:hidden text-base text-white/90 max-w-sm mx-auto leading-relaxed">
                  {mobileDescription}
                </p>
              )}
              
              {/* Desktop description */}
              {description && (
                <p className={`${mobileDescription ? 'hidden sm:block' : ''} text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed`}>
                  {description}
                </p>
              )}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col gap-3 sm:gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>

            {showPhone && (
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-white/90">
                <span className="text-xs sm:text-sm">or call us at</span>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-sm sm:text-lg font-semibold hover:text-white transition-colors"
                >
                  {businessInfo.phone}
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hide on small screens to reduce clutter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
