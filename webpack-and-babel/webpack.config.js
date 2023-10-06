const path = require('path');

module.exports = {
    // モードの設定
    // mode: 'development',
    mode: 'production',
    // アプリケーションのエントリーポイントを指定（この場合、index.jsがエントリーファイル）
    // => webpackはこのファイルを起点にして、依存関係を解決していく
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // 出力されるファイルの保存先ディレクトリを指定
        filename: "bundle.js" // 出力されるバンドルファイルの名前を指定
    },
};


// cf. path.join VS. path.resolve

// const dirname = '/usr';
// const folder = 'local';
// const filePath = 'file.txt';

// const resolvedPath = path.resolve(dirname, folder, filePath);
// const joinedPath = path.join(dirname, folder, filePath);

// console.log(resolvedPath);  // '/usr/local/file.txt'
// console.log(joinedPath);    // 'usr/local/file.txt'

// => この例では、path.resolveは絶対パスを生成し、path.joinは相対パスを生成している

// path.join: 与えられたすべてのパスセグメントを"単純に"結合
// path.resolve: 与えられたすべてのパスセグメントを結合して、"絶対パスを"生成