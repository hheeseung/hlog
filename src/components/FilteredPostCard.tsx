import { Post } from '@/service/posts';
import React from 'react';
import PostCard from './PostCard';

export default function FilteredPostCard({ posts }: { posts: Post[] }) {
  return (
    <section className='grid w-full gap-3 mb-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
      {posts.map(({ path, title, description, date, category }) => (
        <PostCard key={path} title={title} description={description} date={date} category={category} path={path} />
      ))}
    </section>
  );
}
