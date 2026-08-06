'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, MapPin, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

const agendaEvents = [
  {
    id: '1',
    day: '10',
    month: 'AGU',
    year: '2026',
    title: 'Ujian Munaqosyah Tahfidz Al-Qur\'an Juz 30 Gelombang I',
    time: '08.00 - 12.00 WIB',
    location: 'Musholla Ma\'arif SMP 45 2 Kedungpring',
    badge: 'Akademik',
  },
  {
    id: '2',
    day: '17',
    month: 'AGU',
    year: '2026',
    title: 'Upacara Bendera HUT Kemerdekaan RI Ke-81 & Atraksi Drumband',
    time: '07.00 - 10.30 WIB',
    location: 'Lapangan Utama Sekolah',
    badge: 'Nasional',
  },
  {
    id: '3',
    day: '05',
    month: 'SEP',
    year: '2026',
    title: 'Tryout Simulasi Asesmen Nasional Berbasis Komputer (ANBK)',
    time: '07.30 - 13.00 WIB',
    location: 'Laboratorium Komputer CBT',
    badge: 'Ujian Digital',
  },
  {
    id: '4',
    day: '22',
    month: 'OKT',
    year: '2026',
    title: 'Peringatan Hari Santri Nasional (HSN) & Pawai Ta\'aruf Ma\'arif',
    time: '06.30 - 11.30 WIB',
    location: 'Area Kecamatan Kedungpring',
    badge: 'Keagamaan',
  },
];

export const AgendaSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#0A2418] border-t border-b border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light={false}
          badge="Agenda Sekolah"
          title="Jadwal Kegiatan & Kalender Akademik"
          subtitle="Agenda kegiatan mendatang yang melibatkan peserta didik, pendidik, dan wali murid."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agendaEvents.map((event, idx) => (
            <motion.div
              key={event.id}
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
                  {event.month} {event.year}
                </span>
              </div>

              {/* Event Info */}
              <div className="space-y-1.5 flex-1 min-w-0">
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 rounded">
                  {event.badge}
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
      </div>
    </section>
  );
};
