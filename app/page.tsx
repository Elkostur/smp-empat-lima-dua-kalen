import dynamic from 'next/dynamic';
import { HeroSlider } from '@/components/home/HeroSlider';
import { PrincipalGreeting } from '@/components/home/PrincipalGreeting';
import { SchoolSchema } from '@/components/common/SEO';

const StatsCounter = dynamic(() => import('@/components/home/StatsCounter').then((m) => m.StatsCounter));
const FeaturedPrograms = dynamic(() => import('@/components/home/FeaturedPrograms').then((m) => m.FeaturedPrograms));
const LatestNewsSection = dynamic(() => import('@/components/home/LatestNewsSection').then((m) => m.LatestNewsSection));
const AgendaSection = dynamic(() => import('@/components/home/AgendaSection').then((m) => m.AgendaSection));
const GalleryPreviewSection = dynamic(() => import('@/components/home/GalleryPreviewSection').then((m) => m.GalleryPreviewSection));
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection').then((m) => m.TestimonialsSection));
const PpdbBanner = dynamic(() => import('@/components/home/PpdbBanner').then((m) => m.PpdbBanner));

export default function HomePage() {
  return (
    <>
      <SchoolSchema />
      <HeroSlider />
      <PrincipalGreeting />
      <StatsCounter />
      <FeaturedPrograms />
      <LatestNewsSection />
      <AgendaSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <PpdbBanner />
    </>
  );
}
