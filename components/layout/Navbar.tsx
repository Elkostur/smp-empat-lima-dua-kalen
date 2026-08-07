'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronRight,
  UserCheck,
  Search,
  Sparkles,
  Award,
  GraduationCap,
} from 'lucide-react';
import { SchoolLogo } from '../common/SchoolLogo';
import { schoolInfo } from '@/data/schoolData';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/profil', label: 'Profil' },
  { href: '/program', label: 'Program' },
  { href: '/berita', label: 'Berita' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/staff', label: 'Staff & Guru' },
  { href: '/siswa', label: 'Siswa' },
  { href: '/ppdb', label: 'PPDB 2026/2027', badge: 'Buka' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [info, setInfo] = useState(schoolInfo);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('smp45_school_info');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && typeof parsed === 'object') {
            setTimeout(() => {
              setInfo((prev) => ({ ...prev, ...parsed }));
            }, 0);
          }
        }
      } catch (e) {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    queueMicrotask(() => setIsMobileMenuOpen(false));
  }, [pathname]);

  if (pathname === '/admin') {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm transition-all duration-300">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-[#05160E] text-white text-xs py-1.5 px-4 hidden lg:block border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{info.phone}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{info.email}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{info.operatingHours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/10 text-[#D4AF37] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30 font-medium text-[11px]">
              <Sparkles className="w-3 h-3 text-[#D4AF37] animate-spin" />
              <span>PPDB TA 2026/2027 Gelombang 1 Dibuka!</span>
            </div>

            <Link
              href="/admin"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-200 hover:text-[#D4AF37] transition-colors bg-[#D4AF37]/10 px-2.5 py-1 rounded-lg border border-[#D4AF37]/30"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Admin Dashboard</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A2418]/95 backdrop-blur-md shadow-lg py-2.5 border-b border-[#D4AF37]/20'
            : 'bg-[#0A2418] py-3 border-b border-[#D4AF37]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Name */}
          <Link href="/" className="group flex items-center gap-3">
            <SchoolLogo size="md" lightText />
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs font-bold text-[#D4AF37] tracking-widest uppercase">
                Yayasan Ma&apos;arif Empat Lima
              </span>
              <span className="text-base sm:text-lg lg:text-xl font-extrabold text-white tracking-tight leading-none group-hover:text-[#D4AF37] transition-colors">
                SMP &quot;EMPAT LIMA&quot; 2
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-400 tracking-tight">
                Kedungpring - Lamongan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-[#D4AF37] font-bold bg-[#153D29]'
                      : 'text-slate-200 hover:text-[#D4AF37] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="ml-1.5 inline-flex items-center px-1.5 py-0.2 text-[10px] font-extrabold bg-[#D4AF37] text-[#0D2D1D] rounded-full animate-bounce">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D4AF37] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/ppdb"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#0D2D1D] bg-[#D4AF37] hover:bg-yellow-500 shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <GraduationCap className="w-4 h-4 text-[#0D2D1D]" />
              <span>PPDB 2026</span>
            </Link>

            <Link
              href="/login"
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-[#D4AF37] hover:bg-white/10 transition-colors"
              title="Portal Login Admin/Guru"
            >
              <UserCheck className="w-5 h-5" />
            </Link>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-slate-200 bg-[#153D29] hover:bg-white/10 hover:text-[#D4AF37] focus:outline-none transition-colors touch-target border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 xl:hidden"
            />

            {/* Slide-out Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-[#0D2D1D] z-50 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#D4AF37]/20"
            >
              {/* Drawer Header */}
              <div className="p-4 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#0A2418] text-white">
                <div className="flex items-center gap-2.5">
                  <SchoolLogo size="sm" lightText />
                  <div>
                    <h3 className="font-extrabold text-sm leading-tight text-white">
                      SMP 45 2 Kedungpring
                    </h3>
                    <p className="text-[10px] text-[#D4AF37]">
                      Yayasan Ma&apos;arif Empat Lima
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-[#153D29] text-slate-200 hover:text-white border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="p-4 space-y-1.5 flex-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all touch-target ${
                        isActive
                          ? 'bg-[#153D29] text-[#D4AF37] font-bold border-l-4 border-[#D4AF37]'
                          : 'text-slate-200 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {link.label}
                        {link.badge && (
                          <span className="px-2 py-0.5 text-[10px] font-extrabold bg-[#D4AF37] text-[#0D2D1D] rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  );
                })}

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/login"
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/5"
                  >
                    <span className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[#D4AF37]" />
                      <span>Portal Login Admin / Guru</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              {/* Drawer Footer CTA */}
              <div className="p-4 bg-[#0A2418] border-t border-[#D4AF37]/20 space-y-3">
                <Link
                  href="/ppdb"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-extrabold text-[#0D2D1D] bg-[#D4AF37] hover:bg-yellow-500 shadow-md text-center"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Daftar PPDB Online 2026</span>
                </Link>

                <div className="text-center text-[11px] text-slate-400">
                  <p>{schoolInfo.address}</p>
                  <p className="font-semibold text-[#D4AF37] mt-1">
                    WA CS: +62 857-3021-9945
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
