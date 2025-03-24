/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-children-prop */
'use client';
import { PostDetail } from '@/service/posts';
import React from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

interface Props {
  post: PostDetail;
}

export default function MarkdownContent({ post }: Props) {
  return (
    <article className='prose-base prose-headings:font-bold prose-code:rounded-md prose-code:px-1 prose-code:bg-neutral-200 prose-blockquote:border-l-4 prose-a:underline prose-li:list-disc'>
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
                style={oneDark}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
          img: ({ ...props }) => (
            <img style={{ width: '70%', height: 'auto', margin: '0 auto' }} {...props} alt={`${post.path}`} />
          ),
        }}
      />
    </article>
  );
}
