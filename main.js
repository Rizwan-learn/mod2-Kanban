/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: \\\"Segoe UI\\\", \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.car-card {\\r\\n  width: 25%;\\r\\n  margin: 20px;\\r\\n  padding: 10px;\\r\\n  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);\\r\\n}\\r\\n\\r\\n.full-container {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.car-img img {\\r\\n  width: 100%;\\r\\n  height: 27vh;\\r\\n}\\r\\n\\r\\n.car-info {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.car-info h2 {\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.comment-button {\\r\\n  padding: 8px;\\r\\n  border: none;\\r\\n  background-color: #18b020;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.reservation-button {\\r\\n  padding: 8px;\\r\\n  border: none;\\r\\n  background-color: #9e18b0;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.card-text {\\r\\n  color: rgb(94 94 94);\\r\\n}\\r\\n\\r\\n.modal-container {\\r\\n  display: block;\\r\\n  position: fixed;\\r\\n  z-index: 1;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: auto;\\r\\n  background-color: rgb(0 0 0);\\r\\n  background-color: rgb(0 0 0 / 40%);\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  background-color: #fefefe;\\r\\n  margin: 1rem auto;\\r\\n  padding: 20px;\\r\\n  border: 1px solid #888;\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n.img-container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.modal-content img {\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n.informations-det {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.infocar {\\r\\n  margin-left: 3rem;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.rowinfo {\\r\\n  display: flex;\\r\\n  gap: 8rem;\\r\\n}\\r\\n\\r\\n.rowinfo1 {\\r\\n  display: flex;\\r\\n  gap: 5rem;\\r\\n}\\r\\n\\r\\n.comment-section {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.form-info {\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n.form-info1 {\\r\\n  margin-left: 3rem;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  background-color: #f4f4f4;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n  border: none;\\r\\n  margin-top: 10px;\\r\\n  height: 10vh;\\r\\n  background-color: #f4f4f4;\\r\\n}\\r\\n\\r\\n.name-color {\\r\\n  color: #9e18b0;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.comment-text {\\r\\n  font-size: 13px;\\r\\n  color: #6c6c6c;\\r\\n}\\r\\n\\r\\n.comment-container {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border-top: 5px solid black;\\r\\n}\\r\\n\\r\\nfooter h4 {\\r\\n  color: rgb(45 45 45);\\r\\n  margin-left: 2%;\\r\\n}\\r\\n\\r\\n.logo-img {\\r\\n  width: 250px;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 50px;\\r\\n  margin: 20px 0 0 50px;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.right-block {\\r\\n  display: flex;\\r\\n  font-size: 30px;\\r\\n  gap: 20px;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.poke-img {\\r\\n  width: 250px;\\r\\n}\\r\\n\\r\\n.right-block li {\\r\\n  padding: 0 20px 0 0;\\r\\n}\\r\\n\\r\\n.carnim {\\r\\n  display: flex;\\r\\n  margin-left: 8%;\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.cars-nav-element {\\r\\n  margin-left: 1%;\\r\\n}\\r\\n\\r\\n.left-block img {\\r\\n  width: 65px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mv-modules2-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://mv-modules2-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://mv-modules2-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mv-modules2-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mv-modules2-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mv-modules2-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mv-modules2-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mv-modules2-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mv-modules2-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mv-modules2-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Modules/comments/comment-counter.js":
/*!*************************************************!*\
  !*** ./src/Modules/comments/comment-counter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (commentData) => {\n  if (commentData.length) {\n    return commentData.length;\n  }\n\n  return 0;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n\n//# sourceURL=webpack://mv-modules2-capstone/./src/Modules/comments/comment-counter.js?");

/***/ }),

/***/ "./src/Modules/comments/commentData.js":
/*!*********************************************!*\
  !*** ./src/Modules/comments/commentData.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CommentData {\n  constructor(username, comment, id) {\n    this.username = username;\n    this.comment = comment;\n    this.item_id = id;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentData);\n\n\n//# sourceURL=webpack://mv-modules2-capstone/./src/Modules/comments/commentData.js?");

/***/ }),

/***/ "./src/Modules/comments/comments-app.js":
/*!**********************************************!*\
  !*** ./src/Modules/comments/comments-app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createComment\": () => (/* binding */ createComment),\n/* harmony export */   \"showCommentModal\": () => (/* binding */ showCommentModal)\n/* harmony export */ });\n/* harmony import */ var _home_cars_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/cars-api.js */ \"./src/Modules/home/cars-api.js\");\n/* harmony import */ var _commentData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentData.js */ \"./src/Modules/comments/commentData.js\");\n/* harmony import */ var _createComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createComments.js */ \"./src/Modules/comments/createComments.js\");\n/* harmony import */ var _comment_counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment-counter.js */ \"./src/Modules/comments/comment-counter.js\");\n\n\n\n\n\nconst carApi = new _home_cars_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nconst modalContainer = document.querySelector(\n  '#modal-container',\n);\n\nconst renderComment = (dataItem) => `<li class=\"comment-text text-lg\">\n        <span>${dataItem.creation_date}</span> -\n        <span class=\"text-slate-600 mx-2 name-color\">${dataItem.username} : </span>\n        <span>${dataItem.comment}</span>\n      </li>`;\n\nconst displayCommentCounter = (data) => {\n  const numberOfComments = (0,_comment_counter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\n  const commentCounterElement = document.querySelector(\n    '#modal .comment-counter-header',\n  );\n\n  commentCounterElement.textContent = `(${numberOfComments})`;\n};\n\nconst displayComment = (data) => {\n  const CommentContainer = document.querySelector(\n    '#modal .comment-container',\n  );\n  if (data.length > 0) {\n    let containerString = '';\n    data.forEach((dataItem) => {\n      containerString += `${renderComment(dataItem)} \\n`;\n    });\n\n    CommentContainer.innerHTML = containerString;\n  } else {\n    CommentContainer.innerHTML = '';\n  }\n};\n\nconst createComment = (event) => {\n  event.preventDefault();\n  const api = new _createComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  const form = document.querySelector('.form');\n  const comBtn = document.querySelector('.form button');\n  const id = Number(comBtn.id.split('-')[2]);\n  const usernameInput = document.querySelector('.form .input');\n  const commentInput = document.querySelector(\n    '#modal-container .modal-items form textarea',\n  );\n\n  const username = usernameInput.value;\n  const comment = commentInput.value;\n  const commentObj = new _commentData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](username, comment, id);\n\n  api\n    .addComment(commentObj)\n    .then(() => api.getComment(id))\n    .then((data) => {\n      displayComment(data);\n      displayCommentCounter(data);\n    });\n  form.reset();\n};\n\nconst showCommentModal = async (e) => {\n  const id = Number(e.target.parentNode.parentNode.id);\n  await carApi.getDataPromise().then((data) => {\n    if (modalContainer.classList.contains('hidden')) {\n      modalContainer.classList.add('show');\n      modalContainer.classList.remove('hidden');\n    }\n\n    modalContainer.innerHTML = `\n    <div\n    class=\"modal-container relative h-auto modal-items m-auto bg-white border-violet-600 border-solid border-4\"\n    id=\"modal\"\n  >\n  <div class=\"modal-content\">\n    <div class=\"h-96 img-container\">\n      <h2 class=\"text-center text-xl text-slate-600 py-5 font-bold\">${data[id].make}</h2>\n      <span id=\"close-modal-btn\" class=\"close\">\n        <i\n          class=\"fas fa-times absolute top-0 right-0 mt-3 mr-3 text-3xl text-white cursor-pointer\"\n        ></i>\n      </span>\n    </div>\n    <div class=\"informations-det\">\n    <img\n        class=\"w-full h-full object-cover\"\n        src=\"${data[id].imgUrl}\"\n        alt=\"\"\n      />\n    <div class=\"infocar flex justify-between flex-col w-1/2 mx-auto gap-y-5\">\n      <div class=\"flex justify-between w-full mx-auto flex-wrap gap-y-5\">\n      <div class=\"rowinfo\">\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>Model</h3>\n          <span class=\"text-slate-600\">${data[id].model}</span>\n        </div>\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>Year</h3>\n          <span class=\"text-slate-600\">${data[id].year}</span>\n        </div>\n        </div>\n        <div class=\"rowinfo1\">\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>horsepower</h3>\n          <span class=\"text-slate-600\">${data[id].horsepower}</span>\n        </div>\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>Price</h3>\n          <span class=\"text-slate-600\">$${data[id].price}</span>\n        </div>\n        </div>\n      </div>\n    </div>\n    </div>\n    <div class=\"comment-section\">\n    <div class=\"form-info\">\n    <h2 class=\"text-center py-4 text-xl font-bold text-slate-600\">\n    Add Comment\n  </h2>\n  <form class=\"flex justify-center flex-col mx-auto items-center form\" id='comment-form'>\n\n  <input class=\"px-2 w-1/2 py-2 border-gray-400 rounded-lg h-10 focus:outline-none\n    focus:border-violet-600 input\" placeholder=\"Enter your username\" />\n   <textarea\n      class=\"w-1/2 h-32 px-2 py-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-violet-600 comment\"\n      placeholder=\"Write your comment here\" type=\"text\" \n    ></textarea>\n    \n    <button\n      id=\"comment-button-${id}\"\n      class=\"comment-button text-lg px-2 w-40 my-5 h py-1 mx-auto border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500 rounded-lg\"\n      type=\"submit\"\n    >\n      Comment\n    </button>\n  </form>\n    </div>\n      <div class=\"form-info1\">\n      <h2 class=\"text-center text-xl py-4 font-bold text-slate-600\">\n      Comments <span class=\"comment-counter-header\"></span>\n    </h2>\n    <ul class=\"comment-container flex justify-center flex-col mx-auto items-center py-2\">\n    </ul>\n      </div>\n    </div>\n    </div>\n  </div>\n    `;\n  });\n\n  const form1 = document.querySelector('.form');\n  form1.addEventListener('submit', createComment);\n\n  // load comments\n  const api = new _createComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n  await api\n    .getComment(id)\n    .then((commentData) => {\n      displayComment(commentData);\n      displayCommentCounter(commentData);\n    })\n    .catch((commentData) => {\n      displayComment([]);\n      displayCommentCounter(commentData);\n    });\n\n  const close = document.querySelector(\n    '#modal-container .modal-items .img-container .close',\n  );\n  close.addEventListener('click', () => {\n    modalContainer.classList.add('hidden');\n    modalContainer.classList.remove('show');\n  });\n};\n\n\n//# sourceURL=webpack://mv-modules2-capstone/./src/Modules/comments/comments-app.js?");

/***/ }),

/***/ "./src/Modules/comments/createComments.js":
/*!************************************************!*\
  !*** ./src/Modules/comments/createComments.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Api)\n/* harmony export */ });\nclass Api {\n  constructor(\n    url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',\n  ) {\n    this.projectId = 'K2k68wPBsTKAT68ziNEu';\n    this.rootEndpoint = url;\n    this.commentsEndpoint = `${url}${this.projectId}/comments`;\n  }\n\n  #getComment = async (\n    rootUrl = this.commentsEndpoint,\n    id,\n  ) => {\n    try {\n      const url = `${rootUrl}?item_id=${id}`;\n      const response = await fetch(url, {\n        method: 'GET',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      });\n\n      return response.json();\n    } catch (error) {\n      return [];\n    }\n  };\n\n  #addComment = async (\n    url = this.commentsEndpoint,\n    bodyData,\n  ) => {\n    await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(bodyData),\n    });\n  };\n\n  addComment = (bodyData) => this.#addComment(this.commentsEndpoint, bodyData);\n\n  getComment = (id) => this.#getComment(this.commentsEndpoint, id);\n}\n\n\n//# sourceURL=webpack://mv-modules2-capstone/./src/Modules/comments/createComments.js?");

/***/ }),

/***/ "./src/Modules/home/car.js":
/*!*********************************!*\
  !*** ./src/Modules/home/car.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n  constructor(\n    year,\n    id,\n    horsepower,\n    make,\n    model,\n    price,\n    imgUrl,\n  ) {\n    this.year = year;\n    this.id = id;\n    this.horsepower = horsepower;\n    this.make = make;\n    this.model = model;\n    this.price = price;\n    this.imgUrl = imgUrl;\n    this.like = false;\n  }\n}\n\n//# sourceURL=webpack://mv-modules2-capstone/./src/Modules/home/car.js?");

/***/ }),

/***/ "./src/Modules/home/cars-api.js":
/*!**************************************!*\
  !*** ./src/Modules/home/cars-api.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CarsApi)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/Modules/home/car.js\");\n/* harmony import */ var _home_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-utils.js */ \"./src/Modules/home/home-utils.js\");\n\n// eslint-disable-next-line import/newline-after-import\n\nclass CarsApi {\n  constructor(\n    url = 'https://private-anon-66fbb79774-carsapi1.apiary-mock.com/',\n  ) {\n    this.rootEndpoint = url;\n    this.allCarsEndpoint = `${url}cars`;\n    this.goodCarsId = _home_utils_js__WEBPACK_IMPORTED_MODULE_1__.goodCarsId;\n    this.dataPromise = this.getAllCars().then((data) => this.#formatCars(data));\n  }\n\n  getDataPromise = () => this.dataPromise;\n\n  #formatCars = (data) => {\n    const dataObj = {};\n    data.forEach((car) => {\n      const id = `${car.id}`;\n      dataObj[id] = car;\n    });\n    return dataObj;\n  };\n\n  getCarEndpointFromId = (id) => `${this.allCarsEndpoint}/${id}`;\n\n  #formatData = (data) => data.map((obj) => {\n    const car = new _car_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    car.year = obj.year;\n    car.id = obj.id;\n    car.horsepower = obj.horsepower;\n    car.make = obj.make;\n    car.model = obj.model;\n    car.price = obj.price;\n    car.imgUrl = obj.img_url;\n    return car;\n  });\n\n  getAllCars = async (url = this.allCarsEndpoint) => {\n    const response = await fetch(url, {\n      method: 'GET',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    });\n    let data = await response.json();\n    data = data.filter((obj) => this.goodCarsId.includes(obj.id));\n    data = await this.#formatData(data);\n    return data;\n  };\n}\n\n\n//# sourceURL=webpack://mv-modules2-capstone/./src/Modules/home/cars-api.js?");

/***/ }),

/***/ "./src/Modules/home/home-app.js":
/*!**************************************!*\
  !*** ./src/Modules/home/home-app.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomeApplication\": () => (/* binding */ HomeApplication),\n/* harmony export */   \"getAllCarsCount\": () => (/* binding */ getAllCarsCount)\n/* harmony export */ });\n/* harmony import */ var _cars_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cars-api.js */ \"./src/Modules/home/cars-api.js\");\n/* harmony import */ var _home_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-utils.js */ \"./src/Modules/home/home-utils.js\");\n/* harmony import */ var _involvement_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./involvement-api.js */ \"./src/Modules/home/involvement-api.js\");\n\n\n\n\nclass HomeApplication {\n  constructor() {\n    this.carsApi = new _cars_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    // DOM elements\n    this.main = document.querySelector('main');\n\n    this.involvementApi = new _involvement_api_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  }\n\n  initialize = () => this.getANumberOfCars(24).then(() => this.#updateLikes());\n\n  getAllCars = () => this.carsApi.getAllCars().then((data) => {\n    this.#displayCars(data);\n    return data;\n  });\n\n  getANumberOfCars = (number) => this.carsApi.getAllCars().then((data) => {\n    const toBeDisplayed = data.slice(0, number);\n\n    this.#displayCars(toBeDisplayed);\n\n    return data;\n  });\n\n  #clearMain = () => {\n    this.main.innerHTML = '';\n  };\n\n  #createCarElement = (car) => (0,_home_utils_js__WEBPACK_IMPORTED_MODULE_1__.carRender)(car.id, car.imgUrl, car.make, car.model);\n\n  #displayCars = (toBeDisplayed) => {\n    this.#clearMain();\n    const mainContent = toBeDisplayed.reduce(\n      (content, car) => {\n        const carElement = this.#createCarElement(car);\n        return `${content}\\n${carElement}`;\n      },\n      '',\n    );\n    this.main.innerHTML = mainContent;\n  };\n\n  toggleHeart = (e) => {\n    if (e.currentTarget.classList.contains('heart')) {\n      const heartButton = e.currentTarget;\n      const heartCount = heartButton.nextSibling.nextSibling.firstChild;\n      const { id } = heartButton.parentNode.parentNode.parentNode;\n      const data = {};\n      data.item_id = Number(id);\n\n      if (heartButton.className === _home_utils_js__WEBPACK_IMPORTED_MODULE_1__.likeClass) {\n        heartButton.className = _home_utils_js__WEBPACK_IMPORTED_MODULE_1__.unlikeClass;\n        heartCount.textContent = +heartCount.textContent - 1;\n      } else {\n        heartButton.className = _home_utils_js__WEBPACK_IMPORTED_MODULE_1__.likeClass;\n        heartCount.textContent = +heartCount.textContent + 1;\n        this.involvementApi.setLikesData(data);\n      }\n    }\n  };\n\n  #updateLikes = () => {\n    this.involvementApi.getLikesData().then((data) => {\n      const likesElements = document.querySelectorAll('.likes');\n      likesElements.forEach((like) => {\n        const { id } = like.parentNode.parentNode.parentNode.parentNode;\n        let numberOfLikes = data.find(\n          (e) => Number(e.item_id) === Number(id),\n        );\n        if (numberOfLikes === undefined) {\n          numberOfLikes = 0;\n        } else {\n          numberOfLikes = numberOfLikes.likes;\n        }\n        like.textContent = numberOfLikes;\n      });\n    });\n  };\n}\n\nconst getAllCarsCount = () => {\n  const main = document.querySelector('main');\n  return main.childElementCount;\n};\n\n//# sourceURL=webpack://mv-modules2-capstone/./src/Modules/home/home-app.js?");

/***/ }),

/***/ "./src/Modules/home/home-utils.js":
/*!****************************************!*\
  !*** ./src/Modules/home/home-utils.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carRender\": () => (/* binding */ carRender),\n/* harmony export */   \"fileExists\": () => (/* binding */ fileExists),\n/* harmony export */   \"goodCarsId\": () => (/* binding */ goodCarsId),\n/* harmony export */   \"likeClass\": () => (/* binding */ likeClass),\n/* harmony export */   \"unlikeClass\": () => (/* binding */ unlikeClass)\n/* harmony export */ });\nconst likeClass = 'heart fas fa-heart';\nconst unlikeClass = 'heart far fa-heart';\nconst carRender = (\n  id,\n  imgUrl,\n  make,\n  model,\n  likes = 0,\n) => `<div\n      class=\"car-card flex flex-col gap-2 border-4 rounded-md border-violet-600\" id=\"${id}\">\n      <div class=\"car-img h-50 object-cover\">\n        <img class=\"w-full\"\n          src=\"${imgUrl}\"\n          alt=\"${make.toUpperCase()} ${model.toUpperCase()}\">\n      </div>\n      <div class=\"car-info flex justify-between p-2 mt-auto\">\n        <h2>${make.toUpperCase()} ${model.toUpperCase()}</h2>\n        <div class=\"flex flex-col items-center text-red-600\">\n          <i class=\"${unlikeClass}\"></i>\n          <span class=\"text-black\"><span class=\"likes\">${likes}</span> <span>likes</span></span>\n        </div>\n      </div>\n      <p class=\"card-text text-secondary\">Some quick example text to build on the card title and make up the bulk of thecard's content.</p>\n      <div class=\"car-buttons flex flex-col gap-3 p-2 \">\n        <button id=\"model\" class=\"comment-button px-2 py-1 border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500\"\n          type=\"button\">Comment</button>\n        <button\n          class=\"reservation-button px-2 py-1 border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500\"\n          type=\"button\">Reservation</button>\n      </div>\n\n    </div>`;\n\nconst fileExists = (imageUrl) => {\n  const http = new XMLHttpRequest();\n\n  http.open('HEAD', imageUrl, false);\n  http.send();\n\n  return Number(http.status) !== 404;\n};\n\nconst goodCarsId = [\n  1, 5, 7, 8, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 25,\n  26, 29, 31, 32, 34, 35, 39, 41, 43, 48, 49, 50, 51, 53,\n  55, 56, 57, 58, 60, 62, 63, 64, 65, 68, 69, 73, 75, 76,\n  79, 83, 84, 85, 86, 87, 88, 90, 95, 98, 100, 101, 102,\n  104, 105, 106, 107, 108, 109, 110, 112, 113, 114, 115,\n  116, 117, 118, 119, 122, 123, 124, 126, 128, 129, 130,\n  133, 134, 139, 141, 143, 144, 145, 146, 147, 148, 149,\n  150, 151, 154, 155, 157, 158, 161, 162, 163, 164, 165,\n  166, 168, 169, 171, 172, 178, 179, 180, 181, 183, 184,\n  185, 188, 189, 192, 194, 196, 197, 198, 199, 200, 203,\n  205, 207, 214, 215, 216, 217, 219, 230, 240, 244, 245,\n  246, 247, 250, 251, 252, 254, 255, 259, 260, 261, 262,\n  263, 271, 273, 274, 277, 278, 281, 282, 283, 284, 285,\n  286, 288, 290, 292, 294, 295, 296, 298, 300, 301, 302,\n  303, 304, 305, 306, 307, 313, 315, 318, 319, 322, 323,\n  324, 325, 326, 327, 329, 330, 332, 333, 335, 336, 337,\n  338, 345, 346, 347, 348, 350, 351, 353, 354, 355, 357,\n  359, 361, 362, 366, 369, 371,\n];\n\n\n//# sourceURL=webpack://mv-modules2-capstone/./src/Modules/home/home-utils.js?");

/***/ }),

/***/ "./src/Modules/home/involvement-api.js":
/*!*********************************************!*\
  !*** ./src/Modules/home/involvement-api.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InvolvementApi)\n/* harmony export */ });\nclass InvolvementApi {\n  constructor(\n    url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',\n  ) {\n    this.projectId = 'K2k68wPBsTKAT68ziNEu';\n    this.rootEndpoint = url;\n    this.likesEndpoint = `${url}${this.projectId}/likes`;\n    this.likesData = this.#getLikes();\n  }\n\n    getLikesData = () => this.likesData;\n\n    setLikesData = async (bodyData) => {\n      await this.#addLike(this.likesEndpoint, bodyData);\n      this.likesData = await this.#getLikes();\n      return this.likesData;\n    };\n\n    #getLikes = async (url = this.likesEndpoint) => {\n      const response = await fetch(url, {\n        method: 'GET',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      });\n\n      return response.json();\n    };\n\n    #addLike = async (url = this.likesEndpoint, bodyData) => {\n      await fetch(url, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(bodyData),\n      });\n    };\n}\n\n//# sourceURL=webpack://mv-modules2-capstone/./src/Modules/home/involvement-api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Modules_home_home_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/home/home-app.js */ \"./src/Modules/home/home-app.js\");\n/* harmony import */ var _Modules_comments_comments_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/comments/comments-app.js */ \"./src/Modules/comments/comments-app.js\");\n\n\n\n\nconst homeApp = new _Modules_home_home_app_js__WEBPACK_IMPORTED_MODULE_1__.HomeApplication();\n\nconst registerHomeEvents = () => {\n  const likesButtons = document.querySelectorAll('.heart');\n  const allCarsCount = document.querySelector('.cars-nav-element');\n\n  allCarsCount.textContent = (0,_Modules_home_home_app_js__WEBPACK_IMPORTED_MODULE_1__.getAllCarsCount)();\n\n  likesButtons.forEach((likeButton) => likeButton.addEventListener(\n    'click',\n    homeApp.toggleHeart,\n  ));\n\n  const commentButtons = document.querySelectorAll(\n    '.car-buttons > .comment-button',\n  );\n\n  commentButtons.forEach((btn) => btn.addEventListener('click', _Modules_comments_comments_app_js__WEBPACK_IMPORTED_MODULE_2__.showCommentModal));\n};\n\nhomeApp.initialize().then(() => {\n  registerHomeEvents();\n});\n\n\n//# sourceURL=webpack://mv-modules2-capstone/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;