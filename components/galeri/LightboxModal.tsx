'use client';

import React, { useState } from 'react';
import { BlurImage } from '@/components/common/BlurImage';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Download, Loader2 } from 'lucide-react';
import { GalleryItem } from '@/data/schoolData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  const [downloading, setDownloading] = useState(false);

  if (!item) return null;

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const response = await fetch(item.imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      // Get filename from url or title
      const extension = item.imageUrl.split('.').pop()?.split('?')[0] || 'jpg';
      const cleanTitle = (item.title || 'foto-galeri')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      link.download = `${cleanTitle}.${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch {
      // Fallback: direct window.open or trigger standard anchor download
      const link = document.createElement('a');
      link.href = item.imageUrl;
      link.target = '_blank';
      link.download = item.title || 'foto-galeri';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl text-white max-h-[90vh] flex flex-col"
        >
          {/* Top action buttons */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-950/70 hover:bg-school-green-700 text-white text-xs font-bold transition-all border border-white/20 shadow-lg backdrop-blur-md hover:border-school-green-500 disabled:opacity-50"
              title="Download Foto"
              aria-label="Download Foto"
            >
              {downloading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                  <span className="hidden sm:inline">Mengunduh...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-school-gold-400" />
                  <span className="hidden sm:inline">Download</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-950/70 hover:bg-red-600/90 text-white transition-colors border border-white/20 shadow-lg backdrop-blur-md"
              aria-label="Tutup Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full h-80 sm:h-[450px] bg-black">
            <BlurImage
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Details */}
          <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-xs text-amber-300">
                <span className="px-2.5 py-0.5 bg-school-gold-500/20 rounded font-bold uppercase tracking-wider border border-amber-400/30">
                  {item.category}
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-school-gold-400" />
                  <span>{item.date}</span>
                </span>
              </div>

              {/* Bottom Download shortcut for mobile / convenience */}
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="inline-flex sm:hidden items-center gap-1.5 px-3 py-1.5 rounded-lg bg-school-green-800 hover:bg-school-green-700 text-white text-xs font-bold border border-school-green-600"
              >
                <Download className="w-3.5 h-3.5 text-school-gold-400" />
                <span>Unduh Foto</span>
              </button>
            </div>

            <h3 className="text-xl font-extrabold text-white">{item.title}</h3>
            {item.description && (
              <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
