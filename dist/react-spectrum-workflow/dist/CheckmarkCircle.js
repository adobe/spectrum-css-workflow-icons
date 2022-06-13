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
exports.A4uCheckmarkCircle = A4uCheckmarkCircle;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uCheckmarkCircle(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18,2A16,16,0,1,0,34,18,16.00008,16.00008,0,0,0,18,2Zm10.666,9.08044L16.01758,27.34119a1.20831,1.20831,0,0,1-.875.46093c-.02344.002-.04883.002-.07227.002a1.19938,1.19938,0,0,1-.84961-.35157L6.43555,19.65759a1.2,1.2,0,0,1,0-1.69726l1.32617-1.3252a1.20121,1.20121,0,0,1,1.69531,0l5.3457,5.34668L25.31445,8.473A1.20291,1.20291,0,0,1,27,8.26306l1.45508,1.13281A1.20477,1.20477,0,0,1,28.666,11.08044Z"
  }));
}