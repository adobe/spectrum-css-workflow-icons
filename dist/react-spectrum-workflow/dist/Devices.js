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
exports.A4uDevices = A4uDevices;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uDevices(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18,22H6V6H34V4a2,2,0,0,0-2-2H2A2,2,0,0,0,0,4V24a2,2,0,0,0,2,2H18ZM3,16.5A2.5,2.5,0,1,1,5.5,14,2.5,2.5,0,0,1,3,16.5Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M34,8H22a2,2,0,0,0-2,2V34a2,2,0,0,0,2,2H34a2,2,0,0,0,2-2V10A2,2,0,0,0,34,8Zm-7,2h2a1,1,0,0,1,0,2H27a1,1,0,0,1,0-2Zm1,25.1A2.1,2.1,0,1,1,30.1,33,2.1,2.1,0,0,1,28,35.1ZM34,30H22V14H34Z"
  }));
}