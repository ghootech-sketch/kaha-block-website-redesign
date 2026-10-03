import { BUSINESS_FACTS } from "@/lib/business-facts";
import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { getAllBlogPosts } from "@/lib/blog-data";
import {
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  Home,
  Sparkles,
  CheckCircle2,
  Layers,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return [{ lang: "id" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    return {};
  }
  return constructPageMetadata("blog", lang as Locale);
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const currentLang = lang as Locale;
  const isEn = currentLang === "en";
  const dict = dictionaries[currentLang].blog;

  const allPosts = getAllBlogPosts(currentLang);
  const featuredPost = allPosts[0];
  const remainingPosts = allPosts.slice(1);

  // Topic categories
  const categories = isEn
    ? [
        { id: "all", label: "All Topics" },
        { id: "pricing", label: "Price Update" },
        { id: "guide", label: "Product Guides" },
        { id: "technical", label: "Technical" },
        { id: "installation", label: "Installation" },
        { id: "application", label: "Projects" },
      ]
    : [
        { id: "all", label: "Semua Topik" },
        { id: "pricing", label: "Update Harga" },
        { id: "guide", label: "Panduan Produk" },
        { id: "technical", label: "Teknis" },
        { id: "installation", label: "Pemasangan" },
        { id: "application", label: "Proyek" },
      ];

  return (
    <div className="min-h-screen bg-surface text-slate-900 selection:bg-primary/20 selection:text-primary">
      <JsonLd page="blog" lang={currentLang} />

      {/* Header Hero Section */}
      <PageHero
        eyebrow={dict.eyebrow}
        title={dict.title}
        description={dict.subtitle}
      >
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-medium text-white/70 mt-6"
        >
          <Link
            href={`/${currentLang}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{isEn ? "Home" : "Beranda"}</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/50" />
          <span className="text-white font-semibold">
            {isEn ? "Pricing Info & Articles" : "Info Harga & Artikel"}
          </span>
        </nav>
      </PageHero>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Article Card */}
        {featuredPost && (
          <section className="mb-20">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent font-heading">
                  {dict.featuredBadge}
                </h2>
              </div>

              <div className="relative bg-white border border-stone-200/40 p-6 sm:p-8 lg:p-10 transition-colors group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-accent/10 transition-all duration-500" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8">
                    {/* Badges & Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-px bg-accent" aria-hidden="true" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-heading">
                          {featuredPost.category}
                        </span>
                      </div>
                      <span className="text-slate-300 text-xs">|</span>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium tracking-wide">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{featuredPost.readingTime}</span>
                      </div>
                      <span className="text-slate-300 text-xs">|</span>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium tracking-wide">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>
                          {new Date(featuredPost.publishedAt).toLocaleDateString(
                            isEn ? "en-US" : "id-ID",
                            { year: "numeric", month: "long", day: "numeric" }
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 group-hover:text-accent transition-colors leading-tight font-heading tracking-tight">
                      <Link href={`/${currentLang}/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 font-sans max-w-2xl">
                      {featuredPost.excerpt}
                    </p>

                    {/* CTA Button */}
                    <Link
                      href={`/${currentLang}/blog/${featuredPost.slug}`}
                      className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading tracking-wide uppercase"
                    >
                      <span>{dict.readMore}</span>
                      <ArrowRight className="w-4 h-4 ml-2.5" />
                    </Link>
                  </div>

                  {/* Highlights Summary Card */}
                  <div className="lg:col-span-4 bg-surface/50 border border-stone-200/40 p-6">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4 flex items-center gap-2 font-heading">
                      <span>{featuredPost.summary.title}</span>
                    </h4>
                    <ul className="space-y-3.5 text-sm text-slate-600 font-sans">
                      {featuredPost.summary.points.slice(0, 3).map((pt, i) => (
                        <li key={i} className="flex items-start gap-3 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>
        )}

        {/* Section Title & Articles Grid */}
        <section>
          <ScrollReveal direction="up">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200/80">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                  {isEn ? "Articles & Pricing Guides" : "Daftar Artikel & Panduan Harga"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-sans">
                  {isEn
                    ? `Showing ${allPosts.length} comprehensive articles and guides`
                    : `Menampilkan ${allPosts.length} artikel wawasan dan panduan harga`}
                </p>
              </div>

              {/* Categories badge summary */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 mr-1 font-medium font-heading">
                  {isEn ? "Topics:" : "Topik:"}
                </span>
                {categories.slice(1).map((c) => (
                  <span
                    key={c.id}
                    className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-stone-200/60 text-slate-700 shadow-xs font-heading"
                  >
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 3-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {remainingPosts.map((post, index) => (
              <ScrollReveal key={post.slug} direction="up" delay={index * 0.05}>
                <article className="flex flex-col h-full bg-white border border-stone-200/40 hover:border-accent/40 p-6 sm:p-8 transition-colors group">
                  {/* Category & Reading Time */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-px bg-accent" aria-hidden="true" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-heading">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium tracking-wide">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-light text-slate-900 group-hover:text-accent transition-colors leading-snug mb-3 line-clamp-2 font-heading tracking-tight">
                    <Link href={`/${currentLang}/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow font-sans">
                    {post.excerpt}
                  </p>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-5 border-t border-stone-100 mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium tracking-wide">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString(
                          isEn ? "en-US" : "id-ID",
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
                      </span>
                    </div>
                    <Link
                      href={`/${currentLang}/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-accent transition-colors font-heading"
                    >
                      <span>{dict.readMore}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        </div>

      {/* Bottom Consulting & Product Navigator CTA */}
      <section className="bg-dark text-white relative overflow-hidden py-16 sm:py-20 lg:py-28 w-full mt-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" className="flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent font-heading">
                PT Kaha Sukses Mandiri
              </span>
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white font-heading tracking-tight mb-6">
              {isEn
                ? "Plan Your Paving Project with High Precision"
                : "Rencanakan Proyek Paving Anda Bersama Kaha Block"}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 font-sans leading-relaxed mb-10 max-w-2xl mx-auto">
              {isEn
                ? "Consult on product choices, technical site preparation, and receive verified quotations for K-250, K-300, and K-400 paving blocks produced with fully automated hydraulic machinery."
                : "Konsultasikan kebutuhan produk, persiapan lahan, dan dapatkan penawaran harga resmi paving block K-250, K-300, dan K-400 mesin full otomatis hidrolik untuk proyek Anda."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={isEn ? BUSINESS_FACTS.contact.whatsappPrimaryUrlEn : BUSINESS_FACTS.contact.whatsappPrimaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading tracking-wide uppercase"
              >
                <Phone className="w-4 h-4 mr-2.5" aria-hidden="true" />
                {isEn ? "Chat via WhatsApp" : "Hubungi via WhatsApp"}
              </a>
              <Link
                href={`/${currentLang}/products`}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white font-heading tracking-wide uppercase"
              >
                <Layers className="w-4 h-4 mr-2.5 text-accent" aria-hidden="true" />
                {isEn ? "View Product Catalog" : "Lihat Katalog Produk"}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
