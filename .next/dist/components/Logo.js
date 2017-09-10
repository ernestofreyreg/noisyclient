'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo() {
  return _react2.default.createElement('div', { className: 'Logo', 'data-jsx': 2496927281
  }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
    'data-jsx': 2496927281
  }, _react2.default.createElement('img', { src: '/static/noisy-logo-app.png', 'data-jsx': 2496927281
  }))), _react2.default.createElement(_style2.default, {
    styleId: 2496927281,
    css: '.Logo[data-jsx="2496927281"]{margin-bottom:20px}'
  }));
};

exports.default = Logo;