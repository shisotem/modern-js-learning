import bar from "./bar.js";
const foo = require('./foo.js'); // CJS形式のモジュールだが、webpackでバンドルすることで、ブラウザ上でも動作するようになる！

import React from "react";
import ReactDOM from "react-dom";

// JSX構文（webpack.config.jsでmodule.rulesに設定したbabel-loaderが、@babel/reactを使ってJSXをJSにトランスパイルしてくれるため、JXS構文が使える！）
const App = () => {
    bar();
    foo();
    return <h1>HELLO!!!</h1>;
};

ReactDOM.render(<App />, document.getElementById('app'));