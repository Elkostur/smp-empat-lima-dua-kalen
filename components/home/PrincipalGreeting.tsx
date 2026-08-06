'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Quote, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { useAdminDataStore } from '@/lib/adminStore';

export const PrincipalGreeting: React.FC = () => {
  const { schoolInfo } = useAdminDataStore();

  return (
    <section className="py-16 md:py-24 bg-[#0D2D1D] text-white relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Decorative Frame Elements */}
              <div className="absolute -inset-3 bg-[#0A2418] rounded-3xl transform -rotate-2 opacity-90 blur-sm border border-[#D4AF37]/30" />
              <div className="absolute -inset-3 bg-[#D4AF37]/20 rounded-3xl transform rotate-2 opacity-80" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 bg-[#0A2418] aspect-[4/5]">
                <Image
                  src={schoolInfo.principalPhoto}
                  alt={schoolInfo.principal}
                  fill
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0A2418]/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-[#D4AF37]/30 shadow-lg">
                  <p className="font-extrabold text-sm sm:text-base text-white">
                    {schoolInfo.principal}
                  </p>
                  <p className="text-xs text-[#D4AF37] font-medium">
                    {schoolInfo.principalTitle}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 max-w-full flex-wrap leading-snug">
              <Award className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>Sambutan Kepala Sekolah</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Mendidik dengan Karakter Islami, Menyiapkan Generasi Unggul Masa Depan
            </h2>

            {/* Quote Box */}
            <div className="relative bg-[#153D29] p-5 sm:p-6 rounded-2xl border-l-4 border-[#D4AF37] border-y border-r border-white/5">
              <Quote className="w-8 h-8 text-[#D4AF37]/20 absolute top-4 right-4" />
              <p className="text-slate-200 text-sm sm:text-base italic leading-relaxed relative z-10 font-medium">
                &quot;{schoolInfo.principalQuote}&quot;
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Di bawah naungan Yayasan Pendidikan Ma&apos;arif Empat Lima Kalen Kedungpring, kami terus berinovasi dalam menyajikan pendidikan berkualitas tinggi yang menggabungkan kecerdasan akademik, ketrampilan teknologi modern, serta penguatan akhlakul karimah.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-semibold">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Kurikulum Merdeka Terintegrasi</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-semibold">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Bimbingan Tahfidz Juz 30</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-semibold">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Lingkungan Sekolah Asri & Aman</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-semibold">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Ekstrakurikuler Pagar Nusa & Pramuka</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/profil"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-[#0D2D1D] bg-[#D4AF37] hover:bg-yellow-500 shadow-lg transition-all duration-200"
              >
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-4 h-4 text-[#0D2D1D]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
