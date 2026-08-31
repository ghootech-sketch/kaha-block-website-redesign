# Daftar Asset yang Masih Dibutuhkan (Assets Required)

File ini mendokumentasikan daftar aset visual resmi milik PT Kaha Sukses Mandiri (Kaha Block) yang masih perlu disiapkan dan ditempatkan ke dalam direktori publik aplikasi saat foto/materi asli telah tersedia.

> **Catatan:** Jangan menggunakan foto internet tidak berlisensi, placeholder palsu, atau data yang belum terverifikasi. Saat ini aplikasi menggunakan accessible placeholder dengan aspect ratio stabil hingga aset resmi diunggah.

---

## 1. Identitas & Perusahaan (`/public/images/company/`)

| Path Target | Deskripsi Asset | Format Disarankan | Status |
| :--- | :--- | :--- | :--- |
| `/public/images/company/logo.png` | Logo resmi PT Kaha Sukses Mandiri (Kaha Block) dengan background transparan | PNG / SVG (Resolusi tinggi) | Menunggu file asli |
| `/public/images/company/factory.jpg` | Foto fasilitas pabrik seluas 9.080 m² & mesin full otomatis hidrolik | JPG / WebP (1920x1080) | Menunggu file asli |

---

## 2. Katalog Produk Paving Block (`/public/images/products/`)

| Path Target | Deskripsi Produk | Dimensi/Spesifikasi | Status |
| :--- | :--- | :--- | :--- |
| `/public/images/products/truepave.jpg` | Paving Truepave (Bata) | Tebal 6, 8, dan 10 cm | Menunggu foto produk |
| `/public/images/products/half-tahu.jpg` | Paving Half (Tahu) | Tebal 6 dan 8 cm | Menunggu foto produk |
| `/public/images/products/hexa-8cm.jpg` | Paving Hexa | Tebal 8 cm | Menunggu foto produk |
| `/public/images/products/ubin-8cm.jpg` | Paving Ubin | Tebal 8 cm | Menunggu foto produk |
| `/public/images/products/topi-uskup.jpg` | Topi Uskup | Panjang 30 cm, Lebar 21 cm, Tebal 6 dan 8 cm | Menunggu foto produk |
| `/public/images/products/kanstein-jepit.jpg` | Kanstein Jepit | (Spesifikasi menunggu konfirmasi) | Menunggu foto produk |
| `/public/images/products/kanstein-s.jpg` | Kanstein S | (Spesifikasi menunggu konfirmasi) | Menunggu foto produk |
| `/public/images/products/kanstein-b1.jpg` | Kanstein B1 | (Spesifikasi menunggu konfirmasi) | Menunggu foto produk |
| `/public/images/products/stoper.jpg` | Stoper | (Spesifikasi menunggu konfirmasi) | Menunggu foto produk |

---

## 3. Galeri Dokumentasi Proyek (`/public/images/projects/`)

| Path Target | Deskripsi Dokumentasi | Format Disarankan | Status |
| :--- | :--- | :--- | :--- |
| `/public/images/projects/project-1.jpg` | Dokumentasi aplikasi lapangan 1 (jalan raya / parkir) | JPG / WebP (1200x800) | Menunggu dokumentasi |
| `/public/images/projects/project-2.jpg` | Dokumentasi aplikasi lapangan 2 (kawasan industri) | JPG / WebP (1200x800) | Menunggu dokumentasi |
| `/public/images/projects/project-3.jpg` | Dokumentasi aplikasi lapangan 3 (pedestrian / komersial) | JPG / WebP (1200x800) | Menunggu dokumentasi |
| `/public/images/projects/project-4.jpg` | Dokumentasi proses pengiriman / armada logistik | JPG / WebP (1200x800) | Menunggu dokumentasi |
| `/public/images/projects/project-5.jpg` | Dokumentasi proses pemasangan paving dan pemadatan | JPG / WebP (1200x800) | Menunggu dokumentasi |
| `/public/images/projects/project-6.jpg` | Dokumentasi hasil akhir proyek infrastruktur | JPG / WebP (1200x800) | Menunggu dokumentasi |

---

## 4. Panduan Penempatan Asset

Setelah aset gambar asli diperoleh:
1. Simpan gambar pada direktori `/public/images/...` sesuai tabel di atas.
2. Pada komponen halaman terkait (`app/[lang]/...`), ganti komponen `<PlaceholderImage>` dengan Next.js `<Image src="/images/..." alt="..." width={...} height={...} />`.
3. Pastikan properti `alt` merefleksikan deskripsi produk atau dokumentasi secara akurat.
