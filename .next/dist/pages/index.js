"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("next/node_modules/babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require("next/node_modules/babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("next/node_modules/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("next/node_modules/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("next/node_modules/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("next/node_modules/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ScreenFrame = require("../components/ScreenFrame");

var _ScreenFrame2 = _interopRequireDefault(_ScreenFrame);

var _PageHeader = require("../components/PageHeader");

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Logo = require("../components/Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _Container = require("../components/Container");

var _Container2 = _interopRequireDefault(_Container);

var _MuniCard = require("../components/MuniCard");

var _MuniCard2 = _interopRequireDefault(_MuniCard);

var _muni = require("../common/muni");

var _ParisomaCard = require("../components/ParisomaCard");

var _ParisomaCard2 = _interopRequireDefault(_ParisomaCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_ScreenFrame2.default, null, _react2.default.createElement(_PageHeader2.default, { title: "Noisy" }), _react2.default.createElement(_Container2.default, null, _react2.default.createElement(_Logo2.default, null), (0, _keys2.default)(_muni.muniStops).map(function (id) {
        return _react2.default.createElement(_MuniCard2.default, {
          key: id,
          route: _muni.muniStops[id].route,
          title: _muni.muniStops[id].title,
          page: "/muni?id=" + id
        });
      }), _react2.default.createElement(_ParisomaCard2.default, { page: "/parisoma?id=090ef701-5fb6-428c-bf1a-2dfcc26df812" })), _react2.default.createElement(_style2.default, {
        styleId: 3849146088,
        css: "body{font-family:\"Helvetica Neue\",Helvetica,sans-serif}"
      }));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;