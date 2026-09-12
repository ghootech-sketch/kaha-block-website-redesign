"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { dictionaries, Locale } from "@/lib/dictionary";
import { BUSINESS_FACTS } from "@/lib/business-facts";
import { Menu, X, Phone, ChevronDown, MessageCircle } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ lang }: { lang: Locale }) {
  const dict = dictionaries[lang];
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [desktopProjectsOpen, setDesktopProjectsOpen] = useState(false);
  const [desktopWhatsappOpen, setDesktopWhatsappOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const hero = document.querySelector("[data-navbar-hero]");
          const navbarHeight = navRef.current?.getBoundingClientRect().height ?? 80;
          if (hero) {
            const rect = hero.getBoundingClientRect();
            setIsScrolled(rect.bottom <= navbarHeight);
          } else {
            setIsScrolled(window.scrollY > 80);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setMobileProjectsOpen(false);
        setDesktopProjectsOpen(false);
        setDesktopWhatsappOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const links = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/products`, label: dict.nav.products },
    { 
      href: `/${lang}/projects`, 
      label: dict.nav.projects,
      subLinks: [
        { href: `/${lang}/projects`, label: dict.nav.projectsInstall },
        { href: `/${lang}/projects/production`, label: dict.nav.projectsProduction }
      ]
    },
    { href: `/${lang}/blog`, label: dict.nav.blog },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  return (
    <nav
      ref={navRef}
      aria-label={lang === "en" ? "Main Navigation" : "Navigasi Utama"}
      className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-none border-b border-white/10 shadow-md"
          : "bg-transparent backdrop-blur-none border-b border-white/[0.05] shadow-none"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20 lg:h-[104px]">
          {/* Brand Identity */}
          <div className="flex items-center min-w-0 pr-1 sm:pr-2">
            <Link
              href={`/${lang}`}
              aria-label={lang === "en" ? "KAHA BLOCK - Home" : "KAHA BLOCK - Beranda"}
              className="flex-shrink-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded py-2 min-h-[44px]"
            >
              <div className="relative h-[42px] sm:h-[46px] lg:h-[50px] w-[160px] sm:w-[180px] lg:w-[200px]">
                <Image
                  src="/footer-logo.png"
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
                // Determine if a link is active based on exact or prefix matching (for projects)
                let isActive = pathname === link.href;
                if (link.subLinks) {
                  isActive = pathname.startsWith(`/${lang}/projects`);
                }

                if (link.subLinks) {
                  return (
                    <div 
                      key={link.href} 
                      className="relative"
                      onMouseEnter={() => setDesktopProjectsOpen(true)}
                      onMouseLeave={() => setDesktopProjectsOpen(false)}
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                          setDesktopProjectsOpen(false);
                        }
                      }}
                    >
                      <button
                        className={`relative inline-flex items-center text-sm lg:text-[15px] font-medium tracking-wide transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded min-h-[44px] ${
                          isActive
                            ? "text-accent drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] after:content-[''] after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-accent after:shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                            : "text-white/90 hover:text-accent drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
                        }`}
                        aria-expanded={desktopProjectsOpen}
                        aria-haspopup="menu"
                        aria-controls="desktop-projects-menu"
                        onClick={() => setDesktopProjectsOpen(!desktopProjectsOpen)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setDesktopProjectsOpen(!desktopProjectsOpen);
                          } else if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setDesktopProjectsOpen(true);
                            // Focus first submenu item on next tick
                            setTimeout(() => {
                              const menu = document.getElementById("desktop-projects-menu");
                              const firstLink = menu?.querySelector("a");
                              firstLink?.focus();
                            }, 0);
                          }
                        }}
                      >
                        {link.label}
                        <ChevronDown className={`ml-1.5 h-4 w-4 transition-transform duration-200 ${desktopProjectsOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                      </button>
                      <div 
                        id="desktop-projects-menu"
                        role="menu"
                        className={`absolute left-0 top-full mt-2 w-72 rounded-md shadow-lg bg-[#0F0F0F] border border-[#D4AF37]/30 transition-all duration-200 z-50 ${
                          desktopProjectsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                      >
                        <div className="py-2 flex flex-col">
                          {link.subLinks.map((subLink) => {
                            const isSubActive = pathname === subLink.href;
                            return (
                              <Link
                                key={subLink.href}
                                href={subLink.href}
                                role="menuitem"
                                aria-current={isSubActive ? "page" : undefined}
                                className={`block px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                                  isSubActive ? "text-[#D4AF37] bg-white/5" : "text-[#F8F8FF] hover:text-[#D4AF37] hover:bg-white/5 focus-visible:bg-white/5"
                                }`}
                                onClick={() => {
                                  setDesktopProjectsOpen(false);
                                  setIsOpen(false);
                                }}
                              >
                                {subLink.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative inline-flex items-center text-sm lg:text-[15px] font-medium tracking-wide transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded min-h-[44px] ${
                      isActive
                        ? "text-accent drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] after:content-[''] after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-accent after:shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                        : "text-white/90 hover:text-accent drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right-Side Separators, Language Switcher, and WhatsApp CTA */}
            <div className="flex items-center space-x-5 xl:space-x-6">
              {/* Subtle vertical separator before Language Switcher */}
              <div className="h-9 w-px bg-white/15" aria-hidden="true" />

              <LanguageSwitcher
                currentLang={lang}
                variant="dark"
              />

              {/* Subtle vertical separator before WhatsApp CTA */}
              <div className="h-9 w-px bg-white/15" aria-hidden="true" />

              <div 
                className="relative"
                onMouseEnter={() => setDesktopWhatsappOpen(true)}
                onMouseLeave={() => setDesktopWhatsappOpen(false)}
              >
                <button
                  onClick={() => setDesktopWhatsappOpen(!desktopWhatsappOpen)}
                  aria-expanded={desktopWhatsappOpen}
                  aria-label={
                    lang === "en"
                      ? "Contact WhatsApp Kaha Block"
                      : "Hubungi WhatsApp Kaha Block"
                  }
                  className={`inline-flex items-center justify-center px-7 h-[54px] rounded-[16px] text-sm font-bold tracking-wider uppercase transition-all border border-red-400/20 shadow-[0_4px_16px_rgba(178,34,34,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading ${
                    desktopWhatsappOpen 
                      ? "bg-[#991B1B] text-white shadow-[0_6px_20px_rgba(178,34,34,0.45)]" 
                      : "bg-[#B22222] hover:bg-[#991B1B] text-white hover:shadow-[0_6px_20px_rgba(178,34,34,0.45)]"
                  }`}
                >
                  <Phone className="w-4 h-4 mr-2.5 text-white" aria-hidden="true" />
                  WhatsApp
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${desktopWhatsappOpen ? 'rotate-180' : ''}`} />
                </button>

                <div 
                  className={`absolute right-0 top-full mt-2 w-64 rounded-xl shadow-xl bg-[#0F0F0F] border border-[#D4AF37]/30 transition-all duration-200 z-50 overflow-hidden ${
                    desktopWhatsappOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="py-2 flex flex-col">
                    <a
                      href={BUSINESS_FACTS.contact.whatsappPrimaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 hover:bg-white/5 transition-colors flex items-center group focus-visible:bg-white/5 focus-visible:outline-none"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mr-3 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5 font-heading">WhatsApp 1</p>
                        <p className="text-sm font-semibold text-white">{BUSINESS_FACTS.contact.whatsappPrimaryDisplay}</p>
                      </div>
                    </a>
                    <a
                      href={BUSINESS_FACTS.contact.whatsappSecondaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 hover:bg-white/5 transition-colors flex items-center group focus-visible:bg-white/5 focus-visible:outline-none"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mr-3 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5 font-heading">WhatsApp 2</p>
                        <p className="text-sm font-semibold text-white">{BUSINESS_FACTS.contact.whatsappSecondaryDisplay}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Actions (Language Switcher + Hamburger with 44px min touch targets) */}
          <div className="flex items-center lg:hidden space-x-1.5 sm:space-x-2 flex-shrink-0">
            <LanguageSwitcher
              currentLang={lang}
              variant="dark"
            />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] p-2 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent text-white hover:text-accent hover:bg-white/10 active:bg-white/20"
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
          className="lg:hidden shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 border-t border-white/10 bg-black/95 backdrop-blur-none"
          id="mobile-menu"
        >
          <div className="px-4 pt-3 pb-5 space-y-1">
            {links.map((link) => {
              let isActive = pathname === link.href;
              if (link.subLinks) {
                isActive = pathname.startsWith(`/${lang}/projects`);
              }

              if (link.subLinks) {
                return (
                  <div key={link.href} className="flex flex-col space-y-1">
                    <button
                      onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                      className={`flex items-center justify-between min-h-[44px] px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-accent/15 text-accent border-l-4 border-accent font-bold"
                          : "text-white/90 hover:bg-white/10 hover:text-white"
                      }`}
                      aria-expanded={mobileProjectsOpen}
                    >
                      {link.label}
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileProjectsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileProjectsOpen && (
                      <div className="flex flex-col space-y-1 pl-4 mt-1">
                        {link.subLinks.map((subLink) => {
                          const isSubActive = pathname === subLink.href;
                          return (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              onClick={() => setIsOpen(false)}
                              aria-current={isSubActive ? "page" : undefined}
                              className={`flex items-center min-h-[44px] px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                                isSubActive
                                  ? "text-accent bg-white/5"
                                  : "text-white/80 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              {subLink.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center min-h-[44px] px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-accent/15 text-accent border-l-4 border-accent font-bold"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Menu WhatsApp CTA */}
            <div className="pt-4 mt-3 border-t border-white/10 space-y-3">
              <a
                href={BUSINESS_FACTS.contact.whatsappPrimaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full min-h-[48px] flex items-center justify-center px-5 py-3.5 rounded-[16px] text-sm font-bold tracking-wider uppercase transition-all bg-[#B22222] hover:bg-[#991B1B] text-white shadow-[0_4px_16px_rgba(178,34,34,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading"
              >
                <Phone className="w-5 h-5 mr-2.5 text-white" aria-hidden="true" />
                WhatsApp 1
              </a>
              <a
                href={BUSINESS_FACTS.contact.whatsappSecondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full min-h-[48px] flex items-center justify-center px-5 py-3.5 rounded-[16px] text-sm font-bold tracking-wider uppercase transition-all bg-white/10 hover:bg-white/20 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading"
              >
                <Phone className="w-5 h-5 mr-2.5 text-white" aria-hidden="true" />
                WhatsApp 2
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
