---
title: 'GITHUB_TOKEN によってトリガーされたイベントでは他のワークフローが走らない仕様'
date: 2024-07-11T23:00:00+09:00
update: 2024-07-11T23:00:00+09:00
category: Dev
tags: [GitHub Actions]
image: ./thumbnail.png
---

プロダクトで dependabot によるライブラリ更新を `GITHUB_TOKEN` を使ってオートマージしていたのだけど、ベースブランチで CI が走らなかった。

気になって調べてみるとそういう仕様らしい。\
再帰実行されるのを防ぐためとのこと。

> When you use the repository's GITHUB_TOKEN to perform tasks, events triggered by the GITHUB_TOKEN, with the exception of workflow_dispatch and repository_dispatch, will not create a new workflow run. This prevents you from accidentally creating recursive workflow runs. For example, if a workflow run pushes code using the repository's GITHUB_TOKEN, a new workflow will not run even when the repository contains a workflow configured to run when push events occur.

https://docs.github.com/en/actions/security-guides/automatic-token-authentication

対応策としては `GITHUB_TOKEN` の代わりに

- Personal Access Token
- GitHub App から生成したトークン

を使用すれば良い。

Personal Access Token は個人アカウントから発行するもので使用は避けたかったので、GitHub App から生成したトークンを使用する方法を選んだ。

具体的な手順はこちらの記事が詳しい。\
https://blog.smartbank.co.jp/entry/2023/02/16/dependabot-auto-merge-with-github-app

今後もオートマージ以外でも `GITHUB_TOKEN` を使うと走らせたいワークフローが走らないケースはありそうなので覚えておこう。
