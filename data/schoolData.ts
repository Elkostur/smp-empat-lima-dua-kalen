// Static Default Data Fallback (Synchronized with latest database backup)
// Backup Date: 2026-10-10T15:32:48.139Z

export interface SchoolInfo {
  name: string;
  shortName: string;
  foundation: string;
  npsn: string;
  accreditation: string;
  address: string;
  district: string;
  regency: string;
  province: string;
  postalCode: string;
  phone: string;
  whatsapp: string;
  email: string;
  operatingHours: string;
  principal: string;
  principalTitle: string;
  principalQuote: string;
  principalPhoto: string;
  history: string;
  vision: string;
  missions: string[];
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    youtube: string;
    tiktok: string;
  };
  tagline?: string;
  youtubeVideoUrl?: string;
  googleMapsEmbedUrl?: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  tagline?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  imageUrl?: string;
  // Compatibility fields used across admin/page.tsx
  badge?: string;
  description?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  bgImage?: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  readTime: string;
  imageUrl: string;
  image?: string;
  summary: string;
  content: string;
  tags: string[];
  featured?: boolean;
}

export interface StaffItem {
  id: string;
  name: string;
  role: string;
  department: string;
  bidang?: string;
  subject?: string;
  education: string;
  imageUrl: string;
  photo?: string;
  quote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  date: string;
  description?: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  schedule: string;
  imageUrl?: string;
}

export interface ExtracurricularItem {
  id: string;
  name: string;
  category?: string;
  schedule: string;
  coach: string;
  description: string;
  achievements: string[];
  imageUrl?: string;
  iconName?: string;
}

export interface FacilityItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  countLabel?: string;
  count?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  photoUrl?: string;
}

export interface PpdbFaqItem {
  id?: string;
  question: string;
  answer: string;
}

export const schoolInfoData: SchoolInfo = {
  name: "SMP \"Empat Lima\" 2 Kedungpring",
  shortName: "SMP 45 2 Kedungpring",
  foundation: "Yayasan Pendidikan Ma'arif Empat Lima Kalen",
  npsn: "20506321",
  accreditation: "Akreditasi B (Menuju A Unggul)",
  address: "Jl. Raya Kedungpring - Sugio No. 45, Desa Kalen",
  district: "Kecamatan Kedungpring",
  regency: "Kabupaten Lamongan",
  province: "Jawa Timur",
  postalCode: "62283",
  phone: "(0322) 456-789",
  whatsapp: "6281332558033",
  email: "info@smp452kedungpring.sch.id",
  operatingHours: "Senin - Sabtu: 07.00 - 14.00 WIB",
  principal: "Drs. Marji",
  principalTitle: "Kepala SMP \"Empat Lima\" 2 Kedungpring",
  principalQuote: "Puji syukur kehadirat Allah SWT atas segala rahmat dan karunia-Nya, sehingga website resmi sekolah kami dapat hadir sebagai media informasi dan komunikasi bagi seluruh civitas akademika serta masyarakat luas.\r\nSelamat datang di website sekolah kami. Melalui platform digital ini, kami berkomitmen untuk memberikan informasi terkini mengenai berbagai kegiatan, prestasi, dan program-program pendidikan yang kami selenggarakan.\r\nSekolah kami senantiasa berupaya memberikan pendidikan berkualitas dengan mengintegrasikan nilai-nilai akademik, karakter, dan keterampilan yang dibutuhkan di era digital. Dengan didukung oleh tenaga pendidik yang profesional dan berdedikasi tinggi, kami optimis dapat mencetak generasi penerus bangsa yang cerdas, berakhlak mulia, dan berdaya saing.\r\nKami mengajak seluruh stakeholder pendidikan, terutama orang tua/wali murid untuk bersinergi dan berkolaborasi dalam mendukung proses pendidikan putra-putri kita. Mari bersama-sama kita wujudkan cita-cita luhur pendidikan nasional.\r\nSemoga website ini dapat bermanfaat dan menjadi jembatan komunikasi yang efektif antara sekolah, siswa, orang tua, dan masyarakat.\r\n\r\n\r\nWassalamu'alaikum Warahmatullahi Wabarakatuh",
  principalPhoto: "https://res.cloudinary.com/lvrhzzon/image/upload/v1786083035/smp45/uploads/eyadmvi6aept6raozdy2.webp",
  history: "SMP Empat Lima Kalen (yang kini dikenal sebagai SMP \"Empat Lima\" 2 Kedungpring) didirikan sebagai respons terhadap meningkatnya kebutuhan pendidikan lanjutan bagi lulusan SD/MI di wilayah tersebut, menyusul tingginya kepercayaan masyarakat terhadap SMP Empat Lima Kedungpring. Atas inisiatif Pengurus Yayasan Lembaga Pendidikan Ma'arif dan Kepala SMP Empat Lima Kedungpring, Bapak Drs. H. ABD. MU'THI, diusulkan pembentukan kelas jauh di Desa Kalen untuk menampung siswa dari wilayah barat Kecamatan Kedungpring dan sebagian Kecamatan Modo. \r\n\r\nSetelah mendapat izin menempati gedung SDN Kalen I sejak tahun ajaran 1981/1982, secara resmi SMP Empat Lima Kalen didirikan pada tanggal 15 Juni 1982, menerima 90 siswa pada tahun ajaran pertamanya. Pada masa awal ini, seluruh kegiatan administrasi dan kelembagaan masih menyatu dengan SMP Empat Lima Kedungpring. Namun, didorong oleh petunjuk dari Kandep Dikbud, sekolah ini mengajukan izin penyelenggaraan mandiri, dan setelah izin keluar serta diterima pada tahun 1983, administrasi SMP Empat Lima Kalen mulai berdiri sendiri. Sekolah ini menerima pembinaan dari Departemen Pendidikan dan Kebudayaan serta dari Yayasan Lembaga Pendidikan Ma'arif.",
  vision: "Sekolahku yang berprestasi, berbudaya, beriptek, dan berimtaq, berhaluan ahlussunah wal jamaah.",
  missions: ["Meningkatkan kualitas guru dan karyawan","Melaksanakan pembelajaran dan bimbingan secara efektif","Menumbuhkan sifat kompetitif pada setiap warga untuk meraih prestasi","Menumbuhkan keunggulan secara intensif kepada seluruh warga ","Menggali potensi sumberdaya sekolah dalam memberdayakan sekolah","Mewujudkan sekolah peduli, berbudaya, dan berwawasan lingkungan hidup"],
  socialLinks: {
    facebook: "",
    instagram: "",
    youtube: "",
    tiktok: "",
  },
  socials: {
    facebook: "",
    instagram: "",
    youtube: "",
    tiktok: "",
  },
};

export const heroSlidesData: HeroSlide[] = [
  {
    id: "acc34482-17f0-460e-9264-a9e68255d5bb",
    title: "Selamat Datang di Website Resmi SMP \"Empat Lima\" 2 Kedungpring",
    subtitle: "Yayasan Pendidikan Ma'arif Empat Lima Kalen - Kedungpring, Lamongan",
    badge: "Tahun Ajaran 2027/2028",
    description: "Membentuk Generasi Cerdas Berakhlakul Karimah, Berprestasi Tinggi, dan Memegang Teguh Nilai-Nilai Keislaman An-Nahdliyah.",
    ctaPrimary: "Pendaftaran PPDB Online",
    ctaSecondary: "Jelajahi Profil Sekolah",
    bgImage: "https://res.cloudinary.com/lvrhzzon/image/upload/v1786102568/smp45/uploads/wmx9c2cgy1ks5s3kswzl.webp",
    imageUrl: "https://res.cloudinary.com/lvrhzzon/image/upload/v1786102568/smp45/uploads/wmx9c2cgy1ks5s3kswzl.webp",
    tagline: "",
    ctaText: "Pendaftaran PPDB Online",
    ctaLink: "/ppdb",
    ctaSecondaryText: "Jelajahi Profil Sekolah",
    ctaSecondaryLink: "/profil"
  },
  {
    id: "3c3a120e-1b2e-43ef-b74a-b9d841a3e2d8",
    title: "Penerimaan Peserta Didik Baru (PPDB) Telah Dibuka!",
    subtitle: "Gelombang 1: Dapatkan Beasiswa Khusus Bebas Biaya Pendaftaran & Seragam",
    badge: "PPDB Online Buka",
    description: "Mari bergabung bersama keluarga besar SMP 45 2 Kedungpring. Lingkungan belajar yang asri, sarana digital modern, dan pembinaan karakter Islami.",
    ctaPrimary: "Formulir PPDB",
    ctaSecondary: "Informasi Alur Pendaftaran",
    bgImage: "https://res.cloudinary.com/lvrhzzon/image/upload/v1786101196/smp45/uploads/r5ct5fxqirnksd1isrnb.webp",
    imageUrl: "https://res.cloudinary.com/lvrhzzon/image/upload/v1786101196/smp45/uploads/r5ct5fxqirnksd1isrnb.webp",
    tagline: "",
    ctaText: "Formulir PPDB",
    ctaLink: "/ppdb",
    ctaSecondaryText: "Informasi Alur Pendaftaran",
    ctaSecondaryLink: "/profil"
  },
  {
    id: "3bb00c9e-72c2-4a8a-9f15-e35bb83e46e6",
    title: "Program Unggulan Tahfidz Al-Qur'an & Pembiasaan Karakter",
    subtitle: "Pembiasaan Sholat Dhuha, Dzuhur Berjamaah & Amaliyah Yaumiyah",
    badge: "Pendidikan Karakter",
    description: "Setiap siswa dibimbing untuk menghafal Juz 30 Al-Qur'an serta dibekali pemahaman agama Islam yang teduh, inklusif, dan berkemajuan.",
    ctaPrimary: "Lihat Program Unggulan",
    ctaSecondary: "Jadwal Extrakurikuler",
    bgImage: "https://res.cloudinary.com/lvrhzzon/image/upload/v1786101208/smp45/uploads/sirsgt1l2pfuzjbibwgs.webp",
    imageUrl: "https://res.cloudinary.com/lvrhzzon/image/upload/v1786101208/smp45/uploads/sirsgt1l2pfuzjbibwgs.webp",
    tagline: "",
    ctaText: "Lihat Program Unggulan",
    ctaLink: "/program",
    ctaSecondaryText: "Jadwal Extrakurikuler",
    ctaSecondaryLink: "/program"
  }
];

export const newsData: NewsItem[] = [
  {
    "id": "623cfa5c-c5ce-44b7-aa0a-ef020b0816f9",
    "slug": "siswa-smp-empat-lima-2-kedungpring-raih-juara-1-mtq-tilawah-tingkat-kecamatan",
    "title": "Siswa SMP Empat Lima 2 Kedungpring Raih Juara 1 MTQ Tilawah Tingkat Kecamatan",
    "category": "Prestasi",
    "date": "2026-10-10",
    "author": "Tim Humas SMP 45 2",
    "authorRole": "Tim Humas",
    "readTime": "3 menit",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786098327/smp45/uploads/why7xrqia0wg7cxiltaw.webp",
    "summary": "Prestasi membanggakan kembali ditorehkan oleh siswa SMP Empat Lima 2 Kedungpring melalui raihan Juara 1 Lomba MTQ Cabang Tilawah Tingkat Kecamatan, membuktikan bahwa semangat belajar dan nilai-nilai keislaman dapat berjalan seiring dalam meraih prestasi.",
    "content": "SMP Empat Lima 2 Kedungpring kembali mencatatkan prestasi yang membanggakan di bidang keagamaan. Salah satu siswa terbaik, Banu Ardinata Syahputra dari kelas VIII B, berhasil meraih Juara 1 pada Lomba Musabaqah Tilawatil Qur'an (MTQ) Cabang Tilawah Tingkat Kecamatan yang diselenggarakan dalam rangka memperingati Hari Ulang Tahun ke-81 Republik Indonesia.\nPrestasi ini merupakan hasil dari kerja keras, ketekunan, serta semangat belajar yang tinggi dalam mengembangkan kemampuan membaca Al-Qur'an dengan baik dan benar. Keberhasilan tersebut juga tidak lepas dari dukungan orang tua, para pembimbing, serta seluruh keluarga besar SMP Empat Lima 2 Kedungpring yang senantiasa memberikan motivasi dan pendampingan kepada peserta didik untuk terus berprestasi.\nKepala sekolah beserta seluruh dewan guru menyampaikan apresiasi dan ucapan selamat atas pencapaian yang telah diraih. Prestasi ini diharapkan dapat menjadi inspirasi bagi seluruh peserta didik untuk terus mengembangkan potensi yang dimiliki, baik di bidang akademik maupun nonakademik, serta menjadikan Al-Qur'an sebagai pedoman dalam kehidupan sehari-hari.\nSemoga keberhasilan ini menjadi langkah awal untuk meraih prestasi yang lebih tinggi pada tingkat berikutnya serta semakin mengharumkan nama SMP Empat Lima 2 Kedungpring di berbagai ajang kompetisi.",
    "tags": [
      "Informasi Sekolah",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  },
  {
    "id": "40a5ada6-4864-41ef-9f9f-27d9e3c8ea84",
    "slug": "emeriksaan-kebugaran-dengan-metode-rocksport-oleh-puskesmas-dradah-1768913436819",
    "title": "Pemeriksaan Kebugaran Dengan Metode Rocksport oleh Puskesmas Dradah",
    "category": "Kegiatan",
    "date": "2026-01-20",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768913424/blogsmp/o1owz3kp7ok5xou7uzas.webp",
    "summary": "SMP Empat Lima 2 Kedungpring bersama Puskesmas Dradah melaksanakan pemeriksaan kebugaran jasmani metode Rockport sebagai upaya memantau kesehatan dan meningkatkan kesadaran hidup sehat peserta didik.",
    "content": "SMP Empat Lima 2 Kedungpring melaksanakan kegiatan Pemeriksaan Kebugaran Jasmani bekerja sama dengan Puskesmas Dradah sebagai bagian dari program pelayanan kesehatan bagi peserta didik. Kegiatan ini dilaksanakan di lingkungan sekolah dan area sekitar sekolah dengan melibatkan siswa-siswi sebagai peserta pemeriksaan.\r\n\r\nPemeriksaan kebugaran dilakukan menggunakan metode Rockport, yaitu salah satu metode pengukuran kebugaran jasmani yang bertujuan untuk mengetahui tingkat daya tahan jantung dan paru-paru siswa melalui aktivitas fisik terkontrol. Sebelum pelaksanaan, petugas kesehatan dari Puskesmas Dradah memberikan arahan dan penjelasan teknis kepada peserta agar kegiatan berjalan dengan tertib, aman, dan sesuai prosedur.\r\n\r\nRangkaian kegiatan diawali dengan pemanasan bersama di halaman sekolah yang dipandu oleh petugas kesehatan. Setelah itu, siswa mengikuti tes kebugaran dengan berjalan atau berlari sesuai ketentuan jarak yang telah ditentukan. Selama kegiatan berlangsung, petugas puskesmas melakukan pengawasan dan pencatatan hasil sebagai bahan evaluasi kondisi kebugaran peserta didik.\r\n\r\nMelalui kegiatan ini, diharapkan sekolah memperoleh gambaran awal mengenai tingkat kebugaran jasmani siswa, sehingga dapat menjadi dasar dalam pembinaan kesehatan, olahraga, dan pola hidup sehat di lingkungan sekolah. Selain itu, siswa juga diberikan edukasi tentang pentingnya menjaga kebugaran tubuh melalui aktivitas fisik teratur dan gaya hidup sehat.\r\n\r\nPihak sekolah menyampaikan apresiasi dan terima kasih kepada Puskesmas Dradah atas kerja sama dan pendampingan yang telah diberikan. Diharapkan sinergi antara sekolah dan puskesmas dapat terus terjalin guna mendukung terwujudnya peserta didik yang sehat, bugar, dan siap mengikuti kegiatan pembelajaran secara optimal.",
    "tags": [
      "Kegiatan",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  },
  {
    "id": "81194da4-d21a-4ba6-bf3b-e6c8a21cfa6f",
    "slug": "peringatan-isra-miraj-nabi-muhammad-saw-1768913780383",
    "title": "Peringatan Isra’ Mi’raj Nabi Muhammad SAW",
    "category": "Keagamaan & Tahfidz",
    "date": "2026-01-20",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768913767/blogsmp/emjj9xwy3sx5sqfty7sj.webp",
    "summary": "Peringatan Isra’ Mi’raj Nabi Muhammad SAW di SMP Empat Lima 2 Kedungpring menjadi momentum memperkuat keimanan dan meneladani akhlak Rasulullah dalam kehidupan sehari-hari.",
    "content": "SMP Empat Lima 2 Kedungpring menyelenggarakan kegiatan Peringatan Isra’ Mi’raj Nabi Muhammad SAW pada 20 Januari 2026 bertempat di lingkungan sekolah. Kegiatan ini diikuti oleh seluruh warga sekolah, mulai dari peserta didik, guru, hingga tenaga kependidikan, dengan suasana yang khidmat dan penuh makna.\r\n\r\nAcara diawali dengan pembukaan dan sambutan dari kepala sekolah, kemudian dilanjutkan dengan tausiah keagamaan yang disampaikan oleh ustadz Irfan, dan di akhiri dengan pembacaan doa bersama. Dalam tausiah tersebut disampaikan makna peristiwa Isra’ Mi’raj sebagai perjalanan spiritual Rasulullah SAW yang mengajarkan pentingnya keimanan, ketakwaan, serta kewajiban menjalankan salat lima waktu sebagai fondasi utama kehidupan seorang muslim.\r\n\r\nMelalui kegiatan ini, sekolah berharap peserta didik tidak hanya memahami sejarah Isra’ Mi’raj secara teori, tetapi juga mampu mengimplementasikan nilai-nilai yang terkandung di dalamnya, seperti disiplin beribadah, berakhlak mulia, serta meningkatkan rasa tanggung jawab dalam kehidupan sehari-hari.\r\n\r\nPeringatan Isra’ Mi’raj ini merupakan bagian dari pembinaan karakter religius di SMP Empat Lima 2 Kedungpring yang secara rutin dilaksanakan sebagai upaya membentuk peserta didik yang beriman, berilmu, dan berakhlak mulia.",
    "tags": [
      "Keagamaan",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  },
  {
    "id": "021f24bf-1de2-4b2c-b6e6-c9185b6dae1c",
    "slug": "tuntas-sukses-sas-ganjil-20252026-1765754679811",
    "title": "Tuntas Sukses SAS Ganjil 2025/2026",
    "category": "Kegiatan",
    "date": "2025-12-14",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "imageUrl": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754671302.webp",
    "summary": "Usaha Keras Hari Ini Menentukan Masa Depan Terbaikmu!",
    "content": "SMP \"Empat Lima\" 2 Kedungpring telah berhasil melaksanakan Sumatif Akhir Semester (SAS) Ganjil Tahun Pelajaran 2025/2026. Kegiatan akademik penting ini berlangsung selama enam hari penuh fokus, yaitu pada tanggal 01 hingga 06 Desember 2025. SAS Ganjil merupakan evaluasi akhir yang mengukur pemahaman siswa terhadap seluruh materi pelajaran yang telah diajarkan selama semester ganjil.\r\n\r\nPelaksanaan Ujian dan Motivasi Belajar Siswa (ISI)\r\nSAS Ganjil dilaksanakan dengan tertib dan disiplin di lingkungan sekolah. Seluruh siswa mengikuti ujian dengan serius, menunjukkan komitmen mereka untuk meraih hasil terbaik. Guru-guru bertindak sebagai pengawas, memastikan suasana ujian yang kondusif. Sekolah menekankan pentingnya usaha dan integritas dalam proses pengerjaan ujian.\r\n\r\nSebagaimana pesan motivasi yang selalu ditekankan, \"Ingat, Hasil ujian tidak menentukan masa depanmu, tapi usahamu yang menentukannya,\". Pesan ini menjadi penyemangat bagi siswa bahwa nilai adalah cerminan dari proses belajar yang sudah mereka lalui. Sekolah berharap hasil yang dicapai dapat memotivasi siswa untuk terus tumbuh dan bersinar sesuai tagline sekolah, #GROW TOGETHER SHINE FOREVER.",
    "tags": [
      "Akademik",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  },
  {
    "id": "6e511b43-cedc-4618-a498-b00bc51f6f78",
    "slug": "semangat-speda-champions-81",
    "title": "Semangat SPEDA Champions 81",
    "category": "Kegiatan",
    "date": "2026-10-10",
    "author": "Tim Humas SMP 45 2",
    "authorRole": "Tim Humas",
    "readTime": "3 menit",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1788147897/smp45/uploads/wlkcwjq7q3ondtyfhwgf.webp",
    "summary": "Kegiatan SPEDA Champions 81 berlangsung pada 26–28 Agustus dengan penuh semangat dan kebersamaan.",
    "content": "Kegiatan SPEDA Champions 81 berlangsung pada 26–28 Agustus 2026 dan diikuti oleh peserta didik SMP “Empat Lima” 2 Kalen Kedungpring.\n\nSelama kegiatan, para peserta menunjukkan antusiasme dan semangat dalam mengikuti rangkaian aktivitas. Kebersamaan dan kekompakan menjadi bagian penting dari suasana kegiatan.\n\nKegiatan ini juga menjadi kesempatan bagi peserta didik untuk membangun karakter positif, seperti disiplin, kerja sama, tanggung jawab, dan sportivitas.\n\nMelalui SPEDA Champions 81, sekolah terus mendorong peserta didik untuk aktif, percaya diri, serta mampu mengembangkan potensi melalui berbagai kegiatan.\n\nDokumentasi kegiatan SPEDA Champions 81, 26–28 Agustus 2026.",
    "tags": [
      "Informasi Sekolah",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  },
  {
    "id": "f0a3571d-1bbb-4141-8886-bc2429f49eb1",
    "slug": "classmeeting-smp-empat-lima-2-kedungpring-2025-1765754022631",
    "title": "Classmeeting SMP \"Empat Lima\" 2 Kedungpring 2025!",
    "category": "Kegiatan",
    "date": "2025-12-14",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "imageUrl": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754009121.webp",
    "summary": "Semangat Juang di Arena Classmeeting SMP \"Empat Lima\" 2 Kedungpring 2025!",
    "content": "SMP \"Empat Lima\" 2 Kedungpring kembali menggelar ajang tahunan yang paling ditunggu-tunggu: Classmeeting! Kegiatan yang berlangsung meriah pada tanggal 8 hingga 12 Desember 2025 ini bukan hanya sekadar kompetisi, tetapi juga wadah untuk menumbuhkan semangat kebersamaan, kekompakan, dan sportivitas antar kelas.\r\n\r\nMengusung tagline #GROW TOGETHER SHINE FOREVER, Classmeeting tahun ini menawarkan berbagai jenis perlombaan yang menguji fisik, strategi, hingga ketangkasan berpikir para siswa.\r\n\r\nJadwal dan Jenis Perlombaan:\r\nClassmeeting 2025 telah menjadwalkan lima hari penuh aksi dengan daftar lomba yang seru dan beragam:\r\n\r\nSenin, 8 Desember 2025: Sepak Bola Corong\r\n\r\nMenguji kelincahan dan kerja sama tim dalam format sepak bola yang unik.\r\n\r\nSelasa, 9 Desember 2025: Volley Ball\r\n\r\nPertandingan voli yang selalu sengit dan menuntut kekompakan dalam receive dan smash.\r\n\r\nRabu, 10 Desember 2025: Mobile Legend\r\n\r\nAjang pembuktian skill dan strategi tim dalam dunia e-sports yang diminati pelajar.\r\n\r\nKamis, 11 Desember 2025: Pengetahuan Umum\r\n\r\nLomba cerdas cermat yang mengasah wawasan dan pengetahuan umum siswa di luar pelajaran.\r\n\r\nJumat, 12 Desember 2025: Ketangkasan & Kekompakan\r\n\r\nPuncak acara yang biasanya diisi dengan lomba-lomba kreatif dan tantangan yang mengutamakan sinergi antar anggota kelas.\r\n\r\nLebih dari Sekedar Pemenang\r\nClassmeeting adalah waktu bagi setiap siswa untuk bersinar di bidang yang mereka kuasai. Baik di lapangan hijau, di arena e-sports, maupun di ruang uji pengetahuan, semua menunjukkan dedikasi dan semangat yang luar biasa. Tujuannya adalah membangun keharmonisan dan kenangan indah sebelum libur semester tiba.\r\n\r\nJaga terus semangat juang dan sportivitas kalian!",
    "tags": [
      "Kegiatan",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  },
  {
    "id": "18c5728d-85cc-4aff-beda-ef5fd64dd61a",
    "slug": "khidmat-dan-semangat-hari-pramuka",
    "title": "Khidmat dan Semangat Hari Pramuka",
    "category": "Kegiatan",
    "date": "2026-10-10",
    "author": "Tim Humas SMP 45 2",
    "authorRole": "Tim Humas",
    "readTime": "3 menit",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786967486/smp45/uploads/vvidiyvnin4yc1irxz4d.webp",
    "summary": "Upacara Hari Pramuka memperkuat semangat disiplin, tanggung jawab, dan kebersamaan peserta didik.",
    "content": "SMP Empat Lima 2 Kedungpring melaksanakan upacara peringatan Hari Pramuka di lingkungan sekolah dengan diikuti oleh peserta didik dan pembina Pramuka. Kegiatan berlangsung dengan tertib dan penuh semangat sebagai bentuk penghormatan terhadap gerakan Pramuka.\n\nDalam kegiatan tersebut, peserta didik mengenakan seragam Pramuka dan mengikuti rangkaian upacara dengan penuh kedisiplinan. Pembina upacara menyampaikan amanat yang mengingatkan pentingnya nilai-nilai kepramukaan dalam membentuk pribadi yang mandiri, bertanggung jawab, disiplin, dan peduli terhadap sesama.\n\nSelain menjadi momentum untuk memperingati Hari Pramuka, kegiatan ini juga menjadi sarana pembentukan karakter peserta didik. Melalui kegiatan kepramukaan, siswa diharapkan mampu menerapkan nilai-nilai Dasa Darma Pramuka dalam kehidupan sehari-hari, baik di sekolah maupun di lingkungan masyarakat.\n\nSMP Empat Lima 2 Kedungpring terus mendukung kegiatan Pramuka sebagai bagian dari pembinaan karakter dan pengembangan potensi peserta didik. Semangat kebersamaan dan kedisiplinan yang ditanamkan diharapkan dapat menjadi bekal bagi siswa untuk tumbuh menjadi generasi yang tangguh dan bertanggung jawab.",
    "tags": [
      "Informasi Sekolah",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  },
  {
    "id": "5d488756-efe5-400b-b915-c45cb29c0894",
    "slug": "safrillia-raih-juara-badminton",
    "title": "Safrillia Raih Juara Badminton",
    "category": "Prestasi",
    "date": "2026-10-10",
    "author": "Tim Humas SMP 45 2",
    "authorRole": "Tim Humas",
    "readTime": "3 menit",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786968085/smp45/uploads/gbvvasqna1hzgvmsk9wk.webp",
    "summary": "Safrillia Audy Az Zikra meraih juara 3 badminton putri tingkat kecamatan.",
    "content": "SMP “Empat Lima” 2 Kalen Kedungpring kembali menorehkan prestasi membanggakan melalui peserta didiknya dalam ajang olahraga tingkat kecamatan. Safrillia Audy Az Zikra, siswi kelas IX A, berhasil meraih Juara 3 Badminton Putri Tingkat Kecamatan.\nPrestasi tersebut diraih dalam rangka memperingati HUT Kemerdekaan Republik Indonesia ke-81. Safrillia menunjukkan semangat, ketekunan, dan kemampuan dalam menghadapi persaingan pada cabang olahraga badminton.\nKeberhasilan ini menjadi bukti bahwa peserta didik SMP “Empat Lima” 2 Kalen Kedungpring tidak hanya berkembang dalam bidang akademik, tetapi juga mampu berprestasi melalui bidang olahraga.\nPihak sekolah menyampaikan apresiasi atas pencapaian Safrillia. Prestasi ini diharapkan dapat menjadi motivasi bagi seluruh peserta didik untuk terus mengembangkan potensi, berani berkompetisi, dan mengharumkan nama sekolah.",
    "tags": [
      "Informasi Sekolah",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  },
  {
    "id": "e6abdcd7-8bed-4c76-9306-d5baf81ea7c2",
    "slug": "panggung-kreativitas-pagelaran-pentas-seni-smp-empat-lima-2-kedungpring-2025-1765754262483",
    "title": "PANGGUNG KREATIVITAS: Pagelaran Pentas Seni 2025!",
    "category": "Kegiatan",
    "date": "2025-12-14",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "imageUrl": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754258948.webp",
    "summary": "Bakat Siswa Memukau dan Berkilauan dalam Satu Hari Penuh Ekspresi Seni!",
    "content": "Pagelaran Pentas Seni (Pensi) tahunan SMP \"Empat Lima\" 2 Kedungpring kembali hadir sebagai puncak perayaan kreativitas dan ekspresi siswa sebelum libur semester. Acara ini sukses digelar pada tanggal 13 Desember 2025. Pensi menjadi wadah bagi siswa untuk menampilkan minat dan bakat mereka di berbagai bidang seni yang beragam.\r\n\r\nRagam Penampilan yang Memanjakan Mata dan Telinga (ISI)\r\nTahun ini, panggung Pensi dimeriahkan oleh sembilan jenis penampilan yang menunjukkan kekayaan artistik para pelajar:\r\n\r\nSeni Sastra & Verbal: Terdapat penampilan Baca Puisi, Story Telling, dan Pidato.\r\n\r\nSeni Pertunjukan: Aksi Menari, pementasan Drama, dan pertunjukan Menyanyi mengisi suasana dengan harmoni.\r\n\r\nAksi Panggung Unik: Pensi semakin meriah dengan kehadiran penampilan Stand Up Comedy serta atraksi Seni Pencak Silat.\r\n\r\nPensi bukan hanya tentang hiburan, tetapi juga tentang pembentukan karakter yang percaya diri dan apresiatif terhadap seni. Kami berharap melalui kegiatan seperti ini, bakat-bakat siswa akan terus terasah dan berkembang, menjadikan mereka generasi yang utuh—pintar dalam ilmu dan kaya dalam seni.",
    "tags": [
      "Kegiatan",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  },
  {
    "id": "d7f834b2-a2a9-4451-a24c-5fbe48d79ebd",
    "slug": "gelar-upacara-peringatan-hari-kartini-1777778504069",
    "title": "Gelar Upacara Peringatan Hari Kartini",
    "category": "Kegiatan",
    "date": "2026-05-03",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778463/blogsmp/sk4smynepmxwlswpq9lw.webp",
    "summary": "Peringatan Hari Kartini di SMP Empat Lima 2 Kedungpring berlangsung penuh semangat dengan nuansa budaya yang memperkuat nilai emansipasi dan kebersamaan.",
    "content": "SMP Empat Lima 2 Kedungpring menyelenggarakan upacara peringatan Hari Kartini dengan khidmat di halaman sekolah, yang diikuti oleh seluruh warga sekolah, mulai dari guru, staf, hingga peserta didik. Kegiatan ini menjadi momentum untuk mengenang perjuangan R.A. Kartini dalam memperjuangkan hak dan peran perempuan di Indonesia.\r\n\r\nDalam pelaksanaan upacara, para guru dan siswa tampil mengenakan busana batik dan pakaian tradisional, menciptakan suasana yang kental dengan nuansa budaya Indonesia. Barisan peserta upacara tampak rapi dan tertib, mencerminkan kedisiplinan serta rasa hormat terhadap nilai-nilai perjuangan para pahlawan.\r\n\r\nSelain upacara, kegiatan ini juga menjadi sarana untuk menanamkan nilai-nilai kesetaraan, semangat belajar, serta kemandirian, khususnya bagi para siswi sebagai generasi penerus bangsa. Para siswa diajak untuk meneladani semangat Kartini dalam menggapai cita-cita tanpa melupakan nilai budaya dan moral.\r\n\r\nMelalui peringatan Hari Kartini ini, diharapkan seluruh peserta didik dapat semakin memahami pentingnya peran perempuan dalam pembangunan bangsa serta terus mengembangkan potensi diri dengan semangat perjuangan dan optimisme.",
    "tags": [
      "Kegiatan",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  },
  {
    "id": "a11fafce-5796-41b7-b5d9-0c904cd064cc",
    "slug": "ujian-psaj-praktik-kelas-9-berlangsung-kreatif-dan-penuh-keterampilan-1777778382853",
    "title": "Ujian PSAJ Praktik Kelas 9 Berlangsung Kreatif dan Penuh Keterampilan",
    "category": "Keagamaan & Tahfidz",
    "date": "2026-05-03",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778364/blogsmp/chlpbbue8heylb7kax2d.webp",
    "summary": "Pelaksanaan Ujian PSAJ praktik kelas 9 menjadi ajang bagi siswa SMP Empat Lima 2 Kedungpring untuk menunjukkan keterampilan, kreativitas, dan kesiapan mereka dalam menghadapi jenjang berikutnya.",
    "content": "SMP Empat Lima 2 Kedungpring melaksanakan Ujian PSAJ (Penilaian Sumatif Akhir Jenjang) Praktik bagi siswa kelas 9 yang berlangsung pada tanggal 12–18. Kegiatan ini dilaksanakan di lingkungan sekolah dengan berbagai bentuk praktik yang menguji keterampilan siswa secara langsung sesuai dengan bidang yang telah dipelajari.\r\n\r\nDalam pelaksanaannya, siswa mengikuti beragam kegiatan praktik, mulai dari simulasi keagamaan seperti pengurusan jenazah, kegiatan seni lukis, hingga tes kebugaran jasmani. Setiap kegiatan dirancang untuk mengukur kemampuan siswa tidak hanya dari sisi pengetahuan, tetapi juga keterampilan, ketelitian, kerja sama, dan tanggung jawab.\r\n\r\nPada praktik keagamaan, siswa terlihat aktif mempraktikkan tata cara pengurusan jenazah dengan bimbingan guru, sebagai bentuk pembelajaran nilai-nilai kehidupan dan keagamaan. Sementara itu, dalam bidang seni, siswa menuangkan kreativitas mereka melalui lukisan dengan berbagai tema yang menarik dan penuh makna.\r\n\r\nSelain itu, kegiatan praktik juga mencakup tes kebugaran jasmani, di mana siswa mengikuti rangkaian aktivitas fisik seperti pemanasan dan pengukuran kebugaran untuk mengetahui kondisi fisik mereka. Kegiatan ini sekaligus menanamkan pentingnya menjaga kesehatan dan kebugaran tubuh.\r\n\r\nMelalui Ujian PSAJ praktik ini, diharapkan siswa kelas 9 mampu menunjukkan kompetensi yang telah mereka pelajari selama menempuh pendidikan di SMP Empat Lima 2 Kedungpring. Pihak sekolah berharap hasil dari kegiatan ini dapat menjadi gambaran nyata kesiapan siswa dalam melanjutkan ke jenjang pendidikan yang lebih tinggi, baik dari aspek akademik maupun keterampilan.",
    "tags": [
      "Keagamaan",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  },
  {
    "id": "7c7e4816-4d0d-44e7-bd1c-c32c599049df",
    "slug": "juara-lompat-jauh",
    "title": "Juara Lompat Jauh",
    "category": "Prestasi",
    "date": "2026-10-10",
    "author": "Tim Humas SMP 45 2",
    "authorRole": "Tim Humas",
    "readTime": "3 menit",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786098376/smp45/uploads/ht3t2yu39sea6cagk7r1.webp",
    "summary": "Prestasi atletik kembali mengharumkan nama SMP Empat Lima 2 Kedungpring.",
    "content": "SMP Empat Lima 2 Kedungpring kembali mencatatkan prestasi membanggakan melalui ajang Lomba Atletik Tingkat Kecamatan yang diselenggarakan dalam rangka memperingati HUT ke-81 Republik Indonesia. Pada kompetisi tersebut, salah satu siswi terbaik sekolah berhasil menunjukkan kemampuan luar biasa di cabang olahraga lompat jauh.\nAqila Ayu Khazanah dari kelas VIII B sukses meraih Juara 3 pada cabang Lompat Jauh Tingkat Kecamatan. Prestasi ini menjadi bukti bahwa kerja keras, semangat berlatih, dan disiplin mampu mengantarkan peserta didik meraih hasil terbaik di bidang olahraga.\nKeberhasilan ini tidak hanya menjadi kebanggaan bagi Aqila dan keluarganya, tetapi juga bagi seluruh warga SMP Empat Lima 2 Kedungpring. Sekolah terus berkomitmen mendukung pengembangan bakat dan minat peserta didik agar mampu berprestasi, baik di bidang akademik maupun nonakademik.\nSegenap keluarga besar SMP Empat Lima 2 Kedungpring mengucapkan selamat atas pencapaian yang telah diraih. Semoga prestasi ini menjadi motivasi bagi seluruh peserta didik untuk terus berusaha, berkompetisi secara sportif, dan mengharumkan nama sekolah di berbagai ajang perlombaan.",
    "tags": [
      "Informasi Sekolah",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  },
  {
    "id": "06c8489a-50b2-4428-99a0-4512759ac150",
    "slug": "buana-nada-harmoni-drumband-di-hari-santri-1765754889106",
    "title": "Buana Nada: Harmoni Drumband di Hari Santri",
    "category": "Ekstrakurikuler",
    "date": "2025-12-14",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "imageUrl": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754881531.webp",
    "summary": "Irama Memukau dan Formasi Indah Meriahkan Peringatan Hari Santri Nasional!",
    "content": "Group Drumband kebanggaan SMP \"Empat Lima\" 2 Kedungpring sukses memukau penonton dalam pementasan spesial bertajuk \"Buana Nada\". Pertunjukan ini digelar dalam rangka memperingati Hari Santri Nasional 2025. Pementasan yang menunjukkan kedisiplinan dan kekompakan siswa-siswi ini dilaksanakan pada Selasa, 22 Oktober 2025.\r\n\r\nPementasan \"Buana Nada\" ini berlangsung meriah di TPQ Bahrul Ulum, Desa Kancanan Modo. Group Drumband SMP \"Empat Lima\" 2 Kedungpring tampil penuh energi, memulai aksinya pada pukul 13:00 WIB. Dengan kostum yang cerah dan formasi yang rapi, mereka berhasil membawakan berbagai lagu dengan irama yang harmonis dan koreografi yang menarik.\r\n\r\nAcara ini tidak hanya menjadi hiburan bagi masyarakat sekitar, tetapi juga menjadi bukti nyata bahwa siswa-siswi SMP \"Empat Lima\" 2 Kedungpring memiliki kemampuan non-akademik yang unggul dan terlatih. Keikutsertaan dalam kegiatan Hari Santri ini selaras dengan semangat sekolah untuk #GROW TOGETHER SHINE FOREVER, di mana siswa didorong untuk mengembangkan potensi diri secara holistik dan berpartisipasi aktif dalam kegiatan sosial-keagamaan.\r\n\r\nSemangat yang ditunjukkan oleh anggota Drumband diharapkan dapat menginspirasi siswa lain untuk terus berprestasi dan membawa nama baik sekolah di berbagai ajang.",
    "tags": [
      "Ekstrakurikuler",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  },
  {
    "id": "88a16cd2-60d6-4ef1-bf40-720acd3cff1f",
    "slug": "prestasi-atletik-membanggakan",
    "title": "Prestasi Atletik Membanggakan",
    "category": "Prestasi",
    "date": "2026-10-10",
    "author": "Tim Humas SMP 45 2",
    "authorRole": "Tim Humas",
    "readTime": "3 menit",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786098346/smp45/uploads/ir0xv0glihqoje13ssil.webp",
    "summary": "Siswi SMP Empat Lima 2 Kedungpring kembali mengharumkan nama sekolah di tingkat kecamatan.",
    "content": "SMP Empat Lima 2 Kedungpring kembali menorehkan prestasi membanggakan melalui ajang lomba atletik tingkat kecamatan yang diselenggarakan dalam rangka memperingati HUT ke-81 Republik Indonesia. Keberhasilan ini menjadi bukti semangat, kerja keras, dan dedikasi para peserta didik dalam mengembangkan potensi di bidang olahraga.\nPrestasi tersebut diraih oleh Aqila Ayu Khazanah dari kelas VIII B yang berhasil meraih Juara 1 Lari 1500 Meter dan Juara 2 Sprint 80 Meter. Sementara itu, Keysa Azzahra dari kelas VII A berhasil meraih Juara 3 Tolak Peluru, melengkapi deretan prestasi yang membanggakan bagi sekolah.\nKeberhasilan ini merupakan hasil dari latihan yang disiplin, semangat pantang menyerah, serta bimbingan dari guru dan pelatih yang senantiasa mendampingi para siswa. Prestasi tersebut diharapkan menjadi motivasi bagi seluruh peserta didik untuk terus mengembangkan bakat dan kemampuan, baik di bidang akademik maupun nonakademik.\nSegenap keluarga besar SMP Empat Lima 2 Kedungpring mengucapkan selamat kepada para juara atas pencapaian yang telah diraih. Semoga prestasi ini menjadi langkah awal untuk meraih keberhasilan yang lebih tinggi serta terus mengharumkan nama sekolah di berbagai kompetisi.",
    "tags": [
      "Informasi Sekolah",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  },
  {
    "id": "85824b58-90ec-483c-b765-85f7dc56d0cd",
    "slug": "maulid-nabi-penuh-hikmah",
    "title": "Maulid Nabi Penuh Hikmah",
    "category": "Kegiatan",
    "date": "2026-10-10",
    "author": "Tim Humas SMP 45 2",
    "authorRole": "Tim Humas",
    "readTime": "3 menit",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789137087/smp45/uploads/sxougxwiqc4keajijetc.webp",
    "summary": "Peringatan Maulid Nabi Muhammad SAW berlangsung khidmat dengan lantunan selawat dan kebersamaan warga sekolah.",
    "content": "SMP “Empat Lima” 2 Kedungpring menyelenggarakan peringatan Maulid Nabi Muhammad SAW bersama seluruh keluarga besar sekolah. Kegiatan berlangsung dalam suasana khidmat dan penuh kebersamaan.\nRangkaian kegiatan diisi dengan pembacaan selawat, lantunan musik hadrah, serta tausiah sebagai bagian dari upaya meneladani akhlak dan perjuangan Nabi Muhammad SAW.\nKegiatan tersebut diikuti oleh peserta didik, guru, dan keluarga besar sekolah. Antusiasme peserta terlihat selama rangkaian acara berlangsung, khususnya saat penampilan selawat dan hadrah.\nMelalui peringatan Maulid Nabi, sekolah berharap peserta didik semakin mengenal dan mencintai Rasulullah SAW serta mampu menerapkan nilai-nilai keteladanan beliau dalam kehidupan sehari-hari.",
    "tags": [
      "Informasi Sekolah",
      "SMP 45 2 Kedungpring"
    ],
    "featured": true
  },
  {
    "id": "7db0f14c-efec-4212-ab57-173e6aee6196",
    "slug": "upacara-peringatan-hari-guru-nasional-2025-1765754583175",
    "title": "Upacara Peringatan Hari Guru Nasional 2025",
    "category": "Kegiatan",
    "date": "2025-12-14",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "imageUrl": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754572455.webp",
    "summary": "Hormat dan Terima Kasih Tulus Siswa-siswi untuk Para Pahlawan Tanpa Tanda Jasa!",
    "content": "SMP \"Empat Lima\" 2 Kedungpring menggelar upacara bendera khusus pada tanggal 25 November 2025 untuk memperingati Hari Guru Nasional. Kegiatan ini dilaksanakan dengan khidmat di lapangan sekolah, melibatkan seluruh staf pengajar dan siswa-siswi. Upacara ini menjadi momen istimewa untuk memberikan apresiasi tertinggi kepada para guru yang telah berdedikasi mencerdaskan kehidupan bangsa.\r\n\r\nPelaksanaan Upacara yang Khidmat dan Penuh Makna (ISI)\r\nUpacara berlangsung tertib, dengan pengibaran bendera Merah Putih yang dilakukan oleh petugas paskibra sekolah. Seluruh peserta upacara, baik siswa maupun guru, mengenakan seragam kebanggaan dan mengikuti setiap prosesi dengan penuh penghormatan.\r\n\r\nDalam kesempatan ini, para guru SMP \"Empat Lima\" 2 Kedungpring tampil sebagai petugas upacara, memberikan suasana yang berbeda dan penuh makna. Terdapat momen khusus di mana beberapa guru, termasuk Kepala Sekolah, membacakan amanat dan pesan-pesan penting tentang peran strategis guru dalam membentuk masa depan generasi muda. Siswa-siswi juga tampak fokus mendengarkan, menunjukkan rasa hormat dan terima kasih mereka. Peringatan ini menegaskan kembali komitmen sekolah untuk terus berpegangan pada semangat #GROW TOGETHER SHINE FOREVER.\r\n\r\nSetelah upacara, kegiatan dilanjutkan dengan pemberian apresiasi sederhana dari perwakilan siswa kepada guru-guru sebagai ungkapan terima kasih atas ilmu dan bimbingan yang telah diberikan selama ini.",
    "tags": [
      "Kegiatan",
      "SMP 45 2 Kedungpring"
    ],
    "featured": false
  }
];

export const staffData: StaffItem[] = [
  {
    "id": "e4bf8c29-cd55-4907-a55f-d90f54fc8de6",
    "name": "Khoirul Huda, S.Pd.i",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "PAI",
    "education": "S.1/Pend. Agama Islam",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786088790/smp45/uploads/tmljlxmzbgwx6a1nllee.webp",
    "quote": ""
  },
  {
    "id": "43b19986-27a8-4d95-b73e-2500bf3acbae",
    "name": "Kamal Muhtar, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Matematika (Kelas IX), Bahasa Jawa (Kelas VII, VIII, IX)",
    "education": "S1/Pendidikan Matematika",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786088615/smp45/uploads/oqit9olbn9qo1ezvlbfz.webp",
    "quote": ""
  },
  {
    "id": "ed464aeb-3b12-4f7b-b046-95ed42dcfbbc",
    "name": "Siska Putri Astutik, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Matematika",
    "education": "S.1/ Pendidikan Matematika",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786088653/smp45/uploads/xxdjr16drhdhmhthp4vn.webp",
    "quote": ""
  },
  {
    "id": "9625623d-da48-4cc8-acfd-34da47afa873",
    "name": "Tia Sucianingsih, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Bahasa Inggris",
    "education": "S.1/Pendidikan Bahasa dan Sastra Indonesia",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786088685/smp45/uploads/h0r2bq7eycfrftusfbiq.webp",
    "quote": ""
  },
  {
    "id": "7834809b-7f22-4606-835b-39237637f9e4",
    "name": "Rohman Firmansyah, S.Kom",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Informatika",
    "education": "S.1/Teknik Informatika",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786083051/smp45/uploads/xfbzzkya9ptyxqrvegcw.webp",
    "quote": ""
  },
  {
    "id": "3ef2035e-b10d-402d-9df2-487d4f1e1a4b",
    "name": "Ahmad Irfan Fauzi, S.Ag, S.Sos",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Bahasa Arab",
    "education": "S.Ag, S.Sos",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786088724/smp45/uploads/o4peif0rf03zfspqnalu.webp",
    "quote": ""
  },
  {
    "id": "4ca0ad40-37cf-487f-b0bd-573fa968c49f",
    "name": "Annisa Rizka Fatihah, S.Si",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "IPA",
    "education": "S.1/Fisika",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786089498/smp45/uploads/pdu4bs0zckvhh2ldyn0k.webp",
    "quote": ""
  },
  {
    "id": "d67d32ea-4607-46cd-9b24-6ec36b3be946",
    "name": "Rohmad Yulia Akbar Tri Maulana, S.M",
    "role": "Staff Administrasi",
    "department": "Tenaga Kependidikan",
    "subject": "",
    "education": " S1 Manajemen",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786282389/smp45/uploads/acsobiqaymfp6y98zkuc.webp",
    "quote": ""
  },
  {
    "id": "faa39dd4-abea-4ad3-806a-1d7daf5e257a",
    "name": "Syifaul Marwah, S.E",
    "role": "Staff Administrasi",
    "department": "Tenaga Kependidikan",
    "subject": "",
    "education": "S1 Ekonomi Syariah",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786089054/smp45/uploads/c8ax8wiomiypbmgqs5id.webp",
    "quote": ""
  },
  {
    "id": "21f244dc-4918-4ae5-b128-ee023c48cd7c",
    "name": "Drs. Marji",
    "role": "Kepala Sekolah",
    "department": "Kepala Sekolah",
    "subject": "Kepemimpinan",
    "education": "S2 Pendidikan Islam",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786083035/smp45/uploads/eyadmvi6aept6raozdy2.webp",
    "quote": ""
  },
  {
    "id": "d17a0a51-d0eb-4ea7-9158-28e40385fb7c",
    "name": "Dra. Siti Rumikah",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Pendidikan Kewarganegaraan",
    "education": "S1 Pendidikan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786087682/smp45/uploads/geip6lth6q0ulqy5ddt5.webp",
    "quote": ""
  },
  {
    "id": "9c9cef6b-1f7e-42c0-8e97-7ae52c27fe8e",
    "name": "Wahyudi, S.E",
    "role": "guru",
    "department": "Guru Mata Pelajaran",
    "subject": "IPS",
    "education": "S.1/Ekonomi",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786083994/smp45/uploads/sfe8pp2f9douoizyb6jk.webp",
    "quote": ""
  },
  {
    "id": "4fd26f47-9359-4d04-9b4a-fa1cc2ef9a82",
    "name": "Riris Resdiana, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "IPA",
    "education": "S.1/Pendidikan Biologi",
    "imageUrl": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765984763893.webp",
    "quote": ""
  },
  {
    "id": "4f96fcf2-6c24-49cb-a773-38cbf05ee116",
    "name": "Sunarti, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Bahasa Indonesia (Kelas VII), Seni Rupa (Kelas IX)",
    "education": "S.1/Pend. Bahasa Indonesia",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786087934/smp45/uploads/bvphaka4yvczluwrquid.webp",
    "quote": ""
  },
  {
    "id": "e55d8410-a1d6-47f0-9057-0f0044b72fa1",
    "name": "Annuris Shoba S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Penjaskes",
    "education": "S.1/Pend. Jasmani Kesehatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786087986/smp45/uploads/hlvfctyo737yq2faaeor.webp",
    "quote": ""
  },
  {
    "id": "9e4a1ce7-f650-4e49-b89b-0cf7e5dfb7ff",
    "name": "Siti Nur Chasanah, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Bahasa Inggris",
    "education": "S.1/Pend. Bahasa Inggris",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786088017/smp45/uploads/ki6jqvyxxcrwmpdgcyx2.webp",
    "quote": ""
  },
  {
    "id": "0de8775e-4c63-4354-8810-046c3912806d",
    "name": "Moh. Zainul Anam, S.PdI",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "PAI",
    "education": "S.1/Pend. Agama Islam",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786282373/smp45/uploads/hjht5ive1efwz0ah4azf.webp",
    "quote": ""
  },
  {
    "id": "4a62fac8-e396-43d4-88c1-59d1f9c29edb",
    "name": "Kadari Ningsih Ayu Wandira S.PdI",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Bahasa Ingris (Kelas VII), PAI (Kelas VIII)",
    "education": "S.1/Pend. Agama Islam",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786088569/smp45/uploads/cv1yyx1ybfhlw5kddexi.webp",
    "quote": ""
  },
  {
    "id": "875a0456-dc19-4716-baf3-34f77c3df923",
    "name": "M. Akmalul Fahmi, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "IPS",
    "education": "S1 Pendidikan IPS",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786088957/smp45/uploads/uearviaj6feakzckjbkl.webp",
    "quote": ""
  }
];

export const galleryData: GalleryItem[] = [
  {
    "id": "9a0d77b9-f550-4311-9ae6-d9151f26b8a0",
    "title": "Upacara Hari Kartini",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778064/blogsmp/rnfxe5gb99inkrlrnmq0.webp",
    "date": "2026-05-03",
    "description": "Upacara Hari Kartini"
  },
  {
    "id": "a0c77b69-a332-4d45-9e5a-ab5288155996",
    "title": "Upacara Hari Kartini",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778050/blogsmp/gguxg0gwyrd3mq3slqhz.webp",
    "date": "2026-05-03",
    "description": "Upacara Hari Kartini"
  },
  {
    "id": "efe2dd03-fbc9-406d-9511-1900331aa922",
    "title": "Ujian Praktik Melukis",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777906/blogsmp/xyq30foul5p8odunj4tn.webp",
    "date": "2026-05-03",
    "description": "Ujian Praktik Melukis"
  },
  {
    "id": "be96acf1-4717-4dde-8caa-e26287ad7864",
    "title": "Ujian Praktik Melukis",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777881/blogsmp/vjq290dvidxj9mllax7z.webp",
    "date": "2026-05-03",
    "description": "Ujian Praktik Melukis"
  },
  {
    "id": "04701600-b576-428c-8b80-e77f05697a6c",
    "title": "Isra Miraj 2026",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789137176/smp45/uploads/k4jz2onqvovpwtdryafr.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "30df2b03-1126-4374-92e2-e69a38f27c5b",
    "title": "Juara Atletik TIngkat Kecamatan",
    "category": "Prestasi",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929474/blogsmp/m1tdvzg3jnjgt5plxokn.webp",
    "date": "2026-08-05",
    "description": "Juara Atletik TIngkat Kecamatan"
  },
  {
    "id": "c9c1bc44-7651-4dc9-a642-a867886652df",
    "title": "Juara 1 MTQ Tingkat Kecamatan",
    "category": "Prestasi",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929264/blogsmp/hyjkxbaftshsaa7yn34t.webp",
    "date": "2026-08-05",
    "description": "Juara 1 MTQ Tingkat Kecamatan"
  },
  {
    "id": "3c0b2896-0157-49c7-9355-623cc7ae3dbb",
    "title": "Seragam Olahraga",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929247/blogsmp/xbaoilubgxkn7tqyy9k1.webp",
    "date": "2026-08-05",
    "description": "Seragam Olahraga"
  },
  {
    "id": "2ab4296a-2f56-4f3e-ace7-8d386b55b5a5",
    "title": "Seragam Hari Jum'at - Sabtu",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929220/blogsmp/qfgaoynaq17pqodzrm9v.webp",
    "date": "2026-08-05",
    "description": "Seragam Hari Jum'at - Sabtu"
  },
  {
    "id": "9cd6d79d-3e6e-4ab6-8def-76421a54489c",
    "title": "Seragam Hari Rabu- Kamis",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929200/blogsmp/ihkwv0iyguhxxjdtrqcn.webp",
    "date": "2026-08-05",
    "description": "Seragam Hari Rabu- Kamis"
  },
  {
    "id": "807e5bcd-1f2a-42e4-aa7b-ae9b3b2a9e14",
    "title": "MPLS",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929122/blogsmp/cfubcotmlgtaznosammk.webp",
    "date": "2026-08-05",
    "description": "MPLS"
  },
  {
    "id": "9f20b38a-bf44-45c9-a62c-09a50c8867db",
    "title": "MPLS",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929102/blogsmp/dwanggq7kala6cwyjgjr.webp",
    "date": "2026-08-05",
    "description": "MPLS"
  },
  {
    "id": "0f0014e3-b138-49d5-b494-6ce881ad3112",
    "title": "MPLS",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929089/blogsmp/j0vzdehytblobcqhyhlb.webp",
    "date": "2026-08-05",
    "description": "MPLS"
  },
  {
    "id": "2f3bd339-c624-4b8c-bbfc-94fcd85f94d3",
    "title": "MPLS",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929075/blogsmp/eeyurnu6hjrwo6lpprgq.webp",
    "date": "2026-08-05",
    "description": "MPLS"
  },
  {
    "id": "56260a2a-eda3-442f-9870-e2a19dcb7afa",
    "title": "MPLS",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929052/blogsmp/kab3tyw1xjwsj2uksi2m.webp",
    "date": "2026-08-05",
    "description": "MPLS"
  },
  {
    "id": "1305f428-eddd-402c-9915-d3d3901161f6",
    "title": "Hari Pendidikan Nasional",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778131/blogsmp/bu96kyddcxf20k9uc1nq.webp",
    "date": "2026-05-03",
    "description": "Hari Pendidikan Nasional"
  },
  {
    "id": "1d8ddc73-519f-4743-a644-e52d33a4144c",
    "title": "Upacara Hari Kartini",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778037/blogsmp/s5wjyqpr1rlogm9covot.webp",
    "date": "2026-05-03",
    "description": "Upacara Hari Kartini"
  },
  {
    "id": "8ca84b47-72a0-4cc4-8810-4372b1f8533c",
    "title": "Upacara Hari Kartini",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778021/blogsmp/y7in0yddiahdyiw2rxpb.webp",
    "date": "2026-05-03",
    "description": "Upacara Hari Kartini"
  },
  {
    "id": "d334309d-0315-4a43-8a89-35787ae7cd67",
    "title": "Upacara Hari Kartini",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777995/blogsmp/jfnlmrx9ganhpudog14h.webp",
    "date": "2026-05-03",
    "description": "Upacara Hari Kartini"
  },
  {
    "id": "06f8330f-4c5f-4076-ae7a-f5178b87a5ff",
    "title": "Ujian Praktik Olahraga",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777969/blogsmp/sptmr08f3cnsfdku1y8y.webp",
    "date": "2026-05-03",
    "description": "Ujian Praktik Olahraga"
  },
  {
    "id": "c6365306-4e47-44be-9545-a2d5bb4e044f",
    "title": "Ujian Praktik Olahraga",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777933/blogsmp/ogsegoen2hr55xbeoilq.webp",
    "date": "2026-05-03",
    "description": "Ujian Praktik Olahraga"
  },
  {
    "id": "0fb4d96a-8361-4916-8f3d-6be98a659332",
    "title": "Isra Miraj 2026",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789137160/smp45/uploads/qmrvbfygseptyoy7frd9.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "e30f86df-4a8a-47c0-92ec-396cef9c89fb",
    "title": "Juara 3 Lompat Jauh Tingkat Kecamatan",
    "category": "Prestasi",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929531/blogsmp/xlc3mxvpp9qwegqtlyb9.webp",
    "date": "2026-08-05",
    "description": "Juara 3 Lompat Jauh Tingkat Kecamatan"
  },
  {
    "id": "159d6cb4-8b8d-4796-9ed4-af6bc063fcac",
    "title": "Seragam Hari Senin - Selasa",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929167/blogsmp/cbnbg7iruy3f1lijkjg7.webp",
    "date": "2026-08-05",
    "description": "Seragam Hari Senin - Selasa"
  },
  {
    "id": "d4c5c221-59a5-4e8c-9eff-f9454c193c3c",
    "title": "Seragam Sekolah",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929140/blogsmp/ub8or2ourvlpwljvwziq.webp",
    "date": "2026-08-05",
    "description": "Seragam Sekolah"
  },
  {
    "id": "907a2738-d062-4c56-a21b-3c524916e5f8",
    "title": "Hari Buruh Nasional",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778095/blogsmp/haocpxuwc6vgjmfn6sp8.webp",
    "date": "2026-05-03",
    "description": "Hari Buruh Nasional"
  },
  {
    "id": "f6cc68ec-9779-4a76-9762-1b318e70dae9",
    "title": "Upacara Hari Kartini",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778079/blogsmp/epxqqtve8yc7jgxlgqht.webp",
    "date": "2026-05-03",
    "description": "Upacara Hari Kartini"
  },
  {
    "id": "e6d7055c-6aff-446d-9c51-9882063b29a7",
    "title": "Hari Pramuka",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786967121/smp45/uploads/ebumigaoygnodsov12ta.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "43509422-b9ce-4639-8635-0ae142966836",
    "title": "Hari Pramuka",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786967095/smp45/uploads/ltyckjbarnd71mppp6vt.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "af3b09d1-2475-47f5-808c-1c50f28db639",
    "title": "Hari Pramuka",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786967048/smp45/uploads/j4c62a9ac5ixmbe1gkxi.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "c71dd9d2-1f6c-4926-8cd0-89fb0ab3a55b",
    "title": "Ujian Praktik Sholat Jenazah",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777787/blogsmp/tvye7ukn3wnwxmwwnnfu.webp",
    "date": "2026-05-03",
    "description": "Ujian Praktik Sholat Jenazah"
  },
  {
    "id": "6af8da36-7a2b-4f12-909d-35f3d2b9094d",
    "title": "Halal Bihalal",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777767/blogsmp/cktijjtzlapd9rzxgzjy.webp",
    "date": "2026-05-03",
    "description": "Halal Bihalal"
  },
  {
    "id": "5bc05893-e5e1-4bfd-be7c-d18d35c439ce",
    "title": "Halal Bihalal",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777692/blogsmp/mzisz24bj4ljrejqhvdi.webp",
    "date": "2026-05-03",
    "description": "Halal Bihalal"
  },
  {
    "id": "b8169695-c7a9-460a-9522-ed176967e32f",
    "title": "Isra' Mi'raj",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912747/blogsmp/ks3xbzaequnm056wj3at.webp",
    "date": "2026-01-20",
    "description": "Isra' Mi'raj"
  },
  {
    "id": "f24a1501-673e-4fee-9761-d96a1167f45d",
    "title": "Isra' Mi'raj",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912726/blogsmp/cmpqyw0ykq5kftspmdl8.webp",
    "date": "2026-01-20",
    "description": "Isra' Mi'raj"
  },
  {
    "id": "5b409c7c-9c8a-4ec7-89b1-4d581972a093",
    "title": "Isra' Mi'raj",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912662/blogsmp/a14jeypb6eotu4slp5ay.webp",
    "date": "2026-01-20",
    "description": "Isra' Mi'raj"
  },
  {
    "id": "b7a56064-86cc-46e0-aed8-576c8d6f22c4",
    "title": "Isra' Mi'raj",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912650/blogsmp/xd4umgcaheeqwpd9pujw.webp",
    "date": "2026-01-20",
    "description": "Isra' Mi'raj"
  },
  {
    "id": "583fad4f-9a1c-4e80-8869-fbc43d1c4846",
    "title": "Isra' Mi'raj",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912592/blogsmp/mcli6f8qiy1fwsohyiv2.webp",
    "date": "2026-01-20",
    "description": "Isra' Mi'raj"
  },
  {
    "id": "53b91504-e303-487f-9fb6-581db6ad2a92",
    "title": "Pemeriksaan Kebugaran",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912554/blogsmp/jdlfzy1ghia6rt3ddv4f.webp",
    "date": "2026-01-20",
    "description": "Pemeriksaan Kebugaran"
  },
  {
    "id": "2f6a08f1-58fb-4ede-91fd-cc1196797ace",
    "title": "Pemeriksaan Kebugaran",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912527/blogsmp/ia8ia1kc4fnjgpte8hed.webp",
    "date": "2026-01-20",
    "description": "Pemeriksaan Kebugaran"
  },
  {
    "id": "85113a10-db34-43b8-a104-f5d680cfcbfb",
    "title": "Pemeriksaan Kebugaran",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912498/blogsmp/qbu9yqa96udiqqurfrfu.webp",
    "date": "2026-01-20",
    "description": "Pemeriksaan Kebugaran"
  },
  {
    "id": "3423cb42-b5bd-4ef2-a102-c18f3d045429",
    "title": "Pentas Seni",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1766191712/blogsmp/bz5zaj5lvmvcdanr5vmu.webp",
    "date": "2025-12-20",
    "description": "Pentas Seni"
  },
  {
    "id": "19ab916a-a5d4-48e6-9467-0d0e91d37370",
    "title": "Pentas Seni",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1766012383/blogsmp/nahh5srcfvrm5fy40ryu.webp",
    "date": "2025-12-17",
    "description": "Pentas Seni"
  },
  {
    "id": "67c8326c-7df6-4367-bfc9-197db8d1a8b2",
    "title": "Pentas Seni",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1766011877/blogsmp/vlyd8stqk1qzrtfo88dl.webp",
    "date": "2025-12-17",
    "description": "Pentas Seni"
  },
  {
    "id": "a762734f-7ce9-4412-93d4-d5637c151ff3",
    "title": "Isra Miraj 2026",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789137192/smp45/uploads/uode7mz2f6hyjqlhm2nt.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "e8a3e2ca-fbb9-4f86-ac3f-b92542df2e07",
    "title": "Lomba Agustusan",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1788147987/smp45/uploads/ushmfyduykbxsabapiqe.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "79a39af4-4fe6-49e5-851c-6acae721a456",
    "title": "Lomba Agustus",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786163664/smp45/uploads/mnrqnmk7koqwoux69v81.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "2ea9331b-3e08-499c-9ad7-3ca9de4bb4cd",
    "title": "Lomba Agustusan",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1788147937/smp45/uploads/agvwuj890fyntsheipjn.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "fe981c88-d830-4856-8bf1-ef1e8818ad5e",
    "title": "Lomba Agustusan",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1788147897/smp45/uploads/wlkcwjq7q3ondtyfhwgf.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "e12de545-5df4-45d7-ab49-f1951b86f98f",
    "title": "Lomba Agustusan",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1788147853/smp45/uploads/y0jzny0uu580hrtsqjpb.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "cf76d062-f4a8-49b1-bd2a-16ee6c6a3ea4",
    "title": "Lomba Agustusan",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1788147778/smp45/uploads/ehur0tgjintzgkff0k3l.jpg",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "9b1c74ff-9dbd-4b3d-866b-f454882970aa",
    "title": "Lomba Agustusan",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1788147629/smp45/uploads/amyzs9lwnvd4q6nq51h5.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "e026a2a0-cbfe-4c4b-9834-a45366acac69",
    "title": "Hari Pramuka",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786967461/smp45/uploads/pji62uujxpbx7myfzuvk.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "36b11dc7-fdef-4183-8db9-b58360634cbb",
    "title": "Hari Pramuka",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786967163/smp45/uploads/stdqjvjkyvjzog4q3xex.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "427b6c3a-5c13-42b6-a958-275a6c2a0050",
    "title": "Lomba Agustusan",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1788147555/smp45/uploads/q1r0zdulvxene2bocm49.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "5441fbde-6e9f-449d-800d-eb5e9738144d",
    "title": "Lomba Agustus",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786163678/smp45/uploads/j1tlnaqpovxlx5cwn3yo.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "d800ab8f-8a4c-41a2-9fbe-ff19027a3faf",
    "title": "Lomba Agustus",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786163648/smp45/uploads/ks8onle7klp9fx5qyuw7.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "a7d6b374-25a8-4b7a-a071-7e3fa66cdd06",
    "title": "Lomba Agustus",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786163620/smp45/uploads/doxprmxsjldxotoim9sp.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "bfdc681c-76c5-4640-92fe-79363db65dac",
    "title": "Juara Lomba Badminton",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786968085/smp45/uploads/gbvvasqna1hzgvmsk9wk.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "f4dc9fde-a667-47d7-9cb6-de1afbd34c6c",
    "title": "Hari Pramuka",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786967543/smp45/uploads/bqhycmvl48ppsv5wivki.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "9077203a-d6f3-40eb-be21-acf3d845057c",
    "title": "Hari Pramuka",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786967486/smp45/uploads/vvidiyvnin4yc1irxz4d.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "ece2cb65-f976-43ac-8200-8e6a3d44cb42",
    "title": "Hari Pramuka",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786967195/smp45/uploads/l8y6bgu1ceebrrub06fb.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "13bf3b72-454a-498e-81ff-99cfcfbb02e8",
    "title": "Lomba Agustusan",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1788148015/smp45/uploads/roo5xuofmn4iay4tmag0.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "737f07a8-9118-4db8-b831-68703e0fe160",
    "title": "Lomba Agustusan",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1788148229/smp45/uploads/cdpvwjb0sfujyu7dty4d.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "98d1a363-c2ea-45fa-a42b-116fe3e33b81",
    "title": "Isra Miraj 2026",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789140345/smp45/uploads/ilh1rn42lxm8fpaamhfi.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "2f7595da-d925-4912-889f-832dea05a205",
    "title": "Ujian Praktik Melukis",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777847/blogsmp/wtv031ji03nr2gwg48sa.webp",
    "date": "2026-05-03",
    "description": "Ujian Praktik Melukis"
  },
  {
    "id": "20ea1e88-a76d-4251-8d2d-24e89c01e956",
    "title": "Lomba Agustusan",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1788148095/smp45/uploads/mbk0zbe1oi2uezni7pbl.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "635dc624-d986-40dc-bcc9-348c57ed409f",
    "title": "Ujian Praktik Sholat Jenazah",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777829/blogsmp/eebya5iye6s5inffrmbt.webp",
    "date": "2026-05-03",
    "description": "Ujian Praktik Sholat Jenazah"
  },
  {
    "id": "da08c930-c2c1-465a-b7f8-ccf89c5622bc",
    "title": "Halal Bihalal",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777750/blogsmp/euyvo4z54phhzcdyswzq.webp",
    "date": "2026-05-03",
    "description": "Halal Bihalal"
  },
  {
    "id": "64beb1e5-bc0d-486b-ac55-1265cb30d2b2",
    "title": "Isra Miraj 2026",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789137145/smp45/uploads/frqt8wnodkqfozvq5gyl.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "6f704a66-eabc-4631-96a2-8ec560c7a484",
    "title": "Isra Miraj 2026",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789137124/smp45/uploads/d5tolvd7rtbmloxmhwq8.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "3519341c-e726-4396-a07f-a7e3a2067db8",
    "title": "Isra Miraj 2026",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789137106/smp45/uploads/okcbadhbnknvz5uu0qzw.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "456f7650-d5ed-4ad1-8705-dd11d1178d3f",
    "title": "Isra Miraj 2026",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789137087/smp45/uploads/sxougxwiqc4keajijetc.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "19f99747-2460-48a4-9c59-fb4b3e45ad79",
    "title": "Isra Miraj 2026",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789137073/smp45/uploads/a1ygcwxbdkmylsp3nzxt.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "796d78a1-0554-46bc-82d2-fb16e7b6c995",
    "title": "Isra Miraj 2026",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789137055/smp45/uploads/d30jdxa3rl6e1c3qwakf.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "222f5455-7741-4718-bb36-14fa485efc60",
    "title": "Isra Miraj 2026",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789137038/smp45/uploads/c5xb2ygmwtkiyj8r6pmi.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "a2de6879-573b-4741-b2d4-700f0c3d02dd",
    "title": "Isra Miraj 2026",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789137013/smp45/uploads/macofvba1u1lqbmpshyh.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "160239dc-ae65-431d-b582-e30b2dae2274",
    "title": "Isra Miraj 2026",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789136998/smp45/uploads/cvtmxbaazycnymwozlsc.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "303b13a0-f2dd-4ad6-8b59-5075eca47e2e",
    "title": "Isra Miraj 2026",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1789135799/smp45/uploads/txqxewn3rnpud1iizqrf.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "6d4a20b2-3a11-475a-bfd2-01c236a39fb4",
    "title": "Lomba Agustusan",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1788148633/smp45/uploads/j3rchs15m1uikden3svl.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "1e0e4326-44b3-4f7f-83ab-7490e194f8d6",
    "title": "Lomba Agustusan",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1788148615/smp45/uploads/foesv6pnzlwj8pao2ums.webp",
    "date": "2026-10-10",
    "description": ""
  },
  {
    "id": "15c54a12-04db-4318-aa53-60fccee4a2c6",
    "title": "Lomba Agustusan",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1788148269/smp45/uploads/slscgyccmb583afpxocn.webp",
    "date": "2026-10-10",
    "description": ""
  }
];

export const programsData: ProgramItem[] = [
  {
    "id": "1d54d05e-d469-46b0-8b50-a5bb592dfba4",
    "title": "Sains & Teknologi",
    "badge": "Program Sekolah",
    "shortDesc": "Pembelajaran sains modern dengan perspektif Islam",
    "fullDesc": "Pembelajaran sains modern dengan perspektif Islam",
    "iconName": "BrainCircuit",
    "highlights": [
      "Pembelajaran sains modern dengan perspektif Islam"
    ],
    "schedule": "Terintegrasi Pembelajaran",
    "imageUrl": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000"
  },
  {
    "id": "4342b65e-e623-42b0-aa16-af6ee14222c0",
    "title": "Tahfidz Al-Qur'an",
    "badge": "Program Sekolah",
    "shortDesc": "Program hafalan Al-Qur'an dengan target",
    "fullDesc": "Program hafalan Al-Qur'an dengan target",
    "iconName": "BookOpen",
    "highlights": [
      "Program hafalan Al-Qur'an dengan target"
    ],
    "schedule": "Terintegrasi Pembelajaran",
    "imageUrl": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000"
  },
  {
    "id": "759e0a13-4f78-4bee-a9c9-a2d36e444af0",
    "title": "Ekstrakulikuler",
    "badge": "Program Sekolah",
    "shortDesc": "Pramuka, Drumband, Hadroh, dan Olahraga",
    "fullDesc": "Pramuka, Drumband, Hadroh, dan Olahraga",
    "iconName": "Award",
    "highlights": [
      "Pramuka, Drumband, Hadroh, dan Olahraga"
    ],
    "schedule": "Terintegrasi Pembelajaran",
    "imageUrl": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/bybamn19hpp_1765980927714.webp"
  },
  {
    "id": "0b4c5507-e656-48d9-a6bf-9abfd5fee05b",
    "title": "Sholat Berjamaah",
    "badge": "Program Sekolah",
    "shortDesc": "Pembiasaan sholat Dhuha dan Dzuhur berjamaah setiap hari",
    "fullDesc": "Pembiasaan sholat Dhuha dan Dzuhur berjamaah setiap hari",
    "iconName": "Users",
    "highlights": [
      "Pembiasaan sholat Dhuha dan Dzuhur berjamaah setiap hari"
    ],
    "schedule": "Terintegrasi Pembelajaran",
    "imageUrl": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000"
  },
  {
    "id": "a3aa2e2a-5209-456c-84a8-18dea439a740",
    "title": "Pembinaan Akhlak",
    "badge": "Program Sekolah",
    "shortDesc": "Pembentukan karakter islami melalui pembiasaan dan keteladanan",
    "fullDesc": "Pembentukan karakter islami melalui pembiasaan dan keteladanan",
    "iconName": "HeartHandshake",
    "highlights": [
      "Pembentukan karakter islami melalui pembiasaan dan keteladanan"
    ],
    "schedule": "Terintegrasi Pembelajaran",
    "imageUrl": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000"
  },
  {
    "id": "82aab682-38f8-4b1f-8860-3c9ac33e26ee",
    "title": "Pembelajaran Bahasa Arab",
    "badge": "Program Sekolah",
    "shortDesc": "Penguasaan bahasa Arab aktif untuk komunikasi dan pemahaman kitab",
    "fullDesc": "Penguasaan bahasa Arab aktif untuk komunikasi dan pemahaman kitab",
    "iconName": "BookOpen",
    "highlights": [
      "Penguasaan bahasa Arab aktif untuk komunikasi dan pemahaman kitab"
    ],
    "schedule": "Terintegrasi Pembelajaran",
    "imageUrl": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000"
  }
];

export const extracurricularsData: ExtracurricularItem[] = [
  {
    "id": "0a6395b0-b510-40b9-9aaf-7a3bac019cdf",
    "name": "Seni Tari",
    "schedule": "Jumat, 14.30 WIB",
    "coach": "",
    "description": "Ekstrakurikuler Seni Tari menjadi wadah bagi siswa untuk mengeksplorasi keindahan gerak, baik dalam tarian tradisional maupun modern. Anggota akan mempelajari teknik dasar, ritme, serta ekspresi panggung yang dapat melatih kedisiplinan dan rasa percaya diri. Selain mengasah bakat seni, kegiatan ini juga turut melestarikan kekayaan budaya melalui berbagai pertunjukan dan kompetisi.",
    "achievements": [],
    "imageUrl": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800"
  },
  {
    "id": "8cd9ad73-7d73-4e4c-9ba0-36dcd308c0ab",
    "name": "MTQ (Musabaqah Tilawatil Qur'an)",
    "schedule": "Jumat, 14.30 WIB",
    "coach": "",
    "description": "Ekstrakurikuler ini bertujuan untuk memperdalam kemampuan siswa dalam membaca, menghafal, dan memahami Al-Qur'an dengan tajwid serta irama yang indah. Melalui bimbingan rutin, para anggota dilatih untuk meningkatkan keimanan sekaligus mempersiapkan diri menghadapi berbagai ajang kompetisi keagamaan. Kegiatan ini menjadi wadah pembentukan karakter religius yang berprestasi dan berakhlak mulia.",
    "achievements": [],
    "imageUrl": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800"
  },
  {
    "id": "eb31c39a-f94a-44d5-863e-5849b939af9f",
    "name": "Pramuka Gudep Ma'arif 45.02",
    "schedule": "Jumat (09.30 - 11.00 WIB)",
    "coach": "",
    "description": "Ekstrakurikuler wajib pembentuk kedisiplinan, kemandirian, dan cinta tanah air berbasis Dasa Darma.",
    "achievements": [],
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1786967121/smp45/uploads/ebumigaoygnodsov12ta.webp"
  },
  {
    "id": "d41123da-8926-4753-8ee1-3ff823dd710e",
    "name": "Seni Hadrah & Banjari \"Bahana Empat Lima\"",
    "schedule": "Setiap Rabu Sore (15.00 WIB)",
    "coach": "",
    "description": "Grup musik Islami pelestari seni sholawat khas An-Nahdliyah dengan kombinasi pukulan reban moderen.",
    "achievements": [
      "Juara Harapan 1 Festival Banjari Pelajar Kedungpring",
      "Pengisi Acara Pengajian Yayasan"
    ],
    "imageUrl": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "3c89ad96-d104-41ee-bcc0-8c9584ec4740",
    "name": "IT & Web Media Team",
    "schedule": "Setiap Selasa Sore (14.30 WIB)",
    "coach": "",
    "description": "Klub jurnalistik digital, fotografi, videografi konten kreatif, dan pemrograman komputer dasar.",
    "achievements": [
      "Pengelola Media Sosial & Dokumen Website Sekolah"
    ],
    "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "0e1a2339-45a6-410f-8916-c30ea6af2bf0",
    "name": "Bola Voli & Futsal",
    "schedule": "Setiap Senin & Kamis Sore",
    "coach": "",
    "description": "Pembinaan stamina, kerja sama tim, dan ketangkasan olahraga bola voli serta futsal antar sekolah.",
    "achievements": [],
    "imageUrl": "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": "e2e4455d-9775-43fb-8c4c-9128848002ae",
    "name": "English Course",
    "schedule": "Jumat, 09.30 WIB",
    "coach": "",
    "description": "Ekstrakurikuler ini dirancang untuk mengasah kemampuan berbahasa Inggris siswa secara interaktif melalui kegiatan debat, percakapan harian, dan permainan peran. Selain meningkatkan rasa percaya diri dalam berbicara, anggota juga dapat memperluas kosakata serta pemahaman tata bahasa secara menyenangkan. Kegiatan ini menjadi sarana tepat untuk mempersiapkan siswa menghadapi tantangan global dan kompetisi akademik.",
    "achievements": [],
    "imageUrl": "https://res.cloudinary.com/lvrhzzon/image/upload/v1791644713/smp45/uploads/utz7bnspytonplpqve9c.webp"
  }
];

export const facilitiesData: FacilityItem[] = [
  {
    "id": "fa677e8e-08a4-4ebd-9a89-f98985213c05",
    "name": "Ruang Kelas Nyaman & Multimedia Projector",
    "description": "Seluruh ruang kelas dilengkapi dengan kipas/AC, pencahayaan alami yang baik, serta LCD projector untuk pembelajaran visual.",
    "imageUrl": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
    "countLabel": "12 Ruang Kelas"
  },
  {
    "id": "d03ecae8-aa9c-46cb-9d58-c34a487f64f5",
    "name": "Laboratorium Komputer & Bahasa Digital",
    "description": "Dilengkapi 30+ unit komputer ber-spesifikasi tinggi, koneksi internet serat optik, dan software pendukung pembelajaran.",
    "imageUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    "countLabel": "1 Unit Lab Komputer"
  },
  {
    "id": "220224e7-9d90-4cf5-ad67-2c0cafde7afe",
    "name": "Musholla Ma'arif Berkapasitas 400 Jamaah",
    "description": "Tempat ibadah utama yang bersih dan tenang untuk sholat Dhuha, Dzuhur berjamaah, dan pengajian rutin.",
    "imageUrl": "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop",
    "countLabel": "1 Musholla Utama"
  },
  {
    "id": "f4ebd1bb-163c-4d71-97a3-107298f6e6a7",
    "name": "Perpustakaan & Ruang Baca Literasi",
    "description": "Koleksi ribuan buku pelajaran, novel edukatif, ensiklopedia Islami, majalah, dan pojok baca digital.",
    "imageUrl": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
    "countLabel": "1 Perpustakaan"
  },
  {
    "id": "083c6ffb-3075-4eae-9589-40b59315ddb2",
    "name": "Lapangan Olahraga Serbaguna",
    "description": "Lapangan luas untuk upacara bendera, pertandingan voli, basket, futsal, dan latihan pencak silat.",
    "imageUrl": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
    "countLabel": "1 Lapangan Luas"
  },
  {
    "id": "7506a10d-9e64-4475-b3ed-9abb5d89f9f1",
    "name": "Kantin Sehat & Dapur Gizi",
    "description": "Menyediakan makanan dan minuman higienis, halal, dan terjangkau yang dikontrol kebersihannya oleh pihak sekolah.",
    "imageUrl": "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=800&auto=format&fit=crop",
    "countLabel": "Kantin Sekolah Higenis"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    "id": "c71663f4-3700-412f-81bf-3ec638871a18",
    "name": "Ahmad Khoirul Anam, S.T.",
    "role": "Alumni Angkatan 2018 (Sekarang Software Engineer)",
    "quote": "Fondasi agama yang kuat dan kedisiplinan belajar dari para guru SMP 45 2 Kedungpring menjadi modal berharga saya hingga bisa sukses di dunia profesional IT.",
    "photoUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    "id": "b9186783-46d5-4d4d-ab21-f1a9042f969a",
    "name": "Hj. Nurul Hidayah",
    "role": "Wali Murid Ananda Annisa (Kelas IX-A)",
    "quote": "Sangat bersyukur menyekolahkan anak di sini. Selain perkembangan akademiknya bagus, anak saya sekarang rajin Sholat Dhuha dan membaca Al-Qur'an tanpa perlu disuruh.",
    "photoUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    "id": "e817a9ee-f311-43bb-8164-17139314cc7c",
    "name": "Siti Nur Aini",
    "role": "Siswa Kelas IX / Peraih Juara MTQ Pelajar",
    "quote": "Guru-gurunya sangat sabar dan mendukung bakat siswa. Tempat belajarnya adem, banyak teman, dan kegiatan ekstrakurikulernya seru dan serba lengkap!",
    "photoUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  }
];

export const ppdbFaqsData: PpdbFaqItem[] = [
  {
    "id": "168b4620-bb20-4268-ba59-86805e4c69f1",
    "question": "Apakah pendaftaran PPDB dikenakan biaya?",
    "answer": "Pendaftaran PPDB tidak dipungut biaya (gratis). Apabila terdapat biaya lain, akan diinformasikan secara resmi oleh pihak sekolah."
  },
  {
    "id": "606247b8-3e4f-4e9b-8905-eb2162946bfa",
    "question": "Apakah pendaftaran bisa dilakukan secara offline?",
    "answer": "bagi calon peserta didik yang mengalami kendala untuk mendaftar secara online, dapat datang langsung ke sekolah pada jam kerja untuk mendapatkan bantuan."
  },
  {
    "id": "cacf0c31-4115-46c2-b046-7069a2bf5c11",
    "question": "Ke mana harus bertanya jika mengalami kendala saat PPDB?",
    "answer": "Orang tua/wali dapat menghubungi panitia PPDB SMP melalui kontak yang tersedia di website atau datang langsung ke sekolah pada jam kerja."
  },
  {
    "id": "44510db4-621d-493d-bda9-dff0a165d7ca",
    "question": "Bagaimana jika data yang diinput salah?",
    "answer": "Jika terjadi kesalahan pengisian data, peserta dapat melakukan perbaikan selama masa pendaftaran masih dibuka atau menghubungi panitia PPDB sekolah."
  },
  {
    "id": "00f611f7-230e-45ed-9b32-ead63b569758",
    "question": "Bagaimana jika data yang diunggah salah atau tidak jelas?",
    "answer": "Jika terjadi kesalahan data, peserta dapat memperbaikinya selama masa pendaftaran atau akan diminta melakukan perbaikan oleh panitia PPDB."
  }
];

// Compatibility aliases for existing components
export const schoolInfo = schoolInfoData;
export const heroSlides = heroSlidesData;
export const testimonials = testimonialsData;
export const ppdbFaqs = ppdbFaqsData;

export interface SchoolStatItem {
  icon: string;
  value: string;
  suffix?: string;
  label: string;
}

export const schoolStats: SchoolStatItem[] = [
  { icon: 'Users', value: '128', suffix: '+', label: 'Peserta Didik Aktif' },
  { icon: 'GraduationCap', value: '19', suffix: '', label: 'Guru & Tenaga Pendidik' },
  { icon: 'Trophy', value: '42', suffix: '+', label: 'Prestasi & Penghargaan' },
  { icon: 'Award', value: 'B', suffix: '', label: 'Akreditasi Sekolah' },
  { icon: 'TrendingUp', value: '100', suffix: '%', label: 'Kelulusan Siswa' },
];

