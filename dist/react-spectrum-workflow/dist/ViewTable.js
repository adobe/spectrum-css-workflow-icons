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
exports.A4uViewTable = A4uViewTable;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uViewTable(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M33,2H3c-.55228,0-1,.44772-1,1v7h32V3c0-.55228-.44772-1-1-1Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M33,34H14v-6h20v5c0,.55228-.44772,1-1,1Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M12,34H3c-.55228,0-1-.44772-1-1v-5h10v6Z"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    x: "14",
    y: "12",
    width: "20",
    height: "6"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    x: "14",
    y: "20",
    width: "20",
    height: "6"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    x: "2",
    y: "12",
    width: "10",
    height: "6"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    x: "2",
    y: "20",
    width: "10",
    height: "6"
  }));
}