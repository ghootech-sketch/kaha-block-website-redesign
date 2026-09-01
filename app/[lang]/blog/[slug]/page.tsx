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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Unified JSON-LD Graph Injection */}
      <JsonLd page="blogPost" lang={currentLang} post={post} />

      {/* Article Header & Breadcrumbs */}
      <header className="relative pt-32 pb-16 border-b border-slate-800 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400 mb-8"
          >
            <Link
              href={`/${currentLang}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5" />
              <span>{isEn ? "Home" : "Beranda"}</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link
              href={`/${currentLang}/blog`}
              className="hover:text-amber-400 transition-colors"
            >
              {isEn ? "Insights & Articles" : "Artikel & Wawasan"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 truncate max-w-xs sm:max-w-sm">
              {post.category}
            </span>
          </nav>

          {/* Meta badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{post.readingTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>
                {isEn ? "Published: " : "Diterbitkan: "}
                {formattedPublishedDate}
              </span>
            </div>
            {post.updatedAt && (
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="text-slate-600">•</span>
                <span>
                  {isEn ? "Updated: " : "Diperbarui: "}
                  {formattedUpdatedDate}
                </span>
              </div>
            )}
          </div>

          {/* H1 Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6 border-l-2 border-amber-500/50 pl-4">
            <FormattedText text={post.excerpt} />
          </p>

          {/* Author / Publisher Byline */}
          <div className="flex items-center gap-3 pt-6 border-t border-slate-800 text-xs text-slate-400">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
              K
            </div>
            <div>
              <p className="text-slate-200 font-semibold">
                {isEn ? "Kaha Block Technical Team" : "Tim Teknis Kaha Block"}
              </p>
              <p className="text-slate-400">
                PT Kaha Sukses Mandiri • Cisauk, Tangerang
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content Creation Process & Editorial Disclosure */}
        <aside
          aria-label="Editorial note"
          className="mb-10 rounded-xl bg-slate-900/60 border border-slate-800 p-4 sm:p-5 text-xs sm:text-sm text-slate-300 flex items-start gap-3.5"
        >
          <FileCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-slate-100">
              {isEn ? "Editorial & Practical Disclosure" : "Catatan Penyusunan Konten"}
            </p>
            <p className="text-slate-400 leading-relaxed">
              {isEn
                ? "This article is prepared by the Kaha Block team based on hands-on practical experience in hydraulic concrete paving block manufacturing, material supply, and on-site installations across residential, commercial, and industrial projects since 2015."
                : "Artikel ini disusun oleh tim Kaha Block berdasarkan pengalaman praktis pabrikasi, pengadaan material, dan pengerjaan pemasangan paving block di berbagai proyek hunian, komersial, dan industri sejak 2015."}
            </p>
          </div>
        </aside>

        {/* Table of Contents (Daftar Isi) */}
        {post.sections.length > 0 && (
          <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 mb-12 shadow-sm">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-bold uppercase tracking-wider mb-4">
              <ListOrdered className="w-4 h-4" />
              <span>{dict.tableOfContents}</span>
            </div>
            <nav aria-label="Table of contents">
              <ul className="space-y-2 text-sm text-slate-300">
                {post.sections.map((section, idx) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="hover:text-amber-400 transition-colors flex items-start gap-2.5"
                    >
                      <span className="text-amber-500/70 font-mono text-xs mt-0.5">
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
        <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed mb-12">
          {post.intro.map((p, i) => (
            <p key={i}>
              <FormattedText text={p} />
            </p>
          ))}
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-16">
          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              {/* Section Heading */}
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-5 pb-3 border-b border-slate-800/80 flex items-center gap-2">
                <span>{section.heading}</span>
              </h2>

              {/* Section Paragraphs */}
              <div className="space-y-4 text-slate-300 text-base leading-relaxed mb-6">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>
                    <FormattedText text={p} />
                  </p>
                ))}
              </div>

              {/* Optional Section List */}
              {section.list && (
                <div className="my-6 rounded-xl bg-slate-900/70 border border-slate-800/90 p-5 sm:p-6">
                  {section.list.title && (
                    <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      <span>{section.list.title}</span>
                    </h4>
                  )}
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    {section.list.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
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
                <div className="my-6 overflow-x-auto rounded-xl border border-slate-800 shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-300 border-collapse">
                    {section.table.caption && (
                      <caption className="p-3 text-xs font-semibold text-slate-400 bg-slate-900/90 border-b border-slate-800 text-left">
                        {section.table.caption}
                      </caption>
                    )}
                    <thead className="bg-slate-900 text-slate-200 uppercase font-semibold text-xs border-b border-slate-800">
                      <tr>
                        {section.table.headers.map((h, i) => (
                          <th key={i} className="p-3.5 sm:p-4">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 bg-slate-950/70">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-900/50 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`p-3.5 sm:p-4 ${
                                cIdx === 0 ? "font-semibold text-white" : ""
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
                      ? "bg-rose-950/20 border-rose-500/30 text-rose-200"
                      : section.callout.type === "tip"
                      ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-200"
                      : "bg-amber-950/20 border-amber-500/30 text-amber-200"
                  }`}
                >
                  {section.callout.type === "warning" ? (
                    <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  ) : section.callout.type === "tip" ? (
                    <Lightbulb className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    {section.callout.title && (
                      <h4 className="font-bold text-sm text-white mb-1">
                        {section.callout.title}
                      </h4>
                    )}
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                      <FormattedText text={section.callout.text} />
                    </p>
                  </div>
                </div>
              )}

              {/* Subsections if any */}
              {section.subsections && (
                <div className="mt-8 space-y-8 pl-0 sm:pl-4 border-l-0 sm:border-l sm:border-slate-800">
                  {section.subsections.map((sub) => (
                    <div key={sub.id} id={sub.id} className="scroll-mt-28">
                      <h3 className="text-lg font-bold text-slate-100 mb-3">
                        {sub.heading}
                      </h3>
                      <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                        {sub.paragraphs.map((sp, sIdx) => (
                          <p key={sIdx}>
                            <FormattedText text={sp} />
                          </p>
                        ))}
                      </div>

                      {sub.list && (
                        <div className="my-4 rounded-lg bg-slate-900/60 border border-slate-800 p-4">
                          {sub.list.title && (
                            <h5 className="text-xs font-bold text-white mb-2">
                              {sub.list.title}
                            </h5>
                          )}
                          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                            {sub.list.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
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
        <section className="mt-16 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-amber-400 font-bold uppercase text-xs sm:text-sm tracking-wider mb-4">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span>{post.summary.title}</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-200">
            {post.summary.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <FormattedText text={pt} />
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ Section */}
        {post.faq && post.faq.items.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-800">
            <div className="flex items-center gap-2 mb-8">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {post.faq.title}
              </h2>
            </div>

            <div className="space-y-4">
              {post.faq.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-900/80 border border-slate-800/80 p-5 sm:p-6"
                >
                  <h3 className="text-base font-bold text-white mb-2 flex items-start gap-2.5">
                    <span className="text-amber-400 font-mono text-sm">Q:</span>
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed pl-6">
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
          className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {prevPost ? (
            <Link
              href={`/${currentLang}/blog/${prevPost.slug}`}
              className="flex flex-col p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-colors group text-left"
            >
              <span className="text-xs text-slate-500 flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                <span>{dict.prevArticle}</span>
              </span>
              <span className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={`/${currentLang}/blog/${nextPost.slug}`}
              className="flex flex-col p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-colors group text-right sm:text-right"
            >
              <span className="text-xs text-slate-500 flex items-center justify-end gap-1 mb-1">
                <span>{dict.nextArticle}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-8">
              {dict.relatedArticles}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <article
                  key={rPost.slug}
                  className="flex flex-col rounded-xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/30 p-5 transition-all group"
                >
                  <span className="text-[11px] font-semibold text-amber-400 mb-2">
                    {rPost.category}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    <Link href={`/${currentLang}/blog/${rPost.slug}`}>
                      {rPost.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 flex-grow">
                    {rPost.excerpt}
                  </p>
                  <Link
                    href={`/${currentLang}/blog/${rPost.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 mt-auto"
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
          <div className="rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-slate-900 border border-amber-500/30 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {isEn
                  ? "Need Engineering Guidance for Your Project?"
                  : "Butuh Konsultasi Teknis untuk Proyek Anda?"}
              </h3>
              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                {isEn
                  ? "Connect with PT Kaha Sukses Mandiri to discuss paving specifications, load calculations, and verified quotations."
                  : "Hubungi PT Kaha Sukses Mandiri untuk konsultasi spesifikasi mutu paving block K-300 hingga K-350 mesin full otomatis hidrolik."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href={`/${currentLang}/products`}
                className="px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-md min-h-[44px] flex items-center justify-center"
              >
                {isEn ? "View Products" : "Lihat Produk"}
              </Link>
              <a
                href="https://wa.me/628119753030"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-slate-800 text-white font-bold text-sm hover:bg-slate-700 transition-colors border border-slate-700 flex items-center gap-2 min-h-[44px] justify-center"
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
