---
title: Gatsby v3に移行しました
date: 2021-05-04T21:00:00+09:00
update: 2021-05-04T21:00:00+09:00
description: 遅ればせながらこのサイトをGatsby v3に移行しました。
category: Dev
tags: [Gatsby, TypeScript]
image: ./gatsby-v3.png
---

このサイトは Gatsby という静的サイトジェネレータで作っています。
Gatsby は2021年3月に v3.0 がリリースされているので、遅ればせながらこのサイトを Gatsby v3 に移行しました。

基本的に公式の移行ガイドを参考に行います。
[Migrating from v2 to v3 \| Gatsby](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#yarn)

## Version差分

下記コマンドで古いパッケージをリスト表示出来ます。

```shell
$ yarn outdated
```

```shell
Package                          Current Wanted  Latest  Package Type    URL
@emotion/core                    10.1.1  10.1.1  11.0.0  dependencies    https://github.com/emotion-js/emotion/tree/master/removed-packages/core
@emotion/styled                  10.0.27 10.0.27 11.3.0  dependencies    https://github.com/emotion-js/emotion/tree/main/packages/styled
@types/react-helmet              6.1.0   6.1.1   6.1.1   dependencies    https://github.com/DefinitelyTyped/DefinitelyTyped.git
@types/yup                       0.29.10 0.29.11 0.29.11 dependencies    https://github.com/DefinitelyTyped/DefinitelyTyped.git
@typescript-eslint/eslint-plugin 4.9.1   4.22.0  4.22.0  devDependencies https://github.com/typescript-eslint/typescript-eslint#readme
@typescript-eslint/parser        4.9.1   4.22.0  4.22.0  devDependencies https://github.com/typescript-eslint/typescript-eslint#readme
axios                            0.21.0  0.21.1  0.21.1  dependencies    https://github.com/axios/axios
emotion-theming                  10.0.27 10.0.27 11.0.0  dependencies    https://emotion.sh
eslint                           7.15.0  7.25.0  7.25.0  devDependencies https://eslint.org
eslint-config-prettier           6.15.0  6.15.0  8.3.0   devDependencies https://github.com/prettier/eslint-config-prettier#readme
eslint-plugin-flowtype           5.2.0   5.7.2   5.7.2   devDependencies https://github.com/gajus/eslint-plugin-flowtype#readme
eslint-plugin-prettier           3.2.0   3.4.0   3.4.0   devDependencies https://github.com/prettier/eslint-plugin-prettier#readme
eslint-plugin-react              7.21.5  7.23.2  7.23.2  devDependencies https://github.com/yannickcr/eslint-plugin-react
formik                           2.2.5   2.2.6   2.2.6   dependencies    https://formik.org
gatsby                           2.28.1  2.32.12 3.4.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme
gatsby-image                     2.7.0   2.11.0  3.4.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image#readme
gatsby-plugin-emotion            4.5.0   4.5.0   6.4.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-emotion#readme
gatsby-plugin-eslint             2.0.8   2.0.8   3.0.0   devDependencies https://github.com/mongkuen/gatsby-plugin-eslint
gatsby-plugin-feed               2.9.0   2.13.1  3.4.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-feed#readme
gatsby-plugin-google-analytics   2.7.0   2.11.0  3.4.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics#readme
gatsby-plugin-manifest           2.8.0   2.12.1  3.4.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest#readme
gatsby-plugin-offline            3.6.0   3.10.2  4.4.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-offline#readme
gatsby-plugin-react-helmet       3.6.0   3.10.0  4.4.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet#readme
gatsby-plugin-sharp              2.10.1  2.14.3  3.4.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp#readme
gatsby-plugin-sitemap            2.8.0   2.12.0  4.0.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sitemap#readme
gatsby-plugin-typegen            2.2.1   2.2.4   2.2.4   dependencies    https://www.gatsbyjs.org/packages/gatsby-plugin-typegen/
gatsby-plugin-typescript         2.8.0   2.12.1  3.4.0   devDependencies https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-typescript#readme
gatsby-remark-copy-linked-files  2.6.0   2.10.0  4.1.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-copy-linked-files#readme
gatsby-remark-images             3.7.0   3.11.1  5.1.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images#readme
gatsby-remark-prismjs            3.9.0   3.13.0  5.1.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs#readme
gatsby-remark-responsive-iframe  2.7.0   2.11.0  4.1.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-responsive-iframe#readme
gatsby-remark-smartypants        2.6.0   2.10.0  4.1.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-smartypants#readme
gatsby-source-filesystem         2.7.0   2.11.1  3.4.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem#readme
gatsby-transformer-remark        2.12.0  2.16.1  4.1.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark#readme
gatsby-transformer-sharp         2.8.0   2.12.1  3.4.0   dependencies    https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-sharp#readme
moment-timezone                  0.5.32  0.5.33  0.5.33  dependencies    http://momentjs.com/timezone/
prismjs                          1.22.0  1.23.0  1.23.0  dependencies    https://github.com/PrismJS/prism#readme
react                            16.14.0 16.14.0 17.0.2  dependencies    https://reactjs.org/
react-dom                        16.14.0 16.14.0 17.0.2  dependencies    https://reactjs.org/
react-share                      4.3.1   4.4.0   4.4.0   dependencies    https://github.com/nygardk/react-share#readme
typescript                       4.1.2   4.2.4   4.2.4   devDependencies https://www.typescriptlang.org/
yup                              0.32.6  0.32.9  0.32.9  dependencies    https://github.com/jquense/yup
```

とりあえず全部 Latest にしました。
下記コマンドでリスト化しつつアップデートするパッケージを選択できるので便利。

```shell
$ yarn upgrade-interactive --latest
```

## エラーつぶし

Latest にするだけだとエラーだらけなので、一つずつ潰していきます。

### gatsby-image を gatsby-plugin-image に移行

公式の移行ガイドを参考に
[Migrate](https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/#how-to-migrate)

パッケージをインストール

```shell
$ yarn add gatsby-plugin-image gatsby-plugin-sharp gatsby-transformer-sharp
```

gatsby-config.jsを修正

```js
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
```

移行用のコマンドが用意されているので実行。

```shell
$ npx gatsby-codemods gatsby-plugin-image
```

基本的にこれでエラーが出なくなればそれで問題ないと思いますが、自分の場合は TypeScript のエラーが出ていたので対処。

```text
Property 'fluid' does not exist on type 'Pick<ImageSharp, "gatsbyImageData">'.
```

```tsx
+ import { getSrc } from 'gatsby-plugin-image';
// 中略
      <SEO
-         image={
-           post?.frontmatter?.image?.childImageSharp?.fluid
-             ?.src
-         }
+         // @ts-ignore
+         image={getSrc(post?.frontmatter?.image)}
      />
```

はい。`@ts-ignore`でエラー無視しましたw
`getSrc`を使って画像のsrcは取得出来るようでしたが、この引数の部分で再びTypeScriptエラー。

```text
Argument of type 'Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, "gatsbyImageData">>; }>' is not assignable to parameter of type 'ImageDataLike'.
  Type 'undefined' is not assignable to type 'ImageDataLike'.
```

ここは`gatsby-plugin-typegen`が型を自動生成してくれてる部分なので v3 対応してくれるまで待ちます。

## emotion 関係

CSS in JS ライブラリですね

### @emotion/core が @emotion/react に統合

まずはパッケージの加除

```shell
$ yarn remove @emotion/core
$ yarn add @emotion/react
```

コードの修正

```tsx
- import { Global } from '@emotion/core';
+ import { Global } from '@emotion/react';
```

```tsx
- import { css } from '@emotion/core';
+ import { css } from '@emotion/react';
```

### emotion-theming が @emotion/react に統合され、Theme の型定義がシンプルに行えるように

更新前は styled コンポーネント内で`props.theme`を使う場合 props が暗黙の any になってしまうのを防ぐために、
emotion の styled をラップしたコンポーネントを使って型定義を行っていましたが、更新後は型定義ファイルを作るだけで事足りるようになっていました。
[Emotion \- TypeScript](https://emotion.netlify.app/docs/typescript#define-a-theme)

まずはパッケージの削除。（@emotion/react は install 済み）

```shell
$ yarn remove emotion-theming
```

src/types に emotion.d.ts を追加。

```tsx
import '@emotion/react'
import { Theme as MyTheme} from './index'

declare module '@emotion/react' {
  export interface Theme extends MyTheme {}
}
```

ソースコードの修正。

```tsx
- import { ThemeProvider as EmotionProvider } from 'emotion-theming';
+ import { ThemeProvider as EmotionProvider } from '@emotion/react';
```

```tsx
- import styled from '../atoms/styled';
+ import styled from '@emotion/styled';
```

src/components/atoms/styled.tsx が emotion の styled をラップしているコンポーネントで最早不要なため削除。

## eslint-config-prettier 関係

v8.0.0 で全ての設定が prettier に統合されているみたい。

```text
Error: "prettier/@typescript-eslint" has been merged into "prettier" in eslint-config-prettier 8.0.0.
Error: "prettier/react" has been merged into "prettier" in eslint-config-prettier 8.0.0.
```

eslintrc.js の修正。

```js
const path = require('path');
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    `eslint-config-react-app`,
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
-   'prettier/@typescript-eslint',
-   'prettier/react',
+   'prettier',
  ],
  // 中略
};
```

これで全てのエラーを潰しました。

## 最後に

Gatsby v3 に無事移行できました。
途中からは Gatsby v3 への移行というより、他のパッケージの更新に伴うエラーつぶしでしたがw

v3 での新機能は主に大規模サイトでのローカル開発の高速化やビルド時間の短縮、パフォーマンス改善のようですが、基本的にメリットしかなさそうなので移行できて良かったです。
