import FeaturedPostsList from '@/components/FeaturedPostsList';
import Hero from '@/components/Hero';
import NonFeaturedPostsList from '@/components/NonFeaturedPostsList';

export default function Home() {
  return (
    <section>
      <Hero />
      <FeaturedPostsList />
      <NonFeaturedPostsList />
    </section>
  );
}
