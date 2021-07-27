const babelParser = require("@babel/parser");
const babelTraverse = require("@babel/traverse").default;
const babelTypes = require("@babel/types");
const babelGenerate = require('@babel/generator').default;

const sourceCode = `
    var isBoolean = false;
    let isString = "hello world";
    /**
     * is a function
     */
    function myFun() {
        let apple = 'love'
        console.log("my fun")
    }
    myFun();
`;
const ast = babelParser.parse(sourceCode, {
    sourceType: 'unambiguous',
});
babelTraverse(ast, {
    VariableDeclaration(path, state) {
        // console.log(path.isBooleanLiteral())
        // if (path.isBooleanLiteral()) {
        //     path.insertBefore(babelTypes.stringLiteral("abc"))
        // }
        console.log(path, state)
    },
    FunctionDeclaration(path, state) {
        console.log(path, state)
        path.insertBefore(babelTypes.expressionStatement(babelTypes.stringLiteral("Because I'm easy come, easy go.")));
        path.insertAfter(babelTypes.expressionStatement(babelTypes.stringLiteral("A little high, little low.")));
    },
    CallExpression(path, state) {
        console.log(path, state)
    }
})
console.log(ast)
const { code, map } = babelGenerate(ast);
console.log(code);
