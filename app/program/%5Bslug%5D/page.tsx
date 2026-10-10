'use client';

import React from 'react';
import { BlurImage } from '@/components/common/BlurImage';
import { PageHeader } from '@/components/layout/PageHeader';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, GraduationCap, ArrowLeft, Sparkles, Clock } from 'lucide-react';
import { useAdminDataStore } from '@/lib/adminStore';

interface ProgramDetailProps {
  params: Promise<{ slug: string }>;
}

export default function ProgramDetailPage({ params }: ProgramDetailProps) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;

  const { programs } = useAdminDataStore();
  const program = programs.find((p) => p.id === slug);

  if (!program) {
    notFound();
  }

  const otherPrograms = programs.filter((p) => p.id !== program.id);

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <PageHeader
        title={program.title}
        subtitle={program.shortDesc}
        badge={program.badge}
        breadcrumbs={[
          { label: 'Program Unggulan', href: '/program' },
          { label: program.title },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <Link
          href="/program"
          className="inline-flex items-center gap-2 text-xs font-bold text-school-green-700 hover:text-school-green-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Program Unggulan</span>
        </Link>

        {/* Featured Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg bg-slate-100 border border-slate-200">
          <BlurImage
            src={program.imageUrl || ''}
            alt={program.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Info Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-school-gold-100 text-school-gold-600 border border-school-gold-300">
            <Sparkles className="w-4 h-4 text-school-gold-500" />
            <span>{program.badge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {program.title}
          </h1>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            {program.fullDesc}
          </p>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-900 text-xs sm:text-sm font-semibold">
            <Clock className="w-5 h-5 text-school-green-700 shrink-0" />
            <span>Jadwal Pelaksanaan: <strong className="text-school-green-900">{program.schedule}</strong></span>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              Keunggulan &amp; Fasilitas Program:
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {program.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-800">
                  <CheckCircle className="w-5 h-5 text-school-green-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Tertarik mendaftarkan putra/putri Anda pada program ini?
            </span>
            <Link
              href="/ppdb"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-slate-900 bg-gradient-gold hover:opacity-95 shadow-md"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Daftar PPDB Online Sekarang</span>
            </Link>
          </div>
        </div>

        {/* Other Programs */}
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <h3 className="text-xl font-extrabold text-slate-900">
            Program Unggulan Lainnya
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherPrograms.map((op) => (
              <div key={op.id} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between group">
                <div className="relative h-32 w-full rounded-xl overflow-hidden bg-slate-100">
                  <BlurImage
                    src={op.imageUrl || ''}
                    alt={op.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-school-gold-600 uppercase">{op.badge}</span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 line-clamp-2 group-hover:text-school-green-700">
                    <Link href={`/program/${op.id}`}>{op.title}</Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
