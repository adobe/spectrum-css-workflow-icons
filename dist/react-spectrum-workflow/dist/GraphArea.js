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
exports.A4uGraphArea = A4uGraphArea;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uGraphArea(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M30.371,16.743,34,24v9a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V18L12,30l3.584-5.376a.5.5,0,0,1,.832,0L20,30l9.517-13.324A.5.5,0,0,1,30.371,16.743Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M11.769,25.66l2.068-3.1.083-.124a2.5,2.5,0,0,1,4.16,0l.083.124,1.911,2.866,7.811-10.935.1-.135a2.5,2.5,0,0,1,4.271.335l.074.148L34,18.187V2L26,12,20.391,6.391a.5.5,0,0,0-.74.037L7.8,20.9Z"
  }));
}