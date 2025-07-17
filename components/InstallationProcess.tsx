"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface InstallationProcessProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  backgroundColor?: string;
}

export default function InstallationProcess({
  title = "Our Installation Process",
  subtitle = "Professional installation ensures perfect fit and optimal performance",
  steps = [
    {
      step: '1',
      title: 'Consultation & Measurement',
      description: 'Our expert team visits your home to assess your windows and discuss your preferences.'
    },
    {
      step: '2',
      title: 'Custom Manufacturing',
      description: 'Your window treatments are crafted to precise measurements using premium materials.'
    },
    {
      step: '3',
      title: 'Professional Installation',
      description: 'Our certified installers ensure perfect mounting and smooth operation.'
    }
  ],
  backgroundColor = "bg-gray-50"
}: InstallationProcessProps) {
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full font-bold text-lg mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 