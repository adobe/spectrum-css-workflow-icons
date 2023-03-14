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
exports.A4uChevronUpDown = A4uChevronUpDown;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uChevronUpDown(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M28,11.98a2,2,0,0,1-3.411,1.411L18.012,6.818l-6.578,6.572a2,2,0,0,1-2.874-2.773l.049-.049L16.6,2.585a2,2,0,0,1,2.825,0h0l7.989,7.983A1.989,1.989,0,0,1,28,11.98Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M8,24.02a2,2,0,0,1,3.411-1.411l6.578,6.572,6.578-6.572a2,2,0,0,1,2.874,2.773l-.049.049L19.4,33.414a2,2,0,0,1-2.825,0h0L8.586,25.431A1.989,1.989,0,0,1,8,24.02Z",
    "data-name": "S_UpChevron"
  }));
}