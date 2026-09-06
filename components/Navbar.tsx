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
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomepage = pathname === `/${lang}` || pathname === `/${lang}/`;

  useEffect(() => {
    if (!isHomepage) {
      setIsScrolled(false);
      return;
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

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
      className={
        isHomepage
          ? `fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${
              isScrolled
                ? "bg-black/80 backdrop-blur-none border-b border-white/10 shadow-md"
                : "bg-transparent backdrop-blur-none border-b border-white/[0.05] shadow-none"
            }`
          : "bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs font-sans"
      }
    >
      <div
        className={
          isHomepage
            ? "max-w-[1500px] mx-auto px-6 sm:px-8 xl:px-12"
            : "max-w-7xl mx-auto px-3 sm:px-6 lg:px-8"
        }
      >
        <div
          className={`flex items-center justify-between ${
            isHomepage ? "h-20 lg:h-[104px]" : "h-16 sm:h-20"
          }`}
        >
          {/* Brand Identity */}
          <div className="flex items-center min-w-0 pr-1 sm:pr-2">
            <Link
              href={`/${lang}`}
              aria-label={lang === "en" ? "KAHA BLOCK - Home" : "KAHA BLOCK - Beranda"}
              className="flex-shrink-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded py-2 min-h-[44px]"
            >
              <div
                className={
                  isHomepage
                    ? "relative h-[42px] sm:h-[46px] lg:h-[50px] w-[160px] sm:w-[180px] lg:w-[200px]"
                    : "relative h-[38px] sm:h-[44px] md:h-[48px] lg:h-[52px] w-[150px] sm:w-[170px] md:w-[195px] lg:w-[215px]"
                }
              >
                <Image
                  src={isHomepage ? "/footer-logo.png" : "/navbar-logo.png"}
                  alt="Kaha Block - PT Kaha Sukses Mandiri"
                  fill
                  className="object-contain object-left"
                  priority
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 180px, 200px"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            <div className="flex items-center gap-7 xl:gap-9">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      isHomepage
                        ? `relative inline-flex items-center text-sm lg:text-[15px] font-medium tracking-wide transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded min-h-[44px] ${
                            isActive
                              ? "text-accent drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] after:content-[''] after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-accent after:shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                              : "text-white/90 hover:text-accent drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
                          }`
                        : `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded min-h-[44px] ${
                            isActive
                              ? "border-primary text-primary"
                              : "border-transparent text-slate-800 hover:border-accent hover:text-primary"
                          }`
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right-Side Separators, Language Switcher, and WhatsApp CTA */}
            {isHomepage ? (
              <div className="flex items-center space-x-5 xl:space-x-6">
                {/* Subtle vertical separator before Language Switcher */}
                <div className="h-9 w-px bg-white/15" aria-hidden="true" />

                <LanguageSwitcher
                  currentLang={lang}
                  variant="dark"
                />

                {/* Subtle vertical separator before WhatsApp CTA */}
                <div className="h-9 w-px bg-white/15" aria-hidden="true" />

                <a
                  href={dict.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    lang === "en"
                      ? "Contact WhatsApp Kaha Block"
                      : "Hubungi WhatsApp Kaha Block"
                  }
                  className="inline-flex items-center justify-center px-7 h-[54px] rounded-[16px] text-sm font-bold tracking-wider uppercase transition-all bg-[#B22222] hover:bg-[#991B1B] text-white border border-red-400/20 shadow-[0_4px_16px_rgba(178,34,34,0.35)] hover:shadow-[0_6px_20px_rgba(178,34,34,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading"
                >
                  <Phone className="w-4 h-4 mr-2.5 text-white" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            ) : (
              <div className="flex items-center space-x-3 lg:space-x-4 pl-4 border-l border-gray-200">
                <LanguageSwitcher
                  currentLang={lang}
                  variant="default"
                />
                <a
                  href={dict.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    lang === "en"
                      ? "Contact WhatsApp Kaha Block"
                      : "Hubungi WhatsApp Kaha Block"
                  }
                  className="inline-flex items-center justify-center px-4 lg:px-5 py-2.5 rounded-xs text-xs sm:text-sm font-bold tracking-wider uppercase transition-all bg-primary hover:bg-primary-hover text-white shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px] font-heading"
                >
                  <Phone className="w-4 h-4 mr-2 text-white" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            )}
          </div>

          {/* Mobile Actions (Language Switcher + Hamburger with 44px min touch targets) */}
          <div className="flex items-center lg:hidden space-x-1.5 sm:space-x-2 flex-shrink-0">
            <LanguageSwitcher
              currentLang={lang}
              variant={isHomepage ? "dark" : "default"}
            />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] p-2 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isHomepage
                  ? "text-white hover:text-accent hover:bg-white/10 active:bg-white/20"
                  : "text-slate-800 hover:text-primary hover:bg-surface active:bg-stone-200"
              }`}
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
          className={`lg:hidden shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 ${
            isHomepage
              ? "border-t border-white/10 bg-black/90 backdrop-blur-none"
              : "border-t border-gray-100 bg-surface-card"
          }`}
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
                    isHomepage
                      ? isActive
                        ? "bg-accent/15 text-accent border-l-4 border-accent font-bold"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                      : isActive
                      ? "bg-red-50 text-primary border-l-4 border-primary"
                      : "text-slate-800 hover:bg-surface hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Menu WhatsApp CTA */}
            <div
              className={`pt-4 mt-3 border-t ${
                isHomepage ? "border-white/10" : "border-gray-100"
              }`}
            >
              <a
                href={dict.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full min-h-[48px] flex items-center justify-center px-5 py-3.5 rounded-xs text-sm font-bold tracking-wider uppercase transition-all bg-primary hover:bg-primary-hover text-white shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading"
              >
                <Phone className="w-5 h-5 mr-2.5 text-white" aria-hidden="true" />
                {dict.contact.whatsapp}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
