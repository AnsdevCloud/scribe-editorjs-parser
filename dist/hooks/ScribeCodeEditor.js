"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = _interopRequireDefault(require("@monaco-editor/react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ScribeCodeEditor = function ScribeCodeEditor(_ref) {
  var code = _ref.code,
    language = _ref.language;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isConpy = _useState2[0],
    setIsCopy = _useState2[1];
  var editorRef = (0, _react.useRef)(null);
  var handleEditorDidMount = function handleEditorDidMount(editor) {
    editorRef.current = editor;
  };
  var copyCodeToClipboard = function copyCodeToClipboard() {
    var code = editorRef.current.getValue();
    navigator.clipboard.writeText(code).then(function () {
      setIsCopy(true);
    })["catch"](function (err) {
      console.error("Failed to copy text: ", err);
    });
  };
  return /*#__PURE__*/_react["default"].createElement(Wrapper, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "scribe-editor-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "scribe-editor-header"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "scribe-code-label"
  }, language), /*#__PURE__*/_react["default"].createElement("button", {
    className: "scribe-copy-button",
    id: "scribe-copy-btn_ac",
    onClick: copyCodeToClipboard
  }, isConpy ? "Code Copied" : "Code Copy ")), /*#__PURE__*/_react["default"].createElement(_react2["default"], {
    height: "auto",
    className: "scribe-code-tools",
    width: "100%",
    language: language.toLocaleLowerCase() || "javascript",
    value: code || "// Hello Word",
    theme: "auto",
    options: {
      readOnly: true,
      // Make the editor read-only
      fontSize: 14,
      // Set the font size
      lineNumbers: "on",
      // Show line numbers ('on', 'off', 'relative', or 'interval')
      minimap: {
        enabled: false
      },
      // Show the minimap
      wordWrap: 'on',
      // Enable word wrapping
      scrollBeyondLastLine: false,
      // Prevent scrolling beyond the last line
      automaticLayout: true // Automatically adjust layout
    },
    onMount: handleEditorDidMount
  })));
};
var _default = exports["default"] = ScribeCodeEditor;
var Wrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n/* Container for the editor and the button */\n.scribe-editor-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100px;\n  align-items: flex-start;\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  background-color: #3a3535;\n  .scribe-editor-header{\n    width: 100%;\n    height: 40px;\n    padding: 5px 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: \"#000000\";\n    .scribe-code-label{\n        font-size: 12px;\n        color: #ffffffc3;\n        text-transform: capitalize;\n    }\n\n    /* Style for the copy button */\n\n.scribe-copy-button {\n  background-color: #161616;\n  color: #ffffffd9;\n  font-size: 10px;\n        text-transform: uppercase;\n\n  padding: 2px 5px ;\n  border: 1px solid #ffffff5b;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n}\n/* Hover effect for the copy button */\n\n\n    .scribe-copy-button:hover {\n   background-color: #232020;\n}\n}\n}\n\n\n\n  \n"])));