## SEO란?

> SEO는 검색엔진 최적화의 줄임말로, 검색엔진이 콘텐츠를 이해하도록 돕고, 사용자가 사이트를 찾고, 검색엔진을 통해 사이트를 방문할지 여부를 결정하도록 돕습니다.
> _(출처: [구글 검색 센터](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko))_

즉, SEO는 사이트 검색 결과에 잘 노출될 수 있도록 해주는 역할을 한다. SEO 최적화를 위해서 할 수 있는 방법으로는 다음과 같은 것들이 있다.

- 사이트맵 생성
- 정적 HTML 최적화
- 이미지 프리로딩
- 개인화된 콘텐츠를 위한 `meta` 태그 생성
- 서버 사이드 렌더링

이번 포스팅에서는 `meta` 태그를 동적으로 생성하는 방법을 사용해 SEO를 높이는 방법을 작성해 볼 예정이다.

## meta 태그는 왜 쓰는가?

Next.js의 렌더링 방식인 서버 사이드 렌더링은 서버에서 렌더링을 하여 화면을 보여준다. 이때 HTML로 구조가 잡히기 때문에, `head` 태그에 들어가는 `meta` 태그는 검색엔진과 소셜 미디어 크롤러가 쉽게 읽을 수 있도록 하는 역할을 한다. 이는 페이지를 더 잘 인식할 수 있도록 도와주며, 소셜 미디어 등에서 공유될 때 미리보기 정보가 제대로 표시되도록 한다.

### 정적 meta 태그 생성

처음엔 `layout`에서 정적으로 `meta` 태그를 생성해주었다.

```typescript
export const metadata: Metadata = {
  title: '하희승 | 성장하는 개발자',
  description: '꾸준히 상향곡선을 그리기 위해 노력하는 개발자입니다.',
};
```

이렇게 생성한 태그는 모든 페이지에서 보여지게 된다. 하지만 모든 포스팅에 같은 제목과 설명을 달아두는 것보다 포스팅마다 그에 맞는 주제와 설명을 다는 것이 SEO에 더 도움이 될 것이다.

### 동적 meta 태그 생성

`meta` 태그를 동적으로 생성하려면 `generateMetadata` 함수를 이용한다. 13버전에서는 params에 Promise 타입을 따로 지정해주지 않았던 걸로 기억하는데, 15버전에서는 params를 사용할 때 Promise 타입을 꼭 명시해줘야 한다.

```typescript
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getDetailPost(slug);
  return {
    title: `${post.title} | 하희승의 개발로그`,
    description: post.description,
    category: post.category,
  };
}
```

현재 포스팅의 경로의 params를 받아와서 `meta` 태그의 title, description, category에 각각 값을 넣어준다. 그럼 다음과 같이 `meta` 태그에 값이 넣어지는 것을 볼 수 있다.

![metadata](/images/posts/lets-make-blog-04/metadata.png)
