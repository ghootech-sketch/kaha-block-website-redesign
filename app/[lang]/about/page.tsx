import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
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
  const contactDict = dictionaries[currentLang].contact;

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

  return (
    <>
      <JsonLd page="about" lang={currentLang} />
      <div className="bg-[#FAF9F6] min-h-screen text-[#0F2042] font-sans">
        
        {/* =========================================================
            1. ABOUT HERO
        ========================================================= */}
        <section id="about-hero" className="bg-[#0F2042] text-white pt-16 sm:pt-20 md:pt-24 pb-14 sm:pb-18 md:pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-3xl opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7A1C1C] rounded-full filter blur-3xl opacity-15 pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <ScrollReveal immediate>
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-slate-200 border border-white/15 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
                {dict.overview.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-heading mb-4 sm:mb-6">
                {dict.title}
              </h1>
              <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 font-sans leading-relaxed">
                {dict.subtitle}
              </p>
              <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#7A1C1C] mx-auto mt-6 rounded-full" />
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================
            2. COMPANY OVERVIEW
        ========================================================= */}
        <section id="company-overview" className="py-12 sm:py-16 md:py-20 bg-white border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
              
              {/* Main Narrative Column (7 cols) */}
              <ScrollReveal direction="right" className="lg:col-span-7 space-y-4 sm:space-y-5 text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#7A1C1C]">
                  <span className="w-2 h-2 rounded-full bg-[#7A1C1C]" aria-hidden="true" />
                  {dict.overview.eyebrow}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F2042] font-heading tracking-tight">
                  {dict.overview.heading}
                </h2>
                
                <p className="pt-2">{dict.overview.p1}</p>
                <p>{dict.overview.p2}</p>
                <p>{dict.overview.p3}</p>
                <p className="font-medium text-[#0F2042]">{dict.overview.p4}</p>
              </ScrollReveal>

              {/* Highlight Sidebar Card (5 cols) */}
              <ScrollReveal direction="left" delay={0.15} className="lg:col-span-5 bg-[#F7F5F0] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
                <div className="border-b border-stone-200/80 pb-5 mb-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#0F2042]/70 mb-1">
                    Brand & Badan Usaha
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#0F2042] font-heading">
                    Kaha Block
                  </div>
                  <div className="text-xs text-slate-600">
                    PT Kaha Sukses Mandiri
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0F2042]/10 flex items-center justify-center text-[#0F2042] shrink-0 mt-0.5">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="text-[#0F2042] block">{dict.facts.items[0].label}</strong>
                      <span className="text-slate-600">{dict.facts.items[0].value}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0F2042]/10 flex items-center justify-center text-[#0F2042] shrink-0 mt-0.5">
                      <Factory className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="text-[#0F2042] block">{dict.facts.items[1].label}</strong>
                      <span className="text-slate-600">{dict.facts.items[1].value} ({dict.facts.items[2].value})</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0F2042]/10 flex items-center justify-center text-[#0F2042] shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="text-[#0F2042] block">{dict.facts.items[3].label}</strong>
                      <span className="text-slate-600">{dict.facts.items[3].value}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0F2042]/10 flex items-center justify-center text-[#0F2042] shrink-0 mt-0.5">
                      <Truck className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="text-[#0F2042] block">{dict.facts.items[4].label}</strong>
                      <span className="text-slate-600">{dict.facts.items[4].value}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-200/80">
                  <a
                    href={contactDict.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full min-h-[44px] bg-[#0F2042] text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:bg-[#7A1C1C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
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
        <section id="company-facts" className="py-12 sm:py-16 md:py-20 bg-[#F7F5F0] border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#7A1C1C] block mb-2">
                {dict.facts.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F2042] font-heading tracking-tight mb-3">
                {dict.facts.heading}
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
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
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#0F2042]/5 text-[#0F2042] flex items-center justify-center mb-4 border border-[#0F2042]/10">
                        <IconComponent className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                        {fact.label}
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-[#0F2042] font-heading mb-2">
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
        <section id="vision-and-mission" className="py-12 sm:py-16 md:py-20 bg-white border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#7A1C1C] block mb-2">
                {dict.visionMission.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F2042] font-heading tracking-tight mb-3">
                {dict.visionMission.heading}
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                {dict.visionMission.subtitle}
              </p>
            </ScrollReveal>

            {/* Vision Statement Card (Hero Banner Card) */}
            <ScrollReveal className="mb-8 sm:mb-12 bg-gradient-to-br from-[#0F2042] to-[#15345d] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-lg relative overflow-hidden border-t-4 border-[#D4AF37]">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-3 sm:mb-4">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" aria-hidden="true" />
                  {dict.visionMission.visionTitle}
                </div>
                <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug font-heading tracking-tight text-white">
                  &ldquo;{dict.visionMission.visionText}&rdquo;
                </blockquote>
              </div>
            </ScrollReveal>

            {/* Mission Section (01, 02, 03 Numbered Steps) */}
            <div>
              <div className="flex items-center gap-2 mb-6 text-sm sm:text-base font-bold text-[#0F2042] font-heading">
                <Compass className="w-5 h-5 text-[#7A1C1C]" aria-hidden="true" />
                <span>{dict.visionMission.missionTitle}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {dict.visionMission.missions.map((mission, index) => (
                  <ScrollReveal
                    key={index}
                    delay={index * 0.08}
                    className="bg-[#F7F5F0] rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-2xs relative flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#7A1C1C] mb-3 tracking-tighter">
                        {mission.number}
                      </div>
                      <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-sans font-medium">
                        {mission.text}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs text-slate-500">
                      <span>Komitmen Misi</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            5. OUR COMMITMENTS
        ========================================================= */}
        <section id="our-commitments" className="py-12 sm:py-16 md:py-20 bg-[#F7F5F0] border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#7A1C1C] block mb-2">
                {dict.commitments.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F2042] font-heading tracking-tight mb-3">
                {dict.commitments.heading}
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                {dict.commitments.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {dict.commitments.items.map((item, index) => {
                const IconComponent = commitmentIcons[index] || CheckCircle2;
                return (
                  <ScrollReveal
                    key={index}
                    delay={index * 0.05}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-[#0F2042]/5 text-[#0F2042] flex items-center justify-center mb-4 border border-[#0F2042]/10">
                        <IconComponent className="w-5 h-5 text-[#0F2042]" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F2042] font-heading mb-2.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-[#0F2042] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7A1C1C]" aria-hidden="true" />
                      <span>Standar Kaha Block</span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            6. WHO WE SERVE
        ========================================================= */}
        <section id="who-we-serve" className="py-12 sm:py-16 md:py-20 bg-white border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#7A1C1C] block mb-2">
                {dict.whoWeServe.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F2042] font-heading tracking-tight mb-3">
                {dict.whoWeServe.heading}
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
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
                    className="bg-[#FAF9F6] rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-2xs hover:border-[#0F2042]/30 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-white text-[#0F2042] flex items-center justify-center mb-4 border border-stone-200 shadow-2xs">
                        <IconComponent className="w-5 h-5 text-[#0F2042]" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F2042] font-heading mb-2">
                        {serve.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {serve.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            7. FINAL CTA
        ========================================================= */}
        <section id="about-cta" className="py-12 sm:py-16 md:py-20 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="bg-[#0F2042] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] rounded-bl-full opacity-10 pointer-events-none transform translate-x-12 -translate-y-12" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7A1C1C] rounded-tr-full opacity-20 pointer-events-none transform -translate-x-12 translate-y-12" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 sm:mb-6 leading-tight">
                  {dict.finalCta.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-200 mb-8 sm:mb-10 font-sans leading-relaxed">
                  {dict.finalCta.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={contactDict.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto min-h-[48px] bg-[#7A1C1C] hover:bg-[#631616] text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] text-sm sm:text-base"
                  >
                    <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                    {dict.finalCta.ctaPrimary}
                  </a>

                  <Link
                    href={`/${currentLang}/products`}
                    className="inline-flex items-center justify-center w-full sm:w-auto min-h-[48px] bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white text-sm sm:text-base"
                  >
                    {dict.finalCta.ctaSecondary}
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </>
  );
}

