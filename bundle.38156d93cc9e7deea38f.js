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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --default-bg-color: #18191a;\n  --default-text-color: #e6e6e6;\n  --default-text-link-color: white;\n  --default-text-secondary-color: #b2b2b2;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\na,\nhtml {\n  color: var(--default-text-color);\n}\n\na {\n  text-decoration: none;\n}\n\nhtml {\n  background-color: var(--default-bg-color);\n}\n\nhtml,\nbody,\nbody > .content {\n  min-height: 100vh;\n}\n\nbody > .content {\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  margin-top: auto;\n}\n\n.flex-horizontal-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-vertical-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.content-wrap {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 40px;\n}\n\n.image-container {\n  overflow: hidden;\n  position: relative;\n}\n\nsection img {\n  position: absolute;\n}\n\n/* PRIMARY HEADER & NAV */\n\n.logo {\n  --length: 30px;\n  width: var(--length);\n  height: var(--length);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100%;\n}\n\n.primary-header {\n  padding: 24px 0 16px;\n}\n\n.primary-header > .content-wrap {\n  gap: 8px;\n}\n\n.primary-nav {\n  width: 100%;\n  padding: 18px 0 16px;\n  top: -2px; /* Fixes extra gap top */\n  position: sticky;\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 100;\n}\n\n.primary-nav > .content-wrap {\n  width: min(100%, 460px);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  gap: 12px;\n}\n\n.primary-nav button {\n  color: var(--default-text-color);\n  background-color: transparent;\n  text-transform: uppercase;\n  cursor: pointer;\n  border: none;\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.primary-nav button:hover {\n  text-decoration: underline;\n}\n\n.primary-nav button.current {\n  text-decoration: none;\n  color: var(--default-text-link-color);\n  cursor: default;\n}\n\n/* MAIN CONTENT */\n\n.home-section:first-of-type {\n  height: 600px;\n}\n\n.home-section {\n  height: 800px;\n}\n\n.home-section > .content-wrap {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  place-items: center;\n  height: 100%;\n  padding: 40px;\n}\n\n.home-section .content,\n.image-container {\n  grid-row: 1 / -1;\n}\n\n.home-section .content {\n  z-index: 10;\n  padding: 24px 36px;\n  background-color: var(--default-bg-color);\n}\n\n.home-section-1 .image-container {\n  width: 640px;\n  height: 420px;\n  grid-column: 1 / 4;\n  border-radius: 160px 60px;\n}\n\n.home-section-1 img {\n  width: 100%;\n  bottom: -200px;\n}\n\n.home-section-1 .content {\n  grid-column: 3 / -1;\n  border-radius: 20px 40px;\n  padding-bottom: 32px;\n}\n\n.home-section-2 .image-container {\n  width: 420px;\n  height: 620px;\n  grid-column: 3 / -1;\n  border-radius: 60px 120px;\n}\n\n.home-section-2 img {\n  height: 100%;\n  left: -28px;\n}\n\n.home-section-2 .content {\n  grid-column: 1 / 4;\n  border-radius: 30px 40px 80px;\n  transform: translateX(30px);\n  padding-bottom: 40px;\n}\n\n.home-section-2 h2 {\n  padding-left: 6px;\n}\n\n.hours-table {\n  text-align: left;\n}\n\n.hours-table th,\n.hours-table td {\n  padding: 4px 24px 4px 4px;\n}\n\n.hours-table th:last-child,\n.hours-table td:last-child {\n  padding: 4px;\n}\n\n.hours-table th[scope=\"row\"] {\n  font-weight: 500;\n}\n\n.home-section-3 .image-container {\n  width: 640px;\n  height: 580px;\n  grid-column: 1 / 5;\n  border-radius: 200px 100px;\n  justify-self: start;\n  margin-left: 60px;\n}\n\n.home-section-3 img {\n  height: 100%;\n  left: -52px;\n}\n\n.home-section-3 .content {\n  grid-column: 3 / -1;\n  width: 300px;\n  border-radius: 30px 48px;\n  justify-self: start;\n  align-self: end;\n  margin-left: 120px;\n  margin-bottom: 176px;\n  padding: 24px 36px 30px;\n}\n\n/* FOOTER */\n\nfooter {\n  padding-bottom: 80px;\n}\n\nfooter > .content-wrap {\n  display: flex;\n  padding: 0 60px;\n  justify-content: space-between;\n}\n\nfooter .credits-container {\n  text-align: right;\n}\n\nfooter h3 {\n  padding-bottom: 8px;\n}\n\nfooter p {\n  padding-bottom: 4px;\n}\n\nfooter a,\nfooter .name {\n  color: var(--default-text-link-color);\n}\n\nfooter a:hover {\n  text-decoration: underline;\n}\n\n/* MENU */\n\n.menu-section {\n  padding: 40px 0 80px;\n}\n\n.menu-section + .menu-section {\n  padding-top: 0;\n}\n\n.product {\n  width: 100%;\n  height: 360px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 80px;\n  align-items: center;\n}\n\n.menu-section:nth-of-type(even) .product:nth-of-type(odd),\n.menu-section:nth-of-type(odd) .product:nth-of-type(even) {\n  grid-template-columns: 1fr auto;\n}\n\n.product .image-container {\n  width: 260px;\n  height: 260px;\n  border-radius: 80px 40px;\n}\n\n.menu-section:nth-of-type(even) .product:nth-of-type(odd) .image-container,\n.menu-section:nth-of-type(odd) .product:nth-of-type(even) .image-container {\n  border-radius: 40px 80px; \n}\n\n.product .content {\n  grid-row: 1 / -1;\n  padding-right: 80px;\n}\n\n.menu-section:nth-of-type(even) .product:nth-of-type(odd) .content,\n.menu-section:nth-of-type(odd) .product:nth-of-type(even) .content {\n  grid-column: 1;\n  padding: 0 0 0 80px;\n}\n\n.product .product-name {\n  font-size: 1.8rem;\n}\n\n.product .english-name {\n  color: var(--default-text-secondary-color);\n}\n\n.product .description {\n  margin: 8px 0 16px;\n}\n\n.product .price {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.product .quantity {\n  font-size: 0.9rem;\n  font-weight: normal;\n  color: var(--default-text-secondary-color);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --default-bg-color: #18191a;\n  --default-text-color: #e6e6e6;\n  --default-text-link-color: white;\n  --default-text-secondary-color: #b2b2b2;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\na,\nhtml {\n  color: var(--default-text-color);\n}\n\na {\n  text-decoration: none;\n}\n\nhtml {\n  background-color: var(--default-bg-color);\n}\n\nhtml,\nbody,\nbody > .content {\n  min-height: 100vh;\n}\n\nbody > .content {\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  margin-top: auto;\n}\n\n.flex-horizontal-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-vertical-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.content-wrap {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 40px;\n}\n\n.image-container {\n  overflow: hidden;\n  position: relative;\n}\n\nsection img {\n  position: absolute;\n}\n\n/* PRIMARY HEADER & NAV */\n\n.logo {\n  --length: 30px;\n  width: var(--length);\n  height: var(--length);\n  background-image: url(./images/logo.png);\n  background-size: 100%;\n}\n\n.primary-header {\n  padding: 24px 0 16px;\n}\n\n.primary-header > .content-wrap {\n  gap: 8px;\n}\n\n.primary-nav {\n  width: 100%;\n  padding: 18px 0 16px;\n  top: -2px; /* Fixes extra gap top */\n  position: sticky;\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 100;\n}\n\n.primary-nav > .content-wrap {\n  width: min(100%, 460px);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  gap: 12px;\n}\n\n.primary-nav button {\n  color: var(--default-text-color);\n  background-color: transparent;\n  text-transform: uppercase;\n  cursor: pointer;\n  border: none;\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.primary-nav button:hover {\n  text-decoration: underline;\n}\n\n.primary-nav button.current {\n  text-decoration: none;\n  color: var(--default-text-link-color);\n  cursor: default;\n}\n\n/* MAIN CONTENT */\n\n.home-section:first-of-type {\n  height: 600px;\n}\n\n.home-section {\n  height: 800px;\n}\n\n.home-section > .content-wrap {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  place-items: center;\n  height: 100%;\n  padding: 40px;\n}\n\n.home-section .content,\n.image-container {\n  grid-row: 1 / -1;\n}\n\n.home-section .content {\n  z-index: 10;\n  padding: 24px 36px;\n  background-color: var(--default-bg-color);\n}\n\n.home-section-1 .image-container {\n  width: 640px;\n  height: 420px;\n  grid-column: 1 / 4;\n  border-radius: 160px 60px;\n}\n\n.home-section-1 img {\n  width: 100%;\n  bottom: -200px;\n}\n\n.home-section-1 .content {\n  grid-column: 3 / -1;\n  border-radius: 20px 40px;\n  padding-bottom: 32px;\n}\n\n.home-section-2 .image-container {\n  width: 420px;\n  height: 620px;\n  grid-column: 3 / -1;\n  border-radius: 60px 120px;\n}\n\n.home-section-2 img {\n  height: 100%;\n  left: -28px;\n}\n\n.home-section-2 .content {\n  grid-column: 1 / 4;\n  border-radius: 30px 40px 80px;\n  transform: translateX(30px);\n  padding-bottom: 40px;\n}\n\n.home-section-2 h2 {\n  padding-left: 6px;\n}\n\n.hours-table {\n  text-align: left;\n}\n\n.hours-table th,\n.hours-table td {\n  padding: 4px 24px 4px 4px;\n}\n\n.hours-table th:last-child,\n.hours-table td:last-child {\n  padding: 4px;\n}\n\n.hours-table th[scope=\"row\"] {\n  font-weight: 500;\n}\n\n.home-section-3 .image-container {\n  width: 640px;\n  height: 580px;\n  grid-column: 1 / 5;\n  border-radius: 200px 100px;\n  justify-self: start;\n  margin-left: 60px;\n}\n\n.home-section-3 img {\n  height: 100%;\n  left: -52px;\n}\n\n.home-section-3 .content {\n  grid-column: 3 / -1;\n  width: 300px;\n  border-radius: 30px 48px;\n  justify-self: start;\n  align-self: end;\n  margin-left: 120px;\n  margin-bottom: 176px;\n  padding: 24px 36px 30px;\n}\n\n/* FOOTER */\n\nfooter {\n  padding-bottom: 80px;\n}\n\nfooter > .content-wrap {\n  display: flex;\n  padding: 0 60px;\n  justify-content: space-between;\n}\n\nfooter .credits-container {\n  text-align: right;\n}\n\nfooter h3 {\n  padding-bottom: 8px;\n}\n\nfooter p {\n  padding-bottom: 4px;\n}\n\nfooter a,\nfooter .name {\n  color: var(--default-text-link-color);\n}\n\nfooter a:hover {\n  text-decoration: underline;\n}\n\n/* MENU */\n\n.menu-section {\n  padding: 40px 0 80px;\n}\n\n.menu-section + .menu-section {\n  padding-top: 0;\n}\n\n.product {\n  width: 100%;\n  height: 360px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 80px;\n  align-items: center;\n}\n\n.menu-section:nth-of-type(even) .product:nth-of-type(odd),\n.menu-section:nth-of-type(odd) .product:nth-of-type(even) {\n  grid-template-columns: 1fr auto;\n}\n\n.product .image-container {\n  width: 260px;\n  height: 260px;\n  border-radius: 80px 40px;\n}\n\n.menu-section:nth-of-type(even) .product:nth-of-type(odd) .image-container,\n.menu-section:nth-of-type(odd) .product:nth-of-type(even) .image-container {\n  border-radius: 40px 80px; \n}\n\n.product .content {\n  grid-row: 1 / -1;\n  padding-right: 80px;\n}\n\n.menu-section:nth-of-type(even) .product:nth-of-type(odd) .content,\n.menu-section:nth-of-type(odd) .product:nth-of-type(even) .content {\n  grid-column: 1;\n  padding: 0 0 0 80px;\n}\n\n.product .product-name {\n  font-size: 1.8rem;\n}\n\n.product .english-name {\n  color: var(--default-text-secondary-color);\n}\n\n.product .description {\n  margin: 8px 0 16px;\n}\n\n.product .price {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.product .quantity {\n  font-size: 0.9rem;\n  font-weight: normal;\n  color: var(--default-text-secondary-color);\n}"],"sourceRoot":""}]);
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
  removeFrom,
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

function removeFrom(fromName, toName = null, { includeFrom, includeTo } = { includeFrom: true, includeTo: false }) {
  const finish = elements[fromName] ?? content.firstChild;
  let current = content.lastChild;

  if (toName) {
    current = elements[toName];
    if (!includeTo) current = current.previousElementSibling;
  }

  while (current !== finish) {
    const toRemove = current;
    
    Object.entries(elements).forEach(([key, element]) => {
      if (element === current) {
        delete elements[key];
      }
    });

    current = current.previousElementSibling;
    toRemove.remove();
  }

  if (includeFrom) current.remove();
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
  createLink,
  createParagraph,
});

function createText(text) {
  return document.createTextNode(text);
}

function createLink(text, url) {
  return create('a', {
    href: url,
    target: '_blank',
    rel: 'noopener noreferrer',
  }, text);
}

function createParagraph(textOrNodes, optionsOrClassName) {
  if (typeof textOrNodes === 'string') return create('p', optionsOrClassName, textOrNodes);

  return create('p', optionsOrClassName, [
    ...textOrNodes.map((node) => {
      if (typeof node !== 'string') return node;
      if (typeof node !== 'number') return node;
      return createText(node);
    }),
  ]);
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

/***/ "./src/scripts/Product.js":
/*!********************************!*\
  !*** ./src/scripts/Product.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(image, name, englishName, description, price, quantity) {
    this.image = image;
    this.name = name;
    this.englishName = englishName;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }
});

/***/ }),

/***/ "./src/scripts/ProductImage.js":
/*!*************************************!*\
  !*** ./src/scripts/ProductImage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(src, alt, width, top, left) {
    this.src = src;
    this.alt = alt;
    this.width = width;
    this.top = top;
    this.left = left;
  }

  getStyleObject() {
    return {
      width: this.width,
      top: this.top,
      left: this.left,
    }
  }
});

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
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph([
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('span', 'name', 'Sushi Sushi'),
      ', a restaurant page project for ',
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createLink('The Odin Project', 'https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page'),
      '.',
    ]),
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph([
      'Made by ',
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createLink('Zekumoru', 'https://github.com/Zekumoru'),
    ]),
  ]);
}

function createCredits() {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', 'credits-container', [
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('h3', '', 'Image Credits'),
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph([
      'Logo icon by ',
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createLink('surang', 'https://www.flaticon.com/authors/surang'),
    ]),
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph([
      'First sushi image by ',
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createLink('Derek Duran', 'https://unsplash.com/@derekduran'),
    ]),
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph([
      'Second sushi image by ',
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createLink('Fadya Azhary', 'https://unsplash.com/@fadsphoto23_'),
    ]),
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph([
      'Third sushi image by ',
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createLink('Andraz Lazic', 'https://unsplash.com/@andrazlazic'),
    ]),
  ]);
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
    createSection('home-section home-section-1', images[0], createContent('Only The Best', [
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph('All ingredients are carefully handpicked to give you the best of tastes.'),
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph('Each sushi with a story of its own flavour to tell.'),
    ])),
    createSection('home-section home-section-2', images[1], createContent('Hours', createHoursTable())),
    createSection('home-section home-section-3', images[2], createContent('Location', [
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph('123 Sushi Street, Tokyo, Japan'),
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

/***/ "./src/scripts/loadMenuContents.js":
/*!*****************************************!*\
  !*** ./src/scripts/loadMenuContents.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ElementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementCreator */ "./src/scripts/ElementCreator.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ "./src/scripts/Product.js");
/* harmony import */ var _ProductImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductImage */ "./src/scripts/ProductImage.js");
/* harmony import */ var _images_nigiri_sake_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/nigiri-sake.jpg */ "./src/images/nigiri-sake.jpg");
/* harmony import */ var _images_nigiri_maguro_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/nigiri-maguro.jpg */ "./src/images/nigiri-maguro.jpg");
/* harmony import */ var _images_nigiri_suzuki_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/nigiri-suzuki.jpg */ "./src/images/nigiri-suzuki.jpg");
/* harmony import */ var _images_uramaki_sake_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/uramaki-sake.jpg */ "./src/images/uramaki-sake.jpg");
/* harmony import */ var _images_uramaki_ebi_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/uramaki-ebi.jpg */ "./src/images/uramaki-ebi.jpg");
/* harmony import */ var _images_uramaki_robusuta_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/uramaki-robusuta.jpg */ "./src/images/uramaki-robusuta.jpg");
/* harmony import */ var _images_hosomaki_sake_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/hosomaki-sake.jpg */ "./src/images/hosomaki-sake.jpg");
/* harmony import */ var _images_hosomaki_maguro_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/hosomaki-maguro.jpg */ "./src/images/hosomaki-maguro.jpg");
/* harmony import */ var _images_hosomaki_ebi_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/hosomaki-ebi.jpg */ "./src/images/hosomaki-ebi.jpg");













const images = {
  nigiri: {
    sake: new _ProductImage__WEBPACK_IMPORTED_MODULE_2__["default"](_images_nigiri_sake_jpg__WEBPACK_IMPORTED_MODULE_3__, '2 pieces of nigiri sake', '240%', '-58px', '-200px'),
    maguro: new _ProductImage__WEBPACK_IMPORTED_MODULE_2__["default"](_images_nigiri_maguro_jpg__WEBPACK_IMPORTED_MODULE_4__, '4 pieces of nigiri maguro', '180%', '-18px', '-58px'),
    suzuki: new _ProductImage__WEBPACK_IMPORTED_MODULE_2__["default"](_images_nigiri_suzuki_jpg__WEBPACK_IMPORTED_MODULE_5__, '4 pieces of nigiri suzuki', '200%', '-16px', '-94px'),
  },
  uramaki: {
    sake: new _ProductImage__WEBPACK_IMPORTED_MODULE_2__["default"](_images_uramaki_sake_jpg__WEBPACK_IMPORTED_MODULE_6__, '8 pieces of uramaki sake', '200%', '-20px', '-75px'),
    ebi: new _ProductImage__WEBPACK_IMPORTED_MODULE_2__["default"](_images_uramaki_ebi_jpg__WEBPACK_IMPORTED_MODULE_7__, '8 pieces of uramaki ebi', '200%', '-21px', '-47px'),
    robusuta: new _ProductImage__WEBPACK_IMPORTED_MODULE_2__["default"](_images_uramaki_robusuta_jpg__WEBPACK_IMPORTED_MODULE_8__, '8 pieces of uramaki robusuta', '170%', '-4px', '-70px'),
  },
  hosomaki: {
    sake: new _ProductImage__WEBPACK_IMPORTED_MODULE_2__["default"](_images_hosomaki_sake_jpg__WEBPACK_IMPORTED_MODULE_9__, '8 pieces of hosomaki sake', '240%', '-27px', '-74px'),
    maguro: new _ProductImage__WEBPACK_IMPORTED_MODULE_2__["default"](_images_hosomaki_maguro_jpg__WEBPACK_IMPORTED_MODULE_10__, '8 pieces of hosomaki maguro', '220%', '-46px', '-110px'),
    ebi: new _ProductImage__WEBPACK_IMPORTED_MODULE_2__["default"](_images_hosomaki_ebi_jpg__WEBPACK_IMPORTED_MODULE_11__, '8 pieces of hosomaki ebi', '190%', '-29px', '-136px'),
  },
}

const products = {
  nigiri: [
    new _Product__WEBPACK_IMPORTED_MODULE_1__["default"](images.nigiri.sake, 'Sake', 'Salmon', 'A long white oval-shaped sushi with a cut of fresh salmon on top.', 1199.99, 8),
    new _Product__WEBPACK_IMPORTED_MODULE_1__["default"](images.nigiri.maguro, 'Maguro', 'Tuna', 'A long white oval-shaped sushi with slices of tuna on top.', 1199.99, 8),
    new _Product__WEBPACK_IMPORTED_MODULE_1__["default"](images.nigiri.suzuki, 'Suzuki', 'Japanese sea bass', 'A long white oval-shaped sushi with slices of Japanese sea bass on top.', 1199.99, 8),  
  ],
  uramaki: [
    new _Product__WEBPACK_IMPORTED_MODULE_1__["default"](images.uramaki.sake, 'Sake', 'Salmon', 'A cylindrical nori-hidden sushi with crushed fresh salmon on top.', 1399.99, 8),
    new _Product__WEBPACK_IMPORTED_MODULE_1__["default"](images.uramaki.ebi, 'Ebi', 'Shrimp', 'A cylindrical nori-hidden sushi with a cooked cut of shrimp on top.', 1399.99, 8),
    new _Product__WEBPACK_IMPORTED_MODULE_1__["default"](images.uramaki.robusuta, 'Robusuta', 'Lobster', 'A cylindrical nori-hidden sushi with crushed flesh of lobster on top.', 1799.99, 8),
  ],
  hosomaki: [
    new _Product__WEBPACK_IMPORTED_MODULE_1__["default"](images.hosomaki.sake, 'Sake', 'Salmon', 'A cylindrical sushi with fresh salmon inside.', 1099.99, 8),
    new _Product__WEBPACK_IMPORTED_MODULE_1__["default"](images.hosomaki.maguro, 'Maguro', 'Tuna', 'A cylindrical sushi with tuna inside.', 1099.99, 8),
    new _Product__WEBPACK_IMPORTED_MODULE_1__["default"](images.hosomaki.ebi, 'Ebi', 'Shrimp', 'A cylindrical sushi with shrimp inside.', 1199.99, 8),
  ],
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return [
    createSection('Nigirizushi', 'Hand-pressed sushi', createProducts(products.nigiri)),
    createSection('Uramaki', 'Inside-out roll', createProducts(products.uramaki)),
    createSection('Hosomaki', 'Thin roll', createProducts(products.hosomaki)),
  ];
};

function createSection(title, description, products = []) {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('section', 'menu-section', 
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', 'content-wrap flex-vertical-center', [
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('h2', '', title),
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('p', '', description),
      ...products,
    ])
  );
}

function createProducts(products) {
  return products.map((product) => {
    return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', 'product', [
      createImageContainer(product.image),
      createContent(product),
    ]);
  });
}

function createImageContainer(image) {
  const imageElement = _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('img', {
    src: image.src,
    alt: image.alt,
  });
  Object.assign(imageElement.style, image.getStyleObject());
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', 'image-container', imageElement);
}

function createContent(product) {
  return _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('div', 'content', [
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('h3', 'product-name', product.name),
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('p', 'english-name', product.englishName),
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('p', 'description', product.description),
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph([
      `¥ ${product.price} `,
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('span', 'quantity', `(${product.quantity} pieces)`)
    ], 'price'),
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


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(currentTab, buttonOnClickListeners) {
  const primaryNav = _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].create('nav', 'primary-nav', createContent());
  primaryNav.querySelector(`.${currentTab}`).classList.add('current');

  Object.entries(buttonOnClickListeners).forEach(([button, listener]) => {
    primaryNav.querySelector(`.${button}`).addEventListener('click', (e) => {
      window.scrollTo(0, 0);
      primaryNav.querySelector('button.current').classList.remove('current');
      e.target.classList.add('current');
      listener(e);
    });
  });
  
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

/***/ "./src/images/hosomaki-ebi.jpg":
/*!*************************************!*\
  !*** ./src/images/hosomaki-ebi.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hosomaki-ebi.jpg";

/***/ }),

/***/ "./src/images/hosomaki-maguro.jpg":
/*!****************************************!*\
  !*** ./src/images/hosomaki-maguro.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hosomaki-maguro.jpg";

/***/ }),

/***/ "./src/images/hosomaki-sake.jpg":
/*!**************************************!*\
  !*** ./src/images/hosomaki-sake.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hosomaki-sake.jpg";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

/***/ }),

/***/ "./src/images/nigiri-maguro.jpg":
/*!**************************************!*\
  !*** ./src/images/nigiri-maguro.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "nigiri-maguro.jpg";

/***/ }),

/***/ "./src/images/nigiri-sake.jpg":
/*!************************************!*\
  !*** ./src/images/nigiri-sake.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "nigiri-sake.jpg";

/***/ }),

/***/ "./src/images/nigiri-suzuki.jpg":
/*!**************************************!*\
  !*** ./src/images/nigiri-suzuki.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "nigiri-suzuki.jpg";

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

/***/ }),

/***/ "./src/images/uramaki-ebi.jpg":
/*!************************************!*\
  !*** ./src/images/uramaki-ebi.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "uramaki-ebi.jpg";

/***/ }),

/***/ "./src/images/uramaki-robusuta.jpg":
/*!*****************************************!*\
  !*** ./src/images/uramaki-robusuta.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "uramaki-robusuta.jpg";

/***/ }),

/***/ "./src/images/uramaki-sake.jpg":
/*!*************************************!*\
  !*** ./src/images/uramaki-sake.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "uramaki-sake.jpg";

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
/* harmony import */ var _scripts_loadMenuContents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/loadMenuContents */ "./src/scripts/loadMenuContents.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");








_scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadFirst((0,_scripts_loadPrimaryHeader__WEBPACK_IMPORTED_MODULE_1__["default"])(), 'primary-header');
_scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].load((0,_scripts_loadFooter__WEBPACK_IMPORTED_MODULE_3__["default"])(), 'footer');

_scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadAfter((0,_scripts_loadPrimaryNav__WEBPACK_IMPORTED_MODULE_2__["default"])('home', {
  home: () => {
    _scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].removeFrom('primary-nav', 'footer', { includeFrom: false });
    _scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadMultipleAfter((0,_scripts_loadHomeContents__WEBPACK_IMPORTED_MODULE_4__["default"])().reverse(), 'primary-nav');
  },
  menu: () => {
    _scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].removeFrom('primary-nav', 'footer', { includeFrom: false });
    _scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadMultipleAfter((0,_scripts_loadMenuContents__WEBPACK_IMPORTED_MODULE_5__["default"])().reverse(), 'primary-nav');
  },
  contact: () => {
    _scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].removeFrom('primary-nav', 'footer', { includeFrom: false });
  },
}), 'primary-header', 'primary-nav');

_scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadMultipleAfter((0,_scripts_loadHomeContents__WEBPACK_IMPORTED_MODULE_4__["default"])().reverse(), 'primary-nav');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7QUFFdEIsd0VBQXVCLENBQUMsc0VBQWlCO0FBQ3pDLG1FQUFrQixDQUFDLCtEQUFVOztBQUU3Qix3RUFBdUIsQ0FBQyxtRUFBYztBQUN0QztBQUNBLElBQUkseUVBQXdCLDRCQUE0QixvQkFBb0I7QUFDNUUsSUFBSSxnRkFBK0IsQ0FBQyxxRUFBZ0I7QUFDcEQsR0FBRztBQUNIO0FBQ0EsSUFBSSx5RUFBd0IsNEJBQTRCLG9CQUFvQjtBQUM1RSxJQUFJLGdGQUErQixDQUFDLHFFQUFnQjtBQUNwRCxHQUFHO0FBQ0g7QUFDQSxJQUFJLHlFQUF3Qiw0QkFBNEIsb0JBQW9CO0FBQzVFLEdBQUc7QUFDSCxDQUFDOztBQUVELGdGQUErQixDQUFDLHFFQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvQ29udGVudExvYWRlci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL0VsZW1lbnRDcmVhdG9yLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL1Byb2R1Y3RJbWFnZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2xvYWRGb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9sb2FkSG9tZUNvbnRlbnRzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvbG9hZE1lbnVDb250ZW50cy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2xvYWRQcmltYXJ5SGVhZGVyLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvbG9hZFByaW1hcnlOYXYuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1kZWZhdWx0LWJnLWNvbG9yOiAjMTgxOTFhO1xcbiAgLS1kZWZhdWx0LXRleHQtY29sb3I6ICNlNmU2ZTY7XFxuICAtLWRlZmF1bHQtdGV4dC1saW5rLWNvbG9yOiB3aGl0ZTtcXG4gIC0tZGVmYXVsdC10ZXh0LXNlY29uZGFyeS1jb2xvcjogI2IyYjJiMjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hLFxcbmh0bWwge1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1jb2xvcik7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtYmctY29sb3IpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHksXFxuYm9keSA+IC5jb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5ID4gLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uZmxleC1ob3Jpem9udGFsLWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmxleC12ZXJ0aWNhbC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LXdyYXAge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgNDBweDtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5zZWN0aW9uIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi8qIFBSSU1BUlkgSEVBREVSICYgTkFWICovXFxuXFxuLmxvZ28ge1xcbiAgLS1sZW5ndGg6IDMwcHg7XFxuICB3aWR0aDogdmFyKC0tbGVuZ3RoKTtcXG4gIGhlaWdodDogdmFyKC0tbGVuZ3RoKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbi5wcmltYXJ5LWhlYWRlciB7XFxuICBwYWRkaW5nOiAyNHB4IDAgMTZweDtcXG59XFxuXFxuLnByaW1hcnktaGVhZGVyID4gLmNvbnRlbnQtd3JhcCB7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnByaW1hcnktbmF2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMThweCAwIDE2cHg7XFxuICB0b3A6IC0ycHg7IC8qIEZpeGVzIGV4dHJhIGdhcCB0b3AgKi9cXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5wcmltYXJ5LW5hdiA+IC5jb250ZW50LXdyYXAge1xcbiAgd2lkdGg6IG1pbigxMDAlLCA0NjBweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnByaW1hcnktbmF2IGJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5wcmltYXJ5LW5hdiBidXR0b246aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5wcmltYXJ5LW5hdiBidXR0b24uY3VycmVudCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LWxpbmstY29sb3IpO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5cXG4uaG9tZS1zZWN0aW9uOmZpcnN0LW9mLXR5cGUge1xcbiAgaGVpZ2h0OiA2MDBweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDgwMHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uID4gLmNvbnRlbnQtd3JhcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uIC5jb250ZW50LFxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbiAuY29udGVudCB7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBhZGRpbmc6IDI0cHggMzZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtYmctY29sb3IpO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTEgLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgYm9yZGVyLXJhZGl1czogMTYwcHggNjBweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0xIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogLTIwMHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTEgLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggNDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTIgLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDYyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG4gIGJvcmRlci1yYWRpdXM6IDYwcHggMTIwcHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogLTI4cHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMiAuY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4IDQwcHggODBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTIgaDIge1xcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XFxufVxcblxcbi5ob3Vycy10YWJsZSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uaG91cnMtdGFibGUgdGgsXFxuLmhvdXJzLXRhYmxlIHRkIHtcXG4gIHBhZGRpbmc6IDRweCAyNHB4IDRweCA0cHg7XFxufVxcblxcbi5ob3Vycy10YWJsZSB0aDpsYXN0LWNoaWxkLFxcbi5ob3Vycy10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLmhvdXJzLXRhYmxlIHRoW3Njb3BlPVxcXCJyb3dcXFwiXSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTMgLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDU4MHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA1O1xcbiAgYm9yZGVyLXJhZGl1czogMjAwcHggMTAwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMyBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogLTUycHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMyAuY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweCA0OHB4O1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE3NnB4O1xcbiAgcGFkZGluZzogMjRweCAzNnB4IDMwcHg7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG59XFxuXFxuZm9vdGVyID4gLmNvbnRlbnQtd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCA2MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5mb290ZXIgLmNyZWRpdHMtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG5mb290ZXIgaDMge1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuZm9vdGVyIGEsXFxuZm9vdGVyIC5uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtbGluay1jb2xvcik7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiBNRU5VICovXFxuXFxuLm1lbnUtc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA0MHB4IDAgODBweDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiArIC5tZW51LXNlY3Rpb24ge1xcbiAgcGFkZGluZy10b3A6IDA7XFxufVxcblxcbi5wcm9kdWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ2FwOiA4MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbjpudGgtb2YtdHlwZShldmVuKSAucHJvZHVjdDpudGgtb2YtdHlwZShvZGQpLFxcbi5tZW51LXNlY3Rpb246bnRoLW9mLXR5cGUob2RkKSAucHJvZHVjdDpudGgtb2YtdHlwZShldmVuKSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbn1cXG5cXG4ucHJvZHVjdCAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyNjBweDtcXG4gIGhlaWdodDogMjYwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4MHB4IDQwcHg7XFxufVxcblxcbi5tZW51LXNlY3Rpb246bnRoLW9mLXR5cGUoZXZlbikgLnByb2R1Y3Q6bnRoLW9mLXR5cGUob2RkKSAuaW1hZ2UtY29udGFpbmVyLFxcbi5tZW51LXNlY3Rpb246bnRoLW9mLXR5cGUob2RkKSAucHJvZHVjdDpudGgtb2YtdHlwZShldmVuKSAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHggODBweDsgXFxufVxcblxcbi5wcm9kdWN0IC5jb250ZW50IHtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uOm50aC1vZi10eXBlKGV2ZW4pIC5wcm9kdWN0Om50aC1vZi10eXBlKG9kZCkgLmNvbnRlbnQsXFxuLm1lbnUtc2VjdGlvbjpudGgtb2YtdHlwZShvZGQpIC5wcm9kdWN0Om50aC1vZi10eXBlKGV2ZW4pIC5jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgcGFkZGluZzogMCAwIDAgODBweDtcXG59XFxuXFxuLnByb2R1Y3QgLnByb2R1Y3QtbmFtZSB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnByb2R1Y3QgLmVuZ2xpc2gtbmFtZSB7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9kdWN0IC5kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDhweCAwIDE2cHg7XFxufVxcblxcbi5wcm9kdWN0IC5wcmljZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5wcm9kdWN0IC5xdWFudGl0eSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsNERBQTREO0FBQzlEOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIseURBQXdDO0VBQ3hDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsU0FBUyxFQUFFLHdCQUF3QjtFQUNuQyxnQkFB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ICAtLWRlZmF1bHQtYmctY29sb3I6ICMxODE5MWE7XFxuICAtLWRlZmF1bHQtdGV4dC1jb2xvcjogI2U2ZTZlNjtcXG4gIC0tZGVmYXVsdC10ZXh0LWxpbmstY29sb3I6IHdoaXRlO1xcbiAgLS1kZWZhdWx0LXRleHQtc2Vjb25kYXJ5LWNvbG9yOiAjYjJiMmIyO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmEsXFxuaHRtbCB7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LWNvbG9yKTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1iZy1jb2xvcik7XFxufVxcblxcbmh0bWwsXFxuYm9keSxcXG5ib2R5ID4gLmNvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkgPiAuY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5mbGV4LWhvcml6b250YWwtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mbGV4LXZlcnRpY2FsLWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQtd3JhcCB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCA0MHB4O1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbnNlY3Rpb24gaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLyogUFJJTUFSWSBIRUFERVIgJiBOQVYgKi9cXG5cXG4ubG9nbyB7XFxuICAtLWxlbmd0aDogMzBweDtcXG4gIHdpZHRoOiB2YXIoLS1sZW5ndGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1sZW5ndGgpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2xvZ28ucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLnByaW1hcnktaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDI0cHggMCAxNnB4O1xcbn1cXG5cXG4ucHJpbWFyeS1oZWFkZXIgPiAuY29udGVudC13cmFwIHtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4ucHJpbWFyeS1uYXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxOHB4IDAgMTZweDtcXG4gIHRvcDogLTJweDsgLyogRml4ZXMgZXh0cmEgZ2FwIHRvcCAqL1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnByaW1hcnktbmF2ID4gLmNvbnRlbnQtd3JhcCB7XFxuICB3aWR0aDogbWluKDEwMCUsIDQ2MHB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucHJpbWFyeS1uYXYgYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnByaW1hcnktbmF2IGJ1dHRvbjpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnByaW1hcnktbmF2IGJ1dHRvbi5jdXJyZW50IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtbGluay1jb2xvcik7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcblxcbi5ob21lLXNlY3Rpb246Zmlyc3Qtb2YtdHlwZSB7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uIHtcXG4gIGhlaWdodDogODAwcHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24gPiAuY29udGVudC13cmFwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24gLmNvbnRlbnQsXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uIC5jb250ZW50IHtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcGFkZGluZzogMjRweCAzNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1iZy1jb2xvcik7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMSAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA2NDBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBib3JkZXItcmFkaXVzOiAxNjBweCA2MHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTEgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAtMjAwcHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMSAuY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCA0MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMiAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogNjIwcHg7XFxuICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbiAgYm9yZGVyLXJhZGl1czogNjBweCAxMjBweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0yIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAtMjhweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0yIC5jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggNDBweCA4MHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMiBoMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDZweDtcXG59XFxuXFxuLmhvdXJzLXRhYmxlIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5ob3Vycy10YWJsZSB0aCxcXG4uaG91cnMtdGFibGUgdGQge1xcbiAgcGFkZGluZzogNHB4IDI0cHggNHB4IDRweDtcXG59XFxuXFxuLmhvdXJzLXRhYmxlIHRoOmxhc3QtY2hpbGQsXFxuLmhvdXJzLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4uaG91cnMtdGFibGUgdGhbc2NvcGU9XFxcInJvd1xcXCJdIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMyAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA2NDBweDtcXG4gIGhlaWdodDogNTgwcHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDU7XFxuICBib3JkZXItcmFkaXVzOiAyMDBweCAxMDBweDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBtYXJnaW4tbGVmdDogNjBweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0zIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAtNTJweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0zIC5jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4IDQ4cHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTc2cHg7XFxuICBwYWRkaW5nOiAyNHB4IDM2cHggMzBweDtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG5mb290ZXIgPiAuY29udGVudC13cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDYwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmZvb3RlciAuY3JlZGl0cy1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbmZvb3RlciBoMyB7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG5mb290ZXIgYSxcXG5mb290ZXIgLm5hbWUge1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1saW5rLWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi8qIE1FTlUgKi9cXG5cXG4ubWVudS1zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDQwcHggMCA4MHB4O1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uICsgLm1lbnUtc2VjdGlvbiB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG59XFxuXFxuLnByb2R1Y3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBnYXA6IDgwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uOm50aC1vZi10eXBlKGV2ZW4pIC5wcm9kdWN0Om50aC1vZi10eXBlKG9kZCksXFxuLm1lbnUtc2VjdGlvbjpudGgtb2YtdHlwZShvZGQpIC5wcm9kdWN0Om50aC1vZi10eXBlKGV2ZW4pIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxufVxcblxcbi5wcm9kdWN0IC5pbWFnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDI2MHB4O1xcbiAgaGVpZ2h0OiAyNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDgwcHggNDBweDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbjpudGgtb2YtdHlwZShldmVuKSAucHJvZHVjdDpudGgtb2YtdHlwZShvZGQpIC5pbWFnZS1jb250YWluZXIsXFxuLm1lbnUtc2VjdGlvbjpudGgtb2YtdHlwZShvZGQpIC5wcm9kdWN0Om50aC1vZi10eXBlKGV2ZW4pIC5pbWFnZS1jb250YWluZXIge1xcbiAgYm9yZGVyLXJhZGl1czogNDBweCA4MHB4OyBcXG59XFxuXFxuLnByb2R1Y3QgLmNvbnRlbnQge1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XFxufVxcblxcbi5tZW51LXNlY3Rpb246bnRoLW9mLXR5cGUoZXZlbikgLnByb2R1Y3Q6bnRoLW9mLXR5cGUob2RkKSAuY29udGVudCxcXG4ubWVudS1zZWN0aW9uOm50aC1vZi10eXBlKG9kZCkgLnByb2R1Y3Q6bnRoLW9mLXR5cGUoZXZlbikgLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBwYWRkaW5nOiAwIDAgMCA4MHB4O1xcbn1cXG5cXG4ucHJvZHVjdCAucHJvZHVjdC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4ucHJvZHVjdCAuZW5nbGlzaC1uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnByb2R1Y3QgLmRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbjogOHB4IDAgMTZweDtcXG59XFxuXFxuLnByb2R1Y3QgLnByaWNlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnByb2R1Y3QgLnF1YW50aXR5IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQge1xuICBsb2FkLFxuICBsb2FkRmlyc3QsXG4gIGxvYWRCZWZvcmUsXG4gIGxvYWRBZnRlcixcbiAgbG9hZE11bHRpcGxlLFxuICBsb2FkTXVsdGlwbGVCZWZvcmUsXG4gIGxvYWRNdWx0aXBsZUFmdGVyLFxuICByZW1vdmVGcm9tLFxufTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5jb25zdCBlbGVtZW50cyA9IHtcbiAgZ2V0IGNvbnRlbnQoKSB7IHJldHVybiBjb250ZW50OyB9LFxuICBzZXQgY29udGVudCh2YWx1ZSkgeyB0aHJvdyBUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcHJvcGVydHkgXFwnY29udGVudFxcJywgaXQgaXMgcmVzZXJ2ZWQgYW5kIHVubW9kaWZpYWJsZScpOyB9XG59O1xuXG5mdW5jdGlvbiBsb2FkKGVsZW1lbnQsIG5hbWUgPSAnJykge1xuICBpZiAobmFtZSkgZWxlbWVudHNbbmFtZV0gPSBlbGVtZW50O1xuICBjb250ZW50LmFwcGVuZChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gbG9hZEZpcnN0KGVsZW1lbnQsIG5hbWUgPSAnJykge1xuICBpZiAobmFtZSkgZWxlbWVudHNbbmFtZV0gPSBlbGVtZW50O1xuICBjb250ZW50LnByZXBlbmQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNdWx0aXBsZShlbGVtZW50cykge1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBsb2FkKGVsZW1lbnQpKTtcbn1cblxuZnVuY3Rpb24gbG9hZEJlZm9yZShlbGVtZW50LCBiZWZvcmUsIG5hbWUgPSAnJykge1xuICBpZiAobmFtZSkgZWxlbWVudHNbbmFtZV0gPSBlbGVtZW50O1xuXG4gIGlmIChiZWZvcmUgPT09ICdjb250ZW50Jykge1xuICAgIGNvbnRlbnQucHJlcGVuZChlbGVtZW50KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWVsZW1lbnRzW2JlZm9yZV0pIHRocm93IFR5cGVFcnJvcihgQ2Fubm90IGxvYWQgYmVmb3JlICcke2JlZm9yZX0nIHNpbmNlIGl0IGRvZXMgbm90IGV4aXN0YCk7XG4gIGVsZW1lbnRzW2JlZm9yZV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBsb2FkQWZ0ZXIoZWxlbWVudCwgYWZ0ZXIsIG5hbWUgPSAnJykge1xuICBpZiAobmFtZSkgZWxlbWVudHNbbmFtZV0gPSBlbGVtZW50O1xuICBcbiAgaWYgKGFmdGVyID09PSAnY29udGVudCcpIHtcbiAgICBjb250ZW50LmFwcGVuZChlbGVtZW50KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWVsZW1lbnRzW2FmdGVyXSkgdGhyb3cgVHlwZUVycm9yKGBDYW5ub3QgbG9hZCBhZnRlciAnJHthZnRlcn0nIHNpbmNlIGl0IGRvZXMgbm90IGV4aXN0YCk7XG4gIGVsZW1lbnRzW2FmdGVyXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNdWx0aXBsZUJlZm9yZShlbGVtZW50cywgYmVmb3JlKSB7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGxvYWRCZWZvcmUoZWxlbWVudCwgYmVmb3JlKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNdWx0aXBsZUFmdGVyKGVsZW1lbnRzLCBhZnRlcikge1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBsb2FkQWZ0ZXIoZWxlbWVudCwgYWZ0ZXIpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRnJvbShmcm9tTmFtZSwgdG9OYW1lID0gbnVsbCwgeyBpbmNsdWRlRnJvbSwgaW5jbHVkZVRvIH0gPSB7IGluY2x1ZGVGcm9tOiB0cnVlLCBpbmNsdWRlVG86IGZhbHNlIH0pIHtcbiAgY29uc3QgZmluaXNoID0gZWxlbWVudHNbZnJvbU5hbWVdID8/IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgbGV0IGN1cnJlbnQgPSBjb250ZW50Lmxhc3RDaGlsZDtcblxuICBpZiAodG9OYW1lKSB7XG4gICAgY3VycmVudCA9IGVsZW1lbnRzW3RvTmFtZV07XG4gICAgaWYgKCFpbmNsdWRlVG8pIGN1cnJlbnQgPSBjdXJyZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIH1cblxuICB3aGlsZSAoY3VycmVudCAhPT0gZmluaXNoKSB7XG4gICAgY29uc3QgdG9SZW1vdmUgPSBjdXJyZW50O1xuICAgIFxuICAgIE9iamVjdC5lbnRyaWVzKGVsZW1lbnRzKS5mb3JFYWNoKChba2V5LCBlbGVtZW50XSkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnRzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjdXJyZW50ID0gY3VycmVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIHRvUmVtb3ZlLnJlbW92ZSgpO1xuICB9XG5cbiAgaWYgKGluY2x1ZGVGcm9tKSBjdXJyZW50LnJlbW92ZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlLFxuICBjcmVhdGVUZXh0LFxuICBjcmVhdGVMaW5rLFxuICBjcmVhdGVQYXJhZ3JhcGgsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0KHRleHQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rKHRleHQsIHVybCkge1xuICByZXR1cm4gY3JlYXRlKCdhJywge1xuICAgIGhyZWY6IHVybCxcbiAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgIHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInLFxuICB9LCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKHRleHRPck5vZGVzLCBvcHRpb25zT3JDbGFzc05hbWUpIHtcbiAgaWYgKHR5cGVvZiB0ZXh0T3JOb2RlcyA9PT0gJ3N0cmluZycpIHJldHVybiBjcmVhdGUoJ3AnLCBvcHRpb25zT3JDbGFzc05hbWUsIHRleHRPck5vZGVzKTtcblxuICByZXR1cm4gY3JlYXRlKCdwJywgb3B0aW9uc09yQ2xhc3NOYW1lLCBbXG4gICAgLi4udGV4dE9yTm9kZXMubWFwKChub2RlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdzdHJpbmcnKSByZXR1cm4gbm9kZTtcbiAgICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ251bWJlcicpIHJldHVybiBub2RlO1xuICAgICAgcmV0dXJuIGNyZWF0ZVRleHQobm9kZSk7XG4gICAgfSksXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUodGFnLCBvcHRpb25zT3JDbGFzc05hbWUgPSB7fSwgY2hpbGRyZW5PclRleHRDb250ZW50ID0gW10pIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zT3JDbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gb3B0aW9uc09yQ2xhc3NOYW1lO1xuICAgIG9wdGlvbnNPckNsYXNzTmFtZSA9IHt9O1xuXG4gICAgaWYgKGNsYXNzTmFtZSkgb3B0aW9uc09yQ2xhc3NOYW1lLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgY2hpbGRyZW5PclRleHRDb250ZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGRyZW5PclRleHRDb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgIG9wdGlvbnNPckNsYXNzTmFtZS50ZXh0Q29udGVudCA9IGNoaWxkcmVuT3JUZXh0Q29udGVudDtcbiAgICBjaGlsZHJlbk9yVGV4dENvbnRlbnQgPSBbXTtcbiAgfVxuXG4gIHJldHVybiBhc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpLCBvcHRpb25zT3JDbGFzc05hbWUsIGNoaWxkcmVuT3JUZXh0Q29udGVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbihlbGVtZW50LCBvcHRpb25zLCBjaGlsZHJlbikge1xuICBPYmplY3QuYXNzaWduKGVsZW1lbnQsIG9wdGlvbnMpO1xuICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZHJlbilcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfSk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihpbWFnZSwgbmFtZSwgZW5nbGlzaE5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgcXVhbnRpdHkpIHtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVuZ2xpc2hOYW1lID0gZW5nbGlzaE5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLnF1YW50aXR5ID0gcXVhbnRpdHk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHNyYywgYWx0LCB3aWR0aCwgdG9wLCBsZWZ0KSB7XG4gICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgdGhpcy5hbHQgPSBhbHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBnZXRTdHlsZU9iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgIH1cbiAgfVxufSIsImltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tIFwiLi9FbGVtZW50Q3JlYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2Zvb3RlcicsICcnLCBcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2RpdicsICdjb250ZW50LXdyYXAnLCBbXG4gICAgICBjcmVhdGVJbmZvcm1hdGlvbigpLFxuICAgICAgY3JlYXRlQ3JlZGl0cygpLFxuICAgIF0pKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mb3JtYXRpb24oKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2RpdicsICdpbmZvcm1hdGlvbicsIFtcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVQYXJhZ3JhcGgoW1xuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdzcGFuJywgJ25hbWUnLCAnU3VzaGkgU3VzaGknKSxcbiAgICAgICcsIGEgcmVzdGF1cmFudCBwYWdlIHByb2plY3QgZm9yICcsXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVMaW5rKCdUaGUgT2RpbiBQcm9qZWN0JywgJ2h0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9sZXNzb25zL25vZGUtcGF0aC1qYXZhc2NyaXB0LXJlc3RhdXJhbnQtcGFnZScpLFxuICAgICAgJy4nLFxuICAgIF0pLFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZVBhcmFncmFwaChbXG4gICAgICAnTWFkZSBieSAnLFxuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlTGluaygnWmVrdW1vcnUnLCAnaHR0cHM6Ly9naXRodWIuY29tL1pla3Vtb3J1JyksXG4gICAgXSksXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDcmVkaXRzKCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdkaXYnLCAnY3JlZGl0cy1jb250YWluZXInLCBbXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdoMycsICcnLCAnSW1hZ2UgQ3JlZGl0cycpLFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZVBhcmFncmFwaChbXG4gICAgICAnTG9nbyBpY29uIGJ5ICcsXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVMaW5rKCdzdXJhbmcnLCAnaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2F1dGhvcnMvc3VyYW5nJyksXG4gICAgXSksXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlUGFyYWdyYXBoKFtcbiAgICAgICdGaXJzdCBzdXNoaSBpbWFnZSBieSAnLFxuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlTGluaygnRGVyZWsgRHVyYW4nLCAnaHR0cHM6Ly91bnNwbGFzaC5jb20vQGRlcmVrZHVyYW4nKSxcbiAgICBdKSxcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVQYXJhZ3JhcGgoW1xuICAgICAgJ1NlY29uZCBzdXNoaSBpbWFnZSBieSAnLFxuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlTGluaygnRmFkeWEgQXpoYXJ5JywgJ2h0dHBzOi8vdW5zcGxhc2guY29tL0BmYWRzcGhvdG8yM18nKSxcbiAgICBdKSxcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVQYXJhZ3JhcGgoW1xuICAgICAgJ1RoaXJkIHN1c2hpIGltYWdlIGJ5ICcsXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVMaW5rKCdBbmRyYXogTGF6aWMnLCAnaHR0cHM6Ly91bnNwbGFzaC5jb20vQGFuZHJhemxhemljJyksXG4gICAgXSksXG4gIF0pO1xufVxuIiwiaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gXCIuL0VsZW1lbnRDcmVhdG9yXCI7XG5pbXBvcnQgc3VzaGkgZnJvbSAnLi4vaW1hZ2VzL3N1c2hpLmpwZyc7XG5pbXBvcnQgc3VzaGkyIGZyb20gJy4uL2ltYWdlcy9zdXNoaS0yLmpwZyc7XG5pbXBvcnQgc3VzaGkzIGZyb20gJy4uL2ltYWdlcy9zdXNoaS0zLmpwZyc7XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAge1xuICAgIHNyYzogc3VzaGksXG4gICAgYWx0OiAnOCBwaWVjZXMgc3VzaGkgd2l0aCBzYWxtb24gb24gdG9wJyxcbiAgfSxcbiAge1xuICAgIHNyYzogc3VzaGkyLFxuICAgIGFsdDogJ2JvYXJkIG9mIG1peGVkIHN1c2hpJyxcbiAgfSxcbiAge1xuICAgIHNyYzogc3VzaGkzLFxuICAgIGFsdDogJ3N1c2hpLCBjaG9wc3RpY2tzLCBhbmQgYSBjdXAgb2Ygc295IHNhdWNlJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFtcbiAgICBjcmVhdGVTZWN0aW9uKCdob21lLXNlY3Rpb24gaG9tZS1zZWN0aW9uLTEnLCBpbWFnZXNbMF0sIGNyZWF0ZUNvbnRlbnQoJ09ubHkgVGhlIEJlc3QnLCBbXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVQYXJhZ3JhcGgoJ0FsbCBpbmdyZWRpZW50cyBhcmUgY2FyZWZ1bGx5IGhhbmRwaWNrZWQgdG8gZ2l2ZSB5b3UgdGhlIGJlc3Qgb2YgdGFzdGVzLicpLFxuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlUGFyYWdyYXBoKCdFYWNoIHN1c2hpIHdpdGggYSBzdG9yeSBvZiBpdHMgb3duIGZsYXZvdXIgdG8gdGVsbC4nKSxcbiAgICBdKSksXG4gICAgY3JlYXRlU2VjdGlvbignaG9tZS1zZWN0aW9uIGhvbWUtc2VjdGlvbi0yJywgaW1hZ2VzWzFdLCBjcmVhdGVDb250ZW50KCdIb3VycycsIGNyZWF0ZUhvdXJzVGFibGUoKSkpLFxuICAgIGNyZWF0ZVNlY3Rpb24oJ2hvbWUtc2VjdGlvbiBob21lLXNlY3Rpb24tMycsIGltYWdlc1syXSwgY3JlYXRlQ29udGVudCgnTG9jYXRpb24nLCBbXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVQYXJhZ3JhcGgoJzEyMyBTdXNoaSBTdHJlZXQsIFRva3lvLCBKYXBhbicpLFxuICAgIF0pKSxcbiAgXTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24oY2xhc3NOYW1lLCBpbWFnZU9wdGlvbnMsIGNvbnRlbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnc2VjdGlvbicsIGNsYXNzTmFtZSwgXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdkaXYnLCAnY29udGVudC13cmFwJywgW1xuICAgICAgY3JlYXRlSW1hZ2VDb250YWluZXIoaW1hZ2VPcHRpb25zKSxcbiAgICAgIGNvbnRlbnQsXG4gICAgXSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbWFnZUNvbnRhaW5lcihpbWFnZU9wdGlvbnMpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2ltYWdlLWNvbnRhaW5lcicsIFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnaW1nJywgaW1hZ2VPcHRpb25zKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoaGVhZGluZywgY2hpbGRyZW4gPSBbXSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSBjaGlsZHJlbiA9IFsgY2hpbGRyZW4gXTtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2NvbnRlbnQnLCBbXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdoMicsICcnLCBoZWFkaW5nKSxcbiAgICAuLi5jaGlsZHJlbixcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzVGFibGUoKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3RhYmxlJywgJ2hvdXJzLXRhYmxlJyxcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3Rib2R5JywgJycsIFtcbiAgICAgIGNyZWF0ZUhvdXJzVGFibGVSb3coJ01vbmRheSB0byBGcmlkYXknLCAnMTE6MDAgQS5NLiAtIDM6MDAgUC5NLicsICc1OjAwIFAuTS4gLSAxMDowMCBQLk0uJyksXG4gICAgICBjcmVhdGVIb3Vyc1RhYmxlUm93KCdTYXR1cmRheScsICcxMTowMCBBLk0uIC0gMzowMCBQLk0uJywgJzU6MDAgUC5NLiAtIDEyOjAwIEEuTS4nKSxcbiAgICAgIGNyZWF0ZUhvdXJzVGFibGVSb3coJ1N1bmRheScsICcxMTowMCBBLk0uIC0gMzowMCBQLk0uJywgJycpLFxuICAgIF0pKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cnNUYWJsZVJvdyhkYXlzLCBhZnRlcm5vb24sIGV2ZW5pbmcpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgndHInLCAnJywgW1xuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgndGgnLCB7IHNjb3BlOiAncm93JyB9LCBkYXlzKSxcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3RkJywgJycsIGFmdGVybm9vbiksXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCd0ZCcsICcnLCBldmVuaW5nKSxcbiAgXSk7XG59IiwiaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gXCIuL0VsZW1lbnRDcmVhdG9yXCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9Qcm9kdWN0XCI7XG5pbXBvcnQgUHJvZHVjdEltYWdlIGZyb20gXCIuL1Byb2R1Y3RJbWFnZVwiO1xuaW1wb3J0IG5pZ2lyaVNha2UgZnJvbSAnLi4vaW1hZ2VzL25pZ2lyaS1zYWtlLmpwZyc7XG5pbXBvcnQgbmlnaXJpTWFndXJvIGZyb20gJy4uL2ltYWdlcy9uaWdpcmktbWFndXJvLmpwZyc7XG5pbXBvcnQgbmlnaXJpU3V6dWtpIGZyb20gJy4uL2ltYWdlcy9uaWdpcmktc3V6dWtpLmpwZyc7XG5pbXBvcnQgdXJhbWFraVNha2UgZnJvbSAnLi4vaW1hZ2VzL3VyYW1ha2ktc2FrZS5qcGcnO1xuaW1wb3J0IHVyYW1ha2lFYmkgZnJvbSAnLi4vaW1hZ2VzL3VyYW1ha2ktZWJpLmpwZyc7XG5pbXBvcnQgdXJhbWFraVJvYnVzdXRhIGZyb20gJy4uL2ltYWdlcy91cmFtYWtpLXJvYnVzdXRhLmpwZyc7XG5pbXBvcnQgaG9zb21ha2lTYWtlIGZyb20gJy4uL2ltYWdlcy9ob3NvbWFraS1zYWtlLmpwZyc7XG5pbXBvcnQgaG9zb21ha2lNYWd1cm8gZnJvbSAnLi4vaW1hZ2VzL2hvc29tYWtpLW1hZ3Vyby5qcGcnO1xuaW1wb3J0IGhvc29tYWtpRWJpIGZyb20gJy4uL2ltYWdlcy9ob3NvbWFraS1lYmkuanBnJztcblxuY29uc3QgaW1hZ2VzID0ge1xuICBuaWdpcmk6IHtcbiAgICBzYWtlOiBuZXcgUHJvZHVjdEltYWdlKG5pZ2lyaVNha2UsICcyIHBpZWNlcyBvZiBuaWdpcmkgc2FrZScsICcyNDAlJywgJy01OHB4JywgJy0yMDBweCcpLFxuICAgIG1hZ3VybzogbmV3IFByb2R1Y3RJbWFnZShuaWdpcmlNYWd1cm8sICc0IHBpZWNlcyBvZiBuaWdpcmkgbWFndXJvJywgJzE4MCUnLCAnLTE4cHgnLCAnLTU4cHgnKSxcbiAgICBzdXp1a2k6IG5ldyBQcm9kdWN0SW1hZ2UobmlnaXJpU3V6dWtpLCAnNCBwaWVjZXMgb2YgbmlnaXJpIHN1enVraScsICcyMDAlJywgJy0xNnB4JywgJy05NHB4JyksXG4gIH0sXG4gIHVyYW1ha2k6IHtcbiAgICBzYWtlOiBuZXcgUHJvZHVjdEltYWdlKHVyYW1ha2lTYWtlLCAnOCBwaWVjZXMgb2YgdXJhbWFraSBzYWtlJywgJzIwMCUnLCAnLTIwcHgnLCAnLTc1cHgnKSxcbiAgICBlYmk6IG5ldyBQcm9kdWN0SW1hZ2UodXJhbWFraUViaSwgJzggcGllY2VzIG9mIHVyYW1ha2kgZWJpJywgJzIwMCUnLCAnLTIxcHgnLCAnLTQ3cHgnKSxcbiAgICByb2J1c3V0YTogbmV3IFByb2R1Y3RJbWFnZSh1cmFtYWtpUm9idXN1dGEsICc4IHBpZWNlcyBvZiB1cmFtYWtpIHJvYnVzdXRhJywgJzE3MCUnLCAnLTRweCcsICctNzBweCcpLFxuICB9LFxuICBob3NvbWFraToge1xuICAgIHNha2U6IG5ldyBQcm9kdWN0SW1hZ2UoaG9zb21ha2lTYWtlLCAnOCBwaWVjZXMgb2YgaG9zb21ha2kgc2FrZScsICcyNDAlJywgJy0yN3B4JywgJy03NHB4JyksXG4gICAgbWFndXJvOiBuZXcgUHJvZHVjdEltYWdlKGhvc29tYWtpTWFndXJvLCAnOCBwaWVjZXMgb2YgaG9zb21ha2kgbWFndXJvJywgJzIyMCUnLCAnLTQ2cHgnLCAnLTExMHB4JyksXG4gICAgZWJpOiBuZXcgUHJvZHVjdEltYWdlKGhvc29tYWtpRWJpLCAnOCBwaWVjZXMgb2YgaG9zb21ha2kgZWJpJywgJzE5MCUnLCAnLTI5cHgnLCAnLTEzNnB4JyksXG4gIH0sXG59XG5cbmNvbnN0IHByb2R1Y3RzID0ge1xuICBuaWdpcmk6IFtcbiAgICBuZXcgUHJvZHVjdChpbWFnZXMubmlnaXJpLnNha2UsICdTYWtlJywgJ1NhbG1vbicsICdBIGxvbmcgd2hpdGUgb3ZhbC1zaGFwZWQgc3VzaGkgd2l0aCBhIGN1dCBvZiBmcmVzaCBzYWxtb24gb24gdG9wLicsIDExOTkuOTksIDgpLFxuICAgIG5ldyBQcm9kdWN0KGltYWdlcy5uaWdpcmkubWFndXJvLCAnTWFndXJvJywgJ1R1bmEnLCAnQSBsb25nIHdoaXRlIG92YWwtc2hhcGVkIHN1c2hpIHdpdGggc2xpY2VzIG9mIHR1bmEgb24gdG9wLicsIDExOTkuOTksIDgpLFxuICAgIG5ldyBQcm9kdWN0KGltYWdlcy5uaWdpcmkuc3V6dWtpLCAnU3V6dWtpJywgJ0phcGFuZXNlIHNlYSBiYXNzJywgJ0EgbG9uZyB3aGl0ZSBvdmFsLXNoYXBlZCBzdXNoaSB3aXRoIHNsaWNlcyBvZiBKYXBhbmVzZSBzZWEgYmFzcyBvbiB0b3AuJywgMTE5OS45OSwgOCksICBcbiAgXSxcbiAgdXJhbWFraTogW1xuICAgIG5ldyBQcm9kdWN0KGltYWdlcy51cmFtYWtpLnNha2UsICdTYWtlJywgJ1NhbG1vbicsICdBIGN5bGluZHJpY2FsIG5vcmktaGlkZGVuIHN1c2hpIHdpdGggY3J1c2hlZCBmcmVzaCBzYWxtb24gb24gdG9wLicsIDEzOTkuOTksIDgpLFxuICAgIG5ldyBQcm9kdWN0KGltYWdlcy51cmFtYWtpLmViaSwgJ0ViaScsICdTaHJpbXAnLCAnQSBjeWxpbmRyaWNhbCBub3JpLWhpZGRlbiBzdXNoaSB3aXRoIGEgY29va2VkIGN1dCBvZiBzaHJpbXAgb24gdG9wLicsIDEzOTkuOTksIDgpLFxuICAgIG5ldyBQcm9kdWN0KGltYWdlcy51cmFtYWtpLnJvYnVzdXRhLCAnUm9idXN1dGEnLCAnTG9ic3RlcicsICdBIGN5bGluZHJpY2FsIG5vcmktaGlkZGVuIHN1c2hpIHdpdGggY3J1c2hlZCBmbGVzaCBvZiBsb2JzdGVyIG9uIHRvcC4nLCAxNzk5Ljk5LCA4KSxcbiAgXSxcbiAgaG9zb21ha2k6IFtcbiAgICBuZXcgUHJvZHVjdChpbWFnZXMuaG9zb21ha2kuc2FrZSwgJ1Nha2UnLCAnU2FsbW9uJywgJ0EgY3lsaW5kcmljYWwgc3VzaGkgd2l0aCBmcmVzaCBzYWxtb24gaW5zaWRlLicsIDEwOTkuOTksIDgpLFxuICAgIG5ldyBQcm9kdWN0KGltYWdlcy5ob3NvbWFraS5tYWd1cm8sICdNYWd1cm8nLCAnVHVuYScsICdBIGN5bGluZHJpY2FsIHN1c2hpIHdpdGggdHVuYSBpbnNpZGUuJywgMTA5OS45OSwgOCksXG4gICAgbmV3IFByb2R1Y3QoaW1hZ2VzLmhvc29tYWtpLmViaSwgJ0ViaScsICdTaHJpbXAnLCAnQSBjeWxpbmRyaWNhbCBzdXNoaSB3aXRoIHNocmltcCBpbnNpZGUuJywgMTE5OS45OSwgOCksXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXG4gICAgY3JlYXRlU2VjdGlvbignTmlnaXJpenVzaGknLCAnSGFuZC1wcmVzc2VkIHN1c2hpJywgY3JlYXRlUHJvZHVjdHMocHJvZHVjdHMubmlnaXJpKSksXG4gICAgY3JlYXRlU2VjdGlvbignVXJhbWFraScsICdJbnNpZGUtb3V0IHJvbGwnLCBjcmVhdGVQcm9kdWN0cyhwcm9kdWN0cy51cmFtYWtpKSksXG4gICAgY3JlYXRlU2VjdGlvbignSG9zb21ha2knLCAnVGhpbiByb2xsJywgY3JlYXRlUHJvZHVjdHMocHJvZHVjdHMuaG9zb21ha2kpKSxcbiAgXTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9kdWN0cyA9IFtdKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3NlY3Rpb24nLCAnbWVudS1zZWN0aW9uJywgXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdkaXYnLCAnY29udGVudC13cmFwIGZsZXgtdmVydGljYWwtY2VudGVyJywgW1xuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdoMicsICcnLCB0aXRsZSksXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3AnLCAnJywgZGVzY3JpcHRpb24pLFxuICAgICAgLi4ucHJvZHVjdHMsXG4gICAgXSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZHVjdHMocHJvZHVjdHMpIHtcbiAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2RpdicsICdwcm9kdWN0JywgW1xuICAgICAgY3JlYXRlSW1hZ2VDb250YWluZXIocHJvZHVjdC5pbWFnZSksXG4gICAgICBjcmVhdGVDb250ZW50KHByb2R1Y3QpLFxuICAgIF0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VDb250YWluZXIoaW1hZ2UpIHtcbiAgY29uc3QgaW1hZ2VFbGVtZW50ID0gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdpbWcnLCB7XG4gICAgc3JjOiBpbWFnZS5zcmMsXG4gICAgYWx0OiBpbWFnZS5hbHQsXG4gIH0pO1xuICBPYmplY3QuYXNzaWduKGltYWdlRWxlbWVudC5zdHlsZSwgaW1hZ2UuZ2V0U3R5bGVPYmplY3QoKSk7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2RpdicsICdpbWFnZS1jb250YWluZXInLCBpbWFnZUVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KHByb2R1Y3QpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2NvbnRlbnQnLCBbXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdoMycsICdwcm9kdWN0LW5hbWUnLCBwcm9kdWN0Lm5hbWUpLFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgncCcsICdlbmdsaXNoLW5hbWUnLCBwcm9kdWN0LmVuZ2xpc2hOYW1lKSxcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3AnLCAnZGVzY3JpcHRpb24nLCBwcm9kdWN0LmRlc2NyaXB0aW9uKSxcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVQYXJhZ3JhcGgoW1xuICAgICAgYMKlICR7cHJvZHVjdC5wcmljZX0gYCxcbiAgICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnc3BhbicsICdxdWFudGl0eScsIGAoJHtwcm9kdWN0LnF1YW50aXR5fSBwaWVjZXMpYClcbiAgICBdLCAncHJpY2UnKSxcbiAgXSk7XG59IiwiaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gXCIuL0VsZW1lbnRDcmVhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnaGVhZGVyJywgJ3ByaW1hcnktaGVhZGVyJywgY3JlYXRlQ29udGVudCgpKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2RpdicsICdjb250ZW50LXdyYXAgZmxleC1ob3Jpem9udGFsLWNlbnRlcicsIFtcbiAgICBjcmVhdGVMb2dvKCksXG4gICAgY3JlYXRlVGl0bGUoKSxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvZ28oKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2RpdicsICdsb2dvJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdwJywgJ3RpdGxlJywgJ1N1c2hpIFN1c2hpJyk7XG59IiwiaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gXCIuL0VsZW1lbnRDcmVhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjdXJyZW50VGFiLCBidXR0b25PbkNsaWNrTGlzdGVuZXJzKSB7XG4gIGNvbnN0IHByaW1hcnlOYXYgPSBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ25hdicsICdwcmltYXJ5LW5hdicsIGNyZWF0ZUNvbnRlbnQoKSk7XG4gIHByaW1hcnlOYXYucXVlcnlTZWxlY3RvcihgLiR7Y3VycmVudFRhYn1gKS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cbiAgT2JqZWN0LmVudHJpZXMoYnV0dG9uT25DbGlja0xpc3RlbmVycykuZm9yRWFjaCgoW2J1dHRvbiwgbGlzdGVuZXJdKSA9PiB7XG4gICAgcHJpbWFyeU5hdi5xdWVyeVNlbGVjdG9yKGAuJHtidXR0b259YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgcHJpbWFyeU5hdi5xdWVyeVNlbGVjdG9yKCdidXR0b24uY3VycmVudCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgIGxpc3RlbmVyKGUpO1xuICAgIH0pO1xuICB9KTtcbiAgXG4gIHJldHVybiBwcmltYXJ5TmF2O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgndWwnLCAnY29udGVudC13cmFwJywgW1xuICAgIGNyZWF0ZU5hdkl0ZW0oY3JlYXRlTmF2SXRlbUJ1dHRvbignaG9tZScsICdIb21lJykpLFxuICAgIGNyZWF0ZU5hdkl0ZW0oY3JlYXRlTmF2SXRlbUJ1dHRvbignbWVudScsICdNZW51JykpLFxuICAgIGNyZWF0ZU5hdkl0ZW0oY3JlYXRlTmF2SXRlbUJ1dHRvbignY29udGFjdCcsICdDb250YWN0JykpLFxuICBdKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2SXRlbShidXR0b24pIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnbGknLCAnJywgYnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2SXRlbUJ1dHRvbihjbGFzc05hbWUsIHRleHRDb250ZW50KSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2J1dHRvbicsIGNsYXNzTmFtZSwgdGV4dENvbnRlbnQpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnVuZGxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBDb250ZW50TG9hZGVyIGZyb20gJy4vc2NyaXB0cy9Db250ZW50TG9hZGVyJztcbmltcG9ydCBsb2FkUHJpbWFyeUhlYWRlciBmcm9tICcuL3NjcmlwdHMvbG9hZFByaW1hcnlIZWFkZXInO1xuaW1wb3J0IGxvYWRQcmltYXJ5TmF2IGZyb20gJy4vc2NyaXB0cy9sb2FkUHJpbWFyeU5hdic7XG5pbXBvcnQgbG9hZEZvb3RlciBmcm9tICcuL3NjcmlwdHMvbG9hZEZvb3Rlcic7XG5pbXBvcnQgbG9hZEhvbWVDb250ZW50cyBmcm9tICcuL3NjcmlwdHMvbG9hZEhvbWVDb250ZW50cyc7XG5pbXBvcnQgbG9hZE1lbnVDb250ZW50cyBmcm9tICcuL3NjcmlwdHMvbG9hZE1lbnVDb250ZW50cyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbkNvbnRlbnRMb2FkZXIubG9hZEZpcnN0KGxvYWRQcmltYXJ5SGVhZGVyKCksICdwcmltYXJ5LWhlYWRlcicpO1xuQ29udGVudExvYWRlci5sb2FkKGxvYWRGb290ZXIoKSwgJ2Zvb3RlcicpO1xuXG5Db250ZW50TG9hZGVyLmxvYWRBZnRlcihsb2FkUHJpbWFyeU5hdignaG9tZScsIHtcbiAgaG9tZTogKCkgPT4ge1xuICAgIENvbnRlbnRMb2FkZXIucmVtb3ZlRnJvbSgncHJpbWFyeS1uYXYnLCAnZm9vdGVyJywgeyBpbmNsdWRlRnJvbTogZmFsc2UgfSk7XG4gICAgQ29udGVudExvYWRlci5sb2FkTXVsdGlwbGVBZnRlcihsb2FkSG9tZUNvbnRlbnRzKCkucmV2ZXJzZSgpLCAncHJpbWFyeS1uYXYnKTtcbiAgfSxcbiAgbWVudTogKCkgPT4ge1xuICAgIENvbnRlbnRMb2FkZXIucmVtb3ZlRnJvbSgncHJpbWFyeS1uYXYnLCAnZm9vdGVyJywgeyBpbmNsdWRlRnJvbTogZmFsc2UgfSk7XG4gICAgQ29udGVudExvYWRlci5sb2FkTXVsdGlwbGVBZnRlcihsb2FkTWVudUNvbnRlbnRzKCkucmV2ZXJzZSgpLCAncHJpbWFyeS1uYXYnKTtcbiAgfSxcbiAgY29udGFjdDogKCkgPT4ge1xuICAgIENvbnRlbnRMb2FkZXIucmVtb3ZlRnJvbSgncHJpbWFyeS1uYXYnLCAnZm9vdGVyJywgeyBpbmNsdWRlRnJvbTogZmFsc2UgfSk7XG4gIH0sXG59KSwgJ3ByaW1hcnktaGVhZGVyJywgJ3ByaW1hcnktbmF2Jyk7XG5cbkNvbnRlbnRMb2FkZXIubG9hZE11bHRpcGxlQWZ0ZXIobG9hZEhvbWVDb250ZW50cygpLnJldmVyc2UoKSwgJ3ByaW1hcnktbmF2Jyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=