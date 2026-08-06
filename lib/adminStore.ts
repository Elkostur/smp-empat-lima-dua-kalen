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
  },
  {
    id: 'ppdb-103',
    registrationNo: 'PPDB2026-003',
    fullName: 'Ahmad Fadhil Ramadhan',
    nisn: '0127493821',
    gender: 'Laki-Laki',
    originSchool: 'SDN Sugio 02',
    parentName: 'Rahmat Hidayat',
    phone: '085811223344',
    track: 'Prestasi',
    registrationDate: '2026-08-03 14:20',
    status: 'Diterima',
    notes: 'Juara 1 Lomba Sains SD/MI se-Kecamatan Kedungpring.',
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
  },
  {
    id: 'ppdb-105',
    registrationNo: 'PPDB2026-005',
    fullName: 'Bagas Aditya Pratama',
    nisn: '0112349876',
    gender: 'Laki-Laki',
    originSchool: 'MI Bustanul Ulum',
    parentName: 'Agus Setiawan',
    phone: '089677889900',
    track: 'Reguler',
    registrationDate: '2026-08-04 15:10',
    status: 'Perlu Perbaikan',
    notes: 'Foto Kartu Keluarga agak buram, butuh upload ulang.',
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
  const [schoolInfo, setSchoolInfo] = useState<SchoolInfo>(() => getStoredValue('smp45_school_info', defaultSchoolInfo));
  const [heroSlides, setHeroSlides] = useState(() => getStoredValue('smp45_hero_slides', defaultHeroSlides));
  const [news, setNews] = useState<NewsItem[]>(() => getStoredValue('smp45_news', defaultNewsItems));
  const [applicants, setApplicants] = useState<PpdbApplicant[]>(() => getStoredValue('smp45_applicants', initialApplicants));
  const [programs, setPrograms] = useState<ProgramItem[]>(() => getStoredValue('smp45_programs', defaultPrograms));
  const [extracurriculars, setExtracurriculars] = useState<ExtracurricularItem[]>(() => getStoredValue('smp45_ekskul', defaultEkskul));
  const [staff, setStaff] = useState<StaffItem[]>(() => getStoredValue('smp45_staff', defaultStaff));
  const [gallery, setGallery] = useState<GalleryItem[]>(() => getStoredValue('smp45_gallery', defaultGallery));
  const [agendas, setAgendas] = useState<AgendaItem[]>(() => getStoredValue('smp45_agendas', defaultAgendas));
  const [testimonials, setTestimonials] = useState(() => getStoredValue('smp45_testimonials', defaultTestimonials));
  const [facilities, setFacilities] = useState(() => getStoredValue('smp45_facilities', defaultFacilities));
  const [faqs, setFaqs] = useState(() => getStoredValue('smp45_faqs', defaultFaqs));

  // Sync back helper
  const saveToStorage = (key: string, data: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
      // ignore
    }
  };

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
    setFacilities,
    faqs,
    setFaqs,
  };
}
