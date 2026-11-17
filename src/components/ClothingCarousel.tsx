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
}

export function ClothingCarousel({ products, onSelectProduct }: ClothingCarouselProps) {
  // Duplikasi 4x untuk infinite loop
  const displayItems = [...products, ...products, ...products, ...products];
  const total = displayItems.length;

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false,
    containScroll: false,
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
        style={{
          marginTop: `${CAROUSEL_SIZING_CONFIG.globalOffsetY}px`,
          perspective: '1200px',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
        }}
        ref={emblaRef}
      >
        <div className="flex touch-pan-y">
          {displayItems.map((product, index) => {
            const isSelected = index === selectedIndex;

            let diff = index - selectedIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isOffscreen = Math.abs(diff) >= 4;

            // Transform front vs side
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

            return (
              <div
                key={`${product.id}-${index}`}
                onClick={() => scrollTo(index)}
                className={`${CAROUSEL_SIZING_CONFIG.slideWidthClass} ${CAROUSEL_SIZING_CONFIG.overlapMarginClass} min-w-0 flex justify-center`}
                style={{
                  zIndex: isSelected ? 40 : Math.max(1, 30 - Math.abs(diff)),
                  visibility: isOffscreen ? 'hidden' : 'visible',
                }}
              >
                {/* Animasi pergeseran fisik baju saat berpindah posisi */}
                <motion.div
                  animate={{
                    x: sideShiftX,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 28,
                  }}
                  className="relative w-full h-[660px] flex items-start justify-center cursor-pointer origin-top"
                >
                  {/* LAYER FRONT: Memutar masuk halus ke depan saat aktif */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isSelected ? 1 : 0,
                      rotateY: isSelected ? 0 : -22,
                      scale: isSelected ? 1 : 0.94,
                    }}
                    transition={{
                      duration: 0.38,
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

                  {/* LAYER SIDE: Memutar keluar halus ke samping saat tidak aktif */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isSelected ? 0 : 1,
                      rotateY: isSelected ? 22 : 0,
                      scale: isSelected ? 1.06 : 1,
                    }}
                    transition={{
                      duration: 0.38,
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
