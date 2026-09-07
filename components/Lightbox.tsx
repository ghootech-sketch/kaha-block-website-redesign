"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  dict: {
    closeLightbox: string;
    nextImage: string;
    prevImage: string;
    imageAlt: string;
  };
}

export default function Lightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  dict,
}: LightboxProps) {
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        if (currentIndex < images.length - 1) onNext();
      }
      if (e.key === "ArrowLeft") {
        if (currentIndex > 0) onPrev();
      }
      
      if (e.key === "Tab") {
        const focusableElements = [
          closeBtnRef.current,
          prevBtnRef.current?.disabled ? null : prevBtnRef.current,
          nextBtnRef.current?.disabled ? null : nextBtnRef.current,
        ].filter(Boolean) as HTMLElement[];

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    },
    [isOpen, onClose, onNext, onPrev, currentIndex, images.length]
  );

  useEffect(() => {
    let previousOverflow = "";
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      
      // Auto-focus the close button when opened
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = previousOverflow;
    }
    
    return () => {
      if (isOpen) {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener("keydown", handleKeyDown);
        triggerRef.current?.focus();
      }
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={dict.imageAlt || "Image gallery lightbox"}
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        ref={closeBtnRef}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors z-50 p-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label={dict.closeLightbox}
      >
        <X className="w-8 h-8" />
      </button>

      <button
        ref={prevBtnRef}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2 rounded-full disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-w-[44px] min-h-[44px] flex items-center justify-center"
        disabled={currentIndex === 0}
        aria-label={dict.prevImage}
      >
        <ChevronLeft className="w-10 h-10 sm:w-12 sm:h-12" />
      </button>

      <button
        ref={nextBtnRef}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 p-2 rounded-full disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-w-[44px] min-h-[44px] flex items-center justify-center"
        disabled={currentIndex === images.length - 1}
        aria-label={dict.nextImage}
      >
        <ChevronRight className="w-10 h-10 sm:w-12 sm:h-12" />
      </button>

      <div
        className="relative w-full max-w-5xl h-[80vh] mx-4 sm:mx-12 px-10 sm:px-0 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`${dict.imageAlt} - ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 font-mono text-sm" aria-live="polite">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
