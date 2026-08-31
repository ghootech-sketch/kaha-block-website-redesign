"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/dictionary";

export default function LanguageSwitcher({
  currentLang,
  className = "",
}: {
  currentLang: Locale;
  className?: string;
}) {
  const pathname = usePathname();

  const getTargetUrl = (targetLang: Locale) => {
    if (currentLang === targetLang) return pathname || `/${targetLang}`;

    const currentPath = pathname || "/";
    if (currentPath === `/${currentLang}`) {
      return `/${targetLang}`;
    } else if (currentPath.startsWith(`/${currentLang}/`)) {
      return currentPath.replace(`/${currentLang}/`, `/${targetLang}/`);
    } else {
      return `/${targetLang}${currentPath}`;
    }
  };

  return (
    <div
      className={`inline-flex items-center space-x-1 bg-gray-100/90 p-1 rounded-xl ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <Link
        href={getTargetUrl("id")}
        aria-current={currentLang === "id" ? "true" : undefined}
        aria-label="Switch to Indonesian language"
        className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] min-w-[44px] min-h-[44px] flex items-center justify-center ${
          currentLang === "id"
            ? "bg-[#0B2447] text-[#FFC300] shadow-sm"
            : "text-[#0B2447] hover:bg-white/80 active:bg-white"
        }`}
      >
        ID
      </Link>
      <span className="text-gray-400 text-xs select-none px-0.5" aria-hidden="true">
        /
      </span>
      <Link
        href={getTargetUrl("en")}
        aria-current={currentLang === "en" ? "true" : undefined}
        aria-label="Switch to English language"
        className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] min-w-[44px] min-h-[44px] flex items-center justify-center ${
          currentLang === "en"
            ? "bg-[#0B2447] text-[#FFC300] shadow-sm"
            : "text-[#0B2447] hover:bg-white/80 active:bg-white"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
