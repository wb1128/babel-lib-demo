const babelParser = require("@babel/parser");
const babelTraverse = require("@babel/traverse").default;
const babelTypes = require("@babel/types");
const babelGenerate = require('@babel/generator').default;
const babelTemplate = require('@babel/template').default;

// 创建函数调用表达式  https://www.babeljs.cn/docs/babel-types#arrayexpression
const ast = babelTypes.CallExpression(
    babelTypes.MemberExpression(babelTypes.identifier('Math'), babelTypes.identifier('abs')),
    [babelTypes.numericLiteral(-100)]
)
const { code } = babelGenerate(ast);
console.log(ast)
console.log(code);  // Math.abs(-100)


// template
const sourceCode = 'Math.abs(-100)';
const templateAst = babelTemplate.ast(sourceCode);
console.log(templateAst);
console.log(babelGenerate(ast).code);