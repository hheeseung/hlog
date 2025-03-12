import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='flex justify-center items-center py-2 border-t border-gray-200'>
      <Link target='blank' href='https://github.com/hheeseung'>
        <FaGithub className='text-2xl text-slate-600' />
      </Link>
    </footer>
  );
}
