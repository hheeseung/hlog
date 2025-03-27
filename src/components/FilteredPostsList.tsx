'use client';

import { Post } from '@/service/posts';
import React, { useState } from 'react';
import Categories from './Categories';
import FilteredPostCard from './FilteredPostCard';

interface Props {
  categories: string[];
  posts: Post[];
}

const ALL_POSTS = 'All';

export default function FilteredPostsList({ categories, posts }: Props) {
  const category = [ALL_POSTS, ...categories];
  const [selected, setSelected] = useState(ALL_POSTS);

  const filtered =
    selected === ALL_POSTS.toLowerCase()
      ? posts
      : posts.filter((post) => post.category.toLowerCase() === selected.toLowerCase());

  return (
    <section className='flex flex-col p-2 mt-3 mb-10 xl:p-0'>
      <Categories categories={category} selected={selected} setSelected={setSelected} />
      <FilteredPostCard posts={filtered} />
    </section>
  );
}
