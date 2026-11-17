'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

interface ProductDetailPanelProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

const SIZES = ['S', 'M', 'L', 'XL'];

export function ProductDetailPanel({ product, onClose, onAddToCart }: ProductDetailPanelProps) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="fixed inset-0 z-40 pointer-events-none flex items-center justify-end pr-12 md:pr-24 lg:pr-32 select-none">
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 40, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className="pointer-events-auto w-full max-w-sm bg-white/[0.08] backdrop-blur-2xl border border-white/30 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] text-white space-y-5"
      >
        {/* Header Panel & Close Button */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/60 block">
              {product.category} // {product.sku}
            </span>
            <h2 className="text-xl font-black uppercase tracking-wider text-white mt-1 drop-shadow-md">
              {product.name}
            </h2>
            <div className="mt-2 inline-flex items-center px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-sm">
              <span className="text-xs font-bold tracking-widest">${product.price}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition border border-white/20"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

        {/* Deskripsi Singkat */}
        <p className="text-xs text-white/80 leading-relaxed font-medium border-t border-white/10 pt-3.5">
          {product.description}
        </p>

        {/* Size Selection */}
        <div className="space-y-1.5">
          <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-white/60 block">
            SELECT SIZE
          </span>
          <div className="flex items-center gap-2">
            {SIZES.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 rounded-xl text-xs font-bold transition flex items-center justify-center border ${
                  selectedSize === size
                    ? 'bg-white text-black border-white shadow-md'
                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="space-y-1.5">
          <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-white/60 block">
            QUANTITY
          </span>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center transition border border-white/20"
            >
              <Minus className="w-3 h-3 text-white" />
            </button>
            <span className="text-xs font-bold w-6 text-center">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center transition border border-white/20"
            >
              <Plus className="w-3 h-3 text-white" />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 pt-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => onAddToCart(product, selectedSize, quantity)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-white text-black text-[11px] font-extrabold tracking-widest uppercase hover:bg-white/90 transition shadow-lg flex items-center justify-center gap-1.5 active:scale-[0.98]"
          >
            <ShoppingBag className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>ADD TO CART</span>
          </button>

          <button
            type="button"
            className="py-2.5 px-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white text-[11px] font-bold tracking-wider uppercase transition flex items-center justify-center gap-1 active:scale-[0.98]"
          >
            <span>BUY NOW</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
