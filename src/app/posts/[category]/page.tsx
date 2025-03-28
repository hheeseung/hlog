import FilteredPostsList from '@/components/FilteredPostsList';
import { getAllPosts } from '@/service/posts';

interface Props {
  params: Promise<{ slug: string; category: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  return {
    title: `${category} | 하희승의 개발로그`,
    description: '나만의 고찰을 담았습니다.',
    category,
  };
}

export default async function CategoryPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilteredPostsList categories={categories} posts={posts} />;
}
