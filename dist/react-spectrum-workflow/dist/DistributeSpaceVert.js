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
exports.A4uDistributeSpaceVert = A4uDistributeSpaceVert;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uDistributeSpaceVert(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    height: "10",
    rx: "1",
    ry: "1",
    width: "24",
    x: "10",
    y: "22"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    height: "12",
    rx: "1",
    ry: "1",
    width: "16",
    x: "12",
    y: "4"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M7.5,16a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H4V10.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V14H.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H2v6H.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5H2v3.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V24H7.5a.5.5,0,0,0,.5-.5v-1a.5.5,0,0,0-.5-.5H4V16Z"
  }));
}