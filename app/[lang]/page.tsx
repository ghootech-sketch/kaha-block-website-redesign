import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal, { Reveal, RevealGroup } from "@/components/ScrollReveal";
import ClientLogoMarquee from "@/components/ClientLogoMarquee";
import FactoryVideoGallery, { FactoryVideoData } from "@/components/FactoryVideoGallery";
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

  const homepageVideos: FactoryVideoData[] = [
    {
      id: "prod-01",
      videoSrc: "/videos/factory/factory-production-01.mp4",
      posterSrc: "/images/factory/factory-production-01.webp",
    },
    {
      id: "prod-02",
      videoSrc: "/videos/factory/factory-production-02.mp4",
      posterSrc: "/images/factory/factory-production-02.webp",
    },
    {
      id: "prod-03",
      videoSrc: "/videos/factory/factory-production-03.mp4",
      posterSrc: "/images/factory/factory-production-03.webp",
    },
  ];

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
          className="relative isolate overflow-hidden bg-slate-950 min-h-[620px] lg:min-h-[85vh] flex items-center"
        >
          {/* Background Image - Asymmetric on desktop */}
          <div className="absolute inset-0 lg:left-[45%] -z-20">
            <Image
              src="/images/hero/kaha-block-hero-paving.webp"
              alt={
                currentLang === "id"
                  ? "Hasil pemasangan paving block Kaha Block"
                  : "Kaha Block paving installation result"
              }
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="object-cover object-center lg:object-left"
            />
            {/* Desktop fade from black to image */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent w-full" />
            {/* Mobile dark overlay for readability */}
            <div className="lg:hidden absolute inset-0 bg-slate-950/75" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
            <ScrollReveal immediate>
              <div className="max-w-3xl">
                {/* Eyebrow marker */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="h-[2px] w-12 bg-accent" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent font-heading">
                    {homeDict.hero.eyebrow}
                  </span>
                </div>

                {/* H1 Heading */}
                <h1
                  id="hero-title"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-tight font-heading leading-[1.05] mb-8"
                >
                  {homeDict.hero.h1}
                </h1>

                {/* Clear Narrative Description */}
                <p className="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed mb-10 max-w-2xl">
                  {homeDict.hero.description}
                </p>

                {/* Primary & Secondary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
                  <a
                    id="hero-primary-cta"
                    href={dict.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold text-sm tracking-wide uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 mr-3" aria-hidden="true" />
                    {homeDict.hero.ctaPrimary}
                  </a>

                  <Link
                    id="hero-secondary-cta"
                    href={`/${currentLang}/products`}
                    className="inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-white border border-white/30 px-8 py-4 font-bold text-sm tracking-wide uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
                  >
                    {homeDict.hero.ctaSecondary}
                    <ArrowRight className="w-4 h-4 ml-3 text-accent" aria-hidden="true" />
                  </Link>
                </div>

                {/* Trust Line & Key Verification Badges */}
                <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs uppercase tracking-widest text-slate-400 font-sans">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-accent" aria-hidden="true" />
                    <span className="font-semibold text-slate-200">
                      {homeDict.hero.trustNote}
                    </span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-slate-600" aria-hidden="true" />
                  <div className="flex items-center space-x-2">
                    <Factory className="w-4 h-4 text-accent" aria-hidden="true" />
                    <span className="text-slate-300">{homeDict.hero.plantBadge}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 1.5: CLIENT & PARTNER LOGO MARQUEE
           ========================================================================= */}
        <ClientLogoMarquee dict={homeDict.clientLogos} />

        {/* =========================================================================
            SECTION 2: TRUST & CAPABILITY STATS
           ========================================================================= */}
        <section
          id="trust-stats-section"
          aria-labelledby="stats-heading"
          className="py-16 sm:py-20 lg:py-24 bg-white border-b border-stone-200/40"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="stats-heading" className="sr-only">
              {homeDict.trustStats.heading}
            </h2>

            <RevealGroup>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-stone-200/60">
                {/* Stat 1: Since 2015 */}
                <Reveal
                  staggerIndex={0}
                  className="pt-8 md:pt-0 md:pl-8 lg:pl-12 first:pt-0 first:md:pl-0 flex flex-col"
                >
                  <div className="flex items-center space-x-3 mb-5">
                    <span className="w-8 h-px bg-accent" aria-hidden="true" />
                    <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
                  </div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-light font-heading text-slate-900 mb-4 tracking-tight">
                    {homeDict.trustStats.sinceValue}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest font-heading text-slate-900 mb-3">
                    {homeDict.trustStats.sinceTitle}
                  </h3>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed max-w-sm">
                    {homeDict.trustStats.sinceDesc}
                  </p>
                </Reveal>

                {/* Stat 2: Facility Size 9.080 m2 */}
                <Reveal
                  staggerIndex={1}
                  className="pt-8 md:pt-0 md:pl-8 lg:pl-12 flex flex-col"
                >
                  <div className="flex items-center space-x-3 mb-5">
                    <span className="w-8 h-px bg-primary" aria-hidden="true" />
                    <Factory className="w-4 h-4 text-primary" aria-hidden="true" />
                  </div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-light font-heading text-slate-900 mb-4 tracking-tight">
                    {homeDict.trustStats.facilityValue}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest font-heading text-slate-900 mb-3">
                    {homeDict.trustStats.facilityTitle}
                  </h3>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed max-w-sm">
                    {homeDict.trustStats.facilityDesc}
                  </p>
                </Reveal>

                {/* Stat 3: Quality Options */}
                <Reveal
                  staggerIndex={2}
                  className="pt-8 md:pt-0 md:pl-8 lg:pl-12 flex flex-col"
                >
                  <div className="flex items-center space-x-3 mb-5">
                    <span className="w-8 h-px bg-accent" aria-hidden="true" />
                    <Award className="w-4 h-4 text-accent" aria-hidden="true" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-light font-heading text-slate-900 mb-4 tracking-tight">
                    {homeDict.trustStats.qualityValue}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest font-heading text-slate-900 mb-3">
                    {homeDict.trustStats.qualityTitle}
                  </h3>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed max-w-sm">
                    {homeDict.trustStats.qualityDesc}
                  </p>
                </Reveal>
              </div>
            </RevealGroup>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2.5: FACTORY PRODUCTION VIDEOS
           ========================================================================= */}
        <FactoryVideoGallery
          title={homeDict.factoryVideos.title}
          subtitle={homeDict.factoryVideos.subtitle}
          playLabelPrefix={homeDict.factoryVideos.playLabel}
          videos={homepageVideos}
          variant="premium"
        />

        {/* =========================================================================
            SECTION 3: FEATURED PRODUCTS PREVIEW (5 Product Cards Balanced Grid)
           ========================================================================= */}
        <section
          id="featured-products-section"
          aria-labelledby="featured-heading"
          className="py-16 sm:py-20 lg:py-28 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealGroup>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
                <div className="max-w-2xl">
                  <Reveal delay={0}>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="w-8 h-px bg-accent" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                        {homeDict.featuredProducts.eyebrow}
                      </span>
                    </div>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h2
                      id="featured-heading"
                      className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-slate-900 tracking-tight"
                    >
                      {homeDict.featuredProducts.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.16}>
                    <p className="text-base text-slate-500 font-sans mt-4 max-w-xl leading-relaxed">
                      {homeDict.featuredProducts.subtitle}
                    </p>
                  </Reveal>
                </div>
                
                <Reveal delay={0.24} className="hidden md:block">
                  <Link
                    id="view-all-products-btn"
                    href={`/${currentLang}/products`}
                    className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 font-bold text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {homeDict.featuredProducts.viewAll}
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>
                </Reveal>
              </div>

              {/* Balanced 5 Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12">
                {featuredKeys.map((key, index) => {
                  const product = dict.products.items[key];
                  const colSpanClass =
                    index === 3
                      ? "lg:col-span-2 lg:col-start-2"
                      : "lg:col-span-2";

                  return (
                    <Reveal
                      key={key}
                      staggerIndex={index}
                      baseDelay={0.24}
                      className={`${colSpanClass} group flex flex-col h-full`}
                    >
                      {/* Visual Image */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 mb-5 flex items-center justify-center">
                        <Image
                          src={product.image}
                          alt={`${dict.products.imageAltPrefix} ${product.name}`}
                          fill
                          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                          className="object-contain p-4 sm:p-6 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        {/* Elegant Mutu Badge */}
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-slate-900 px-3 py-1.5 text-[10px] uppercase tracking-widest font-heading font-bold shadow-sm">
                          {product.badge}
                        </div>
                      </div>

                      {/* Content Area - Minimal */}
                      <div className="flex flex-col flex-grow">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="w-4 h-px bg-accent" aria-hidden="true" />
                          <h3 className="text-xl font-medium font-heading text-slate-900">
                            {product.name}
                          </h3>
                        </div>
                        <ul className="space-y-2 text-xs text-slate-500 font-sans mb-6 pl-6 border-l border-stone-200 ml-2">
                          {product.quickSpecs?.slice(0, 3).map((spec, i) => (
                            <li key={i}>{spec}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Card Action Link */}
                      <div className="mt-auto pl-6 ml-2">
                        <Link
                          href={`/${currentLang}/products`}
                          className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-slate-900 hover:text-primary transition-colors group/link focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                        >
                          <span className="border-b border-slate-900 group-hover/link:border-primary pb-0.5">{homeDict.featuredProducts.viewSpecs}</span>
                          <ArrowRight className="w-3 h-3 ml-2 transform group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <Reveal delay={0.64} className="mt-12 text-center md:hidden">
                <Link
                  href={`/${currentLang}/products`}
                  className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white w-full py-4 font-bold text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {homeDict.featuredProducts.viewAll}
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </Reveal>
            </RevealGroup>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3.5: SOLUSI BERDASARKAN KEBUTUHAN AREA (4 Categories)
           ========================================================================= */}
        <section
          id="solutions-by-area-section"
          aria-labelledby="solutions-heading"
          className="py-16 sm:py-20 lg:py-28 bg-stone-50 border-b border-stone-200/40"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealGroup>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                  <Reveal delay={0}>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="w-8 h-px bg-accent" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                        {homeDict.solutionsByArea.eyebrow}
                      </span>
                    </div>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h2
                      id="solutions-heading"
                      className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-slate-900 tracking-tight"
                    >
                      {homeDict.solutionsByArea.title}
                    </h2>
                  </Reveal>
                </div>
                <Reveal delay={0.16} className="max-w-md">
                  <p className="text-sm text-slate-500 font-sans leading-relaxed">
                    {homeDict.solutionsByArea.subtitle}
                  </p>
                </Reveal>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
                {homeDict.solutionsByArea.items.map((item, index) => {
                  let AreaIcon = HomeIcon;
                  if (item.id === "commercial") AreaIcon = Building2;
                  if (item.id === "industrial") AreaIcon = Warehouse;
                  if (item.id === "public") AreaIcon = Landmark;

                  return (
                    <Reveal
                      key={item.id}
                      staggerIndex={index}
                      baseDelay={0.24}
                      className="group flex flex-col pt-8 border-t border-stone-300 hover:border-slate-900 transition-colors duration-300"
                    >
                      <div className="mb-6 flex justify-between items-center">
                        <AreaIcon className="w-6 h-6 text-slate-400 group-hover:text-slate-900 transition-colors" aria-hidden="true" />
                        <span className="text-[10px] font-bold text-slate-400 font-mono">0{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-medium font-heading text-slate-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-sans leading-relaxed mb-8 flex-grow">
                        {item.desc}
                      </p>

                      <Link
                        href={item.href}
                        className="inline-flex items-center text-[11px] uppercase tracking-widest font-bold text-slate-900 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent mt-auto"
                      >
                        <span className="border-b border-transparent group-hover:border-primary pb-0.5">{item.linkText}</span>
                        <ArrowRight className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Link>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={0.56} className="border-t border-stone-200 pt-8 flex items-center justify-center space-x-3">
                <span className="w-4 h-px bg-slate-300" aria-hidden="true" />
                <p className="text-xs text-slate-500 font-sans tracking-wide">
                  <span className="font-bold text-slate-900 uppercase">
                    {currentLang === "id" ? "Catatan:" : "Note:"}{" "}
                  </span>
                  {homeDict.solutionsByArea.consultNote}
                </p>
                <span className="w-4 h-px bg-slate-300" aria-hidden="true" />
              </Reveal>
            </RevealGroup>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: INSTALLATION SERVICES (Supply & Install Package)
           ========================================================================= */}
        <section
          id="installation-services-section"
          aria-labelledby="installation-heading"
          className="py-16 sm:py-20 lg:py-28 bg-slate-950 text-white border-t border-slate-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealGroup>
              <div className="flex flex-col md:flex-row justify-between mb-16 lg:mb-20 gap-10">
                <div className="max-w-xl">
                  <Reveal delay={0}>
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="w-8 h-px bg-accent" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent font-heading">
                        {homeDict.installation.eyebrow}
                      </span>
                    </div>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h2
                      id="installation-heading"
                      className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-white tracking-tight leading-tight mb-6"
                    >
                      {homeDict.installation.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.16}>
                    <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
                      {homeDict.installation.subtitle}
                    </p>
                  </Reveal>
                </div>

                <div className="max-w-md flex flex-col justify-end">
                  <div className="grid grid-cols-1 gap-8">
                    {/* Point 1: Integrated Package */}
                    <Reveal staggerIndex={0} baseDelay={0.24}>
                      <h3 className="text-lg font-medium font-heading text-white mb-2 flex items-center">
                        <Layers className="w-4 h-4 text-accent mr-3" aria-hidden="true" />
                        {homeDict.installation.point1Title}
                      </h3>
                      <p className="text-sm text-slate-400 font-sans leading-relaxed pl-7">
                        {homeDict.installation.point1Desc}
                      </p>
                    </Reveal>
                    {/* Point 2: From Raw Land to Neat Completion */}
                    <Reveal staggerIndex={1} baseDelay={0.24}>
                      <h3 className="text-lg font-medium font-heading text-white mb-2 flex items-center">
                        <ShieldCheck className="w-4 h-4 text-accent mr-3" aria-hidden="true" />
                        {homeDict.installation.point2Title}
                      </h3>
                      <p className="text-sm text-slate-400 font-sans leading-relaxed pl-7">
                        {homeDict.installation.point2Desc}
                      </p>
                    </Reveal>
                    {/* Point 3: Jabodetabek & Regional Coverage */}
                    <Reveal staggerIndex={2} baseDelay={0.24}>
                      <h3 className="text-lg font-medium font-heading text-white mb-2 flex items-center">
                        <Truck className="w-4 h-4 text-accent mr-3" aria-hidden="true" />
                        {homeDict.installation.point3Title}
                      </h3>
                      <p className="text-sm text-slate-400 font-sans leading-relaxed pl-7">
                        {homeDict.installation.point3Desc}
                      </p>
                    </Reveal>
                  </div>
                </div>
              </div>

              {/* Workflow Banner */}
              <Reveal
                delay={0.48}
                className="bg-slate-900 border border-slate-800 rounded-none p-8 sm:p-12 lg:p-16 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-accent" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="mb-12">
                    <h3 className="text-2xl lg:text-3xl font-light font-heading text-white mb-3">
                      {homeDict.installation.workflowTitle}
                    </h3>
                    <p className="text-sm text-slate-400 font-sans max-w-2xl">
                      {homeDict.installation.workflowSubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
                    {/* Step 1 */}
                    <div className="pt-6 sm:pt-0 sm:pl-6 lg:pl-8 first:pt-0 first:sm:pl-0 flex flex-col">
                      <span className="text-xs font-mono text-accent font-bold block mb-4">01</span>
                      <h4 className="text-base font-medium font-heading text-white mb-3">
                        {homeDict.installation.step1Title}
                      </h4>
                      <p className="text-xs text-slate-400 font-sans leading-relaxed flex-grow">
                        {homeDict.installation.step1Desc}
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="pt-6 sm:pt-0 sm:pl-6 lg:pl-8 flex flex-col">
                      <span className="text-xs font-mono text-accent font-bold block mb-4">02</span>
                      <h4 className="text-base font-medium font-heading text-white mb-3">
                        {homeDict.installation.step2Title}
                      </h4>
                      <p className="text-xs text-slate-400 font-sans leading-relaxed flex-grow">
                        {homeDict.installation.step2Desc}
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="pt-6 sm:pt-0 sm:pl-6 lg:pl-8 flex flex-col">
                      <span className="text-xs font-mono text-accent font-bold block mb-4">03</span>
                      <h4 className="text-base font-medium font-heading text-white mb-3">
                        {homeDict.installation.step3Title}
                      </h4>
                      <p className="text-xs text-slate-400 font-sans leading-relaxed flex-grow">
                        {homeDict.installation.step3Desc}
                      </p>
                    </div>

                    {/* Step 4 */}
                    <div className="pt-6 sm:pt-0 sm:pl-6 lg:pl-8 flex flex-col">
                      <span className="text-xs font-mono text-accent font-bold block mb-4">04</span>
                      <h4 className="text-base font-medium font-heading text-white mb-3">
                        {homeDict.installation.step4Title}
                      </h4>
                      <p className="text-xs text-slate-400 font-sans leading-relaxed flex-grow">
                        {homeDict.installation.step4Desc}
                      </p>
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
              </Reveal>
            </RevealGroup>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: HOW TO ORDER (4 Structured Steps)
           ========================================================================= */}
        <section
          id="ordering-process-section"
          aria-labelledby="ordering-heading"
          className="py-16 sm:py-20 lg:py-28 bg-white border-t border-stone-200/40"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealGroup>
              <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                <Reveal delay={0}>
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <span className="w-8 h-px bg-accent" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                      {homeDict.ordering.eyebrow}
                    </span>
                    <span className="w-8 h-px bg-accent" aria-hidden="true" />
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2
                    id="ordering-heading"
                    className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-slate-900 tracking-tight"
                  >
                    {homeDict.ordering.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="text-sm sm:text-base text-slate-500 font-sans mt-4 max-w-xl mx-auto leading-relaxed">
                    {homeDict.ordering.subtitle}
                  </p>
                </Reveal>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
                <div className="hidden lg:block absolute top-4 left-[10%] right-[10%] h-[1px] bg-stone-200" aria-hidden="true" />
                
                {/* Step 1 */}
                <Reveal
                  staggerIndex={0}
                  baseDelay={0.24}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-accent text-accent font-mono text-xs font-bold flex items-center justify-center mb-6 relative z-10 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {homeDict.ordering.step1Number}
                  </div>
                  <h3 className="text-base font-bold font-heading text-slate-900 mb-3">
                    {homeDict.ordering.step1Title}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed max-w-xs">
                    {homeDict.ordering.step1Desc}
                  </p>
                </Reveal>

                {/* Step 2 */}
                <Reveal
                  staggerIndex={1}
                  baseDelay={0.24}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-accent text-accent font-mono text-xs font-bold flex items-center justify-center mb-6 relative z-10 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {homeDict.ordering.step2Number}
                  </div>
                  <h3 className="text-base font-bold font-heading text-slate-900 mb-3">
                    {homeDict.ordering.step2Title}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed max-w-xs">
                    {homeDict.ordering.step2Desc}
                  </p>
                </Reveal>

                {/* Step 3 */}
                <Reveal
                  staggerIndex={2}
                  baseDelay={0.24}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-accent text-accent font-mono text-xs font-bold flex items-center justify-center mb-6 relative z-10 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {homeDict.ordering.step3Number}
                  </div>
                  <h3 className="text-base font-bold font-heading text-slate-900 mb-3">
                    {homeDict.ordering.step3Title}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed max-w-xs">
                    {homeDict.ordering.step3Desc}
                  </p>
                </Reveal>

                {/* Step 4 */}
                <Reveal
                  staggerIndex={3}
                  baseDelay={0.24}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-accent text-accent font-mono text-xs font-bold flex items-center justify-center mb-6 relative z-10 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {homeDict.ordering.step4Number}
                  </div>
                  <h3 className="text-base font-bold font-heading text-slate-900 mb-3">
                    {homeDict.ordering.step4Title}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed max-w-xs">
                    {homeDict.ordering.step4Desc}
                  </p>
                </Reveal>
              </div>
            </RevealGroup>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: GALLERY PREVIEW (3 Documentation Cards with bilingual captions)
           ========================================================================= */}
        <section
          id="gallery-preview-section"
          aria-labelledby="gallery-heading"
          className="py-16 sm:py-20 lg:py-28 bg-stone-50 border-t border-stone-200/40"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealGroup>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
                <div className="max-w-2xl">
                  <Reveal delay={0}>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="w-8 h-px bg-accent" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                        {homeDict.gallery.eyebrow}
                      </span>
                    </div>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h2
                      id="gallery-heading"
                      className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-slate-900 tracking-tight"
                    >
                      {homeDict.gallery.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.16}>
                    <p className="text-base text-slate-500 font-sans mt-4 max-w-xl leading-relaxed">
                      {homeDict.gallery.subtitle}
                    </p>
                  </Reveal>
                </div>
                
                <Reveal delay={0.24} className="hidden md:block">
                  <Link
                    id="view-gallery-btn"
                    href={`/${currentLang}/projects`}
                    className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 font-bold text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {homeDict.gallery.cta}
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>
                </Reveal>
              </div>

              {/* 3 Documentation Images without card borders */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {/* Card 1: Produk */}
                <Reveal
                  staggerIndex={0}
                  baseDelay={0.24}
                  className="flex flex-col group"
                >
                  <div className="w-full aspect-[3/2] relative overflow-hidden bg-stone-200 mb-6 flex items-center justify-center">
                    <Image
                      src="/images/projects/kaha-block-dokumentasi-25.webp"
                      alt={homeDict.gallery.caption1}
                      fill
                      className="object-cover object-[center_40%] group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="w-4 h-px bg-accent" aria-hidden="true" />
                      <h3 className="text-lg font-medium font-heading text-slate-900">
                        {homeDict.gallery.caption1}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500 font-sans leading-relaxed ml-6">
                      {homeDict.gallery.caption1Desc}
                    </p>
                  </div>
                </Reveal>

                {/* Card 2: Pemasangan */}
                <Reveal
                  staggerIndex={1}
                  baseDelay={0.24}
                  className="flex flex-col group"
                >
                  <div className="w-full aspect-[3/2] relative overflow-hidden bg-stone-200 mb-6 flex items-center justify-center">
                    <Image
                      src="/images/projects/kaha-block-dokumentasi-24.webp"
                      alt={homeDict.gallery.caption2}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="w-4 h-px bg-accent" aria-hidden="true" />
                      <h3 className="text-lg font-medium font-heading text-slate-900">
                        {homeDict.gallery.caption2}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500 font-sans leading-relaxed ml-6">
                      {homeDict.gallery.caption2Desc}
                    </p>
                  </div>
                </Reveal>

                {/* Card 3: Aplikasi Lapangan */}
                <Reveal
                  staggerIndex={2}
                  baseDelay={0.24}
                  className="flex flex-col group"
                >
                  <div className="w-full aspect-[3/2] relative overflow-hidden bg-stone-200 mb-6 flex items-center justify-center">
                    <Image
                      src="/images/projects/kaha-block-dokumentasi-03.webp"
                      alt={homeDict.gallery.caption3}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="w-4 h-px bg-accent" aria-hidden="true" />
                      <h3 className="text-lg font-medium font-heading text-slate-900">
                        {homeDict.gallery.caption3}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500 font-sans leading-relaxed ml-6">
                      {homeDict.gallery.caption3Desc}
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Mobile CTA */}
              <Reveal delay={0.48} className="mt-12 text-center md:hidden">
                <Link
                  href={`/${currentLang}/projects`}
                  className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white w-full py-4 font-bold text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {homeDict.gallery.cta}
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </Reveal>
            </RevealGroup>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: BENEFITS & PAYMENT SYSTEM
           ========================================================================= */}
        <section
          id="benefits-payment-section"
          aria-labelledby="benefits-heading"
          className="py-16 sm:py-20 lg:py-28 bg-stone-50 border-t border-stone-200/40"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealGroup>
              <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                <Reveal delay={0}>
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <span className="w-8 h-px bg-accent" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                      {homeDict.benefits.eyebrow}
                    </span>
                    <span className="w-8 h-px bg-accent" aria-hidden="true" />
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2
                    id="benefits-heading"
                    className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-slate-900 tracking-tight"
                  >
                    {homeDict.benefits.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="text-sm sm:text-base text-slate-500 font-sans mt-4 max-w-xl mx-auto leading-relaxed">
                    {homeDict.benefits.subtitle}
                  </p>
                </Reveal>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {/* Feature 1 */}
                <Reveal
                  staggerIndex={0}
                  baseDelay={0.24}
                  className="flex flex-col group"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-6 text-accent">
                    <ShieldCheck className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="w-4 h-px bg-accent" aria-hidden="true" />
                    <h3 className="text-lg font-medium font-heading text-slate-900">
                      {homeDict.benefits.item1Title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed ml-6">
                    {homeDict.benefits.item1Desc}
                  </p>
                </Reveal>

                {/* Feature 2 */}
                <Reveal
                  staggerIndex={1}
                  baseDelay={0.24}
                  className="flex flex-col group"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-6 text-accent">
                    <Factory className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="w-4 h-px bg-accent" aria-hidden="true" />
                    <h3 className="text-lg font-medium font-heading text-slate-900">
                      {homeDict.benefits.item2Title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed ml-6">
                    {homeDict.benefits.item2Desc}
                  </p>
                </Reveal>

                {/* Feature 3 */}
                <Reveal
                  staggerIndex={2}
                  baseDelay={0.24}
                  className="flex flex-col group"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-6 text-accent">
                    <Truck className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="w-4 h-px bg-accent" aria-hidden="true" />
                    <h3 className="text-lg font-medium font-heading text-slate-900">
                      {homeDict.benefits.item3Title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed ml-6">
                    {homeDict.benefits.item3Desc}
                  </p>
                </Reveal>

                {/* Feature 4 */}
                <Reveal
                  staggerIndex={3}
                  baseDelay={0.24}
                  className="flex flex-col group"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-6 text-accent">
                    <CreditCard className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="w-4 h-px bg-accent" aria-hidden="true" />
                    <h3 className="text-lg font-medium font-heading text-slate-900">
                      {homeDict.benefits.item4Title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed ml-6">
                    {homeDict.benefits.item4Desc}
                  </p>
                </Reveal>
              </div>
            </RevealGroup>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7.5: FAQ HOMEPAGE (6 Questions)
           ========================================================================= */}
        <section
          id="faq-section"
          aria-labelledby="faq-heading"
          className="py-16 sm:py-20 lg:py-28 bg-white border-t border-stone-200/40"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealGroup>
              <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                <Reveal delay={0}>
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <span className="w-8 h-px bg-accent" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                      {homeDict.faq.eyebrow}
                    </span>
                    <span className="w-8 h-px bg-accent" aria-hidden="true" />
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2
                    id="faq-heading"
                    className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-slate-900 tracking-tight"
                  >
                    {homeDict.faq.title}
                  </h2>
                </Reveal>
              </div>

              <div className="border-t border-stone-200">
                {homeDict.faq.items.map((item, index) => (
                  <Reveal key={index} staggerIndex={index} baseDelay={0.24} staggerInterval={0.06}>
                    <details
                      className="group border-b border-stone-200"
                    >
                      <summary className="flex items-center justify-between py-6 sm:py-8 cursor-pointer list-none select-none font-heading font-medium text-lg sm:text-xl text-slate-900 hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">
                        <span className="pr-4">{item.q}</span>
                        <span className="shrink-0 w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-slate-400 group-hover:border-primary group-open:rotate-180 transition-all duration-300 group-open:text-primary">
                          <ChevronDown className="w-4 h-4" aria-hidden="true" />
                        </span>
                      </summary>
                      <div className="pb-6 sm:pb-8 pr-12 text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                        {item.a}
                      </div>
                    </details>
                  </Reveal>
                ))}
              </div>
            </RevealGroup>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: FINAL CTA
           ========================================================================= */}
        <section
          id="final-cta-section"
          aria-labelledby="final-cta-heading"
          className="py-20 sm:py-28 lg:py-36 bg-slate-950 text-white relative overflow-hidden"
        >
          {/* Architectural Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-accent" aria-hidden="true" />

          <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
            <RevealGroup>
              <Reveal delay={0}>
                <h2
                  id="final-cta-heading"
                  className="text-4xl sm:text-5xl lg:text-7xl font-light font-heading tracking-tight mb-8 text-white"
                >
                  {homeDict.finalCta.title}
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-sm sm:text-base text-slate-400 font-sans mb-12 max-w-2xl mx-auto leading-relaxed">
                  {homeDict.finalCta.subtitle}
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                  <a
                    id="final-whatsapp-btn"
                    href={dict.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-10 py-4 font-bold text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Phone className="w-4 h-4 mr-3 text-white" aria-hidden="true" />
                    {homeDict.finalCta.ctaPrimary}
                  </a>

                  <Link
                    id="final-products-btn"
                    href={`/${currentLang}/products`}
                    className="inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-white border border-white/20 px-10 py-4 font-bold text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {homeDict.finalCta.ctaSecondary}
                    <ArrowRight className="w-4 h-4 ml-3 text-accent" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            </RevealGroup>
          </div>
        </section>
      </div>
    </>
  );
}
