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
exports.A4uStarburst = A4uStarburst;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uStarburst(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18.1,3.325l2.52,7.087,6.793-3.229a.5.5,0,0,1,.666.666l-3.229,6.793,7.087,2.52a.5.5,0,0,1,0,.942l-7.087,2.52,3.229,6.793a.5.5,0,0,1-.666.666l-6.793-3.229L18.1,31.942a.5.5,0,0,1-.942,0l-2.52-7.087L7.849,28.084a.5.5,0,0,1-.666-.666l3.229-6.793L3.325,18.1a.5.5,0,0,1,0-.942l7.087-2.52L7.183,7.849a.5.5,0,0,1,.666-.666l6.793,3.229,2.52-7.087A.5.5,0,0,1,18.1,3.325Z"
  }));
}