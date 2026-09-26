"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const GOOGLE_ADS_ID = "AW-18386888743";
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
