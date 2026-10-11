'use client';

import React from 'react';
import Link from 'next/link';
import { BlurImage } from '@/components/common/BlurImage';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Newspaper } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { useAdminDataStore } from '@/lib/adminStore';
import { sortNewsByDateDesc } from '@/lib/utils';

export const LatestNewsSection: React.FC = () => {
  const { news: newsList } = useAdminDataStore();
  const sortedNews = sortNewsByDateDesc(newsList);

  const featured = sortedNews.find((n) => n.featured) || sortedNews[0];
  const secondaryNews = featured ? sortedNews.filter((n) => n.id !== featured.id).slice(0, 3) : [];

  // Empty state — news list is empty or still loading from Supabase
  if (!featured) {
    return (
      <section className="py-16 md:py-24 bg-[#0D2D1D] text-white border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light={false}
            badge="Kabar & Pengumuman"
            title="Berita Terbaru SMP Empat Lima 2 Kedungpring"
            subtitle="Informasi kegiatan sekolah, prestasi siswa/guru, serta pengumuman penting lembaga."
          />
          <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
            <Newspaper className="w-12 h-12 text-[#D4AF37]/40" />
            <p className="text-slate-400 text-sm">Belum ada berita yang tersedia.</p>
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37] text-[#D4AF37] font-bold text-xs hover:bg-[#D4AF37] hover:text-[#0D2D1D] transition-colors"
            >
              <span>Lihat Halaman Berita</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-[#0D2D1D] text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light={false}
          badge="Kabar & Pengumuman"
          title="Berita Terbaru SMP Empat Lima 2 Kedungpring"
          subtitle="Informasi kegiatan sekolah, prestasi siswa/guru, serta pengumuman penting lembaga."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Featured News Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#153D29] rounded-2xl border border-[#D4AF37]/20 overflow-hidden shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300 group"
          >
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#0A2418]">
              <BlurImage
                src={featured.imageUrl}
                alt={featured.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#05160E]/90 border border-[#D4AF37]/40 text-[#D4AF37] font-extrabold text-xs rounded-full shadow-md">
                {featured.category}
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-4 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{featured.date}</span>
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{featured.author}</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                <Link href={`/berita/${featured.slug}`}>{featured.title}</Link>
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {featured.summary}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {(featured.tags ?? []).slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#0A2418] border border-white/10 text-slate-300 rounded text-[11px] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/berita/${featured.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#D4AF37] hover:text-yellow-400 shrink-0"
                >
                  <span>Baca Artikel</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Secondary News List */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-lg font-extrabold text-white border-b-2 border-[#D4AF37] pb-2">
              Berita Lainnya
            </h4>

            {secondaryNews.length > 0 ? (
              secondaryNews.map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-4 rounded-xl border border-[#D4AF37]/20 bg-[#153D29] hover:border-[#D4AF37]/60 hover:shadow-md transition-all duration-200 flex gap-4 items-center group"
                >
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-[#0A2418]">
                    <BlurImage
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] text-slate-300">
                      <span className="px-2 py-0.5 bg-[#D4AF37]/15 text-[#D4AF37] rounded font-bold border border-[#D4AF37]/30">
                        {item.category}
                      </span>
                      <span>{item.date}</span>
                    </div>

                    <h5 className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-2 leading-snug">
                      <Link href={`/berita/${item.slug}`}>{item.title}</Link>
                    </h5>
                  </div>
                </motion.article>
              ))
            ) : (
              <p className="text-slate-400 text-sm py-4">Tidak ada berita lainnya.</p>
            )}

            <div className="pt-2">
              <Link
                href="/berita"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full border border-[#D4AF37] text-[#D4AF37] font-bold text-xs sm:text-sm hover:bg-[#D4AF37] hover:text-[#0D2D1D] transition-colors text-center leading-snug max-w-full"
              >
                <span>Lihat Semua Berita & Pengumuman</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
