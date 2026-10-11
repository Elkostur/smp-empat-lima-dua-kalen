'use client';

import React from 'react';
import { BlurImage } from '@/components/common/BlurImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/layout/PageHeader';
import { ArticleBody } from '@/components/berita/ArticleBody';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { useAdminDataStore } from '@/lib/adminStore';
import { sortNewsByDateDesc } from '@/lib/utils';

interface BeritaDetailClientProps {
  slug: string;
}

export default function BeritaDetailClient({ slug }: BeritaDetailClientProps) {
  const { news: newsList } = useAdminDataStore();
  const sortedNews = sortNewsByDateDesc(newsList);

  const article = sortedNews.find((n) => n.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedNews = sortedNews
    .filter((n) => n.id !== article.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white pb-20">
      <PageHeader
        title={article.title}
        subtitle={`${article.category} • Dipublikasikan pada ${article.date}`}
        badge={article.category}
        breadcrumbs={[
          { label: 'Berita', href: '/berita' },
          { label: 'Detail Artikel' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link
          href="/berita"
          className="inline-flex items-center gap-2 text-xs font-bold text-school-green-700 hover:text-school-green-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Berita</span>
        </Link>

        {/* Featured Image with BlurImage */}
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md mb-8 bg-slate-100">
          <BlurImage
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Meta Author */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 mb-8 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-semibold text-slate-800">
              <User className="w-4 h-4 text-school-green-700" />
              <span>{article.author} ({article.authorRole})</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-school-green-700" />
              <span>{article.date}</span>
            </span>
          </div>

          <span className="px-2.5 py-1 bg-school-gold-100 text-school-gold-600 font-bold rounded">
            {article.readTime} membaca
          </span>
        </div>

        {/* Article Body Content */}
        <ArticleBody content={article.content} />

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-slate-400 shrink-0" />
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t-2 border-slate-100 space-y-6">
          <h3 className="text-xl font-extrabold text-slate-900">
            Berita Terkait Lainnya
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedNews.map((rel) => (
              <div
                key={rel.id}
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 p-3 space-y-2 group"
              >
                <div className="relative h-32 w-full rounded-lg overflow-hidden bg-slate-200">
                  <BlurImage
                    src={rel.imageUrl}
                    alt={rel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-[10px] font-bold text-school-gold-600 uppercase">
                  {rel.category}
                </span>
                <h4 className="text-xs font-extrabold text-slate-900 line-clamp-2 group-hover:text-school-green-700">
                  <Link href={`/berita/${rel.slug}`}>{rel.title}</Link>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
