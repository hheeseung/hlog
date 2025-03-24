import React from 'react';

interface Props {
  categories: string[];
  selected: string;
  setSelected: (category: string) => void;
}

export default function Categories({ categories, selected, setSelected }: Props) {
  return (
    <nav className='flex flex-row items-center w-full gap-2 overflow-x-scroll xl:gap-0 xl:w-1/5 xl:flex-col'>
      <h2 className='hidden mx-auto mb-2 font-bold border-b-2 xl:block border-sky-500 w-fit'>Category</h2>
      {categories.map((category, index) => (
        <button
          className={`${
            category === selected && 'font-bold text-sky-500'
          } cursor-pointer hover:text-sky-500 py-2 xl:py-0`}
          onClick={() => setSelected(category)}
          key={index}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}
