'use client';

import React from 'react';
import Image from 'next/image';

interface HangingGarmentProps {
  image: string;
  name: string;
  offsetY?: number;
  height?: number;
}

export function HangingGarment({ image, name, offsetY = 0, height = 480 }: HangingGarmentProps) {
  return (
    <div
      className="relative w-full flex justify-center items-start select-none"
      style={{ transform: `translateY(${offsetY}px)` }}
    >
      {/* 
        1. Silhouette Wall Shadow (Fade radial di tepi agar tidak terpotong garis lurus kotak gambar)
      */}
      <div
        className="absolute inset-0 flex justify-center items-start pointer-events-none z-0"
        style={{
          // Masking radial halus ke bawah dan samping agar gradasi bayangan membaur lembut ke dinding
          maskImage: 'radial-gradient(ellipse 75% 75% at 50% 45%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 45%, black 40%, transparent 95%)',
        }}
      >
        <Image
          src={image}
          alt=""
          aria-hidden="true"
          width={500}
          height={600}
          style={{ height: `${height}px` }}
          className="object-contain w-auto blur-[16px] opacity-25 brightness-0 scale-[0.98] translate-y-6 translate-x-2 select-none"
          priority
        />
      </div>

      {/* 
        2. Gambar Baju Asli
      */}
      <div className="relative z-10 flex justify-center items-start">
        <Image
          src={image}
          alt={name}
          width={500}
          height={600}
          style={{ height: `${height}px` }}
          className="object-contain w-auto pointer-events-none"
          priority
        />
      </div>
    </div>
  );
}
