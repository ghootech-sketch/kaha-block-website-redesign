"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

interface GalleryProps {
  images: string[];
  dict: {
    loadMore: string;
    showLess: string;
    closeLightbox: string;
    nextImage: string;
    prevImage: string;
    imageAlt: string;
  };
}

export default function Gallery({ images, dict }: GalleryProps) {
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

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const hasMore = visibleCount < images.length;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {images.slice(0, visibleCount).map((src, index) => (
          <div
            key={src}
            className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-gray-200/80 cursor-pointer aspect-[3/2] bg-slate-100"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={src}
              alt={`${dict.imageAlt} ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {hasMore ? (
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center justify-center bg-[#0B2447] hover:bg-[#D90429] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
          >
            {dict.loadMore}
          </button>
        ) : images.length > INITIAL_COUNT ? (
          <button
            onClick={handleShowLess}
            className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-[#0B2447] border-2 border-[#0B2447]/15 hover:border-[#0B2447] px-8 py-3.5 rounded-full font-bold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2447]"
          >
            {dict.showLess}
          </button>
        ) : null}
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
