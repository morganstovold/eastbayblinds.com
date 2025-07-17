'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  viewport?: { once?: boolean };
}

export function AnimatedSection({ 
  children, 
  delay = 0, 
  className = "",
  viewport = { once: true }
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedGrid({ 
  children, 
  delay = 0, 
  className = "",
  viewport = { once: true }
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
} 