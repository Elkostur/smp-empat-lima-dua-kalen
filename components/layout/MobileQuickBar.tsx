'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  GraduationCap,
  BookOpen,
  Newspaper,
  MessageCircle,
  Building,
  Image as ImageIcon,
  Calendar,
  FileText,
} from 'lucide-react';
import { schoolInfo } from '@/data/schoolData';

export const MobileQuickBar: React.FC = () => {
  const pathname = usePathname();
  const isAdmin = pathname === '/admin';
  const [adminTab, setAdminTab] = useState('overview');

  useEffect(() => {
    if (isAdmin) {
      const handleAdminTabChanged = (e: any) => {
        if (e.detail) {
          setAdminTab(e.detail);
        }
      };
      window.addEventListener('admin-tab-changed', handleAdminTabChanged as EventListener);
      return () => window.removeEventListener('admin-tab-changed', handleAdminTabChanged as EventListener);
    }
  }, [isAdmin]);

  const handleAdminTabClick = (tabKey: string) => {
    setAdminTab(tabKey);
    window.dispatchEvent(new CustomEvent('set-admin-tab', { detail: tabKey }));
  };

  if (isAdmin) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0A2418]/95 backdrop-blur-md border-t border-[#D4AF37]/20 shadow-2xl px-2 py-1.5 pb-safe">
        <div className="grid grid-cols-5 items-center text-center">
          {/* Profil */}
          <button
            onClick={() => handleAdminTabClick('school-info')}
            className={`flex flex-col items-center justify-center py-1 rounded-lg text-[10px] font-semibold transition-colors ${
              adminTab === 'school-info'
                ? 'text-[#D4AF37] font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Building className="w-5 h-5 mb-0.5" />
            <span>Profil</span>
          </button>

          {/* Berita */}
          <button
            onClick={() => handleAdminTabClick('news')}
            className={`flex flex-col items-center justify-center py-1 rounded-lg text-[10px] font-semibold transition-colors ${
              adminTab === 'news'
                ? 'text-[#D4AF37] font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <FileText className="w-5 h-5 mb-0.5" />
            <span>Berita</span>
          </button>

          {/* PPDB (Center with bounce & gold styling) */}
          <button
            onClick={() => handleAdminTabClick('ppdb')}
            className="flex flex-col items-center justify-center -mt-3"
          >
            <div className={`w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-[#0D2D1D] border-2 border-[#0D2D1D] ring-2 ring-[#D4AF37]/50 animate-bounce ${
              adminTab === 'ppdb' ? 'bg-yellow-400 font-bold scale-105' : 'bg-[#D4AF37]'
            }`}>
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-extrabold text-[#D4AF37] mt-0.5">
              PPDB
            </span>
          </button>

          {/* Galeri */}
          <button
            onClick={() => handleAdminTabClick('gallery')}
            className={`flex flex-col items-center justify-center py-1 rounded-lg text-[10px] font-semibold transition-colors ${
              adminTab === 'gallery'
                ? 'text-[#D4AF37] font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <ImageIcon className="w-5 h-5 mb-0.5" />
            <span>Galeri</span>
          </button>

          {/* Agenda */}
          <button
            onClick={() => handleAdminTabClick('agendas')}
            className={`flex flex-col items-center justify-center py-1 rounded-lg text-[10px] font-semibold transition-colors ${
              adminTab === 'agendas'
                ? 'text-[#D4AF37] font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Calendar className="w-5 h-5 mb-0.5" />
            <span>Agenda</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0A2418]/95 backdrop-blur-md border-t border-[#D4AF37]/20 shadow-2xl px-2 py-1.5 pb-safe">
      <div className="grid grid-cols-5 items-center text-center">
        {/* Beranda */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center py-1 rounded-lg text-[10px] font-semibold transition-colors ${
            pathname === '/'
              ? 'text-[#D4AF37] font-bold'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span>Beranda</span>
        </Link>

        {/* Program */}
        <Link
          href="/program"
          className={`flex flex-col items-center justify-center py-1 rounded-lg text-[10px] font-semibold transition-colors ${
            pathname === '/program'
              ? 'text-[#D4AF37] font-bold'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <BookOpen className="w-5 h-5 mb-0.5" />
          <span>Program</span>
        </Link>

        {/* Highlighted PPDB Button */}
        <Link
          href="/ppdb"
          className="flex flex-col items-center justify-center -mt-3"
        >
          <div className="w-12 h-12 rounded-full bg-[#D4AF37] shadow-xl flex items-center justify-center text-[#0D2D1D] border-2 border-[#0D2D1D] ring-2 ring-[#D4AF37]/50 animate-bounce">
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-extrabold text-[#D4AF37] mt-0.5">
            PPDB
          </span>
        </Link>

        {/* Berita */}
        <Link
          href="/berita"
          className={`flex flex-col items-center justify-center py-1 rounded-lg text-[10px] font-semibold transition-colors ${
            pathname.startsWith('/berita')
              ? 'text-[#D4AF37] font-bold'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Newspaper className="w-5 h-5 mb-0.5" />
          <span>Berita</span>
        </Link>

        {/* Direct WhatsApp CS */}
        <a
          href={`https://wa.me/${schoolInfo.whatsapp}?text=Halo%20Admin%20SMP%20Empat%20Lima%202%20Kedungpring,%20saya%20ingin%20bertanya%20informasi%20sekolah`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 rounded-lg text-[10px] font-semibold text-emerald-400 hover:text-emerald-300"
        >
          <MessageCircle className="w-5 h-5 mb-0.5 text-[#D4AF37]" />
          <span>WA CS</span>
        </a>
      </div>
    </div>
  );
};
