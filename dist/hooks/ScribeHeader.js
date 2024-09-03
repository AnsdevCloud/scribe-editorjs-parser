"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ScribeHeader = function ScribeHeader(_ref) {
  var lavel = _ref.lavel,
    text = _ref.text;
  switch (lavel) {
    case 1:
      return /*#__PURE__*/_react["default"].createElement("h1", {
        className: "scribe-heading  scribe-h1",
        dangerouslySetInnerHTML: {
          __html: text
        }
      });
      break;
    case 2:
      return /*#__PURE__*/_react["default"].createElement("h2", {
        className: "scribe-heading  scribe-h2",
        dangerouslySetInnerHTML: {
          __html: text
        }
      });
      break;
    case 3:
      return /*#__PURE__*/_react["default"].createElement("h3", {
        className: "scribe-heading  scribe-h3",
        dangerouslySetInnerHTML: {
          __html: text
        }
      });
      break;
    case 4:
      return /*#__PURE__*/_react["default"].createElement("h3", {
        className: "scribe-heading  scribe-h4",
        dangerouslySetInnerHTML: {
          __html: text
        }
      });
      break;
    case 5:
      return /*#__PURE__*/_react["default"].createElement("h5", {
        className: "scribe-heading  scribe-h5",
        dangerouslySetInnerHTML: {
          __html: text
        }
      });
      break;
    case 6:
      return /*#__PURE__*/_react["default"].createElement("h6", {
        className: "scribe-heading  scribe-h6",
        dangerouslySetInnerHTML: {
          __html: text
        }
      });
      break;
    default:
      return /*#__PURE__*/_react["default"].createElement("h3", {
        className: "scribe-heading  scribe-h3"
      });
      break;
  }
};
var _default = exports["default"] = ScribeHeader;