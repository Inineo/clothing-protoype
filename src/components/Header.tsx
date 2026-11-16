'use client';

import React from 'react';
import { ShoppingBag } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 select-none">
      <div className="w-12 h-12" />

      {/* Typography Brand Putih Bersih */}
      <div className="flex flex-col items-center">
        <span className="text-[11px] tracking-[0.35em] font-bold uppercase text-white/75 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          Virtual Store
        </span>
        <h1 className="text-2xl font-black tracking-widest uppercase text-white mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          CLOTHING STORE PROTOTYPE
        </h1>
      </div>

      <button
        type="button"
        className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition shadow-lg hover:scale-105 active:scale-95 border border-white/30"
        aria-label="Shopping Cart"
      >
        <ShoppingBag className="w-5 h-5 text-white stroke-[2.2]" />
      </button>
    </header>
  );
}
