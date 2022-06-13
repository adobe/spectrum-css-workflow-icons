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
exports.A4uRibbon = A4uRibbon;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uRibbon(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M11.776,22.661,7.564,30.24a.5.5,0,0,0,.617.693L12.2,29.5a.5.5,0,0,1,.639.3l1.432,4.016a.5.5,0,0,0,.926.038l1.681-3.708-3.042-6.441A11.429,11.429,0,0,1,11.776,22.661Zm16.66,7.579-3.869-7.807a11.248,11.248,0,0,1-8.218,1.935l4.459,9.49a.5.5,0,0,0,.925-.038L23.165,29.8a.5.5,0,0,1,.64-.3l4.014,1.432A.5.5,0,0,0,28.436,30.24Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18,4a9,9,0,1,0,9,9A9,9,0,0,0,18,4Zm0,14.5A5.5,5.5,0,1,1,23.5,13,5.5,5.5,0,0,1,18,18.5Z"
  }));
}