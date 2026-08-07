import type { Metadata } from 'next';
import { newsData, schoolInfo } from '@/data/schoolData';
import BeritaDetailClient from '@/components/berita/BeritaDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const article = newsData.find((n) => n.slug === slug);

  if (!article) {
    return {
      title: `Artikel Tidak Ditemukan - ${schoolInfo.shortName}`,
      description: schoolInfo.tagline,
    };
  }

  const imageUrl = article.image.startsWith('http')
    ? article.image
    : `${process.env.NEXT_PUBLIC_APP_URL || 'https://smp452kedungpring.sch.id'}${article.image}`;

  return {
    title: `${article.title} | ${schoolInfo.shortName}`,
    description: article.summary,
    keywords: article.tags?.join(', '),
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://smp452kedungpring.sch.id'}/berita/${article.slug}`,
      siteName: schoolInfo.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'id_ID',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
      images: [imageUrl],
    },
  };
}

export default async function BeritaDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <BeritaDetailClient slug={resolvedParams.slug} />;
}
