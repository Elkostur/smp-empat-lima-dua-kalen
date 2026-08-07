'use client';

import React from 'react';
import Image from 'next/image';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/common/SectionHeading';
import { useAdminDataStore } from '@/lib/adminStore';
import {
  Award,
  Building,
  ShieldCheck,
  Building2,
  Sparkles,
  BookOpen,
} from 'lucide-react';

export const ProfilContent: React.FC = () => {
  const { schoolInfo, facilities } = useAdminDataStore();

  // Process missions array safely
  const missionsList = Array.isArray(schoolInfo.missions)
    ? schoolInfo.missions
    : typeof schoolInfo.missions === 'string'
    ? (schoolInfo.missions as string).split('\n').filter(Boolean)
    : [];

  // Process history paragraphs safely
  const historyParagraphs = schoolInfo.history
    ? schoolInfo.history.split('\n').filter((p) => p.trim().length > 0)
    : [];

  return (
    <main>
      <PageHeader
        title="Profil Lembaga & Identitas Sekolah"
        subtitle="Mengenal lebih dekat sejarah, visi-misi, keunggulan, serta sarana prasarana SMP Empat Lima 2 Kedungpring."
        badge="Profil Sekolah"
        breadcrumbs={[{ label: 'Profil' }]}
      />

      {/* Visi & Misi Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Visi & Misi"
            title="Landasan Utama Pendidikan Kami"
            subtitle="Menuntun langkah pembelajaran menuju terwujudnya santri berakhlak mulia dan berprestasi tinggi."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visi Card */}
            <div className="lg:col-span-5 bg-gradient-school text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden border-2 border-school-gold-500">
              <div className="space-y-4 relative z-10">
                <span className="inline-block px-3 py-1 bg-school-gold-500 text-slate-900 font-extrabold text-xs uppercase tracking-wider rounded-full">
                  Visi Sekolah
                </span>
                <blockquote className="text-xl sm:text-2xl font-extrabold text-amber-300 leading-snug">
                  &quot;{schoolInfo.vision || 'Terwujudnya Lembaga Pendidikan Islam Terkemuka yang Menghasilkan Lulusan Berakhlak Mulia & Berprestasi.'}&quot;
                </blockquote>
              </div>

              <div className="pt-6 border-t border-emerald-800 text-xs text-emerald-200 relative z-10 flex items-center gap-2 mt-6">
                <ShieldCheck className="w-5 h-5 text-school-gold-400 shrink-0" />
                <span>Terdaftar & Terakreditasi di bawah Kemenag & Kemendikbudristek</span>
              </div>
            </div>

            {/* Misi List */}
            <div className="lg:col-span-7 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Award className="w-6 h-6 text-school-green-700" />
                <span>Misi Utama {schoolInfo.shortName || 'SMP Empat Lima 2 Kedungpring'}</span>
              </h3>

              <div className="space-y-3">
                {missionsList.length === 0 ? (
                  <p className="text-sm text-slate-500 italic">Belum ada data misi yang dimasukkan.</p>
                ) : (
                  missionsList.map((misi, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-school-green-600 transition-colors"
                    >
                      <span className="w-6 h-6 rounded-full bg-school-green-700 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-sm font-medium text-slate-700 leading-relaxed">
                        {misi}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sejarah & Identitas Lembaga */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sejarah Narasi */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 bg-school-gold-100 text-school-gold-600 font-bold text-xs uppercase rounded-full">
                Sejarah Singkat
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Sejarah Perjalanan & Naungan {schoolInfo.foundation || 'Yayasan Ma\'arif Empat Lima Kalen'}
              </h2>

              <div className="prose prose-slate text-slate-600 text-sm sm:text-base leading-relaxed space-y-3">
                {historyParagraphs.length === 0 ? (
                  <p>
                    SMP &quot;Empat Lima&quot; 2 Kedungpring didirikan sebagai bentuk komitmen nyata Yayasan Pendidikan Ma&apos;arif Empat Lima Kalen dalam menghadirkan sarana pendidikan berkualitas di wilayah Kedungpring.
                  </p>
                ) : (
                  historyParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                )}
              </div>
            </div>

            {/* Identitas Table */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900 border-b-2 border-school-gold-500 pb-2 flex items-center gap-2">
                <Building className="w-5 h-5 text-school-green-700" />
                <span>Data Identitas Sekolah</span>
              </h3>

              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">Nama Sekolah</span>
                  <span className="font-bold text-slate-900 text-right">{schoolInfo.name}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">Naungan Yayasan</span>
                  <span className="font-bold text-slate-900 text-right">{schoolInfo.foundation}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">NPSN</span>
                  <span className="font-bold text-slate-900">{schoolInfo.npsn}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">Status Akreditasi</span>
                  <span className="font-bold text-school-green-700 bg-school-green-50 px-2 py-0.5 rounded">
                    {schoolInfo.accreditation}
                  </span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">Kepala Sekolah</span>
                  <span className="font-bold text-slate-900 text-right">{schoolInfo.principal}</span>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">Alamat Lengkap</span>
                  <span className="font-medium text-slate-700 text-right">
                    {schoolInfo.address}, {schoolInfo.district}, {schoolInfo.regency}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Sekolah */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Sarana & Prasarana"
            title="Fasilitas Sekolah yang Nyaman & Modern"
            subtitle="Mendukung seluruh kegiatan belajar mengajar, ibadah, dan pengembangan bakat siswa."
          />

          {facilities.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <Building2 className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Belum ada data fasilitas yang ditambahkan.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility) => (
                <div
                  key={facility.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-school-green-600 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image
                      src={facility.imageUrl || 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800'}
                      alt={facility.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {facility.count && (
                      <span className="absolute bottom-3 left-3 bg-slate-900/90 text-amber-300 font-bold text-xs px-2.5 py-1 rounded-md backdrop-blur-md">
                        {facility.count}
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="font-extrabold text-slate-900 text-base">{facility.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
