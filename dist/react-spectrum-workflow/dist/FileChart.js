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
exports.A4uFileChart = A4uFileChart;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uFileChart(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("polygon", {
    fillRule: "evenodd",
    points: "20 2 20 12 30 12 20 2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M19,14H30V33a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V3A1,1,0,0,1,7,2H18V13A1,1,0,0,0,19,14Zm.5,10h-3a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,19.5,24Zm-6,2h-3a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5v-3A.5.5,0,0,0,13.5,26Zm12-6h-3a.5.5,0,0,0-.5.5v9a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5v-9A.5.5,0,0,0,25.5,20Z"
  }));
}