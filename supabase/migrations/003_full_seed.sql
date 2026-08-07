-- ============================================================
-- 003_full_seed.sql  (FIXED - nama kolom sesuai schema)
-- Jalankan di: Supabase Dashboard > SQL Editor
-- Aman dijalankan berkali-kali (ON CONFLICT DO NOTHING / DO UPDATE)
-- ============================================================

-- ============================================================
-- 1. SCHOOL INFO (singleton, id = INTEGER = 1)
-- ============================================================
INSERT INTO school_info (
  id, name, short_name, foundation, npsn, accreditation,
  address, district, regency, province, postal_code,
  phone, whatsapp, email, operating_hours,
  principal_name, principal_title, principal_quote, principal_photo_url,
  tagline, vision, missions, history, google_maps_embed_url,
  facebook_url, instagram_url, youtube_url, tiktok_url
) VALUES (
  1,
  'SMP "Empat Lima" 2 Kedungpring',
  'SMP 45 2 Kedungpring',
  'Yayasan Pendidikan Ma''arif Empat Lima Kalen',
  '20506321',
  'Akreditasi B (Menuju A Unggul)',
  'Jl. Raya Kedungpring - Sugio No. 45, Desa Kalen',
  'Kecamatan Kedungpring',
  'Kabupaten Lamongan',
  'Jawa Timur',
  '62283',
  '(0322) 456-789',
  '6285730219945',
  'info@smp452kedungpring.sch.id',
  'Senin - Sabtu: 07.00 - 14.00 WIB',
  'Drs. H. Ahmad Masrukin, M.Pd.',
  'Kepala SMP "Empat Lima" 2 Kedungpring',
  'Pendidikan di SMP Empat Lima 2 Kedungpring berlandaskan pada integrasi IPTEK dan IMTAK. Kami berkomitmen mencetak generasi santri yang cerdas, santun, mandiri, dan berakhlakul karimah sesuai nilai-nilai An-Nahdliyah.',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  'Unggul dalam Prestasi, Anggun dalam Moralku, Berkarakter Islami & Berwawasan Global',
  'Terwujudnya Lembaga Pendidikan Islam Terkemuka yang Menghasilkan Lulusan Berakhlak Mulia, Unggul dalam Prestasi Akademik & Non-Akademik, serta Berwawasan Lingkungan.',
  ARRAY[
    'Menyelenggarakan pembelajaran Islami berbasis Kurikulum Merdeka yang terintegrasi dengan nilai-nilai An-Nahdliyah.',
    'Membina pembiasaan ibadah Yaumiyah (Sholat Dhuha, Sholat Dzuhur Berjamaah, Istighosah, dan Quranic Hafalan).',
    'Mengembangkan potensi peserta didik secara optimal melalui kegiatan intrakurikuler dan ekstrakurikuler yang berkualitas.',
    'Meningkatkan profesionalisme pendidik dan tenaga kependidikan berbasis teknologi informasi.',
    'Mewujudkan sarana prasarana sekolah yang kondusif, bersih, hijau, dan modern berbasis digital school.',
    'Membangun kerjasama yang harmonis antara sekolah, yayasan, orang tua murid, dan masyarakat.'
  ],
  E'SMP "Empat Lima" 2 Kedungpring didirikan sebagai bentuk komitmen nyata Yayasan Pendidikan Ma''arif Empat Lima Kalen dalam menghadirkan sarana pendidikan menengah pertama berkualitas di wilayah Kedungpring.\n\nSejak awal berdiri, sekolah kami konsisten memadukan Kurikulum Nasional dengan pembiasaan keagamaan khas pesantren, seperti Sholat Dhuha berjamaah, Istighosah rutin, dan hafalan Al-Qur''an Juz 30.\n\nSMP Empat Lima 2 Kedungpring terus berkembang menjadi sekolah pilihan utama masyarakat Kedungpring, Sugio, Kalen, dan sekitarnya.',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8263889123!2d112.1852!3d-7.1895',
  'https://facebook.com/smp452kedungpring',
  'https://instagram.com/smp452_kedungpring',
  'https://youtube.com/@smp452kedungpringofficial',
  'https://tiktok.com/@smp452kedungpring'
) ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  principal_name = EXCLUDED.principal_name,
  tagline = EXCLUDED.tagline,
  whatsapp = EXCLUDED.whatsapp;

-- ============================================================
-- 2. HERO SLIDES  (kolom: bg_image_url bukan bg_image)
-- ============================================================
INSERT INTO hero_slides (id, title, subtitle, badge, description, cta_primary, cta_secondary, bg_image_url, sort_order) VALUES
  (gen_random_uuid(), 'Selamat Datang di Website Resmi SMP "Empat Lima" 2 Kedungpring', 'Yayasan Pendidikan Ma''arif Empat Lima Kalen - Kedungpring, Lamongan', 'Tahun Ajaran 2027/2028', 'Membentuk Generasi Cerdas Berakhlakul Karimah, Berprestasi Tinggi, dan Memegang Teguh Nilai-Nilai Keislaman An-Nahdliyah.', 'Pendaftaran PPDB Online', 'Jelajahi Profil Sekolah', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop', 1),
  (gen_random_uuid(), 'Penerimaan Peserta Didik Baru (PPDB) Telah Dibuka!', 'Gelombang 1: Dapatkan Beasiswa Khusus Bebas Biaya Pendaftaran & Seragam', 'PPDB Online Buka', 'Mari bergabung bersama keluarga besar SMP 45 2 Kedungpring. Lingkungan belajar yang asri, sarana digital modern, dan pembinaan karakter Islami.', 'Formulir PPDB', 'Informasi Alur Pendaftaran', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop', 2),
  (gen_random_uuid(), 'Program Unggulan Tahfidz Al-Qur''an & Pembiasaan Karakter', 'Pembiasaan Sholat Dhuha, Dzuhur Berjamaah & Amaliyah Yaumiyah', 'Pendidikan Karakter', 'Setiap siswa dibimbing untuk menghafal Juz 30 Al-Qur''an serta dibekali pemahaman agama Islam yang teduh, inklusif, dan berkemajuan.', 'Lihat Program Unggulan', 'Jadwal Extrakurikuler', 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop', 3);

-- ============================================================
-- 3. NEWS  (kolom: published_date, author_name, read_time_minutes, image_url, is_featured, is_published)
-- ============================================================
INSERT INTO news (slug, title, category, published_date, author_name, author_role, read_time_minutes, image_url, summary, content, tags, is_featured, is_published) VALUES
  ('pembukaan-ppdb-tahun-ajaran-2027-2028', 'Resmi Dibuka! Penerimaan Peserta Didik Baru (PPDB) SMP Empat Lima 2 Kedungpring Tahun Ajaran 2027/2028', 'Pengumuman', '2027-08-02', 'Panitia PPDB', 'Humas Sekolah', 3, 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop', 'SMP "Empat Lima" 2 Kedungpring secara resmi membuka pendaftaran peserta didik baru gelombang 1 dengan berbagai kemudahan dan fasilitas beasiswa menarik.', '<p>Yayasan Pendidikan Ma''arif Empat Lima Kalen Kedungpring mengumumkan pembukaan PPDB Tahun Ajaran 2027/2028.</p><h3>Keuntungan Mendaftar Gelombang 1:</h3><ul><li><strong>Bebas Biaya Pendaftaran</strong> bagi 50 pendaftar pertama.</li><li><strong>Gratis Seragam Olahraga</strong> sebagai bentuk apresiasi wali murid.</li></ul>', ARRAY['PPDB','Pendaftaran','Kedungpring','Siswa Baru'], true, true),
  ('juara-1-lomba-pencak-silat-pagar-nusa-kabupaten-lamongan', 'Siswa SMP 45 2 Kedungpring Sabet Juara 1 Lomba Pencak Silat Pagar Nusa Tingkat Kabupaten Lamongan', 'Prestasi', '2026-07-28', 'Tim Media Sekolah', 'Redaksi Ekskul', 4, 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop', 'Ananda Muhammad Faiz (Kelas VIII-A) berhasil meraih Juara 1 Kategori Tanding Remaja Putra pada Kejuaraan Pencak Silat Pagar Nusa Kabupaten Lamongan.', '<p>Muhammad Faiz, siswa kelas VIII-A, berhasil membawa pulang medali emas dan tropi Juara 1 pada ajang Kejuaraan Pencak Silat Pagar Nusa Lamongan 2026.</p>', ARRAY['Prestasi','PagarNusa','PencakSilat','Lamongan'], true, true),
  ('peringatan-tahun-baru-islam-1448-h-dan-santunan-anak-yatim', 'Gema Muharram: SMP 45 2 Kedungpring Gelar Istighosah dan Santunan Puluhan Anak Yatim', 'Keagamaan & Tahfidz', '2026-07-20', 'Siti Rahmawati, S.Pd.I.', 'Guru Agama & Pembina IPNU-IPPNU', 3, 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop', 'Dalam rangka memperingati 1 Muharram 1448 H, civitas akademika menyelenggarakan istighosah dan pembagian santunan.', '<p>Kemeriahan dan keberkahan menyelimuti Musholla Ma''arif SMP "Empat Lima" 2 Kedungpring pada peringatan 1 Muharram 1448 H.</p>', ARRAY['Muharram','Santunan','Keagamaan','Maarif'], false, true),
  ('pelatihan-coding-dan-literasi-digital-bersama-mahasiswa', 'Tingkatkan Skill Abad 21, Siswa Mengikuti Pelatihan Dasar Coding dan Desain Grafis Digital', 'Kegiatan', '2026-07-12', 'Budi Santoso, S.Kom.', 'Guru TIK & IT Manager', 3, 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop', 'Program Smart School SMP 45 2 Kedungpring mengadakan workshop pemograman dasar HTML/CSS dan pembuatan konten digital kreatif.', '<p>Workshop "Digital Literacy & Basic Coding for Youth" diikuti oleh 60 perwakilan siswa kelas VII dan VIII.</p>', ARRAY['DigitalSchool','Coding','Workshop','TIK'], false, true),
  ('kegiatan-perkemahan-jumat-sabtu-gudep-maarif', 'Membentuk Jiwa Kemandirian, Gudep Pramuka Ma''arif Gelar Perkemahan Perjusami', 'Kegiatan', '2026-07-05', 'Tim Pembina Pramuka', 'Kwartir Ranting', 4, 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1200&auto=format&fit=crop', 'Kegiatan Perkemahan Jumat-Sabtu (Perjusami) berlangsung khidmat di lapangan sekolah.', '<p>Gugus Depan Pramuka Ma''arif SMP 45 2 Kedungpring menyelenggarakan Perjusami untuk menyambut calon penggalang baru.</p>', ARRAY['Pramuka','Perjusami','Karakter','Kedungpring'], false, true)
ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- 4. PROGRAMS  (kolom: slug wajib ada, full_desc bukan fullDesc)
-- ============================================================
INSERT INTO programs (slug, title, badge, short_desc, full_desc, icon_name, highlights, schedule, image_url, sort_order) VALUES
  ('tahfidz', 'Program Tahfidz Al-Qur''an Juz 30 & Tilawah', 'Program Unggulan Utama', 'Bimbingan intensif setoran hafalan Juz 30 dengan tartil, tajwid, dan sertifikasi kelulusan hafiz remaja.', 'Program Tahfidz Al-Qur''an dirancang untuk menanamkan kecintaan siswa terhadap Kitab Suci sejak usia remaja. Dibimbing langsung oleh ustadz/ustadzah hafidz Quran, siswa memiliki target kelulusan minimal hafal Juz 30.', 'BookOpen', ARRAY['Bimbingan Setoran Hafalan Setiap Pagi (07.00 - 07.45 WIB)','Pengujian Munaqosyah bersama LP Ma''arif','Wisuda Tahfidz Tahunan & Beasiswa Bebas SPP','Ijazah Khusus Sanad Hafalan Juz 30'], 'Setiap Hari Senin - Jumat (Pagi Sebelum KBM)', 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000&auto=format&fit=crop', 1),
  ('pembiasaan-karakter', 'Pembiasaan Sholat Dhuha & Amaliyah An-Nahdliyah', 'Pendidikan Karakter', 'Pelaksanaan Sholat Dhuha berjamaah, Sholat Dzuhur tepat waktu, Istighosah, serta pembiasaan 5S.', 'Karakter peserta didik dibentuk melalui rutinitas ibadah harian. Seluruh siswa dan guru berkumpul di Musholla Ma''arif untuk melaksanakan sholat Dhuha berjamaah sebelum KBM dimulai.', 'HeartHandshake', ARRAY['Sholat Dhuha Berjamaah & Dzuhur Tepat Waktu di Musholla','Pembiasaan Pembacaan Asmaul Husna, Yasin & Tahlil Ringkas','Bimbingan Aqidah Akhlak & Ke-NU-an','Penyaluran Zakat, Infaq Jumat Berkah & Bakti Sosial'], 'Rutin Setiap Hari Efektif Sekolah', 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000&auto=format&fit=crop', 2),
  ('smart-learning', 'Smart Class & Digital School Learning', 'Inovasi Pembelajaran', 'Penggunaan media pembelajaran interaktif berbasis LCD projector, Google Classroom, E-Library, dan pelatihan TIK.', 'SMP Empat Lima 2 Kedungpring memadukan kekhasan pendidikan Islam dengan kemajuan teknologi modern. Setiap kelas dilengkapi LCD Projector & koneksi WiFi untuk mendukung Blended Learning dan CBT.', 'Laptop', ARRAY['Ujian Semester Berbasis Computer Based Test (CBT)','Akses Perpustakaan Digital E-Book & Jurnal','Laboratorium Komputer Modern Ber-AC dengan 30+ Unit PC','Ekstrakurikuler Multimedia, IT, & Desain'], 'Terintegrasi pada Setiap Mata Pelajaran', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop', 3),
  ('olimpiade-sains', 'Bimbingan Intensif Olimpiade Sains & Matematika (OSN)', 'Akademik Unggul', 'Klub sains dan matematika untuk mempersiapkan siswa berprestasi di ajang OSN, KSM Ma''arif, dan kompetisi tingkat provinsi.', 'Bagi peserta didik yang berbakat di bidang matematika, IPA, dan IPS, sekolah menyediakan kelas bimbingan khusus dengan modul soal tingkat tinggi (HOTS).', 'BrainCircuit', ARRAY['Modul Pemantapan Soal OSN & KSM Terbaru','Tryout Berkala & Simulasi Ujian Kompetisi','Pendampingan Bebas Biaya Pendaftaran Lomba','Beasiswa dari Yayasan bagi Pemenang'], 'Setiap Hari Selasa & Kamis (14.00 - 15.30 WIB)', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop', 4)
ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- 5. STAFF  (kolom: photo_url bukan photo)
-- ============================================================
INSERT INTO staff (name, role, department, subject, education, photo_url, quote, sort_order) VALUES
  ('Drs. H. Ahmad Masrukin, M.Pd.', 'Kepala Sekolah', 'Kepala Sekolah', 'Pendidikan Agama Islam & Ke-NU-an', 'S2 Manajemen Pendidikan - Universitas Negeri Surabaya', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop', 'Mendidik dengan hati, membimbing dengan keteladanan.', 1),
  ('Hj. Siti Mahmudah, S.Pd., M.M.', 'Wakil Kepala Sekolah Bidang Kurikulum', 'Guru Mata Pelajaran', 'Bahasa Indonesia & Literasi', 'S1 Pendidikan Bahasa Indonesia - Unesa', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop', 'Membaca membuka jendela dunia, menulis mengukir sejarah.', 2),
  ('Ahmad Nur Mufid, S.Si.', 'Waka Kesiswaan & Guru IPA', 'Guru Mata Pelajaran', 'Ilmu Pengetahuan Alam (IPA)', 'S1 Fisika - Universitas Brawijaya', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop', 'Kedisiplinan dan rasa ingin tahu adalah kunci keunggulan.', 3),
  ('Siti Rahmawati, S.Pd.I.', 'Guru PAI & Pembina IPNU-IPPNU', 'Guru Mata Pelajaran', 'Pendidikan Agama Islam & Quran Hadits', 'S1 Pendidikan Agama Islam - IAIN Kediri', 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop', 'Menanamkan akhlakul karimah adalah fondasi utama belajar.', 4),
  ('Budi Santoso, S.Kom.', 'Guru TIK & Pengelola Laboratorium Komputer', 'Guru Mata Pelajaran', 'Informatika & Prakarya Digital', 'S1 Teknik Informatika - UPN Veteran Jatim', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', 'Teknologi di tangan anak saleh akan membawa kemaslahatan.', 5),
  ('Dewi Anggraini, S.Pd.', 'Guru Bahasa Inggris', 'Guru Mata Pelajaran', 'Bahasa Inggris', 'S1 Pendidikan Bahasa Inggris - Universitas Islam Lamongan', 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop', 'Mastering English bridges local wisdom to global reach.', 6),
  ('M. Ali Shodiq, S.Pd.', 'Guru Matematika & Pembina Pramuka', 'Guru Mata Pelajaran', 'Matematika', 'S1 Pendidikan Matematika - Unisda Lamongan', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop', 'Matematika melatih logika berpikir sistematis dan jujur.', 7),
  ('Rina Fatmawati, S.Psi.', 'Guru Bimbingan Konseling (BK)', 'Guru BK', 'Bimbingan Konseling & Karir', 'S1 Psikologi - Universitas Airlangga', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop', 'Setiap anak unik dan berharga. Kami siap mendengarkan.', 8),
  ('Haji Bambang Sugeng, S.E.', 'Kepala Tata Usaha (TU)', 'Tenaga Kependidikan', NULL, 'S1 Ekonomi - Universitas Wijaya Putra', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop', 'Pelayanan administrasi ramah, tepat, dan transparan.', 9);

-- ============================================================
-- 6. GALLERY  (kolom: event_date bukan date)
-- ============================================================
INSERT INTO gallery (title, category, image_url, event_date, description) VALUES
  ('Pembukaan Tahun Ajaran Baru & MATSAMA Ma''arif', 'Kegiatan', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop', '2026-07-15', 'Masa Ta''arif Siswa Madrasah/Sekolah (MATSAMA) pengenalan lingkungan SMP 45 2 Kedungpring.'),
  ('Upacara Bendera Senin & Penghargaan Siswa Berprestasi', 'Prestasi', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop', '2026-07-21', 'Penyerahan piala dan sertifikat penghargaan juara pencak silat Pagar Nusa pada upacara Senin.'),
  ('Pembiasaan Sholat Dhuha Berjamaah di Musholla', 'Keagamaan', 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000&auto=format&fit=crop', '2026-07-25', 'Siswa khusyuk melaksanakan Sholat Dhuha berjamaah dilanjutkan pembacaan Asmaul Husna.'),
  ('Laboratorium Komputer Modern CBT & Coding', 'Fasilitas', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop', '2026-07-10', 'Ruang Lab Komputer dengan PC modern dan AC untuk menunjang ujian dan pembelajaran digital.'),
  ('Atraksi Drumband Bahana Empat Lima pada Pawai Karnaval', 'Ekstrakurikuler', 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop', '2025-08-17', 'Grup Drumband SMP 45 2 Kedungpring unjuk kebolehan pada HUT RI Kecamatan Kedungpring.'),
  ('Pondok Ramadhan & Khatmil Quran Bersama Guru', 'Keagamaan', 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000&auto=format&fit=crop', '2026-04-02', 'Kegiatan Tadarus Al-Quran dan kajian kitab fiqih praktis selama bulan suci Ramadhan.'),
  ('Gedung Sekolah Asri & Ruang Kelas Sejuk', 'Fasilitas', 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop', '2026-06-01', 'Gedung bertingkat dengan konsep ramah lingkungan, banyak pepohonan rindang dan taman bersih.'),
  ('Pertandingan Futsal Persahabatan Antar Pelajar', 'Ekstrakurikuler', 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop', '2026-05-14', 'Semangat sportivitas siswa tim futsal SMP 45 2 Kedungpring di lapangan olahraga sekolah.');

-- ============================================================
-- 7. FACILITIES  (kolom: count_label bukan count)
-- ============================================================
INSERT INTO facilities (name, description, image_url, count_label, sort_order) VALUES
  ('Ruang Kelas Nyaman & Multimedia Projector', 'Seluruh ruang kelas dilengkapi dengan kipas/AC, pencahayaan alami yang baik, serta LCD projector untuk pembelajaran visual.', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop', '12 Ruang Kelas', 1),
  ('Laboratorium Komputer & Bahasa Digital', 'Dilengkapi 30+ unit komputer ber-spesifikasi tinggi, koneksi internet serat optik, dan software pendukung pembelajaran.', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop', '1 Unit Lab Komputer', 2),
  ('Musholla Ma''arif Berkapasitas 400 Jamaah', 'Tempat ibadah utama yang bersih dan tenang untuk sholat Dhuha, Dzuhur berjamaah, dan pengajian rutin.', 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop', '1 Musholla Utama', 3),
  ('Perpustakaan & Ruang Baca Literasi', 'Koleksi ribuan buku pelajaran, novel edukatif, ensiklopedia Islami, majalah, dan pojok baca digital.', 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop', '1 Perpustakaan', 4),
  ('Lapangan Olahraga Serbaguna', 'Lapangan luas untuk upacara bendera, pertandingan voli, basket, futsal, dan latihan pencak silat.', 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop', '1 Lapangan Luas', 5),
  ('Kantin Sehat & Dapur Gizi', 'Menyediakan makanan dan minuman higienis, halal, dan terjangkau yang dikontrol kebersihannya oleh pihak sekolah.', 'https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=800&auto=format&fit=crop', 'Kantin Sekolah Higenis', 6);

-- ============================================================
-- 8. EXTRACURRICULARS  (kolom: slug wajib)
-- ============================================================
INSERT INTO extracurriculars (slug, name, coach, schedule, description, icon_name, achievements, image_url, sort_order) VALUES
  ('pramuka', 'Pramuka Gudep Ma''arif 45.02', 'M. Ali Shodiq, S.Pd.', 'Setiap Jumat (14.00 - 16.00 WIB)', 'Ekstrakurikuler wajib pembentuk kedisiplinan, kemandirian, dan cinta tanah air berbasis Dasa Darma.', 'Compass', ARRAY['Juara 2 Lomba Tingkat Penggalang Kab. Lamongan 2025','Peserta Perkemahan Ma''arif Jawa Timur'], 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=800&auto=format&fit=crop', 1),
  ('pagar-nusa', 'Pencak Silat Pagar Nusa NU', 'Kang Yudi (Pelatih Daerah)', 'Setiap Sabtu Sore & Minggu Pagi', 'Seni bela diri khas Nahdlatul Ulama yang mengajarkan ketangkasan fisik, pertahanan diri, dan kerendahan hati.', 'Shield', ARRAY['Juara 1 Kejuaraan Pagar Nusa Lamongan 2026','Juara 3 Tanding Remaja Putri 2025'], 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop', 2),
  ('ipnu-ippnu', 'PK IPNU & IPPNU Ranting Sekolah', 'Siti Rahmawati, S.Pd.I.', 'Setiap Sabtu Minggu Ke-2 & Ke-4', 'Wadah organisasi pelajar Nahdlatul Ulama untuk mengasah kepemimpinan, public speaking, dan keorganisasian.', 'Users', ARRAY['Pimpinan Komisariat Terbaik Ma''arif Kedungpring','Penyelenggara Bakti Sosial Ramadan'], 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop', 3),
  ('hadrah', 'Seni Hadrah & Banjari "Bahana Empat Lima"', 'Ustadz Ahmad Faruq', 'Setiap Rabu Sore (15.00 WIB)', 'Grup musik Islami pelestari seni sholawat khas An-Nahdliyah dengan kombinasi pukulan reban moderen.', 'Music', ARRAY['Juara Harapan 1 Festival Banjari Pelajar Kedungpring','Pengisi Acara Pengajian Yayasan'], 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop', 4),
  ('pmr', 'PMR (Palang Merah Remaja)', 'Ners Kusuma, A.Md.Kep.', 'Setiap Kamis Sore (15.00 WIB)', 'Bimbingan pertolongan pertama, kesehatan remaja, dan bakti kemanusiaan lingkungan sekolah.', 'Cross', ARRAY['Anggota UKS Percontohan Kecamatan','Petugas Kesehatan Upacara Bendera'], 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop', 5),
  ('it-club', 'IT & Web Media Team', 'Budi Santoso, S.Kom.', 'Setiap Selasa Sore (14.30 WIB)', 'Klub jurnalistik digital, fotografi, videografi konten kreatif, dan pemrograman komputer dasar.', 'Camera', ARRAY['Pengelola Media Sosial & Dokumen Website Sekolah','Pemenang Lomba Desain Poster Edukasi'], 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop', 6),
  ('volleyball', 'Bola Voli & Futsal', 'Rendy Kurniawan, S.Pd.', 'Setiap Senin & Kamis Sore', 'Pembinaan stamina, kerja sama tim, dan ketangkasan olahraga bola voli serta futsal antar sekolah.', 'Activity', ARRAY['Juara 2 Turnamen Futsal SMP Se-Kedungpring','Tim Voli Putri Semifinalis Lamongan Cup'], 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=800&auto=format&fit=crop', 7)
ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- 9. TESTIMONIALS  (kolom: photo_url bukan photo)
-- ============================================================
INSERT INTO testimonials (name, role, quote, photo_url, sort_order) VALUES
  ('Ahmad Khoirul Anam, S.T.', 'Alumni Angkatan 2018 (Sekarang Software Engineer)', 'Fondasi agama yang kuat dan kedisiplinan belajar dari para guru SMP 45 2 Kedungpring menjadi modal berharga saya hingga bisa sukses di dunia profesional IT.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', 1),
  ('Hj. Nurul Hidayah', 'Wali Murid Ananda Annisa (Kelas IX-A)', 'Sangat bersyukur menyekolahkan anak di sini. Selain perkembangan akademiknya bagus, anak saya sekarang rajin Sholat Dhuha dan membaca Al-Quran tanpa perlu disuruh.', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop', 2),
  ('Siti Nur Aini', 'Siswa Kelas IX / Peraih Juara MTQ Pelajar', 'Guru-gurunya sangat sabar dan mendukung bakat siswa. Tempat belajarnya adem, banyak teman, dan ekstra Pagar Nusa nya keren banget!', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop', 3);

-- ============================================================
-- 10. AGENDAS  (kolom: event_date, event_time_start, event_time_end, bukan date/time)
-- ============================================================
INSERT INTO agendas (title, event_date, event_time_start, event_time_end, location, category, description) VALUES
  ('Upacara Bendera & Apel Pagi Hari Senin', '2027-08-11', '07:00', '07:45', 'Lapangan Utama Sekolah', 'Rutin', 'Upacara bendera wajib setiap Senin pagi diikuti seluruh siswa, guru, dan staf sekolah.'),
  ('Rapat Koordinasi Guru & Wali Kelas', '2027-08-14', '13:00', '15:00', 'Ruang Guru', 'Rapat', 'Koordinasi persiapan penilaian tengah semester dan evaluasi program kesiswaan.'),
  ('Peringatan HUT Kemerdekaan RI ke-82', '2027-08-17', '07:00', '10:00', 'Lapangan Upacara & Kelas', 'Event Nasional', 'Upacara bendera HUT RI dilanjutkan lomba-lomba kreativitas antar kelas.'),
  ('Sholat Dhuha & Istighosah Bersama', '2027-08-20', '07:00', '07:30', 'Musholla Ma''arif', 'Keagamaan', 'Sholat Dhuha dan pembacaan Asmaul Husna bersama seluruh civitas akademika.'),
  ('Latihan Gabungan Pramuka Gudep', '2027-08-22', '14:00', '16:00', 'Lapangan & Aula Sekolah', 'Ekskul', 'Latihan gabungan persiapan lomba Pramuka tingkat kecamatan.');

-- ============================================================
-- 11. PPDB FAQS
-- ============================================================
INSERT INTO ppdb_faqs (question, answer, sort_order) VALUES
  ('Bagaimana cara mendaftar di SMP Empat Lima 2 Kedungpring?', 'Pendaftaran dapat dilakukan dengan 2 cara: 1) Secara Online melalui menu PPDB di website ini, atau 2) Secara Offline dengan datang langsung ke Sekretariat PPDB setiap hari kerja (07.30 - 13.00 WIB).', 1),
  ('Apa saja syarat berkas yang harus disiapkan untuk PPDB?', 'Berkas yang perlu disiapkan: 1) Fotocopy Ijazah SD/MI/SKL (3 lembar), 2) Fotocopy Kartu Keluarga (3 lembar), 3) Fotocopy Akta Kelahiran (3 lembar), 4) Pas Foto 3x4 latar biru/merah (4 lembar), 5) Fotocopy KIP/PKH/KKS (jika memiliki).', 2),
  ('Apakah ada potongan biaya atau beasiswa pendaftaran?', 'Ya! Bagi pendaftar Gelombang 1 mendapatkan Bebas Uang Pendaftaran dan Gratis Seragam Olahraga. Tersedia juga Beasiswa Tahfidz Quran, Beasiswa Siswa Berprestasi, dan Beasiswa Kemitraan Yayasan Ma''arif.', 3),
  ('Apakah sekolah menyediakan fasilitas antar jemput siswa?', 'Sekolah memiliki kerjasama angkutan siswa untuk rute desa di wilayah Kedungpring, Sugio, Kalen, dan sekitarnya.', 4),
  ('Bagaimana sistem pembayaran SPP dan biaya operasional sekolah?', 'SMP Empat Lima 2 Kedungpring berkomitmen memberikan pendidikan berkualitas yang sangat terjangkau. Rincian biaya SPP bulanan sangat bersahabat dan transparan tanpa ada pungutan liar.', 5);

-- ============================================================
-- SELESAI ✅
-- ============================================================
