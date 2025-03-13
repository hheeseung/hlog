import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='flex justify-between items-center py-2'>
      <h1 className='font-bold text-2xl'>
        <Link href='/'>HLog</Link>
      </h1>
      <ul className='flex items-center justify-evenly space-x-4'>
        <Link href='/'>Home</Link>
        <Link href='/posts'>Posts</Link>
      </ul>
    </header>
  );
}
