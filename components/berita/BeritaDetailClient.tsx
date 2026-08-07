'use client';

import React, { useState } from 'react';
import { BlurImage } from '@/components/common/BlurImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/layout/PageHeader';
import {
  Calendar,
  User,
  ArrowLeft,
  Tag,
  Share2,
  Copy,
  Check,
  AlignJustify,
  AlignLeft,
  Type,
  BookOpen,
  Search,
  Sparkles,
  PhoneCall,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { useAdminDataStore } from '@/lib/adminStore';

interface BeritaDetailClientProps {
  slug: string;
}

export default function BeritaDetailClient({ slug }: BeritaDetailClientProps) {
  const { news: newsList } = useAdminDataStore();

  const [fontSize, setFontSize] = useState<'normal' | 'medium' | 'large'>('normal');
  const [textAlign, setTextAlign] = useState<'justify' | 'left'>('justify');
  const [copied, setCopied] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState('');

  const article = newsList.find((n) => n.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedNews = newsList.filter((n) => n.id !== article.id).slice(0, 3);
  const recentNews = newsList.filter((n) => n.id !== article.id).slice(0, 5);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareTitle = encodeURIComponent(article.title);
  const currentUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'medium':
        return 'text-base md:text-lg';
      case 'large':
        return 'text-lg md:text-xl';
      default:
        return 'text-sm md:text-base';
    }
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <PageHeader
        title={article.title}
        subtitle={`${article.category} • Dipublikasikan pada ${article.date}`}
        badge={article.category}
        breadcrumbs={[
          { label: 'Berita', href: '/berita' },
          { label: 'Detail Artikel' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Navigation & Toolbar Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-xs font-bold text-school-green-800 hover:text-school-green-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm transition-all hover:bg-emerald-50 self-start"
          >
            <ArrowLeft className="w-4 h-4 text-school-green-700" />
            <span>Kembali ke Daftar Berita</span>
          </Link>

          {/* Reader Preferences Bar */}
          <div className="flex items-center gap-2 flex-wrap text-xs bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-slate-400 font-medium px-2 flex items-center gap-1">
              <Type className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ukuran Teks:</span>
            </span>

            <button
              onClick={() => setFontSize('normal')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                fontSize === 'normal'
                  ? 'bg-school-green-800 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Ukuran Standar"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('medium')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                fontSize === 'medium'
                  ? 'bg-school-green-800 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Ukuran Sedang"
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                fontSize === 'large'
                  ? 'bg-school-green-800 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Ukuran Besar"
            >
              A++
            </button>

            <div className="h-4 w-px bg-slate-200 mx-1" />

            <button
              onClick={() => setTextAlign('justify')}
              className={`p-1.5 rounded-lg font-bold transition-all flex items-center gap-1 ${
                textAlign === 'justify'
                  ? 'bg-school-green-800 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Format Rata Kanan-Kiri (Justify)"
            >
              <AlignJustify className="w-4 h-4" />
              <span className="hidden md:inline">Rata Kiri-Kanan</span>
            </button>
            <button
              onClick={() => setTextAlign('left')}
              className={`p-1.5 rounded-lg font-bold transition-all flex items-center gap-1 ${
                textAlign === 'left'
                  ? 'bg-school-green-800 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Format Rata Kiri"
            >
              <AlignLeft className="w-4 h-4" />
              <span className="hidden md:inline">Rata Kiri</span>
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Article Main Column (8 Cols) */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-8">
            {/* Title & Metadata Banner */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 border border-emerald-300">
                  {article.category}
                </span>
                {article.featured && (
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Berita Utama</span>
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">
                {article.title}
              </h1>

              {/* Author & Publication Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-2 font-bold text-slate-900">
                    <User className="w-4 h-4 text-school-green-700" />
                    <span>{article.author}</span>
                    <span className="text-slate-400 font-normal">({article.authorRole})</span>
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1.5 font-medium text-slate-700">
                    <Calendar className="w-4 h-4 text-school-green-700" />
                    <span>{article.date}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 px-2.5 py-1 bg-amber-100 text-amber-900 font-bold rounded-lg text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span>Est. {article.readTime} baca</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Hero Banner Image */}
            <div className="relative h-72 sm:h-96 md:h-[420px] w-full rounded-2xl overflow-hidden shadow-sm bg-slate-100 group border border-slate-200">
              <BlurImage
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-medium backdrop-blur-md bg-slate-900/60 px-3.5 py-1.5 rounded-xl border border-white/20 line-clamp-1">
                Dokumentasi Kegiatan: {article.title}
              </div>
            </div>

            {/* Summary Highlights Quote Box */}
            {article.summary && (
              <div className="p-5 rounded-2xl bg-emerald-50/70 border-l-4 border-school-green-700 text-slate-800 text-sm md:text-base font-semibold leading-relaxed shadow-sm">
                <p className="italic text-slate-700">&ldquo;{article.summary}&rdquo;</p>
              </div>
            )}

            {/* Rich Formatted Body Paragraphs */}
            <div
              className={`prose prose-slate max-w-none text-slate-800 transition-all duration-200 ${getFontSizeClass()} ${
                textAlign === 'justify' ? 'text-justify' : 'text-left'
              } [&_p]:mb-6 [&_p]:leading-relaxed md:[&_p]:leading-loose [&_h2]:text-xl [&_h2]:font-black [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:mb-6 [&_blockquote]:border-l-4 [&_blockquote]:border-school-gold-400 [&_blockquote]:bg-amber-50/60 [&_blockquote]:p-4 [&_blockquote]:rounded-r-xl [&_blockquote]:italic [&_blockquote]:my-6 [&_strong]:font-extrabold [&_strong]:text-slate-900 [&_li]:text-slate-700`}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Social Share Bar */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-school-green-700" />
                <span className="text-xs font-extrabold text-slate-800">Bagikan Berita Ini:</span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={`https://wa.me/?text=${shareTitle}%20${currentUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Facebook</span>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${currentUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>X (Twitter)</span>
                </a>
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Salin Tautan</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Tags / Tagar Berita Section */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-school-green-700" />
                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Tagar &amp; Topik Terkait:
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {article.tags && article.tags.length > 0 ? (
                  article.tags.map((tag, idx) => (
                    <Link
                      key={idx}
                      href={`/berita?search=${encodeURIComponent(tag)}`}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-900 rounded-xl text-xs font-extrabold transition-all border border-slate-200/80 hover:border-emerald-300 flex items-center gap-1 group shadow-2xs"
                    >
                      <span className="text-school-green-700 group-hover:scale-110 transition-transform">#</span>
                      <span>{tag}</span>
                    </Link>
                  ))
                ) : (
                  <span className="text-xs text-slate-400 font-medium">#InformasiSekolah #SMP45_2Kedungpring</span>
                )}
              </div>

              {/* Admin Tip Box */}
              <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-[11px] text-amber-900 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Tip Pengelola Website:</strong> Tagar di atas dapat disesuaikan dan ditambahkan secara kustom melalui{' '}
                  <Link href="/admin" className="underline font-bold text-amber-950 hover:text-school-green-800">
                    Dashboard Admin &rarr; Kelola Berita
                  </Link>.
                </p>
              </div>
            </div>

            {/* Author Profile Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-slate-900 text-white space-y-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-school-gold-400" />
                  <span className="font-extrabold text-sm">{article.author}</span>
                </div>
                <p className="text-xs text-emerald-100/80">
                  {article.authorRole} • Publikasi Resmi SMP &quot;Empat Lima&quot; 2 Kedungpring
                </p>
              </div>
              <Link
                href="/ppdb"
                className="px-4 py-2 rounded-xl bg-school-gold-400 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-sm whitespace-nowrap self-stretch sm:self-auto text-center"
              >
                Pendaftaran PPDB &rarr;
              </Link>
            </div>
          </article>

          {/* Sticky Sidebar Right Column (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Search Box */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Search className="w-4 h-4 text-school-green-700" />
                <span>Cari Berita Lainnya</span>
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ketik kata kunci..."
                  value={sidebarSearch}
                  onChange={(e) => setSidebarSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-school-green-700 bg-slate-50"
                />
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
              {sidebarSearch && (
                <Link
                  href={`/berita?search=${encodeURIComponent(sidebarSearch)}`}
                  className="block text-center py-2 bg-school-green-800 text-white rounded-xl text-xs font-bold hover:bg-school-green-900 transition-colors"
                >
                  Cari &quot;{sidebarSearch}&quot;
                </Link>
              )}
            </div>

            {/* PPDB Banner CTA Widget */}
            <div className="bg-gradient-to-br from-school-green-900 via-emerald-900 to-slate-900 text-white p-6 rounded-3xl border border-emerald-700/50 shadow-md space-y-4">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-[#D4AF37] text-slate-950 uppercase tracking-wider">
                Pendaftaran T.A. 2027/2028
              </span>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-white leading-tight">
                  Penerimaan Peserta Didik Baru (PPDB)
                </h3>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  Bebas biaya pendaftaran &amp; gratis seragam sekolah untuk pendaftar awal.
                </p>
              </div>
              <Link
                href="/ppdb"
                className="w-full py-2.5 rounded-xl bg-white text-school-green-900 hover:bg-emerald-50 font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-colors"
              >
                <span>Daftar PPDB Online Sekarang</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>

            {/* Popular & Recent News Widget */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-3">
                <BookOpen className="w-4 h-4 text-school-green-700" />
                <span>Berita &amp; Informasi Terbaru</span>
              </h3>

              <div className="space-y-3.5">
                {recentNews.map((item) => (
                  <Link
                    key={item.id}
                    href={`/berita/${item.slug}`}
                    className="flex items-start gap-3 group p-2 rounded-2xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                      <BlurImage
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-black text-school-green-700 uppercase">
                        {item.category}
                      </span>
                      <h4 className="text-xs font-extrabold text-slate-900 line-clamp-2 leading-snug group-hover:text-school-green-800">
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-medium block">
                        {item.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Secretariat & Contact Quick Info Card */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm space-y-3 text-xs">
              <h3 className="font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <PhoneCall className="w-4 h-4 text-school-green-700" />
                <span>Layanan Informasi Sekolah</span>
              </h3>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Ada pertanyaan seputar berita, agenda, atau pendaftaran PPDB? Hubungi Sekretariat SMP Empat Lima 2 Kedungpring.
              </p>
              <a
                href="https://wa.me/6285748366488?text=Halo%20Panitia%20SMP%2045%202%20Kedungpring,%20saya%20ingin%20bertanya%20mengenai..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold flex items-center justify-center gap-2 shadow-sm transition-colors text-xs"
              >
                <span>💬 Konsultasi via WhatsApp</span>
              </a>
            </div>
          </aside>
        </div>

        {/* Bottom Related Articles Cards */}
        <div className="mt-16 pt-12 border-t-2 border-slate-200/80 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-school-green-700" />
              <span>Berita Terkait Lainnya</span>
            </h3>
            <Link
              href="/berita"
              className="text-xs font-extrabold text-school-green-800 hover:text-school-green-900 underline"
            >
              Lihat Semua Berita &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedNews.map((rel) => (
              <div
                key={rel.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 p-3.5 space-y-3 group shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative h-36 w-full rounded-xl overflow-hidden bg-slate-100">
                    <BlurImage
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-900">
                    {rel.category}
                  </span>
                  <h4 className="text-xs font-extrabold text-slate-900 line-clamp-2 leading-snug group-hover:text-school-green-800">
                    <Link href={`/berita/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                  <span>{rel.date}</span>
                  <Link
                    href={`/berita/${rel.slug}`}
                    className="font-bold text-school-green-800 hover:underline"
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
