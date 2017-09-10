'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', { className: 'Container', 'data-jsx': 3678872980
  }, children, _react2.default.createElement(_style2.default, {
    styleId: 3678872980,
    css: '.Container[data-jsx="3678872980"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px}'
  }));
};

exports.default = Container;