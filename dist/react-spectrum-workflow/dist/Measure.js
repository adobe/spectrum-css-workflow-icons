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
exports.A4uMeasure = A4uMeasure;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uMeasure(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M25.071,2.444,2.444,25.071a1,1,0,0,0,0,1.414l7.071,7.071a1,1,0,0,0,1.414,0l3.535-3.535-5.3-5.3a.5.5,0,0,1,0-.707l.707-.707a.5.5,0,0,1,.707,0l5.3,5.3,5.657-5.657-3.89-3.889a.5.5,0,0,1,0-.707l.708-.708a.5.5,0,0,1,.707,0l3.889,3.89,5.657-5.657-5.3-5.3a.5.5,0,0,1,0-.707l.707-.707a.5.5,0,0,1,.708,0l5.3,5.3,3.535-3.535a1,1,0,0,0,0-1.414L26.485,2.444A1,1,0,0,0,25.071,2.444Z"
  }));
}