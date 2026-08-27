"use client";


import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/lib/dictionary";

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
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
    <div className="flex items-center space-x-1" role="group" aria-label="Language selection">
      <button
        onClick={() => switchLanguage("id")}
        aria-pressed={currentLang === "id"}
        aria-label="Switch to Indonesian language"
        className={`px-2.5 py-1 text-sm rounded-md font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] ${
          currentLang === "id"
            ? "bg-[#0B2447] text-[#FFC300]"
            : "text-[#0B2447] hover:bg-gray-100"
        }`}
      >
        ID
      </button>
      <span className="text-gray-300 select-none">|</span>
      <button
        onClick={() => switchLanguage("en")}
        aria-pressed={currentLang === "en"}
        aria-label="Switch to English language"
        className={`px-2.5 py-1 text-sm rounded-md font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] ${
          currentLang === "en"
            ? "bg-[#0B2447] text-[#FFC300]"
            : "text-[#0B2447] hover:bg-gray-100"
        }`}
      >
        EN
      </button>
    </div>
  );
}
