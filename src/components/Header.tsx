'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='flex justify-between items-center py-2'>
      <h1 className='font-bold text-2xl'>
        <Link href='/'>HLog</Link>
      </h1>
      <ul className='flex items-center justify-evenly space-x-4'>
        <Link href='/' className={`${pathname === '/' && 'font-bold text-sky-500'}`}>
          Home
        </Link>
        <Link href='/posts' className={`${pathname === '/posts' && 'font-bold text-sky-500'}`}>
          Posts
        </Link>
      </ul>
    </header>
  );
}
