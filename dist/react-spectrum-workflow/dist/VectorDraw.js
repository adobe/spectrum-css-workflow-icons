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
exports.A4uVectorDraw = A4uVectorDraw;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uVectorDraw(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M33.134,11.26,24.718,2.846a1.068,1.068,0,0,0-1.51,0L19.491,6.562a1.052,1.052,0,0,0-.147,1.289l8.42,8.42.008-.017.186.183a1.066,1.066,0,0,0,1.509,0l3.667-3.666A1.066,1.066,0,0,0,33.134,11.26Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M17.462,9.383,9.585,13.011a2,2,0,0,0-1.011,1.051L1.979,29.973a1,1,0,0,0,.216,1.09l.523.523,8.156-8.157a1.619,1.619,0,0,1-.037-.254,2,2,0,1,1,2,2,1.684,1.684,0,0,1-.276-.04L4.414,33.283l.592.592a1,1,0,0,0,1.09.217l15.913-6.6a2,2,0,0,0,1.05-1.011l3.628-7.876Z"
  }));
}