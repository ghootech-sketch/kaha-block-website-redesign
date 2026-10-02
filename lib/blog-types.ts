import { Locale } from "./dictionary";

export interface BlogFaqItem {
  question: string;
  answer: string;
}

export interface BlogTable {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface BlogCallout {
  type: "info" | "tip" | "warning";
  title: string;
  text: string;
}

export interface BlogSubsection {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: {
    title?: string;
    items: string[];
  };
}

export interface BlogSection {
  id: string;
  heading: string;
  paragraphs: string[];
  subsections?: BlogSubsection[];
  list?: {
    title?: string;
    items: string[];
  };
  table?: BlogTable;
  callout?: BlogCallout;
}

export interface BlogPost {
  slug: string;
  locale: Locale;
  title: string;
  excerpt: string;
  category: string;
  categorySlug:
    | "guide"
    | "spec"
    | "standards"
    | "installation"
    | "technical"
    | "industrial"
    | "application"
    | "sustainability";
  publishedAt: string; // ISO date string e.g. "2025-01-20"
  updatedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  featured?: boolean;
  intro: string[];
  sections: BlogSection[];
  summary: {
    title: string;
    points: string[];
  };
  faq: {
    title: string;
    items: BlogFaqItem[];
  };
  relatedSlugs: string[];
}
