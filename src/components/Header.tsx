'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='flex items-center justify-between p-4 xl:px-0'>
      <h1 className='text-3xl font-bold'>
        <Link href='/'>HLog</Link>
      </h1>
      <ul className='flex items-center space-x-4 text-lg justify-evenly'>
        <Link href='/' className={`${pathname === '/' && 'font-bold text-sky-500'}`}>
          Home
        </Link>
        <Link href='/posts/All' className={`${pathname.includes('/posts') && 'font-bold text-sky-500'}`}>
          Posts
        </Link>
      </ul>
    </header>
  );
}
