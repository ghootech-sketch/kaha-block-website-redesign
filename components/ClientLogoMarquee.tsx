"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { Play, Pause } from "lucide-react";

export interface ClientLogo {
  id: number;
  label: string;
  name?: string;
  logo: string;
}

/**
 * 12 Client / Partner Logos for KAHA BLOCK.
 * Sequentially mapped from /images/clients/client-01.webp through client-12.webp.
 */
export const CLIENT_LOGOS: ClientLogo[] = [
  { id: 1, label: "KAHA BLOCK client logo 01", logo: "/images/clients/client-01.webp" },
  { id: 2, label: "KAHA BLOCK client logo 02", logo: "/images/clients/client-02.webp" },
  { id: 3, label: "KAHA BLOCK client logo 03", logo: "/images/clients/client-03.webp" },
  { id: 4, label: "KAHA BLOCK client logo 04", logo: "/images/clients/client-04.webp" },
  { id: 5, label: "KAHA BLOCK client logo 05", logo: "/images/clients/client-05.webp" },
  { id: 6, label: "KAHA BLOCK client logo 06", logo: "/images/clients/client-06.webp" },
  { id: 7, label: "KAHA BLOCK client logo 07", logo: "/images/clients/client-07.webp" },
  { id: 8, label: "KAHA BLOCK client logo 08", logo: "/images/clients/client-08.webp" },
  { id: 9, label: "KAHA BLOCK client logo 09", logo: "/images/clients/client-09.webp" },
  { id: 10, label: "KAHA BLOCK client logo 10", logo: "/images/clients/client-10.webp" },
  { id: 11, label: "KAHA BLOCK client logo 11", logo: "/images/clients/client-11.webp" },
  { id: 12, label: "KAHA BLOCK client logo 12", logo: "/images/clients/client-12.webp" },
];

interface ClientLogoMarqueeProps {
  dict: {
    eyebrow: string;
    title: string;
    subtitle?: string;
    play?: string;
    pause?: string;
    playAria?: string;
    pauseAria?: string;
  };
}

export default function ClientLogoMarquee({ dict }: ClientLogoMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  // Render array twice for seamless continuous horizontal marquee animation loop
  const displayLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      id="clients-partners-section"
      aria-labelledby="client-logos-heading"
      className="py-12 sm:py-16 bg-surface overflow-hidden relative"
    >
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center relative">
          {/* Elegant section label */}
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="w-8 h-px bg-slate-300" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
              {dict.eyebrow}
            </span>
            <span className="w-8 h-px bg-slate-300" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2
            id="client-logos-heading"
            className="text-xl sm:text-2xl lg:text-3xl font-light font-heading text-slate-800 tracking-wide mb-4"
          >
            {dict.title}
          </h2>

          {/* Supporting subtitle line */}
          {dict.subtitle && (
            <p className="text-sm text-slate-500 max-w-2xl mx-auto font-sans tracking-wide">
              {dict.subtitle}
            </p>
          )}

          {/* Marquee Play/Pause Control */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="mt-6 sm:mt-0 sm:absolute sm:bottom-0 sm:right-6 inline-flex items-center gap-2 px-4 py-2 text-slate-400 text-[10px] uppercase tracking-widest font-semibold hover:text-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300"
            aria-label={isPaused ? dict.playAria || "Play" : dict.pauseAria || "Pause"}
          >
            {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
            <span>{isPaused ? dict.play || "Play" : dict.pause || "Pause"}</span>
          </button>
        </div>

        {/* Marquee Track Container with Edge Fade Gradients */}
        <div className="relative w-full overflow-hidden py-1">
          {/* Left Edge Fade */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"
            aria-hidden="true"
          />

          {/* Right Edge Fade */}
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-surface via-surface/80 to-transparent z-10"
            aria-hidden="true"
          />

          {/* Infinite Moving Track */}
          <div 
            className="flex w-max animate-marquee gap-4 sm:gap-6 lg:gap-8 motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:w-full motion-reduce:px-4"
            style={{ animationPlayState: isPaused ? 'paused' : undefined }}
          >
            {displayLogos.map((client, index) => {
              const isDuplicate = index >= CLIENT_LOGOS.length;
              const paddedId = String(client.id).padStart(2, "0");
              const altText = `KAHA BLOCK client logo ${paddedId}`;

              return (
                <div
                  key={`${client.id}-${index}`}
                  aria-hidden={isDuplicate ? "true" : undefined}
                  className={`relative flex shrink-0 items-center justify-center h-20 w-40 sm:h-24 sm:w-48 lg:h-28 lg:w-56 p-4 mix-blend-multiply opacity-70 hover:opacity-100 transition-opacity duration-300 ${
                    isDuplicate ? "motion-reduce:hidden" : ""
                  }`}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={altText}
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                      className="object-contain p-2 max-h-[60px] sm:max-h-[70px] max-w-[80%] m-auto grayscale contrast-125"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
