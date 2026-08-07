'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BlurImage } from '@/components/common/BlurImage';
import { PageHeader } from '@/components/layout/PageHeader';
import { NewsItem } from '@/data/schoolData';
import { Calendar, User, Search, Tag, ArrowRight, BookOpen } from 'lucide-react';
import { useAdminDataStore } from '@/lib/adminStore';

const categories = [
  'Semua',
  'Pengumuman',
  'Kegiatan',
  'Prestasi',
  'Keagamaan & Tahfidz',
  'Ekstrakurikuler',
  'Artikel & Opini',
];

export default function BeritaPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const { news: newsList } = useAdminDataStore();

  const filteredNews = newsList.filter((item) => {
    const itemCat = item.category as string;
    const matchesCategory =
      selectedCategory === 'Semua' ||
      itemCat === selectedCategory ||
      (selectedCategory === 'Artikel & Opini' && itemCat === 'Artikel') ||
      (selectedCategory === 'Kegiatan' && itemCat === 'Berita');
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <PageHeader
        title="Berita & Pengumuman Sekolah"
        subtitle="Informasi terkini kegiatan, kabar prestasi siswa/guru, serta pengumuman resmi SMP Empat Lima 2 Kedungpring."
        badge="Informasi Terkini"
        breadcrumbs={[{ label: 'Berita' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none shrink-0 max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 inline-flex items-center justify-center transition-all min-h-[40px] leading-tight ${
                    selectedCategory === cat
                      ? 'bg-school-green-700 text-white shadow-md font-extrabold'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <span>{cat}</span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Cari berita atau pengumuman..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-school-green-700 focus:ring-2 focus:ring-school-green-100 transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-school-green-600 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                    <BlurImage
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-school-green-800 text-amber-300 font-extrabold text-[11px] rounded-full shadow-md">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-school-green-700" />
                        <span>{item.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-school-green-700" />
                        <span>{item.author}</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-school-green-700 transition-colors leading-snug line-clamp-2">
                      <Link href={`/berita/${item.slug}`}>{item.title}</Link>
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">
                    Waktu baca: {item.readTime}
                  </span>

                  <Link
                    href={`/berita/${item.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-school-green-700 hover:text-school-green-800"
                  >
                    <span>Baca</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto space-y-3">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-extrabold text-slate-800 text-lg">Tidak Ada Berita Ditemukan</h3>
            <p className="text-xs text-slate-500">
              Coba gunakan kata kunci pencarian lain atau pilih kategori yang berbeda.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Semua');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-school-green-700 text-white rounded-xl text-xs font-bold"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
