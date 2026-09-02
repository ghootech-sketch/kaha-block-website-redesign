import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { Handshake } from "lucide-react";

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
  };
}

export default function ClientLogoMarquee({ dict }: ClientLogoMarqueeProps) {
  // Render array twice for seamless continuous horizontal marquee animation loop
  const displayLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      id="clients-partners-section"
      aria-labelledby="client-logos-heading"
      className="py-7 sm:py-9 bg-white border-y border-stone-200/60 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-5 text-center">
        <ScrollReveal>
          {/* Eyebrow badge with Gold indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/40 text-primary font-bold text-xs uppercase tracking-wider font-heading mb-2.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
            <Handshake className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
            <span>{dict.eyebrow}</span>
          </div>

          {/* Heading */}
          <h2
            id="client-logos-heading"
            className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight"
          >
            {dict.title}
          </h2>

          {/* Short heading divider */}
          <div className="h-0.5 w-12 bg-accent rounded-full my-2 mx-auto" aria-hidden="true" />

          {/* Supporting subtitle line */}
          {dict.subtitle && (
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-sans">
              {dict.subtitle}
            </p>
          )}
        </ScrollReveal>
      </div>

      {/* Marquee Track Container with Edge Fade Gradients */}
      <div className="relative w-full overflow-hidden py-1">
        {/* Left Edge Fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 lg:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10"
          aria-hidden="true"
        />

        {/* Right Edge Fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 lg:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10"
          aria-hidden="true"
        />

        {/* Infinite Moving Track */}
        <div className="flex w-max animate-marquee gap-4 sm:gap-6 lg:gap-8 motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:w-full motion-reduce:px-4">
          {displayLogos.map((client, index) => {
            const isDuplicate = index >= CLIENT_LOGOS.length;
            const paddedId = String(client.id).padStart(2, "0");
            const altText = `KAHA BLOCK client logo ${paddedId}`;

            return (
              <div
                key={`${client.id}-${index}`}
                aria-hidden={isDuplicate ? "true" : undefined}
                className={`relative flex shrink-0 items-center justify-center h-20 w-48 sm:h-24 sm:w-60 lg:h-32 lg:w-72 p-3 sm:p-4 rounded-xl bg-white border border-stone-200/80 shadow-2xs transition-all duration-300 hover:border-accent hover:shadow-sm group ${
                  isDuplicate ? "motion-reduce:hidden" : ""
                }`}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={altText}
                    fill
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 240px, 288px"
                    className="object-contain p-1.5 sm:p-2 max-h-[60px] sm:max-h-[66px] lg:max-h-[70px] max-w-[75%] m-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
