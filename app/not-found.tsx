'use client';

import Link from 'next/link';
import { SchoolLogo } from '@/components/common/SchoolLogo';
import { Home, ArrowLeft } from 'lucide-react';
import { schoolInfo } from '@/data/schoolData';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05160E] via-[#0A2418] to-[#05160E] flex flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6 max-w-md mx-auto">
        <div className="flex justify-center">
          <SchoolLogo size="lg" />
        </div>
        
        <div className="space-y-2">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Maaf, halaman yang Anda cari di {schoolInfo.name} tidak ditemukan atau telah dipindahkan.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-slate-900 bg-gradient-gold hover:opacity-95 shadow-lg transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Beranda Utama</span>
          </Link>
          <button
            onClick={() => typeof window !== 'undefined' && window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali Sebelumnya</span>
          </button>
        </div>
      </div>
    </div>
  );
}
