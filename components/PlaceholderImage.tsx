'use client';

import React from 'react';
import { Layers } from 'lucide-react';

interface PlaceholderImageProps {
  text?: string;
  className?: string;
  subtext?: string;
  overlayText?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | 'auto';
  showBadge?: boolean;
}

export default function PlaceholderImage({
  text = 'Kaha Block',
  className = '',
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={text}
      className={`relative w-full h-full min-h-[140px] bg-slate-900 overflow-hidden flex flex-col items-center justify-center p-4 select-none ${className}`}
    >
      {/* Industrial Paving Texture Background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #FFC300 25%, transparent 25%), 
            linear-gradient(-45deg, #FFC300 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, #FFC300 75%), 
            linear-gradient(-45deg, transparent 75%, #FFC300 75%)
          `,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 0 12px, 12px -12px, -12px 0px',
        }}
        aria-hidden="true"
      />

      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0B2447]/90 via-[#0B2447]/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Center Icon and Title */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[85%]">
        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#FFC300] mb-2.5 shadow-sm">
          <Layers className="w-5 h-5" aria-hidden="true" />
        </div>
        <p className="text-white font-medium text-xs sm:text-sm tracking-wide font-sans line-clamp-2 drop-shadow-sm">
          {text}
        </p>
      </div>

      {/* Subtle bottom edge stripe in Kaha red */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-[#D90429]"
        aria-hidden="true"
      />
    </div>
  );
}
