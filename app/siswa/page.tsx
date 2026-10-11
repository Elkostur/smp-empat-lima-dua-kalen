'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/common/SectionHeading';
import { useAdminDataStore } from '@/lib/adminStore';
import {
  Compass,
  Shield,
  Users,
  Music,
  Cross,
  Camera,
  Activity,
  Award,
  Calendar,
  CheckCircle,
  Trophy,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-school-gold-500" />,
  Shield: <Shield className="w-6 h-6 text-school-gold-500" />,
  Users: <Users className="w-6 h-6 text-school-gold-500" />,
  Music: <Music className="w-6 h-6 text-school-gold-500" />,
  Cross: <Cross className="w-6 h-6 text-school-gold-500" />,
  Camera: <Camera className="w-6 h-6 text-school-gold-500" />,
  Activity: <Activity className="w-6 h-6 text-school-gold-500" />,
};

const dailySchedule = [
  { time: '06.45 - 07.00 WIB', activity: 'Penyambutan Siswa 5S oleh Guru Piket di Gerbang Utama' },
  { time: '07.00 - 07.30 WIB', activity: 'Sholat Dhuha Berjamaah & Pembacaan Asmaul Husna / Juz Amma' },
  { time: '07.30 - 09.30 WIB', activity: 'Kegiatan Belajar Mengajar (KBM) Sesi 1' },
  { time: '09.30 - 09.50 WIB', activity: 'Istirahat Pertama & Pojok Literasi Perpustakaan' },
  { time: '09.50 - 12.00 WIB', activity: 'Kegiatan Belajar Mengajar (KBM) Sesi 2' },
  { time: '12.00 - 12.40 WIB', activity: 'Sholat Dzuhur Berjamaah di Musholla Ma\'arif' },
  { time: '12.40 - 14.00 WIB', activity: 'KBM Sesi 3 & Persiapan Ekstrakurikuler' },
];

export default function SiswaPage() {
  const [activeTab, setActiveTab] = useState<'ekskul' | 'osis' | 'jadwal'>('ekskul');
  const { extracurriculars, osisOfficers } = useAdminDataStore();

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <PageHeader
        title="Informasi Siswa & Ekstrakurikuler"
        subtitle="Wadah pembinaan bakat, kepemimpinan OSIS, serta jadwal pembiasaan ibadah harian peserta didik."
        badge="Kesiswaan"
        breadcrumbs={[{ label: 'Siswa' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full max-w-2xl mx-auto bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
          <button
            onClick={() => setActiveTab('ekskul')}
            className={`flex-1 min-w-[140px] sm:min-w-0 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-center leading-tight transition-all inline-flex items-center justify-center shrink-0 min-h-[40px] ${
              activeTab === 'ekskul'
                ? 'bg-school-green-700 text-white shadow-md font-extrabold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <span>Ekstrakurikuler ({extracurriculars.length} Cabang)</span>
          </button>
          <button
            onClick={() => setActiveTab('osis')}
            className={`flex-1 min-w-[160px] sm:min-w-0 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-center leading-tight transition-all inline-flex items-center justify-center shrink-0 min-h-[40px] ${
              activeTab === 'osis'
                ? 'bg-school-green-700 text-white shadow-md font-extrabold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <span>Organisasi OSIS</span>
          </button>
          <button
            onClick={() => setActiveTab('jadwal')}
            className={`flex-1 min-w-[130px] sm:min-w-0 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-center leading-tight transition-all inline-flex items-center justify-center shrink-0 min-h-[40px] ${
              activeTab === 'jadwal'
                ? 'bg-school-green-700 text-white shadow-md font-extrabold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <span>Jadwal Pembiasaan</span>
          </button>
        </div>

        {/* Tab 1: Ekstrakurikuler */}
        {activeTab === 'ekskul' && (
          <div className="space-y-8">
            <SectionHeading
              badge="Minat & Bakat"
              title={`${extracurriculars.length} Cabang Ekstrakurikuler Unggulan`}
              subtitle="Mengembangkan potensi non-akademik, olahraga, seni, kepramukaan, dan bela diri."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {extracurriculars.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-school-green-600 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={item.imageUrl || ''}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 p-2 bg-slate-900/80 backdrop-blur-md rounded-xl text-school-gold-400 border border-white/20">
                        {(item.iconName && iconMap[item.iconName]) || <Award className="w-5 h-5 text-school-gold-400" />}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-school-green-700 transition-colors">
                        {item.name}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 text-xs space-y-1.5 border-t border-slate-100">
                        <p className="text-slate-500">
                          Pembina/Pelatih: <strong className="text-slate-800">{item.coach}</strong>
                        </p>
                        <p className="text-slate-500">
                          Jadwal: <strong className="text-school-green-700">{item.schedule}</strong>
                        </p>
                      </div>

                      {item.achievements.length > 0 && (
                        <div className="bg-school-gold-50 p-3 rounded-xl border border-school-gold-200 space-y-1">
                          <p className="text-[11px] font-extrabold text-school-gold-600 uppercase flex items-center gap-1">
                            <Trophy className="w-3.5 h-3.5 text-school-gold-500" />
                            <span>Capaian Prestasi</span>
                          </p>
                          <ul className="text-xs text-slate-700 space-y-0.5 font-medium">
                            {item.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="flex items-center gap-1">
                                <span>• {ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: OSIS */}
        {activeTab === 'osis' && (
          <div className="space-y-8">
            <SectionHeading
              badge="Kepemimpinan & Organisasi"
              title="Organisasi Siswa Intra Sekolah (OSIS)"
              subtitle="Melatih jiwa kepemimpinan, kedisiplinan, tanggung jawab, dan kerja sama tim antar siswa."
            />

            <div className="max-w-3xl mx-auto">
              {/* OSIS Card */}
              <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-sm hover:border-school-green-600 transition-all space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-school-green-50 text-school-green-700 rounded-2xl border border-school-green-200 shadow-xs">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900">Pengurus OSIS</h3>
                      <p className="text-xs text-slate-500 font-medium">Masa Bakti 2026/2027</p>
                    </div>
                  </div>
                  <span className="px-3.5 py-1 bg-school-green-700 text-white font-extrabold text-xs rounded-full shadow-sm">
                    Resmi
                  </span>
                </div>

                <div className="space-y-3">
                  {osisOfficers.map((officer) => (
                    <div
                      key={officer.id}
                      className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-between hover:bg-emerald-50/40 transition-colors"
                    >
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-bold text-school-green-700 uppercase tracking-wide">
                          {officer.position}
                        </span>
                        <h4 className="text-sm font-extrabold text-slate-900">{officer.name}</h4>
                      </div>
                      <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl shadow-xs">
                        Kelas {officer.className}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-5 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between font-medium">
                  <span>Pembina: Kesiswaan &amp; Guru Pembimbing</span>
                  <span className="text-school-green-700 font-bold">SMP Empat Lima 2 Kedungpring</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Jadwal Pembiasaan */}
        {activeTab === 'jadwal' && (
          <div className="space-y-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <SectionHeading
              badge="Rutinitas Ibadah"
              title="Jadwal Pembiasaan Kegiatan Harian Siswa"
              subtitle="Setiap detik di sekolah dimanfaatkan untuk pembentukan karakter mulia dan kedisiplinan."
            />

            <div className="max-w-3xl mx-auto space-y-3">
              {dailySchedule.map((sched, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-school-green-600 transition-colors"
                >
                  <span className="px-3 py-1 bg-school-green-800 text-amber-300 font-extrabold text-xs rounded-md shrink-0 w-fit">
                    {sched.time}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 flex-1 sm:text-right">
                    {sched.activity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
