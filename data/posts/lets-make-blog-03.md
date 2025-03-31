## 카테고리 추출하기

예를 들어, 포스트가 5개 있다고 치자. 이때 포스트의 카테고리는 각각 project, frontend, backend, backend, project 이런 식으로 있다. 이제 저 안에서 중복을 제거해 카테고리들이 하나씩만 깔끔하게 보여지도록 해야 한다.

### Set의 특징

> _[Set](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set) 객체는 값의 컬렉션입니다. Set의 값은 한 번만 나타날 수 있으며, Set의 컬렉션에서는 고유한 값입니다. Set의 요소를 삽입 순서대로 순회할 수 있습니다. 삽입 순서는 각 요소가 add() 메서드에 의해 Set에 성공적으로 삽입된 순서(즉, add()가 호출될 때 이미 Set에 동일한 요소가 없는 경우)에 해당합니다._

MDN의 설명에 따르면 `Set`은 값이 한 번만 나타날 수 있다고 했다. 그러니 받아온 포스팅 전체 카테고리의 중복을 `Set`을 이용해서 제거한다.

```typescript
const posts = await getAllPosts();
const categories = [...new Set(posts.map((post) => post.category))];
```

중복된 카테고리 목록을 하나로 깔끔하게 제거해 이제 카테고리가 하나씩만 보여지게 되었다!

## 필터링을 적용해보자

이제 선택된 것에 따라 그 카테고리에 해당하는 목록을 보여줘야 한다. 현재 `categories`는 배열의 형태를 받아오므로, `filter` 메서드를 사용해서 선택된 카테고리가 무엇인지에 따라 목록을 달리 보여준다.

```typescript
const filtered = selected === ALL_POSTS ? posts : posts.filter((post) => post.category === selected);
```

`selected`는 선택된 카테고리를 나타내는 state이며, 클릭할 때마다 selected의 상태가 클릭된 카테고리로 변경되도록 한다.

### 카테고리 목록 UI에 대한 고민

원래는 카테고리 목록을 아래와 같이 오른쪽에 보여주도록 하였다.

![ui-before](/images/posts/lets-make-blog-03/ui-before.png)

이게 웹에서는 깔끔하고 예뻐보였는데, 모바일 화면에서는 화면 비율 때문에 그렇게 편하지 않았다. 그래서 아예 모바일을 위한 드롭다운 목록을 구현했는데, 막상 적용해보니 웹 화면에서도 훨씬 깔끔하다고 생각되어 UI를 아예 변경했다.

![ui-after](/images/posts/lets-make-blog-03/ui-after.png)

### 드롭다운 방식으로 바꾸자 나타난 문제

처음에는 Link 태그를 써서 카테고리 라우팅을 한 다음 onClick 이벤트를 추가해 필터링된 카테고리를 보여주도록 했는데, 이렇게 하니까 보고자 하는 카테고리를 클릭했음에도 바로 필터링 된 포스트 목록이 나타나지 않는 문제가 있었다. 이 문제는 Link 태그의 동작 방식과 `setState`의 동작 방식을 변경하여 해결할 수 있었다.

### 문제의 원인을 들여다보자

검색해보니 Link 태그는 클라이언트 사이드 네비게이션이라고 해서 페이지 전체를 로드하는 게 아닌 필요한 부분만 업데이트를 한 후에 URL을 변경한다. SPA 동작 방식과 유사하다. 또한 내가 onClick 이벤트에 걸어두었던 `setState`는 비동기적으로 동작을 하기 때문에, Link 태그를 클릭하면 라우팅은 변경되지만 UI에서는 카테고리의 상태가 바로 업데이트 되지 않는 것이었다.

### 그렇다면 useEffect를 통해 상태를 변경하자

`useEffect`는 컴포넌트가 렌더링 될 때 실행되는 훅이다. 컴포넌트가 화면에 나타날 때, 데이터가 변경될 때, 컴포넌트가 화면에서 사라질 때 특정 코드를 실행하기 위해 사용한다. 내 문제의 경우 라우팅은 되지만 카테고리가 변경이 되지 않기 때문에, 현재 pathname에 따라 `setState`를 변경해주는 로직을 추가해주었다.

```typescript
const pathname = usePathname();
const currentPath = pathname.split('/')[2];

useEffect(() => {
  setSelected(currentPath);
}, [currentPath, setSelected]);
```

이렇게 하자 이제 경로가 변경될 때마다 카테고리도 잘 필터링돼서 보여지게 되었다!
