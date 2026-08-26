import Link from "next/link";
import { dictionaries, Locale } from "@/lib/dictionary";

export default function Footer({ lang }: { lang: Locale }) {
  const dict = dictionaries[lang];

  return (
    <footer className="bg-[#0B2447] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4 tracking-tight text-[#FFC300]">KAHA BLOCK</div>
            <p className="text-sm opacity-80 leading-relaxed max-w-xs">
              {dict.home.subtitle}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFC300]">Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href={`/${lang}/about`} className="hover:text-[#FFC300] transition-colors">{dict.nav.about}</Link></li>
              <li><Link href={`/${lang}/products`} className="hover:text-[#FFC300] transition-colors">{dict.nav.products}</Link></li>
              <li><Link href={`/${lang}/projects`} className="hover:text-[#FFC300] transition-colors">{dict.nav.projects}</Link></li>
              <li><Link href={`/${lang}/contact`} className="hover:text-[#FFC300] transition-colors">{dict.nav.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFC300]">{dict.contact.title}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>{dict.contact.address}</li>
              <li>{dict.contact.email}</li>
              <li>{dict.contact.phone1} / {dict.contact.phone2}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm opacity-60">
          {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}
