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
exports.A4uResize = A4uResize;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uResize(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 18 18"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M31,4H5A1,1,0,0,0,4,5V31a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V5A1,1,0,0,0,31,4ZM18,20.828l4.414-4.414,2.732,2.732A.5.5,0,0,0,26,18.793V10H17.207a.5.5,0,0,0-.354.854l2.732,2.732L15.172,18H8V8H28V28H18Z"
  }));
}