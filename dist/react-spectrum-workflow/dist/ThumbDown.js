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
exports.A4uThumbDown = A4uThumbDown;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uThumbDown(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    height: "18",
    rx: "1",
    ry: "1",
    width: "6",
    x: "2",
    y: "6"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M31.077,21.89H21.11A63.859,63.859,0,0,1,22,31.08C22,32.741,20.968,34,20,34a1.839,1.839,0,0,1-2-2,11.326,11.326,0,0,0-2.516-6.258A46.35,46.35,0,0,0,10,20.958V6s2.809.033,14,0a3.946,3.946,0,0,1,3.677,2.424l5.128,10.788A1.862,1.862,0,0,1,31.077,21.89Z"
  }));
}