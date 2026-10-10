-- ============================================================
-- 006_restore_real_data_pindahan.sql
-- MEMULIHKAN SELURUH DATA ASLI SMP EMPAT LIMA 2 KEDUNGPRING
-- Dari backup data_pindahan (Berita, Galeri, Guru, Program, Profil Asli)
--
-- Jalankan di: Supabase Dashboard > SQL Editor > Run
-- ============================================================

-- 1. RESTORE PROFIL SEKOLAH ASLI (Drs. Marji)
UPDATE public.school_info SET
  principal_name = 'Drs. Marji',
  principal_title = 'Kepala SMP "Empat Lima" 2 Kedungpring',
  principal_quote = 'Puji syukur kehadirat Allah SWT atas segala rahmat dan karunia-Nya, sehingga website resmi sekolah kami dapat hadir sebagai media informasi dan komunikasi bagi seluruh civitas akademika serta masyarakat luas.
Selamat datang di website sekolah kami. Melalui platform digital ini, kami berkomitmen untuk memberikan informasi terkini mengenai berbagai kegiatan, prestasi, dan program-program pendidikan yang kami selenggarakan.
Sekolah kami senantiasa berupaya memberikan pendidikan berkualitas dengan mengintegrasikan nilai-nilai akademik, karakter, dan keterampilan yang dibutuhkan di era digital. Dengan didukung oleh tenaga pendidik yang profesional dan berdedikasi tinggi, kami optimis dapat mencetak generasi penerus bangsa yang cerdas, berakhlak mulia, dan berdaya saing.
Kami mengajak seluruh stakeholder pendidikan, terutama orang tua/wali murid untuk bersinergi dan berkolaborasi dalam mendukung proses pendidikan putra-putri kita. Mari bersama-sama kita wujudkan cita-cita luhur pendidikan nasional.
Semoga website ini dapat bermanfaat dan menjadi jembatan komunikasi yang efektif antara sekolah, siswa, orang tua, dan masyarakat.


Wassalamu''alaikum Warahmatullahi Wabarakatuh',
  principal_photo_url = 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/h8rmqovzu8d_1765985681290.webp',
  vision = 'Sekolahku yang berprestasi, berbudaya, beriptek, dan berimtaq, berhaluan ahlussunah wal jamaah.',
  missions = ARRAY['Meningkatkan kualitas guru dan karyawan', 'Melaksanakan pembelajaran dan bimbingan secara efektif', 'Menumbuhkan sifat kompetitif pada setiap warga untuk meraih prestasi', 'Menumbuhkan keunggulan secara intensif kepada seluruh warga ', 'Menggali potensi sumberdaya sekolah dalam memberdayakan sekolah', 'Mewujudkan sekolah peduli, berbudaya, dan berwawasan lingkungan hidup'],
  history = 'SMP Empat Lima Kalen (yang kini dikenal sebagai SMP "Empat Lima" 2 Kedungpring) didirikan sebagai respons terhadap meningkatnya kebutuhan pendidikan lanjutan bagi lulusan SD/MI di wilayah tersebut, menyusul tingginya kepercayaan masyarakat terhadap SMP Empat Lima Kedungpring. Atas inisiatif Pengurus Yayasan Lembaga Pendidikan Ma''arif dan Kepala SMP Empat Lima Kedungpring, Bapak Drs. H. ABD. MU''THI, diusulkan pembentukan kelas jauh di Desa Kalen untuk menampung siswa dari wilayah barat Kecamatan Kedungpring dan sebagian Kecamatan Modo. 

Setelah mendapat izin menempati gedung SDN Kalen I sejak tahun ajaran 1981/1982, secara resmi SMP Empat Lima Kalen didirikan pada tanggal 15 Juni 1982, menerima 90 siswa pada tahun ajaran pertamanya. Pada masa awal ini, seluruh kegiatan administrasi dan kelembagaan masih menyatu dengan SMP Empat Lima Kedungpring. Namun, didorong oleh petunjuk dari Kandep Dikbud, sekolah ini mengajukan izin penyelenggaraan mandiri, dan setelah izin keluar serta diterima pada tahun 1983, administrasi SMP Empat Lima Kalen mulai berdiri sendiri. Sekolah ini menerima pembinaan dari Departemen Pendidikan dan Kebudayaan serta dari Yayasan Lembaga Pendidikan Ma''arif.',
  whatsapp = '6281332558033'
WHERE id = 1;

-- 2. RESTORE BERITA ASLI (9 Artikel)
DELETE FROM public.news;
INSERT INTO public.news (
  slug, title, category, published_date, author_name, author_role, read_time_minutes, image_url, summary, content, tags, is_featured, is_published
) VALUES
('gelar-upacara-peringatan-hari-kartini-1777778504069', 'Gelar Upacara Peringatan Hari Kartini', 'Lain-lain', '2026-05-03', 'Admin Sekolah', 'Tim Redaksi', 3, 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778463/blogsmp/sk4smynepmxwlswpq9lw.webp', 'Peringatan Hari Kartini di SMP Empat Lima 2 Kedungpring berlangsung penuh semangat dengan nuansa budaya yang memperkuat nilai emansipasi dan kebersamaan.', 'SMP Empat Lima 2 Kedungpring menyelenggarakan upacara peringatan Hari Kartini dengan khidmat di halaman sekolah, yang diikuti oleh seluruh warga sekolah, mulai dari guru, staf, hingga peserta didik. Kegiatan ini menjadi momentum untuk mengenang perjuangan R.A. Kartini dalam memperjuangkan hak dan peran perempuan di Indonesia.

Dalam pelaksanaan upacara, para guru dan siswa tampil mengenakan busana batik dan pakaian tradisional, menciptakan suasana yang kental dengan nuansa budaya Indonesia. Barisan peserta upacara tampak rapi dan tertib, mencerminkan kedisiplinan serta rasa hormat terhadap nilai-nilai perjuangan para pahlawan.

Selain upacara, kegiatan ini juga menjadi sarana untuk menanamkan nilai-nilai kesetaraan, semangat belajar, serta kemandirian, khususnya bagi para siswi sebagai generasi penerus bangsa. Para siswa diajak untuk meneladani semangat Kartini dalam menggapai cita-cita tanpa melupakan nilai budaya dan moral.

Melalui peringatan Hari Kartini ini, diharapkan seluruh peserta didik dapat semakin memahami pentingnya peran perempuan dalam pembangunan bangsa serta terus mengembangkan potensi diri dengan semangat perjuangan dan optimisme.', ARRAY['Lain-lain', 'SMP 45 2 Kedungpring'], TRUE, TRUE),
('peringatan-isra-miraj-nabi-muhammad-saw-1768913780383', 'Peringatan Isra’ Mi’raj Nabi Muhammad SAW', 'Kegiatan Keagamaan', '2026-01-20', 'Admin Sekolah', 'Tim Redaksi', 3, 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768913767/blogsmp/emjj9xwy3sx5sqfty7sj.webp', 'Peringatan Isra’ Mi’raj Nabi Muhammad SAW di SMP Empat Lima 2 Kedungpring menjadi momentum memperkuat keimanan dan meneladani akhlak Rasulullah dalam kehidupan sehari-hari.', 'SMP Empat Lima 2 Kedungpring menyelenggarakan kegiatan Peringatan Isra’ Mi’raj Nabi Muhammad SAW pada 20 Januari 2026 bertempat di lingkungan sekolah. Kegiatan ini diikuti oleh seluruh warga sekolah, mulai dari peserta didik, guru, hingga tenaga kependidikan, dengan suasana yang khidmat dan penuh makna.

Acara diawali dengan pembukaan dan sambutan dari kepala sekolah, kemudian dilanjutkan dengan tausiah keagamaan yang disampaikan oleh ustadz Irfan, dan di akhiri dengan pembacaan doa bersama. Dalam tausiah tersebut disampaikan makna peristiwa Isra’ Mi’raj sebagai perjalanan spiritual Rasulullah SAW yang mengajarkan pentingnya keimanan, ketakwaan, serta kewajiban menjalankan salat lima waktu sebagai fondasi utama kehidupan seorang muslim.

Melalui kegiatan ini, sekolah berharap peserta didik tidak hanya memahami sejarah Isra’ Mi’raj secara teori, tetapi juga mampu mengimplementasikan nilai-nilai yang terkandung di dalamnya, seperti disiplin beribadah, berakhlak mulia, serta meningkatkan rasa tanggung jawab dalam kehidupan sehari-hari.

Peringatan Isra’ Mi’raj ini merupakan bagian dari pembinaan karakter religius di SMP Empat Lima 2 Kedungpring yang secara rutin dilaksanakan sebagai upaya membentuk peserta didik yang beriman, berilmu, dan berakhlak mulia.', ARRAY['Kegiatan Keagamaan', 'SMP 45 2 Kedungpring'], FALSE, TRUE),
('tuntas-sukses-sas-ganjil-20252026-1765754679811', 'Tuntas Sukses SAS Ganjil 2025/2026', 'Akademik', '2025-12-14', 'Admin Sekolah', 'Tim Redaksi', 3, 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754671302.webp', 'Usaha Keras Hari Ini Menentukan Masa Depan Terbaikmu!', 'SMP "Empat Lima" 2 Kedungpring telah berhasil melaksanakan Sumatif Akhir Semester (SAS) Ganjil Tahun Pelajaran 2025/2026. Kegiatan akademik penting ini berlangsung selama enam hari penuh fokus, yaitu pada tanggal 01 hingga 06 Desember 2025. SAS Ganjil merupakan evaluasi akhir yang mengukur pemahaman siswa terhadap seluruh materi pelajaran yang telah diajarkan selama semester ganjil.

Pelaksanaan Ujian dan Motivasi Belajar Siswa (ISI)
SAS Ganjil dilaksanakan dengan tertib dan disiplin di lingkungan sekolah. Seluruh siswa mengikuti ujian dengan serius, menunjukkan komitmen mereka untuk meraih hasil terbaik. Guru-guru bertindak sebagai pengawas, memastikan suasana ujian yang kondusif. Sekolah menekankan pentingnya usaha dan integritas dalam proses pengerjaan ujian.

Sebagaimana pesan motivasi yang selalu ditekankan, "Ingat, Hasil ujian tidak menentukan masa depanmu, tapi usahamu yang menentukannya,". Pesan ini menjadi penyemangat bagi siswa bahwa nilai adalah cerminan dari proses belajar yang sudah mereka lalui. Sekolah berharap hasil yang dicapai dapat memotivasi siswa untuk terus tumbuh dan bersinar sesuai tagline sekolah, #GROW TOGETHER SHINE FOREVER.', ARRAY['Akademik', 'SMP 45 2 Kedungpring'], FALSE, TRUE),
('panggung-kreativitas-pagelaran-pentas-seni-smp-empat-lima-2-kedungpring-2025-1765754262483', 'PANGGUNG KREATIVITAS: Pagelaran Pentas Seni 2025!', 'Lain-lain', '2025-12-14', 'Admin Sekolah', 'Tim Redaksi', 3, 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754258948.webp', 'Bakat Siswa Memukau dan Berkilauan dalam Satu Hari Penuh Ekspresi Seni!', 'Pagelaran Pentas Seni (Pensi) tahunan SMP "Empat Lima" 2 Kedungpring kembali hadir sebagai puncak perayaan kreativitas dan ekspresi siswa sebelum libur semester. Acara ini sukses digelar pada tanggal 13 Desember 2025. Pensi menjadi wadah bagi siswa untuk menampilkan minat dan bakat mereka di berbagai bidang seni yang beragam.

Ragam Penampilan yang Memanjakan Mata dan Telinga (ISI)
Tahun ini, panggung Pensi dimeriahkan oleh sembilan jenis penampilan yang menunjukkan kekayaan artistik para pelajar:

Seni Sastra & Verbal: Terdapat penampilan Baca Puisi, Story Telling, dan Pidato.

Seni Pertunjukan: Aksi Menari, pementasan Drama, dan pertunjukan Menyanyi mengisi suasana dengan harmoni.

Aksi Panggung Unik: Pensi semakin meriah dengan kehadiran penampilan Stand Up Comedy serta atraksi Seni Pencak Silat.

Pensi bukan hanya tentang hiburan, tetapi juga tentang pembentukan karakter yang percaya diri dan apresiatif terhadap seni. Kami berharap melalui kegiatan seperti ini, bakat-bakat siswa akan terus terasah dan berkembang, menjadikan mereka generasi yang utuh—pintar dalam ilmu dan kaya dalam seni.', ARRAY['Lain-lain', 'SMP 45 2 Kedungpring'], FALSE, TRUE),
('emeriksaan-kebugaran-dengan-metode-rocksport-oleh-puskesmas-dradah-1768913436819', 'Pemeriksaan Kebugaran Dengan Metode Rocksport oleh Puskesmas Dradah', 'Lain-lain', '2026-01-20', 'Admin Sekolah', 'Tim Redaksi', 3, 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768913424/blogsmp/o1owz3kp7ok5xou7uzas.webp', 'SMP Empat Lima 2 Kedungpring bersama Puskesmas Dradah melaksanakan pemeriksaan kebugaran jasmani metode Rockport sebagai upaya memantau kesehatan dan meningkatkan kesadaran hidup sehat peserta didik.', 'SMP Empat Lima 2 Kedungpring melaksanakan kegiatan Pemeriksaan Kebugaran Jasmani bekerja sama dengan Puskesmas Dradah sebagai bagian dari program pelayanan kesehatan bagi peserta didik. Kegiatan ini dilaksanakan di lingkungan sekolah dan area sekitar sekolah dengan melibatkan siswa-siswi sebagai peserta pemeriksaan.

Pemeriksaan kebugaran dilakukan menggunakan metode Rockport, yaitu salah satu metode pengukuran kebugaran jasmani yang bertujuan untuk mengetahui tingkat daya tahan jantung dan paru-paru siswa melalui aktivitas fisik terkontrol. Sebelum pelaksanaan, petugas kesehatan dari Puskesmas Dradah memberikan arahan dan penjelasan teknis kepada peserta agar kegiatan berjalan dengan tertib, aman, dan sesuai prosedur.

Rangkaian kegiatan diawali dengan pemanasan bersama di halaman sekolah yang dipandu oleh petugas kesehatan. Setelah itu, siswa mengikuti tes kebugaran dengan berjalan atau berlari sesuai ketentuan jarak yang telah ditentukan. Selama kegiatan berlangsung, petugas puskesmas melakukan pengawasan dan pencatatan hasil sebagai bahan evaluasi kondisi kebugaran peserta didik.

Melalui kegiatan ini, diharapkan sekolah memperoleh gambaran awal mengenai tingkat kebugaran jasmani siswa, sehingga dapat menjadi dasar dalam pembinaan kesehatan, olahraga, dan pola hidup sehat di lingkungan sekolah. Selain itu, siswa juga diberikan edukasi tentang pentingnya menjaga kebugaran tubuh melalui aktivitas fisik teratur dan gaya hidup sehat.

Pihak sekolah menyampaikan apresiasi dan terima kasih kepada Puskesmas Dradah atas kerja sama dan pendampingan yang telah diberikan. Diharapkan sinergi antara sekolah dan puskesmas dapat terus terjalin guna mendukung terwujudnya peserta didik yang sehat, bugar, dan siap mengikuti kegiatan pembelajaran secara optimal.', ARRAY['Lain-lain', 'SMP 45 2 Kedungpring'], FALSE, TRUE),
('buana-nada-harmoni-drumband-di-hari-santri-1765754889106', 'Buana Nada: Harmoni Drumband di Hari Santri', 'Lain-lain', '2025-12-14', 'Admin Sekolah', 'Tim Redaksi', 3, 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754881531.webp', 'Irama Memukau dan Formasi Indah Meriahkan Peringatan Hari Santri Nasional!', 'Group Drumband kebanggaan SMP "Empat Lima" 2 Kedungpring sukses memukau penonton dalam pementasan spesial bertajuk "Buana Nada". Pertunjukan ini digelar dalam rangka memperingati Hari Santri Nasional 2025. Pementasan yang menunjukkan kedisiplinan dan kekompakan siswa-siswi ini dilaksanakan pada Selasa, 22 Oktober 2025.

Pementasan "Buana Nada" ini berlangsung meriah di TPQ Bahrul Ulum, Desa Kancanan Modo. Group Drumband SMP "Empat Lima" 2 Kedungpring tampil penuh energi, memulai aksinya pada pukul 13:00 WIB. Dengan kostum yang cerah dan formasi yang rapi, mereka berhasil membawakan berbagai lagu dengan irama yang harmonis dan koreografi yang menarik.

Acara ini tidak hanya menjadi hiburan bagi masyarakat sekitar, tetapi juga menjadi bukti nyata bahwa siswa-siswi SMP "Empat Lima" 2 Kedungpring memiliki kemampuan non-akademik yang unggul dan terlatih. Keikutsertaan dalam kegiatan Hari Santri ini selaras dengan semangat sekolah untuk #GROW TOGETHER SHINE FOREVER, di mana siswa didorong untuk mengembangkan potensi diri secara holistik dan berpartisipasi aktif dalam kegiatan sosial-keagamaan.

Semangat yang ditunjukkan oleh anggota Drumband diharapkan dapat menginspirasi siswa lain untuk terus berprestasi dan membawa nama baik sekolah di berbagai ajang.', ARRAY['Lain-lain', 'SMP 45 2 Kedungpring'], FALSE, TRUE),
('upacara-peringatan-hari-guru-nasional-2025-1765754583175', 'Upacara Peringatan Hari Guru Nasional 2025', 'Akademik', '2025-12-14', 'Admin Sekolah', 'Tim Redaksi', 3, 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754572455.webp', 'Hormat dan Terima Kasih Tulus Siswa-siswi untuk Para Pahlawan Tanpa Tanda Jasa!', 'SMP "Empat Lima" 2 Kedungpring menggelar upacara bendera khusus pada tanggal 25 November 2025 untuk memperingati Hari Guru Nasional. Kegiatan ini dilaksanakan dengan khidmat di lapangan sekolah, melibatkan seluruh staf pengajar dan siswa-siswi. Upacara ini menjadi momen istimewa untuk memberikan apresiasi tertinggi kepada para guru yang telah berdedikasi mencerdaskan kehidupan bangsa.

Pelaksanaan Upacara yang Khidmat dan Penuh Makna (ISI)
Upacara berlangsung tertib, dengan pengibaran bendera Merah Putih yang dilakukan oleh petugas paskibra sekolah. Seluruh peserta upacara, baik siswa maupun guru, mengenakan seragam kebanggaan dan mengikuti setiap prosesi dengan penuh penghormatan.

Dalam kesempatan ini, para guru SMP "Empat Lima" 2 Kedungpring tampil sebagai petugas upacara, memberikan suasana yang berbeda dan penuh makna. Terdapat momen khusus di mana beberapa guru, termasuk Kepala Sekolah, membacakan amanat dan pesan-pesan penting tentang peran strategis guru dalam membentuk masa depan generasi muda. Siswa-siswi juga tampak fokus mendengarkan, menunjukkan rasa hormat dan terima kasih mereka. Peringatan ini menegaskan kembali komitmen sekolah untuk terus berpegangan pada semangat #GROW TOGETHER SHINE FOREVER.

Setelah upacara, kegiatan dilanjutkan dengan pemberian apresiasi sederhana dari perwakilan siswa kepada guru-guru sebagai ungkapan terima kasih atas ilmu dan bimbingan yang telah diberikan selama ini.', ARRAY['Akademik', 'SMP 45 2 Kedungpring'], FALSE, TRUE),
('classmeeting-smp-empat-lima-2-kedungpring-2025-1765754022631', 'Classmeeting SMP "Empat Lima" 2 Kedungpring 2025!', 'Lain-lain', '2025-12-14', 'Admin Sekolah', 'Tim Redaksi', 3, 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/news/1765754009121.webp', 'Semangat Juang di Arena Classmeeting SMP "Empat Lima" 2 Kedungpring 2025!', 'SMP "Empat Lima" 2 Kedungpring kembali menggelar ajang tahunan yang paling ditunggu-tunggu: Classmeeting! Kegiatan yang berlangsung meriah pada tanggal 8 hingga 12 Desember 2025 ini bukan hanya sekadar kompetisi, tetapi juga wadah untuk menumbuhkan semangat kebersamaan, kekompakan, dan sportivitas antar kelas.

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

Jaga terus semangat juang dan sportivitas kalian!', ARRAY['Lain-lain', 'SMP 45 2 Kedungpring'], FALSE, TRUE),
('ujian-psaj-praktik-kelas-9-berlangsung-kreatif-dan-penuh-keterampilan-1777778382853', 'Ujian PSAJ Praktik Kelas 9 Berlangsung Kreatif dan Penuh Keterampilan', 'Kegiatan Keagamaan', '2026-05-03', 'Admin Sekolah', 'Tim Redaksi', 3, 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778364/blogsmp/chlpbbue8heylb7kax2d.webp', 'Pelaksanaan Ujian PSAJ praktik kelas 9 menjadi ajang bagi siswa SMP Empat Lima 2 Kedungpring untuk menunjukkan keterampilan, kreativitas, dan kesiapan mereka dalam menghadapi jenjang berikutnya.', 'SMP Empat Lima 2 Kedungpring melaksanakan Ujian PSAJ (Penilaian Sumatif Akhir Jenjang) Praktik bagi siswa kelas 9 yang berlangsung pada tanggal 12–18. Kegiatan ini dilaksanakan di lingkungan sekolah dengan berbagai bentuk praktik yang menguji keterampilan siswa secara langsung sesuai dengan bidang yang telah dipelajari.

Dalam pelaksanaannya, siswa mengikuti beragam kegiatan praktik, mulai dari simulasi keagamaan seperti pengurusan jenazah, kegiatan seni lukis, hingga tes kebugaran jasmani. Setiap kegiatan dirancang untuk mengukur kemampuan siswa tidak hanya dari sisi pengetahuan, tetapi juga keterampilan, ketelitian, kerja sama, dan tanggung jawab.

Pada praktik keagamaan, siswa terlihat aktif mempraktikkan tata cara pengurusan jenazah dengan bimbingan guru, sebagai bentuk pembelajaran nilai-nilai kehidupan dan keagamaan. Sementara itu, dalam bidang seni, siswa menuangkan kreativitas mereka melalui lukisan dengan berbagai tema yang menarik dan penuh makna.

Selain itu, kegiatan praktik juga mencakup tes kebugaran jasmani, di mana siswa mengikuti rangkaian aktivitas fisik seperti pemanasan dan pengukuran kebugaran untuk mengetahui kondisi fisik mereka. Kegiatan ini sekaligus menanamkan pentingnya menjaga kesehatan dan kebugaran tubuh.

Melalui Ujian PSAJ praktik ini, diharapkan siswa kelas 9 mampu menunjukkan kompetensi yang telah mereka pelajari selama menempuh pendidikan di SMP Empat Lima 2 Kedungpring. Pihak sekolah berharap hasil dari kegiatan ini dapat menjadi gambaran nyata kesiapan siswa dalam melanjutkan ke jenjang pendidikan yang lebih tinggi, baik dari aspek akademik maupun keterampilan.', ARRAY['Kegiatan Keagamaan', 'SMP 45 2 Kedungpring'], FALSE, TRUE);

-- 3. RESTORE GALERI ASLI (49 Foto)
DELETE FROM public.gallery;
INSERT INTO public.gallery (
  title, category, image_url, event_date, description, is_published
) VALUES
('Ujian Praktik Sholat Jenazah', 'Pembelajaran', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777829/blogsmp/eebya5iye6s5inffrmbt.webp', '2026-05-03', 'Ujian Praktik Sholat Jenazah', TRUE),
('Upacara Hari Kartini', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778021/blogsmp/y7in0yddiahdyiw2rxpb.webp', '2026-05-03', 'Upacara Hari Kartini', TRUE),
('Kegiatan Classmeeting hari 3', 'Lainnya', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765678317520.webp', '2025-12-14', 'Kegiatan Classmeeting hari 3', TRUE),
('Isra'' Mi''raj', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912726/blogsmp/cmpqyw0ykq5kftspmdl8.webp', '2026-01-20', 'Isra'' Mi''raj', TRUE),
('Kegiatan SAS Ganjil 2025', 'Pembelajaran', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765755034290.webp', '2025-12-14', 'Kegiatan SAS Ganjil 2025', TRUE),
('Pemeriksaan Kebugaran', 'Pembelajaran', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912498/blogsmp/qbu9yqa96udiqqurfrfu.webp', '2026-01-20', 'Pemeriksaan Kebugaran', TRUE),
('Halal Bihalal', 'Sholat Berjamaah', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777767/blogsmp/cktijjtzlapd9rzxgzjy.webp', '2026-05-03', 'Halal Bihalal', TRUE),
('Ujian Praktik Melukis', 'Pembelajaran', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777847/blogsmp/wtv031ji03nr2gwg48sa.webp', '2026-05-03', 'Ujian Praktik Melukis', TRUE),
('Kegiatan Classmeeting hari 6', 'Sholat Berjamaah', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765678552847.webp', '2025-12-14', 'Kegiatan Classmeeting hari 6', TRUE),
('Pemeriksaan Kebugaran', 'Pembelajaran', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912527/blogsmp/ia8ia1kc4fnjgpte8hed.webp', '2026-01-20', 'Pemeriksaan Kebugaran', TRUE),
('Isra'' Mi''raj', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912592/blogsmp/mcli6f8qiy1fwsohyiv2.webp', '2026-01-20', 'Isra'' Mi''raj', TRUE),
('Upacara Hari Kartini', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777995/blogsmp/jfnlmrx9ganhpudog14h.webp', '2026-05-03', 'Upacara Hari Kartini', TRUE),
('Foto Bersama Para Guru', 'Lainnya', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765755015827.webp', '2025-12-14', 'Foto Bersama Para Guru', TRUE),
('Upacara Hari Kartini', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778037/blogsmp/s5wjyqpr1rlogm9covot.webp', '2026-05-03', 'Upacara Hari Kartini', TRUE),
('Isra'' Mi''raj', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912747/blogsmp/ks3xbzaequnm056wj3at.webp', '2026-01-20', 'Isra'' Mi''raj', TRUE),
('Pemeriksaan Kebugaran', 'Pembelajaran', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912554/blogsmp/jdlfzy1ghia6rt3ddv4f.webp', '2026-01-20', 'Pemeriksaan Kebugaran', TRUE),
('Kegiatan Classmeeting hari 1', 'Lainnya', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765676306453.webp', '2025-12-14', 'Kegiatan Classmeeting hari 1', TRUE),
('Kegiatan Classmeeting hari 4', 'Sholat Berjamaah', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765678355615.webp', '2025-12-14', 'Kegiatan Classmeeting hari 4', TRUE),
('Kegiatan Classmeeting hari 2', 'Lainnya', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765678231434.webp', '2025-12-14', 'Kegiatan Classmeeting hari 2', TRUE),
('Upacara Hari guru Nasional', 'Lainnya', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765983735195.webp', '2025-12-17', 'Upacara Hari guru Nasional', TRUE),
('Halal Bihalal', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777750/blogsmp/euyvo4z54phhzcdyswzq.webp', '2026-05-03', 'Halal Bihalal', TRUE),
('Ujian Praktik Olahraga', 'Pembelajaran', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777969/blogsmp/sptmr08f3cnsfdku1y8y.webp', '2026-05-03', 'Ujian Praktik Olahraga', TRUE),
('Kegiatan Classmeeting hari 5', 'Lainnya', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765678432342.webp', '2025-12-14', 'Kegiatan Classmeeting hari 5', TRUE),
('Ujian Praktik Melukis', 'Pembelajaran', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777847/blogsmp/wtv031ji03nr2gwg48sa.webp', '2026-05-03', 'Ujian Praktik Melukis', TRUE),
('Pentas Seni', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1766191712/blogsmp/bz5zaj5lvmvcdanr5vmu.webp', '2025-12-20', 'Pentas Seni', TRUE),
('PBB Oleh Paskanusa', 'Pembelajaran', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765983816535.webp', '2025-12-17', 'PBB Oleh Paskanusa', TRUE),
('Jadwal Kegiatan Classmeeting', 'Lainnya', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765754935943.webp', '2025-12-14', 'Jadwal Kegiatan Classmeeting', TRUE),
('Upacara Hari Kartini', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778050/blogsmp/gguxg0gwyrd3mq3slqhz.webp', '2026-05-03', 'Upacara Hari Kartini', TRUE),
('Isra'' Mi''raj', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912650/blogsmp/xd4umgcaheeqwpd9pujw.webp', '2026-01-20', 'Isra'' Mi''raj', TRUE),
('Pentas Seni', 'Sholat Berjamaah', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1766011877/blogsmp/vlyd8stqk1qzrtfo88dl.webp', '2025-12-17', 'Pentas Seni', TRUE),
('Jadwal Kegiatan Pentas Seni', 'Lainnya', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765754981134.webp', '2025-12-14', 'Jadwal Kegiatan Pentas Seni', TRUE),
('Upacara Hari Kartini', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778079/blogsmp/epxqqtve8yc7jgxlgqht.webp', '2026-05-03', 'Upacara Hari Kartini', TRUE),
('Upacara Hari Kartini', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778064/blogsmp/rnfxe5gb99inkrlrnmq0.webp', '2026-05-03', 'Upacara Hari Kartini', TRUE),
('Hari Pendidikan Nasional', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778131/blogsmp/bu96kyddcxf20k9uc1nq.webp', '2026-05-03', 'Hari Pendidikan Nasional', TRUE),
('Kegiatan Classmeeting hari 6', 'Lainnya', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765678536131.webp', '2025-12-14', 'Kegiatan Classmeeting hari 6', TRUE),
('Kegiatan Classmeeting hari 4', 'Lainnya', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765678342364.webp', '2025-12-14', 'Kegiatan Classmeeting hari 4', TRUE),
('Hari Buruh Nasional', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777778095/blogsmp/haocpxuwc6vgjmfn6sp8.webp', '2026-05-03', 'Hari Buruh Nasional', TRUE),
('Kegiatan Classmeeting hari 3', 'Lainnya', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765678284335.webp', '2025-12-14', 'Kegiatan Classmeeting hari 3', TRUE),
('Kegiatan Classmeeting hari 5', 'Lainnya', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765678456437.webp', '2025-12-14', 'Kegiatan Classmeeting hari 5', TRUE),
('Isra'' Mi''raj', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1768912662/blogsmp/a14jeypb6eotu4slp5ay.webp', '2026-01-20', 'Isra'' Mi''raj', TRUE),
('Ujian Praktik Melukis', 'Pembelajaran', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777906/blogsmp/xyq30foul5p8odunj4tn.webp', '2026-05-03', 'Ujian Praktik Melukis', TRUE),
('Kegiatan Classmeeting hari 1', 'Lainnya', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765676338176.webp', '2025-12-14', 'Kegiatan Classmeeting hari 1', TRUE),
('Pentas Seni', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1766012383/blogsmp/nahh5srcfvrm5fy40ryu.webp', '2025-12-17', 'Pentas Seni', TRUE),
('Ujian Praktik Olahraga', 'Pembelajaran', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777933/blogsmp/ogsegoen2hr55xbeoilq.webp', '2026-05-03', 'Ujian Praktik Olahraga', TRUE),
('Ujian Praktik Sholat Jenazah', 'Pembelajaran', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777787/blogsmp/tvye7ukn3wnwxmwwnnfu.webp', '2026-05-03', 'Ujian Praktik Sholat Jenazah', TRUE),
('Kegiatan Classmeeting hari 2', 'Lainnya', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765678249153.webp', '2025-12-14', 'Kegiatan Classmeeting hari 2', TRUE),
('Ujian Praktik Melukis', 'Pembelajaran', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777881/blogsmp/vjq290dvidxj9mllax7z.webp', '2026-05-03', 'Ujian Praktik Melukis', TRUE),
('Halal Bihalal', 'Lainnya', 'https://res.cloudinary.com/dxqkfbujc/image/upload/v1777777692/blogsmp/mzisz24bj4ljrejqhvdi.webp', '2026-05-03', 'Halal Bihalal', TRUE),
('PBB Oleh Paskanusa', 'Pembelajaran', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/gallery/1765983798110.webp', '2025-12-17', 'PBB Oleh Paskanusa', TRUE);

-- 4. RESTORE DEWAN GURU & STAF ASLI (20 Orang)
DELETE FROM public.staff;
INSERT INTO public.staff (
  name, role, department, subject, education, photo_url, quote, sort_order, is_active
) VALUES
('Riris Resdiana, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'IPA', 'S.1/Pendidikan Biologi', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765984763893.webp', '', 5, TRUE),
('Sunarti, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'Bahasa Indonesia (Kelas VII), Seni Rupa (Kelas IX)', 'S.1/Pend. Bahasa Indonesia', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765984778474.webp', '', 7, TRUE),
('Diana Tutut, S.IP', 'Guru', 'Guru Mata Pelajaran', 'Prakarya', 'S1/Ilmu Politik', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684103633.webp', '', 15, TRUE),
('Yayuk Sukariyati, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'Bahasa Indonesia', 'S.1/Pend. Bahasa Indonesia', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765683833103.webp', '', 3, TRUE),
('Tia Sucianingsih, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'Bahasa Inggris', 'S.1/Pendidikan Bahasa dan Sastra Indonesia', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684088366.webp', '', 14, TRUE),
('Annisa Rizky Fatihah, S.Si', 'Guru', 'Guru Mata Pelajaran', 'IPA', 'S.1/Fisika', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684239213.webp', '', 18, TRUE),
('Annuris Shoba S.Pd', 'Guru', 'Guru Mata Pelajaran', 'Penjaskes', 'S.1/Pend. Jasmani Kesehatan', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765984790504.webp', '', 8, TRUE),
('Ahmad Irfan Fauzi, S.Ag, S.Sos', 'Guru', 'Guru Mata Pelajaran', 'Bahasa Arab', 'S.Ag, S.Sos', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684162050.webp', '', 17, TRUE),
('Kamal Muhtar, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'Matematika (Kelas IX), Bahasa Jawa (Kelas VII, VIII, IX)', 'S1/Pendidikan Matematika', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684035260.webp', '', 12, TRUE),
('Siti Nur Chasanah, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'Bahasa Inggris', 'S.1/Pend. Bahasa Inggris', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765683962209.webp', '', 9, TRUE),
('Rohmad Yulia Akbar Tri Maulana', 'Staff Administrasi', 'Tenaga Kependidikan', '', 'SMK', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684502078.webp', '', 19, TRUE),
('Drs. Marji', 'Kepala Sekolah', 'Kepala Sekolah', 'Kepemimpinan', 'S2 Pendidikan Islam', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765984713485.webp', '', 1, TRUE),
('Siska Putri Astutik, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'Matematika', 'S.1/ Pendidikan Matematika', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684055947.webp', '', 13, TRUE),
('Khoirul Huda, S.Pd.i', 'Guru', 'Guru Mata Pelajaran', 'PAI', 'S.1/Pend. Agama Islam', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765683981856.webp', '', 10, TRUE),
('Wahyudi, S.E', 'guru', 'Guru Mata Pelajaran', 'IPS', 'S.1/Ekonomi', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765984750825.webp', '', 4, TRUE),
('Dra. Siti Rumikah', 'Guru Mapel', 'Guru Mata Pelajaran', 'Pendidikan Kewarganegaraan', 'S1 Pendidikan', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765681291801.webp', '', 2, TRUE),
('Rohman Firmansyah, S.Kom', 'Guru', 'Guru Mata Pelajaran', 'Informatika', 'S.1/Teknik Informatika', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684125839.webp', '', 16, TRUE),
('M. Akmalul Fahmi, S.Pd', 'Guru', 'Guru Mata Pelajaran', 'IPS', 'S1 Pendidikan IPS', '', '', 20, TRUE),
('Moh. Zainul Anam, S.PdI', 'Guru', 'Guru Mata Pelajaran', 'PAI', 'S.1/Pend. Agama Islam', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765683911925.webp', '', 6, TRUE),
('Kadari Ningsih Ayu Wandira S.PdI', 'Guru', 'Guru Mata Pelajaran', 'Bahasa Ingris (Kelas VII), PAI (Kelas VIII)', 'S.1/Pend. Agama Islam', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/staff/1765684010686.webp', '', 11, TRUE);

-- 5. RESTORE PROGRAM ASLI (6 Program)
DELETE FROM public.programs;
INSERT INTO public.programs (
  slug, title, badge, short_desc, full_desc, icon_name, highlights, schedule, image_url, sort_order, is_active
) VALUES
('sains-teknologi', 'Sains & Teknologi', 'Program Sekolah', 'Pembelajaran sains modern dengan perspektif Islam', 'Pembelajaran sains modern dengan perspektif Islam', 'BrainCircuit', ARRAY['Pembelajaran sains modern dengan perspektif Islam'], 'Terintegrasi Pembelajaran', 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000', 5, TRUE),
('tahfidz-al-qur-an', 'Tahfidz Al-Qur''an', 'Program Sekolah', 'Program hafalan Al-Qur''an dengan target', 'Program hafalan Al-Qur''an dengan target', 'BookOpen', ARRAY['Program hafalan Al-Qur''an dengan target'], 'Terintegrasi Pembelajaran', 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000', 1, TRUE),
('ekstrakulikuler', 'Ekstrakulikuler', 'Program Sekolah', 'Pramuka, Drumband, Hadroh, dan Olahraga', 'Pramuka, Drumband, Hadroh, dan Olahraga', 'Award', ARRAY['Pramuka, Drumband, Hadroh, dan Olahraga'], 'Terintegrasi Pembelajaran', 'https://wkcftuhdevblaniufxvl.supabase.co/storage/v1/object/public/images/bybamn19hpp_1765980927714.webp', 6, TRUE),
('sholat-berjamaah', 'Sholat Berjamaah', 'Program Sekolah', 'Pembiasaan sholat Dhuha dan Dzuhur berjamaah setiap hari', 'Pembiasaan sholat Dhuha dan Dzuhur berjamaah setiap hari', 'Users', ARRAY['Pembiasaan sholat Dhuha dan Dzuhur berjamaah setiap hari'], 'Terintegrasi Pembelajaran', 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000', 3, TRUE),
('pembinaan-akhlak', 'Pembinaan Akhlak', 'Program Sekolah', 'Pembentukan karakter islami melalui pembiasaan dan keteladanan', 'Pembentukan karakter islami melalui pembiasaan dan keteladanan', 'HeartHandshake', ARRAY['Pembentukan karakter islami melalui pembiasaan dan keteladanan'], 'Terintegrasi Pembelajaran', 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000', 4, TRUE),
('pembelajaran-bahasa-arab', 'Pembelajaran Bahasa Arab', 'Program Sekolah', 'Penguasaan bahasa Arab aktif untuk komunikasi dan pemahaman kitab', 'Penguasaan bahasa Arab aktif untuk komunikasi dan pemahaman kitab', 'BookOpen', ARRAY['Penguasaan bahasa Arab aktif untuk komunikasi dan pemahaman kitab'], 'Terintegrasi Pembelajaran', 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000', 2, TRUE);

-- 6. RESTORE FAQ ASLI (5 FAQ)
DELETE FROM public.ppdb_faqs;
INSERT INTO public.ppdb_faqs (
  question, answer, sort_order, is_active
) VALUES
('Apakah pendaftaran PPDB dikenakan biaya?', 'Pendaftaran PPDB tidak dipungut biaya (gratis). Apabila terdapat biaya lain, akan diinformasikan secara resmi oleh pihak sekolah.', 1, TRUE),
('Apakah pendaftaran bisa dilakukan secara offline?', 'bagi calon peserta didik yang mengalami kendala untuk mendaftar secara online, dapat datang langsung ke sekolah pada jam kerja untuk mendapatkan bantuan.', 2, TRUE),
('Ke mana harus bertanya jika mengalami kendala saat PPDB?', 'Orang tua/wali dapat menghubungi panitia PPDB SMP melalui kontak yang tersedia di website atau datang langsung ke sekolah pada jam kerja.', 5, TRUE),
('Bagaimana jika data yang diinput salah?', 'Jika terjadi kesalahan pengisian data, peserta dapat melakukan perbaikan selama masa pendaftaran masih dibuka atau menghubungi panitia PPDB sekolah.', 3, TRUE),
('Bagaimana jika data yang diunggah salah atau tidak jelas?', 'Jika terjadi kesalahan data, peserta dapat memperbaikinya selama masa pendaftaran atau akan diminta melakukan perbaikan oleh panitia PPDB.', 4, TRUE);

-- ============================================================
-- SELESAI ✅ SELURUH DATA ASLI (BERITA, GALERI, GURU, PROFIL) TELAH DIPULIHKAN!
-- ============================================================
