"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ConfigurableProduct } from "@/lib/static-products";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: ConfigurableProduct;
  showAllFeatures?: boolean;
  variant?: "default" | "featured" | "compact";
}

export default function ProductCard({
  product,
  showAllFeatures = false,
  variant = "default",
}: ProductCardProps) {
  const isCompact = variant === "compact";
  const isFeatured = variant === "featured";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`group ${isFeatured ? "scale-105" : ""}`}
    >
      <Card
        className={`h-full overflow-hidden transition-all duration-300 hover:shadow-lg p-0 ${
          isFeatured ? "border-primary ring-2 ring-primary/20" : ""
        }`}
      >
        <div
          className={`relative overflow-hidden ${isCompact ? "h-48" : "h-64"}`}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white capitalize">
              {product.category}
            </span>
          </div>
        </div>

        <CardHeader className={isCompact ? "p-4" : "p-6"}>
          <CardTitle
            className={`${
              isCompact ? "text-lg" : "text-xl"
            } font-semibold text-gray-900 group-hover:text-primary transition-colors`}
          >
            {product.name}
          </CardTitle>
          <p
            className={`text-gray-600 ${
              isCompact ? "text-sm" : "text-base"
            } leading-relaxed`}
          >
            {product.description}
          </p>
        </CardHeader>

        <CardContent
          className={`${isCompact ? "p-4 pt-0" : "p-6 pt-0"} space-y-4`}
        >
          {product.features && product.features.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900 text-sm">
                Key Features:
              </h4>
              <ul className="space-y-1">
                {(showAllFeatures
                  ? product.features
                  : product.features.slice(0, 3)
                ).map((feature: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {!showAllFeatures && product.features.length > 3 && (
                <p className="text-sm text-primary font-medium">
                  +{product.features.length - 3} more features
                </p>
              )}
            </div>
          )}

          {/* CTA Button */}
          <div className="flex gap-2 pt-2">
            <Button
              asChild
              size={isCompact ? "sm" : "default"}
              variant="outline"
              className="flex-1"
            >
              <Link href={`/products/${product.category}#${product.id}`}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {!isCompact && (
              <Button asChild variant="outline" size="default">
                <Link href="/contact">Get Quote</Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
