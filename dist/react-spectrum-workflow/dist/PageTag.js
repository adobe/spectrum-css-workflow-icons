/**
* @adobe/react-spectrum-workflow (c) by Adobe
* 
* @adobe/react-spectrum-workflow is licensed under a
* Creative Commons Attribution-NoDerivatives 4.0 International License.
* 
* You should have received a copy of the license along with this
* work. If not, see <http://creativecommons.org/licenses/by-nd/4.0/>.
**/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A4uPageTag = A4uPageTag;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uPageTag(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M16.2,30H2V10H30v6.2l2,2V5a1,1,0,0,0-1-1H1A1,1,0,0,0,0,5V31a1,1,0,0,0,1,1H18.2Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M35.668,26.106l-9.88-9.879A.772.772,0,0,0,25.242,16h-8.47a.772.772,0,0,0-.772.772v8.471a.772.772,0,0,0,.226.546l9.879,9.88a.772.772,0,0,0,1.092,0L35.668,27.2A.772.772,0,0,0,35.668,26.106ZM20.4,22.948A2.548,2.548,0,1,1,22.948,20.4,2.548,2.548,0,0,1,20.4,22.948Z"
  }));
}