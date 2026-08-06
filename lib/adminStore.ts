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

export const defaultAgendas: AgendaItem[] = [
  {
    id: 'ag-1',
    day: '10',
    month: 'AGU',
    year: '2026',
    title: 'Ujian Munaqosyah Tahfidz Al-Qur\'an Juz 30 Gelombang I',
    time: '08.00 - 12.00 WIB',
    location: 'Musholla Ma\'arif SMP 45 2 Kedungpring',
    category: 'Akademik',
  },
  {
    id: 'ag-2',
    day: '17',
    month: 'AGU',
    year: '2026',
    title: 'Upacara Bendera HUT Kemerdekaan RI Ke-81 & Atraksi Drumband',
    time: '07.00 - 10.30 WIB',
    location: 'Lapangan Utama Sekolah',
    category: 'Nasional',
  },
  {
    id: 'ag-3',
    day: '05',
    month: 'SEP',
    year: '2026',
    title: 'Tryout Simulasi Asesmen Nasional Berbasis Komputer (ANBK)',
    time: '07.30 - 13.00 WIB',
    location: 'Laboratorium Komputer CBT',
    category: 'Ujian Digital',
  },
  {
    id: 'ag-4',
    day: '22',
    month: 'OKT',
    year: '2026',
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
    registrationNo: 'PPDB2026-001',
    fullName: 'M. Rizky Firmansyah',
    nisn: '0129384751',
    gender: 'Laki-Laki',
    originSchool: 'SDN Kalen 01 Kedungpring',
    parentName: 'H. Suwarno',
    phone: '085712345678',
    track: 'Reguler',
    registrationDate: '2026-08-01 09:30',
    status: 'Diterima',
    notes: 'Berkas pendaftaran lengkap. Bebas biaya pendaftaran Gel. 1.',
    registrationType: 'full',
    birthPlace: 'Lamongan',
    birthDate: '2013-05-12',
    address: 'Dusun Kalen RT 02 RW 01 Desa Kalen, Kedungpring',
    fatherName: 'H. Suwarno',
    motherName: 'Hj. Aminah',
    parentOccupation: 'Wiraswasta',
    isDataComplete: true,
  },
  {
    id: 'ppdb-102',
    registrationNo: 'PPDB2026-002',
    fullName: 'Siti Nur Safira',
    nisn: '0138475620',
    gender: 'Perempuan',
    originSchool: 'MI Ma\'arif Kalen',
    parentName: 'Ahmad Mujib',
    phone: '081298765432',
    track: 'Tahfidz Qur\'an',
    registrationDate: '2026-08-02 11:15',
    status: 'Menunggu Verifikasi',
    notes: 'Memiliki sertifikat juz 30. Siapkan wawancara tes hafalan.',
    registrationType: 'full',
    birthPlace: 'Lamongan',
    birthDate: '2013-08-20',
    address: 'Desa Maindu RT 01 RW 03, Kedungpring',
    fatherName: 'Ahmad Mujib',
    motherName: 'Siti Rahmah',
    parentOccupation: 'Petani',
    isDataComplete: true,
  },
  {
    id: 'ppdb-103',
    registrationNo: 'PPDB2026-003',
    fullName: 'Ahmad Fadhil Ramadhan',
    nisn: '-',
    gender: 'Laki-Laki',
    originSchool: 'SDN Sugio 02',
    parentName: 'Rahmat Hidayat',
    phone: '085811223344',
    track: 'Prestasi',
    registrationDate: '2026-08-03 14:20',
    status: 'Menunggu Verifikasi',
    notes: 'Pendaftaran Cepat. NISN, Tempat Lahir & Alamat belum diisi.',
    registrationType: 'express',
    birthPlace: '',
    birthDate: '',
    address: '',
    fatherName: 'Rahmat Hidayat',
    motherName: '',
    parentOccupation: '',
    isDataComplete: false,
  },
  {
    id: 'ppdb-104',
    registrationNo: 'PPDB2026-004',
    fullName: 'Anisa Putri Maharani',
    nisn: '0149382019',
    gender: 'Perempuan',
    originSchool: 'SDN Kedungpring 01',
    parentName: 'Bambang Sugianto',
    phone: '082144556677',
    track: 'Undangan Yayasan',
    registrationDate: '2026-08-04 08:45',
    status: 'Menunggu Verifikasi',
    notes: 'Rekomendasi Pengurus MWC NU Kedungpring.',
    registrationType: 'full',
    birthPlace: 'Lamongan',
    birthDate: '2013-02-14',
    address: 'Jl. Raya Kedungpring No. 45',
    fatherName: 'Bambang Sugianto',
    motherName: 'Endang Lestari',
    parentOccupation: 'PNS',
    isDataComplete: true,
  },
  {
    id: 'ppdb-105',
    registrationNo: 'PPDB2026-005',
    fullName: 'Bagas Aditya Pratama',
    nisn: '-',
    gender: 'Laki-Laki',
    originSchool: 'MI Bustanul Ulum',
    parentName: 'Agus Setiawan',
    phone: '089677889900',
    track: 'Reguler',
    registrationDate: '2026-08-04 15:10',
    status: 'Perlu Perbaikan',
    notes: 'Pendaftaran Cepat via WA. Perlu konfirmasi NISN & Alamat.',
    registrationType: 'express',
    birthPlace: '',
    birthDate: '',
    address: '',
    fatherName: 'Agus Setiawan',
    motherName: '',
    parentOccupation: '',
    isDataComplete: false,
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
  const [schoolInfo, setSchoolInfo] = useState<SchoolInfo>(defaultSchoolInfo);
  const [heroSlides, setHeroSlides] = useState(defaultHeroSlides);
  const [news, setNews] = useState<NewsItem[]>(defaultNewsItems);
  const [applicants, setApplicants] = useState<PpdbApplicant[]>(initialApplicants);
  const [programs, setPrograms] = useState<ProgramItem[]>(defaultPrograms);
  const [extracurriculars, setExtracurriculars] = useState<ExtracurricularItem[]>(defaultEkskul);
  const [staff, setStaff] = useState<StaffItem[]>(defaultStaff);
  const [gallery, setGallery] = useState<GalleryItem[]>(defaultGallery);
  const [agendas, setAgendas] = useState<AgendaItem[]>(defaultAgendas);
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [facilities, setFacilities] = useState(defaultFacilities);
  const [faqs, setFaqs] = useState(defaultFaqs);

  // Sync back helper
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

  // Hydrate from localStorage on mount and listen for storage changes across tabs or pages
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reloadDataFromStorage = () => {
      setSchoolInfo(getStoredValue('smp45_school_info', defaultSchoolInfo));
      setHeroSlides(getStoredValue('smp45_hero_slides', defaultHeroSlides));
      setNews(getStoredValue('smp45_news', defaultNewsItems));
      setApplicants(getStoredValue('smp45_applicants', initialApplicants));
      setPrograms(getStoredValue('smp45_programs', defaultPrograms));
      setExtracurriculars(getStoredValue('smp45_ekskul', defaultEkskul));
      setStaff(getStoredValue('smp45_staff', defaultStaff));
      setGallery(getStoredValue('smp45_gallery', defaultGallery));
      setAgendas(getStoredValue('smp45_agendas', defaultAgendas));
      setTestimonials(getStoredValue('smp45_testimonials', defaultTestimonials));
      setFacilities(getStoredValue('smp45_facilities', defaultFacilities));
      setFaqs(getStoredValue('smp45_faqs', defaultFaqs));
    };

    reloadDataFromStorage();

    window.addEventListener('storage', reloadDataFromStorage);
    window.addEventListener('smp45_data_updated', reloadDataFromStorage);
    return () => {
      window.removeEventListener('storage', reloadDataFromStorage);
      window.removeEventListener('smp45_data_updated', reloadDataFromStorage);
    };
  }, []);

  return {
    schoolInfo,
    setSchoolInfo: (data: SchoolInfo) => {
      setSchoolInfo(data);
      saveToStorage('smp45_school_info', data);
    },
    heroSlides,
    setHeroSlides: (data: typeof defaultHeroSlides) => {
      setHeroSlides(data);
      saveToStorage('smp45_hero_slides', data);
    },
    news,
    setNews: (data: NewsItem[]) => {
      setNews(data);
      saveToStorage('smp45_news', data);
    },
    applicants,
    setApplicants: (data: PpdbApplicant[]) => {
      setApplicants(data);
      saveToStorage('smp45_applicants', data);
    },
    programs,
    setPrograms: (data: ProgramItem[]) => {
      setPrograms(data);
      saveToStorage('smp45_programs', data);
    },
    extracurriculars,
    setExtracurriculars: (data: ExtracurricularItem[]) => {
      setExtracurriculars(data);
      saveToStorage('smp45_ekskul', data);
    },
    staff,
    setStaff: (data: StaffItem[]) => {
      setStaff(data);
      saveToStorage('smp45_staff', data);
    },
    gallery,
    setGallery: (data: GalleryItem[]) => {
      setGallery(data);
      saveToStorage('smp45_gallery', data);
    },
    agendas,
    setAgendas: (data: AgendaItem[]) => {
      setAgendas(data);
      saveToStorage('smp45_agendas', data);
    },
    testimonials,
    setTestimonials: (data: typeof defaultTestimonials) => {
      setTestimonials(data);
      saveToStorage('smp45_testimonials', data);
    },
    facilities,
    setFacilities: (data: typeof defaultFacilities) => {
      setFacilities(data);
      saveToStorage('smp45_facilities', data);
    },
    faqs,
    setFaqs,
  };
}
