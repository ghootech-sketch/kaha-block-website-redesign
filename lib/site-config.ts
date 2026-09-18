/**
 * Centralized Site URL Configuration
 * Single source of truth for the canonical production origin.
 * Strictly guarantees that the canonical production origin is https://kahablock.com.
 * Only 'kahablock.com' and 'www.kahablock.com' are accepted hostnames, both
 * normalizing strictly to 'https://kahablock.com' with HTTPS protocol.
 * All other inputs (arbitrary domains, *.vercel.app preview URLs, invalid URLs, empty strings)
 * safely fall back to the canonical production origin.
 */

const CANONICAL_ORIGIN = "https://kahablock.com";
const ALLOWED_HOSTNAMES = new Set(["kahablock.com", "www.kahablock.com"]);

function resolveSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!envUrl) {
    return CANONICAL_ORIGIN;
  }

  // Reject any *.vercel.app preview URL early
  if (envUrl.includes(".vercel.app")) {
    return CANONICAL_ORIGIN;
  }

  try {
    const urlToParse = envUrl.includes("://") ? envUrl : `https://${envUrl}`;
    const parsed = new URL(urlToParse);
    const hostname = parsed.hostname.toLowerCase();

    // Only allow verified production hostnames: kahablock.com and www.kahablock.com
    // Both normalize strictly to the canonical HTTPS origin: https://kahablock.com
    if (ALLOWED_HOSTNAMES.has(hostname)) {
      return CANONICAL_ORIGIN;
    }

    // All unrelated domains fall back to the canonical production origin
    return CANONICAL_ORIGIN;
  } catch {
    return CANONICAL_ORIGIN;
  }
}

export const SITE_URL = resolveSiteUrl();
