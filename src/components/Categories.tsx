import React from 'react';

interface Props {
  categories: string[];
  selected: string;
  setSelected: (category: string) => void;
}

export default function Categories({ categories, selected, setSelected }: Props) {
  return (
    <nav className='w-1/4 flex flex-col text-lg'>
      <h2 className='font-bold border-b-2 mb-2 border-sky-500 w-fit mx-auto'>Category</h2>
      {categories.map((category, index) => (
        <button
          className={`${category === selected && 'font-bold text-sky-500'} cursor-pointer hover:text-sky-500`}
          onClick={() => setSelected(category)}
          key={index}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}
