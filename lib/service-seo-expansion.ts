import type { Locale } from "./dictionary";
import type { RegionalSlug } from "./local-service-data";

export interface ServiceSeoCard {
  title: string;
  desc: string;
}

export interface ServiceSeoExpansion {
  introTitle: string;
  introParagraphs: string[];
  intentTitle: string;
  intentIntro: string;
  intentCards: ServiceSeoCard[];
  projectTitle: string;
  projectIntro: string;
  projectCards: ServiceSeoCard[];
  costTitle: string;
  costIntro: string;
  costFactors: ServiceSeoCard[];
}

export const INSTALLATION_SEO_EXPANSION: Record<Locale, ServiceSeoExpansion> = {
  id: {
    introTitle: "Vendor Paving Block, Jasa Pasang, Borongan & Kontraktor Jabodetabek",
    introParagraphs: [
      "Kaha Block melayani sebagai vendor paving block sekaligus penyedia jasa pasang untuk proyek rumah tinggal, carport, halaman, jalan lingkungan, area parkir, ruko, pergudangan, kawasan industri, fasilitas umum, dan pekerjaan perkerasan lainnya di Jabodetabek. Layanan dapat berupa pengadaan material, jasa pemasangan saja, maupun paket material + pemasangan sesuai kebutuhan proyek.",
      "Istilah yang digunakan pelanggan berbeda-beda: jasa pasang paving block, tukang paving, borongan paving, kontraktor paving block, aplikator paving block, pemasangan conblock, atau material + pasang. Seluruh istilah tersebut mengarah pada kebutuhan yang sama: memilih material yang sesuai, menyiapkan dasar yang stabil, menyusun pola dengan benar, mengunci tepi, dan melakukan pemadatan akhir agar bidang paving bekerja sebagaimana mestinya.",
      "Karena kondisi setiap lokasi berbeda, estimasi pekerjaan tidak hanya melihat luas area dalam meter persegi. Tim perlu mempertimbangkan akses proyek, kondisi tanah eksisting, elevasi dan kemiringan, kebutuhan lapisan dasar, ketebalan paving, mutu beton, pola pemasangan, kanstein atau pengunci tepi, serta penggunaan area setelah pekerjaan selesai.",
    ],
    intentTitle: "Vendor & Jenis Layanan Jasa Paving Block yang Bisa Dipilih",
    intentIntro:
      "Pilih ruang lingkup pekerjaan berdasarkan kebutuhan proyek. Pemisahan ini membantu perhitungan harga lebih jelas dan menghindari perbandingan penawaran yang tidak setara.",
    intentCards: [
      {
        title: "Jasa Pasang Paving Block",
        desc:
          "Pekerjaan penyusunan paving block pada area yang sudah siap atau setelah kebutuhan persiapan lahan disepakati. Cocok untuk pelanggan yang sudah memiliki material maupun yang mengambil material dari Kaha Block.",
      },
      {
        title: "Borongan Paving Block Material + Pasang",
        desc:
          "Paket pengadaan material dan pengerjaan dalam satu penawaran. Model paving, ketebalan, mutu, volume, pengiriman, persiapan area, pemasangan, dan pekerjaan pendukung disesuaikan dengan kondisi proyek.",
      },
      {
        title: "Tukang / Tim Pemasangan Paving",
        desc:
          "Tim lapangan untuk pekerjaan paving pada rumah, carport, halaman, jalan lingkungan, parkiran, ruko, pergudangan, maupun area proyek lain sesuai ruang lingkup yang disepakati.",
      },
      {
        title: "Kontraktor & Aplikator Paving Block",
        desc:
          "Untuk pekerjaan yang membutuhkan koordinasi pengadaan, pengukuran area, penentuan spesifikasi, urutan kerja, penguncian tepi, pemadatan, serta penyelesaian area secara lebih terstruktur.",
      },
      {
        title: "Jasa Pasang Kanstein / Pengunci Tepi",
        desc:
          "Kanstein digunakan sebagai pembatas dan pengunci tepi agar susunan paving tidak mudah bergeser. Jenis dan kebutuhan kanstein mengikuti desain area serta kondisi sisi perkerasan.",
      },
      {
        title: "Vendor Paving Block untuk Kebutuhan Proyek",
        desc:
          "Untuk kontraktor, pengembang, perusahaan, gudang, kawasan industri, dan proyek komersial, kirim lokasi, spesifikasi, luas/volume, serta kebutuhan material atau pemasangan agar tim dapat menyiapkan penawaran vendor proyek.",
      },
    ],
    projectTitle: "Pekerjaan Paving Block untuk Rumah, Jalan, Parkir & Kawasan Industri",
    projectIntro:
      "Spesifikasi pemasangan tidak selalu sama untuk setiap area. Fungsi lahan dan rencana beban menjadi dasar dalam memilih ketebalan, mutu, pola, dan pekerjaan dasar.",
    projectCards: [
      {
        title: "Carport, Halaman Rumah & Teras Luar",
        desc:
          "Untuk area rumah tinggal, fokus pekerjaan biasanya pada elevasi, aliran air, kerapian pola, akses kendaraan, dan pertemuan paving dengan bangunan atau saluran.",
      },
      {
        title: "Jalan Lingkungan & Perumahan",
        desc:
          "Pekerjaan jalan lingkungan membutuhkan perhatian pada kesiapan tanah dasar, pemadatan, kemiringan, penguncian sisi, serta spesifikasi paving yang disesuaikan dengan lalu lintas.",
      },
      {
        title: "Parkiran Ruko, Kantor & Area Komersial",
        desc:
          "Area parkir memerlukan bidang yang rata, pola yang stabil, drainase yang jelas, serta pemilihan paving sesuai intensitas kendaraan dan pola sirkulasi.",
      },
      {
        title: "Pergudangan, Pabrik & Kawasan Industri",
        desc:
          "Area operasional industri memerlukan evaluasi beban dan kondisi lapangan lebih detail. Pemilihan mutu, ketebalan, lapisan dasar, dan metode pemadatan harus menyesuaikan penggunaan aktual.",
      },
    ],
    costTitle: "Faktor Harga Jasa Pasang Paving Block per m²",
    costIntro:
      "Harga jasa pasang atau borongan paving block tidak tepat jika dihitung dari luas saja. Beberapa proyek dengan luas sama dapat memiliki biaya berbeda karena kondisi dasar dan ruang lingkupnya berbeda.",
    costFactors: [
      {
        title: "Kondisi Tanah & Persiapan Lahan",
        desc:
          "Tanah eksisting yang belum stabil, membutuhkan pembongkaran, penimbunan, perataan, atau pemadatan tambahan akan memengaruhi pekerjaan awal.",
      },
      {
        title: "Luas, Bentuk & Akses Area",
        desc:
          "Luas total, banyaknya sudut/potongan, lebar akses material, serta ruang untuk alat kerja memengaruhi produktivitas pemasangan.",
      },
      {
        title: "Model, Tebal & Mutu Paving",
        desc:
          "Paving 6 cm, 8 cm, atau 10 cm dan mutu K-250, K-300, atau K-400 dipilih berdasarkan produk dan fungsi area, sehingga kebutuhan material dapat berbeda.",
      },
      {
        title: "Lapisan Dasar & Bedding",
        desc:
          "Kebutuhan sub-base, pasir/abu batu untuk leveling, ketebalan hamparan, dan pemadatan ditentukan oleh kondisi area dan rencana penggunaan.",
      },
      {
        title: "Kanstein, Pola & Finishing",
        desc:
          "Pengunci tepi, pola pemasangan, jumlah potongan, pengisian joint, dan compacting akhir menjadi bagian dari ruang lingkup yang perlu diperhitungkan.",
      },
      {
        title: "Lokasi Proyek & Ruang Lingkup",
        desc:
          "Lokasi Jakarta, Tangerang, Bekasi, Depok, atau Bogor serta pilihan material saja, jasa saja, atau paket material + pasang menentukan bentuk penawaran akhir.",
      },
    ],
  },
  en: {
    introTitle: "Paving Block Installation, Turnkey & Contractor Services Across Greater Jakarta",
    introParagraphs: [
      "Kaha Block provides paving block installation for residential driveways, yards, neighborhood roads, parking areas, shophouses, warehouses, industrial facilities, and other paved areas across Greater Jakarta. The scope can cover installation-only work or an integrated material supply and installation package.",
      "Customers use different terms such as paving installation, paving contractor, laying crew, turnkey paving, concrete paver installer, or material + installation. The practical requirement is the same: suitable material selection, a stable base, accurate laying, edge restraint, joint filling, and final compaction.",
      "Project estimates are not based on area alone. Site access, existing ground conditions, levels and drainage, base preparation, paver thickness, concrete grade, laying pattern, curbs, and the intended use of the finished area all affect the work scope.",
    ],
    intentTitle: "Choose the Right Paving Installation Scope",
    intentIntro:
      "Clear work scope helps customers compare quotations fairly and align material, site preparation, and installation requirements.",
    intentCards: [
      { title: "Paving Block Installation", desc: "Laying work for prepared areas or projects where ground preparation requirements have been agreed in advance." },
      { title: "Material + Installation Package", desc: "Integrated procurement and installation covering selected products, quantities, delivery, site work, laying, and supporting requirements." },
      { title: "Field Laying Crew", desc: "Installation crews for residential, commercial, road, parking, warehouse, and project applications." },
      { title: "Paving Contractor / Applicator", desc: "Structured coordination of measurement, specification, procurement, ground work, laying, edge restraint, and finishing." },
      { title: "Curb / Edge Restraint Installation", desc: "Concrete curbs and edge restraints help lock the paving field and define the paved boundary." },
      { title: "Project Consultation & Estimate", desc: "Share project location, area, use, existing condition, and required scope for an initial estimate." },
    ],
    projectTitle: "Installation for Residential, Road, Parking & Industrial Areas",
    projectIntro:
      "Installation specifications vary by site function and expected load. Thickness, grade, pattern, drainage, and base work should follow the actual application.",
    projectCards: [
      { title: "Driveways & Residential Yards", desc: "Focus on levels, drainage, vehicle access, neat patterns, and transitions to buildings or drains." },
      { title: "Neighborhood & Estate Roads", desc: "Ground stability, compaction, slope, edge restraint, and appropriate paver specification are key considerations." },
      { title: "Commercial Parking Areas", desc: "Parking areas need stable levels, defined drainage, suitable pavers, and layouts that match vehicle circulation." },
      { title: "Warehouses & Industrial Facilities", desc: "Operational areas require closer review of loads, ground conditions, thickness, grade, base preparation, and compaction." },
    ],
    costTitle: "Factors Affecting Paving Installation Cost per m²",
    costIntro:
      "Two projects with the same area can require different budgets because site conditions and work scope may differ.",
    costFactors: [
      { title: "Ground Condition & Preparation", desc: "Demolition, filling, leveling, subgrade stabilization, and additional compaction affect preliminary work." },
      { title: "Area Shape & Site Access", desc: "Total area, corners, cutting requirements, access width, and space for equipment affect productivity." },
      { title: "Paver Model, Thickness & Grade", desc: "6/8/10 cm thickness and K-250/K-300/K-400 grades are selected according to product and site use." },
      { title: "Base & Bedding Layers", desc: "Sub-base, bedding material, layer thickness, and compaction requirements depend on project conditions." },
      { title: "Curbs, Pattern & Finishing", desc: "Edge restraints, laying pattern, cuts, joint filling, and final compaction form part of the work scope." },
      { title: "Project Location & Scope", desc: "Jakarta, Tangerang, Bekasi, Depok, Bogor and material-only versus installation packages affect the final quotation." },
    ],
  },
};

export const REGIONAL_SEO_EXPANSION: Record<
  RegionalSlug,
  Record<Locale, ServiceSeoExpansion>
> = {
  jakarta: {
    id: {
      introTitle: "Vendor, Supplier, Jual & Jasa Pasang Paving Block Jakarta",
      introParagraphs: [
        "Kaha Block melayani kebutuhan vendor, supplier, jual dan pengadaan paving block/conblock untuk proyek di Jakarta Selatan, Jakarta Timur, Jakarta Barat, Jakarta Utara, dan Jakarta Pusat. Material dikirim dari fasilitas produksi PT Kaha Sukses Mandiri di Cisauk, Kabupaten Tangerang, sehingga kontraktor, pengembang, perusahaan, dan pemilik proyek dapat meminta material, harga proyek, serta jasa pemasangan dalam satu jalur komunikasi.",
        "Untuk proyek rumah, carport, ruko, area parkir, jalan lingkungan, pergudangan, fasilitas komersial, dan pekerjaan konstruksi lainnya, pelanggan dapat memilih pengadaan material saja atau paket material + pemasangan. Pilihan produk, ketebalan, mutu, pola, dan jumlah kebutuhan ditentukan berdasarkan fungsi area dan kondisi lokasi proyek.",
        "Istilah seperti jual paving block Jakarta, supplier paving block Jakarta, jasa pasang paving block Jakarta, kontraktor paving block Jakarta, tukang paving Jakarta, dan harga paving block per m² memiliki intent yang berbeda. Karena itu halaman ini menghubungkan kebutuhan pengadaan, harga, produk, serta pekerjaan lapangan tanpa mencampur semuanya menjadi satu penawaran generik.",
      ],
      intentTitle: "Layanan Paving Block Jakarta: Vendor, Supplier, Jual, Pasang & Kontraktor",
      intentIntro: "Gunakan jenis layanan yang sesuai dengan kondisi proyek agar kebutuhan material dan pekerjaan dapat dihitung lebih tepat.",
      intentCards: [
        { title: "Vendor / Supplier Paving Block Jakarta", desc: "Pengadaan paving block dan produk pendukung untuk kontraktor, pengembang, perusahaan, serta proyek di lima wilayah administrasi DKI Jakarta dengan pengiriman dari fasilitas produksi Cisauk." },
        { title: "Jual Paving Block & Conblock Jakarta", desc: "Pilihan model paving, ketebalan, mutu, dan warna untuk kebutuhan rumah, komersial, parkir, jalan lingkungan, dan proyek lainnya." },
        { title: "Jasa Pasang & Tukang Paving Jakarta", desc: "Layanan pemasangan untuk area yang sudah siap maupun pekerjaan yang memerlukan penyesuaian persiapan dasar sesuai kondisi lapangan." },
        { title: "Kontraktor / Borongan Paving Jakarta", desc: "Paket pekerjaan yang dapat menggabungkan material, pengiriman, persiapan, pemasangan, kanstein, dan finishing berdasarkan ruang lingkup proyek." },
        { title: "Harga Paving Block Jakarta per m²", desc: "Harga material dan biaya pasang perlu dipisahkan menurut spesifikasi, volume, kondisi lahan, dan lokasi proyek agar perbandingan penawaran setara." },
        { title: "Paving Block Terdekat untuk Proyek Jakarta", desc: "Untuk pencarian berbasis lokasi, konfirmasikan alamat proyek karena jarak, akses, dan kebutuhan penurunan material menjadi bagian perencanaan distribusi." },
      ],
      projectTitle: "Kebutuhan Paving Block untuk Proyek di Jakarta",
      projectIntro: "Karakter proyek Jakarta beragam, dari hunian padat sampai area komersial dan logistik. Setiap fungsi membutuhkan pendekatan material dan pemasangan yang berbeda.",
      projectCards: [
        { title: "Rumah, Carport & Cluster", desc: "Pengadaan dan pemasangan untuk carport, halaman, akses rumah, serta kawasan perumahan dengan perhatian pada drainase dan elevasi." },
        { title: "Ruko, Kantor & Area Parkir", desc: "Perkerasan area usaha dan parkir membutuhkan permukaan rapi, stabil, serta spesifikasi yang sesuai intensitas kendaraan." },
        { title: "Gudang & Area Logistik", desc: "Area operasional dengan kendaraan niaga memerlukan evaluasi ketebalan, mutu, kondisi dasar, dan pola perkerasan sesuai penggunaan." },
        { title: "Jalan Lingkungan & Fasilitas Umum", desc: "Pekerjaan jalan lingkungan, pedestrian, halaman fasilitas, dan akses publik membutuhkan koordinasi elevasi, batas area, serta penguncian tepi." },
      ],
      costTitle: "Apa yang Menentukan Harga Paving Block & Jasa Pasang di Jakarta?",
      costIntro: "Harga proyek Jakarta bukan sekadar angka per meter. Perhitungan perlu memisahkan material, distribusi, dan pekerjaan lapangan.",
      costFactors: [
        { title: "Spesifikasi Produk", desc: "Model, ketebalan, mutu K-250/K-300/K-400, warna, dan jumlah unit per m² memengaruhi kebutuhan material." },
        { title: "Volume Proyek", desc: "Luas area dan total volume pemesanan menjadi dasar pengadaan dan perencanaan pengiriman." },
        { title: "Kondisi Lahan", desc: "Pembongkaran, perataan, timbunan, pemadatan, dan bedding dapat mengubah ruang lingkup jasa pasang." },
        { title: "Akses Lokasi Jakarta", desc: "Lebar jalan, ruang bongkar, jam akses, dan kondisi area proyek perlu dipertimbangkan pada distribusi material." },
        { title: "Kanstein & Finishing", desc: "Pengunci tepi, potongan, pola, joint filling, dan pemadatan akhir termasuk elemen pekerjaan tambahan." },
        { title: "Material Saja atau Paket Pasang", desc: "Penawaran berbeda antara pembelian material, jasa pemasangan saja, dan paket borongan material + pasang." },
      ],
    },
    en: {
      introTitle: "Paving Block Supplier, Sales & Installation for Jakarta",
      introParagraphs: [
        "Kaha Block supplies paving blocks and concrete pavers for South, East, West, North, and Central Jakarta from PT Kaha Sukses Mandiri's manufacturing facility in Cisauk, Tangerang Regency.",
        "Customers can order materials only or combine procurement with installation for residential, parking, commercial, road, warehouse, and other project applications.",
        "This page separates supplier, product sales, installation, contractor, and pricing intent so customers can match the right service to the actual project requirement.",
      ],
      intentTitle: "Jakarta Paving Supply, Sales, Installation & Contracting",
      intentIntro: "Choose the relevant service scope to improve material and work estimates.",
      intentCards: [
        { title: "Paving Block Supplier Jakarta", desc: "Direct supply for all five Jakarta administrative areas from the Cisauk production facility." },
        { title: "Paving Block & Conblock Sales", desc: "Product models, thicknesses, grades, and colors for residential, commercial, road, and parking projects." },
        { title: "Paving Installation Crew", desc: "Laying services for prepared sites or projects requiring agreed base preparation." },
        { title: "Turnkey Paving Contractor", desc: "Integrated material, delivery, preparation, laying, curbs, and finishing based on project scope." },
        { title: "Jakarta Price per m²", desc: "Material and installation costs should be compared using the same specification and work scope." },
        { title: "Location-Based Supply", desc: "Project address, access, and offloading conditions are considered when planning material distribution." },
      ],
      projectTitle: "Paving Applications Across Jakarta",
      projectIntro: "Residential, commercial, logistics, and public-area projects require different material and installation considerations.",
      projectCards: [
        { title: "Homes & Driveways", desc: "Paving for driveways, yards, access paths, and residential estates." },
        { title: "Shophouses & Parking", desc: "Stable paved surfaces for retail, office, and commercial parking areas." },
        { title: "Warehouses & Logistics", desc: "Material and installation planning based on operational loads and site conditions." },
        { title: "Neighborhood Roads & Public Areas", desc: "Paving for local roads, pedestrian areas, facilities, and shared access routes." },
      ],
      costTitle: "What Determines Jakarta Paving & Installation Pricing?",
      costIntro: "Project pricing should separate material, logistics, and site work.",
      costFactors: [
        { title: "Product Specification", desc: "Model, thickness, grade, color, and coverage per m² determine material requirements." },
        { title: "Project Volume", desc: "Total area and order quantity affect procurement and delivery planning." },
        { title: "Site Condition", desc: "Demolition, leveling, filling, compaction, and bedding change installation scope." },
        { title: "Jakarta Site Access", desc: "Road width, unloading area, access windows, and site constraints affect distribution." },
        { title: "Curbs & Finishing", desc: "Edge restraint, cuts, laying pattern, joint filling, and final compaction are additional work elements." },
        { title: "Material vs Turnkey", desc: "Material-only, labor-only, and material + installation packages are quoted differently." },
      ],
    },
  },
  tangerang: {
    id: {
      introTitle: "Pabrik, Vendor, Supplier & Jasa Pasang Paving Block Tangerang",
      introParagraphs: [
        "Tangerang merupakan wilayah terdekat dengan fasilitas produksi utama Kaha Block di Cisauk, Kabupaten Tangerang. Karena itu halaman Tangerang diarahkan untuk kebutuhan pabrik, vendor paving block Tangerang, supplier/pemasok, pengadaan conblock/konblok, harga langsung pabrik, serta jasa pasang untuk Kabupaten Tangerang, Kota Tangerang, dan Tangerang Selatan.",
        "Kebutuhan proyek dapat berupa pembelian material saja, pengadaan volume proyek, atau paket pekerjaan material + pemasangan. Produk dipilih berdasarkan model, ketebalan, mutu, warna, fungsi area, dan rencana beban. Untuk pemasangan, kondisi tanah, elevasi, drainase, base, kanstein, pola, dan pemadatan perlu dihitung secara terpisah dari harga material.",
        "Pelanggan yang mencari pabrik paving block terdekat, produsen paving block Tangerang, toko atau tempat jual paving block, jasa pasang paving block Tangerang, maupun kontraktor paving block pada dasarnya membutuhkan jalur yang sama: memastikan lokasi proyek, luas area, spesifikasi material, ketersediaan, pengiriman, dan ruang lingkup pekerjaan.",
      ],
      intentTitle: "Layanan Paving Block Tangerang dari Pabrik Cisauk",
      intentIntro: "Posisi pabrik di Cisauk menjadi basis pengadaan untuk proyek Tangerang Raya, sementara kebutuhan pemasangan disesuaikan per lokasi.",
      intentCards: [
        { title: "Pabrik & Produsen Paving Block Tangerang", desc: "Produksi PT Kaha Sukses Mandiri berlokasi di Cisauk, Kabupaten Tangerang untuk kebutuhan paving block dan produk beton pendukung." },
        { title: "Vendor / Supplier Paving Block Tangerang", desc: "Pengadaan material proyek untuk Kabupaten Tangerang, Kota Tangerang, dan Tangerang Selatan dengan pilihan model, mutu, ketebalan, volume, serta penawaran sesuai kebutuhan." },
        { title: "Jasa Pasang Paving Block Tangerang", desc: "Pemasangan untuk carport, halaman, jalan lingkungan, ruko, parkir, pergudangan, kawasan industri, dan area proyek lainnya." },
        { title: "Kontraktor / Borongan Paving Tangerang", desc: "Paket material + pasang dapat mencakup pengadaan, persiapan area, pemasangan, kanstein, joint filling, dan pemadatan akhir." },
        { title: "Harga Paving Block Tangerang", desc: "Harga material per m² dan biaya pasang dipengaruhi model, ketebalan, mutu, volume, kondisi lahan, serta lokasi proyek." },
        { title: "Paving Block Terdekat dari Cisauk", desc: "Untuk proyek di sekitar Cisauk dan Tangerang, kirim titik lokasi agar kebutuhan distribusi, akses, dan estimasi volume dapat dicek lebih awal." },
      ],
      projectTitle: "Aplikasi Paving Block untuk Proyek Tangerang Raya",
      projectIntro: "Kawasan hunian, komersial, pergudangan, dan industri Tangerang memiliki kebutuhan perkerasan yang berbeda.",
      projectCards: [
        { title: "Perumahan, Carport & Halaman", desc: "Paving untuk rumah, cluster, halaman, garasi, dan akses internal dengan perhatian pada elevasi dan aliran air." },
        { title: "Kawasan Industri & Pergudangan", desc: "Perkerasan area operasional, loading, dan akses kendaraan memerlukan spesifikasi sesuai beban dan kondisi dasar." },
        { title: "Ruko, Komersial & Parkiran", desc: "Paving untuk area usaha dan parkir dengan kebutuhan kerapian pola, kestabilan, serta sirkulasi kendaraan." },
        { title: "Jalan Lingkungan & Fasilitas", desc: "Pekerjaan jalan warga, pedestrian, fasilitas umum, serta akses kawasan membutuhkan penguncian tepi dan pemadatan yang tepat." },
      ],
      costTitle: "Faktor Harga Paving Block & Pemasangan di Tangerang",
      costIntro: "Lokasi dekat pabrik membantu jalur distribusi, tetapi harga proyek tetap bergantung pada spesifikasi dan pekerjaan yang benar-benar dibutuhkan.",
      costFactors: [
        { title: "Model & Mutu", desc: "Truepave, Half/Tahu, Hexagonal, Ubin, Topi Uskup, kanstein, serta mutu produk memiliki kebutuhan berbeda." },
        { title: "Ketebalan 6/8/10 cm", desc: "Pilihan ketebalan mengikuti tipe produk dan fungsi area, bukan dipilih hanya berdasarkan harga." },
        { title: "Volume dan Luas Area", desc: "Perhitungan kebutuhan m² digunakan untuk menentukan jumlah material dan jadwal pengadaan." },
        { title: "Kondisi Dasar", desc: "Tanah dasar, leveling, sub-base, bedding, dan kebutuhan pemadatan memengaruhi biaya jasa." },
        { title: "Akses & Penurunan", desc: "Alamat proyek, akses kendaraan, dan area penurunan perlu diperhitungkan dalam pengiriman." },
        { title: "Ruang Lingkup Pasang", desc: "Jasa saja, material saja, atau paket borongan material + pemasangan memiliki struktur biaya berbeda." },
      ],
    },
    en: {
      introTitle: "Paving Block Factory, Supplier, Sales & Installation in Tangerang",
      introParagraphs: [
        "Kaha Block's primary production facility is located in Cisauk, Tangerang Regency, making this page the core route for factory, supplier, sales, pricing, and installation intent across Greater Tangerang.",
        "Projects may require material-only procurement, project-volume supply, or an integrated material + installation package.",
        "Factory-near-me, paving supplier, installer, contractor, and price searches are handled by first confirming project location, area, specification, stock, delivery, and work scope.",
      ],
      intentTitle: "Tangerang Paving Services from the Cisauk Factory",
      intentIntro: "The Cisauk plant supports procurement while site work is estimated according to actual project conditions.",
      intentCards: [
        { title: "Paving Factory & Manufacturer", desc: "PT Kaha Sukses Mandiri manufactures paving and supporting concrete products in Cisauk, Tangerang Regency." },
        { title: "Supplier & Paving Sales", desc: "Material procurement for Tangerang Regency, Tangerang City, and South Tangerang." },
        { title: "Paving Installation", desc: "Installation for homes, roads, commercial areas, parking, warehouses, industrial sites, and other applications." },
        { title: "Turnkey Paving Contractor", desc: "Integrated procurement, site preparation, laying, curbs, joint filling, and final compaction." },
        { title: "Tangerang Paving Prices", desc: "Material and installation costs depend on model, thickness, grade, volume, site condition, and location." },
        { title: "Paving Supply Near Cisauk", desc: "Share the project location to review distribution, access, and initial volume requirements." },
      ],
      projectTitle: "Paving Applications Across Greater Tangerang",
      projectIntro: "Residential, commercial, warehouse, and industrial areas have different pavement requirements.",
      projectCards: [
        { title: "Residential & Driveways", desc: "Paving for homes, estates, yards, garages, and internal access routes." },
        { title: "Industrial & Warehousing", desc: "Operational paving planned around loads, traffic, and base conditions." },
        { title: "Retail & Parking", desc: "Paving for shops, commercial forecourts, and parking circulation." },
        { title: "Neighborhood Roads & Facilities", desc: "Local roads, pedestrian areas, public facilities, and shared access routes." },
      ],
      costTitle: "Tangerang Paving & Installation Cost Factors",
      costIntro: "Proximity to the factory supports logistics, but project pricing still depends on specification and work scope.",
      costFactors: [
        { title: "Model & Grade", desc: "Product model and concrete grade determine material requirements." },
        { title: "6/8/10 cm Thickness", desc: "Thickness follows product availability and intended use." },
        { title: "Project Volume", desc: "Area and order quantity determine material volume and supply planning." },
        { title: "Base Condition", desc: "Subgrade, leveling, bedding, and compaction affect installation work." },
        { title: "Access & Offloading", desc: "Site address, vehicle access, and unloading conditions are part of delivery planning." },
        { title: "Installation Scope", desc: "Labor-only, material-only, and turnkey packages have different pricing structures." },
      ],
    },
  },
  bekasi: {
    id: {
      introTitle: "Vendor, Supplier & Jasa Pasang Paving Block Bekasi dan Cikarang",
      introParagraphs: [
        "Kaha Block melayani sebagai vendor dan supplier paving block/conblock untuk Kota Bekasi dan Kabupaten Bekasi, termasuk kebutuhan proyek di Cikarang. Material berasal dari fasilitas produksi Cisauk, sedangkan penawaran proyek, pengiriman, dan pemasangan menyesuaikan alamat, luas/volume, akses, dan ruang lingkup pekerjaan.",
        "Bekasi dan Cikarang memiliki banyak kebutuhan perkerasan untuk perumahan, kawasan industri, pergudangan, ruko, parkir, jalan lingkungan, dan fasilitas usaha. Karena itu pencarian supplier paving block Bekasi, jual paving block Bekasi, paving block Cikarang, jasa pasang paving block Bekasi, dan kontraktor paving block perlu diarahkan pada spesifikasi dan penggunaan yang tepat, bukan sekadar harga terendah.",
        "Untuk material saja, pelanggan dapat menentukan model, ketebalan, mutu, warna, dan volume. Untuk pekerjaan pemasangan, perhitungan ditambah kondisi lahan, base, leveling, kanstein, pola, pemadatan, serta pekerjaan pendukung yang diperlukan.",
      ],
      intentTitle: "Pengadaan & Jasa Paving Block Bekasi / Cikarang",
      intentIntro: "Layanan dibagi berdasarkan pengadaan material, pekerjaan pasang, dan paket borongan agar kebutuhan proyek lebih jelas.",
      intentCards: [
        { title: "Vendor / Supplier Paving Block Bekasi", desc: "Pasokan paving block dan produk pendukung untuk kontraktor, perusahaan, kawasan industri, gudang, serta proyek Kota/Kabupaten Bekasi dari fasilitas produksi Cisauk." },
        { title: "Jual Paving Block Cikarang", desc: "Pengadaan untuk proyek Cikarang dan wilayah Kabupaten Bekasi dengan pilihan model, ketebalan, dan mutu sesuai kebutuhan." },
        { title: "Jasa Pasang Paving Block Bekasi", desc: "Pemasangan untuk rumah, jalan lingkungan, parkir, ruko, gudang, pabrik, dan area proyek lain." },
        { title: "Kontraktor / Borongan Paving Bekasi", desc: "Paket material + pasang dapat mencakup pengadaan, persiapan, pemasangan, penguncian tepi, dan finishing." },
        { title: "Harga Paving Block Bekasi per m²", desc: "Harga final mengikuti spesifikasi material, volume, lokasi, akses, serta pekerjaan lapangan yang dibutuhkan." },
        { title: "Paving Block Terdekat untuk Bekasi", desc: "Kirim titik proyek agar kebutuhan pengiriman, penurunan, dan estimasi awal dapat disesuaikan dengan lokasi aktual." },
      ],
      projectTitle: "Paving Block untuk Industri, Gudang, Rumah & Parkir Bekasi",
      projectIntro: "Jenis proyek Bekasi dan Cikarang membutuhkan pendekatan yang berbeda terhadap beban, akses, drainase, dan pemadatan.",
      projectCards: [
        { title: "Kawasan Industri Cikarang & Bekasi", desc: "Perkerasan area operasional perlu disesuaikan dengan beban, lalu lintas, kondisi tanah, ketebalan, dan mutu produk." },
        { title: "Pergudangan & Area Logistik", desc: "Paving untuk akses gudang, halaman operasional, dan parkir kendaraan niaga perlu memperhatikan dasar serta sirkulasi." },
        { title: "Perumahan, Cluster & Carport", desc: "Pemasangan untuk halaman, carport, jalan internal, dan akses hunian dengan perhatian pada elevasi dan drainase." },
        { title: "Ruko, Usaha & Area Parkir", desc: "Permukaan parkir dan area usaha membutuhkan susunan stabil, batas tepi yang jelas, serta pola yang rapi." },
      ],
      costTitle: "Faktor Harga Paving Block & Jasa Pasang Bekasi",
      costIntro: "Perbandingan harga perlu menggunakan spesifikasi dan ruang lingkup yang sama.",
      costFactors: [
        { title: "Produk & Spesifikasi", desc: "Model, ketebalan, mutu, warna, dan daya tutup menentukan kebutuhan material." },
        { title: "Luas & Volume", desc: "Total m² memengaruhi jumlah produk, distribusi, dan jadwal pelaksanaan." },
        { title: "Akses Bekasi / Cikarang", desc: "Alamat, akses truk, ruang penurunan, dan kondisi kawasan perlu diperhitungkan." },
        { title: "Persiapan Lahan", desc: "Pembongkaran, leveling, sub-base, bedding, dan pemadatan dapat menjadi bagian pekerjaan." },
        { title: "Kanstein & Detail Pemasangan", desc: "Pengunci tepi, pola, potongan, joint filling, dan finishing memengaruhi kebutuhan tenaga." },
        { title: "Material atau Borongan", desc: "Harga material saja berbeda dengan jasa pasang atau paket lengkap material + pemasangan." },
      ],
    },
    en: {
      introTitle: "Paving Supplier, Sales & Installation for Bekasi and Cikarang",
      introParagraphs: [
        "Kaha Block supplies paving blocks for Bekasi City and Bekasi Regency, including Cikarang, from the Cisauk manufacturing facility.",
        "Bekasi and Cikarang projects include industrial estates, warehouses, residential sites, retail areas, parking, and neighborhood roads.",
        "Material-only procurement and installation packages are estimated using specification, volume, site access, and ground conditions.",
      ],
      intentTitle: "Bekasi / Cikarang Paving Supply & Installation",
      intentIntro: "Separate material procurement, installation, and turnkey scope for accurate project planning.",
      intentCards: [
        { title: "Bekasi Paving Supplier", desc: "Direct supply for Bekasi City and Regency from the Cisauk production facility." },
        { title: "Paving Sales for Cikarang", desc: "Product supply with model, thickness, and grade selections for Cikarang projects." },
        { title: "Bekasi Paving Installation", desc: "Installation for homes, roads, parking, shops, warehouses, factories, and other sites." },
        { title: "Turnkey Paving Contractor", desc: "Integrated material, preparation, laying, edge restraint, and finishing." },
        { title: "Bekasi Price per m²", desc: "Final pricing follows material specification, volume, access, and required site work." },
        { title: "Location-Based Supply", desc: "Project location helps determine delivery, offloading, and initial planning." },
      ],
      projectTitle: "Industrial, Warehouse, Residential & Parking Paving",
      projectIntro: "Bekasi and Cikarang projects vary in load, access, drainage, and compaction requirements.",
      projectCards: [
        { title: "Industrial Estates", desc: "Operational paving planned around load, traffic, soil condition, thickness, and grade." },
        { title: "Warehouses & Logistics", desc: "Paving for yards, access lanes, and commercial vehicle parking." },
        { title: "Residential & Driveways", desc: "Paving for homes, estates, carports, and internal roads." },
        { title: "Retail & Parking", desc: "Stable paved surfaces for shops, offices, and parking areas." },
      ],
      costTitle: "Bekasi Paving & Installation Cost Factors",
      costIntro: "Compare quotations using the same product specification and work scope.",
      costFactors: [
        { title: "Product Specification", desc: "Model, thickness, grade, color, and coverage determine material requirements." },
        { title: "Area & Volume", desc: "Total m² affects product quantity, distribution, and scheduling." },
        { title: "Bekasi / Cikarang Access", desc: "Truck access, unloading space, and estate restrictions affect logistics." },
        { title: "Ground Preparation", desc: "Demolition, leveling, base, bedding, and compaction may be required." },
        { title: "Curbs & Laying Details", desc: "Edge restraint, pattern, cuts, joint filling, and finishing affect labor scope." },
        { title: "Material or Turnkey", desc: "Material-only, labor-only, and integrated packages are priced differently." },
      ],
    },
  },
  depok: {
    id: {
      introTitle: "Vendor, Supplier & Jasa Pasang Paving Block Depok",
      introParagraphs: [
        "Kaha Block melayani sebagai vendor dan supplier paving block/conblock untuk Kota Depok dari fasilitas produksi Cisauk, Kabupaten Tangerang. Halaman ini menargetkan kebutuhan pengadaan proyek, jual material, jasa pasang, kontraktor paving, harga per m², serta paket material + pemasangan.",
        "Kebutuhan Depok banyak berasal dari rumah tinggal, carport, halaman, cluster perumahan, jalan lingkungan, ruko, area parkir, fasilitas publik, dan akses kawasan. Masing-masing fungsi membutuhkan pemilihan produk, ketebalan, mutu, kondisi dasar, dan pola pemasangan yang sesuai.",
        "Untuk memperoleh estimasi yang relevan, sampaikan lokasi proyek, luas area, kondisi lahan, fungsi area, serta apakah kebutuhan hanya material atau sekaligus pemasangan. Data ini lebih berguna daripada membandingkan angka harga tanpa spesifikasi yang sama.",
      ],
      intentTitle: "Layanan Supplier & Jasa Paving Block Depok",
      intentIntro: "Pengadaan dan pemasangan dapat disusun terpisah atau dalam satu paket sesuai kondisi proyek.",
      intentCards: [
        { title: "Vendor / Supplier Paving Block Depok", desc: "Pengadaan material paving block dan produk pendukung sebagai kebutuhan vendor proyek Kota Depok dari fasilitas produksi Cisauk." },
        { title: "Jual Paving Block / Conblock Depok", desc: "Pilihan produk untuk rumah, carport, jalan, parkir, ruko, dan kebutuhan kawasan lainnya." },
        { title: "Jasa Pasang Paving Block Depok", desc: "Pemasangan pada area yang siap maupun proyek yang membutuhkan persiapan lahan berdasarkan kondisi eksisting." },
        { title: "Kontraktor / Borongan Paving Depok", desc: "Paket yang dapat menggabungkan material, distribusi, pekerjaan dasar, pemasangan, kanstein, dan finishing." },
        { title: "Harga Paving Block Depok per m²", desc: "Perhitungan harga mengikuti model, ketebalan, mutu, volume, kondisi lahan, dan ruang lingkup pemasangan." },
        { title: "Paving Block Terdekat untuk Depok", desc: "Konfirmasi alamat proyek agar distribusi dan kebutuhan lapangan dapat direncanakan berdasarkan lokasi aktual." },
      ],
      projectTitle: "Paving Block untuk Rumah, Jalan Lingkungan & Parkir Depok",
      projectIntro: "Area hunian dan jalan lingkungan membutuhkan perhatian pada drainase, elevasi, akses kendaraan, dan kestabilan dasar.",
      projectCards: [
        { title: "Carport & Halaman Rumah", desc: "Pemasangan untuk area kendaraan dan halaman dengan penyesuaian elevasi, aliran air, serta sambungan ke bangunan." },
        { title: "Cluster & Jalan Perumahan", desc: "Pekerjaan jalan internal membutuhkan dasar stabil, penguncian tepi, serta ketebalan sesuai penggunaan." },
        { title: "Gang & Jalan Lingkungan", desc: "Perkerasan lingkungan perlu memperhatikan akses kerja, drainase, pola, dan penyelesaian sisi area." },
        { title: "Ruko, Usaha & Parkiran", desc: "Area usaha membutuhkan permukaan rapi, stabil, dan sesuai intensitas kendaraan." },
      ],
      costTitle: "Faktor Harga Paving Block & Jasa Pasang Depok",
      costIntro: "Harga material dan biaya pemasangan perlu dihitung berdasarkan kondisi proyek, bukan hanya luas.",
      costFactors: [
        { title: "Model & Ketebalan", desc: "Tipe produk dan ketebalan yang tersedia menentukan jumlah serta kebutuhan per m²." },
        { title: "Mutu & Fungsi Area", desc: "Mutu dipilih sesuai produk dan rencana penggunaan, dari pedestrian sampai area kendaraan." },
        { title: "Kondisi Lahan", desc: "Perataan, penimbunan, base, bedding, dan pemadatan dapat menambah pekerjaan." },
        { title: "Luas & Bentuk Area", desc: "Sudut, potongan, bentuk tidak beraturan, dan total luas memengaruhi produktivitas." },
        { title: "Akses Proyek", desc: "Jalan masuk, ruang bongkar, dan akses alat perlu dipertimbangkan." },
        { title: "Paket Pekerjaan", desc: "Material saja, jasa pasang, atau borongan material + pasang memiliki perhitungan berbeda." },
      ],
    },
    en: {
      introTitle: "Paving Supplier, Sales & Installation for Depok",
      introParagraphs: [
        "Kaha Block supplies paving blocks for Depok City from the Cisauk manufacturing facility.",
        "Typical projects include residential driveways, yards, estates, neighborhood roads, retail areas, parking, and public facilities.",
        "Share location, area, site condition, intended use, and material-only or installation scope for a relevant estimate.",
      ],
      intentTitle: "Depok Paving Supply & Installation Services",
      intentIntro: "Procurement and installation can be separated or combined according to project needs.",
      intentCards: [
        { title: "Depok Paving Supplier", desc: "Paving and supporting materials supplied for Depok projects." },
        { title: "Paving & Conblock Sales", desc: "Products for homes, driveways, roads, parking, retail, and other applications." },
        { title: "Depok Installation Service", desc: "Installation for prepared sites or projects requiring ground preparation." },
        { title: "Turnkey Paving Contractor", desc: "Material, delivery, base work, laying, curbs, and finishing in one scope." },
        { title: "Depok Price per m²", desc: "Pricing depends on model, thickness, grade, volume, site condition, and work scope." },
        { title: "Location-Based Supply", desc: "Project address helps plan distribution and field requirements." },
      ],
      projectTitle: "Residential, Neighborhood Road & Parking Paving in Depok",
      projectIntro: "Residential and local-road projects require attention to drainage, elevation, access, and base stability.",
      projectCards: [
        { title: "Driveways & Yards", desc: "Vehicle and yard paving with attention to levels and drainage." },
        { title: "Estates & Residential Roads", desc: "Internal roads with suitable base, edge restraint, and paver specification." },
        { title: "Neighborhood Access", desc: "Local access roads planned around work access, drainage, pattern, and edge finishing." },
        { title: "Retail & Parking", desc: "Stable paved surfaces for shops, offices, and parking." },
      ],
      costTitle: "Depok Paving & Installation Cost Factors",
      costIntro: "Material and installation costs should reflect actual project conditions.",
      costFactors: [
        { title: "Model & Thickness", desc: "Product type and available thickness affect coverage and quantity." },
        { title: "Grade & Application", desc: "Concrete grade is selected according to the product and intended use." },
        { title: "Site Condition", desc: "Leveling, filling, base, bedding, and compaction can change work scope." },
        { title: "Area Shape", desc: "Corners, cuts, irregular shapes, and total area affect installation productivity." },
        { title: "Site Access", desc: "Road access, unloading space, and equipment access are considered." },
        { title: "Package Scope", desc: "Material-only, installation-only, and turnkey packages are calculated differently." },
      ],
    },
  },
  bogor: {
    id: {
      introTitle: "Vendor, Supplier & Jasa Pasang Paving Block Bogor",
      introParagraphs: [
        "Kaha Block melayani sebagai vendor dan supplier paving block/conblock untuk Kota Bogor dan Kabupaten Bogor dari fasilitas produksi PT Kaha Sukses Mandiri di Cisauk, Kabupaten Tangerang. Halaman ini menggabungkan kebutuhan pengadaan proyek, jual material, jasa pasang, kontraktor paving, serta harga per m².",
        "Wilayah Bogor memiliki kebutuhan beragam untuk rumah, villa, perumahan, jalan lingkungan, akses kawasan, area parkir, ruko, fasilitas wisata, dan proyek komersial. Kondisi kontur dan drainase pada sebagian lokasi membuat evaluasi elevasi, kemiringan, kondisi tanah dasar, serta penguncian sisi menjadi penting sebelum pemasangan.",
        "Pelanggan dapat membeli material saja atau meminta paket material + pemasangan. Untuk perhitungan, sampaikan lokasi, luas area, fungsi lahan, kondisi eksisting, model yang diinginkan bila sudah ada, dan kebutuhan mutu/ketebalan bila telah ditentukan oleh proyek.",
      ],
      intentTitle: "Layanan Supplier & Kontraktor Paving Block Bogor",
      intentIntro: "Setiap kebutuhan diarahkan ke jalur pengadaan atau pemasangan yang sesuai agar spesifikasi dan penawarannya jelas.",
      intentCards: [
        { title: "Vendor / Supplier Paving Block Bogor", desc: "Pengadaan paving block dan produk pendukung sebagai kebutuhan vendor proyek Kota Bogor dan Kabupaten Bogor dari fasilitas produksi Cisauk." },
        { title: "Jual Paving Block / Conblock Bogor", desc: "Pilihan produk untuk hunian, villa, jalan, area usaha, parkir, fasilitas, dan proyek kawasan." },
        { title: "Jasa Pasang Paving Block Bogor", desc: "Pemasangan dengan perhatian pada kondisi tanah, elevasi, drainase, base, bedding, dan penguncian tepi." },
        { title: "Kontraktor / Borongan Paving Bogor", desc: "Paket material + pasang dapat disusun berdasarkan luas, spesifikasi, kondisi lapangan, dan kebutuhan pendukung." },
        { title: "Harga Paving Block Bogor per m²", desc: "Harga material dan jasa dipisahkan menurut spesifikasi, volume, lokasi, akses, dan kondisi area." },
        { title: "Paving Block Terdekat untuk Bogor", desc: "Kirim titik lokasi proyek untuk mengecek jalur distribusi, kebutuhan penurunan, dan perencanaan pemasangan." },
      ],
      projectTitle: "Paving Block untuk Hunian, Jalan & Area Komersial Bogor",
      projectIntro: "Kontur, curah hujan, drainase, dan fungsi lahan menjadi pertimbangan praktis dalam perencanaan perkerasan.",
      projectCards: [
        { title: "Rumah, Villa & Perumahan", desc: "Paving untuk carport, halaman, akses rumah, dan jalan internal dengan perhatian pada elevasi serta drainase." },
        { title: "Jalan Lingkungan & Akses Kawasan", desc: "Pekerjaan perkerasan jalan perlu dasar stabil, penguncian sisi, kemiringan, dan sistem aliran air yang sesuai." },
        { title: "Ruko, Usaha & Parkiran", desc: "Area usaha membutuhkan bidang yang rapi, stabil, dan sesuai pola sirkulasi kendaraan." },
        { title: "Fasilitas & Kawasan Komersial", desc: "Paving untuk fasilitas, area publik, dan kawasan komersial disesuaikan dengan kebutuhan fungsi dan intensitas penggunaan." },
      ],
      costTitle: "Faktor Harga Paving Block & Jasa Pasang Bogor",
      costIntro: "Perhitungan proyek Bogor perlu memperhatikan spesifikasi serta kondisi lokasi, bukan hanya harga material per m².",
      costFactors: [
        { title: "Spesifikasi Material", desc: "Model, ketebalan, mutu, warna, dan jumlah kebutuhan menentukan nilai material." },
        { title: "Kondisi Kontur", desc: "Perbedaan elevasi, kemiringan, dan kebutuhan perataan dapat menambah pekerjaan persiapan." },
        { title: "Drainase", desc: "Arah aliran air dan pertemuan dengan saluran perlu dipertimbangkan sebelum pemasangan." },
        { title: "Akses Lokasi", desc: "Jalur kendaraan, area bongkar, dan akses alat memengaruhi perencanaan lapangan." },
        { title: "Pengunci Tepi & Finishing", desc: "Kanstein, potongan, pola, joint filling, dan compacting termasuk komponen pekerjaan." },
        { title: "Ruang Lingkup", desc: "Material saja, jasa saja, atau paket borongan penuh memiliki struktur penawaran berbeda." },
      ],
    },
    en: {
      introTitle: "Paving Supplier, Sales & Installation for Bogor",
      introParagraphs: [
        "Kaha Block supplies paving blocks for Bogor City and Bogor Regency from PT Kaha Sukses Mandiri's Cisauk production facility.",
        "Projects range from homes and villas to neighborhood roads, parking, retail areas, public facilities, and commercial sites.",
        "Site contour, drainage, ground condition, access, material specification, and installation scope are reviewed before estimating the project.",
      ],
      intentTitle: "Bogor Paving Supply & Contractor Services",
      intentIntro: "Procurement and installation are aligned with actual project requirements.",
      intentCards: [
        { title: "Bogor Paving Supplier", desc: "Material supply for Bogor City and Regency from the Cisauk production facility." },
        { title: "Paving & Conblock Sales", desc: "Products for homes, villas, roads, parking, retail, facilities, and other projects." },
        { title: "Bogor Installation Service", desc: "Installation planned around ground condition, levels, drainage, base, bedding, and edge restraint." },
        { title: "Turnkey Paving Contractor", desc: "Integrated material and installation packages based on specification and field conditions." },
        { title: "Bogor Price per m²", desc: "Material and labor pricing follows specification, volume, access, and work scope." },
        { title: "Location-Based Supply", desc: "Share the project location for distribution and site planning." },
      ],
      projectTitle: "Residential, Road & Commercial Paving in Bogor",
      projectIntro: "Terrain, drainage, and site use are practical considerations in pavement planning.",
      projectCards: [
        { title: "Homes, Villas & Estates", desc: "Paving for driveways, yards, access, and residential roads." },
        { title: "Neighborhood & Estate Roads", desc: "Stable base, edge restraint, slope, and drainage are important considerations." },
        { title: "Retail & Parking", desc: "Stable paved surfaces for shops, offices, and vehicle circulation." },
        { title: "Facilities & Commercial Areas", desc: "Paving specifications aligned with function and traffic intensity." },
      ],
      costTitle: "Bogor Paving & Installation Cost Factors",
      costIntro: "Project pricing should consider material specification and actual site conditions.",
      costFactors: [
        { title: "Material Specification", desc: "Model, thickness, grade, color, and quantity determine material cost." },
        { title: "Site Contour", desc: "Elevation differences, slopes, and leveling needs affect preparation." },
        { title: "Drainage", desc: "Water flow and connections to drains should be considered before laying." },
        { title: "Site Access", desc: "Vehicle route, unloading space, and equipment access affect field planning." },
        { title: "Edge Restraint & Finishing", desc: "Curbs, cuts, pattern, joint filling, and compaction are part of the scope." },
        { title: "Work Scope", desc: "Material-only, labor-only, and turnkey packages are quoted differently." },
      ],
    },
  },
};
