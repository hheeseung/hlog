'use client';
import { PostDetail } from '@/service/posts';
import React from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

interface Props {
  post: PostDetail;
}

export default function MarkdownContent({ post }: Props) {
  return (
    <article className='p-4 prose-base prose-headings:font-bold prose-blockquote:border-l-4 prose-blockquote:border-l-sky-500 prose-blockquote:bg-neutral-50 prose-blockquote:p-2 prose-a:underline prose-a:text-sky-500 prose-li:list-disc'>
      <Markdown
        remarkPlugins={[remarkGfm]}
        children={post.content}
        components={{
          code(props: any) {
            const { children, className, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag='div'
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={oneLight}
              />
            ) : (
              <code {...rest} className={`px-1 bg-sky-100 text-red-500 rounded-md ${className || ''}`}>
                {children}
              </code>
            );
          },
          img: ({ ...props }) => <img className='w-full mx-auto rounded-md xl:w-3/4' {...props} alt={`${post.path}`} />,
        }}
      />
    </article>
  );
}
