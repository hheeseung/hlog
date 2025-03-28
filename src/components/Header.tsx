'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='flex items-center justify-start p-4 font-medium xl:px-0'>
      <ul className='flex items-center space-x-4 justify-evenly'>
        <Link href='/' className={`${pathname === '/' && 'border-b-sky-500 border-b-2'}`}>
          Home
        </Link>
        <Link href='/posts/all' className={`${pathname.includes('/posts') && 'border-b-sky-500 border-b-2'}`}>
          Posts
        </Link>
      </ul>
    </header>
  );
}
