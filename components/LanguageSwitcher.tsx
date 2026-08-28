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

    // Check if the pathname starts with the current lang segment exactly
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
      className={`inline-flex items-center space-x-1 bg-gray-100/80 p-0.5 sm:p-1 rounded-lg ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => switchLanguage("id")}
        aria-pressed={currentLang === "id"}
        aria-label="Switch to Indonesian language"
        className={`px-2 sm:px-2.5 py-1 text-xs sm:text-sm rounded-md font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] min-w-[32px] min-h-[32px] sm:min-h-[36px] flex items-center justify-center ${
          currentLang === "id"
            ? "bg-[#0B2447] text-[#FFC300] shadow-xs"
            : "text-[#0B2447] hover:bg-white/60"
        }`}
      >
        ID
      </button>
      <span className="text-gray-300 text-xs select-none" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => switchLanguage("en")}
        aria-pressed={currentLang === "en"}
        aria-label="Switch to English language"
        className={`px-2 sm:px-2.5 py-1 text-xs sm:text-sm rounded-md font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] min-w-[32px] min-h-[32px] sm:min-h-[36px] flex items-center justify-center ${
          currentLang === "en"
            ? "bg-[#0B2447] text-[#FFC300] shadow-xs"
            : "text-[#0B2447] hover:bg-white/60"
        }`}
      >
        EN
      </button>
    </div>
  );
}

