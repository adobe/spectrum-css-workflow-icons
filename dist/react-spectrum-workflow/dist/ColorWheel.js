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
exports.A4uColorWheel = A4uColorWheel;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uColorWheel(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    opacity: "0.2",
    d: "M32,18a13.953,13.953,0,0,0-4.114-9.9L18,18Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    opacity: "0.33",
    d: "M18,18l9.919,9.869A13.956,13.956,0,0,0,32,18Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    opacity: "0.47",
    d: "M18,18V32a13.955,13.955,0,0,0,9.874-4.087Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    opacity: "0.6",
    d: "M18,32V18L8.1,27.889A13.96,13.96,0,0,0,18,32Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    opacity: "0.7",
    d: "M18,18H4a13.959,13.959,0,0,0,4.1,9.889Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    opacity: "0.8",
    d: "M18,18,8.09,8.122A13.953,13.953,0,0,0,4,18Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A13.991,13.991,0,0,1,8.07,8.144L17.939,18V4c.02,0,.04,0,.061,0a14,14,0,0,1,0,28Z"
  }));
}