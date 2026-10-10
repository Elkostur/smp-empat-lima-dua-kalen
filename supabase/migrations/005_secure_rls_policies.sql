-- ============================================================
-- 005_secure_rls_policies.sql
-- MENGAMANKAN DATABASE DARI PERETASAN / DEFACE
-- Jalankan di: Supabase Dashboard > SQL Editor
--
-- Aturan Keamanan:
-- 1. Pengunjung Umum (Anonim) HANYA BISA MEMBACA (SELECT).
-- 2. Pengunjung Umum HANYA BISA MENGIRIM FORMULIR PPDB (INSERT ppdb_applicants).
-- 3. HANYA USER YANG SUDAH LOGIN (Authenticated) YANG BISA UBAH/HAPUS/TAMBAH DATA.
-- ============================================================

-- 1. SCHOOL INFO
DROP POLICY IF EXISTS "Allow public full access on school_info" ON public.school_info;
DROP POLICY IF EXISTS "School info is public" ON public.school_info;
DROP POLICY IF EXISTS "Only admin can update school info" ON public.school_info;
CREATE POLICY "Public can read school_info" ON public.school_info FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can manage school_info" ON public.school_info FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- 2. HERO SLIDES
DROP POLICY IF EXISTS "Allow public full access on hero_slides" ON public.hero_slides;
DROP POLICY IF EXISTS "Hero slides are public" ON public.hero_slides;
DROP POLICY IF EXISTS "Authenticated can manage hero slides" ON public.hero_slides;
CREATE POLICY "Public can read hero_slides" ON public.hero_slides FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can manage hero_slides" ON public.hero_slides FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- 3. NEWS
DROP POLICY IF EXISTS "Allow public full access on news" ON public.news;
DROP POLICY IF EXISTS "Published news is public" ON public.news;
DROP POLICY IF EXISTS "Authenticated can view all news" ON public.news;
DROP POLICY IF EXISTS "Authenticated can manage news" ON public.news;
DROP POLICY IF EXISTS "Authenticated can update news" ON public.news;
DROP POLICY IF EXISTS "Only admin can delete news" ON public.news;
CREATE POLICY "Public can read news" ON public.news FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can manage news" ON public.news FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- 4. STAFF
DROP POLICY IF EXISTS "Allow public full access on staff" ON public.staff;
DROP POLICY IF EXISTS "Staff list is public" ON public.staff;
DROP POLICY IF EXISTS "Authenticated can manage staff" ON public.staff;
CREATE POLICY "Public can read staff" ON public.staff FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can manage staff" ON public.staff FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- 5. GALLERY
DROP POLICY IF EXISTS "Allow public full access on gallery" ON public.gallery;
DROP POLICY IF EXISTS "Published gallery is public" ON public.gallery;
DROP POLICY IF EXISTS "Authenticated can manage gallery" ON public.gallery;
CREATE POLICY "Public can read gallery" ON public.gallery FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can manage gallery" ON public.gallery FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- 6. PROGRAMS
DROP POLICY IF EXISTS "Allow public full access on programs" ON public.programs;
DROP POLICY IF EXISTS "Programs are public" ON public.programs;
DROP POLICY IF EXISTS "Authenticated can manage programs" ON public.programs;
CREATE POLICY "Public can read programs" ON public.programs FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can manage programs" ON public.programs FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- 7. EXTRACURRICULARS
DROP POLICY IF EXISTS "Allow public full access on extracurriculars" ON public.extracurriculars;
DROP POLICY IF EXISTS "Extracurriculars are public" ON public.extracurriculars;
DROP POLICY IF EXISTS "Authenticated can manage extracurriculars" ON public.extracurriculars;
CREATE POLICY "Public can read extracurriculars" ON public.extracurriculars FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can manage extracurriculars" ON public.extracurriculars FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- 8. FACILITIES
DROP POLICY IF EXISTS "Allow public full access on facilities" ON public.facilities;
DROP POLICY IF EXISTS "Facilities are public" ON public.facilities;
DROP POLICY IF EXISTS "Authenticated can manage facilities" ON public.facilities;
CREATE POLICY "Public can read facilities" ON public.facilities FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can manage facilities" ON public.facilities FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- 9. TESTIMONIALS
DROP POLICY IF EXISTS "Allow public full access on testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Published testimonials are public" ON public.testimonials;
DROP POLICY IF EXISTS "Authenticated can manage testimonials" ON public.testimonials;
CREATE POLICY "Public can read testimonials" ON public.testimonials FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can manage testimonials" ON public.testimonials FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- 10. AGENDAS
DROP POLICY IF EXISTS "Allow public full access on agendas" ON public.agendas;
DROP POLICY IF EXISTS "Published agendas are public" ON public.agendas;
DROP POLICY IF EXISTS "Authenticated can manage agendas" ON public.agendas;
CREATE POLICY "Public can read agendas" ON public.agendas FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can manage agendas" ON public.agendas FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- 11. PPDB FAQS
DROP POLICY IF EXISTS "Allow public full access on ppdb_faqs" ON public.ppdb_faqs;
DROP POLICY IF EXISTS "Active FAQs are public" ON public.ppdb_faqs;
DROP POLICY IF EXISTS "Authenticated can manage FAQs" ON public.ppdb_faqs;
CREATE POLICY "Public can read ppdb_faqs" ON public.ppdb_faqs FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can manage ppdb_faqs" ON public.ppdb_faqs FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- 12. OSIS OFFICERS
DROP POLICY IF EXISTS "Allow public full access on osis_officers" ON public.osis_officers;
DROP POLICY IF EXISTS "Active OSIS officers are public" ON public.osis_officers;
DROP POLICY IF EXISTS "Authenticated can manage OSIS officers" ON public.osis_officers;
CREATE POLICY "Public can read osis_officers" ON public.osis_officers FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can manage osis_officers" ON public.osis_officers FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- 13. IPNU INFO
DROP POLICY IF EXISTS "Allow public full access on ipnu_info" ON public.ipnu_info;
DROP POLICY IF EXISTS "Active IPNU info is public" ON public.ipnu_info;
DROP POLICY IF EXISTS "Authenticated can manage IPNU info" ON public.ipnu_info;
CREATE POLICY "Public can read ipnu_info" ON public.ipnu_info FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can manage ipnu_info" ON public.ipnu_info FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- 14. PPDB APPLICANTS
DROP POLICY IF EXISTS "Allow public full access on ppdb_applicants" ON public.ppdb_applicants;
DROP POLICY IF EXISTS "Anyone can submit PPDB application" ON public.ppdb_applicants;
DROP POLICY IF EXISTS "Authenticated can view applicants" ON public.ppdb_applicants;
DROP POLICY IF EXISTS "Only admin can update applicants" ON public.ppdb_applicants;
DROP POLICY IF EXISTS "Only admin can delete applicants" ON public.ppdb_applicants;
-- Pengunjung publik hanya boleh INSERT (daftar)
CREATE POLICY "Public can insert ppdb_applicants" ON public.ppdb_applicants FOR INSERT TO anon, authenticated WITH CHECK (TRUE);
-- Hanya user authenticated (admin/petugas) yang boleh melihat, mengedit, menghapus pendaftar
CREATE POLICY "Authenticated can view and manage ppdb_applicants" ON public.ppdb_applicants FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- ============================================================
-- SELESAI ✅ Database terkunci aman dari akses luar tanpa otentikasi!
-- ============================================================
