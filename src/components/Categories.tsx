import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

interface Props {
  categories: string[];
  selected: string;
  setSelected: (category: string) => void;
}

export default function Categories({ categories, selected, setSelected }: Props) {
  const pathname = usePathname();
  const currentPath = pathname.split('/')[2];

  useEffect(() => {
    setSelected(currentPath);
  }, [currentPath, setSelected]);

  return (
    <>
      <nav className='flex items-center gap-5 mb-5 font-semibold'>
        {categories.map((category, index) => (
          <Link
            href={`/posts/${category.toLowerCase()}`}
            className={`${
              category.toLowerCase() === selected && 'bg-sky-500 text-white'
            } px-2 py-1 cursor-pointer hover:bg-sky-100 hover:text-sky-500 rounded-md hover:rounded-md hover:transition-all`}
            key={index}
          >
            {category}
          </Link>
        ))}
      </nav>
      <nav></nav>
    </>
  );
}
