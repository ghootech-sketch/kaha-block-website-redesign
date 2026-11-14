"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const GOOGLE_TAG_MANAGER_ID = "GTM-522R4GLC";
const GOOGLE_ANALYTICS_ID = "G-MWEEEMHL64";
const ALLOWED_HOSTNAMES = ["kahablock.com", "www.kahablock.com"];

export default function GoogleAdsTag() {
  const [isAllowedHost, setIsAllowedHost] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname.toLowerCase();
      if (ALLOWED_HOSTNAMES.includes(hostname)) {
        setIsAllowedHost(true);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hostname = window.location.hostname.toLowerCase();
    if (!ALLOWED_HOSTNAMES.includes(hostname)) return;

    const processedEvents = new WeakSet<Event>();
    let lastTrackedTime = 0;
    let lastTrackedHref = "";

    const handleWhatsAppClick = (event: MouseEvent) => {
      if (processedEvents.has(event)) return;

      const target = event.target as Element | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href") || anchor.href || "";
      if (!rawHref) return;

      let isWaLink = false;
      let whatsappUrl: URL | null = null;
      try {
        whatsappUrl = new URL(anchor.href, window.location.href);
        isWaLink =
          whatsappUrl.hostname === "wa.me" || whatsappUrl.hostname.endsWith(".wa.me");
      } catch {
        isWaLink = rawHref.startsWith("https://wa.me/") || rawHref.startsWith("http://wa.me/");
      }

      if (!isWaLink) return;

      processedEvents.add(event);

      const now = Date.now();
      if (now - lastTrackedTime < 500 && lastTrackedHref === rawHref) {
        return;
      }
      lastTrackedTime = now;
      lastTrackedHref = rawHref;

      try {
        const linkText =
          anchor.textContent?.replace(/\s+/g, " ").trim().slice(0, 120) || "WhatsApp";
        const whatsappPhone =
          whatsappUrl?.pathname.replace(/\D/g, "") ||
          rawHref.replace(/^https?:\/\/wa\.me\//, "").split("?")[0].replace(/\D/g, "");

        const eventPayload = {
          page_path: window.location.pathname,
          link_url: rawHref,
          link_text: linkText,
          cta_id: anchor.id || "unlabeled_whatsapp_link",
          whatsapp_phone: whatsappPhone,
        };

        const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
        if (typeof gtag === "function") {
          // Keep GA4 measurement unchanged.
          gtag("event", "whatsapp_click", {
            send_to: GOOGLE_ANALYTICS_ID,
            ...eventPayload,
          });
        }

        // Send the same custom event to the new Kaha Block Google tag/GTM container.
        // The Google Ads conversion action can be attached to this event in the new account.
        const dataLayer = (
          window as unknown as { dataLayer?: Array<Record<string, unknown>> }
        ).dataLayer;
        if (Array.isArray(dataLayer)) {
          dataLayer.push({
            event: "whatsapp_click",
            ...eventPayload,
          });
        }
      } catch {
        // Do not block navigation if Google measurement is unavailable.
      }
    };

    document.addEventListener("click", handleWhatsAppClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleWhatsAppClick, { capture: true });
    };
  }, []);

  if (!isAllowedHost) {
    return null;
  }

  return (
    <>
      <Script
        id="google-tag-manager-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${GOOGLE_TAG_MANAGER_ID}`}
      />
      <Script
        id="google-measurement-inline"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            if (!window.__kaha_google_tag_initialized) {
              window.__kaha_google_tag_initialized = true;
              gtag('js', new Date());

              function initGA4() {
                if (window.__ga4_tag_initialized) return;
                window.__ga4_tag_initialized = true;
                gtag('config', '${GOOGLE_ANALYTICS_ID}');
              }

              function scheduleGA4() {
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(function() { initGA4(); }, { timeout: 3000 });
                } else {
                  setTimeout(initGA4, 1500);
                }
              }

              if (document.readyState === 'complete') {
                scheduleGA4();
              } else {
                window.addEventListener('load', scheduleGA4, { once: true });
              }
            }
          `,
        }}
      />
    </>
  );
}
