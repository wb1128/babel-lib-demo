// const { declare } = require('@babel/helper-plugin-utils');

// const targetCalleeName = ['log', 'info', 'error', 'debug'].map(item => `console.${item}`);

const parametersInsertPlugin = ({ types, template }, options, dirname) => {
    return {
        visitor: {
            // 访问函数调用表达式
            CallExpression(path) {
                const { callee } = path.node
                if (types.isCallExpression(path.node) && types.isMemberExpression(callee)) {
                    const { object, property } = callee
                    // 将成员表达式的属性由 log -> error
                    if (object.name === 'console' && property.name === 'log') {
                        property.name = 'error'
                    } else {
                        return
                    }
                    // 向上遍历，在该函数调用节点的父节点中找到函数声明节点
                    const FunctionDeclarationNode = path.findParent(parent => {
                        return parent.type === 'FunctionDeclaration'
                    })
                    // 提取函数名称信息，包装成一个字符串字面量节点，插入当前节点的参数数组中
                    const funcNameNode = types.stringLiteral(FunctionDeclarationNode.node.id.name)
                    path.node.arguments.unshift(funcNameNode)
                }
            }

        }
    }
}
module.exports = parametersInsertPlugin;
