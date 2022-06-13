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
exports.A4uMoveTo = A4uMoveTo;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uMoveTo(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M21.879,20.344a1,1,0,0,1-1.414,0l-4.809-4.809a1,1,0,0,1,0-1.414L23.777,6H3A1,1,0,0,0,2,7V33a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V12.223Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M23.707,2a.5.5,0,0,0-.353.854l3.482,3.482L18.7,14.475a.5.5,0,0,0,0,.707L20.818,17.3a.5.5,0,0,0,.707,0l8.139-8.139,3.482,3.483A.5.5,0,0,0,34,12.293V2Z"
  }));
}