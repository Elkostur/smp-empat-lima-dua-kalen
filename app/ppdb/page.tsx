'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/common/SectionHeading';
import { schoolInfo, ppdbFaqs } from '@/data/schoolData';
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
  BookOpen,
  Send,
  HelpCircle,
  Award,
} from 'lucide-react';

export default function PpdbPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formStep, setFormStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nisn: '',
    nik: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: 'Laki-laki',
    asalSekolah: '',
    namaAyah: '',
    namaIbu: '',
    pekerjaanOrangTua: '',
    noWhatsapp: '',
    alamatLengkap: '',
    jalurPendaftaran: 'Gelombang 1 - Reguler',
  });

  const [nomorPendaftaran, setNomorPendaftaran] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep < 3) {
      setFormStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    } else if (formStep === 3) {
      // Generate registration code
      const regCode = `PPDB2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setNomorPendaftaran(regCode);
      setFormStep(4);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <PageHeader
        title="Penerimaan Peserta Didik Baru (PPDB) TA 2026/2027"
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
              <p className="text-xs text-slate-600">01 Agustus 2026 - 30 September 2026</p>
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
                  <span>Pengumuman Kelulusan: 02 Oktober 2026</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                Mendatang
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">Gelombang II (Jalur Reguler)</h3>
              <p className="text-xs text-slate-600">01 Oktober 2026 - 30 November 2026</p>
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
                  <span>Pengumuman Kelulusan: 05 Desember 2026</span>
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
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-school-green-50 text-school-green-700 flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-extrabold text-slate-900">Fotocopy Ijazah/SKL</h4>
              <p className="text-slate-600">3 Lembar FC Ijazah SD/MI yang telah dilegalisir (bisa menyusul).</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-school-green-50 text-school-green-700 flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-extrabold text-slate-900">FC Kartu Keluarga & Akta</h4>
              <p className="text-slate-600">Masing-masing 3 lembar FC KK dan FC Akta Kelahiran calon siswa.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-school-green-50 text-school-green-700 flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-extrabold text-slate-900">Pas Foto Terbaru</h4>
              <p className="text-slate-600">4 Lembar Pas Foto ukuran 3x4 (Latar Belakang Merah/Biru).</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-school-green-50 text-school-green-700 flex items-center justify-center font-bold">
                4
              </div>
              <h4 className="font-extrabold text-slate-900">KIP / PKH / Piagam (Opsional)</h4>
              <p className="text-slate-600">FC KIP/PKH bagi jalur beasiswa atau FC Sertifikat/Tropi Lomba.</p>
            </div>
          </div>
        </div>

        {/* Interactive Multi-Step Registration Form */}
        <div id="formulir-ppdb" className="bg-white rounded-3xl border-2 border-school-green-700 p-6 sm:p-10 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="px-3.5 py-1 bg-school-gold-100 text-school-gold-600 font-extrabold text-xs uppercase rounded-full">
              Formulir Digital Interaktif
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Formulir Pendaftaran PPDB Online
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Isi data diri dengan teliti. Proses hanya membutuhkan waktu kurang dari 3 menit.
            </p>
          </div>

          {/* Form Step Indicator */}
          {formStep < 4 && (
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 max-w-lg mx-auto">
              <div className={`flex-1 py-2 px-1 rounded-xl text-center text-[10px] sm:text-xs font-bold leading-tight flex items-center justify-center min-h-[38px] ${formStep >= 1 ? 'bg-[#0D2D1D] text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-slate-100 text-slate-500'}`}>
                1. Data Siswa
              </div>
              <div className={`flex-1 py-2 px-1 rounded-xl text-center text-[10px] sm:text-xs font-bold leading-tight flex items-center justify-center min-h-[38px] ${formStep >= 2 ? 'bg-[#0D2D1D] text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-slate-100 text-slate-500'}`}>
                2. Data Orang Tua
              </div>
              <div className={`flex-1 py-2 px-1 rounded-xl text-center text-[10px] sm:text-xs font-bold leading-tight flex items-center justify-center min-h-[38px] ${formStep >= 3 ? 'bg-[#0D2D1D] text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-slate-100 text-slate-500'}`}>
                3. Jalur & Konfirmasi
              </div>
            </div>
          )}

          {/* Step 1: Data Calon Siswa */}
          {formStep === 1 && (
            <form onSubmit={handleNextStep} className="space-y-4 max-w-2xl mx-auto">
              <h4 className="font-extrabold text-base text-slate-900 border-b pb-2">Step 1: Data Calon Siswa Baru</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Nama Lengkap Siswa *</label>
                  <input
                    type="text"
                    name="namaLengkap"
                    required
                    placeholder="Contoh: Muhammad Faiz Pratama"
                    value={formData.namaLengkap}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-school-green-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">NISN (Nomor Induk Siswa Nasional) *</label>
                  <input
                    type="text"
                    name="nisn"
                    required
                    placeholder="10 digit NISN SD/MI"
                    value={formData.nisn}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-school-green-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Tempat Lahir *</label>
                  <input
                    type="text"
                    name="tempatLahir"
                    required
                    placeholder="Lamongan"
                    value={formData.tempatLahir}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-school-green-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Tanggal Lahir *</label>
                  <input
                    type="date"
                    name="tanggalLahir"
                    required
                    value={formData.tanggalLahir}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-school-green-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Jenis Kelamin *</label>
                  <select
                    name="jenisKelamin"
                    value={formData.jenisKelamin}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-school-green-700"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Asal SD / MI *</label>
                  <input
                    type="text"
                    name="asalSekolah"
                    required
                    placeholder="MI Ma'arif Kalen / SDN Kedungpring 1"
                    value={formData.asalSekolah}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-school-green-700"
                  />
                </div>
              </div>

              <div className="pt-4 text-right">
                <button
                  type="submit"
                  className="px-6 py-3 bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold rounded-xl text-xs sm:text-sm shadow-md"
                >
                  Lanjut ke Data Orang Tua →
                </button>
              </div>
            </form>
          )}

          {/* Step 2: Data Orang Tua */}
          {formStep === 2 && (
            <form onSubmit={handleNextStep} className="space-y-4 max-w-2xl mx-auto">
              <h4 className="font-extrabold text-base text-slate-900 border-b pb-2">Step 2: Data Orang Tua / Wali</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Nama Ayah Kandung *</label>
                  <input
                    type="text"
                    name="namaAyah"
                    required
                    placeholder="Suhardi"
                    value={formData.namaAyah}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-school-green-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Nama Ibu Kandung *</label>
                  <input
                    type="text"
                    name="namaIbu"
                    required
                    placeholder="Siti Aminah"
                    value={formData.namaIbu}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-school-green-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Pekerjaan Orang Tua *</label>
                  <input
                    type="text"
                    name="pekerjaanOrangTua"
                    required
                    placeholder="Petani / Wiraswasta / PNS"
                    value={formData.pekerjaanOrangTua}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-school-green-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">No. WhatsApp Aktif (Penting) *</label>
                  <input
                    type="text"
                    name="noWhatsapp"
                    required
                    placeholder="0857xxxxxxx"
                    value={formData.noWhatsapp}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-school-green-700"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-700">Alamat Rumah Lengkap *</label>
                  <textarea
                    name="alamatLengkap"
                    required
                    rows={3}
                    placeholder="RT/RW, Desa, Kecamatan, Kabupaten"
                    value={formData.alamatLengkap}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-school-green-700"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setFormStep(1)}
                  className="px-4 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl text-xs sm:text-sm"
                >
                  ← Kembali
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold rounded-xl text-xs sm:text-sm shadow-md"
                >
                  Lanjut ke Jalur Pendaftaran →
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Jalur & Konfirmasi */}
          {formStep === 3 && (
            <form onSubmit={handleNextStep} className="space-y-4 max-w-2xl mx-auto">
              <h4 className="font-extrabold text-base text-slate-900 border-b pb-2">Step 3: Pilih Jalur & Konfirmasi</h4>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700">Pilih Jalur Pendaftaran *</label>
                <select
                  name="jalurPendaftaran"
                  value={formData.jalurPendaftaran}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-school-green-700 font-bold text-school-green-800"
                >
                  <option value="Gelombang 1 - Reguler (Bebas Biaya)">Gelombang 1 - Reguler (Bebas Biaya & Gratis Seragam)</option>
                  <option value="Jalur Prestasi Akademik/Lomba">Jalur Prestasi Akademik & Lomba (Beasiswa)</option>
                  <option value="Jalur Tahfidz Al-Qur'an (Juz 30)">Jalur Beasiswa Tahfidz Al-Qur&apos;an</option>
                </select>
              </div>

              {/* Ringkasan Data Preview */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
                <p className="font-extrabold text-slate-800">Ringkasan Data Pendaftaran:</p>
                <p>• Nama Siswa: <strong>{formData.namaLengkap || '-'}</strong></p>
                <p>• NISN / Asal Sekolah: <strong>{formData.nisn || '-'} / {formData.asalSekolah || '-'}</strong></p>
                <p>• Orang Tua / WA: <strong>{formData.namaAyah || '-'} / {formData.noWhatsapp || '-'}</strong></p>
                <p>• Jalur: <strong>{formData.jalurPendaftaran}</strong></p>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setFormStep(2)}
                  className="px-4 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl text-xs sm:text-sm"
                >
                  ← Kembali
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-gradient-gold hover:opacity-95 text-slate-900 font-extrabold rounded-xl text-sm shadow-lg flex items-center gap-2"
                >
                  <Send className="w-4 h-4 text-slate-900" />
                  <span>Kirim Pendaftaran Online</span>
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Proof Ticket Success */}
          {formStep === 4 && (
            <div className="bg-school-green-50 p-6 sm:p-8 rounded-3xl border-2 border-school-green-700 space-y-6 text-center max-w-xl mx-auto">
              <div className="w-16 h-16 bg-school-green-700 text-amber-300 rounded-full flex items-center justify-center mx-auto shadow-md">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <span className="px-3 py-1 bg-school-gold-500 text-slate-900 font-bold text-xs uppercase rounded-full">
                  Pendaftaran Berhasil!
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Kartu Bukti Pendaftaran PPDB Online
                </h3>
                <p className="text-xs text-slate-600">
                  Simpan atau screenshot bukti pendaftaran ini untuk diserahkan saat verifikasi berkas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 text-left text-xs sm:text-sm space-y-2 shadow-sm font-medium">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Nomor Registrasi:</span>
                  <span className="font-extrabold text-school-green-700 text-base">{nomorPendaftaran}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Nama Calon Siswa:</span>
                  <span className="font-bold text-slate-900">{formData.namaLengkap}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Asal SD/MI:</span>
                  <span className="font-bold text-slate-900">{formData.asalSekolah}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Jalur Pendaftaran:</span>
                  <span className="font-bold text-slate-900">{formData.jalurPendaftaran}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${schoolInfo.whatsapp}?text=Halo%20Admin%20PPDB,%20saya%20sudah%20mendaftar%20online%20dengan%20Nomor%20Registrasi%20${nomorPendaftaran}%20atas%20nama%20${formData.namaLengkap}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Konfirmasi WA Panitia</span>
                </a>

                <button
                  onClick={() => setFormStep(1)}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-xs"
                >
                  Daftar Calon Siswa Lain
                </button>
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
            {ppdbFaqs.map((faq, idx) => {
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
