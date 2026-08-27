# Daftar Asset yang Masih Dibutuhkan (Assets Required)

File ini mendokumentasikan daftar aset visual resmi milik PT Kaha Sukses Mandiri (Kaha Block) yang masih perlu disiapkan dan ditempatkan ke dalam direktori publik aplikasi saat foto/materi asli telah tersedia.

> **Catatan:** Jangan menggunakan foto internet tidak berlisensi, placeholder palsu, atau data yang belum terverifikasi. Saat ini aplikasi menggunakan accessible placeholder dengan aspect ratio stabil hingga aset resmi diunggah.

---

## 1. Identitas & Perusahaan (`/public/images/company/`)

| Path Target | Deskripsi Asset | Format Disarankan | Status |
| :--- | :--- | :--- | :--- |
| `/public/images/company/logo.png` | Logo resmi PT Kaha Sukses Mandiri (Kaha Block) dengan background transparan | PNG / SVG (Resolusi tinggi) | Menunggu file asli |
| `/public/images/company/factory.jpg` | Foto fasilitas pabrik Tangerang seluas 1000 m² & mesin hidrolik otomatis | JPG / WebP (1920x1080) | Menunggu file asli |

---

## 2. Katalog Produk Paving Block (`/public/images/products/`)

| Path Target | Deskripsi Produk | Dimensi/Spesifikasi | Status |
| :--- | :--- | :--- | :--- |
| `/public/images/products/truepave.jpg` | Paving Truepave (Bata) | 21 × 10,5 cm (Tinggi: 6/8/10 cm) | Menunggu foto produk |
| `/public/images/products/half.jpg` | Paving Half (Setengah) | 10,5 × 10,5 cm (Tinggi: 6/8 cm) | Menunggu foto produk |
| `/public/images/products/hexagonal-ubin.jpg` | Paving Hexagonal & Ubin | Bentuk geometris (Tinggi: 6/8 cm) | Menunggu foto produk |
| `/public/images/products/topi-uskup.jpg` | Topi Uskup (Bishop Hat) | 30 × 6 × 21 cm (Tinggi: 6/8 cm) | Menunggu foto produk |
| `/public/images/products/kanstein-jepit.jpg` | Kanstein Jepit Heavy Duty | 10 × 20 × 40 cm | Menunggu foto produk |

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
