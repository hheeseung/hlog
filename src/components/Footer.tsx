import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='py-2 border-t border-gray-200'>
      <Link target='blank' href='https://github.com/hheeseung'>
        <FaGithub className='mx-auto text-2xl text-slate-600' />
      </Link>
    </footer>
  );
}
