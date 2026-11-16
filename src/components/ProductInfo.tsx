'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductInfoProps {
  product?: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  if (!product) return null;

  return (
    <div className="flex flex-col items-center justify-center text-center mt-6 select-none h-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-sm font-semibold tracking-wide text-zinc-900">
            {product.name}
          </h2>
          <span className="text-xs font-medium text-zinc-500 mt-1">
            ${product.price}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
