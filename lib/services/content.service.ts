import { createClient } from '@/lib/supabase/client';
import {
  SchoolInfo,
  HeroSlide,
  NewsItem,
  StaffItem,
  GalleryItem,
  ProgramItem,
  ExtracurricularItem,
  FacilityItem,
  TestimonialItem,
  PpdbFaqItem,
} from '@/data/schoolData';
import {
  AgendaItem,
  OsisOfficer,
  IpnuInfo,
  PpdbApplicant,
} from '@/lib/adminStore';
import { deleteFromCloudinary } from '@/lib/services/media.service';

/**
 * Supabase Data Service — Handles full CRUD for all 17 entities
 */

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isUuid(id: unknown): id is string {
  return typeof id === 'string' && UUID_REGEX.test(id);
}


// 1. SCHOOL INFO
export async function getSchoolInfoDB(): Promise<SchoolInfo | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('school_info')
      .select('*')
      .eq('id', 1)
      .single();

    if (error || !data) return null;

    return {
      name: data.name,
      shortName: data.short_name || '',
      foundation: data.foundation || '',
      npsn: data.npsn || '',
      accreditation: data.accreditation || '',
      address: data.address || '',
      district: data.district || '',
      regency: data.regency || '',
      province: data.province || '',
      postalCode: data.postal_code || '',
      phone: data.phone || '',
      whatsapp: data.whatsapp || '',
      email: data.email || '',
      operatingHours: data.operating_hours || '',
      principal: data.principal_name || '',
      principalTitle: data.principal_title || '',
      principalQuote: data.principal_quote || '',
      principalPhoto: data.principal_photo_url || '',
      tagline: data.tagline || '',
      vision: data.vision || '',
      missions: data.missions || [],
      history: data.history || '',
      googleMapsEmbedUrl: data.google_maps_embed_url || '',
      youtubeVideoUrl: data.youtube_video_url || '',
      socials: {
        facebook: data.facebook_url || '',
        instagram: data.instagram_url || '',
        youtube: data.youtube_url || '',
        tiktok: data.tiktok_url || '',
      },
    };
  } catch (err) {
    console.error('getSchoolInfoDB error:', err);
    return null;
  }
}

export async function updateSchoolInfoDB(info: SchoolInfo): Promise<boolean> {
  try {
    const supabase = createClient();
    const { error } = await supabase.from('school_info').upsert({
      id: 1,
      name: info.name,
      short_name: info.shortName,
      foundation: info.foundation,
      npsn: info.npsn,
      accreditation: info.accreditation,
      address: info.address,
      district: info.district,
      regency: info.regency,
      province: info.province,
      postal_code: info.postalCode,
      phone: info.phone,
      whatsapp: info.whatsapp,
      email: info.email,
      operating_hours: info.operatingHours,
      principal_name: info.principal,
      principal_title: info.principalTitle,
      principal_quote: info.principalQuote,
      principal_photo_url: info.principalPhoto,
      tagline: info.tagline,
      vision: info.vision,
      missions: info.missions,
      history: info.history,
      google_maps_embed_url: info.googleMapsEmbedUrl,
      youtube_video_url: info.youtubeVideoUrl || '',
      facebook_url: info.socials.facebook,
      instagram_url: info.socials.instagram,
      youtube_url: info.socials.youtube,
      tiktok_url: info.socials.tiktok,
    });
    return !error;
  } catch {
    return false;
  }
}

// 2. HERO SLIDES
export async function getHeroSlidesDB(): Promise<HeroSlide[] | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('hero_slides')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !data) return null;

    return data.map((s) => ({
      id: s.id,
      title: s.title,
      subtitle: s.subtitle || '',
      badge: s.badge,
      description: s.description,
      ctaPrimary: s.cta_primary || '',
      ctaSecondary: s.cta_secondary || '',
      bgImage: s.bg_image_url,
    }));
  } catch {
    return null;
  }
}export async function saveHeroSlidesDB(slides: HeroSlide[]): Promise<boolean> {
  try {
    const supabase = createClient();
    const { data: existing } = await supabase.from('hero_slides').select('id, bg_image_url');
    const validIds = new Set(slides.map((s) => String(s.id)).filter((id) => isUuid(id)));
    const itemsToDelete = (existing || []).filter((e) => !validIds.has(e.id));
    if (itemsToDelete.length > 0) {
      for (const item of itemsToDelete) {
        if (item.bg_image_url && item.bg_image_url.includes('cloudinary.com')) {
          deleteFromCloudinary(item.bg_image_url);
        }
      }
      await supabase.from('hero_slides').delete().in('id', itemsToDelete.map((i) => i.id));
    }
    for (let i = 0; i < slides.length; i++) {
      const s = slides[i];
      const uuidVal = isUuid(s.id) ? (s.id as string) : undefined;
      const { error } = await supabase.from('hero_slides').upsert({
        ...(uuidVal ? { id: uuidVal } : {}),
        title: s.title,
        subtitle: s.subtitle,
        badge: s.badge,
        description: s.description,
        cta_primary: s.ctaPrimary,
        cta_secondary: s.ctaSecondary,
        bg_image_url: s.bgImage,
        sort_order: i + 1,
        is_active: true,
      });
      if (error) console.error('saveHeroSlidesDB error:', error);
    }
    return true;
  } catch (err) {
    console.error('saveHeroSlidesDB exception:', err);
    return false;
  }
}

// 3. NEWS ITEMS
export async function getNewsDB(): Promise<NewsItem[] | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('published_date', { ascending: false });

    if (error || !data) return null;

    return data.map((n) => ({
      id: n.id,
      slug: n.slug,
      title: n.title,
      category: n.category as NewsItem['category'],
      date: n.published_date,
      author: n.author_name,
      authorRole: n.author_role || '',
      readTime: `${n.read_time_minutes} menit`,
      imageUrl: n.image_url || '',
      image: n.image_url || '',
      summary: n.summary,
      content: n.content,
      tags: n.tags || [],
      featured: n.is_featured,
    }));
  } catch {
    return null;
  }
}

export async function saveNewsDB(newsList: NewsItem[]): Promise<boolean> {
  try {
    const supabase = createClient();
    const { data: existing } = await supabase.from('news').select('id, image_url');
    const validIds = new Set(newsList.map((n) => n.id).filter((id) => isUuid(id)));
    const itemsToDelete = (existing || []).filter((e) => !validIds.has(e.id));
    if (itemsToDelete.length > 0) {
      for (const item of itemsToDelete) {
        if (item.image_url && item.image_url.includes('cloudinary.com')) {
          deleteFromCloudinary(item.image_url);
        }
      }
      await supabase.from('news').delete().in('id', itemsToDelete.map((i) => i.id));
    }
    for (const item of newsList) {
      const uuidVal = isUuid(item.id) ? item.id : undefined;
      const readMinutes = parseInt(item.readTime) || 3;
      const { error } = await supabase.from('news').upsert({
        ...(uuidVal ? { id: uuidVal } : {}),
        slug: item.slug || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title: item.title,
        category: item.category,
        published_date: item.date.match(/^\d{4}-\d{2}-\d{2}$/) ? item.date : new Date().toISOString().split('T')[0],
        author_name: item.author,
        author_role: item.authorRole,
        read_time_minutes: readMinutes,
        image_url: item.imageUrl || item.image || '',
        summary: item.summary,
        content: item.content,
        tags: item.tags,
        is_featured: item.featured ?? false,
        is_published: true,
      });
      if (error) console.error('saveNewsDB error:', error);
    }
    return true;
  } catch (err) {
    console.error('saveNewsDB exception:', err);
    return false;
  }
}

// 4. PPDB APPLICANTS
export async function getApplicantsDB(): Promise<PpdbApplicant[] | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('ppdb_applicants')
      .select('*')
      .order('registration_date', { ascending: false });

    if (error || !data) return null;

    return data.map((a) => ({
      id: a.id,
      registrationNo: a.registration_no,
      fullName: a.full_name,
      nisn: a.nisn || '-',
      gender: a.gender as PpdbApplicant['gender'],
      originSchool: a.origin_school,
      parentName: a.parent_name,
      phone: a.phone,
      track: a.track as PpdbApplicant['track'],
      registrationDate: a.registration_date,
      status: a.status as PpdbApplicant['status'],
      notes: a.admin_notes || undefined,
      registrationType: a.registration_type as PpdbApplicant['registrationType'],
      birthPlace: a.birth_place || '',
      birthDate: a.birth_date || '',
      address: a.address || '',
      fatherName: a.fatherName || '',
      motherName: a.motherName || '',
      parentOccupation: a.parent_occupation || '',
      isDataComplete: a.is_data_complete,
    }));
  } catch {
    return null;
  }
}

export async function saveApplicantsDB(applicants: PpdbApplicant[]): Promise<boolean> {
  try {
    const supabase = createClient();
    const { data: existing } = await supabase.from('ppdb_applicants').select('id');
    const validIds = new Set(applicants.map((a) => a.id).filter((id) => isUuid(id)));
    const toDelete = (existing || []).map((e) => e.id).filter((id) => !validIds.has(id));
    if (toDelete.length > 0) {
      await supabase.from('ppdb_applicants').delete().in('id', toDelete);
    }
    for (const a of applicants) {
      const uuidVal = isUuid(a.id) ? a.id : undefined;
      const { error } = await supabase.from('ppdb_applicants').upsert({
        ...(uuidVal ? { id: uuidVal } : {}),
        registration_no: a.registrationNo,
        registration_type: a.registrationType || 'express',
        full_name: a.fullName,
        nisn: a.nisn,
        gender: a.gender,
        birth_place: a.birthPlace,
        birth_date: a.birthDate && a.birthDate.match(/^\d{4}-\d{2}-\d{2}$/) ? a.birthDate : null,
        address: a.address,
        origin_school: a.originSchool,
        track: a.track,
        parent_name: a.parentName,
        father_name: a.fatherName,
        mother_name: a.motherName,
        parent_occupation: a.parentOccupation,
        phone: a.phone,
        status: a.status,
        admin_notes: a.notes,
        is_data_complete: a.isDataComplete,
      });
      if (error) console.error('saveApplicantsDB error:', error);
    }
    return true;
  } catch (err) {
    console.error('saveApplicantsDB exception:', err);
    return false;
  }
}

// 5. STAFF
export async function getStaffDB(): Promise<StaffItem[] | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('staff')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !data) return null;

    return data.map((s) => ({
      id: s.id,
      name: s.name,
      role: s.role,
      department: s.department as StaffItem['department'],
      bidang: s.bidang || undefined,
      subject: s.subject || undefined,
      education: s.education,
      imageUrl: s.photo_url || '',
      photo: s.photo_url || '',
      quote: s.quote || undefined,
    }));
  } catch {
    return null;
  }
}

export async function saveStaffDB(staffList: StaffItem[]): Promise<boolean> {
  try {
    const supabase = createClient();
    const { data: existing } = await supabase.from('staff').select('id, photo_url');
    const validIds = new Set(staffList.map((s) => s.id).filter((id) => isUuid(id)));
    const itemsToDelete = (existing || []).filter((e) => !validIds.has(e.id));
    if (itemsToDelete.length > 0) {
      for (const item of itemsToDelete) {
        if (item.photo_url && item.photo_url.includes('cloudinary.com')) {
          deleteFromCloudinary(item.photo_url);
        }
      }
      await supabase.from('staff').delete().in('id', itemsToDelete.map((i) => i.id));
    }
    for (let i = 0; i < staffList.length; i++) {
      const s = staffList[i];
      const uuidVal = isUuid(s.id) ? s.id : undefined;
      const { error } = await supabase.from('staff').upsert({
        ...(uuidVal ? { id: uuidVal } : {}),
        name: s.name,
        role: s.role,
        department: s.department,
        bidang: s.bidang || null,
        subject: s.subject || null,
        education: s.education,
        photo_url: s.imageUrl || s.photo || '',
        quote: s.quote || null,
        sort_order: i + 1,
        is_active: true,
      });
      if (error) console.error('saveStaffDB error:', JSON.stringify(error));
    }
    return true;
  } catch (err) {
    console.error('saveStaffDB exception:', err);
    return false;
  }
}

// 6. GALLERY
export async function getGalleryDB(): Promise<GalleryItem[] | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !data) return null;

    return data.map((g) => ({
      id: g.id,
      title: g.title,
      category: g.category as GalleryItem['category'],
      imageUrl: g.image_url,
      date: g.event_date || new Date(g.created_at).toLocaleDateString('id-ID'),
      description: g.description || '',
    }));
  } catch {
    return null;
  }
}

export async function saveGalleryDB(galleryList: GalleryItem[]): Promise<boolean> {
  try {
    const supabase = createClient();
    const { data: existing } = await supabase.from('gallery').select('id, image_url');
    const validIds = new Set(galleryList.map((g) => g.id).filter((id) => isUuid(id)));
    const itemsToDelete = (existing || []).filter((e) => !validIds.has(e.id));
    if (itemsToDelete.length > 0) {
      for (const item of itemsToDelete) {
        if (item.image_url && item.image_url.includes('cloudinary.com')) {
          deleteFromCloudinary(item.image_url);
        }
      }
      await supabase.from('gallery').delete().in('id', itemsToDelete.map((i) => i.id));
    }
    for (let i = 0; i < galleryList.length; i++) {
      const g = galleryList[i];
      const uuidVal = isUuid(g.id) ? g.id : undefined;
      const { error } = await supabase.from('gallery').upsert({
        ...(uuidVal ? { id: uuidVal } : {}),
        title: g.title,
        category: g.category,
        image_url: g.imageUrl,
        description: g.description,
        sort_order: i + 1,
        is_published: true,
      });
      if (error) console.error('saveGalleryDB error:', error);
    }
    return true;
  } catch (err) {
    console.error('saveGalleryDB exception:', err);
    return false;
  }
}

// 7. AGENDAS
export async function getAgendasDB(): Promise<AgendaItem[] | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('agendas')
      .select('*')
      .order('event_date', { ascending: true });

    if (error || !data) return null;

    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGU', 'SEP', 'OKT', 'NOV', 'DES'];

    return data.map((a) => {
      const d = new Date(a.event_date);
      return {
        id: a.id,
        day: String(d.getDate()).padStart(2, '0'),
        month: monthNames[d.getMonth()] || 'AGU',
        year: String(d.getFullYear()),
        title: a.title,
        time: `${a.event_time_start || '07.30'} - ${a.event_time_end || '13.00'} WIB`,
        location: a.location,
        category: a.category,
      };
    });
  } catch {
    return null;
  }
}

export async function saveAgendasDB(agendas: AgendaItem[]): Promise<boolean> {
  try {
    const supabase = createClient();
    const { data: existing } = await supabase.from('agendas').select('id');
    const validIds = new Set(agendas.map((a) => a.id).filter((id) => isUuid(id)));
    const toDelete = (existing || []).map((e) => e.id).filter((id) => !validIds.has(id));
    if (toDelete.length > 0) {
      await supabase.from('agendas').delete().in('id', toDelete);
    }
    for (const a of agendas) {
      const uuidVal = isUuid(a.id) ? a.id : undefined;
      const year = a.year || '2027';
      const monthMap: Record<string, string> = {
        JAN: '01', FEB: '02', MAR: '03', APR: '04', MEI: '05', JUN: '06',
        JUL: '07', AGU: '08', SEP: '09', OKT: '10', NOV: '11', DES: '12',
      };
      const monthNum = monthMap[a.month.toUpperCase()] || '08';
      const formattedDate = `${year}-${monthNum}-${a.day.padStart(2, '0')}`;

      const { error } = await supabase.from('agendas').upsert({
        ...(uuidVal ? { id: uuidVal } : {}),
        title: a.title,
        event_date: formattedDate,
        location: a.location,
        category: a.category,
        is_published: true,
      });
      if (error) console.error('saveAgendasDB error:', error);
    }
    return true;
  } catch (err) {
    console.error('saveAgendasDB exception:', err);
    return false;
  }
}

// 8. OSIS OFFICERS
export async function getOsisOfficersDB(): Promise<OsisOfficer[] | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('osis_officers')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !data) return null;

    return data.map((o) => ({
      id: o.id,
      position: o.position,
      name: o.name,
      className: o.class_name,
    }));
  } catch {
    return null;
  }
}

export async function saveOsisOfficersDB(officers: OsisOfficer[]): Promise<boolean> {
  try {
    const supabase = createClient();
    const { data: existing } = await supabase.from('osis_officers').select('id');
    const validIds = new Set(officers.map((o) => o.id).filter((id) => isUuid(id)));
    const toDelete = (existing || []).map((e) => e.id).filter((id) => !validIds.has(id));
    if (toDelete.length > 0) {
      await supabase.from('osis_officers').delete().in('id', toDelete);
    }
    for (let i = 0; i < officers.length; i++) {
      const o = officers[i];
      const uuidVal = isUuid(o.id) ? o.id : undefined;
      const { error } = await supabase.from('osis_officers').upsert({
        ...(uuidVal ? { id: uuidVal } : {}),
        period: '2027/2028',
        position: o.position,
        name: o.name,
        class_name: o.className,
        sort_order: i + 1,
        is_active: true,
      });
      if (error) console.error('saveOsisOfficersDB error:', error);
    }
    return true;
  } catch (err) {
    console.error('saveOsisOfficersDB exception:', err);
    return false;
  }
}

// 9. IPNU INFO
export async function getIpnuInfoDB(): Promise<IpnuInfo | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('ipnu_info')
      .select('*')
      .eq('is_active', true)
      .limit(1)
      .single();

    if (error || !data) return null;

    return {
      title: data.title,
      period: data.period,
      description: data.description,
      sections: data.sections || [],
      leaderName: data.leader_name,
      leaderClass: data.leader_class,
    };
  } catch {
    return null;
  }
}

export async function saveIpnuInfoDB(info: IpnuInfo): Promise<boolean> {
  try {
    const supabase = createClient();
    const { error } = await supabase.from('ipnu_info').upsert({
      title: info.title,
      period: info.period,
      description: info.description,
      sections: info.sections,
      leader_name: info.leaderName,
      leader_class: info.leaderClass,
      is_active: true,
    });
    return !error;
  } catch {
    return false;
  }
}

// ============================================================
// 10. PROGRAMS
// ============================================================
export async function getProgramsDB(): Promise<ProgramItem[] | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) return null;

    return (data || []).map((p) => ({
      id: p.slug || p.id,
      title: p.title,
      badge: p.badge || '',
      shortDesc: p.short_desc || '',
      fullDesc: p.full_desc || '',
      iconName: p.icon_name || 'Star',
      highlights: p.highlights || [],
      schedule: p.schedule || '',
      imageUrl: p.image_url || '',
    }));
  } catch {
    return null;
  }
}

export async function saveProgramsDB(programs: ProgramItem[]): Promise<boolean> {
  try {
    const supabase = createClient();
    const { data: existing } = await supabase.from('programs').select('id, slug');
    const validSlugs = new Set(programs.map((p) => p.id));
    const toDelete = (existing || []).filter((e) => !validSlugs.has(e.slug) && !validSlugs.has(e.id)).map((e) => e.id);
    if (toDelete.length > 0) {
      await supabase.from('programs').delete().in('id', toDelete);
    }
    for (let i = 0; i < programs.length; i++) {
      const p = programs[i];
      await supabase.from('programs').upsert({
        slug: p.id,
        title: p.title,
        badge: p.badge,
        short_desc: p.shortDesc,
        full_desc: p.fullDesc,
        icon_name: p.iconName,
        highlights: p.highlights,
        schedule: p.schedule,
        image_url: p.imageUrl,
        sort_order: i + 1,
        is_active: true,
      }, { onConflict: 'slug' });
    }
    return true;
  } catch {
    return false;
  }
}

// ============================================================
// 11. EXTRACURRICULARS
// ============================================================
export async function getExtracurricularsDB(): Promise<ExtracurricularItem[] | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('extracurriculars')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) return null;

    return (data || []).map((e) => ({
      id: e.slug || e.id,
      name: e.name,
      coach: e.coach || '',
      schedule: e.schedule || '',
      description: e.description || '',
      iconName: e.icon_name || 'Activity',
      achievements: e.achievements || [],
      imageUrl: e.image_url || '',
    }));
  } catch {
    return null;
  }
}

export async function saveExtracurricularsDB(ekskulList: ExtracurricularItem[]): Promise<boolean> {
  try {
    const supabase = createClient();
    const { data: existing } = await supabase.from('extracurriculars').select('id, slug');
    const validSlugs = new Set(ekskulList.map((e) => e.id));
    const toDelete = (existing || []).filter((e) => !validSlugs.has(e.slug) && !validSlugs.has(e.id)).map((e) => e.id);
    if (toDelete.length > 0) {
      await supabase.from('extracurriculars').delete().in('id', toDelete);
    }
    for (let i = 0; i < ekskulList.length; i++) {
      const e = ekskulList[i];
      await supabase.from('extracurriculars').upsert({
        slug: e.id,
        name: e.name,
        coach: e.coach,
        schedule: e.schedule,
        description: e.description,
        icon_name: e.iconName,
        achievements: e.achievements,
        image_url: e.imageUrl,
        sort_order: i + 1,
        is_active: true,
      }, { onConflict: 'slug' });
    }
    return true;
  } catch {
    return false;
  }
}

// ============================================================
// 12. FACILITIES
// ============================================================
export async function getFacilitiesDB(): Promise<import('@/data/schoolData').FacilityItem[] | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('facilities')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) return null;

    return (data || []).map((f) => ({
      id: f.id,
      name: f.name,
      description: f.description || '',
      imageUrl: f.image_url || '',
      count: f.count_label || '',
    }));
  } catch {
    return null;
  }
}

export async function saveFacilitiesDB(facilities: import('@/data/schoolData').FacilityItem[]): Promise<boolean> {
  try {
    const supabase = createClient();
    const { data: existing } = await supabase.from('facilities').select('id');
    const validIds = new Set(facilities.map((f) => f.id).filter((id) => isUuid(id)));
    const toDelete = (existing || []).map((e) => e.id).filter((id) => !validIds.has(id));
    if (toDelete.length > 0) {
      await supabase.from('facilities').delete().in('id', toDelete);
    }
    for (let i = 0; i < facilities.length; i++) {
      const f = facilities[i];
      const uuidVal = isUuid(f.id) ? f.id : undefined;
      const { error } = await supabase.from('facilities').upsert({
        ...(uuidVal ? { id: uuidVal } : {}),
        name: f.name,
        description: f.description,
        image_url: f.imageUrl,
        count_label: f.count,
        sort_order: i + 1,
        is_active: true,
      });
      if (error) console.error('saveFacilitiesDB error:', error);
    }
    return true;
  } catch (err) {
    console.error('saveFacilitiesDB exception:', err);
    return false;
  }
}

// ============================================================
// 13. TESTIMONIALS
// ============================================================
export async function getTestimonialsDB(): Promise<TestimonialItem[] | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true });

    if (error) return null;

    return (data || []).map((t) => ({
      id: t.id,
      name: t.name,
      role: t.role,
      quote: t.quote,
      photoUrl: t.photo_url || '',
    }));
  } catch {
    return null;
  }
}

export async function saveTestimonialsDB(testimonialsList: TestimonialItem[]): Promise<boolean> {
  try {
    const supabase = createClient();
    const { data: existing } = await supabase.from('testimonials').select('id');
    const validIds = new Set(testimonialsList.map((t) => t.id).filter((id) => isUuid(id)));
    const toDelete = (existing || []).map((e) => e.id).filter((id) => !validIds.has(id));
    if (toDelete.length > 0) {
      await supabase.from('testimonials').delete().in('id', toDelete);
    }
    for (let i = 0; i < testimonialsList.length; i++) {
      const t = testimonialsList[i];
      const uuidVal = isUuid(t.id) ? t.id : undefined;
      const { error } = await supabase.from('testimonials').upsert({
        ...(uuidVal ? { id: uuidVal } : {}),
        name: t.name,
        role: t.role,
        quote: t.quote,
        photo_url: t.photoUrl || '',
        sort_order: i + 1,
        is_published: true,
      });
      if (error) console.error('saveTestimonialsDB error:', error);
    }
    return true;
  } catch (err) {
    console.error('saveTestimonialsDB exception:', err);
    return false;
  }
}

// ============================================================
// 14. PPDB FAQS
// ============================================================
export async function getPpdbFaqsDB(): Promise<import('@/data/schoolData').PpdbFaqItem[] | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('ppdb_faqs')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) return null;

    return (data || []).map((f) => ({
      id: f.id,
      question: f.question,
      answer: f.answer,
    }));
  } catch {
    return null;
  }
}

export async function savePpdbFaqsDB(faqsList: import('@/data/schoolData').PpdbFaqItem[]): Promise<boolean> {
  try {
    const supabase = createClient();
    for (let i = 0; i < faqsList.length; i++) {
      const f = faqsList[i];
      await supabase.from('ppdb_faqs').upsert({
        question: f.question,
        answer: f.answer,
        sort_order: i + 1,
        is_active: true,
      });
    }
    return true;
  } catch {
    return false;
  }
}
