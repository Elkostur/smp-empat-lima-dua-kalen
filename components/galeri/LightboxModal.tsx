'use client';

import React from 'react';
import { BlurImage } from '@/components/common/BlurImage';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Tag } from 'lucide-react';
import { GalleryItem } from '@/data/schoolData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl text-white max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white transition-colors border border-white/20"
            aria-label="Tutup Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

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
            <div className="flex items-center gap-3 text-xs text-amber-300">
              <span className="px-2.5 py-0.5 bg-school-gold-500/20 rounded font-bold uppercase tracking-wider border border-amber-400/30">
                {item.category}
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-school-gold-400" />
                <span>{item.date}</span>
              </span>
            </div>

            <h3 className="text-xl font-extrabold text-white">{item.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
