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
exports.A4uPrintPreview = A4uPrintPreview;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uPrintPreview(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("polygon", {
    fillRule: "evenodd",
    points: "10 2 10 10 2 10 10 2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M11.7,23A11.3,11.3,0,0,1,23,11.7c.338,0,.67.021,1,.05V3a1,1,0,0,0-1-1H12v9a1,1,0,0,1-1,1H2V27a1,1,0,0,0,1,1h9.878A11.229,11.229,0,0,1,11.7,23Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M35.191,32.143,30.646,27.6A9.066,9.066,0,1,0,27.6,30.646l4.545,4.545a2.044,2.044,0,0,0,3.048,0A2.195,2.195,0,0,0,35.191,32.143ZM17.412,22.98a5.568,5.568,0,1,1,5.568,5.567A5.568,5.568,0,0,1,17.412,22.98Z"
  }));
}