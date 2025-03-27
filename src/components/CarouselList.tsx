'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Props {
  children: React.ReactNode;
}

export default function CarouselList({ children }: Props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1280, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel itemClass='md:mr-2 mt-3 mb-10' responsive={responsive} infinite={true}>
      {children}
    </Carousel>
  );
}
