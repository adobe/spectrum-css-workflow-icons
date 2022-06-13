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
exports.A4uLocationBasedDate = A4uLocationBasedDate;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uLocationBasedDate(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    height: "8",
    rx: "1",
    ry: "1",
    width: "8",
    x: "22",
    y: "16"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M35,4H30V1a1,1,0,0,0-1-1H27a1,1,0,0,0-1,1V4H14V1a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1V4H5A1,1,0,0,0,4,5v6.109A10.633,10.633,0,0,1,6,10.3V6h4V7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V6H26V7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V6h4V28H17.143c-.374.675-.766,1.345-1.17,2H35a1,1,0,0,0,1-1V5A1,1,0,0,0,35,4Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M9,12.367a8.25,8.25,0,0,0-8.25,8.25C.75,25.173,9,35.57,9,35.57s8.25-10.4,8.25-14.953A8.25,8.25,0,0,0,9,12.367Zm0,11.75a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,9,24.117Z"
  }));
}