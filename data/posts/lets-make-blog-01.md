## 포스트 목록 불러오기

블로그 포스트 목록은 json 파일의 정보를 받아오는 방식으로 불러오려고 한다. 그러려면 json이 저장된 위치의 로컬 파일을 읽어와야 한다. 여기서 node 지식이 조금 필요한데, 일단 현재 경로를 불러오고 그 뒤에 json이 저장된 위치를 정확하게 지정하여 json 파일을 읽어올 수 있다.

## 파일과 관련된 처리를 하는 fs 모듈

`fs`는 File System이며, 이 모듈을 통해서 파일을 읽거나 쓸 수 있다. 포스트 목록은 로컬 파일로 저장되어 있기 때문에 현재 경로에서 맞는 위치를 불러와야 하므로 `fs` 모듈의 readFile을 사용하여 파일을 불러오도록 해야 한다. 현재 포스트 목록이 담긴 파일의 위치는 다음과 같이 되어 있다.

![folder structure](/images/posts/lets-make-blog-01/folder-structure.png)

이때 내 상대경로가 아닌 절대경로를 써서 어느 위치에서든 파일 목록을 읽어올 수 있도록 하는 `cwd`를 사용했다.

```typescript
const data = await fs.readFile(path.join(process.cwd(), 'data', 'posts.json'), 'utf-8');
const posts: Post[] = JSON.parse(data);
return posts;
```

그리고 내부 시스템에서 쓸 수 있도록 JSON을 js 오브젝트 형식으로 파싱해주는 과정을 꼭 거치도록 한다.

## 불러온 목록을 화면에 가져와보자

### 서버 컴포넌트와 클라이언트 컴포넌트

Next.js 13버전 이상부터는 컴포넌트가 서버 컴포넌트와 클라이언트 컴포넌트로 나뉜다. 각각 용도가 다른데, 이 용도는 공식 문서에서 확인할 수 있다.

![components](/images/posts/lets-make-blog-01/components.png)

데이터 페칭이나 백엔드 리소스 접근 등 서버와 관련된 무언가를 할 때는 서버 컴포넌트를 쓰고, 리액트에서 쓰던 상태나 훅, 이벤트와 관련된 동작이 있을 경우 클라이언트 컴포넌트를 사용해야 한다.

현재는 서버에서 불러온 포스트 목록을 가져오는 역할만 하므로 서버 컴포넌트로 데이터를 불러오도록 한다. Next.js는 디폴트가 서버 컴포넌트이므로 별도의 선언 없이 그냥 바로 쓰고자 하는 함수를 갖다 쓰기만 하면 된다. 그리고 불러온 데이터를 활용해 CSS로 잘 꾸며주면 다음과 같은 예쁜 목록이 불러와지는 것을 볼 수 있다.

![post lists](/images/posts/lets-make-blog-01/post-list.png)
