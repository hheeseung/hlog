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
    openGraph: {
      title: `${category} | 하희승의 개발로그`,
      description: category,
      siteName: 'Hlog',
      images: [
        {
          url: 'https://velog.velcdn.com/images/hheeseung/post/f583192e-761b-44c7-9ddb-6ca108c81f0f/image.jpeg',
          width: 800,
          height: 400,
        },
        {
          url: 'https://velog.velcdn.com/images/hheeseung/post/f583192e-761b-44c7-9ddb-6ca108c81f0f/image.jpeg',
          width: 1200,
          height: 600,
        },
      ],
      type: 'website',
    },
  };
}

export default async function CategoryPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilteredPostsList categories={categories} posts={posts} />;
}
