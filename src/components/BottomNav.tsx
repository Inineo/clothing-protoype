'use client';

import React from 'react';
import { Info } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TABS = [
  { id: 'store', label: 'Store' },
  { id: 'clothing', label: 'Clothing' },
  { id: 'caps', label: 'Caps' },
  { id: 'bags', label: 'Bags' },
  { id: 'shoes', label: 'Shoes' },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-black/5 flex items-center gap-1">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              isActive
                ? 'bg-black text-white shadow-sm'
                : 'text-zinc-600 hover:text-black hover:bg-black/5'
            }`}
          >
            {tab.label}
          </button>
        );
      })}

      <div className="w-px h-4 bg-zinc-200 mx-1" />

      <button
        type="button"
        className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-500 hover:text-black hover:bg-black/5 transition"
        aria-label="Product Information"
      >
        <Info className="w-3.5 h-3.5" />
      </button>
    </nav>
  );
}
