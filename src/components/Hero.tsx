import Image from 'next/image';
import Avatar from '../../public/images/avatar.jpeg';

export default function Hero() {
  return (
    <div className='text-center my-5'>
      <Image src={Avatar} alt='avatar' width={200} height={200} className='mx-auto rounded-full shadow-lg mb-3' />
      <h2 className='font-semibold text-xl'>Heeseung Ha</h2>
      <p>기록은 나의 힘!</p>
    </div>
  );
}
