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
      className={`pb-16 relative overflow-hidden ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-0 relative z-10 bg-gray-900 rounded-lg py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {title}
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="xl"
              className="bg-primary text-white hover:bg-primary/90 shadow-lg"
            >
              <Link href={primaryButtonHref}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {secondaryButtonText && secondaryButtonHref && (
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-300"
              >
                <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
