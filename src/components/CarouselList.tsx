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
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel itemClass='mr-3 my-3' responsive={responsive} infinite={true}>
      {children}
    </Carousel>
  );
}
