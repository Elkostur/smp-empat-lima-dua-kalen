import { MetadataRoute } from 'next';
import { newsData } from '@/data/schoolData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://smp-empat-lima-dua-kalen.vercel.app';

  const staticRoutes = [
    '',
    '/profil',
    '/program',
    '/berita',
    '/galeri',
    '/staff',
    '/siswa',
    '/ppdb',
    '/login',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const newsRoutes = newsData.map((article) => ({
    url: `${baseUrl}/berita/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes];
}
