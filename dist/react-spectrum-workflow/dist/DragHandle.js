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
exports.A4uDragHandle = A4uDragHandle;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uDragHandle(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "14",
    cy: "26",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "14",
    cy: "20",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "14",
    cy: "14",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "14",
    cy: "8",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "20",
    cy: "26",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "20",
    cy: "20",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "20",
    cy: "14",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "20",
    cy: "8",
    r: "2"
  }));
}