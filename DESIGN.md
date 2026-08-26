# KAHA BLOCK - Design System & Color Palette

Dokumen ini memuat panduan desain (Design System) minimalis dan estetik untuk aplikasi KAHA BLOCK.

## 🎨 Color Palette (Peta Palet Warna)

Kami menggunakan kombinasi 4 warna (Putih, Biru, Merah, Kuning) yang memberikan kesan profesional, industrial, namun tetap modern dan sangat bersih.

| Warna | Nama / Peran | Kode HEX | Tailwind Class | Penggunaan Utama |
| :---: | :--- | :--- | :--- | :--- |
| 🟦 | **Navy Blue** (Primer) | `#0B2447` | `bg-[#0B2447]` / `text-[#0B2447]` | Teks utama, *background Footer*, *Hero section*, judul halaman. Memberikan kesan kokoh, premium, dan tepercaya. |
| 🟥 | **Crimson Red** (Aksen 1) | `#D90429` | `bg-[#D90429]` / `text-[#D90429]` | Tombol utama (Call-to-Action), ikon fitur, dan garis bawah (*divider*). Memberikan kesan energi dan urgensi untuk klik. |
| 🟨 | **Amber Yellow** (Aksen 2) | `#FFC300` | `bg-[#FFC300]` / `text-[#FFC300]` | Efek *hover* pada tombol/card, teks sorotan di atas latar gelap, dan ornamen dekoratif. Memberikan kesan ramah dan *highlight*. |
| ⬜ | **Clean White** (Background) | `#FFFFFF` | `bg-white` / `text-white` | Latar belakang halaman utama, *card container*, dan teks di atas elemen biru gelap. Fondasi dari gaya minimalis. |
| 🌫️ | **Light Gray** (Secondary BG) | `#F9FAFB` | `bg-gray-50` / `border-gray-100` | Latar belakang selang-seling antar *section* dan border super tipis pada *card* agar UI tidak terlihat *flat*. |

## 📐 Prinsip Desain (Aesthetic & Minimalist)

1. **Bebas Slop (Anti-Cliché)**
   - Tidak ada gradien warna yang berlebihan atau efek bayangan bercahaya (*glowing shadows*). 
   - Warna datar (*flat*) yang tebal (solid) lebih diutamakan untuk menonjolkan profil pabrik industri yang tegas.

2. **Negative Space (Ruang Bernapas)**
   - Menggunakan *padding* vertikal yang sangat luas (contoh: `py-20`) dan jarak antar elemen (`gap-8`, `gap-12`) agar konten terasa elegan, tidak sumpek, dan mudah dipindai oleh mata (scannable).

3. **Hierarki Visual yang Jelas**
   - **Biru** membangun kerangka dan fondasi membaca.
   - **Putih & Abu-abu** memberikan ruang kosong.
   - **Merah** memandu mata ke aksi (tombol kontak/WhatsApp).
   - **Kuning** memberikan kejutan visual estetis (seperti hiasan di sudut box *Fast Response*).

4. **Subtle Interactions**
   - Animasi *hover* pada card berupa peninggian bayangan sedikit (`hover:shadow-md`) dan perubahan border yang sangat halus. Gambar proyek sedikit membesar (`scale-105`) tanpa merusak layout.
