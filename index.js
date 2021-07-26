const babelCore = require('@babel/core');
const code = 'let n = 1';
const output = babelCore.transformSync(code, {
    plugins: [
        function customPlugin() {
            return {
                visitor: {
                    VariableDeclaration(path) {
                        // 在这个例子里我们将所有声明类型 `let` 变为 `var`
                        if (path.node.kind === 'let') {
                            path.node.kind = 'var';
                        }
                    },
                },
            };
        },
    ],
});

console.log(output.code); // 'var n = 1;'