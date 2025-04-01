import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const pretendard = localFont({
  src: '../static/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '하희승 | 성장하는 개발자',
  description: '꾸준히 상향곡선을 그리기 위해 노력하는 개발자입니다.',
  openGraph: {
    title: '하희승 | 성장하는 개발자',
    description: '꾸준히 상향곡선을 그리기 위해 노력하는 개발자입니다.',
    images: [
      {
        url: 'https://velog.velcdn.com/images/hheeseung/post/f583192e-761b-44c7-9ddb-6ca108c81f0f/image.jpeg',
        width: 800,
        height: 400,
      },
      {
        url: 'https://velog.velcdn.com/images/hheeseung/post/f583192e-761b-44c7-9ddb-6ca108c81f0f/image.jpeg',
        width: 1200,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${pretendard.className} max-w-4xl mx-auto flex flex-col h-screen antialiased`}>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
