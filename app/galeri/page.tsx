'use client';

import React, { useState } from 'react';
import { BlurImage } from '@/components/common/BlurImage';
import { PageHeader } from '@/components/layout/PageHeader';
import { GalleryItem } from '@/data/schoolData';
import { LightboxModal } from '@/components/galeri/LightboxModal';
import { Maximize2, Play } from 'lucide-react';
import { useAdminDataStore } from '@/lib/adminStore';

const galleryCategories = ['Semua', 'Kegiatan', 'Prestasi', 'Keagamaan', 'Fasilitas', 'Ekstrakurikuler'];

function extractYouTubeId(url: string): string {
  if (!url) return '';
  const trimmed = url.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : '';
}

function YouTubeEmbed({ videoUrl }: { videoUrl?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = extractYouTubeId(videoUrl || '') || 'dQw4w9WgXcQ';
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (isPlaying) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title="Dokumentasi Video SMP Empat Lima 2 Kedungpring"
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <div
      onClick={() => setIsPlaying(true)}
      role="button"
      tabIndex={0}
      aria-label="Putar Video Dokumentasi Sekolah"
      className="relative w-full h-full cursor-pointer group bg-slate-950 overflow-hidden"
    >
      <BlurImage
        src={thumbnailUrl}
        alt="Thumbnail Video Dokumentasi Sekolah"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
      />
      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <span className="px-3 py-1.5 bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-extrabold rounded-full shadow-md inline-block">
          ▶ Klik untuk Memutar Video YouTube
        </span>
      </div>
    </div>
  );
}

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const { gallery: galleryList, schoolInfo } = useAdminDataStore();

  const filteredItems = galleryList.filter(
    (item) => selectedCategory === 'Semua' || item.category === selectedCategory
  );

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <PageHeader
        title="Galeri & Dokumentasi Sekolah"
        subtitle="Kumpulan arsip foto dan rekaman video kegiatan, fasilitas, serta momen berkesan SMP Empat Lima 2 Kedungpring."
        badge="Galeri Dokumentasi"
        breadcrumbs={[{ label: 'Galeri' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full max-w-full">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 inline-flex items-center justify-center transition-all min-h-[40px] leading-tight ${
                selectedCategory === cat
                  ? 'bg-school-green-700 text-white shadow-md font-extrabold'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <BlurImage
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                <span className="self-end p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                  <Maximize2 className="w-4 h-4" />
                </span>

                <div>
                  <span className="px-2 py-0.5 text-[10px] font-extrabold bg-school-gold-500 text-slate-900 rounded mb-1 inline-block">
                    {item.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-amber-300 mt-0.5">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Highlights Section */}
        <div className="mt-16 pt-12 border-t-2 border-slate-200 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="px-3 py-1 bg-school-gold-100 text-school-gold-600 font-extrabold text-xs uppercase rounded-full inline-block">
              Video Dokumentasi
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Dokumentasi Video Resmi Sekolah
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Simak keseruan dan keasrian lingkungan SMP Empat Lima 2 Kedungpring melalui video highlight profil sekolah.
            </p>
          </div>

          <div className="max-w-3xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 relative">
            <YouTubeEmbed videoUrl={schoolInfo.youtubeVideoUrl} />
          </div>
        </div>
      </div>

      <LightboxModal item={activeItem} onClose={() => setActiveItem(null)} />
    </main>
  );
}
