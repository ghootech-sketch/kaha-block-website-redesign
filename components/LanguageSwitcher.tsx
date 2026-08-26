"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/lib/dictionary";

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (lang: Locale) => {
    if (currentLang === lang) return;
    const newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => switchLanguage("id")}
        className={`px-2 py-1 text-sm rounded font-medium transition-colors ${
          currentLang === "id"
            ? "bg-[#0B2447] text-white"
            : "text-[#0B2447] hover:bg-gray-100"
        }`}
      >
        ID
      </button>
      <button
        onClick={() => switchLanguage("en")}
        className={`px-2 py-1 text-sm rounded font-medium transition-colors ${
          currentLang === "en"
            ? "bg-[#0B2447] text-white"
            : "text-[#0B2447] hover:bg-gray-100"
        }`}
      >
        EN
      </button>
    </div>
  );
}
