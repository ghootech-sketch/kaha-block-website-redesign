import React from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 border-b border-primary-hover relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-bl-full opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-tr-full opacity-30 pointer-events-none" />
      
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-8 xl:px-12 relative z-10">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs sm:text-sm block mb-4 font-heading">
              {eyebrow}
            </span>
          )}
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white leading-[1.15]">
            {title}
          </h1>
          
          {description && (
            <div className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed mb-8 max-w-2xl">
              {description}
            </div>
          )}
          
          {children}
        </div>
      </div>
    </section>
  );
}
