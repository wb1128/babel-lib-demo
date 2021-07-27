const babelParser = require("@babel/parser")
const sourceCode = `
    var isNumber = 666;
    let isString = "hello world";
    /**
     * is a function
     */
    function myFun() {
        console.log("my fun")
    }
    myFun();
`;
const ast = babelParser.parse(sourceCode, {
    sourceType: 'unambiguous',
});
console.log(ast)


