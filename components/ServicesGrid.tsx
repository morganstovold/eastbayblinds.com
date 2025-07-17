"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Service } from "@/lib/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServicesGridProps {
  title: string;
  subtitle: string;
  services: Service[];
  backgroundColor?: string;
  showAllFeatures?: boolean;
  variant?: "compact" | "full";
  showViewAllButton?: boolean;
  viewAllButtonText?: string;
  viewAllButtonHref?: string;
}

export default function ServicesGrid({
  title,
  subtitle,
  services,
  backgroundColor = "bg-gray-50",
  showAllFeatures = false,
  variant = "full",
  showViewAllButton = false,
  viewAllButtonText = "View All Services",
  viewAllButtonHref = "/services",
}: ServicesGridProps) {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                service={service}
                variant={variant}
                showAllFeatures={showAllFeatures}
              />
            </motion.div>
          ))}
        </div>

        {showViewAllButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link href={viewAllButtonHref}>
                {viewAllButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
} 