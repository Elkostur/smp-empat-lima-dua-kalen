'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlurImage } from '@/components/common/BlurImage';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, GraduationCap, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { heroSlides } from '@/data/schoolData';

export const HeroSlider: React.FC = () => {
  const [slides, setSlides] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('smp45_hero_slides');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch {
        // fallback
      }
    }
    return heroSlides;
  });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleStorage = () => {
      try {
        const saved = localStorage.getItem('smp45_hero_slides');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) setSlides(parsed);
        }
      } catch {}
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides]);

  const nextSlide = () => {
    if (!slides || slides.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (!slides || slides.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide % slides.length] || heroSlides[0];

  return (
    <section className="relative w-full h-[520px] sm:h-[600px] lg:h-[650px] overflow-hidden bg-[#05160E] text-white">
      {/* Slide Images Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <BlurImage
            src={slide.bgImage}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority={currentSlide === 0}
          />
          {/* Overlay Gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05160E]/95 via-[#0A2418]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05160E] via-transparent to-[#0A2418]/40" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl space-y-4 sm:space-y-6 pt-8">
          <motion.div
            key={`badge-${slide.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-md max-w-full"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse shrink-0" />
            <span className="break-words">{slide.badge}</span>
          </motion.div>

          <motion.h1
            key={`title-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md"
          >
            {slide.title}
          </motion.h1>

          <motion.p
            key={`sub-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-medium line-clamp-3"
          >
            {slide.description}
          </motion.p>

          <motion.div
            key={`cta-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Link
              href="/ppdb"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-[#0D2D1D] bg-[#D4AF37] hover:bg-yellow-500 shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 touch-target max-w-full text-center"
            >
              <GraduationCap className="w-5 h-5 text-[#0D2D1D] shrink-0" />
              <span>{slide.ctaPrimary}</span>
            </Link>

            <Link
              href="/profil"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200 touch-target max-w-full text-center"
            >
              <span>{slide.ctaSecondary}</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37] shrink-0" />
            </Link>
          </motion.div>

          {/* Quick Key Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-[11px] sm:text-xs text-emerald-200/90 font-medium border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>Akreditasi Terdaftar Official</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>Naungan Ma&apos;arif NU</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>Bebas Pendaftaran Gel. 1</span>
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-[#05160E]/40 hover:bg-[#05160E]/80 text-white backdrop-blur-md transition-colors hidden sm:flex items-center justify-center border border-white/10"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-[#05160E]/40 hover:bg-[#05160E]/80 text-white backdrop-blur-md transition-colors hidden sm:flex items-center justify-center border border-white/10"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'w-8 bg-school-gold-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
