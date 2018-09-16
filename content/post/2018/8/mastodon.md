----
title: "Mastodonとか建てたので適当にメモ"
date: 2018-08-17T11:41:14+09:00
draft: flase
----

[ななすとどん](https://mst.nanaaki.com) を立てました

昔立てたますとどんを立て直したが、何か全体的にやり直したのでメモ

<!--more-->

全体的な雰囲気

* google cloud platform以下を使う
* Compute Engine 適当に1インスタンス内でdocker内でmastodon全体的に動かす。
* SQL PostgresSQLでなにも考えずに
* Storage S3互換の設定で頑張る
* メールはsendgrid使う

SQLはpostgresならなんでもいい。
StorageはS3互換だったら特に何も考えなくていい。

sendgridの設定とかは[https://cloud.google.com/compute/docs/tutorials/sending-mail/using-sendgrid](https://cloud.google.com/compute/docs/tutorials/sending-mail/using-sendgrid)
適当にgcpのドキュメント読め。


Compute Engineの1インスタンスで何も考えずdockerでやっていく感じ。OSは適当にUbuntuでいいんじゃない？

色々手順書こうと考えたけど公式のドキュメントを読むほうが多分いい
[https://github.com/tootsuite/documentation](https://github.com/tootsuite/documentation)

細かいconfが変わってたりするググって出てくる日本語のブログが古い場合も多い。
cronでデイリータスク実行させてるとか(現状はsidekiqで処理されるので不要)
confのpaperclip_secretが消えてるとか(使ってないから消えたconf項目)
この辺は少なくともググってでる日本語情報では古いものが目立った

全体的な感想はこの記事を書いた時点ではrailsのasset compileが死ぬほど遅い。
