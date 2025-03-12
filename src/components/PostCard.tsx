import Image from 'next/image';

interface Card {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
}

export default function PostCard({ title, description, date, category, path }: Card) {
  return (
    <article className='w-full rounded-lg shadow-md'>
      <Image
        src={`/images/posts/${path}.png`}
        width={300}
        height={170}
        priority
        alt='thumbnail'
        className='w-full rounded-t-lg'
      />
      <div className='px-2 py-4 text-center'>
        <p className='text-xs text-gray-700'>{date}</p>
        <div className='my-1'>
          <h4 className='font-bold text-lg'>{title}</h4>
          <p className='text-sm truncate'>{description}</p>
        </div>
        <p className='text-xs bg-green-100 w-fit mx-auto px-1 rounded-md'>{category}</p>
      </div>
    </article>
  );
}
