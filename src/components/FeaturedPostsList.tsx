import { getFeaturedPosts } from '@/service/posts';
import PostCard from './PostCard';

export default async function FeaturedPostsList() {
  const posts = await getFeaturedPosts();

  return (
    <>
      <h2 className='font-bold text-xl'>Featured Posts</h2>
      <section className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-3 mb-10'>
        {posts.map(({ path, title, description, date, category }) => (
          <PostCard key={path} title={title} description={description} date={date} category={category} path={path} />
        ))}
      </section>
    </>
  );
}
