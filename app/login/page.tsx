'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SchoolLogo } from '@/components/common/SchoolLogo';
import { PageHeader } from '@/components/layout/PageHeader';
import {
  Lock,
  UserCheck,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle,
  Key,
  LogOut,
  Sliders,
  FileEdit,
} from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'admin' | 'guru'>('admin');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/admin';
    }, 600);
  };

  const setDemoCredentials = (demoRole: 'admin' | 'guru') => {
    setRole(demoRole);
    if (demoRole === 'admin') {
      setUsername('admin.maarif');
      setPassword('smp452kedungpring');
    } else {
      setUsername('guru.masrukin');
      setPassword('guru12345');
    }
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <PageHeader
        title="Portal Login Pengelola Website"
        subtitle="Akses masuk khusus untuk Administrator Sekolah dan Dewan Guru pengelola konten berita & PPDB."
        badge="Autentikasi Pengelola"
        breadcrumbs={[{ label: 'Login' }]}
      />

      <div className="max-w-md mx-auto px-4 py-12">
        {!isLoggedIn ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2">
              <SchoolLogo size="lg" className="justify-center mb-2" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Login Portal Pengelola
              </h2>
              <p className="text-xs text-slate-500">
                SMP &quot;Empat Lima&quot; 2 Kedungpring
              </p>
            </div>

            {/* Quick Demo Fill Buttons */}
            <div className="p-3 bg-school-gold-50 rounded-2xl border border-school-gold-200 space-y-2 text-xs">
              <span className="font-extrabold text-school-gold-600 block">
                ⚡ Coba Demo Login UI:
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setDemoCredentials('admin')}
                  className="flex-1 py-2 px-2 bg-white rounded-lg border border-[#D4AF37] font-bold text-slate-800 hover:bg-[#D4AF37]/10 text-xs text-center leading-tight min-h-[36px]"
                >
                  Akun Admin
                </button>
                <button
                  type="button"
                  onClick={() => setDemoCredentials('guru')}
                  className="flex-1 py-2 px-2 bg-white rounded-lg border border-[#D4AF37] font-bold text-slate-800 hover:bg-[#D4AF37]/10 text-xs text-center leading-tight min-h-[36px]"
                >
                  Akun Guru
                </button>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Role Pengguna</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('admin')}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-colors text-center leading-tight min-h-[38px] flex items-center justify-center ${
                      role === 'admin'
                        ? 'bg-[#0D2D1D] text-[#D4AF37] border border-[#D4AF37]/40'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    Administrator
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('guru')}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-colors text-center leading-tight min-h-[38px] flex items-center justify-center ${
                      role === 'guru'
                        ? 'bg-[#0D2D1D] text-[#D4AF37] border border-[#D4AF37]/40'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    Guru / Pendidik
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Username / NIP *</label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan username atau NIP"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-school-green-700"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Kata Sandi *</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 pr-10 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-school-green-700"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-school-green-700 hover:bg-school-green-800 text-white font-extrabold rounded-xl text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Memverifikasi Hak Akses...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-school-gold-400" />
                    <span>Masuk ke Dashboard</span>
                  </>
                )}
              </button>
            </form>

            <div className="text-center text-[11px] text-slate-500 pt-2 border-t border-slate-100">
              <p>Mengalami kendala lupa sandi? Hubungi Tim IT / TU Sekolah.</p>
            </div>
          </div>
        ) : (
          /* Simulated Dashboard Preview */
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-6 text-center">
            <div className="w-16 h-16 bg-school-green-700 text-amber-300 rounded-full flex items-center justify-center mx-auto shadow-md">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="px-3 py-1 bg-school-gold-100 text-school-gold-600 font-extrabold text-xs uppercase rounded-full">
                Sesi Login Aktif
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                Selamat Datang, {username || 'Pengelola'}!
              </h3>
              <p className="text-xs text-slate-500">
                Hak Akses: <strong className="text-school-green-700 uppercase">{role}</strong>
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-3">
              <p className="font-bold text-slate-800">Akses Portal Pengelola Ditemukan:</p>
              <Link
                href="/admin"
                className="w-full p-3.5 bg-school-green-700 hover:bg-school-green-800 text-white rounded-xl font-extrabold text-xs shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Sliders className="w-4 h-4 text-school-gold-400" />
                <span>Buka Dashboard Admin CMS</span>
              </Link>
            </div>

            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-6 py-2.5 bg-red-50 text-red-700 hover:bg-red-100 font-bold text-xs rounded-xl flex items-center justify-center gap-2 mx-auto"
            >
              <LogOut className="w-4 h-4" />
              <span>Keluar dari Sesi</span>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
