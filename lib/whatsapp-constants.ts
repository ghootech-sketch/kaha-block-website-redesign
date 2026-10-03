/**
 * Centralized WhatsApp constants and source marker helpers
 */

export const WEBSITE_SOURCE_MARKER = "[Dari Website Kaha Block]";
export const WEBSITE_SOURCE_MARKER_ID = "[Dari Website Kaha Block]";
export const WEBSITE_SOURCE_MARKER_EN = "[From Kaha Block Website]";

export function getWebsiteSourceMarker(lang: "id" | "en" = "id"): string {
  return lang === "en" ? WEBSITE_SOURCE_MARKER_EN : WEBSITE_SOURCE_MARKER_ID;
}

export function appendWebsiteSourceMarker(
  message: string,
  lang: "id" | "en" = "id"
): string {
  const marker = getWebsiteSourceMarker(lang);
  if (
    message.includes(WEBSITE_SOURCE_MARKER_ID) ||
    message.includes(WEBSITE_SOURCE_MARKER_EN)
  ) {
    return message;
  }
  const trimmed = message.trim();
  return `${trimmed}\n\n${marker}`;
}
