import { BlogPost } from "../blog-types";
import { Locale } from "../dictionary";

import { article1Id, article1En } from "./article-1";
import { article2Id, article2En } from "./article-2";
import { article3Id, article3En } from "./article-3";
import { article4Id, article4En } from "./article-4";
import { article5Id, article5En } from "./article-5";
import { article6Id, article6En } from "./article-6";
import { article7Id, article7En } from "./article-7";
import { article8Id, article8En } from "./article-8";
import { article9Id, article9En } from "./article-9";
import { article10Id, article10En } from "./article-10";
import { article11Id, article11En } from "./article-11";
import { article12Id, article12En } from "./article-12";

export const allArticlesId: BlogPost[] = [
  article1Id,
  article2Id,
  article3Id,
  article4Id,
  article5Id,
  article6Id,
  article7Id,
  article8Id,
  article9Id,
  article10Id,
  article11Id,
  article12Id,
];

export const allArticlesEn: BlogPost[] = [
  article1En,
  article2En,
  article3En,
  article4En,
  article5En,
  article6En,
  article7En,
  article8En,
  article9En,
  article10En,
  article11En,
  article12En,
];

export function getAllBlogPosts(lang: Locale): BlogPost[] {
  return lang === "id" ? allArticlesId : allArticlesEn;
}

export function getBlogPostBySlug(slug: string, lang: Locale): BlogPost | undefined {
  const posts = getAllBlogPosts(lang);
  return posts.find((p) => p.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, lang: Locale, limit = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug, lang);
  const allPosts = getAllBlogPosts(lang);

  if (!currentPost) {
    return allPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);
  }

  // Find posts defined in relatedSlugs
  const explicitRelated = allPosts.filter((p) => currentPost.relatedSlugs.includes(p.slug));

  if (explicitRelated.length >= limit) {
    return explicitRelated.slice(0, limit);
  }

  // Fallback: add other posts with same category or any other posts
  const others = allPosts.filter(
    (p) => p.slug !== currentSlug && !explicitRelated.some((er) => er.slug === p.slug)
  );

  return [...explicitRelated, ...others].slice(0, limit);
}

export function getAllBlogSlugs(): string[] {
  return allArticlesId.map((p) => p.slug);
}

export function calculatePostWordCount(post: BlogPost): number {
  let text = `${post.title} ${post.excerpt} ${post.intro.join(" ")} `;
  for (const s of post.sections) {
    text += `${s.heading} ${s.paragraphs.join(" ")} `;
    if (s.subsections) {
      for (const sub of s.subsections) {
        text += `${sub.heading} ${sub.paragraphs.join(" ")} `;
        if (sub.list?.items) {
          text += `${sub.list.items.join(" ")} `;
        }
      }
    }
    if (s.list?.items) {
      text += `${s.list.items.join(" ")} `;
    }
    if (s.table) {
      text += `${s.table.headers.join(" ")} ${s.table.rows.map((r) => r.join(" ")).join(" ")} `;
    }
    if (s.callout) {
      text += `${s.callout.title} ${s.callout.text} `;
    }
  }
  text += `${post.summary.title} ${post.summary.points.join(" ")} `;
  text += `${post.faq.title} ${post.faq.items.map((i) => `${i.question} ${i.answer}`).join(" ")} `;

  const words = text.trim().split(/\s+/).filter((w) => w.length > 0);
  return words.length;
}
