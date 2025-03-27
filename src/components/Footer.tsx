import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center pb-10 space-y-2'>
      <Link target='blank' href='https://github.com/hheeseung'>
        <FaGithub className='text-2xl text-slate-600' />
      </Link>
      <p>
        <span className='font-semibold'>&copy; Heeseung Ha</span> All Rights Reserved.
      </p>
    </footer>
  );
}
