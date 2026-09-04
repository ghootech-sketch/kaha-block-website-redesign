"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface FactoryVideoCardProps {
  videoSrc: string;
  posterSrc: string;
  accessibleLabel: string;
}

export default function FactoryVideoCard({
  videoSrc,
  posterSrc,
  accessibleLabel,
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
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 w-full h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label={accessibleLabel}
        >
          <Image
            src={posterSrc}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            referrerPolicy="no-referrer"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/90 hover:bg-primary text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 border-2 border-accent/80 backdrop-blur-sm">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 text-white" fill="currentColor" />
            </div>
          </div>
        </button>
      ) : (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          controls
          playsInline
          preload="none"
          className="w-full h-full object-cover outline-none"
        />
      )}
    </div>
  );
}
