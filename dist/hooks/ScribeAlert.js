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
var ScribeAlert = function ScribeAlert(_ref) {
  var message = _ref.message,
    type = _ref.type,
    align = _ref.align;
  switch (type) {
    case "primary":
      return /*#__PURE__*/_react["default"].createElement(Wrapper, {
        $align: align,
        $bg: "#d8f4ff",
        $border: "#2eb2e6",
        className: 'scribe-alert-container primary'
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "scribe-align"
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "scribe-alert-message",
        dangerouslySetInnerHTML: {
          __html: message
        }
      })));
      break;
    case "info":
      return /*#__PURE__*/_react["default"].createElement(Wrapper, {
        $align: align,
        $bg: "#b7deff",
        $border: "#35a8f6",
        className: "scribe-alert-container info"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "scribe-align"
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "scribe-alert-message",
        dangerouslySetInnerHTML: {
          __html: message
        }
      })));
      break;
    case "secondary":
      return /*#__PURE__*/_react["default"].createElement(Wrapper, {
        $align: align,
        $bg: "#f1f5f9",
        $border: "#3c3d3d",
        className: "scribe-alert-container secondary"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "scribe-align"
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "scribe-alert-message",
        dangerouslySetInnerHTML: {
          __html: message
        }
      })));
      break;
    case "success":
      return /*#__PURE__*/_react["default"].createElement(Wrapper, {
        $align: align,
        $bg: "#c7f2d2",
        $border: "#13ce32",
        className: "scribe-alert-container success"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "scribe-align"
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "scribe-alert-message",
        dangerouslySetInnerHTML: {
          __html: message
        }
      })));
      break;
    case "warning":
      return /*#__PURE__*/_react["default"].createElement(Wrapper, {
        $align: align,
        $bg: "#f2e4c7",
        $border: "#d28315",
        className: "scribe-alert-container warning"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "scribe-align"
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "scribe-alert-message",
        dangerouslySetInnerHTML: {
          __html: message
        }
      })));
      break;
    case "danger":
      return /*#__PURE__*/_react["default"].createElement(Wrapper, {
        $align: align,
        $bg: "#f2c7c7",
        $border: "#d21515",
        className: "scribe-alert-container danger"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "scribe-align"
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "scribe-alert-message",
        dangerouslySetInnerHTML: {
          __html: message
        }
      })));
      break;
    case "light":
      return /*#__PURE__*/_react["default"].createElement(Wrapper, {
        $align: align,
        $bg: "#f8f8f8",
        $border: "#000000",
        className: "scribe-alert-container light"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "scribe-align"
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "scribe-alert-message",
        dangerouslySetInnerHTML: {
          __html: message
        }
      })));
      break;
    case "dark":
      return /*#__PURE__*/_react["default"].createElement(Wrapper, {
        $align: align,
        $color: "#f9f9f9",
        $bg: "#06102d",
        $border: "#1a1d24",
        className: "scribe-alert-container dark"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "scribe-align"
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "scribe-alert-message",
        dangerouslySetInnerHTML: {
          __html: message
        }
      })));
      break;
    default:
      /*#__PURE__*/_react["default"].createElement(Wrapper, {
        $align: align,
        $color: "#1f0101",
        $bg: "#ffffff",
        $border: "#000000",
        className: "scribe-alert-container defalt"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "scribe-align"
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "scribe-alert-message",
        dangerouslySetInnerHTML: {
          __html: message
        }
      })));
      break;
  }
};
var _default = exports["default"] = ScribeAlert;
var Wrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nposition: relative;\nwidth: 100%;\nheight: fit-content;\npadding: 5px;\nborder: 2px solid ", ";\nbackdrop-filter: blur(5px);\nbackground-color: ", ";\nborder-radius: 4px;\n.scribe-align{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    .scribe-alert-message{\n        width: 100%;\n        color: ", ";\n        font-size: 1vmax;\n        text-align: ", ";\n    }\n}\n  \n"])), function (props) {
  return props.$border;
}, function (props) {
  return props.$bg;
}, function (props) {
  return props.$color ? props === null || props === void 0 ? void 0 : props.$color : "#000";
}, function (props) {
  return props.$align;
});