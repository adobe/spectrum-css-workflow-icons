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
exports.A4uDraft = A4uDraft;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uDraft(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("polygon", {
    fillRule: "evenodd",
    points: "20 2 20 12 30 12 20 2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M35.785,21.721,32.28,18.215A.739.739,0,0,0,31.753,18h-.023a.833.833,0,0,0-.564.247L20.344,29.069a.608.608,0,0,0-.153.256l-2.027,6c-.069.229.279.517.476.517a.313.313,0,0,0,.037,0c.168-.039,5.123-1.764,6-2.028a.6.6,0,0,0,.252-.151L35.753,22.834A.835.835,0,0,0,36,22.3.743.743,0,0,0,35.785,21.721Zm-11.6,10.963c-1.314.395-3.3,1.229-4.43,1.568l1.56-4.431Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M19,14a1,1,0,0,1-1-1V2H7A1,1,0,0,0,6,3V33a1,1,0,0,0,1,1h9.079l1.839-5.443a2.827,2.827,0,0,1,.752-1.207L30,16.127V14Z"
  }));
}