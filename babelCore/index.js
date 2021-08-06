const babel = require('@babel/core');


// transformFromAstSync 转换传入的代码
// const code = `let a = 'let'; let b = 2; const c = 3;`
// const result = babel.transformSync(code, {
//     sourceMaps: true,
//     presets: ['@babel/preset-env']
// })
// console.log(result.code)



// transformFileSync 转换传入的文件
const fs = require("fs");
const path = require("path");
const code = fs.readFileSync(path.join(__dirname, './test.js'), {
    encoding: 'utf-8'
});
const result = babel.transformSync(code, {
    sourceMaps: true,
    presets: ['@babel/preset-env']
})
console.log(result.code)
const writeStatus = fs.writeFileSync(path.join(__dirname, './target.js'), result.code);



// transformFromAstSync 转换传入的AST
// const code = `let a = 'let'; let b = 2; const c = 3;`
// const ast = babel.parse(code, { sourceType: 'module' })
// const result = babel.transformFromAstSync(ast, code, {
//     sourceMaps: true,
//     presets: ['@babel/preset-env']
// })
// console.log(result.code)
