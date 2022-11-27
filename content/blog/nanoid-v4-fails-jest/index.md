---
title: nanoid v4 をインストールしたら jest が通らなくなったので対応した
date: 2022-11-27T23:00:00+09:00
update: 2020-12-27T23:00:00+09:00
description: nanoid v4 をインストールしたら jest が通らなくなったので対応した
category: Dev
tags: [jest]
image: ./thumbnail.jpg
---

最近、プロダクトに nanoid を新規インストールすることがあったのですが、その際に nanoid を使っている部分の jest のテストが落ちるようになってしまったため対応しました。

------

## バージョンとエラーメッセージ

インストールした nanoid のバージョンは現時点で最新の v4 です。

```
"nanoid": "4.0.0",
"jest": "29.3.1",
"esbuild": "0.15.14",
"esbuild-jest": "0.5.0",
```

エラーメッセージ（一部抜粋）

```shell
SyntaxError: Unexpected token 'export'
```

## 原因

調べてみたところ、

- nanoid は v4 で CJS をサポートしなくなり、ESM のみサポートするようになった
- jest は Node で動いているため ESM は CJS にトランスパイルしないと動かない
- デフォルトでは node_modules 配下のファイルはトランスパイルされない

ということのようで、nanoid が ESM のまま読み込まれてしまっていることが原因でした。

## 対応

対応案としては、

1. CJS をサポートしている nanoid v3 にダウングレードして使う
2. nanoid をトランスパイルするように設定変更する

を考えました。

あまり過去のバージョンに固定するライブラリは増やしたくないため、2 の「 nanoid をトランスパイルするように設定変更する」の方向で対応することにしました。

## jest の設定変更

`transformIgnorePatterns:` で、トランスパイル対象から除外されている `node_modules` 配下のファイルのうち nanoid のみトランスパイルされるように変更します

```js:title=jest.config.js
modules.exports = {
  // 無関係のその他の設定は割愛
  transform: {
    '^.+\\.(j|t)sx?$': 'esbuild-jest', // js ファイルもトランスパイルの対象にしておく
   },
  transformIgnorePatterns: [`node_modules/(?!nanoid/)`], // nanoid をトランスパイルする
}
```

`transform` については、このプロダクトが TypeScript のみで書かれていたため js ファイルも対象に含め直す必要がありましたが、元々 js ファイルが対象になっていれば変更する必要はありません。

これで jest が通るようになりました。

ちなみに同じように CJS 対応していないライブラリが他にも出てきた場合は以下のように記述することで対応できます。


```js:title=jest.config.js
modules.exports = {
  // 無関係のその他の設定は割愛
  transform: {
    '^.+\\.(j|t)sx?$': 'esbuild-jest',
  },
  transformIgnorePatterns: [`node_modules/(?!(nanoid|hoge)/)`], // hoge もトランスパイルする
}
```

## 参考

https://zenn.dev/t_yng/scraps/d701cdae1071fd

https://github.com/ai/nanoid/issues/365