import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructBlogPostMetadata } from "@/lib/metadata";
import {
  allArticlesId,
  allArticlesEn,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FormattedText from "@/components/FormattedText";
import PageHero from "@/components/PageHero";
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Home,
  CheckCircle2,
  AlertTriangle,
  Info,
  Lightbulb,
  ShieldCheck,
  Phone,
  HelpCircle,
  ListOrdered,
  FileCheck,
} from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const paths: { lang: string; slug: string }[] = [];

  allArticlesId.forEach((article) => {
    paths.push({ lang: "id", slug: article.slug });
  });

  allArticlesEn.forEach((article) => {
    paths.push({ lang: "en", slug: article.slug });
  });

  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) {
    return {};
  }
  const currentLang = lang as Locale;
  const post = getBlogPostBySlug(slug, currentLang);
  if (!post) {
    return {};
  }
  return constructBlogPostMetadata({
    slug: post.slug,
    lang: currentLang,
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const currentLang = lang as Locale;
  const isEn = currentLang === "en";
  const dict = dictionaries[currentLang].blog;

  const post = getBlogPostBySlug(slug, currentLang);
  if (!post) {
    notFound();
  }

  const allPosts = currentLang === "id" ? allArticlesId : allArticlesEn;
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const relatedPosts = getRelatedBlogPosts(slug, currentLang, 3);

  const formattedPublishedDate = new Date(post.publishedAt).toLocaleDateString(
    isEn ? "en-US" : "id-ID",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const formattedUpdatedDate = new Date(post.updatedAt).toLocaleDateString(
    isEn ? "en-US" : "id-ID",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const isQuickAnswer =
    post.intro[0]?.startsWith("Jawaban Langsung:") ||
    post.intro[0]?.startsWith("Direct Answer:") ||
    post.intro[0]?.startsWith("Quick Summary:");
  const quickAnswer = isQuickAnswer ? post.intro[0] : null;
  const remainingIntro = isQuickAnswer ? post.intro.slice(1) : post.intro;

  return (
    <div className="min-h-screen bg-surface text-slate-900 selection:bg-primary/20 selection:text-primary">
      {/* Unified JSON-LD Graph Injection */}
      <JsonLd page="blogPost" lang={currentLang} post={post} />

      {/* Article Header & Breadcrumbs */}
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={<FormattedText text={post.excerpt} />}
      >
        <div className="flex flex-col gap-6 mt-6 max-w-4xl">
          {/* Quick Answer Callout */}
          {quickAnswer && (
            <div className="rounded-xl bg-white/10 border border-white/20 p-4 sm:p-5 text-sm sm:text-base text-white shadow-xs">
              <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider mb-2 font-heading">
                <Lightbulb className="w-4 h-4 text-accent shrink-0" />
                <span>
                  {isEn
                    ? "Quick Answer / Executive Summary"
                    : "Jawaban Cepat / Ringkasan Teknis"}
                </span>
              </div>
              <div className="text-white/90 leading-relaxed font-sans">
                <FormattedText text={quickAnswer} />
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/70"
            >
              <Link
                href={`/${currentLang}`}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Home className="w-3.5 h-3.5" />
                <span>{isEn ? "Home" : "Beranda"}</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/50" />
              <Link
                href={`/${currentLang}/blog`}
                className="hover:text-white transition-colors"
              >
                {isEn ? "Insights & Articles" : "Artikel & Wawasan"}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/50" />
              <span className="text-white font-semibold truncate max-w-xs sm:max-w-sm">
                {post.category}
              </span>
            </nav>

            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/30" aria-hidden="true" />

            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-white/80">
                <Clock className="w-3.5 h-3.5 text-white/60" />
                <span>{post.readingTime}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/80">
                <Calendar className="w-3.5 h-3.5 text-white/60" />
                <span>
                  {isEn ? "Published: " : "Diterbitkan: "}
                  {formattedPublishedDate}
                </span>
              </div>
              {post.updatedAt && (
                <div className="flex items-center gap-1.5 text-xs text-white/80">
                  <span className="text-white/40">•</span>
                  <span>
                    {isEn ? "Updated: " : "Diperbarui: "}
                    {formattedUpdatedDate}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Author / Publisher Byline */}
          <div className="flex items-center gap-3 pt-6 border-t border-white/20 text-xs text-white/70">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold">
              K
            </div>
            <div>
              <p className="text-white font-semibold">
                {isEn ? "Kaha Block Technical Team" : "Tim Teknis Kaha Block"}
              </p>
              <p className="text-white/60">
                PT Kaha Sukses Mandiri • Cisauk, Tangerang
              </p>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Main Article Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content Creation Process & Editorial Disclosure */}
        <aside
          aria-label="Editorial note"
          className="mb-10 rounded-xl bg-surface-card border border-slate-200 p-4 sm:p-5 text-xs sm:text-sm text-slate-700 flex items-start gap-3.5 shadow-xs"
        >
          <FileCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-slate-900 font-heading">
              {isEn ? "Editorial & Practical Disclosure" : "Catatan Penyusunan Konten"}
            </p>
            <p className="text-slate-600 leading-relaxed font-sans">
              {isEn
                ? "This article is prepared by the Kaha Block team based on hands-on practical experience in hydraulic concrete paving block manufacturing, material supply, and on-site installations across residential, commercial, and industrial projects since 2015."
                : "Artikel ini disusun oleh tim Kaha Block berdasarkan pengalaman praktis pabrikasi, pengadaan material, dan pengerjaan pemasangan paving block di berbagai proyek hunian, komersial, dan industri sejak 2015."}
            </p>
          </div>
        </aside>

        {/* Table of Contents (Daftar Isi) */}
        {post.sections.length > 0 && (
          <div className="rounded-xl bg-surface-card border border-slate-200 p-6 mb-12 shadow-xs">
            <div className="flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wider mb-4 font-heading">
              <ListOrdered className="w-4 h-4 text-accent" />
              <span>{dict.tableOfContents}</span>
            </div>
            <nav aria-label="Table of contents">
              <ul className="space-y-2 text-sm text-slate-700">
                {post.sections.map((section, idx) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="hover:text-primary transition-colors flex items-start gap-2.5"
                    >
                      <span className="text-primary font-mono text-xs mt-0.5 font-bold">
                        {String(idx + 1).padStart(2, "0")}.
                      </span>
                      <span>{section.heading}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        {/* Intro Paragraphs */}
        {remainingIntro.length > 0 && (
          <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed mb-12 font-sans">
            {remainingIntro.map((p, i) => (
              <p key={i}>
                <FormattedText text={p} />
              </p>
            ))}
          </div>
        )}

        {/* Dynamic Sections */}
        <div className="space-y-16">
          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              {/* Section Heading */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-5 pb-3 border-b border-slate-200 flex items-center gap-2 font-heading">
                <span>{section.heading}</span>
              </h2>

              {/* Section Paragraphs */}
              <div className="space-y-4 text-slate-700 text-base leading-relaxed mb-6 font-sans">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>
                    <FormattedText text={p} />
                  </p>
                ))}
              </div>

              {/* Optional Section List */}
              {section.list && (
                <div className="my-6 rounded-xl bg-surface-card border border-slate-200 p-5 sm:p-6 shadow-xs">
                  {section.list.title && (
                    <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2 font-heading">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      <span>{section.list.title}</span>
                    </h4>
                  )}
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    {section.list.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>
                          <FormattedText text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Optional Section Table */}
              {section.table && (
                <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700 border-collapse">
                    {section.table.caption && (
                      <caption className="p-3 text-xs font-semibold text-slate-600 bg-slate-50 border-b border-slate-200 text-left">
                        {section.table.caption}
                      </caption>
                    )}
                    <thead className="bg-slate-100 text-slate-900 uppercase font-semibold text-xs border-b border-slate-200">
                      <tr>
                        {section.table.headers.map((h, i) => (
                          <th key={i} className="p-3.5 sm:p-4 font-heading">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`p-3.5 sm:p-4 ${
                                cIdx === 0 ? "font-semibold text-slate-900" : ""
                              }`}
                            >
                              <FormattedText text={cell} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Optional Section Callout */}
              {section.callout && (
                <div
                  className={`my-6 rounded-xl p-5 border flex items-start gap-3.5 ${
                    section.callout.type === "warning"
                      ? "bg-rose-50 border-rose-200 text-rose-900"
                      : section.callout.type === "tip"
                      ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                      : "bg-accent/15 border-accent/40 text-slate-900"
                  }`}
                >
                  {section.callout.type === "warning" ? (
                    <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  ) : section.callout.type === "tip" ? (
                    <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  )}
                  <div>
                    {section.callout.title && (
                      <h4 className="font-bold text-sm text-slate-900 mb-1 font-heading">
                        {section.callout.title}
                      </h4>
                    )}
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-sans">
                      <FormattedText text={section.callout.text} />
                    </p>
                  </div>
                </div>
              )}

              {/* Subsections if any */}
              {section.subsections && (
                <div className="mt-8 space-y-8 pl-0 sm:pl-4 border-l-0 sm:border-l sm:border-slate-200">
                  {section.subsections.map((sub) => (
                    <div key={sub.id} id={sub.id} className="scroll-mt-28">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">
                        {sub.heading}
                      </h3>
                      <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed mb-4 font-sans">
                        {sub.paragraphs.map((sp, sIdx) => (
                          <p key={sIdx}>
                            <FormattedText text={sp} />
                          </p>
                        ))}
                      </div>

                      {sub.list && (
                        <div className="my-4 rounded-lg bg-surface-card border border-slate-200 p-4">
                          {sub.list.title && (
                            <h5 className="text-xs font-bold text-slate-900 mb-2 font-heading">
                              {sub.list.title}
                            </h5>
                          )}
                          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                            {sub.list.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                <span>
                                  <FormattedText text={item} />
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Summary Box */}
        <section className="mt-16 rounded-xl bg-accent/15 border border-accent/40 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-accent font-bold uppercase text-xs sm:text-sm tracking-wider mb-4 font-heading">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>{post.summary.title}</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-800 font-sans">
            {post.summary.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <FormattedText text={pt} />
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ Section */}
        {post.faq && post.faq.items.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-center gap-2 mb-8">
              <HelpCircle className="w-5 h-5 text-accent" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-heading">
                {post.faq.title}
              </h2>
            </div>

            <div className="space-y-4">
              {post.faq.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-surface-card border border-slate-200 p-5 sm:p-6 shadow-xs"
                >
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2.5 font-heading">
                    <span className="text-accent font-mono text-sm font-bold">Q:</span>
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6 font-sans">
                    <FormattedText text={item.answer} />
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Previous / Next Article Navigation */}
        <nav
          aria-label="Article navigation"
          className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {prevPost ? (
            <Link
              href={`/${currentLang}/blog/${prevPost.slug}`}
              className="flex flex-col p-4 rounded-xl bg-surface-card border border-slate-200 hover:border-primary/40 transition-colors group text-left shadow-xs"
            >
              <span className="text-xs text-slate-500 flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                <span>{dict.prevArticle}</span>
              </span>
              <span className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 font-heading">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={`/${currentLang}/blog/${nextPost.slug}`}
              className="flex flex-col p-4 rounded-xl bg-surface-card border border-slate-200 hover:border-primary/40 transition-colors group text-right sm:text-right shadow-xs"
            >
              <span className="text-xs text-slate-500 flex items-center justify-end gap-1 mb-1">
                <span>{dict.nextArticle}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 font-heading">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-8 font-heading">
              {dict.relatedArticles}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <article
                  key={rPost.slug}
                  className="flex flex-col rounded-xl bg-surface-card border border-slate-200 hover:border-primary/30 p-5 transition-all group shadow-xs"
                >
                  <span className="text-[11px] font-semibold text-primary mb-2">
                    {rPost.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 mb-2 font-heading">
                    <Link href={`/${currentLang}/blog/${rPost.slug}`}>
                      {rPost.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-4 flex-grow font-sans">
                    {rPost.excerpt}
                  </p>
                  <Link
                    href={`/${currentLang}/blog/${rPost.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover mt-auto"
                  >
                    <span>{dict.readMore}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Consultation CTA */}
        <section className="mt-20">
          <div className="rounded-xl bg-primary text-white p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">
                {isEn
                  ? "Need Engineering Guidance for Your Project?"
                  : "Butuh Konsultasi Teknis untuk Proyek Anda?"}
              </h3>
              <p className="text-sm text-slate-100 max-w-xl leading-relaxed font-sans">
                {isEn
                  ? "Connect with PT Kaha Sukses Mandiri to discuss paving specifications, load calculations, and verified quotations."
                  : "Hubungi PT Kaha Sukses Mandiri untuk konsultasi spesifikasi mutu paving block K-250, K-300, dan K-400 mesin full otomatis hidrolik."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href={`/${currentLang}/products`}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-stone-100 text-primary font-bold text-sm transition-colors shadow-md min-h-[44px] flex items-center justify-center"
              >
                {isEn ? "View Products" : "Lihat Produk"}
              </Link>
              <a
                href="https://wa.me/628119753030"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors border border-white/20 flex items-center gap-2 min-h-[44px] justify-center"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
