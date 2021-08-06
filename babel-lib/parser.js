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
    if (true) {
        returen;
    }
    myFun();

    export default class Clazz {
        say() {
            console.debug(3);
        }
        render() {
            return <div>{console.error(4)}</div>
        }
    }
`;
const ast = babelParser.parse(sourceCode, {
    sourceType: 'unambiguous',
    // plugins: ['jsx']
});
console.log(ast)


