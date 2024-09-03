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
var _ScribeList = function ScribeList(_ref) {
  var items = _ref.items,
    type = _ref.type;
  return /*#__PURE__*/_react["default"].createElement(Wrapper, null, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "scribe-list"
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: "scribe-list-item",
      key: index
    }, typeof item === 'string' ? item : /*#__PURE__*/_react["default"].createElement("div", {
      dangerouslySetInnerHTML: {
        __html: item.content
      }
    }), item.items && /*#__PURE__*/_react["default"].createElement(_ScribeList, {
      items: item.items
    }));
  })));
};
var _default = exports["default"] = _ScribeList;
var Wrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n/* MyMonacoEditor.css */\n\n/* Base style for the outermost list */\n.scribe-list {\n  list-style-type: none; /* Remove default bullet style */\n  padding-left: 10px;\n  margin: 5px 0;\n  font-family: Arial, sans-serif;\n  .scribe-list-item{\n    margin: 5px 10px;\n    position: relative;\n    line-height: 20px;\n    padding-left: 20px;\n    font-size: 1vmax;\n    width: \"100%\";\n    \n  }\n}\n\n/* Custom symbols for the outermost list and each level of nesting */\n\n.scribe-list > li::before {\n  content: \"\u2605\"; /* Star symbol */\n  color: #007bff;\n  position: absolute;\n  left: 0;\n  top: auto;\n  margin-right: 10px;\n}\n\n.scribe-list li .scribe-list > li::before {\n  content: \"\u2192\"; /* Arrow symbol */\n  color: #ff5722;\n  margin-right: 10px;\n}\n\n.scribe-list li .scribe-list li .scribe-list > li::before {\n  content: \"\u25C6\"; /* Diamond symbol */\n  color: #4caf50;\n  margin-right: 10px;\n}\n\n.scribe-list li .scribe-list li .scribe-list li .scribe-list > li::before {\n  content: \"\u2726\"; /* Sparkle symbol */\n  color: #9c27b0;\n  margin-right: 10px;\n}\n\n.scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list > li::before {\n  content: \"\u2738\"; /* Flower symbol */\n  color: #ff9800;\n  margin-right: 10px;\n}\n\n.scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list > li::before {\n  content: \"\u2735\"; /* Six-pointed star symbol */\n  color: #3f51b5;\n  margin-right: 10px;\n}\n\n.scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list > li::before {\n  content: \"\u2737\"; /* Star symbol */\n  color: #009688;\n  margin-right: 10px;\n}\n\n.scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list > li::before {\n  content: \"\u2756\"; /* Diamond with a dot symbol */\n  color: #c2185b;\n  margin-right: 10px;\n}\n\n.scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list > li::before {\n  content: \"\u273F\"; /* Flower symbol */\n  color: #8bc34a;\n  margin-right: 10px;\n}\n\n.scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list li .scribe-list > li::before {\n  content: \"\u26AB\"; /* Black circle symbol */\n  color: #607d8b;\n  margin-right: 10px;\n}\n\n/* Additional styles for all nested levels */\n.scribe-list li {\n  margin-bottom: 5px; /* Space between list items */\n}\n\n.scribe-list li a {\n  color: #007bff; /* Link color */\n  text-decoration: none;\n}\n\n.scribe-list li a:hover {\n  text-decoration: underline;\n}\n\n\n"])));