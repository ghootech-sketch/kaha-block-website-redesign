"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { dictionaries, Locale } from "@/lib/dictionary";
import { Menu, X, Phone } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ lang }: { lang: Locale }) {
  const dict = dictionaries[lang];
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const links = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/products`, label: dict.nav.products },
    { href: `/${lang}/projects`, label: dict.nav.projects },
    { href: `/${lang}/blog`, label: dict.nav.blog },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  return (
    <nav
      aria-label={lang === "en" ? "Main Navigation" : "Navigasi Utama"}
      className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs font-sans"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Identity */}
          <div className="flex items-center min-w-0 pr-1 sm:pr-2">
            <Link
              href={`/${lang}`}
              aria-label={lang === "en" ? "KAHA BLOCK - Home" : "KAHA BLOCK - Beranda"}
              className="flex-shrink-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded py-2 min-h-[44px]"
            >
              <div className="relative h-[36px] sm:h-[40px] md:h-[44px] lg:h-[48px] w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]">
                <Image
                  src="/navbar-logo.png"
                  alt="Kaha Block - PT Kaha Sukses Mandiri"
                  fill
                  className="object-contain object-left"
                  priority
                  sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 180px, 200px"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div className="flex space-x-4 lg:space-x-6">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded min-h-[44px] ${
                      isActive
                        ? "border-[#D90429] text-[#D90429]"
                        : "border-transparent text-[#0B2447] hover:border-[#FFC300] hover:text-[#0B2447]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center space-x-3 lg:space-x-4 border-l border-gray-200 pl-4">
              <LanguageSwitcher currentLang={lang} />
              <a
                href={dict.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  lang === "en"
                    ? "Contact WhatsApp Kaha Block"
                    : "Hubungi WhatsApp Kaha Block"
                }
                className="inline-flex items-center justify-center bg-[#D90429] text-white px-4 lg:px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#0B2447] hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] min-h-[44px]"
              >
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile Actions (Language Switcher + Hamburger with 44px min touch targets) */}
          <div className="flex items-center md:hidden space-x-1.5 sm:space-x-2 flex-shrink-0">
            <LanguageSwitcher currentLang={lang} />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] p-2 rounded-xl text-[#0B2447] hover:text-[#D90429] hover:bg-gray-100 active:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={
                isOpen
                  ? lang === "en"
                    ? "Close menu"
                    : "Tutup menu"
                  : lang === "en"
                  ? "Open menu"
                  : "Buka menu"
              }
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="md:hidden border-t border-gray-100 bg-white shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
          id="mobile-menu"
        >
          <div className="px-4 pt-3 pb-5 space-y-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center min-h-[44px] px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#D90429] border-l-4 border-[#D90429]"
                      : "text-[#0B2447] hover:bg-gray-50 hover:text-[#D90429]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Menu WhatsApp CTA */}
            <div className="pt-4 mt-3 border-t border-gray-100">
              <a
                href={dict.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full min-h-[48px] flex items-center justify-center bg-[#D90429] text-white px-5 py-3.5 rounded-full text-base font-bold hover:bg-[#0B2447] transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
              >
                <Phone className="w-5 h-5 mr-2.5" aria-hidden="true" />
                {dict.contact.whatsapp}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
