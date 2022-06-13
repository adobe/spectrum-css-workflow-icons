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
exports.A4uImageMapPolygon = A4uImageMapPolygon;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uImageMapPolygon(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M35.5,2h-7a.5.5,0,0,0-.5.5V6.912l-6.011,3.561A.5.5,0,0,0,21.5,10h-7a.5.5,0,0,0-.5.5v.952L8,9.23V4.5A.5.5,0,0,0,7.5,4H.5a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,.5.5H4.377L8.068,24H6.5a.5.5,0,0,0-.5.5v7a.5.5,0,0,0,.5.5h7a.5.5,0,0,0,.5-.5V28.93l10-1.667V29.5a.5.5,0,0,0,.5.5h7a.5.5,0,0,0,.5-.5v-7a.5.5,0,0,0-.5-.5H30.051L31.9,10h3.6a.5.5,0,0,0,.5-.5v-7A.5.5,0,0,0,35.5,2ZM16,12h4v4H16ZM6,10H2V6H6Zm6,20H8V26h4Zm12-7.5v2.736L14,26.9V24.5a.5.5,0,0,0-.5-.5H10.162L6.469,12H7.5a.5.5,0,0,0,.5-.5v-.137l6,2.222V17.5a.5.5,0,0,0,.5.5h7a.5.5,0,0,0,.5-.5V12.792l6-3.556V9.5a.5.5,0,0,0,.5.5h1.372L28.026,22H24.5A.5.5,0,0,0,24,22.5ZM30,28H26V24h4ZM34,8H30V4h4Z"
  }));
}