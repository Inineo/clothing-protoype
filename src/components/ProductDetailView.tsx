'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

const SIZES = ['S', 'M', 'L', 'XL'];

export function ProductDetailView({ product, onClose, onAddToCart }: ProductDetailViewProps) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const frontT = product.front;
  const height = frontT?.height ?? 580;
  const offsetY = frontT?.offsetY ?? 0;
  const offsetX = frontT?.offsetX ?? 0;
  const scale = frontT?.scale ?? 1;
  const rotateZ = frontT?.rotateZ ?? 0;

  return (
    <div className="fixed inset-0 z-35 flex items-center justify-between px-8 md:px-16 lg:px-24 pointer-events-auto">
      {/* 
        SISI KIRI: Baju Terpilih (Ditarik ke kiri dan diperbesar ekstra 1.25x tanpa mengubah nilai manual aslinya)
      */}
      <motion.div
        initial={{ opacity: 0, x: 120, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1.25 }}
        exit={{ opacity: 0, x: 120, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        className="w-1/2 flex items-center justify-center select-none origin-center"
      >
        <div
          className="relative w-full flex justify-center items-center"
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale}) rotate(${rotateZ}deg)`,
          }}
        >
          {/* Wall Silhouette Shadow */}
          <div
            className="absolute inset-0 flex justify-center items-center pointer-events-none z-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.frontImage}
              alt=""
              style={{ height: `${height}px` }}
              className="object-contain w-auto blur-[14px] opacity-45 brightness-0 scale-[0.95] translate-y-8 translate-x-6 select-none"
            />
          </div>

          {/* Garment Image Asli */}
          <div className="relative z-10 flex justify-center items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.frontImage}
              alt={product.name}
              style={{ height: `${height}px` }}
              className="object-contain w-auto pointer-events-none drop-shadow-md"
            />
          </div>
        </div>
      </motion.div>

      {/* 
        SISI KANAN: Panel Glassmorphism Pembelian & Add to Cart
      */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 80 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26, delay: 0.05 }}
        className="w-full max-w-md bg-white/[0.08] backdrop-blur-2xl border border-white/30 rounded-3xl p-7 shadow-[0_20px_50px_rgba(0,0,0,0.15)] text-white space-y-6"
      >
        {/* Header Panel & Close Button */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/60 block">
              {product.category} // {product.sku}
            </span>
            <h2 className="text-2xl font-black uppercase tracking-wider text-white mt-1 drop-shadow-md">
              {product.name}
            </h2>
            <div className="mt-2 inline-flex items-center px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-sm">
              <span className="text-sm font-bold tracking-widest">${product.price}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition border border-white/20"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Deskripsi Singkat */}
        <p className="text-xs text-white/80 leading-relaxed font-medium border-t border-white/10 pt-4">
          {product.description}
        </p>

        {/* Size Selection */}
        <div className="space-y-2">
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-white/60 block">
            SELECT SIZE
          </span>
          <div className="flex items-center gap-2">
            {SIZES.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`w-11 h-11 rounded-xl text-xs font-bold transition flex items-center justify-center border ${
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
        <div className="space-y-2">
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-white/60 block">
            QUANTITY
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center transition border border-white/20"
            >
              <Minus className="w-3.5 h-3.5 text-white" />
            </button>
            <span className="text-sm font-bold w-6 text-center">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center transition border border-white/20"
            >
              <Plus className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-3 border-t border-white/10">
          <button
            type="button"
            onClick={() => onAddToCart(product, selectedSize, quantity)}
            className="flex-1 py-3 px-4 rounded-2xl bg-white text-black text-xs font-extrabold tracking-widest uppercase hover:bg-white/90 transition shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
            <span>ADD TO CART</span>
          </button>

          <button
            type="button"
            className="py-3 px-4 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white text-xs font-bold tracking-wider uppercase transition flex items-center justify-center gap-1 active:scale-[0.98]"
          >
            <span>BUY NOW</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
