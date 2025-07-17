"use client";

import React from "react";
import { motion } from "framer-motion";

interface TaxCreditSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  benefits?: string[];
  backgroundColor?: string;
}

export default function TaxCreditSection({
  title = "Save up to $1,200 on Energy-Efficient Shutters",
  subtitle = "Federal Energy Tax Credit Available",
  description = "The world's best selling Woodlore® Shutters qualify for a Federal Energy Tax Credit, allowing you to receive 30% of your total purchase excluding measure and installation (up to $1,200 per year) back in tax savings.",
  benefits = [
    "Natural insulation helps regulate indoor temperatures",
    "Reduce heating and cooling costs",
    "Built with sustainability in mind",
    "Limited Lifetime Warranty"
  ],
  backgroundColor = "bg-gray-50"
}: TaxCreditSectionProps) {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {subtitle}
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              {description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Energy-Efficient Benefits
                </h3>
                <ul className="space-y-2 text-gray-600 text-left">
                  {benefits.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-primary/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Save Money Now
                </h3>
                <p className="text-lg text-gray-700">
                  Up to $1,200 back in tax savings on qualifying Norman® shutters
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 