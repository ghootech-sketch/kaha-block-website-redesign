"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const GOOGLE_ADS_ID = "AW-18454428608";
const WHATSAPP_CONVERSION_SEND_TO = "AW-18454428608/I2dmCOzwrokdEMD34N9E";
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
        const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
        if (typeof gtag === "function") {
          const linkText =
            anchor.textContent?.replace(/\s+/g, " ").trim().slice(0, 120) || "WhatsApp";
          const whatsappPhone =
            whatsappUrl?.pathname.replace(/\D/g, "") ||
            rawHref.replace(/^https?:\/\/wa\.me\//, "").split("?")[0].replace(/\D/g, "");

          // GA4 diagnostic event: this measures a click toward WhatsApp, not a sent message.
          gtag("event", "whatsapp_click", {
            send_to: GOOGLE_ANALYTICS_ID,
            page_path: window.location.pathname,
            link_url: rawHref,
            link_text: linkText,
            cta_id: anchor.id || "unlabeled_whatsapp_link",
            whatsapp_phone: whatsappPhone,
          });

          // Google Ads conversion remains a click-to-WhatsApp action.
          gtag("event", "conversion", {
            send_to: WHATSAPP_CONVERSION_SEND_TO,
          });
        }
      } catch {
        // Do not block navigation if gtag is unavailable
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
        id="google-ads-gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      />
      <Script
        id="google-ads-gtag-inline"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            if (!window.__google_ads_tag_initialized) {
              window.__google_ads_tag_initialized = true;
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ADS_ID}');

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
