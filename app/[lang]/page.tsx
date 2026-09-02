import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
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
  Home as HomeIcon,
  Building2,
  Warehouse,
  Landmark,
  ChevronDown,
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
          className="relative isolate overflow-hidden bg-surface pt-12 sm:pt-16 md:pt-24 lg:pt-28 pb-16 sm:pb-20 md:pb-28 border-b border-stone-200/80 min-h-[620px] flex items-center"
        >
          {/* Background Image with warm light image-led treatment */}
          <Image
            src="/images/hero/kaha-block-hero-paving.webp"
            alt={
              currentLang === "id"
                ? "Hasil pemasangan paving block Kaha Block"
                : "Kaha Block paving installation result"
            }
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_center] sm:object-center opacity-20 -z-20 pointer-events-none"
          />

          {/* Warm Light Gradients & Glows */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/95 to-surface/80 -z-10" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-200/30 rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <ScrollReveal immediate>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Content Column (7 cols on desktop) */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left">
                  {/* Eyebrow badge */}
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/50 text-slate-900 font-bold w-fit mb-4 sm:mb-5">
                    <span className="w-2 h-2 rounded-full bg-primary motion-safe:animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 font-heading">
                      {homeDict.hero.eyebrow}
                    </span>
                  </div>

                  {/* H1 Heading */}
                  <h1
                    id="hero-title"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-slate-900 tracking-tight font-heading leading-[1.15] mb-5 sm:mb-6 max-w-[600px]"
                  >
                    {homeDict.hero.h1}
                  </h1>

                  {/* Clear Narrative Description */}
                  <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed mb-8 max-w-[600px]">
                    {homeDict.hero.description}
                  </p>

                  {/* Primary & Secondary Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8">
                    <a
                      id="hero-primary-cta"
                      href={dict.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base shadow-[0_12px_35px_rgba(122,28,28,0.25)] hover:shadow-[0_15px_40px_rgba(122,28,28,0.32)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
                    >
                      <Phone className="w-5 h-5 mr-2.5" aria-hidden="true" />
                      {homeDict.hero.ctaPrimary}
                    </a>

                    <Link
                      id="hero-secondary-cta"
                      href={`/${currentLang}/products`}
                      className="inline-flex items-center justify-center bg-white hover:bg-stone-100 text-slate-900 border-2 border-stone-300 hover:border-primary/40 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px]"
                    >
                      {homeDict.hero.ctaSecondary}
                      <ArrowRight className="w-4 h-4 ml-2 text-primary" aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Trust Line & Key Verification Badges */}
                  <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-700 font-sans">
                    <div className="flex items-center space-x-1.5">
                      <ShieldCheck className="w-4.5 h-4.5 text-accent" aria-hidden="true" />
                      <span className="font-semibold text-slate-900">
                        {homeDict.hero.trustNote}
                      </span>
                    </div>
                    <span className="text-stone-300 hidden sm:inline" aria-hidden="true">•</span>
                    <div className="flex items-center space-x-1.5">
                      <Factory className="w-4.5 h-4.5 text-accent" aria-hidden="true" />
                      <span className="text-slate-800">{homeDict.hero.plantBadge}</span>
                    </div>
                  </div>
                </div>

                {/* Right Visual Column: Premium Product Range Navigator (5 cols on desktop) */}
                <div className="hidden lg:flex lg:col-span-5 items-center justify-end">
                  <aside
                    aria-labelledby="hero-product-nav-heading"
                    className="w-full max-w-[390px] overflow-hidden rounded-3xl border-t-4 border-t-accent border border-stone-200/90 bg-white/95 p-6 xl:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-md"
                  >
                    <div className="h-1.5 w-14 rounded-full bg-accent mb-4" />
                    
                    <p className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1 font-heading">
                      {homeDict.hero.productNavigator.eyebrow}
                    </p>

                    <h2
                      id="hero-product-nav-heading"
                      className="text-lg font-bold text-slate-900 font-heading tracking-tight mb-2.5"
                    >
                      {homeDict.hero.productNavigator.title}
                    </h2>

                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-accent/20 border border-accent/50 text-xs font-bold text-slate-900 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                      <span>{homeDict.hero.productNavigator.highlightBadge}</span>
                    </div>

                    <ul className="grid grid-cols-2 gap-2 mb-4">
                      {homeDict.hero.productNavigator.products.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface border border-stone-200/80 text-xs font-semibold text-slate-800"
                        >
                          <span className="w-2 h-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/${currentLang}/products`}
                      className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-xs font-bold text-white transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span className="text-white">{homeDict.hero.productNavigator.cta}</span>
                      <ArrowRight className="w-4 h-4 text-accent" aria-hidden="true" />
                    </Link>
                  </aside>
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
          className="py-12 sm:py-16 bg-surface border-b border-stone-200/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="stats-heading" className="sr-only">
              {homeDict.trustStats.heading}
            </h2>

            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Stat 1: Since 2015 */}
                <div className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-secondary/30 hover:shadow-md transition-all">
                  <div>
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-secondary/5 text-secondary mb-4">
                      <Sparkles className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black font-heading text-slate-900 mb-2 tracking-tight">
                      {homeDict.trustStats.sinceValue}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 mb-2">
                      {homeDict.trustStats.sinceTitle}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.trustStats.sinceDesc}
                    </p>
                  </div>
                </div>

                {/* Stat 2: Facility Size 9.080 m2 */}
                <div className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-primary/30 hover:shadow-md transition-all">
                  <div>
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-4">
                      <Factory className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black font-heading text-primary mb-2 tracking-tight">
                      {homeDict.trustStats.facilityValue}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 mb-2">
                      {homeDict.trustStats.facilityTitle}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.trustStats.facilityDesc}
                    </p>
                  </div>
                </div>

                {/* Stat 3: Quality Options */}
                <div className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-accent/50 hover:shadow-md transition-all">
                  <div>
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/20 text-secondary mb-4">
                      <Award className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black font-heading text-slate-900 mb-2 tracking-tight">
                      {homeDict.trustStats.qualityValue}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 mb-2">
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
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 block">
                  {homeDict.featuredProducts.eyebrow}
                </span>
                <h2
                  id="featured-heading"
                  className="text-3xl md:text-4xl font-bold font-heading text-slate-900"
                >
                  {homeDict.featuredProducts.title}
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-600 font-sans">
                  {homeDict.featuredProducts.subtitle}
                </p>
              </div>

              {/* Balanced 5 Product Grid: 3 cards top row, 2 cards bottom row centered */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
                {featuredKeys.map((key, index) => {
                  const product = dict.products.items[key];
                  const colSpanClass =
                    index === 3
                      ? "lg:col-span-2 lg:col-start-2"
                      : "lg:col-span-2";

                  return (
                    <div
                      key={key}
                      className={`${colSpanClass} bg-surface rounded-2xl border border-stone-200/80 border-t-2 border-t-accent/60 overflow-hidden shadow-xs hover:shadow-lg motion-safe:hover:-translate-y-0.5 transition-[transform,box-shadow,border-color] duration-300 flex flex-col justify-between h-full hover:border-accent`}
                    >
                      <div>
                        {/* Visual Image */}
                        <div className="relative aspect-[3/2] w-full overflow-hidden bg-stone-100">
                          <Image
                            src={product.image}
                            alt={`${dict.products.imageAltPrefix} ${product.name}`}
                            fill
                            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                            className="object-cover object-center"
                          />
                          {/* Mutu Badge from verified company profile */}
                          <div className="absolute top-3 right-3 bg-accent text-slate-900 px-2.5 py-1 rounded-full text-xs font-mono font-bold shadow-sm">
                            {product.badge}
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6">
                          <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 mb-2">
                            {product.name}
                          </h3>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 font-sans mb-4">
                            {product.quickSpecs?.slice(0, 3).map((spec, i) => (
                              <li key={i}>{spec}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Card Action Link */}
                      <div className="px-6 pb-6 pt-0 mt-auto">
                        <Link
                          href={`/${currentLang}/products`}
                          className="w-full inline-flex items-center justify-center bg-primary/10 hover:bg-primary text-primary hover:text-white py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {homeDict.featuredProducts.viewAll}
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3.5: SOLUSI BERDASARKAN KEBUTUHAN AREA (4 Categories)
           ========================================================================= */}
        <section
          id="solutions-by-area-section"
          aria-labelledby="solutions-heading"
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface border-b border-stone-200/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 block font-heading">
                  {homeDict.solutionsByArea.eyebrow}
                </span>
                <h2
                  id="solutions-heading"
                  className="text-3xl md:text-4xl font-bold font-heading text-slate-900"
                >
                  {homeDict.solutionsByArea.title}
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-600 font-sans">
                  {homeDict.solutionsByArea.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
                {homeDict.solutionsByArea.items.map((item) => {
                  let AreaIcon = HomeIcon;
                  if (item.id === "commercial") AreaIcon = Building2;
                  if (item.id === "industrial") AreaIcon = Warehouse;
                  if (item.id === "public") AreaIcon = Landmark;

                  return (
                    <div
                      key={item.id}
                      className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-secondary/30 hover:shadow-md transition-[border-color,box-shadow,transform] duration-300"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-secondary/5 text-secondary flex items-center justify-center mb-5">
                          <AreaIcon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <h3 className="text-lg font-bold font-heading text-slate-900 mb-2.5">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 font-sans leading-relaxed mb-6">
                          {item.desc}
                        </p>
                      </div>

                      <div>
                        <Link
                          href={item.href}
                          className="inline-flex items-center text-xs sm:text-sm font-bold text-secondary hover:text-primary transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm py-1"
                        >
                          <span>{item.linkText}</span>
                          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white border border-stone-200/70 rounded-2xl p-5 sm:p-6 text-center max-w-3xl mx-auto">
                <p className="text-xs sm:text-sm text-slate-700 font-sans">
                  <span className="font-semibold text-slate-900">
                    {currentLang === "id" ? "Catatan:" : "Note:"}{" "}
                  </span>
                  {homeDict.solutionsByArea.consultNote}
                </p>
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
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 block">
                  {homeDict.installation.eyebrow}
                </span>
                <h2
                  id="installation-heading"
                  className="text-3xl md:text-4xl font-bold font-heading text-slate-900"
                >
                  {homeDict.installation.title}
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-600 font-sans">
                  {homeDict.installation.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
                {/* Point 1: Integrated Package */}
                <div className="bg-surface border border-stone-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-secondary/30 hover:shadow-md transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary text-accent flex items-center justify-center mb-5 shadow-xs">
                      <Layers className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                      {homeDict.installation.point1Title}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.installation.point1Desc}
                    </p>
                  </div>
                </div>

                {/* Point 2: From Raw Land to Neat Completion */}
                <div className="bg-surface border border-stone-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-primary/30 hover:shadow-md transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-5 shadow-xs">
                      <ShieldCheck className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                      {homeDict.installation.point2Title}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.installation.point2Desc}
                    </p>
                  </div>
                </div>

                {/* Point 3: Jabodetabek & Regional Coverage */}
                <div className="bg-surface border border-stone-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-secondary/30 hover:shadow-md transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center mb-5 shadow-xs">
                      <Truck className="w-6 h-6 text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                      {homeDict.installation.point3Title}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.installation.point3Desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Workflow Banner (Red primary 4-step execution workflow with Gold accents) */}
            <ScrollReveal className="bg-gradient-to-r from-primary to-primary-hover text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border-t-4 border-t-accent relative overflow-hidden">
              <div className="relative z-10">
                <div className="max-w-3xl mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-accent mb-2">
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
                      <span className="text-xs font-mono text-accent font-bold block mb-1">01</span>
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
                      <span className="text-xs font-mono text-accent font-bold block mb-1">02</span>
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
                      <span className="text-xs font-mono text-accent font-bold block mb-1">03</span>
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
                      <span className="text-xs font-mono text-accent font-bold block mb-1">04</span>
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
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface border-t border-stone-200/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 block">
                  {homeDict.ordering.eyebrow}
                </span>
                <h2
                  id="ordering-heading"
                  className="text-3xl md:text-4xl font-bold font-heading text-slate-900"
                >
                  {homeDict.ordering.title}
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-600 font-sans">
                  {homeDict.ordering.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Step 1 */}
                <div className="bg-white border border-stone-200/80 border-t-2 border-t-accent/60 rounded-2xl p-6 h-full flex flex-col hover:border-accent hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-accent text-slate-900 font-mono text-sm font-bold flex items-center justify-center mb-5 shadow-xs">
                    {homeDict.ordering.step1Number}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                    {homeDict.ordering.step1Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.ordering.step1Desc}
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white border border-stone-200/80 border-t-2 border-t-accent/60 rounded-2xl p-6 h-full flex flex-col hover:border-accent hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-accent text-slate-900 font-mono text-sm font-bold flex items-center justify-center mb-5 shadow-xs">
                    {homeDict.ordering.step2Number}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                    {homeDict.ordering.step2Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.ordering.step2Desc}
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white border border-stone-200/80 border-t-2 border-t-accent/60 rounded-2xl p-6 h-full flex flex-col hover:border-accent hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-accent text-slate-900 font-mono text-sm font-bold flex items-center justify-center mb-5 shadow-xs">
                    {homeDict.ordering.step3Number}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                    {homeDict.ordering.step3Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.ordering.step3Desc}
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-white border border-stone-200/80 border-t-2 border-t-accent/60 rounded-2xl p-6 h-full flex flex-col hover:border-accent hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-accent text-slate-900 font-mono text-sm font-bold flex items-center justify-center mb-5 shadow-xs">
                    {homeDict.ordering.step4Number}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
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
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 block">
                  {homeDict.gallery.eyebrow}
                </span>
                <h2
                  id="gallery-heading"
                  className="text-3xl md:text-4xl font-bold font-heading text-slate-900"
                >
                  {homeDict.gallery.title}
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-600 font-sans">
                  {homeDict.gallery.subtitle}
                </p>
              </div>

              {/* 3 Documentation Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1: Produk */}
                <div className="bg-surface rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full group hover:border-accent/50">
                  <div className="w-full h-48 relative overflow-hidden bg-stone-100">
                    <Image
                      src="/images/projects/kaha-block-dokumentasi-25.webp"
                      alt={homeDict.gallery.caption1}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/40" />
                    <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between text-white/90">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold drop-shadow-md">
                        {homeDict.gallery.doc1Label}
                      </span>
                      <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md rounded text-[10px] text-white shadow-sm border border-white/10">
                        {homeDict.gallery.doc1Badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-[11px] font-mono text-white/90 drop-shadow-md">
                      {homeDict.gallery.doc1Footer}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-1.5">
                      {homeDict.gallery.caption1}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.gallery.caption1Desc}
                    </p>
                  </div>
                </div>

                {/* Card 2: Pemasangan */}
                <div className="bg-surface rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full group hover:border-accent/50">
                  <div className="w-full h-48 relative overflow-hidden bg-stone-100">
                    <Image
                      src="/images/projects/kaha-block-dokumentasi-24.webp"
                      alt={homeDict.gallery.caption2}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/40" />
                    <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between text-white/90">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold drop-shadow-md">
                        {homeDict.gallery.doc2Label}
                      </span>
                      <span className="px-2 py-0.5 bg-emerald-600/80 backdrop-blur-md text-white rounded text-[10px] shadow-sm border border-emerald-400/20">
                        {homeDict.gallery.doc2Badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-[11px] font-mono text-white/90 drop-shadow-md">
                      {homeDict.gallery.doc2Footer}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-1.5">
                      {homeDict.gallery.caption2}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {homeDict.gallery.caption2Desc}
                    </p>
                  </div>
                </div>

                {/* Card 3: Aplikasi Lapangan */}
                <div className="bg-surface rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full group hover:border-accent/50">
                  <div className="w-full h-48 relative overflow-hidden bg-stone-100">
                    <Image
                      src="/images/projects/kaha-block-dokumentasi-03.webp"
                      alt={homeDict.gallery.caption3}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/40" />
                    <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between text-white/90">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold drop-shadow-md">
                        {homeDict.gallery.doc3Label}
                      </span>
                      <span className="px-2 py-0.5 bg-accent/90 backdrop-blur-md text-slate-900 font-bold rounded text-[10px] shadow-sm">
                        {homeDict.gallery.doc3Badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-[11px] font-mono text-white/90 drop-shadow-md">
                      {homeDict.gallery.doc3Footer}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-1.5">
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
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface border-t border-stone-200/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 block">
                  {homeDict.benefits.eyebrow}
                </span>
                <h2
                  id="benefits-heading"
                  className="text-3xl md:text-4xl font-bold font-heading text-slate-900"
                >
                  {homeDict.benefits.title}
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-600 font-sans">
                  {homeDict.benefits.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Feature 1 */}
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 border-t-2 border-t-accent/60 flex flex-col h-full hover:border-accent hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 text-slate-900 border border-accent/40 flex items-center justify-center mb-5">
                    <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                    {homeDict.benefits.item1Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.benefits.item1Desc}
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 border-t-2 border-t-accent/60 flex flex-col h-full hover:border-accent hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 text-slate-900 border border-accent/40 flex items-center justify-center mb-5">
                    <Factory className="w-6 h-6 text-slate-900" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                    {homeDict.benefits.item2Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.benefits.item2Desc}
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 border-t-2 border-t-accent/60 flex flex-col h-full hover:border-accent hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 text-slate-900 border border-accent/40 flex items-center justify-center mb-5">
                    <Truck className="w-6 h-6 text-slate-900" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                    {homeDict.benefits.item3Title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {homeDict.benefits.item3Desc}
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 border-t-2 border-t-accent/60 flex flex-col h-full hover:border-accent hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 text-slate-900 border border-accent/40 flex items-center justify-center mb-5">
                    <CreditCard className="w-6 h-6 text-slate-900" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
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
            SECTION 7.5: FAQ HOMEPAGE (6 Questions)
           ========================================================================= */}
        <section
          id="faq-section"
          aria-labelledby="faq-heading"
          className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white border-t border-stone-200/60"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 block font-heading">
                  {homeDict.faq.eyebrow}
                </span>
                <h2
                  id="faq-heading"
                  className="text-3xl md:text-4xl font-bold font-heading text-slate-900"
                >
                  {homeDict.faq.title}
                </h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-base sm:text-lg text-slate-600 font-sans">
                  {homeDict.faq.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {homeDict.faq.items.map((item, index) => (
                  <details
                    key={index}
                    className="group bg-surface rounded-2xl border border-stone-200/80 open:border-secondary/30 open:shadow-xs transition-[border-color,box-shadow] duration-200"
                  >
                    <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none select-none font-heading font-bold text-base sm:text-lg text-slate-900 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl">
                      <span className="pr-4">{item.q}</span>
                      <span className="shrink-0 w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-slate-900 group-hover:border-primary group-open:rotate-180 transition-transform duration-200">
                        <ChevronDown className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </summary>
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-slate-600 font-sans leading-relaxed border-t border-stone-200/40">
                      {item.a}
                    </div>
                  </details>
                ))}
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
          className="py-12 sm:py-16 md:py-20 bg-primary text-white relative overflow-hidden"
        >
          {/* Subtle accent circles */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-3xl pointer-events-none"
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
              <p className="text-base sm:text-lg text-slate-100 font-sans mb-10 max-w-2xl mx-auto leading-relaxed">
                {homeDict.finalCta.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  id="final-whatsapp-btn"
                  href={dict.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-primary hover:bg-stone-100 px-8 py-4 rounded-full font-bold text-base shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Phone className="w-5 h-5 mr-2.5 text-primary" aria-hidden="true" />
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
