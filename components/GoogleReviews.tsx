import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ScrollReveal";

export interface GoogleReview {
  name: string;
  rating: 5;
  text: string;
  url: string;
}

/**
 * Configurable Google Reviews URL for Kaha Block.
 * Supports override via process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL.
 * Verified official Google Maps listing URL for Paving Block Kaha:
 */
export const GOOGLE_REVIEWS_URL =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ||
  "https://maps.google.com/?q=Paving+Block+Kaha+Suradita+Cisauk+Tangerang";

/**
 * Verified real customer reviews from Google Maps / Google Reviews for Kaha Block.
 * Preserved verbatim without grammatical or spelling modifications.
 */
export const GOOGLE_REVIEWS_DATA: GoogleReview[] = [
  {
    name: "Comando 69",
    rating: 5,
    text: "Paving kualitas bagus, dan untuk pengiriman tepat waktu",
    url: "https://www.google.com/maps/contrib/111204202175204437942/reviews?hl=id",
  },
  {
    name: "Reinhard James",
    rating: 5,
    text: "Pelayanan sangat ramah, kalau urusan kualitas dan harga sangat memuaskan.",
    url: "https://www.google.com/maps/contrib/113472032820480119815/reviews?hl=id",
  },
  {
    name: "Giorgio Suherman",
    rating: 5,
    text: "Paving yg dikirim kuat dan sesuai spek mutu dan cepat kiriman nya",
    url: "https://www.google.com/maps/contrib/118027699461669715682/reviews?hl=id",
  },
  {
    name: "anugerah rama",
    rating: 5,
    text: "Berkuwalitas.cepat dalam pelayana.siap menerima saran dan tepat waktu padasaat penggiriman yg pastinya Bersahabat.",
    url: "https://www.google.com/maps/contrib/104559471564439339367/reviews?hl=id",
  },
  {
    name: "wari yono",
    rating: 5,
    text: "Kwalitas paving block Kaha is the best,tidak diragukan dan konsisten, Profilnya penuh warna dan tahan lama... 👍👍👍..",
    url: "https://www.google.com/maps/contrib/110613704170977952296/reviews?hl=id",
  },
  {
    name: "Budi Wiharsa",
    rating: 5,
    text: "Bahan nya tebal dan orang nya baik",
    url: "https://www.google.com/maps/contrib/117631293351732657685/reviews?hl=id",
  },
];

export interface GoogleReviewsDictionary {
  eyebrow: string;
  title: string;
  subtitle: string;
  sourceLabel: string;
  cta: string;
  ratingLabel?: string;
  viewReviewAria?: string;
}

interface GoogleReviewsProps {
  dict: GoogleReviewsDictionary;
}

export default function GoogleReviews({ dict }: GoogleReviewsProps) {
  return (
    <section
      id="google-reviews-section"
      aria-labelledby="google-reviews-heading"
      className="py-16 sm:py-20 lg:py-28 bg-white border-t border-stone-200/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealGroup>
          {/* Section Header */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <Reveal delay={0}>
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                  {dict.eyebrow}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                id="google-reviews-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-slate-900 tracking-tight"
              >
                {dict.title}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-base text-slate-500 font-sans mt-4 max-w-xl leading-relaxed">
                {dict.subtitle}
              </p>
            </Reveal>
          </div>

          {/* Reviews Grid
              - Desktop (lg): 3 equal columns, 2 rows (6 cards)
              - Tablet (md): 2 equal columns
              - Mobile (< md): horizontal touch scroll with CSS scroll-snap, 85vw width cards, no layout shift
          */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-6 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
            {GOOGLE_REVIEWS_DATA.map((review, index) => (
              <Reveal
                key={review.name}
                staggerIndex={index}
                baseDelay={0.2}
                as="article"
                className="w-[85vw] max-w-[340px] sm:max-w-[380px] shrink-0 md:w-auto md:max-w-none md:shrink snap-center md:snap-align-none flex flex-col justify-between bg-surface border border-stone-200/80 hover:border-accent/60 transition-colors duration-300 p-6 sm:p-7 relative group"
              >
                <div>
                  {/* Card Header: 5 Stars + Google Review Source Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className="flex items-center gap-1 text-accent"
                      aria-label={dict.ratingLabel || `${review.rating} / 5`}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-accent text-accent"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-slate-500 font-heading">
                      {dict.sourceLabel}
                    </span>
                  </div>

                  {/* Verbatim Review Quote */}
                  <blockquote className="my-4 flex-grow">
                    <p className="text-sm sm:text-base text-slate-700 font-sans leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </blockquote>
                </div>

                {/* Card Footer: Reviewer Name & Google Profile Link */}
                <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between gap-4 mt-auto">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold font-heading text-slate-900 truncate">
                      {review.name}
                    </h3>
                  </div>
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${dict.viewReviewAria || "Google Review"}: ${review.name}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm py-1 px-1.5 -mr-1.5 shrink-0"
                  >
                    <span className="text-[11px] font-heading uppercase tracking-wider">
                      Google
                    </span>
                    <ExternalLink
                      className="w-3.5 h-3.5 text-slate-400 group-hover:text-accent transition-colors"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA to View All Google Reviews */}
          <Reveal delay={0.32} className="mt-12 lg:mt-16 text-center">
            <a
              id="view-all-google-reviews-btn"
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-dark hover:bg-slate-800 text-white px-8 py-3.5 font-bold text-xs uppercase tracking-widest font-heading transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>{dict.cta}</span>
              <ExternalLink className="w-4 h-4 text-accent" aria-hidden="true" />
            </a>
          </Reveal>
        </RevealGroup>
      </div>
    </section>
  );
}
