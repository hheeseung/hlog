import Image from 'next/image';
import Link from 'next/link';
import { IoCalendarOutline } from 'react-icons/io5';

interface Card {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
}

export default function PostCard({ title, description, date, category, path }: Card) {
  return (
    <article className='w-full rounded-lg shadow-md hover:shadow-xl hover:transition-shadow'>
      <Link href={`/posts/${category}/${path}`}>
        <Image
          src={`/images/thumbnails/${path}.png`}
          width={300}
          height={170}
          priority
          alt='thumbnail'
          className='w-full rounded-t-lg'
        />
        <div className='px-2 py-4 text-center'>
          <p className='flex items-center justify-center text-xs text-gray-700'>
            <IoCalendarOutline className='mr-1' />
            <span>{date}</span>
          </p>
          <div className='my-1'>
            <h4 className='text-lg font-bold'>{title}</h4>
            <p className='text-sm truncate'>{description}</p>
          </div>
          <p className='px-1 mx-auto text-xs bg-green-100 rounded-md w-fit'>{category}</p>
        </div>
      </Link>
    </article>
  );
}
