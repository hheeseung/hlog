import MarkdownContent from '@/components/MarkdownContent';
import Metadata from '@/components/Metadata';
import { getDetailPost } from '@/service/posts';
import Image from 'next/image';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getDetailPost(slug);
  return {
    title: `${post.title} | 하희승의 개발로그`,
    description: post.description,
    category: post.category,
    post,
  };
}

export default async function PostPage({ params }: Props) {
  const metadata = await generateMetadata({ params });
  const post = metadata.post;

  return (
    <section className='mx-4 mb-10 rounded-md shadow-md xl:mx-0'>
      <Image
        src={`/images/thumbnails/${post.path}.png`}
        width={1280}
        height={960}
        alt={post.path}
        className='object-cover w-full h-full xl:h-96 rounded-t-md'
        priority
      />
      <Metadata post={post} />
      <MarkdownContent post={post} />
    </section>
  );
}
