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
exports.A4uDocumentFragmentGroup = A4uDocumentFragmentGroup;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uDocumentFragmentGroup(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M35,8H5A1,1,0,0,0,4,9V31a1,1,0,0,0,1,1H35a1,1,0,0,0,1-1V9A1,1,0,0,0,35,8ZM8,12H22v8.875a8.532,8.532,0,0,0-3.478-1.125c-1.653,0-2.4,2.2-4.052,2.2s-1.7-3.765-3.351-3.765C9.617,18.181,8,22,8,22ZM32,28H8V26H32Zm0-8H26V18h6Zm0-6H26V12h6Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M2,7A1,1,0,0,1,3,6H32V5a1,1,0,0,0-1-1H1A1,1,0,0,0,0,5V27a1,1,0,0,0,1,1H2Z"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fillRule: "evenodd",
    cx: "18",
    cy: "16",
    r: "2"
  }));
}