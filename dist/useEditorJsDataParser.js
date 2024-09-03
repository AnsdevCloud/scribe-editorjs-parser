"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ScribeHeader = _interopRequireDefault(require("./hooks/ScribeHeader"));
var _ScribeList = _interopRequireDefault(require("./hooks/ScribeList"));
var _ScribeQuote = _interopRequireDefault(require("./hooks/ScribeQuote"));
var _ScribeCodeEditor = _interopRequireDefault(require("./hooks/ScribeCodeEditor"));
var _ScribeMusicPlayer = _interopRequireDefault(require("./hooks/ScribeMusicPlayer"));
var _ScribeAlert = _interopRequireDefault(require("./hooks/ScribeAlert"));
var _ScribeTable = _interopRequireDefault(require("./hooks/ScribeTable"));
var _ScribeDelimiter = _interopRequireDefault(require("./hooks/ScribeDelimiter"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import MyMonacoEditor from '../editorparser/components/MonocoEditor';
// import RenderList from '../editorparser/components/List';
// import DynamicHader from '../editorparser/components/DynamicHader';
// import SpotifyPlayer from '../editorparser/components/AudioPlayer';
// import AlertMessage from '../editorparser/components/AlertMessage';
// import TableRenderer from '../editorparser/components/Table';
// import DelimiterRenderer from '../editorparser/components/Delimiter';
// import QuoteRenderer from '../editorparser/components/Quote';

var useEditorJsParser = function useEditorJsParser(_ref) {
  var data = _ref.data;
  var RenderBlock = function RenderBlock(_ref2) {
    var _block$data, _block$data2, _block$data3, _block$data4, _block$data5, _block$data6, _block$data7, _block$data8, _block$data9, _block$data10, _block$data11, _block$data12, _block$data13, _block$data14, _block$data15, _block$data16, _block$data17, _block$data18;
    var block = _ref2.block;
    switch (block.type) {
      case 'header':
        return /*#__PURE__*/_react["default"].createElement(_ScribeHeader["default"], {
          level: block.data.level,
          text: block.data.text
        });
      case 'paragraph':
        return /*#__PURE__*/_react["default"].createElement("p", {
          className: "scribe-pragraph",
          dangerouslySetInnerHTML: {
            __html: block.data.text
          }
        });
      case 'image':
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "scribe-image-container"
        }, /*#__PURE__*/_react["default"].createElement("img", {
          className: "scribe-image",
          src: block.data.file.url,
          alt: block.data.caption || 'Scribe Image'
        }), block.data.caption && /*#__PURE__*/_react["default"].createElement("span", {
          className: "scribe-image-caption",
          dangerouslySetInnerHTML: {
            __html: block.data.caption
          }
        }));
      case 'list':
        return /*#__PURE__*/_react["default"].createElement(_ScribeList["default"], {
          items: block === null || block === void 0 || (_block$data = block.data) === null || _block$data === void 0 ? void 0 : _block$data.items,
          type: block === null || block === void 0 || (_block$data2 = block.data) === null || _block$data2 === void 0 ? void 0 : _block$data2.style
        });
      case 'quote':
        return /*#__PURE__*/_react["default"].createElement(_ScribeQuote["default"], {
          data: block === null || block === void 0 ? void 0 : block.data
        });
      case 'code':
        return /*#__PURE__*/_react["default"].createElement(_ScribeCodeEditor["default"], {
          code: block.data.code,
          language: block.data.language
        });
      case 'raw':
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "scribe-raw-container"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "scribe-raw-render",
          dangerouslySetInnerHTML: {
            __html: block === null || block === void 0 || (_block$data3 = block.data) === null || _block$data3 === void 0 ? void 0 : _block$data3.html
          }
        }));
      case 'linkTool':
        return /*#__PURE__*/_react["default"].createElement("a", {
          className: "scribe-main-link",
          href: block === null || block === void 0 || (_block$data4 = block.data) === null || _block$data4 === void 0 ? void 0 : _block$data4.link,
          target: "_blank",
          rel: "noopener noreferrer"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "scribe-link-container"
        }, /*#__PURE__*/_react["default"].createElement("img", {
          className: "scribe-link-image",
          src: block === null || block === void 0 || (_block$data5 = block.data) === null || _block$data5 === void 0 || (_block$data5 = _block$data5.meta) === null || _block$data5 === void 0 || (_block$data5 = _block$data5.image) === null || _block$data5 === void 0 ? void 0 : _block$data5.url,
          alt: block === null || block === void 0 || (_block$data6 = block.data) === null || _block$data6 === void 0 || (_block$data6 = _block$data6.meta) === null || _block$data6 === void 0 ? void 0 : _block$data6.title
        }), /*#__PURE__*/_react["default"].createElement("h1", {
          className: "scribe-link-title"
        }, block === null || block === void 0 || (_block$data7 = block.data) === null || _block$data7 === void 0 || (_block$data7 = _block$data7.meta) === null || _block$data7 === void 0 ? void 0 : _block$data7.title), /*#__PURE__*/_react["default"].createElement("p", {
          className: "scribe-link-description"
        }, block === null || block === void 0 || (_block$data8 = block.data) === null || _block$data8 === void 0 || (_block$data8 = _block$data8.meta) === null || _block$data8 === void 0 ? void 0 : _block$data8.description), /*#__PURE__*/_react["default"].createElement("a", {
          className: "scribe-link-url",
          href: block === null || block === void 0 || (_block$data9 = block.data) === null || _block$data9 === void 0 ? void 0 : _block$data9.link,
          target: "_blank",
          rel: "noopener noreferrer"
        }, block === null || block === void 0 || (_block$data10 = block.data) === null || _block$data10 === void 0 ? void 0 : _block$data10.link)));
      case 'embed':
        return /*#__PURE__*/_react["default"].createElement("iframe", {
          className: "scribe-embed-container",
          width: (block === null || block === void 0 || (_block$data11 = block.data) === null || _block$data11 === void 0 ? void 0 : _block$data11.width) || "300px",
          height: (block === null || block === void 0 || (_block$data12 = block.data) === null || _block$data12 === void 0 ? void 0 : _block$data12.height) || "300px",
          src: block === null || block === void 0 || (_block$data13 = block.data) === null || _block$data13 === void 0 ? void 0 : _block$data13.embed,
          title: "Scribe Emabed Code - ".concat(block === null || block === void 0 ? void 0 : block.id),
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        });
      case 'audioPlayer':
        return /*#__PURE__*/_react["default"].createElement(_ScribeMusicPlayer["default"], {
          artistName: "Ansdev Cloud",
          src: block === null || block === void 0 || (_block$data14 = block.data) === null || _block$data14 === void 0 ? void 0 : _block$data14.src,
          trackTitle: "Aurd"
        });
      case 'alert':
        return /*#__PURE__*/_react["default"].createElement(_ScribeAlert["default"], {
          align: block === null || block === void 0 || (_block$data15 = block.data) === null || _block$data15 === void 0 ? void 0 : _block$data15.align,
          message: block === null || block === void 0 || (_block$data16 = block.data) === null || _block$data16 === void 0 ? void 0 : _block$data16.message,
          type: block === null || block === void 0 || (_block$data17 = block.data) === null || _block$data17 === void 0 ? void 0 : _block$data17.type
        });
      case 'table':
        return /*#__PURE__*/_react["default"].createElement(_ScribeTable["default"], {
          data: block === null || block === void 0 ? void 0 : block.data,
          withHeadings: block === null || block === void 0 || (_block$data18 = block.data) === null || _block$data18 === void 0 ? void 0 : _block$data18.withHeadings
        });
      case 'delimiter':
        return /*#__PURE__*/_react["default"].createElement(_ScribeDelimiter["default"], {
          showDelimiter: true
        });
      case 'Quote':
        return /*#__PURE__*/_react["default"].createElement(_ScribeQuote["default"], {
          data: block === null || block === void 0 ? void 0 : block.data
        });
      default:
        return null;
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "scribe-parser",
    id: "scribe-ac-parser"
  }, data === null || data === void 0 ? void 0 : data.map(function (block, index) {
    return /*#__PURE__*/_react["default"].createElement(RenderBlock, {
      block: block,
      key: index
    });
  }));
};
var _default = exports["default"] = useEditorJsParser;