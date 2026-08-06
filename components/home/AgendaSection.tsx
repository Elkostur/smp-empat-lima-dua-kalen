'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { defaultAgendas, AgendaItem } from '@/lib/adminStore';

export const AgendaSection: React.FC = () => {
  const [agendas, setAgendas] = useState<AgendaItem[]>(defaultAgendas);

  useEffect(() => {
    const loadAgendas = () => {
      if (typeof window !== 'undefined') {
        try {
          const stored = localStorage.getItem('smp45_agendas');
          if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setAgendas(parsed);
              return;
            }
          }
        } catch {
          // ignore
        }
        setAgendas(defaultAgendas);
      }
    };

    const timer = setTimeout(() => {
      loadAgendas();
    }, 0);

    const handleStorage = () => {
      loadAgendas();
    };

    window.addEventListener('storage', handleStorage);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  return (
    <section className="py-16 bg-[#0A2418] border-t border-b border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light={false}
          badge="Agenda Sekolah"
          title="Jadwal Kegiatan & Kalender Akademik"
          subtitle="Agenda kegiatan mendatang yang melibatkan peserta didik, pendidik, dan wali murid."
        />

        {agendas.length === 0 ? (
          <div className="text-center py-10 bg-[#153D29] rounded-2xl border border-[#D4AF37]/20 text-slate-300 font-semibold">
            Belum ada agenda kegiatan yang dijadwalkan.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agendas.map((event, idx) => (
              <motion.div
                key={event.id || idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#153D29] p-5 rounded-2xl border border-[#D4AF37]/20 shadow-lg hover:border-[#D4AF37]/60 transition-all duration-200 flex gap-4 items-center"
              >
                {/* Date Box */}
                <div className="w-16 sm:w-20 rounded-xl bg-[#05160E] text-white p-2.5 text-center shrink-0 border border-[#D4AF37]/40 shadow-sm flex flex-col items-center justify-center">
                  <span className="text-xl sm:text-2xl font-black text-[#D4AF37] leading-none">
                    {event.day}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mt-0.5">
                    {event.month} {event.year || ''}
                  </span>
                </div>

                {/* Event Info */}
                <div className="space-y-1.5 flex-1 min-w-0">
                  <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 rounded">
                    {event.category || (event as unknown as { badge?: string }).badge || 'Agenda'}
                  </span>

                  <h4 className="text-sm sm:text-base font-extrabold text-white leading-snug line-clamp-2">
                    {event.title}
                  </h4>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-medium pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{event.time}</span>
                    </span>
                    <span className="flex items-center gap-1 line-clamp-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{event.location}</span>
                    </span>
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
