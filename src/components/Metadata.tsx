'use client';
import { PostDetail } from '@/service/posts';
import { IoCalendarOutline } from 'react-icons/io5';

interface Props {
  post: PostDetail;
}

export default function Metadata({ post }: Props) {
  return (
    <div className='flex flex-col md:flex-row justify-between mt-4 align-top *:px-4'>
      <div className='space-y-2'>
        <h1 className='text-2xl font-bold xl:text-4xl'>{post.title}</h1>
        <p className='font-semibold border-b-2 xl:text-lg border-sky-500 w-fit'>{post.description}</p>
      </div>
      <p className='flex items-center gap-1 mt-2 text-sm xl:mt-0 h-fit'>
        <IoCalendarOutline />
        <span>{post.date}</span>
      </p>
    </div>
  );
}
