"use client";


import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dictionaries, Locale } from "@/lib/dictionary";
import { Menu, X, Phone } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ lang }: { lang: Locale }) {
  const dict = dictionaries[lang];
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/products`, label: dict.nav.products },
    { href: `/${lang}/projects`, label: dict.nav.projects },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href={`/${lang}`} className="flex-shrink-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded">
              <span className="font-heading font-black text-2xl text-[#0B2447] tracking-tight uppercase">
                KAHA <span className="text-[#D90429]">BLOCK</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded ${
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
            <div className="flex items-center space-x-4 border-l border-gray-200 pl-4">
              <LanguageSwitcher currentLang={lang} />
              <a
                href={dict.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#D90429] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#0B2447] hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <LanguageSwitcher currentLang={lang} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#0B2447] hover:text-[#D90429] hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white" id="mobile-menu">
          <div className="pt-2 pb-4 space-y-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block pl-3 pr-4 py-3 border-l-4 text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-red-50 border-[#D90429] text-[#D90429]"
                      : "border-transparent text-[#0B2447] hover:bg-gray-50 hover:border-[#FFC300]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pl-3 pr-4 py-4 mt-4 border-t border-gray-100">
              <a
                href={dict.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center bg-[#D90429] text-white px-5 py-3 rounded-full text-base font-bold hover:bg-[#0B2447] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
              >
                <Phone className="w-5 h-5 mr-2" />
                {dict.contact.whatsapp}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
