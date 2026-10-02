"use client";

import { useState } from "react";
import { Reveal, RevealGroup } from "@/components/ScrollReveal";
import FactoryVideoCard from "@/components/FactoryVideoCard";
import { ChevronDown } from "lucide-react";

export interface FactoryVideoData {
  id: string;
  slug?: string;
  videoSrc: string;
  posterSrc: string;
  title?: string;
  tag?: string;
  watchUrl?: string;
}

interface FactoryVideoGalleryProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  playLabelPrefix: string;
  videos: FactoryVideoData[];
  variant?: "default" | "premium";
  initialCount?: number;
  batchSize?: number;
  loadMoreLabel?: string;
  watchLabel?: string;
}

export default function FactoryVideoGallery({
  title,
  subtitle,
  eyebrow,
  playLabelPrefix,
  videos,
  variant = "default",
  initialCount = 6,
  batchSize = 6,
  loadMoreLabel = "Lihat Video Lainnya",
  watchLabel = "Halaman Video",
}: FactoryVideoGalleryProps) {
  const isPremium = variant === "premium";
  const [visibleCount, setVisibleCount] = useState(
    Math.min(initialCount, videos.length)
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + batchSize, videos.length));
  };

  const visibleVideos = videos.slice(0, visibleCount);
  const hasMore = visibleCount < videos.length;

  return (
    <section
      id="production-videos"
      className={`py-12 sm:py-16 md:py-24 ${
        isPremium
          ? "bg-dark border-none text-white"
          : "bg-surface border-y border-stone-200/60 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealGroup>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <Reveal delay={0}>
              {eyebrow && (
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent mb-2 block font-heading">
                  {eyebrow}
                </span>
              )}
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-heading ${
                  isPremium ? "text-white tracking-tight" : "text-slate-900"
                }`}
              >
                {title}
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-5 mb-5 rounded-full" />
            </Reveal>
            {subtitle && (
              <Reveal delay={0.08}>
                <p
                  className={`text-sm sm:text-base lg:text-lg font-sans leading-relaxed ${
                    isPremium ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {subtitle}
                </p>
              </Reveal>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleVideos.map((video, index) => (
              <Reveal key={video.id} staggerIndex={index % batchSize} baseDelay={0.08}>
                <FactoryVideoCard
                  videoSrc={video.videoSrc}
                  posterSrc={video.posterSrc}
                  title={video.title}
                  tag={video.tag}
                  watchUrl={video.watchUrl}
                  watchLabel={watchLabel}
                  accessibleLabel={`${playLabelPrefix} ${video.title ? `: ${video.title}` : index + 1}`}
                />
              </Reveal>
            ))}
          </div>

          {hasMore && (
            <Reveal delay={0.15}>
              <div className="mt-12 sm:mt-16 text-center">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className={`inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold font-heading transition-all shadow-sm active:scale-95 ${
                    isPremium
                      ? "bg-stone-800 hover:bg-stone-700 text-white border border-stone-700/80 hover:border-stone-600 focus-visible:ring-accent"
                      : "bg-white hover:bg-slate-50 text-slate-900 border border-stone-300/80 hover:border-slate-400 focus-visible:ring-primary"
                  }`}
                >
                  <span>{loadMoreLabel}</span>
                  <ChevronDown className="w-4 h-4 ml-2 text-accent" aria-hidden="true" />
                </button>
              </div>
            </Reveal>
          )}
        </RevealGroup>
      </div>
    </section>
  );
}
