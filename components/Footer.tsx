import { dictionaries, Locale } from "@/lib/dictionary";
import { BUSINESS_FACTS } from "@/lib/business-facts";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";

export default function Footer({ lang }: { lang: Locale }) {
  const dict = dictionaries[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Site Footer" className="bg-[#0B2447] text-white py-12 sm:py-14 md:py-16 border-t-[6px] border-[#D90429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand & Brief */}
          <div className="space-y-4 sm:space-y-6">
            <Link
              href={`/${lang}`}
              aria-label={lang === "en" ? "KAHA BLOCK - Home" : "KAHA BLOCK - Beranda"}
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded"
            >
              <div className="relative w-[180px] md:w-[220px] h-[50px] md:h-[60px]">
                <Image
                  src="/footer-logo.png"
                  alt={`${BUSINESS_FACTS.brandName} - ${BUSINESS_FACTS.legalName}`}
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 180px, 220px"
                />
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed font-sans text-sm">
              {dict.home.companyBrief}
            </p>
            <p className="text-[#FFC300] font-semibold italic text-sm mt-4">
              &quot;{dict.footer.tagline}&quot;
            </p>
          </div>

          {/* Navigation Menu */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-heading">{dict.footer.menuTitle}</h3>
            <ul className="space-y-3 sm:space-y-4 font-sans text-sm sm:text-base">
              {[
                { href: `/${lang}`, label: dict.nav.home },
                { href: `/${lang}/about`, label: dict.nav.about },
                { href: `/${lang}/products`, label: dict.nav.products },
                { href: `/${lang}/projects`, label: dict.nav.projects },
                { href: `/${lang}/blog`, label: dict.nav.blog },
                { href: `/${lang}/contact`, label: dict.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#FFC300] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded py-1 inline-block min-h-[36px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-heading">{dict.footer.contactTitle}</h3>
            <ul className="space-y-3.5 sm:space-y-4 font-sans text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#FFC300] mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-300 min-w-0 flex-1 break-words">{BUSINESS_FACTS.address.formatted}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#FFC300] mr-3 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${BUSINESS_FACTS.contact.primaryPhoneE164.replace(/\D/g, "")}`}
                  className="text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded break-words py-1 min-h-[36px] inline-flex items-center"
                >
                  {BUSINESS_FACTS.contact.primaryPhoneDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#FFC300] mr-3 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${BUSINESS_FACTS.contact.email}`}
                  className="text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded break-words py-1 min-h-[36px] inline-flex items-center"
                >
                  {BUSINESS_FACTS.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social & WhatsApp */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-heading">{dict.footer.socialTitle}</h3>
            <div className="space-y-3.5 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <a
                  href={BUSINESS_FACTS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Kaha Block @kahablock"
                  className="bg-[#1a365d] p-2.5 sm:p-3 rounded-full hover:bg-[#D90429] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
                </a>
                <div className="flex flex-wrap items-center gap-x-1.5 text-gray-300 text-sm font-sans">
                  <a
                    href={BUSINESS_FACTS.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Kaha Block @kahablock"
                    className="hover:text-[#FFC300] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded py-0.5"
                  >
                    @kahablock
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm font-sans">
                <div className="bg-[#1a365d] p-2.5 sm:p-3 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
                </div>
                <span>{dict.footer.facebookText}</span>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <a
                href={BUSINESS_FACTS.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] bg-[#25D366] text-white px-5 sm:px-6 py-2.5 rounded-full font-bold text-sm hover:bg-green-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
              >
                {dict.contact.whatsapp}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400 font-sans">
          <p>&copy; {currentYear} {dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
