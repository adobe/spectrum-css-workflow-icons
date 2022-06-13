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
exports.A4uMapView = A4uMapView;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uMapView(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M25.6,2.106,18,5.905,10.447,2.128a1,1,0,0,0-.894,0l-7,3.5A1,1,0,0,0,2,6.523V32.287a1,1,0,0,0,1.447.894L10,29.905l7.553,3.776a1,1,0,0,0,.894,0L26,29.905l8.629,3.451A1,1,0,0,0,36,32.428V6.582a1,1,0,0,0-.629-.929L26.417,2.072A1,1,0,0,0,25.6,2.106ZM18,31.741l-8-4V4l8,4Zm16-.711-8-3.125v-24L34,7.03Z"
  }));
}