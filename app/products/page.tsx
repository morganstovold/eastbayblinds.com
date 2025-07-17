'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Filter, Grid, List } from 'lucide-react';
import CTA from '@/components/CTA';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'shutters', name: 'Shutters', count: products.filter(p => p.category === 'shutters').length },
    { id: 'blinds', name: 'Blinds', count: products.filter(p => p.category === 'blinds').length },
    { id: 'shades', name: 'Shades', count: products.filter(p => p.category === 'shades').length }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Hero
        title="Our Products"
        subtitle="Premium Window Treatments"
        description="Discover our extensive collection of shutters, blinds, and shades designed to enhance your home's beauty and functionality."
        ctaText="Free Consultation"
        ctaHref="/contact"
        height="lg"
      />
      
      {/* Product Categories & Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  {category.name}
                  <span className="text-xs bg-current/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProductCard 
                    product={product} 
                    variant={viewMode === 'list' ? 'compact' : 'default'}
                    showAllFeatures={viewMode === 'list'}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      <CTA
        title="Need Help Choosing?"
        description="Our expert team is here to help you find the perfect window treatments for your home"
        primaryButtonText="Free Consultation"
        primaryButtonHref="/contact"
      />
      
      <Footer />
    </div>
  );
} 