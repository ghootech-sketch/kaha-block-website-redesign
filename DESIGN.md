# KAHA BLOCK - Design System & Color Palette

Dokumen ini memuat panduan desain (Design System) elegan, hangat, dan berkelas untuk aplikasi KAHA BLOCK.

## 🎨 Color Palette & Hierarchy (Peta Palet Warna & Hierarki)

Kombinasi warna baru mengusung palet hangat, mewah, dan profesional dengan dominasi permukaan Cream/White (60–70%), aksen Venetian Red (15–20%), sentuhan Gold (8–12%), dan Sapphire Blue (5–10%) sebagai warna pendukung.

| Warna | Nama / Peran | Kode HEX | Token / Class | Dominansi & Penggunaan Utama |
| :---: | :--- | :--- | :--- | :--- |
| 🪨 | **Pearl White / Light Cream** | `#F7F5F0` | `--color-surface-cream` / `bg-[#F7F5F0]` | **60–70% (Dominan)** — Latar belakang section sekunder, card container lembut, fondasi visual warm luxury. |
| ⬜ | **Pure White** | `#FFFFFF` | `--color-surface-pure` / `bg-white` | Latar belakang section utama, card containers, teks kontras tinggi di atas latar gelap. |
| 🍷 | **Venetian Red** | `#7A1C1C` | `--color-brand-red` / `bg-[#7A1C1C]` | **15–20% (Aksen Utama)** — Tombol Call-to-Action utama, badge penting, active links, divider accents, dan status highlights. |
| 👑 | **Gold / Antique Gold** | `#D4AF37` | `--color-brand-gold` / `text-[#D4AF37]` | **8–12% (Aksen Elegan)** — Divider halus, nomor urut langkah, icon highlight, badge premium, border aksen, focus rings. |
| 🌌 | **Sapphire Blue** | `#0F2042` | `--color-brand-blue` / `text-[#0F2042]` | **5–10% (Pendukung)** — Teks judul (headings), footer/hero banner latar gelap pendukung, border terstruktur. Tidak mendominasi. |
| 💬 | **WhatsApp Green** | `#25D366` | `bg-[#25D366]` | Khusus untuk UI/tombol integrasi WhatsApp resmi. |

## 📐 Prinsip Desain & Hierarki Visual

1. **Cream/White-First Surface Dominance**
   - 60–70% ruang visual didominasi oleh permukaan Cream `#F7F5F0` dan Pure White `#FFFFFF`.
   - Menghasilkan pengalaman membaca yang lapang, tenang, hangat, dan tidak melelahkan mata.

2. **Aksen Terarah (Venetian Red & Gold)**
   - Venetian Red `#7A1C1C` memandu mata pengguna ke tindakan konversi utama (konsultasi proyek, CTA, kontak).
   - Gold `#D4AF37` memberikan sentuhan aksen elegan pada divider, badge spesifikasi, nomor langkah, dan garis aksen tanpa memenuhi ruang secara berlebihan.

3. **Bebas Slop & Cliché**
   - Tanpa gradien ungu-ke-biru generik atau glow drop shadow buatan.
   - Tipografi terstruktur dengan kontras tajam (Plus Jakarta Sans + Outfit).
   - Radius sudut matematis dan konsisten (rounded-xl / rounded-2xl / rounded-3xl).

4. **Interaksi Halus & Aksesibilitas**
   - Focus ring standar emas `#D4AF37` untuk navigasi keyboard yang aksesibel.
   - Hover transition halus pada card (`hover:border-[#D4AF37]/50 hover:shadow-md`) dan tombol CTA.
