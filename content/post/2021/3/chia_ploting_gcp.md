---
title: "chiaの畑をgcp上で耕すメモ"
date: 2021-03-26T00:41:14+09:00
draft: flase
---

[chia.net](https://chia.net)のメインチェーンが上がってたのでメモ

chia自体はかなり昔にビットトレントの人とかがやるぜ〜とか言っていつメインネットでるんだろって感じだったけどついに出た感。
ざっくりいうとHDD上にクソ巨大なかつ生成にかなりのディスク読み書きが必要なファイルを生成してそのファイルを使って証明してる。

Proof of Space and Time と名乗ってる。

ざっくりいうと流れは

Ploting 採掘の前段階の処理、ここでは300GBぐらいの一時ファイルを使って1.8TBぐらいのディスク書き込みをし100GBのファイルを生成する
Farming 採掘にあたる部分。Plottingで作られた畑的なファイル使って証明処理をしていく。

エコかどうかはしらん。100GBの畑を1個作って今の難易度で10ヶ月に1回証明成功する。

毎日採掘出来るためにはおおよそ300個の畑が必要としておおよそ30TBなので8TBのHDDを4台と適当なCPUで十分。
300個の畑を生成するには手元の最も早いマシンで15時間ほどなので187日かかる。

馬鹿げてるのでクラウドで回すことにしてGCP検討したのでそれのメモ

<!--more-->

* GCPのインスタンスはCPUは適当に低くて良いメモリは8GBもありゃ十分 -> n2d-standard-2 にしといた
* NVMEのlocal SSDが必要(GCPだと1個あたり375GBなので1個)
* 国はどこでもいい
* Ubuntu
* 完成したファイルをcloud storageに投げ込みたいのでgcsfuse使うのでscopeにフルアクセス追加

>gcloud compute instances create chia-1 --zone us-central1-a --machine-type n2d-standard-2 --image-project ubuntu-os-cloud --image-family ubuntu-1804-lts --local-ssd interface=NVME --scopes https://www.googleapis.com/auth/devstorage.full_control

こんな感じでインスタンス立てる。

ssh入る

>gcloud compute ssh chia-1 --zone us-central1-a

gcsfuseの設定。バケットとかは事前に作っとく

>export GCSFUSE_REPO=gcsfuse-`lsb_release -c -s`
>echo "deb http://packages.cloud.google.com/apt $GCSFUSE_REPO main" | sudo tee /etc/apt/sources.list.d/gcsfuse.list
>curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
>sudo apt-get update
>sudo apt-get upgrade -y
>sudo apt-get install gcsfuse
>mkdir res
>sudo gcsfuse res_chia res
>sudo gcsfuse -o allow_other --file-mode=777 --dir-mode=777 res_chia ~/res

plotting用の一時ファイル置き場をNVMEでやるためにフォーマット。ext4よりXFSのが処理早くなるとか諸説ある。

sudo mkfs.ext4 -F -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/disk/by-id/google-local-nvme-ssd-0 
mkdir tmp
sudo mount /dev/disk/by-id/google-local-nvme-ssd-0 ~/tmp
sudo chmod 777 ~/tmp

chiaのインストール。GUIは使わないし入れない。

>git clone https://github.com/Chia-Network/chia-blockchain.git
>cd chia-blockchain
>sh install.sh

chiaでの作業

>. ./activate
>chia init
>chia keys add
>採掘を実際に行うウォレットのパスフレーズを入れる。セキュリティ的な話としてplottingに全部必要なのか不明。誰かのplottingを代行とかすることがムズい？やり方ありそう。
>chia plots create --tmp_dir ~/tmp --final_dir ~/res --buffer 8000 --num_threads 4

あとは待つ。
これ、実際GCPで1つPlottingをするのにコスト自体は2ドル程度、しかし一番の問題ができた100GBのFarmをローカルとかに持ってくる時に100GBぐらいの転送が必要でざっくり10ドルぐらいかかる。
GCP上でFarmingも完結させるかDigitalOceanあたりを検討中。
