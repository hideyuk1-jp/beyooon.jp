---
title: phpbrew のインストールでエラー
date: 2021-06-12T9:00:00+09:00
update: 2021-06-12T9:00:00+09:00
description: phpbrew のインストールでエラーになったためメモ書き。
category: Dev
tags: [phpbrew]
image: ./mistake.jpg
---

php の複数バージョンを切り替えたいと思い、phpbrew をインストールしようとした。

[公式](https://github.com/phpbrew/phpbrew)の手順通り進めたが、指定のバージョンの php をインストールするところでエラーになったのでメモ書き。

## 環境

```text
macOS 10.15.7
phpbrew 1.27.0
```

切り替え前の php のバージョン。

```shell
$ php -v
PHP 8.0.1 (cli) (built: Jan  7 2021 17:26:28) ( NTS )
Copyright (c) The PHP Group
Zend Engine v4.0.1, Copyright (c) Zend Technologies
    with Zend OPcache v8.0.1, Copyright (c), by Zend Technologies
```

## エラーメッセージ

```shell
$ phpbrew install 7.4.4 +default
===> phpbrew will now build 7.4.4
===> Loading and resolving variants...
Homebrew prefix "/usr/local/opt/libxml2" does not exist.
Homebrew prefix "/usr/local/opt/bzip2" does not exist.
Homebrew prefix "/usr/local/opt/mhash" does not exist.
Downloading https://www.php.net/distributions/php-7.4.4.tar.bz2 via curl extension
[==================================================================] 12.12/12.12MB 100%
===> Extracting /Users/hogehoge/.phpbrew/distfiles/php-7.4.4.tar.bz2 to /Users/hogehoge/.phpbrew/build/tmp.1623451524/php-7.4.4
===> Moving /Users/hogehoge/.phpbrew/build/tmp.1623451524/php-7.4.4 to /Users/hogehoge/.phpbrew/build/php-7.4.4
===> Checking patches...
Checking patch for replace apache php module name with custom version name
Checking patch for replace freetype-config with pkg-config on php older than 7.4
===> Configuring 7.4.4...


Use tail command to see what's going on:
   $ tail -F '/Users/hogehoge/.phpbrew/build/php-7.4.4/build.log'


Error: Configure failed:
The last 5 lines in the log file:
checking for ZLIB support... no

checking whether to enable bc style precision math functions... yes

checking for BZip2 support... yes

checking for BZip2 in default path... not found

configure: error: Please reinstall the BZip2 distribution

Please checkout the build log file for more details:
         tail /Users/hogehoge/.phpbrew/build/php-7.4.4/build.log
```

bzip2 のパスが見つからないことがエラーの原因のように見える。

また variants のロードで他に見つからないものもあるようなので、あわせてインストールするする必要がありそう。

```shell
Homebrew prefix "/usr/local/opt/libxml2" does not exist.
Homebrew prefix "/usr/local/opt/bzip2" does not exist.
Homebrew prefix "/usr/local/opt/mhash" does not exist.
```

## コマンド

見つからないものを homebrew でインストール。

```shell
$ brew install libxml2 bzip2 mhash
```

## インストール再チャレンジ

再度、php をインストール。

```shell
$ phpbrew install 7.4.4 +default
===> phpbrew will now build 7.4.4
===> Loading and resolving variants...
Checking distribution checksum...
Checksum matched: 308e8f4182ec8a2767b0b1b8e1e7c69fb149b37cfb98ee4a37475e082fa9829f
===> Distribution file was successfully extracted, skipping...
===> Checking patches...
Checking patch for replace apache php module name with custom version name
Checking patch for replace freetype-config with pkg-config on php older than 7.4
Found existing build.log, renaming it to /Users/hogehoge/.phpbrew/build/php-7.4.4/build.log.1623452001
===> Configuring 7.4.4...


Use tail command to see what's going on:
   $ tail -F '/Users/hogehoge/.phpbrew/build/php-7.4.4/build.log'


===> Checking patches...
Checking patch for php5.3.x on 64bit machine when intl is enabled.
Checking patch for openssl dso linking patch
2 changes patched.
Checking patch for php5.6 with openssl 1.1.x patch.
===> Building...
Build finished: 9.6 minutes.
Installing...
---> Creating php-fpm.conf
---> Creating php.ini
---> Copying /Users/hogehoge/.phpbrew/build/php-7.4.4/php.ini-development 
---> Found date.timezone is not set, patching...
Initializing pear config...
config-set succeeded
config-set succeeded
config-set succeeded
Enabling pear auto-discover...
config-set succeeded
Congratulations! Now you have PHP with 7.4.4 as php-7.4.4

* To configure your installed PHP further, you can edit the config file at
    /Users/hogehoge/.phpbrew/php/php-7.4.4/etc/php.ini

To use the newly built PHP, try the line(s) below:

    $ phpbrew use php-7.4.4

Or you can use switch command to switch your default php to php-7.4.4:

    $ phpbrew switch php-7.4.4

Enjoy!
```

build に10分近くかかってるけど、いけた！

php のバージョンを切り替える。

```shell
$ phpbrew switch php-7.4.4
```

バージョン確認

```shell
$ php -v
PHP 7.4.4 (cli) (built: Jun 12 2021 08:04:51) ( NTS )
Copyright (c) The PHP Group
Zend Engine v3.4.0, Copyright (c) Zend Technologies
```

オッケー！

## 最後に

php の複数バージョン切り替えは他に [phpenv](https://github.com/phpenv/phpenv) があるけど、今回はスター数の多い [phpbrew](https://github.com/phpbrew/phpbrew) をインストールした。

ちなみに今回 php 7.4.4 にしたのは AtCoder のバージョンに合わせたかったため。
