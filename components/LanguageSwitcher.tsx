"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/lib/dictionary";

export default function LanguageSwitcher({
  currentLang,
  className = "",
}: {
  currentLang: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (lang: Locale) => {
    if (currentLang === lang) return;

    let newPath = pathname || "/";
    if (newPath === `/${currentLang}`) {
      newPath = `/${lang}`;
    } else if (newPath.startsWith(`/${currentLang}/`)) {
      newPath = newPath.replace(`/${currentLang}/`, `/${lang}/`);
    } else {
      newPath = `/${lang}${newPath}`;
    }

    router.push(newPath);
  };

  return (
    <div
      className={`inline-flex items-center space-x-1 bg-gray-100/90 p-1 rounded-xl ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => switchLanguage("id")}
        aria-pressed={currentLang === "id"}
        aria-label="Switch to Indonesian language"
        className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] min-w-[44px] min-h-[44px] flex items-center justify-center ${
          currentLang === "id"
            ? "bg-[#0B2447] text-[#FFC300] shadow-sm"
            : "text-[#0B2447] hover:bg-white/80 active:bg-white"
        }`}
      >
        ID
      </button>
      <span className="text-gray-400 text-xs select-none px-0.5" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => switchLanguage("en")}
        aria-pressed={currentLang === "en"}
        aria-label="Switch to English language"
        className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] min-w-[44px] min-h-[44px] flex items-center justify-center ${
          currentLang === "en"
            ? "bg-[#0B2447] text-[#FFC300] shadow-sm"
            : "text-[#0B2447] hover:bg-white/80 active:bg-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
