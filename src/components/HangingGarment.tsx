'use client';

import React from 'react';
import Image from 'next/image';

interface HangingGarmentProps {
  image: string;
  name: string;
  height?: number;
  offsetY?: number;
  offsetX?: number;
  scale?: number;
  rotateZ?: number;
}

export function HangingGarment({
  image,
  name,
  height = 580,
  offsetY = 0,
  offsetX = 0,
  scale = 1,
  rotateZ = 0,
}: HangingGarmentProps) {
  const transformStyle = `translate(${offsetX}px, ${offsetY}px) scale(${scale}) rotate(${rotateZ}deg)`;

  return (
    <div
      className="relative w-full flex justify-center items-start select-none"
      style={{
        transform: transformStyle,
        transformOrigin: 'top center',
      }}
    >
      {/* 1. Silhouette Wall Shadow */}
      <div
        className="absolute inset-0 flex justify-center items-start pointer-events-none z-0"
      >
        <Image
          src={image}
          alt=""
          aria-hidden="true"
          width={500}
          height={650}
          style={{ height: `${height}px` }}
          className="object-contain w-auto blur-[11px] opacity-45 brightness-0 scale-[0.94] translate-y-6 translate-x-5 select-none"
          priority
        />
      </div>

      {/* 2. Gambar Baju Asli */}
      <div className="relative z-10 flex justify-center items-start">
        <Image
          src={image}
          alt={name}
          width={500}
          height={650}
          style={{ height: `${height}px` }}
          className="object-contain w-auto pointer-events-none"
          priority
        />
      </div>
    </div>
  );
}
