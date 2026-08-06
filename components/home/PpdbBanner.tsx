'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { GraduationCap, ArrowRight, Sparkles, CheckCircle, PhoneCall } from 'lucide-react';
import { schoolInfo } from '@/data/schoolData';

export const PpdbBanner: React.FC = () => {
  return (
    <section className="py-16 bg-[#05160E] text-white relative overflow-hidden border-y border-[#D4AF37]/30">
      {/* Background Decorative Gold Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0D2D1D]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#153D29] border border-[#D4AF37]/40 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#D4AF37] text-[#0D2D1D] shadow-md max-w-full flex-wrap leading-snug">
                <Sparkles className="w-3.5 h-3.5 text-[#0D2D1D] shrink-0" />
                <span>Penerimaan Peserta Didik Baru (PPDB) 2026/2027</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
                Siapkan Masa Depan Putera-Puteri Anda Bersama SMP Empat Lima 2 Kedungpring
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                Dapatkan promo spesial Gelombang 1: <strong className="text-[#D4AF37]">Bebas Biaya Pendaftaran</strong> dan <strong className="text-[#D4AF37]">Gratis Seragam Olahraga</strong>. Kuota terbatas untuk 50 pendaftar pertama!
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#D4AF37] font-semibold pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Jalur Reguler & Prestasi</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Beasiswa Tahfidz Qur&apos;an</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Formulir Online 24 Jam</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/ppdb"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm md:text-base font-extrabold text-[#0D2D1D] bg-[#D4AF37] hover:bg-yellow-500 shadow-xl transition-all duration-200 text-center touch-target max-w-full leading-snug"
              >
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#0D2D1D] shrink-0" />
                <span>Isi Formulir PPDB Online</span>
              </Link>

              <a
                href={`https://wa.me/${schoolInfo.whatsapp}?text=Halo%20Admin%20PPDB%20SMP%20Empat%20Lima%202%20Kedungpring`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200 text-center touch-target max-w-full leading-snug"
              >
                <PhoneCall className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Konsultasi WA CS PPDB</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
