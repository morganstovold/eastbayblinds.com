"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export default function CTA({
  title,
  description,
  primaryButtonText = "Get Started",
  primaryButtonHref = "/contact",
  secondaryButtonText,
  secondaryButtonHref,
  className = "",
}: CTAProps) {
  return (
    <section
      className={`py-12 sm:py-16 lg:py-20 relative overflow-hidden ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-0 relative z-10">
        <div className="bg-gray-900 rounded-lg sm:rounded-xl lg:rounded-2xl py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 shadow-lg px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold"
              >
                <Link href={primaryButtonHref} className="inline-flex items-center justify-center">
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              {secondaryButtonText && secondaryButtonHref && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold"
                >
                  <Link href={secondaryButtonHref} className="inline-flex items-center justify-center">
                    {secondaryButtonText}
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
