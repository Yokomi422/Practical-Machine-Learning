# 環境構築
まずは、git cloneしてください。
## Dockerによる環境構築
- 作業ディレクトリに移動してください。
```
$ cd to/yourproject/path
```
次に、作業ディレクトリに`Dockerfile`があることを確認して、
```
$ docker build -t pml_image .
```
で、イメージを作成してください。
イメージの作成が終わったら、コンテナを作成してください。
```
docker run -it -d --name pml_container -v $(pwd):/app -p 8888:8888 pml_image
```
## Dev Containerによる環境構築
VSCodeの拡張機能で`Dev Containers`をインストールしてください。
VSCodeの左のバーにあるDockerのクジラのアイコンをクリックして、ContainersのIndivisual Containerから`pml_playground`を右クリックして
`Attach Visual Studio Code`をクリックしてください。そうすると、新しくVSCodeが立ち上がります。