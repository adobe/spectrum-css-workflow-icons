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
exports.A4uOrbit = A4uOrbit;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uOrbit(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M27.757,13.871A7.983,7.983,0,0,0,12.7,8.748c-.662-.051-1.318-.09-1.948-.09C5.305,8.658,1.157,10.549.2,14-.84,17.769,2.238,22.372,7.556,25.946L4.709,29.361A.381.381,0,0,0,5,29.986H17.9l-5.81-8.716a.382.382,0,0,0-.61-.033L9.511,23.6c-4.5-2.942-7-6.5-6.371-8.787.522-1.888,3.512-3.108,7.617-3.108.411,0,.842.036,1.266.061,0,.08-.023.154-.023.234a7.985,7.985,0,0,0,14.477,4.664c4.4,2.921,6.809,6.428,6.182,8.69-.521,1.888-3.511,3.108-7.614,3.108-.566,0-1.149-.031-1.74-.082a.761.761,0,0,0-.835.751v1.532a.772.772,0,0,0,.706.767c.637.05,1.262.079,1.869.079,5.45,0,9.6-1.891,10.552-5.342C36.673,22.279,33.388,17.489,27.757,13.871Z"
  }));
}