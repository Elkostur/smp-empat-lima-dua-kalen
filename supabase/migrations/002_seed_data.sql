-- ============================================================
-- 002_seed_data.sql
-- Initial seed data for SMP Empat Lima 2 Kedungpring
-- ============================================================

-- 1. School Info (Singleton)
INSERT INTO public.school_info (
  id, name, short_name, foundation, npsn, accreditation,
  address, district, regency, province, postal_code, phone, whatsapp, email,
  operating_hours, principal_name, principal_title, principal_quote, principal_photo_url,
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
    'Membina pembiasaan ibadah Yaumiyah (Sholat Dhuha, Sholat Dzuhur Berjamaah, Istighosah, dan Qur`anic Hafalan).',
    'Mengembangkan potensi peserta didik secara optimal melalui kegiatan intrakurikuler dan ekstrakurikuler yang berkualitas.',
    'Meningkatkan profesionalisme pendidik dan tenaga kependidikan berbasis teknologi informasi.',
    'Mewujudkan sarana prasarana sekolah yang kondusif, bersih, hijau, dan modern berbasis digital school.',
    'Membangun kerjasama yang harmonis antara sekolah, yayasan, orang tua murid, dan masyarakat.'
  ],
  'SMP "Empat Lima" 2 Kedungpring didirikan sebagai bentuk komitmen nyata Yayasan Pendidikan Ma''arif Empat Lima Kalen dalam menghadirkan sarana pendidikan menengah pertama berkualitas berbasis nilai-nilai Islam Ahlussunnah wal Jama''ah An-Nahdliyah di wilayah Kedungpring dan sekitarnya.\n\nSejak awal berdiri, sekolah kami konsisten memadukan Kurikulum Nasional (Kurikulum Merdeka) dengan pembiasaan keagamaan khas pesantren, seperti Sholat Dhuha berjamaah, Istighosah rutin, hafalan Al-Qur''an Juz 30, dan penguatan karakter kemandirian santri.\n\nDidukung oleh tenaga pendidik profesional lulusan perguruan tinggi ternama serta sarana pendukung digital, SMP Empat Lima 2 Kedungpring terus berkembang menjadi sekolah pilihan utama masyarakat Kedungpring, Sugio, Kalen, dan sekitarnya.',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8263889123!2d112.1852!3d-7.1895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTEnMjIuMiJTIDExM8KwMTEnMDYuNyJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
  'https://facebook.com/smp452kedungpring',
  'https://instagram.com/smp452_kedungpring',
  'https://youtube.com/@smp452kedungpringofficial',
  'https://tiktok.com/@smp452kedungpring'
) ON CONFLICT (id) DO NOTHING;

-- 2. School Stats
INSERT INTO public.school_stats (label, value, suffix, icon_name, sort_order) VALUES
  ('Peserta Didik Aktif', 342, '+', 'Users', 1),
  ('Guru & Tenaga Pendidik', 28, ' Orang', 'GraduationCap', 2),
  ('Ekstrakurikuler Wajib/Pilihan', 12, ' Cabang', 'Trophy', 3),
  ('Prestasi Tingkat Kab./Prov.', 48, '+ Tropi', 'Award', 4),
  ('Alumni Melanjutkan ke SMA/MA Favorit', 98, '%', 'TrendingUp', 5);

-- 3. Hero Slides
INSERT INTO public.hero_slides (title, subtitle, badge, description, cta_primary, cta_secondary, bg_image_url, sort_order) VALUES
  (
    'Selamat Datang di Website Resmi SMP "Empat Lima" 2 Kedungpring',
    'Yayasan Pendidikan Ma''arif Empat Lima Kalen - Kedungpring, Lamongan',
    'Tahun Ajaran 2027/2028',
    'Membentuk Generasi Cerdas Berakhlakul Karimah, Berprestasi Tinggi, dan Memegang Teguh Nilai-Nilai Keislaman An-Nahdliyah.',
    'Pendaftaran PPDB Online',
    'Jelajahi Profil Sekolah',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop',
    1
  ),
  (
    'Penerimaan Peserta Didik Baru (PPDB) Telah Dibuka!',
    'Gelombang 1: Dapatkan Beasiswa Khusus Bebas Biaya Pendaftaran & Seragam',
    'PPDB Online Buka',
    'Mari bergabung bersama keluarga besar SMP 45 2 Kedungpring. Lingkungan belajar yang asri, sarana digital modern, dan pembinaan karakter Islami.',
    'Formulir PPDB',
    'Informasi Alur Pendaftaran',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop',
    2
  ),
  (
    'Program Unggulan Tahfidz Al-Qur''an & Pembiasaan Karakter',
    'Pembiasaan Sholat Dhuha, Dzuhur Berjamaah & Amaliyah Yaumiyah',
    'Pendidikan Karakter',
    'Setiap siswa dibimbing untuk menghafal Juz 30 Al-Qur''an serta dibekali pemahaman agama Islam yang teduh, inklusif, dan berkemajuan.',
    'Lihat Program Unggulan',
    'Jadwal Extrakurikuler',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop',
    3
  );

-- 4. News
INSERT INTO public.news (slug, title, category, published_date, author_name, author_role, read_time_minutes, image_url, summary, content, tags, is_featured, is_published) VALUES
  (
    'pembukaan-ppdb-tahun-ajaran-2027-2028',
    'Resmi Dibuka! Penerimaan Peserta Didik Baru (PPDB) SMP Empat Lima 2 Kedungpring Tahun Ajaran 2027/2028',
    'Pengumuman',
    '2027-08-02',
    'Panitia PPDB',
    'Humas Sekolah',
    3,
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    'SMP "Empat Lima" 2 Kedungpring secara resmi membuka pendaftaran peserta didik baru gelombang 1 dengan berbagai kemudahan dan fasilitas beasiswa menarik.',
    '<p>Yayasan Pendidikan Ma''arif Empat Lima Kalen Kedungpring mengumumkan pembukaan Penerimaan Peserta Didik Baru (PPDB) untuk Tahun Ajaran 2027/2028. Pendaftaran gelombang pertama berlangsung mulai tanggal 1 Agustus hingga 30 September 2027.</p><h3>Keuntungan Mendaftar di Gelombang 1:</h3><ul><li><strong>Bebas Biaya Pendaftaran:</strong> Tanpa uang pendaftaran awal bagi 50 pendaftar pertama.</li><li><strong>Gratis Seragam Olahraga:</strong> Diberikan secara cuma-cuma sebagai bentuk apresiasi kepercayaan wali murid.</li><li><strong>Beasiswa Tahfidz & Prestasi:</strong> Potongan biaya pendidikan bagi siswa penghafal Al-Qur''an dan pemenang lomba tingkat kabupaten.</li></ul><p>Pendaftaran dapat dilakukan secara langsung di Sekretariat PPDB SMP 45 2 Kedungpring setiap jam kerja (07.30 - 13.00 WIB) atau melalui laman PPDB Online resmi website ini.</p>',
    ARRAY['PPDB', 'Pendaftaran', 'Kedungpring', 'Siswa Baru'],
    TRUE,
    TRUE
  ),
  (
    'juara-1-lomba-pencak-silat-pagar-nusa-kabupaten-lamongan',
    'Siswa SMP 45 2 Kedungpring Sabet Juara 1 Lomba Pencak Silat Pagar Nusa Tingkat Kabupaten Lamongan',
    'Prestasi',
    '2026-07-28',
    'Tim Media Sekolah',
    'Redaksi Ekskul',
    4,
    'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop',
    'Ananda Muhammad Faiz (Kelas VIII-A) berhasil meraih Juara 1 Kategori Tanding Remaja Putra pada Kejuaraan Pencak Silat Pagar Nusa Kabupaten Lamongan.',
    '<p>Prestasi membanggakan kembali diukir oleh pesilat muda dari ekstrakurikuler Pagar Nusa SMP "Empat Lima" 2 Kedungpring. Muhammad Faiz, siswa kelas VIII-A, berhasil membawa pulang medali emas dan tropi Juara 1 pada ajang Kejuaraan Pencak Silat Pagar Nusa Lamongan 2026.</p><p>Kepala Sekolah Drs. H. Ahmad Masrukin, M.Pd. menyampaikan rasa syukur dan apresiasi setinggi-tingginya kepada ananda Faiz dan pembina ekstrakurikuler.</p>',
    ARRAY['Prestasi', 'PagarNusa', 'PencakSilat', 'Lamongan'],
    TRUE,
    TRUE
  ),
  (
    'peringatan-tahun-baru-islam-1448-h-dan-santunan-anak-yatim',
    'Gema Muharram: SMP 45 2 Kedungpring Gelar Istighosah dan Santunan Puluhan Anak Yatim',
    'Keagamaan & Tahfidz',
    '2026-07-20',
    'Siti Rahmawati, S.Pd.I.',
    'Guru Agama & Pembina IPNU-IPPNU',
    3,
    'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop',
    'Dalam rangka memperingati 1 Muharram 1448 H, seluruh civitas akademika bersama Pengurus Yayasan Ma''arif menyelenggarakan istighosah dan pembagian santunan.',
    '<p>Kemeriahan dan keberkahan menyelimuti Musholla Ma''arif SMP "Empat Lima" 2 Kedungpring. Seluruh jajaran guru, pengurus yayasan, pengurus OSIS, IPNU, dan IPPNU berkumpul melantunkan sholawat dan doa bersama dalam rangka menyambut Tahun Baru Islam 1448 H.</p>',
    ARRAY['Muharram', 'Santunan', 'Keagamaan', 'Maarif'],
    FALSE,
    TRUE
  );

-- 5. Programs
INSERT INTO public.programs (slug, title, badge, short_desc, full_desc, icon_name, highlights, schedule, image_url, sort_order) VALUES
  (
    'tahfidz',
    'Program Tahfidz Al-Qur''an Juz 30 & Tilawah',
    'Program Unggulan Utama',
    'Bimbingan intensif setoran hafalan Juz 30 dengan tartil, tajwid, dan sertifikasi kelulusan hafiz remaja.',
    'Program Tahfidz Al-Qur''an dirancang untuk menanamkan kecintaan siswa terhadap Kitab Suci sejak usia remaja. Dibimbing langsung oleh ustadz/ustadzah hafidz Qur''an, siswa memiliki target kelulusan minimal hafal Juz 30 beserta doa-doa harian dan tajwid yang fasih.',
    'BookOpen',
    ARRAY[
      'Bimbingan Setoran Hafalan Setiap Pagi (07.00 - 07.45 WIB)',
      'Pengujian Ujian Munaqosyah Bereputasi bersama LP Ma''arif',
      'Wisuda Tahfidz Tahunan & Beasiswa Bebas SPP bagi yang Lulus Target',
      'Ijazah Khusus Sanad Hafalan Juz 30'
    ],
    'Setiap Hari Senin - Jumat (Pagi Sebelum KBM)',
    'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000&auto=format&fit=crop',
    1
  ),
  (
    'pembiasaan-karakter',
    'Pembiasaan Sholat Dhuha & Amaliyah An-Nahdliyah',
    'Pendidikan Karakter',
    'Pelaksanaan Sholat Dhuha berjamaah, Sholat Dzuhur tepat waktu, Istighosah, serta pembiasaan 5S.',
    'Karakter peserta didik dibentuk melalui rutinitas ibadah harian. Seluruh siswa dan guru berkumpul di Musholla Ma''arif untuk melaksanakan sholat Dhuha berjamaah dilanjutkan membaca Surat Yasin, Waqi''ah, atau Asmaul Husna sebelum kegiatan KBM dimulai.',
    'HeartHandshake',
    ARRAY[
      'Sholat Dhuha Berjamaah & Dzuhur Tepat Waktu di Musholla Sekolah',
      'Pembiasaan Pembacaan Asmaul Husna, Yasin & Tahlil Ringkas',
      'Bimbingan Aqidah Akhlak & Ke-NU-an Berlandaskan Ahlussunnah wal Jama''ah An-Nahdliyah',
      'Penyaluran Zakat, Infaq Jumat Berkah & Bakti Sosial Masyarakat'
    ],
    'Rutin Setiap Hari Efektif Sekolah',
    'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000&auto=format&fit=crop',
    2
  );

-- 6. PPDB Period
INSERT INTO public.ppdb_periods (academic_year, wave_number, label, start_date, end_date, announcement_date, is_open, is_free_registration, free_uniform, quota) VALUES
  ('2027/2028', 1, 'Gelombang I (Jalur Khusus & Reguler)', '2027-08-01', '2027-09-30', '2027-10-02', TRUE, TRUE, TRUE, 50),
  ('2027/2028', 2, 'Gelombang II (Jalur Reguler)', '2027-10-01', '2027-11-30', '2027-12-05', FALSE, FALSE, FALSE, 50)
ON CONFLICT DO NOTHING;
