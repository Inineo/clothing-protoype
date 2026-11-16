'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ClothingCarousel } from '@/components/ClothingCarousel';
import { ProductInfo } from '@/components/ProductInfo';
import { BottomNav } from '@/components/BottomNav';
import { ProductSideDetails } from '@/components/ProductSideDetails';
import { PRODUCTS, Product } from '@/data/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('clothing');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);

  return (
    <main className="relative min-h-screen w-full text-zinc-900 flex flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.jpg')" }}>
      {/* Subtle Ambient Overlay agar kontras baju dan teks tetap jelas */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />

      {/* Top Header */}
      <Header />

      {/* Side Details (Kiri & Kanan layar yang dinamis berganti sesuai baju) */}
      <ProductSideDetails product={selectedProduct} />

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
