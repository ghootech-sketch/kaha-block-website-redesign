/**
 * Centralized Site URL Configuration
 * Single source of truth for the canonical production origin.
 * Prevents Vercel preview URLs from ever becoming canonical or indexable URLs.
 */

const DEFAULT_SITE_URL = "https://kahablock.com";

function resolveSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!envUrl) {
    return DEFAULT_SITE_URL;
  }

  // Never allow a *.vercel.app preview URL to become the canonical production site URL
  if (envUrl.includes(".vercel.app")) {
    return DEFAULT_SITE_URL;
  }

  try {
    const parsed = new URL(envUrl);
    // Ensure protocol is http or https
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return DEFAULT_SITE_URL;
    }
    // Remove trailing slash and normalize to origin
    return parsed.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE_URL = resolveSiteUrl();
