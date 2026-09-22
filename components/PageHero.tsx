import { getImageProps } from "next/image";
import React from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
  // Retained for API compatibility but ignored to enforce Homepage visual consistency
  backgroundImage?: string;
  mobileBackgroundImage?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  const common = { alt: "", fill: true, priority: true, className: "object-cover object-center" };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: "/images/hero/hero-main.webp" });
  const { props: mobileProps } = getImageProps({ ...common, src: "/images/hero/hero-mobile.webp" });
  const mobileFallbackSrc = "/_next/image?url=%2Fimages%2Fhero%2Fhero-mobile.webp&w=750&q=75";

  return (
    <>
      {/* Early Responsive LCP Preload: Mobile (<768px) and Desktop (>=768px) */}
      <link
        rel="preload"
        as="image"
        media="(max-width: 767px)"
        imageSrcSet={mobileProps.srcSet}
        imageSizes="100vw"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        media="(min-width: 768px)"
        imageSrcSet={desktopSrcSet}
        imageSizes="100vw"
        fetchPriority="high"
      />

      <section
        data-navbar-hero="true"
        className="relative overflow-hidden bg-dark min-h-[580px] sm:min-h-[620px] lg:min-h-[100svh] lg:h-auto flex flex-col justify-center pt-20 sm:pt-24 lg:pt-26 xl:pt-28 pb-6 sm:pb-8 lg:pb-6"
        style={{ minHeight: "580px" }}
      >
        {/* Background Images */}
        <div
          className="absolute inset-0 z-0 pointer-events-none select-none"
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <picture>
            <source media="(min-width: 768px)" sizes="100vw" srcSet={desktopSrcSet} />
            <img
              alt={mobileProps.alt}
              aria-hidden="true"
              srcSet={mobileProps.srcSet}
              sizes="100vw"
              src={mobileFallbackSrc}
              fetchPriority="high"
              loading="eager"
              decoding={mobileProps.decoding}
              style={{
                ...mobileProps.style,
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="object-cover object-center w-full h-full"
            />
          </picture>
          {/* Exact Homepage Overlay */}
          <div
            className="absolute inset-0 bg-black/35 pointer-events-none"
            style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          />
        </div>

        {/* Content Container */}
        <div className="max-w-[1500px] mx-auto px-6 sm:px-8 xl:px-12 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="w-full max-w-[620px] xl:max-w-[680px] flex flex-col justify-center">
          {eyebrow && (
            <div className="flex items-center space-x-3 mb-3 lg:mb-4">
              <span className="h-[1.5px] w-7 sm:w-9 bg-accent" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs lg:text-[13px] font-bold uppercase tracking-[0.22em] text-accent font-heading">
                {eyebrow}
              </span>
            </div>
          )}
          
          <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[68px] 2xl:text-[76px] font-black tracking-tight font-heading leading-[1.12] sm:leading-[0.92] lg:leading-[0.94] uppercase mb-4 lg:mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] text-white">
            {title}
          </h1>
          
          {description && (
            <div className="text-sm sm:text-base lg:text-[16px] xl:text-[17px] text-slate-200/95 font-sans leading-[1.6] mb-5 lg:mb-6 max-w-[500px] xl:max-w-[540px] drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              {description}
            </div>
          )}
          
          {children}
        </div>
      </div>
    </section>
    </>
  );
}
