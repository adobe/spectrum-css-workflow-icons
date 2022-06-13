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
exports.A4uShowOneLayer = A4uShowOneLayer;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uShowOneLayer(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M33.113,17.905,25.68,14.12l7.433-3.769c.241-.123.241-.323,0-.446L18.425,2.425a.98.98,0,0,0-.85,0L2.887,9.9c-.241.123-.241.323,0,.446l7.407,3.782L2.887,17.905c-.241.123-.241.323,0,.446l7.4,3.767-7.4,3.787c-.241.123-.241.323,0,.446L17.575,33.83a.971.971,0,0,0,.85,0l14.688-7.479c.241-.123.241-.323,0-.446l-7.43-3.771,7.43-3.783C33.354,18.228,33.354,18.028,33.113,17.905ZM6.857,10.128,18,4.453l11.144,5.675L23.477,13l-5.052-2.572a.936.936,0,0,0-.85,0L12.5,13.011Zm22.287,16L18,31.8,6.857,26.128l5.632-2.887,5.086,2.589a.936.936,0,0,0,.85,0l5.054-2.574Z"
  }));
}