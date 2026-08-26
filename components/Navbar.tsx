"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { dictionaries, Locale } from "@/lib/dictionary";
import { usePathname } from "next/navigation";

export default function Navbar({ lang }: { lang: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const dict = dictionaries[lang].nav;
  const pathname = usePathname();

  const links = [
    { name: dict.home, href: `/${lang}` },
    { name: dict.about, href: `/${lang}/about` },
    { name: dict.products, href: `/${lang}/products` },
    { name: dict.projects, href: `/${lang}/projects` },
    { name: dict.contact, href: `/${lang}/contact` },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href={`/${lang}`} className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold text-[#0B2447] tracking-tight">KAHA BLOCK</div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#D90429]"
                      : "text-[#0B2447] hover:text-[#D90429]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <LanguageSwitcher currentLang={lang} />
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0B2447] hover:text-[#D90429] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-[#FFC300]/20 text-[#D90429]"
                      : "text-[#0B2447] hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="px-3 py-2">
              <LanguageSwitcher currentLang={lang} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
