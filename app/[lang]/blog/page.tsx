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
  ShieldCheck,
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

  // Group categories
  const categories = isEn
    ? [
        { id: "all", label: "All Insights" },
        { id: "guide", label: "Guides & Selection" },
        { id: "standards", label: "Quality & Concrete" },
        { id: "technical", label: "Installation & Technical" },
        { id: "application", label: "Specialized Applications" },
        { id: "sustainability", label: "Sustainability & Drainage" },
      ]
    : [
        { id: "all", label: "Semua Artikel" },
        { id: "guide", label: "Panduan & Pemilihan" },
        { id: "standards", label: "Mutu & Standar" },
        { id: "technical", label: "Pemasangan & Teknis" },
        { id: "application", label: "Aplikasi Khusus" },
        { id: "sustainability", label: "Keberlanjutan & Drainase" },
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
            {isEn ? "Blog & Insights" : "Blog & Wawasan"}
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

              <div className="relative rounded-xl bg-surface-card border border-slate-200/90 border-t-4 border-t-accent p-6 sm:p-8 lg:p-10 shadow-xs overflow-hidden hover:shadow-md transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-accent/10 transition-all duration-500" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    {/* Badges & Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/10 text-slate-900 border border-accent/30 font-heading">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{featuredPost.readingTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
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
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors leading-snug font-heading">
                      <Link href={`/${currentLang}/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                      {featuredPost.excerpt}
                    </p>

                    {/* CTA Button */}
                    <Link
                      href={`/${currentLang}/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-hover transition-all duration-200 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
                    >
                      <span>{dict.readMore}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Highlights Summary Card */}
                  <div className="lg:col-span-4 rounded-xl bg-accent/10 border border-accent/30 p-5 lg:p-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-3 flex items-center gap-2 font-heading">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                      <span>{featuredPost.summary.title}</span>
                    </h4>
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      {featuredPost.summary.points.slice(0, 3).map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
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
                  {isEn ? "All Technical Articles" : "Daftar Artikel & Panduan"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-sans">
                  {isEn
                    ? `Showing ${allPosts.length} comprehensive technical articles`
                    : `Menampilkan ${allPosts.length} artikel wawasan teknis mendalam`}
                </p>
              </div>

              {/* Categories badge summary */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 mr-1 font-medium">
                  {isEn ? "Categories:" : "Kategori:"}
                </span>
                {categories.slice(1, 4).map((c) => (
                  <span
                    key={c.id}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white border border-slate-200 text-slate-700 shadow-xs"
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
                <article className="flex flex-col h-full rounded-xl bg-surface-card border border-slate-200/90 hover:border-accent/50 p-6 transition-all duration-300 hover:shadow-md group shadow-none">
                  {/* Category & Reading Time */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-accent/10 text-slate-900 border border-accent/30 font-heading">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString(
                        isEn ? "en-US" : "id-ID",
                        { year: "numeric", month: "short", day: "numeric" }
                      )}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-accent transition-colors leading-snug mb-3 line-clamp-2 font-heading">
                    <Link href={`/${currentLang}/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 flex-grow font-sans">
                    {post.excerpt}
                  </p>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                    <Link
                      href={`/${currentLang}/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-accent transition-colors"
                    >
                      <span>{dict.readMore}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[11px] text-slate-400 font-mono">
                      #0{index + 2}
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Bottom Consulting & Product Navigator CTA */}
        <section className="mt-24">
          <ScrollReveal direction="up">
            <div className="rounded-xl bg-primary text-white p-8 sm:p-10 lg:p-12 text-center lg:text-left relative overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3 font-heading">
                    <Layers className="w-3.5 h-3.5" />
                    <span>PT Kaha Sukses Mandiri</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight font-heading">
                    {isEn
                      ? "Plan Your Paving Project with High Precision"
                      : "Rencanakan Proyek Paving Anda Bersama Kaha Block"}
                  </h3>
                  <p className="text-slate-100 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                    {isEn
                      ? "Consult on product choices, technical site preparation, and receive verified quotations for K-250, K-300, and K-400 paving blocks produced with fully automated hydraulic machinery."
                      : "Konsultasikan kebutuhan produk, persiapan lahan, dan dapatkan penawaran harga resmi paving block K-250, K-300, dan K-400 mesin full otomatis hidrolik untuk proyek Anda."}
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                  <Link
                    href={`/${currentLang}/products`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-stone-100 text-primary font-bold text-sm transition-colors shadow-md min-h-[44px]"
                  >
                    <Layers className="w-4 h-4 text-primary" />
                    <span>{isEn ? "View Product Catalog" : "Lihat Katalog Produk"}</span>
                  </Link>
                  <a
                    href="https://wa.me/6281283812475"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors border border-white/20 min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>{isEn ? "Chat via WhatsApp" : "Hubungi via WhatsApp"}</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
