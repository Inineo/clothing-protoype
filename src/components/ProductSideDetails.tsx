'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/products';

interface ProductSideDetailsProps {
  product?: Product;
}

export function ProductSideDetails({ product }: ProductSideDetailsProps) {
  if (!product) return null;

  return (
    <>
      {/* =========================================
          SISI KIRI: Pure White Typography
          ========================================= */}
      <aside className="fixed left-10 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col w-72 pointer-events-none select-none text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={`left-${product.id}`}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="space-y-5"
          >
            {/* SKU & Category */}
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase font-bold text-white/70 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                SPECIFICATION // {product.sku}
              </p>
              <h3 className="text-xl font-black uppercase tracking-wider text-white mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight">
                {product.name}
              </h3>
            </div>

            {/* Description */}
            <p className="text-xs text-white/90 leading-relaxed font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              {product.description}
            </p>

            {/* Material & Fit */}
            <div className="space-y-2 pt-2 border-t border-white/20">
              <div>
                <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-white/60 block">
                  MATERIAL COMPOSITION
                </span>
                <span className="text-xs font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] block mt-0.5">
                  {product.material}
                </span>
              </div>

              <div>
                <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-white/60 block">
                  SILHOUETTE & FIT
                </span>
                <span className="text-xs font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] block mt-0.5">
                  {product.fit}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </aside>

      {/* =========================================
          SISI KANAN: Pure White Typography
          ========================================= */}
      <aside className="fixed right-10 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col w-72 pointer-events-none select-none text-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={`right-${product.id}`}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="space-y-5"
          >
            {/* Edition Info */}
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase font-bold text-white/70 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                COLLECTION // 2026 EDITION
              </p>
              <h3 className="text-xl font-black uppercase tracking-wider text-white mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                AVAILABLE NOW
              </h3>
            </div>

            {/* Features List */}
            <div className="space-y-2.5">
              <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-white/60 block">
                ENGINEERED DETAILS
              </span>
              {product.features?.map((feat, idx) => (
                <p key={idx} className="text-xs font-bold text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] uppercase tracking-wide">
                  {feat}
                </p>
              ))}
            </div>

            {/* Editorial Footer Tag */}
            <div className="pt-2 border-t border-white/20">
              <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-white/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                TAILORED FOR MOVEMENT
              </p>
              <p className="text-[9px] tracking-[0.15em] text-white/50 uppercase mt-0.5 font-medium">
                ALL WEATHER PROTOTYPE SERIES
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </aside>
    </>
  );
}
