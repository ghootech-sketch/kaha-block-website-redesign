"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { BUSINESS_FACTS } from "@/lib/business-facts";
import { appendWebsiteSourceMarker } from "@/lib/whatsapp";
import { PAVING_COLORS, colorLabel, type ColorProduct, type PavingColor } from "@/lib/paving-colors";
import type { Locale } from "@/lib/dictionary";

export default function PavingColorQuote({ lang, products }: { lang: Locale; products: ColorProduct[] }) {
  const en = lang === "en";
  const [color, setColor] = useState<PavingColor | "">("");
  const [model, setModel] = useState("");
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [scope, setScope] = useState("");
  const eligible = products.filter((p) => !color || p.colors.includes(color));
  const chosen = products.find((p) => p.slug === model);
  const pickColor = (next: PavingColor | "") => {
    setColor(next);
    if (next && chosen && !chosen.colors.includes(next)) setModel("");
  };
  const lines = en
    ? ["Hello Kaha Block, I would like to check colored paving availability and pricing.", "Color: " + (color ? colorLabel(color, lang) : "Please advise"), "Model: " + (chosen?.name || "Please advise"), "Estimated area (m²): " + area, "Project location: " + location, "Scope: " + scope]
    : ["Halo Kaha Block, saya ingin cek ketersediaan dan harga paving block warna.", "Warna: " + (color ? colorLabel(color, lang) : "Mohon rekomendasi"), "Model: " + (chosen?.name || "Mohon rekomendasi"), "Perkiraan luas (m²): " + area, "Lokasi proyek: " + location, "Kebutuhan: " + scope];
  const url = BUSINESS_FACTS.contact.whatsappPrimaryBaseUrl + "?text=" + encodeURIComponent(appendWebsiteSourceMarker(lines.join("\n"), lang));
  const inputClass = "w-full min-h-12 rounded-lg border border-stone-300 bg-white p-3 text-sm text-slate-900 focus:ring-2 focus:ring-primary";
  return (
    <section id="pilih-warna" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">{en ? "Choose your color and request a quote" : "Pilih Warna & Cek Penawaran"}</h2>
        <p className="mt-2 mb-6 text-sm text-slate-600">{en ? "All fields are optional. Our team can help if you are unsure." : "Semua pilihan opsional. Belum tahu model atau ukuran? Tim kami bisa membantu."}</p>
        <fieldset className="mb-6">
          <legend className="font-semibold text-sm mb-3">{en ? "Color" : "Warna paving"}</legend>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PAVING_COLORS.map((item) => <button key={item.id} type="button" aria-pressed={color === item.id} onClick={() => pickColor(color === item.id ? "" : item.id)} className={`min-h-12 flex items-center gap-3 rounded-lg p-3 text-left border-2 text-sm font-semibold focus-visible:ring-2 focus-visible:ring-primary ${color === item.id ? "border-primary bg-surface" : "border-stone-200 bg-white"}`}><span className="h-9 w-9 rounded border border-black/10 shrink-0" style={{backgroundColor:item.hex}} aria-hidden="true" />{colorLabel(item.id, lang)}{color === item.id && <span aria-hidden="true">✓</span>}</button>)}
          </div>
          <p className="mt-2 text-xs text-slate-500">{en ? "Illustrative swatches, not physical samples or live stock." : "Swatch ilustrasi, bukan sampel fisik atau informasi stok real-time."}</p>
        </fieldset>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="grid gap-1 text-sm font-medium">{en ? "Model" : "Model paving"}<select className={inputClass} value={model} onChange={e => setModel(e.target.value)}><option value="">{en ? "Not sure / ask for advice" : "Belum tahu / minta rekomendasi"}</option>{eligible.map(p => <option key={p.slug} value={p.slug}>{p.name}</option>)}</select></label>
          <label className="grid gap-1 text-sm font-medium">{en ? "Estimated area (m²)" : "Perkiraan luas (m²)"}<input className={inputClass} inputMode="decimal" maxLength={20} value={area} onChange={e => setArea(e.target.value)} placeholder="100" /></label>
          <label className="grid gap-1 text-sm font-medium">{en ? "Project city / district" : "Kota / kabupaten proyek"}<input className={inputClass} maxLength={100} value={location} onChange={e => setLocation(e.target.value)} placeholder={en ? "Tangerang" : "Contoh: Tangerang"} /></label>
          <label className="grid gap-1 text-sm font-medium">{en ? "Scope" : "Kebutuhan"}<select className={inputClass} value={scope} onChange={e => setScope(e.target.value)}><option value="">{en ? "Not decided" : "Belum ditentukan"}</option><option>{en ? "Materials only" : "Material saja"}</option><option>{en ? "Materials + installation" : "Material + pemasangan"}</option></select></label>
        </div>
        <a id="color-quote-whatsapp" href={url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full sm:w-auto min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#166534] hover:bg-[#14532d] text-white px-6 py-3 font-bold focus-visible:ring-2 focus-visible:ring-primary"><MessageCircle size={20} aria-hidden="true"/>{en ? "Check Color & Price via WhatsApp" : "Cek Warna & Harga via WhatsApp"}</a>
      </div>
    </section>
  );
}
