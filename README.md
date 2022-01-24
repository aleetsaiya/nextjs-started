# Next.js
Next.js getting started 筆記
## 目錄

1. [Pages](#pages)
   + Dynamic Routes
   + Link
2. Pre-render


## Pages
在 `pages` folder 裡面的 React Component，會根據檔案名稱對應到 route，像是:

```jsx
// (網址) → 檔案位置 
/ → pages/index.js
/about → pages/about.js
/blog/hello-world → pages/blog/[slug].js
```
(被中括號括住的檔名可以使用 dynamic routes，底下介紹)

### Dynamic Routes
可以將檔案/資料夾名稱設定成像是 `[pid]` 這種用中括號包起來的檔案名稱，它會自動對應網址參數名稱
```js
// 在 post資料夾裡面的 [pid]資料夾裡面的 [comment].js
// post/[pid]/[comment].js
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  // 從網址參數中提取 pid 以及 comment   
  // 如果網址是 "/post/1/hello"，則 pid 為 1，comment 為 hello 
  const { pid, comment } = router.query;
  
  return (
    <p>
      Pid: {pid} Comment: {comment}
    </p>
  );
};

export default Post;

```
### Link
使用 `<Link/>` 來相連不同的 pages，像是底下建立一個 Home Pages 來連接各個其他的 pages

```js
import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        {/* pages/index.js */}
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home
```

## Pre-render
pre-render 所有的 pages，又可分為 `static generation` 以及 `server-side rendering`，為了更好的效能，官方推薦使用 static generation。
詳細: [link](https://nextjs.org/docs/basic-features/pages#pre-rendering)

continue : [link](https://nextjs.org/docs/basic-features/pages#static-generation-recommended)