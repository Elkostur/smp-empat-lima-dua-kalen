'use client';

import { useState, useEffect } from 'react';
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

function getStoredValue<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function useAdminDataStore() {
  const [schoolInfo, setSchoolInfoState] = useState<SchoolInfo>(defaultSchoolInfo);
  const [heroSlides, setHeroSlidesState] = useState(defaultHeroSlides);
  const [news, setNewsState] = useState<NewsItem[]>(defaultNewsItems);
  const [applicants, setApplicantsState] = useState<PpdbApplicant[]>(initialApplicants);
  const [programs, setProgramsState] = useState<ProgramItem[]>(defaultPrograms);
  const [extracurriculars, setExtracurricularsState] = useState<ExtracurricularItem[]>(defaultEkskul);
  const [staff, setStaffState] = useState<StaffItem[]>(defaultStaff);
  const [gallery, setGalleryState] = useState<GalleryItem[]>(defaultGallery);
  const [agendas, setAgendasState] = useState<AgendaItem[]>(defaultAgendas);
  const [testimonials, setTestimonialsState] = useState(defaultTestimonials);
  const [facilities, setFacilitiesState] = useState(defaultFacilities);
  const [faqs, setFaqsState] = useState(defaultFaqs);
  const [osisOfficers, setOsisOfficersState] = useState<OsisOfficer[]>(defaultOsisOfficers);
  const [ipnuInfo, setIpnuInfoState] = useState<IpnuInfo>(defaultIpnuInfo);

  // Sync back local storage helper
  const saveToStorage = (key: string, data: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('storage'));
        window.dispatchEvent(new Event('smp45_data_updated'));
      }
    } catch {
      // ignore
    }
  };

  // Hydrate from Supabase first, fallback to localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let isMounted = true;

    // Invalidate defaced dinosaur data if present in localStorage
    try {
      const cached = localStorage.getItem('smp45_school_info');
      if (cached && (cached.includes('dino1@') || cached.includes('Dinosaurus') || cached.includes('Tyrannosaurus'))) {
        localStorage.clear();
      }
    } catch {
      // ignore
    }

    function reloadDataFromStorage() {
      setSchoolInfoState(getStoredValue('smp45_school_info', defaultSchoolInfo));
      setHeroSlidesState(getStoredValue('smp45_hero_slides', defaultHeroSlides));
      setNewsState(getStoredValue('smp45_news', defaultNewsItems));
      setApplicantsState(getStoredValue('smp45_applicants', initialApplicants));
      setStaffState(getStoredValue('smp45_staff', defaultStaff));
      setGalleryState(getStoredValue('smp45_gallery', defaultGallery));
      setAgendasState(getStoredValue('smp45_agendas', defaultAgendas));
      setOsisOfficersState(getStoredValue('smp45_osis_officers', defaultOsisOfficers));
      setIpnuInfoState(getStoredValue('smp45_ipnu_info', defaultIpnuInfo));
      setProgramsState(getStoredValue('smp45_programs', defaultPrograms));
      setExtracurricularsState(getStoredValue('smp45_ekskul', defaultEkskul));
      setFacilitiesState(getStoredValue('smp45_facilities', defaultFacilities));
      setTestimonialsState(getStoredValue('smp45_testimonials', defaultTestimonials));
      setFaqsState(getStoredValue('smp45_faqs', defaultFaqs));
    }

    // Hydrate state from localStorage on client mount
    reloadDataFromStorage();

    async function loadFromSupabase() {
      // Fetch ALL data from Supabase in parallel
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

      if (!isMounted) return;

      // Supabase is the source of truth.
      // Update state AND cache to localStorage so subsequent reloads are instant
      if (dbInfo) {
        setSchoolInfoState(dbInfo);
        saveToStorage('smp45_school_info', dbInfo);
      }
      if (dbSlides) {
        setHeroSlidesState(dbSlides);
        saveToStorage('smp45_hero_slides', dbSlides);
      }
      if (dbNews) {
        setNewsState(dbNews);
        saveToStorage('smp45_news', dbNews);
      }
      if (dbApplicants) {
        setApplicantsState(dbApplicants);
        saveToStorage('smp45_applicants', dbApplicants);
      }
      if (dbStaff) {
        setStaffState(dbStaff);
        saveToStorage('smp45_staff', dbStaff);
      }
      if (dbGallery) {
        setGalleryState(dbGallery);
        saveToStorage('smp45_gallery', dbGallery);
      }
      if (dbAgendas) {
        setAgendasState(dbAgendas);
        saveToStorage('smp45_agendas', dbAgendas);
      }
      if (dbOsis) {
        setOsisOfficersState(dbOsis);
        saveToStorage('smp45_osis_officers', dbOsis);
      }
      if (dbIpnu) {
        setIpnuInfoState(dbIpnu);
        saveToStorage('smp45_ipnu_info', dbIpnu);
      }
      if (dbPrograms) {
        setProgramsState(dbPrograms);
        saveToStorage('smp45_programs', dbPrograms);
      }
      if (dbEkskul) {
        setExtracurricularsState(dbEkskul);
        saveToStorage('smp45_ekskul', dbEkskul);
      }
      if (dbFacilities) {
        setFacilitiesState(dbFacilities);
        saveToStorage('smp45_facilities', dbFacilities);
      }
      if (dbTestimonials) {
        setTestimonialsState(dbTestimonials);
        saveToStorage('smp45_testimonials', dbTestimonials);
      }
      if (dbFaqs) {
        setFaqsState(dbFaqs);
        saveToStorage('smp45_faqs', dbFaqs);
      }
    }

    loadFromSupabase();

    window.addEventListener('storage', reloadDataFromStorage);
    window.addEventListener('smp45_data_updated', reloadDataFromStorage);
    return () => {
      isMounted = false;
      window.removeEventListener('storage', reloadDataFromStorage);
      window.removeEventListener('smp45_data_updated', reloadDataFromStorage);
    };
  }, []);

  return {
    schoolInfo,
    setSchoolInfo: (data: SchoolInfo) => {
      setSchoolInfoState(data);
      saveToStorage('smp45_school_info', data);
      updateSchoolInfoDB(data);

      // Auto-sync Principal in Staff list if present
      if (data.principal || data.principalPhoto) {
        setStaffState((prevStaff) => {
          let updated = false;
          const newStaff = prevStaff.map((s) => {
            if (s.department === 'Kepala Sekolah' || s.role === 'Kepala Sekolah') {
              updated = true;
              return {
                ...s,
                name: data.principal || s.name,
                photo: data.principalPhoto || s.photo,
              };
            }
            return s;
          });
          if (updated) {
            saveToStorage('smp45_staff', newStaff);
            saveStaffDB(newStaff);
          }
          return newStaff;
        });
      }
    },
    heroSlides,
    setHeroSlides: (data: typeof defaultHeroSlides) => {
      setHeroSlidesState(data);
      saveToStorage('smp45_hero_slides', data);
      saveHeroSlidesDB(data);
    },
    news,
    setNews: (data: NewsItem[]) => {
      setNewsState(data);
      saveToStorage('smp45_news', data);
      saveNewsDB(data);
    },
    applicants,
    setApplicants: (data: PpdbApplicant[]) => {
      setApplicantsState(data);
      saveToStorage('smp45_applicants', data);
      saveApplicantsDB(data);
    },
    programs,
    setPrograms: (data: ProgramItem[]) => {
      setProgramsState(data);
      saveToStorage('smp45_programs', data);
      saveProgramsDB(data);
    },
    extracurriculars,
    setExtracurriculars: (data: ExtracurricularItem[]) => {
      setExtracurricularsState(data);
      saveToStorage('smp45_ekskul', data);
      saveExtracurricularsDB(data);
    },
    staff,
    setStaff: (data: StaffItem[]) => {
      setStaffState(data);
      saveToStorage('smp45_staff', data);
      saveStaffDB(data);
    },
    gallery,
    setGallery: (data: GalleryItem[]) => {
      setGalleryState(data);
      saveToStorage('smp45_gallery', data);
      saveGalleryDB(data);
    },
    agendas,
    setAgendas: (data: AgendaItem[]) => {
      setAgendasState(data);
      saveToStorage('smp45_agendas', data);
      saveAgendasDB(data);
    },
    testimonials,
    setTestimonials: (data: typeof defaultTestimonials) => {
      setTestimonialsState(data);
      saveToStorage('smp45_testimonials', data);
      saveTestimonialsDB(data);
    },
    facilities,
    setFacilities: (data: typeof defaultFacilities) => {
      setFacilitiesState(data);
      saveToStorage('smp45_facilities', data);
      saveFacilitiesDB(data);
    },
    faqs,
    setFaqs: (data: typeof defaultFaqs) => {
      setFaqsState(data);
      saveToStorage('smp45_faqs', data);
      savePpdbFaqsDB(data);
    },
    osisOfficers,
    setOsisOfficers: (data: OsisOfficer[]) => {
      setOsisOfficersState(data);
      saveToStorage('smp45_osis_officers', data);
      saveOsisOfficersDB(data);
    },
    ipnuInfo,
    setIpnuInfo: (data: IpnuInfo) => {
      setIpnuInfoState(data);
      saveToStorage('smp45_ipnu_info', data);
      saveIpnuInfoDB(data);
    },
  };
}
