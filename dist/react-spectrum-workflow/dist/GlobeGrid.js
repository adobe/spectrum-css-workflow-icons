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
exports.A4uGlobeGrid = A4uGlobeGrid;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uGlobeGrid(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M17,0A17,17,0,1,0,34,17,17,17,0,0,0,17,0ZM30.749,16H25.178a27.12,27.12,0,0,0-.853-6h4.547A13.676,13.676,0,0,1,30.749,16ZM27.438,8H23.7A14.681,14.681,0,0,0,21.5,3.96,13.864,13.864,0,0,1,27.438,8ZM16,18v6H11.732a24.81,24.81,0,0,1-.911-6Zm-5.179-2a24.81,24.81,0,0,1,.911-6H16v6ZM18,18h5.179a24.81,24.81,0,0,1-.911,6H18Zm0-2V10h4.268a24.81,24.81,0,0,1,.911,6Zm3.568-8H18V3.619C19.307,4.158,20.6,5.7,21.568,8ZM16,3.619V8H12.432C13.4,5.7,14.693,4.158,16,3.619Zm-3.5.341A14.681,14.681,0,0,0,10.305,8H6.562A13.864,13.864,0,0,1,12.5,3.96ZM5.128,10H9.675a27.12,27.12,0,0,0-.853,6H3.251A13.676,13.676,0,0,1,5.128,10ZM3.251,18H8.822a27.12,27.12,0,0,0,.853,6H5.128A13.676,13.676,0,0,1,3.251,18Zm3.311,8h3.743A14.681,14.681,0,0,0,12.5,30.04,13.864,13.864,0,0,1,6.562,26Zm5.87,0H16v4.381C14.693,29.842,13.4,28.3,12.432,26ZM18,30.381V26h3.568C20.6,28.3,19.307,29.842,18,30.381Zm3.5-.341A14.681,14.681,0,0,0,23.7,26h3.743A13.864,13.864,0,0,1,21.5,30.04ZM28.872,24H24.325a27.12,27.12,0,0,0,.853-6h5.571A13.676,13.676,0,0,1,28.872,24Z"
  }));
}