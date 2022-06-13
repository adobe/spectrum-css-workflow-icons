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
exports.A4uPerspective = A4uPerspective;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uPerspective(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M2,3.281V34.557a1,1,0,0,0,1.351.936l30-11.25A1,1,0,0,0,34,23.307V10.781a1,1,0,0,0-.757-.97l-30-7.5A1,1,0,0,0,2,3.281ZM32,16.117l-6,.4v-6.5l6,1.446ZM16,17.19V7.613l8,1.929v7.112Zm8,1.356v7.126L16,28.61V19.191ZM14,7.131V17.324L4,18V4.72ZM4,20.16l10-.807v9.992L4,33.017Zm22,4.778V18.384l6-.484v4.834Z"
  }));
}