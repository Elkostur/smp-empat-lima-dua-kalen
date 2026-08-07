'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  BookOpen,
  HeartHandshake,
  Laptop,
  BrainCircuit,
  ArrowRight,
  Check,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { useAdminDataStore } from '@/lib/adminStore';

const iconComponents: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-6 h-6 text-[#D4AF37]" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />,
  Laptop: <Laptop className="w-6 h-6 text-[#D4AF37]" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-[#D4AF37]" />,
};

export const FeaturedPrograms: React.FC = () => {
  const { programs } = useAdminDataStore();

  return (
    <section className="py-16 md:py-24 bg-[#0D2D1D] text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light={false}
          badge="Program Unggulan"
          title="Fokus Pendidikan Berimbang & Masa Depan"
          subtitle="Kami memadukan pendidikan karakter Islami An-Nahdliyah dengan ketrampilan akademik dan literasi teknologi modern."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#153D29] rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A2418] border border-[#D4AF37]/30 flex items-center justify-center">
                    {iconComponents[program.iconName] || <BookOpen className="w-6 h-6 text-[#D4AF37]" />}
                  </div>
                  <span className="px-3 py-1 text-xs font-bold bg-[#D4AF37]/15 text-[#D4AF37] rounded-full border border-[#D4AF37]/30">
                    {program.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#D4AF37] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    {program.shortDesc}
                  </p>
                </div>

                <div className="pt-2 space-y-2 border-t border-white/10">
                  {program.highlights.slice(0, 3).map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 sm:px-8 py-4 bg-[#0A2418] border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  Jadwal: <strong className="text-slate-200">{program.schedule}</strong>
                </span>

                <Link
                  href="/program"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:text-yellow-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Detail Program</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/program"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-extrabold text-xs sm:text-sm bg-[#D4AF37] hover:bg-yellow-500 text-[#0D2D1D] shadow-lg transition-all duration-200 text-center max-w-full leading-snug"
          >
            <span>Lihat Semua Program Unggulan</span>
            <ArrowRight className="w-4 h-4 text-[#0D2D1D] shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
};
