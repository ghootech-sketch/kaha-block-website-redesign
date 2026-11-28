"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function GoogleAdsTag() {
  const [isAllowedHost, setIsAllowedHost] = useState(false);
  useEffect(() => {
    setIsAllowedHost(["kahablock.com", "www.kahablock.com"].includes(window.location.hostname.toLowerCase()));
  }, []);
  if (!isAllowedHost) return null;
  return (
    <Script
      id="google-tag-manager-src"
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtm.js?id=GTM-522R4GLC"
    />
  );
}
