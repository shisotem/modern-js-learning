# 歴史

## #1 前編

- `JS`
    - 1995年、Netscape Navigator 2.0（ブラウザ）に実装された（元はLiveScriptという名前だったが、Javaにあやかった）。

    - 1996年、IE 3.0に搭載され急速に普及。IEとNNはそれぞれ独自の機能を増やしていったため、**開発者はIE用のサイトとNN用のサイトの2つ**を作る必要があった。

- `ES`
    - Netscapeは、JSを国際的な標準化団体（Ecma International）に提出 $\rightarrow$ 1997年、ECMAScript第1版が公開された。

    - 2015年、第6版が公開されてからは年号表記が正式な名称となった（ES6ではなくES2015）。また、この年からは毎年新版をリリースするようになった。

    - ESとは、**JSの中核となる言語仕様**のこと（**どのJS実行環境でも共通な動作のみが定義**されている）。色々なJSの実行環境があり、Node.jsではglobal.process、ブラウザではwindowやdocumentというように、環境毎に固有の機能がある。
    
    - ESでは、Node.jsやブラウザの違いを意識せずに開発をすることが出来る（実際は、どの環境でも等しく書けるわけではない。e.g. IEではES2015の一部機能が使えない $\rightarrow$ **コンパイル** or 注意して書くことが必要！）。
        - **コンパイル** : 開発時は最新のESで記述するが、最終的にコンパイルし、IEで動く（古い）JSに変換。

- `第一次ブラウザ戦争`
    - 1990年代後半、IEとNetscapeの激しいシェア争い。勝者はIE（1998年のWindowsに標準搭載されていたことも勝因のひとつ？）。2000～2010年頃は、IEが全ブラウザ中シェア率1位。

- `JSへの失望と復権`
    - JS起因のクラッシュ・ウィルス・不快なアニメーション $\rightarrow$ JS機能をオフにするユーザも増えた。また、同時期にはFlashが流行し（動作が軽いアニメーション）、逆風に。

    - 2005年、MicrosoftがAjax（非同期通信により、ページを離れることなくサーバとデータをやり取りし、ページの表示等を変化させていく）を開発。Google Mapsが非常に話題に。JSは、優れたWebApp開発言語として復権した。

    - **jQuery**の誕生もJSの追い風となった。
        - "write less, do more"（少ない記述で多くの実装が可能）
        - 「ESが誕生し、JS共通の動きが定義されるようになった」とあったが、なんだかんだブラウザ間の差異は存在していた $\rightarrow$ jQueryを使えば同じコードで、異なるブラウザで動かせた！
        - この頃は、JSといえばjQuery。

- `第二次ブラウザ戦争`
    - 2000年代後半～、IE / Chrome / Firefox / Safari / Opera $\rightarrow$ 2012年～、Chromeが1位に。

***

- `サーバサイドJSのムーブメント`
    - 当時はサーバサイドはPHPなど $\rightarrow$ JSを使いたい！ $\rightarrow$ **ServerJS**というプロジェクトが発足 $\rightarrow$ しかし、サーバサイドでJSを使うには、色々なAPI（機能）が不足していた $\rightarrow$ ServerJSの実現のためにはAPIを作る必要がある。
    - より広範囲のAPIを対象とすることを示すため、プロジェクト名をServerJSから**CommonJS**へ改名。

- `モジュールとは`
    - CommonJSで色々なAPIが作られていったが、その中には**モジュール**APIも含まれている。
    - モジュールはただのファイルであり、1つのスクリプトは1つのモジュール。export / importで機能をやり取りする。

- `JSが抱えていた2つの問題`
    - **JSは名前空間（NameSpace）が1つしかない！** $\rightarrow$ 命名がかぶる…（他言語では名前空間を自作出来る）
    ```
    // a.js
    var foo = 10;
    ```
    ```
    // b.js
    var foo = 'aaa';
    ```
    ```
    // c.js
    foo * 10; // => Nan（100を想定してたのに…）
    ```
    ```
    // index.html
    <script src="./a.js"></script>
    <script src="./b.js"></script>
    <script src="./c.js"></script>
    ```
    - **依存関係**
        - （前提）b.jsとc.jsは、a.jsをもとに作られていたとする。
            - a.jsを変更してみたら… $\rightarrow$ バグ発生！
            - HTMLで、b $\rightarrow$ a $\rightarrow$ c の順で読み込んだら… $\rightarrow$ バグ発生！（e.g. jquery-ui.jsの前にjquery.jsを読み込まないとバグが発生する）

- `問題の解決`
    - **名前空間** $\rightarrow$ **モジュール** が解決。
        - **モジュール**には**スコープ**の概念がある。JSのモジュールは**1ファイル単位** $\rightarrow$ ファイル内の変数や関数は外部に影響を及ぼさない。
    ```
    // a.js
    var foo = 10;
    module.exports = foo;
    ```
    ```
    // b.js
    var foo = 'aaa'; // よそはよそ、うちはうち（スコープ）
    ```
    ```
    // c.js
    var foo = require('./a');
    foo * 10; // => 100（aからexportされたfooを明示的に使用！）
    ```
    ```
    // index.html
    <script src="./a.js"></script>
    <script src="./b.js"></script>
    <script src="./c.js"></script>
    ```
    - <u>ただし、このモジュールAPIはCommonJS（サーバサイドでのJS）の話であり、ブラウザのJSでは当然モジュールが使えないので、名前空間の問題は依然として残る。</u>
        - 「ブラウザでもモジュールが使いたい！」 $\rightarrow$ 世界中のエンジニアが模索し始める $\rightarrow$ To Be Continued!!!

    - **依存関係** $\rightarrow$ **npm（パッケージ管理）** が解決。
        - $\rightarrow$ To Be Continued!!!

## #2 後編1

- `Node.jsの誕生とCommonJS`
    - Node.jsにはモジュールという仕組みが備わっている（"最初は"**CommonJSのモジュールAPI**に準拠 : module.exports / require）。

    - 段々とCommonJS（サーバサイドJS実現のためにAPIを作ろう！プロジェクト）のコミュニティがうまく機能しなくなってくる $\rightarrow$ Node.jsは"独自の進化"を遂げる（**Node.js独自のモジュール**に進化）！（現在、CommonJSのプロジェクトは停止 / CommonJS形式のモジュールという言い回しだけは今も残る）

    - JSには**モジュールの仕様が複数存在**している（e.g. Node.js $\rightarrow$ **CommonJS形式のモジュール**）。

- `パッケージ管理システムnpm`
    - パッケージとは、**package.jsonで記述されたファイルやディレクトリ**のこと（by npm公式）。

    - モジュールによる名前空間問題の解決 $\rightarrow$ 機能の細分化 $\rightarrow$ さらに、細分化された機能を組み合わせて新たな機能を作りたい…！ $\rightarrow$ 共有の需要

    - 改めてパッケージとは、**共有したい機能の単位**であるといえる（1ファイルの場合も、ディレクトリの場合もある）。

    - Node.jsで色々なパッケージが開発されるようになる $\rightarrow$ パッケージを**バージョン管理**し、**共有するためのシステム**が必要 $\rightarrow$ パッケージ管理システム

    - **パッケージ管理システム**
        1. リポジトリの購読 : ローカル環境に**インストールしたパッケージを更新**できる。また、**パッケージを検索**できる。
        2. パッケージのインストール及び削除
        3. **依存関係の解決** : パッケージに必要な別のパッケージを自動でインストールしたり、更新することができる。
        4. 設定管理 : 設定を書くことで1. 2. 3. が自動で行える $\rightarrow$ チームの環境を簡単に揃えられる。

    - 2010年、**Node.jsのパッケージ管理システムであるnpm**（Node Package Manager）が誕生 $\rightarrow$ この頃を皮切りに、多くの世界的有名企業がNode.jsを社内言語として採用。

    - cf. [package.json VS. package-lock.json](https://qiita.com/adgjmptwgw/items/cb08aa4a33fecc478422)

## #3 後編2

>***KEY POINT***  
>（**ブラウザでモジュールを使う**ために模索した結果）**コードを事前に変換する**ことが主流に！$\rightarrow$ コードを事前に変換することにはモジュールを使える以外にも**色々な恩恵**がある！

- `ブラウザとモジュール（IIFE, AMD, Bower）`
- `バンドルツール（Browserify, webpack）`
- `ES Modulesの策定`
- `ES2015とBabel`