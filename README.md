## 블로그 프로젝트

### 📚 프로젝트 소개

Next.js로 만든 세상에 하나뿐인 나만의 블로그입니다.

### 배포 링크

https://hlog-chi.vercel.app/

### 📅 개발 기간

> 2025.03.10 ~ 2025.04.01

### ⚒️ 사용 기술

✅ Frontend: `Next.js` `TypeScript` `Tailwind CSS`
✅ Deploy: `Vercel`

### 📁 폴더 구조

```
📂 src/
┣ 📂 components/        # UI 컴포넌트
┣ 📂 app/               # Next.js 페이지 라우트
  ┗ posts
    ┗ [category]
      ┗ page.tsx
      ┗ [slug]
        ┗ page.tsx
    ┗ page.tsx
┣ 📂 public/            # 정적 파일 (이미지)
┣ 📂 data/
  ┗ posts               # 블로그 포스팅
  ┗ posts.json          # 포스팅 목록
┣ 📂 service/           # 데이터 처리
┣ 📂 static/            # 적용 폰트
┗ 📄 README.md
```

### ⚙️ 기능 소개

#### 📌 캐러셀 형식의 포스트 목록

- 최신 블로그 글을 슬라이더 형식으로 볼 수 있습니다.
- React-Multi-Carousel 라이브러리를 사용하여 구현하였습니다.

#### 📌 카테고리별 포스트 목록 필터링

- 특정 카테고리를 클릭하면 해당 카테고리에 해당하는 게시물만 보여집니다.

#### 📌 마크다운 형식 적용

- `react-markdown`을 활용하여 Markdown 형식의 글을 지원합니다.
- 코드 블록에는 `react-syntax-highlighter`를 적용하여 가독성을 높였습니다.
