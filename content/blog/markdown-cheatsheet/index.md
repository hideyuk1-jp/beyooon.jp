---
title: Markdownチートシート
date: 2015-05-28T22:40:32+09:00
update: 2015-05-29T22:40:32+09:00
description: 自分用のMarkdownチートシート。
category: Dev
tags: [Markdown]
image: ./thumbnail.jpg
---

自分用のMarkdownチートシートです。

------

## 見出し

```text
## Heading2
### Heading3
#### Heading4
```

## Heading2

### Heading3

#### Heading4

h5以降はスタイルを設定していないので使わない。

------

## リスト

```text
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

```text
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

## インラインテキスト装飾

```text
*イタリック*
**太字**
~~打ち消し線~~
インラインで`code`を挿入する
こちらは[僕のTwitterのリンク](https://twitter.com/hideyuk1_jp)
```

*イタリック*

**太字**

~~打ち消し線~~

インラインで`code`を挿入する

こちらは[僕のTwitterのリンク](https://twitter.com/hideyuk1_jp)です。

------

## テーブル

```text
| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |
```

| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |

------

## コード

<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">```css:title=style.css
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

------

## 画像

```text
![sampleAlt](./thumbnail.jpg)
```

![sampleAlt](./thumbnail.jpg)

------

## 引用

```text
> 文頭に>を書くと引用になる
> 複数行にまたがる場合は、全ての行の文頭に>を書く
> > ネストも
> > 出来るよ
```

> 文頭に>を書くと引用になる
> 複数行にまたがる場合は、全ての行の文頭に>を書く
> > 入れ子にも
> > 出来るよ

------

## 水平線

```text
------
```

------
