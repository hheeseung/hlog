import Image from 'next/image';
import Avatar from '../../public/images/avatar.jpeg';

export default function Hero() {
  return (
    <section className='my-10 text-center'>
      <Image
        src={Avatar}
        alt='avatar'
        width={200}
        height={200}
        className='mx-auto mb-3 rounded-full shadow-lg'
        priority
      />
      <h2 className='text-xl font-semibold'>Heeseung Ha</h2>
      <p>기록은 나의 힘!</p>
    </section>
  );
}
