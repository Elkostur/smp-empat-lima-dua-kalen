import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://smp-empat-lima-dua-kalen.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/login',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
