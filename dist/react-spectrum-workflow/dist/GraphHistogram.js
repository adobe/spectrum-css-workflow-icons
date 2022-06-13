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
exports.A4uGraphHistogram = A4uGraphHistogram;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uGraphHistogram(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M33.5,30h-3a.5.5,0,0,0-.5.5v-4a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5v-6a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5v-8a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5V6.519A.519.519,0,0,0,17.481,6H14.519A.519.519,0,0,0,14,6.519V10.5a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5v10a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5v8a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5V34H34V30.5A.5.5,0,0,0,33.5,30Z"
  }));
}