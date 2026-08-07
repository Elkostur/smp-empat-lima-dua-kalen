'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlurImage } from '@/components/common/BlurImage';
import { motion } from 'motion/react';
import { Maximize2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { galleryData, GalleryItem } from '@/data/schoolData';
import { LightboxModal } from '../galeri/LightboxModal';

export const GalleryPreviewSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [galleryList, setGalleryList] = useState<GalleryItem[]>(galleryData);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('smp45_gallery');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setTimeout(() => {
              setGalleryList(parsed);
            }, 0);
          }
        }
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const items = galleryList.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-[#0D2D1D] text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light={false}
          badge="Dokumentasi & Galeri"
          title="Potret Kegiatan SMP Empat Lima 2 Kedungpring"
          subtitle="Momen berkesan pembelajaran, kegiatan keagamaan, ekstrakurikuler, dan lingkungan sekolah."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0A2418] cursor-pointer shadow-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/70 transition-all duration-300"
            >
              <BlurImage
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#05160E]/90 via-[#05160E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                <span className="self-end p-2 bg-[#0A2418]/80 backdrop-blur-md rounded-full text-[#D4AF37] border border-[#D4AF37]/30">
                  <Maximize2 className="w-4 h-4" />
                </span>

                <div>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-[#D4AF37] text-[#0D2D1D] rounded mb-1 inline-block">
                    {item.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/galeri"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-extrabold text-xs sm:text-sm bg-[#D4AF37] hover:bg-yellow-500 text-[#0D2D1D] shadow-lg transition-colors text-center max-w-full leading-snug"
          >
            <span>Lihat Galeri Foto & Video Lengkap</span>
            <ArrowRight className="w-4 h-4 text-[#0D2D1D] shrink-0" />
          </Link>
        </div>
      </div>

      <LightboxModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
};
