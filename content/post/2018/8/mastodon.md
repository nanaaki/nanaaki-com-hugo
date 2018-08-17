---
title: "Mastodonとか建てたので適当にメモ"
date: 2018-08-17T11:41:14+09:00
draft: flase
---

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

docker関連インストールとmastodonをcloneして取り敢えず何も考えずにdocker-compose buildしとく(キーとかdocker内で叩いて吐かせるので)

	sudo apt-get update
	sudo apt-get upgrade
	sudo apt-get install python3-pip docker.io
	sudo pip3 install docker-compose
	git clone https://github.com/tootsuite/mastodon.git
	cd mastodon
	docker-compose build

恐らくmicroインスタンスとかだとメモリ足りない。4GBぐらいいるらしい。microでスワップ作るとかは各位頑張れ。

とりあえずサンプルコピって設定書いてく

	cp .env.production.sample .env.production
	vim .env.production


DBの設定。SQLの設定

	DB_HOST={GCPのSQLのIP}
	DB_USER={ユーザー}
	DB_NAME={DBネーム}
	DB_PASS={パスワード}
	DB_PORT=5432

ドメインとHTTPS。なんかHTTPS世の中的には必須だしmastodon的にも必須なので設定しとけ。LOCAL_HTTPS=falseすると連合からハブられる的なのあるっぽい(APIのエンドポイントHTTPSじゃねーとか死ねみたいな？適当なんもわからん

	LOCAL_DOMAIN=mst.nanaaki.com
	LOCAL_HTTPS=true
	
各種secret。〜に入れる値は ```docker-compose run --rm web rake secret``` 叩けば出る。2つバラバラの値入れとけ。

	SECRET_KEY_BASE=〜
	OTP_SECRET=〜
	
```PAPERCLIP_SECRET=〜``` 書いてる例がたくさんあったけど調べたら何も使ってないからsmapleから消えてるみたい。なので2つでいい。　[https://github.com/tootsuite/mastodon/commit/5cc716688abdf7eaafc58d804209510601190791#diff-dc54c6eb27788a7741a6b2780f05a2a3](https://github.com/tootsuite/mastodon/commit/5cc716688abdf7eaafc58d804209510601190791#diff-dc54c6eb27788a7741a6b2780f05a2a3)


VAPIDとか ```docker-compose run --rm web rake mastodon:webpush:generate_vapid_key``` 叩いてでる値を適当に貼れ。web push関係。

	VAPID_PRIVATE_KEY=rze_7EN0JlFtIMeOYC2e4qEICgE1dosTVGAUH31B9OY=
	VAPID_PUBLIC_KEY=BAbtqdg3xPW3jvSvkMqu601uveHZbkXLpa7z4GCjglD23sldrtFD9eaHIBeI54DxNqDWgaWznBQoobGa0W6Yc-s=


メール関係の設定。

	SMTP_SERVER=smtp.sendgrid.net
	SMTP_PORT=2525
	SMTP_LOGIN=〜
	SMTP_PASSWORD=〜
	SMTP_FROM_ADDRESS=info@mst.nanaaki.com

S3互換(Google cloud storage)の設定。AWSアクセスキー類Storage→設定→相互運用で出る。

	S3_ENABLED=true
	S3_BUCKET=バケットの名前
	AWS_ACCESS_KEY_ID=〜
	AWS_SECRET_ACCESS_KEY=〜
	S3_PROTOCOL=https
	S3_HOSTNAME=storage.googleapis.com
	S3_ENDPOINT=https://storage.googleapis.com/
	S3_SIGNATURE_VERSION=s3

あと日本語に一応設定。

	DEFAULT_LOCALE=ja

というかんじで.env.production作って

	docker-compose run --rm web rails db:migrate
	docker-compose run --rm web rails assets:precompile
	docker-compose up

でmigrate、アセットのprecompile、起動(-dオプションつけるとデーモン起動になる

asetts:precompileは結構時間かかる。
