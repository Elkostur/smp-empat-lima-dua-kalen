import { HeroSlider } from '@/components/home/HeroSlider';
import { PrincipalGreeting } from '@/components/home/PrincipalGreeting';
import { StatsCounter } from '@/components/home/StatsCounter';
import { FeaturedPrograms } from '@/components/home/FeaturedPrograms';
import { LatestNewsSection } from '@/components/home/LatestNewsSection';
import { AgendaSection } from '@/components/home/AgendaSection';
import { GalleryPreviewSection } from '@/components/home/GalleryPreviewSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { PpdbBanner } from '@/components/home/PpdbBanner';
import { SchoolSchema } from '@/components/common/SEO';

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
