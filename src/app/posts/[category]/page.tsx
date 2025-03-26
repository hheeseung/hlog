import FilteredPostsList from '@/components/FilteredPostsList';
import { getAllPosts } from '@/service/posts';
import React from 'react';

export default async function CategoryPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilteredPostsList categories={categories} posts={posts} />;
}
