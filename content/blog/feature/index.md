---
title: Markdown表現集
date: 2015-05-28T22:40:32+09:00
description: Markdown表現集です。
category: dev
image: ./thumbnail.jpg
---

Markdown表現集です。

------
### 見出し

```
## Heading2
### Heading3
#### Heading4
##### Heading5
```
## Heading2
### Heading3
#### Heading4
##### Heading5

------
### リスト
```
- Sample text
- Sample text
- Sample text
  - Sample text
  - Sample text
```
- Sample text
- Sample text
- Sample text
  - Sample text
  - Sample text

```
1. Sample text
2. Sample text
3. Sample text
4. Sample text
5. Sample text
```
1. Sample text
2. Sample text
3. Sample text
4. Sample text
5. Sample text

------
### インラインテキスト装飾
```
*イタリック*
**太字**
~~打ち消し線~~
インラインで`code`を挿入する
こちらは[僕のTwitterのリンク](https://twitter.com/catnose99)
```

*イタリック*

**太字**

~~打ち消し線~~

インラインで`code`を挿入する

こちらは[僕のTwitterのリンク](https://twitter.com/catnose99)です。

------
### テーブル
```
| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |
```

| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |

-----
### コード

<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">```css
  body {
    color: red;
  }
```
</code></pre></div>

```css:title=style.css
  body {
    color: red;
  }
```


-----
### 画像
```
![sampleAlt](./image.jpg)
```

![sampleAlt](./image.jpg)

画像ファイルは投稿のindex.mdと同フォルダ内に配置する
#### 画像のサイズ調整
```
[[imageMedium]]
| ![alt](./image.jpg)

[[imageSmall]]
| ![alt](./image.jpg)
```
[[imageMedium]]
| ![alt](./image.jpg)

[[imageSmall]]
| ![alt](./image.jpg)

-----
### ボックス

```
[[simple | Hello ]]
| Some note here

[[info | Memo]]
| Some note here

[[notice | Note]]
| Some note here

[[alert | 🙅 Danger! ]]
| - You can also use lists
| - like this

```

[[simple | Hello ]]
| Some note here

[[info | Memo]]
| Some note here

[[notice | Note]]
| Some note here

[[alert | 🙅 Danger! ]]
| - You can also use lists
| - like this


-----
### 水平線

```
-----
```
