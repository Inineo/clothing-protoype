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
          SISI KIRI: Ultra-Clear Glass Frame & White Typography
          ========================================= */}
      <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col w-80 pointer-events-none select-none text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={`left-${product.id}`}
            initial={{ opacity: 0, x: -20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.98 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="p-5 rounded-2xl bg-transparent backdrop-blur-[2px] border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] space-y-3.5"
          >
            {/* SKU & Category */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/70 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                SPECIFICATION // {product.sku}
              </p>
              <h3 className="text-lg font-black uppercase tracking-wider text-white mt-1 leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                {product.name}
              </h3>
            </div>

            {/* Description */}
            <p className="text-xs text-white/90 leading-relaxed font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
              {product.description}
            </p>

            {/* Material & Fit */}
            <div className="space-y-2.5 pt-3 border-t border-white/20">
              <div>
                <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-white/60 block">
                  MATERIAL COMPOSITION
                </span>
                <span className="text-xs font-bold text-white block mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                  {product.material}
                </span>
              </div>

              <div>
                <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-white/60 block">
                  SILHOUETTE & FIT
                </span>
                <span className="text-xs font-bold text-white block mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                  {product.fit}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </aside>

      {/* =========================================
          SISI KANAN: Ultra-Clear Glass Frame & White Typography
          ========================================= */}
      <aside className="fixed right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col w-80 pointer-events-none select-none text-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={`right-${product.id}`}
            initial={{ opacity: 0, x: 20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.98 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="p-5 rounded-2xl bg-transparent backdrop-blur-[2px] border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] space-y-3.5"
          >
            {/* Edition Info */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/70 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                COLLECTION // 2026 EDITION
              </p>
              <h3 className="text-lg font-black uppercase tracking-wider text-white mt-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                AVAILABLE NOW
              </h3>
            </div>

            {/* Features List */}
            <div className="space-y-2">
              <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-white/60 block">
                ENGINEERED DETAILS
              </span>
              {product.features?.map((feat, idx) => (
                <p key={idx} className="text-xs font-bold text-white/95 uppercase tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                  {feat}
                </p>
              ))}
            </div>

            {/* Editorial Footer Tag */}
            <div className="pt-3 border-t border-white/20">
              <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
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
