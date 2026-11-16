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
      <Image
        src={image}
        alt={name}
        width={500}
        height={600}
        style={{ height: `${height}px` }}
        className="object-contain w-auto drop-shadow-[0_20px_25px_rgba(0,0,0,0.28)] pointer-events-none"
        priority
      />
    </div>
  );
}
