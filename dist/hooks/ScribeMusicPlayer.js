"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
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
var ScribeMusicPlayer = function ScribeMusicPlayer(_ref) {
  var src = _ref.src,
    trackTitle = _ref.trackTitle,
    artistName = _ref.artistName;
  var audioRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPlaying = _useState2[0],
    setIsPlaying = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    currentTime = _useState4[0],
    setCurrentTime = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    duration = _useState6[0],
    setDuration = _useState6[1];
  var _useState7 = (0, _react.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    volume = _useState8[0],
    setVolume = _useState8[1];
  var togglePlayPause = function togglePlayPause() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  var handleTimeUpdate = function handleTimeUpdate() {
    setCurrentTime(audioRef.current.currentTime);
  };
  var handleLoadedMetadata = function handleLoadedMetadata() {
    setDuration(audioRef.current.duration);
  };
  var handleVolumeChange = function handleVolumeChange(e) {
    var volume = e.target.value;
    setVolume(volume);
    audioRef.current.volume = volume;
  };
  var skipForward = function skipForward() {
    audioRef.current.currentTime = Math.min(currentTime + 10, duration);
  };
  var skipBackward = function skipBackward() {
    audioRef.current.currentTime = Math.max(currentTime - 10, 0);
  };
  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    className: "scribe-player"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "scribe-track-info"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "scribe-music-title"
  }, trackTitle), /*#__PURE__*/_react["default"].createElement("p", {
    className: "scribe-music-artist"
  }, artistName)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "scribe-controls"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "scribe-skip-button",
    onClick: skipBackward
  }, "\u23EE"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "scribe-play-pause-button",
    onClick: togglePlayPause
  }, isPlaying ? '⏸' : '▶️'), /*#__PURE__*/_react["default"].createElement("button", {
    className: "scribe-skip-button",
    onClick: skipForward
  }, "\u23ED")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "scribe-progress-container"
  }, /*#__PURE__*/_react["default"].createElement("progress", {
    value: currentTime,
    max: duration
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "scribe-time"
  }, Math.floor(currentTime), " / ", Math.floor(duration), " sec")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "scribe-volume-control"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "range",
    min: "0",
    max: "1",
    step: "0.01",
    value: volume,
    onChange: handleVolumeChange
  })), /*#__PURE__*/_react["default"].createElement("audio", {
    ref: audioRef,
    src: src,
    onTimeUpdate: handleTimeUpdate,
    onLoadedMetadata: handleLoadedMetadata
  }));
};
var _default = exports["default"] = ScribeMusicPlayer;
var Wrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  /* ScribeMusicPlayer.css */\n\n.scribe-player {\n  display: flex;\n  align-items: center;\n  background-color: #282828;\n  padding: 10px 20px;\n  border-radius: 10px;\n  color: white;\n  width: 500px;\n  font-family: Arial, sans-serif;\n}\n\n.scribe-track-info {\n  flex: 2;\n}\n\n.scribe-track-info h4 {\n  margin: 0;\n  font-size: 16px;\n  color: #1db954;\n}\n\n.scribe-track-info p {\n  margin: 5px 0 0;\n  font-size: 14px;\n  color: #b3b3b3;\n}\n\n.scribe-controls {\n  flex: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.scribe-skip-button, .scribe-play-pause-button {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.scribe-skip-button:hover, .scribe-play-pause-button:hover {\n  color: #1db954;\n}\n\n.scribe-progress-container {\n  flex: 2;\n  display: flex;\n  align-items: center;\n  margin: 0 20px;\n}\n\n.scribe-progress-container progress {\n  width: 100%;\n  height: 5px;\n  background-color: #404040;\n  border-radius: 5px;\n  margin-right: 10px;\n}\n\n.scribe-progress-container .scribe-time {\n  font-size: 12px;\n  color: #b3b3b3;\n}\n\n.scribe-volume-control {\n  flex: 1;\n}\n\n.scribe-volume-control input[type=\"range\"] {\n  width: 100%;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: #404040;\n  height: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.scribe-volume-control input[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 12px;\n  height: 12px;\n  background-color: #1db954;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.scribe-volume-control input[type=\"range\"]::-moz-range-thumb {\n  width: 12px;\n  height: 12px;\n  background-color: #1db954;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n"])));