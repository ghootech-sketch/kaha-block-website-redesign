import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import {
  ShieldCheck,
  Factory,
  Truck,
  Calendar,
  Phone,
  ArrowRight,
  Layers,
  Sparkles,
  CreditCard,
  ChevronRight,
  HardHat,
  Compass,
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

  const productList = [
    {
      key: "truepave",
      ...dict.products.items.truepave,
      badge: "K-250 • K-300 • K-400",
      shape: "rect",
    },
    {
      key: "half",
      ...dict.products.items.half,
      badge: "K-250 • K-300",
      shape: "square",
    },
    {
      key: "hexagonal",
      ...dict.products.items.hexagonal,
      badge: "K-250 • K-300",
      shape: "hexagon",
    },
    {
      key: "topiUskup",
      ...dict.products.items.topiUskup,
      badge: "K-250 • K-300",
      shape: "bishop",
    },
    {
      key: "kanstein",
      ...dict.products.items.kanstein,
      badge: "Heavy Duty",
      shape: "curb",
    },
  ];

  return (
    <>
      <JsonLd page="home" lang={currentLang} />
      <div className="flex flex-col w-full font-sans bg-white text-[#0B2447]">
        {/* =========================================================================
            SECTION 1: HERO SECTION (Simplified, Strong Hierarchy, Single H1, Abstract CSS Visual)
           ========================================================================= */}
        <section
          id="hero-section"
          className="relative w-full bg-[#0B2447] text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
        >
          {/* Subtle geometric grid background pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
              {/* Left Column: Hero Text Content */}
              <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
                {/* Eyebrow */}
                <div className="inline-flex items-center space-x-2 self-start bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-[#FFC300]" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200">
                    {homeDict.hero.eyebrow}
                  </span>
                </div>

                {/* Single H1 */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black font-heading leading-tight tracking-tight text-white">
                  {homeDict.hero.h1}
                </h1>

                {/* Description (max 2-3 lines) */}
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans max-w-2xl">
                  {homeDict.hero.description}
                </p>

                {/* CTAs & Trust Note */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    id="hero-whatsapp-btn"
                    href={dict.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#D90429] hover:bg-[#b50322] text-white px-7 py-3.5 rounded-full font-bold text-base shadow-lg hover:shadow-red-900/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
                  >
                    <Phone className="w-4 h-4 mr-2.5" aria-hidden="true" />
                    {homeDict.hero.ctaPrimary}
                  </a>

                  <Link
                    id="hero-products-btn"
                    href={`/${currentLang}/products`}
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-full font-bold text-base backdrop-blur-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {homeDict.hero.ctaSecondary}
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>
                </div>

                {/* Trust Note */}
                <div className="pt-2 flex items-center space-x-2 text-xs sm:text-sm text-slate-300 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#FFC300]" aria-hidden="true" />
                  <span>{homeDict.hero.trustNote}</span>
                </div>
              </div>

              {/* Right Column: Industrial CSS Abstract Interlocking Paving Visual */}
              <div className="lg:col-span-5 relative w-full flex items-center justify-center">
                <div
                  id="hero-abstract-visual"
                  className="relative w-full max-w-md bg-slate-900/90 border border-white/15 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-md overflow-hidden"
                >
                  {/* Decorative ambient gradients */}
                  <div
                    className="absolute -top-16 -right-16 w-44 h-44 bg-[#FFC300]/15 rounded-full blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -bottom-16 -left-16 w-44 h-44 bg-[#D90429]/20 rounded-full blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Header Bar of the Graphic Display */}
                  <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#D90429]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFC300]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-slate-300 font-semibold">
                      KAHA BLOCK • SPECS
                    </span>
                  </div>

                  {/* Interlocking Paving Geometric Layout (CSS Illustration) */}
                  <div className="relative z-10 py-6">
                    <div className="grid grid-cols-4 gap-2.5 p-3.5 bg-slate-950/60 rounded-xl border border-white/10">
                      {/* Interlocking Brick Pavers Representation */}
                      <div className="col-span-2 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-md border-t border-l border-white/20 border-b-2 border-r-2 border-slate-950 flex items-center justify-center shadow-xs">
                        <span className="text-[10px] font-mono text-slate-300 font-semibold">Truepave 21×10.5</span>
                      </div>
                      <div className="col-span-2 h-14 bg-gradient-to-br from-[#0B2447] to-slate-800 rounded-md border-t border-l border-[#FFC300]/30 border-b-2 border-r-2 border-slate-950 flex items-center justify-center shadow-xs">
                        <span className="text-[10px] font-mono text-[#FFC300] font-semibold">Mutu K-400</span>
                      </div>
                      <div className="col-span-1 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-md border-t border-l border-white/20 border-b-2 border-r-2 border-slate-950 flex items-center justify-center shadow-xs">
                        <span className="text-[10px] font-mono text-slate-300 font-semibold">Half</span>
                      </div>
                      <div className="col-span-2 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-md border-t border-l border-white/20 border-b-2 border-r-2 border-slate-950 flex items-center justify-center shadow-xs">
                        <span className="text-[10px] font-mono text-slate-300 font-semibold">K-300 Grade</span>
                      </div>
                      <div className="col-span-1 h-14 bg-gradient-to-br from-[#D90429]/40 to-slate-800 rounded-md border-t border-l border-[#D90429]/40 border-b-2 border-r-2 border-slate-950 flex items-center justify-center shadow-xs">
                        <span className="text-[10px] font-mono text-red-200 font-semibold">K-250</span>
                      </div>
                    </div>
                  </div>

                  {/* Badges Footer */}
                  <div className="relative z-10 flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/10 text-[11px] font-medium text-slate-200">
                      <Factory className="w-3 h-3 mr-1.5 text-[#FFC300]" aria-hidden="true" />
                      {homeDict.hero.plantBadge}
                    </div>
                    <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/10 text-[11px] font-medium text-slate-200">
                      <Sparkles className="w-3 h-3 mr-1.5 text-emerald-400" aria-hidden="true" />
                      {homeDict.hero.visualBadge}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: COMPANY TRUST FACTS (3 Stat / Fact Cards)
           ========================================================================= */}
        <section
          id="trust-facts-section"
          aria-label={homeDict.trustStats.qualityTitle}
          className="py-10 sm:py-12 md:py-16 bg-slate-50 border-b border-gray-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Stat Card 1 */}
              <ScrollReveal delay={0.05} className="h-full">
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2447]/5 text-[#D90429] flex items-center justify-center mb-5">
                    <Calendar className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-3xl font-black font-heading text-[#0B2447] tracking-tight mb-1">
                    {homeDict.trustStats.sinceValue}
                  </span>
                  <h2 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                    {homeDict.trustStats.sinceTitle}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans mt-auto">
                    {homeDict.trustStats.sinceDesc}
                  </p>
                </div>
              </ScrollReveal>

              {/* Stat Card 2 */}
              <ScrollReveal delay={0.1} className="h-full">
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2447]/5 text-[#0B2447] flex items-center justify-center mb-5">
                    <Factory className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-3xl font-black font-heading text-[#0B2447] tracking-tight mb-1">
                    {homeDict.trustStats.facilityValue}
                  </span>
                  <h2 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                    {homeDict.trustStats.facilityTitle}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans mt-auto">
                    {homeDict.trustStats.facilityDesc}
                  </p>
                </div>
              </ScrollReveal>

              {/* Stat Card 3 */}
              <ScrollReveal delay={0.15} className="h-full">
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2447]/5 text-emerald-600 flex items-center justify-center mb-5">
                    <ShieldCheck className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-2xl font-black font-heading text-[#0B2447] tracking-tight mb-1">
                    {homeDict.trustStats.qualityValue}
                  </span>
                  <h2 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                    {homeDict.trustStats.qualityTitle}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans mt-auto">
                    {homeDict.trustStats.qualityDesc}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: PRODUCT PREVIEW (5 Featured Products, Balanced Layout, Links to Products)
           ========================================================================= */}
        <section
          id="product-preview-section"
          aria-labelledby="product-preview-heading"
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D90429] mb-2 block">
                {currentLang === "en" ? "Product Catalog" : "Katalog Produk"}
              </span>
              <h2
                id="product-preview-heading"
                className="text-3xl md:text-4xl font-bold font-heading text-[#0B2447]"
              >
                {homeDict.featuredProducts.title}
              </h2>
              <div className="w-16 h-1 bg-[#D90429] mx-auto mt-4 mb-4 rounded-full" />
              <p className="text-base sm:text-lg text-slate-600 font-sans">
                {homeDict.featuredProducts.subtitle}
              </p>
            </ScrollReveal>

            {/* 5 Product Cards with Balanced Grid (3 top, 2 bottom centered on lg screens) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
              {productList.map((item, index) => {
                // Determine responsive column span: First 3 take 2 cols each on lg (6 total), last 2 take 3 cols each or centered layout
                const lgColSpan =
                  index < 3 ? "lg:col-span-2" : "lg:col-span-3";

                return (
                  <ScrollReveal
                    key={item.key}
                    delay={index * 0.08}
                    className={`${lgColSpan} h-full`}
                  >
                    <div className="bg-slate-50 border border-gray-200/80 rounded-2xl p-6 sm:p-7 hover:border-[#0B2447]/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                      {/* Geometric Shape Badge Visual */}
                      <div className="w-full h-32 bg-white rounded-xl border border-gray-200/60 mb-5 flex items-center justify-center p-4 relative overflow-hidden group-hover:bg-slate-100/60 transition-colors">
                        {item.shape === "rect" && (
                          <div className="w-28 h-14 bg-slate-300 rounded-xs border-2 border-slate-500 shadow-xs flex items-center justify-center">
                            <span className="text-[10px] font-mono font-bold text-slate-700">21 × 10.5</span>
                          </div>
                        )}
                        {item.shape === "square" && (
                          <div className="w-16 h-16 bg-slate-300 rounded-xs border-2 border-slate-500 shadow-xs flex items-center justify-center">
                            <span className="text-[10px] font-mono font-bold text-slate-700">10.5 × 10.5</span>
                          </div>
                        )}
                        {item.shape === "hexagon" && (
                          <div className="w-20 h-20 bg-slate-300 rounded-lg border-2 border-slate-500 shadow-xs flex items-center justify-center [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                            <span className="text-[10px] font-mono font-bold text-slate-700">HEX</span>
                          </div>
                        )}
                        {item.shape === "bishop" && (
                          <div className="w-24 h-16 bg-slate-300 rounded-xs border-2 border-slate-500 shadow-xs flex items-center justify-center [clip-path:polygon(0%_100%,30%_0%,100%_0%,100%_100%)]">
                            <span className="text-[10px] font-mono font-bold text-slate-700">30 × 21</span>
                          </div>
                        )}
                        {item.shape === "curb" && (
                          <div className="w-28 h-16 bg-slate-300 rounded-t-xl rounded-b-xs border-2 border-slate-500 shadow-xs flex items-center justify-center">
                            <span className="text-[10px] font-mono font-bold text-slate-700">10 × 20 × 40</span>
                          </div>
                        )}

                        <span className="absolute top-2 right-2 px-2 py-0.5 bg-[#0B2447]/10 text-[#0B2447] text-[10px] font-bold rounded-md uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>

                      {/* Product Info */}
                      <h3 className="text-xl font-bold font-heading text-[#0B2447] mb-2 group-hover:text-[#D90429] transition-colors">
                        {item.name}
                      </h3>

                      <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 font-sans mb-4 flex-grow">
                        <p className="font-medium text-slate-700">{item.size}</p>
                        <p>{item.height}</p>
                        <p className="text-slate-500">{item.coverage}</p>
                      </div>

                      {/* Link to Products Page */}
                      <div className="pt-4 border-t border-gray-200/80 mt-auto">
                        <Link
                          href={`/${currentLang}/products`}
                          className="inline-flex items-center text-sm font-bold text-[#0B2447] group-hover:text-[#D90429] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded"
                        >
                          {currentLang === "en" ? "View Specifications" : "Lihat Spesifikasi"}
                          <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* View All Products CTA */}
            <div className="mt-12 text-center">
              <Link
                id="view-all-products-btn"
                href={`/${currentLang}/products`}
                className="inline-flex items-center justify-center bg-[#0B2447] hover:bg-[#D90429] text-white px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
              >
                {homeDict.featuredProducts.viewAll}
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: INSTALLATION SERVICE SECTION (2 Columns, Raw Land to Finish, Jabodetabek & Luar Kota)
           ========================================================================= */}
        <section
          id="installation-service-section"
          aria-labelledby="installation-heading"
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden"
        >
          {/* Subtle architectural grid */}
          <div
            className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              {/* Left Column: Scope Details & CTA */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FFC300]">
                  {currentLang === "en" ? "Complete Solution" : "Solusi Terintegrasi"}
                </span>

                <h2
                  id="installation-heading"
                  className="text-3xl sm:text-4xl font-bold font-heading text-white leading-tight"
                >
                  {homeDict.installation.title}
                </h2>

                <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
                  {homeDict.installation.subtitle}
                </p>

                {/* 3 Core Installation Points */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start space-x-3.5 bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-[#D90429]/20 text-[#D90429] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        {homeDict.installation.point1Title}
                      </h3>
                      <p className="text-sm text-slate-300 font-sans leading-relaxed">
                        {homeDict.installation.point1Desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-[#FFC300]/20 text-[#FFC300] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <HardHat className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        {homeDict.installation.point2Title}
                      </h3>
                      <p className="text-sm text-slate-300 font-sans leading-relaxed">
                        {homeDict.installation.point2Desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Compass className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        {homeDict.installation.point3Title}
                      </h3>
                      <p className="text-sm text-slate-300 font-sans leading-relaxed">
                        {homeDict.installation.point3Desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-2">
                  <a
                    id="installation-whatsapp-cta"
                    href={dict.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#D90429] hover:bg-[#b50322] text-white px-7 py-3.5 rounded-full font-bold text-base shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
                  >
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    {homeDict.installation.cta}
                  </a>
                </div>
              </div>

              {/* Right Column: Workflow Stages Overview */}
              <div className="lg:col-span-5">
                <div className="bg-slate-800/80 border border-white/15 rounded-2xl p-6 sm:p-7 shadow-xl backdrop-blur-xs">
                  <div className="flex items-center space-x-3 pb-4 border-b border-white/10 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#FFC300]/15 text-[#FFC300] flex items-center justify-center">
                      <HardHat className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {currentLang === "en" ? "Standard Installation Workflow" : "Alur Pengerjaan Lapangan"}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {currentLang === "en" ? "Rigid quality control at every phase" : "Standar mutu di setiap tahapan"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 rounded-full bg-white/10 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {currentLang === "en" ? "Site Preparation & Leveling" : "Penyiapan & Perataan Lahan"}
                        </h4>
                        <p className="text-xs text-slate-300 mt-0.5">
                          {currentLang === "en" ? "Clearing raw ground, grading, and compacting soil foundation." : "Pembersihan lahan mentah, cut & fill, dan pemadatan tanah dasar."}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 rounded-full bg-white/10 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {currentLang === "en" ? "Stone Dust Base & Paving" : "Penggelaran Abu Batu & Pemasangan"}
                        </h4>
                        <p className="text-xs text-slate-300 mt-0.5">
                          {currentLang === "en" ? "Spreading 3-5 cm stone dust bedding and laying precision interlocks." : "Aplikasi bedding abu batu 3-5 cm dan penyusunan paving presisi."}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 rounded-full bg-white/10 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {currentLang === "en" ? "Joint Infill & Final Compaction" : "Penguncian & Pemadatan Kompak"}
                        </h4>
                        <p className="text-xs text-slate-300 mt-0.5">
                          {currentLang === "en" ? "Filling joint gaps with fine sand and final baby roller / stamper pass." : "Pengisian celah pasir pengunci dan pemadatan akhir stamper."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: ORDERING PROCESS (4 Clear Steps)
           ========================================================================= */}
        <section
          id="ordering-process-section"
          aria-labelledby="ordering-heading"
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white border-b border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D90429] mb-2 block">
                {currentLang === "en" ? "Simple Steps" : "Tahapan Pemesanan"}
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
            </ScrollReveal>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <ScrollReveal delay={0.05} className="h-full">
                <div className="bg-slate-50 border border-gray-200/80 rounded-2xl p-6 h-full flex flex-col hover:border-[#0B2447]/30 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#0B2447] text-white font-mono text-sm font-bold flex items-center justify-center mb-5 shadow-xs">
                    {homeDict.ordering.step1Number}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-2">
                    {homeDict.ordering.step1Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.ordering.step1Desc}
                  </p>
                </div>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal delay={0.1} className="h-full">
                <div className="bg-slate-50 border border-gray-200/80 rounded-2xl p-6 h-full flex flex-col hover:border-[#0B2447]/30 hover:shadow-md transition-all duration-300">
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
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal delay={0.15} className="h-full">
                <div className="bg-slate-50 border border-gray-200/80 rounded-2xl p-6 h-full flex flex-col hover:border-[#0B2447]/30 hover:shadow-md transition-all duration-300">
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
              </ScrollReveal>

              {/* Step 4 */}
              <ScrollReveal delay={0.2} className="h-full">
                <div className="bg-slate-50 border border-gray-200/80 rounded-2xl p-6 h-full flex flex-col hover:border-[#0B2447]/30 hover:shadow-md transition-all duration-300">
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
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: GALLERY PREVIEW (3 Visual Cards with Visible Captions on Mobile & Desktop)
           ========================================================================= */}
        <section
          id="gallery-preview-section"
          aria-labelledby="gallery-heading"
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D90429] mb-2 block">
                {currentLang === "en" ? "Field Evidence" : "Dokumentasi Nyata"}
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
            </ScrollReveal>

            {/* 3 Visual Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: Produk */}
              <ScrollReveal delay={0.05} className="h-full">
                <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  {/* Geometric Graphic Showcase 1 */}
                  <div className="w-full h-48 bg-[#0B2447] p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between text-white/80">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">
                        DOC-01 • PRODUK
                      </span>
                      <span className="px-2 py-0.5 bg-white/10 rounded text-[10px] text-white">
                        Mutu K-400
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
                      Cisauk Plant Hydraulic Output
                    </div>
                  </div>
                  {/* Captions clearly visible on mobile and desktop */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-1.5">
                      {homeDict.gallery.caption1}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.gallery.caption1Desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2: Pemasangan */}
              <ScrollReveal delay={0.1} className="h-full">
                <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  {/* Geometric Graphic Showcase 2 */}
                  <div className="w-full h-48 bg-slate-800 p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between text-white/80">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">
                        DOC-02 • INSTALASI
                      </span>
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded text-[10px]">
                        Lahan Nol
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 my-3">
                      <div className="px-3 py-2 bg-slate-900/80 rounded-lg border border-white/15 text-center">
                        <span className="text-[10px] block text-slate-400 font-mono">Tahap 1</span>
                        <span className="text-xs font-bold text-white">Grading</span>
                      </div>
                      <span className="text-slate-500 font-bold">→</span>
                      <div className="px-3 py-2 bg-slate-900/80 rounded-lg border border-white/15 text-center">
                        <span className="text-[10px] block text-slate-400 font-mono">Tahap 2</span>
                        <span className="text-xs font-bold text-white">Abu Batu</span>
                      </div>
                      <span className="text-slate-500 font-bold">→</span>
                      <div className="px-3 py-2 bg-[#D90429]/40 rounded-lg border border-[#D90429]/50 text-center">
                        <span className="text-[10px] block text-red-200 font-mono">Tahap 3</span>
                        <span className="text-xs font-bold text-white">Stamper</span>
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-slate-300">
                      Mechanical Compaction Standards
                    </div>
                  </div>
                  {/* Captions */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-1.5">
                      {homeDict.gallery.caption2}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.gallery.caption2Desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3: Aplikasi Lapangan */}
              <ScrollReveal delay={0.15} className="h-full">
                <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  {/* Geometric Graphic Showcase 3 */}
                  <div className="w-full h-48 bg-[#0B2447] p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between text-white/80">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">
                        DOC-03 • APLIKASI
                      </span>
                      <span className="px-2 py-0.5 bg-[#FFC300]/20 text-[#FFC300] rounded text-[10px]">
                        Heavy Traffic
                      </span>
                    </div>
                    <div className="h-14 bg-slate-900/80 rounded-lg border border-white/15 p-2 flex items-center justify-around my-2">
                      <div className="text-center">
                        <span className="text-[10px] text-slate-400 block">Jalan Industri</span>
                        <span className="text-xs font-bold text-white">K-400 (8 cm)</span>
                      </div>
                      <div className="h-6 w-px bg-white/20" />
                      <div className="text-center">
                        <span className="text-[10px] text-slate-400 block">Perumahan</span>
                        <span className="text-xs font-bold text-[#FFC300]">K-300 (6 cm)</span>
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-slate-300">
                      Jabodetabek & Regional Coverage
                    </div>
                  </div>
                  {/* Captions */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold font-heading text-[#0B2447] mb-1.5">
                      {homeDict.gallery.caption3}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.gallery.caption3Desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
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
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: BENEFITS & PAYMENT INFORMATION (Refined & Consolidated)
           ========================================================================= */}
        <section
          id="benefits-payment-section"
          aria-labelledby="benefits-heading"
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D90429] mb-2 block">
                {currentLang === "en" ? "Why Kaha Block" : "Keunggulan Kami"}
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
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Feature 1 */}
              <ScrollReveal delay={0.05} className="h-full">
                <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-gray-200/80 flex flex-col h-full hover:border-[#FFC300] hover:shadow-md transition-all">
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
              </ScrollReveal>

              {/* Feature 2 */}
              <ScrollReveal delay={0.1} className="h-full">
                <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-gray-200/80 flex flex-col h-full hover:border-[#FFC300] hover:shadow-md transition-all">
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
              </ScrollReveal>

              {/* Feature 3 */}
              <ScrollReveal delay={0.15} className="h-full">
                <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-gray-200/80 flex flex-col h-full hover:border-[#FFC300] hover:shadow-md transition-all">
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
              </ScrollReveal>

              {/* Feature 4 */}
              <ScrollReveal delay={0.2} className="h-full">
                <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-gray-200/80 flex flex-col h-full hover:border-[#FFC300] hover:shadow-md transition-all">
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
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: FINAL CTA (Buyer-Oriented, High Contrast, Direct Links)
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
