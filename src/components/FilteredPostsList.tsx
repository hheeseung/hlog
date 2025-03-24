'use client';

import { Post } from '@/service/posts';
import React, { useState } from 'react';
import Categories from './Categories';
import FilteredPostCard from './FilteredPostCard';

interface Props {
  categories: string[];
  posts: Post[];
}

const ALL_POSTS = 'all';

export default function FilteredPostsList({ categories, posts }: Props) {
  const category = [ALL_POSTS, ...categories];
  const [selected, setSelected] = useState(ALL_POSTS);

  const filtered = selected === ALL_POSTS ? posts : posts.filter((post) => post.category === selected);

  return (
    <section className='flex p-2 my-3 xl:p-0'>
      <FilteredPostCard posts={filtered} />
      <Categories categories={category} selected={selected} setSelected={setSelected} />
    </section>
  );
}
