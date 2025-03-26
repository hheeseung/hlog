import MarkdownContent from '@/components/MarkdownContent';
import Metadata from '@/components/Metadata';
import { getDetailPost } from '@/service/posts';
import Image from 'next/image';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getDetailPost(slug);

  return (
    <section className='mx-2 mb-10 rounded-md shadow-md xl:mx-0'>
      <Image
        src={`/images/posts/${slug}.png`}
        width={1280}
        height={960}
        alt={slug}
        className='object-cover w-full h-full xl:h-96 rounded-t-md'
        priority
      />
      <Metadata post={post} />
      <MarkdownContent post={post} />
    </section>
  );
}
