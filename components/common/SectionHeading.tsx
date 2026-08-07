'use client';

import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  light = true,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-8 md:mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <span
          className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-3 max-w-full flex-wrap text-center border ${
            light
              ? 'bg-amber-100 text-amber-900 border-amber-300/80 shadow-sm'
              : 'bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/30'
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full animate-pulse shrink-0 ${
              light ? 'bg-amber-600' : 'bg-[#D4AF37]'
            }`}
          />
          <span className="break-words">{badge}</span>
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
          light ? 'text-slate-900' : 'text-white'
        }`}
      >
        {title}
      </h2>
      
      {/* Decorative Gold Line */}
      <div className={`mt-3 flex items-center gap-2 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="h-0.5 w-10 bg-[#D4AF37]/40 rounded-full" />
        <span className="h-1.5 w-6 bg-[#D4AF37] rounded-full" />
        <span className="h-0.5 w-10 bg-[#D4AF37]/40 rounded-full" />
      </div>

      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base md:text-lg max-w-2xl font-medium ${
            light ? 'text-slate-800' : 'text-slate-200'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
