'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronRight, Home } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs: Breadcrumb[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  breadcrumbs,
}) => {
  return (
    <section className="relative bg-gradient-school text-white py-12 md:py-16 px-4 overflow-hidden shadow-inner">
      {/* Background Decorative Gold Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-school-gold-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-emerald-200/90 flex-wrap">
            <li>
              <Link href="/" className="hover:text-amber-300 flex items-center gap-1 transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>Beranda</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-school-gold-400 shrink-0" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-amber-300 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-amber-300 font-semibold">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Title & Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          {badge && (
            <span className="inline-block px-3.5 py-1 mb-3 text-xs font-bold uppercase tracking-widest bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 rounded-full">
              {badge}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-sm sm:text-base md:text-lg text-emerald-100 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
