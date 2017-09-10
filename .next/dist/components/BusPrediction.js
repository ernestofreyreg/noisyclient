'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BusPrediction = function BusPrediction(_ref) {
  var prediction = _ref.prediction;
  return _react2.default.createElement('div', { className: 'BusPrediction', 'data-jsx': 2398644323
  }, _react2.default.createElement('div', { className: 'title', 'data-jsx': 2398644323
  }, 'Next Bus'), _react2.default.createElement('div', { className: 'info', 'data-jsx': 2398644323
  }, _react2.default.createElement('div', { className: 'minutes', 'data-jsx': 2398644323
  }, prediction.minutes), _react2.default.createElement('div', { className: 'right', 'data-jsx': 2398644323
  }, _react2.default.createElement('div', { className: 'minutest', 'data-jsx': 2398644323
  }, 'minutes'), _react2.default.createElement('div', { className: 'direction', 'data-jsx': 2398644323
  }, prediction.direction), _react2.default.createElement('div', { className: 'vehicle', 'data-jsx': 2398644323
  }, prediction.vehicleId))), _react2.default.createElement(_style2.default, {
    styleId: 2398644323,
    css: '.BusPrediction[data-jsx="2398644323"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:20px}.title[data-jsx="2398644323"]{font-size:20px;color:black;font-weight:600}.info[data-jsx="2398644323"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.minutes[data-jsx="2398644323"]{font-size:120px;line-height:100px;padding-right:20px}.right[data-jsx="2398644323"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.direction[data-jsx="2398644323"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;font-size:14px;color:black;font-weight:600}.vehicle[data-jsx="2398644323"]{font-size:30px;color:black;font-weight:600}.minutest[data-jsx="2398644323"]{font-size:14px;color:#ccc}'
  }));
};

exports.default = BusPrediction;