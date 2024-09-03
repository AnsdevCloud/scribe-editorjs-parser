"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ScribeDelimiter = function ScribeDelimiter(_ref) {
  var showDelimiter = _ref.showDelimiter;
  if (!showDelimiter) return null;
  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    className: "scribe-delimiter"
  });
};
var _default = exports["default"] = ScribeDelimiter;
var Wrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nposition: relative;\nwidth: 100%;\ntext-align: center;\n&::before{\n  display: inline-block;\n    content: \"***\";\n    color: inherit;\n    font-size: 30px;\n    line-height: 65px;\n    height: 30px;\n    letter-spacing: .2em;\n}\n    \n"])));