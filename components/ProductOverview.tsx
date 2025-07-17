"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ProductOverviewProps {
  title: string;
  description: string;
  features: string[];
  imagePlaceholder?: {
    emoji: string;
    title: string;
    subtitle: string;
  };
  backgroundColor?: string;
}

export default function ProductOverview({
  title,
  description,
  features,
  imagePlaceholder = {
    emoji: "🪟",
    title: "Beautiful Windows",
    subtitle: "Image Placeholder"
  },
  backgroundColor = "bg-white"
}: ProductOverviewProps) {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {description}
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-300 rounded-lg h-96 flex items-center justify-center"
          >
            <div className="text-center text-gray-600">
              <div className="text-6xl mb-4">{imagePlaceholder.emoji}</div>
              <div className="text-lg font-medium">{imagePlaceholder.title}</div>
              <div className="text-sm text-gray-500 mt-2">{imagePlaceholder.subtitle}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 