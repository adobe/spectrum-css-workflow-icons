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
exports.A4uGame = A4uGame;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uGame(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M35.091,24.854,32.562,16.4C30.835,10.635,25.988,6.02,20.529,6.02H14.708C9.248,6.02,4.4,10.635,2.675,16.4L.145,24.854c-.727,2.427,1.4,4.708,3.551,3.81l1.61-1.294a19.328,19.328,0,0,1,24.624,0l1.61,1.294C33.692,29.562,35.818,27.281,35.091,24.854Zm-23.81-4.085a5,5,0,1,1,5-5A5,5,0,0,1,11.281,20.769ZM23.114,16.2a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,23.114,16.2ZM28.5,23A3.5,3.5,0,1,1,32,19.5,3.5,3.5,0,0,1,28.5,23Z",
    transform: "translate(0)"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fillRule: "evenodd",
    cx: "11.281",
    cy: "15.769",
    r: "2.5"
  }));
}