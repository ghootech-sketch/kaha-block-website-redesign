"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  text: string;
  src?: string;
  alt?: string;
  className?: string;
  ariaLabel?: string;
  priority?: boolean;
}

export default function PlaceholderImage({
  text,
  src,
  alt,
  className = "",
  ariaLabel,
  priority = false,
}: PlaceholderImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const hasImage = Boolean(src && !hasError);

  return (
    <div
      role="img"
      aria-label={ariaLabel || alt || text}
      className={`relative overflow-hidden bg-slate-100 select-none ${className}`}
    >
      {/* High-resolution Image Layer */}
      {hasImage && src && (
        <Image
          src={src}
          alt={alt || text}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform duration-700 ease-out ${
            isLoaded ? "scale-100" : "scale-105"
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          referrerPolicy="no-referrer"
        />
      )}

      {/* Blur-Up Overlay Layer with CSS Transition (Fades out when image finishes loading) */}
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-100 via-gray-100/95 to-slate-200 backdrop-blur-md transition-all duration-700 ease-in-out motion-reduce:transition-none ${
          isLoaded && hasImage
            ? "opacity-0 pointer-events-none scale-100 blur-sm"
            : "opacity-100 pointer-events-auto blur-0"
        }`}
        aria-hidden={isLoaded && hasImage}
      >
        {/* Ambient Shimmer / Pulse Highlight */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none ${
            !isLoaded ? "motion-safe:animate-pulse" : ""
          }`}
          aria-hidden="true"
        />

        {/* Subtle Textured Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#0B2447_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Overlay Content / Icon & Label */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-[#0B2447]/70">
          <div className="relative mb-2.5 flex items-center justify-center">
            {!isLoaded && hasImage && (
              <div
                className="absolute w-12 h-12 rounded-full bg-white/70 blur-xs motion-safe:animate-ping opacity-30"
                aria-hidden="true"
              />
            )}
            <div className="relative w-10 h-10 rounded-xl bg-white/90 border border-black/5 shadow-xs flex items-center justify-center text-[#0B2447]/80">
              <ImageIcon className="w-5 h-5 opacity-75" aria-hidden="true" />
            </div>
          </div>
          <span className="text-xs md:text-sm font-medium text-slate-700 max-w-xs leading-snug tracking-tight px-2">
            {text}
          </span>
          <span className="mt-1 text-[11px] font-mono tracking-wider uppercase text-slate-400 opacity-90">
            {hasImage && !isLoaded ? "Memuat Aset..." : "Aset Visual"}
          </span>
        </div>
      </div>
    </div>
  );
}

