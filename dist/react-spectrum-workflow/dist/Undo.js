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
exports.A4uUndo = A4uUndo;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uUndo(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M30.663,12.542A10.391,10.391,0,0,0,23.671,10L11,10V4.8a.8.8,0,0,0-.8-.8.787.787,0,0,0-.527.2L2.144,11.649a.5.5,0,0,0,0,.7L9.668,19.8a.787.787,0,0,0,.527.2.8.8,0,0,0,.8-.8V14H23.877A6.139,6.139,0,0,1,30.1,19.8,5.889,5.889,0,0,1,24,26H17a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h6.526a10.335,10.335,0,0,0,10.426-9.013A9.947,9.947,0,0,0,30.663,12.542Z"
  }));
}