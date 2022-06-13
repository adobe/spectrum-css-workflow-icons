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
exports.A4uGraphic = A4uGraphic;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uGraphic(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M33,14H24V1.385a.482.482,0,0,0-.481-.5H23.5a.494.494,0,0,0-.35.147L1.091,23.146A.5.5,0,0,0,1.445,24h8.838A7.909,7.909,0,0,0,10,26a7.976,7.976,0,0,0,14.89,4H33a1,1,0,0,0,1-1V15A1,1,0,0,0,33,14ZM4.828,22,22,4.828V14H19a1,1,0,0,0-1,1v3a7.967,7.967,0,0,0-6.891,4ZM18,32a6,6,0,1,1,6-6A6.007,6.007,0,0,1,18,32Z"
  }));
}