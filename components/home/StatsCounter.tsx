'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Users, GraduationCap, Trophy, Award, TrendingUp } from 'lucide-react';
import { schoolStats } from '@/data/schoolData';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6 text-[#D4AF37]" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#D4AF37]" />,
  Trophy: <Trophy className="w-6 h-6 text-[#D4AF37]" />,
  Award: <Award className="w-6 h-6 text-[#D4AF37]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#D4AF37]" />,
};

export const StatsCounter: React.FC = () => {
  return (
    <section className="py-12 bg-[#0A2418] text-white relative overflow-hidden border-b border-[#D4AF37]/20">
      {/* Decorative Lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {schoolStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#153D29] border border-[#D4AF37]/20 p-4 sm:p-5 rounded-2xl backdrop-blur-sm text-center flex flex-col items-center justify-center shadow-lg hover:border-[#D4AF37]/60 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A2418] flex items-center justify-center mb-3 border border-[#D4AF37]/30">
                {iconMap[stat.icon] || <Award className="w-6 h-6 text-[#D4AF37]" />}
              </div>

              <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] tracking-tight">
                {stat.value}
                <span className="text-sm font-semibold text-white ml-0.5">{stat.suffix}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
