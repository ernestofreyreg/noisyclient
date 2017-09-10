'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MuniCard = function MuniCard(_ref) {
  var route = _ref.route,
      title = _ref.title,
      page = _ref.page;
  return _react2.default.createElement('div', { className: 'MuniCard', 'data-jsx': 3367143384
  }, _react2.default.createElement('div', { className: 'logo', 'data-jsx': 3367143384
  }, _react2.default.createElement('a', { href: page, 'data-jsx': 3367143384
  }, _react2.default.createElement('img', { src: '/static/muni-logo.png', 'data-jsx': 3367143384
  }))), _react2.default.createElement('div', { className: 'info', 'data-jsx': 3367143384
  }, _react2.default.createElement('div', { className: 'route', 'data-jsx': 3367143384
  }, _react2.default.createElement('a', { href: page, 'data-jsx': 3367143384
  }, route)), _react2.default.createElement('div', { className: 'title', 'data-jsx': 3367143384
  }, _react2.default.createElement('a', { href: page, 'data-jsx': 3367143384
  }, title))), _react2.default.createElement(_style2.default, {
    styleId: 3367143384,
    css: '.MuniCard[data-jsx="3367143384"]{width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-basis:166px;-ms-flex-basis:166px;flex-basis:166px;background-color:#4F051A;border-radius:10px;margin-bottom:20px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.logo[data-jsx="3367143384"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:20px}.info[data-jsx="3367143384"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1}.route[data-jsx="3367143384"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1;color:white;font-size:120px;line-height:100px;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end}.route[data-jsx="3367143384"] a[data-jsx="3367143384"]{text-decoration:none;color:white}.title[data-jsx="3367143384"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;-ms-flex-shrink:0;flex-shrink:0;color:white;font-size:13px;text-align:right}.title[data-jsx="3367143384"] a[data-jsx="3367143384"]{text-decoration:none;color:white}'
  }));
};

exports.default = MuniCard;