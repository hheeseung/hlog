## 캐러셀(Carousel)이란?

캐러셀이란 원래 회전목마란 뜻이다. 이걸 UI/UX 용어로 바꾸면 반복해서 돌아가는 이미지나 콘텐츠를 말한다고 한다. 내 블로그에선 어떻게 적용될 것이냐 - 캐러셀 요소를 활용해 홈 화면 하단에 featured로 표시되지 않은 포스트의 목록을 보여줄 것이다.

## 캐러셀 라이브러리를 활용해보자

직접 구현하는 방법도 있지만, 현재 나의 큰 목적은 하나의 블로그라는 플랫폼을 만드는 것이기 때문에 좀 쉬운 길을 택했다. [React Multi Carousel](https://www.npmjs.com/package/react-multi-carousel)이라는 라이브러리를 활용했는데, 현재까지도 주간 다운로드 20만회 이상 되고 있는 라이브러리이다.

사용 방법은 어렵지 않다. [공식 문서](https://github.com/YIZHUANG/react-multi-carousel)에 따르면, 라이브러리 설치 후 <Carousel>이라는 컴포넌트 안에 캐러셀로 보여줄 목록을 집어 넣기만 하면 된다. 그런데 저번 포스트에서도 설명했듯이, 인터랙티브한 상호작용이 있는 라이브러리이므로 클라이언트 컴포넌트로 써야 한다. 그래서 featured 되지 않은 목록을 불러온 뒤 그 데이터를 클라이언트 컴포넌트로 전달해 해당 라이브러리를 쓰도록 구조를 잡고, <CarouselList>라는 컴포넌트를 만들어 그 안에서 <Carousel> 컴포넌트를 쓰도록 하였다. 다만 주의할 것은, 클라이언트 컴포넌트를 사용할 땐 꼭 상단에 `use client`를 선언해줘야 한다는 점!

```typescript
// NonFeaturedPostsList.tsx
import { getNonFeaturedPosts } from '@/service/posts';
import PostCard from './PostCard';
import CarouselList from './CarouselList';

export default async function NonFeaturedPostsList() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className='p-4 my-3 xl:p-0'>
      <h2 className='text-2xl font-bold'>You May Like</h2>
      <CarouselList>
        {posts.map(({ path, title, description, date, category }) => (
          <PostCard key={path} title={title} description={description} date={date} category={category} path={path} />
        ))}
      </CarouselList>
    </section>
  );
}
```

```typescript
// CarouselList.tsx
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
```

이제 다음과 같이 멋진 캐러셀 목록이 만들어졌다.

![carousel](/images/posts/lets-make-blog-02/carousel.png)
