import { dictionaries, Locale } from "@/lib/dictionary";
import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";

export default function Footer({ lang }: { lang: Locale }) {
  const dict = dictionaries[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Site Footer" className="bg-[#0B2447] text-white py-16 border-t-[6px] border-[#D90429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-heading tracking-tight text-[#FFC300]">
              {dict.home.title}
            </h2>
            <p className="text-gray-300 leading-relaxed font-sans text-sm">
              {dict.home.companyBrief}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 font-heading">{dict.footer.menuTitle}</h3>
            <ul className="space-y-4 font-sans">
              {[
                { href: `/${lang}`, label: dict.nav.home },
                { href: `/${lang}/about`, label: dict.nav.about },
                { href: `/${lang}/products`, label: dict.nav.products },
                { href: `/${lang}/projects`, label: dict.nav.projects },
                { href: `/${lang}/contact`, label: dict.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#FFC300] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 font-heading">{dict.contact.title}</h3>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#FFC300] mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-300">{dict.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#FFC300] mr-3 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${dict.contact.phone.replace(/\D/g, "")}`}
                  className="text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded"
                >
                  {dict.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#FFC300] mr-3 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${dict.contact.email}`}
                  className="text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded"
                >
                  {dict.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 font-heading">{dict.footer.socialTitle}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <a
                  href="https://instagram.com/kahablock"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Kaha Block @kahablock"
                  className="bg-[#1a365d] p-3 rounded-full hover:bg-[#D90429] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
                >
                  <Instagram className="w-5 h-5 text-white" aria-hidden="true" />
                </a>
                <span className="text-gray-300 text-sm font-sans">@kahablock</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm font-sans">
                <div className="bg-[#1a365d] p-3 rounded-full">
                  <Facebook className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <span>{dict.footer.facebookText}</span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href={dict.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-green-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
              >
                {dict.contact.whatsapp}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400 font-sans">
          <p>&copy; {currentYear} {dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
