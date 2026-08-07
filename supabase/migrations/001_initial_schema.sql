-- ============================================================
-- 001_initial_schema.sql
-- Schema database lengkap untuk SMP Empat Lima 2 Kedungpring
-- Supabase PostgreSQL Migration
-- ============================================================

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "moddatetime";

-- ============================================================
-- HELPER: auto updated_at trigger function
-- ============================================================
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================
-- GROUP 1: AUTH & USERS
-- ============================================================

CREATE TABLE IF NOT EXISTS public.profiles (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email       TEXT UNIQUE NOT NULL,
  full_name   TEXT,
  role        TEXT NOT NULL DEFAULT 'guru' CHECK (role IN ('admin', 'guru')),
  nip         TEXT,
  avatar_url  TEXT,
  is_active   BOOLEAN NOT NULL DEFAULT TRUE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by admins only" ON public.profiles
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Trigger: create profile on new auth user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'guru')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE TRIGGER profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================
-- GROUP 2: SCHOOL CONFIGURATION
-- ============================================================

CREATE TABLE IF NOT EXISTS public.school_info (
  id                    INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1), -- singleton
  name                  TEXT NOT NULL DEFAULT 'SMP "Empat Lima" 2 Kedungpring',
  short_name            TEXT,
  foundation            TEXT,
  npsn                  TEXT,
  accreditation         TEXT,
  address               TEXT,
  district              TEXT,
  regency               TEXT,
  province              TEXT,
  postal_code           TEXT,
  phone                 TEXT,
  whatsapp              TEXT,
  email                 TEXT,
  operating_hours       TEXT,
  principal_name        TEXT,
  principal_title       TEXT,
  principal_quote       TEXT,
  principal_photo_url   TEXT,
  tagline               TEXT,
  vision                TEXT,
  missions              TEXT[] DEFAULT '{}',
  history               TEXT,
  google_maps_embed_url TEXT,
  facebook_url          TEXT,
  instagram_url         TEXT,
  youtube_url           TEXT,
  tiktok_url            TEXT,
  updated_at            TIMESTAMPTZ,
  updated_by            UUID REFERENCES public.profiles(id) ON DELETE SET NULL
);

ALTER TABLE public.school_info ENABLE ROW LEVEL SECURITY;
CREATE POLICY "School info is public" ON public.school_info FOR SELECT USING (TRUE);
CREATE POLICY "Only admin can update school info" ON public.school_info
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE TRIGGER school_info_updated_at BEFORE UPDATE ON public.school_info
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================

CREATE TABLE IF NOT EXISTS public.school_stats (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  label       TEXT NOT NULL,
  value       INTEGER NOT NULL DEFAULT 0,
  suffix      TEXT DEFAULT '',
  icon_name   TEXT,
  sort_order  INTEGER DEFAULT 0,
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.school_stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Stats are public" ON public.school_stats FOR SELECT USING (TRUE);
CREATE POLICY "Only admin can modify stats" ON public.school_stats
  FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- ============================================================

CREATE TABLE IF NOT EXISTS public.hero_slides (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT NOT NULL,
  subtitle    TEXT,
  badge       TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  cta_primary TEXT,
  cta_secondary TEXT,
  bg_image_url TEXT NOT NULL DEFAULT '',
  is_active   BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order  INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ,
  created_by  UUID REFERENCES public.profiles(id) ON DELETE SET NULL
);

ALTER TABLE public.hero_slides ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Hero slides are public" ON public.hero_slides FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Authenticated can manage hero slides" ON public.hero_slides
  FOR ALL USING (auth.role() = 'authenticated');

CREATE TRIGGER hero_slides_updated_at BEFORE UPDATE ON public.hero_slides
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================
-- GROUP 3: PUBLIC CONTENT
-- ============================================================

CREATE TABLE IF NOT EXISTS public.news (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug             TEXT UNIQUE NOT NULL,
  title            TEXT NOT NULL,
  category         TEXT NOT NULL CHECK (category IN (
                     'Pengumuman','Kegiatan','Prestasi',
                     'Keagamaan & Tahfidz','Ekstrakurikuler','Artikel & Opini'
                   )),
  published_date   DATE NOT NULL DEFAULT CURRENT_DATE,
  author_name      TEXT NOT NULL DEFAULT '',
  author_role      TEXT DEFAULT '',
  author_id        UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  read_time_minutes INTEGER DEFAULT 3,
  image_url        TEXT,
  summary          TEXT NOT NULL DEFAULT '',
  content          TEXT NOT NULL DEFAULT '',
  tags             TEXT[] DEFAULT '{}',
  is_featured      BOOLEAN NOT NULL DEFAULT FALSE,
  is_published     BOOLEAN NOT NULL DEFAULT FALSE,
  views_count      INTEGER NOT NULL DEFAULT 0,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ,
  created_by       UUID REFERENCES public.profiles(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS news_slug_idx ON public.news (slug);
CREATE INDEX IF NOT EXISTS news_published_idx ON public.news (is_published, published_date DESC);
CREATE INDEX IF NOT EXISTS news_category_idx ON public.news (category);

ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published news is public" ON public.news
  FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Authenticated can view all news" ON public.news
  FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can manage news" ON public.news
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can update news" ON public.news
  FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Only admin can delete news" ON public.news
  FOR DELETE USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE TRIGGER news_updated_at BEFORE UPDATE ON public.news
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================

CREATE TABLE IF NOT EXISTS public.staff (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  role        TEXT NOT NULL,
  department  TEXT NOT NULL CHECK (department IN (
                'Kepala Sekolah','Guru Mata Pelajaran','Guru BK','Tenaga Kependidikan'
              )),
  subject     TEXT,
  education   TEXT NOT NULL DEFAULT '',
  photo_url   TEXT,
  quote       TEXT,
  is_active   BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order  INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ
);

ALTER TABLE public.staff ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Staff list is public" ON public.staff FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Authenticated can manage staff" ON public.staff
  FOR ALL USING (auth.role() = 'authenticated');

CREATE TRIGGER staff_updated_at BEFORE UPDATE ON public.staff
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================

CREATE TABLE IF NOT EXISTS public.programs (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        TEXT UNIQUE NOT NULL,
  title       TEXT NOT NULL,
  badge       TEXT NOT NULL DEFAULT '',
  short_desc  TEXT NOT NULL DEFAULT '',
  full_desc   TEXT NOT NULL DEFAULT '',
  icon_name   TEXT NOT NULL DEFAULT 'Star',
  highlights  TEXT[] DEFAULT '{}',
  schedule    TEXT,
  image_url   TEXT,
  is_active   BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order  INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ
);

ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Programs are public" ON public.programs FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Authenticated can manage programs" ON public.programs
  FOR ALL USING (auth.role() = 'authenticated');

CREATE TRIGGER programs_updated_at BEFORE UPDATE ON public.programs
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================

CREATE TABLE IF NOT EXISTS public.extracurriculars (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug         TEXT UNIQUE NOT NULL,
  name         TEXT NOT NULL,
  coach        TEXT NOT NULL DEFAULT '',
  schedule     TEXT NOT NULL DEFAULT '',
  description  TEXT NOT NULL DEFAULT '',
  icon_name    TEXT NOT NULL DEFAULT 'Activity',
  achievements TEXT[] DEFAULT '{}',
  image_url    TEXT,
  is_active    BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order   INTEGER DEFAULT 0,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ
);

ALTER TABLE public.extracurriculars ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Extracurriculars are public" ON public.extracurriculars FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Authenticated can manage extracurriculars" ON public.extracurriculars
  FOR ALL USING (auth.role() = 'authenticated');

CREATE TRIGGER extracurriculars_updated_at BEFORE UPDATE ON public.extracurriculars
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================

CREATE TABLE IF NOT EXISTS public.gallery (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title                 TEXT NOT NULL,
  category              TEXT NOT NULL CHECK (category IN (
                          'Kegiatan','Prestasi','Keagamaan','Fasilitas','Ekstrakurikuler'
                        )),
  image_url             TEXT NOT NULL,
  cloudinary_public_id  TEXT,
  event_date            DATE,
  description           TEXT,
  is_published          BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order            INTEGER DEFAULT 0,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  uploaded_by           UUID REFERENCES public.profiles(id) ON DELETE SET NULL
);

ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published gallery is public" ON public.gallery FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Authenticated can manage gallery" ON public.gallery
  FOR ALL USING (auth.role() = 'authenticated');

-- ============================================================

CREATE TABLE IF NOT EXISTS public.facilities (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  image_url   TEXT,
  count_label TEXT,
  is_active   BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order  INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ
);

ALTER TABLE public.facilities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Facilities are public" ON public.facilities FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Authenticated can manage facilities" ON public.facilities
  FOR ALL USING (auth.role() = 'authenticated');

CREATE TRIGGER facilities_updated_at BEFORE UPDATE ON public.facilities
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================

CREATE TABLE IF NOT EXISTS public.testimonials (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  role        TEXT NOT NULL,
  quote       TEXT NOT NULL,
  photo_url   TEXT,
  is_published BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order  INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published testimonials are public" ON public.testimonials
  FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Authenticated can manage testimonials" ON public.testimonials
  FOR ALL USING (auth.role() = 'authenticated');

-- ============================================================

CREATE TABLE IF NOT EXISTS public.agendas (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title            TEXT NOT NULL,
  event_date       DATE NOT NULL,
  event_time_start TIME,
  event_time_end   TIME,
  location         TEXT NOT NULL DEFAULT '',
  category         TEXT NOT NULL DEFAULT 'Umum',
  description      TEXT,
  is_published     BOOLEAN NOT NULL DEFAULT TRUE,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by       UUID REFERENCES public.profiles(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS agendas_date_idx ON public.agendas (event_date);

ALTER TABLE public.agendas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published agendas are public" ON public.agendas FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Authenticated can manage agendas" ON public.agendas
  FOR ALL USING (auth.role() = 'authenticated');

-- ============================================================

CREATE TABLE IF NOT EXISTS public.ppdb_faqs (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question    TEXT NOT NULL,
  answer      TEXT NOT NULL,
  is_active   BOOLEAN NOT NULL DEFAULT TRUE,
  sort_order  INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ
);

ALTER TABLE public.ppdb_faqs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Active FAQs are public" ON public.ppdb_faqs FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Authenticated can manage FAQs" ON public.ppdb_faqs
  FOR ALL USING (auth.role() = 'authenticated');

CREATE TRIGGER ppdb_faqs_updated_at BEFORE UPDATE ON public.ppdb_faqs
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================
-- GROUP 4: PPDB
-- ============================================================

CREATE TABLE IF NOT EXISTS public.ppdb_periods (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  academic_year       TEXT NOT NULL,
  wave_number         INTEGER NOT NULL DEFAULT 1,
  label               TEXT NOT NULL,
  start_date          DATE NOT NULL,
  end_date            DATE NOT NULL,
  announcement_date   DATE,
  is_open             BOOLEAN NOT NULL DEFAULT FALSE,
  is_free_registration BOOLEAN NOT NULL DEFAULT FALSE,
  free_uniform        BOOLEAN NOT NULL DEFAULT FALSE,
  quota               INTEGER,
  notes               TEXT,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ,
  UNIQUE (academic_year, wave_number)
);

ALTER TABLE public.ppdb_periods ENABLE ROW LEVEL SECURITY;
CREATE POLICY "PPDB periods are public" ON public.ppdb_periods FOR SELECT USING (TRUE);
CREATE POLICY "Only admin can manage PPDB periods" ON public.ppdb_periods
  FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE TRIGGER ppdb_periods_updated_at BEFORE UPDATE ON public.ppdb_periods
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================

CREATE TABLE IF NOT EXISTS public.ppdb_applicants (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  registration_no   TEXT UNIQUE NOT NULL,
  period_id         UUID REFERENCES public.ppdb_periods(id) ON DELETE SET NULL,
  registration_type TEXT NOT NULL DEFAULT 'express' CHECK (registration_type IN ('express','full')),
  full_name         TEXT NOT NULL,
  nisn              TEXT DEFAULT '',
  gender            TEXT NOT NULL CHECK (gender IN ('Laki-Laki','Perempuan')),
  birth_place       TEXT DEFAULT '',
  birth_date        DATE,
  address           TEXT DEFAULT '',
  origin_school     TEXT NOT NULL DEFAULT '',
  track             TEXT NOT NULL CHECK (track IN ('Reguler','Prestasi','Tahfidz Quran','Undangan Yayasan')),
  parent_name       TEXT NOT NULL DEFAULT '',
  father_name       TEXT DEFAULT '',
  mother_name       TEXT DEFAULT '',
  parent_occupation TEXT DEFAULT '',
  phone             TEXT NOT NULL DEFAULT '',
  status            TEXT NOT NULL DEFAULT 'Menunggu Verifikasi'
                    CHECK (status IN ('Menunggu Verifikasi','Diterima','Perlu Perbaikan','Ditolak')),
  admin_notes       TEXT,
  is_data_complete  BOOLEAN NOT NULL DEFAULT FALSE,
  verified_by       UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  verified_at       TIMESTAMPTZ,
  registration_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS ppdb_applicants_period_idx ON public.ppdb_applicants (period_id);
CREATE INDEX IF NOT EXISTS ppdb_applicants_status_idx ON public.ppdb_applicants (status);
CREATE INDEX IF NOT EXISTS ppdb_applicants_regno_idx ON public.ppdb_applicants (registration_no);

ALTER TABLE public.ppdb_applicants ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit PPDB application" ON public.ppdb_applicants
  FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Authenticated can view applicants" ON public.ppdb_applicants
  FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Only admin can update applicants" ON public.ppdb_applicants
  FOR UPDATE USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));
CREATE POLICY "Only admin can delete applicants" ON public.ppdb_applicants
  FOR DELETE USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE TRIGGER ppdb_applicants_updated_at BEFORE UPDATE ON public.ppdb_applicants
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================

CREATE TABLE IF NOT EXISTS public.ppdb_applicant_documents (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  applicant_id          UUID NOT NULL REFERENCES public.ppdb_applicants(id) ON DELETE CASCADE,
  document_type         TEXT NOT NULL CHECK (document_type IN (
                          'ijazah','kartu_keluarga','akta_kelahiran',
                          'pas_foto','kip_pkh','piagam','lainnya'
                        )),
  file_url              TEXT NOT NULL,
  cloudinary_public_id  TEXT,
  file_name             TEXT,
  uploaded_at           TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.ppdb_applicant_documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can upload documents" ON public.ppdb_applicant_documents
  FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Authenticated can view documents" ON public.ppdb_applicant_documents
  FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Only admin can delete documents" ON public.ppdb_applicant_documents
  FOR DELETE USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- ============================================================
-- GROUP 5: STUDENT ORGANIZATIONS
-- ============================================================

CREATE TABLE IF NOT EXISTS public.osis_officers (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  period      TEXT NOT NULL,
  position    TEXT NOT NULL,
  name        TEXT NOT NULL,
  class_name  TEXT NOT NULL,
  photo_url   TEXT,
  sort_order  INTEGER DEFAULT 0,
  is_active   BOOLEAN NOT NULL DEFAULT TRUE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.osis_officers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Active OSIS officers are public" ON public.osis_officers
  FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Authenticated can manage OSIS officers" ON public.osis_officers
  FOR ALL USING (auth.role() = 'authenticated');

-- ============================================================

CREATE TABLE IF NOT EXISTS public.ipnu_info (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT NOT NULL,
  period      TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  sections    TEXT[] DEFAULT '{}',
  leader_name TEXT NOT NULL DEFAULT '',
  leader_class TEXT NOT NULL DEFAULT '',
  is_active   BOOLEAN NOT NULL DEFAULT TRUE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ
);

ALTER TABLE public.ipnu_info ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Active IPNU info is public" ON public.ipnu_info
  FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Authenticated can manage IPNU info" ON public.ipnu_info
  FOR ALL USING (auth.role() = 'authenticated');

CREATE TRIGGER ipnu_info_updated_at BEFORE UPDATE ON public.ipnu_info
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- ============================================================
-- GROUP 6: MEDIA ASSETS CATALOG
-- ============================================================

CREATE TABLE IF NOT EXISTS public.media_assets (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cloudinary_public_id  TEXT UNIQUE NOT NULL,
  url                   TEXT NOT NULL,
  secure_url            TEXT NOT NULL,
  resource_type         TEXT DEFAULT 'image' CHECK (resource_type IN ('image','video','raw')),
  format                TEXT,
  width                 INTEGER,
  height                INTEGER,
  bytes                 BIGINT,
  folder                TEXT,
  context_entity        TEXT,
  context_entity_id     UUID,
  alt_text              TEXT,
  uploaded_by           UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  uploaded_at           TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Media assets are public" ON public.media_assets FOR SELECT USING (TRUE);
CREATE POLICY "Authenticated can manage media" ON public.media_assets
  FOR ALL USING (auth.role() = 'authenticated');
