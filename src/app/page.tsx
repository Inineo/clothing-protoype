'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { ClothingCarousel } from '@/components/ClothingCarousel';
import { ProductInfo } from '@/components/ProductInfo';
import { BottomNav } from '@/components/BottomNav';
import { ProductSideDetails } from '@/components/ProductSideDetails';
import { ProductDetailPanel } from '@/components/ProductDetailPanel';
import { PRODUCTS, Product } from '@/data/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('clothing');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (_product: Product, _size: string, quantity: number) => {
    setCartCount((c) => c + quantity);
    setIsDetailOpen(false);
  };

  return (
    <main
      className="relative min-h-screen w-full text-zinc-900 flex flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Subtle Ambient Overlay agar kontras baju dan teks tetap jelas */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />

      {/* Top Header (Selalu tampil di atas) */}
      <Header cartCount={cartCount} />

      {/* Side Details (Kiri & Kanan layar - otomatis memudar halus saat mode detail aktif) */}
      <motion.div
        animate={{ opacity: isDetailOpen ? 0 : 1 }}
        transition={{ duration: 0.25 }}
        className={isDetailOpen ? 'pointer-events-none' : 'pointer-events-auto'}
      >
        <ProductSideDetails product={selectedProduct} />
      </motion.div>

      {/* 
        TAMPILAN CAROUSEL UTAMA (Baju yang dipilih meluncur ke kiri secara seamless tanpa fade out)
      */}
      <div className="w-full flex-1 flex flex-col items-center justify-start pt-20 pb-12 relative z-20">
        <ClothingCarousel
          products={PRODUCTS}
          onSelectProduct={setSelectedProduct}
          onOpenDetail={() => setIsDetailOpen(true)}
          isDetailOpen={isDetailOpen}
        />

        {/* Info Nama & Harga Bawah (Memudar saat mode detail aktif) */}
        <motion.div
          animate={{ opacity: isDetailOpen ? 0 : 1, y: isDetailOpen ? 12 : 0 }}
          transition={{ duration: 0.25 }}
          className={isDetailOpen ? 'pointer-events-none' : 'pointer-events-auto'}
        >
          <ProductInfo product={selectedProduct} />
        </motion.div>
      </div>

      {/* 
        PANEL INPUT DETAIL / ADD TO CART (Muncul di sisi kanan agak ke tengah)
      */}
      <AnimatePresence>
        {isDetailOpen && (
          <ProductDetailPanel
            product={selectedProduct}
            onClose={() => setIsDetailOpen(false)}
            onAddToCart={handleAddToCart}
          />
        )}
      </AnimatePresence>

      {/* Floating Bottom Nav */}
      <BottomNav
        activeTab={activeCategory}
        onTabChange={setActiveCategory}
      />
    </main>
  );
}
