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
exports.A4uIndividual = A4uIndividual;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uIndividual(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    height: "7",
    rx: "1",
    ry: "1",
    width: "7",
    x: "14.5",
    y: "14.5"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M29.5,12a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5V8H12V6.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5H8V24H6.5a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V28H24v1.5a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,0-.5-.5H28V12ZM26,24H24.5a.5.5,0,0,0-.5.5V26H12V24.5a.5.5,0,0,0-.5-.5H10V12h1.5a.5.5,0,0,0,.5-.5V10H24v1.5a.5.5,0,0,0,.5.5H26Z"
  }));
}