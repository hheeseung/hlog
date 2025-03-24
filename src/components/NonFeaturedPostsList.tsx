import 'react-multi-carousel/lib/styles.css';
import { getNonFeaturedPosts } from '@/service/posts';
import PostCard from './PostCard';
import CarouselList from './CarouselList';

export default async function NonFeaturedPostsList() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className='p-2 my-3 xl:p-0'>
      <h2 className='text-2xl font-bold'>You May Like</h2>
      <CarouselList>
        {posts.map(({ path, title, description, date, category }) => (
          <PostCard key={path} title={title} description={description} date={date} category={category} path={path} />
        ))}
      </CarouselList>
    </section>
  );
}
