'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ChevronRight,
  Heart,
  Facebook,
  Instagram,
  Youtube,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { SchoolLogo } from '../common/SchoolLogo';
import { useAdminDataStore } from '@/lib/adminStore';

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const { schoolInfo: info } = useAdminDataStore();

  if (pathname === '/admin') {
    return null;
  }

  return (
    <footer className="bg-[#05160E] text-white pt-16 pb-24 md:pb-12 border-t border-[#D4AF37]/30 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: School Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SchoolLogo size="lg" lightText />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              SMP &quot;Empat Lima&quot; 2 Kedungpring berada di bawah naungan Yayasan Pendidikan Ma&apos;arif Empat Lima Kalen. Berkomitmen mencetak generasi santri cerdas, mandiri, dan berkarakter Islami An-Nahdliyah.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={info.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0A2418] text-[#D4AF37] border border-[#D4AF37]/20 hover:bg-[#D4AF37] hover:text-[#0D2D1D] flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={info.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0A2418] text-[#D4AF37] border border-[#D4AF37]/20 hover:bg-[#D4AF37] hover:text-[#0D2D1D] flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={info.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0A2418] text-[#D4AF37] border border-[#D4AF37]/20 hover:bg-[#D4AF37] hover:text-[#0D2D1D] flex items-center justify-center transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-extrabold text-[#D4AF37] tracking-wide uppercase border-b border-[#D4AF37]/20 pb-2">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Beranda Utama</span>
                </Link>
              </li>
              <li>
                <Link href="/profil" className="hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Profil & Visi Misi</span>
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Program Unggulan Tahfidz</span>
                </Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Berita & Pengumuman</span>
                </Link>
              </li>
              <li>
                <Link href="/staff" className="hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Direktori Guru & Staff</span>
                </Link>
              </li>
              <li>
                <Link href="/siswa" className="hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Ekstrakurikuler & Siswa</span>
                </Link>
              </li>
              <li>
                <Link href="/ppdb" className="hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors font-bold text-[#D4AF37]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Pendaftaran PPDB Online</span>
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors text-xs text-slate-400 pt-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Portal Login Pengelola</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-base font-extrabold text-[#D4AF37] tracking-wide uppercase border-b border-[#D4AF37]/20 pb-2">
              Kontak & Lokasi
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{info.address}, {info.district}, {info.regency}, {info.province} ({info.postalCode})</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Telp: {info.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{info.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{info.operatingHours}</span>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${info.whatsapp}?text=Halo%20Admin%20SMP%20Empat%20Lima%202%20Kedungpring`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full bg-[#153D29] hover:bg-[#1B4D35] text-white font-bold text-xs transition-colors border border-[#D4AF37]/30"
                >
                  <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                  <span>Hubungi Admin via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 SMP &quot;Empat Lima&quot; 2 Kedungpring. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Yayasan Pendidikan Ma&apos;arif Empat Lima Kalen Kedungpring</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
