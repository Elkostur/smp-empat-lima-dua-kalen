'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { testimonials as defaultTestimonials } from '@/data/schoolData';

export const TestimonialsSection: React.FC = () => {
  const [testiList, setTestiList] = useState<typeof defaultTestimonials>(defaultTestimonials);

  useEffect(() => {
    const loadTestimonials = () => {
      if (typeof window !== 'undefined') {
        try {
          const stored = localStorage.getItem('smp45_testimonials');
          if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setTestiList(parsed);
              return;
            }
          }
        } catch {
          // ignore
        }
        setTestiList(defaultTestimonials);
      }
    };

    const timer = setTimeout(() => {
      loadTestimonials();
    }, 0);

    const handleStorage = () => {
      loadTestimonials();
    };

    window.addEventListener('storage', handleStorage);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#0D2D1D] text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light={false}
          badge="Testimoni"
          title="Kesan Alumni, Wali Murid & Siswa"
          subtitle="Pengalaman nyata tumbuh dan berkembang bersama keluarga besar SMP Empat Lima 2 Kedungpring."
        />

        {testiList.length === 0 ? (
          <div className="text-center py-10 bg-[#153D29] rounded-2xl border border-[#D4AF37]/20 text-slate-300 font-semibold">
            Belum ada testimoni yang ditambahkan.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testiList.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#153D29] p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/20 relative flex flex-col justify-between shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  <p className="text-slate-200 text-sm leading-relaxed italic relative z-10 font-medium">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37] shrink-0 bg-[#0A2418]">
                    <Image
                      src={item.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200'}
                      alt={item.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-sm">{item.name}</h4>
                    <p className="text-xs text-[#D4AF37] font-semibold">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
