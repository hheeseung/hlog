import 'react-multi-carousel/lib/styles.css';
import { getNonFeaturedPosts } from '@/service/posts';
import PostCard from './PostCard';
import CarouselList from './CarouselList';

export default async function NonFeaturedPostsList() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className='my-3'>
      <h2 className='font-bold text-xl'>You May Like</h2>
      <CarouselList>
        {posts.map(({ path, title, description, date, category }) => (
          <PostCard key={path} title={title} description={description} date={date} category={category} path={path} />
        ))}
      </CarouselList>
    </section>
  );
}
