import bar from "./bar.js";
const foo = require('./foo.js'); // CJS形式のモジュールだが、webpackでバンドルすることで、ブラウザ上でも動作するように！

bar();
foo();