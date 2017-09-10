"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _ParisomaCard = require("../components/ParisomaCard");

var _ParisomaCard2 = _interopRequireDefault(_ParisomaCard);

var _Density = require("../components/Density");

var _Density2 = _interopRequireDefault(_Density);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initializeRTM = function initializeRTM(id, dispatcher) {
  var rtm = new RTM('wss://rv6bqxdr.api.satori.com', 'cCab773fCDc1c38CbCDE0d243DAA2FEe');
  var channel = rtm.subscribe('timed-devices', RTM.SubscriptionMode.SIMPLE, {
    filter: 'SELECT * FROM `timed-devices` WHERE `scannerid` = "' + id + '"',
    history: { count: 1 }
  });

  channel.on('rtm/subscription/data', function (pdu) {
    pdu.body.messages.forEach(function (msg) {
      dispatcher(msg);
    });
  });

  rtm.on('data', function (pdu) {
    if (pdu.action.endsWith('/error')) {
      rtm.restart();
    }
  });

  rtm.start();

  return { rtm: rtm };
};

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index(props, context) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props, context));

    _this.satoriDispatcher = function (data) {
      console.log(data);

      _this.setState({ count: data });
    };

    _this.state = { count: null };
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var url = this.props.url;

      var query = url.query;
      var id = query.id;

      console.log('Initializing RTM');
      var satori = initializeRTM(id, this.satoriDispatcher);
      this.setState({ satori: satori });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.state.satori.rtm.stop();
    }
  }, {
    key: "render",
    value: function render() {
      var url = this.props.url;
      var count = this.state.count;

      var query = url.query;
      var id = query.id;

      return _react2.default.createElement(_ScreenFrame2.default, null, _react2.default.createElement(_PageHeader2.default, { title: "Noisy" }), _react2.default.createElement(_Container2.default, null, _react2.default.createElement(_Logo2.default, null), _react2.default.createElement(_ParisomaCard2.default, {
        page: "/parisoma?id=" + id
      }), count && _react2.default.createElement(_Density2.default, count)), _react2.default.createElement(_style2.default, {
        styleId: 3849146088,
        css: "body{font-family:\"Helvetica Neue\",Helvetica,sans-serif}"
      }));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;