"use strict";

require("core-js/modules/es7.array.includes.js");

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.promise.js");

// 以便注入core-js作为polyfill
var array = [1, 2, 3, 4, 5, 6];
array.includes(function (item) {
  return item > 2;
});
new Promise();