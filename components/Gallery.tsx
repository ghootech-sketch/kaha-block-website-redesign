"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { ZoomIn, CheckCircle2 } from "lucide-react";

interface FeaturedItem {
  label: string;
  caption: string;
  badge: string;
  image: string;
}

interface GalleryProps {
  images: string[];
  featuredItems?: FeaturedItem[];
  featuredHeader?: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  completeGalleryHeading?: string;
  dict: {
    loadMore: string;
    showLess: string;
    closeLightbox: string;
    nextImage: string;
    prevImage: string;
    imageAlt: string;
  };
}

export default function Gallery({
  images,
  featuredItems,
  featuredHeader,
  completeGalleryHeading,
  dict,
}: GalleryProps) {
  const INITIAL_COUNT = 12;
  const LOAD_MORE_COUNT = 8;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, images.length));
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_COUNT);
  };

  const openLightboxBySrc = (src: string) => {
    const idx = images.indexOf(src);
    if (idx !== -1) {
      setCurrentIndex(idx);
    } else {
      setCurrentIndex(0);
    }
    setLightboxOpen(true);
  };

  const openLightboxByIndex = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const hasMore = visibleCount < images.length;

  return (
    <>
      {/* =========================================================================
          FEATURED DOCUMENTATION (3 Highlighted Panels)
         ========================================================================= */}
      {featuredItems && featuredItems.length > 0 && (
        <div className="mb-16 sm:mb-20 md:mb-24">
          {featuredHeader && (
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 block font-heading">
                {featuredHeader.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-slate-900">
                {featuredHeader.title}
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4 mb-4 rounded-full" />
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                {featuredHeader.subtitle}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredItems.map((item, index) => (
              <button
                type="button"
                key={index}
                className="text-left w-full bg-surface-card rounded-xl sm:rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col h-full"
                onClick={() => openLightboxBySrc(item.image)}
                aria-label={`${item.label} - ${item.caption}`}
              >
                {/* 3:2 Aspect Ratio Image */}
                <div className="relative aspect-[3/2] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/80 text-accent px-3 py-1 rounded-full text-xs font-mono font-bold shadow-sm backdrop-blur-xs border border-accent/30">
                    {item.badge}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-black/75 border border-accent/30 text-accent flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-5 h-5" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                {/* Permanent Caption Panel */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between bg-surface-card border-t border-slate-100">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-primary mb-1.5 font-heading">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                      <span>{item.label}</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-900 font-semibold font-sans leading-snug">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          COMPLETE DOCUMENTATION GRID
         ========================================================================= */}
      <div>
        {completeGalleryHeading && (
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/80">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              {completeGalleryHeading}
            </h2>
            <span className="text-xs sm:text-sm font-mono text-slate-500 font-semibold bg-slate-100 px-3 py-1 rounded-full">
              {images.length} {dict.imageAlt.toLowerCase()}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {images.slice(0, visibleCount).map((src, index) => (
            <button
              type="button"
              key={src}
              className="text-left w-full block group relative rounded-xl overflow-hidden shadow-none hover:shadow-md transition-all duration-300 border border-gray-200/80 cursor-pointer aspect-[3/2] bg-slate-100"
              onClick={() => openLightboxByIndex(index)}
              aria-label={`${dict.imageAlt} ${index + 1}`}
            >
              <Image
                src={src}
                alt={`${dict.imageAlt} ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-black/75 border border-accent/30 text-accent flex items-center justify-center shadow-lg">
                  <ZoomIn className="w-5 h-5" aria-hidden="true" />
                </span>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/60 text-white font-mono text-[10px] px-2 py-0.5 rounded backdrop-blur-xs">
                #{String(index + 1).padStart(2, "0")}
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
            >
              {dict.loadMore}
            </button>
          ) : images.length > INITIAL_COUNT ? (
            <button
              onClick={handleShowLess}
              className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-300 hover:border-slate-800 px-8 py-3.5 rounded-xl font-bold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
            >
              {dict.showLess}
            </button>
          ) : null}
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        images={images}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1))}
        onPrev={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
        dict={dict}
      />
    </>
  );
}

