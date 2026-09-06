"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/dictionary";

export default function LanguageSwitcher({
  currentLang,
  className = "",
  variant = "default",
}: {
  currentLang: Locale;
  className?: string;
  variant?: "default" | "dark";
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

  const isDark = variant === "dark";

  return (
    <div
      className={`inline-flex items-center space-x-1 p-1 rounded-xl ${
        isDark
          ? "bg-white/[0.08] backdrop-blur-md border border-white/10"
          : "bg-surface"
      } ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <Link
        href={getTargetUrl("id")}
        aria-current={currentLang === "id" ? "true" : undefined}
        aria-label="Switch to Indonesian language"
        className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-w-[44px] min-h-[44px] flex items-center justify-center ${
          currentLang === "id"
            ? isDark
              ? "bg-accent text-dark shadow-sm"
              : "bg-secondary text-accent shadow-sm"
            : isDark
            ? "text-white/80 hover:bg-white/15 hover:text-white active:bg-white/20"
            : "text-slate-800 hover:bg-white/80 active:bg-white"
        }`}
      >
        ID
      </Link>
      <span
        className={`text-xs select-none px-0.5 ${
          isDark ? "text-white/30" : "text-gray-400"
        }`}
        aria-hidden="true"
      >
        /
      </span>
      <Link
        href={getTargetUrl("en")}
        aria-current={currentLang === "en" ? "true" : undefined}
        aria-label="Switch to English language"
        className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-w-[44px] min-h-[44px] flex items-center justify-center ${
          currentLang === "en"
            ? isDark
              ? "bg-accent text-dark shadow-sm"
              : "bg-secondary text-accent shadow-sm"
            : isDark
            ? "text-white/80 hover:bg-white/15 hover:text-white active:bg-white/20"
            : "text-slate-800 hover:bg-white/80 active:bg-white"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
