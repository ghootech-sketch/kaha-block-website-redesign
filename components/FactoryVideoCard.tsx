"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ExternalLink } from "lucide-react";

export interface FactoryVideoCardProps {
  videoSrc: string;
  posterSrc: string;
  accessibleLabel: string;
  title?: string;
  tag?: string;
  watchUrl?: string;
  watchLabel?: string;
}

export default function FactoryVideoCard({
  videoSrc,
  posterSrc,
  accessibleLabel,
  title,
  tag,
  watchUrl,
  watchLabel = "Halaman Video",
}: FactoryVideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isPlaying || !videoRef.current) return;

    document.querySelectorAll("video").forEach((vid) => {
      if (vid !== videoRef.current) {
        vid.pause();
      }
    });

    videoRef.current.play().catch(() => {
      // User can still start playback using native controls.
    });
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full aspect-[16/9] bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm group hover:shadow-md transition-shadow">
      {!isPlaying ? (
        <div className="relative w-full h-full">
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 w-full h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-left"
            aria-label={accessibleLabel}
          >
            <Image
              src={posterSrc}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              fetchPriority="low"
              referrerPolicy="no-referrer"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />

            {tag && (
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-accent text-slate-950 font-mono shadow-md border border-accent/40">
                  {tag}
                </span>
              </div>
            )}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/90 hover:bg-primary text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 border-2 border-accent/80 backdrop-blur-sm">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 text-white" fill="currentColor" />
              </div>
            </div>

            {title && (
              <div className="absolute bottom-0 inset-x-0 p-3.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none text-left">
                <span className="text-xs sm:text-sm font-semibold text-white drop-shadow-sm line-clamp-1 font-heading">
                  {title}
                </span>
              </div>
            )}
          </button>

          {/* Crawlable Watch Page Link for Search Engines */}
          {watchUrl && (
            <div className="absolute top-3 right-3 z-20">
              <Link
                href={watchUrl}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md border border-white/20 shadow-md transition-all font-heading"
                title={watchLabel}
              >
                <span>{watchLabel}</span>
                <ExternalLink className="w-3 h-3 ml-1 text-accent" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            controls
            playsInline
            preload="none"
            className="w-full h-full object-cover outline-none"
          />
          {watchUrl && (
            <div className="absolute top-3 right-3 z-20">
              <Link
                href={watchUrl}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md border border-white/20 shadow-md transition-all font-heading"
              >
                <span>{watchLabel}</span>
                <ExternalLink className="w-3 h-3 ml-1 text-accent" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
