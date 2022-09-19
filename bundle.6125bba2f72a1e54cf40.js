/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --default-bg-color: #18191a;\n  --default-text-color: #e6e6e6;\n  --default-text-secondary-color: white;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\na,\nhtml {\n  color: var(--default-text-color);\n}\n\na {\n  text-decoration: none;\n}\n\nhtml {\n  background-color: var(--default-bg-color);\n}\n\nhtml,\nbody,\nbody > .content {\n  min-height: 100vh;\n}\n\nbody > .content {\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  margin-top: auto;\n}\n\n.flex-horizontal-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.content-wrap {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n/* PRIMARY HEADER & NAV */\n\n.logo {\n  --length: 30px;\n  width: var(--length);\n  height: var(--length);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100%;\n}\n\n.primary-header {\n  padding: 24px 0 16px;\n}\n\n.primary-header > :first-child {\n  gap: 8px;\n}\n\n.primary-nav {\n  width: 100%;\n  padding: 18px 0 16px;\n  top: -2px; /* Fixes extra gap top */\n  position: sticky;\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 100;\n}\n\n.primary-nav > :first-child {\n  width: min(100%, 460px);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  gap: 12px;\n}\n\n.primary-nav button {\n  color: var(--default-text-color);\n  background-color: transparent;\n  text-transform: uppercase;\n  cursor: pointer;\n  border: none;\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.primary-nav button:hover {\n  text-decoration: underline;\n}\n\n.primary-nav button.current {\n  text-decoration: none;\n  color: var(--default-text-secondary-color);\n  cursor: default;\n}\n\n/* MAIN CONTENT */\n\nsection:first-of-type {\n  height: 600px;\n}\n\nsection {\n  height: 800px;\n}\n\nsection > :first-child {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  place-items: center;\n  height: 100%;\n  padding: 40px;\n}\n\nsection .content,\n.image-container {\n  grid-row: 1 / -1;\n}\n\nsection img {\n  position: absolute;\n}\n\nsection .content {\n  z-index: 10;\n  padding: 24px 36px;\n  background-color: var(--default-bg-color);\n}\n\n.image-container {\n  overflow: hidden;\n  position: relative;\n}\n\n.section-1 .image-container {\n  width: 640px;\n  height: 420px;\n  grid-column: 1 / 4;\n  border-radius: 160px 60px;\n}\n\n.section-1 img {\n  width: 100%;\n  bottom: -200px;\n}\n\n.section-1 .content {\n  grid-column: 3 / -1;\n  border-radius: 20px 40px;\n  padding-bottom: 32px;\n}\n\n.section-2 .image-container {\n  width: 420px;\n  height: 620px;\n  grid-column: 3 / -1;\n  border-radius: 60px 120px;\n}\n\n.section-2 img {\n  height: 100%;\n  left: -28px;\n}\n\n.section-2 .content {\n  grid-column: 1 / 4;\n  border-radius: 30px 40px 80px;\n  transform: translateX(30px);\n  padding-bottom: 40px;\n}\n\n.section-2 h2 {\n  padding-left: 6px;\n}\n\n.hours-table {\n  text-align: left;\n}\n\n.hours-table th,\n.hours-table td {\n  padding: 4px 24px 4px 4px;\n}\n\n.hours-table th:last-child,\n.hours-table td:last-child {\n  padding: 4px;\n}\n\n.hours-table th[scope=\"row\"] {\n  font-weight: 500;\n}\n\n.section-3 .image-container {\n  width: 640px;\n  height: 580px;\n  grid-column: 1 / 5;\n  border-radius: 200px 100px;\n  justify-self: start;\n  margin-left: 60px;\n}\n\n.section-3 img {\n  height: 100%;\n  left: -52px;\n}\n\n.section-3 .content {\n  grid-column: 3 / -1;\n  width: 300px;\n  border-radius: 30px 48px;\n  justify-self: start;\n  align-self: end;\n  margin-left: 120px;\n  margin-bottom: 176px;\n  padding: 24px 36px 30px;\n}\n\n/* FOOTER */\n\nfooter {\n  padding-bottom: 80px;\n}\n\nfooter > :first-child {\n  display: flex;\n  padding: 0 60px;\n  justify-content: space-between;\n}\n\nfooter .credits-container {\n  text-align: right;\n}\n\nfooter h3 {\n  padding-bottom: 8px;\n}\n\nfooter p {\n  padding-bottom: 4px;\n}\n\nfooter a,\nfooter .name {\n  color: var(--default-text-secondary-color);\n}\n\nfooter a:hover {\n  text-decoration: underline;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,6BAA6B;EAC7B,qCAAqC;AACvC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,4DAA4D;AAC9D;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;EAEE,gCAAgC;AAClC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;;;EAGE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA,yBAAyB;;AAEzB;EACE,cAAc;EACd,oBAAoB;EACpB,qBAAqB;EACrB,yDAAwC;EACxC,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,oBAAoB;EACpB,SAAS,EAAE,wBAAwB;EACnC,gBAAgB;EAChB,0BAA0B;EAC1B,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,gCAAgC;EAChC,6BAA6B;EAC7B,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;EACrB,0CAA0C;EAC1C,eAAe;AACjB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,YAAY;EACZ,aAAa;AACf;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,yCAAyC;AAC3C;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,wBAAwB;EACxB,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,2BAA2B;EAC3B,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,0BAA0B;EAC1B,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,wBAAwB;EACxB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA,WAAW;;AAEX;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,0CAA0C;AAC5C;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":[":root {\n  --default-bg-color: #18191a;\n  --default-text-color: #e6e6e6;\n  --default-text-secondary-color: white;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\na,\nhtml {\n  color: var(--default-text-color);\n}\n\na {\n  text-decoration: none;\n}\n\nhtml {\n  background-color: var(--default-bg-color);\n}\n\nhtml,\nbody,\nbody > .content {\n  min-height: 100vh;\n}\n\nbody > .content {\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  margin-top: auto;\n}\n\n.flex-horizontal-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.content-wrap {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n/* PRIMARY HEADER & NAV */\n\n.logo {\n  --length: 30px;\n  width: var(--length);\n  height: var(--length);\n  background-image: url(./images/logo.png);\n  background-size: 100%;\n}\n\n.primary-header {\n  padding: 24px 0 16px;\n}\n\n.primary-header > :first-child {\n  gap: 8px;\n}\n\n.primary-nav {\n  width: 100%;\n  padding: 18px 0 16px;\n  top: -2px; /* Fixes extra gap top */\n  position: sticky;\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 100;\n}\n\n.primary-nav > :first-child {\n  width: min(100%, 460px);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  gap: 12px;\n}\n\n.primary-nav button {\n  color: var(--default-text-color);\n  background-color: transparent;\n  text-transform: uppercase;\n  cursor: pointer;\n  border: none;\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.primary-nav button:hover {\n  text-decoration: underline;\n}\n\n.primary-nav button.current {\n  text-decoration: none;\n  color: var(--default-text-secondary-color);\n  cursor: default;\n}\n\n/* MAIN CONTENT */\n\nsection:first-of-type {\n  height: 600px;\n}\n\nsection {\n  height: 800px;\n}\n\nsection > :first-child {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  place-items: center;\n  height: 100%;\n  padding: 40px;\n}\n\nsection .content,\n.image-container {\n  grid-row: 1 / -1;\n}\n\nsection img {\n  position: absolute;\n}\n\nsection .content {\n  z-index: 10;\n  padding: 24px 36px;\n  background-color: var(--default-bg-color);\n}\n\n.image-container {\n  overflow: hidden;\n  position: relative;\n}\n\n.section-1 .image-container {\n  width: 640px;\n  height: 420px;\n  grid-column: 1 / 4;\n  border-radius: 160px 60px;\n}\n\n.section-1 img {\n  width: 100%;\n  bottom: -200px;\n}\n\n.section-1 .content {\n  grid-column: 3 / -1;\n  border-radius: 20px 40px;\n  padding-bottom: 32px;\n}\n\n.section-2 .image-container {\n  width: 420px;\n  height: 620px;\n  grid-column: 3 / -1;\n  border-radius: 60px 120px;\n}\n\n.section-2 img {\n  height: 100%;\n  left: -28px;\n}\n\n.section-2 .content {\n  grid-column: 1 / 4;\n  border-radius: 30px 40px 80px;\n  transform: translateX(30px);\n  padding-bottom: 40px;\n}\n\n.section-2 h2 {\n  padding-left: 6px;\n}\n\n.hours-table {\n  text-align: left;\n}\n\n.hours-table th,\n.hours-table td {\n  padding: 4px 24px 4px 4px;\n}\n\n.hours-table th:last-child,\n.hours-table td:last-child {\n  padding: 4px;\n}\n\n.hours-table th[scope=\"row\"] {\n  font-weight: 500;\n}\n\n.section-3 .image-container {\n  width: 640px;\n  height: 580px;\n  grid-column: 1 / 5;\n  border-radius: 200px 100px;\n  justify-self: start;\n  margin-left: 60px;\n}\n\n.section-3 img {\n  height: 100%;\n  left: -52px;\n}\n\n.section-3 .content {\n  grid-column: 3 / -1;\n  width: 300px;\n  border-radius: 30px 48px;\n  justify-self: start;\n  align-self: end;\n  margin-left: 120px;\n  margin-bottom: 176px;\n  padding: 24px 36px 30px;\n}\n\n/* FOOTER */\n\nfooter {\n  padding-bottom: 80px;\n}\n\nfooter > :first-child {\n  display: flex;\n  padding: 0 60px;\n  justify-content: space-between;\n}\n\nfooter .credits-container {\n  text-align: right;\n}\n\nfooter h3 {\n  padding-bottom: 8px;\n}\n\nfooter p {\n  padding-bottom: 4px;\n}\n\nfooter a,\nfooter .name {\n  color: var(--default-text-secondary-color);\n}\n\nfooter a:hover {\n  text-decoration: underline;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/ContentLoader.js":
/*!**************************************!*\
  !*** ./src/scripts/ContentLoader.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  load,
  loadFirst,
  loadBefore,
  loadAfter,
  loadMultiple,
  loadMultipleBefore,
  loadMultipleAfter,
});

const content = document.querySelector('.content');
const elements = {
  get content() { return content; },
  set content(value) { throw TypeError('Cannot set property \'content\', it is reserved and unmodifiable'); }
};

function load(element, name = '') {
  if (name) elements[name] = element;
  content.append(element);
}

function loadFirst(element, name = '') {
  if (name) elements[name] = element;
  content.prepend(element);
}

function loadMultiple(elements) {
  elements.forEach((element) => load(element));
}

function loadBefore(element, before, name = '') {
  if (name) elements[name] = element;

  if (before === 'content') {
    content.prepend(element);
    return;
  }

  if (!elements[before]) throw TypeError(`Cannot load before '${before}' since it does not exist`);
  elements[before].insertAdjacentElement('beforebegin', element);
}

function loadAfter(element, after, name = '') {
  if (name) elements[name] = element;
  
  if (after === 'content') {
    content.append(element);
    return;
  }

  if (!elements[after]) throw TypeError(`Cannot load after '${after}' since it does not exist`);
  elements[after].insertAdjacentElement('afterend', element);
}

function loadMultipleBefore(elements, before) {
  elements.forEach((element) => loadBefore(element, before));
}

function loadMultipleAfter(elements, after) {
  elements.forEach((element) => loadAfter(element, after));
}

/***/ }),

/***/ "./src/scripts/ElementCreator.js":
/*!***************************************!*\
  !*** ./src/scripts/ElementCreator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create,
  createText,
});

function createText(text) {
  return document.createTextNode(text);
}

function create(tag, optionsOrClassName = {}, childrenOrTextContent = []) {
  if (typeof optionsOrClassName === 'string') {
    const className = optionsOrClassName;
    optionsOrClassName = {};

    if (className) optionsOrClassName.className = className;
  }

  if (typeof childrenOrTextContent === 'string' || typeof childrenOrTextContent === 'number') {
    optionsOrClassName.textContent = childrenOrTextContent;
    childrenOrTextContent = [];
  }

  return assign(document.createElement(tag), optionsOrClassName, childrenOrTextContent);
}

function assign(element, options, children) {
  Object.assign(element, options);
  if (!Array.isArray(children)) {
    element.appendChild(children)
    return element;
  }

  children.forEach((child) => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
      return;
    }

    element.appendChild(child);
  });
  return element;
}


/***/ }),

/***/ "./src/scripts/loadFooter.js":
/*!***********************************!*\
  !*** ./src/scripts/loadFooter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ElementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementCreator */ "./src/scripts/ElementCreator.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('footer', '', 
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', 'content-wrap', [
      createInformation(),
      createCredits(),
    ]));
}

function createInformation() {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', 'information', [
    createAdvancedParagraph([
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('span', 'name', 'Sushi Sushi'),
      ', a restaurant page project for ',
      createLink('The Odin Project', 'https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page'),
      '.',
    ]),
    createAdvancedParagraph([
      'Made by ',
      createLink('Zekumoru', 'https://github.com/Zekumoru'),
    ]),
  ]);
}

function createCredits() {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', 'credits-container', [
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('h3', '', 'Image Credits'),
    createAdvancedParagraph([
      'Logo icon by ',
      createLink('surang', 'https://www.flaticon.com/authors/surang'),
    ]),
    createAdvancedParagraph([
      'First sushi image by ',
      createLink('Derek Duran', 'https://unsplash.com/@derekduran'),
    ]),
    createAdvancedParagraph([
      'Second sushi image by ',
      createLink('Fadya Azhary', 'https://unsplash.com/@fadsphoto23_'),
    ]),
    createAdvancedParagraph([
      'Third sushi image by ',
      createLink('Andraz Lazic', 'https://unsplash.com/@andrazlazic'),
    ]),
  ]);
}

function createAdvancedParagraph(nodes) {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('p', '', [
    ...nodes.map((node) => {
      if (typeof node !== 'string') return node;
      if (typeof node !== 'number') return node;
      return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createText(node);
    }),
  ]);
}

function createLink(text, url) {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('a', {
    href: url,
    target: '_blank',
    rel: 'noopener noreferrer',
  }, text);
}

/***/ }),

/***/ "./src/scripts/loadHomeContents.js":
/*!*****************************************!*\
  !*** ./src/scripts/loadHomeContents.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ElementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementCreator */ "./src/scripts/ElementCreator.js");
/* harmony import */ var _images_sushi_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/sushi.jpg */ "./src/images/sushi.jpg");
/* harmony import */ var _images_sushi_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/sushi-2.jpg */ "./src/images/sushi-2.jpg");
/* harmony import */ var _images_sushi_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/sushi-3.jpg */ "./src/images/sushi-3.jpg");





const images = [
  {
    src: _images_sushi_jpg__WEBPACK_IMPORTED_MODULE_1__,
    alt: '8 pieces sushi with salmon on top',
  },
  {
    src: _images_sushi_2_jpg__WEBPACK_IMPORTED_MODULE_2__,
    alt: 'board of mixed sushi',
  },
  {
    src: _images_sushi_3_jpg__WEBPACK_IMPORTED_MODULE_3__,
    alt: 'sushi, chopsticks, and a cup of soy sauce',
  },
];

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return [
    createSection('section-1', images[0], createContent('Only The Best', [
      createParagraph('All ingredients are carefully handpicked to give you the best of tastes.'),
      createParagraph('Each sushi with a story of its own flavour to tell.'),
    ])),
    createSection('section-2', images[1], createContent('Hours', createHoursTable())),
    createSection('section-3', images[2], createContent('Location', [
      createParagraph('123 Sushi Street, Tokyo, Japan'),
    ])),
  ];
};

function createSection(className, imageOptions, content) {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('section', className, 
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', 'content-wrap', [
      createImageContainer(imageOptions),
      content,
    ]));
}

function createImageContainer(imageOptions) {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', 'image-container', 
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('img', imageOptions));
}

function createContent(heading, children = []) {
  if (!Array.isArray(children)) children = [ children ];
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', 'content', [
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('h2', '', heading),
    ...children,
  ]);
}

function createParagraph(textContent) {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('p', '', textContent);
}

function createHoursTable() {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('table', 'hours-table',
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('tbody', '', [
      createHoursTableRow('Monday to Friday', '11:00 A.M. - 3:00 P.M.', '5:00 P.M. - 10:00 P.M.'),
      createHoursTableRow('Saturday', '11:00 A.M. - 3:00 P.M.', '5:00 P.M. - 12:00 A.M.'),
      createHoursTableRow('Sunday', '11:00 A.M. - 3:00 P.M.', ''),
    ]));
}

function createHoursTableRow(days, afternoon, evening) {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('tr', '', [
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('th', { scope: 'row' }, days),
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('td', '', afternoon),
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('td', '', evening),
  ]);
}

/***/ }),

/***/ "./src/scripts/loadPrimaryHeader.js":
/*!******************************************!*\
  !*** ./src/scripts/loadPrimaryHeader.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ElementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementCreator */ "./src/scripts/ElementCreator.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('header', 'primary-header', createContent());
};

function createContent() {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', 'content-wrap flex-horizontal-center', [
    createLogo(),
    createTitle(),
  ]);
}

function createLogo() {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', 'logo');
}

function createTitle() {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('p', 'title', 'Sushi Sushi');
}

/***/ }),

/***/ "./src/scripts/loadPrimaryNav.js":
/*!***************************************!*\
  !*** ./src/scripts/loadPrimaryNav.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ElementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementCreator */ "./src/scripts/ElementCreator.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(currentTab = 'home') {
  const primaryNav = _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('nav', 'primary-nav', createContent());
  primaryNav.querySelector(`.${currentTab}`).classList.add('current');
  return primaryNav;
};

function createContent() {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('ul', 'content-wrap', [
    createNavItem(createNavItemButton('home', 'Home')),
    createNavItem(createNavItemButton('menu', 'Menu')),
    createNavItem(createNavItemButton('contact', 'Contact')),
  ]);
}

function createNavItem(button) {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('li', '', button);
}

function createNavItemButton(className, textContent) {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('button', className, textContent);
}

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

/***/ }),

/***/ "./src/images/sushi-2.jpg":
/*!********************************!*\
  !*** ./src/images/sushi-2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sushi-2.jpg";

/***/ }),

/***/ "./src/images/sushi-3.jpg":
/*!********************************!*\
  !*** ./src/images/sushi-3.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sushi-3.jpg";

/***/ }),

/***/ "./src/images/sushi.jpg":
/*!******************************!*\
  !*** ./src/images/sushi.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sushi.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ContentLoader */ "./src/scripts/ContentLoader.js");
/* harmony import */ var _scripts_loadPrimaryHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/loadPrimaryHeader */ "./src/scripts/loadPrimaryHeader.js");
/* harmony import */ var _scripts_loadPrimaryNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/loadPrimaryNav */ "./src/scripts/loadPrimaryNav.js");
/* harmony import */ var _scripts_loadFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/loadFooter */ "./src/scripts/loadFooter.js");
/* harmony import */ var _scripts_loadHomeContents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/loadHomeContents */ "./src/scripts/loadHomeContents.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







_scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadFirst((0,_scripts_loadPrimaryHeader__WEBPACK_IMPORTED_MODULE_1__["default"])(), 'primary-header');
_scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadAfter((0,_scripts_loadPrimaryNav__WEBPACK_IMPORTED_MODULE_2__["default"])(), 'primary-header', 'primary-nav');
_scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].load((0,_scripts_loadFooter__WEBPACK_IMPORTED_MODULE_3__["default"])(), 'footer')

_scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadMultipleAfter((0,_scripts_loadHomeContents__WEBPACK_IMPORTED_MODULE_4__["default"])().reverse(), 'primary-nav');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsc0VBQWlCO0FBQ3pDLHdFQUF1QixDQUFDLG1FQUFjO0FBQ3RDLG1FQUFrQixDQUFDLCtEQUFVOztBQUU3QixnRkFBK0IsQ0FBQyxxRUFBZ0IsNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL0NvbnRlbnRMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9FbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2xvYWRGb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9sb2FkSG9tZUNvbnRlbnRzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvbG9hZFByaW1hcnlIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9sb2FkUHJpbWFyeU5hdi5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWRlZmF1bHQtYmctY29sb3I6ICMxODE5MWE7XFxuICAtLWRlZmF1bHQtdGV4dC1jb2xvcjogI2U2ZTZlNjtcXG4gIC0tZGVmYXVsdC10ZXh0LXNlY29uZGFyeS1jb2xvcjogd2hpdGU7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYSxcXG5odG1sIHtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtY29sb3IpO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LWJnLWNvbG9yKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5LFxcbmJvZHkgPiAuY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSA+IC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLmZsZXgtaG9yaXpvbnRhbC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQtd3JhcCB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBQUklNQVJZIEhFQURFUiAmIE5BViAqL1xcblxcbi5sb2dvIHtcXG4gIC0tbGVuZ3RoOiAzMHB4O1xcbiAgd2lkdGg6IHZhcigtLWxlbmd0aCk7XFxuICBoZWlnaHQ6IHZhcigtLWxlbmd0aCk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4ucHJpbWFyeS1oZWFkZXIge1xcbiAgcGFkZGluZzogMjRweCAwIDE2cHg7XFxufVxcblxcbi5wcmltYXJ5LWhlYWRlciA+IDpmaXJzdC1jaGlsZCB7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnByaW1hcnktbmF2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMThweCAwIDE2cHg7XFxuICB0b3A6IC0ycHg7IC8qIEZpeGVzIGV4dHJhIGdhcCB0b3AgKi9cXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5wcmltYXJ5LW5hdiA+IDpmaXJzdC1jaGlsZCB7XFxuICB3aWR0aDogbWluKDEwMCUsIDQ2MHB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucHJpbWFyeS1uYXYgYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnByaW1hcnktbmF2IGJ1dHRvbjpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnByaW1hcnktbmF2IGJ1dHRvbi5jdXJyZW50IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxuXFxuc2VjdGlvbjpmaXJzdC1vZi10eXBlIHtcXG4gIGhlaWdodDogNjAwcHg7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgaGVpZ2h0OiA4MDBweDtcXG59XFxuXFxuc2VjdGlvbiA+IDpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG5zZWN0aW9uIC5jb250ZW50LFxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG59XFxuXFxuc2VjdGlvbiBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG5zZWN0aW9uIC5jb250ZW50IHtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcGFkZGluZzogMjRweCAzNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1iZy1jb2xvcik7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlY3Rpb24tMSAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA2NDBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBib3JkZXItcmFkaXVzOiAxNjBweCA2MHB4O1xcbn1cXG5cXG4uc2VjdGlvbi0xIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogLTIwMHB4O1xcbn1cXG5cXG4uc2VjdGlvbi0xIC5jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDQwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLnNlY3Rpb24tMiAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNjIwcHg7XFxuICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbiAgYm9yZGVyLXJhZGl1czogNjBweCAxMjBweDtcXG59XFxuXFxuLnNlY3Rpb24tMiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogLTI4cHg7XFxufVxcblxcbi5zZWN0aW9uLTIgLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweCA0MHB4IDgwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XFxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLnNlY3Rpb24tMiBoMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDZweDtcXG59XFxuXFxuLmhvdXJzLXRhYmxlIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5ob3Vycy10YWJsZSB0aCxcXG4uaG91cnMtdGFibGUgdGQge1xcbiAgcGFkZGluZzogNHB4IDI0cHggNHB4IDRweDtcXG59XFxuXFxuLmhvdXJzLXRhYmxlIHRoOmxhc3QtY2hpbGQsXFxuLmhvdXJzLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4uaG91cnMtdGFibGUgdGhbc2NvcGU9XFxcInJvd1xcXCJdIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zZWN0aW9uLTMgLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDU4MHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA1O1xcbiAgYm9yZGVyLXJhZGl1czogMjAwcHggMTAwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxufVxcblxcbi5zZWN0aW9uLTMgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IC01MnB4O1xcbn1cXG5cXG4uc2VjdGlvbi0zIC5jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4IDQ4cHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTc2cHg7XFxuICBwYWRkaW5nOiAyNHB4IDM2cHggMzBweDtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG5mb290ZXIgPiA6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDAgNjBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuZm9vdGVyIC5jcmVkaXRzLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuZm9vdGVyIGgzIHtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbmZvb3RlciBhLFxcbmZvb3RlciAubmFtZSB7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFD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ckI7O0FBRUE7O0VBRUUsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tZGVmYXVsdC1iZy1jb2xvcjogIzE4MTkxYTtcXG4gIC0tZGVmYXVsdC10ZXh0LWNvbG9yOiAjZTZlNmU2O1xcbiAgLS1kZWZhdWx0LXRleHQtc2Vjb25kYXJ5LWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hLFxcbmh0bWwge1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1jb2xvcik7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtYmctY29sb3IpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHksXFxuYm9keSA+IC5jb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5ID4gLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uZmxleC1ob3Jpem9udGFsLWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC13cmFwIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi8qIFBSSU1BUlkgSEVBREVSICYgTkFWICovXFxuXFxuLmxvZ28ge1xcbiAgLS1sZW5ndGg6IDMwcHg7XFxuICB3aWR0aDogdmFyKC0tbGVuZ3RoKTtcXG4gIGhlaWdodDogdmFyKC0tbGVuZ3RoKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9sb2dvLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbi5wcmltYXJ5LWhlYWRlciB7XFxuICBwYWRkaW5nOiAyNHB4IDAgMTZweDtcXG59XFxuXFxuLnByaW1hcnktaGVhZGVyID4gOmZpcnN0LWNoaWxkIHtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4ucHJpbWFyeS1uYXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxOHB4IDAgMTZweDtcXG4gIHRvcDogLTJweDsgLyogRml4ZXMgZXh0cmEgZ2FwIHRvcCAqL1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnByaW1hcnktbmF2ID4gOmZpcnN0LWNoaWxkIHtcXG4gIHdpZHRoOiBtaW4oMTAwJSwgNDYwcHgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5wcmltYXJ5LW5hdiBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucHJpbWFyeS1uYXYgYnV0dG9uOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ucHJpbWFyeS1uYXYgYnV0dG9uLmN1cnJlbnQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1zZWNvbmRhcnktY29sb3IpO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5cXG5zZWN0aW9uOmZpcnN0LW9mLXR5cGUge1xcbiAgaGVpZ2h0OiA2MDBweDtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDgwMHB4O1xcbn1cXG5cXG5zZWN0aW9uID4gOmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbnNlY3Rpb24gLmNvbnRlbnQsXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbn1cXG5cXG5zZWN0aW9uIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbnNlY3Rpb24gLmNvbnRlbnQge1xcbiAgei1pbmRleDogMTA7XFxuICBwYWRkaW5nOiAyNHB4IDM2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LWJnLWNvbG9yKTtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VjdGlvbi0xIC5pbWFnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDY0MHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2MHB4IDYwcHg7XFxufVxcblxcbi5zZWN0aW9uLTEgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAtMjAwcHg7XFxufVxcblxcbi5zZWN0aW9uLTEgLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggNDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uc2VjdGlvbi0yIC5pbWFnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA2MjBweDtcXG4gIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxuICBib3JkZXItcmFkaXVzOiA2MHB4IDEyMHB4O1xcbn1cXG5cXG4uc2VjdGlvbi0yIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAtMjhweDtcXG59XFxuXFxuLnNlY3Rpb24tMiAuY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4IDQwcHggODBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4uc2VjdGlvbi0yIGgyIHtcXG4gIHBhZGRpbmctbGVmdDogNnB4O1xcbn1cXG5cXG4uaG91cnMtdGFibGUge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmhvdXJzLXRhYmxlIHRoLFxcbi5ob3Vycy10YWJsZSB0ZCB7XFxuICBwYWRkaW5nOiA0cHggMjRweCA0cHggNHB4O1xcbn1cXG5cXG4uaG91cnMtdGFibGUgdGg6bGFzdC1jaGlsZCxcXG4uaG91cnMtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5ob3Vycy10YWJsZSB0aFtzY29wZT1cXFwicm93XFxcIl0ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNlY3Rpb24tMyAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA2NDBweDtcXG4gIGhlaWdodDogNTgwcHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDU7XFxuICBib3JkZXItcmFkaXVzOiAyMDBweCAxMDBweDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBtYXJnaW4tbGVmdDogNjBweDtcXG59XFxuXFxuLnNlY3Rpb24tMyBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogLTUycHg7XFxufVxcblxcbi5zZWN0aW9uLTMgLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggNDhweDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBtYXJnaW4tbGVmdDogMTIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNzZweDtcXG4gIHBhZGRpbmc6IDI0cHggMzZweCAzMHB4O1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxufVxcblxcbmZvb3RlciA+IDpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCA2MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5mb290ZXIgLmNyZWRpdHMtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG5mb290ZXIgaDMge1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuZm9vdGVyIGEsXFxuZm9vdGVyIC5uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZCxcbiAgbG9hZEZpcnN0LFxuICBsb2FkQmVmb3JlLFxuICBsb2FkQWZ0ZXIsXG4gIGxvYWRNdWx0aXBsZSxcbiAgbG9hZE11bHRpcGxlQmVmb3JlLFxuICBsb2FkTXVsdGlwbGVBZnRlcixcbn07XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgZWxlbWVudHMgPSB7XG4gIGdldCBjb250ZW50KCkgeyByZXR1cm4gY29udGVudDsgfSxcbiAgc2V0IGNvbnRlbnQodmFsdWUpIHsgdGhyb3cgVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHByb3BlcnR5IFxcJ2NvbnRlbnRcXCcsIGl0IGlzIHJlc2VydmVkIGFuZCB1bm1vZGlmaWFibGUnKTsgfVxufTtcblxuZnVuY3Rpb24gbG9hZChlbGVtZW50LCBuYW1lID0gJycpIHtcbiAgaWYgKG5hbWUpIGVsZW1lbnRzW25hbWVdID0gZWxlbWVudDtcbiAgY29udGVudC5hcHBlbmQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRGaXJzdChlbGVtZW50LCBuYW1lID0gJycpIHtcbiAgaWYgKG5hbWUpIGVsZW1lbnRzW25hbWVdID0gZWxlbWVudDtcbiAgY29udGVudC5wcmVwZW5kKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBsb2FkTXVsdGlwbGUoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gbG9hZChlbGVtZW50KSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRCZWZvcmUoZWxlbWVudCwgYmVmb3JlLCBuYW1lID0gJycpIHtcbiAgaWYgKG5hbWUpIGVsZW1lbnRzW25hbWVdID0gZWxlbWVudDtcblxuICBpZiAoYmVmb3JlID09PSAnY29udGVudCcpIHtcbiAgICBjb250ZW50LnByZXBlbmQoZWxlbWVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50c1tiZWZvcmVdKSB0aHJvdyBUeXBlRXJyb3IoYENhbm5vdCBsb2FkIGJlZm9yZSAnJHtiZWZvcmV9JyBzaW5jZSBpdCBkb2VzIG5vdCBleGlzdGApO1xuICBlbGVtZW50c1tiZWZvcmVdLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gbG9hZEFmdGVyKGVsZW1lbnQsIGFmdGVyLCBuYW1lID0gJycpIHtcbiAgaWYgKG5hbWUpIGVsZW1lbnRzW25hbWVdID0gZWxlbWVudDtcbiAgXG4gIGlmIChhZnRlciA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgY29udGVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50c1thZnRlcl0pIHRocm93IFR5cGVFcnJvcihgQ2Fubm90IGxvYWQgYWZ0ZXIgJyR7YWZ0ZXJ9JyBzaW5jZSBpdCBkb2VzIG5vdCBleGlzdGApO1xuICBlbGVtZW50c1thZnRlcl0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBsb2FkTXVsdGlwbGVCZWZvcmUoZWxlbWVudHMsIGJlZm9yZSkge1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBsb2FkQmVmb3JlKGVsZW1lbnQsIGJlZm9yZSkpO1xufVxuXG5mdW5jdGlvbiBsb2FkTXVsdGlwbGVBZnRlcihlbGVtZW50cywgYWZ0ZXIpIHtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gbG9hZEFmdGVyKGVsZW1lbnQsIGFmdGVyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGUsXG4gIGNyZWF0ZVRleHQsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0KHRleHQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUodGFnLCBvcHRpb25zT3JDbGFzc05hbWUgPSB7fSwgY2hpbGRyZW5PclRleHRDb250ZW50ID0gW10pIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zT3JDbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gb3B0aW9uc09yQ2xhc3NOYW1lO1xuICAgIG9wdGlvbnNPckNsYXNzTmFtZSA9IHt9O1xuXG4gICAgaWYgKGNsYXNzTmFtZSkgb3B0aW9uc09yQ2xhc3NOYW1lLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgY2hpbGRyZW5PclRleHRDb250ZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGRyZW5PclRleHRDb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgIG9wdGlvbnNPckNsYXNzTmFtZS50ZXh0Q29udGVudCA9IGNoaWxkcmVuT3JUZXh0Q29udGVudDtcbiAgICBjaGlsZHJlbk9yVGV4dENvbnRlbnQgPSBbXTtcbiAgfVxuXG4gIHJldHVybiBhc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpLCBvcHRpb25zT3JDbGFzc05hbWUsIGNoaWxkcmVuT3JUZXh0Q29udGVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbihlbGVtZW50LCBvcHRpb25zLCBjaGlsZHJlbikge1xuICBPYmplY3QuYXNzaWduKGVsZW1lbnQsIG9wdGlvbnMpO1xuICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZHJlbilcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfSk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gXCIuL0VsZW1lbnRDcmVhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZm9vdGVyJywgJycsIFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2NvbnRlbnQtd3JhcCcsIFtcbiAgICAgIGNyZWF0ZUluZm9ybWF0aW9uKCksXG4gICAgICBjcmVhdGVDcmVkaXRzKCksXG4gICAgXSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvcm1hdGlvbigpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2luZm9ybWF0aW9uJywgW1xuICAgIGNyZWF0ZUFkdmFuY2VkUGFyYWdyYXBoKFtcbiAgICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnc3BhbicsICduYW1lJywgJ1N1c2hpIFN1c2hpJyksXG4gICAgICAnLCBhIHJlc3RhdXJhbnQgcGFnZSBwcm9qZWN0IGZvciAnLFxuICAgICAgY3JlYXRlTGluaygnVGhlIE9kaW4gUHJvamVjdCcsICdodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vbGVzc29ucy9ub2RlLXBhdGgtamF2YXNjcmlwdC1yZXN0YXVyYW50LXBhZ2UnKSxcbiAgICAgICcuJyxcbiAgICBdKSxcbiAgICBjcmVhdGVBZHZhbmNlZFBhcmFncmFwaChbXG4gICAgICAnTWFkZSBieSAnLFxuICAgICAgY3JlYXRlTGluaygnWmVrdW1vcnUnLCAnaHR0cHM6Ly9naXRodWIuY29tL1pla3Vtb3J1JyksXG4gICAgXSksXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDcmVkaXRzKCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdkaXYnLCAnY3JlZGl0cy1jb250YWluZXInLCBbXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdoMycsICcnLCAnSW1hZ2UgQ3JlZGl0cycpLFxuICAgIGNyZWF0ZUFkdmFuY2VkUGFyYWdyYXBoKFtcbiAgICAgICdMb2dvIGljb24gYnkgJyxcbiAgICAgIGNyZWF0ZUxpbmsoJ3N1cmFuZycsICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vYXV0aG9ycy9zdXJhbmcnKSxcbiAgICBdKSxcbiAgICBjcmVhdGVBZHZhbmNlZFBhcmFncmFwaChbXG4gICAgICAnRmlyc3Qgc3VzaGkgaW1hZ2UgYnkgJyxcbiAgICAgIGNyZWF0ZUxpbmsoJ0RlcmVrIER1cmFuJywgJ2h0dHBzOi8vdW5zcGxhc2guY29tL0BkZXJla2R1cmFuJyksXG4gICAgXSksXG4gICAgY3JlYXRlQWR2YW5jZWRQYXJhZ3JhcGgoW1xuICAgICAgJ1NlY29uZCBzdXNoaSBpbWFnZSBieSAnLFxuICAgICAgY3JlYXRlTGluaygnRmFkeWEgQXpoYXJ5JywgJ2h0dHBzOi8vdW5zcGxhc2guY29tL0BmYWRzcGhvdG8yM18nKSxcbiAgICBdKSxcbiAgICBjcmVhdGVBZHZhbmNlZFBhcmFncmFwaChbXG4gICAgICAnVGhpcmQgc3VzaGkgaW1hZ2UgYnkgJyxcbiAgICAgIGNyZWF0ZUxpbmsoJ0FuZHJheiBMYXppYycsICdodHRwczovL3Vuc3BsYXNoLmNvbS9AYW5kcmF6bGF6aWMnKSxcbiAgICBdKSxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkdmFuY2VkUGFyYWdyYXBoKG5vZGVzKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3AnLCAnJywgW1xuICAgIC4uLm5vZGVzLm1hcCgobm9kZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBub2RlICE9PSAnc3RyaW5nJykgcmV0dXJuIG5vZGU7XG4gICAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdudW1iZXInKSByZXR1cm4gbm9kZTtcbiAgICAgIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGVUZXh0KG5vZGUpO1xuICAgIH0pLFxuICBdKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGluayh0ZXh0LCB1cmwpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnYScsIHtcbiAgICBocmVmOiB1cmwsXG4gICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICByZWw6ICdub29wZW5lciBub3JlZmVycmVyJyxcbiAgfSwgdGV4dCk7XG59IiwiaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gXCIuL0VsZW1lbnRDcmVhdG9yXCI7XG5pbXBvcnQgc3VzaGkgZnJvbSAnLi4vaW1hZ2VzL3N1c2hpLmpwZyc7XG5pbXBvcnQgc3VzaGkyIGZyb20gJy4uL2ltYWdlcy9zdXNoaS0yLmpwZyc7XG5pbXBvcnQgc3VzaGkzIGZyb20gJy4uL2ltYWdlcy9zdXNoaS0zLmpwZyc7XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAge1xuICAgIHNyYzogc3VzaGksXG4gICAgYWx0OiAnOCBwaWVjZXMgc3VzaGkgd2l0aCBzYWxtb24gb24gdG9wJyxcbiAgfSxcbiAge1xuICAgIHNyYzogc3VzaGkyLFxuICAgIGFsdDogJ2JvYXJkIG9mIG1peGVkIHN1c2hpJyxcbiAgfSxcbiAge1xuICAgIHNyYzogc3VzaGkzLFxuICAgIGFsdDogJ3N1c2hpLCBjaG9wc3RpY2tzLCBhbmQgYSBjdXAgb2Ygc295IHNhdWNlJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFtcbiAgICBjcmVhdGVTZWN0aW9uKCdzZWN0aW9uLTEnLCBpbWFnZXNbMF0sIGNyZWF0ZUNvbnRlbnQoJ09ubHkgVGhlIEJlc3QnLCBbXG4gICAgICBjcmVhdGVQYXJhZ3JhcGgoJ0FsbCBpbmdyZWRpZW50cyBhcmUgY2FyZWZ1bGx5IGhhbmRwaWNrZWQgdG8gZ2l2ZSB5b3UgdGhlIGJlc3Qgb2YgdGFzdGVzLicpLFxuICAgICAgY3JlYXRlUGFyYWdyYXBoKCdFYWNoIHN1c2hpIHdpdGggYSBzdG9yeSBvZiBpdHMgb3duIGZsYXZvdXIgdG8gdGVsbC4nKSxcbiAgICBdKSksXG4gICAgY3JlYXRlU2VjdGlvbignc2VjdGlvbi0yJywgaW1hZ2VzWzFdLCBjcmVhdGVDb250ZW50KCdIb3VycycsIGNyZWF0ZUhvdXJzVGFibGUoKSkpLFxuICAgIGNyZWF0ZVNlY3Rpb24oJ3NlY3Rpb24tMycsIGltYWdlc1syXSwgY3JlYXRlQ29udGVudCgnTG9jYXRpb24nLCBbXG4gICAgICBjcmVhdGVQYXJhZ3JhcGgoJzEyMyBTdXNoaSBTdHJlZXQsIFRva3lvLCBKYXBhbicpLFxuICAgIF0pKSxcbiAgXTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24oY2xhc3NOYW1lLCBpbWFnZU9wdGlvbnMsIGNvbnRlbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnc2VjdGlvbicsIGNsYXNzTmFtZSwgXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdkaXYnLCAnY29udGVudC13cmFwJywgW1xuICAgICAgY3JlYXRlSW1hZ2VDb250YWluZXIoaW1hZ2VPcHRpb25zKSxcbiAgICAgIGNvbnRlbnQsXG4gICAgXSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbWFnZUNvbnRhaW5lcihpbWFnZU9wdGlvbnMpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2ltYWdlLWNvbnRhaW5lcicsIFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnaW1nJywgaW1hZ2VPcHRpb25zKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoaGVhZGluZywgY2hpbGRyZW4gPSBbXSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSBjaGlsZHJlbiA9IFsgY2hpbGRyZW4gXTtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2NvbnRlbnQnLCBbXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdoMicsICcnLCBoZWFkaW5nKSxcbiAgICAuLi5jaGlsZHJlbixcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaCh0ZXh0Q29udGVudCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdwJywgJycsIHRleHRDb250ZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cnNUYWJsZSgpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgndGFibGUnLCAnaG91cnMtdGFibGUnLFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgndGJvZHknLCAnJywgW1xuICAgICAgY3JlYXRlSG91cnNUYWJsZVJvdygnTW9uZGF5IHRvIEZyaWRheScsICcxMTowMCBBLk0uIC0gMzowMCBQLk0uJywgJzU6MDAgUC5NLiAtIDEwOjAwIFAuTS4nKSxcbiAgICAgIGNyZWF0ZUhvdXJzVGFibGVSb3coJ1NhdHVyZGF5JywgJzExOjAwIEEuTS4gLSAzOjAwIFAuTS4nLCAnNTowMCBQLk0uIC0gMTI6MDAgQS5NLicpLFxuICAgICAgY3JlYXRlSG91cnNUYWJsZVJvdygnU3VuZGF5JywgJzExOjAwIEEuTS4gLSAzOjAwIFAuTS4nLCAnJyksXG4gICAgXSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3Vyc1RhYmxlUm93KGRheXMsIGFmdGVybm9vbiwgZXZlbmluZykge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCd0cicsICcnLCBbXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCd0aCcsIHsgc2NvcGU6ICdyb3cnIH0sIGRheXMpLFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgndGQnLCAnJywgYWZ0ZXJub29uKSxcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3RkJywgJycsIGV2ZW5pbmcpLFxuICBdKTtcbn0iLCJpbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSBcIi4vRWxlbWVudENyZWF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdoZWFkZXInLCAncHJpbWFyeS1oZWFkZXInLCBjcmVhdGVDb250ZW50KCkpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2NvbnRlbnQtd3JhcCBmbGV4LWhvcml6b250YWwtY2VudGVyJywgW1xuICAgIGNyZWF0ZUxvZ28oKSxcbiAgICBjcmVhdGVUaXRsZSgpLFxuICBdKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9nbygpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2xvZ28nKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3AnLCAndGl0bGUnLCAnU3VzaGkgU3VzaGknKTtcbn0iLCJpbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSBcIi4vRWxlbWVudENyZWF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGN1cnJlbnRUYWIgPSAnaG9tZScpIHtcbiAgY29uc3QgcHJpbWFyeU5hdiA9IEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnbmF2JywgJ3ByaW1hcnktbmF2JywgY3JlYXRlQ29udGVudCgpKTtcbiAgcHJpbWFyeU5hdi5xdWVyeVNlbGVjdG9yKGAuJHtjdXJyZW50VGFifWApLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgcmV0dXJuIHByaW1hcnlOYXY7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCd1bCcsICdjb250ZW50LXdyYXAnLCBbXG4gICAgY3JlYXRlTmF2SXRlbShjcmVhdGVOYXZJdGVtQnV0dG9uKCdob21lJywgJ0hvbWUnKSksXG4gICAgY3JlYXRlTmF2SXRlbShjcmVhdGVOYXZJdGVtQnV0dG9uKCdtZW51JywgJ01lbnUnKSksXG4gICAgY3JlYXRlTmF2SXRlbShjcmVhdGVOYXZJdGVtQnV0dG9uKCdjb250YWN0JywgJ0NvbnRhY3QnKSksXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZJdGVtKGJ1dHRvbikge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdsaScsICcnLCBidXR0b24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZJdGVtQnV0dG9uKGNsYXNzTmFtZSwgdGV4dENvbnRlbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnYnV0dG9uJywgY2xhc3NOYW1lLCB0ZXh0Q29udGVudCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJidW5kbGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IENvbnRlbnRMb2FkZXIgZnJvbSAnLi9zY3JpcHRzL0NvbnRlbnRMb2FkZXInO1xuaW1wb3J0IGxvYWRQcmltYXJ5SGVhZGVyIGZyb20gJy4vc2NyaXB0cy9sb2FkUHJpbWFyeUhlYWRlcic7XG5pbXBvcnQgbG9hZFByaW1hcnlOYXYgZnJvbSAnLi9zY3JpcHRzL2xvYWRQcmltYXJ5TmF2JztcbmltcG9ydCBsb2FkRm9vdGVyIGZyb20gJy4vc2NyaXB0cy9sb2FkRm9vdGVyJztcbmltcG9ydCBsb2FkSG9tZUNvbnRlbnRzIGZyb20gJy4vc2NyaXB0cy9sb2FkSG9tZUNvbnRlbnRzJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuQ29udGVudExvYWRlci5sb2FkRmlyc3QobG9hZFByaW1hcnlIZWFkZXIoKSwgJ3ByaW1hcnktaGVhZGVyJyk7XG5Db250ZW50TG9hZGVyLmxvYWRBZnRlcihsb2FkUHJpbWFyeU5hdigpLCAncHJpbWFyeS1oZWFkZXInLCAncHJpbWFyeS1uYXYnKTtcbkNvbnRlbnRMb2FkZXIubG9hZChsb2FkRm9vdGVyKCksICdmb290ZXInKVxuXG5Db250ZW50TG9hZGVyLmxvYWRNdWx0aXBsZUFmdGVyKGxvYWRIb21lQ29udGVudHMoKS5yZXZlcnNlKCksICdwcmltYXJ5LW5hdicpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==