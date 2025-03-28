'use client';
import React, { useState, useEffect, MouseEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { IoIosArrowDown } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa6';

export interface CategoryProps {
  categories: string[];
  selected: string;
  setSelected: (category: string) => void;
}

export default function Categories({ categories, selected, setSelected }: CategoryProps) {
  const pathname = usePathname();
  const router = useRouter();
  const currentPath = pathname.split('/')[2];
  const [isOpen, setIsOpen] = useState(false);

  const onDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const onCategoryClick = (e: MouseEvent<HTMLButtonElement>, category: string) => {
    e.preventDefault();
    setSelected(category);
    setIsOpen(!isOpen);
    router.push(`/posts/${category}`);
  };

  useEffect(() => {
    setSelected(currentPath);
  }, [currentPath, setSelected]);

  return (
    <nav className='mb-4 font-medium'>
      <button
        className='flex items-center justify-between w-48 px-3 py-2 text-left border rounded-lg'
        onClick={onDropdownClick}
      >
        <span>{selected}</span>
        <IoIosArrowDown />
      </button>
      <div
        className={`${
          !isOpen && 'border-none'
        } mt-2 flex flex-col w-48 border rounded-lg absolute z-10 bg-white items-start`}
      >
        {isOpen &&
          categories.map((category) => (
            <button
              onClick={(e) => onCategoryClick(e, category)}
              className='flex items-center justify-between w-full px-4 py-2 text-left hover:bg-sky-100 hover:rounded-lg'
              key={category}
            >
              <span>{category}</span>
              {currentPath === category.toLowerCase() && <FaCheck />}
            </button>
          ))}
      </div>
    </nav>
  );
}
