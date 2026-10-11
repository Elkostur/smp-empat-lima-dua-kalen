import { AdminStoreState } from '@/lib/adminStore';

/**
 * Escapes a string to be safely used inside a SQL single-quoted literal.
 */
function sqlEscape(value: unknown): string {
  if (value === null || value === undefined) {
    return 'NULL';
  }
  if (typeof value === 'boolean') {
    return value ? 'TRUE' : 'FALSE';
  }
  if (typeof value === 'number') {
    return isNaN(value) ? 'NULL' : String(value);
  }
  if (Array.isArray(value)) {
    // PostgreSql text array format or JSON: format as JSON array string literal or postgres array
    const escapedItems = value.map((v) => `"${String(v).replace(/"/g, '\\"')}"`).join(',');
    return `'${(`{${escapedItems}}`).replace(/'/g, "''")}'`;
  }
  if (typeof value === 'object') {
    return `'${JSON.stringify(value).replace(/'/g, "''")}'`;
  }
  const str = String(value);
  return `'${str.replace(/'/g, "''")}'`;
}

function sqlDate(value: string | undefined | null): string {
  if (!value) return 'NULL';
  // If value is YYYY-MM-DD
  const match = value.match(/^\d{4}-\d{2}-\d{2}/);
  if (match) return `'${match[0]}'`;
  return sqlEscape(value);
}

function sqlUuid(value: string | undefined | null): string {
  if (!value) return 'gen_random_uuid()';
  const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (UUID_REGEX.test(value)) {
    return `'${value}'::uuid`;
  }
  return 'gen_random_uuid()';
}

/**
 * Generates an idempotent, complete SQL restore script that creates tables (if not exists)
 * and upserts all state data into Supabase Postgres.
 */
export function generateSupabaseBackupSql(state: AdminStoreState): string {
  const timestamp = new Date().toISOString();
  const dateFormatted = new Date().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'long' });

  const lines: string[] = [];

  lines.push(`-- =============================================================================`);
  lines.push(`-- BACKUP DATABASE SUPABASE - SMP EMPAT LIMA 2 KEDUNGPRING`);
  lines.push(`-- Tanggal Backup : ${dateFormatted} (${timestamp})`);
  lines.push(`-- Instruksi: Buka Supabase Dashboard -> SQL Editor -> Tempel (Paste) script ini -> Run`);
  lines.push(`-- Script ini bersifat aman (idempotent):`);
  lines.push(`-- 1. Membuat tabel & ekstensi jika belum ada (CREATE TABLE IF NOT EXISTS)`);
  lines.push(`-- 2. Memulihkan semua data dengan INSERT ... ON CONFLICT DO UPDATE (UPSERT)`);
  lines.push(`-- =============================================================================`);
  lines.push(``);
  lines.push(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
  lines.push(`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`);
  lines.push(``);

  // 1. SCHOOL_INFO
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`-- 1. TABLE: school_info`);
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`CREATE TABLE IF NOT EXISTS public.school_info (`);
  lines.push(`  id BIGINT PRIMARY KEY DEFAULT 1,`);
  lines.push(`  name TEXT NOT NULL,`);
  lines.push(`  short_name TEXT,`);
  lines.push(`  foundation TEXT,`);
  lines.push(`  npsn TEXT,`);
  lines.push(`  accreditation TEXT,`);
  lines.push(`  address TEXT,`);
  lines.push(`  district TEXT,`);
  lines.push(`  regency TEXT,`);
  lines.push(`  province TEXT,`);
  lines.push(`  postal_code TEXT,`);
  lines.push(`  phone TEXT,`);
  lines.push(`  whatsapp TEXT,`);
  lines.push(`  email TEXT,`);
  lines.push(`  operating_hours TEXT,`);
  lines.push(`  principal_name TEXT,`);
  lines.push(`  principal_title TEXT,`);
  lines.push(`  principal_quote TEXT,`);
  lines.push(`  principal_photo_url TEXT,`);
  lines.push(`  tagline TEXT,`);
  lines.push(`  vision TEXT,`);
  lines.push(`  missions TEXT[],`);
  lines.push(`  history TEXT,`);
  lines.push(`  google_maps_embed_url TEXT,`);
  lines.push(`  youtube_video_url TEXT,`);
  lines.push(`  facebook_url TEXT,`);
  lines.push(`  instagram_url TEXT,`);
  lines.push(`  youtube_url TEXT,`);
  lines.push(`  tiktok_url TEXT,`);
  lines.push(`  updated_at TIMESTAMPTZ DEFAULT NOW()`);
  lines.push(`);`);
  lines.push(``);

  const si = state.schoolInfo;
  lines.push(`INSERT INTO public.school_info (`);
  lines.push(`  id, name, short_name, foundation, npsn, accreditation, address, district, regency,`);
  lines.push(`  province, postal_code, phone, whatsapp, email, operating_hours, principal_name,`);
  lines.push(`  principal_title, principal_quote, principal_photo_url, tagline, vision, missions,`);
  lines.push(`  history, google_maps_embed_url, youtube_video_url, facebook_url, instagram_url, youtube_url, tiktok_url, updated_at`);
  lines.push(`) VALUES (`);
  lines.push(`  1,`);
  lines.push(`  ${sqlEscape(si.name)},`);
  lines.push(`  ${sqlEscape(si.shortName)},`);
  lines.push(`  ${sqlEscape(si.foundation)},`);
  lines.push(`  ${sqlEscape(si.npsn)},`);
  lines.push(`  ${sqlEscape(si.accreditation)},`);
  lines.push(`  ${sqlEscape(si.address)},`);
  lines.push(`  ${sqlEscape(si.district)},`);
  lines.push(`  ${sqlEscape(si.regency)},`);
  lines.push(`  ${sqlEscape(si.province)},`);
  lines.push(`  ${sqlEscape(si.postalCode)},`);
  lines.push(`  ${sqlEscape(si.phone)},`);
  lines.push(`  ${sqlEscape(si.whatsapp)},`);
  lines.push(`  ${sqlEscape(si.email)},`);
  lines.push(`  ${sqlEscape(si.operatingHours)},`);
  lines.push(`  ${sqlEscape(si.principal)},`);
  lines.push(`  ${sqlEscape(si.principalTitle)},`);
  lines.push(`  ${sqlEscape(si.principalQuote)},`);
  lines.push(`  ${sqlEscape(si.principalPhoto)},`);
  lines.push(`  ${sqlEscape(si.tagline)},`);
  lines.push(`  ${sqlEscape(si.vision)},`);
  lines.push(`  ${sqlEscape(si.missions)},`);
  lines.push(`  ${sqlEscape(si.history)},`);
  lines.push(`  ${sqlEscape(si.googleMapsEmbedUrl)},`);
  lines.push(`  ${sqlEscape(si.youtubeVideoUrl)},`);
  lines.push(`  ${sqlEscape(si.socials.facebook)},`);
  lines.push(`  ${sqlEscape(si.socials.instagram)},`);
  lines.push(`  ${sqlEscape(si.socials.youtube)},`);
  lines.push(`  ${sqlEscape(si.socials.tiktok)},`);
  lines.push(`  NOW()`);
  lines.push(`)`);
  lines.push(`ON CONFLICT (id) DO UPDATE SET`);
  lines.push(`  name = EXCLUDED.name,`);
  lines.push(`  short_name = EXCLUDED.short_name,`);
  lines.push(`  foundation = EXCLUDED.foundation,`);
  lines.push(`  npsn = EXCLUDED.npsn,`);
  lines.push(`  accreditation = EXCLUDED.accreditation,`);
  lines.push(`  address = EXCLUDED.address,`);
  lines.push(`  district = EXCLUDED.district,`);
  lines.push(`  regency = EXCLUDED.regency,`);
  lines.push(`  province = EXCLUDED.province,`);
  lines.push(`  postal_code = EXCLUDED.postal_code,`);
  lines.push(`  phone = EXCLUDED.phone,`);
  lines.push(`  whatsapp = EXCLUDED.whatsapp,`);
  lines.push(`  email = EXCLUDED.email,`);
  lines.push(`  operating_hours = EXCLUDED.operating_hours,`);
  lines.push(`  principal_name = EXCLUDED.principal_name,`);
  lines.push(`  principal_title = EXCLUDED.principal_title,`);
  lines.push(`  principal_quote = EXCLUDED.principal_quote,`);
  lines.push(`  principal_photo_url = EXCLUDED.principal_photo_url,`);
  lines.push(`  tagline = EXCLUDED.tagline,`);
  lines.push(`  vision = EXCLUDED.vision,`);
  lines.push(`  missions = EXCLUDED.missions,`);
  lines.push(`  history = EXCLUDED.history,`);
  lines.push(`  google_maps_embed_url = EXCLUDED.google_maps_embed_url,`);
  lines.push(`  youtube_video_url = EXCLUDED.youtube_video_url,`);
  lines.push(`  facebook_url = EXCLUDED.facebook_url,`);
  lines.push(`  instagram_url = EXCLUDED.instagram_url,`);
  lines.push(`  youtube_url = EXCLUDED.youtube_url,`);
  lines.push(`  tiktok_url = EXCLUDED.tiktok_url,`);
  lines.push(`  updated_at = NOW();`);
  lines.push(``);

  // 2. HERO_SLIDES
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`-- 2. TABLE: hero_slides`);
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`CREATE TABLE IF NOT EXISTS public.hero_slides (`);
  lines.push(`  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),`);
  lines.push(`  title TEXT NOT NULL,`);
  lines.push(`  subtitle TEXT,`);
  lines.push(`  badge TEXT,`);
  lines.push(`  description TEXT,`);
  lines.push(`  cta_primary TEXT,`);
  lines.push(`  cta_secondary TEXT,`);
  lines.push(`  bg_image_url TEXT,`);
  lines.push(`  sort_order INT DEFAULT 1,`);
  lines.push(`  is_active BOOLEAN DEFAULT TRUE,`);
  lines.push(`  created_at TIMESTAMPTZ DEFAULT NOW()`);
  lines.push(`);`);
  lines.push(``);

  if (state.heroSlides.length > 0) {
    for (let i = 0; i < state.heroSlides.length; i++) {
      const s = state.heroSlides[i];
      lines.push(`INSERT INTO public.hero_slides (id, title, subtitle, badge, description, cta_primary, cta_secondary, bg_image_url, sort_order, is_active)`);
      lines.push(`VALUES (${sqlUuid(s.id)}, ${sqlEscape(s.title)}, ${sqlEscape(s.subtitle)}, ${sqlEscape(s.badge)}, ${sqlEscape(s.description)}, ${sqlEscape(s.ctaPrimary)}, ${sqlEscape(s.ctaSecondary)}, ${sqlEscape(s.bgImage)}, ${i + 1}, TRUE)`);
      lines.push(`ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, subtitle = EXCLUDED.subtitle, badge = EXCLUDED.badge, description = EXCLUDED.description, cta_primary = EXCLUDED.cta_primary, cta_secondary = EXCLUDED.cta_secondary, bg_image_url = EXCLUDED.bg_image_url, sort_order = EXCLUDED.sort_order;`);
    }
    lines.push(``);
  }

  // 3. NEWS
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`-- 3. TABLE: news`);
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`CREATE TABLE IF NOT EXISTS public.news (`);
  lines.push(`  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),`);
  lines.push(`  slug TEXT UNIQUE NOT NULL,`);
  lines.push(`  title TEXT NOT NULL,`);
  lines.push(`  category TEXT,`);
  lines.push(`  published_date DATE NOT NULL,`);
  lines.push(`  author_name TEXT,`);
  lines.push(`  author_role TEXT,`);
  lines.push(`  read_time_minutes INT DEFAULT 3,`);
  lines.push(`  image_url TEXT,`);
  lines.push(`  summary TEXT,`);
  lines.push(`  content TEXT,`);
  lines.push(`  tags TEXT[],`);
  lines.push(`  is_featured BOOLEAN DEFAULT FALSE,`);
  lines.push(`  is_published BOOLEAN DEFAULT TRUE,`);
  lines.push(`  created_at TIMESTAMPTZ DEFAULT NOW()`);
  lines.push(`);`);
  lines.push(``);

  if (state.news.length > 0) {
    for (const n of state.news) {
      const slugVal = n.slug || n.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const readMinutes = parseInt(n.readTime) || 3;
      lines.push(`INSERT INTO public.news (id, slug, title, category, published_date, author_name, author_role, read_time_minutes, image_url, summary, content, tags, is_featured, is_published)`);
      lines.push(`VALUES (${sqlUuid(n.id)}, ${sqlEscape(slugVal)}, ${sqlEscape(n.title)}, ${sqlEscape(n.category)}, ${sqlDate(n.date)}, ${sqlEscape(n.author)}, ${sqlEscape(n.authorRole)}, ${readMinutes}, ${sqlEscape(n.imageUrl || n.image)}, ${sqlEscape(n.summary)}, ${sqlEscape(n.content)}, ${sqlEscape(n.tags)}, ${n.featured ? 'TRUE' : 'FALSE'}, TRUE)`);
      lines.push(`ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, category = EXCLUDED.category, published_date = EXCLUDED.published_date, author_name = EXCLUDED.author_name, author_role = EXCLUDED.author_role, read_time_minutes = EXCLUDED.read_time_minutes, image_url = EXCLUDED.image_url, summary = EXCLUDED.summary, content = EXCLUDED.content, tags = EXCLUDED.tags, is_featured = EXCLUDED.is_featured;`);
    }
    lines.push(``);
  }

  // 4. PPDB APPLICANTS
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`-- 4. TABLE: ppdb_applicants`);
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`CREATE TABLE IF NOT EXISTS public.ppdb_applicants (`);
  lines.push(`  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),`);
  lines.push(`  registration_no TEXT UNIQUE NOT NULL,`);
  lines.push(`  registration_type TEXT DEFAULT 'express',`);
  lines.push(`  full_name TEXT NOT NULL,`);
  lines.push(`  nisn TEXT,`);
  lines.push(`  gender TEXT,`);
  lines.push(`  birth_place TEXT,`);
  lines.push(`  birth_date DATE,`);
  lines.push(`  address TEXT,`);
  lines.push(`  origin_school TEXT,`);
  lines.push(`  track TEXT,`);
  lines.push(`  parent_name TEXT,`);
  lines.push(`  father_name TEXT,`);
  lines.push(`  mother_name TEXT,`);
  lines.push(`  parent_occupation TEXT,`);
  lines.push(`  phone TEXT,`);
  lines.push(`  status TEXT DEFAULT 'Menunggu Verifikasi',`);
  lines.push(`  admin_notes TEXT,`);
  lines.push(`  is_data_complete BOOLEAN DEFAULT FALSE,`);
  lines.push(`  registration_date TIMESTAMPTZ DEFAULT NOW(),`);
  lines.push(`  created_at TIMESTAMPTZ DEFAULT NOW()`);
  lines.push(`);`);
  lines.push(``);

  if (state.applicants.length > 0) {
    for (const a of state.applicants) {
      lines.push(`INSERT INTO public.ppdb_applicants (id, registration_no, registration_type, full_name, nisn, gender, birth_place, birth_date, address, origin_school, track, parent_name, father_name, mother_name, parent_occupation, phone, status, admin_notes, is_data_complete)`);
      lines.push(`VALUES (${sqlUuid(a.id)}, ${sqlEscape(a.registrationNo)}, ${sqlEscape(a.registrationType || 'express')}, ${sqlEscape(a.fullName)}, ${sqlEscape(a.nisn)}, ${sqlEscape(a.gender)}, ${sqlEscape(a.birthPlace)}, ${sqlDate(a.birthDate)}, ${sqlEscape(a.address)}, ${sqlEscape(a.originSchool)}, ${sqlEscape(a.track)}, ${sqlEscape(a.parentName)}, ${sqlEscape(a.fatherName)}, ${sqlEscape(a.motherName)}, ${sqlEscape(a.parentOccupation)}, ${sqlEscape(a.phone)}, ${sqlEscape(a.status)}, ${sqlEscape(a.notes)}, ${a.isDataComplete ? 'TRUE' : 'FALSE'})`);
      lines.push(`ON CONFLICT (registration_no) DO UPDATE SET full_name = EXCLUDED.full_name, nisn = EXCLUDED.nisn, gender = EXCLUDED.gender, birth_place = EXCLUDED.birth_place, birth_date = EXCLUDED.birth_date, address = EXCLUDED.address, origin_school = EXCLUDED.origin_school, track = EXCLUDED.track, parent_name = EXCLUDED.parent_name, father_name = EXCLUDED.father_name, mother_name = EXCLUDED.mother_name, parent_occupation = EXCLUDED.parent_occupation, phone = EXCLUDED.phone, status = EXCLUDED.status, admin_notes = EXCLUDED.admin_notes, is_data_complete = EXCLUDED.is_data_complete;`);
    }
    lines.push(``);
  }

  // 5. STAFF
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`-- 5. TABLE: staff`);
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`CREATE TABLE IF NOT EXISTS public.staff (`);
  lines.push(`  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),`);
  lines.push(`  name TEXT NOT NULL,`);
  lines.push(`  role TEXT NOT NULL,`);
  lines.push(`  department TEXT NOT NULL,`);
  lines.push(`  bidang TEXT,`);
  lines.push(`  subject TEXT,`);
  lines.push(`  education TEXT,`);
  lines.push(`  photo_url TEXT,`);
  lines.push(`  quote TEXT,`);
  lines.push(`  sort_order INT DEFAULT 1,`);
  lines.push(`  is_active BOOLEAN DEFAULT TRUE,`);
  lines.push(`  created_at TIMESTAMPTZ DEFAULT NOW()`);
  lines.push(`);`);
  lines.push(``);

  if (state.staff.length > 0) {
    for (let i = 0; i < state.staff.length; i++) {
      const s = state.staff[i];
      lines.push(`INSERT INTO public.staff (id, name, role, department, bidang, subject, education, photo_url, quote, sort_order, is_active)`);
      lines.push(`VALUES (${sqlUuid(s.id)}, ${sqlEscape(s.name)}, ${sqlEscape(s.role)}, ${sqlEscape(s.department)}, ${sqlEscape(s.bidang)}, ${sqlEscape(s.subject)}, ${sqlEscape(s.education)}, ${sqlEscape(s.imageUrl || s.photo)}, ${sqlEscape(s.quote)}, ${i + 1}, TRUE)`);
      lines.push(`ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, role = EXCLUDED.role, department = EXCLUDED.department, bidang = EXCLUDED.bidang, subject = EXCLUDED.subject, education = EXCLUDED.education, photo_url = EXCLUDED.photo_url, quote = EXCLUDED.quote, sort_order = EXCLUDED.sort_order;`);
    }
    lines.push(``);
  }

  // 6. GALLERY
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`-- 6. TABLE: gallery`);
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`CREATE TABLE IF NOT EXISTS public.gallery (`);
  lines.push(`  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),`);
  lines.push(`  title TEXT NOT NULL,`);
  lines.push(`  category TEXT,`);
  lines.push(`  image_url TEXT NOT NULL,`);
  lines.push(`  description TEXT,`);
  lines.push(`  event_date TEXT,`);
  lines.push(`  sort_order INT DEFAULT 1,`);
  lines.push(`  is_published BOOLEAN DEFAULT TRUE,`);
  lines.push(`  created_at TIMESTAMPTZ DEFAULT NOW()`);
  lines.push(`);`);
  lines.push(``);

  if (state.gallery.length > 0) {
    for (let i = 0; i < state.gallery.length; i++) {
      const g = state.gallery[i];
      lines.push(`INSERT INTO public.gallery (id, title, category, image_url, description, event_date, sort_order, is_published)`);
      lines.push(`VALUES (${sqlUuid(g.id)}, ${sqlEscape(g.title)}, ${sqlEscape(g.category)}, ${sqlEscape(g.imageUrl)}, ${sqlEscape(g.description)}, ${sqlEscape(g.date)}, ${i + 1}, TRUE)`);
      lines.push(`ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, category = EXCLUDED.category, image_url = EXCLUDED.image_url, description = EXCLUDED.description, event_date = EXCLUDED.event_date, sort_order = EXCLUDED.sort_order;`);
    }
    lines.push(``);
  }

  // 7. AGENDAS
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`-- 7. TABLE: agendas`);
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`CREATE TABLE IF NOT EXISTS public.agendas (`);
  lines.push(`  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),`);
  lines.push(`  title TEXT NOT NULL,`);
  lines.push(`  event_date DATE NOT NULL,`);
  lines.push(`  event_time_start TEXT,`);
  lines.push(`  event_time_end TEXT,`);
  lines.push(`  location TEXT,`);
  lines.push(`  category TEXT,`);
  lines.push(`  is_published BOOLEAN DEFAULT TRUE,`);
  lines.push(`  created_at TIMESTAMPTZ DEFAULT NOW()`);
  lines.push(`);`);
  lines.push(``);

  if (state.agendas.length > 0) {
    const monthMap: Record<string, string> = {
      JAN: '01', FEB: '02', MAR: '03', APR: '04', MEI: '05', JUN: '06',
      JUL: '07', AGU: '08', SEP: '09', OKT: '10', NOV: '11', DES: '12',
    };
    for (const a of state.agendas) {
      const year = a.year || '2027';
      const monthNum = monthMap[a.month.toUpperCase()] || '08';
      const formattedDate = `${year}-${monthNum}-${a.day.padStart(2, '0')}`;
      lines.push(`INSERT INTO public.agendas (id, title, event_date, location, category, is_published)`);
      lines.push(`VALUES (${sqlUuid(a.id)}, ${sqlEscape(a.title)}, '${formattedDate}', ${sqlEscape(a.location)}, ${sqlEscape(a.category)}, TRUE)`);
      lines.push(`ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, event_date = EXCLUDED.event_date, location = EXCLUDED.location, category = EXCLUDED.category;`);
    }
    lines.push(``);
  }

  // 8. OSIS OFFICERS
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`-- 8. TABLE: osis_officers`);
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`CREATE TABLE IF NOT EXISTS public.osis_officers (`);
  lines.push(`  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),`);
  lines.push(`  period TEXT DEFAULT '2027/2028',`);
  lines.push(`  position TEXT NOT NULL,`);
  lines.push(`  name TEXT NOT NULL,`);
  lines.push(`  class_name TEXT NOT NULL,`);
  lines.push(`  sort_order INT DEFAULT 1,`);
  lines.push(`  is_active BOOLEAN DEFAULT TRUE,`);
  lines.push(`  created_at TIMESTAMPTZ DEFAULT NOW()`);
  lines.push(`);`);
  lines.push(``);

  if (state.osisOfficers.length > 0) {
    for (let i = 0; i < state.osisOfficers.length; i++) {
      const o = state.osisOfficers[i];
      lines.push(`INSERT INTO public.osis_officers (id, period, position, name, class_name, sort_order, is_active)`);
      lines.push(`VALUES (${sqlUuid(o.id)}, '2027/2028', ${sqlEscape(o.position)}, ${sqlEscape(o.name)}, ${sqlEscape(o.className)}, ${i + 1}, TRUE)`);
      lines.push(`ON CONFLICT (id) DO UPDATE SET position = EXCLUDED.position, name = EXCLUDED.name, class_name = EXCLUDED.class_name, sort_order = EXCLUDED.sort_order;`);
    }
    lines.push(``);
  }

  // 9. IPNU INFO
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`-- 9. TABLE: ipnu_info`);
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`CREATE TABLE IF NOT EXISTS public.ipnu_info (`);
  lines.push(`  id SERIAL PRIMARY KEY,`);
  lines.push(`  title TEXT,`);
  lines.push(`  period TEXT,`);
  lines.push(`  description TEXT,`);
  lines.push(`  sections TEXT[],`);
  lines.push(`  leader_name TEXT,`);
  lines.push(`  leader_class TEXT,`);
  lines.push(`  is_active BOOLEAN DEFAULT TRUE,`);
  lines.push(`  updated_at TIMESTAMPTZ DEFAULT NOW()`);
  lines.push(`);`);
  lines.push(``);

  const ip = state.ipnuInfo;
  lines.push(`INSERT INTO public.ipnu_info (id, title, period, description, sections, leader_name, leader_class, is_active, updated_at)`);
  lines.push(`VALUES (1, ${sqlEscape(ip.title)}, ${sqlEscape(ip.period)}, ${sqlEscape(ip.description)}, ${sqlEscape(ip.sections)}, ${sqlEscape(ip.leaderName)}, ${sqlEscape(ip.leaderClass)}, TRUE, NOW())`);
  lines.push(`ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, period = EXCLUDED.period, description = EXCLUDED.description, sections = EXCLUDED.sections, leader_name = EXCLUDED.leader_name, leader_class = EXCLUDED.leader_class, updated_at = NOW();`);
  lines.push(``);

  // 10. PROGRAMS
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`-- 10. TABLE: programs`);
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`CREATE TABLE IF NOT EXISTS public.programs (`);
  lines.push(`  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),`);
  lines.push(`  slug TEXT UNIQUE NOT NULL,`);
  lines.push(`  title TEXT NOT NULL,`);
  lines.push(`  badge TEXT,`);
  lines.push(`  short_desc TEXT,`);
  lines.push(`  full_desc TEXT,`);
  lines.push(`  icon_name TEXT,`);
  lines.push(`  highlights TEXT[],`);
  lines.push(`  schedule TEXT,`);
  lines.push(`  image_url TEXT,`);
  lines.push(`  sort_order INT DEFAULT 1,`);
  lines.push(`  is_active BOOLEAN DEFAULT TRUE,`);
  lines.push(`  created_at TIMESTAMPTZ DEFAULT NOW()`);
  lines.push(`);`);
  lines.push(``);

  if (state.programs.length > 0) {
    for (let i = 0; i < state.programs.length; i++) {
      const p = state.programs[i];
      lines.push(`INSERT INTO public.programs (slug, title, badge, short_desc, full_desc, icon_name, highlights, schedule, image_url, sort_order, is_active)`);
      lines.push(`VALUES (${sqlEscape(p.id)}, ${sqlEscape(p.title)}, ${sqlEscape(p.badge)}, ${sqlEscape(p.shortDesc)}, ${sqlEscape(p.fullDesc)}, ${sqlEscape(p.iconName)}, ${sqlEscape(p.highlights)}, ${sqlEscape(p.schedule)}, ${sqlEscape(p.imageUrl)}, ${i + 1}, TRUE)`);
      lines.push(`ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, badge = EXCLUDED.badge, short_desc = EXCLUDED.short_desc, full_desc = EXCLUDED.full_desc, icon_name = EXCLUDED.icon_name, highlights = EXCLUDED.highlights, schedule = EXCLUDED.schedule, image_url = EXCLUDED.image_url, sort_order = EXCLUDED.sort_order;`);
    }
    lines.push(``);
  }

  // 11. EXTRACURRICULARS
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`-- 11. TABLE: extracurriculars`);
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`CREATE TABLE IF NOT EXISTS public.extracurriculars (`);
  lines.push(`  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),`);
  lines.push(`  slug TEXT UNIQUE NOT NULL,`);
  lines.push(`  name TEXT NOT NULL,`);
  lines.push(`  coach TEXT,`);
  lines.push(`  schedule TEXT,`);
  lines.push(`  description TEXT,`);
  lines.push(`  icon_name TEXT,`);
  lines.push(`  achievements TEXT[],`);
  lines.push(`  image_url TEXT,`);
  lines.push(`  sort_order INT DEFAULT 1,`);
  lines.push(`  is_active BOOLEAN DEFAULT TRUE,`);
  lines.push(`  created_at TIMESTAMPTZ DEFAULT NOW()`);
  lines.push(`);`);
  lines.push(``);

  if (state.extracurriculars.length > 0) {
    for (let i = 0; i < state.extracurriculars.length; i++) {
      const e = state.extracurriculars[i];
      lines.push(`INSERT INTO public.extracurriculars (slug, name, coach, schedule, description, icon_name, achievements, image_url, sort_order, is_active)`);
      lines.push(`VALUES (${sqlEscape(e.id)}, ${sqlEscape(e.name)}, ${sqlEscape(e.coach)}, ${sqlEscape(e.schedule)}, ${sqlEscape(e.description)}, ${sqlEscape(e.iconName)}, ${sqlEscape(e.achievements)}, ${sqlEscape(e.imageUrl)}, ${i + 1}, TRUE)`);
      lines.push(`ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, coach = EXCLUDED.coach, schedule = EXCLUDED.schedule, description = EXCLUDED.description, icon_name = EXCLUDED.icon_name, achievements = EXCLUDED.achievements, image_url = EXCLUDED.image_url, sort_order = EXCLUDED.sort_order;`);
    }
    lines.push(``);
  }

  // 12. FACILITIES
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`-- 12. TABLE: facilities`);
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`CREATE TABLE IF NOT EXISTS public.facilities (`);
  lines.push(`  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),`);
  lines.push(`  name TEXT NOT NULL,`);
  lines.push(`  description TEXT,`);
  lines.push(`  image_url TEXT,`);
  lines.push(`  count_label TEXT,`);
  lines.push(`  sort_order INT DEFAULT 1,`);
  lines.push(`  is_active BOOLEAN DEFAULT TRUE,`);
  lines.push(`  created_at TIMESTAMPTZ DEFAULT NOW()`);
  lines.push(`);`);
  lines.push(``);

  if (state.facilities.length > 0) {
    for (let i = 0; i < state.facilities.length; i++) {
      const f = state.facilities[i];
      lines.push(`INSERT INTO public.facilities (id, name, description, image_url, count_label, sort_order, is_active)`);
      lines.push(`VALUES (${sqlUuid(f.id)}, ${sqlEscape(f.name)}, ${sqlEscape(f.description)}, ${sqlEscape(f.imageUrl)}, ${sqlEscape(f.count)}, ${i + 1}, TRUE)`);
      lines.push(`ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, description = EXCLUDED.description, image_url = EXCLUDED.image_url, count_label = EXCLUDED.count_label, sort_order = EXCLUDED.sort_order;`);
    }
    lines.push(``);
  }

  // 13. TESTIMONIALS
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`-- 13. TABLE: testimonials`);
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`CREATE TABLE IF NOT EXISTS public.testimonials (`);
  lines.push(`  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),`);
  lines.push(`  name TEXT NOT NULL,`);
  lines.push(`  role TEXT NOT NULL,`);
  lines.push(`  quote TEXT NOT NULL,`);
  lines.push(`  photo_url TEXT,`);
  lines.push(`  sort_order INT DEFAULT 1,`);
  lines.push(`  is_published BOOLEAN DEFAULT TRUE,`);
  lines.push(`  created_at TIMESTAMPTZ DEFAULT NOW()`);
  lines.push(`);`);
  lines.push(``);

  if (state.testimonials.length > 0) {
    for (let i = 0; i < state.testimonials.length; i++) {
      const t = state.testimonials[i];
      lines.push(`INSERT INTO public.testimonials (id, name, role, quote, photo_url, sort_order, is_published)`);
      lines.push(`VALUES (${sqlUuid(t.id)}, ${sqlEscape(t.name)}, ${sqlEscape(t.role)}, ${sqlEscape(t.quote)}, ${sqlEscape(t.photoUrl)}, ${i + 1}, TRUE)`);
      lines.push(`ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, role = EXCLUDED.role, quote = EXCLUDED.quote, photo_url = EXCLUDED.photo_url, sort_order = EXCLUDED.sort_order;`);
    }
    lines.push(``);
  }

  // 14. PPDB FAQS
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`-- 14. TABLE: ppdb_faqs`);
  lines.push(`-- -----------------------------------------------------------------------------`);
  lines.push(`CREATE TABLE IF NOT EXISTS public.ppdb_faqs (`);
  lines.push(`  id SERIAL PRIMARY KEY,`);
  lines.push(`  question TEXT NOT NULL,`);
  lines.push(`  answer TEXT NOT NULL,`);
  lines.push(`  sort_order INT DEFAULT 1,`);
  lines.push(`  is_active BOOLEAN DEFAULT TRUE,`);
  lines.push(`  created_at TIMESTAMPTZ DEFAULT NOW()`);
  lines.push(`);`);
  lines.push(``);

  if (state.faqs.length > 0) {
    for (let i = 0; i < state.faqs.length; i++) {
      const f = state.faqs[i];
      lines.push(`INSERT INTO public.ppdb_faqs (id, question, answer, sort_order, is_active)`);
      lines.push(`VALUES (${i + 1}, ${sqlEscape(f.question)}, ${sqlEscape(f.answer)}, ${i + 1}, TRUE)`);
      lines.push(`ON CONFLICT (id) DO UPDATE SET question = EXCLUDED.question, answer = EXCLUDED.answer, sort_order = EXCLUDED.sort_order;`);
    }
    lines.push(``);
  }

  lines.push(`-- =============================================================================`);
  lines.push(`-- SELESAI: Backup restore script selesai dieksekusi dengan aman.`);
  lines.push(`-- =============================================================================`);

  return lines.join('\n');
}

/**
 * Downloads a file directly in user browser.
 */
export function downloadFile(filename: string, content: string, mimeType: string = 'text/plain') {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8;` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
