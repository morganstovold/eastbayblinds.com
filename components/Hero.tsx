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
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: StaticImageData;
  height?: "sm" | "md" | "lg" | "xl" | "full";
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = "Free Consultation",
  ctaHref = "/contact",
  backgroundImage,
  height = "lg",
}: HeroProps) {
  const heightClasses = {
    sm: "h-[40vh] min-h-[400px]",
    md: "h-[50vh] min-h-[500px]",
    lg: "h-[60vh] min-h-[600px]",
    xl: "h-[70vh] min-h-[700px]",
    full: "h-screen",
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
              className="text-lg sm:text-xl text-white/90 mb-4 font-medium"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="xl" className="text-lg px-8 py-4">
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>

            <div className="flex flex-col sm:flex-row items-center gap-2 text-white/90">
              <span className="text-sm">or call us at</span>
              <a
                href={`tel:${businessInfo.phone}`}
                className="text-lg font-semibold hover:text-white transition-colors"
              >
                {businessInfo.phone}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
