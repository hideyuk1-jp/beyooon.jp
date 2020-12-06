---
title: Markdownチートシート
date: 2020-12-06T17:40:32+09:00
update: 2020-12-06T17:40:32+09:00
description: 自分用のMarkdownチートシート。
category: Dev
tags: [Markdown]
image: ./thumbnail.jpg
---

自分用のMarkdownチートシートです。
アイキャッチ画像は適当。

------

## 見出し

```text
## 見出し h2
### 見出し h3
#### 見出し h4
```

## 見出し h2

### 見出し h3

#### 見出し h4

h5以降はスタイルを設定していないので使わない。

------

## リスト

```text
- 普通のリスト
- 普通のリスト
- 普通のリスト
  - 普通のリスト
  - 普通のリスト
```

- 普通のリスト
- 普通のリスト
- 普通のリスト
  - 普通のリスト
  - 普通のリスト

```text
1. 数字のリスト
2. 数字のリスト
3. 数字のリスト
4. 数字のリスト
5. 数字のリスト
```

1. 数字のリスト
2. 数字のリスト
3. 数字のリスト
4. 数字のリスト
5. 数字のリスト

------

## インラインテキスト装飾

```text
*イタリック*になる
**太字**になる
~~打ち消し線~~
インラインで`code`を挿入する
[Twitter](https://twitter.com/hideyuk1_jp)
```

*イタリック*になる

**太字**になる

~~打ち消し線~~

インラインで`code`を挿入する

[Twitter](https://twitter.com/hideyuk1_jp)

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

<div class="gatsby-highlight" data-language="text">
<pre class="language-text">
<code class="language-text">
```js:title=hoge.js
const hoge = 'hoge';
console.log(hoge);
```
</code>
</pre>
</div>

```js:title=hoge.js
const hoge = 'hoge';
console.log(hoge);
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
