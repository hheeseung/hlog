import MarkdownContent from '@/components/MarkdownContent';
import { getDetailPost } from '@/service/posts';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getDetailPost(slug);

  return (
    <section className='p-2 lg:p-0'>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <MarkdownContent post={post} />
    </section>
  );
}
