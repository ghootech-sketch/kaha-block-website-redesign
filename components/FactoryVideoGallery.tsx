import { Reveal, RevealGroup } from "@/components/ScrollReveal";
import FactoryVideoCard from "@/components/FactoryVideoCard";

export interface FactoryVideoData {
  id: string;
  videoSrc: string;
  posterSrc: string;
}

interface FactoryVideoGalleryProps {
  title: string;
  subtitle?: string;
  playLabelPrefix: string;
  videos: FactoryVideoData[];
  variant?: "default" | "premium";
}

export default function FactoryVideoGallery({
  title,
  subtitle,
  playLabelPrefix,
  videos,
  variant = "default",
}: FactoryVideoGalleryProps) {
  const isPremium = variant === "premium";

  return (
    <section className={`py-12 sm:py-16 md:py-24 ${isPremium ? 'bg-slate-950 border-none text-white' : 'bg-surface border-y border-stone-200/60 text-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealGroup>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <Reveal delay={0}>
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black font-heading ${isPremium ? 'text-white tracking-tight' : 'text-slate-900'}`}>
                {title}
              </h2>
              <div className={`w-16 h-1 mx-auto mt-6 mb-6 ${isPremium ? 'bg-accent' : 'bg-primary rounded-full'}`} />
            </Reveal>
            {subtitle && (
              <Reveal delay={0.08}>
                <p className={`text-base sm:text-lg lg:text-xl font-sans ${isPremium ? 'text-slate-300' : 'text-slate-600'}`}>
                  {subtitle}
                </p>
              </Reveal>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {videos.map((video, index) => (
              <Reveal key={video.id} staggerIndex={index} baseDelay={0.16}>
                <FactoryVideoCard
                  videoSrc={video.videoSrc}
                  posterSrc={video.posterSrc}
                  accessibleLabel={`${playLabelPrefix} ${index + 1}`}
                />
              </Reveal>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
