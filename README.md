## こんにちは！
-「Next.js + TypeScript + microCMS Jamstack ブログサイト」の練習リポジトリになります。
- フォークすればそのままつかえます

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 簡単ではありますがSEO設定できます
- metatagを編集される場合は、`src/components/seohead.tsx` より編集ください。
- デフォルトURLを`NEXT_PUBLIC_`プレフィックスを付けて環境変数に入れてますので、`.env.local`を作成してください。
```
const siteUrl = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}`
# or
const siteUrl = "https://example.com"
``` 

## Next.jsの公式ドキュメントは以下より参照ください
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## VercelにDeployしよう
- Deployの仕方について、下記のZennで記事を書いていますので参考にして下さい
- [Next.js + Typescriptでサイトを作る(初心者編)](https://zenn.dev/msk1206/articles/dba565eb3985b4)
