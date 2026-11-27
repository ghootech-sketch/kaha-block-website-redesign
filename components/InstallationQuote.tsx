"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { BUSINESS_FACTS } from "@/lib/business-facts";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { appendWebsiteSourceMarker } from "@/lib/whatsapp-constants";
import type { Locale } from "@/lib/dictionary";

export default function InstallationQuote({ lang }: { lang: Locale }) {
  const en = lang === "en";
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [scope, setScope] = useState("");
  const [timing, setTiming] = useState("");
  const valid = location.trim().length >= 2 && Number.isFinite(Number(area)) && Number(area) > 0 && scope !== "";
  const lines = en
    ? ["Hello Kaha Block, I would like an installation quotation.", "Project location: " + location.trim(), "Estimated area: " + area + " m²", "Scope: " + scope, "Planned timing: " + (timing || "To be discussed")]
    : ["Halo Kaha Block, saya ingin meminta penawaran jasa pasang paving block.", "Lokasi proyek: " + location.trim(), "Perkiraan luas: " + area + " m²", "Kebutuhan: " + scope, "Rencana pengerjaan: " + (timing || "Bisa didiskusikan")];
  const url = BUSINESS_FACTS.contact.whatsappPrimaryBaseUrl + "?text=" + encodeURIComponent(appendWebsiteSourceMarker(lines.join("\n"), lang));
  const field = "w-full min-h-12 rounded-lg border border-stone-300 bg-white p-3 text-sm text-slate-900 focus-visible:ring-2 focus-visible:ring-primary";
  const cta = "inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-white";
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7">
      <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">{en ? "Installation cost per m²: request a project quote" : "Estimasi Harga Jasa Pasang Paving Block per m²"}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{en ? "Installation rates depend on ground preparation, access, area and the agreed scope. Material pricing is separate unless included in your quote." : "Biaya tenaga pasang menyesuaikan kondisi lahan, akses, luas dan lingkup pekerjaan. Harga material dihitung terpisah kecuali disepakati dalam penawaran borongan."}</p>
      <p className="mt-2 text-sm text-slate-600">{en ? "For an initial estimate, fill in the three required fields. You can still consult if you do not know your area yet." : "Isi tiga informasi utama untuk meminta estimasi awal. Jika luas belum diketahui, Anda tetap bisa berkonsultasi."}</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-medium">{en ? "Project city / district *" : "Lokasi proyek *"}<input className={field} maxLength={100} value={location} onChange={e => setLocation(e.target.value)} placeholder={en ? "Example: Cisauk, Tangerang" : "Contoh: Cisauk, Tangerang"} required /></label>
        <label className="grid gap-1 text-sm font-medium">{en ? "Estimated area (m²) *" : "Perkiraan luas (m²) *"}<input className={field} type="number" min="0.01" step="any" value={area} onChange={e => setArea(e.target.value)} placeholder="100" required /></label>
        <label className="grid gap-1 text-sm font-medium">{en ? "Scope *" : "Kebutuhan *"}<select className={field} value={scope} onChange={e => setScope(e.target.value)} required><option value="">{en ? "Select scope" : "Pilih kebutuhan"}</option><option>{en ? "Installation only" : "Jasa pasang saja"}</option><option>{en ? "Materials + installation" : "Material + pemasangan"}</option></select></label>
        <label className="grid gap-1 text-sm font-medium">{en ? "Planned timing (optional)" : "Rencana pengerjaan (opsional)"}<select className={field} value={timing} onChange={e => setTiming(e.target.value)}><option value="">{en ? "To be discussed" : "Bisa didiskusikan"}</option><option>{en ? "Within 1–2 weeks" : "Dalam 1–2 minggu"}</option><option>{en ? "Within 1 month" : "Dalam 1 bulan"}</option><option>{en ? "More than 1 month" : "Lebih dari 1 bulan"}</option></select></label>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        {valid ? <a id="installation-project-quote-whatsapp" href={url} target="_blank" rel="noopener noreferrer" className={cta + " bg-[#166534] hover:bg-[#14532d] focus-visible:ring-2 focus-visible:ring-primary"}><MessageSquare className="h-5 w-5" aria-hidden="true"/>{en ? "Request a quote via WhatsApp" : "Minta Penawaran via WhatsApp"}</a> : <button type="button" disabled className={cta + " bg-slate-500 cursor-not-allowed"}>{en ? "Complete required details" : "Lengkapi data proyek"}</button>}
        <a id="installation-consult-whatsapp" href={getWhatsAppUrl("primary", "installation", lang)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-semibold text-primary underline">{en ? "Consult without an estimate" : "Konsultasi jika luas belum diketahui"}</a>
      </div>
      <p className="mt-3 text-xs text-slate-500">{en ? "Your details are included in a WhatsApp draft; no order is placed automatically." : "Data kebutuhan dimasukkan ke draf WhatsApp; belum menjadi pesanan otomatis."}</p>
    </div>
  );
}
