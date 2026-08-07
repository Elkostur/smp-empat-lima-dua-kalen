import { createClient } from '@/lib/supabase/client';
import { schoolInfo as defaultSchoolInfo } from '@/data/schoolData';

export async function fetchSchoolInfo() {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('school_info')
      .select('*')
      .eq('id', 1)
      .single();

    if (error || !data) return defaultSchoolInfo;

    return {
      name: data.name,
      shortName: data.short_name || defaultSchoolInfo.shortName,
      foundation: data.foundation || defaultSchoolInfo.foundation,
      npsn: data.npsn || defaultSchoolInfo.npsn,
      accreditation: data.accreditation || defaultSchoolInfo.accreditation,
      address: data.address || defaultSchoolInfo.address,
      district: data.district || defaultSchoolInfo.district,
      regency: data.regency || defaultSchoolInfo.regency,
      province: data.province || defaultSchoolInfo.province,
      postalCode: data.postal_code || defaultSchoolInfo.postalCode,
      phone: data.phone || defaultSchoolInfo.phone,
      whatsapp: data.whatsapp || defaultSchoolInfo.whatsapp,
      email: data.email || defaultSchoolInfo.email,
      operatingHours: data.operating_hours || defaultSchoolInfo.operatingHours,
      principal: data.principal_name || defaultSchoolInfo.principal,
      principalTitle: data.principal_title || defaultSchoolInfo.principalTitle,
      principalQuote: data.principal_quote || defaultSchoolInfo.principalQuote,
      principalPhoto: data.principal_photo_url || defaultSchoolInfo.principalPhoto,
      tagline: data.tagline || defaultSchoolInfo.tagline,
      vision: data.vision || defaultSchoolInfo.vision,
      missions: data.missions && data.missions.length ? data.missions : defaultSchoolInfo.missions,
      history: data.history || defaultSchoolInfo.history,
      googleMapsEmbedUrl: data.google_maps_embed_url || defaultSchoolInfo.googleMapsEmbedUrl,
      socials: {
        facebook: data.facebook_url || defaultSchoolInfo.socials.facebook,
        instagram: data.instagram_url || defaultSchoolInfo.socials.instagram,
        youtube: data.youtube_url || defaultSchoolInfo.socials.youtube,
        tiktok: data.tiktok_url || defaultSchoolInfo.socials.tiktok,
      },
    };
  } catch {
    return defaultSchoolInfo;
  }
}

export async function fetchHeroSlides() {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('hero_slides')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) return null;

    return data.map((slide) => ({
      id: slide.id,
      title: slide.title,
      subtitle: slide.subtitle || undefined,
      badge: slide.badge,
      description: slide.description,
      ctaPrimary: slide.cta_primary || undefined,
      ctaSecondary: slide.cta_secondary || undefined,
      bgImage: slide.bg_image_url,
    }));
  } catch {
    return null;
  }
}
