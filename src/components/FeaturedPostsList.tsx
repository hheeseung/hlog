import { getFeaturedPosts } from '@/service/posts';
import PostCard from './PostCard';

export default async function FeaturedPostsList() {
  const posts = await getFeaturedPosts();

  return (
    <section className='p-2 my-3 xl:p-0'>
      <h2 className='text-2xl font-bold'>Featured Posts</h2>
      <section className='grid gap-4 mt-3 mb-10 xl:p-0 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {posts.map(({ path, title, description, date, category }) => (
          <PostCard key={path} title={title} description={description} date={date} category={category} path={path} />
        ))}
      </section>
    </section>
  );
}
