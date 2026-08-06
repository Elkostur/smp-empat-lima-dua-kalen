export interface HeroSlide {
  id: number | string;
  title: string;
  subtitle?: string;
  badge: string;
  description: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  bgImage: string;
}

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
  tagline: string;
  vision: string;
  missions: string[];
  history: string;
  googleMapsEmbedUrl: string;
  socials: {
    facebook: string;
    instagram: string;
    youtube: string;
    tiktok: string;
  };
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: 'Pengumuman' | 'Kegiatan' | 'Prestasi' | 'Keagamaan & Tahfidz' | 'Ekstrakurikuler' | 'Artikel & Opini';
  date: string;
  author: string;
  authorRole: string;
  readTime: string;
  image: string;
  summary: string;
  content: string;
  tags: string[];
  featured?: boolean;
}

export interface StaffItem {
  id: string;
  name: string;
  role: string;
  department: 'Kepala Sekolah' | 'Guru Mata Pelajaran' | 'Guru BK' | 'Tenaga Kependidikan';
  subject?: string;
  education: string;
  photo: string;
  quote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Kegiatan' | 'Prestasi' | 'Keagamaan' | 'Fasilitas' | 'Ekstrakurikuler';
  imageUrl: string;
  date: string;
  description: string;
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
  imageUrl: string;
}

export interface ExtracurricularItem {
  id: string;
  name: string;
  coach: string;
  schedule: string;
  description: string;
  iconName: string;
  achievements: string[];
  imageUrl: string;
}

export interface FacilityItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  count: string;
}

export interface PpdbFaqItem {
  question: string;
  answer: string;
}

export const schoolInfo: SchoolInfo = {
  name: 'SMP "Empat Lima" 2 Kedungpring',
  shortName: 'SMP 45 2 Kedungpring',
  foundation: "Yayasan Pendidikan Ma'arif Empat Lima Kalen",
  npsn: '20506321',
  accreditation: 'Akreditasi B (Menuju A Unggul)',
  address: 'Jl. Raya Kedungpring - Sugio No. 45, Desa Kalen',
  district: 'Kecamatan Kedungpring',
  regency: 'Kabupaten Lamongan',
  province: 'Jawa Timur',
  postalCode: '62283',
  phone: '(0322) 456-789',
  whatsapp: '6285730219945',
  email: 'info@smp452kedungpring.sch.id',
  operatingHours: 'Senin - Sabtu: 07.00 - 14.00 WIB',
  principal: 'Drs. H. Ahmad Masrukin, M.Pd.',
  principalTitle: 'Kepala SMP "Empat Lima" 2 Kedungpring',
  principalQuote:
    'Pendidikan di SMP Empat Lima 2 Kedungpring berlandaskan pada integrasi IPTEK dan IMTAK. Kami berkomitmen mencetak generasi santri yang cerdas, santun, mandiri, dan berakhlakul karimah sesuai nilai-nilai An-Nahdliyah.',
  principalPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  tagline: 'Unggul dalam Prestasi, Anggun dalam Moralku, Berkarakter Islami & Berwawasan Global',
  vision:
    'Terwujudnya Lembaga Pendidikan Islam Terkemuka yang Menghasilkan Lulusan Berakhlak Mulia, Unggul dalam Prestasi Akademik & Non-Akademik, serta Berwawasan Lingkungan.',
  missions: [
    'Menyelenggarakan pembelajaran Islami berbasis Kurikulum Merdeka yang terintegrasi dengan nilai-nilai An-Nahdliyah.',
    'Membina pembiasaan ibadah Yaumiyah (Sholat Dhuha, Sholat Dzuhur Berjamaah, Istighosah, dan Qur`anic Hafalan).',
    'Mengembangkan potensi peserta didik secara optimal melalui kegiatan intrakurikuler dan ekstrakurikuler yang berkualitas.',
    'Meningkatkan profesionalisme pendidik dan tenaga kependidikan berbasis teknologi informasi.',
    'Mewujudkan sarana prasarana sekolah yang kondusif, bersih, hijau, dan modern berbasis digital school.',
    'Membangun kerjasama yang harmonis antara sekolah, yayasan, orang tua murid, dan masyarakat.',
  ],
  history: `SMP "Empat Lima" 2 Kedungpring didirikan sebagai bentuk komitmen nyata Yayasan Pendidikan Ma'arif Empat Lima Kalen dalam menghadirkan sarana pendidikan menengah pertama berkualitas berbasis nilai-nilai Islam Ahlussunnah wal Jama'ah An-Nahdliyah di wilayah Kedungpring dan sekitarnya.\n\nSejak awal berdiri, sekolah kami konsisten memadukan Kurikulum Nasional (Kurikulum Merdeka) dengan pembiasaan keagamaan khas pesantren, seperti Sholat Dhuha berjamaah, Istighosah rutin, hafalan Al-Qur'an Juz 30, dan penguatan karakter kemandirian santri.\n\nDidukung oleh tenaga pendidik profesional lulusan perguruan tinggi ternama serta sarana pendukung digital, SMP Empat Lima 2 Kedungpring terus berkembang menjadi sekolah pilihan utama masyarakat Kedungpring, Sugio, Kalen, dan sekitarnya.`,
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8263889123!2d112.1852!3d-7.1895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTEnMjIuMiJTIDExM8KwMTEnMDYuNyJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
  socials: {
    facebook: 'https://facebook.com/smp452kedungpring',
    instagram: 'https://instagram.com/smp452_kedungpring',
    youtube: 'https://youtube.com/@smp452kedungpringofficial',
    tiktok: 'https://tiktok.com/@smp452kedungpring',
  },
};

export const schoolStats = [
  { label: 'Peserta Didik Aktif', value: 342, suffix: '+', icon: 'Users' },
  { label: 'Guru & Tenaga Pendidik', value: 28, suffix: ' Orang', icon: 'GraduationCap' },
  { label: 'Ekstrakurikuler Wajib/Pilihan', value: 12, suffix: ' Cabang', icon: 'Trophy' },
  { label: 'Prestasi Tingkat Kab./Prov.', value: 48, suffix: '+ Tropi', icon: 'Award' },
  { label: 'Alumni Melanjutkan ke SMA/MA Favorit', value: 98, suffix: '%', icon: 'TrendingUp' },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Selamat Datang di Website Resmi SMP "Empat Lima" 2 Kedungpring',
    subtitle: "Yayasan Pendidikan Ma'arif Empat Lima Kalen - Kedungpring, Lamongan",
    badge: 'Tahun Ajaran 2026/2027',
    description:
      'Membentuk Generasi Cerdas Berakhlakul Karimah, Berprestasi Tinggi, dan Memegang Teguh Nilai-Nilai Keislaman An-Nahdliyah.',
    ctaPrimary: 'Pendaftaran PPDB Online',
    ctaSecondary: 'Jelajahi Profil Sekolah',
    bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Penerimaan Peserta Didik Baru (PPDB) Telah Dibuka!',
    subtitle: 'Gelombang 1: Dapatkan Beasiswa Khusus Bebas Biaya Pendaftaran & Seragam',
    badge: 'PPDB Online Buka',
    description:
      'Mari bergabung bersama keluarga besar SMP 45 2 Kedungpring. Lingkungan belajar yang asri, sarana digital modern, dan pembinaan karakter Islami.',
    ctaPrimary: 'Formulir PPDB',
    ctaSecondary: 'Informasi Alur Pendaftaran',
    bgImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Program Unggulan Tahfidz Al-Qur\'an & Pembiasaan Karakter',
    subtitle: 'Pembiasaan Sholat Dhuha, Dzuhur Berjamaah & Amaliyah Yaumiyah',
    badge: 'Pendidikan Karakter',
    description:
      'Setiap siswa dibimbing untuk menghafal Juz 30 Al-Qur\'an serta dibekali pemahaman agama Islam yang teduh, inklusif, dan berkemajuan.',
    ctaPrimary: 'Lihat Program Unggulan',
    ctaSecondary: 'Jadwal Extrakurikuler',
    bgImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop',
  },
];

export const newsData: NewsItem[] = [
  {
    id: '1',
    slug: 'pembukaan-ppdb-tahun-ajaran-2026-2027',
    title: 'Resmi Dibuka! Penerimaan Peserta Didik Baru (PPDB) SMP Empat Lima 2 Kedungpring Tahun Ajaran 2026/2027',
    category: 'Pengumuman',
    date: '02 Agustus 2026',
    author: 'Panitia PPDB',
    authorRole: 'Humas Sekolah',
    readTime: '3 menit',
    featured: true,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    summary:
      'SMP "Empat Lima" 2 Kedungpring secara resmi membuka pendaftaran peserta didik baru gelombang 1 dengan berbagai kemudahan dan fasilitas beasiswa menarik.',
    content: `
      <p>Yayasan Pendidikan Ma'arif Empat Lima Kalen Kedungpring mengumumkan pembukaan Penerimaan Peserta Didik Baru (PPDB) untuk Tahun Ajaran 2026/2027. Pendaftaran gelombang pertama berlangsung mulai tanggal 1 Agustus hingga 30 September 2026.</p>
      
      <h3>Keuntungan Mendaftar di Gelombang 1:</h3>
      <ul>
        <li><strong>Bebas Biaya Pendaftaran:</strong> Tanpa uang pendaftaran awal bagi 50 pendaftar pertama.</li>
        <li><strong>Gratis Seragam Olahraga:</strong> Diberikan secara cuma-cuma sebagai bentuk apresiasi kepercayaan wali murid.</li>
        <li><strong>Beasiswa Tahfidz & Prestasi:</strong> Potongan biaya pendidikan bagi siswa penghafal Al-Qur'an dan pemenang lomba tingkat kabupaten.</li>
      </ul>

      <p>Pendaftaran dapat dilakukan secara langsung di Sekretariat PPDB SMP 45 2 Kedungpring setiap jam kerja (07.30 - 13.00 WIB) atau melalui laman PPDB Online resmi website ini.</p>
    `,
    tags: ['PPDB', 'Pendaftaran', 'Kedungpring', 'Siswa Baru'],
  },
  {
    id: '2',
    slug: 'juara-1-lomba-pencak-silat-pagar-nusa-kabupaten-lamongan',
    title: 'Siswa SMP 45 2 Kedungpring Sabet Juara 1 Lomba Pencak Silat Pagar Nusa Tingkat Kabupaten Lamongan',
    category: 'Prestasi',
    date: '28 Juli 2026',
    author: 'Tim Media Sekolah',
    authorRole: 'Redaksi Ekskul',
    readTime: '4 menit',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop',
    summary:
      'Ananda Muhammad Faiz (Kelas VIII-A) berhasil meraih Juara 1 Kategori Tanding Remaja Putra pada Kejuaraan Pencak Silat Pagar Nusa Kabupaten Lamongan.',
    content: `
      <p>Prestasi membanggakan kembali diukir oleh pesilat muda dari ekstrakurikuler Pagar Nusa SMP "Empat Lima" 2 Kedungpring. Muhammad Faiz, siswa kelas VIII-A, berhasil membawa pulang medali emas dan tropi Juara 1 pada ajang Kejuaraan Pencak Silat Pagar Nusa Lamongan 2026.</p>
      
      <p>Kepala Sekolah Drs. H. Ahmad Masrukin, M.Pd. menyampaikan rasa syukur dan apresiasi setinggi-tingginya kepada ananda Faiz dan pembina ekstrakurikuler. "Ini bukti bahwa pembinaan minat dan bakat di sekolah kami berjalan dengan sungguh-sungguh," tutur beliau saat pembacaan pengumuman di lapangan upacara.</p>
    `,
    tags: ['Prestasi', 'PagarNusa', 'PencakSilat', 'Lamongan'],
  },
  {
    id: '3',
    slug: 'peringatan-tahun-baru-islam-1448-h-dan-santunan-anak-yatim',
    title: 'Gema Muharram: SMP 45 2 Kedungpring Gelar Istighosah dan Santunan Puluhan Anak Yatim',
    category: 'Keagamaan & Tahfidz',
    date: '20 Juli 2026',
    author: 'Siti Rahmawati, S.Pd.I.',
    authorRole: 'Guru Agama & Pembina IPNU-IPPNU',
    readTime: '3 menit',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop',
    summary:
      'Dalam rangka memperingati 1 Muharram 1448 H, seluruh civitas akademika bersama Pengurus Yayasan Ma\'arif menyelenggarakan istighosah dan pembagian santunan.',
    content: `
      <p>Kemeriahan dan keberkahan menyelimuti Musholla Ma'arif SMP "Empat Lima" 2 Kedungpring. Seluruh jajaran guru, pengurus yayasan, pengurus OSIS, IPNU, dan IPPNU berkumpul melantunkan sholawat dan doa bersama dalam rangka menyambut Tahun Baru Islam 1448 H.</p>
      <p>Acara puncak diisi dengan penyaluran santunan paket sembako dan beasiswa pendidikan kepada 35 anak yatim dan siswa kurang mampu di sekitar lingkungan Desa Kalen Kedungpring.</p>
    `,
    tags: ['Muharram', 'Santunan', 'Keagamaan', 'Maarif'],
  },
  {
    id: '4',
    slug: 'pelatihan-coding-dan-literasi-digital-bersama-mahasiswa',
    title: 'Tingkatkan Skill Abad 21, Siswa Mengikuti Pelatihan Dasar Coding dan Desain Grafis Digital',
    category: 'Kegiatan',
    date: '12 Juli 2026',
    author: 'Budi Santoso, S.Kom.',
    authorRole: 'Guru TIK & IT Manager',
    readTime: '3 menit',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop',
    summary:
      'Program Smart School SMP 45 2 Kedungpring mengadakan workshop pemograman dasar HTML/CSS dan pembuatan konten digital kreatif di Laboratorium Komputer.',
    content: `
      <p>Era digital menuntut siswa untuk tidak hanya menjadi konsumen teknologi, tetapi juga pencipta karya digital. SMP 45 2 Kedungpring sukses menggelar workshop "Digital Literacy & Basic Coding for Youth" yang diikuti oleh 60 perwakilan siswa kelas VII dan VIII.</p>
    `,
    tags: ['DigitalSchool', 'Coding', 'Workshop', 'TIK'],
  },
  {
    id: '5',
    slug: 'kegiatan-perkemahan-jumat-sabtu-gudep-maarif',
    title: 'Membentuk Jiwa Kemandirian, Gudep Pramuka Ma\'arif Gelar Perkemahan Perjusami',
    category: 'Kegiatan',
    date: '05 Juli 2026',
    author: 'Tim Pembina Pramuka',
    authorRole: 'Kwartir Ranting',
    readTime: '4 menit',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1200&auto=format&fit=crop',
    summary:
      'Kegiatan Perkemahan Jumat-Sabtu (Perjusami) berlangsung khidmat di lapangan sekolah dengan agenda jelajah alam, pentas seni, dan api unggun keakraban.',
    content: `
      <p>Gugus Depan Pramuka Ma'arif SMP 45 2 Kedungpring menyelenggarakan Perjusami untuk menyambut calon penggalang baru. Kegiatan ditutup dengan penjelajahan halang rintang dan bakti sosial pembersihan area desa.</p>
    `,
    tags: ['Pramuka', 'Perjusami', 'Karakter', 'Kedungpring'],
  },
];

export const programsData: ProgramItem[] = [
  {
    id: 'tahfidz',
    title: 'Program Tahfidz Al-Qur\'an Juz 30 & Tilawah',
    badge: 'Program Unggulan Utama',
    shortDesc: 'Bimbingan intensif setoran hafalan Juz 30 dengan tartil, tajwid, dan sertifikasi kelulusan hafiz remaja.',
    fullDesc:
      'Program Tahfidz Al-Qur\'an dirancang untuk menanamkan kecintaan siswa terhadap Kitab Suci sejak usia remaja. Dibimbing langsung oleh ustadz/ustadzah hafidz Qur\'an, siswa memiliki target kelulusan minimal hafal Juz 30 beserta doa-doa harian dan tajwid yang fasih.',
    iconName: 'BookOpen',
    highlights: [
      'Bimbingan Setoran Hafalan Setiap Pagi (07.00 - 07.45 WIB)',
      'Pengujian Ujian Munaqosyah Bereputasi bersama LP Ma\'arif',
      'Wisuda Tahfidz Tahunan & Beasiswa Bebas SPP bagi yang Lulus Target',
      'Ijazah Khusus Sanad Hafalan Juz 30',
    ],
    schedule: 'Setiap Hari Senin - Jumat (Pagi Sebelum KBM)',
    imageUrl: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'pembiasaan-karakter',
    title: 'Pembiasaan Sholat Dhuha & Amaliyah An-Nahdliyah',
    badge: 'Pendidikan Karakter',
    shortDesc: 'Pelaksanaan Sholat Dhuha berjamaah, Sholat Dzuhur tepat waktu, Istighosah, serta pembiasaan 5S (Senyum, Sapa, Salam, Sopan, Santun).',
    fullDesc:
      'Karakter peserta didik dibentuk melalui rutinitas ibadah harian. Seluruh siswa dan guru berkumpul di Musholla Ma\'arif untuk melaksanakan sholat Dhuha berjamaah dilanjutkan membaca Surat Yasin, Waqi\'ah, atau Asmaul Husna sebelum kegiatan KBM dimulai.',
    iconName: 'HeartHandshake',
    highlights: [
      'Sholat Dhuha Berjamaah & Dzuhur Tepat Waktu di Musholla Sekolah',
      'Pembiasaan Pembacaan Asmaul Husna, Yasin & Tahlil Ringkas',
      'Bimbingan Aqidah Akhlak & Ke-NU-an Berlandaskan Ahlussunnah wal Jama\'ah An-Nahdliyah',
      'Penyaluran Zakat, Infaq Jumat Berkah & Bakti Sosial Masyarakat',
    ],
    schedule: 'Rutin Setiap Hari Efektif Sekolah',
    imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'smart-learning',
    title: 'Smart Class & Digital School Learning',
    badge: 'Inovasi Pembelajaran',
    shortDesc: 'Penggunaan media pembelajaran interaktif berbasis LCD projector, Google Classroom, E-Library, dan pelatihan TIK.',
    fullDesc:
      'SMP Empat Lima 2 Kedungpring memadukan kekhasan pendidikan Islam dengan kemajuan teknologi modern. Setiap kelas dilengkapi LCD Projector & koneksi WiFi sekolah untuk mendukung metode Blended Learning dan ujian berbasis komputer (CBT).',
    iconName: 'Laptop',
    highlights: [
      'Ujian Semester & Penilaian Berbasis Computer Based Test (CBT) / Mobile',
      'Akses Perpustakaan Digital E-Book & Jurnal Pembelajaran',
      'Laboratorium Komputer Modern Ber-AC dengan 30+ Unit PC Terkoneksi Internet',
      'Ekstrakurikuler Multimedia, IT, & Pembuatan Website/Desain',
    ],
    schedule: 'Terintegrasi pada Setiap Mata Pelajaran',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'olimpiade-sains',
    title: 'Bimbingan Intensif Olimpiade Sains & Matematika (OSN)',
    badge: 'Akademik Unggul',
    shortDesc: 'Klub sains dan matematika untuk mempersiapkan siswa berprestasi di ajang OSN, KSM Ma\'arif, dan kompetisi tingkat provinsi.',
    fullDesc:
      'Bagi peserta didik yang memiliki bakat di bidang matematika, IPA, dan IPS, sekolah menyediakan kelas bimbingan khusus usai jam pelajaran. Dibimbing oleh guru-guru spesialis olimpiade dengan modul soal tingkat tinggi (HOTS).',
    iconName: 'BrainCircuit',
    highlights: [
      'Modul Pemantapan Soal OSN & KSM Terbaru',
      'Tryout Berkala & Simulasi Ujian Kompetisi',
      'Pendampingan Bebas Biaya Pendaftaran Lomba',
      'Bonus Penghargaan Beasiswa dari Yayasan bagi Pemenang',
    ],
    schedule: 'Setiap Hari Selasa & Kamis (14.00 - 15.30 WIB)',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop',
  },
];

export const staffData: StaffItem[] = [
  {
    id: '1',
    name: 'Drs. H. Ahmad Masrukin, M.Pd.',
    role: 'Kepala Sekolah',
    department: 'Kepala Sekolah',
    subject: 'Pendidikan Agama Islam & Ke-NU-an',
    education: 'S2 Manajemen Pendidikan - Universitas Negeri Surabaya',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    quote: 'Mendidik dengan hati, membimbing dengan keteladanan.',
  },
  {
    id: '2',
    name: 'Hj. Siti Mahmudah, S.Pd., M.M.',
    role: 'Wakil Kepala Sekolah Bidang Kurikulum',
    department: 'Guru Mata Pelajaran',
    subject: 'Bahasa Indonesia & Literasi',
    education: 'S1 Pendidikan Bahasa Indonesia - Unesa',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    quote: 'Membaca membuka jendela dunia, menulis mengukir sejarah.',
  },
  {
    id: '3',
    name: 'Ahmad Nur Mufid, S.Si.',
    role: 'Waka Kesiswaan & Guru IPA',
    department: 'Guru Mata Pelajaran',
    subject: 'Ilmu Pengetahuan Alam (IPA)',
    education: 'S1 Fisika - Universitas Brawijaya',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    quote: 'Kedisiplinan dan rasa ingin tahu adalah kunci keunggulan.',
  },
  {
    id: '4',
    name: 'Siti Rahmawati, S.Pd.I.',
    role: 'Guru PAI & Pembina IPNU-IPPNU',
    department: 'Guru Mata Pelajaran',
    subject: 'Pendidikan Agama Islam & Qur\'an Hadits',
    education: 'S1 Pendidikan Agama Islam - IAIN Kediri',
    photo: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop',
    quote: 'Menanamkan akhlakul karimah adalah fondasi utama belajar.',
  },
  {
    id: '5',
    name: 'Budi Santoso, S.Kom.',
    role: 'Guru TIK & Pengelola Laboratorium Komputer',
    department: 'Guru Mata Pelajaran',
    subject: 'Informatika & Prakarya Digital',
    education: 'S1 Teknik Informatika - UPN Veteran Jatim',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    quote: 'Teknologi di tangan anak saleh akan membawa kemaslahatan.',
  },
  {
    id: '6',
    name: 'Dewi Anggraini, S.Pd.',
    role: 'Guru Bahasa Inggris',
    department: 'Guru Mata Pelajaran',
    subject: 'Bahasa Inggris',
    education: 'S1 Pendidikan Bahasa Inggris - Universitas Islam Lamongan',
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop',
    quote: 'Mastering English bridges local wisdom to global reach.',
  },
  {
    id: '7',
    name: 'M. Ali Shodiq, S.Pd.',
    role: 'Guru Matematika & Pembina Pramuka',
    department: 'Guru Mata Pelajaran',
    subject: 'Matematika',
    education: 'S1 Pendidikan Matematika - Unisda Lamongan',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    quote: 'Matematika melatih logika berpikir sistematis dan jujur.',
  },
  {
    id: '8',
    name: 'Rina Fatmawati, S.Psi.',
    role: 'Guru Bimbingan Konseling (BK)',
    department: 'Guru BK',
    subject: 'Bimbingan Konseling & Karir',
    education: 'S1 Psikologi - Universitas Airlangga',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    quote: 'Setiap anak unik dan berharga. Kami siap mendengarkan.',
  },
  {
    id: '9',
    name: 'Haji Bambang Sugeng, S.E.',
    role: 'Kepala Tata Usaha (TU)',
    department: 'Tenaga Kependidikan',
    education: 'S1 Ekonomi - Universitas Wijaya Putra',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    quote: 'Pelayanan administrasi ramah, tepat, dan transparan.',
  },
];

export const extracurricularsData: ExtracurricularItem[] = [
  {
    id: 'pramuka',
    name: 'Pramuka Gudep Ma\'arif 45.02',
    coach: 'M. Ali Shodiq, S.Pd.',
    schedule: 'Setiap Jumat (14.00 - 16.00 WIB)',
    description: 'Ekstrakurikuler wajib pembentuk kedisiplinan, kemandirian, dan cinta tanah air berbasis Dasa Darma.',
    iconName: 'Compass',
    achievements: ['Juara 2 Lomba Tingkat Penggalang Kab. Lamongan 2025', 'Peserta Perkemahan Ma\'arif Jawa Timur'],
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'pagar-nusa',
    name: 'Pencak Silat Pagar Nusa NU',
    coach: 'Kang Yudi (Pelatih Daerah)',
    schedule: 'Setiap Sabtu Sore & Minggu Pagi',
    description: 'Seni bela diri khas Nahdlatul Ulama yang mengajarkan ketangkasan fisik, pertahanan diri, dan kerendahan hati.',
    iconName: 'Shield',
    achievements: ['Juara 1 Kejuaraan Pagar Nusa Lamongan 2026', 'Juara 3 Tanding Remaja Putri 2025'],
    imageUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ipnu-ippnu',
    name: 'PK IPNU & IPPNU Ranting Sekolah',
    coach: 'Siti Rahmawati, S.Pd.I.',
    schedule: 'Setiap Sabtu Minggu Ke-2 & Ke-4',
    description: 'Wadah organisasi pelajar Nahdlatul Ulama untuk mengasah kepemimpinan, public speaking, dan keorganisasian.',
    iconName: 'Users',
    achievements: ['Pimpinan Komisariat Terbaik Ma\'arif Kedungpring', 'Penyelenggara Bakti Sosial Ramadan'],
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'hadrah',
    name: 'Seni Hadrah & Banjari "Bahana Empat Lima"',
    coach: 'Ustadz Ahmad Faruq',
    schedule: 'Setiap Rabu Sore (15.00 WIB)',
    description: 'Grup musik Islami pelestari seni sholawat khas An-Nahdliyah dengan kombinasi pukulan reban moderen.',
    iconName: 'Music',
    achievements: ['Juara Harapan 1 Festival Banjari Pelajar Kedungpring', 'Pengisi Acara Pengajian Yayasan'],
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'pmr',
    name: 'PMR (Palang Merah Remaja)',
    coach: 'Ners Kusuma, A.Md.Kep.',
    schedule: 'Setiap Kamis Sore (15.00 WIB)',
    description: 'Bimbingan pertolongan pertama, kesehatan remaja, dan bakti kemanusiaan lingkungan sekolah.',
    iconName: 'Cross',
    achievements: ['Anggota UKS Percontohan Kecamatan', 'Petugas Kesehatan Upacara Bendera'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'it-club',
    name: 'IT & Web Media Team',
    coach: 'Budi Santoso, S.Kom.',
    schedule: 'Setiap Selasa Sore (14.30 WIB)',
    description: 'Klub jurnalistik digital, fotografi, videografi konten kreatif, dan pemrograman komputer dasar.',
    iconName: 'Camera',
    achievements: ['Pengelola Media Sosial & Dokumen Website Sekolah', 'Pemenang Lomba Desain Poster Edukasi'],
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'volleyball',
    name: 'Bola Voli & Futsal',
    coach: 'Rendy Kurniawan, S.Pd.',
    schedule: 'Setiap Senin & Kamis Sore',
    description: 'Pembinaan stamina, kerja sama tim, dan ketangkasan olahraga bola voli serta futsal antar sekolah.',
    iconName: 'Activity',
    achievements: ['Juara 2 Turnamen Futsal SMP Se-Kedungpring', 'Tim Voli Putri Semifinalis Lamongan Cup'],
    imageUrl: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=800&auto=format&fit=crop',
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Pembukaan Tahun Ajaran Baru & MATSAMA Ma\'arif',
    category: 'Kegiatan',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop',
    date: '15 Juli 2026',
    description: 'Masa Ta\'arif Siswa Madrasah/Sekolah (MATSAMA) pengenalan lingkungan SMP 45 2 Kedungpring.',
  },
  {
    id: 'g2',
    title: 'Upacara Bendera Senin & Penghargaan Siswa Berprestasi',
    category: 'Prestasi',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
    date: '21 Juli 2026',
    description: 'Penyerahan piala dan sertifikat penghargaan juara pencak silat Pagar Nusa pada upacara Senin.',
  },
  {
    id: 'g3',
    title: 'Pembiasaan Sholat Dhuha Berjamaah di Musholla',
    category: 'Keagamaan',
    imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000&auto=format&fit=crop',
    date: '25 Juli 2026',
    description: 'Siswa khusyuk melaksanakan Sholat Dhuha berjamaah dilanjutkan pembacaan Asmaul Husna.',
  },
  {
    id: 'g4',
    title: 'Laboratorium Komputer Modern CBT & Coding',
    category: 'Fasilitas',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
    date: '10 Juli 2026',
    description: 'Ruang Lab Komputer dengan PC modern dan AC untuk menunjang ujian dan pembelajaran digital.',
  },
  {
    id: 'g5',
    title: 'Atraksi Drumband Bahana Empat Lima pada Pawai Karnaval',
    category: 'Ekstrakurikuler',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    date: '17 Agustus 2025',
    description: 'Grup Drumband SMP 45 2 Kedungpring unjuk kebolehan pada HUT RI Kecamatan Kedungpring.',
  },
  {
    id: 'g6',
    title: 'Pondok Ramadhan & Khatmil Qur\'an Bersama Guru',
    category: 'Keagamaan',
    imageUrl: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000&auto=format&fit=crop',
    date: '02 April 2026',
    description: 'Kegiatan Tadarus Al-Qur\'an dan kajian kitab fiqih praktis selama bulan suci Ramadhan.',
  },
  {
    id: 'g7',
    title: 'Gedung Sekolah Asri & Ruang Kelas Sejuk',
    category: 'Fasilitas',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop',
    date: '01 Juni 2026',
    description: 'Gedung bertingkat dengan konsep ramah lingkungan, banyak pepohonan rindang dan taman bersih.',
  },
  {
    id: 'g8',
    title: 'Pertandingan Futsal Persahabatan Antar Pelajar',
    category: 'Ekstrakurikuler',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop',
    date: '14 Mei 2026',
    description: 'Semangat sportivitas siswa tim futsal SMP 45 2 Kedungpring di lapangan olahraga sekolah.',
  },
];

export const facilitiesData: FacilityItem[] = [
  {
    id: '1',
    name: 'Ruang Kelas Nyaman & Multimedia Projector',
    description: 'Seluruh ruang kelas dilengkapi dengan kipas/AC, pencahayaan alami yang baik, serta LCD projector untuk pembelajaran visual.',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
    count: '12 Ruang Kelas',
  },
  {
    id: '2',
    name: 'Laboratorium Komputer & Bahasa Digital',
    description: 'Dilengkapi 30+ unit komputer ber-spesifikasi tinggi, koneksi internet serat optik, dan software pendukung pembelajaran.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    count: '1 Unit Lab Komputer',
  },
  {
    id: '3',
    name: 'Musholla Ma\'arif Berkapasitas 400 Jamaah',
    description: 'Tempat ibadah utama yang bersih dan tenang untuk sholat Dhuha, Dzuhur berjamaah, dan pengajian rutin.',
    imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop',
    count: '1 Musholla Utama',
  },
  {
    id: '4',
    name: 'Perpustakaan & Ruang Baca Literasi',
    description: 'Koleksi ribuan buku pelajaran, novel edukatif, ensiklopedia Islami, majalah, dan pojok baca digital.',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop',
    count: '1 Perpustakaan',
  },
  {
    id: '5',
    name: 'Lapangan Olahraga Serbaguna',
    description: 'Lapangan luas untuk upacara bendera, pertandingan voli, basket, futsal, dan latihan pencak silat.',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    count: '1 Lapangan Luas',
  },
  {
    id: '6',
    name: 'Kantin Sehat & Dapur Gizi',
    description: 'Menyediakan makanan dan minuman higienis, halal, dan terjangkau yang dikontrol kebersihannya oleh pihak sekolah.',
    imageUrl: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=800&auto=format&fit=crop',
    count: 'Kantin Sekolah Higenis',
  },
];

export const ppdbFaqs: PpdbFaqItem[] = [
  {
    question: 'Bagaimana cara mendaftar di SMP Empat Lima 2 Kedungpring?',
    answer:
      'Pendaftaran dapat dilakukan dengan 2 cara: 1) Secara Online melalui menu PPDB di website ini dengan mengisi formulir digital, atau 2) Secara Offline dengan datang langsung ke Sekretariat PPDB di Kampus SMP 45 2 Kedungpring, Desa Kalen, Kec. Kedungpring setiap hari kerja (07.30 - 13.00 WIB).',
  },
  {
    question: 'Apa saja syarat berkas yang harus disiapkan untuk PPDB?',
    answer:
      'Berkas yang perlu disiapkan antara lain: 1) Fotocopy Ijazah SD/MI/SKL (3 lembar), 2) Fotocopy Kartu Keluarga (KK) (3 lembar), 3) Fotocopy Akta Kelahiran (3 lembar), 4) Pas Foto 3x4 latar biru/merah (4 lembar), dan 5) Fotocopy KIP/PKH/KKS (jika memiliki).',
  },
  {
    question: 'Apakah ada potongan biaya atau beasiswa pendaftaran?',
    answer:
      'Ya! Bagi pendaftar di Gelombang 1 mendapatkan promo Bebas Uang Pendaftaran dan Gratis Seragam Olahraga. Selain itu, kami menyediakan Beasiswa Tahfidz Qur\'an, Beasiswa Siswa Berprestasi (Juara Lomba), dan Beasiswa Kemitraan Yayasan Ma\'arif.',
  },
  {
    question: 'Apakah sekolah ini menyediakan fasilitas antar jemput atau jemputan siswa?',
    answer:
      'Sekolah memiliki kerjasama angkutan siswa untuk rute-rute desa di wilayah Kedungpring, Sugio, Kalen, dan sekitarnya demi keamanan serta kemudahan transportasi para murid.',
  },
  {
    question: 'Bagaimana sistem pembayaran SPP dan biaya operasional sekolah?',
    answer:
      'SMP Empat Lima 2 Kedungpring berkomitmen memberikan pendidikan berkualitas yang sangat terjangkau bagi seluruh lapisan masyarakat. Rincian biaya SPP bulanan sangat bersahabat dan transparan tanpa ada pungutan liar.',
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Ahmad Khoirul Anam, S.T.',
    role: 'Alumni Angkatan 2018 (Sekarang Software Engineer)',
    quote:
      'Fondasi agama yang kuat dan kedisiplinan belajar dari para guru SMP 45 2 Kedungpring menjadi modal berharga saya hingga bisa sukses di dunia profesional IT.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Hj. Nurul Hidayah',
    role: 'Wali Murid Ananda Annisa (Kelas IX-A)',
    quote:
      'Sangat bersyukur menyekolahkan anak di sini. Selain perkembangan akademiknya bagus, anak saya sekarang rajin Sholat Dhuha dan membaca Al-Qur\'an tanpa perlu disuruh.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Siti Nur Aini',
    role: 'Siswa Kelas IX / Peraih Juara MTQ Pelajar',
    quote:
      'Guru-gurunya sangat sabar dan mendukung bakat siswa. Tempat belajarnya adem, banyak teman, dan ekstra Pagar Nusa nya keren banget!',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  },
];
