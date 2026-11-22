import { MessageCircle, Check } from "lucide-react";
import { BUSINESS_FACTS } from "@/lib/business-facts";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import type { Locale } from "@/lib/dictionary";

export default function SalesHeroActions({ lang, topic }: { lang: Locale; topic: "pricing" | "products" }) {
  const en = lang === "en";
  return <div className="space-y-4">
    <p className="text-white"><span className="block text-xs uppercase tracking-wider text-slate-200 mb-1">{en ? "Material starts from" : "Harga material mulai"}</span><strong className="text-3xl sm:text-4xl font-heading">{BUSINESS_FACTS.pricing.materialStartingPriceDisplay[lang]}*</strong></p>
    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-white">
      {[en ? "Direct from Cisauk factory" : "Langsung pabrik Cisauk", en ? "Free delivery & offloading in Greater Jakarta" : "Gratis kirim & penurunan Jabodetabek"].map(text => <li key={text} className="flex items-start gap-1.5"><Check className="w-4 h-4 shrink-0 text-accent" aria-hidden="true" />{text}</li>)}
    </ul>
    <a id={`hero-whatsapp-${topic}`} href={getWhatsAppUrl("primary", topic, lang)} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#166534] hover:bg-[#14532d] px-5 sm:px-7 py-3.5 text-base font-bold text-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-900">
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />{en ? "Check Price & Stock on WhatsApp" : "Cek Harga & Stok via WhatsApp"}
    </a>
    <p className="text-xs sm:text-sm text-white/90">{en ? "Not sure about the type or area? Tell us what you need first." : "Belum tahu tipe atau luas pastinya? Ceritakan kebutuhan Anda dulu."}</p>
    <p className="text-[11px] sm:text-xs text-slate-200 max-w-lg">{BUSINESS_FACTS.pricing.scope[lang]}</p>
  </div>;
}
