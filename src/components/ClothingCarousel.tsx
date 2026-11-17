'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';
import { HangingGarment } from './HangingGarment';
import { CAROUSEL_SIZING_CONFIG } from '@/config/carouselConfig';

interface ClothingCarouselProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onOpenDetail?: (product: Product) => void;
  isDetailOpen?: boolean;
}

export function ClothingCarousel({
  products,
  onSelectProduct,
  onOpenDetail,
  isDetailOpen = false,
}: ClothingCarouselProps) {
  const displayItems = products.length < 15 ? [...products, ...products, ...products] : products;
  const total = displayItems.length;

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false,
    containScroll: false,
    watchDrag: !isDetailOpen, // Kunci scroll saat sedang di mode detail
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const snapIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(snapIndex);

    const actualProduct = displayItems[snapIndex % displayItems.length];
    if (actualProduct) {
      onSelectProduct(actualProduct);
    }
  }, [emblaApi, displayItems, onSelectProduct]);

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
      {/* Horizontal Hanging 3D Metallic Rail (Hilang saat detail view aktif) */}
      <motion.div
        animate={{ opacity: isDetailOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute top-[32px] left-0 right-0 h-4 z-10 mx-[-20vw] pointer-events-none"
      >
        <div className="w-full h-full rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.35),0_3px_6px_rgba(0,0,0,0.4)] bg-gradient-to-b from-zinc-700 via-white via-[28%] via-zinc-900 via-[45%] to-black" />
        <div className="absolute top-[2px] left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[0.3px]" />
        <div className="absolute bottom-[1px] left-0 right-0 h-[1px] bg-zinc-600/40" />
        <div className="absolute top-[16px] left-0 right-0 h-3 bg-black/15 blur-md" />
      </motion.div>

      {/* Embla Viewport */}
      <div
        className="w-full cursor-grab active:cursor-grabbing relative z-20"
        style={{
          marginTop: `${CAROUSEL_SIZING_CONFIG.globalOffsetY}px`,
          perspective: '1200px',
          maskImage: isDetailOpen
            ? 'none'
            : 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
          WebkitMaskImage: isDetailOpen
            ? 'none'
            : 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
        }}
        ref={emblaRef}
      >
        <div className="flex touch-pan-y">
          {displayItems.map((product, index) => {
            const isSelected = index === selectedIndex;

            let diff = index - selectedIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isOffscreen = Math.abs(diff) >= 3;

            // Transform front vs side (nilai asli pengguna)
            const frontT = product.front;
            const sideT = product.side;

            const frontHeight = frontT?.height ?? CAROUSEL_SIZING_CONFIG.defaultHeight;
            const frontOffsetY = frontT?.offsetY ?? 0;
            const frontOffsetX = frontT?.offsetX ?? 0;
            const frontScale = (frontT?.scale ?? 1) * CAROUSEL_SIZING_CONFIG.scaleSelected;
            const frontRotateZ = frontT?.rotateZ ?? 0;

            const sideHeight = sideT?.height ?? CAROUSEL_SIZING_CONFIG.defaultHeight;
            const sideOffsetY = sideT?.offsetY ?? 0;
            const sideOffsetX = sideT?.offsetX ?? 0;
            const sideScale = (sideT?.scale ?? 1) * CAROUSEL_SIZING_CONFIG.scaleDefault;
            const sideRotateZ = sideT?.rotateZ ?? 0;

            const sideShiftX = isSelected ? 0 : diff < 0 ? 55 : -55;

            // Animasi seamless: saat mode detail terbuka, baju meluncur ke kiri dengan ukuran pas (scale 1.0) dan turun seimbang
            const activeX = isSelected && isDetailOpen ? -310 : sideShiftX;
            const activeY = isSelected && isDetailOpen ? 40 : 0;
            const activeScale = 1; // Ukuran tetap asli tidak diperbesar ekstra agar tidak raksasa

            return (
              <div
                key={`${product.id}-${index}`}
                onClick={() => {
                  if (isSelected && onOpenDetail) {
                    onOpenDetail(product);
                  } else if (!isDetailOpen) {
                    scrollTo(index);
                  }
                }}
                className={`${CAROUSEL_SIZING_CONFIG.slideWidthClass} ${CAROUSEL_SIZING_CONFIG.overlapMarginClass} min-w-0 flex justify-center`}
                style={{
                  zIndex: isSelected ? 40 : Math.max(1, 30 - Math.abs(diff)),
                  visibility: isOffscreen ? 'hidden' : 'visible',
                  pointerEvents: isDetailOpen && !isSelected ? 'none' : 'auto',
                }}
              >
                {/* Motion container menggeser baju aktif ke kiri dengan spring halus (tanpa fade/teleport) */}
                <motion.div
                  animate={{
                    x: activeX,
                    y: activeY,
                    scale: activeScale,
                    opacity: isDetailOpen ? (isSelected ? 1 : 0) : 1, // Baju samping memudar saat detail buka
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 240,
                    damping: 28,
                  }}
                  className="relative w-full h-[760px] flex items-start justify-center cursor-pointer origin-center"
                >
                  {/* LAYER FRONT */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isSelected ? 1 : 0,
                      rotateY: isSelected ? 0 : -20,
                      scale: isSelected ? 1 : 0.94,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    style={{ transformOrigin: 'top center' }}
                    className="absolute inset-0 flex justify-center pointer-events-none"
                  >
                    <HangingGarment
                      image={product.frontImage}
                      name={product.name}
                      height={frontHeight}
                      offsetY={frontOffsetY}
                      offsetX={frontOffsetX}
                      scale={frontScale}
                      rotateZ={frontRotateZ}
                    />
                  </motion.div>

                  {/* LAYER SIDE */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isSelected ? 0 : 1,
                      rotateY: isSelected ? 20 : 0,
                      scale: isSelected ? 1.06 : 1,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    style={{ transformOrigin: 'top center' }}
                    className="absolute inset-0 flex justify-center pointer-events-none"
                  >
                    <HangingGarment
                      image={product.sideImage}
                      name={product.name}
                      height={sideHeight}
                      offsetY={sideOffsetY}
                      offsetX={sideOffsetX}
                      scale={sideScale}
                      rotateZ={sideRotateZ}
                    />
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
