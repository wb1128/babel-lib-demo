const presets = [
    ["@babel/preset-env", {
        debug: true,
        useBuiltIns: "usage",  // false,entry,usage
        targets: "Chrome < 47", // includes
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    }]
];
// const plugins = [
//     '@babel/plugin-transform-arrow-functions',
//     '@babel/plugin-transform-classes',
//     '@babel/plugin-transform-computed-properties'
// ];plugins

module.exports = { presets, };