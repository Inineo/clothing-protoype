'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';
import { HangingGarment } from './HangingGarment';

// ==========================================
// 🛠️ PENGATURAN GLOBAL
// ==========================================
export const GLOBAL_OFFSET_Y = -38;
export const DEFAULT_HEIGHT = 480;

interface ClothingCarouselProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export function ClothingCarousel({ products, onSelectProduct }: ClothingCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    if (products[index]) {
      onSelectProduct(products[index]);
    }
  }, [emblaApi, products, onSelectProduct]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center">
      {/* Horizontal Hanging 3D Metallic Rail */}
      <div className="absolute top-[32px] left-0 right-0 h-4 z-10 mx-[-20vw] pointer-events-none">
        <div className="w-full h-full rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.35),0_3px_6px_rgba(0,0,0,0.4)] bg-gradient-to-b from-zinc-700 via-white via-[28%] via-zinc-900 via-[45%] to-black" />
        <div className="absolute top-[2px] left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[0.3px]" />
        <div className="absolute bottom-[1px] left-0 right-0 h-[1px] bg-zinc-600/40" />
        <div className="absolute top-[16px] left-0 right-0 h-3 bg-black/15 blur-md" />
      </div>

      {/* Embla Viewport */}
      <div
        className="overflow-hidden w-full cursor-grab active:cursor-grabbing relative z-20"
        style={{ marginTop: `${GLOBAL_OFFSET_Y}px` }}
        ref={emblaRef}
      >
        <div className="flex touch-pan-y">
          {products.map((product, index) => {
            const isSelected = index === selectedIndex;

            // Sudut kemiringan halus seperti di gambar referensi (tidak gepeng)
            const diff = index - selectedIndex;
            const rotateZ = isSelected ? 0 : diff < 0 ? -4 : 4;
            const skewY = isSelected ? 0 : diff < 0 ? -3 : 3;

            return (
              <div
                key={product.id}
                onClick={() => scrollTo(index)}
                className="flex-[0_0_55%] sm:flex-[0_0_42%] md:flex-[0_0_34%] lg:flex-[0_0_28%] min-w-0 px-3 flex justify-center transition-transform"
                style={{
                  zIndex: isSelected ? 30 : 20 - Math.abs(diff),
                }}
              >
                <motion.div
                  animate={{
                    scale: 1,
                    opacity: isSelected ? 1 : 0.45,
                    rotateZ: rotateZ,
                  }}
                  transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                  className="w-full h-[490px] flex items-start justify-center cursor-pointer origin-top"
                >
                  <HangingGarment
                    image={product.image}
                    name={product.name}
                    offsetY={product.offsetY ?? 0}
                    height={product.height ?? DEFAULT_HEIGHT}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
