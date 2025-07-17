"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/types";

interface ProductCollectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  backgroundColor?: string;
}

export default function ProductCollection({
  title,
  subtitle,
  products,
  backgroundColor = "bg-white"
}: ProductCollectionProps) {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} showAllFeatures={true} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 