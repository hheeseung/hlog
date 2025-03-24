import MarkdownContent from '@/components/MarkdownContent';
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
        className='object-cover w-full h-36 xl:h-96 rounded-t-md'
        priority
      />
      <div className='flex flex-col xl:flex-row justify-between mt-4 align-top *:px-4'>
        <div className='space-y-2'>
          <h1 className='text-4xl font-bold'>{post.title}</h1>
          <p className='text-lg font-semibold border-b-2 border-sky-500 w-fit'>{post.description}</p>
        </div>
        <p className='mt-2 xl:mt-0'>{post.date}</p>
      </div>
      <MarkdownContent post={post} />
    </section>
  );
}
