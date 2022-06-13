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
exports.A4uGraphStream = A4uGraphStream;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uGraphStream(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M24,10c-4.947,0-5.356-6-10-6C9.787,4,8.1,10.567,2,11.788v2.85A16.034,16.034,0,0,0,8.336,12.51,11.374,11.374,0,0,1,14,10.75a10.6,10.6,0,0,1,6.354,2.4A6.635,6.635,0,0,0,24,14.75a14.535,14.535,0,0,0,4.082-.762A28.181,28.181,0,0,1,34,12.843V6.165C29.646,6.916,28.346,10,24,10Zm0,13.25a16.5,16.5,0,0,0-4.242.887A20.569,20.569,0,0,1,14,25.25a29.526,29.526,0,0,1-7.283-1.033A33.457,33.457,0,0,0,2,23.349v2.832C6.329,26.956,9.168,30,14,30c3.46,0,7.064-2,10-2,2.637,0,4.518,3.217,10,3.875v-6.73a39.216,39.216,0,0,1-5.76-1.117A19.554,19.554,0,0,0,24,23.25Zm0-6c-2.094,0-3.6-1.035-5.061-2.035S16.076,13.25,14,13.25a9.131,9.131,0,0,0-4.5,1.471A18.469,18.469,0,0,1,2,17.149v3.688a34.9,34.9,0,0,1,5.293.946A27.036,27.036,0,0,0,14,22.75a18.768,18.768,0,0,0,5.053-1.01A18.018,18.018,0,0,1,24,20.75a21.058,21.058,0,0,1,4.848.852A38.535,38.535,0,0,0,34,22.631V15.342a25.875,25.875,0,0,0-5.232,1.048A16.625,16.625,0,0,1,24,17.25Z"
  }));
}