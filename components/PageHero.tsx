import { getImageProps } from "next/image";
import React from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
  backgroundImage?: string;
  mobileBackgroundImage?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  backgroundImage = "/images/hero/hero-main.webp",
  mobileBackgroundImage = "/images/hero/hero-mobile.webp",
}: PageHeroProps) {
  const common = { alt: "", fill: true, priority: true, className: "object-cover object-center" };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: backgroundImage });
  const {
    props: { srcSet: mobileSrcSet, alt: mobileAlt, ...rest },
  } = getImageProps({ ...common, src: mobileBackgroundImage });

  return (
    <section data-navbar-hero="true" className="relative w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] flex items-end overflow-hidden pt-24 lg:pt-[104px]">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
          <img
            alt={mobileAlt}
            aria-hidden="true"
            srcSet={mobileSrcSet}
            {...rest}
            className="object-cover object-center w-full h-full"
          />
        </picture>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-8 xl:px-12 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 sm:w-12 h-px bg-accent/60" aria-hidden="true" />
              <span className="text-accent font-heading font-bold text-xs sm:text-sm tracking-[0.15em] uppercase">
                {eyebrow}
              </span>
            </div>
          )}
          
          <h1 className="text-white font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.12] sm:leading-[1.1] mb-6">
            {title}
          </h1>

          {description && (
            <p className="text-slate-200 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-8">
              {description}
            </p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
