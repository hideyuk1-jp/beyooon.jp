---
title: hideyuk1.dev
startDate: 2020-02-01T00:00:00+09:00
endDate: 2020-02-02T00:00:00+09:00
category: Webサイト制作
skills: [TypeScript, React, Next.js, Material-UI, AWS CodePipeline, AWS S3, AWS CloudFront]
description: 東京での転職を始める際に作成した個人のポートフォリオサイト兼ブログです。
image: ./hideyuk1.dev.png
link: https://hideyuk1.dev
---

東京での転職を始める際に作成した個人のポートフォリオサイト兼ブログです。

ちなみにコロナウイルスの影響もあり、東京での転職は断念しました。

## やっていること

元々は個人サイトをWordPressで作成していましたが、Next.jsを使ったサーバレスの静的サイトとして新たに作り直しました。

やっていることは以下の通りです。

- React / Next.js / TypeScriptで静的サイト出力
- UIライブラリにMaterial UI
- ブログ記事はMDXを利用（MarkdownにJSXが書ける）してGit管理
- お問い合わせフォームはAPI Gateway / Lambda / SESのサーバレス構成でメールが届くように設定
- S3でホスティング、キャッシュサーバーにCloudFront
- Route53でドメイン管理し、CloudFrontにルーティング
- ACMでSSL/TLS証明書発行、https化
- GitHubに変更があると、自動的にCodePipelineでビルド・デプロイされるように設定
