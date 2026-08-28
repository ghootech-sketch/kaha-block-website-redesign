import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import JsonLd from "@/components/JsonLd";
import {
  ShieldCheck,
  Truck,
  ArrowRight,
  Phone,
  Layers,
  Sparkles,
  Award,
  Factory,
  CreditCard,
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
  return constructPageMetadata("home", lang as Locale);
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang];
  const homeDict = dict.home;

  const featuredKeys = [
    "truepave",
    "half",
    "hexagonal",
    "topiUskup",
    "kanstein",
  ] as const;

  return (
    <>
      <JsonLd page="home" lang={currentLang} />

      <div className="flex flex-col min-h-screen bg-white">
        {/* =========================================================================
            SECTION 1: HERO SECTION
           ========================================================================= */}
        <section
          id="hero-section"
          aria-labelledby="hero-title"
          className="relative bg-gradient-to-b from-slate-50 to-white pt-10 sm:pt-14 md:pt-18 lg:pt-22 pb-14 sm:pb-18 md:pb-22 border-b border-gray-100 overflow-hidden"
        >
          {/* Subtle background decorative shapes */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 bg-[#0B2447]/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-10 w-72 h-72 bg-[#D90429]/5 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Content Column (7 cols on desktop) */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left">
                  {/* Eyebrow badge */}
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0B2447]/5 border border-[#0B2447]/10 w-fit mb-4 sm:mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#D90429] animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B2447] font-heading">
                      {homeDict.hero.eyebrow}
                    </span>
                  </div>

                  {/* H1 Heading */}
                  <h1
                    id="hero-title"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-[#0B2447] tracking-tight font-heading leading-[1.15] mb-5 sm:mb-6"
                  >
                    {homeDict.hero.h1}
                  </h1>

                  {/* Clear Narrative Description */}
                  <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed mb-8 max-w-2xl">
                    {homeDict.hero.description}
                  </p>

                  {/* Primary & Secondary Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8">
                    <a
                      id="hero-primary-cta"
                      href={dict.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#D90429] hover:bg-[#b50322] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
                    >
                      <Phone className="w-5 h-5 mr-2.5" aria-hidden="true" />
                      {homeDict.hero.ctaPrimary}
                    </a>

                    <Link
                      id="hero-secondary-cta"
                      href={`/${currentLang}/products`}
                      className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-[#0B2447] border-2 border-[#0B2447]/15 hover:border-[#0B2447] px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2447]"
                    >
                      {homeDict.hero.ctaSecondary}
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Trust Line & Key Verification Badges */}
                  <div className="pt-6 border-t border-gray-200/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 font-sans">
                    <div className="flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#D90429]" aria-hidden="true" />
                      <span className="font-semibold text-slate-700">
                        {homeDict.hero.trustNote}
                      </span>
                    </div>
                    <span className="text-gray-300 hidden sm:inline" aria-hidden="true">•</span>
                    <div className="flex items-center space-x-1.5">
                      <Factory className="w-4 h-4 text-[#0B2447]" aria-hidden="true" />
                      <span>{homeDict.hero.plantBadge}</span>
                    </div>
                  </div>
                </div>

                {/* Right Visual Column (5 cols on desktop) */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                    {/* Geometric Hydraulic Showcase Artwork */}
                    <div className="w-full h-full p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#0B2447] to-slate-900">
                      {/* Top spec badges */}
                      <div className="flex items-center justify-between text-white/90">
                        <div className="flex items-center space-x-2">
                          <Layers className="w-4 h-4 text-[#FFC300]" aria-hidden="true" />
                          <span className="text-xs font-mono font-bold tracking-wider uppercase">
                            {homeDict.hero.specsHeader}
                          </span>
                        </div>
                        <span className="px-2.5 py-1 bg-white/10 rounded-full text-[11px] font-mono text-white">
                          {homeDict.hero.gradeLabel} K-250 • K-300 • K-400
                        </span>
                      </div>

                      {/* Industrial Paver Grid Illustration */}
                      <div className="grid grid-cols-3 gap-2 my-auto max-w-[280px] mx-auto opacity-95">
                        <div className="h-10 bg-slate-400/90 rounded-md border border-white/20 shadow-xs flex items-center justify-center text-[10px] font-mono text-slate-900 font-bold">
                          TRUEPAVE
                        </div>
                        <div className="h-10 bg-slate-300/90 rounded-md border border-white/20 shadow-xs flex items-center justify-center text-[10px] font-mono text-slate-900 font-bold">
                          HALF
                        </div>
                        <div className="h-10 bg-[#FFC300] rounded-md border border-white/20 shadow-xs flex items-center justify-center text-[10px] font-mono text-[#0B2447] font-bold">
                          HEXAGON
                        </div>
                        <div className="h-10 bg-[#D90429] rounded-md border border-white/20 shadow-xs flex items-center justify-center text-[10px] font-mono text-white font-bold">
                          KANSTEIN
                        </div>
                        <div className="h-10 bg-slate-300/90 rounded-md border border-white/20 shadow-xs flex items-center justify-center text-[10px] font-mono text-slate-900 font-bold">
                          UBIN
                        </div>
                        <div className="h-10 bg-slate-400/90 rounded-md border border-white/20 shadow-xs flex items-center justify-center text-[10px] font-mono text-slate-900 font-bold">
                          USKUP
                        </div>
                      </div>

                      {/* Bottom Status Ribbon */}
                      <div className="flex items-center justify-between text-xs text-slate-300 pt-3 border-t border-white/10">
                        <span className="font-mono">{homeDict.hero.visualBadge}</span>
                        <span className="text-[#FFC300] font-bold">Est. 2015</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Highlight Card */}
                  <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-4 border border-gray-100 items-center space-x-3 max-w-[240px]">
                    <div className="w-10 h-10 rounded-lg bg-[#FFC300]/20 text-[#0B2447] flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0B2447] font-heading">
                        {homeDict.hero.plantBadge}
                      </div>
                      <div className="text-[11px] text-slate-500 font-sans">
                        {homeDict.hero.visualBadge}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: TRUST & CAPABILITY STATS
           ========================================================================= */}
        <section
          id="trust-stats-section"
          aria-labelledby="stats-heading"
          className="py-12 sm:py-16 bg-white border-b border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="stats-heading" className="sr-only">
              {currentLang === "en"
                ? "Company Capability Overview"
                : "Ringkasan Kapabilitas Perusahaan"}
            </h2>

            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Stat 1: Since 2015 */}
                <div className="bg-slate-50 border border-gray-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#0B2447]/30 hover:shadow-md transition-all">
                  <div>
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#0B2447]/5 text-[#0B2447] mb-4">
                      <Sparkles className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black font-heading text-[#0B2447] mb-2 tracking-tight">
                      {homeDict.trustStats.sinceValue}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B2447] mb-2">
                      {homeDict.trustStats.sinceTitle}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.trustStats.sinceDesc}
                    </p>
                  </div>
                </div>

                {/* Stat 2: Facility Size 9.080 m2 */}
                <div className="bg-slate-50 border border-gray-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#D90429]/30 hover:shadow-md transition-all">
                  <div>
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#D90429]/10 text-[#D90429] mb-4">
                      <Factory className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black font-heading text-[#D90429] mb-2 tracking-tight">
                      {homeDict.trustStats.facilityValue}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B2447] mb-2">
                      {homeDict.trustStats.facilityTitle}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.trustStats.facilityDesc}
                    </p>
                  </div>
                </div>

                {/* Stat 3: Quality Options K-250, K-300, K-400 */}
                <div className="bg-slate-50 border border-gray-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#FFC300]/50 hover:shadow-md transition-all">
                  <div>
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#FFC300]/20 text-[#0B2447] mb-4">
                      <Award className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black font-heading text-[#0B2447] mb-2 tracking-tight">
                      {homeDict.trustStats.qualityValue}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B2447] mb-2">
                      {homeDict.trustStats.qualityTitle}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.trustStats.qualityDesc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: FEATURED PRODUCTS PREVIEW (5 Product Cards Balanced Grid)
           ========================================================================= */}
        <section
          id="featured-products-section"
          aria-labelledby="featured-heading"
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D90429] mb-2 block">
                  {homeDict.featuredProducts.eyebrow}
                </span>
                <h2
                  id="featured-heading"
                  className="text-3xl md:text-4xl font-bold font-heading text-[#0B2447]"
                >
                  {homeDict.featuredProducts.title}
                </h2>
                <div className="w-16 h-1 bg-[#D90429] mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-600 font-sans">
                  {homeDict.featuredProducts.subtitle}
                </p>
              </div>

              {/* Balanced 5 Product Grid: 3 cards top row, 2 cards bottom row centered */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
                {featuredKeys.map((key, index) => {
                  const product = dict.products.items[key];
                  const colSpanClass =
                    index < 3 ? "lg:col-span-2" : "lg:col-span-3";

                  return (
                    <div
                      key={key}
                      className={`${colSpanClass} bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full`}
                    >
                      <div>
                        {/* Visual Image */}
                        <div className="relative h-48 sm:h-52 w-full bg-slate-100">
                          <PlaceholderImage
                            text={product.name}
                            className="w-full h-full"
                          />
                          {/* Mutu Badge from verified company profile */}
                          <div className="absolute top-3 right-3 bg-[#0B2447]/90 text-[#FFC300] px-2.5 py-1 rounded-full text-xs font-mono font-bold shadow-sm backdrop-blur-xs">
                            {product.badge}
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6">
                          <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0B2447] mb-2">
                            {product.name}
                          </h3>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 font-sans mb-4">
                            <li>{product.size}</li>
                            <li>{product.height}</li>
                            <li>{product.coverage}</li>
                          </ul>
                          <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 font-sans">
                            {product.application}
                          </p>
                        </div>
                      </div>

                      {/* Card Action Link */}
                      <div className="px-6 pb-6 pt-0 mt-auto">
                        <Link
                          href={`/${currentLang}/products`}
                          className="w-full inline-flex items-center justify-center bg-[#0B2447]/5 hover:bg-[#0B2447] text-[#0B2447] hover:text-white py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
                        >
                          {homeDict.featuredProducts.viewSpecs}
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Catalog CTA */}
              <div className="mt-10 sm:mt-12 text-center">
                <Link
                  id="view-all-products-btn"
                  href={`/${currentLang}/products`}
                  className="inline-flex items-center justify-center bg-[#0B2447] hover:bg-[#D90429] text-white px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
                >
                  {homeDict.featuredProducts.viewAll}
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: INSTALLATION SERVICES (Supply & Install Package)
           ========================================================================= */}
        <section
          id="installation-services-section"
          aria-labelledby="installation-heading"
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D90429] mb-2 block">
                  {homeDict.installation.eyebrow}
                </span>
                <h2
                  id="installation-heading"
                  className="text-3xl md:text-4xl font-bold font-heading text-[#0B2447]"
                >
                  {homeDict.installation.title}
                </h2>
                <div className="w-16 h-1 bg-[#D90429] mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-600 font-sans">
                  {homeDict.installation.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
                {/* Point 1: Integrated Package */}
                <div className="bg-slate-50 border border-gray-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#0B2447]/30 hover:shadow-md transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0B2447] text-[#FFC300] flex items-center justify-center mb-5 shadow-xs">
                      <Layers className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                      {homeDict.installation.point1Title}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.installation.point1Desc}
                    </p>
                  </div>
                </div>

                {/* Point 2: From Raw Land to Neat Completion */}
                <div className="bg-slate-50 border border-gray-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#0B2447]/30 hover:shadow-md transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#D90429] text-white flex items-center justify-center mb-5 shadow-xs">
                      <ShieldCheck className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                      {homeDict.installation.point2Title}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.installation.point2Desc}
                    </p>
                  </div>
                </div>

                {/* Point 3: Jabodetabek & Regional Coverage */}
                <div className="bg-slate-50 border border-gray-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#0B2447]/30 hover:shadow-md transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0B2447] text-white flex items-center justify-center mb-5 shadow-xs">
                      <Truck className="w-6 h-6 text-[#FFC300]" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                      {homeDict.installation.point3Title}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.installation.point3Desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Workflow Banner (Neutral 4-step execution workflow) */}
            <ScrollReveal className="bg-gradient-to-r from-[#0B2447] to-slate-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="max-w-3xl mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#FFC300] mb-2">
                    {homeDict.installation.workflowTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 font-sans">
                    {homeDict.installation.workflowSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {/* Step 1 */}
                  <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-[#FFC300] font-bold block mb-1">01</span>
                      <h4 className="text-sm font-bold font-heading text-white mb-1.5">
                        {homeDict.installation.step1Title}
                      </h4>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        {homeDict.installation.step1Desc}
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-[#FFC300] font-bold block mb-1">02</span>
                      <h4 className="text-sm font-bold font-heading text-white mb-1.5">
                        {homeDict.installation.step2Title}
                      </h4>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        {homeDict.installation.step2Desc}
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-[#FFC300] font-bold block mb-1">03</span>
                      <h4 className="text-sm font-bold font-heading text-white mb-1.5">
                        {homeDict.installation.step3Title}
                      </h4>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        {homeDict.installation.step3Desc}
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-[#FFC300] font-bold block mb-1">04</span>
                      <h4 className="text-sm font-bold font-heading text-white mb-1.5">
                        {homeDict.installation.step4Title}
                      </h4>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        {homeDict.installation.step4Desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs sm:text-sm text-slate-300 font-sans text-center sm:text-left">
                    {dict.products.availability}
                  </span>
                  <a
                    id="installation-consult-btn"
                    href={dict.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#D90429] hover:bg-[#b50322] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
                  >
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    {homeDict.installation.cta}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: HOW TO ORDER (4 Structured Steps)
           ========================================================================= */}
        <section
          id="ordering-process-section"
          aria-labelledby="ordering-heading"
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 border-t border-gray-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D90429] mb-2 block">
                  {homeDict.ordering.eyebrow}
                </span>
                <h2
                  id="ordering-heading"
                  className="text-3xl md:text-4xl font-bold font-heading text-[#0B2447]"
                >
                  {homeDict.ordering.title}
                </h2>
                <div className="w-16 h-1 bg-[#D90429] mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-600 font-sans">
                  {homeDict.ordering.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Step 1 */}
                <div className="bg-white border border-gray-200/80 rounded-2xl p-6 h-full flex flex-col hover:border-[#0B2447]/30 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#0B2447] text-[#FFC300] font-mono text-sm font-bold flex items-center justify-center mb-5 shadow-xs">
                    {homeDict.ordering.step1Number}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                    {homeDict.ordering.step1Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.ordering.step1Desc}
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white border border-gray-200/80 rounded-2xl p-6 h-full flex flex-col hover:border-[#0B2447]/30 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#0B2447] text-white font-mono text-sm font-bold flex items-center justify-center mb-5 shadow-xs">
                    {homeDict.ordering.step2Number}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                    {homeDict.ordering.step2Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.ordering.step2Desc}
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white border border-gray-200/80 rounded-2xl p-6 h-full flex flex-col hover:border-[#0B2447]/30 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#0B2447] text-white font-mono text-sm font-bold flex items-center justify-center mb-5 shadow-xs">
                    {homeDict.ordering.step3Number}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                    {homeDict.ordering.step3Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.ordering.step3Desc}
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-white border border-gray-200/80 rounded-2xl p-6 h-full flex flex-col hover:border-[#0B2447]/30 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#D90429] text-white font-mono text-sm font-bold flex items-center justify-center mb-5 shadow-xs">
                    {homeDict.ordering.step4Number}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                    {homeDict.ordering.step4Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.ordering.step4Desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: GALLERY PREVIEW (3 Documentation Cards with bilingual captions)
           ========================================================================= */}
        <section
          id="gallery-preview-section"
          aria-labelledby="gallery-heading"
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D90429] mb-2 block">
                  {homeDict.gallery.eyebrow}
                </span>
                <h2
                  id="gallery-heading"
                  className="text-3xl md:text-4xl font-bold font-heading text-[#0B2447]"
                >
                  {homeDict.gallery.title}
                </h2>
                <div className="w-16 h-1 bg-[#D90429] mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-600 font-sans">
                  {homeDict.gallery.subtitle}
                </p>
              </div>

              {/* 3 Documentation Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1: Produk */}
                <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <div className="w-full h-48 bg-[#0B2447] p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between text-white/80">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">
                        {homeDict.gallery.doc1Label}
                      </span>
                      <span className="px-2 py-0.5 bg-white/10 rounded text-[10px] text-white">
                        {homeDict.gallery.doc1Badge}
                      </span>
                    </div>
                    {/* Visual pattern representation */}
                    <div className="grid grid-cols-4 gap-1.5 opacity-90 my-2">
                      <div className="h-7 bg-slate-400/80 rounded-xs border border-white/20" />
                      <div className="h-7 bg-slate-300/80 rounded-xs border border-white/20" />
                      <div className="h-7 bg-slate-400/80 rounded-xs border border-white/20" />
                      <div className="h-7 bg-[#FFC300]/80 rounded-xs border border-white/20" />
                      <div className="h-7 bg-slate-300/80 rounded-xs border border-white/20" />
                      <div className="h-7 bg-slate-400/80 rounded-xs border border-white/20" />
                      <div className="h-7 bg-[#D90429]/80 rounded-xs border border-white/20" />
                      <div className="h-7 bg-slate-400/80 rounded-xs border border-white/20" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-300">
                      {homeDict.gallery.doc1Footer}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-1.5">
                      {homeDict.gallery.caption1}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.gallery.caption1Desc}
                    </p>
                  </div>
                </div>

                {/* Card 2: Pemasangan */}
                <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <div className="w-full h-48 bg-slate-800 p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between text-white/80">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">
                        {homeDict.gallery.doc2Label}
                      </span>
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded text-[10px]">
                        {homeDict.gallery.doc2Badge}
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 my-3">
                      <div className="px-3 py-2 bg-slate-900/80 rounded-lg border border-white/15 text-center">
                        <span className="text-[10px] block text-slate-400 font-mono">01</span>
                        <span className="text-xs font-bold text-white">Area</span>
                      </div>
                      <span className="text-slate-500 font-bold">→</span>
                      <div className="px-3 py-2 bg-slate-900/80 rounded-lg border border-white/15 text-center">
                        <span className="text-[10px] block text-slate-400 font-mono">02</span>
                        <span className="text-xs font-bold text-white">Pasang</span>
                      </div>
                      <span className="text-slate-500 font-bold">→</span>
                      <div className="px-3 py-2 bg-[#D90429]/40 rounded-lg border border-[#D90429]/50 text-center">
                        <span className="text-[10px] block text-red-200 font-mono">03</span>
                        <span className="text-xs font-bold text-white">Selesai</span>
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-slate-300">
                      {homeDict.gallery.doc2Footer}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-1.5">
                      {homeDict.gallery.caption2}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.gallery.caption2Desc}
                    </p>
                  </div>
                </div>

                {/* Card 3: Aplikasi Lapangan */}
                <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <div className="w-full h-48 bg-[#0B2447] p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between text-white/80">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">
                        {homeDict.gallery.doc3Label}
                      </span>
                      <span className="px-2 py-0.5 bg-[#FFC300]/20 text-[#FFC300] rounded text-[10px]">
                        {homeDict.gallery.doc3Badge}
                      </span>
                    </div>
                    <div className="h-14 bg-slate-900/80 rounded-lg border border-white/15 p-2 flex items-center justify-around my-2">
                      <div className="text-center">
                        <span className="text-[10px] text-slate-400 block">Industri</span>
                        <span className="text-xs font-bold text-white">K-400 (8/10 cm)</span>
                      </div>
                      <div className="h-6 w-px bg-white/20" />
                      <div className="text-center">
                        <span className="text-[10px] text-slate-400 block">Hunian</span>
                        <span className="text-xs font-bold text-[#FFC300]">K-250 / K-300</span>
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-slate-300">
                      {homeDict.gallery.doc3Footer}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-1.5">
                      {homeDict.gallery.caption3}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.gallery.caption3Desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Gallery Page CTA */}
              <div className="mt-10 sm:mt-12 text-center">
                <Link
                  id="view-gallery-btn"
                  href={`/${currentLang}/projects`}
                  className="inline-flex items-center justify-center bg-[#0B2447] hover:bg-[#D90429] text-white px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
                >
                  {homeDict.gallery.cta}
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: BENEFITS & PAYMENT SYSTEM
           ========================================================================= */}
        <section
          id="benefits-payment-section"
          aria-labelledby="benefits-heading"
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 border-t border-gray-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D90429] mb-2 block">
                  {homeDict.benefits.eyebrow}
                </span>
                <h2
                  id="benefits-heading"
                  className="text-3xl md:text-4xl font-bold font-heading text-[#0B2447]"
                >
                  {homeDict.benefits.title}
                </h2>
                <div className="w-16 h-1 bg-[#D90429] mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-600 font-sans">
                  {homeDict.benefits.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Feature 1 */}
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 flex flex-col h-full hover:border-[#FFC300] hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2447]/5 text-[#D90429] flex items-center justify-center mb-5">
                    <ShieldCheck className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                    {homeDict.benefits.item1Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.benefits.item1Desc}
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 flex flex-col h-full hover:border-[#FFC300] hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2447]/5 text-[#0B2447] flex items-center justify-center mb-5">
                    <Factory className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                    {homeDict.benefits.item2Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.benefits.item2Desc}
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 flex flex-col h-full hover:border-[#FFC300] hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2447]/5 text-emerald-600 flex items-center justify-center mb-5">
                    <Truck className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                    {homeDict.benefits.item3Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.benefits.item3Desc}
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 flex flex-col h-full hover:border-[#FFC300] hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2447]/5 text-[#0B2447] flex items-center justify-center mb-5">
                    <CreditCard className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                    {homeDict.benefits.item4Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.benefits.item4Desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: FINAL CTA
           ========================================================================= */}
        <section
          id="final-cta-section"
          aria-labelledby="final-cta-heading"
          className="py-12 sm:py-16 md:py-20 bg-[#0B2447] text-white relative overflow-hidden"
        >
          {/* Subtle accent circles */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-[#FFC300]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-[#D90429]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
            <ScrollReveal>
              <h2
                id="final-cta-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight mb-6 text-white"
              >
                {homeDict.finalCta.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-sans mb-10 max-w-2xl mx-auto leading-relaxed">
                {homeDict.finalCta.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  id="final-whatsapp-btn"
                  href={dict.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#D90429] hover:bg-[#b50322] text-white px-8 py-4 rounded-full font-bold text-base shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
                >
                  <Phone className="w-5 h-5 mr-2.5" aria-hidden="true" />
                  {homeDict.finalCta.ctaPrimary}
                </a>

                <Link
                  id="final-products-btn"
                  href={`/${currentLang}/products`}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-base backdrop-blur-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {homeDict.finalCta.ctaSecondary}
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
