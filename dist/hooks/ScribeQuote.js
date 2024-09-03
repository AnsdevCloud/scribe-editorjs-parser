"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ScribeQuote = function ScribeQuote(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "scribe-quote-container"
  }, /*#__PURE__*/_react["default"].createElement("blockquote", {
    className: "scribe-quote " + (data === null || data === void 0 ? void 0 : data.alignment)
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "scribe-quote-text",
    dangerouslySetInnerHTML: {
      __html: data.text
    }
  }), data.caption && /*#__PURE__*/_react["default"].createElement("footer", {
    className: "scribe-quote-caption"
  }, data.caption)));
};
var _default = exports["default"] = ScribeQuote;