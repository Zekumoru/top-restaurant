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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXRCLHdFQUF1QixDQUFDLHNFQUFpQjtBQUN6QyxtRUFBa0IsQ0FBQywrREFBVTs7QUFFN0Isd0VBQXVCLENBQUMsbUVBQWM7QUFDdEM7QUFDQSxJQUFJLHlFQUF3Qiw0QkFBNEIsb0JBQW9CO0FBQzVFLElBQUksZ0ZBQStCLENBQUMscUVBQWdCO0FBQ3BELEdBQUc7QUFDSDtBQUNBLElBQUkseUVBQXdCLDRCQUE0QixvQkFBb0I7QUFDNUUsSUFBSSxnRkFBK0IsQ0FBQyxxRUFBZ0I7QUFDcEQsR0FBRztBQUNIO0FBQ0EsSUFBSSx5RUFBd0IsNEJBQTRCLG9CQUFvQjtBQUM1RSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCxnRkFBK0IsQ0FBQyxxRUFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL0NvbnRlbnRMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9FbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9Qcm9kdWN0SW1hZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9sb2FkRm9vdGVyLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvbG9hZEhvbWVDb250ZW50cy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2xvYWRNZW51Q29udGVudHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9sb2FkUHJpbWFyeUhlYWRlci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2xvYWRQcmltYXJ5TmF2LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9sb2dvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZGVmYXVsdC1iZy1jb2xvcjogIzE4MTkxYTtcXG4gIC0tZGVmYXVsdC10ZXh0LWNvbG9yOiAjZTZlNmU2O1xcbiAgLS1kZWZhdWx0LXRleHQtbGluay1jb2xvcjogd2hpdGU7XFxuICAtLWRlZmF1bHQtdGV4dC1zZWNvbmRhcnktY29sb3I6ICNiMmIyYjI7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYSxcXG5odG1sIHtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtY29sb3IpO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LWJnLWNvbG9yKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5LFxcbmJvZHkgPiAuY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSA+IC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLmZsZXgtaG9yaXpvbnRhbC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZsZXgtdmVydGljYWwtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC13cmFwIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDQwcHg7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuc2VjdGlvbiBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4vKiBQUklNQVJZIEhFQURFUiAmIE5BViAqL1xcblxcbi5sb2dvIHtcXG4gIC0tbGVuZ3RoOiAzMHB4O1xcbiAgd2lkdGg6IHZhcigtLWxlbmd0aCk7XFxuICBoZWlnaHQ6IHZhcigtLWxlbmd0aCk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4ucHJpbWFyeS1oZWFkZXIge1xcbiAgcGFkZGluZzogMjRweCAwIDE2cHg7XFxufVxcblxcbi5wcmltYXJ5LWhlYWRlciA+IC5jb250ZW50LXdyYXAge1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5wcmltYXJ5LW5hdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE4cHggMCAxNnB4O1xcbiAgdG9wOiAtMnB4OyAvKiBGaXhlcyBleHRyYSBnYXAgdG9wICovXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ucHJpbWFyeS1uYXYgPiAuY29udGVudC13cmFwIHtcXG4gIHdpZHRoOiBtaW4oMTAwJSwgNDYwcHgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5wcmltYXJ5LW5hdiBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucHJpbWFyeS1uYXYgYnV0dG9uOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ucHJpbWFyeS1uYXYgYnV0dG9uLmN1cnJlbnQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1saW5rLWNvbG9yKTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxuXFxuLmhvbWUtc2VjdGlvbjpmaXJzdC1vZi10eXBlIHtcXG4gIGhlaWdodDogNjAwcHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24ge1xcbiAgaGVpZ2h0OiA4MDBweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbiA+IC5jb250ZW50LXdyYXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNDBweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbiAuY29udGVudCxcXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxufVxcblxcbi5ob21lLXNlY3Rpb24gLmNvbnRlbnQge1xcbiAgei1pbmRleDogMTA7XFxuICBwYWRkaW5nOiAyNHB4IDM2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LWJnLWNvbG9yKTtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0xIC5pbWFnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDY0MHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2MHB4IDYwcHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IC0yMDBweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0xIC5jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDQwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0yIC5pbWFnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA2MjBweDtcXG4gIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxuICBib3JkZXItcmFkaXVzOiA2MHB4IDEyMHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTIgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IC0yOHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTIgLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweCA0MHB4IDgwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XFxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0yIGgyIHtcXG4gIHBhZGRpbmctbGVmdDogNnB4O1xcbn1cXG5cXG4uaG91cnMtdGFibGUge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmhvdXJzLXRhYmxlIHRoLFxcbi5ob3Vycy10YWJsZSB0ZCB7XFxuICBwYWRkaW5nOiA0cHggMjRweCA0cHggNHB4O1xcbn1cXG5cXG4uaG91cnMtdGFibGUgdGg6bGFzdC1jaGlsZCxcXG4uaG91cnMtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5ob3Vycy10YWJsZSB0aFtzY29wZT1cXFwicm93XFxcIl0ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0zIC5pbWFnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDY0MHB4O1xcbiAgaGVpZ2h0OiA1ODBweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwMHB4IDEwMHB4O1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTMgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IC01MnB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTMgLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggNDhweDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBtYXJnaW4tbGVmdDogMTIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNzZweDtcXG4gIHBhZGRpbmc6IDI0cHggMzZweCAzMHB4O1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxufVxcblxcbmZvb3RlciA+IC5jb250ZW50LXdyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDAgNjBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuZm9vdGVyIC5jcmVkaXRzLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuZm9vdGVyIGgzIHtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbmZvb3RlciBhLFxcbmZvb3RlciAubmFtZSB7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LWxpbmstY29sb3IpO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLyogTUVOVSAqL1xcblxcbi5tZW51LXNlY3Rpb24ge1xcbiAgcGFkZGluZzogNDBweCAwIDgwcHg7XFxufVxcblxcbi5tZW51LXNlY3Rpb24gKyAubWVudS1zZWN0aW9uIHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbn1cXG5cXG4ucHJvZHVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzYwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGdhcDogODBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LXNlY3Rpb246bnRoLW9mLXR5cGUoZXZlbikgLnByb2R1Y3Q6bnRoLW9mLXR5cGUob2RkKSxcXG4ubWVudS1zZWN0aW9uOm50aC1vZi10eXBlKG9kZCkgLnByb2R1Y3Q6bnRoLW9mLXR5cGUoZXZlbikge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG59XFxuXFxuLnByb2R1Y3QgLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMjYwcHg7XFxuICBoZWlnaHQ6IDI2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogODBweCA0MHB4O1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uOm50aC1vZi10eXBlKGV2ZW4pIC5wcm9kdWN0Om50aC1vZi10eXBlKG9kZCkgLmltYWdlLWNvbnRhaW5lcixcXG4ubWVudS1zZWN0aW9uOm50aC1vZi10eXBlKG9kZCkgLnByb2R1Y3Q6bnRoLW9mLXR5cGUoZXZlbikgLmltYWdlLWNvbnRhaW5lciB7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4IDgwcHg7IFxcbn1cXG5cXG4ucHJvZHVjdCAuY29udGVudCB7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbiAgcGFkZGluZy1yaWdodDogODBweDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbjpudGgtb2YtdHlwZShldmVuKSAucHJvZHVjdDpudGgtb2YtdHlwZShvZGQpIC5jb250ZW50LFxcbi5tZW51LXNlY3Rpb246bnRoLW9mLXR5cGUob2RkKSAucHJvZHVjdDpudGgtb2YtdHlwZShldmVuKSAuY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIHBhZGRpbmc6IDAgMCAwIDgwcHg7XFxufVxcblxcbi5wcm9kdWN0IC5wcm9kdWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5wcm9kdWN0IC5lbmdsaXNoLW5hbWUge1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4ucHJvZHVjdCAuZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiA4cHggMCAxNnB4O1xcbn1cXG5cXG4ucHJvZHVjdCAucHJpY2Uge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucHJvZHVjdCAucXVhbnRpdHkge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1zZWNvbmRhcnktY29sb3IpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7OztFQUdFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEseUJBQXlCOztBQUV6QjtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHlEQUF3QztFQUN4QyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFNBQVMsRUFBRSx3QkFBd0I7RUFDbkMsZ0JBQWdCO0VB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ZWZhdWx0LWJnLWNvbG9yOiAjMTgxOTFhO1xcbiAgLS1kZWZhdWx0LXRleHQtY29sb3I6ICNlNmU2ZTY7XFxuICAtLWRlZmF1bHQtdGV4dC1saW5rLWNvbG9yOiB3aGl0ZTtcXG4gIC0tZGVmYXVsdC10ZXh0LXNlY29uZGFyeS1jb2xvcjogI2IyYjJiMjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hLFxcbmh0bWwge1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1jb2xvcik7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtYmctY29sb3IpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHksXFxuYm9keSA+IC5jb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5ID4gLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uZmxleC1ob3Jpem9udGFsLWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmxleC12ZXJ0aWNhbC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LXdyYXAge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgNDBweDtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5zZWN0aW9uIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi8qIFBSSU1BUlkgSEVBREVSICYgTkFWICovXFxuXFxuLmxvZ28ge1xcbiAgLS1sZW5ndGg6IDMwcHg7XFxuICB3aWR0aDogdmFyKC0tbGVuZ3RoKTtcXG4gIGhlaWdodDogdmFyKC0tbGVuZ3RoKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9sb2dvLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbi5wcmltYXJ5LWhlYWRlciB7XFxuICBwYWRkaW5nOiAyNHB4IDAgMTZweDtcXG59XFxuXFxuLnByaW1hcnktaGVhZGVyID4gLmNvbnRlbnQtd3JhcCB7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnByaW1hcnktbmF2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMThweCAwIDE2cHg7XFxuICB0b3A6IC0ycHg7IC8qIEZpeGVzIGV4dHJhIGdhcCB0b3AgKi9cXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5wcmltYXJ5LW5hdiA+IC5jb250ZW50LXdyYXAge1xcbiAgd2lkdGg6IG1pbigxMDAlLCA0NjBweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnByaW1hcnktbmF2IGJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5wcmltYXJ5LW5hdiBidXR0b246aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5wcmltYXJ5LW5hdiBidXR0b24uY3VycmVudCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LWxpbmstY29sb3IpO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5cXG4uaG9tZS1zZWN0aW9uOmZpcnN0LW9mLXR5cGUge1xcbiAgaGVpZ2h0OiA2MDBweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDgwMHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uID4gLmNvbnRlbnQtd3JhcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uIC5jb250ZW50LFxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbiAuY29udGVudCB7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBhZGRpbmc6IDI0cHggMzZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtYmctY29sb3IpO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTEgLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgYm9yZGVyLXJhZGl1czogMTYwcHggNjBweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0xIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogLTIwMHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTEgLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggNDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTIgLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDYyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG4gIGJvcmRlci1yYWRpdXM6IDYwcHggMTIwcHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogLTI4cHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMiAuY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4IDQwcHggODBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTIgaDIge1xcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XFxufVxcblxcbi5ob3Vycy10YWJsZSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uaG91cnMtdGFibGUgdGgsXFxuLmhvdXJzLXRhYmxlIHRkIHtcXG4gIHBhZGRpbmc6IDRweCAyNHB4IDRweCA0cHg7XFxufVxcblxcbi5ob3Vycy10YWJsZSB0aDpsYXN0LWNoaWxkLFxcbi5ob3Vycy10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLmhvdXJzLXRhYmxlIHRoW3Njb3BlPVxcXCJyb3dcXFwiXSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTMgLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDU4MHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA1O1xcbiAgYm9yZGVyLXJhZGl1czogMjAwcHggMTAwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMyBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogLTUycHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMyAuY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweCA0OHB4O1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE3NnB4O1xcbiAgcGFkZGluZzogMjRweCAzNnB4IDMwcHg7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG59XFxuXFxuZm9vdGVyID4gLmNvbnRlbnQtd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCA2MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5mb290ZXIgLmNyZWRpdHMtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG5mb290ZXIgaDMge1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuZm9vdGVyIGEsXFxuZm9vdGVyIC5uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtbGluay1jb2xvcik7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiBNRU5VICovXFxuXFxuLm1lbnUtc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA0MHB4IDAgODBweDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiArIC5tZW51LXNlY3Rpb24ge1xcbiAgcGFkZGluZy10b3A6IDA7XFxufVxcblxcbi5wcm9kdWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ2FwOiA4MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbjpudGgtb2YtdHlwZShldmVuKSAucHJvZHVjdDpudGgtb2YtdHlwZShvZGQpLFxcbi5tZW51LXNlY3Rpb246bnRoLW9mLXR5cGUob2RkKSAucHJvZHVjdDpudGgtb2YtdHlwZShldmVuKSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbn1cXG5cXG4ucHJvZHVjdCAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyNjBweDtcXG4gIGhlaWdodDogMjYwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4MHB4IDQwcHg7XFxufVxcblxcbi5tZW51LXNlY3Rpb246bnRoLW9mLXR5cGUoZXZlbikgLnByb2R1Y3Q6bnRoLW9mLXR5cGUob2RkKSAuaW1hZ2UtY29udGFpbmVyLFxcbi5tZW51LXNlY3Rpb246bnRoLW9mLXR5cGUob2RkKSAucHJvZHVjdDpudGgtb2YtdHlwZShldmVuKSAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHggODBweDsgXFxufVxcblxcbi5wcm9kdWN0IC5jb250ZW50IHtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uOm50aC1vZi10eXBlKGV2ZW4pIC5wcm9kdWN0Om50aC1vZi10eXBlKG9kZCkgLmNvbnRlbnQsXFxuLm1lbnUtc2VjdGlvbjpudGgtb2YtdHlwZShvZGQpIC5wcm9kdWN0Om50aC1vZi10eXBlKGV2ZW4pIC5jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgcGFkZGluZzogMCAwIDAgODBweDtcXG59XFxuXFxuLnByb2R1Y3QgLnByb2R1Y3QtbmFtZSB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnByb2R1Y3QgLmVuZ2xpc2gtbmFtZSB7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9kdWN0IC5kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDhweCAwIDE2cHg7XFxufVxcblxcbi5wcm9kdWN0IC5wcmljZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5wcm9kdWN0IC5xdWFudGl0eSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZCxcbiAgbG9hZEZpcnN0LFxuICBsb2FkQmVmb3JlLFxuICBsb2FkQWZ0ZXIsXG4gIGxvYWRNdWx0aXBsZSxcbiAgbG9hZE11bHRpcGxlQmVmb3JlLFxuICBsb2FkTXVsdGlwbGVBZnRlcixcbiAgcmVtb3ZlRnJvbSxcbn07XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgZWxlbWVudHMgPSB7XG4gIGdldCBjb250ZW50KCkgeyByZXR1cm4gY29udGVudDsgfSxcbiAgc2V0IGNvbnRlbnQodmFsdWUpIHsgdGhyb3cgVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHByb3BlcnR5IFxcJ2NvbnRlbnRcXCcsIGl0IGlzIHJlc2VydmVkIGFuZCB1bm1vZGlmaWFibGUnKTsgfVxufTtcblxuZnVuY3Rpb24gbG9hZChlbGVtZW50LCBuYW1lID0gJycpIHtcbiAgaWYgKG5hbWUpIGVsZW1lbnRzW25hbWVdID0gZWxlbWVudDtcbiAgY29udGVudC5hcHBlbmQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRGaXJzdChlbGVtZW50LCBuYW1lID0gJycpIHtcbiAgaWYgKG5hbWUpIGVsZW1lbnRzW25hbWVdID0gZWxlbWVudDtcbiAgY29udGVudC5wcmVwZW5kKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBsb2FkTXVsdGlwbGUoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gbG9hZChlbGVtZW50KSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRCZWZvcmUoZWxlbWVudCwgYmVmb3JlLCBuYW1lID0gJycpIHtcbiAgaWYgKG5hbWUpIGVsZW1lbnRzW25hbWVdID0gZWxlbWVudDtcblxuICBpZiAoYmVmb3JlID09PSAnY29udGVudCcpIHtcbiAgICBjb250ZW50LnByZXBlbmQoZWxlbWVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50c1tiZWZvcmVdKSB0aHJvdyBUeXBlRXJyb3IoYENhbm5vdCBsb2FkIGJlZm9yZSAnJHtiZWZvcmV9JyBzaW5jZSBpdCBkb2VzIG5vdCBleGlzdGApO1xuICBlbGVtZW50c1tiZWZvcmVdLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gbG9hZEFmdGVyKGVsZW1lbnQsIGFmdGVyLCBuYW1lID0gJycpIHtcbiAgaWYgKG5hbWUpIGVsZW1lbnRzW25hbWVdID0gZWxlbWVudDtcbiAgXG4gIGlmIChhZnRlciA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgY29udGVudC5hcHBlbmQoZWxlbWVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50c1thZnRlcl0pIHRocm93IFR5cGVFcnJvcihgQ2Fubm90IGxvYWQgYWZ0ZXIgJyR7YWZ0ZXJ9JyBzaW5jZSBpdCBkb2VzIG5vdCBleGlzdGApO1xuICBlbGVtZW50c1thZnRlcl0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBsb2FkTXVsdGlwbGVCZWZvcmUoZWxlbWVudHMsIGJlZm9yZSkge1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBsb2FkQmVmb3JlKGVsZW1lbnQsIGJlZm9yZSkpO1xufVxuXG5mdW5jdGlvbiBsb2FkTXVsdGlwbGVBZnRlcihlbGVtZW50cywgYWZ0ZXIpIHtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gbG9hZEFmdGVyKGVsZW1lbnQsIGFmdGVyKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZyb20oZnJvbU5hbWUsIHRvTmFtZSA9IG51bGwsIHsgaW5jbHVkZUZyb20sIGluY2x1ZGVUbyB9ID0geyBpbmNsdWRlRnJvbTogdHJ1ZSwgaW5jbHVkZVRvOiBmYWxzZSB9KSB7XG4gIGNvbnN0IGZpbmlzaCA9IGVsZW1lbnRzW2Zyb21OYW1lXSA/PyBjb250ZW50LmZpcnN0Q2hpbGQ7XG4gIGxldCBjdXJyZW50ID0gY29udGVudC5sYXN0Q2hpbGQ7XG5cbiAgaWYgKHRvTmFtZSkge1xuICAgIGN1cnJlbnQgPSBlbGVtZW50c1t0b05hbWVdO1xuICAgIGlmICghaW5jbHVkZVRvKSBjdXJyZW50ID0gY3VycmVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgd2hpbGUgKGN1cnJlbnQgIT09IGZpbmlzaCkge1xuICAgIGNvbnN0IHRvUmVtb3ZlID0gY3VycmVudDtcbiAgICBcbiAgICBPYmplY3QuZW50cmllcyhlbGVtZW50cykuZm9yRWFjaCgoW2tleSwgZWxlbWVudF0pID0+IHtcbiAgICAgIGlmIChlbGVtZW50ID09PSBjdXJyZW50KSB7XG4gICAgICAgIGRlbGV0ZSBlbGVtZW50c1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY3VycmVudCA9IGN1cnJlbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICB0b1JlbW92ZS5yZW1vdmUoKTtcbiAgfVxuXG4gIGlmIChpbmNsdWRlRnJvbSkgY3VycmVudC5yZW1vdmUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZSxcbiAgY3JlYXRlVGV4dCxcbiAgY3JlYXRlTGluayxcbiAgY3JlYXRlUGFyYWdyYXBoLFxufTtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dCh0ZXh0KSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGluayh0ZXh0LCB1cmwpIHtcbiAgcmV0dXJuIGNyZWF0ZSgnYScsIHtcbiAgICBocmVmOiB1cmwsXG4gICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICByZWw6ICdub29wZW5lciBub3JlZmVycmVyJyxcbiAgfSwgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaCh0ZXh0T3JOb2Rlcywgb3B0aW9uc09yQ2xhc3NOYW1lKSB7XG4gIGlmICh0eXBlb2YgdGV4dE9yTm9kZXMgPT09ICdzdHJpbmcnKSByZXR1cm4gY3JlYXRlKCdwJywgb3B0aW9uc09yQ2xhc3NOYW1lLCB0ZXh0T3JOb2Rlcyk7XG5cbiAgcmV0dXJuIGNyZWF0ZSgncCcsIG9wdGlvbnNPckNsYXNzTmFtZSwgW1xuICAgIC4uLnRleHRPck5vZGVzLm1hcCgobm9kZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBub2RlICE9PSAnc3RyaW5nJykgcmV0dXJuIG5vZGU7XG4gICAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdudW1iZXInKSByZXR1cm4gbm9kZTtcbiAgICAgIHJldHVybiBjcmVhdGVUZXh0KG5vZGUpO1xuICAgIH0pLFxuICBdKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKHRhZywgb3B0aW9uc09yQ2xhc3NOYW1lID0ge30sIGNoaWxkcmVuT3JUZXh0Q29udGVudCA9IFtdKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9uc09yQ2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IG9wdGlvbnNPckNsYXNzTmFtZTtcbiAgICBvcHRpb25zT3JDbGFzc05hbWUgPSB7fTtcblxuICAgIGlmIChjbGFzc05hbWUpIG9wdGlvbnNPckNsYXNzTmFtZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIH1cblxuICBpZiAodHlwZW9mIGNoaWxkcmVuT3JUZXh0Q29udGVudCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkcmVuT3JUZXh0Q29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICBvcHRpb25zT3JDbGFzc05hbWUudGV4dENvbnRlbnQgPSBjaGlsZHJlbk9yVGV4dENvbnRlbnQ7XG4gICAgY2hpbGRyZW5PclRleHRDb250ZW50ID0gW107XG4gIH1cblxuICByZXR1cm4gYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKSwgb3B0aW9uc09yQ2xhc3NOYW1lLCBjaGlsZHJlbk9yVGV4dENvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ24oZWxlbWVudCwgb3B0aW9ucywgY2hpbGRyZW4pIHtcbiAgT2JqZWN0LmFzc2lnbihlbGVtZW50LCBvcHRpb25zKTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH0pO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaW1hZ2UsIG5hbWUsIGVuZ2xpc2hOYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIHF1YW50aXR5KSB7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbmdsaXNoTmFtZSA9IGVuZ2xpc2hOYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihzcmMsIGFsdCwgd2lkdGgsIHRvcCwgbGVmdCkge1xuICAgIHRoaXMuc3JjID0gc3JjO1xuICAgIHRoaXMuYWx0ID0gYWx0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgZ2V0U3R5bGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSBcIi4vRWxlbWVudENyZWF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdmb290ZXInLCAnJywgXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdkaXYnLCAnY29udGVudC13cmFwJywgW1xuICAgICAgY3JlYXRlSW5mb3JtYXRpb24oKSxcbiAgICAgIGNyZWF0ZUNyZWRpdHMoKSxcbiAgICBdKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm9ybWF0aW9uKCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdkaXYnLCAnaW5mb3JtYXRpb24nLCBbXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlUGFyYWdyYXBoKFtcbiAgICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnc3BhbicsICduYW1lJywgJ1N1c2hpIFN1c2hpJyksXG4gICAgICAnLCBhIHJlc3RhdXJhbnQgcGFnZSBwcm9qZWN0IGZvciAnLFxuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlTGluaygnVGhlIE9kaW4gUHJvamVjdCcsICdodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vbGVzc29ucy9ub2RlLXBhdGgtamF2YXNjcmlwdC1yZXN0YXVyYW50LXBhZ2UnKSxcbiAgICAgICcuJyxcbiAgICBdKSxcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVQYXJhZ3JhcGgoW1xuICAgICAgJ01hZGUgYnkgJyxcbiAgICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZUxpbmsoJ1pla3Vtb3J1JywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9aZWt1bW9ydScpLFxuICAgIF0pLFxuICBdKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ3JlZGl0cygpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2NyZWRpdHMtY29udGFpbmVyJywgW1xuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnaDMnLCAnJywgJ0ltYWdlIENyZWRpdHMnKSxcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVQYXJhZ3JhcGgoW1xuICAgICAgJ0xvZ28gaWNvbiBieSAnLFxuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlTGluaygnc3VyYW5nJywgJ2h0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9hdXRob3JzL3N1cmFuZycpLFxuICAgIF0pLFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZVBhcmFncmFwaChbXG4gICAgICAnRmlyc3Qgc3VzaGkgaW1hZ2UgYnkgJyxcbiAgICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZUxpbmsoJ0RlcmVrIER1cmFuJywgJ2h0dHBzOi8vdW5zcGxhc2guY29tL0BkZXJla2R1cmFuJyksXG4gICAgXSksXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlUGFyYWdyYXBoKFtcbiAgICAgICdTZWNvbmQgc3VzaGkgaW1hZ2UgYnkgJyxcbiAgICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZUxpbmsoJ0ZhZHlhIEF6aGFyeScsICdodHRwczovL3Vuc3BsYXNoLmNvbS9AZmFkc3Bob3RvMjNfJyksXG4gICAgXSksXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlUGFyYWdyYXBoKFtcbiAgICAgICdUaGlyZCBzdXNoaSBpbWFnZSBieSAnLFxuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlTGluaygnQW5kcmF6IExhemljJywgJ2h0dHBzOi8vdW5zcGxhc2guY29tL0BhbmRyYXpsYXppYycpLFxuICAgIF0pLFxuICBdKTtcbn1cbiIsImltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tIFwiLi9FbGVtZW50Q3JlYXRvclwiO1xuaW1wb3J0IHN1c2hpIGZyb20gJy4uL2ltYWdlcy9zdXNoaS5qcGcnO1xuaW1wb3J0IHN1c2hpMiBmcm9tICcuLi9pbWFnZXMvc3VzaGktMi5qcGcnO1xuaW1wb3J0IHN1c2hpMyBmcm9tICcuLi9pbWFnZXMvc3VzaGktMy5qcGcnO1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gIHtcbiAgICBzcmM6IHN1c2hpLFxuICAgIGFsdDogJzggcGllY2VzIHN1c2hpIHdpdGggc2FsbW9uIG9uIHRvcCcsXG4gIH0sXG4gIHtcbiAgICBzcmM6IHN1c2hpMixcbiAgICBhbHQ6ICdib2FyZCBvZiBtaXhlZCBzdXNoaScsXG4gIH0sXG4gIHtcbiAgICBzcmM6IHN1c2hpMyxcbiAgICBhbHQ6ICdzdXNoaSwgY2hvcHN0aWNrcywgYW5kIGEgY3VwIG9mIHNveSBzYXVjZScsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXG4gICAgY3JlYXRlU2VjdGlvbignaG9tZS1zZWN0aW9uIGhvbWUtc2VjdGlvbi0xJywgaW1hZ2VzWzBdLCBjcmVhdGVDb250ZW50KCdPbmx5IFRoZSBCZXN0JywgW1xuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlUGFyYWdyYXBoKCdBbGwgaW5ncmVkaWVudHMgYXJlIGNhcmVmdWxseSBoYW5kcGlja2VkIHRvIGdpdmUgeW91IHRoZSBiZXN0IG9mIHRhc3Rlcy4nKSxcbiAgICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZVBhcmFncmFwaCgnRWFjaCBzdXNoaSB3aXRoIGEgc3Rvcnkgb2YgaXRzIG93biBmbGF2b3VyIHRvIHRlbGwuJyksXG4gICAgXSkpLFxuICAgIGNyZWF0ZVNlY3Rpb24oJ2hvbWUtc2VjdGlvbiBob21lLXNlY3Rpb24tMicsIGltYWdlc1sxXSwgY3JlYXRlQ29udGVudCgnSG91cnMnLCBjcmVhdGVIb3Vyc1RhYmxlKCkpKSxcbiAgICBjcmVhdGVTZWN0aW9uKCdob21lLXNlY3Rpb24gaG9tZS1zZWN0aW9uLTMnLCBpbWFnZXNbMl0sIGNyZWF0ZUNvbnRlbnQoJ0xvY2F0aW9uJywgW1xuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlUGFyYWdyYXBoKCcxMjMgU3VzaGkgU3RyZWV0LCBUb2t5bywgSmFwYW4nKSxcbiAgICBdKSksXG4gIF07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTZWN0aW9uKGNsYXNzTmFtZSwgaW1hZ2VPcHRpb25zLCBjb250ZW50KSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3NlY3Rpb24nLCBjbGFzc05hbWUsIFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2NvbnRlbnQtd3JhcCcsIFtcbiAgICAgIGNyZWF0ZUltYWdlQ29udGFpbmVyKGltYWdlT3B0aW9ucyksXG4gICAgICBjb250ZW50LFxuICAgIF0pKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VDb250YWluZXIoaW1hZ2VPcHRpb25zKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2RpdicsICdpbWFnZS1jb250YWluZXInLCBcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2ltZycsIGltYWdlT3B0aW9ucykpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KGhlYWRpbmcsIGNoaWxkcmVuID0gW10pIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkgY2hpbGRyZW4gPSBbIGNoaWxkcmVuIF07XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2RpdicsICdjb250ZW50JywgW1xuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnaDInLCAnJywgaGVhZGluZyksXG4gICAgLi4uY2hpbGRyZW4sXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3Vyc1RhYmxlKCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCd0YWJsZScsICdob3Vycy10YWJsZScsXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCd0Ym9keScsICcnLCBbXG4gICAgICBjcmVhdGVIb3Vyc1RhYmxlUm93KCdNb25kYXkgdG8gRnJpZGF5JywgJzExOjAwIEEuTS4gLSAzOjAwIFAuTS4nLCAnNTowMCBQLk0uIC0gMTA6MDAgUC5NLicpLFxuICAgICAgY3JlYXRlSG91cnNUYWJsZVJvdygnU2F0dXJkYXknLCAnMTE6MDAgQS5NLiAtIDM6MDAgUC5NLicsICc1OjAwIFAuTS4gLSAxMjowMCBBLk0uJyksXG4gICAgICBjcmVhdGVIb3Vyc1RhYmxlUm93KCdTdW5kYXknLCAnMTE6MDAgQS5NLiAtIDM6MDAgUC5NLicsICcnKSxcbiAgICBdKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzVGFibGVSb3coZGF5cywgYWZ0ZXJub29uLCBldmVuaW5nKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3RyJywgJycsIFtcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3RoJywgeyBzY29wZTogJ3JvdycgfSwgZGF5cyksXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCd0ZCcsICcnLCBhZnRlcm5vb24pLFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgndGQnLCAnJywgZXZlbmluZyksXG4gIF0pO1xufSIsImltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tIFwiLi9FbGVtZW50Q3JlYXRvclwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdFwiO1xuaW1wb3J0IFByb2R1Y3RJbWFnZSBmcm9tIFwiLi9Qcm9kdWN0SW1hZ2VcIjtcbmltcG9ydCBuaWdpcmlTYWtlIGZyb20gJy4uL2ltYWdlcy9uaWdpcmktc2FrZS5qcGcnO1xuaW1wb3J0IG5pZ2lyaU1hZ3VybyBmcm9tICcuLi9pbWFnZXMvbmlnaXJpLW1hZ3Vyby5qcGcnO1xuaW1wb3J0IG5pZ2lyaVN1enVraSBmcm9tICcuLi9pbWFnZXMvbmlnaXJpLXN1enVraS5qcGcnO1xuaW1wb3J0IHVyYW1ha2lTYWtlIGZyb20gJy4uL2ltYWdlcy91cmFtYWtpLXNha2UuanBnJztcbmltcG9ydCB1cmFtYWtpRWJpIGZyb20gJy4uL2ltYWdlcy91cmFtYWtpLWViaS5qcGcnO1xuaW1wb3J0IHVyYW1ha2lSb2J1c3V0YSBmcm9tICcuLi9pbWFnZXMvdXJhbWFraS1yb2J1c3V0YS5qcGcnO1xuaW1wb3J0IGhvc29tYWtpU2FrZSBmcm9tICcuLi9pbWFnZXMvaG9zb21ha2ktc2FrZS5qcGcnO1xuaW1wb3J0IGhvc29tYWtpTWFndXJvIGZyb20gJy4uL2ltYWdlcy9ob3NvbWFraS1tYWd1cm8uanBnJztcbmltcG9ydCBob3NvbWFraUViaSBmcm9tICcuLi9pbWFnZXMvaG9zb21ha2ktZWJpLmpwZyc7XG5cbmNvbnN0IGltYWdlcyA9IHtcbiAgbmlnaXJpOiB7XG4gICAgc2FrZTogbmV3IFByb2R1Y3RJbWFnZShuaWdpcmlTYWtlLCAnMiBwaWVjZXMgb2YgbmlnaXJpIHNha2UnLCAnMjQwJScsICctNThweCcsICctMjAwcHgnKSxcbiAgICBtYWd1cm86IG5ldyBQcm9kdWN0SW1hZ2UobmlnaXJpTWFndXJvLCAnNCBwaWVjZXMgb2YgbmlnaXJpIG1hZ3VybycsICcxODAlJywgJy0xOHB4JywgJy01OHB4JyksXG4gICAgc3V6dWtpOiBuZXcgUHJvZHVjdEltYWdlKG5pZ2lyaVN1enVraSwgJzQgcGllY2VzIG9mIG5pZ2lyaSBzdXp1a2knLCAnMjAwJScsICctMTZweCcsICctOTRweCcpLFxuICB9LFxuICB1cmFtYWtpOiB7XG4gICAgc2FrZTogbmV3IFByb2R1Y3RJbWFnZSh1cmFtYWtpU2FrZSwgJzggcGllY2VzIG9mIHVyYW1ha2kgc2FrZScsICcyMDAlJywgJy0yMHB4JywgJy03NXB4JyksXG4gICAgZWJpOiBuZXcgUHJvZHVjdEltYWdlKHVyYW1ha2lFYmksICc4IHBpZWNlcyBvZiB1cmFtYWtpIGViaScsICcyMDAlJywgJy0yMXB4JywgJy00N3B4JyksXG4gICAgcm9idXN1dGE6IG5ldyBQcm9kdWN0SW1hZ2UodXJhbWFraVJvYnVzdXRhLCAnOCBwaWVjZXMgb2YgdXJhbWFraSByb2J1c3V0YScsICcxNzAlJywgJy00cHgnLCAnLTcwcHgnKSxcbiAgfSxcbiAgaG9zb21ha2k6IHtcbiAgICBzYWtlOiBuZXcgUHJvZHVjdEltYWdlKGhvc29tYWtpU2FrZSwgJzggcGllY2VzIG9mIGhvc29tYWtpIHNha2UnLCAnMjQwJScsICctMjdweCcsICctNzRweCcpLFxuICAgIG1hZ3VybzogbmV3IFByb2R1Y3RJbWFnZShob3NvbWFraU1hZ3VybywgJzggcGllY2VzIG9mIGhvc29tYWtpIG1hZ3VybycsICcyMjAlJywgJy00NnB4JywgJy0xMTBweCcpLFxuICAgIGViaTogbmV3IFByb2R1Y3RJbWFnZShob3NvbWFraUViaSwgJzggcGllY2VzIG9mIGhvc29tYWtpIGViaScsICcxOTAlJywgJy0yOXB4JywgJy0xMzZweCcpLFxuICB9LFxufVxuXG5jb25zdCBwcm9kdWN0cyA9IHtcbiAgbmlnaXJpOiBbXG4gICAgbmV3IFByb2R1Y3QoaW1hZ2VzLm5pZ2lyaS5zYWtlLCAnU2FrZScsICdTYWxtb24nLCAnQSBsb25nIHdoaXRlIG92YWwtc2hhcGVkIHN1c2hpIHdpdGggYSBjdXQgb2YgZnJlc2ggc2FsbW9uIG9uIHRvcC4nLCAxMTk5Ljk5LCA4KSxcbiAgICBuZXcgUHJvZHVjdChpbWFnZXMubmlnaXJpLm1hZ3VybywgJ01hZ3VybycsICdUdW5hJywgJ0EgbG9uZyB3aGl0ZSBvdmFsLXNoYXBlZCBzdXNoaSB3aXRoIHNsaWNlcyBvZiB0dW5hIG9uIHRvcC4nLCAxMTk5Ljk5LCA4KSxcbiAgICBuZXcgUHJvZHVjdChpbWFnZXMubmlnaXJpLnN1enVraSwgJ1N1enVraScsICdKYXBhbmVzZSBzZWEgYmFzcycsICdBIGxvbmcgd2hpdGUgb3ZhbC1zaGFwZWQgc3VzaGkgd2l0aCBzbGljZXMgb2YgSmFwYW5lc2Ugc2VhIGJhc3Mgb24gdG9wLicsIDExOTkuOTksIDgpLCAgXG4gIF0sXG4gIHVyYW1ha2k6IFtcbiAgICBuZXcgUHJvZHVjdChpbWFnZXMudXJhbWFraS5zYWtlLCAnU2FrZScsICdTYWxtb24nLCAnQSBjeWxpbmRyaWNhbCBub3JpLWhpZGRlbiBzdXNoaSB3aXRoIGNydXNoZWQgZnJlc2ggc2FsbW9uIG9uIHRvcC4nLCAxMzk5Ljk5LCA4KSxcbiAgICBuZXcgUHJvZHVjdChpbWFnZXMudXJhbWFraS5lYmksICdFYmknLCAnU2hyaW1wJywgJ0EgY3lsaW5kcmljYWwgbm9yaS1oaWRkZW4gc3VzaGkgd2l0aCBhIGNvb2tlZCBjdXQgb2Ygc2hyaW1wIG9uIHRvcC4nLCAxMzk5Ljk5LCA4KSxcbiAgICBuZXcgUHJvZHVjdChpbWFnZXMudXJhbWFraS5yb2J1c3V0YSwgJ1JvYnVzdXRhJywgJ0xvYnN0ZXInLCAnQSBjeWxpbmRyaWNhbCBub3JpLWhpZGRlbiBzdXNoaSB3aXRoIGNydXNoZWQgZmxlc2ggb2YgbG9ic3RlciBvbiB0b3AuJywgMTc5OS45OSwgOCksXG4gIF0sXG4gIGhvc29tYWtpOiBbXG4gICAgbmV3IFByb2R1Y3QoaW1hZ2VzLmhvc29tYWtpLnNha2UsICdTYWtlJywgJ1NhbG1vbicsICdBIGN5bGluZHJpY2FsIHN1c2hpIHdpdGggZnJlc2ggc2FsbW9uIGluc2lkZS4nLCAxMDk5Ljk5LCA4KSxcbiAgICBuZXcgUHJvZHVjdChpbWFnZXMuaG9zb21ha2kubWFndXJvLCAnTWFndXJvJywgJ1R1bmEnLCAnQSBjeWxpbmRyaWNhbCBzdXNoaSB3aXRoIHR1bmEgaW5zaWRlLicsIDEwOTkuOTksIDgpLFxuICAgIG5ldyBQcm9kdWN0KGltYWdlcy5ob3NvbWFraS5lYmksICdFYmknLCAnU2hyaW1wJywgJ0EgY3lsaW5kcmljYWwgc3VzaGkgd2l0aCBzaHJpbXAgaW5zaWRlLicsIDExOTkuOTksIDgpLFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW1xuICAgIGNyZWF0ZVNlY3Rpb24oJ05pZ2lyaXp1c2hpJywgJ0hhbmQtcHJlc3NlZCBzdXNoaScsIGNyZWF0ZVByb2R1Y3RzKHByb2R1Y3RzLm5pZ2lyaSkpLFxuICAgIGNyZWF0ZVNlY3Rpb24oJ1VyYW1ha2knLCAnSW5zaWRlLW91dCByb2xsJywgY3JlYXRlUHJvZHVjdHMocHJvZHVjdHMudXJhbWFraSkpLFxuICAgIGNyZWF0ZVNlY3Rpb24oJ0hvc29tYWtpJywgJ1RoaW4gcm9sbCcsIGNyZWF0ZVByb2R1Y3RzKHByb2R1Y3RzLmhvc29tYWtpKSksXG4gIF07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTZWN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvZHVjdHMgPSBbXSkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdzZWN0aW9uJywgJ21lbnUtc2VjdGlvbicsIFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2NvbnRlbnQtd3JhcCBmbGV4LXZlcnRpY2FsLWNlbnRlcicsIFtcbiAgICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnaDInLCAnJywgdGl0bGUpLFxuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdwJywgJycsIGRlc2NyaXB0aW9uKSxcbiAgICAgIC4uLnByb2R1Y3RzLFxuICAgIF0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RzKHByb2R1Y3RzKSB7XG4gIHJldHVybiBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdkaXYnLCAncHJvZHVjdCcsIFtcbiAgICAgIGNyZWF0ZUltYWdlQ29udGFpbmVyKHByb2R1Y3QuaW1hZ2UpLFxuICAgICAgY3JlYXRlQ29udGVudChwcm9kdWN0KSxcbiAgICBdKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUltYWdlQ29udGFpbmVyKGltYWdlKSB7XG4gIGNvbnN0IGltYWdlRWxlbWVudCA9IEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnaW1nJywge1xuICAgIHNyYzogaW1hZ2Uuc3JjLFxuICAgIGFsdDogaW1hZ2UuYWx0LFxuICB9KTtcbiAgT2JqZWN0LmFzc2lnbihpbWFnZUVsZW1lbnQuc3R5bGUsIGltYWdlLmdldFN0eWxlT2JqZWN0KCkpO1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdkaXYnLCAnaW1hZ2UtY29udGFpbmVyJywgaW1hZ2VFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudChwcm9kdWN0KSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2RpdicsICdjb250ZW50JywgW1xuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnaDMnLCAncHJvZHVjdC1uYW1lJywgcHJvZHVjdC5uYW1lKSxcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3AnLCAnZW5nbGlzaC1uYW1lJywgcHJvZHVjdC5lbmdsaXNoTmFtZSksXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdwJywgJ2Rlc2NyaXB0aW9uJywgcHJvZHVjdC5kZXNjcmlwdGlvbiksXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlUGFyYWdyYXBoKFtcbiAgICAgIGDCpSAke3Byb2R1Y3QucHJpY2V9IGAsXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3NwYW4nLCAncXVhbnRpdHknLCBgKCR7cHJvZHVjdC5xdWFudGl0eX0gcGllY2VzKWApXG4gICAgXSwgJ3ByaWNlJyksXG4gIF0pO1xufSIsImltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tIFwiLi9FbGVtZW50Q3JlYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2hlYWRlcicsICdwcmltYXJ5LWhlYWRlcicsIGNyZWF0ZUNvbnRlbnQoKSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdkaXYnLCAnY29udGVudC13cmFwIGZsZXgtaG9yaXpvbnRhbC1jZW50ZXInLCBbXG4gICAgY3JlYXRlTG9nbygpLFxuICAgIGNyZWF0ZVRpdGxlKCksXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2dvKCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdkaXYnLCAnbG9nbycpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZSgpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgncCcsICd0aXRsZScsICdTdXNoaSBTdXNoaScpO1xufSIsImltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tIFwiLi9FbGVtZW50Q3JlYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY3VycmVudFRhYiwgYnV0dG9uT25DbGlja0xpc3RlbmVycykge1xuICBjb25zdCBwcmltYXJ5TmF2ID0gRWxlbWVudENyZWF0b3IuY3JlYXRlKCduYXYnLCAncHJpbWFyeS1uYXYnLCBjcmVhdGVDb250ZW50KCkpO1xuICBwcmltYXJ5TmF2LnF1ZXJ5U2VsZWN0b3IoYC4ke2N1cnJlbnRUYWJ9YCkuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXG4gIE9iamVjdC5lbnRyaWVzKGJ1dHRvbk9uQ2xpY2tMaXN0ZW5lcnMpLmZvckVhY2goKFtidXR0b24sIGxpc3RlbmVyXSkgPT4ge1xuICAgIHByaW1hcnlOYXYucXVlcnlTZWxlY3RvcihgLiR7YnV0dG9ufWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHByaW1hcnlOYXYucXVlcnlTZWxlY3RvcignYnV0dG9uLmN1cnJlbnQnKS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICBsaXN0ZW5lcihlKTtcbiAgICB9KTtcbiAgfSk7XG4gIFxuICByZXR1cm4gcHJpbWFyeU5hdjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3VsJywgJ2NvbnRlbnQtd3JhcCcsIFtcbiAgICBjcmVhdGVOYXZJdGVtKGNyZWF0ZU5hdkl0ZW1CdXR0b24oJ2hvbWUnLCAnSG9tZScpKSxcbiAgICBjcmVhdGVOYXZJdGVtKGNyZWF0ZU5hdkl0ZW1CdXR0b24oJ21lbnUnLCAnTWVudScpKSxcbiAgICBjcmVhdGVOYXZJdGVtKGNyZWF0ZU5hdkl0ZW1CdXR0b24oJ2NvbnRhY3QnLCAnQ29udGFjdCcpKSxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkl0ZW0oYnV0dG9uKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2xpJywgJycsIGJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkl0ZW1CdXR0b24oY2xhc3NOYW1lLCB0ZXh0Q29udGVudCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdidXR0b24nLCBjbGFzc05hbWUsIHRleHRDb250ZW50KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1bmRsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgQ29udGVudExvYWRlciBmcm9tICcuL3NjcmlwdHMvQ29udGVudExvYWRlcic7XG5pbXBvcnQgbG9hZFByaW1hcnlIZWFkZXIgZnJvbSAnLi9zY3JpcHRzL2xvYWRQcmltYXJ5SGVhZGVyJztcbmltcG9ydCBsb2FkUHJpbWFyeU5hdiBmcm9tICcuL3NjcmlwdHMvbG9hZFByaW1hcnlOYXYnO1xuaW1wb3J0IGxvYWRGb290ZXIgZnJvbSAnLi9zY3JpcHRzL2xvYWRGb290ZXInO1xuaW1wb3J0IGxvYWRIb21lQ29udGVudHMgZnJvbSAnLi9zY3JpcHRzL2xvYWRIb21lQ29udGVudHMnO1xuaW1wb3J0IGxvYWRNZW51Q29udGVudHMgZnJvbSAnLi9zY3JpcHRzL2xvYWRNZW51Q29udGVudHMnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5Db250ZW50TG9hZGVyLmxvYWRGaXJzdChsb2FkUHJpbWFyeUhlYWRlcigpLCAncHJpbWFyeS1oZWFkZXInKTtcbkNvbnRlbnRMb2FkZXIubG9hZChsb2FkRm9vdGVyKCksICdmb290ZXInKTtcblxuQ29udGVudExvYWRlci5sb2FkQWZ0ZXIobG9hZFByaW1hcnlOYXYoJ2hvbWUnLCB7XG4gIGhvbWU6ICgpID0+IHtcbiAgICBDb250ZW50TG9hZGVyLnJlbW92ZUZyb20oJ3ByaW1hcnktbmF2JywgJ2Zvb3RlcicsIHsgaW5jbHVkZUZyb206IGZhbHNlIH0pO1xuICAgIENvbnRlbnRMb2FkZXIubG9hZE11bHRpcGxlQWZ0ZXIobG9hZEhvbWVDb250ZW50cygpLnJldmVyc2UoKSwgJ3ByaW1hcnktbmF2Jyk7XG4gIH0sXG4gIG1lbnU6ICgpID0+IHtcbiAgICBDb250ZW50TG9hZGVyLnJlbW92ZUZyb20oJ3ByaW1hcnktbmF2JywgJ2Zvb3RlcicsIHsgaW5jbHVkZUZyb206IGZhbHNlIH0pO1xuICAgIENvbnRlbnRMb2FkZXIubG9hZE11bHRpcGxlQWZ0ZXIobG9hZE1lbnVDb250ZW50cygpLnJldmVyc2UoKSwgJ3ByaW1hcnktbmF2Jyk7XG4gIH0sXG4gIGNvbnRhY3Q6ICgpID0+IHtcbiAgICBDb250ZW50TG9hZGVyLnJlbW92ZUZyb20oJ3ByaW1hcnktbmF2JywgJ2Zvb3RlcicsIHsgaW5jbHVkZUZyb206IGZhbHNlIH0pO1xuICB9LFxufSksICdwcmltYXJ5LWhlYWRlcicsICdwcmltYXJ5LW5hdicpO1xuXG5Db250ZW50TG9hZGVyLmxvYWRNdWx0aXBsZUFmdGVyKGxvYWRIb21lQ29udGVudHMoKS5yZXZlcnNlKCksICdwcmltYXJ5LW5hdicpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9