'use client';

import React from 'react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 select-none">
      <button
        type="button"
        className="w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition shadow-md"
        aria-label="Go Back"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <div className="flex flex-col items-center">
        <span className="text-[10px] tracking-[0.3em] font-semibold uppercase text-zinc-500">
          Virtual Store
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-lg font-black tracking-wider uppercase">CLOTHING STORE PROTOTYPE</span>
        </div>
      </div>

      <button
        type="button"
        className="w-10 h-10 rounded-full hover:bg-black/5 flex items-center justify-center transition text-zinc-800"
        aria-label="Cart"
      >
        <ShoppingBag className="w-5 h-5" />
      </button>
    </header>
  );
}
