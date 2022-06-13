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
exports.A4uCoverImage = A4uCoverImage;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uCoverImage(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("circle", {
    fillRule: "evenodd",
    cx: "23.8",
    cy: "12.6",
    r: "2.5"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M34.875,4H1.125A1.068,1.068,0,0,0,0,5V27a1.068,1.068,0,0,0,1.125,1h2.4a13.248,13.248,0,0,1,3.24-1.088,11.565,11.565,0,0,1-2.131-6.469c0-.046.01-.086.01-.131C3.152,22.2,2,24,2,24V6H34V22a15.164,15.164,0,0,0-6.182-2c-2.463,0-4.647,2.785-7.019,3.7a11.691,11.691,0,0,1-1.55,3.242A13.647,13.647,0,0,1,22.383,28H34.875A1.068,1.068,0,0,0,36,27V5A1.068,1.068,0,0,0,34.875,4Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M24,34.038a3.12,3.12,0,0,0-1.048-2.353,10.109,10.109,0,0,0-5.738-2.234,1.144,1.144,0,0,1-.99-1.148V26.645a1.114,1.114,0,0,1,.276-.721,8.747,8.747,0,0,0,2.007-5.481C18.507,16.31,16.315,14,13,14s-5.567,2.4-5.567,6.443a8.853,8.853,0,0,0,2.1,5.485,1.106,1.106,0,0,1,.273.717V28.3a1.138,1.138,0,0,1-.993,1.148,9.693,9.693,0,0,0-5.809,2.232A3.125,3.125,0,0,0,2,34v2H24Z"
  }));
}