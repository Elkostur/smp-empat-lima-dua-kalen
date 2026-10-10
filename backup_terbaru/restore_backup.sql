-- ============================================================
-- BACKUP LENGKAP SMP "EMPAT LIMA" 2 KEDUNGPRING
-- Generated At: 2026-10-10T15:31:49.190Z
-- Domain: https://smp452kalen.my.id
-- Total Tables: 14
-- Total Records: 158
-- ============================================================

-- ------------------------------------------------------------
-- Table: public.school_info (1 rows)
-- ------------------------------------------------------------
UPDATE public.school_info SET
  name = 'SMP "Empat Lima" 2 Kedungpring',
  short_name = 'SMP 45 2 Kedungpring',
  foundation = 'Yayasan Pendidikan Ma''arif Empat Lima Kalen',
  npsn = '20506321',
  accreditation = 'Akreditasi B (Menuju A Unggul)',
  address = 'Jl. Raya Kedungpring - Sugio No. 45, Desa Kalen',
  district = 'Kecamatan Kedungpring',
  regency = 'Kabupaten Lamongan',
  province = 'Jawa Timur',
  postal_code = '62283',
  phone = '(0322) 456-789',
  whatsapp = '6281332558033',
  email = 'info@smp452kedungpring.sch.id',
  operating_hours = 'Senin - Sabtu: 07.00 - 14.00 WIB',
  principal_name = 'Drs. Marji',
  principal_title = 'Kepala SMP "Empat Lima" 2 Kedungpring',
  principal_quote = 'Puji syukur kehadirat Allah SWT atas segala rahmat dan karunia-Nya, sehingga website resmi sekolah kami dapat hadir sebagai media informasi dan komunikasi bagi seluruh civitas akademika serta masyarakat luas.
Selamat datang di website sekolah kami. Melalui platform digital ini, kami berkomitmen untuk memberikan informasi terkini mengenai berbagai kegiatan, prestasi, dan program-program pendidikan yang kami selenggarakan.
Sekolah kami senantiasa berupaya memberikan pendidikan berkualitas dengan mengintegrasikan nilai-nilai akademik, karakter, dan keterampilan yang dibutuhkan di era digital. Dengan didukung oleh tenaga pendidik yang profesional dan berdedikasi tinggi, kami optimis dapat mencetak generasi penerus bangsa yang cerdas, berakhlak mulia, dan berdaya saing.
Kami mengajak seluruh stakeholder pendidikan, terutama orang tua/wali murid untuk bersinergi dan berkolaborasi dalam mendukung proses pendidikan putra-putri kita. Mari bersama-sama kita wujudkan cita-cita luhur pendidikan nasional.
Semoga website ini dapat bermanfaat dan menjadi jembatan komunikasi yang efektif antara sekolah, siswa, orang tua, dan masyarakat.


Wassalamu''alaikum Warahmatullahi Wabarakatuh',
  principal_photo_url = 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786083035/smp45/uploads/eyadmvi6aept6raozdy2.webp',
  tagline = 'Unggul dalam Prestasi, Anggun dalam Moralku, Berkarakter Islami & Berwawasan Global',
  vision = 'Sekolahku yang berprestasi, berbudaya, beriptek, dan berimtaq, berhaluan ahlussunah wal jamaah.',
  missions = ARRAY['"Meningkatkan kualitas guru dan karyawan"', '"Melaksanakan pembelajaran dan bimbingan secara efektif"', '"Menumbuhkan sifat kompetitif pada setiap warga untuk meraih prestasi"', '"Menumbuhkan keunggulan secara intensif kepada seluruh warga "', '"Menggali potensi sumberdaya sekolah dalam memberdayakan sekolah"', '"Mewujudkan sekolah peduli, berbudaya, dan berwawasan lingkungan hidup"'],
  history = 'SMP Empat Lima Kalen (yang kini dikenal sebagai SMP "Empat Lima" 2 Kedungpring) didirikan sebagai respons terhadap meningkatnya kebutuhan pendidikan lanjutan bagi lulusan SD/MI di wilayah tersebut, menyusul tingginya kepercayaan masyarakat terhadap SMP Empat Lima Kedungpring. Atas inisiatif Pengurus Yayasan Lembaga Pendidikan Ma''arif dan Kepala SMP Empat Lima Kedungpring, Bapak Drs. H. ABD. MU''THI, diusulkan pembentukan kelas jauh di Desa Kalen untuk menampung siswa dari wilayah barat Kecamatan Kedungpring dan sebagian Kecamatan Modo. 

Setelah mendapat izin menempati gedung SDN Kalen I sejak tahun ajaran 1981/1982, secara resmi SMP Empat Lima Kalen didirikan pada tanggal 15 Juni 1982, menerima 90 siswa pada tahun ajaran pertamanya. Pada masa awal ini, seluruh kegiatan administrasi dan kelembagaan masih menyatu dengan SMP Empat Lima Kedungpring. Namun, didorong oleh petunjuk dari Kandep Dikbud, sekolah ini mengajukan izin penyelenggaraan mandiri, dan setelah izin keluar serta diterima pada tahun 1983, administrasi SMP Empat Lima Kalen mulai berdiri sendiri. Sekolah ini menerima pembinaan dari Departemen Pendidikan dan Kebudayaan serta dari Yayasan Lembaga Pendidikan Ma''arif.',
  google_maps_embed_url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8263889123!2d112.1852!3d-7.1895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTEnMjIuMiJTIDExM8KwMTEnMDYuNyJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
  facebook_url = 'https://facebook.com/smp452kedungpring',
  instagram_url = 'https://instagram.com/smp452_kedungpring',
  youtube_url = 'https://youtube.com/@smp452kedungpringofficial',
  tiktok_url = 'https://tiktok.com/@smp452kedungpring',
  updated_at = '2026-10-10T13:48:03.762619+00:00',
  updated_by = NULL,
  youtube_video_url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
WHERE id = 1;

-- ------------------------------------------------------------
-- Table: public.hero_slides (3 rows)
-- ------------------------------------------------------------
DELETE FROM public.hero_slides;
INSERT INTO public.hero_slides (
  id, title, subtitle, badge, description, cta_primary, cta_secondary, bg_image_url, is_active, sort_order, created_at, updated_at, created_by
) VALUES
('acc34482-17f0-460e-9264-a9e68255d5bb', 'Selamat Datang di Website Resmi SMP "Empat Lima" 2 Kedungpring', 'Yayasan Pendidikan Ma''arif Empat Lima Kalen - Kedungpring, Lamongan', 'Tahun Ajaran 2027/2028', 'Membentuk Generasi Cerdas Berakhlakul Karimah, Berprestasi Tinggi, dan Memegang Teguh Nilai-Nilai Keislaman An-Nahdliyah.', 'Pendaftaran PPDB Online', 'Jelajahi Profil Sekolah', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786102568/smp45/uploads/wmx9c2cgy1ks5s3kswzl.webp', TRUE, 1, '2026-10-10T10:09:48.200227+00:00', '2026-10-10T15:20:58.818952+00:00', NULL),
('3c3a120e-1b2e-43ef-b74a-b9d841a3e2d8', 'Penerimaan Peserta Didik Baru (PPDB) Telah Dibuka!', 'Gelombang 1: Dapatkan Beasiswa Khusus Bebas Biaya Pendaftaran & Seragam', 'PPDB Online Buka', 'Mari bergabung bersama keluarga besar SMP 45 2 Kedungpring. Lingkungan belajar yang asri, sarana digital modern, dan pembinaan karakter Islami.', 'Formulir PPDB', 'Informasi Alur Pendaftaran', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786101196/smp45/uploads/r5ct5fxqirnksd1isrnb.webp', TRUE, 2, '2026-10-10T10:09:48.200227+00:00', '2026-10-10T15:20:58.992051+00:00', NULL),
('3bb00c9e-72c2-4a8a-9f15-e35bb83e46e6', 'Program Unggulan Tahfidz Al-Qur''an & Pembiasaan Karakter', 'Pembiasaan Sholat Dhuha, Dzuhur Berjamaah & Amaliyah Yaumiyah', 'Pendidikan Karakter', 'Setiap siswa dibimbing untuk menghafal Juz 30 Al-Qur''an serta dibekali pemahaman agama Islam yang teduh, inklusif, dan berkemajuan.', 'Lihat Program Unggulan', 'Jadwal Extrakurikuler', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786101208/smp45/uploads/sirsgt1l2pfuzjbibwgs.webp', TRUE, 3, '2026-10-10T10:09:48.200227+00:00', '2026-10-10T15:20:59.170984+00:00', NULL);

-- ------------------------------------------------------------
-- Table: public.news (16 rows)
-- ------------------------------------------------------------
DELETE FROM public.news;
INSERT INTO public.news (
  id, slug, title, category, published_date, author_name, author_role, author_id, read_time_minutes, image_url, summary, content, tags, is_featured, is_published, views_count, created_at, updated_at, created_by
) VALUES
('623cfa5c-c5ce-44b7-aa0a-ef020b0816f9', 'siswa-smp-empat-lima-2-kedungpring-raih-juara-1-mtq-tilawah-tingkat-kecamatan', 'Siswa SMP Empat Lima 2 Kedungpring Raih Juara 1 MTQ Tilawah Tingkat Kecamatan', 'Prestasi', '2026-10-10', 'Tim Humas SMP 45 2', 'Tim Humas', NULL, 3, 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786098327/smp45/uploads/why7xrqia0wg7cxiltaw.webp', 'Prestasi membanggakan kembali ditorehkan oleh siswa SMP Empat Lima 2 Kedungpring melalui raihan Juara 1 Lomba MTQ Cabang Tilawah Tingkat Kecamatan, membuktikan bahwa semangat belajar dan nilai-nilai keislaman dapat berjalan seiring dalam meraih prestasi.', 'SMP Empat Lima 2 Kedungpring kembali mencatatkan prestasi yang membanggakan di bidang keagamaan. Salah satu siswa terbaik, Banu Ardinata Syahputra dari kelas VIII B, berhasil meraih Juara 1 pada Lomba Musabaqah Tilawatil Qur''an (MTQ) Cabang Tilawah Tingkat Kecamatan yang diselenggarakan dalam rangka memperingati Hari Ulang Tahun ke-81 Republik Indonesia.
Prestasi ini merupakan hasil dari kerja keras, ketekunan, serta semangat belajar yang tinggi dalam mengembangkan kemampuan membaca Al-Qur''an dengan baik dan benar. Keberhasilan tersebut juga tidak lepas dari dukungan orang tua, para pembimbing, serta seluruh keluarga besar SMP Empat Lima 2 Kedungpring yang senantiasa memberikan motivasi dan pendampingan kepada peserta didik untuk terus berprestasi.
Kepala sekolah beserta seluruh dewan guru menyampaikan apresiasi dan ucapan selamat atas pencapaian yang telah diraih. Prestasi ini diharapkan dapat menjadi inspirasi bagi seluruh peserta didik untuk terus mengembangkan potensi yang dimiliki, baik di bidang akademik maupun nonakademik, serta menjadikan Al-Qur''an sebagai pedoman dalam kehidupan sehari-hari.
Semoga keberhasilan ini menjadi langkah awal untuk meraih prestasi yang lebih tinggi pada tingkat berikutnya serta semakin mengharumkan nama SMP Empat Lima 2 Kedungpring di berbagai ajang kompetisi.', ARRAY['"Informasi Sekolah"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T15:23:56.565438+00:00', '2026-10-10T15:29:14.342628+00:00', NULL),
('40a5ada6-4864-41ef-9f9f-27d9e3c8ea84', 'emeriksaan-kebugaran-dengan-metode-rocksport-oleh-puskesmas-dradah-1768913436819', 'Pemeriksaan Kebugaran Dengan Metode Rocksport oleh Puskesmas Dradah', 'Kegiatan', '2026-01-20', 'Admin Sekolah', 'Tim Redaksi', NULL, 3, 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768913424/blogsmp/o1owz3kp7ok5xou7uzas.webp', 'SMP Empat Lima 2 Kedungpring bersama Puskesmas Dradah melaksanakan pemeriksaan kebugaran jasmani metode Rockport sebagai upaya memantau kesehatan dan meningkatkan kesadaran hidup sehat peserta didik.', 'SMP Empat Lima 2 Kedungpring melaksanakan kegiatan Pemeriksaan Kebugaran Jasmani bekerja sama dengan Puskesmas Dradah sebagai bagian dari program pelayanan kesehatan bagi peserta didik. Kegiatan ini dilaksanakan di lingkungan sekolah dan area sekitar sekolah dengan melibatkan siswa-siswi sebagai peserta pemeriksaan.

Pemeriksaan kebugaran dilakukan menggunakan metode Rockport, yaitu salah satu metode pengukuran kebugaran jasmani yang bertujuan untuk mengetahui tingkat daya tahan jantung dan paru-paru siswa melalui aktivitas fisik terkontrol. Sebelum pelaksanaan, petugas kesehatan dari Puskesmas Dradah memberikan arahan dan penjelasan teknis kepada peserta agar kegiatan berjalan dengan tertib, aman, dan sesuai prosedur.

Rangkaian kegiatan diawali dengan pemanasan bersama di halaman sekolah yang dipandu oleh petugas kesehatan. Setelah itu, siswa mengikuti tes kebugaran dengan berjalan atau berlari sesuai ketentuan jarak yang telah ditentukan. Selama kegiatan berlangsung, petugas puskesmas melakukan pengawasan dan pencatatan hasil sebagai bahan evaluasi kondisi kebugaran peserta didik.

Melalui kegiatan ini, diharapkan sekolah memperoleh gambaran awal mengenai tingkat kebugaran jasmani siswa, sehingga dapat menjadi dasar dalam pembinaan kesehatan, olahraga, dan pola hidup sehat di lingkungan sekolah. Selain itu, siswa juga diberikan edukasi tentang pentingnya menjaga kebugaran tubuh melalui aktivitas fisik teratur dan gaya hidup sehat.

Pihak sekolah menyampaikan apresiasi dan terima kasih kepada Puskesmas Dradah atas kerja sama dan pendampingan yang telah diberikan. Diharapkan sinergi antara sekolah dan puskesmas dapat terus terjalin guna mendukung terwujudnya peserta didik yang sehat, bugar, dan siap mengikuti kegiatan pembelajaran secara optimal.', ARRAY['"Kegiatan"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:29:14.736194+00:00', NULL),
('81194da4-d21a-4ba6-bf3b-e6c8a21cfa6f', 'peringatan-isra-miraj-nabi-muhammad-saw-1768913780383', 'Peringatan Isra’ Mi’raj Nabi Muhammad SAW', 'Keagamaan & Tahfidz', '2026-01-20', 'Admin Sekolah', 'Tim Redaksi', NULL, 3, 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768913767/blogsmp/emjj9xwy3sx5sqfty7sj.webp', 'Peringatan Isra’ Mi’raj Nabi Muhammad SAW di SMP Empat Lima 2 Kedungpring menjadi momentum memperkuat keimanan dan meneladani akhlak Rasulullah dalam kehidupan sehari-hari.', 'SMP Empat Lima 2 Kedungpring menyelenggarakan kegiatan Peringatan Isra’ Mi’raj Nabi Muhammad SAW pada 20 Januari 2026 bertempat di lingkungan sekolah. Kegiatan ini diikuti oleh seluruh warga sekolah, mulai dari peserta didik, guru, hingga tenaga kependidikan, dengan suasana yang khidmat dan penuh makna.

Acara diawali dengan pembukaan dan sambutan dari kepala sekolah, kemudian dilanjutkan dengan tausiah keagamaan yang disampaikan oleh ustadz Irfan, dan di akhiri dengan pembacaan doa bersama. Dalam tausiah tersebut disampaikan makna peristiwa Isra’ Mi’raj sebagai perjalanan spiritual Rasulullah SAW yang mengajarkan pentingnya keimanan, ketakwaan, serta kewajiban menjalankan salat lima waktu sebagai fondasi utama kehidupan seorang muslim.

Melalui kegiatan ini, sekolah berharap peserta didik tidak hanya memahami sejarah Isra’ Mi’raj secara teori, tetapi juga mampu mengimplementasikan nilai-nilai yang terkandung di dalamnya, seperti disiplin beribadah, berakhlak mulia, serta meningkatkan rasa tanggung jawab dalam kehidupan sehari-hari.

Peringatan Isra’ Mi’raj ini merupakan bagian dari pembinaan karakter religius di SMP Empat Lima 2 Kedungpring yang secara rutin dilaksanakan sebagai upaya membentuk peserta didik yang beriman, berilmu, dan berakhlak mulia.', ARRAY['"Keagamaan"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:29:14.868834+00:00', NULL),
('021f24bf-1de2-4b2c-b6e6-c9185b6dae1c', 'tuntas-sukses-sas-ganjil-20252026-1765754679811', 'Tuntas Sukses SAS Ganjil 2025/2026', 'Kegiatan', '2025-12-14', 'Admin Sekolah', 'Tim Redaksi', NULL, 3, 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754671302.webp', 'Usaha Keras Hari Ini Menentukan Masa Depan Terbaikmu!', 'SMP "Empat Lima" 2 Kedungpring telah berhasil melaksanakan Sumatif Akhir Semester (SAS) Ganjil Tahun Pelajaran 2025/2026. Kegiatan akademik penting ini berlangsung selama enam hari penuh fokus, yaitu pada tanggal 01 hingga 06 Desember 2025. SAS Ganjil merupakan evaluasi akhir yang mengukur pemahaman siswa terhadap seluruh materi pelajaran yang telah diajarkan selama semester ganjil.

Pelaksanaan Ujian dan Motivasi Belajar Siswa (ISI)
SAS Ganjil dilaksanakan dengan tertib dan disiplin di lingkungan sekolah. Seluruh siswa mengikuti ujian dengan serius, menunjukkan komitmen mereka untuk meraih hasil terbaik. Guru-guru bertindak sebagai pengawas, memastikan suasana ujian yang kondusif. Sekolah menekankan pentingnya usaha dan integritas dalam proses pengerjaan ujian.

Sebagaimana pesan motivasi yang selalu ditekankan, "Ingat, Hasil ujian tidak menentukan masa depanmu, tapi usahamu yang menentukannya,". Pesan ini menjadi penyemangat bagi siswa bahwa nilai adalah cerminan dari proses belajar yang sudah mereka lalui. Sekolah berharap hasil yang dicapai dapat memotivasi siswa untuk terus tumbuh dan bersinar sesuai tagline sekolah, #GROW TOGETHER SHINE FOREVER.', ARRAY['"Akademik"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:29:15.002075+00:00', NULL),
('6e511b43-cedc-4618-a498-b00bc51f6f78', 'semangat-speda-champions-81', 'Semangat SPEDA Champions 81', 'Kegiatan', '2026-10-10', 'Tim Humas SMP 45 2', 'Tim Humas', NULL, 3, 'https://res.cloudinary.com/lvrhzzon/image/upload/v1788147897/smp45/uploads/wlkcwjq7q3ondtyfhwgf.webp', 'Kegiatan SPEDA Champions 81 berlangsung pada 26–28 Agustus dengan penuh semangat dan kebersamaan.', 'Kegiatan SPEDA Champions 81 berlangsung pada 26–28 Agustus 2026 dan diikuti oleh peserta didik SMP “Empat Lima” 2 Kalen Kedungpring.
Selama kegiatan, para peserta menunjukkan antusiasme dan semangat dalam mengikuti rangkaian aktivitas. Kebersamaan dan kekompakan menjadi bagian penting dari suasana kegiatan.
Kegiatan ini juga menjadi kesempatan bagi peserta didik untuk membangun karakter positif, seperti disiplin, kerja sama, tanggung jawab, dan sportivitas.
Melalui SPEDA Champions 81, sekolah terus mendorong peserta didik untuk aktif, percaya diri, serta mampu mengembangkan potensi melalui berbagai kegiatan.
Dokumentasi kegiatan SPEDA Champions 81, 26–28 Agustus 2026.', ARRAY['"Informasi Sekolah"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T15:28:25.14854+00:00', '2026-10-10T15:29:13.596026+00:00', NULL),
('f0a3571d-1bbb-4141-8886-bc2429f49eb1', 'classmeeting-smp-empat-lima-2-kedungpring-2025-1765754022631', 'Classmeeting SMP "Empat Lima" 2 Kedungpring 2025!', 'Kegiatan', '2025-12-14', 'Admin Sekolah', 'Tim Redaksi', NULL, 3, 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754009121.webp', 'Semangat Juang di Arena Classmeeting SMP "Empat Lima" 2 Kedungpring 2025!', 'SMP "Empat Lima" 2 Kedungpring kembali menggelar ajang tahunan yang paling ditunggu-tunggu: Classmeeting! Kegiatan yang berlangsung meriah pada tanggal 8 hingga 12 Desember 2025 ini bukan hanya sekadar kompetisi, tetapi juga wadah untuk menumbuhkan semangat kebersamaan, kekompakan, dan sportivitas antar kelas.

Mengusung tagline #GROW TOGETHER SHINE FOREVER, Classmeeting tahun ini menawarkan berbagai jenis perlombaan yang menguji fisik, strategi, hingga ketangkasan berpikir para siswa.

Jadwal dan Jenis Perlombaan:
Classmeeting 2025 telah menjadwalkan lima hari penuh aksi dengan daftar lomba yang seru dan beragam:

Senin, 8 Desember 2025: Sepak Bola Corong

Menguji kelincahan dan kerja sama tim dalam format sepak bola yang unik.

Selasa, 9 Desember 2025: Volley Ball

Pertandingan voli yang selalu sengit dan menuntut kekompakan dalam receive dan smash.

Rabu, 10 Desember 2025: Mobile Legend

Ajang pembuktian skill dan strategi tim dalam dunia e-sports yang diminati pelajar.

Kamis, 11 Desember 2025: Pengetahuan Umum

Lomba cerdas cermat yang mengasah wawasan dan pengetahuan umum siswa di luar pelajaran.

Jumat, 12 Desember 2025: Ketangkasan & Kekompakan

Puncak acara yang biasanya diisi dengan lomba-lomba kreatif dan tantangan yang mengutamakan sinergi antar anggota kelas.

Lebih dari Sekedar Pemenang
Classmeeting adalah waktu bagi setiap siswa untuk bersinar di bidang yang mereka kuasai. Baik di lapangan hijau, di arena e-sports, maupun di ruang uji pengetahuan, semua menunjukkan dedikasi dan semangat yang luar biasa. Tujuannya adalah membangun keharmonisan dan kenangan indah sebelum libur semester tiba.

Jaga terus semangat juang dan sportivitas kalian!', ARRAY['"Kegiatan"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:29:15.278434+00:00', NULL),
('18c5728d-85cc-4aff-beda-ef5fd64dd61a', 'khidmat-dan-semangat-hari-pramuka', 'Khidmat dan Semangat Hari Pramuka', 'Kegiatan', '2026-10-10', 'Tim Humas SMP 45 2', 'Tim Humas', NULL, 3, 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786967486/smp45/uploads/vvidiyvnin4yc1irxz4d.webp', 'Upacara Hari Pramuka memperkuat semangat disiplin, tanggung jawab, dan kebersamaan peserta didik.', 'SMP Empat Lima 2 Kedungpring melaksanakan upacara peringatan Hari Pramuka di lingkungan sekolah dengan diikuti oleh peserta didik dan pembina Pramuka. Kegiatan berlangsung dengan tertib dan penuh semangat sebagai bentuk penghormatan terhadap gerakan Pramuka.

Dalam kegiatan tersebut, peserta didik mengenakan seragam Pramuka dan mengikuti rangkaian upacara dengan penuh kedisiplinan. Pembina upacara menyampaikan amanat yang mengingatkan pentingnya nilai-nilai kepramukaan dalam membentuk pribadi yang mandiri, bertanggung jawab, disiplin, dan peduli terhadap sesama.

Selain menjadi momentum untuk memperingati Hari Pramuka, kegiatan ini juga menjadi sarana pembentukan karakter peserta didik. Melalui kegiatan kepramukaan, siswa diharapkan mampu menerapkan nilai-nilai Dasa Darma Pramuka dalam kehidupan sehari-hari, baik di sekolah maupun di lingkungan masyarakat.

SMP Empat Lima 2 Kedungpring terus mendukung kegiatan Pramuka sebagai bagian dari pembinaan karakter dan pengembangan potensi peserta didik. Semangat kebersamaan dan kedisiplinan yang ditanamkan diharapkan dapat menjadi bekal bagi siswa untuk tumbuh menjadi generasi yang tangguh dan bertanggung jawab.', ARRAY['"Informasi Sekolah"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T15:27:42.547303+00:00', '2026-10-10T15:29:13.727793+00:00', NULL),
('5d488756-efe5-400b-b915-c45cb29c0894', 'safrillia-raih-juara-badminton', 'Safrillia Raih Juara Badminton', 'Prestasi', '2026-10-10', 'Tim Humas SMP 45 2', 'Tim Humas', NULL, 3, 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786968085/smp45/uploads/gbvvasqna1hzgvmsk9wk.webp', 'Safrillia Audy Az Zikra meraih juara 3 badminton putri tingkat kecamatan.', 'SMP “Empat Lima” 2 Kalen Kedungpring kembali menorehkan prestasi membanggakan melalui peserta didiknya dalam ajang olahraga tingkat kecamatan. Safrillia Audy Az Zikra, siswi kelas IX A, berhasil meraih Juara 3 Badminton Putri Tingkat Kecamatan.
Prestasi tersebut diraih dalam rangka memperingati HUT Kemerdekaan Republik Indonesia ke-81. Safrillia menunjukkan semangat, ketekunan, dan kemampuan dalam menghadapi persaingan pada cabang olahraga badminton.
Keberhasilan ini menjadi bukti bahwa peserta didik SMP “Empat Lima” 2 Kalen Kedungpring tidak hanya berkembang dalam bidang akademik, tetapi juga mampu berprestasi melalui bidang olahraga.
Pihak sekolah menyampaikan apresiasi atas pencapaian Safrillia. Prestasi ini diharapkan dapat menjadi motivasi bagi seluruh peserta didik untuk terus mengembangkan potensi, berani berkompetisi, dan mengharumkan nama sekolah.', ARRAY['"Informasi Sekolah"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T15:26:37.960109+00:00', '2026-10-10T15:29:13.86026+00:00', NULL),
('e6abdcd7-8bed-4c76-9306-d5baf81ea7c2', 'panggung-kreativitas-pagelaran-pentas-seni-smp-empat-lima-2-kedungpring-2025-1765754262483', 'PANGGUNG KREATIVITAS: Pagelaran Pentas Seni 2025!', 'Kegiatan', '2025-12-14', 'Admin Sekolah', 'Tim Redaksi', NULL, 3, 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754258948.webp', 'Bakat Siswa Memukau dan Berkilauan dalam Satu Hari Penuh Ekspresi Seni!', 'Pagelaran Pentas Seni (Pensi) tahunan SMP "Empat Lima" 2 Kedungpring kembali hadir sebagai puncak perayaan kreativitas dan ekspresi siswa sebelum libur semester. Acara ini sukses digelar pada tanggal 13 Desember 2025. Pensi menjadi wadah bagi siswa untuk menampilkan minat dan bakat mereka di berbagai bidang seni yang beragam.

Ragam Penampilan yang Memanjakan Mata dan Telinga (ISI)
Tahun ini, panggung Pensi dimeriahkan oleh sembilan jenis penampilan yang menunjukkan kekayaan artistik para pelajar:

Seni Sastra & Verbal: Terdapat penampilan Baca Puisi, Story Telling, dan Pidato.

Seni Pertunjukan: Aksi Menari, pementasan Drama, dan pertunjukan Menyanyi mengisi suasana dengan harmoni.

Aksi Panggung Unik: Pensi semakin meriah dengan kehadiran penampilan Stand Up Comedy serta atraksi Seni Pencak Silat.

Pensi bukan hanya tentang hiburan, tetapi juga tentang pembentukan karakter yang percaya diri dan apresiatif terhadap seni. Kami berharap melalui kegiatan seperti ini, bakat-bakat siswa akan terus terasah dan berkembang, menjadikan mereka generasi yang utuh—pintar dalam ilmu dan kaya dalam seni.', ARRAY['"Kegiatan"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:29:15.555602+00:00', NULL),
('d7f834b2-a2a9-4451-a24c-5fbe48d79ebd', 'gelar-upacara-peringatan-hari-kartini-1777778504069', 'Gelar Upacara Peringatan Hari Kartini', 'Kegiatan', '2026-05-03', 'Admin Sekolah', 'Tim Redaksi', NULL, 3, 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778463/blogsmp/sk4smynepmxwlswpq9lw.webp', 'Peringatan Hari Kartini di SMP Empat Lima 2 Kedungpring berlangsung penuh semangat dengan nuansa budaya yang memperkuat nilai emansipasi dan kebersamaan.', 'SMP Empat Lima 2 Kedungpring menyelenggarakan upacara peringatan Hari Kartini dengan khidmat di halaman sekolah, yang diikuti oleh seluruh warga sekolah, mulai dari guru, staf, hingga peserta didik. Kegiatan ini menjadi momentum untuk mengenang perjuangan R.A. Kartini dalam memperjuangkan hak dan peran perempuan di Indonesia.

Dalam pelaksanaan upacara, para guru dan siswa tampil mengenakan busana batik dan pakaian tradisional, menciptakan suasana yang kental dengan nuansa budaya Indonesia. Barisan peserta upacara tampak rapi dan tertib, mencerminkan kedisiplinan serta rasa hormat terhadap nilai-nilai perjuangan para pahlawan.

Selain upacara, kegiatan ini juga menjadi sarana untuk menanamkan nilai-nilai kesetaraan, semangat belajar, serta kemandirian, khususnya bagi para siswi sebagai generasi penerus bangsa. Para siswa diajak untuk meneladani semangat Kartini dalam menggapai cita-cita tanpa melupakan nilai budaya dan moral.

Melalui peringatan Hari Kartini ini, diharapkan seluruh peserta didik dapat semakin memahami pentingnya peran perempuan dalam pembangunan bangsa serta terus mengembangkan potensi diri dengan semangat perjuangan dan optimisme.', ARRAY['"Kegiatan"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:29:14.477309+00:00', NULL),
('a11fafce-5796-41b7-b5d9-0c904cd064cc', 'ujian-psaj-praktik-kelas-9-berlangsung-kreatif-dan-penuh-keterampilan-1777778382853', 'Ujian PSAJ Praktik Kelas 9 Berlangsung Kreatif dan Penuh Keterampilan', 'Keagamaan & Tahfidz', '2026-05-03', 'Admin Sekolah', 'Tim Redaksi', NULL, 3, 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778364/blogsmp/chlpbbue8heylb7kax2d.webp', 'Pelaksanaan Ujian PSAJ praktik kelas 9 menjadi ajang bagi siswa SMP Empat Lima 2 Kedungpring untuk menunjukkan keterampilan, kreativitas, dan kesiapan mereka dalam menghadapi jenjang berikutnya.', 'SMP Empat Lima 2 Kedungpring melaksanakan Ujian PSAJ (Penilaian Sumatif Akhir Jenjang) Praktik bagi siswa kelas 9 yang berlangsung pada tanggal 12–18. Kegiatan ini dilaksanakan di lingkungan sekolah dengan berbagai bentuk praktik yang menguji keterampilan siswa secara langsung sesuai dengan bidang yang telah dipelajari.

Dalam pelaksanaannya, siswa mengikuti beragam kegiatan praktik, mulai dari simulasi keagamaan seperti pengurusan jenazah, kegiatan seni lukis, hingga tes kebugaran jasmani. Setiap kegiatan dirancang untuk mengukur kemampuan siswa tidak hanya dari sisi pengetahuan, tetapi juga keterampilan, ketelitian, kerja sama, dan tanggung jawab.

Pada praktik keagamaan, siswa terlihat aktif mempraktikkan tata cara pengurusan jenazah dengan bimbingan guru, sebagai bentuk pembelajaran nilai-nilai kehidupan dan keagamaan. Sementara itu, dalam bidang seni, siswa menuangkan kreativitas mereka melalui lukisan dengan berbagai tema yang menarik dan penuh makna.

Selain itu, kegiatan praktik juga mencakup tes kebugaran jasmani, di mana siswa mengikuti rangkaian aktivitas fisik seperti pemanasan dan pengukuran kebugaran untuk mengetahui kondisi fisik mereka. Kegiatan ini sekaligus menanamkan pentingnya menjaga kesehatan dan kebugaran tubuh.

Melalui Ujian PSAJ praktik ini, diharapkan siswa kelas 9 mampu menunjukkan kompetensi yang telah mereka pelajari selama menempuh pendidikan di SMP Empat Lima 2 Kedungpring. Pihak sekolah berharap hasil dari kegiatan ini dapat menjadi gambaran nyata kesiapan siswa dalam melanjutkan ke jenjang pendidikan yang lebih tinggi, baik dari aspek akademik maupun keterampilan.', ARRAY['"Keagamaan"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:29:14.60637+00:00', NULL),
('7c7e4816-4d0d-44e7-bd1c-c32c599049df', 'juara-lompat-jauh', 'Juara Lompat Jauh', 'Prestasi', '2026-10-10', 'Tim Humas SMP 45 2', 'Tim Humas', NULL, 3, 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786098376/smp45/uploads/ht3t2yu39sea6cagk7r1.webp', 'Prestasi atletik kembali mengharumkan nama SMP Empat Lima 2 Kedungpring.', 'SMP Empat Lima 2 Kedungpring kembali mencatatkan prestasi membanggakan melalui ajang Lomba Atletik Tingkat Kecamatan yang diselenggarakan dalam rangka memperingati HUT ke-81 Republik Indonesia. Pada kompetisi tersebut, salah satu siswi terbaik sekolah berhasil menunjukkan kemampuan luar biasa di cabang olahraga lompat jauh.
Aqila Ayu Khazanah dari kelas VIII B sukses meraih Juara 3 pada cabang Lompat Jauh Tingkat Kecamatan. Prestasi ini menjadi bukti bahwa kerja keras, semangat berlatih, dan disiplin mampu mengantarkan peserta didik meraih hasil terbaik di bidang olahraga.
Keberhasilan ini tidak hanya menjadi kebanggaan bagi Aqila dan keluarganya, tetapi juga bagi seluruh warga SMP Empat Lima 2 Kedungpring. Sekolah terus berkomitmen mendukung pengembangan bakat dan minat peserta didik agar mampu berprestasi, baik di bidang akademik maupun nonakademik.
Segenap keluarga besar SMP Empat Lima 2 Kedungpring mengucapkan selamat atas pencapaian yang telah diraih. Semoga prestasi ini menjadi motivasi bagi seluruh peserta didik untuk terus berusaha, berkompetisi secara sportif, dan mengharumkan nama sekolah di berbagai ajang perlombaan.', ARRAY['"Informasi Sekolah"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T15:25:40.851509+00:00', '2026-10-10T15:29:14.027796+00:00', NULL),
('06c8489a-50b2-4428-99a0-4512759ac150', 'buana-nada-harmoni-drumband-di-hari-santri-1765754889106', 'Buana Nada: Harmoni Drumband di Hari Santri', 'Ekstrakurikuler', '2025-12-14', 'Admin Sekolah', 'Tim Redaksi', NULL, 3, 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754881531.webp', 'Irama Memukau dan Formasi Indah Meriahkan Peringatan Hari Santri Nasional!', 'Group Drumband kebanggaan SMP "Empat Lima" 2 Kedungpring sukses memukau penonton dalam pementasan spesial bertajuk "Buana Nada". Pertunjukan ini digelar dalam rangka memperingati Hari Santri Nasional 2025. Pementasan yang menunjukkan kedisiplinan dan kekompakan siswa-siswi ini dilaksanakan pada Selasa, 22 Oktober 2025.

Pementasan "Buana Nada" ini berlangsung meriah di TPQ Bahrul Ulum, Desa Kancanan Modo. Group Drumband SMP "Empat Lima" 2 Kedungpring tampil penuh energi, memulai aksinya pada pukul 13:00 WIB. Dengan kostum yang cerah dan formasi yang rapi, mereka berhasil membawakan berbagai lagu dengan irama yang harmonis dan koreografi yang menarik.

Acara ini tidak hanya menjadi hiburan bagi masyarakat sekitar, tetapi juga menjadi bukti nyata bahwa siswa-siswi SMP "Empat Lima" 2 Kedungpring memiliki kemampuan non-akademik yang unggul dan terlatih. Keikutsertaan dalam kegiatan Hari Santri ini selaras dengan semangat sekolah untuk #GROW TOGETHER SHINE FOREVER, di mana siswa didorong untuk mengembangkan potensi diri secara holistik dan berpartisipasi aktif dalam kegiatan sosial-keagamaan.

Semangat yang ditunjukkan oleh anggota Drumband diharapkan dapat menginspirasi siswa lain untuk terus berprestasi dan membawa nama baik sekolah di berbagai ajang.', ARRAY['"Ekstrakurikuler"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:29:15.410639+00:00', NULL),
('88a16cd2-60d6-4ef1-bf40-720acd3cff1f', 'prestasi-atletik-membanggakan', 'Prestasi Atletik Membanggakan', 'Prestasi', '2026-10-10', 'Tim Humas SMP 45 2', 'Tim Humas', NULL, 3, 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786098346/smp45/uploads/ir0xv0glihqoje13ssil.webp', 'Siswi SMP Empat Lima 2 Kedungpring kembali mengharumkan nama sekolah di tingkat kecamatan.', 'SMP Empat Lima 2 Kedungpring kembali menorehkan prestasi membanggakan melalui ajang lomba atletik tingkat kecamatan yang diselenggarakan dalam rangka memperingati HUT ke-81 Republik Indonesia. Keberhasilan ini menjadi bukti semangat, kerja keras, dan dedikasi para peserta didik dalam mengembangkan potensi di bidang olahraga.
Prestasi tersebut diraih oleh Aqila Ayu Khazanah dari kelas VIII B yang berhasil meraih Juara 1 Lari 1500 Meter dan Juara 2 Sprint 80 Meter. Sementara itu, Keysa Azzahra dari kelas VII A berhasil meraih Juara 3 Tolak Peluru, melengkapi deretan prestasi yang membanggakan bagi sekolah.
Keberhasilan ini merupakan hasil dari latihan yang disiplin, semangat pantang menyerah, serta bimbingan dari guru dan pelatih yang senantiasa mendampingi para siswa. Prestasi tersebut diharapkan menjadi motivasi bagi seluruh peserta didik untuk terus mengembangkan bakat dan kemampuan, baik di bidang akademik maupun nonakademik.
Segenap keluarga besar SMP Empat Lima 2 Kedungpring mengucapkan selamat kepada para juara atas pencapaian yang telah diraih. Semoga prestasi ini menjadi langkah awal untuk meraih keberhasilan yang lebih tinggi serta terus mengharumkan nama sekolah di berbagai kompetisi.', ARRAY['"Informasi Sekolah"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T15:25:05.624447+00:00', '2026-10-10T15:29:14.183288+00:00', NULL),
('85824b58-90ec-483c-b765-85f7dc56d0cd', 'maulid-nabi-penuh-hikmah', 'Maulid Nabi Penuh Hikmah', 'Kegiatan', '2026-10-10', 'Tim Humas SMP 45 2', 'Tim Humas', NULL, 3, 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789137087/smp45/uploads/sxougxwiqc4keajijetc.webp', 'Peringatan Maulid Nabi Muhammad SAW berlangsung khidmat dengan lantunan selawat dan kebersamaan warga sekolah.', 'SMP “Empat Lima” 2 Kedungpring menyelenggarakan peringatan Maulid Nabi Muhammad SAW bersama seluruh keluarga besar sekolah. Kegiatan berlangsung dalam suasana khidmat dan penuh kebersamaan.
Rangkaian kegiatan diisi dengan pembacaan selawat, lantunan musik hadrah, serta tausiah sebagai bagian dari upaya meneladani akhlak dan perjuangan Nabi Muhammad SAW.
Kegiatan tersebut diikuti oleh peserta didik, guru, dan keluarga besar sekolah. Antusiasme peserta terlihat selama rangkaian acara berlangsung, khususnya saat penampilan selawat dan hadrah.
Melalui peringatan Maulid Nabi, sekolah berharap peserta didik semakin mengenal dan mencintai Rasulullah SAW serta mampu menerapkan nilai-nilai keteladanan beliau dalam kehidupan sehari-hari.', ARRAY['"Informasi Sekolah"', '"SMP 45 2 Kedungpring"'], TRUE, TRUE, 0, '2026-10-10T15:29:11.863528+00:00', '2026-10-10T15:29:13.464828+00:00', NULL),
('7db0f14c-efec-4212-ab57-173e6aee6196', 'upacara-peringatan-hari-guru-nasional-2025-1765754583175', 'Upacara Peringatan Hari Guru Nasional 2025', 'Kegiatan', '2025-12-14', 'Admin Sekolah', 'Tim Redaksi', NULL, 3, 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754572455.webp', 'Hormat dan Terima Kasih Tulus Siswa-siswi untuk Para Pahlawan Tanpa Tanda Jasa!', 'SMP "Empat Lima" 2 Kedungpring menggelar upacara bendera khusus pada tanggal 25 November 2025 untuk memperingati Hari Guru Nasional. Kegiatan ini dilaksanakan dengan khidmat di lapangan sekolah, melibatkan seluruh staf pengajar dan siswa-siswi. Upacara ini menjadi momen istimewa untuk memberikan apresiasi tertinggi kepada para guru yang telah berdedikasi mencerdaskan kehidupan bangsa.

Pelaksanaan Upacara yang Khidmat dan Penuh Makna (ISI)
Upacara berlangsung tertib, dengan pengibaran bendera Merah Putih yang dilakukan oleh petugas paskibra sekolah. Seluruh peserta upacara, baik siswa maupun guru, mengenakan seragam kebanggaan dan mengikuti setiap prosesi dengan penuh penghormatan.

Dalam kesempatan ini, para guru SMP "Empat Lima" 2 Kedungpring tampil sebagai petugas upacara, memberikan suasana yang berbeda dan penuh makna. Terdapat momen khusus di mana beberapa guru, termasuk Kepala Sekolah, membacakan amanat dan pesan-pesan penting tentang peran strategis guru dalam membentuk masa depan generasi muda. Siswa-siswi juga tampak fokus mendengarkan, menunjukkan rasa hormat dan terima kasih mereka. Peringatan ini menegaskan kembali komitmen sekolah untuk terus berpegangan pada semangat #GROW TOGETHER SHINE FOREVER.

Setelah upacara, kegiatan dilanjutkan dengan pemberian apresiasi sederhana dari perwakilan siswa kepada guru-guru sebagai ungkapan terima kasih atas ilmu dan bimbingan yang telah diberikan selama ini.', ARRAY['"Kegiatan"', '"SMP 45 2 Kedungpring"'], FALSE, TRUE, 0, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:29:15.135459+00:00', NULL);

-- ------------------------------------------------------------
-- Table: public.staff (19 rows)
-- ------------------------------------------------------------
DELETE FROM public.staff;
INSERT INTO public.staff (
  id, name, role, department, subject, education, photo_url, quote, is_active, sort_order, created_at, updated_at, bidang
) VALUES
('e4bf8c29-cd55-4907-a55f-d90f54fc8de6', 'Khoirul Huda, S.Pd.i', 'Guru', 'Guru Mata Pelajaran', 'PAI', 'S.1/Pend. Agama Islam', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786088790/smp45/uploads/tmljlxmzbgwx6a1nllee.webp', NULL, TRUE, 9, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:12.499269+00:00', NULL),
('43b19986-27a8-4d95-b73e-2500bf3acbae', 'Kamal Muhtar, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'Matematika (Kelas IX), Bahasa Jawa (Kelas VII, VIII, IX)', 'S1/Pendidikan Matematika', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786088615/smp45/uploads/oqit9olbn9qo1ezvlbfz.webp', NULL, TRUE, 11, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:12.849012+00:00', NULL),
('ed464aeb-3b12-4f7b-b046-95ed42dcfbbc', 'Siska Putri Astutik, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'Matematika', 'S.1/ Pendidikan Matematika', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786088653/smp45/uploads/xxdjr16drhdhmhthp4vn.webp', NULL, TRUE, 12, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:13.014843+00:00', NULL),
('9625623d-da48-4cc8-acfd-34da47afa873', 'Tia Sucianingsih, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'Bahasa Inggris', 'S.1/Pendidikan Bahasa dan Sastra Indonesia', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786088685/smp45/uploads/h0r2bq7eycfrftusfbiq.webp', NULL, TRUE, 13, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:13.224865+00:00', NULL),
('7834809b-7f22-4606-835b-39237637f9e4', 'Rohman Firmansyah, S.Kom', 'Guru', 'Guru Mata Pelajaran', 'Informatika', 'S.1/Teknik Informatika', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786083051/smp45/uploads/xfbzzkya9ptyxqrvegcw.webp', NULL, TRUE, 14, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:13.429884+00:00', NULL),
('3ef2035e-b10d-402d-9df2-487d4f1e1a4b', 'Ahmad Irfan Fauzi, S.Ag, S.Sos', 'Guru', 'Guru Mata Pelajaran', 'Bahasa Arab', 'S.Ag, S.Sos', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786088724/smp45/uploads/o4peif0rf03zfspqnalu.webp', NULL, TRUE, 15, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:13.589821+00:00', NULL),
('4ca0ad40-37cf-487f-b0bd-573fa968c49f', 'Annisa Rizka Fatihah, S.Si', 'Guru', 'Guru Mata Pelajaran', 'IPA', 'S.1/Fisika', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786089498/smp45/uploads/pdu4bs0zckvhh2ldyn0k.webp', NULL, TRUE, 16, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:13.770072+00:00', NULL),
('d67d32ea-4607-46cd-9b24-6ec36b3be946', 'Rohmad Yulia Akbar Tri Maulana, S.M', 'Staff Administrasi', 'Tenaga Kependidikan', NULL, ' S1 Manajemen', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786282389/smp45/uploads/acsobiqaymfp6y98zkuc.webp', NULL, TRUE, 17, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:13.933732+00:00', NULL),
('faa39dd4-abea-4ad3-806a-1d7daf5e257a', 'Syifaul Marwah, S.E', 'Staff Administrasi', 'Tenaga Kependidikan', NULL, 'S1 Ekonomi Syariah', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786089054/smp45/uploads/c8ax8wiomiypbmgqs5id.webp', NULL, TRUE, 19, '2026-10-10T15:18:14.279573+00:00', NULL, NULL),
('21f244dc-4918-4ae5-b128-ee023c48cd7c', 'Drs. Marji', 'Kepala Sekolah', 'Kepala Sekolah', 'Kepemimpinan', 'S2 Pendidikan Islam', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786083035/smp45/uploads/eyadmvi6aept6raozdy2.webp', NULL, TRUE, 1, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:10.71944+00:00', NULL),
('d17a0a51-d0eb-4ea7-9158-28e40385fb7c', 'Dra. Siti Rumikah', 'Guru', 'Guru Mata Pelajaran', 'Pendidikan Kewarganegaraan', 'S1 Pendidikan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786087682/smp45/uploads/geip6lth6q0ulqy5ddt5.webp', NULL, TRUE, 2, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:10.931726+00:00', NULL),
('9c9cef6b-1f7e-42c0-8e97-7ae52c27fe8e', 'Wahyudi, S.E', 'guru', 'Guru Mata Pelajaran', 'IPS', 'S.1/Ekonomi', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786083994/smp45/uploads/sfe8pp2f9douoizyb6jk.webp', NULL, TRUE, 3, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:11.115775+00:00', NULL),
('4fd26f47-9359-4d04-9b4a-fa1cc2ef9a82', 'Riris Resdiana, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'IPA', 'S.1/Pendidikan Biologi', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765984763893.webp', NULL, TRUE, 4, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:11.521031+00:00', NULL),
('4f96fcf2-6c24-49cb-a773-38cbf05ee116', 'Sunarti, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'Bahasa Indonesia (Kelas VII), Seni Rupa (Kelas IX)', 'S.1/Pend. Bahasa Indonesia', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786087934/smp45/uploads/bvphaka4yvczluwrquid.webp', NULL, TRUE, 6, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:11.954961+00:00', NULL),
('e55d8410-a1d6-47f0-9057-0f0044b72fa1', 'Annuris Shoba S.Pd', 'Guru', 'Guru Mata Pelajaran', 'Penjaskes', 'S.1/Pend. Jasmani Kesehatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786087986/smp45/uploads/hlvfctyo737yq2faaeor.webp', NULL, TRUE, 7, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:12.131527+00:00', NULL),
('9e4a1ce7-f650-4e49-b89b-0cf7e5dfb7ff', 'Siti Nur Chasanah, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'Bahasa Inggris', 'S.1/Pend. Bahasa Inggris', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786088017/smp45/uploads/ki6jqvyxxcrwmpdgcyx2.webp', NULL, TRUE, 8, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:12.316732+00:00', NULL),
('0de8775e-4c63-4354-8810-046c3912806d', 'Moh. Zainul Anam, S.PdI', 'Guru', 'Guru Mata Pelajaran', 'PAI', 'S.1/Pend. Agama Islam', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786282373/smp45/uploads/hjht5ive1efwz0ah4azf.webp', NULL, TRUE, 5, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:11.731282+00:00', NULL),
('4a62fac8-e396-43d4-88c1-59d1f9c29edb', 'Kadari Ningsih Ayu Wandira S.PdI', 'Guru', 'Guru Mata Pelajaran', 'Bahasa Ingris (Kelas VII), PAI (Kelas VIII)', 'S.1/Pend. Agama Islam', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786088569/smp45/uploads/cv1yyx1ybfhlw5kddexi.webp', NULL, TRUE, 10, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:12.694911+00:00', NULL),
('875a0456-dc19-4716-baf3-34f77c3df923', 'M. Akmalul Fahmi, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'IPS', 'S1 Pendidikan IPS', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786088957/smp45/uploads/uearviaj6feakzckjbkl.webp', NULL, TRUE, 18, '2026-10-10T13:45:42.622753+00:00', '2026-10-10T15:18:14.106235+00:00', NULL);

-- ------------------------------------------------------------
-- Table: public.gallery (82 rows)
-- ------------------------------------------------------------
DELETE FROM public.gallery;
INSERT INTO public.gallery (
  id, title, category, image_url, cloudinary_public_id, event_date, description, is_published, sort_order, created_at, uploaded_by
) VALUES
('9a0d77b9-f550-4311-9ae6-d9151f26b8a0', 'Upacara Hari Kartini', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778064/blogsmp/rnfxe5gb99inkrlrnmq0.webp', NULL, '2026-05-03', 'Upacara Hari Kartini', TRUE, 57, '2026-10-10T13:45:42.622753+00:00', NULL),
('a0c77b69-a332-4d45-9e5a-ab5288155996', 'Upacara Hari Kartini', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778050/blogsmp/gguxg0gwyrd3mq3slqhz.webp', NULL, '2026-05-03', 'Upacara Hari Kartini', TRUE, 58, '2026-10-10T13:45:42.622753+00:00', NULL),
('efe2dd03-fbc9-406d-9511-1900331aa922', 'Ujian Praktik Melukis', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777906/blogsmp/xyq30foul5p8odunj4tn.webp', NULL, '2026-05-03', 'Ujian Praktik Melukis', TRUE, 64, '2026-10-10T13:45:42.622753+00:00', NULL),
('be96acf1-4717-4dde-8caa-e26287ad7864', 'Ujian Praktik Melukis', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777881/blogsmp/vjq290dvidxj9mllax7z.webp', NULL, '2026-05-03', 'Ujian Praktik Melukis', TRUE, 65, '2026-10-10T13:45:42.622753+00:00', NULL),
('04701600-b576-428c-8b80-e77f05697a6c', 'Isra Miraj 2026', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789137176/smp45/uploads/k4jz2onqvovpwtdryafr.webp', NULL, NULL, '', TRUE, 3, '2026-10-10T14:22:22.025292+00:00', NULL),
('30df2b03-1126-4374-92e2-e69a38f27c5b', 'Juara Atletik TIngkat Kecamatan', 'Prestasi', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929474/blogsmp/m1tdvzg3jnjgt5plxokn.webp', NULL, '2026-08-05', 'Juara Atletik TIngkat Kecamatan', TRUE, 42, '2026-10-10T13:45:42.622753+00:00', NULL),
('c9c1bc44-7651-4dc9-a642-a867886652df', 'Juara 1 MTQ Tingkat Kecamatan', 'Prestasi', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929264/blogsmp/hyjkxbaftshsaa7yn34t.webp', NULL, '2026-08-05', 'Juara 1 MTQ Tingkat Kecamatan', TRUE, 43, '2026-10-10T13:45:42.622753+00:00', NULL),
('3c0b2896-0157-49c7-9355-623cc7ae3dbb', 'Seragam Olahraga', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929247/blogsmp/xbaoilubgxkn7tqyy9k1.webp', NULL, '2026-08-05', 'Seragam Olahraga', TRUE, 44, '2026-10-10T13:45:42.622753+00:00', NULL),
('2ab4296a-2f56-4f3e-ace7-8d386b55b5a5', 'Seragam Hari Jum''at - Sabtu', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929220/blogsmp/qfgaoynaq17pqodzrm9v.webp', NULL, '2026-08-05', 'Seragam Hari Jum''at - Sabtu', TRUE, 45, '2026-10-10T13:45:42.622753+00:00', NULL),
('9cd6d79d-3e6e-4ab6-8def-76421a54489c', 'Seragam Hari Rabu- Kamis', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929200/blogsmp/ihkwv0iyguhxxjdtrqcn.webp', NULL, '2026-08-05', 'Seragam Hari Rabu- Kamis', TRUE, 46, '2026-10-10T13:45:42.622753+00:00', NULL),
('807e5bcd-1f2a-42e4-aa7b-ae9b3b2a9e14', 'MPLS', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929122/blogsmp/cfubcotmlgtaznosammk.webp', NULL, '2026-08-05', 'MPLS', TRUE, 49, '2026-10-10T13:45:42.622753+00:00', NULL),
('9f20b38a-bf44-45c9-a62c-09a50c8867db', 'MPLS', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929102/blogsmp/dwanggq7kala6cwyjgjr.webp', NULL, '2026-08-05', 'MPLS', TRUE, 50, '2026-10-10T13:45:42.622753+00:00', NULL),
('0f0014e3-b138-49d5-b494-6ce881ad3112', 'MPLS', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929089/blogsmp/j0vzdehytblobcqhyhlb.webp', NULL, '2026-08-05', 'MPLS', TRUE, 51, '2026-10-10T13:45:42.622753+00:00', NULL),
('2f3bd339-c624-4b8c-bbfc-94fcd85f94d3', 'MPLS', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929075/blogsmp/eeyurnu6hjrwo6lpprgq.webp', NULL, '2026-08-05', 'MPLS', TRUE, 52, '2026-10-10T13:45:42.622753+00:00', NULL),
('56260a2a-eda3-442f-9870-e2a19dcb7afa', 'MPLS', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929052/blogsmp/kab3tyw1xjwsj2uksi2m.webp', NULL, '2026-08-05', 'MPLS', TRUE, 53, '2026-10-10T13:45:42.622753+00:00', NULL),
('1305f428-eddd-402c-9915-d3d3901161f6', 'Hari Pendidikan Nasional', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778131/blogsmp/bu96kyddcxf20k9uc1nq.webp', NULL, '2026-05-03', 'Hari Pendidikan Nasional', TRUE, 54, '2026-10-10T13:45:42.622753+00:00', NULL),
('1d8ddc73-519f-4743-a644-e52d33a4144c', 'Upacara Hari Kartini', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778037/blogsmp/s5wjyqpr1rlogm9covot.webp', NULL, '2026-05-03', 'Upacara Hari Kartini', TRUE, 59, '2026-10-10T13:45:42.622753+00:00', NULL),
('8ca84b47-72a0-4cc4-8810-4372b1f8533c', 'Upacara Hari Kartini', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778021/blogsmp/y7in0yddiahdyiw2rxpb.webp', NULL, '2026-05-03', 'Upacara Hari Kartini', TRUE, 60, '2026-10-10T13:45:42.622753+00:00', NULL),
('d334309d-0315-4a43-8a89-35787ae7cd67', 'Upacara Hari Kartini', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777995/blogsmp/jfnlmrx9ganhpudog14h.webp', NULL, '2026-05-03', 'Upacara Hari Kartini', TRUE, 61, '2026-10-10T13:45:42.622753+00:00', NULL),
('06f8330f-4c5f-4076-ae7a-f5178b87a5ff', 'Ujian Praktik Olahraga', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777969/blogsmp/sptmr08f3cnsfdku1y8y.webp', NULL, '2026-05-03', 'Ujian Praktik Olahraga', TRUE, 62, '2026-10-10T13:45:42.622753+00:00', NULL),
('c6365306-4e47-44be-9545-a2d5bb4e044f', 'Ujian Praktik Olahraga', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777933/blogsmp/ogsegoen2hr55xbeoilq.webp', NULL, '2026-05-03', 'Ujian Praktik Olahraga', TRUE, 63, '2026-10-10T13:45:42.622753+00:00', NULL),
('0fb4d96a-8361-4916-8f3d-6be98a659332', 'Isra Miraj 2026', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789137160/smp45/uploads/qmrvbfygseptyoy7frd9.webp', NULL, NULL, '', TRUE, 4, '2026-10-10T14:22:03.738005+00:00', NULL),
('e30f86df-4a8a-47c0-92ec-396cef9c89fb', 'Juara 3 Lompat Jauh Tingkat Kecamatan', 'Prestasi', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929531/blogsmp/xlc3mxvpp9qwegqtlyb9.webp', NULL, '2026-08-05', 'Juara 3 Lompat Jauh Tingkat Kecamatan', TRUE, 41, '2026-10-10T13:45:42.622753+00:00', NULL),
('159d6cb4-8b8d-4796-9ed4-af6bc063fcac', 'Seragam Hari Senin - Selasa', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929167/blogsmp/cbnbg7iruy3f1lijkjg7.webp', NULL, '2026-08-05', 'Seragam Hari Senin - Selasa', TRUE, 47, '2026-10-10T13:45:42.622753+00:00', NULL),
('d4c5c221-59a5-4e8c-9eff-f9454c193c3c', 'Seragam Sekolah', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1785929140/blogsmp/ub8or2ourvlpwljvwziq.webp', NULL, '2026-08-05', 'Seragam Sekolah', TRUE, 48, '2026-10-10T13:45:42.622753+00:00', NULL),
('907a2738-d062-4c56-a21b-3c524916e5f8', 'Hari Buruh Nasional', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778095/blogsmp/haocpxuwc6vgjmfn6sp8.webp', NULL, '2026-05-03', 'Hari Buruh Nasional', TRUE, 55, '2026-10-10T13:45:42.622753+00:00', NULL),
('f6cc68ec-9779-4a76-9762-1b318e70dae9', 'Upacara Hari Kartini', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778079/blogsmp/epxqqtve8yc7jgxlgqht.webp', NULL, '2026-05-03', 'Upacara Hari Kartini', TRUE, 56, '2026-10-10T13:45:42.622753+00:00', NULL),
('e6d7055c-6aff-446d-9c51-9882063b29a7', 'Hari Pramuka', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786967121/smp45/uploads/ebumigaoygnodsov12ta.webp', NULL, NULL, '', TRUE, 38, '2026-10-10T14:06:20.553547+00:00', NULL),
('43509422-b9ce-4639-8635-0ae142966836', 'Hari Pramuka', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786967095/smp45/uploads/ltyckjbarnd71mppp6vt.webp', NULL, NULL, '', TRUE, 39, '2026-10-10T14:05:58.159045+00:00', NULL),
('af3b09d1-2475-47f5-808c-1c50f28db639', 'Hari Pramuka', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786967048/smp45/uploads/j4c62a9ac5ixmbe1gkxi.webp', NULL, NULL, '', TRUE, 40, '2026-10-10T14:05:40.696085+00:00', NULL),
('c71dd9d2-1f6c-4926-8cd0-89fb0ab3a55b', 'Ujian Praktik Sholat Jenazah', 'Keagamaan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777787/blogsmp/tvye7ukn3wnwxmwwnnfu.webp', NULL, '2026-05-03', 'Ujian Praktik Sholat Jenazah', TRUE, 68, '2026-10-10T13:45:42.622753+00:00', NULL),
('6af8da36-7a2b-4f12-909d-35f3d2b9094d', 'Halal Bihalal', 'Keagamaan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777767/blogsmp/cktijjtzlapd9rzxgzjy.webp', NULL, '2026-05-03', 'Halal Bihalal', TRUE, 69, '2026-10-10T13:45:42.622753+00:00', NULL),
('5bc05893-e5e1-4bfd-be7c-d18d35c439ce', 'Halal Bihalal', 'Keagamaan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777692/blogsmp/mzisz24bj4ljrejqhvdi.webp', NULL, '2026-05-03', 'Halal Bihalal', TRUE, 71, '2026-10-10T13:45:42.622753+00:00', NULL),
('b8169695-c7a9-460a-9522-ed176967e32f', 'Isra'' Mi''raj', 'Keagamaan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912747/blogsmp/ks3xbzaequnm056wj3at.webp', NULL, '2026-01-20', 'Isra'' Mi''raj', TRUE, 72, '2026-10-10T13:45:42.622753+00:00', NULL),
('f24a1501-673e-4fee-9761-d96a1167f45d', 'Isra'' Mi''raj', 'Keagamaan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912726/blogsmp/cmpqyw0ykq5kftspmdl8.webp', NULL, '2026-01-20', 'Isra'' Mi''raj', TRUE, 73, '2026-10-10T13:45:42.622753+00:00', NULL),
('5b409c7c-9c8a-4ec7-89b1-4d581972a093', 'Isra'' Mi''raj', 'Keagamaan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912662/blogsmp/a14jeypb6eotu4slp5ay.webp', NULL, '2026-01-20', 'Isra'' Mi''raj', TRUE, 74, '2026-10-10T13:45:42.622753+00:00', NULL),
('b7a56064-86cc-46e0-aed8-576c8d6f22c4', 'Isra'' Mi''raj', 'Keagamaan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912650/blogsmp/xd4umgcaheeqwpd9pujw.webp', NULL, '2026-01-20', 'Isra'' Mi''raj', TRUE, 75, '2026-10-10T13:45:42.622753+00:00', NULL),
('583fad4f-9a1c-4e80-8869-fbc43d1c4846', 'Isra'' Mi''raj', 'Keagamaan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912592/blogsmp/mcli6f8qiy1fwsohyiv2.webp', NULL, '2026-01-20', 'Isra'' Mi''raj', TRUE, 76, '2026-10-10T13:45:42.622753+00:00', NULL),
('53b91504-e303-487f-9fb6-581db6ad2a92', 'Pemeriksaan Kebugaran', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912554/blogsmp/jdlfzy1ghia6rt3ddv4f.webp', NULL, '2026-01-20', 'Pemeriksaan Kebugaran', TRUE, 77, '2026-10-10T13:45:42.622753+00:00', NULL),
('2f6a08f1-58fb-4ede-91fd-cc1196797ace', 'Pemeriksaan Kebugaran', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912527/blogsmp/ia8ia1kc4fnjgpte8hed.webp', NULL, '2026-01-20', 'Pemeriksaan Kebugaran', TRUE, 78, '2026-10-10T13:45:42.622753+00:00', NULL),
('85113a10-db34-43b8-a104-f5d680cfcbfb', 'Pemeriksaan Kebugaran', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912498/blogsmp/qbu9yqa96udiqqurfrfu.webp', NULL, '2026-01-20', 'Pemeriksaan Kebugaran', TRUE, 79, '2026-10-10T13:45:42.622753+00:00', NULL),
('3423cb42-b5bd-4ef2-a102-c18f3d045429', 'Pentas Seni', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1766191712/blogsmp/bz5zaj5lvmvcdanr5vmu.webp', NULL, '2025-12-20', 'Pentas Seni', TRUE, 80, '2026-10-10T13:45:42.622753+00:00', NULL),
('19ab916a-a5d4-48e6-9467-0d0e91d37370', 'Pentas Seni', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1766012383/blogsmp/nahh5srcfvrm5fy40ryu.webp', NULL, '2025-12-17', 'Pentas Seni', TRUE, 81, '2026-10-10T13:45:42.622753+00:00', NULL),
('67c8326c-7df6-4367-bfc9-197db8d1a8b2', 'Pentas Seni', 'Keagamaan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1766011877/blogsmp/vlyd8stqk1qzrtfo88dl.webp', NULL, '2025-12-17', 'Pentas Seni', TRUE, 82, '2026-10-10T13:45:42.622753+00:00', NULL),
('a762734f-7ce9-4412-93d4-d5637c151ff3', 'Isra Miraj 2026', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789137192/smp45/uploads/uode7mz2f6hyjqlhm2nt.webp', NULL, NULL, '', TRUE, 2, '2026-10-10T14:22:45.074121+00:00', NULL),
('e8a3e2ca-fbb9-4f86-ac3f-b92542df2e07', 'Lomba Agustusan', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1788147987/smp45/uploads/ushmfyduykbxsabapiqe.webp', NULL, NULL, '', TRUE, 21, '2026-10-10T14:16:15.80905+00:00', NULL),
('79a39af4-4fe6-49e5-851c-6acae721a456', 'Lomba Agustus', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786163664/smp45/uploads/mnrqnmk7koqwoux69v81.webp', NULL, NULL, '', TRUE, 29, '2026-10-10T14:12:09.318065+00:00', NULL),
('2ea9331b-3e08-499c-9ad7-3ca9de4bb4cd', 'Lomba Agustusan', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1788147937/smp45/uploads/agvwuj890fyntsheipjn.webp', NULL, NULL, '', TRUE, 22, '2026-10-10T14:15:57.718137+00:00', NULL),
('fe981c88-d830-4856-8bf1-ef1e8818ad5e', 'Lomba Agustusan', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1788147897/smp45/uploads/wlkcwjq7q3ondtyfhwgf.webp', NULL, NULL, '', TRUE, 23, '2026-10-10T14:15:42.344133+00:00', NULL),
('e12de545-5df4-45d7-ab49-f1951b86f98f', 'Lomba Agustusan', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1788147853/smp45/uploads/y0jzny0uu580hrtsqjpb.webp', NULL, NULL, '', TRUE, 24, '2026-10-10T14:15:25.184547+00:00', NULL),
('cf76d062-f4a8-49b1-bd2a-16ee6c6a3ea4', 'Lomba Agustusan', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1788147778/smp45/uploads/ehur0tgjintzgkff0k3l.jpg', NULL, NULL, '', TRUE, 25, '2026-10-10T14:15:00.157921+00:00', NULL),
('9b1c74ff-9dbd-4b3d-866b-f454882970aa', 'Lomba Agustusan', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1788147629/smp45/uploads/amyzs9lwnvd4q6nq51h5.webp', NULL, NULL, '', TRUE, 26, '2026-10-10T14:14:45.462951+00:00', NULL),
('e026a2a0-cbfe-4c4b-9834-a45366acac69', 'Hari Pramuka', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786967461/smp45/uploads/pji62uujxpbx7myfzuvk.webp', NULL, NULL, '', TRUE, 35, '2026-10-10T14:07:41.203185+00:00', NULL),
('36b11dc7-fdef-4183-8db9-b58360634cbb', 'Hari Pramuka', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786967163/smp45/uploads/stdqjvjkyvjzog4q3xex.webp', NULL, NULL, '', TRUE, 37, '2026-10-10T14:06:38.270526+00:00', NULL),
('427b6c3a-5c13-42b6-a958-275a6c2a0050', 'Lomba Agustusan', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1788147555/smp45/uploads/q1r0zdulvxene2bocm49.webp', NULL, NULL, '', TRUE, 27, '2026-10-10T14:14:31.281504+00:00', NULL),
('5441fbde-6e9f-449d-800d-eb5e9738144d', 'Lomba Agustus', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786163678/smp45/uploads/j1tlnaqpovxlx5cwn3yo.webp', NULL, NULL, '', TRUE, 28, '2026-10-10T14:12:25.860556+00:00', NULL),
('d800ab8f-8a4c-41a2-9fbe-ff19027a3faf', 'Lomba Agustus', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786163648/smp45/uploads/ks8onle7klp9fx5qyuw7.webp', NULL, NULL, '', TRUE, 30, '2026-10-10T14:11:51.795229+00:00', NULL),
('a7d6b374-25a8-4b7a-a071-7e3fa66cdd06', 'Lomba Agustus', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786163620/smp45/uploads/doxprmxsjldxotoim9sp.webp', NULL, NULL, '', TRUE, 31, '2026-10-10T14:11:37.416342+00:00', NULL),
('bfdc681c-76c5-4640-92fe-79363db65dac', 'Juara Lomba Badminton', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786968085/smp45/uploads/gbvvasqna1hzgvmsk9wk.webp', NULL, NULL, '', TRUE, 32, '2026-10-10T14:10:55.169281+00:00', NULL),
('f4dc9fde-a667-47d7-9cb6-de1afbd34c6c', 'Hari Pramuka', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786967543/smp45/uploads/bqhycmvl48ppsv5wivki.webp', NULL, NULL, '', TRUE, 33, '2026-10-10T14:09:56.275807+00:00', NULL),
('9077203a-d6f3-40eb-be21-acf3d845057c', 'Hari Pramuka', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786967486/smp45/uploads/vvidiyvnin4yc1irxz4d.webp', NULL, NULL, '', TRUE, 34, '2026-10-10T14:09:31.740022+00:00', NULL),
('ece2cb65-f976-43ac-8200-8e6a3d44cb42', 'Hari Pramuka', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786967195/smp45/uploads/l8y6bgu1ceebrrub06fb.webp', NULL, NULL, '', TRUE, 36, '2026-10-10T14:07:00.574442+00:00', NULL),
('13bf3b72-454a-498e-81ff-99cfcfbb02e8', 'Lomba Agustusan', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1788148015/smp45/uploads/roo5xuofmn4iay4tmag0.webp', NULL, NULL, '', TRUE, 20, '2026-10-10T14:16:30.564342+00:00', NULL),
('737f07a8-9118-4db8-b831-68703e0fe160', 'Lomba Agustusan', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1788148229/smp45/uploads/cdpvwjb0sfujyu7dty4d.webp', NULL, NULL, '', TRUE, 18, '2026-10-10T14:17:03.929966+00:00', NULL),
('98d1a363-c2ea-45fa-a42b-116fe3e33b81', 'Isra Miraj 2026', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789140345/smp45/uploads/ilh1rn42lxm8fpaamhfi.webp', NULL, NULL, '', TRUE, 1, '2026-10-10T14:22:58.696378+00:00', NULL),
('2f7595da-d925-4912-889f-832dea05a205', 'Ujian Praktik Melukis', 'Kegiatan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777847/blogsmp/wtv031ji03nr2gwg48sa.webp', NULL, '2026-05-03', 'Ujian Praktik Melukis', TRUE, 66, '2026-10-10T13:45:42.622753+00:00', NULL),
('20ea1e88-a76d-4251-8d2d-24e89c01e956', 'Lomba Agustusan', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1788148095/smp45/uploads/mbk0zbe1oi2uezni7pbl.webp', NULL, NULL, '', TRUE, 19, '2026-10-10T14:16:49.392831+00:00', NULL),
('635dc624-d986-40dc-bcc9-348c57ed409f', 'Ujian Praktik Sholat Jenazah', 'Keagamaan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777829/blogsmp/eebya5iye6s5inffrmbt.webp', NULL, '2026-05-03', 'Ujian Praktik Sholat Jenazah', TRUE, 67, '2026-10-10T13:45:42.622753+00:00', NULL),
('da08c930-c2c1-465a-b7f8-ccf89c5622bc', 'Halal Bihalal', 'Keagamaan', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777750/blogsmp/euyvo4z54phhzcdyswzq.webp', NULL, '2026-05-03', 'Halal Bihalal', TRUE, 70, '2026-10-10T13:45:42.622753+00:00', NULL),
('64beb1e5-bc0d-486b-ac55-1265cb30d2b2', 'Isra Miraj 2026', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789137145/smp45/uploads/frqt8wnodkqfozvq5gyl.webp', NULL, NULL, '', TRUE, 5, '2026-10-10T14:21:46.569765+00:00', NULL),
('6f704a66-eabc-4631-96a2-8ec560c7a484', 'Isra Miraj 2026', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789137124/smp45/uploads/d5tolvd7rtbmloxmhwq8.webp', NULL, NULL, '', TRUE, 6, '2026-10-10T14:21:29.453812+00:00', NULL),
('3519341c-e726-4396-a07f-a7e3a2067db8', 'Isra Miraj 2026', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789137106/smp45/uploads/okcbadhbnknvz5uu0qzw.webp', NULL, NULL, '', TRUE, 7, '2026-10-10T14:21:09.000154+00:00', NULL),
('456f7650-d5ed-4ad1-8705-dd11d1178d3f', 'Isra Miraj 2026', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789137087/smp45/uploads/sxougxwiqc4keajijetc.webp', NULL, NULL, '', TRUE, 8, '2026-10-10T14:20:57.044486+00:00', NULL),
('19f99747-2460-48a4-9c59-fb4b3e45ad79', 'Isra Miraj 2026', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789137073/smp45/uploads/a1ygcwxbdkmylsp3nzxt.webp', NULL, NULL, '', TRUE, 9, '2026-10-10T14:20:24.396287+00:00', NULL),
('796d78a1-0554-46bc-82d2-fb16e7b6c995', 'Isra Miraj 2026', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789137055/smp45/uploads/d30jdxa3rl6e1c3qwakf.webp', NULL, NULL, '', TRUE, 10, '2026-10-10T14:20:09.298923+00:00', NULL),
('222f5455-7741-4718-bb36-14fa485efc60', 'Isra Miraj 2026', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789137038/smp45/uploads/c5xb2ygmwtkiyj8r6pmi.webp', NULL, NULL, '', TRUE, 11, '2026-10-10T14:19:48.962192+00:00', NULL),
('a2de6879-573b-4741-b2d4-700f0c3d02dd', 'Isra Miraj 2026', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789137013/smp45/uploads/macofvba1u1lqbmpshyh.webp', NULL, NULL, '', TRUE, 12, '2026-10-10T14:19:40.761353+00:00', NULL),
('160239dc-ae65-431d-b582-e30b2dae2274', 'Isra Miraj 2026', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789136998/smp45/uploads/cvtmxbaazycnymwozlsc.webp', NULL, NULL, '', TRUE, 13, '2026-10-10T14:19:16.816868+00:00', NULL),
('303b13a0-f2dd-4ad6-8b59-5075eca47e2e', 'Isra Miraj 2026', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1789135799/smp45/uploads/txqxewn3rnpud1iizqrf.webp', NULL, NULL, '', TRUE, 14, '2026-10-10T14:19:01.545144+00:00', NULL),
('6d4a20b2-3a11-475a-bfd2-01c236a39fb4', 'Lomba Agustusan', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1788148633/smp45/uploads/j3rchs15m1uikden3svl.webp', NULL, NULL, '', TRUE, 15, '2026-10-10T14:17:55.402838+00:00', NULL),
('1e0e4326-44b3-4f7f-83ab-7490e194f8d6', 'Lomba Agustusan', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1788148615/smp45/uploads/foesv6pnzlwj8pao2ums.webp', NULL, NULL, '', TRUE, 16, '2026-10-10T14:17:36.035451+00:00', NULL),
('15c54a12-04db-4318-aa53-60fccee4a2c6', 'Lomba Agustusan', 'Kegiatan', 'https://res.cloudinary.com/lvrhzzon/image/upload/v1788148269/smp45/uploads/slscgyccmb583afpxocn.webp', NULL, NULL, '', TRUE, 17, '2026-10-10T14:17:23.108383+00:00', NULL);

-- ------------------------------------------------------------
-- Table: public.programs (6 rows)
-- ------------------------------------------------------------
DELETE FROM public.programs;
INSERT INTO public.programs (
  id, slug, title, badge, short_desc, full_desc, icon_name, highlights, schedule, image_url, is_active, sort_order, created_at, updated_at
) VALUES
('1d54d05e-d469-46b0-8b50-a5bb592dfba4', 'sains-teknologi', 'Sains & Teknologi', 'Program Sekolah', 'Pembelajaran sains modern dengan perspektif Islam', 'Pembelajaran sains modern dengan perspektif Islam', 'BrainCircuit', ARRAY['"Pembelajaran sains modern dengan perspektif Islam"'], 'Terintegrasi Pembelajaran', 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000', TRUE, 5, '2026-10-10T13:45:42.622753+00:00', NULL),
('4342b65e-e623-42b0-aa16-af6ee14222c0', 'tahfidz-al-qur-an', 'Tahfidz Al-Qur''an', 'Program Sekolah', 'Program hafalan Al-Qur''an dengan target', 'Program hafalan Al-Qur''an dengan target', 'BookOpen', ARRAY['"Program hafalan Al-Qur''an dengan target"'], 'Terintegrasi Pembelajaran', 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000', TRUE, 1, '2026-10-10T13:45:42.622753+00:00', NULL),
('759e0a13-4f78-4bee-a9c9-a2d36e444af0', 'ekstrakulikuler', 'Ekstrakulikuler', 'Program Sekolah', 'Pramuka, Drumband, Hadroh, dan Olahraga', 'Pramuka, Drumband, Hadroh, dan Olahraga', 'Award', ARRAY['"Pramuka, Drumband, Hadroh, dan Olahraga"'], 'Terintegrasi Pembelajaran', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/bybamn19hpp_1765980927714.webp', TRUE, 6, '2026-10-10T13:45:42.622753+00:00', NULL),
('0b4c5507-e656-48d9-a6bf-9abfd5fee05b', 'sholat-berjamaah', 'Sholat Berjamaah', 'Program Sekolah', 'Pembiasaan sholat Dhuha dan Dzuhur berjamaah setiap hari', 'Pembiasaan sholat Dhuha dan Dzuhur berjamaah setiap hari', 'Users', ARRAY['"Pembiasaan sholat Dhuha dan Dzuhur berjamaah setiap hari"'], 'Terintegrasi Pembelajaran', 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000', TRUE, 3, '2026-10-10T13:45:42.622753+00:00', NULL),
('a3aa2e2a-5209-456c-84a8-18dea439a740', 'pembinaan-akhlak', 'Pembinaan Akhlak', 'Program Sekolah', 'Pembentukan karakter islami melalui pembiasaan dan keteladanan', 'Pembentukan karakter islami melalui pembiasaan dan keteladanan', 'HeartHandshake', ARRAY['"Pembentukan karakter islami melalui pembiasaan dan keteladanan"'], 'Terintegrasi Pembelajaran', 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000', TRUE, 4, '2026-10-10T13:45:42.622753+00:00', NULL),
('82aab682-38f8-4b1f-8860-3c9ac33e26ee', 'pembelajaran-bahasa-arab', 'Pembelajaran Bahasa Arab', 'Program Sekolah', 'Penguasaan bahasa Arab aktif untuk komunikasi dan pemahaman kitab', 'Penguasaan bahasa Arab aktif untuk komunikasi dan pemahaman kitab', 'BookOpen', ARRAY['"Penguasaan bahasa Arab aktif untuk komunikasi dan pemahaman kitab"'], 'Terintegrasi Pembelajaran', 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000', TRUE, 2, '2026-10-10T13:45:42.622753+00:00', NULL);

-- ------------------------------------------------------------
-- Table: public.extracurriculars (7 rows)
-- ------------------------------------------------------------
DELETE FROM public.extracurriculars;
INSERT INTO public.extracurriculars (
  id, slug, name, coach, schedule, description, icon_name, achievements, image_url, is_active, sort_order, created_at, updated_at
) VALUES
('0a6395b0-b510-40b9-9aaf-7a3bac019cdf', 'e2a5d98d-eb89-4f5a-8176-2396a6861e48', 'Seni Tari', 'Annisa Rizka Fatihah, S.Si', 'Jumat, 14.30 WIB', 'Ekstrakurikuler Seni Tari menjadi wadah bagi siswa untuk mengeksplorasi keindahan gerak, baik dalam tarian tradisional maupun modern. Anggota akan mempelajari teknik dasar, ritme, serta ekspresi panggung yang dapat melatih kedisiplinan dan rasa percaya diri. Selain mengasah bakat seni, kegiatan ini juga turut melestarikan kekayaan budaya melalui berbagai pertunjukan dan kompetisi.', 'Award', ARRAY[], 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800', TRUE, 6, '2026-10-10T15:11:24.696215+00:00', '2026-10-10T15:11:53.064215+00:00'),
('8cd9ad73-7d73-4e4c-9ba0-36dcd308c0ab', 'e157dfba-6a9a-46f7-a170-c5e0519c38a2', 'MTQ (Musabaqah Tilawatil Qur''an)', 'Ahmad Irfan Fauzi, S.Ag, S.Sos', 'Jumat, 14.30 WIB', 'Ekstrakurikuler ini bertujuan untuk memperdalam kemampuan siswa dalam membaca, menghafal, dan memahami Al-Qur''an dengan tajwid serta irama yang indah. Melalui bimbingan rutin, para anggota dilatih untuk meningkatkan keimanan sekaligus mempersiapkan diri menghadapi berbagai ajang kompetisi keagamaan. Kegiatan ini menjadi wadah pembentukan karakter religius yang berprestasi dan berakhlak mulia.', 'Award', ARRAY[], 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800', TRUE, 7, '2026-10-10T15:11:53.205902+00:00', NULL),
('eb31c39a-f94a-44d5-863e-5849b939af9f', 'pramuka', 'Pramuka Gudep Ma''arif 45.02', 'Khoirul Huda, S.Pd.i', 'Jumat (09.30 - 11.00 WIB)', 'Ekstrakurikuler wajib pembentuk kedisiplinan, kemandirian, dan cinta tanah air berbasis Dasa Darma.', 'Award', ARRAY[], 'https://res.cloudinary.com/lvrhzzon/image/upload/v1786967121/smp45/uploads/ebumigaoygnodsov12ta.webp', TRUE, 1, '2026-10-10T10:09:50.163625+00:00', '2026-10-10T15:11:52.057985+00:00'),
('d41123da-8926-4753-8ee1-3ff823dd710e', 'hadrah', 'Seni Hadrah & Banjari "Bahana Empat Lima"', 'Rohmad Yulia Akbar Tri Maulana', 'Setiap Rabu Sore (15.00 WIB)', 'Grup musik Islami pelestari seni sholawat khas An-Nahdliyah dengan kombinasi pukulan reban moderen.', 'Award', ARRAY['"Juara Harapan 1 Festival Banjari Pelajar Kedungpring"', '"Pengisi Acara Pengajian Yayasan"'], 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop', TRUE, 2, '2026-10-10T10:09:50.163625+00:00', '2026-10-10T15:11:52.376219+00:00'),
('3c89ad96-d104-41ee-bcc0-8c9584ec4740', 'it-club', 'IT & Web Media Team', 'Rohman Firmansyah, S.Kom', 'Setiap Selasa Sore (14.30 WIB)', 'Klub jurnalistik digital, fotografi, videografi konten kreatif, dan pemrograman komputer dasar.', 'Award', ARRAY['"Pengelola Media Sosial & Dokumen Website Sekolah"'], 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop', TRUE, 3, '2026-10-10T10:09:50.163625+00:00', '2026-10-10T15:11:52.561579+00:00'),
('0e1a2339-45a6-410f-8916-c30ea6af2bf0', 'volleyball', 'Bola Voli & Futsal', 'Annuris Shoba S.Pd', 'Setiap Senin & Kamis Sore', 'Pembinaan stamina, kerja sama tim, dan ketangkasan olahraga bola voli serta futsal antar sekolah.', 'Award', ARRAY[], 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=800&auto=format&fit=crop', TRUE, 4, '2026-10-10T10:09:50.163625+00:00', '2026-10-10T15:11:52.725269+00:00'),
('e2e4455d-9775-43fb-8c4c-9128848002ae', '9dab3469-9a0a-4329-8d44-b17ab79c1e45', 'English Course', 'Kadari Ningsih Ayu Wandira S.PdI', 'Jumat, 09.30 WIB', 'Ekstrakurikuler ini dirancang untuk mengasah kemampuan berbahasa Inggris siswa secara interaktif melalui kegiatan debat, percakapan harian, dan permainan peran. Selain meningkatkan rasa percaya diri dalam berbicara, anggota juga dapat memperluas kosakata serta pemahaman tata bahasa secara menyenangkan. Kegiatan ini menjadi sarana tepat untuk mempersiapkan siswa menghadapi tantangan global dan kompetisi akademik.', 'Award', ARRAY[], 'https://res.cloudinary.com/lvrhzzon/image/upload/v1791644713/smp45/uploads/utz7bnspytonplpqve9c.webp', TRUE, 5, '2026-10-10T15:06:57.144304+00:00', '2026-10-10T15:11:52.891741+00:00');

-- ------------------------------------------------------------
-- Table: public.facilities (6 rows)
-- ------------------------------------------------------------
DELETE FROM public.facilities;
INSERT INTO public.facilities (
  id, name, description, image_url, count_label, is_active, sort_order, created_at, updated_at
) VALUES
('fa677e8e-08a4-4ebd-9a89-f98985213c05', 'Ruang Kelas Nyaman & Multimedia Projector', 'Seluruh ruang kelas dilengkapi dengan kipas/AC, pencahayaan alami yang baik, serta LCD projector untuk pembelajaran visual.', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop', '12 Ruang Kelas', TRUE, 1, '2026-10-10T10:09:49.901498+00:00', NULL),
('d03ecae8-aa9c-46cb-9d58-c34a487f64f5', 'Laboratorium Komputer & Bahasa Digital', 'Dilengkapi 30+ unit komputer ber-spesifikasi tinggi, koneksi internet serat optik, dan software pendukung pembelajaran.', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop', '1 Unit Lab Komputer', TRUE, 2, '2026-10-10T10:09:49.901498+00:00', NULL),
('220224e7-9d90-4cf5-ad67-2c0cafde7afe', 'Musholla Ma''arif Berkapasitas 400 Jamaah', 'Tempat ibadah utama yang bersih dan tenang untuk sholat Dhuha, Dzuhur berjamaah, dan pengajian rutin.', 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop', '1 Musholla Utama', TRUE, 3, '2026-10-10T10:09:49.901498+00:00', NULL),
('f4ebd1bb-163c-4d71-97a3-107298f6e6a7', 'Perpustakaan & Ruang Baca Literasi', 'Koleksi ribuan buku pelajaran, novel edukatif, ensiklopedia Islami, majalah, dan pojok baca digital.', 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop', '1 Perpustakaan', TRUE, 4, '2026-10-10T10:09:49.901498+00:00', NULL),
('083c6ffb-3075-4eae-9589-40b59315ddb2', 'Lapangan Olahraga Serbaguna', 'Lapangan luas untuk upacara bendera, pertandingan voli, basket, futsal, dan latihan pencak silat.', 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop', '1 Lapangan Luas', TRUE, 5, '2026-10-10T10:09:49.901498+00:00', NULL),
('7506a10d-9e64-4475-b3ed-9abb5d89f9f1', 'Kantin Sehat & Dapur Gizi', 'Menyediakan makanan dan minuman higienis, halal, dan terjangkau yang dikontrol kebersihannya oleh pihak sekolah.', 'https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=800&auto=format&fit=crop', 'Kantin Sekolah Higenis', TRUE, 6, '2026-10-10T10:09:49.901498+00:00', NULL);

-- ------------------------------------------------------------
-- Table: public.testimonials (3 rows)
-- ------------------------------------------------------------
DELETE FROM public.testimonials;
INSERT INTO public.testimonials (
  id, name, role, quote, photo_url, is_published, sort_order, created_at
) VALUES
('c71663f4-3700-412f-81bf-3ec638871a18', 'Ahmad Khoirul Anam, S.T.', 'Alumni Angkatan 2018 (Sekarang Software Engineer)', 'Fondasi agama yang kuat dan kedisiplinan belajar dari para guru SMP 45 2 Kedungpring menjadi modal berharga saya hingga bisa sukses di dunia profesional IT.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', TRUE, 1, '2026-10-10T10:09:50.4298+00:00'),
('b9186783-46d5-4d4d-ab21-f1a9042f969a', 'Hj. Nurul Hidayah', 'Wali Murid Ananda Annisa (Kelas IX-A)', 'Sangat bersyukur menyekolahkan anak di sini. Selain perkembangan akademiknya bagus, anak saya sekarang rajin Sholat Dhuha dan membaca Al-Qur''an tanpa perlu disuruh.', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop', TRUE, 2, '2026-10-10T10:09:50.4298+00:00'),
('e817a9ee-f311-43bb-8164-17139314cc7c', 'Siti Nur Aini', 'Siswa Kelas IX / Peraih Juara MTQ Pelajar', 'Guru-gurunya sangat sabar dan mendukung bakat siswa. Tempat belajarnya adem, banyak teman, dan ekstra Pagar Nusa nya keren banget!', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop', TRUE, 3, '2026-10-10T10:09:50.4298+00:00');

-- ------------------------------------------------------------
-- Table: public.agendas (4 rows)
-- ------------------------------------------------------------
DELETE FROM public.agendas;
INSERT INTO public.agendas (
  id, title, event_date, event_time_start, event_time_end, location, category, description, is_published, created_at, created_by
) VALUES
('a297cda7-9dcc-40f1-8349-939d6e427235', 'Ujian Munaqosyah Tahfidz Al-Qur''an Juz 30 Gelombang I', '2027-08-10', '08:00:00', '12:00:00', 'Musholla Ma''arif SMP 45 2 Kedungpring', 'Akademik', 'Ujian kelulusan tahfidz juz 30 dipandu penguji dari LP Ma''arif Lamongan.', TRUE, '2026-10-10T10:09:50.69634+00:00', NULL),
('d7948650-d4fd-4a63-bdaf-3f0e5e92df16', 'Upacara Bendera HUT Kemerdekaan RI Ke-82 & Atraksi Drumband', '2027-08-17', '07:00:00', '10:30:00', 'Lapangan Utama Sekolah', 'Nasional', 'Peringatan kemerdekaan Republik Indonesia bersama seluruh civitas akademika.', TRUE, '2026-10-10T10:09:50.69634+00:00', NULL),
('eaebb151-0340-459d-badc-bff12269db2a', 'Tryout Simulasi Asesmen Nasional Berbasis Komputer (ANBK)', '2027-09-05', '07:30:00', '13:00:00', 'Laboratorium Komputer CBT', 'Ujian Digital', 'Persiapan ANBK kelas VIII untuk evaluasi mutu pendidikan sekolah.', TRUE, '2026-10-10T10:09:50.69634+00:00', NULL),
('92032f68-622d-4c35-8019-1e6a5eb08eb0', 'Peringatan Hari Santri Nasional (HSN) & Pawai Ta''aruf Ma''arif', '2027-10-22', '06:30:00', '11:30:00', 'Area Kecamatan Kedungpring', 'Keagamaan', 'Pawai santri dan apel akbar Hari Santri Nasional.', TRUE, '2026-10-10T10:09:50.69634+00:00', NULL);

-- ------------------------------------------------------------
-- Table: public.ppdb_faqs (5 rows)
-- ------------------------------------------------------------
DELETE FROM public.ppdb_faqs;
INSERT INTO public.ppdb_faqs (
  id, question, answer, is_active, sort_order, created_at, updated_at
) VALUES
('168b4620-bb20-4268-ba59-86805e4c69f1', 'Apakah pendaftaran PPDB dikenakan biaya?', 'Pendaftaran PPDB tidak dipungut biaya (gratis). Apabila terdapat biaya lain, akan diinformasikan secara resmi oleh pihak sekolah.', TRUE, 1, '2026-10-10T13:45:42.622753+00:00', NULL),
('606247b8-3e4f-4e9b-8905-eb2162946bfa', 'Apakah pendaftaran bisa dilakukan secara offline?', 'bagi calon peserta didik yang mengalami kendala untuk mendaftar secara online, dapat datang langsung ke sekolah pada jam kerja untuk mendapatkan bantuan.', TRUE, 2, '2026-10-10T13:45:42.622753+00:00', NULL),
('cacf0c31-4115-46c2-b046-7069a2bf5c11', 'Ke mana harus bertanya jika mengalami kendala saat PPDB?', 'Orang tua/wali dapat menghubungi panitia PPDB SMP melalui kontak yang tersedia di website atau datang langsung ke sekolah pada jam kerja.', TRUE, 5, '2026-10-10T13:45:42.622753+00:00', NULL),
('44510db4-621d-493d-bda9-dff0a165d7ca', 'Bagaimana jika data yang diinput salah?', 'Jika terjadi kesalahan pengisian data, peserta dapat melakukan perbaikan selama masa pendaftaran masih dibuka atau menghubungi panitia PPDB sekolah.', TRUE, 3, '2026-10-10T13:45:42.622753+00:00', NULL),
('00f611f7-230e-45ed-9b32-ead63b569758', 'Bagaimana jika data yang diunggah salah atau tidak jelas?', 'Jika terjadi kesalahan data, peserta dapat memperbaikinya selama masa pendaftaran atau akan diminta melakukan perbaikan oleh panitia PPDB.', TRUE, 4, '2026-10-10T13:45:42.622753+00:00', NULL);

-- ------------------------------------------------------------
-- Table: public.osis_officers (4 rows)
-- ------------------------------------------------------------
DELETE FROM public.osis_officers;
INSERT INTO public.osis_officers (
  id, period, position, name, class_name, photo_url, sort_order, is_active, created_at
) VALUES
('3c697ac2-995a-4bba-b82c-d959a2544635', '2027/2028', 'Ketua OSIS', 'Muhammad Naufal Rizky', 'VIII-A', NULL, 1, TRUE, '2026-10-10T10:09:51.419627+00:00'),
('74d44497-abfe-47b1-af74-95d86c2185f1', '2027/2028', 'Wakil Ketua', 'Aisyah Nur Aini', 'VIII-B', NULL, 2, TRUE, '2026-10-10T10:09:51.419627+00:00'),
('19c46419-e4e3-4be9-bbc4-3bf7afa79e92', '2027/2028', 'Sekretaris', 'Siti Rahmawati', 'VIII-A', NULL, 3, TRUE, '2026-10-10T10:09:51.419627+00:00'),
('1067f79c-ae3f-40f5-b69f-a73170074a03', '2027/2028', 'Bendahara', 'Ahmad Farhan', 'VIII-C', NULL, 4, TRUE, '2026-10-10T10:09:51.419627+00:00');

-- ------------------------------------------------------------
-- Table: public.ipnu_info (2 rows)
-- ------------------------------------------------------------
DELETE FROM public.ipnu_info;
INSERT INTO public.ipnu_info (
  id, title, period, description, sections, leader_name, leader_class, is_active, created_at, updated_at
) VALUES
('f195fe0f-b38e-425f-a322-40056133948a', 'Pimpinan Komisariat IPNU & IPPNU SMP 45 2 Kedungpring', 'Masa Bakti 2027/2028', 'Selain OSIS, siswa SMP 45 2 Kedungpring juga dibina dalam wadah PK IPNU (Ikatan Pelajar Nahdlatul Ulama) dan IPPNU (Ikatan Pelajar Putri Nahdlatul Ulama) untuk mengukuhkan wawasan Aswaja & An-Nahdliyah.', ARRAY['"Keagamaan"', '"Olahraga & Kesehatan"', '"Kesenian & Budaya"', '"Humas & Publikasi Digital"'], 'M. Zidan Al-Farizi (Ketua PK IPNU)', 'IX-A', TRUE, '2026-10-10T10:09:51.854829+00:00', NULL),
('a7e733f9-fcfe-4278-befd-c7894c92ae10', '-', '-', '-', ARRAY['"-"'], '-', '-', TRUE, '2026-10-10T15:12:32.621888+00:00', NULL);

-- ============================================================
-- END OF BACKUP RESTORE SCRIPT
-- ============================================================
