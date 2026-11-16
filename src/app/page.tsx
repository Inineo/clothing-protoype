'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ClothingCarousel } from '@/components/ClothingCarousel';
import { ProductInfo } from '@/components/ProductInfo';
import { BottomNav } from '@/components/BottomNav';
import { PRODUCTS, Product } from '@/data/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('clothing');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);

  return (
    <main className="relative min-h-screen w-full bg-[#f4f4f5] text-zinc-900 flex flex-col justify-between overflow-hidden">
      {/* Background Subtle Gradient & Shadow */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-200/40 via-transparent to-zinc-300/30 pointer-events-none" />

      {/* Top Header */}
      <Header />

      {/* Centerpiece: Carousel & Product Info (pt-20 memberikan posisi ideal tidak terlalu naik dan tidak terlalu turun) */}
      <div className="w-full flex-1 flex flex-col items-center justify-start pt-20 pb-12 relative z-20">
        <ClothingCarousel
          products={PRODUCTS}
          onSelectProduct={setSelectedProduct}
        />
        <ProductInfo product={selectedProduct} />
      </div>

      {/* Floating Bottom Nav */}
      <BottomNav
        activeTab={activeCategory}
        onTabChange={setActiveCategory}
      />
    </main>
  );
}
