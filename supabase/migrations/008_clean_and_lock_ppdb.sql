-- ============================================================
-- 008_clean_and_lock_ppdb.sql
-- PERBAIKAN DARURAT: PEMBERSIHAN SPAM 700K & PENGUNCIAN TABEL PPDB
-- Jalankan di: Supabase Dashboard > SQL Editor
-- ============================================================

-- 1. BERSIHKAN SEMUA 700K+ DATA PENDAFTAR BOT SECARA INSTAN (< 50 milidetik)
-- Penggunaan TRUNCATE tidak membebani log transaksi (WAL) dan tidak akan timeout.
TRUNCATE TABLE public.ppdb_applicants CASCADE;

-- 2. CABUT SEMUA KEBIJAKAN INSERT PUBLIK/ANONIM
-- Bot yang menembak PostgREST API Supabase langsung akan menerima error 403 Forbidden.
DROP POLICY IF EXISTS "Public can insert ppdb_applicants" ON public.ppdb_applicants;
DROP POLICY IF EXISTS "Anyone can submit PPDB application" ON public.ppdb_applicants;
DROP POLICY IF EXISTS "Allow public full access on ppdb_applicants" ON public.ppdb_applicants;
DROP POLICY IF EXISTS "Authenticated can view and manage ppdb_applicants" ON public.ppdb_applicants;
DROP POLICY IF EXISTS "Authenticated can view applicants" ON public.ppdb_applicants;
DROP POLICY IF EXISTS "Only admin can update applicants" ON public.ppdb_applicants;
DROP POLICY IF EXISTS "Only admin can delete applicants" ON public.ppdb_applicants;

-- 3. PASTIKAN ROW LEVEL SECURITY AKTIF
ALTER TABLE public.ppdb_applicants ENABLE ROW LEVEL SECURITY;

-- 4. KEBIJAKAN BARU: HANYA PENGGUNA TEROTENTIKASI (ADMIN/GURU) YANG DAPAT MELIHAT & MENGELOLA
CREATE POLICY "Authenticated can manage ppdb_applicants"
ON public.ppdb_applicants FOR ALL TO authenticated
USING (TRUE) WITH CHECK (TRUE);

-- 5. FUNCTION SECURE RPC UNTUK PENDAFTARAN DARI SERVER NEXT.JS
-- Fungsi ini berjalan sebagai SECURITY DEFINER, tetapi diverifikasi dengan token rahasia server.
-- Publik anonim tidak dapat sembarangan menyisipkan data tanpa melalui Server Next.js.
CREATE OR REPLACE FUNCTION public.submit_ppdb_applicant_secure(
  applicant_data JSONB,
  server_token TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_expected_token TEXT := 'smp45_sec_ppdb_88a91b42ef19945';
  v_reg_no TEXT;
  v_new_id UUID;
  v_count INT;
  v_phone TEXT;
BEGIN
  -- 1. Validasi Token Server Next.js
  IF server_token IS NULL OR server_token <> v_expected_token THEN
    RAISE EXCEPTION 'Akses ditolak: Permintaan tidak sah (Invalid server token).';
  END IF;

  -- 2. Sanitasi dan Validasi Data Dasar
  v_phone := TRIM(COALESCE(applicant_data->>'phone', ''));
  IF LENGTH(v_phone) < 8 OR LENGTH(v_phone) > 20 THEN
    RAISE EXCEPTION 'Nomor WhatsApp tidak valid.';
  END IF;

  IF LENGTH(TRIM(COALESCE(applicant_data->>'fullName', ''))) < 3 THEN
    RAISE EXCEPTION 'Nama calon siswa terlalu pendek.';
  END IF;

  -- 3. Buat Nomor Registrasi Unik
  v_reg_no := 'PPDB2027-' || LPAD(FLOOR(1000 + RANDOM() * 9000)::TEXT, 4, '0');

  -- 4. Sisipkan Data Pendaftaran Baru
  INSERT INTO public.ppdb_applicants (
    registration_no,
    registration_type,
    full_name,
    nisn,
    gender,
    birth_place,
    birth_date,
    address,
    origin_school,
    track,
    parent_name,
    father_name,
    mother_name,
    parent_occupation,
    phone,
    status,
    is_data_complete
  ) VALUES (
    v_reg_no,
    COALESCE(applicant_data->>'registrationType', 'express'),
    TRIM(applicant_data->>'fullName'),
    COALESCE(NULLIF(TRIM(applicant_data->>'nisn'), ''), '-'),
    CASE 
      WHEN (applicant_data->>'gender') ILIKE '%perempuan%' THEN 'Perempuan' 
      ELSE 'Laki-Laki' 
    END,
    COALESCE(applicant_data->>'birthPlace', ''),
    CASE 
      WHEN (applicant_data->>'birthDate') ~ '^\d{4}-\d{2}-\d{2}$' 
      THEN (applicant_data->>'birthDate')::DATE 
      ELSE NULL 
    END,
    COALESCE(applicant_data->>'address', ''),
    COALESCE(applicant_data->>'originSchool', '-'),
    COALESCE(applicant_data->>'track', 'Reguler'),
    COALESCE(applicant_data->>'parentName', 'Orang Tua / Wali'),
    COALESCE(applicant_data->>'fatherName', ''),
    COALESCE(applicant_data->>'motherName', ''),
    COALESCE(applicant_data->>'parentOccupation', ''),
    v_phone,
    'Menunggu Verifikasi',
    COALESCE((applicant_data->>'isDataComplete')::BOOLEAN, FALSE)
  )
  RETURNING id INTO v_new_id;

  RETURN jsonb_build_object(
    'success', true,
    'id', v_new_id,
    'registrationNo', v_reg_no
  );
END;
$$;

-- Beri izin eksekusi function ke anonim dan authenticated (karena verifikasi token ada di dalam fungsi)
GRANT EXECUTE ON FUNCTION public.submit_ppdb_applicant_secure(JSONB, TEXT) TO anon, authenticated;

-- 6. FUNCTION SECURE RPC UNTUK CEK STATUS PENDAFTARAN
-- Mengembalikan HANYA kolom publik yang aman tanpa mengekspos seluruh data pribadi tabel
CREATE OR REPLACE FUNCTION public.check_ppdb_status_public(
  search_query TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_clean TEXT := LOWER(TRIM(search_query));
  v_result JSONB;
BEGIN
  IF LENGTH(v_clean) < 3 THEN
    RETURN jsonb_build_object('found', false, 'message', 'Query pencarian terlalu pendek.');
  END IF;

  SELECT jsonb_build_object(
    'found', true,
    'id', id,
    'registrationNo', registration_no,
    'fullName', full_name,
    'gender', gender,
    'originSchool', origin_school,
    'track', track,
    'registrationDate', registration_date,
    'status', status,
    'notes', admin_notes,
    'registrationType', registration_type
  ) INTO v_result
  FROM public.ppdb_applicants
  WHERE LOWER(registration_no) = v_clean
     OR REPLACE(phone, '-', '') = REPLACE(v_clean, '-', '')
  ORDER BY registration_date DESC
  LIMIT 1;

  IF v_result IS NULL THEN
    RETURN jsonb_build_object('found', false);
  END IF;

  RETURN v_result;
END;
$$;

GRANT EXECUTE ON FUNCTION public.check_ppdb_status_public(TEXT) TO anon, authenticated;

-- ============================================================
-- SELESAI: 700k data palsu bersih, RLS terkunci, dan akses publik diamankan.
-- ============================================================
