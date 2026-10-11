'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { sortNewsByDateDesc } from '@/lib/utils';
import {
  schoolInfo as defaultSchoolInfo,
  heroSlides as defaultHeroSlides,
  newsData as defaultNewsItems,
  programsData as defaultPrograms,
  extracurricularsData as defaultEkskul,
  staffData as defaultStaff,
  galleryData as defaultGallery,
  testimonials as defaultTestimonials,
  facilitiesData as defaultFacilities,
  ppdbFaqs as defaultFaqs,
  SchoolInfo,
  HeroSlide,
  NewsItem,
  StaffItem,
  GalleryItem,
  ProgramItem,
  ExtracurricularItem,
} from '@/data/schoolData';
import {
  getSchoolInfoDB,
  updateSchoolInfoDB,
  getHeroSlidesDB,
  saveHeroSlidesDB,
  getNewsDB,
  saveNewsDB,
  getApplicantsDB,
  saveApplicantsDB,
  getStaffDB,
  saveStaffDB,
  getGalleryDB,
  saveGalleryDB,
  getAgendasDB,
  saveAgendasDB,
  getOsisOfficersDB,
  saveOsisOfficersDB,
  getIpnuInfoDB,
  saveIpnuInfoDB,
  getProgramsDB,
  saveProgramsDB,
  getExtracurricularsDB,
  saveExtracurricularsDB,
  getFacilitiesDB,
  saveFacilitiesDB,
  getTestimonialsDB,
  saveTestimonialsDB,
  getPpdbFaqsDB,
  savePpdbFaqsDB,
} from '@/lib/services/content.service';

export type { HeroSlide };

export interface AgendaItem {
  id: string;
  day: string;
  month: string;
  year?: string;
  title: string;
  time: string;
  location: string;
  category: string;
}

export interface OsisOfficer {
  id: string;
  position: string;
  name: string;
  className: string;
}

export interface IpnuInfo {
  title: string;
  period: string;
  description: string;
  sections: string[];
  leaderName: string;
  leaderClass: string;
}

export const defaultOsisOfficers: OsisOfficer[] = [
  { id: 'osis-1', position: 'Ketua OSIS', name: 'Muhammad Naufal Rizky', className: 'VIII-A' },
  { id: 'osis-2', position: 'Wakil Ketua', name: 'Aisyah Nur Aini', className: 'VIII-B' },
  { id: 'osis-3', position: 'Sekretaris', name: 'Siti Rahmawati', className: 'VIII-A' },
  { id: 'osis-4', position: 'Bendahara', name: 'Ahmad Farhan', className: 'VIII-C' },
];

export const defaultIpnuInfo: IpnuInfo = {
  title: 'Pimpinan Komisariat IPNU & IPPNU SMP 45 2 Kedungpring',
  period: 'Masa Bakti 2027/2028',
  description: 'Selain OSIS, siswa SMP 45 2 Kedungpring juga dibina dalam wadah PK IPNU (Ikatan Pelajar Nahdlatul Ulama) dan IPPNU (Ikatan Pelajar Putri Nahdlatul Ulama) untuk mengukuhkan wawasan Aswaja & An-Nahdliyah.',
  sections: ['Keagamaan', 'Olahraga & Kesehatan', 'Kesenian & Budaya', 'Humas & Publikasi Digital'],
  leaderName: 'M. Zidan Al-Farizi (Ketua PK IPNU)',
  leaderClass: 'IX-A',
};

export const defaultAgendas: AgendaItem[] = [
  {
    id: 'ag-1',
    day: '10',
    month: 'AGU',
    year: '2027',
    title: 'Ujian Munaqosyah Tahfidz Al-Qur\'an Juz 30 Gelombang I',
    time: '08.00 - 12.00 WIB',
    location: 'Musholla Ma\'arif SMP 45 2 Kedungpring',
    category: 'Akademik',
  },
  {
    id: 'ag-2',
    day: '17',
    month: 'AGU',
    year: '2027',
    title: 'Upacara Bendera HUT Kemerdekaan RI Ke-82 & Atraksi Drumband',
    time: '07.00 - 10.30 WIB',
    location: 'Lapangan Utama Sekolah',
    category: 'Nasional',
  },
  {
    id: 'ag-3',
    day: '05',
    month: 'SEP',
    year: '2027',
    title: 'Tryout Simulasi Asesmen Nasional Berbasis Komputer (ANBK)',
    time: '07.30 - 13.00 WIB',
    location: 'Laboratorium Komputer CBT',
    category: 'Ujian Digital',
  },
  {
    id: 'ag-4',
    day: '22',
    month: 'OKT',
    year: '2027',
    title: 'Peringatan Hari Santri Nasional (HSN) & Pawai Ta\'aruf Ma\'arif',
    time: '06.30 - 11.30 WIB',
    location: 'Area Kecamatan Kedungpring',
    category: 'Keagamaan',
  },
];

export interface PpdbApplicant {
  id: string;
  registrationNo: string;
  fullName: string;
  nisn: string;
  gender: 'Laki-Laki' | 'Perempuan';
  originSchool: string;
  parentName: string;
  phone: string;
  track: 'Reguler' | 'Prestasi' | 'Tahfidz Qur\'an' | 'Undangan Yayasan';
  registrationDate: string;
  status: 'Menunggu Verifikasi' | 'Diterima' | 'Perlu Perbaikan' | 'Ditolak';
  notes?: string;
  registrationType?: 'express' | 'full';
  birthPlace?: string;
  birthDate?: string;
  address?: string;
  fatherName?: string;
  motherName?: string;
  parentOccupation?: string;
  isDataComplete?: boolean;
}

export const initialApplicants: PpdbApplicant[] = [
  {
    id: 'ppdb-101',
    registrationNo: 'PPDB2027-001',
    fullName: 'M. Rizky Firmansyah',
    nisn: '0129384751',
    gender: 'Laki-Laki',
    originSchool: 'SDN Kalen 01 Kedungpring',
    parentName: 'H. Suwarno',
    phone: '085712345678',
    track: 'Reguler',
    registrationDate: '2027-08-01 09:30',
    status: 'Diterima',
    notes: 'Berkas pendaftaran lengkap. Bebas biaya pendaftaran Gel. 1.',
    registrationType: 'full',
    birthPlace: 'Lamongan',
    birthDate: '2014-05-12',
    address: 'Dusun Kalen RT 02 RW 01 Desa Kalen, Kedungpring',
    fatherName: 'H. Suwarno',
    motherName: 'Hj. Aminah',
    parentOccupation: 'Wiraswasta',
    isDataComplete: true,
  },
  {
    id: 'ppdb-102',
    registrationNo: 'PPDB2027-002',
    fullName: 'Siti Nur Safira',
    nisn: '0138475620',
    gender: 'Perempuan',
    originSchool: 'MI Ma\'arif Kalen',
    parentName: 'Ahmad Mujib',
    phone: '081298765432',
    track: 'Tahfidz Qur\'an',
    registrationDate: '2027-08-02 11:15',
    status: 'Menunggu Verifikasi',
    notes: 'Memiliki sertifikat juz 30. Siapkan wawancara tes hafalan.',
    registrationType: 'full',
    birthPlace: 'Lamongan',
    birthDate: '2014-08-20',
    address: 'Desa Maindu RT 01 RW 03, Kedungpring',
    fatherName: 'Ahmad Mujib',
    motherName: 'Siti Rahmah',
    parentOccupation: 'Petani',
    isDataComplete: true,
  },
];

function sanitizeHeroSlides(slides: HeroSlide[]): HeroSlide[] {
  if (!Array.isArray(slides) || slides.length === 0) return defaultHeroSlides;
  return slides.map((s, idx) => {
    const fallback = defaultHeroSlides[idx % defaultHeroSlides.length] || defaultHeroSlides[0];
    return {
      ...s,
      bgImage: (s.bgImage && s.bgImage.trim() !== '' ? s.bgImage : null) || (s.imageUrl && s.imageUrl.trim() !== '' ? s.imageUrl : null) || fallback.bgImage || '',
      badge: s.badge || fallback.badge,
      description: s.description || s.subtitle || fallback.description,
      ctaPrimary: s.ctaPrimary || fallback.ctaPrimary,
      ctaSecondary: s.ctaSecondary || fallback.ctaSecondary,
    };
  });
}

function getStoredValue<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export interface AdminStoreState {
  schoolInfo: SchoolInfo;
  heroSlides: HeroSlide[];
  news: NewsItem[];
  applicants: PpdbApplicant[];
  programs: ProgramItem[];
  extracurriculars: ExtracurricularItem[];
  staff: StaffItem[];
  gallery: GalleryItem[];
  agendas: AgendaItem[];
  testimonials: typeof defaultTestimonials;
  facilities: typeof defaultFacilities;
  faqs: typeof defaultFaqs;
  osisOfficers: OsisOfficer[];
  ipnuInfo: IpnuInfo;
}

let globalState: AdminStoreState = {
  schoolInfo: defaultSchoolInfo,
  heroSlides: defaultHeroSlides,
  news: sortNewsByDateDesc(defaultNewsItems),
  applicants: initialApplicants,
  programs: defaultPrograms,
  extracurriculars: defaultEkskul,
  staff: defaultStaff,
  gallery: defaultGallery,
  agendas: defaultAgendas,
  testimonials: defaultTestimonials,
  facilities: defaultFacilities,
  faqs: defaultFaqs,
  osisOfficers: defaultOsisOfficers,
  ipnuInfo: defaultIpnuInfo,
};

let hasHydratedStorage = false;
let isSyncingSupabase = false;
let hasSyncedSupabase = false;
const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot(): AdminStoreState {
  return globalState;
}

function getServerSnapshot(): AdminStoreState {
  return globalState;
}

function saveSilent(key: string, data: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {}
}

function saveAndDispatch(key: string, data: unknown) {
  saveSilent(key, data);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new Event('smp45_data_updated'));
  }
}

function hydrateFromStorage() {
  if (typeof window === 'undefined') return;
  try {
    const cached = localStorage.getItem('smp45_school_info');
    if (cached && (cached.includes('dino1@') || cached.includes('Dinosaurus') || cached.includes('Tyrannosaurus'))) {
      localStorage.clear();
    }
  } catch {}

  globalState = {
    schoolInfo: getStoredValue('smp45_school_info', defaultSchoolInfo),
    heroSlides: sanitizeHeroSlides(getStoredValue('smp45_hero_slides', defaultHeroSlides)),
    news: sortNewsByDateDesc(getStoredValue('smp45_news', defaultNewsItems)),
    applicants: getStoredValue('smp45_applicants', initialApplicants),
    staff: getStoredValue('smp45_staff', defaultStaff),
    gallery: getStoredValue('smp45_gallery', defaultGallery),
    agendas: getStoredValue('smp45_agendas', defaultAgendas),
    osisOfficers: getStoredValue('smp45_osis_officers', defaultOsisOfficers),
    ipnuInfo: getStoredValue('smp45_ipnu_info', defaultIpnuInfo),
    programs: getStoredValue('smp45_programs', defaultPrograms),
    extracurriculars: getStoredValue('smp45_ekskul', defaultEkskul),
    facilities: getStoredValue('smp45_facilities', defaultFacilities),
    testimonials: getStoredValue('smp45_testimonials', defaultTestimonials),
    faqs: getStoredValue('smp45_faqs', defaultFaqs),
  };
  hasHydratedStorage = true;
  notifyListeners();
}

async function syncFromSupabase() {
  if (typeof window === 'undefined' || isSyncingSupabase || hasSyncedSupabase) return;
  isSyncingSupabase = true;

  try {
    const [
      dbInfo,
      dbSlides,
      dbNews,
      dbApplicants,
      dbStaff,
      dbGallery,
      dbAgendas,
      dbOsis,
      dbIpnu,
      dbPrograms,
      dbEkskul,
      dbFacilities,
      dbTestimonials,
      dbFaqs,
    ] = await Promise.all([
      getSchoolInfoDB(),
      getHeroSlidesDB(),
      getNewsDB(),
      getApplicantsDB(),
      getStaffDB(),
      getGalleryDB(),
      getAgendasDB(),
      getOsisOfficersDB(),
      getIpnuInfoDB(),
      getProgramsDB(),
      getExtracurricularsDB(),
      getFacilitiesDB(),
      getTestimonialsDB(),
      getPpdbFaqsDB(),
    ]);

    let changed = false;
    const nextState = { ...globalState };

    if (dbInfo) { nextState.schoolInfo = dbInfo; saveSilent('smp45_school_info', dbInfo); changed = true; }
    if (dbSlides) { const s = sanitizeHeroSlides(dbSlides); nextState.heroSlides = s; saveSilent('smp45_hero_slides', s); changed = true; }
    if (dbNews) { const sNews = sortNewsByDateDesc(dbNews); nextState.news = sNews; saveSilent('smp45_news', sNews); changed = true; }
    if (dbApplicants) { nextState.applicants = dbApplicants; saveSilent('smp45_applicants', dbApplicants); changed = true; }
    if (dbStaff) { nextState.staff = dbStaff; saveSilent('smp45_staff', dbStaff); changed = true; }
    if (dbGallery) { nextState.gallery = dbGallery; saveSilent('smp45_gallery', dbGallery); changed = true; }
    if (dbAgendas) { nextState.agendas = dbAgendas; saveSilent('smp45_agendas', dbAgendas); changed = true; }
    if (dbOsis) { nextState.osisOfficers = dbOsis; saveSilent('smp45_osis_officers', dbOsis); changed = true; }
    if (dbIpnu) { nextState.ipnuInfo = dbIpnu; saveSilent('smp45_ipnu_info', dbIpnu); changed = true; }
    if (dbPrograms) { nextState.programs = dbPrograms; saveSilent('smp45_programs', dbPrograms); changed = true; }
    if (dbEkskul) { nextState.extracurriculars = dbEkskul; saveSilent('smp45_ekskul', dbEkskul); changed = true; }
    if (dbFacilities) { nextState.facilities = dbFacilities; saveSilent('smp45_facilities', dbFacilities); changed = true; }
    if (dbTestimonials) { nextState.testimonials = dbTestimonials; saveSilent('smp45_testimonials', dbTestimonials); changed = true; }
    if (dbFaqs) { nextState.faqs = dbFaqs; saveSilent('smp45_faqs', dbFaqs); changed = true; }

    hasSyncedSupabase = true;
    if (changed) {
      globalState = nextState;
      notifyListeners();
    }
  } catch (err) {
    console.error('Failed to sync from Supabase:', err);
  } finally {
    isSyncingSupabase = false;
  }
}

export function useAdminDataStore() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (!hasHydratedStorage) {
      hydrateFromStorage();
    }
    syncFromSupabase();

    const handleExternalUpdate = () => {
      hydrateFromStorage();
    };
    window.addEventListener('storage', handleExternalUpdate);
    window.addEventListener('smp45_data_updated', handleExternalUpdate);
    return () => {
      window.removeEventListener('storage', handleExternalUpdate);
      window.removeEventListener('smp45_data_updated', handleExternalUpdate);
    };
  }, []);

  return {
    ...state,
    setSchoolInfo: (data: SchoolInfo) => {
      globalState = { ...globalState, schoolInfo: data };
      saveAndDispatch('smp45_school_info', data);
      updateSchoolInfoDB(data);

      if (data.principal || data.principalPhoto) {
        let staffUpdated = false;
        const newStaff = globalState.staff.map((s) => {
          if (s.department === 'Kepala Sekolah' || s.role === 'Kepala Sekolah') {
            staffUpdated = true;
            return {
              ...s,
              name: data.principal || s.name,
              imageUrl: data.principalPhoto || s.imageUrl,
            };
          }
          return s;
        });
        if (staffUpdated) {
          globalState = { ...globalState, staff: newStaff };
          saveAndDispatch('smp45_staff', newStaff);
          saveStaffDB(newStaff);
        }
      }
      notifyListeners();
    },
    setHeroSlides: (data: typeof defaultHeroSlides) => {
      globalState = { ...globalState, heroSlides: data };
      saveAndDispatch('smp45_hero_slides', data);
      saveHeroSlidesDB(data);
      notifyListeners();
    },
    setNews: (data: NewsItem[]) => {
      const sorted = sortNewsByDateDesc(data);
      globalState = { ...globalState, news: sorted };
      saveAndDispatch('smp45_news', sorted);
      saveNewsDB(sorted);
      notifyListeners();
    },
    setApplicants: (data: PpdbApplicant[]) => {
      globalState = { ...globalState, applicants: data };
      saveAndDispatch('smp45_applicants', data);
      saveApplicantsDB(data);
      notifyListeners();
    },
    setPrograms: (data: ProgramItem[]) => {
      globalState = { ...globalState, programs: data };
      saveAndDispatch('smp45_programs', data);
      saveProgramsDB(data);
      notifyListeners();
    },
    setExtracurriculars: (data: ExtracurricularItem[]) => {
      globalState = { ...globalState, extracurriculars: data };
      saveAndDispatch('smp45_ekskul', data);
      saveExtracurricularsDB(data);
      notifyListeners();
    },
    setStaff: (data: StaffItem[]) => {
      globalState = { ...globalState, staff: data };
      saveAndDispatch('smp45_staff', data);
      saveStaffDB(data);
      notifyListeners();
    },
    gallery: state.gallery,
    setGallery: (data: GalleryItem[]) => {
      globalState = { ...globalState, gallery: data };
      saveAndDispatch('smp45_gallery', data);
      saveGalleryDB(data);
      notifyListeners();
    },
    setAgendas: (data: AgendaItem[]) => {
      globalState = { ...globalState, agendas: data };
      saveAndDispatch('smp45_agendas', data);
      saveAgendasDB(data);
      notifyListeners();
    },
    setTestimonials: (data: typeof defaultTestimonials) => {
      globalState = { ...globalState, testimonials: data };
      saveAndDispatch('smp45_testimonials', data);
      saveTestimonialsDB(data);
      notifyListeners();
    },
    setFacilities: (data: typeof defaultFacilities) => {
      globalState = { ...globalState, facilities: data };
      saveAndDispatch('smp45_facilities', data);
      saveFacilitiesDB(data);
      notifyListeners();
    },
    setFaqs: (data: typeof defaultFaqs) => {
      globalState = { ...globalState, faqs: data };
      saveAndDispatch('smp45_faqs', data);
      savePpdbFaqsDB(data);
      notifyListeners();
    },
    setOsisOfficers: (data: OsisOfficer[]) => {
      globalState = { ...globalState, osisOfficers: data };
      saveAndDispatch('smp45_osis_officers', data);
      saveOsisOfficersDB(data);
      notifyListeners();
    },
    setIpnuInfo: (data: IpnuInfo) => {
      globalState = { ...globalState, ipnuInfo: data };
      saveAndDispatch('smp45_ipnu_info', data);
      saveIpnuInfoDB(data);
      notifyListeners();
    },
  };
}
