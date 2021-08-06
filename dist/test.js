"use strict";

require("core-js/modules/es6.object.define-property.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 箭头函数
var foo = function foo() {}; // ES6 class


var List = /*#__PURE__*/function () {
  function List() {
    var pi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var ps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    _classCallCheck(this, List);

    this.pi = 1;
    this.ps = 10;
  }

  _createClass(List, [{
    key: "loadData",
    value: function loadData() {}
  }], [{
    key: "genId",
    value: function genId() {
      return ++this.id;
    }
  }]);

  return List;
}();

var name = 'lyzg';

var obj = _defineProperty({
  baseName: name
}, name + '_id', 'baseName');