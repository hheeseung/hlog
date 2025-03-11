import FeaturedPostsList from '@/components/FeaturedPostsList';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <h2 className='font-bold text-xl'>Featured Posts</h2>
      <FeaturedPostsList />
    </div>
  );
}
