import { BUSINESS_FACTS } from "@/lib/business-facts";
import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import FactoryVideoGallery, { FactoryVideoData } from "@/components/FactoryVideoGallery";
import PageHero from "@/components/PageHero";
import {
  Calendar,
  Factory,
  MapPin,
  ShieldCheck,
  Truck,
  Wrench,
  Target,
  Compass,
  CheckCircle2,
  Clock,
  MessageSquare,
  Handshake,
  Home,
  Store,
  Warehouse,
  HardHat,
  Landmark,
  Layers,
  Phone,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    return {};
  }
  return constructPageMetadata("about", lang as Locale);
}

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].about;

  const factIcons = [
    Calendar,
    Factory,
    MapPin,
    ShieldCheck,
    Truck,
    Wrench,
  ];

  const commitmentIcons = [
    CheckCircle2,
    Clock,
    MessageSquare,
    Handshake,
  ];

  const serveIcons = [
    Home,
    Store,
    Warehouse,
    HardHat,
    Landmark,
    Layers,
  ];

  const aboutVideos: FactoryVideoData[] = [
    {
      id: "prod-07",
      videoSrc: "/videos/factory/factory-production-07.mp4",
      posterSrc: "/images/factory/factory-production-07.webp",
    },
    {
      id: "prod-23",
      videoSrc: "/videos/factory/factory-production-23.mp4",
      posterSrc: "/images/factory/factory-production-23.webp",
    },
    {
      id: "prod-05",
      videoSrc: "/videos/factory/factory-production-05.mp4",
      posterSrc: "/images/factory/factory-production-05.webp",
    },
    {
      id: "prod-06",
      videoSrc: "/videos/factory/factory-production-06.mp4",
      posterSrc: "/images/factory/factory-production-06.webp",
    },
    {
      id: "prod-12",
      videoSrc: "/videos/factory/factory-production-12.mp4",
      posterSrc: "/images/factory/factory-production-12.webp",
    },
    {
      id: "prod-13",
      videoSrc: "/videos/factory/factory-production-13.mp4",
      posterSrc: "/images/factory/factory-production-13.webp",
    },
  ];

  return (
    <>
      <JsonLd page="about" lang={currentLang} />
      <div className="bg-surface min-h-screen text-slate-900 font-sans">
        
        {/* =========================================================
            1. ABOUT HERO
        ========================================================= */}
        <PageHero
          eyebrow={dict.overview.eyebrow}
          title={dict.title}
          description={dict.subtitle}

        />

        {/* =========================================================
            2. COMPANY OVERVIEW
        ========================================================= */}
        <section id="company-overview" className="py-16 sm:py-20 lg:py-28 bg-white border-b border-stone-200/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
              
              {/* Main Narrative Column (7 cols) */}
              <ScrollReveal direction="right" className="lg:col-span-7 space-y-5 text-slate-500 text-sm sm:text-base font-sans leading-relaxed">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="w-8 h-px bg-accent" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                    {dict.overview.eyebrow}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 font-heading tracking-tight mb-6">
                  {dict.overview.heading}
                </h2>
                
                <p>{dict.overview.p1}</p>
                <p>{dict.overview.p2}</p>
                <p>{dict.overview.p3}</p>
                <p className="font-medium text-slate-900">{dict.overview.p4}</p>
              </ScrollReveal>

              {/* Highlight Sidebar Card (5 cols) */}
              <ScrollReveal direction="left" delay={0.15} className="lg:col-span-5 bg-surface rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-stone-200/80 border-t-4 border-t-accent shadow-xs">
                <div className="border-b border-stone-200/80 pb-5 mb-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-700 mb-1">
                    Brand & Badan Usaha
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Kaha Block
                  </div>
                  <div className="text-xs text-slate-600">
                    PT Kaha Sukses Mandiri
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 text-slate-900 border border-accent/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar className="w-4 h-4 text-slate-900" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block">{dict.facts.items[0].label}</strong>
                      <span className="text-slate-600">{dict.facts.items[0].value}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 text-slate-900 border border-accent/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Factory className="w-4 h-4 text-slate-900" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block">{dict.facts.items[1].label}</strong>
                      <span className="text-slate-600">{dict.facts.items[1].value} ({dict.facts.items[2].value})</span>
                      <Link
                        href={`/${currentLang}/projects/production`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-hover hover:underline mt-1"
                      >
                        <span>{currentLang === "en" ? "View factory production documentation" : "Lihat dokumentasi produksi pabrik"}</span>
                        <ArrowRight className="w-3 h-3 text-accent" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 text-slate-900 border border-accent/40 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-slate-900" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block">{dict.facts.items[3].label}</strong>
                      <span className="text-slate-600">{dict.facts.items[3].value}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 text-slate-900 border border-accent/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Truck className="w-4 h-4 text-slate-900" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block">{dict.facts.items[4].label}</strong>
                      <span className="text-slate-600">{dict.facts.items[4].value}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-200/80">
                  <a
                    href={BUSINESS_FACTS.contact.whatsappSecondaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full min-h-[44px] bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    {dict.finalCta.ctaPrimary}
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. COMPANY FACTS
        ========================================================= */}
        <section id="company-facts" className="py-16 sm:py-20 lg:py-28 bg-surface border-b border-stone-200/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                  {dict.facts.eyebrow}
                </span>
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 font-heading tracking-tight mb-4">
                {dict.facts.heading}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                {dict.facts.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {dict.facts.items.map((fact, index) => {
                const IconComponent = factIcons[index] || Factory;
                return (
                  <ScrollReveal
                    key={index}
                    delay={index * 0.05}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 border-t-2 border-t-accent/60 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-accent/20 text-slate-900 flex items-center justify-center mb-4 border border-accent/40">
                        <IconComponent className="w-6 h-6 text-slate-900" aria-hidden="true" />
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                        {fact.label}
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mb-2">
                        {fact.value}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-snug pt-2 border-t border-stone-100">
                      {fact.desc}
                    </p>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            4. VISION AND MISSION
        ========================================================= */}
        <section id="vision-and-mission" className="py-16 sm:py-20 lg:py-28 bg-white border-b border-stone-200/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                  {dict.visionMission.eyebrow}
                </span>
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 font-heading tracking-tight mb-4">
                {dict.visionMission.heading}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                {dict.visionMission.subtitle}
              </p>
            </ScrollReveal>

            {/* Vision Statement Card (Hero Banner Card) */}
            <ScrollReveal className="mb-8 sm:mb-16 bg-dark text-white rounded-xl p-8 sm:p-10 md:p-12 relative overflow-hidden">
              <div className="max-w-4xl relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent font-heading">
                    {dict.visionMission.visionTitle}
                  </span>
                </div>
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed font-heading tracking-tight text-white">
                  &ldquo;{dict.visionMission.visionText}&rdquo;
                </blockquote>
              </div>
            </ScrollReveal>

            {/* Mission Section (01, 02, 03 Numbered Steps) */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Compass className="w-5 h-5 text-accent" aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl font-light text-slate-900 font-heading tracking-tight">
                  {dict.visionMission.missionTitle}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {dict.visionMission.missions.map((mission, index) => (
                  <ScrollReveal
                    key={index}
                    delay={index * 0.08}
                    className="flex flex-col group"
                  >
                    <div className="text-4xl font-light font-heading text-slate-200 mb-4 group-hover:text-accent transition-colors">
                      {mission.number}
                    </div>
                    <div className="h-px w-12 bg-accent mb-4" aria-hidden="true" />
                    <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed flex-1">
                      {mission.text}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            5. OUR COMMITMENTS
        ========================================================= */}
        <section id="our-commitments" className="py-16 sm:py-20 lg:py-28 bg-surface border-b border-stone-200/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                  {dict.commitments.eyebrow}
                </span>
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 font-heading tracking-tight mb-4">
                {dict.commitments.heading}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                {dict.commitments.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {dict.commitments.items.map((item, index) => {
                const IconComponent = commitmentIcons[index] || CheckCircle2;
                return (
                  <ScrollReveal
                    key={index}
                    delay={index * 0.05}
                    className="flex flex-col group"
                  >
                    <div className="mb-4">
                      <IconComponent className="w-8 h-8 text-accent mb-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-slate-900 font-heading mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-sans flex-1">
                      {item.desc}
                    </p>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            6. WHO WE SERVE
        ========================================================= */}
        <section id="who-we-serve" className="py-16 sm:py-20 lg:py-28 bg-white border-b border-stone-200/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                  {dict.whoWeServe.eyebrow}
                </span>
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 font-heading tracking-tight mb-4">
                {dict.whoWeServe.heading}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                {dict.whoWeServe.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {dict.whoWeServe.items.map((serve, index) => {
                const IconComponent = serveIcons[index] || Home;
                return (
                  <ScrollReveal
                    key={index}
                    delay={index * 0.05}
                    className="flex flex-col group border border-stone-200/40 p-6 sm:p-8 hover:border-accent/40 transition-colors bg-surface/50"
                  >
                    <div className="mb-4">
                      <IconComponent className="w-6 h-6 text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-slate-900 font-heading mb-3">
                      {serve.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-sans leading-relaxed">
                      {serve.desc}
                    </p>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            6.5. FACTORY PRODUCTION VIDEOS
        ========================================================= */}
        <FactoryVideoGallery
          title={dict.factoryVideos.title}
          subtitle={dict.factoryVideos.subtitle}
          playLabelPrefix={dict.factoryVideos.playLabel}
          videos={aboutVideos}
        />

        {/* =========================================================
            7. FINAL CTA
        ========================================================= */}
        <section id="about-cta" className="bg-dark text-white relative overflow-hidden py-16 sm:py-20 lg:py-28">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-white tracking-tight mb-6">
                {dict.finalCta.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-400 font-sans leading-relaxed mb-10">
                {dict.finalCta.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={BUSINESS_FACTS.contact.whatsappPrimaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto min-h-[48px] bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3.5 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent text-sm sm:text-base font-heading tracking-wide uppercase"
                >
                  <Phone className="w-4 h-4 mr-2.5" aria-hidden="true" />
                  {dict.finalCta.ctaPrimary}
                </a>

                <Link
                  href={`/${currentLang}/products`}
                  className="inline-flex items-center justify-center w-full sm:w-auto min-h-[48px] bg-transparent hover:bg-white/5 text-white font-bold px-8 py-3.5 rounded-xl border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white text-sm sm:text-base font-heading tracking-wide uppercase"
                >
                  {dict.finalCta.ctaSecondary}
                  <ArrowRight className="w-4 h-4 ml-2.5 text-accent" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </>
  );
}

