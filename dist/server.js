"use strict";

var _express = _interopRequireDefault(require("express"));
var _api = _interopRequireDefault(require("./routes/api.routes"));
var _index = _interopRequireDefault(require("./routes/index.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Server = /*#__PURE__*/function () {
  function Server(port) {
    _classCallCheck(this, Server);
    this.app = (0, _express["default"])();
    this.port = port;
  }
  _createClass(Server, [{
    key: "init",
    value: function init() {
      new _api["default"](this.app);
      new _index["default"](this.app);
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;
      this.init();
      this.app.listen(this.port, function () {
        console.log('Chạy thành công http://localhost:' + _this.port);
      });
    }
  }]);
  return Server;
}();
var server = new Server(3000);
server.start();