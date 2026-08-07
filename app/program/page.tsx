'use client';

import React from 'react';
import { BlurImage } from '@/components/common/BlurImage';
import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';
import { useAdminDataStore } from '@/lib/adminStore';
import { BookOpen, CheckCircle, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

export default function ProgramPage() {
  const { programs } = useAdminDataStore();

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <PageHeader
        title="Program Unggulan Sekolah"
        subtitle="Rangkaian program inovatif yang dirancang untuk mengoptimalkan potensi akademis dan spiritual setiap peserta didik."
        badge="Program Unggulan"
        breadcrumbs={[{ label: 'Program' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {programs.map((prog, idx) => (
          <div
            key={prog.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-school-gold-100 text-school-gold-600 border border-school-gold-300">
                <Sparkles className="w-3.5 h-3.5 text-school-gold-500" />
                <span>{prog.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                <Link href={`/program/${prog.id}`} className="hover:text-school-green-700 transition-colors">
                  {prog.title}
                </Link>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {prog.fullDesc}
              </p>

              <div className="pt-2 space-y-2.5">
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Keunggulan & Fasilitas Program:
                </p>
                {prog.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-school-green-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <span className="text-xs text-slate-500">
                  Waktu Pelaksanaan: <strong className="text-slate-800">{prog.schedule}</strong>
                </span>

                <Link
                  href={`/program/${prog.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold text-slate-900 bg-gradient-gold hover:opacity-95 shadow-sm"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Detail Program</span>
                </Link>
              </div>
            </div>

            <div className={`lg:col-span-6 relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-md bg-slate-100 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
              <BlurImage
                src={prog.imageUrl}
                alt={prog.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
