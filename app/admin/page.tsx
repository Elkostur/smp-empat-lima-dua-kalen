'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  useAdminDataStore,
  PpdbApplicant,
  HeroSlide,
  AgendaItem,
} from '@/lib/adminStore';
import {
  NewsItem,
  StaffItem,
  GalleryItem,
  ProgramItem,
  ExtracurricularItem,
} from '@/data/schoolData';
import { ImageUploadInput } from '@/components/admin/ImageUploadInput';
import {
  LayoutDashboard,
  Building2,
  FileText,
  UserCheck,
  GraduationCap,
  Users,
  Image as ImageIcon,
  Calendar,
  MessageSquare,
  Settings,
  Plus,
  Search,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
  Save,
  LogOut,
  ExternalLink,
  ChevronRight,
  Filter,
  Download,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Menu,
  X,
  Eye,
  ShieldCheck,
  Check,
  HelpCircle,
  Award,
  Layers,
  ArrowRight,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const store = useAdminDataStore();
  const [activeTab, setActiveTab] = useState<
    | 'overview'
    | 'school-info'
    | 'news'
    | 'ppdb'
    | 'programs'
    | 'staff'
    | 'gallery'
    | 'agendas'
    | 'testimonials'
    | 'settings'
  >('overview');

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Search & Filters state
  const [newsSearch, setNewsSearch] = useState('');
  const [newsCatFilter, setNewsCatFilter] = useState('Semua');

  const [ppdbSearch, setPpdbSearch] = useState('');
  const [ppdbStatusFilter, setPpdbStatusFilter] = useState('Semua');
  const [ppdbTrackFilter, setPpdbTrackFilter] = useState('Semua');

  const [staffSearch, setStaffSearch] = useState('');
  const [staffDeptFilter, setStaffDeptFilter] = useState('Semua');

  const [galleryCatFilter, setGalleryCatFilter] = useState('Semua');

  // Modals state
  const [slideModalOpen, setSlideModalOpen] = useState(false);
  const [editingSlide, setEditingSlide] = useState<HeroSlide | null>(null);

  const [newsModalOpen, setNewsModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);

  const [applicantModalOpen, setApplicantModalOpen] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState<PpdbApplicant | null>(null);
  const [addPpdbModalOpen, setAddPpdbModalOpen] = useState(false);

  const [staffModalOpen, setStaffModalOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState<StaffItem | null>(null);

  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [editingGallery, setEditingGallery] = useState<GalleryItem | null>(null);

  const [agendaModalOpen, setAgendaModalOpen] = useState(false);
  const [editingAgenda, setEditingAgenda] = useState<AgendaItem | null>(null);

  const [programModalOpen, setProgramModalOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState<ProgramItem | null>(null);

  const [ekskulModalOpen, setEkskulModalOpen] = useState(false);
  const [editingEkskul, setEditingEkskul] = useState<ExtracurricularItem | null>(null);

  const [testiModalOpen, setTestiModalOpen] = useState(false);
  const [editingTesti, setEditingTesti] = useState<{ id: string; name: string; role: string; quote: string; photo: string } | null>(null);

  // Image states for webp compression uploads
  const [slideBgImage, setSlideBgImage] = useState('');
  const [newsImage, setNewsImage] = useState('');
  const [programImageUrl, setProgramImageUrl] = useState('');
  const [ekskulImageUrl, setEkskulImageUrl] = useState('');
  const [staffPhoto, setStaffPhoto] = useState('');
  const [galleryImageUrl, setGalleryImageUrl] = useState('');
  const [testiPhoto, setTestiPhoto] = useState('');

  // Form states
  const [schoolInfoForm, setSchoolInfoForm] = useState(store.schoolInfo);

  // Toast trigger helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Sync schoolInfo when store loads
  React.useEffect(() => {
    queueMicrotask(() => setSchoolInfoForm(store.schoolInfo));
  }, [store.schoolInfo]);

  // Slide Banner Actions
  const handleSaveSlide = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const subtitle = formData.get('subtitle') as string;
    const badge = formData.get('badge') as string;
    const description = formData.get('description') as string;
    const ctaPrimary = formData.get('ctaPrimary') as string;
    const ctaSecondary = formData.get('ctaSecondary') as string;
    const bgImage = slideBgImage || editingSlide?.bgImage || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600';

    if (editingSlide) {
      const updated = store.heroSlides.map((s) =>
        s.id === editingSlide.id
          ? { ...s, title, subtitle, badge, description, ctaPrimary, ctaSecondary, bgImage }
          : s
      );
      store.setHeroSlides(updated);
      showToast('Slide hero banner berhasil diperbarui!');
    } else {
      const newSlide: HeroSlide = {
        id: Date.now(),
        title,
        subtitle,
        badge: badge || 'Informasi Sekolah',
        description,
        ctaPrimary: ctaPrimary || 'Pendaftaran PPDB',
        ctaSecondary: ctaSecondary || 'Profil Sekolah',
        bgImage,
      };
      store.setHeroSlides([...store.heroSlides, newSlide]);
      showToast('Slide hero banner baru berhasil ditambahkan!');
    }
    setSlideModalOpen(false);
    setEditingSlide(null);
  };

  const handleDeleteSlide = (id: number | string) => {
    if (store.heroSlides.length <= 1) {
      alert('Minimal harus ada 1 slide utama!');
      return;
    }
    if (confirm('Yakin ingin menghapus slide ini?')) {
      store.setHeroSlides(store.heroSlides.filter((s) => s.id !== id));
      showToast('Slide hero banner telah dihapus.');
    }
  };

  // Program Actions
  const handleSaveProgram = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const badge = formData.get('badge') as string;
    const shortDesc = formData.get('shortDesc') as string;
    const fullDesc = formData.get('fullDesc') as string;
    const iconName = (formData.get('iconName') as string) || 'GraduationCap';
    const imageUrl = programImageUrl || editingProgram?.imageUrl || 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800';

    if (editingProgram) {
      const updated = store.programs.map((p) =>
        p.id === editingProgram.id
          ? { ...p, title, badge, shortDesc, fullDesc, iconName, imageUrl }
          : p
      );
      store.setPrograms(updated);
      showToast('Program unggulan berhasil diperbarui!');
    } else {
      const newProg: ProgramItem = {
        id: `prog-${Date.now()}`,
        title,
        badge,
        shortDesc,
        fullDesc: fullDesc || shortDesc,
        iconName,
        highlights: ['Bimbingan Terpadu', 'Sertifikat Resmi'],
        schedule: 'Setiap Hari Efektif',
        imageUrl,
      };
      store.setPrograms([...store.programs, newProg]);
      showToast('Program unggulan baru berhasil ditambahkan!');
    }
    setProgramModalOpen(false);
    setEditingProgram(null);
  };

  const handleDeleteProgram = (id: string) => {
    if (confirm('Hapus program unggulan ini?')) {
      store.setPrograms(store.programs.filter((p) => p.id !== id));
      showToast('Program unggulan telah dihapus.');
    }
  };

  // Ekskul Actions
  const handleSaveEkskul = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const coach = formData.get('coach') as string;
    const schedule = formData.get('schedule') as string;
    const description = formData.get('description') as string;
    const iconName = (formData.get('iconName') as string) || 'Award';
    const imageUrl = ekskulImageUrl || editingEkskul?.imageUrl || 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800';

    if (editingEkskul) {
      const updated = store.extracurriculars.map((ek) =>
        ek.id === editingEkskul.id
          ? { ...ek, name, coach, schedule, description, iconName, imageUrl }
          : ek
      );
      store.setExtracurriculars(updated);
      showToast('Ekstrakurikuler berhasil diperbarui!');
    } else {
      const newEkskul: ExtracurricularItem = {
        id: `ekskul-${Date.now()}`,
        name,
        coach,
        schedule,
        description,
        iconName,
        achievements: ['Juara Tingkat Kabupaten'],
        imageUrl,
      };
      store.setExtracurriculars([...store.extracurriculars, newEkskul]);
      showToast('Ekstrakurikuler baru berhasil ditambahkan!');
    }
    setEkskulModalOpen(false);
    setEditingEkskul(null);
  };

  const handleDeleteEkskul = (id: string) => {
    if (confirm('Hapus ekstrakurikuler ini?')) {
      store.setExtracurriculars(store.extracurriculars.filter((ek) => ek.id !== id));
      showToast('Ekstrakurikuler telah dihapus.');
    }
  };

  // News Actions
  const handleSaveNews = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const category = formData.get('category') as NewsItem['category'];
    const summary = formData.get('summary') as string;
    const content = formData.get('content') as string;
    const author = formData.get('author') as string;
    const image = newsImage || editingNews?.image || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800';

    if (editingNews) {
      const updated = store.news.map((n) =>
        n.id === editingNews.id
          ? {
              ...n,
              title,
              category,
              summary,
              content,
              author,
              image,
              slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            }
          : n
      );
      store.setNews(updated);
      showToast('Berita berhasil diperbarui!');
    } else {
      const newArticle: NewsItem = {
        id: `news-${Date.now()}`,
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title,
        category,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        author: author || 'Admin Sekolah',
        authorRole: 'Tim Humas',
        readTime: '3 menit',
        image,
        summary,
        content,
        tags: ['Informasi Sekolah', 'SMP 45 2 Kedungpring'],
      };
      store.setNews([newArticle, ...store.news]);
      showToast('Berita baru berhasil diterbitkan!');
    }
    setNewsModalOpen(false);
    setEditingNews(null);
  };

  const handleDeleteNews = (id: string) => {
    if (confirm('Yakin ingin menghapus berita ini?')) {
      store.setNews(store.news.filter((n) => n.id !== id));
      showToast('Berita telah dihapus.');
    }
  };

  // PPDB Status Actions
  const handleUpdatePpdbStatus = (id: string, newStatus: PpdbApplicant['status']) => {
    const updated = store.applicants.map((a) => (a.id === id ? { ...a, status: newStatus } : a));
    store.setApplicants(updated);
    showToast(`Status pendaftar berhasil diubah menjadi: ${newStatus}`);
    if (selectedApplicant && selectedApplicant.id === id) {
      setSelectedApplicant({ ...selectedApplicant, status: newStatus });
    }
  };

  const handleAddPpdbApplicant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('fullName') as string;
    const nisn = formData.get('nisn') as string;
    const originSchool = formData.get('originSchool') as string;
    const parentName = formData.get('parentName') as string;
    const phone = formData.get('phone') as string;
    const track = formData.get('track') as PpdbApplicant['track'];

    const newApplicant: PpdbApplicant = {
      id: `ppdb-${Date.now()}`,
      registrationNo: `PPDB2026-0${store.applicants.length + 1}`,
      fullName,
      nisn: nisn || '-',
      gender: (formData.get('gender') as PpdbApplicant['gender']) || 'Laki-Laki',
      originSchool,
      parentName,
      phone,
      track,
      registrationDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Menunggu Verifikasi',
      notes: 'Pendaftaran manual diproses oleh Panitia PPDB.',
    };

    store.setApplicants([newApplicant, ...store.applicants]);
    showToast('Pendaftar PPDB baru berhasil ditambahkan!');
    setAddPpdbModalOpen(false);
  };

  // Staff Actions
  const handleSaveStaff = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const role = formData.get('role') as string;
    const department = formData.get('department') as StaffItem['department'];
    const subject = formData.get('subject') as string;
    const education = formData.get('education') as string;
    const photo = staffPhoto || editingStaff?.photo || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800';

    if (editingStaff) {
      const updated = store.staff.map((s) =>
        s.id === editingStaff.id
          ? { ...s, name, role, department, subject, education, photo }
          : s
      );
      store.setStaff(updated);
      showToast('Data staf guru berhasil diperbarui!');
    } else {
      const newStaff: StaffItem = {
        id: `staff-${Date.now()}`,
        name,
        role,
        department,
        subject,
        education,
        photo,
      };
      store.setStaff([...store.staff, newStaff]);
      showToast('Data staf guru baru berhasil disimpan!');
    }
    setStaffModalOpen(false);
    setEditingStaff(null);
  };

  const handleDeleteStaff = (id: string) => {
    if (confirm('Yakin hapus data staf guru ini?')) {
      store.setStaff(store.staff.filter((s) => s.id !== id));
      showToast('Data staf guru telah dihapus.');
    }
  };

  // Gallery Actions
  const handleSaveGallery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const category = formData.get('category') as GalleryItem['category'];
    const imageUrl = galleryImageUrl || editingGallery?.imageUrl || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000';
    const description = formData.get('description') as string;

    if (editingGallery) {
      const updated = store.gallery.map((g) =>
        g.id === editingGallery.id
          ? { ...g, title, category, imageUrl, description }
          : g
      );
      store.setGallery(updated);
      showToast('Item galeri berhasil diperbarui!');
    } else {
      const newItem: GalleryItem = {
        id: `g-${Date.now()}`,
        title,
        category,
        imageUrl,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        description,
      };
      store.setGallery([newItem, ...store.gallery]);
      showToast('Foto/Video baru berhasil ditambahkan ke galeri!');
    }
    setGalleryModalOpen(false);
    setEditingGallery(null);
  };

  const handleDeleteGallery = (id: string) => {
    if (confirm('Hapus item galeri ini?')) {
      store.setGallery(store.gallery.filter((g) => g.id !== id));
      showToast('Item galeri telah dihapus.');
    }
  };

  // Agenda Actions
  const handleSaveAgenda = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const day = formData.get('day') as string;
    const month = formData.get('month') as string;
    const category = formData.get('category') as string;
    const time = formData.get('time') as string;
    const location = formData.get('location') as string;

    if (editingAgenda) {
      const updated = store.agendas.map((a) =>
        a.id === editingAgenda.id
          ? { ...a, title, day, month, category, time, location }
          : a
      );
      store.setAgendas(updated);
      showToast('Agenda kegiatan berhasil diperbarui!');
    } else {
      const newAgenda = {
        id: `ag-${Date.now()}`,
        title,
        day,
        month,
        category,
        time,
        location,
      };
      store.setAgendas([newAgenda, ...store.agendas]);
      showToast('Agenda baru berhasil ditambahkan!');
    }
    setAgendaModalOpen(false);
    setEditingAgenda(null);
  };

  const handleDeleteAgenda = (id: string) => {
    if (confirm('Hapus agenda kegiatan ini?')) {
      store.setAgendas(store.agendas.filter((a) => a.id !== id));
      showToast('Agenda telah dihapus.');
    }
  };

  // Testimonial Actions
  const handleSaveTesti = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const role = formData.get('role') as string;
    const quote = formData.get('quote') as string;
    const photo = testiPhoto || editingTesti?.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400';

    if (editingTesti) {
      const updated = store.testimonials.map((t) =>
        t.id === editingTesti.id ? { ...t, name, role, quote, photo } : t
      );
      store.setTestimonials(updated);
      showToast('Testimoni berhasil diperbarui!');
    } else {
      const newTesti = {
        id: `t-${Date.now()}`,
        name,
        role,
        quote,
        photo,
      };
      store.setTestimonials([...store.testimonials, newTesti]);
      showToast('Testimoni baru berhasil ditambahkan!');
    }
    setTestiModalOpen(false);
    setEditingTesti(null);
  };

  const handleDeleteTesti = (id: string) => {
    if (confirm('Hapus testimoni ini?')) {
      store.setTestimonials(store.testimonials.filter((t) => t.id !== id));
      showToast('Testimoni telah dihapus.');
    }
  };

  const handleDeleteApplicant = (id: string) => {
    if (confirm('Yakin ingin menghapus data pendaftar PPDB ini?')) {
      store.setApplicants(store.applicants.filter((a) => a.id !== id));
      showToast('Data pendaftar telah dihapus.');
      setApplicantModalOpen(false);
      setSelectedApplicant(null);
    }
  };

  // Export PPDB to CSV
  const handleExportPpdbCsv = () => {
    const headers = ['No Registrasi', 'Nama Lengkap', 'NISN', 'Jenis Kelamin', 'Asal Sekolah', 'Orang Tua', 'No Telepon', 'Jalur', 'Tgl Daftar', 'Status'];
    const rows = store.applicants.map((a) => [
      a.registrationNo,
      `"${a.fullName}"`,
      a.nisn,
      a.gender,
      `"${a.originSchool}"`,
      `"${a.parentName}"`,
      a.phone,
      a.track,
      a.registrationDate,
      a.status,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `PPDB_SMP_45_2_Kedungpring_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('File data PPDB (CSV) berhasil diunduh!');
  };

  // Filtered data lists
  const filteredNews = store.news.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(newsSearch.toLowerCase()) ||
      item.summary.toLowerCase().includes(newsSearch.toLowerCase());
    const matchCat = newsCatFilter === 'Semua' || item.category === newsCatFilter;
    return matchSearch && matchCat;
  });

  const filteredApplicants = store.applicants.filter((item) => {
    const matchSearch =
      item.fullName.toLowerCase().includes(ppdbSearch.toLowerCase()) ||
      item.registrationNo.toLowerCase().includes(ppdbSearch.toLowerCase()) ||
      item.originSchool.toLowerCase().includes(ppdbSearch.toLowerCase()) ||
      item.nisn.includes(ppdbSearch);
    const matchStatus = ppdbStatusFilter === 'Semua' || item.status === ppdbStatusFilter;
    const matchTrack = ppdbTrackFilter === 'Semua' || item.track === ppdbTrackFilter;
    return matchSearch && matchStatus && matchTrack;
  });

  const filteredStaff = store.staff.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(staffSearch.toLowerCase()) ||
      item.role.toLowerCase().includes(staffSearch.toLowerCase()) ||
      (item.subject && item.subject.toLowerCase().includes(staffSearch.toLowerCase()));
    const matchDept = staffDeptFilter === 'Semua' || item.department === staffDeptFilter;
    return matchSearch && matchDept;
  });

  const filteredGallery = store.gallery.filter((item) => {
    return galleryCatFilter === 'Semua' || item.category === galleryCatFilter;
  });

  const pendingPpdbCount = store.applicants.filter((a) => a.status === 'Menunggu Verifikasi').length;
  const acceptedPpdbCount = store.applicants.filter((a) => a.status === 'Diterima').length;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-[#0D2D1D] text-[#D4AF37] px-5 py-3 rounded-2xl border border-[#D4AF37]/40 shadow-2xl flex items-center gap-3 animate-bounce">
          <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <span className="text-xs sm:text-sm font-extrabold">{toastMessage}</span>
        </div>
      )}

      {/* Top Header Bar */}
      <header className="bg-[#05160E] text-white border-b border-[#D4AF37]/30 sticky top-0 z-40 shadow-md">
        <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="p-2 rounded-xl bg-[#0D2D1D] border border-white/10 lg:hidden text-[#D4AF37]"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-gold p-0.5 flex items-center justify-center shadow-md shrink-0">
                <div className="w-full h-full bg-[#0D2D1D] rounded-[10px] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-extrabold leading-tight text-white flex items-center gap-2">
                  <span>Dashboard Admin Content Manager</span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 font-extrabold">
                    CMS v2.4
                  </span>
                </h1>
                <p className="text-[11px] text-slate-300">
                  SMP &quot;Empat Lima&quot; 2 Kedungpring — Ma&apos;arif NU
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-slate-200 border border-white/10 transition-colors"
            >
              <span>Lihat Website Utama</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
            </Link>

            <div className="h-6 w-px bg-white/20 hidden sm:block" />

            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-200 text-xs font-bold border border-red-500/30 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Keluar</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Desktop */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#0D2D1D] text-white border-r border-[#D4AF37]/20 flex flex-col transition-transform duration-300 lg:static lg:translate-x-0 ${
            mobileSidebarOpen ? 'translate-x-0 pt-16 lg:pt-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4 border-b border-white/10">
            <div className="bg-[#0A2418] p-3 rounded-2xl border border-[#D4AF37]/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-school-green-700 flex items-center justify-center font-extrabold text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                ADM
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-extrabold text-white truncate">Administrator Tim IT</p>
                <p className="text-[10px] text-[#D4AF37] font-semibold truncate">Pengelola Konten Portal</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-3 space-y-1 overflow-y-auto scrollbar-none text-xs">
            <button
              onClick={() => {
                setActiveTab('overview');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === 'overview'
                  ? 'bg-[#D4AF37] text-[#0D2D1D] shadow-md font-extrabold'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <LayoutDashboard className="w-4 h-4 shrink-0" />
                <span>Ringkasan Dashboard</span>
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('school-info');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === 'school-info'
                  ? 'bg-[#D4AF37] text-[#0D2D1D] shadow-md font-extrabold'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 shrink-0" />
                <span>Profil &amp; Hero Banner</span>
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('news');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === 'news'
                  ? 'bg-[#D4AF37] text-[#0D2D1D] shadow-md font-extrabold'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 shrink-0" />
                <span>Berita &amp; Pengumuman</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-800 text-emerald-200 border border-emerald-600 font-extrabold">
                {store.news.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('ppdb');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === 'ppdb'
                  ? 'bg-[#D4AF37] text-[#0D2D1D] shadow-md font-extrabold'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <UserCheck className="w-4 h-4 shrink-0" />
                <span>Data PPDB 2026</span>
              </span>
              {pendingPpdbCount > 0 ? (
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500 text-slate-900 font-extrabold animate-pulse">
                  {pendingPpdbCount} Baru
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-800 text-slate-400">
                  {store.applicants.length}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setActiveTab('programs');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === 'programs'
                  ? 'bg-[#D4AF37] text-[#0D2D1D] shadow-md font-extrabold'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 shrink-0" />
                <span>Program &amp; Ekskul</span>
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('staff');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === 'staff'
                  ? 'bg-[#D4AF37] text-[#0D2D1D] shadow-md font-extrabold'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Users className="w-4 h-4 shrink-0" />
                <span>Dewan Guru &amp; Staff</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-800 text-slate-400">
                {store.staff.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('gallery');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === 'gallery'
                  ? 'bg-[#D4AF37] text-[#0D2D1D] shadow-md font-extrabold'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <ImageIcon className="w-4 h-4 shrink-0" />
                <span>Galeri Foto &amp; Video</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-800 text-slate-400">
                {store.gallery.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('agendas');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === 'agendas'
                  ? 'bg-[#D4AF37] text-[#0D2D1D] shadow-md font-extrabold'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Agenda Sekolah</span>
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('testimonials');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === 'testimonials'
                  ? 'bg-[#D4AF37] text-[#0D2D1D] shadow-md font-extrabold'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Testimoni &amp; FAQ</span>
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('settings');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === 'settings'
                  ? 'bg-[#D4AF37] text-[#0D2D1D] shadow-md font-extrabold'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Settings className="w-4 h-4 shrink-0" />
                <span>Pengaturan Akun</span>
              </span>
            </button>
          </nav>

          <div className="p-4 border-t border-white/10 text-[11px] text-slate-400 text-center">
            <p className="font-semibold text-slate-300">SMP 45 2 Kedungpring</p>
            <p>Admin Portal Interactive</p>
          </div>
        </aside>

        {/* Backdrop for Mobile Sidebar */}
        {mobileSidebarOpen && (
          <div
            onClick={() => setMobileSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-20 lg:hidden"
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          {/* TAB 1: OVERVIEW / RINGKASAN */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#0D2D1D] to-[#153D29] text-white p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#D4AF37] text-[#0D2D1D] shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-[#0D2D1D]" />
                    <span>Selamat Datang di Portal Admin Pengelola Konten</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                    Kelola Seluruh Informasi Website SMP &quot;Empat Lima&quot; 2 Kedungpring
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Ubah teks, publikasikan berita terbaru, verifikasi pendaftar PPDB, perbarui jadwal agenda, dan kelola foto kegiatan dengan mudah dan serba interaktif.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 shrink-0">
                  <button
                    onClick={() => {
                      setEditingNews(null);
                      setNewsImage('');
                      setNewsModalOpen(true);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-yellow-500 text-[#0D2D1D] font-extrabold text-xs shadow-md flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tulis Berita Baru</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('ppdb')}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 backdrop-blur-md flex items-center gap-1.5"
                  >
                    <UserCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span>Verifikasi PPDB ({pendingPpdbCount})</span>
                  </button>
                </div>
              </div>

              {/* Quick KPI Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">Total Berita</span>
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                      <FileText className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl font-extrabold text-slate-900">{store.news.length}</p>
                  <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Terdapat di portal web</span>
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">Pendaftar PPDB</span>
                    <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
                      <UserCheck className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl font-extrabold text-slate-900">{store.applicants.length}</p>
                  <p className="text-[11px] text-amber-600 font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{pendingPpdbCount} Menunggu Verifikasi</span>
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">Guru &amp; Staf</span>
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl font-extrabold text-slate-900">{store.staff.length}</p>
                  <p className="text-[11px] text-slate-500">Tenaga pendidik terdaftar</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">Dokumentasi Galeri</span>
                    <div className="p-2 rounded-xl bg-purple-50 text-purple-700">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-2xl font-extrabold text-slate-900">{store.gallery.length}</p>
                  <p className="text-[11px] text-purple-600 font-semibold">Foto &amp; Video Kegiatan</p>
                </div>
              </div>

              {/* Quick Actions & Recent PPDB */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Recent PPDB Submissions */}
                <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-school-green-700" />
                      <span>Pendaftar PPDB Terbaru (2026/2027)</span>
                    </h3>
                    <button
                      onClick={() => setActiveTab('ppdb')}
                      className="text-xs font-bold text-school-green-700 hover:underline flex items-center gap-1"
                    >
                      <span>Lihat Semua</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {store.applicants.slice(0, 4).map((app) => (
                      <div
                        key={app.id}
                        className="p-3.5 rounded-xl border border-slate-100 hover:border-slate-300 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-extrabold text-slate-900">{app.fullName}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-200 text-slate-700">
                              {app.registrationNo}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500">
                            Asal: {app.originSchool} • Jalur: <strong className="text-slate-800">{app.track}</strong>
                          </p>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              app.status === 'Diterima'
                                ? 'bg-emerald-100 text-emerald-800'
                                : app.status === 'Menunggu Verifikasi'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {app.status}
                          </span>
                          <button
                            onClick={() => {
                              setSelectedApplicant(app);
                              setApplicantModalOpen(true);
                            }}
                            className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-bold"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Management Shortcuts */}
                <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <h3 className="text-base font-extrabold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-school-green-700" />
                    <span>Aksi Cepat Pengaturan Portal</span>
                  </h3>

                  <div className="grid grid-cols-1 gap-2.5">
                    <button
                      onClick={() => setActiveTab('school-info')}
                      className="p-3 rounded-xl border border-slate-200 hover:border-school-green-600 hover:bg-emerald-50/50 text-left transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-100 text-school-green-800">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-extrabold text-slate-800 group-hover:text-school-green-800">
                            Edit Kontak &amp; No WhatsApp Sekolah
                          </p>
                          <p className="text-[11px] text-slate-500">Nomor saat ini: {store.schoolInfo.whatsapp}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => setActiveTab('news')}
                      className="p-3 rounded-xl border border-slate-200 hover:border-school-green-600 hover:bg-emerald-50/50 text-left transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-amber-100 text-amber-800">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-extrabold text-slate-800 group-hover:text-school-green-800">
                            Kelola Artikel Berita &amp; Pengumuman
                          </p>
                          <p className="text-[11px] text-slate-500">Terbitkan artikel terbaru untuk wali murid</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => setActiveTab('staff')}
                      className="p-3 rounded-xl border border-slate-200 hover:border-school-green-600 hover:bg-emerald-50/50 text-left transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-100 text-blue-800">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-extrabold text-slate-800 group-hover:text-school-green-800">
                            Tambah / Edit Dewan Guru
                          </p>
                          <p className="text-[11px] text-slate-500">Perbarui susunan tenaga pendidik</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => setActiveTab('gallery')}
                      className="p-3 rounded-xl border border-slate-200 hover:border-school-green-600 hover:bg-emerald-50/50 text-left transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-100 text-purple-800">
                          <ImageIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-extrabold text-slate-800 group-hover:text-school-green-800">
                            Upload Foto / Video Kegiatan
                          </p>
                          <p className="text-[11px] text-slate-500">Dokumentasi terintegrasi galeri</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROFIL SEKOLAH & HERO SLIDER */}
          {activeTab === 'school-info' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-school-green-700" />
                      <span>Pengaturan Informasi Dasar Sekolah</span>
                    </h2>
                    <p className="text-xs text-slate-500">
                      Ubah nama, alamat, nomor CS WhatsApp, email, serta visi misi sekolah yang tampil di seluruh bagian website.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      store.setSchoolInfo(schoolInfoForm);
                      showToast('Informasi sekolah berhasil disimpan!');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold text-xs shadow-md flex items-center gap-2 self-start sm:self-auto"
                  >
                    <Save className="w-4 h-4 text-school-gold-400" />
                    <span>Simpan Perubahan Identitas</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Nama Resmi Sekolah</label>
                    <input
                      type="text"
                      value={schoolInfoForm.name}
                      onChange={(e) => setSchoolInfoForm({ ...schoolInfoForm, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold text-slate-800 focus:outline-none focus:border-school-green-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Nomor Pokok Sekolah Nasional (NPSN)</label>
                    <input
                      type="text"
                      value={schoolInfoForm.npsn}
                      onChange={(e) => setSchoolInfoForm({ ...schoolInfoForm, npsn: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold text-slate-800 focus:outline-none focus:border-school-green-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Status Akreditasi</label>
                    <input
                      type="text"
                      value={schoolInfoForm.accreditation}
                      onChange={(e) => setSchoolInfoForm({ ...schoolInfoForm, accreditation: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold text-slate-800 focus:outline-none focus:border-school-green-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Nomor WhatsApp CS PPDB</label>
                    <input
                      type="text"
                      value={schoolInfoForm.whatsapp}
                      onChange={(e) => setSchoolInfoForm({ ...schoolInfoForm, whatsapp: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold text-slate-800 focus:outline-none focus:border-school-green-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Email Resmi Sekolah</label>
                    <input
                      type="email"
                      value={schoolInfoForm.email}
                      onChange={(e) => setSchoolInfoForm({ ...schoolInfoForm, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold text-slate-800 focus:outline-none focus:border-school-green-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Jam Operasional</label>
                    <input
                      type="text"
                      value={schoolInfoForm.operatingHours}
                      onChange={(e) => setSchoolInfoForm({ ...schoolInfoForm, operatingHours: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold text-slate-800 focus:outline-none focus:border-school-green-700"
                    />
                  </div>

                  <div className="space-y-1 md:col-span-2">
                    <label className="font-bold text-slate-700">Alamat Lengkap Sekolah</label>
                    <input
                      type="text"
                      value={schoolInfoForm.address}
                      onChange={(e) => setSchoolInfoForm({ ...schoolInfoForm, address: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold text-slate-800 focus:outline-none focus:border-school-green-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Kepala Sekolah &amp; Gelar</label>
                    <input
                      type="text"
                      value={schoolInfoForm.principal}
                      onChange={(e) => setSchoolInfoForm({ ...schoolInfoForm, principal: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold text-slate-800 focus:outline-none focus:border-school-green-700"
                    />
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <label className="font-bold text-slate-700">Sambutan Kepala Sekolah</label>
                  <textarea
                    rows={3}
                    value={schoolInfoForm.principalQuote}
                    onChange={(e) => setSchoolInfoForm({ ...schoolInfoForm, principalQuote: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-normal text-slate-800 focus:outline-none focus:border-school-green-700"
                  />
                </div>

                <div className="pt-2">
                  <ImageUploadInput
                    label="Foto Kepala Sekolah"
                    value={schoolInfoForm.principalPhoto || ''}
                    onChange={(url) => setSchoolInfoForm({ ...schoolInfoForm, principalPhoto: url })}
                  />
                </div>
              </div>

              {/* Hero Banner Manager */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-school-green-700" />
                      <span>Kelola Hero Banner Slider (Beranda Utama)</span>
                    </h3>
                    <p className="text-xs text-slate-500">Atur judul, gambar latar, dan pesan promosi PPDB di slider utama.</p>
                  </div>
                  <button
                    onClick={() => {
                      setEditingSlide(null);
                      setSlideBgImage('');
                      setSlideModalOpen(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold text-xs shadow-md flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <Plus className="w-4 h-4 text-school-gold-400" />
                    <span>Tambah Slide Baru</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {store.heroSlides.map((slide, idx) => (
                    <div key={slide.id} className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 space-y-3 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="relative h-28 rounded-xl overflow-hidden bg-slate-800">
                          <img src={slide.bgImage} alt={slide.title} className="w-full h-full object-cover opacity-70" />
                          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#D4AF37] text-slate-900">
                            Slide #{idx + 1}
                          </span>
                        </div>

                        <div className="space-y-1 text-xs">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                            {slide.badge}
                          </span>
                          <h4 className="font-extrabold text-slate-900 line-clamp-2">{slide.title}</h4>
                          <p className="text-[11px] text-slate-500 line-clamp-2">{slide.description}</p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200 flex justify-end gap-2 text-xs">
                        <button
                          onClick={() => {
                            setEditingSlide(slide);
                            setSlideBgImage(slide.bgImage);
                            setSlideModalOpen(true);
                          }}
                          className="px-3 py-1 bg-white rounded-lg border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 flex items-center gap-1"
                        >
                          <Edit2 className="w-3.5 h-3.5 text-school-green-700" />
                          <span>Edit Slide</span>
                        </button>
                        <button
                          onClick={() => handleDeleteSlide(slide.id)}
                          className="px-2.5 py-1 bg-red-50 text-red-600 rounded-lg border border-red-200 font-bold hover:bg-red-100 flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BERITA & PENGUMUMAN */}
          {activeTab === 'news' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-school-green-700" />
                      <span>Manajemen Berita &amp; Pengumuman Sekolah</span>
                    </h2>
                    <p className="text-xs text-slate-500">
                      Tambah, edit, atau hapus berita kegiatan, prestasi siswa, dan pengumuman resmi.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setEditingNews(null);
                      setNewsImage('');
                      setNewsModalOpen(true);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold text-xs shadow-md flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <Plus className="w-4 h-4 text-school-gold-400" />
                    <span>Tambah Berita Baru</span>
                  </button>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Cari berita..."
                      value={newsSearch}
                      onChange={(e) => setNewsSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-school-green-700"
                    />
                  </div>

                  <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
                    {['Semua', 'Pengumuman', 'Berita', 'Prestasi', 'Kegiatan', 'Artikel'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setNewsCatFilter(cat)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap ${
                          newsCatFilter === cat
                            ? 'bg-school-green-700 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Articles Table / Cards */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-extrabold">
                      <tr>
                        <th className="p-3.5">Artikel &amp; Thumbnail</th>
                        <th className="p-3.5">Kategori</th>
                        <th className="p-3.5">Tanggal</th>
                        <th className="p-3.5">Penulis</th>
                        <th className="p-3.5 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredNews.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="p-8 text-center text-slate-400 font-medium">
                            Tidak ditemukan artikel berita.
                          </td>
                        </tr>
                      ) : (
                        filteredNews.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="p-3.5">
                              <div className="flex items-center gap-3 max-w-md">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-12 h-12 rounded-xl object-cover shrink-0 bg-slate-100"
                                />
                                <div className="space-y-0.5">
                                  <Link
                                    href={`/berita/${item.slug}`}
                                    target="_blank"
                                    className="font-extrabold text-slate-900 hover:text-school-green-700 line-clamp-1"
                                  >
                                    {item.title}
                                  </Link>
                                  <p className="text-[11px] text-slate-500 line-clamp-1">{item.summary}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-3.5 whitespace-nowrap">
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                {item.category}
                              </span>
                            </td>
                            <td className="p-3.5 whitespace-nowrap font-medium text-slate-600">{item.date}</td>
                            <td className="p-3.5 whitespace-nowrap font-semibold text-slate-700">{item.author}</td>
                            <td className="p-3.5 whitespace-nowrap text-right space-x-1">
                              <button
                                onClick={() => {
                                  setEditingNews(item);
                                  setNewsImage(item.image);
                                  setNewsModalOpen(true);
                                }}
                                className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold"
                                title="Edit Artikel"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteNews(item.id)}
                                className="p-2 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 font-bold"
                                title="Hapus Artikel"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: VERIFIKASI DATA PPDB */}
          {activeTab === 'ppdb' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-school-green-700" />
                      <span>Portal Verifikasi &amp; Data Pendaftar PPDB 2026/2027</span>
                    </h2>
                    <p className="text-xs text-slate-500">
                      Kelola formulir pendaftaran, lakukan verifikasi status, dan ekspor data calon siswa baru.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      onClick={handleExportPpdbCsv}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5"
                    >
                      <Download className="w-4 h-4 text-slate-600" />
                      <span>Ekspor Data (CSV)</span>
                    </button>
                    <button
                      onClick={() => setAddPpdbModalOpen(true)}
                      className="px-4 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold text-xs shadow-md flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4 text-school-gold-400" />
                      <span>Tambah Offline/Walk-in</span>
                    </button>
                  </div>
                </div>

                {/* Status Summary Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                    <span className="text-slate-500 font-bold">Total Pendaftar</span>
                    <p className="text-xl font-extrabold text-slate-900">{store.applicants.length} Siswa</p>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 space-y-1">
                    <span className="text-amber-800 font-bold">Menunggu Verifikasi</span>
                    <p className="text-xl font-extrabold text-amber-900">{pendingPpdbCount} Berkas</p>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 space-y-1">
                    <span className="text-emerald-800 font-bold">Diterima</span>
                    <p className="text-xl font-extrabold text-emerald-900">{acceptedPpdbCount} Siswa</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-xl border border-blue-200 space-y-1">
                    <span className="text-blue-800 font-bold">Gelombang Aktif</span>
                    <p className="text-xl font-extrabold text-blue-900">Gel. 1 Promo</p>
                  </div>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Cari nama, NISN, asal sekolah..."
                      value={ppdbSearch}
                      onChange={(e) => setPpdbSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-school-green-700"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                    <select
                      value={ppdbStatusFilter}
                      onChange={(e) => setPpdbStatusFilter(e.target.value)}
                      className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white"
                    >
                      <option value="Semua">Status: Semua</option>
                      <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
                      <option value="Diterima">Diterima</option>
                      <option value="Perlu Perbaikan">Perlu Perbaikan</option>
                      <option value="Ditolak">Ditolak</option>
                    </select>

                    <select
                      value={ppdbTrackFilter}
                      onChange={(e) => setPpdbTrackFilter(e.target.value)}
                      className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white"
                    >
                      <option value="Semua">Jalur: Semua</option>
                      <option value="Reguler">Reguler</option>
                      <option value="Prestasi">Prestasi</option>
                      <option value="Tahfidz Qur'an">Tahfidz Qur&apos;an</option>
                      <option value="Undangan Yayasan">Undangan Yayasan</option>
                    </select>
                  </div>
                </div>

                {/* Applicants Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-extrabold">
                      <tr>
                        <th className="p-3.5">No Reg &amp; Nama Calon Siswa</th>
                        <th className="p-3.5">Asal Sekolah</th>
                        <th className="p-3.5">Jalur</th>
                        <th className="p-3.5">Waktu Pendaftaran</th>
                        <th className="p-3.5">Status Verifikasi</th>
                        <th className="p-3.5 text-right">Aksi Verifikasi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredApplicants.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="p-8 text-center text-slate-400 font-medium">
                            Tidak ada data pendaftar yang cocok.
                          </td>
                        </tr>
                      ) : (
                        filteredApplicants.map((app) => (
                          <tr key={app.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="p-3.5">
                              <div className="space-y-0.5">
                                <div className="flex items-center gap-2">
                                  <span className="font-extrabold text-slate-900">{app.fullName}</span>
                                  <span className="text-[10px] text-slate-500 font-semibold">({app.gender})</span>
                                </div>
                                <p className="text-[11px] text-slate-500 font-mono">
                                  No: <strong className="text-school-green-700">{app.registrationNo}</strong> • NISN: {app.nisn}
                                </p>
                              </div>
                            </td>
                            <td className="p-3.5 font-semibold text-slate-700">{app.originSchool}</td>
                            <td className="p-3.5">
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900">
                                {app.track}
                              </span>
                            </td>
                            <td className="p-3.5 text-slate-500 whitespace-nowrap">{app.registrationDate}</td>
                            <td className="p-3.5 whitespace-nowrap">
                              <span
                                className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${
                                  app.status === 'Diterima'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : app.status === 'Menunggu Verifikasi'
                                    ? 'bg-amber-100 text-amber-800'
                                    : app.status === 'Perlu Perbaikan'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                              >
                                {app.status}
                              </span>
                            </td>
                            <td className="p-3.5 whitespace-nowrap text-right space-x-1">
                              <button
                                onClick={() => {
                                  setSelectedApplicant(app);
                                  setApplicantModalOpen(true);
                                }}
                                className="px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 font-bold"
                              >
                                Detail
                              </button>
                              <button
                                onClick={() => handleUpdatePpdbStatus(app.id, 'Diterima')}
                                className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
                                title="Set Diterima"
                              >
                                Terima
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PROGRAM & EKSTRAKURIKULER */}
          {activeTab === 'programs' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-school-green-700" />
                      <span>Program Unggulan &amp; Ekstrakurikuler</span>
                    </h2>
                    <p className="text-xs text-slate-500">Kelola daftar program unggulan dan cabang ekstrakurikuler sekolah.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setEditingProgram(null);
                        setProgramImageUrl('');
                        setProgramModalOpen(true);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold text-xs shadow-md flex items-center gap-1"
                    >
                      <Plus className="w-4 h-4 text-school-gold-400" />
                      <span>Tambah Program</span>
                    </button>
                    <button
                      onClick={() => {
                        setEditingEkskul(null);
                        setEkskulImageUrl('');
                        setEkskulModalOpen(true);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-extrabold text-xs shadow-md flex items-center gap-1"
                    >
                      <Plus className="w-4 h-4 text-school-gold-400" />
                      <span>Tambah Ekskul</span>
                    </button>
                  </div>
                </div>

                {/* Programs List */}
                <div className="space-y-3">
                  <h3 className="text-sm font-extrabold text-slate-800">Program Unggulan Sekolah</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {store.programs.map((prog) => (
                      <div key={prog.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#D4AF37] text-[#0D2D1D]">
                              {prog.badge}
                            </span>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => {
                                  setEditingProgram(prog);
                                  setProgramImageUrl(prog.imageUrl || '');
                                  setProgramModalOpen(true);
                                }}
                                className="p-1.5 text-slate-600 hover:text-school-green-700 hover:bg-slate-200/60 rounded-lg transition-colors"
                                title="Edit Program"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteProgram(prog.id)}
                                className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                                title="Hapus Program"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                          <h4 className="font-extrabold text-slate-900 text-sm">{prog.title}</h4>
                          <p className="text-xs text-slate-500 line-clamp-2">{prog.shortDesc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extracurriculars List */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-extrabold text-slate-800">Cabang Ekstrakurikuler ({store.extracurriculars.length})</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {store.extracurriculars.map((ekskul) => (
                      <div key={ekskul.id} className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-2 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="font-extrabold text-slate-900 text-xs">{ekskul.name}</h4>
                            <span className="text-[10px] text-slate-400 font-medium">{ekskul.schedule}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">Pembina: {ekskul.coach}</p>
                          <p className="text-[11px] text-slate-600 line-clamp-2 mt-1">{ekskul.description}</p>
                        </div>
                        <div className="flex items-center justify-end gap-1 pt-2 border-t border-slate-100">
                          <button
                            onClick={() => {
                              setEditingEkskul(ekskul);
                              setEkskulImageUrl(ekskul.imageUrl || '');
                              setEkskulModalOpen(true);
                            }}
                            className="px-2 py-1 text-[11px] font-bold text-school-green-700 hover:bg-emerald-50 rounded-md"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteEkskul(ekskul.id)}
                            className="px-2 py-1 text-[11px] font-bold text-red-600 hover:bg-red-50 rounded-md"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: DEWAN GURU & STAFF */}
          {activeTab === 'staff' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                      <Users className="w-5 h-5 text-school-green-700" />
                      <span>Kelola Data Dewan Guru &amp; Staff Kependidikan</span>
                    </h2>
                    <p className="text-xs text-slate-500">
                      Kelola profil tenaga pendidik, foto formal, mata pelajaran, dan jabatan struktur organisasi.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setEditingStaff(null);
                      setStaffPhoto('');
                      setStaffModalOpen(true);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold text-xs shadow-md flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <Plus className="w-4 h-4 text-school-gold-400" />
                    <span>Tambah Staf Guru Baru</span>
                  </button>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Cari nama atau mata pelajaran..."
                      value={staffSearch}
                      onChange={(e) => setStaffSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-school-green-700"
                    />
                  </div>

                  <select
                    value={staffDeptFilter}
                    onChange={(e) => setStaffDeptFilter(e.target.value)}
                    className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white"
                  >
                    <option value="Semua">Kategori: Semua</option>
                    <option value="Kepala Sekolah">Kepala Sekolah</option>
                    <option value="Guru Mata Pelajaran">Guru Mata Pelajaran</option>
                    <option value="Guru BK">Guru BK</option>
                    <option value="Tenaga Kependidikan">Tenaga Kependidikan</option>
                  </select>
                </div>

                {/* Staff Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredStaff.map((person) => (
                    <div
                      key={person.id}
                      className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-center gap-4 hover:border-slate-300 transition-colors"
                    >
                      <img
                        src={person.photo}
                        alt={person.name}
                        className="w-16 h-16 rounded-2xl object-cover shrink-0 bg-slate-200 shadow-sm"
                      />
                      <div className="space-y-0.5 overflow-hidden flex-1">
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-100 text-emerald-800">
                          {person.department}
                        </span>
                        <h4 className="font-extrabold text-slate-900 text-xs truncate">{person.name}</h4>
                        <p className="text-[11px] font-bold text-school-green-700 truncate">{person.role}</p>
                        <p className="text-[10px] text-slate-500 truncate">{person.education}</p>

                        <div className="pt-2 flex gap-2 text-xs">
                          <button
                            onClick={() => {
                              setEditingStaff(person);
                              setStaffPhoto(person.photo || '');
                              setStaffModalOpen(true);
                            }}
                            className="text-slate-600 hover:text-slate-900 font-bold"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteStaff(person.id)}
                            className="text-red-600 hover:text-red-800 font-bold"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: GALERI FOTO & VIDEO */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                      <ImageIcon className="w-5 h-5 text-school-green-700" />
                      <span>Manajemen Dokumentasi Galeri Kegiatan</span>
                    </h2>
                    <p className="text-xs text-slate-500">Unggah dan atur dokumentasi kegiatan pembelajaran, ibadah, dan lomba.</p>
                  </div>

                  <button
                    onClick={() => {
                      setEditingGallery(null);
                      setGalleryImageUrl('');
                      setGalleryModalOpen(true);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold text-xs shadow-md flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <Plus className="w-4 h-4 text-school-gold-400" />
                    <span>Tambah Foto Galeri</span>
                  </button>
                </div>

                {/* Filter */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {['Semua', 'Keagamaan', 'Fasilitas', 'Ekstrakurikuler', 'Kegiatan', 'Prestasi'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setGalleryCatFilter(cat)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap ${
                        galleryCatFilter === cat
                          ? 'bg-school-green-700 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredGallery.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 space-y-2 flex flex-col justify-between">
                      <div>
                        <div className="relative h-40 bg-slate-800">
                          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-md">
                            {item.category}
                          </span>
                        </div>
                        <div className="p-3.5 space-y-1">
                          <h4 className="font-extrabold text-slate-900 text-xs line-clamp-1">{item.title}</h4>
                          <p className="text-[11px] text-slate-500 line-clamp-2">{item.description}</p>
                        </div>
                      </div>
                      <div className="p-3.5 pt-0 flex justify-between items-center text-[11px] border-t border-slate-100 mt-2">
                        <span className="text-slate-400 font-medium">{item.date}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditingGallery(item);
                              setGalleryImageUrl(item.imageUrl || '');
                              setGalleryModalOpen(true);
                            }}
                            className="text-school-green-700 hover:text-school-green-800 font-bold"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteGallery(item.id)}
                            className="text-red-600 hover:text-red-800 font-bold"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: AGENDA SEKOLAH */}
          {activeTab === 'agendas' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-school-green-700" />
                      <span>Jadwal Agenda &amp; Kalender Kegiatan</span>
                    </h2>
                    <p className="text-xs text-slate-500">Kelola kalender akademik, rapat wali murid, dan ujian sekolah.</p>
                  </div>

                  <button
                    onClick={() => {
                      setEditingAgenda(null);
                      setAgendaModalOpen(true);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold text-xs shadow-md flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4 text-school-gold-400" />
                    <span>Tambah Agenda</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {store.agendas.map((ag) => (
                    <div
                      key={ag.id}
                      className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#0D2D1D] text-[#D4AF37] border border-[#D4AF37]/30 flex flex-col items-center justify-center shrink-0">
                          <span className="text-xs font-bold leading-none uppercase">{ag.month}</span>
                          <span className="text-lg font-extrabold leading-tight">{ag.day}</span>
                        </div>
                        <div className="space-y-1">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-900">
                            {ag.category}
                          </span>
                          <h4 className="font-extrabold text-slate-900 text-sm">{ag.title}</h4>
                          <p className="text-xs text-slate-500">
                            Waktu: {ag.time} • Lokasi: {ag.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        <button
                          onClick={() => {
                            setEditingAgenda(ag);
                            setAgendaModalOpen(true);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteAgenda(ag.id)}
                          className="px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 font-bold text-xs"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: TESTIMONI & FAQ */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-school-green-700" />
                      <span>Testimoni Alumni &amp; Wali Murid</span>
                    </h2>
                    <p className="text-xs text-slate-500">Ulasan nyata mengenai kualitas pendidikan SMP 45 2 Kedungpring.</p>
                  </div>

                  <button
                    onClick={() => {
                      setEditingTesti(null);
                      setTestiPhoto('');
                      setTestiModalOpen(true);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold text-xs shadow-md flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <Plus className="w-4 h-4 text-school-gold-400" />
                    <span>Tambah Testimoni</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {store.testimonials.map((testi) => (
                    <div key={testi.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <img src={testi.photo} alt={testi.name} className="w-10 h-10 rounded-full object-cover" />
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-xs">{testi.name}</h4>
                            <p className="text-[10px] text-slate-500">{testi.role}</p>
                          </div>
                        </div>
                        <p className="text-xs italic text-slate-600">&quot;{testi.quote}&quot;</p>
                      </div>
                      <div className="pt-2 border-t border-slate-200 flex justify-end gap-2 text-xs">
                        <button
                          onClick={() => {
                            setEditingTesti(testi);
                            setTestiPhoto(testi.photo || '');
                            setTestiModalOpen(true);
                          }}
                          className="px-2.5 py-1 text-[11px] font-bold text-school-green-700 hover:bg-emerald-50 rounded-md"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteTesti(testi.id)}
                          className="px-2.5 py-1 text-[11px] font-bold text-red-600 hover:bg-red-50 rounded-md"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 10: PENGATURAN AKUN */}
          {activeTab === 'settings' && (
            <div className="space-y-6 max-w-2xl">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-school-green-700" />
                    <span>Pengaturan Akun &amp; Keamanan Admin</span>
                  </h2>
                  <p className="text-xs text-slate-500">Kelola kredensial masuk dan hak akses pengelola website.</p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    showToast('Kata sandi administrator berhasil diperbarui!');
                  }}
                  className="space-y-4 text-xs"
                >
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Username Saat Ini</label>
                    <input
                      type="text"
                      disabled
                      value="admin.maarif"
                      className="w-full px-3 py-2 rounded-xl bg-slate-100 border border-slate-200 font-bold text-slate-600 cursor-not-allowed"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Kata Sandi Baru *</label>
                    <input
                      type="password"
                      required
                      placeholder="Masukkan kata sandi baru"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium text-slate-800 focus:outline-none focus:border-school-green-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold text-xs shadow-md"
                  >
                    Simpan Kata Sandi
                  </button>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* MODAL: WRITE / EDIT NEWS */}
      {newsModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-2xl p-6 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-school-green-700" />
                <span>{editingNews ? 'Edit Artikel Berita' : 'Tulis Artikel Berita Baru'}</span>
              </h3>
              <button onClick={() => setNewsModalOpen(false)} className="p-1 rounded-lg text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveNews} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Judul Berita / Pengumuman *</label>
                <input
                  type="text"
                  name="title"
                  required
                  defaultValue={editingNews?.title || ''}
                  placeholder="Contoh: Siswa SMP 45 2 Kedungpring Raih Juara 1 Olympiade Sains"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Kategori Artikel *</label>
                  <select
                    name="category"
                    defaultValue={editingNews?.category || 'Berita'}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                  >
                    <option value="Pengumuman">Pengumuman</option>
                    <option value="Berita">Berita Utama</option>
                    <option value="Prestasi">Prestasi Siswa</option>
                    <option value="Kegiatan">Kegiatan Sekolah</option>
                    <option value="Artikel">Artikel Edukasi</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Penulis / Tim Humas</label>
                  <input
                    type="text"
                    name="author"
                    defaultValue={editingNews?.author || 'Tim Humas SMP 45 2'}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                  />
                </div>
              </div>

              <div className="pt-1">
                <ImageUploadInput
                  label="Gambar Utama Berita / Artikel *"
                  value={newsImage}
                  onChange={setNewsImage}
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Ringkasan Singkat (Singkat &amp; Jelas) *</label>
                <textarea
                  name="summary"
                  required
                  rows={2}
                  defaultValue={editingNews?.summary || ''}
                  placeholder="Ringkasan 1-2 kalimat..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Isi Berita Lengkap *</label>
                <textarea
                  name="content"
                  required
                  rows={5}
                  defaultValue={editingNews?.content || ''}
                  placeholder="Tuliskan isi berita selengkapnya..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setNewsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold shadow-md"
                >
                  Terbitkan Berita
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: PPDB DETAIL */}
      {applicantModalOpen && selectedApplicant && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-lg p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-school-green-700" />
                <span>Detail Pendaftar PPDB</span>
              </h3>
              <button onClick={() => setApplicantModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold">No. Registrasi:</span>
                  <span className="font-mono font-extrabold text-school-green-800 text-sm">
                    {selectedApplicant.registrationNo}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold">Nama Lengkap:</span>
                  <span className="font-extrabold text-slate-900">{selectedApplicant.fullName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold">NISN:</span>
                  <span>{selectedApplicant.nisn}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold">Asal Sekolah SD/MI:</span>
                  <span className="font-semibold">{selectedApplicant.originSchool}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold">Nama Orang Tua / Wali:</span>
                  <span>{selectedApplicant.parentName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold">No HP / WhatsApp:</span>
                  <a
                    href={`https://wa.me/${selectedApplicant.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    className="font-bold text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    <span>{selectedApplicant.phone}</span>
                    <Phone className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold">Jalur Pendaftaran:</span>
                  <span className="px-2 py-0.5 rounded-full font-extrabold bg-amber-100 text-amber-900">
                    {selectedApplicant.track}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold">Status Saat Ini:</span>
                  <span className="px-2 py-0.5 rounded-full font-extrabold bg-emerald-100 text-emerald-800">
                    {selectedApplicant.status}
                  </span>
                </div>
              </div>

              {selectedApplicant.notes && (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs">
                  <strong>Catatan Panitia:</strong> {selectedApplicant.notes}
                </div>
              )}

              <div className="pt-2 flex flex-col gap-2">
                <span className="font-bold text-slate-700">Ubah Status Verifikasi:</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleUpdatePpdbStatus(selectedApplicant.id, 'Diterima')}
                    className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs"
                  >
                    Set DITERIMA
                  </button>
                  <button
                    onClick={() => handleUpdatePpdbStatus(selectedApplicant.id, 'Perlu Perbaikan')}
                    className="py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs"
                  >
                    Perlu Perbaikan
                  </button>
                </div>
                <div className="pt-2 flex justify-between items-center border-t border-slate-100 mt-2">
                  <button
                    onClick={() => handleDeleteApplicant(selectedApplicant.id)}
                    className="px-3 py-1.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 font-bold text-xs flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Hapus Pendaftar</span>
                  </button>
                  <button
                    onClick={() => setApplicantModalOpen(false)}
                    className="px-4 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT HERO SLIDE */}
      {slideModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-lg p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-school-green-700" />
                <span>{editingSlide ? 'Edit Slide Banner' : 'Tambah Slide Banner Baru'}</span>
              </h3>
              <button onClick={() => setSlideModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveSlide} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Judul Utama Slide *</label>
                <input
                  type="text"
                  name="title"
                  required
                  defaultValue={editingSlide?.title || ''}
                  placeholder="Contoh: PPDB Gelombang 1 Telah Dibuka!"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Sub-judul / Yayasan</label>
                <input
                  type="text"
                  name="subtitle"
                  defaultValue={editingSlide?.subtitle || "Yayasan Pendidikan Ma'arif Empat Lima Kalen"}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Badge Label *</label>
                  <input
                    type="text"
                    name="badge"
                    required
                    defaultValue={editingSlide?.badge || 'Tahun Ajaran 2026/2027'}
                    placeholder="Contoh: Bebas Pendaftaran"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                  />
                </div>
              <div>
                <ImageUploadInput
                  label="Gambar Latar Slide (Background) *"
                  value={slideBgImage}
                  onChange={setSlideBgImage}
                  required
                />
              </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Deskripsi Singkat Slide *</label>
                <textarea
                  name="description"
                  required
                  rows={2}
                  defaultValue={editingSlide?.description || ''}
                  placeholder="Tuliskan pesan promosi ringkas..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Teks Tombol Utama</label>
                  <input
                    type="text"
                    name="ctaPrimary"
                    defaultValue={editingSlide?.ctaPrimary || 'Pendaftaran PPDB Online'}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Teks Tombol Kedua</label>
                  <input
                    type="text"
                    name="ctaSecondary"
                    defaultValue={editingSlide?.ctaSecondary || 'Jelajahi Profil Sekolah'}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSlideModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold shadow-md"
                >
                  Simpan Slide
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT PROGRAM */}
      {programModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-lg p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-school-green-700" />
                <span>{editingProgram ? 'Edit Program Unggulan' : 'Tambah Program Unggulan Baru'}</span>
              </h3>
              <button onClick={() => setProgramModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProgram} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Nama Program *</label>
                <input
                  type="text"
                  name="title"
                  required
                  defaultValue={editingProgram?.title || ''}
                  placeholder="Contoh: Kelas Tahfidz Al-Qur'an Interaktif"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Badge Tagline *</label>
                  <input
                    type="text"
                    name="badge"
                    required
                    defaultValue={editingProgram?.badge || 'Program Unggulan'}
                    placeholder="Contoh: Unggulan / Karakter"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                  />
                </div>
                <div className="pt-1">
                  <ImageUploadInput
                    label="Gambar Banner Program *"
                    value={programImageUrl}
                    onChange={setProgramImageUrl}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Deskripsi Ringkas *</label>
                <textarea
                  name="shortDesc"
                  required
                  rows={2}
                  defaultValue={editingProgram?.shortDesc || ''}
                  placeholder="Deskripsi singkat untuk kartu depan..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Deskripsi Lengkap</label>
                <textarea
                  name="fullDesc"
                  rows={3}
                  defaultValue={editingProgram?.fullDesc || ''}
                  placeholder="Rincian manfaat dan fasilitas program..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setProgramModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold shadow-md"
                >
                  Simpan Program
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT EKSKUL */}
      {ekskulModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-school-green-700" />
                <span>{editingEkskul ? 'Edit Ekstrakurikuler' : 'Tambah Ekstrakurikuler Baru'}</span>
              </h3>
              <button onClick={() => setEkskulModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEkskul} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Nama Ekstrakurikuler *</label>
                <input
                  type="text"
                  name="name"
                  required
                  defaultValue={editingEkskul?.name || ''}
                  placeholder="Contoh: Pramuka Penggalang"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Pembina / Pelatih *</label>
                  <input
                    type="text"
                    name="coach"
                    required
                    defaultValue={editingEkskul?.coach || ''}
                    placeholder="Nama Pembina"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Jadwal Latihan *</label>
                  <input
                    type="text"
                    name="schedule"
                    required
                    defaultValue={editingEkskul?.schedule || 'Jumat, 14.30 WIB'}
                    placeholder="Jumat, 15.00 WIB"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Deskripsi Kegiatan *</label>
                <textarea
                  name="description"
                  required
                  rows={2}
                  defaultValue={editingEkskul?.description || ''}
                  placeholder="Keterangan singkat fokus latihan..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="pt-1">
                <ImageUploadInput
                  label="Gambar Kegiatan Ekskul"
                  value={ekskulImageUrl}
                  onChange={setEkskulImageUrl}
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEkskulModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold shadow-md"
                >
                  Simpan Ekskul
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT TESTIMONIAL */}
      {testiModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-school-green-700" />
                <span>{editingTesti ? 'Edit Testimoni' : 'Tambah Testimoni Baru'}</span>
              </h3>
              <button onClick={() => setTestiModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTesti} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Nama Pemberi Testimoni *</label>
                <input
                  type="text"
                  name="name"
                  required
                  defaultValue={editingTesti?.name || ''}
                  placeholder="Contoh: Hj. Siti Rahmah, S.Pd."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Peran / Status *</label>
                <input
                  type="text"
                  name="role"
                  required
                  defaultValue={editingTesti?.role || 'Wali Murid Kelas VIII'}
                  placeholder="Contoh: Wali Murid / Alumni 2022"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Isi Testimoni / Ulasan *</label>
                <textarea
                  name="quote"
                  required
                  rows={3}
                  defaultValue={editingTesti?.quote || ''}
                  placeholder="Ulasan pengalaman belajar..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="pt-1">
                <ImageUploadInput
                  label="Foto Profile"
                  value={testiPhoto}
                  onChange={setTestiPhoto}
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setTestiModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold shadow-md"
                >
                  Simpan Testimoni
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD OFFLINE PPDB */}
      {addPpdbModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-lg p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-school-green-700" />
                <span>Input Pendaftar PPDB Offline / Walk-in</span>
              </h3>
              <button onClick={() => setAddPpdbModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddPpdbApplicant} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Nama Lengkap Calon Siswa *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Nama sesuai Akta / KK"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">NISN (10 Digit)</label>
                  <input
                    type="text"
                    name="nisn"
                    placeholder="0012345678"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Jenis Kelamin</label>
                  <select
                    name="gender"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                  >
                    <option value="Laki-Laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Asal Sekolah SD/MI *</label>
                <input
                  type="text"
                  name="originSchool"
                  required
                  placeholder="Contoh: SDN Kalen 01 / MI Ma'arif"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Nama Orang Tua / Wali *</label>
                  <input
                    type="text"
                    name="parentName"
                    required
                    placeholder="Nama Orang Tua"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">No HP / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="081234567890"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Jalur Pendaftaran *</label>
                <select
                  name="track"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                >
                  <option value="Reguler">Jalur Reguler</option>
                  <option value="Prestasi">Jalur Prestasi</option>
                  <option value="Tahfidz Qur'an">Jalur Tahfidz Qur&apos;an</option>
                  <option value="Undangan Yayasan">Jalur Undangan Yayasan</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setAddPpdbModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold shadow-md"
                >
                  Simpan Pendaftar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD/EDIT STAFF */}
      {staffModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-school-green-700" />
                <span>{editingStaff ? 'Edit Staf Guru' : 'Tambah Staf Guru Baru'}</span>
              </h3>
              <button onClick={() => setStaffModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveStaff} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Nama Lengkap &amp; Gelar *</label>
                <input
                  type="text"
                  name="name"
                  required
                  defaultValue={editingStaff?.name || ''}
                  placeholder="Contoh: Drs. Ahmad Masrukin, M.Pd."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Jabatan *</label>
                <input
                  type="text"
                  name="role"
                  required
                  defaultValue={editingStaff?.role || ''}
                  placeholder="Contoh: Guru Matematika / Pembina OSIS"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Kategori Struktur *</label>
                <select
                  name="department"
                  defaultValue={editingStaff?.department || 'Guru Mata Pelajaran'}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                >
                  <option value="Kepala Sekolah">Kepala Sekolah</option>
                  <option value="Guru Mata Pelajaran">Guru Mata Pelajaran</option>
                  <option value="Guru BK">Guru BK</option>
                  <option value="Tenaga Kependidikan">Tenaga Kependidikan</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Mata Pelajaran (Jika Guru)</label>
                <input
                  type="text"
                  name="subject"
                  defaultValue={editingStaff?.subject || ''}
                  placeholder="Contoh: Bahasa Indonesia / PAI"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Pendidikan Terakhir</label>
                <input
                  type="text"
                  name="education"
                  defaultValue={editingStaff?.education || 'S1 Pendidikan'}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="pt-1">
                <ImageUploadInput
                  label="Foto Formal Staff / Guru"
                  value={staffPhoto}
                  onChange={setStaffPhoto}
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setStaffModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold shadow-md"
                >
                  Simpan Staf
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT GALLERY */}
      {galleryModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-school-green-700" />
                <span>{editingGallery ? 'Edit Dokumentasi Galeri' : 'Tambah Dokumentasi Galeri Baru'}</span>
              </h3>
              <button onClick={() => setGalleryModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveGallery} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Judul Foto / Kegiatan *</label>
                <input
                  type="text"
                  name="title"
                  required
                  defaultValue={editingGallery?.title || ''}
                  placeholder="Contoh: Upacara Bendera & Penyerahan Tropi"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Kategori Galeri *</label>
                <select
                  name="category"
                  defaultValue={editingGallery?.category || 'Kegiatan'}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                >
                  <option value="Kegiatan">Kegiatan</option>
                  <option value="Keagamaan">Keagamaan</option>
                  <option value="Fasilitas">Fasilitas</option>
                  <option value="Ekstrakurikuler">Ekstrakurikuler</option>
                  <option value="Prestasi">Prestasi</option>
                </select>
              </div>

              <div className="pt-1">
                <ImageUploadInput
                  label="Gambar Dokumentasi Kegiatan *"
                  value={galleryImageUrl}
                  onChange={setGalleryImageUrl}
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Deskripsi Singkat</label>
                <textarea
                  name="description"
                  rows={2}
                  defaultValue={editingGallery?.description || ''}
                  placeholder="Keterangan singkat momen foto ini..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setGalleryModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold shadow-md"
                >
                  Simpan Foto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT AGENDA */}
      {agendaModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-md p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-school-green-700" />
                <span>{editingAgenda ? 'Edit Agenda Kegiatan' : 'Tambah Agenda Kegiatan Baru'}</span>
              </h3>
              <button onClick={() => setAgendaModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveAgenda} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Judul Kegiatan Agenda *</label>
                <input
                  type="text"
                  name="title"
                  required
                  defaultValue={editingAgenda?.title || ''}
                  placeholder="Contoh: Rapat Pleno Wali Murid Kelas IX"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Tanggal (Angka)</label>
                  <input
                    type="text"
                    name="day"
                    required
                    defaultValue={editingAgenda?.day || ''}
                    placeholder="15"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Bulan (Singkatan)</label>
                  <input
                    type="text"
                    name="month"
                    required
                    defaultValue={editingAgenda?.month || ''}
                    placeholder="AGU / SEP"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold focus:outline-none focus:border-school-green-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Waktu *</label>
                  <input
                    type="text"
                    name="time"
                    required
                    defaultValue={editingAgenda?.time || ''}
                    placeholder="08.00 - 11.00 WIB"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Kategori</label>
                  <input
                    type="text"
                    name="category"
                    defaultValue={editingAgenda?.category || 'Akademik'}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Lokasi Tempat *</label>
                <input
                  type="text"
                  name="location"
                  required
                  defaultValue={editingAgenda?.location || ''}
                  placeholder="Aula Utama SMP 45 2 Kedungpring"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setAgendaModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold shadow-md"
                >
                  Simpan Agenda
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
