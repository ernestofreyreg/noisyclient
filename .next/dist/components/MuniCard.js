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

var _jsxFileName = '/Users/ernestofreyre/WebstormProjects/NoisyBE/components/MuniCard.js';


var MuniCard = function MuniCard(_ref) {
  var route = _ref.route,
      title = _ref.title,
      page = _ref.page;
  return _react2.default.createElement('div', { className: 'MuniCard', 'data-jsx': 3367143384,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('div', { className: 'logo', 'data-jsx': 3367143384,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { href: page, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 3367143384,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('img', { src: '/static/muni-logo.png', 'data-jsx': 3367143384,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })))), _react2.default.createElement('div', { className: 'info', 'data-jsx': 3367143384,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('div', { className: 'route', 'data-jsx': 3367143384,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_link2.default, { href: page, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 3367143384,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, route))), _react2.default.createElement('div', { className: 'title', 'data-jsx': 3367143384,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_link2.default, { href: page, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 3367143384,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, title)))), _react2.default.createElement(_style2.default, {
    styleId: 3367143384,
    css: '.MuniCard[data-jsx="3367143384"]{width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-basis:166px;-ms-flex-basis:166px;flex-basis:166px;background-color:#4F051A;border-radius:10px;margin-bottom:20px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.logo[data-jsx="3367143384"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:20px}.info[data-jsx="3367143384"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1}.route[data-jsx="3367143384"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1;color:white;font-size:120px;line-height:100px;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end}.route[data-jsx="3367143384"] a[data-jsx="3367143384"]{text-decoration:none;color:white}.title[data-jsx="3367143384"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;-ms-flex-shrink:0;flex-shrink:0;color:white;font-size:13px;text-align:right}.title[data-jsx="3367143384"] a[data-jsx="3367143384"]{text-decoration:none;color:white}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXVuaUNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR3NCLEFBVVMsQUFPQSxBQU9BLEFBVUMsQUFLRCxBQVNDLFdBL0NELFVBa0NSLEFBY0EsWUFiZCxBQWNBLHFFQXZDd0IsQUFPQSxBQU9BLEFBZUEsV0F0Q0wsK0RBQ1EsSUFTQSxBQU9aLEFBT0QsQUFlRSxhQXJCRixRQWhCTyxtQkFDQSxRQXNCUCxNQWVBLEtBcENPLENBc0JILENBUGxCLEtBc0JpQixVQWRHLEtBZUQsYUFkSSxHQWpCUixDQWdDZixZQS9CQSxrQkFQQSxtRUF3QkEiLCJmaWxlIjoiY29tcG9uZW50cy9NdW5pQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJuZXN0b2ZyZXlyZS9XZWJzdG9ybVByb2plY3RzL05vaXN5QkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IE11bmlDYXJkID0gKHtyb3V0ZSwgdGl0bGUsIHBhZ2V9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J011bmlDYXJkJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvJz5cbiAgICAgICAgPExpbmsgaHJlZj17cGFnZX0+PGE+PGltZyBzcmM9Jy9zdGF0aWMvbXVuaS1sb2dvLnBuZycvPjwvYT48L0xpbms+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm8nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm91dGUnPjxMaW5rIGhyZWY9e3BhZ2V9PjxhPntyb3V0ZX08L2E+PC9MaW5rPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPjxMaW5rIGhyZWY9e3BhZ2V9PjxhPnt0aXRsZX08L2E+PC9MaW5rPjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKmxhbmd1YWdlPUNTUyovfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuTXVuaUNhcmQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDE2NnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjA1MUE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yb3V0ZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yb3V0ZSBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNdW5pQ2FyZFxuIl19 */\n/*@ sourceURL=components/MuniCard.js */'
  }));
};

exports.default = MuniCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXVuaUNhcmQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiTXVuaUNhcmQiLCJyb3V0ZSIsInRpdGxlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFdBQVcsU0FBWCxBQUFXLGVBQUE7TUFBQSxBQUFFLGFBQUYsQUFBRTtNQUFGLEFBQVMsYUFBVCxBQUFTO01BQVQsQUFBZ0IsWUFBaEIsQUFBZ0I7eUJBQzdCLGNBQUEsU0FBSyxXQUFMLEFBQWUsd0JBQWY7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUsb0JBQWY7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUFrQjtBQUFsQjtxQkFBa0IsY0FBQTtnQkFBQTs7Z0JBQUE7a0JBQUEsQUFBRztBQUFIO0FBQUEsNENBQVEsS0FBTCxBQUFTLHFDQUFUOztnQkFBQTtrQkFGekIsQUFDRSxBQUNFLEFBQWtCLEFBQUcsQUFHdkI7QUFIdUI7eUJBR3ZCLGNBQUEsU0FBSyxXQUFMLEFBQWUsb0JBQWY7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlLHFCQUFmOztnQkFBQTtrQkFBQSxBQUF1QjtBQUF2QjtxQkFBdUIsQUFBQyxnQ0FBSyxNQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFBa0I7QUFBbEI7cUJBQWtCLGNBQUE7Z0JBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLEtBRDNDLEFBQ0UsQUFBdUIsQUFBa0IsQUFDekMsMEJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZSxxQkFBZjs7Z0JBQUE7a0JBQUEsQUFBdUI7QUFBdkI7cUJBQXVCLEFBQUMsZ0NBQUssTUFBTixBQUFZO2dCQUFaO2tCQUFBLEFBQWtCO0FBQWxCO3FCQUFrQixjQUFBO2dCQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxLQVA3QyxBQUtFLEFBRUUsQUFBdUIsQUFBa0I7YUFQN0M7U0FEYSxBQUNiO0FBQUE7QUFESixBQXFFQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJNdW5pQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJuZXN0b2ZyZXlyZS9XZWJzdG9ybVByb2plY3RzL05vaXN5QkUifQ==