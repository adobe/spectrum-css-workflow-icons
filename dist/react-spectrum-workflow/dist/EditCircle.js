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
exports.A4uEditCircle = A4uEditCircle;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uEditCircle(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm9.7,11.918L16.449,25.167a.732.732,0,0,1-.309.185c-1.076.323-7.141,2.436-7.347,2.483-.014,0-.045,0-.045,0-.241,0-.668-.353-.583-.633l2.482-7.342a.738.738,0,0,1,.187-.313L22.082,8.3a1.019,1.019,0,0,1,.69-.3H22.8a.905.905,0,0,1,.645.263l4.292,4.292a.911.911,0,0,1,.261.706A1.022,1.022,0,0,1,27.7,13.918Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10.822,25.184c1.025-.306,2.814-1.059,4-1.416L12.23,21.183Z"
  }));
}