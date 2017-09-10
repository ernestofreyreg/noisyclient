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

var ParisomaCard = function ParisomaCard(_ref) {
  var page = _ref.page;
  return _react2.default.createElement('div', { className: 'ParisomaCard', 'data-jsx': 2190053832
  }, _react2.default.createElement('div', { className: 'logo', 'data-jsx': 2190053832
  }, _react2.default.createElement(_link2.default, { href: page }, _react2.default.createElement('a', {
    'data-jsx': 2190053832
  }, _react2.default.createElement('img', { src: '/static/parisoma-logo.png', 'data-jsx': 2190053832
  })))), _react2.default.createElement(_style2.default, {
    styleId: 2190053832,
    css: '.ParisomaCard[data-jsx="2190053832"]{width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-basis:166px;-ms-flex-basis:166px;flex-basis:166px;background-color:#4F051A;border-radius:10px;margin-bottom:20px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background:url(/static/parisoma-back.png)}.logo[data-jsx="2190053832"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:20px}'
  }));
};

exports.default = ParisomaCard;