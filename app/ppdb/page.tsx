'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ButtonSpinnerOverlay } from '@/components/common/LoadingSpinner';
import { ppdbFaqs as defaultPpdbFaqs } from '@/data/schoolData';
import { PpdbApplicant, initialApplicants, useAdminDataStore } from '@/lib/adminStore';
import { submitPpdbApplication, checkApplicantStatus } from '@/lib/services/ppdb.service';
import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  FileText,
  PhoneCall,
  Sparkles,
  ChevronDown,
  Download,
  Printer,
  Check,
  User,
  Users,
  BookOpen,
  Send,
  HelpCircle,
  Award,
  Search,
  UserCheck,
} from 'lucide-react';

export default function PpdbPage() {
  const { schoolInfo, faqs: storeFaqs } = useAdminDataStore();
  const ppdbFaqs = storeFaqs && storeFaqs.length > 0 ? storeFaqs : defaultPpdbFaqs;
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formStep, setFormStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [formMode, setFormMode] = useState<'express' | 'full'>('express');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Security & Anti-Bot State
  const [honeypot, setHoneypot] = useState(''); // Hidden trap field for bots
  const [captchaNum1, setCaptchaNum1] = useState<number | null>(null);
  const [captchaNum2, setCaptchaNum2] = useState<number | null>(null);
  const [userCaptcha, setUserCaptcha] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  // Form Data
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nisn: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: 'Laki-laki',
    asalSekolah: '',
    namaAyah: '',
    namaIbu: '',
    pekerjaanOrangTua: '',
    noWhatsapp: '',
    alamatLengkap: '',
    jalurPendaftaran: 'Gelombang 1 - Reguler (Bebas Biaya & Gratis Seragam)',
  });

  const [nomorPendaftaran, setNomorPendaftaran] = useState('');

  // Lookup State for Check Status PPDB
  const [lookupQuery, setLookupQuery] = useState('');
  const [foundApplicant, setFoundApplicant] = useState<PpdbApplicant | null>(null);
  const [lookupError, setLookupError] = useState('');

  const handleLookupApplicant = async (e: React.FormEvent) => {
    e.preventDefault();
    setLookupError('');
    setFoundApplicant(null);

    const query = lookupQuery.trim().toLowerCase();
    if (!query) {
      setLookupError('Masukkan Nomor Registrasi (contoh: PPDB2027-003) atau Nomor WhatsApp Anda.');
      return;
    }

    // Try Supabase lookup
    const supabaseApplicant = await checkApplicantStatus(query);
    if (supabaseApplicant) {
      setFoundApplicant(supabaseApplicant);
      return;
    }

    // Fallback to local list
    let currentList: PpdbApplicant[] = initialApplicants;
    try {
      const storedStr = typeof window !== 'undefined' ? localStorage.getItem('smp45_applicants') : null;
      if (storedStr) {
        currentList = JSON.parse(storedStr);
      }
    } catch (e) {
      // ignore
    }

    const matched = currentList.find(
      (item) =>
        item.registrationNo.toLowerCase().includes(query) ||
        item.phone.replace(/[^0-9]/g, '').includes(query.replace(/[^0-9]/g, ''))
    );

    if (matched) {
      setFoundApplicant(matched);
    } else {
      setLookupError('Data pendaftaran tidak ditemukan. Pastikan Nomor Registrasi atau Nomor WA sudah benar.');
    }
  };

  // Generate new math captcha on load
  const refreshCaptcha = React.useCallback(() => {
    const n1 = Math.floor(Math.random() * 8) + 2;
    const n2 = Math.floor(Math.random() * 8) + 1;
    setCaptchaNum1(n1);
    setCaptchaNum2(n2);
    setUserCaptcha('');
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      refreshCaptcha();
    }, 0);
    return () => clearTimeout(timer);
  }, [refreshCaptcha]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Basic sanitization & numeric restriction for phone/nisn
    if (name === 'nisn' || name === 'noWhatsapp') {
      const numericVal = value.replace(/[^0-9+]/g, '');
      setFormData((prev) => ({ ...prev, [name]: numericVal }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const saveApplicantToStore = async (regCode: string) => {
    let trackVal: 'Reguler' | 'Prestasi' | 'Tahfidz Qur\'an' | 'Undangan Yayasan' = 'Reguler';
    const trackLower = (formData.jalurPendaftaran || '').toLowerCase();
    if (trackLower.includes('tahfidz')) {
      trackVal = "Tahfidz Qur'an";
    } else if (trackLower.includes('prestasi')) {
      trackVal = 'Prestasi';
    } else if (trackLower.includes('undangan')) {
      trackVal = 'Undangan Yayasan';
    }

    const genderVal = (formData.jenisKelamin || '').toLowerCase().includes('perempuan') ? 'Perempuan' : 'Laki-Laki';

    const nowObj = new Date();
    const dateStr = `${nowObj.getFullYear()}-${String(nowObj.getMonth() + 1).padStart(2, '0')}-${String(nowObj.getDate()).padStart(2, '0')} ${String(nowObj.getHours()).padStart(2, '0')}:${String(nowObj.getMinutes()).padStart(2, '0')}`;

    const isFull = formMode === 'full';
    const isComplete = isFull && !!formData.nisn.trim() && !!formData.alamatLengkap.trim();

    const newApplicant: PpdbApplicant = {
      id: typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => ((Math.random() * 16) | 0).toString(16)),
      registrationNo: regCode,
      fullName: formData.namaLengkap.trim() || 'Calon Siswa Baru',
      nisn: formData.nisn.trim() || '-',
      gender: genderVal,
      originSchool: formData.asalSekolah.trim(),
      parentName: formData.namaAyah.trim() || formData.namaIbu.trim() || 'Orang Tua',
      phone: formData.noWhatsapp.trim(),
      track: trackVal,
      registrationDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Menunggu Verifikasi',
      notes: isFull ? 'Pendaftaran Formulir Lengkap' : 'Pendaftaran Cepat. Perlu verifikasi berkas tambahan.',
      registrationType: formMode,
      birthPlace: isFull ? formData.tempatLahir.trim() : '',
      birthDate: isFull ? formData.tanggalLahir : '',
      address: isFull ? formData.alamatLengkap.trim() : '',
      fatherName: isFull ? formData.namaAyah.trim() : '',
      motherName: isFull ? formData.namaIbu.trim() : '',
      parentOccupation: isFull ? formData.pekerjaanOrangTua.trim() : '',
      isDataComplete: isFull,
    };

    // 1. Submit to Supabase
    try {
      const res = await submitPpdbApplication(newApplicant);
      if (res.success && res.registrationNo) {
        setNomorPendaftaran(res.registrationNo);
      }
    } catch (err) {
      console.warn('Supabase PPDB insert fallback to local:', err);
    }

    // 2. Persist to local fallback
    try {
      const storedStr = typeof window !== 'undefined' ? localStorage.getItem('smp45_applicants') : null;
      let currentList: PpdbApplicant[] = initialApplicants;
      if (storedStr) {
        currentList = JSON.parse(storedStr);
      }
      const updatedList = [newApplicant, ...currentList];
      if (typeof window !== 'undefined') {
        localStorage.setItem('smp45_applicants', JSON.stringify(updatedList));
        window.dispatchEvent(new Event('storage'));
        window.dispatchEvent(new Event('smp45_data_updated'));
      }
    } catch (e) {
      console.error('Gagal menyimpan data pendaftaran PPDB:', e);
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // BOT SECURITY CHECK 1: Honeypot trap
    if (honeypot.trim() !== '') {
      // Quietly reject bot
      console.warn('Bot submission blocked via Honeypot');
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setFormStep(4);
      }, 1500);
      return;
    }

    if (formMode === 'express') {
      // Validate CAPTCHA
      if (captchaNum1 === null || captchaNum2 === null || parseInt(userCaptcha.trim(), 10) !== captchaNum1 + captchaNum2) {
        setErrorMessage(`Jawaban verifikasi keamanan salah. Berapa ${captchaNum1 ?? 3} + ${captchaNum2 ?? 4}?`);
        refreshCaptcha();
        return;
      }

      // BOT SECURITY CHECK 2: Submission Rate Throttling (30s cooldown per device)
      const now = Date.now();
      if (now - lastSubmitTime < 30000 && lastSubmitTime !== 0) {
        setErrorMessage('Terlalu banyak percakapan pendaftaran. Mohon tunggu 30 detik sebelum mendaftar lagi.');
        return;
      }

      setIsSubmitting(true);
      setTimeout(async () => {
        const regCode = `PPDB2027-${Math.floor(1000 + Math.random() * 9000)}`;
        setNomorPendaftaran(regCode);
        setLastSubmitTime(now);
        await saveApplicantToStore(regCode);
        setIsSubmitting(false);
        setFormStep(4);
      }, 800);
      return;
    }

    // Full multi-step flow
    if (formStep < 3) {
      setFormStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    } else if (formStep === 3) {
      // Validate CAPTCHA
      if (captchaNum1 === null || captchaNum2 === null || parseInt(userCaptcha.trim(), 10) !== captchaNum1 + captchaNum2) {
        setErrorMessage(`Jawaban verifikasi keamanan salah. Berapa ${captchaNum1 ?? 3} + ${captchaNum2 ?? 4}?`);
        refreshCaptcha();
        return;
      }

      const now = Date.now();
      if (now - lastSubmitTime < 30000 && lastSubmitTime !== 0) {
        setErrorMessage('Terlalu banyak percakapan pendaftaran. Mohon tunggu 30 detik sebelum mendaftar lagi.');
        return;
      }

      setIsSubmitting(true);
      setTimeout(async () => {
        const regCode = `PPDB2027-${Math.floor(1000 + Math.random() * 9000)}`;
        setNomorPendaftaran(regCode);
        setLastSubmitTime(now);
        await saveApplicantToStore(regCode);
        setIsSubmitting(false);
        setFormStep(4);
      }, 800);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <PageHeader
        title="Penerimaan Peserta Didik Baru (PPDB) TA 2027/2028"
        subtitle="Selamat datang calon siswa baru! Mari bergabung menjadi bagian dari keluarga besar SMP Empat Lima 2 Kedungpring."
        badge="PPDB Online Buka"
        breadcrumbs={[{ label: 'PPDB' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Banner Highlight Gelombang 1 */}
        <div className="bg-gradient-school text-white rounded-3xl p-6 sm:p-10 border-2 border-school-gold-500 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-3 relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-school-gold-500 text-slate-900 font-extrabold text-xs uppercase rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Promo Gelombang 1 - Kuota Terbatas!</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Dapatkan Bebas Uang Pendaftaran & Gratis Seragam Olahraga
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Khusus 50 pendaftar pertama pada Gelombang 1. Bebas biaya formulir pendaftaran dan potongan khusus bagi siswa berprestasi & hafidz Al-Qur&apos;an.
            </p>
          </div>

          <a
            href={`https://wa.me/${schoolInfo.whatsapp}?text=Halo%20Admin%20PPDB%20SMP%20Empat%20Lima%202%20Kedungpring,%20saya%20ingin%20konsultasi%20pendaftaran`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold text-slate-900 bg-gradient-gold hover:opacity-95 shadow-lg shrink-0 touch-target"
          >
            <PhoneCall className="w-4 h-4 text-slate-900" />
            <span>Tanya Admin WA</span>
          </a>
        </div>

        {/* Timeline Gelombang */}
        <div className="space-y-6">
          <SectionHeading
            badge="Jadwal Pendaftaran"
            title="Gelombang & Alur Pendaftaran"
            subtitle="Perhatikan tanggal penting pelaksanaan PPDB SMP Empat Lima 2 Kedungpring."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-school-green-700 shadow-md space-y-4 relative">
              <span className="absolute top-4 right-4 px-3 py-1 bg-school-green-700 text-white text-xs font-bold rounded-full">
                Sedang Buka
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">Gelombang I (Jalur Khusus & Reguler)</h3>
              <p className="text-xs text-slate-600">01 Agustus 2027 - 30 September 2027</p>
              <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-school-green-700" />
                  <span>Bebas Biaya Formulir Pendaftaran (0 rupiah)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-school-green-700" />
                  <span>Gratis 1 Stel Seragam Olahraga Sekolah</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-school-green-700" />
                  <span>Pengumuman Kelulusan: 02 Oktober 2027</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                Mendatang
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">Gelombang II (Jalur Reguler)</h3>
              <p className="text-xs text-slate-600">01 Oktober 2027 - 30 November 2027</p>
              <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-school-green-700" />
                  <span>Pendaftaran Reguler Online & Offline</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-school-green-700" />
                  <span>Potongan Khusus Bagi Pemilik Kartu KIP/PKH</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-school-green-700" />
                  <span>Pengumuman Kelulusan: 05 Desember 2027</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Requirements Checklist */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <SectionHeading
            badge="Persyaratan Berkas"
            title="Kelengkapan Berkas Pendaftaran"
            subtitle="Dapat diserahkan langsung ke sekretariat atau diunggah dalam bentuk foto/scan."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-school-green-100 text-school-green-800 flex items-center justify-center font-black">
                1
              </div>
              <h4 className="font-black text-slate-900">Fotocopy Ijazah/SKL</h4>
              <p className="text-slate-800 font-semibold">3 Lembar FC Ijazah SD/MI yang telah dilegalisir (bisa menyusul).</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-school-green-100 text-school-green-800 flex items-center justify-center font-black">
                2
              </div>
              <h4 className="font-black text-slate-900">FC Kartu Keluarga & Akta</h4>
              <p className="text-slate-800 font-semibold">Masing-masing 3 lembar FC KK dan FC Akta Kelahiran calon siswa.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-school-green-100 text-school-green-800 flex items-center justify-center font-black">
                3
              </div>
              <h4 className="font-black text-slate-900">Pas Foto Terbaru</h4>
              <p className="text-slate-800 font-semibold">4 Lembar Pas Foto ukuran 3x4 (Latar Belakang Merah/Biru).</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-school-green-100 text-school-green-800 flex items-center justify-center font-black">
                4
              </div>
              <h4 className="font-black text-slate-900">KIP / PKH / Piagam (Opsional)</h4>
              <p className="text-slate-800 font-semibold">FC KIP/PKH bagi jalur beasiswa atau FC Sertifikat/Tropi Lomba.</p>
            </div>
          </div>
        </div>

        {/* Interactive Multi-Step Registration Form */}
        <div id="formulir-ppdb" className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-10 space-y-8 relative">
          {/* Form Header Box with Green Theme */}
          <div className="bg-gradient-school bg-school-green-800 p-6 sm:p-8 rounded-2xl text-white shadow-xl space-y-4 text-center relative overflow-hidden border border-school-gold-400/30">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-school-gold-400/10 rounded-full blur-2xl pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-school-gold-400/20 text-amber-300 font-extrabold text-xs uppercase rounded-full border border-school-gold-400/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Formulir Pendaftaran Online TA 2027/2028</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Pendaftaran Siswa Baru SMP Empat Lima 2
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto font-semibold">
              Isi data diri dengan benar. Pendaftaran online <strong className="text-amber-300 font-black">100% Bebas Biaya Formulir</strong>.
            </p>

            {/* Mode Switcher Tabs */}
            {formStep < 4 && (
              <div className="pt-2 flex justify-center">
                <div className="bg-slate-950/80 p-1.5 rounded-2xl border border-white/20 inline-flex gap-1.5 shadow-2xl backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => {
                      setFormMode('express');
                      setErrorMessage('');
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 ${
                      formMode === 'express'
                        ? 'bg-gradient-gold text-slate-950 shadow-md scale-[1.02]'
                        : 'text-emerald-100 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 shrink-0 text-amber-500" />
                    <span>⚡ Pendaftaran Cepat (1 Menit)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setFormMode('full');
                      setErrorMessage('');
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 ${
                      formMode === 'full'
                        ? 'bg-gradient-gold text-slate-950 shadow-md scale-[1.02]'
                        : 'text-emerald-100 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <FileText className="w-4 h-4 shrink-0" />
                    <span>📋 Formulir Lengkap</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Error / Security Alert Banner */}
          {errorMessage && (
            <div className="max-w-2xl mx-auto bg-rose-50 border-2 border-rose-300 text-rose-950 p-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2.5 shadow-sm">
              <span className="shrink-0 text-lg">⚠️</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form Step Indicator for Full Mode */}
          {formStep < 4 && formMode === 'full' && (
            <div className="max-w-2xl mx-auto space-y-2">
              <div className="flex items-center justify-between text-xs font-black text-slate-700 px-1">
                <span className={formStep >= 1 ? 'text-school-green-800' : 'text-slate-400'}>1. Data Siswa</span>
                <span className={formStep >= 2 ? 'text-school-green-800' : 'text-slate-400'}>2. Data Orang Tua</span>
                <span className={formStep >= 3 ? 'text-school-green-800' : 'text-slate-400'}>3. Jalur & Konfirmasi</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200 p-0.5">
                <div
                  className="h-full bg-school-green-700 rounded-full transition-all duration-300"
                  style={{ width: formStep === 1 ? '33.3%' : formStep === 2 ? '66.6%' : '100%' }}
                />
              </div>
            </div>
          )}

          {/* EXPRESS FORM MODE */}
          {formStep < 4 && formMode === 'express' && (
            <form onSubmit={handleNextStep} className="space-y-6 max-w-2xl mx-auto bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="space-y-0.5">
                  <h4 className="font-black text-base text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Mode Cepat - Ambil Nomor Registrasi</span>
                  </h4>
                  <p className="text-xs text-slate-600 font-medium">Cukup isi data pokok di bawah ini untuk memesan kuota Gelombang 1.</p>
                </div>
                <span className="text-[11px] bg-emerald-100 text-school-green-900 font-black px-3 py-1 rounded-full border border-emerald-300 shrink-0 hidden sm:inline-block">
                  Gratis
                </span>
              </div>

              {/* HONEYPOT FIELD FOR BOT PROTECTION (Hidden from real human users) */}
              <div className="hidden aria-hidden:true" tabIndex={-1}>
                <input
                  type="text"
                  name="website_trap"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-school-green-700" />
                    <span>Nama Lengkap Calon Siswa *</span>
                  </label>
                  <input
                    type="text"
                    name="namaLengkap"
                    required
                    placeholder="Contoh: Muhammad Faiz Pratama"
                    value={formData.namaLengkap}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20 shadow-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-school-green-700" />
                    <span>Asal SD / MI *</span>
                  </label>
                  <input
                    type="text"
                    name="asalSekolah"
                    required
                    placeholder="Contoh: SDN Kedungpring 1 / MI Kalen"
                    value={formData.asalSekolah}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20 shadow-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-school-green-700" />
                    <span>No. WhatsApp / HP (Orang Tua / Siswa) *</span>
                  </label>
                  <input
                    type="text"
                    name="noWhatsapp"
                    required
                    placeholder="0857xxxxxxxx"
                    value={formData.noWhatsapp}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20 shadow-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-school-green-700" />
                    <span>Pilihan Jalur Pendaftaran *</span>
                  </label>
                  <select
                    name="jalurPendaftaran"
                    value={formData.jalurPendaftaran}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-black text-slate-900 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20 shadow-sm"
                  >
                    <option value="Gelombang 1 - Reguler (Bebas Biaya)">Reguler Gel. 1 (Bebas Biaya Form + Seragam Olahraga)</option>
                    <option value="Jalur Prestasi Akademik/Lomba">Jalur Prestasi (Beasiswa SPP)</option>
                    <option value="Jalur Tahfidz Al-Qur'an (Juz 30)">Jalur Beasiswa Tahfidz Al-Qur&apos;an</option>
                  </select>
                </div>
              </div>

              {/* Anti-Bot Security Verification Box */}
              <div className="p-4 bg-emerald-50/70 rounded-2xl border-2 border-emerald-200/90 space-y-3 shadow-sm">
                <div className="flex items-center justify-between text-xs font-black text-slate-900">
                  <span className="flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-school-green-700 shrink-0" />
                    <span>Verifikasi Keamanan (Cegah Spam Bot):</span>
                  </span>
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="text-[11px] text-school-green-700 hover:underline font-extrabold"
                  >
                    🔄 Ganti Soal
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-4 py-2.5 bg-white rounded-xl text-sm sm:text-base font-black text-school-green-950 tracking-wider border border-emerald-300 shadow-sm min-w-[150px] text-center">
                    {captchaNum1 !== null && captchaNum2 !== null ? `Berapa ${captchaNum1} + ${captchaNum2} = ?` : 'Membuat Soal...'}
                  </span>
                  <input
                    type="number"
                    required
                    disabled={captchaNum1 === null}
                    placeholder="Hasil..."
                    value={userCaptcha}
                    onChange={(e) => setUserCaptcha(e.target.value)}
                    className="w-32 px-3.5 py-2.5 rounded-xl border-2 border-school-green-700 text-sm font-black text-slate-900 text-center bg-white focus:outline-none focus:ring-2 focus:ring-school-green-700/30 shadow-sm"
                  />
                </div>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="relative overflow-hidden w-full sm:w-auto px-10 py-4 bg-gradient-gold hover:opacity-95 text-school-green-950 font-black rounded-2xl text-sm shadow-xl inline-flex items-center justify-center gap-2 border border-amber-300 transition-transform active:scale-95 disabled:opacity-85 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Send className="w-4 h-4 text-school-green-950 shrink-0" />
                  <span className="text-school-green-950 font-black">Kirim Pendaftaran Cepat Now</span>
                  <ButtonSpinnerOverlay isLoading={isSubmitting} loadingText="Memproses Pendaftaran..." />
                </button>
              </div>
            </form>
          )}

          {/* FULL MULTI-STEP FORM MODE */}
          {/* Step 1: Data Calon Siswa */}
          {formStep === 1 && formMode === 'full' && (
            <form onSubmit={handleNextStep} className="space-y-5 max-w-2xl mx-auto bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <h4 className="font-black text-base text-slate-900 flex items-center gap-2">
                  <User className="w-5 h-5 text-school-green-700" />
                  <span>Langkah 1: Data Diri Calon Siswa Baru</span>
                </h4>
                <span className="text-xs font-bold text-slate-500">1 dari 3</span>
              </div>
              
              {/* HONEYPOT FIELD FOR BOT PROTECTION */}
              <div className="hidden aria-hidden:true" tabIndex={-1}>
                <input
                  type="text"
                  name="website_trap"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-900">Nama Lengkap Siswa *</label>
                  <input
                    type="text"
                    name="namaLengkap"
                    required
                    placeholder="Contoh: Muhammad Faiz Pratama"
                    value={formData.namaLengkap}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-900">NISN (Nomor Induk Siswa Nasional) *</label>
                  <input
                    type="text"
                    name="nisn"
                    required
                    placeholder="10 digit NISN SD/MI"
                    value={formData.nisn}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20"
                  />
                  <p className="text-[10px] text-slate-500 font-medium">*Bisa dilihat di rapor SD/MI atau tanyakan wali kelas.</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-900">Tempat Lahir *</label>
                  <input
                    type="text"
                    name="tempatLahir"
                    required
                    placeholder="Contoh: Lamongan"
                    value={formData.tempatLahir}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-900">Tanggal Lahir *</label>
                  <input
                    type="date"
                    name="tanggalLahir"
                    required
                    value={formData.tanggalLahir}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-900 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-900">Jenis Kelamin *</label>
                  <select
                    name="jenisKelamin"
                    value={formData.jenisKelamin}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-black text-slate-900 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-900">Asal SD / MI *</label>
                  <input
                    type="text"
                    name="asalSekolah"
                    required
                    placeholder="MI Ma'arif Kalen / SDN Kedungpring 1"
                    value={formData.asalSekolah}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20"
                  />
                </div>
              </div>

              <div className="pt-4 text-right">
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-school-green-700 hover:bg-school-green-800 text-white font-black rounded-xl text-xs sm:text-sm shadow-md transition-colors"
                >
                  Lanjut ke Data Orang Tua →
                </button>
              </div>
            </form>
          )}

          {/* Step 2: Data Orang Tua */}
          {formStep === 2 && formMode === 'full' && (
            <form onSubmit={handleNextStep} className="space-y-5 max-w-2xl mx-auto bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <h4 className="font-black text-base text-slate-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-school-green-700" />
                  <span>Langkah 2: Data Orang Tua / Wali</span>
                </h4>
                <span className="text-xs font-bold text-slate-500">2 dari 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-900">Nama Ayah Kandung *</label>
                  <input
                    type="text"
                    name="namaAyah"
                    required
                    placeholder="Contoh: Suhardi"
                    value={formData.namaAyah}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-900">Nama Ibu Kandung *</label>
                  <input
                    type="text"
                    name="namaIbu"
                    required
                    placeholder="Contoh: Siti Aminah"
                    value={formData.namaIbu}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-900">Pekerjaan Orang Tua *</label>
                  <input
                    type="text"
                    name="pekerjaanOrangTua"
                    required
                    placeholder="Petani / Wiraswasta / PNS"
                    value={formData.pekerjaanOrangTua}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-900">No. WhatsApp Aktif (Penting) *</label>
                  <input
                    type="text"
                    name="noWhatsapp"
                    required
                    placeholder="0857xxxxxxx"
                    value={formData.noWhatsapp}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-black text-slate-900">Alamat Rumah Lengkap *</label>
                  <textarea
                    name="alamatLengkap"
                    required
                    rows={3}
                    placeholder="RT/RW, Desa, Kecamatan, Kabupaten"
                    value={formData.alamatLengkap}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setFormStep(1)}
                  className="px-5 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-xs sm:text-sm border border-slate-300 transition-colors"
                >
                  ← Kembali
                </button>
                <button
                  type="submit"
                  className="px-7 py-3 bg-school-green-700 hover:bg-school-green-800 text-white font-black rounded-xl text-xs sm:text-sm shadow-md transition-colors"
                >
                  Lanjut ke Jalur Pendaftaran →
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Jalur & Konfirmasi */}
          {formStep === 3 && formMode === 'full' && (
            <form onSubmit={handleNextStep} className="space-y-5 max-w-2xl mx-auto bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <h4 className="font-black text-base text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-school-green-700" />
                  <span>Langkah 3: Pilih Jalur & Finalisasi</span>
                </h4>
                <span className="text-xs font-bold text-slate-500">3 dari 3</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-900">Pilih Jalur Pendaftaran *</label>
                <select
                  name="jalurPendaftaran"
                  value={formData.jalurPendaftaran}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl border-2 border-slate-200 text-xs sm:text-sm font-black text-slate-900 bg-white focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-700/20 shadow-sm"
                >
                  <option value="Gelombang 1 - Reguler (Bebas Biaya)">Reguler Gel. 1 (Bebas Biaya Form + Seragam Olahraga)</option>
                  <option value="Jalur Prestasi Akademik/Lomba">Jalur Prestasi (Beasiswa SPP)</option>
                  <option value="Jalur Tahfidz Al-Qur'an (Juz 30)">Jalur Beasiswa Tahfidz Al-Qur&apos;an</option>
                </select>
              </div>

              {/* Ringkasan Data Preview */}
              <div className="bg-emerald-50/80 p-5 rounded-2xl border-2 border-emerald-200/80 text-xs text-slate-900 space-y-2.5 shadow-sm font-semibold">
                <p className="font-black text-school-green-950 text-sm border-b border-emerald-200/80 pb-2">📋 Ringkasan Isian Pendaftaran:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div>• Nama Siswa: <span className="font-black text-slate-950">{formData.namaLengkap || '-'}</span></div>
                  <div>• NISN: <span className="font-black text-slate-950">{formData.nisn || '-'}</span></div>
                  <div>• Asal Sekolah: <span className="font-black text-slate-950">{formData.asalSekolah || '-'}</span></div>
                  <div>• Orang Tua: <span className="font-black text-slate-950">{formData.namaAyah || '-'}</span></div>
                  <div>• No. WhatsApp: <span className="font-black text-slate-950">{formData.noWhatsapp || '-'}</span></div>
                  <div>• Jalur: <span className="font-black text-school-green-800">{formData.jalurPendaftaran}</span></div>
                </div>
              </div>

              {/* Anti-Bot Security Verification Box */}
              <div className="p-4 bg-emerald-50/70 rounded-2xl border-2 border-emerald-200/90 space-y-3 shadow-sm">
                <div className="flex items-center justify-between text-xs font-black text-slate-900">
                  <span className="flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-school-green-700 shrink-0" />
                    <span>Verifikasi Keamanan (Cegah Spam Bot):</span>
                  </span>
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="text-[11px] text-school-green-700 hover:underline font-extrabold"
                  >
                    🔄 Ganti Soal
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-4 py-2.5 bg-white rounded-xl text-sm sm:text-base font-black text-school-green-950 tracking-wider border border-emerald-300 shadow-sm min-w-[150px] text-center">
                    {captchaNum1 !== null && captchaNum2 !== null ? `Berapa ${captchaNum1} + ${captchaNum2} = ?` : 'Membuat Soal...'}
                  </span>
                  <input
                    type="number"
                    required
                    disabled={captchaNum1 === null}
                    placeholder="Hasil..."
                    value={userCaptcha}
                    onChange={(e) => setUserCaptcha(e.target.value)}
                    className="w-32 px-3.5 py-2.5 rounded-xl border-2 border-school-green-700 text-sm font-black text-slate-900 text-center bg-white focus:outline-none focus:ring-2 focus:ring-school-green-700/30 shadow-sm"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setFormStep(2)}
                  className="px-5 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-xs sm:text-sm border border-slate-300 transition-colors"
                >
                  ← Kembali
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="relative overflow-hidden px-8 py-3.5 bg-gradient-gold hover:opacity-95 text-school-green-950 font-black rounded-xl text-sm shadow-lg flex items-center justify-center gap-2 border border-amber-300 transition-transform active:scale-95 disabled:opacity-85 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Send className="w-4 h-4 text-school-green-950 shrink-0" />
                  <span className="text-school-green-950 font-black">Selesaikan & Kirim Pendaftaran</span>
                  <ButtonSpinnerOverlay isLoading={isSubmitting} loadingText="Memproses Data..." />
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Proof Ticket Success */}
          {formStep === 4 && (
            <div className="bg-school-green-800 p-6 sm:p-8 rounded-3xl border-2 border-school-gold-400 space-y-6 text-center max-w-xl mx-auto shadow-2xl">
              <div className="w-16 h-16 bg-school-gold-500 text-school-green-900 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <span className="px-3.5 py-1.5 bg-amber-400 text-school-green-900 font-black text-xs uppercase rounded-full border border-amber-300 shadow-sm inline-block">
                  Pendaftaran Berhasil!
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Kartu Bukti Pendaftaran PPDB Online
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-100">
                  Simpan atau screenshot bukti pendaftaran ini untuk diserahkan saat verifikasi berkas.
                </p>
              </div>

              <div className="bg-school-green-900 p-6 rounded-2xl border border-school-gold-400/40 text-left text-xs sm:text-sm space-y-3 shadow-inner font-medium">
                <div className="flex justify-between border-b border-school-gold-400/20 pb-2.5">
                  <span className="text-emerald-200/90 font-bold">Nomor Registrasi:</span>
                  <span className="font-black text-amber-300 text-base sm:text-lg tracking-wider">{nomorPendaftaran}</span>
                </div>
                <div className="flex justify-between border-b border-school-green-700/50 pb-2">
                  <span className="text-emerald-200/90 font-bold">Nama Calon Siswa:</span>
                  <span className="font-bold text-white">{formData.namaLengkap}</span>
                </div>
                <div className="flex justify-between border-b border-school-green-700/50 pb-2">
                  <span className="text-emerald-200/90 font-bold">Asal SD/MI:</span>
                  <span className="font-bold text-white">{formData.asalSekolah}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-200/90 font-bold">Jalur Pendaftaran:</span>
                  <span className="font-bold text-white">{formData.jalurPendaftaran}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${schoolInfo.whatsapp}?text=Halo%20Admin%20PPDB,%20saya%20sudah%20mendaftar%20online%20dengan%20Nomor%20Registrasi%20${nomorPendaftaran}%20atas%20nama%20${formData.namaLengkap}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-gold text-school-green-900 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:opacity-95"
                >
                  <PhoneCall className="w-4 h-4 text-school-green-900" />
                  <span>Konfirmasi WA Panitia</span>
                </a>

                <button
                  type="button"
                  onClick={() => setFormStep(1)}
                  className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-school-green-700 border border-school-gold-400/30 text-amber-300 font-bold text-xs hover:bg-school-green-600"
                >
                  Daftar Calon Siswa Lain
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Portal Cek Status Pendaftaran PPDB */}
        <div id="lengkapi-data" className="bg-gradient-to-br from-emerald-900 via-school-green-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 border-2 border-school-gold-400/50 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-school-gold-400/20 text-amber-300 font-extrabold text-xs uppercase rounded-full border border-school-gold-400/30">
                <Search className="w-3.5 h-3.5 text-amber-400" />
                <span>Cek Status Pendaftaran PPDB</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Cek Status Kelulusan &amp; Verifikasi
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 font-medium max-w-2xl">
                Masukkan <strong className="text-amber-300 font-bold">Nomor Registrasi</strong> (contoh: PPDB2027-003) atau <strong className="text-amber-300 font-bold">Nomor WhatsApp</strong> yang digunakan saat pendaftaran untuk mengecek hasil verifikasi Panitia PPDB.
              </p>
            </div>
          </div>

          {/* Search Box */}
          <form onSubmit={handleLookupApplicant} className="space-y-4 max-w-xl">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={lookupQuery}
                onChange={(e) => setLookupQuery(e.target.value)}
                placeholder="Masukkan No. Registrasi (PPDB2027-xxx) / No. WA..."
                className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-emerald-200/60 font-semibold text-xs sm:text-sm focus:outline-none focus:border-amber-400 backdrop-blur-md"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-2xl bg-gradient-gold text-slate-950 font-black text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 hover:opacity-95 shrink-0"
              >
                <Search className="w-4 h-4 text-slate-950" />
                <span>Cari Status</span>
              </button>
            </div>
            {lookupError && (
              <p className="text-xs font-bold text-amber-300 bg-amber-950/60 p-3 rounded-xl border border-amber-500/30">
                ⚠️ {lookupError}
              </p>
            )}
          </form>

          {/* Result Status Card */}
          {foundApplicant && (
            <div className="bg-white text-slate-900 p-6 sm:p-8 rounded-2xl border-2 border-amber-400 shadow-xl space-y-6 text-xs sm:text-sm">
              {/* Main Status Header Banner */}
              <div className="p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm bg-slate-50">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 font-mono">
                    No. Registrasi: <strong className="text-school-green-800 text-sm">{foundApplicant.registrationNo}</strong>
                  </span>
                  <h4 className="text-xl font-black text-slate-900">{foundApplicant.fullName}</h4>
                  <p className="text-xs text-slate-600 font-semibold">Asal Sekolah: {foundApplicant.originSchool} • Jalur: {foundApplicant.track}</p>
                </div>

                <div className="shrink-0">
                  {foundApplicant.status === 'Diterima' && (
                    <span className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-black text-sm shadow-md inline-flex items-center gap-1.5">
                      <span>🎉 DITERIMA / LULUS</span>
                    </span>
                  )}
                  {foundApplicant.status === 'Menunggu Verifikasi' && (
                    <span className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-black text-sm shadow-md inline-flex items-center gap-1.5">
                      <span>⏳ MENUNGGU VERIFIKASI</span>
                    </span>
                  )}
                  {foundApplicant.status === 'Perlu Perbaikan' && (
                    <span className="px-4 py-2 rounded-xl bg-orange-500 text-white font-black text-sm shadow-md inline-flex items-center gap-1.5">
                      <span>📋 PERLU KELENGKAPAN BERKAS</span>
                    </span>
                  )}
                  {foundApplicant.status === 'Ditolak' && (
                    <span className="px-4 py-2 rounded-xl bg-red-600 text-white font-black text-sm shadow-md inline-flex items-center gap-1.5">
                      <span>❌ TIDAK DITERIMA</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Status Message Details */}
              <div className="space-y-3">
                {foundApplicant.status === 'Diterima' && (
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-300 text-emerald-950 font-bold space-y-2">
                    <p className="text-sm sm:text-base text-emerald-900 font-black">
                      🎉 Selamat! Calon siswa dinyatakan DITERIMA di SMP Empat Lima 2 Kedungpring.
                    </p>
                    <p className="text-xs font-medium text-emerald-800">
                      Silakan konfirmasi ulang atau hubungi Panitia PPDB untuk jadwal pendaftaran ulang dan pengambilan seragam.
                    </p>
                  </div>
                )}

                {foundApplicant.status === 'Menunggu Verifikasi' && (
                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-300 text-amber-950 font-bold space-y-2">
                    <p className="text-sm font-black text-amber-900">
                      ⏳ Pendaftaran Anda telah terdaftar dan sedang dalam proses verifikasi oleh Panitia PPDB.
                    </p>
                    <p className="text-xs font-medium text-amber-800">
                      Jika Anda memilih <strong>Pendaftaran Cepat</strong>, Panitia PPDB akan menghubungi Anda via WhatsApp untuk meminta kelengkapan berkas seperti fotokopi Kartu Keluarga (KK), KTP Orang Tua, dan NISN.
                    </p>
                  </div>
                )}

                {foundApplicant.status === 'Perlu Perbaikan' && (
                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-300 text-orange-950 font-bold space-y-2">
                    <p className="text-sm font-black text-orange-900">
                      📋 Pendaftaran Membutuhkan Kelengkapan Berkas.
                    </p>
                    <p className="text-xs font-medium text-orange-800">
                      Panitia PPDB sedang menghubungi atau akan menghubungi nomor WhatsApp Anda (<strong>{foundApplicant.phone}</strong>) untuk meminta berkas foto/fotokopi Kartu Keluarga (KK), KTP Orang Tua, atau nomor NISN. Panitia yang akan menginputkan data tersebut ke sistem.
                    </p>
                  </div>
                )}

                {foundApplicant.notes && (
                  <div className="p-3 bg-slate-100 rounded-xl border border-slate-200 text-slate-800 text-xs font-medium">
                    <strong className="text-slate-900 font-bold">Catatan dari Panitia:</strong> {foundApplicant.notes}
                  </div>
                )}
              </div>

              {/* Action Button for WhatsApp Support */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                <span className="text-xs text-slate-500 font-semibold">
                  Ada pertanyaan mengenai hasil pendaftaran?
                </span>
                <a
                  href={`https://wa.me/6285732145600?text=Halo%20Panitia%20PPDB%20SMP%20Empat%20Lima%202%20Kedungpring,%20saya%20ingin%20menanyakan%20status%20pendaftaran%20dengan%20No.%20Reg:%20${foundApplicant.registrationNo}%20a.n%20${encodeURIComponent(foundApplicant.fullName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-200" />
                  <span>Hubungi Panitia PPDB via WA</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* PPDB FAQ Accordion */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <SectionHeading
            badge="Tanya Jawab"
            title="Sering Ditanyakan (FAQ PPDB)"
            subtitle="Informasi lengkap mengenai pendaftaran, sarana, dan pembiayaan."
          />

          <div className="space-y-3 max-w-3xl mx-auto">
            {ppdbFaqs.map((faq: { question: string; answer: string }, idx: number) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left font-extrabold text-sm sm:text-base text-slate-900 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-school-green-700 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
