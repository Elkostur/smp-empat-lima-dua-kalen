export interface HeroSlide {
  id: string;
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
  youtubeVideoUrl?: string;
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
  category: 'Pengumuman' | 'Kegiatan' | 'Prestasi' | 'Keagamaan & Tahfidz' | 'Ekstrakurikuler' | 'Artikel & Opini' | 'Lain-lain' | 'Akademik' | 'Kegiatan Keagamaan';
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
  department: 'Kepala Sekolah' | 'Wakil Kepala' | 'Guru Mata Pelajaran' | 'Guru BK' | 'Tenaga Kependidikan';
  bidang?: string;
  subject?: string;
  education: string;
  photo: string;
  quote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
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
  whatsapp: '6281332558033',
  email: 'info@smp452kedungpring.sch.id',
  operatingHours: 'Senin - Sabtu: 07.00 - 13.00 WIB',
  principal: "Drs. Marji",
  principalTitle: 'Kepala SMP "Empat Lima" 2 Kedungpring',
  principalQuote: "Puji syukur kehadirat Allah SWT atas segala rahmat dan karunia-Nya, sehingga website resmi sekolah kami dapat hadir sebagai media informasi dan komunikasi bagi seluruh civitas akademika serta masyarakat luas.\nSelamat datang di website sekolah kami. Melalui platform digital ini, kami berkomitmen untuk memberikan informasi terkini mengenai berbagai kegiatan, prestasi, dan program-program pendidikan yang kami selenggarakan.\nSekolah kami senantiasa berupaya memberikan pendidikan berkualitas dengan mengintegrasikan nilai-nilai akademik, karakter, dan keterampilan yang dibutuhkan di era digital. Dengan didukung oleh tenaga pendidik yang profesional dan berdedikasi tinggi, kami optimis dapat mencetak generasi penerus bangsa yang cerdas, berakhlak mulia, dan berdaya saing.\nKami mengajak seluruh stakeholder pendidikan, terutama orang tua/wali murid untuk bersinergi dan berkolaborasi dalam mendukung proses pendidikan putra-putri kita. Mari bersama-sama kita wujudkan cita-cita luhur pendidikan nasional.\nSemoga website ini dapat bermanfaat dan menjadi jembatan komunikasi yang efektif antara sekolah, siswa, orang tua, dan masyarakat.\n\n\nWassalamu'alaikum Warahmatullahi Wabarakatuh",
  principalPhoto: "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/h8rmqovzu8d_1765985681290.webp",
  tagline: 'Unggul dalam Prestasi, Anggun dalam Moral, Berkarakter Islami & Berwawasan Global',
  vision: "Sekolahku yang berprestasi, berbudaya, beriptek, dan berimtaq, berhaluan ahlussunah wal jamaah.",
  missions: ["Meningkatkan kualitas guru dan karyawan","Melaksanakan pembelajaran dan bimbingan secara efektif","Menumbuhkan sifat kompetitif pada setiap warga untuk meraih prestasi","Menumbuhkan keunggulan secara intensif kepada seluruh warga ","Menggali potensi sumberdaya sekolah dalam memberdayakan sekolah","Mewujudkan sekolah peduli, berbudaya, dan berwawasan lingkungan hidup"],
  history: "SMP Empat Lima Kalen (yang kini dikenal sebagai SMP \"Empat Lima\" 2 Kedungpring) didirikan sebagai respons terhadap meningkatnya kebutuhan pendidikan lanjutan bagi lulusan SD/MI di wilayah tersebut, menyusul tingginya kepercayaan masyarakat terhadap SMP Empat Lima Kedungpring. Atas inisiatif Pengurus Yayasan Lembaga Pendidikan Ma'arif dan Kepala SMP Empat Lima Kedungpring, Bapak Drs. H. ABD. MU'THI, diusulkan pembentukan kelas jauh di Desa Kalen untuk menampung siswa dari wilayah barat Kecamatan Kedungpring dan sebagian Kecamatan Modo. \n\nSetelah mendapat izin menempati gedung SDN Kalen I sejak tahun ajaran 1981/1982, secara resmi SMP Empat Lima Kalen didirikan pada tanggal 15 Juni 1982, menerima 90 siswa pada tahun ajaran pertamanya. Pada masa awal ini, seluruh kegiatan administrasi dan kelembagaan masih menyatu dengan SMP Empat Lima Kedungpring. Namun, didorong oleh petunjuk dari Kandep Dikbud, sekolah ini mengajukan izin penyelenggaraan mandiri, dan setelah izin keluar serta diterima pada tahun 1983, administrasi SMP Empat Lima Kalen mulai berdiri sendiri. Sekolah ini menerima pembinaan dari Departemen Pendidikan dan Kebudayaan serta dari Yayasan Lembaga Pendidikan Ma'arif.",
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8263889123!2d112.1852!3d-7.1895',
  youtubeVideoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  socials: {
    facebook: 'https://www.facebook.com/p/SMP-Empat-Lima-2-Kedungpring-100085170334439/',
    instagram: 'https://www.instagram.com/smp452kedungpring/',
    youtube: 'https://www.youtube.com/@smpempatlima2kedungpring665/',
    tiktok: 'https://www.tiktok.com/@smp.empat.lima.2',
  },
};

export const schoolStats = [
  { label: 'Peserta Didik Aktif', value: 127, suffix: '+', icon: 'Users' },
  { label: 'Guru & Tenaga Pendidik', value: 20, suffix: ' Orang', icon: 'GraduationCap' },
  { label: 'Ekstrakurikuler Wajib/Pilihan', value: 8, suffix: ' Cabang', icon: 'Trophy' },
  { label: 'Prestasi Tingkat Kab./Prov.', value: 25, suffix: '+ Tropi', icon: 'Award' },
  { label: 'Alumni Melanjutkan ke Favorit', value: 98, suffix: '%', icon: 'TrendingUp' },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 'hero-1',
    title: 'Selamat Datang di Website Resmi SMP "Empat Lima" 2 Kedungpring',
    subtitle: "Yayasan Pendidikan Ma'arif Empat Lima Kalen - Kedungpring, Lamongan",
    badge: 'Tahun Ajaran 2027/2028',
    description: 'Membentuk Generasi Cerdas Berakhlakul Karimah, Berprestasi Tinggi, dan Memegang Teguh Nilai-Nilai Keislaman An-Nahdliyah.',
    ctaPrimary: 'Pendaftaran PPDB Online',
    ctaSecondary: 'Jelajahi Profil Sekolah',
    bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'hero-2',
    title: 'Penerimaan Peserta Didik Baru (PPDB) Telah Dibuka!',
    subtitle: 'Gelombang 1: Bebas Biaya Pendaftaran & Seragam',
    badge: 'PPDB Online Buka',
    description: 'Mari bergabung bersama keluarga besar SMP 45 2 Kedungpring. Lingkungan belajar asri, sarana digital modern, dan karakter santri.',
    ctaPrimary: 'Formulir PPDB',
    ctaSecondary: 'Informasi Alur Pendaftaran',
    bgImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'hero-3',
    title: "Program Unggulan Tahfidz Al-Qur'an & Karakter",
    subtitle: 'Pembiasaan Sholat Dhuha, Dzuhur Berjamaah & Amaliyah Yaumiyah',
    badge: 'Pendidikan Karakter',
    description: "Siswa dibimbing menghafal Al-Qur'an Juz 30 serta dibekali pemahaman agama Islam Ahlussunnah wal Jama'ah.",
    ctaPrimary: 'Lihat Program Unggulan',
    ctaSecondary: 'Jadwal Extrakurikuler',
    bgImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop',
  },
];

export const newsData: NewsItem[] = [
  {
    "id": "113b0734-7c82-450a-8a3d-da8fb1378a9b",
    "slug": "gelar-upacara-peringatan-hari-kartini-1777778504069",
    "title": "Gelar Upacara Peringatan Hari Kartini",
    "category": "Lain-lain",
    "date": "2026-05-03",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "featured": true,
    "image": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778463/blogsmp/sk4smynepmxwlswpq9lw.webp",
    "summary": "Peringatan Hari Kartini di SMP Empat Lima 2 Kedungpring berlangsung penuh semangat dengan nuansa budaya yang memperkuat nilai emansipasi dan kebersamaan.",
    "content": "SMP Empat Lima 2 Kedungpring menyelenggarakan upacara peringatan Hari Kartini dengan khidmat di halaman sekolah, yang diikuti oleh seluruh warga sekolah, mulai dari guru, staf, hingga peserta didik. Kegiatan ini menjadi momentum untuk mengenang perjuangan R.A. Kartini dalam memperjuangkan hak dan peran perempuan di Indonesia.\n\nDalam pelaksanaan upacara, para guru dan siswa tampil mengenakan busana batik dan pakaian tradisional, menciptakan suasana yang kental dengan nuansa budaya Indonesia. Barisan peserta upacara tampak rapi dan tertib, mencerminkan kedisiplinan serta rasa hormat terhadap nilai-nilai perjuangan para pahlawan.\n\nSelain upacara, kegiatan ini juga menjadi sarana untuk menanamkan nilai-nilai kesetaraan, semangat belajar, serta kemandirian, khususnya bagi para siswi sebagai generasi penerus bangsa. Para siswa diajak untuk meneladani semangat Kartini dalam menggapai cita-cita tanpa melupakan nilai budaya dan moral.\n\nMelalui peringatan Hari Kartini ini, diharapkan seluruh peserta didik dapat semakin memahami pentingnya peran perempuan dalam pembangunan bangsa serta terus mengembangkan potensi diri dengan semangat perjuangan dan optimisme.",
    "tags": [
      "Lain-lain",
      "SMP 45 2 Kedungpring"
    ]
  },
  {
    "id": "19cce25e-0f78-4518-8516-43d0fe461a34",
    "slug": "peringatan-isra-miraj-nabi-muhammad-saw-1768913780383",
    "title": "Peringatan Isra’ Mi’raj Nabi Muhammad SAW",
    "category": "Kegiatan Keagamaan",
    "date": "2026-01-20",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "featured": false,
    "image": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768913767/blogsmp/emjj9xwy3sx5sqfty7sj.webp",
    "summary": "Peringatan Isra’ Mi’raj Nabi Muhammad SAW di SMP Empat Lima 2 Kedungpring menjadi momentum memperkuat keimanan dan meneladani akhlak Rasulullah dalam kehidupan sehari-hari.",
    "content": "SMP Empat Lima 2 Kedungpring menyelenggarakan kegiatan Peringatan Isra’ Mi’raj Nabi Muhammad SAW pada 20 Januari 2026 bertempat di lingkungan sekolah. Kegiatan ini diikuti oleh seluruh warga sekolah, mulai dari peserta didik, guru, hingga tenaga kependidikan, dengan suasana yang khidmat dan penuh makna.\n\nAcara diawali dengan pembukaan dan sambutan dari kepala sekolah, kemudian dilanjutkan dengan tausiah keagamaan yang disampaikan oleh ustadz Irfan, dan di akhiri dengan pembacaan doa bersama. Dalam tausiah tersebut disampaikan makna peristiwa Isra’ Mi’raj sebagai perjalanan spiritual Rasulullah SAW yang mengajarkan pentingnya keimanan, ketakwaan, serta kewajiban menjalankan salat lima waktu sebagai fondasi utama kehidupan seorang muslim.\n\nMelalui kegiatan ini, sekolah berharap peserta didik tidak hanya memahami sejarah Isra’ Mi’raj secara teori, tetapi juga mampu mengimplementasikan nilai-nilai yang terkandung di dalamnya, seperti disiplin beribadah, berakhlak mulia, serta meningkatkan rasa tanggung jawab dalam kehidupan sehari-hari.\n\nPeringatan Isra’ Mi’raj ini merupakan bagian dari pembinaan karakter religius di SMP Empat Lima 2 Kedungpring yang secara rutin dilaksanakan sebagai upaya membentuk peserta didik yang beriman, berilmu, dan berakhlak mulia.",
    "tags": [
      "Kegiatan Keagamaan",
      "SMP 45 2 Kedungpring"
    ]
  },
  {
    "id": "352a4b0d-2866-41cb-97c0-1395d1509198",
    "slug": "tuntas-sukses-sas-ganjil-20252026-1765754679811",
    "title": "Tuntas Sukses SAS Ganjil 2025/2026",
    "category": "Akademik",
    "date": "2025-12-14",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "featured": false,
    "image": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754671302.webp",
    "summary": "Usaha Keras Hari Ini Menentukan Masa Depan Terbaikmu!",
    "content": "SMP \"Empat Lima\" 2 Kedungpring telah berhasil melaksanakan Sumatif Akhir Semester (SAS) Ganjil Tahun Pelajaran 2025/2026. Kegiatan akademik penting ini berlangsung selama enam hari penuh fokus, yaitu pada tanggal 01 hingga 06 Desember 2025. SAS Ganjil merupakan evaluasi akhir yang mengukur pemahaman siswa terhadap seluruh materi pelajaran yang telah diajarkan selama semester ganjil.\n\nPelaksanaan Ujian dan Motivasi Belajar Siswa (ISI)\nSAS Ganjil dilaksanakan dengan tertib dan disiplin di lingkungan sekolah. Seluruh siswa mengikuti ujian dengan serius, menunjukkan komitmen mereka untuk meraih hasil terbaik. Guru-guru bertindak sebagai pengawas, memastikan suasana ujian yang kondusif. Sekolah menekankan pentingnya usaha dan integritas dalam proses pengerjaan ujian.\n\nSebagaimana pesan motivasi yang selalu ditekankan, \"Ingat, Hasil ujian tidak menentukan masa depanmu, tapi usahamu yang menentukannya,\". Pesan ini menjadi penyemangat bagi siswa bahwa nilai adalah cerminan dari proses belajar yang sudah mereka lalui. Sekolah berharap hasil yang dicapai dapat memotivasi siswa untuk terus tumbuh dan bersinar sesuai tagline sekolah, #GROW TOGETHER SHINE FOREVER.",
    "tags": [
      "Akademik",
      "SMP 45 2 Kedungpring"
    ]
  },
  {
    "id": "6f2298b3-c07e-40c2-85d6-0026997790ba",
    "slug": "panggung-kreativitas-pagelaran-pentas-seni-smp-empat-lima-2-kedungpring-2025-1765754262483",
    "title": "PANGGUNG KREATIVITAS: Pagelaran Pentas Seni 2025!",
    "category": "Lain-lain",
    "date": "2025-12-14",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "featured": false,
    "image": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754258948.webp",
    "summary": "Bakat Siswa Memukau dan Berkilauan dalam Satu Hari Penuh Ekspresi Seni!",
    "content": "Pagelaran Pentas Seni (Pensi) tahunan SMP \"Empat Lima\" 2 Kedungpring kembali hadir sebagai puncak perayaan kreativitas dan ekspresi siswa sebelum libur semester. Acara ini sukses digelar pada tanggal 13 Desember 2025. Pensi menjadi wadah bagi siswa untuk menampilkan minat dan bakat mereka di berbagai bidang seni yang beragam.\n\nRagam Penampilan yang Memanjakan Mata dan Telinga (ISI)\nTahun ini, panggung Pensi dimeriahkan oleh sembilan jenis penampilan yang menunjukkan kekayaan artistik para pelajar:\n\nSeni Sastra & Verbal: Terdapat penampilan Baca Puisi, Story Telling, dan Pidato.\n\nSeni Pertunjukan: Aksi Menari, pementasan Drama, dan pertunjukan Menyanyi mengisi suasana dengan harmoni.\n\nAksi Panggung Unik: Pensi semakin meriah dengan kehadiran penampilan Stand Up Comedy serta atraksi Seni Pencak Silat.\n\nPensi bukan hanya tentang hiburan, tetapi juga tentang pembentukan karakter yang percaya diri dan apresiatif terhadap seni. Kami berharap melalui kegiatan seperti ini, bakat-bakat siswa akan terus terasah dan berkembang, menjadikan mereka generasi yang utuh—pintar dalam ilmu dan kaya dalam seni.",
    "tags": [
      "Lain-lain",
      "SMP 45 2 Kedungpring"
    ]
  },
  {
    "id": "787a3db3-4766-46b8-a4d2-82913f0c1c8b",
    "slug": "emeriksaan-kebugaran-dengan-metode-rocksport-oleh-puskesmas-dradah-1768913436819",
    "title": "Pemeriksaan Kebugaran Dengan Metode Rocksport oleh Puskesmas Dradah",
    "category": "Lain-lain",
    "date": "2026-01-20",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "featured": false,
    "image": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768913424/blogsmp/o1owz3kp7ok5xou7uzas.webp",
    "summary": "SMP Empat Lima 2 Kedungpring bersama Puskesmas Dradah melaksanakan pemeriksaan kebugaran jasmani metode Rockport sebagai upaya memantau kesehatan dan meningkatkan kesadaran hidup sehat peserta didik.",
    "content": "SMP Empat Lima 2 Kedungpring melaksanakan kegiatan Pemeriksaan Kebugaran Jasmani bekerja sama dengan Puskesmas Dradah sebagai bagian dari program pelayanan kesehatan bagi peserta didik. Kegiatan ini dilaksanakan di lingkungan sekolah dan area sekitar sekolah dengan melibatkan siswa-siswi sebagai peserta pemeriksaan.\n\nPemeriksaan kebugaran dilakukan menggunakan metode Rockport, yaitu salah satu metode pengukuran kebugaran jasmani yang bertujuan untuk mengetahui tingkat daya tahan jantung dan paru-paru siswa melalui aktivitas fisik terkontrol. Sebelum pelaksanaan, petugas kesehatan dari Puskesmas Dradah memberikan arahan dan penjelasan teknis kepada peserta agar kegiatan berjalan dengan tertib, aman, dan sesuai prosedur.\n\nRangkaian kegiatan diawali dengan pemanasan bersama di halaman sekolah yang dipandu oleh petugas kesehatan. Setelah itu, siswa mengikuti tes kebugaran dengan berjalan atau berlari sesuai ketentuan jarak yang telah ditentukan. Selama kegiatan berlangsung, petugas puskesmas melakukan pengawasan dan pencatatan hasil sebagai bahan evaluasi kondisi kebugaran peserta didik.\n\nMelalui kegiatan ini, diharapkan sekolah memperoleh gambaran awal mengenai tingkat kebugaran jasmani siswa, sehingga dapat menjadi dasar dalam pembinaan kesehatan, olahraga, dan pola hidup sehat di lingkungan sekolah. Selain itu, siswa juga diberikan edukasi tentang pentingnya menjaga kebugaran tubuh melalui aktivitas fisik teratur dan gaya hidup sehat.\n\nPihak sekolah menyampaikan apresiasi dan terima kasih kepada Puskesmas Dradah atas kerja sama dan pendampingan yang telah diberikan. Diharapkan sinergi antara sekolah dan puskesmas dapat terus terjalin guna mendukung terwujudnya peserta didik yang sehat, bugar, dan siap mengikuti kegiatan pembelajaran secara optimal.",
    "tags": [
      "Lain-lain",
      "SMP 45 2 Kedungpring"
    ]
  },
  {
    "id": "8d9b8db2-b1c8-4215-a756-91d05290f5ff",
    "slug": "buana-nada-harmoni-drumband-di-hari-santri-1765754889106",
    "title": "Buana Nada: Harmoni Drumband di Hari Santri",
    "category": "Lain-lain",
    "date": "2025-12-14",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "featured": false,
    "image": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754881531.webp",
    "summary": "Irama Memukau dan Formasi Indah Meriahkan Peringatan Hari Santri Nasional!",
    "content": "Group Drumband kebanggaan SMP \"Empat Lima\" 2 Kedungpring sukses memukau penonton dalam pementasan spesial bertajuk \"Buana Nada\". Pertunjukan ini digelar dalam rangka memperingati Hari Santri Nasional 2025. Pementasan yang menunjukkan kedisiplinan dan kekompakan siswa-siswi ini dilaksanakan pada Selasa, 22 Oktober 2025.\n\nPementasan \"Buana Nada\" ini berlangsung meriah di TPQ Bahrul Ulum, Desa Kancanan Modo. Group Drumband SMP \"Empat Lima\" 2 Kedungpring tampil penuh energi, memulai aksinya pada pukul 13:00 WIB. Dengan kostum yang cerah dan formasi yang rapi, mereka berhasil membawakan berbagai lagu dengan irama yang harmonis dan koreografi yang menarik.\n\nAcara ini tidak hanya menjadi hiburan bagi masyarakat sekitar, tetapi juga menjadi bukti nyata bahwa siswa-siswi SMP \"Empat Lima\" 2 Kedungpring memiliki kemampuan non-akademik yang unggul dan terlatih. Keikutsertaan dalam kegiatan Hari Santri ini selaras dengan semangat sekolah untuk #GROW TOGETHER SHINE FOREVER, di mana siswa didorong untuk mengembangkan potensi diri secara holistik dan berpartisipasi aktif dalam kegiatan sosial-keagamaan.\n\nSemangat yang ditunjukkan oleh anggota Drumband diharapkan dapat menginspirasi siswa lain untuk terus berprestasi dan membawa nama baik sekolah di berbagai ajang.",
    "tags": [
      "Lain-lain",
      "SMP 45 2 Kedungpring"
    ]
  },
  {
    "id": "a78c8a9c-688f-4dc1-a867-f185e20f2e27",
    "slug": "upacara-peringatan-hari-guru-nasional-2025-1765754583175",
    "title": "Upacara Peringatan Hari Guru Nasional 2025",
    "category": "Akademik",
    "date": "2025-12-14",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "featured": false,
    "image": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754572455.webp",
    "summary": "Hormat dan Terima Kasih Tulus Siswa-siswi untuk Para Pahlawan Tanpa Tanda Jasa!",
    "content": "SMP \"Empat Lima\" 2 Kedungpring menggelar upacara bendera khusus pada tanggal 25 November 2025 untuk memperingati Hari Guru Nasional. Kegiatan ini dilaksanakan dengan khidmat di lapangan sekolah, melibatkan seluruh staf pengajar dan siswa-siswi. Upacara ini menjadi momen istimewa untuk memberikan apresiasi tertinggi kepada para guru yang telah berdedikasi mencerdaskan kehidupan bangsa.\n\nPelaksanaan Upacara yang Khidmat dan Penuh Makna (ISI)\nUpacara berlangsung tertib, dengan pengibaran bendera Merah Putih yang dilakukan oleh petugas paskibra sekolah. Seluruh peserta upacara, baik siswa maupun guru, mengenakan seragam kebanggaan dan mengikuti setiap prosesi dengan penuh penghormatan.\n\nDalam kesempatan ini, para guru SMP \"Empat Lima\" 2 Kedungpring tampil sebagai petugas upacara, memberikan suasana yang berbeda dan penuh makna. Terdapat momen khusus di mana beberapa guru, termasuk Kepala Sekolah, membacakan amanat dan pesan-pesan penting tentang peran strategis guru dalam membentuk masa depan generasi muda. Siswa-siswi juga tampak fokus mendengarkan, menunjukkan rasa hormat dan terima kasih mereka. Peringatan ini menegaskan kembali komitmen sekolah untuk terus berpegangan pada semangat #GROW TOGETHER SHINE FOREVER.\n\nSetelah upacara, kegiatan dilanjutkan dengan pemberian apresiasi sederhana dari perwakilan siswa kepada guru-guru sebagai ungkapan terima kasih atas ilmu dan bimbingan yang telah diberikan selama ini.",
    "tags": [
      "Akademik",
      "SMP 45 2 Kedungpring"
    ]
  },
  {
    "id": "b7fb3876-9237-4189-8efc-b668f35b17ad",
    "slug": "classmeeting-smp-empat-lima-2-kedungpring-2025-1765754022631",
    "title": "Classmeeting SMP \"Empat Lima\" 2 Kedungpring 2025!",
    "category": "Lain-lain",
    "date": "2025-12-14",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "featured": false,
    "image": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754009121.webp",
    "summary": "Semangat Juang di Arena Classmeeting SMP \"Empat Lima\" 2 Kedungpring 2025!",
    "content": "SMP \"Empat Lima\" 2 Kedungpring kembali menggelar ajang tahunan yang paling ditunggu-tunggu: Classmeeting! Kegiatan yang berlangsung meriah pada tanggal 8 hingga 12 Desember 2025 ini bukan hanya sekadar kompetisi, tetapi juga wadah untuk menumbuhkan semangat kebersamaan, kekompakan, dan sportivitas antar kelas.\n\nMengusung tagline #GROW TOGETHER SHINE FOREVER, Classmeeting tahun ini menawarkan berbagai jenis perlombaan yang menguji fisik, strategi, hingga ketangkasan berpikir para siswa.\n\nJadwal dan Jenis Perlombaan:\nClassmeeting 2025 telah menjadwalkan lima hari penuh aksi dengan daftar lomba yang seru dan beragam:\n\nSenin, 8 Desember 2025: Sepak Bola Corong\n\nMenguji kelincahan dan kerja sama tim dalam format sepak bola yang unik.\n\nSelasa, 9 Desember 2025: Volley Ball\n\nPertandingan voli yang selalu sengit dan menuntut kekompakan dalam receive dan smash.\n\nRabu, 10 Desember 2025: Mobile Legend\n\nAjang pembuktian skill dan strategi tim dalam dunia e-sports yang diminati pelajar.\n\nKamis, 11 Desember 2025: Pengetahuan Umum\n\nLomba cerdas cermat yang mengasah wawasan dan pengetahuan umum siswa di luar pelajaran.\n\nJumat, 12 Desember 2025: Ketangkasan & Kekompakan\n\nPuncak acara yang biasanya diisi dengan lomba-lomba kreatif dan tantangan yang mengutamakan sinergi antar anggota kelas.\n\nLebih dari Sekedar Pemenang\nClassmeeting adalah waktu bagi setiap siswa untuk bersinar di bidang yang mereka kuasai. Baik di lapangan hijau, di arena e-sports, maupun di ruang uji pengetahuan, semua menunjukkan dedikasi dan semangat yang luar biasa. Tujuannya adalah membangun keharmonisan dan kenangan indah sebelum libur semester tiba.\n\nJaga terus semangat juang dan sportivitas kalian!",
    "tags": [
      "Lain-lain",
      "SMP 45 2 Kedungpring"
    ]
  },
  {
    "id": "d29a62cf-1851-442e-97b2-5e97c8cf8a98",
    "slug": "ujian-psaj-praktik-kelas-9-berlangsung-kreatif-dan-penuh-keterampilan-1777778382853",
    "title": "Ujian PSAJ Praktik Kelas 9 Berlangsung Kreatif dan Penuh Keterampilan",
    "category": "Kegiatan Keagamaan",
    "date": "2026-05-03",
    "author": "Admin Sekolah",
    "authorRole": "Tim Redaksi",
    "readTime": "3 menit",
    "featured": false,
    "image": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778364/blogsmp/chlpbbue8heylb7kax2d.webp",
    "summary": "Pelaksanaan Ujian PSAJ praktik kelas 9 menjadi ajang bagi siswa SMP Empat Lima 2 Kedungpring untuk menunjukkan keterampilan, kreativitas, dan kesiapan mereka dalam menghadapi jenjang berikutnya.",
    "content": "SMP Empat Lima 2 Kedungpring melaksanakan Ujian PSAJ (Penilaian Sumatif Akhir Jenjang) Praktik bagi siswa kelas 9 yang berlangsung pada tanggal 12–18. Kegiatan ini dilaksanakan di lingkungan sekolah dengan berbagai bentuk praktik yang menguji keterampilan siswa secara langsung sesuai dengan bidang yang telah dipelajari.\n\nDalam pelaksanaannya, siswa mengikuti beragam kegiatan praktik, mulai dari simulasi keagamaan seperti pengurusan jenazah, kegiatan seni lukis, hingga tes kebugaran jasmani. Setiap kegiatan dirancang untuk mengukur kemampuan siswa tidak hanya dari sisi pengetahuan, tetapi juga keterampilan, ketelitian, kerja sama, dan tanggung jawab.\n\nPada praktik keagamaan, siswa terlihat aktif mempraktikkan tata cara pengurusan jenazah dengan bimbingan guru, sebagai bentuk pembelajaran nilai-nilai kehidupan dan keagamaan. Sementara itu, dalam bidang seni, siswa menuangkan kreativitas mereka melalui lukisan dengan berbagai tema yang menarik dan penuh makna.\n\nSelain itu, kegiatan praktik juga mencakup tes kebugaran jasmani, di mana siswa mengikuti rangkaian aktivitas fisik seperti pemanasan dan pengukuran kebugaran untuk mengetahui kondisi fisik mereka. Kegiatan ini sekaligus menanamkan pentingnya menjaga kesehatan dan kebugaran tubuh.\n\nMelalui Ujian PSAJ praktik ini, diharapkan siswa kelas 9 mampu menunjukkan kompetensi yang telah mereka pelajari selama menempuh pendidikan di SMP Empat Lima 2 Kedungpring. Pihak sekolah berharap hasil dari kegiatan ini dapat menjadi gambaran nyata kesiapan siswa dalam melanjutkan ke jenjang pendidikan yang lebih tinggi, baik dari aspek akademik maupun keterampilan.",
    "tags": [
      "Kegiatan Keagamaan",
      "SMP 45 2 Kedungpring"
    ]
  }
];

export const staffData: StaffItem[] = [
  {
    "id": "0fc6e128-c045-4680-bf27-fb020fdc4854",
    "name": "Riris Resdiana, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "IPA",
    "education": "S.1/Pendidikan Biologi",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765984763893.webp"
  },
  {
    "id": "13f4a552-a424-4b60-ac99-d968d0467c34",
    "name": "Sunarti, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Bahasa Indonesia (Kelas VII), Seni Rupa (Kelas IX)",
    "education": "S.1/Pend. Bahasa Indonesia",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765984778474.webp"
  },
  {
    "id": "1fed6a7a-726e-426d-8107-88e72164ddbc",
    "name": "Diana Tutut, S.IP",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Prakarya",
    "education": "S1/Ilmu Politik",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684103633.webp"
  },
  {
    "id": "28f0de3c-f357-470d-99ca-ade4442da8d1",
    "name": "Yayuk Sukariyati, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Bahasa Indonesia",
    "education": "S.1/Pend. Bahasa Indonesia",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765683833103.webp"
  },
  {
    "id": "2c54533c-2bc9-4260-a45f-c8617de9103e",
    "name": "Tia Sucianingsih, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Bahasa Inggris",
    "education": "S.1/Pendidikan Bahasa dan Sastra Indonesia",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684088366.webp"
  },
  {
    "id": "2d4a4803-46eb-4e07-a022-9e9074404440",
    "name": "Annisa Rizky Fatihah, S.Si",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "IPA",
    "education": "S.1/Fisika",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684239213.webp"
  },
  {
    "id": "30d3137e-1e48-4cd0-a44a-8d5f743a6c63",
    "name": "Annuris Shoba S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Penjaskes",
    "education": "S.1/Pend. Jasmani Kesehatan",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765984790504.webp"
  },
  {
    "id": "31b6ef9e-73f3-41c8-9be3-caecc001a0a6",
    "name": "Ahmad Irfan Fauzi, S.Ag, S.Sos",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Bahasa Arab",
    "education": "S.Ag, S.Sos",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684162050.webp"
  },
  {
    "id": "49168eb1-4947-42fb-93b9-0db9ed9fcf7d",
    "name": "Kamal Muhtar, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Matematika (Kelas IX), Bahasa Jawa (Kelas VII, VIII, IX)",
    "education": "S1/Pendidikan Matematika",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684035260.webp"
  },
  {
    "id": "59bf2a14-5b4f-49d3-a548-477fa60e76e0",
    "name": "Siti Nur Chasanah, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Bahasa Inggris",
    "education": "S.1/Pend. Bahasa Inggris",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765683962209.webp"
  },
  {
    "id": "69b219a1-5b03-4afc-88d4-160924ad9a89",
    "name": "Rohmad Yulia Akbar Tri Maulana",
    "role": "Staff Administrasi",
    "department": "Tenaga Kependidikan",
    "education": "SMK",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684502078.webp"
  },
  {
    "id": "705dbacd-4d8c-4210-9076-37a4f6b9e46f",
    "name": "Drs. Marji",
    "role": "Kepala Sekolah",
    "department": "Kepala Sekolah",
    "subject": "Kepemimpinan",
    "education": "S2 Pendidikan Islam",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765984713485.webp"
  },
  {
    "id": "74072a0c-24e5-4ce4-9b51-06700575057f",
    "name": "Siska Putri Astutik, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Matematika",
    "education": "S.1/ Pendidikan Matematika",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684055947.webp"
  },
  {
    "id": "754b4439-36df-45dc-afde-b300af1e9ae1",
    "name": "Khoirul Huda, S.Pd.i",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "PAI",
    "education": "S.1/Pend. Agama Islam",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765683981856.webp"
  },
  {
    "id": "7f4f5f39-eb89-484d-8312-85b52273e991",
    "name": "Wahyudi, S.E",
    "role": "guru",
    "department": "Guru Mata Pelajaran",
    "subject": "IPS",
    "education": "S.1/Ekonomi",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765984750825.webp"
  },
  {
    "id": "c4dde728-6f19-4753-8c76-09e0edf6e884",
    "name": "Dra. Siti Rumikah",
    "role": "Guru Mapel",
    "department": "Guru Mata Pelajaran",
    "subject": "Pendidikan Kewarganegaraan",
    "education": "S1 Pendidikan",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765681291801.webp"
  },
  {
    "id": "cc0f85fe-8c20-4c87-af76-a37c87b26595",
    "name": "Rohman Firmansyah, S.Kom",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Informatika",
    "education": "S.1/Teknik Informatika",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684125839.webp"
  },
  {
    "id": "e08390d8-9fcb-4ede-86b4-08591d88da23",
    "name": "M. Akmalul Fahmi, S.Pd",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "IPS",
    "education": "S1 Pendidikan IPS",
    "photo": ""
  },
  {
    "id": "e196e006-e9fa-47e2-ada1-3bbd02092ed2",
    "name": "Moh. Zainul Anam, S.PdI",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "PAI",
    "education": "S.1/Pend. Agama Islam",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765683911925.webp"
  },
  {
    "id": "e5546551-cc5f-4ed6-b7b6-936233a69b60",
    "name": "Kadari Ningsih Ayu Wandira S.PdI",
    "role": "Guru",
    "department": "Guru Mata Pelajaran",
    "subject": "Bahasa Ingris (Kelas VII), PAI (Kelas VIII)",
    "education": "S.1/Pend. Agama Islam",
    "photo": "https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684010686.webp"
  }
];

export const galleryData: GalleryItem[] = [
  {
    "id": "cloud-gal-1",
    "title": "Juara 3 Lompat Jauh Tingkat Kecamatan",
    "category": "Prestasi",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929531/blogsmp/xlc3mxvpp9qwegqtlyb9.webp",
    "date": "2026-08-05",
    "description": "Juara 3 Lompat Jauh Tingkat Kecamatan"
  },
  {
    "id": "cloud-gal-2",
    "title": "Juara Atletik TIngkat Kecamatan",
    "category": "Prestasi",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929474/blogsmp/m1tdvzg3jnjgt5plxokn.webp",
    "date": "2026-08-05",
    "description": "Juara Atletik TIngkat Kecamatan"
  },
  {
    "id": "cloud-gal-3",
    "title": "Juara 1 MTQ Tingkat Kecamatan",
    "category": "Prestasi",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929264/blogsmp/hyjkxbaftshsaa7yn34t.webp",
    "date": "2026-08-05",
    "description": "Juara 1 MTQ Tingkat Kecamatan"
  },
  {
    "id": "cloud-gal-4",
    "title": "Seragam Olahraga",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929247/blogsmp/xbaoilubgxkn7tqyy9k1.webp",
    "date": "2026-08-05",
    "description": "Seragam Olahraga"
  },
  {
    "id": "cloud-gal-5",
    "title": "Seragam Hari Jum''at - Sabtu",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929220/blogsmp/qfgaoynaq17pqodzrm9v.webp",
    "date": "2026-08-05",
    "description": "Seragam Hari Jum''at - Sabtu"
  },
  {
    "id": "cloud-gal-6",
    "title": "Seragam Hari Rabu- Kamis",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929200/blogsmp/ihkwv0iyguhxxjdtrqcn.webp",
    "date": "2026-08-05",
    "description": "Seragam Hari Rabu- Kamis"
  },
  {
    "id": "cloud-gal-7",
    "title": "Seragam Hari Senin - Selasa",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929167/blogsmp/cbnbg7iruy3f1lijkjg7.webp",
    "date": "2026-08-05",
    "description": "Seragam Hari Senin - Selasa"
  },
  {
    "id": "cloud-gal-8",
    "title": "Seragam Sekolah",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929140/blogsmp/ub8or2ourvlpwljvwziq.webp",
    "date": "2026-08-05",
    "description": "Seragam Sekolah"
  },
  {
    "id": "cloud-gal-9",
    "title": "MPLS",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929122/blogsmp/cfubcotmlgtaznosammk.webp",
    "date": "2026-08-05",
    "description": "MPLS"
  },
  {
    "id": "cloud-gal-10",
    "title": "MPLS",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929102/blogsmp/dwanggq7kala6cwyjgjr.webp",
    "date": "2026-08-05",
    "description": "MPLS"
  },
  {
    "id": "cloud-gal-11",
    "title": "MPLS",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929089/blogsmp/j0vzdehytblobcqhyhlb.webp",
    "date": "2026-08-05",
    "description": "MPLS"
  },
  {
    "id": "cloud-gal-12",
    "title": "MPLS",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929075/blogsmp/eeyurnu6hjrwo6lpprgq.webp",
    "date": "2026-08-05",
    "description": "MPLS"
  },
  {
    "id": "cloud-gal-13",
    "title": "MPLS",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929052/blogsmp/kab3tyw1xjwsj2uksi2m.webp",
    "date": "2026-08-05",
    "description": "MPLS"
  },
  {
    "id": "cloud-gal-14",
    "title": "Hari Pendidikan Nasional",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778131/blogsmp/bu96kyddcxf20k9uc1nq.webp",
    "date": "2026-05-03",
    "description": "Hari Pendidikan Nasional"
  },
  {
    "id": "cloud-gal-15",
    "title": "Hari Buruh Nasional",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778095/blogsmp/haocpxuwc6vgjmfn6sp8.webp",
    "date": "2026-05-03",
    "description": "Hari Buruh Nasional"
  },
  {
    "id": "cloud-gal-16",
    "title": "Upacara Hari Kartini",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778079/blogsmp/epxqqtve8yc7jgxlgqht.webp",
    "date": "2026-05-03",
    "description": "Upacara Hari Kartini"
  },
  {
    "id": "cloud-gal-17",
    "title": "Upacara Hari Kartini",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778064/blogsmp/rnfxe5gb99inkrlrnmq0.webp",
    "date": "2026-05-03",
    "description": "Upacara Hari Kartini"
  },
  {
    "id": "cloud-gal-18",
    "title": "Upacara Hari Kartini",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778050/blogsmp/gguxg0gwyrd3mq3slqhz.webp",
    "date": "2026-05-03",
    "description": "Upacara Hari Kartini"
  },
  {
    "id": "cloud-gal-19",
    "title": "Upacara Hari Kartini",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778037/blogsmp/s5wjyqpr1rlogm9covot.webp",
    "date": "2026-05-03",
    "description": "Upacara Hari Kartini"
  },
  {
    "id": "cloud-gal-20",
    "title": "Upacara Hari Kartini",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778021/blogsmp/y7in0yddiahdyiw2rxpb.webp",
    "date": "2026-05-03",
    "description": "Upacara Hari Kartini"
  },
  {
    "id": "cloud-gal-21",
    "title": "Upacara Hari Kartini",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777995/blogsmp/jfnlmrx9ganhpudog14h.webp",
    "date": "2026-05-03",
    "description": "Upacara Hari Kartini"
  },
  {
    "id": "cloud-gal-22",
    "title": "Ujian Praktik Olahraga",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777969/blogsmp/sptmr08f3cnsfdku1y8y.webp",
    "date": "2026-05-03",
    "description": "Ujian Praktik Olahraga"
  },
  {
    "id": "cloud-gal-23",
    "title": "Ujian Praktik Olahraga",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777933/blogsmp/ogsegoen2hr55xbeoilq.webp",
    "date": "2026-05-03",
    "description": "Ujian Praktik Olahraga"
  },
  {
    "id": "cloud-gal-24",
    "title": "Ujian Praktik Melukis",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777906/blogsmp/xyq30foul5p8odunj4tn.webp",
    "date": "2026-05-03",
    "description": "Ujian Praktik Melukis"
  },
  {
    "id": "cloud-gal-25",
    "title": "Ujian Praktik Melukis",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777881/blogsmp/vjq290dvidxj9mllax7z.webp",
    "date": "2026-05-03",
    "description": "Ujian Praktik Melukis"
  },
  {
    "id": "cloud-gal-26",
    "title": "Ujian Praktik Melukis",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777847/blogsmp/wtv031ji03nr2gwg48sa.webp",
    "date": "2026-05-03",
    "description": "Ujian Praktik Melukis"
  },
  {
    "id": "cloud-gal-27",
    "title": "Ujian Praktik Sholat Jenazah",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777829/blogsmp/eebya5iye6s5inffrmbt.webp",
    "date": "2026-05-03",
    "description": "Ujian Praktik Sholat Jenazah"
  },
  {
    "id": "cloud-gal-28",
    "title": "Ujian Praktik Sholat Jenazah",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777787/blogsmp/tvye7ukn3wnwxmwwnnfu.webp",
    "date": "2026-05-03",
    "description": "Ujian Praktik Sholat Jenazah"
  },
  {
    "id": "cloud-gal-29",
    "title": "Halal Bihalal",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777767/blogsmp/cktijjtzlapd9rzxgzjy.webp",
    "date": "2026-05-03",
    "description": "Halal Bihalal"
  },
  {
    "id": "cloud-gal-30",
    "title": "Halal Bihalal",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777750/blogsmp/euyvo4z54phhzcdyswzq.webp",
    "date": "2026-05-03",
    "description": "Halal Bihalal"
  },
  {
    "id": "cloud-gal-31",
    "title": "Halal Bihalal",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777692/blogsmp/mzisz24bj4ljrejqhvdi.webp",
    "date": "2026-05-03",
    "description": "Halal Bihalal"
  },
  {
    "id": "cloud-gal-32",
    "title": "Isra'' Mi''raj",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912747/blogsmp/ks3xbzaequnm056wj3at.webp",
    "date": "2026-01-20",
    "description": "Isra'' Mi''raj"
  },
  {
    "id": "cloud-gal-33",
    "title": "Isra'' Mi''raj",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912726/blogsmp/cmpqyw0ykq5kftspmdl8.webp",
    "date": "2026-01-20",
    "description": "Isra'' Mi''raj"
  },
  {
    "id": "cloud-gal-34",
    "title": "Isra'' Mi''raj",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912662/blogsmp/a14jeypb6eotu4slp5ay.webp",
    "date": "2026-01-20",
    "description": "Isra'' Mi''raj"
  },
  {
    "id": "cloud-gal-35",
    "title": "Isra'' Mi''raj",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912650/blogsmp/xd4umgcaheeqwpd9pujw.webp",
    "date": "2026-01-20",
    "description": "Isra'' Mi''raj"
  },
  {
    "id": "cloud-gal-36",
    "title": "Isra'' Mi''raj",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912592/blogsmp/mcli6f8qiy1fwsohyiv2.webp",
    "date": "2026-01-20",
    "description": "Isra'' Mi''raj"
  },
  {
    "id": "cloud-gal-37",
    "title": "Pemeriksaan Kebugaran",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912554/blogsmp/jdlfzy1ghia6rt3ddv4f.webp",
    "date": "2026-01-20",
    "description": "Pemeriksaan Kebugaran"
  },
  {
    "id": "cloud-gal-38",
    "title": "Pemeriksaan Kebugaran",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912527/blogsmp/ia8ia1kc4fnjgpte8hed.webp",
    "date": "2026-01-20",
    "description": "Pemeriksaan Kebugaran"
  },
  {
    "id": "cloud-gal-39",
    "title": "Pemeriksaan Kebugaran",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912498/blogsmp/qbu9yqa96udiqqurfrfu.webp",
    "date": "2026-01-20",
    "description": "Pemeriksaan Kebugaran"
  },
  {
    "id": "cloud-gal-40",
    "title": "Pentas Seni",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1766191712/blogsmp/bz5zaj5lvmvcdanr5vmu.webp",
    "date": "2025-12-20",
    "description": "Pentas Seni"
  },
  {
    "id": "cloud-gal-41",
    "title": "Pentas Seni",
    "category": "Kegiatan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1766012383/blogsmp/nahh5srcfvrm5fy40ryu.webp",
    "date": "2025-12-17",
    "description": "Pentas Seni"
  },
  {
    "id": "cloud-gal-42",
    "title": "Pentas Seni",
    "category": "Keagamaan",
    "imageUrl": "https://res.cloudinary.com/dxqkfbujc/image/upload/v1766011877/blogsmp/vlyd8stqk1qzrtfo88dl.webp",
    "date": "2025-12-17",
    "description": "Pentas Seni"
  }
];

export const programsData: ProgramItem[] = [
  {
    "id": "19911236-e682-46b0-8b43-add9d5f06a52",
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
    "id": "1afa7849-65b4-4858-be44-ade3ec3838a8",
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
    "id": "425e29ca-beb9-4f6d-94cb-48bef522824e",
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
    "id": "a5457882-a2f3-41a3-acee-5eab56011c11",
    "title": "Sholat Berjamaah",
    "badge": "Program Sekolah",
    "shortDesc": "Pembiasaan sholat Dhuha dan Dzuhur berjamaah setiap hari",
    "fullDesc": "Pembiasaan sholat Dhuha dan Dzuhur berjamaah setiap hari",
    "iconName": "BookOpen",
    "highlights": [
      "Pembiasaan sholat Dhuha dan Dzuhur berjamaah setiap hari"
    ],
    "schedule": "Terintegrasi Pembelajaran",
    "imageUrl": "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000"
  },
  {
    "id": "cb387bd8-8231-4fea-8ce5-aa3187007f67",
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
    "id": "fcb3f792-d919-4cc2-a75f-31f75b9d1229",
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
    id: 'pramuka',
    name: "Pramuka Gudep Ma'arif 45.02",
    coach: 'M. Ali Shodiq, S.Pd.',
    schedule: 'Setiap Jumat (14.00 - 16.00 WIB)',
    description: 'Ekstrakurikuler wajib pembentuk kedisiplinan, kemandirian, dan cinta tanah air berbasis Dasa Darma.',
    iconName: 'Compass',
    achievements: ['Juara 2 Lomba Tingkat Penggalang Kab. Lamongan', "Peserta Perkemahan Ma'arif Jawa Timur"],
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=800',
  },
  {
    id: 'pagar-nusa',
    name: 'Pencak Silat Pagar Nusa NU',
    coach: 'Kang Yudi (Pelatih Daerah)',
    schedule: 'Setiap Sabtu Sore & Minggu Pagi',
    description: 'Seni bela diri khas Nahdlatul Ulama yang mengajarkan ketangkasan fisik, pertahanan diri, dan kerendahan hati.',
    iconName: 'Shield',
    achievements: ['Juara 1 Kejuaraan Pagar Nusa Lamongan', 'Juara 3 Tanding Remaja Putri'],
    imageUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800',
  },
  {
    id: 'drumband',
    name: 'Drumband "Buana Nada"',
    coach: 'Pelatih Seni',
    schedule: 'Setiap Rabu Sore (15.00 WIB)',
    description: 'Grup drumband kebanggaan sekolah pengisi acara hari besar dan peringatan Hari Santri.',
    iconName: 'Music',
    achievements: ['Pengisi Acara Hari Santri', 'Karnaval Kecamatan Kedungpring'],
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800',
  },
];

export const facilitiesData: FacilityItem[] = [
  {
    id: '1',
    name: 'Ruang Kelas Nyaman',
    description: 'Ruang Kelas Yang Nyaman dilengkapi proyektor dan ventilasi sejuk.',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800',
    count: 'Ruang Kelas',
  },
  {
    id: '2',
    name: 'Musholla Sekolah',
    description: 'Mushola Yang Bersih Dan Terawat untuk Sholat Berjamaah.',
    imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800',
    count: 'Musholla',
  },
  {
    id: '3',
    name: 'Laboratorium Komputer',
    description: 'Lab Komputer Modern Dengan Perangkat Terbaru dan Akses Internet.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800',
    count: 'Lab Komputer',
  },
  {
    id: '4',
    name: 'Perpustakaan',
    description: 'Perpustakaan Dengan Berbagai Macam Buku Yang Lengkap.',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800',
    count: 'Perpustakaan',
  },
  {
    id: '5',
    name: 'Smart Board 75 Inch',
    description: 'Smart Board 75 Inch Yang Dapat Membantu Pembelajaran Digital.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800',
    count: 'Smart Board Digital',
  },
  {
    id: '6',
    name: 'Armada Antar Jemput',
    description: 'Antar Jemput Yang Selalu Tepat Waktu untuk siswa wilayah Kedungpring.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800',
    count: 'Antar Jemput Siswa',
  },
];

export const ppdbFaqs: PpdbFaqItem[] = [
  {
    "question": "Apakah pendaftaran PPDB dikenakan biaya?",
    "answer": "Pendaftaran PPDB tidak dipungut biaya (gratis). Apabila terdapat biaya lain, akan diinformasikan secara resmi oleh pihak sekolah."
  },
  {
    "question": "Apakah pendaftaran bisa dilakukan secara offline?",
    "answer": "bagi calon peserta didik yang mengalami kendala untuk mendaftar secara online, dapat datang langsung ke sekolah pada jam kerja untuk mendapatkan bantuan."
  },
  {
    "question": "Ke mana harus bertanya jika mengalami kendala saat PPDB?",
    "answer": "Orang tua/wali dapat menghubungi panitia PPDB SMP melalui kontak yang tersedia di website atau datang langsung ke sekolah pada jam kerja."
  },
  {
    "question": "Bagaimana jika data yang diinput salah?",
    "answer": "Jika terjadi kesalahan pengisian data, peserta dapat melakukan perbaikan selama masa pendaftaran masih dibuka atau menghubungi panitia PPDB sekolah."
  },
  {
    "question": "Bagaimana jika data yang diunggah salah atau tidak jelas?",
    "answer": "Jika terjadi kesalahan data, peserta dapat memperbaikinya selama masa pendaftaran atau akan diminta melakukan perbaikan oleh panitia PPDB."
  }
];

export const testimonials = [
  {
    id: 'testi-1',
    name: 'Ahmad Khoirul Anam, S.T.',
    role: 'Alumni (Software Engineer)',
    quote: 'Fondasi agama yang kuat dan kedisiplinan belajar dari para guru SMP 45 2 Kedungpring menjadi modal berharga saya di dunia profesional.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
  },
  {
    id: 'testi-2',
    name: 'Hj. Nurul Hidayah',
    role: 'Wali Murid',
    quote: 'Sangat bersyukur menyekolahkan anak di sini. Selain perkembangan akademiknya bagus, anak saya sekarang rajin Sholat Dhuha dan membaca Al-Qur\'an.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200',
  },
];
