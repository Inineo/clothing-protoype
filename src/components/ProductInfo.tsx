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
    <div className="flex flex-col items-center justify-center text-center mt-2 relative z-30 select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col items-center"
        >
          {/* Nama Baju Putih Solid dengan Shadow */}
          <h2 className="text-sm font-extrabold tracking-wider text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {product.name}
          </h2>

          {/* Badge Harga Putih Frosted Glass */}
          <div className="mt-1.5 inline-flex items-center px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white shadow-lg border border-white/30">
            <span className="text-xs font-bold tracking-widest drop-shadow-sm">
              ${product.price}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
