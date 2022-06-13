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
exports.A4uNote = A4uNote;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uNote(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M33,2H3A1,1,0,0,0,2,3V27a1,1,0,0,0,1,1H14l3.536,6.839a.5.5,0,0,0,.928,0L22,28H33a1,1,0,0,0,1-1V3A1,1,0,0,0,33,2ZM8.5,8h17a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5H8.5A.5.5,0,0,1,8,9.5v-1A.5.5,0,0,1,8.5,8Zm17,14H8.5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h17a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,25.5,22Zm4-6H8.5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h21a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,29.5,16Z"
  }));
}