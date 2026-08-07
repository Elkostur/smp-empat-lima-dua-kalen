import BeritaDetailClient from '@/components/berita/BeritaDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BeritaDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <BeritaDetailClient slug={resolvedParams.slug} />;
}
