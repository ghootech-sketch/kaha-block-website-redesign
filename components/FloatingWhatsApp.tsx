"use client";

import { useState, useRef, useEffect } from "react";
import { Locale } from "@/lib/dictionary";
import { BUSINESS_FACTS } from "@/lib/business-facts";
import { X, MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
  lang: Locale;
}

export default function FloatingWhatsApp({ lang }: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstOptionRef = useRef<HTMLAnchorElement>(null);
  const triggerBtnRef = useRef<HTMLButtonElement>(null);

  const ariaLabel =
    lang === "en" ? "Open Kaha Block WhatsApp" : "Buka WhatsApp Kaha Block";
    
  const titleText =
    lang === "en" ? "Chat on WhatsApp" : "WhatsApp Kaha Block";

  // Focus first option when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        firstOptionRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close on Escape & return focus to trigger button
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerBtnRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <aside
      aria-label="Floating WhatsApp"
      className="fixed z-40 right-4 sm:right-6 bottom-4 sm:bottom-6 bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] pointer-events-auto"
      ref={containerRef}
    >
      {/* Chooser Dropdown */}
      <div
        id="floating-whatsapp-menu"
        role="dialog"
        aria-modal="true"
        aria-label={titleText}
        aria-hidden={!isOpen}
        className={`absolute bottom-full right-0 mb-4 bg-white rounded-xl shadow-2xl border border-stone-200/50 overflow-hidden transition-all duration-300 origin-bottom-right w-64 ${
          isOpen ? "scale-100 opacity-100 pointer-events-auto visible" : "scale-95 opacity-0 pointer-events-none invisible"
        }`}
      >
        <div className="bg-dark text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span className="text-sm font-bold tracking-wide font-heading">{titleText}</span>
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              triggerBtnRef.current?.focus();
            }}
            tabIndex={isOpen ? 0 : -1}
            className="min-w-[44px] min-h-[44px] -mr-2 -my-2 flex items-center justify-center text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="p-2 space-y-1">
          <a
            ref={firstOptionRef}
            href={BUSINESS_FACTS.contact.whatsappPrimaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            id="floating-whatsapp-primary"
            className="flex items-center p-3 hover:bg-slate-50 rounded-lg transition-colors group focus-visible:outline-none focus-visible:bg-slate-50"
          >
            <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mr-3 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">WhatsApp 1</p>
              <p className="text-sm font-bold text-slate-900">{BUSINESS_FACTS.contact.whatsappPrimaryDisplay}</p>
            </div>
          </a>
          
          <a
            href={BUSINESS_FACTS.contact.whatsappSecondaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            id="floating-whatsapp-secondary"
            className="flex items-center p-3 hover:bg-slate-50 rounded-lg transition-colors group focus-visible:outline-none focus-visible:bg-slate-50"
          >
            <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mr-3 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">WhatsApp 2</p>
              <p className="text-sm font-bold text-slate-900">{BUSINESS_FACTS.contact.whatsappSecondaryDisplay}</p>
            </div>
          </a>
        </div>
      </div>

      <button
        ref={triggerBtnRef}
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-controls="floating-whatsapp-menu"
        className="group relative flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white rounded-full shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 h-[58px] sm:h-[64px] min-w-[58px] sm:min-w-[64px] px-3.5 sm:px-4 hover:pl-5 focus-visible:pl-5"
      >
        {/* Subtle expanding label on desktop hover/focus (expands smoothly to the left) */}
        <span
          className={`hidden md:inline-block overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 ease-out ${
            isOpen ? "max-w-0 opacity-0" : "max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:mr-2.5 group-focus-visible:max-w-xs group-focus-visible:opacity-100 group-focus-visible:mr-2.5"
          }`}
          aria-hidden="true"
        >
          {titleText}
        </span>
        {/* WhatsApp Brand SVG Icon */}
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 fill-current flex-shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </aside>
  );
}
