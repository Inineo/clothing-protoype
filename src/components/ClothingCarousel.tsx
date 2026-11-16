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
  const displayItems = products.length < 15 ? [...products, ...products, ...products] : products;
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

      {/* Embla Viewport dengan soft edge feather tipis (hanya 3% di tepi ujung) */}
      <div
        className="overflow-hidden w-full cursor-grab active:cursor-grabbing relative z-20"
        style={{
          marginTop: `${CAROUSEL_SIZING_CONFIG.globalOffsetY}px`,
          perspective: '1400px',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%), linear-gradient(to bottom, black 94%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%), linear-gradient(to bottom, black 94%, transparent 100%)',
          maskComposite: 'intersect',
          WebkitMaskComposite: 'destination-in',
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

            const rotateY = isSelected ? 0 : CAROUSEL_SIZING_CONFIG.sideRotationY;
            const scale = isSelected ? CAROUSEL_SIZING_CONFIG.scaleSelected : CAROUSEL_SIZING_CONFIG.scaleDefault;

            return (
              <div
                key={`${product.id}-${index}`}
                onClick={() => scrollTo(index)}
                className={`${CAROUSEL_SIZING_CONFIG.slideWidthClass} ${CAROUSEL_SIZING_CONFIG.overlapMarginClass} min-w-0 flex justify-center transition-transform`}
                style={{
                  zIndex: isSelected ? 40 : Math.max(1, 30 - Math.abs(diff)),
                  visibility: isOffscreen ? 'hidden' : 'visible',
                }}
              >
                <motion.div
                  animate={{
                    scale,
                    rotateY,
                    opacity: isOffscreen ? 0 : 1, // Solid 100% untuk semua baju
                  }}
                  transition={{ type: 'spring', stiffness: 290, damping: 26 }}
                  className="w-full h-[620px] flex items-start justify-center cursor-pointer origin-top"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <HangingGarment
                    image={product.image}
                    name={product.name}
                    height={product.height ?? CAROUSEL_SIZING_CONFIG.defaultHeight}
                    offsetY={product.offsetY ?? 0}
                    offsetX={product.offsetX ?? 0}
                    scale={product.scale ?? 1}
                    rotateZ={product.rotateZ ?? 0}
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
