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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --default-bg-color: #18191a;\n  --default-text-color: #e6e6e6;\n  --default-text-link-color: white;\n  --default-text-secondary-color: #b2b2b2;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\na,\nhtml {\n  color: var(--default-text-color);\n}\n\na {\n  text-decoration: none;\n}\n\nhtml {\n  background-color: var(--default-bg-color);\n}\n\nhtml,\nbody,\nbody > .content {\n  min-height: 100vh;\n}\n\nbody > .content {\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  margin-top: auto;\n}\n\n.flex-horizontal-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-vertical-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.content-wrap {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 40px;\n}\n\n.image-container {\n  overflow: hidden;\n  position: relative;\n}\n\nsection img {\n  position: absolute;\n}\n\n/* PRIMARY HEADER & NAV */\n\n.logo {\n  --length: 30px;\n  width: var(--length);\n  height: var(--length);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100%;\n}\n\n.primary-header {\n  padding: 24px 0 16px;\n}\n\n.primary-header > .content-wrap {\n  gap: 8px;\n}\n\n.primary-nav {\n  width: 100%;\n  padding: 18px 0 16px;\n  top: -2px; /* Fixes extra gap top */\n  position: sticky;\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 100;\n}\n\n.primary-nav > .content-wrap {\n  width: min(100%, 460px);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  gap: 12px;\n}\n\n.primary-nav button {\n  color: var(--default-text-color);\n  background-color: transparent;\n  text-transform: uppercase;\n  cursor: pointer;\n  border: none;\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.primary-nav button:hover {\n  text-decoration: underline;\n}\n\n.primary-nav button.current {\n  text-decoration: none;\n  color: var(--default-text-link-color);\n  cursor: default;\n}\n\n/* MAIN CONTENT */\n\n.default-section-style:first-of-type {\n  height: 600px;\n}\n\n.default-section-style {\n  height: 800px;\n}\n\n.default-section-style > .content-wrap {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  place-items: center;\n  height: 100%;\n  padding: 40px;\n}\n\n.default-section-style .content,\n.image-container {\n  grid-row: 1 / -1;\n}\n\n.default-section-style .content {\n  z-index: 10;\n  padding: 24px 36px;\n  background-color: var(--default-bg-color);\n}\n\n.home-section-1 .image-container {\n  width: 640px;\n  height: 420px;\n  grid-column: 1 / 4;\n  border-radius: 160px 60px;\n}\n\n.home-section-1 img {\n  width: 100%;\n  bottom: -200px;\n}\n\n.home-section-1 .content {\n  grid-column: 3 / -1;\n  border-radius: 20px 40px;\n  padding-bottom: 32px;\n}\n\n.home-section-2 .image-container {\n  width: 420px;\n  height: 620px;\n  grid-column: 3 / -1;\n  border-radius: 60px 120px;\n}\n\n.home-section-2 img {\n  height: 100%;\n  left: -28px;\n}\n\n.home-section-2 .content {\n  grid-column: 1 / 4;\n  border-radius: 30px 40px 80px;\n  transform: translateX(30px);\n  padding-bottom: 40px;\n}\n\n.home-section-2 h2 {\n  padding-left: 6px;\n}\n\n.hours-table {\n  text-align: left;\n}\n\n.hours-table th,\n.hours-table td {\n  padding: 4px 24px 4px 4px;\n}\n\n.hours-table th:last-child,\n.hours-table td:last-child {\n  padding: 4px;\n}\n\n.hours-table th[scope=\"row\"] {\n  font-weight: 500;\n}\n\n.home-section-3 .image-container {\n  width: 640px;\n  height: 580px;\n  grid-column: 1 / 5;\n  border-radius: 200px 100px;\n  justify-self: start;\n  margin-left: 60px;\n}\n\n.home-section-3 img {\n  height: 100%;\n  left: -52px;\n}\n\n.home-section-3 .content {\n  grid-column: 3 / -1;\n  width: 300px;\n  border-radius: 30px 48px;\n  justify-self: start;\n  align-self: end;\n  margin-left: 120px;\n  margin-bottom: 176px;\n  padding: 24px 36px 30px;\n}\n\n/* FOOTER */\n\nfooter {\n  padding-bottom: 80px;\n}\n\nfooter > .content-wrap {\n  display: flex;\n  padding: 0 60px;\n  justify-content: space-between;\n}\n\nfooter .credits-container {\n  text-align: right;\n}\n\nfooter h3 {\n  padding-bottom: 8px;\n}\n\nfooter p {\n  padding-bottom: 4px;\n}\n\nfooter a,\nfooter .name {\n  color: var(--default-text-link-color);\n}\n\nfooter a:hover {\n  text-decoration: underline;\n}\n\n/* MENU */\n\n.menu-section {\n  padding: 40px 0 80px;\n}\n\n.menu-section + .menu-section {\n  padding-top: 0;\n}\n\n.menu-section h2 {\n  font-size: 2.2rem;\n}\n\n.menu-section h2 + p {\n  font-size: 1.1rem;\n  letter-spacing: 0.2rem;\n}\n\n.product {\n  width: 100%;\n  height: 360px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 80px;\n  align-items: center;\n}\n\n.menu-section:nth-of-type(even) .product:nth-of-type(odd),\n.menu-section:nth-of-type(odd) .product:nth-of-type(even) {\n  grid-template-columns: 1fr auto;\n}\n\n.product .image-container {\n  width: 260px;\n  height: 260px;\n  border-radius: 80px 40px;\n}\n\n.menu-section:nth-of-type(even) .product:nth-of-type(odd) .image-container,\n.menu-section:nth-of-type(odd) .product:nth-of-type(even) .image-container {\n  border-radius: 40px 80px; \n}\n\n.product .content {\n  grid-row: 1 / -1;\n  padding-right: 80px;\n}\n\n.menu-section:nth-of-type(even) .product:nth-of-type(odd) .content,\n.menu-section:nth-of-type(odd) .product:nth-of-type(even) .content {\n  grid-column: 1;\n  padding: 0 0 0 80px;\n}\n\n.product .product-name {\n  font-size: 1.8rem;\n}\n\n.product .english-name {\n  color: var(--default-text-secondary-color);\n}\n\n.product .description {\n  margin: 8px 0 16px;\n}\n\n.product .price {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.product .quantity {\n  font-size: 0.9rem;\n  font-weight: normal;\n  color: var(--default-text-secondary-color);\n}\n\n/* CONTACT */\n\n.contact-section-1 .image-container {\n  width: 800px;\n  height: 420px;\n  grid-column: 1 / 4;\n  border-radius: 160px 60px;\n  margin-left: 80px;\n}\n\n.contact-section-1 img {\n  width: 100%;\n  top: -8px;\n}\n\n.contact-section-1 .content {\n  width: 600px;\n  align-self: end;\n  grid-column: 2 / -1;\n  border-radius: 40px 20px;\n  padding-bottom: 32px;\n}\n\n.contact-section-2 {\n  height: 600px;\n  margin-bottom: 120px;\n}\n\n.contact-section-2 .image-container {\n  width: 800px;\n  height: 420px;\n  grid-column: 2 / -1;\n  border-radius: 60px 160px;\n  margin-right: 80px;\n}\n\n.contact-section-2 img {\n  width: 100%;\n  top: -76px;\n}\n\n.contact-section-2 .content {\n  width: 600px;\n  align-self: end;\n  grid-column: 1 / 4;\n  border-radius: 20px 40px;\n  padding-bottom: 32px;\n  text-align: right;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --default-bg-color: #18191a;\n  --default-text-color: #e6e6e6;\n  --default-text-link-color: white;\n  --default-text-secondary-color: #b2b2b2;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\na,\nhtml {\n  color: var(--default-text-color);\n}\n\na {\n  text-decoration: none;\n}\n\nhtml {\n  background-color: var(--default-bg-color);\n}\n\nhtml,\nbody,\nbody > .content {\n  min-height: 100vh;\n}\n\nbody > .content {\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  margin-top: auto;\n}\n\n.flex-horizontal-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-vertical-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.content-wrap {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 40px;\n}\n\n.image-container {\n  overflow: hidden;\n  position: relative;\n}\n\nsection img {\n  position: absolute;\n}\n\n/* PRIMARY HEADER & NAV */\n\n.logo {\n  --length: 30px;\n  width: var(--length);\n  height: var(--length);\n  background-image: url(./images/logo.png);\n  background-size: 100%;\n}\n\n.primary-header {\n  padding: 24px 0 16px;\n}\n\n.primary-header > .content-wrap {\n  gap: 8px;\n}\n\n.primary-nav {\n  width: 100%;\n  padding: 18px 0 16px;\n  top: -2px; /* Fixes extra gap top */\n  position: sticky;\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 100;\n}\n\n.primary-nav > .content-wrap {\n  width: min(100%, 460px);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  gap: 12px;\n}\n\n.primary-nav button {\n  color: var(--default-text-color);\n  background-color: transparent;\n  text-transform: uppercase;\n  cursor: pointer;\n  border: none;\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.primary-nav button:hover {\n  text-decoration: underline;\n}\n\n.primary-nav button.current {\n  text-decoration: none;\n  color: var(--default-text-link-color);\n  cursor: default;\n}\n\n/* MAIN CONTENT */\n\n.default-section-style:first-of-type {\n  height: 600px;\n}\n\n.default-section-style {\n  height: 800px;\n}\n\n.default-section-style > .content-wrap {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  place-items: center;\n  height: 100%;\n  padding: 40px;\n}\n\n.default-section-style .content,\n.image-container {\n  grid-row: 1 / -1;\n}\n\n.default-section-style .content {\n  z-index: 10;\n  padding: 24px 36px;\n  background-color: var(--default-bg-color);\n}\n\n.home-section-1 .image-container {\n  width: 640px;\n  height: 420px;\n  grid-column: 1 / 4;\n  border-radius: 160px 60px;\n}\n\n.home-section-1 img {\n  width: 100%;\n  bottom: -200px;\n}\n\n.home-section-1 .content {\n  grid-column: 3 / -1;\n  border-radius: 20px 40px;\n  padding-bottom: 32px;\n}\n\n.home-section-2 .image-container {\n  width: 420px;\n  height: 620px;\n  grid-column: 3 / -1;\n  border-radius: 60px 120px;\n}\n\n.home-section-2 img {\n  height: 100%;\n  left: -28px;\n}\n\n.home-section-2 .content {\n  grid-column: 1 / 4;\n  border-radius: 30px 40px 80px;\n  transform: translateX(30px);\n  padding-bottom: 40px;\n}\n\n.home-section-2 h2 {\n  padding-left: 6px;\n}\n\n.hours-table {\n  text-align: left;\n}\n\n.hours-table th,\n.hours-table td {\n  padding: 4px 24px 4px 4px;\n}\n\n.hours-table th:last-child,\n.hours-table td:last-child {\n  padding: 4px;\n}\n\n.hours-table th[scope=\"row\"] {\n  font-weight: 500;\n}\n\n.home-section-3 .image-container {\n  width: 640px;\n  height: 580px;\n  grid-column: 1 / 5;\n  border-radius: 200px 100px;\n  justify-self: start;\n  margin-left: 60px;\n}\n\n.home-section-3 img {\n  height: 100%;\n  left: -52px;\n}\n\n.home-section-3 .content {\n  grid-column: 3 / -1;\n  width: 300px;\n  border-radius: 30px 48px;\n  justify-self: start;\n  align-self: end;\n  margin-left: 120px;\n  margin-bottom: 176px;\n  padding: 24px 36px 30px;\n}\n\n/* FOOTER */\n\nfooter {\n  padding-bottom: 80px;\n}\n\nfooter > .content-wrap {\n  display: flex;\n  padding: 0 60px;\n  justify-content: space-between;\n}\n\nfooter .credits-container {\n  text-align: right;\n}\n\nfooter h3 {\n  padding-bottom: 8px;\n}\n\nfooter p {\n  padding-bottom: 4px;\n}\n\nfooter a,\nfooter .name {\n  color: var(--default-text-link-color);\n}\n\nfooter a:hover {\n  text-decoration: underline;\n}\n\n/* MENU */\n\n.menu-section {\n  padding: 40px 0 80px;\n}\n\n.menu-section + .menu-section {\n  padding-top: 0;\n}\n\n.menu-section h2 {\n  font-size: 2.2rem;\n}\n\n.menu-section h2 + p {\n  font-size: 1.1rem;\n  letter-spacing: 0.2rem;\n}\n\n.product {\n  width: 100%;\n  height: 360px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 80px;\n  align-items: center;\n}\n\n.menu-section:nth-of-type(even) .product:nth-of-type(odd),\n.menu-section:nth-of-type(odd) .product:nth-of-type(even) {\n  grid-template-columns: 1fr auto;\n}\n\n.product .image-container {\n  width: 260px;\n  height: 260px;\n  border-radius: 80px 40px;\n}\n\n.menu-section:nth-of-type(even) .product:nth-of-type(odd) .image-container,\n.menu-section:nth-of-type(odd) .product:nth-of-type(even) .image-container {\n  border-radius: 40px 80px; \n}\n\n.product .content {\n  grid-row: 1 / -1;\n  padding-right: 80px;\n}\n\n.menu-section:nth-of-type(even) .product:nth-of-type(odd) .content,\n.menu-section:nth-of-type(odd) .product:nth-of-type(even) .content {\n  grid-column: 1;\n  padding: 0 0 0 80px;\n}\n\n.product .product-name {\n  font-size: 1.8rem;\n}\n\n.product .english-name {\n  color: var(--default-text-secondary-color);\n}\n\n.product .description {\n  margin: 8px 0 16px;\n}\n\n.product .price {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.product .quantity {\n  font-size: 0.9rem;\n  font-weight: normal;\n  color: var(--default-text-secondary-color);\n}\n\n/* CONTACT */\n\n.contact-section-1 .image-container {\n  width: 800px;\n  height: 420px;\n  grid-column: 1 / 4;\n  border-radius: 160px 60px;\n  margin-left: 80px;\n}\n\n.contact-section-1 img {\n  width: 100%;\n  top: -8px;\n}\n\n.contact-section-1 .content {\n  width: 600px;\n  align-self: end;\n  grid-column: 2 / -1;\n  border-radius: 40px 20px;\n  padding-bottom: 32px;\n}\n\n.contact-section-2 {\n  height: 600px;\n  margin-bottom: 120px;\n}\n\n.contact-section-2 .image-container {\n  width: 800px;\n  height: 420px;\n  grid-column: 2 / -1;\n  border-radius: 60px 160px;\n  margin-right: 80px;\n}\n\n.contact-section-2 img {\n  width: 100%;\n  top: -76px;\n}\n\n.contact-section-2 .content {\n  width: 600px;\n  align-self: end;\n  grid-column: 1 / 4;\n  border-radius: 20px 40px;\n  padding-bottom: 32px;\n  text-align: right;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/scripts/loadContactContents.js":
/*!********************************************!*\
  !*** ./src/scripts/loadContactContents.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ElementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementCreator */ "./src/scripts/ElementCreator.js");
/* harmony import */ var _loadHomeContents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadHomeContents */ "./src/scripts/loadHomeContents.js");
/* harmony import */ var _images_sushi_mix_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/sushi-mix-1.jpg */ "./src/images/sushi-mix-1.jpg");
/* harmony import */ var _images_sushi_mix_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/sushi-mix-2.jpg */ "./src/images/sushi-mix-2.jpg");





const images = [
  {
    src: _images_sushi_mix_1_jpg__WEBPACK_IMPORTED_MODULE_2__,
    alt: 'diverse set of sushi',
  },
  {
    src: _images_sushi_mix_2_jpg__WEBPACK_IMPORTED_MODULE_3__,
    alt: 'diverse set of sushi',
  },
];

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return [
    (0,_loadHomeContents__WEBPACK_IMPORTED_MODULE_1__.createSection)(
      'default-section-style contact-section-1', 
      images[0],
      (0,_loadHomeContents__WEBPACK_IMPORTED_MODULE_1__.createContent)('Famished? Call us now!', _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph('(03) 1234-5678')),
    ),
    (0,_loadHomeContents__WEBPACK_IMPORTED_MODULE_1__.createSection)(
      'default-section-style contact-section-2',
      images[1],
      (0,_loadHomeContents__WEBPACK_IMPORTED_MODULE_1__.createContent)('Inquiries? Send us an e-mail!', _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph('contact@sushisushi.sample')),
    ),
  ].reverse();
};


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
      'Home sushi images by ',
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createLink('Derek Duran', 'https://unsplash.com/@derekduran'),
      ', ',
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createLink('Fadya Azhary', 'https://unsplash.com/@fadsphoto23_'),
      ', and ',
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createLink('Andraz Lazic', 'https://unsplash.com/@andrazlazic'),
    ]),
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph([
      'Menu sushi images by ',
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createLink('MANGA', 'https://www.mangarestaurant.it/'),
    ]),
    _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph([
      'Contact sushi images by ',
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createLink('STUDIOFOOD33', 'https://www.studiofood33.com'),
      ' and ',
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createLink('Bladimir Garcia', 'https://unsplash.com/@bladimirgarcia'),
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
/* harmony export */   "createContent": () => (/* binding */ createContent),
/* harmony export */   "createImageContainer": () => (/* binding */ createImageContainer),
/* harmony export */   "createSection": () => (/* binding */ createSection),
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
    createSection('default-section-style home-section-1', images[0], createContent('Only The Best', [
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph('All ingredients are carefully handpicked to give you the best of tastes.'),
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph('Each sushi with a story of its own flavour to tell.'),
    ])),
    createSection('default-section-style home-section-2', images[1], createContent('Hours', createHoursTable())),
    createSection('default-section-style home-section-3', images[2], createContent('Location', [
      _ElementCreator__WEBPACK_IMPORTED_MODULE_0__["default"].createParagraph('123 Sushi Street, Tokyo, Japan'),
    ])),
  ].reverse();
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
  ].reverse();
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

/***/ "./src/images/sushi-mix-1.jpg":
/*!************************************!*\
  !*** ./src/images/sushi-mix-1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sushi-mix-1.jpg";

/***/ }),

/***/ "./src/images/sushi-mix-2.jpg":
/*!************************************!*\
  !*** ./src/images/sushi-mix-2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sushi-mix-2.jpg";

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
/* harmony import */ var _scripts_loadContactContents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/loadContactContents */ "./src/scripts/loadContactContents.js");









_scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadFirst((0,_scripts_loadPrimaryHeader__WEBPACK_IMPORTED_MODULE_1__["default"])(), 'primary-header');
_scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].load((0,_scripts_loadFooter__WEBPACK_IMPORTED_MODULE_3__["default"])(), 'footer');

_scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadAfter((0,_scripts_loadPrimaryNav__WEBPACK_IMPORTED_MODULE_2__["default"])('home', {
  home: () => {
    _scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].removeFrom('primary-nav', 'footer', { includeFrom: false });
    _scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadMultipleAfter((0,_scripts_loadHomeContents__WEBPACK_IMPORTED_MODULE_4__["default"])(), 'primary-nav');
  },
  menu: () => {
    _scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].removeFrom('primary-nav', 'footer', { includeFrom: false });
    _scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadMultipleAfter((0,_scripts_loadMenuContents__WEBPACK_IMPORTED_MODULE_5__["default"])(), 'primary-nav');
  },
  contact: () => {
    _scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].removeFrom('primary-nav', 'footer', { includeFrom: false });
    _scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadMultipleAfter((0,_scripts_loadContactContents__WEBPACK_IMPORTED_MODULE_7__["default"])(), 'primary-nav');
  },
}), 'primary-header', 'primary-nav');

_scripts_ContentLoader__WEBPACK_IMPORTED_MODULE_0__["default"].loadMultipleAfter((0,_scripts_loadHomeContents__WEBPACK_IMPORTED_MODULE_4__["default"])(), 'primary-nav');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFB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QUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9EO0FBQ1E7QUFDTjtBQUNSO0FBQ1k7QUFDQTtBQUNwQztBQUMwQzs7QUFFaEUsd0VBQXVCLENBQUMsc0VBQWlCO0FBQ3pDLG1FQUFrQixDQUFDLCtEQUFVOztBQUU3Qix3RUFBdUIsQ0FBQyxtRUFBYztBQUN0QztBQUNBLElBQUkseUVBQXdCLDRCQUE0QixvQkFBb0I7QUFDNUUsSUFBSSxnRkFBK0IsQ0FBQyxxRUFBZ0I7QUFDcEQsR0FBRztBQUNIO0FBQ0EsSUFBSSx5RUFBd0IsNEJBQTRCLG9CQUFvQjtBQUM1RSxJQUFJLGdGQUErQixDQUFDLHFFQUFnQjtBQUNwRCxHQUFHO0FBQ0g7QUFDQSxJQUFJLHlFQUF3Qiw0QkFBNEIsb0JBQW9CO0FBQzVFLElBQUksZ0ZBQStCLENBQUMsd0VBQW1CO0FBQ3ZELEdBQUc7QUFDSCxDQUFDOztBQUVELGdGQUErQixDQUFDLHFFQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvQ29udGVudExvYWRlci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL0VsZW1lbnRDcmVhdG9yLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL1Byb2R1Y3RJbWFnZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2xvYWRDb250YWN0Q29udGVudHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9sb2FkRm9vdGVyLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvbG9hZEhvbWVDb250ZW50cy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2xvYWRNZW51Q29udGVudHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9sb2FkUHJpbWFyeUhlYWRlci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2xvYWRQcmltYXJ5TmF2LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9sb2dvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZGVmYXVsdC1iZy1jb2xvcjogIzE4MTkxYTtcXG4gIC0tZGVmYXVsdC10ZXh0LWNvbG9yOiAjZTZlNmU2O1xcbiAgLS1kZWZhdWx0LXRleHQtbGluay1jb2xvcjogd2hpdGU7XFxuICAtLWRlZmF1bHQtdGV4dC1zZWNvbmRhcnktY29sb3I6ICNiMmIyYjI7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYSxcXG5odG1sIHtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtY29sb3IpO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LWJnLWNvbG9yKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5LFxcbmJvZHkgPiAuY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSA+IC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLmZsZXgtaG9yaXpvbnRhbC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZsZXgtdmVydGljYWwtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC13cmFwIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDQwcHg7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuc2VjdGlvbiBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4vKiBQUklNQVJZIEhFQURFUiAmIE5BViAqL1xcblxcbi5sb2dvIHtcXG4gIC0tbGVuZ3RoOiAzMHB4O1xcbiAgd2lkdGg6IHZhcigtLWxlbmd0aCk7XFxuICBoZWlnaHQ6IHZhcigtLWxlbmd0aCk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4ucHJpbWFyeS1oZWFkZXIge1xcbiAgcGFkZGluZzogMjRweCAwIDE2cHg7XFxufVxcblxcbi5wcmltYXJ5LWhlYWRlciA+IC5jb250ZW50LXdyYXAge1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5wcmltYXJ5LW5hdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE4cHggMCAxNnB4O1xcbiAgdG9wOiAtMnB4OyAvKiBGaXhlcyBleHRyYSBnYXAgdG9wICovXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ucHJpbWFyeS1uYXYgPiAuY29udGVudC13cmFwIHtcXG4gIHdpZHRoOiBtaW4oMTAwJSwgNDYwcHgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5wcmltYXJ5LW5hdiBidXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucHJpbWFyeS1uYXYgYnV0dG9uOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ucHJpbWFyeS1uYXYgYnV0dG9uLmN1cnJlbnQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1saW5rLWNvbG9yKTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyogTUFJTiBDT05URU5UICovXFxuXFxuLmRlZmF1bHQtc2VjdGlvbi1zdHlsZTpmaXJzdC1vZi10eXBlIHtcXG4gIGhlaWdodDogNjAwcHg7XFxufVxcblxcbi5kZWZhdWx0LXNlY3Rpb24tc3R5bGUge1xcbiAgaGVpZ2h0OiA4MDBweDtcXG59XFxuXFxuLmRlZmF1bHQtc2VjdGlvbi1zdHlsZSA+IC5jb250ZW50LXdyYXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNDBweDtcXG59XFxuXFxuLmRlZmF1bHQtc2VjdGlvbi1zdHlsZSAuY29udGVudCxcXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxufVxcblxcbi5kZWZhdWx0LXNlY3Rpb24tc3R5bGUgLmNvbnRlbnQge1xcbiAgei1pbmRleDogMTA7XFxuICBwYWRkaW5nOiAyNHB4IDM2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LWJnLWNvbG9yKTtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0xIC5pbWFnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDY0MHB4O1xcbiAgaGVpZ2h0OiA0MjBweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2MHB4IDYwcHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IC0yMDBweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0xIC5jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDQwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0yIC5pbWFnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiA2MjBweDtcXG4gIGdyaWQtY29sdW1uOiAzIC8gLTE7XFxuICBib3JkZXItcmFkaXVzOiA2MHB4IDEyMHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTIgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IC0yOHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTIgLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweCA0MHB4IDgwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XFxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0yIGgyIHtcXG4gIHBhZGRpbmctbGVmdDogNnB4O1xcbn1cXG5cXG4uaG91cnMtdGFibGUge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmhvdXJzLXRhYmxlIHRoLFxcbi5ob3Vycy10YWJsZSB0ZCB7XFxuICBwYWRkaW5nOiA0cHggMjRweCA0cHggNHB4O1xcbn1cXG5cXG4uaG91cnMtdGFibGUgdGg6bGFzdC1jaGlsZCxcXG4uaG91cnMtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5ob3Vycy10YWJsZSB0aFtzY29wZT1cXFwicm93XFxcIl0ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0zIC5pbWFnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDY0MHB4O1xcbiAgaGVpZ2h0OiA1ODBweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwMHB4IDEwMHB4O1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTMgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IC01MnB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTMgLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggNDhweDtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBtYXJnaW4tbGVmdDogMTIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNzZweDtcXG4gIHBhZGRpbmc6IDI0cHggMzZweCAzMHB4O1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxufVxcblxcbmZvb3RlciA+IC5jb250ZW50LXdyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDAgNjBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuZm9vdGVyIC5jcmVkaXRzLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuZm9vdGVyIGgzIHtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbmZvb3RlciBhLFxcbmZvb3RlciAubmFtZSB7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LWxpbmstY29sb3IpO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLyogTUVOVSAqL1xcblxcbi5tZW51LXNlY3Rpb24ge1xcbiAgcGFkZGluZzogNDBweCAwIDgwcHg7XFxufVxcblxcbi5tZW51LXNlY3Rpb24gKyAubWVudS1zZWN0aW9uIHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIGgyIHtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uIGgyICsgcCB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxufVxcblxcbi5wcm9kdWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ2FwOiA4MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbjpudGgtb2YtdHlwZShldmVuKSAucHJvZHVjdDpudGgtb2YtdHlwZShvZGQpLFxcbi5tZW51LXNlY3Rpb246bnRoLW9mLXR5cGUob2RkKSAucHJvZHVjdDpudGgtb2YtdHlwZShldmVuKSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbn1cXG5cXG4ucHJvZHVjdCAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyNjBweDtcXG4gIGhlaWdodDogMjYwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4MHB4IDQwcHg7XFxufVxcblxcbi5tZW51LXNlY3Rpb246bnRoLW9mLXR5cGUoZXZlbikgLnByb2R1Y3Q6bnRoLW9mLXR5cGUob2RkKSAuaW1hZ2UtY29udGFpbmVyLFxcbi5tZW51LXNlY3Rpb246bnRoLW9mLXR5cGUob2RkKSAucHJvZHVjdDpudGgtb2YtdHlwZShldmVuKSAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHggODBweDsgXFxufVxcblxcbi5wcm9kdWN0IC5jb250ZW50IHtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uOm50aC1vZi10eXBlKGV2ZW4pIC5wcm9kdWN0Om50aC1vZi10eXBlKG9kZCkgLmNvbnRlbnQsXFxuLm1lbnUtc2VjdGlvbjpudGgtb2YtdHlwZShvZGQpIC5wcm9kdWN0Om50aC1vZi10eXBlKGV2ZW4pIC5jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgcGFkZGluZzogMCAwIDAgODBweDtcXG59XFxuXFxuLnByb2R1Y3QgLnByb2R1Y3QtbmFtZSB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnByb2R1Y3QgLmVuZ2xpc2gtbmFtZSB7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9kdWN0IC5kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDhweCAwIDE2cHg7XFxufVxcblxcbi5wcm9kdWN0IC5wcmljZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5wcm9kdWN0IC5xdWFudGl0eSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi8qIENPTlRBQ1QgKi9cXG5cXG4uY29udGFjdC1zZWN0aW9uLTEgLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgYm9yZGVyLXJhZGl1czogMTYwcHggNjBweDtcXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xcbn1cXG5cXG4uY29udGFjdC1zZWN0aW9uLTEgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAtOHB4O1xcbn1cXG5cXG4uY29udGFjdC1zZWN0aW9uLTEgLmNvbnRlbnQge1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHggMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uY29udGFjdC1zZWN0aW9uLTIge1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEyMHB4O1xcbn1cXG5cXG4uY29udGFjdC1zZWN0aW9uLTIgLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gIGJvcmRlci1yYWRpdXM6IDYwcHggMTYwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XFxufVxcblxcbi5jb250YWN0LXNlY3Rpb24tMiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IC03NnB4O1xcbn1cXG5cXG4uY29udGFjdC1zZWN0aW9uLTIgLmNvbnRlbnQge1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCA0MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyx1Q0FBdUM7QUFDekM7O0FBRUE7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WixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1kZWZhdWx0LWJnLWNvbG9yOiAjMTgxOTFhO1xcbiAgLS1kZWZhdWx0LXRleHQtY29sb3I6ICNlNmU2ZTY7XFxuICAtLWRlZmF1bHQtdGV4dC1saW5rLWNvbG9yOiB3aGl0ZTtcXG4gIC0tZGVmYXVsdC10ZXh0LXNlY29uZGFyeS1jb2xvcjogI2IyYjJiMjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hLFxcbmh0bWwge1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1jb2xvcik7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtYmctY29sb3IpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHksXFxuYm9keSA+IC5jb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5ID4gLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uZmxleC1ob3Jpem9udGFsLWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmxleC12ZXJ0aWNhbC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LXdyYXAge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgNDBweDtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5zZWN0aW9uIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi8qIFBSSU1BUlkgSEVBREVSICYgTkFWICovXFxuXFxuLmxvZ28ge1xcbiAgLS1sZW5ndGg6IDMwcHg7XFxuICB3aWR0aDogdmFyKC0tbGVuZ3RoKTtcXG4gIGhlaWdodDogdmFyKC0tbGVuZ3RoKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9sb2dvLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbi5wcmltYXJ5LWhlYWRlciB7XFxuICBwYWRkaW5nOiAyNHB4IDAgMTZweDtcXG59XFxuXFxuLnByaW1hcnktaGVhZGVyID4gLmNvbnRlbnQtd3JhcCB7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnByaW1hcnktbmF2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMThweCAwIDE2cHg7XFxuICB0b3A6IC0ycHg7IC8qIEZpeGVzIGV4dHJhIGdhcCB0b3AgKi9cXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5wcmltYXJ5LW5hdiA+IC5jb250ZW50LXdyYXAge1xcbiAgd2lkdGg6IG1pbigxMDAlLCA0NjBweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnByaW1hcnktbmF2IGJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5wcmltYXJ5LW5hdiBidXR0b246aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5wcmltYXJ5LW5hdiBidXR0b24uY3VycmVudCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LWxpbmstY29sb3IpO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5cXG4uZGVmYXVsdC1zZWN0aW9uLXN0eWxlOmZpcnN0LW9mLXR5cGUge1xcbiAgaGVpZ2h0OiA2MDBweDtcXG59XFxuXFxuLmRlZmF1bHQtc2VjdGlvbi1zdHlsZSB7XFxuICBoZWlnaHQ6IDgwMHB4O1xcbn1cXG5cXG4uZGVmYXVsdC1zZWN0aW9uLXN0eWxlID4gLmNvbnRlbnQtd3JhcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG4uZGVmYXVsdC1zZWN0aW9uLXN0eWxlIC5jb250ZW50LFxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG59XFxuXFxuLmRlZmF1bHQtc2VjdGlvbi1zdHlsZSAuY29udGVudCB7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBhZGRpbmc6IDI0cHggMzZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtYmctY29sb3IpO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTEgLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgYm9yZGVyLXJhZGl1czogMTYwcHggNjBweDtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbi0xIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogLTIwMHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTEgLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggNDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTIgLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDYyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG4gIGJvcmRlci1yYWRpdXM6IDYwcHggMTIwcHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMiBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogLTI4cHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMiAuY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4IDQwcHggODBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTIgaDIge1xcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XFxufVxcblxcbi5ob3Vycy10YWJsZSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uaG91cnMtdGFibGUgdGgsXFxuLmhvdXJzLXRhYmxlIHRkIHtcXG4gIHBhZGRpbmc6IDRweCAyNHB4IDRweCA0cHg7XFxufVxcblxcbi5ob3Vycy10YWJsZSB0aDpsYXN0LWNoaWxkLFxcbi5ob3Vycy10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuLmhvdXJzLXRhYmxlIHRoW3Njb3BlPVxcXCJyb3dcXFwiXSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uLTMgLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDU4MHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA1O1xcbiAgYm9yZGVyLXJhZGl1czogMjAwcHggMTAwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMyBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogLTUycHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24tMyAuY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweCA0OHB4O1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE3NnB4O1xcbiAgcGFkZGluZzogMjRweCAzNnB4IDMwcHg7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG59XFxuXFxuZm9vdGVyID4gLmNvbnRlbnQtd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCA2MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5mb290ZXIgLmNyZWRpdHMtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG5mb290ZXIgaDMge1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuZm9vdGVyIGEsXFxuZm9vdGVyIC5uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtbGluay1jb2xvcik7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiBNRU5VICovXFxuXFxuLm1lbnUtc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA0MHB4IDAgODBweDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbiArIC5tZW51LXNlY3Rpb24ge1xcbiAgcGFkZGluZy10b3A6IDA7XFxufVxcblxcbi5tZW51LXNlY3Rpb24gaDIge1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb24gaDIgKyBwIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG59XFxuXFxuLnByb2R1Y3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBnYXA6IDgwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uOm50aC1vZi10eXBlKGV2ZW4pIC5wcm9kdWN0Om50aC1vZi10eXBlKG9kZCksXFxuLm1lbnUtc2VjdGlvbjpudGgtb2YtdHlwZShvZGQpIC5wcm9kdWN0Om50aC1vZi10eXBlKGV2ZW4pIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxufVxcblxcbi5wcm9kdWN0IC5pbWFnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDI2MHB4O1xcbiAgaGVpZ2h0OiAyNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDgwcHggNDBweDtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbjpudGgtb2YtdHlwZShldmVuKSAucHJvZHVjdDpudGgtb2YtdHlwZShvZGQpIC5pbWFnZS1jb250YWluZXIsXFxuLm1lbnUtc2VjdGlvbjpudGgtb2YtdHlwZShvZGQpIC5wcm9kdWN0Om50aC1vZi10eXBlKGV2ZW4pIC5pbWFnZS1jb250YWluZXIge1xcbiAgYm9yZGVyLXJhZGl1czogNDBweCA4MHB4OyBcXG59XFxuXFxuLnByb2R1Y3QgLmNvbnRlbnQge1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XFxufVxcblxcbi5tZW51LXNlY3Rpb246bnRoLW9mLXR5cGUoZXZlbikgLnByb2R1Y3Q6bnRoLW9mLXR5cGUob2RkKSAuY29udGVudCxcXG4ubWVudS1zZWN0aW9uOm50aC1vZi10eXBlKG9kZCkgLnByb2R1Y3Q6bnRoLW9mLXR5cGUoZXZlbikgLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBwYWRkaW5nOiAwIDAgMCA4MHB4O1xcbn1cXG5cXG4ucHJvZHVjdCAucHJvZHVjdC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4ucHJvZHVjdCAuZW5nbGlzaC1uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnByb2R1Y3QgLmRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbjogOHB4IDAgMTZweDtcXG59XFxuXFxuLnByb2R1Y3QgLnByaWNlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnByb2R1Y3QgLnF1YW50aXR5IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLyogQ09OVEFDVCAqL1xcblxcbi5jb250YWN0LXNlY3Rpb24tMSAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBib3JkZXItcmFkaXVzOiAxNjBweCA2MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxufVxcblxcbi5jb250YWN0LXNlY3Rpb24tMSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IC04cHg7XFxufVxcblxcbi5jb250YWN0LXNlY3Rpb24tMSAuY29udGVudCB7XFxuICB3aWR0aDogNjAwcHg7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgYm9yZGVyLXJhZGl1czogNDBweCAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XFxufVxcblxcbi5jb250YWN0LXNlY3Rpb24tMiB7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XFxufVxcblxcbi5jb250YWN0LXNlY3Rpb24tMiAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIGhlaWdodDogNDIwcHg7XFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgYm9yZGVyLXJhZGl1czogNjBweCAxNjBweDtcXG4gIG1hcmdpbi1yaWdodDogODBweDtcXG59XFxuXFxuLmNvbnRhY3Qtc2VjdGlvbi0yIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogLTc2cHg7XFxufVxcblxcbi5jb250YWN0LXNlY3Rpb24tMiAuY29udGVudCB7XFxuICB3aWR0aDogNjAwcHg7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDQwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGxvYWQsXG4gIGxvYWRGaXJzdCxcbiAgbG9hZEJlZm9yZSxcbiAgbG9hZEFmdGVyLFxuICBsb2FkTXVsdGlwbGUsXG4gIGxvYWRNdWx0aXBsZUJlZm9yZSxcbiAgbG9hZE11bHRpcGxlQWZ0ZXIsXG4gIHJlbW92ZUZyb20sXG59O1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnN0IGVsZW1lbnRzID0ge1xuICBnZXQgY29udGVudCgpIHsgcmV0dXJuIGNvbnRlbnQ7IH0sXG4gIHNldCBjb250ZW50KHZhbHVlKSB7IHRocm93IFR5cGVFcnJvcignQ2Fubm90IHNldCBwcm9wZXJ0eSBcXCdjb250ZW50XFwnLCBpdCBpcyByZXNlcnZlZCBhbmQgdW5tb2RpZmlhYmxlJyk7IH1cbn07XG5cbmZ1bmN0aW9uIGxvYWQoZWxlbWVudCwgbmFtZSA9ICcnKSB7XG4gIGlmIChuYW1lKSBlbGVtZW50c1tuYW1lXSA9IGVsZW1lbnQ7XG4gIGNvbnRlbnQuYXBwZW5kKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBsb2FkRmlyc3QoZWxlbWVudCwgbmFtZSA9ICcnKSB7XG4gIGlmIChuYW1lKSBlbGVtZW50c1tuYW1lXSA9IGVsZW1lbnQ7XG4gIGNvbnRlbnQucHJlcGVuZChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gbG9hZE11bHRpcGxlKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGxvYWQoZWxlbWVudCkpO1xufVxuXG5mdW5jdGlvbiBsb2FkQmVmb3JlKGVsZW1lbnQsIGJlZm9yZSwgbmFtZSA9ICcnKSB7XG4gIGlmIChuYW1lKSBlbGVtZW50c1tuYW1lXSA9IGVsZW1lbnQ7XG5cbiAgaWYgKGJlZm9yZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgY29udGVudC5wcmVwZW5kKGVsZW1lbnQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghZWxlbWVudHNbYmVmb3JlXSkgdGhyb3cgVHlwZUVycm9yKGBDYW5ub3QgbG9hZCBiZWZvcmUgJyR7YmVmb3JlfScgc2luY2UgaXQgZG9lcyBub3QgZXhpc3RgKTtcbiAgZWxlbWVudHNbYmVmb3JlXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBZnRlcihlbGVtZW50LCBhZnRlciwgbmFtZSA9ICcnKSB7XG4gIGlmIChuYW1lKSBlbGVtZW50c1tuYW1lXSA9IGVsZW1lbnQ7XG4gIFxuICBpZiAoYWZ0ZXIgPT09ICdjb250ZW50Jykge1xuICAgIGNvbnRlbnQuYXBwZW5kKGVsZW1lbnQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghZWxlbWVudHNbYWZ0ZXJdKSB0aHJvdyBUeXBlRXJyb3IoYENhbm5vdCBsb2FkIGFmdGVyICcke2FmdGVyfScgc2luY2UgaXQgZG9lcyBub3QgZXhpc3RgKTtcbiAgZWxlbWVudHNbYWZ0ZXJdLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gbG9hZE11bHRpcGxlQmVmb3JlKGVsZW1lbnRzLCBiZWZvcmUpIHtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gbG9hZEJlZm9yZShlbGVtZW50LCBiZWZvcmUpKTtcbn1cblxuZnVuY3Rpb24gbG9hZE11bHRpcGxlQWZ0ZXIoZWxlbWVudHMsIGFmdGVyKSB7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGxvYWRBZnRlcihlbGVtZW50LCBhZnRlcikpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGcm9tKGZyb21OYW1lLCB0b05hbWUgPSBudWxsLCB7IGluY2x1ZGVGcm9tLCBpbmNsdWRlVG8gfSA9IHsgaW5jbHVkZUZyb206IHRydWUsIGluY2x1ZGVUbzogZmFsc2UgfSkge1xuICBjb25zdCBmaW5pc2ggPSBlbGVtZW50c1tmcm9tTmFtZV0gPz8gY29udGVudC5maXJzdENoaWxkO1xuICBsZXQgY3VycmVudCA9IGNvbnRlbnQubGFzdENoaWxkO1xuXG4gIGlmICh0b05hbWUpIHtcbiAgICBjdXJyZW50ID0gZWxlbWVudHNbdG9OYW1lXTtcbiAgICBpZiAoIWluY2x1ZGVUbykgY3VycmVudCA9IGN1cnJlbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHdoaWxlIChjdXJyZW50ICE9PSBmaW5pc2gpIHtcbiAgICBjb25zdCB0b1JlbW92ZSA9IGN1cnJlbnQ7XG4gICAgXG4gICAgT2JqZWN0LmVudHJpZXMoZWxlbWVudHMpLmZvckVhY2goKFtrZXksIGVsZW1lbnRdKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gY3VycmVudCkge1xuICAgICAgICBkZWxldGUgZWxlbWVudHNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGN1cnJlbnQgPSBjdXJyZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgdG9SZW1vdmUucmVtb3ZlKCk7XG4gIH1cblxuICBpZiAoaW5jbHVkZUZyb20pIGN1cnJlbnQucmVtb3ZlKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGUsXG4gIGNyZWF0ZVRleHQsXG4gIGNyZWF0ZUxpbmssXG4gIGNyZWF0ZVBhcmFncmFwaCxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHQodGV4dCkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmsodGV4dCwgdXJsKSB7XG4gIHJldHVybiBjcmVhdGUoJ2EnLCB7XG4gICAgaHJlZjogdXJsLFxuICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgcmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcicsXG4gIH0sIHRleHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgodGV4dE9yTm9kZXMsIG9wdGlvbnNPckNsYXNzTmFtZSkge1xuICBpZiAodHlwZW9mIHRleHRPck5vZGVzID09PSAnc3RyaW5nJykgcmV0dXJuIGNyZWF0ZSgncCcsIG9wdGlvbnNPckNsYXNzTmFtZSwgdGV4dE9yTm9kZXMpO1xuXG4gIHJldHVybiBjcmVhdGUoJ3AnLCBvcHRpb25zT3JDbGFzc05hbWUsIFtcbiAgICAuLi50ZXh0T3JOb2Rlcy5tYXAoKG5vZGUpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ3N0cmluZycpIHJldHVybiBub2RlO1xuICAgICAgaWYgKHR5cGVvZiBub2RlICE9PSAnbnVtYmVyJykgcmV0dXJuIG5vZGU7XG4gICAgICByZXR1cm4gY3JlYXRlVGV4dChub2RlKTtcbiAgICB9KSxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZSh0YWcsIG9wdGlvbnNPckNsYXNzTmFtZSA9IHt9LCBjaGlsZHJlbk9yVGV4dENvbnRlbnQgPSBbXSkge1xuICBpZiAodHlwZW9mIG9wdGlvbnNPckNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBvcHRpb25zT3JDbGFzc05hbWU7XG4gICAgb3B0aW9uc09yQ2xhc3NOYW1lID0ge307XG5cbiAgICBpZiAoY2xhc3NOYW1lKSBvcHRpb25zT3JDbGFzc05hbWUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjaGlsZHJlbk9yVGV4dENvbnRlbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZHJlbk9yVGV4dENvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgb3B0aW9uc09yQ2xhc3NOYW1lLnRleHRDb250ZW50ID0gY2hpbGRyZW5PclRleHRDb250ZW50O1xuICAgIGNoaWxkcmVuT3JUZXh0Q29udGVudCA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIGFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyksIG9wdGlvbnNPckNsYXNzTmFtZSwgY2hpbGRyZW5PclRleHRDb250ZW50KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduKGVsZW1lbnQsIG9wdGlvbnMsIGNoaWxkcmVuKSB7XG4gIE9iamVjdC5hc3NpZ24oZWxlbWVudCwgb3B0aW9ucyk7XG4gIGlmICghQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuKVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9KTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGltYWdlLCBuYW1lLCBlbmdsaXNoTmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBxdWFudGl0eSkge1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW5nbGlzaE5hbWUgPSBlbmdsaXNoTmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMucXVhbnRpdHkgPSBxdWFudGl0eTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3Ioc3JjLCBhbHQsIHdpZHRoLCB0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnNyYyA9IHNyYztcbiAgICB0aGlzLmFsdCA9IGFsdDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgfVxuXG4gIGdldFN0eWxlT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgfVxuICB9XG59IiwiaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gXCIuL0VsZW1lbnRDcmVhdG9yXCI7XG5pbXBvcnQgeyBjcmVhdGVTZWN0aW9uLCBjcmVhdGVJbWFnZUNvbnRhaW5lciwgY3JlYXRlQ29udGVudCB9IGZyb20gXCIuL2xvYWRIb21lQ29udGVudHNcIjtcbmltcG9ydCBzdXNoaU1peDEgZnJvbSAnLi4vaW1hZ2VzL3N1c2hpLW1peC0xLmpwZyc7XG5pbXBvcnQgc3VzaGlNaXgyIGZyb20gJy4uL2ltYWdlcy9zdXNoaS1taXgtMi5qcGcnO1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gIHtcbiAgICBzcmM6IHN1c2hpTWl4MSxcbiAgICBhbHQ6ICdkaXZlcnNlIHNldCBvZiBzdXNoaScsXG4gIH0sXG4gIHtcbiAgICBzcmM6IHN1c2hpTWl4MixcbiAgICBhbHQ6ICdkaXZlcnNlIHNldCBvZiBzdXNoaScsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXG4gICAgY3JlYXRlU2VjdGlvbihcbiAgICAgICdkZWZhdWx0LXNlY3Rpb24tc3R5bGUgY29udGFjdC1zZWN0aW9uLTEnLCBcbiAgICAgIGltYWdlc1swXSxcbiAgICAgIGNyZWF0ZUNvbnRlbnQoJ0ZhbWlzaGVkPyBDYWxsIHVzIG5vdyEnLCBFbGVtZW50Q3JlYXRvci5jcmVhdGVQYXJhZ3JhcGgoJygwMykgMTIzNC01Njc4JykpLFxuICAgICksXG4gICAgY3JlYXRlU2VjdGlvbihcbiAgICAgICdkZWZhdWx0LXNlY3Rpb24tc3R5bGUgY29udGFjdC1zZWN0aW9uLTInLFxuICAgICAgaW1hZ2VzWzFdLFxuICAgICAgY3JlYXRlQ29udGVudCgnSW5xdWlyaWVzPyBTZW5kIHVzIGFuIGUtbWFpbCEnLCBFbGVtZW50Q3JlYXRvci5jcmVhdGVQYXJhZ3JhcGgoJ2NvbnRhY3RAc3VzaGlzdXNoaS5zYW1wbGUnKSksXG4gICAgKSxcbiAgXS5yZXZlcnNlKCk7XG59O1xuIiwiaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gXCIuL0VsZW1lbnRDcmVhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZm9vdGVyJywgJycsIFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2NvbnRlbnQtd3JhcCcsIFtcbiAgICAgIGNyZWF0ZUluZm9ybWF0aW9uKCksXG4gICAgICBjcmVhdGVDcmVkaXRzKCksXG4gICAgXSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvcm1hdGlvbigpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2luZm9ybWF0aW9uJywgW1xuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZVBhcmFncmFwaChbXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3NwYW4nLCAnbmFtZScsICdTdXNoaSBTdXNoaScpLFxuICAgICAgJywgYSByZXN0YXVyYW50IHBhZ2UgcHJvamVjdCBmb3IgJyxcbiAgICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZUxpbmsoJ1RoZSBPZGluIFByb2plY3QnLCAnaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL2xlc3NvbnMvbm9kZS1wYXRoLWphdmFzY3JpcHQtcmVzdGF1cmFudC1wYWdlJyksXG4gICAgICAnLicsXG4gICAgXSksXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlUGFyYWdyYXBoKFtcbiAgICAgICdNYWRlIGJ5ICcsXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVMaW5rKCdaZWt1bW9ydScsICdodHRwczovL2dpdGh1Yi5jb20vWmVrdW1vcnUnKSxcbiAgICBdKSxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNyZWRpdHMoKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2RpdicsICdjcmVkaXRzLWNvbnRhaW5lcicsIFtcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2gzJywgJycsICdJbWFnZSBDcmVkaXRzJyksXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlUGFyYWdyYXBoKFtcbiAgICAgICdMb2dvIGljb24gYnkgJyxcbiAgICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZUxpbmsoJ3N1cmFuZycsICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vYXV0aG9ycy9zdXJhbmcnKSxcbiAgICBdKSxcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVQYXJhZ3JhcGgoW1xuICAgICAgJ0hvbWUgc3VzaGkgaW1hZ2VzIGJ5ICcsXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVMaW5rKCdEZXJlayBEdXJhbicsICdodHRwczovL3Vuc3BsYXNoLmNvbS9AZGVyZWtkdXJhbicpLFxuICAgICAgJywgJyxcbiAgICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZUxpbmsoJ0ZhZHlhIEF6aGFyeScsICdodHRwczovL3Vuc3BsYXNoLmNvbS9AZmFkc3Bob3RvMjNfJyksXG4gICAgICAnLCBhbmQgJyxcbiAgICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZUxpbmsoJ0FuZHJheiBMYXppYycsICdodHRwczovL3Vuc3BsYXNoLmNvbS9AYW5kcmF6bGF6aWMnKSxcbiAgICBdKSxcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVQYXJhZ3JhcGgoW1xuICAgICAgJ01lbnUgc3VzaGkgaW1hZ2VzIGJ5ICcsXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVMaW5rKCdNQU5HQScsICdodHRwczovL3d3dy5tYW5nYXJlc3RhdXJhbnQuaXQvJyksXG4gICAgXSksXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlUGFyYWdyYXBoKFtcbiAgICAgICdDb250YWN0IHN1c2hpIGltYWdlcyBieSAnLFxuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlTGluaygnU1RVRElPRk9PRDMzJywgJ2h0dHBzOi8vd3d3LnN0dWRpb2Zvb2QzMy5jb20nKSxcbiAgICAgICcgYW5kICcsXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVMaW5rKCdCbGFkaW1pciBHYXJjaWEnLCAnaHR0cHM6Ly91bnNwbGFzaC5jb20vQGJsYWRpbWlyZ2FyY2lhJyksXG4gICAgXSksXG4gIF0pO1xufVxuIiwiaW1wb3J0IEVsZW1lbnRDcmVhdG9yIGZyb20gXCIuL0VsZW1lbnRDcmVhdG9yXCI7XG5pbXBvcnQgc3VzaGkgZnJvbSAnLi4vaW1hZ2VzL3N1c2hpLmpwZyc7XG5pbXBvcnQgc3VzaGkyIGZyb20gJy4uL2ltYWdlcy9zdXNoaS0yLmpwZyc7XG5pbXBvcnQgc3VzaGkzIGZyb20gJy4uL2ltYWdlcy9zdXNoaS0zLmpwZyc7XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAge1xuICAgIHNyYzogc3VzaGksXG4gICAgYWx0OiAnOCBwaWVjZXMgc3VzaGkgd2l0aCBzYWxtb24gb24gdG9wJyxcbiAgfSxcbiAge1xuICAgIHNyYzogc3VzaGkyLFxuICAgIGFsdDogJ2JvYXJkIG9mIG1peGVkIHN1c2hpJyxcbiAgfSxcbiAge1xuICAgIHNyYzogc3VzaGkzLFxuICAgIGFsdDogJ3N1c2hpLCBjaG9wc3RpY2tzLCBhbmQgYSBjdXAgb2Ygc295IHNhdWNlJyxcbiAgfSxcbl07XG5cbmV4cG9ydCB7IGNyZWF0ZVNlY3Rpb24sIGNyZWF0ZUltYWdlQ29udGFpbmVyLCBjcmVhdGVDb250ZW50IH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFtcbiAgICBjcmVhdGVTZWN0aW9uKCdkZWZhdWx0LXNlY3Rpb24tc3R5bGUgaG9tZS1zZWN0aW9uLTEnLCBpbWFnZXNbMF0sIGNyZWF0ZUNvbnRlbnQoJ09ubHkgVGhlIEJlc3QnLCBbXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVQYXJhZ3JhcGgoJ0FsbCBpbmdyZWRpZW50cyBhcmUgY2FyZWZ1bGx5IGhhbmRwaWNrZWQgdG8gZ2l2ZSB5b3UgdGhlIGJlc3Qgb2YgdGFzdGVzLicpLFxuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlUGFyYWdyYXBoKCdFYWNoIHN1c2hpIHdpdGggYSBzdG9yeSBvZiBpdHMgb3duIGZsYXZvdXIgdG8gdGVsbC4nKSxcbiAgICBdKSksXG4gICAgY3JlYXRlU2VjdGlvbignZGVmYXVsdC1zZWN0aW9uLXN0eWxlIGhvbWUtc2VjdGlvbi0yJywgaW1hZ2VzWzFdLCBjcmVhdGVDb250ZW50KCdIb3VycycsIGNyZWF0ZUhvdXJzVGFibGUoKSkpLFxuICAgIGNyZWF0ZVNlY3Rpb24oJ2RlZmF1bHQtc2VjdGlvbi1zdHlsZSBob21lLXNlY3Rpb24tMycsIGltYWdlc1syXSwgY3JlYXRlQ29udGVudCgnTG9jYXRpb24nLCBbXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGVQYXJhZ3JhcGgoJzEyMyBTdXNoaSBTdHJlZXQsIFRva3lvLCBKYXBhbicpLFxuICAgIF0pKSxcbiAgXS5yZXZlcnNlKCk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTZWN0aW9uKGNsYXNzTmFtZSwgaW1hZ2VPcHRpb25zLCBjb250ZW50KSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3NlY3Rpb24nLCBjbGFzc05hbWUsIFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2NvbnRlbnQtd3JhcCcsIFtcbiAgICAgIGNyZWF0ZUltYWdlQ29udGFpbmVyKGltYWdlT3B0aW9ucyksXG4gICAgICBjb250ZW50LFxuICAgIF0pKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VDb250YWluZXIoaW1hZ2VPcHRpb25zKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2RpdicsICdpbWFnZS1jb250YWluZXInLCBcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2ltZycsIGltYWdlT3B0aW9ucykpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KGhlYWRpbmcsIGNoaWxkcmVuID0gW10pIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkgY2hpbGRyZW4gPSBbIGNoaWxkcmVuIF07XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2RpdicsICdjb250ZW50JywgW1xuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnaDInLCAnJywgaGVhZGluZyksXG4gICAgLi4uY2hpbGRyZW4sXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3Vyc1RhYmxlKCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCd0YWJsZScsICdob3Vycy10YWJsZScsXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCd0Ym9keScsICcnLCBbXG4gICAgICBjcmVhdGVIb3Vyc1RhYmxlUm93KCdNb25kYXkgdG8gRnJpZGF5JywgJzExOjAwIEEuTS4gLSAzOjAwIFAuTS4nLCAnNTowMCBQLk0uIC0gMTA6MDAgUC5NLicpLFxuICAgICAgY3JlYXRlSG91cnNUYWJsZVJvdygnU2F0dXJkYXknLCAnMTE6MDAgQS5NLiAtIDM6MDAgUC5NLicsICc1OjAwIFAuTS4gLSAxMjowMCBBLk0uJyksXG4gICAgICBjcmVhdGVIb3Vyc1RhYmxlUm93KCdTdW5kYXknLCAnMTE6MDAgQS5NLiAtIDM6MDAgUC5NLicsICcnKSxcbiAgICBdKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzVGFibGVSb3coZGF5cywgYWZ0ZXJub29uLCBldmVuaW5nKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3RyJywgJycsIFtcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3RoJywgeyBzY29wZTogJ3JvdycgfSwgZGF5cyksXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCd0ZCcsICcnLCBhZnRlcm5vb24pLFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgndGQnLCAnJywgZXZlbmluZyksXG4gIF0pO1xufSIsImltcG9ydCBFbGVtZW50Q3JlYXRvciBmcm9tIFwiLi9FbGVtZW50Q3JlYXRvclwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdFwiO1xuaW1wb3J0IFByb2R1Y3RJbWFnZSBmcm9tIFwiLi9Qcm9kdWN0SW1hZ2VcIjtcbmltcG9ydCBuaWdpcmlTYWtlIGZyb20gJy4uL2ltYWdlcy9uaWdpcmktc2FrZS5qcGcnO1xuaW1wb3J0IG5pZ2lyaU1hZ3VybyBmcm9tICcuLi9pbWFnZXMvbmlnaXJpLW1hZ3Vyby5qcGcnO1xuaW1wb3J0IG5pZ2lyaVN1enVraSBmcm9tICcuLi9pbWFnZXMvbmlnaXJpLXN1enVraS5qcGcnO1xuaW1wb3J0IHVyYW1ha2lTYWtlIGZyb20gJy4uL2ltYWdlcy91cmFtYWtpLXNha2UuanBnJztcbmltcG9ydCB1cmFtYWtpRWJpIGZyb20gJy4uL2ltYWdlcy91cmFtYWtpLWViaS5qcGcnO1xuaW1wb3J0IHVyYW1ha2lSb2J1c3V0YSBmcm9tICcuLi9pbWFnZXMvdXJhbWFraS1yb2J1c3V0YS5qcGcnO1xuaW1wb3J0IGhvc29tYWtpU2FrZSBmcm9tICcuLi9pbWFnZXMvaG9zb21ha2ktc2FrZS5qcGcnO1xuaW1wb3J0IGhvc29tYWtpTWFndXJvIGZyb20gJy4uL2ltYWdlcy9ob3NvbWFraS1tYWd1cm8uanBnJztcbmltcG9ydCBob3NvbWFraUViaSBmcm9tICcuLi9pbWFnZXMvaG9zb21ha2ktZWJpLmpwZyc7XG5cbmNvbnN0IGltYWdlcyA9IHtcbiAgbmlnaXJpOiB7XG4gICAgc2FrZTogbmV3IFByb2R1Y3RJbWFnZShuaWdpcmlTYWtlLCAnMiBwaWVjZXMgb2YgbmlnaXJpIHNha2UnLCAnMjQwJScsICctNThweCcsICctMjAwcHgnKSxcbiAgICBtYWd1cm86IG5ldyBQcm9kdWN0SW1hZ2UobmlnaXJpTWFndXJvLCAnNCBwaWVjZXMgb2YgbmlnaXJpIG1hZ3VybycsICcxODAlJywgJy0xOHB4JywgJy01OHB4JyksXG4gICAgc3V6dWtpOiBuZXcgUHJvZHVjdEltYWdlKG5pZ2lyaVN1enVraSwgJzQgcGllY2VzIG9mIG5pZ2lyaSBzdXp1a2knLCAnMjAwJScsICctMTZweCcsICctOTRweCcpLFxuICB9LFxuICB1cmFtYWtpOiB7XG4gICAgc2FrZTogbmV3IFByb2R1Y3RJbWFnZSh1cmFtYWtpU2FrZSwgJzggcGllY2VzIG9mIHVyYW1ha2kgc2FrZScsICcyMDAlJywgJy0yMHB4JywgJy03NXB4JyksXG4gICAgZWJpOiBuZXcgUHJvZHVjdEltYWdlKHVyYW1ha2lFYmksICc4IHBpZWNlcyBvZiB1cmFtYWtpIGViaScsICcyMDAlJywgJy0yMXB4JywgJy00N3B4JyksXG4gICAgcm9idXN1dGE6IG5ldyBQcm9kdWN0SW1hZ2UodXJhbWFraVJvYnVzdXRhLCAnOCBwaWVjZXMgb2YgdXJhbWFraSByb2J1c3V0YScsICcxNzAlJywgJy00cHgnLCAnLTcwcHgnKSxcbiAgfSxcbiAgaG9zb21ha2k6IHtcbiAgICBzYWtlOiBuZXcgUHJvZHVjdEltYWdlKGhvc29tYWtpU2FrZSwgJzggcGllY2VzIG9mIGhvc29tYWtpIHNha2UnLCAnMjQwJScsICctMjdweCcsICctNzRweCcpLFxuICAgIG1hZ3VybzogbmV3IFByb2R1Y3RJbWFnZShob3NvbWFraU1hZ3VybywgJzggcGllY2VzIG9mIGhvc29tYWtpIG1hZ3VybycsICcyMjAlJywgJy00NnB4JywgJy0xMTBweCcpLFxuICAgIGViaTogbmV3IFByb2R1Y3RJbWFnZShob3NvbWFraUViaSwgJzggcGllY2VzIG9mIGhvc29tYWtpIGViaScsICcxOTAlJywgJy0yOXB4JywgJy0xMzZweCcpLFxuICB9LFxufVxuXG5jb25zdCBwcm9kdWN0cyA9IHtcbiAgbmlnaXJpOiBbXG4gICAgbmV3IFByb2R1Y3QoaW1hZ2VzLm5pZ2lyaS5zYWtlLCAnU2FrZScsICdTYWxtb24nLCAnQSBsb25nIHdoaXRlIG92YWwtc2hhcGVkIHN1c2hpIHdpdGggYSBjdXQgb2YgZnJlc2ggc2FsbW9uIG9uIHRvcC4nLCAxMTk5Ljk5LCA4KSxcbiAgICBuZXcgUHJvZHVjdChpbWFnZXMubmlnaXJpLm1hZ3VybywgJ01hZ3VybycsICdUdW5hJywgJ0EgbG9uZyB3aGl0ZSBvdmFsLXNoYXBlZCBzdXNoaSB3aXRoIHNsaWNlcyBvZiB0dW5hIG9uIHRvcC4nLCAxMTk5Ljk5LCA4KSxcbiAgICBuZXcgUHJvZHVjdChpbWFnZXMubmlnaXJpLnN1enVraSwgJ1N1enVraScsICdKYXBhbmVzZSBzZWEgYmFzcycsICdBIGxvbmcgd2hpdGUgb3ZhbC1zaGFwZWQgc3VzaGkgd2l0aCBzbGljZXMgb2YgSmFwYW5lc2Ugc2VhIGJhc3Mgb24gdG9wLicsIDExOTkuOTksIDgpLCAgXG4gIF0sXG4gIHVyYW1ha2k6IFtcbiAgICBuZXcgUHJvZHVjdChpbWFnZXMudXJhbWFraS5zYWtlLCAnU2FrZScsICdTYWxtb24nLCAnQSBjeWxpbmRyaWNhbCBub3JpLWhpZGRlbiBzdXNoaSB3aXRoIGNydXNoZWQgZnJlc2ggc2FsbW9uIG9uIHRvcC4nLCAxMzk5Ljk5LCA4KSxcbiAgICBuZXcgUHJvZHVjdChpbWFnZXMudXJhbWFraS5lYmksICdFYmknLCAnU2hyaW1wJywgJ0EgY3lsaW5kcmljYWwgbm9yaS1oaWRkZW4gc3VzaGkgd2l0aCBhIGNvb2tlZCBjdXQgb2Ygc2hyaW1wIG9uIHRvcC4nLCAxMzk5Ljk5LCA4KSxcbiAgICBuZXcgUHJvZHVjdChpbWFnZXMudXJhbWFraS5yb2J1c3V0YSwgJ1JvYnVzdXRhJywgJ0xvYnN0ZXInLCAnQSBjeWxpbmRyaWNhbCBub3JpLWhpZGRlbiBzdXNoaSB3aXRoIGNydXNoZWQgZmxlc2ggb2YgbG9ic3RlciBvbiB0b3AuJywgMTc5OS45OSwgOCksXG4gIF0sXG4gIGhvc29tYWtpOiBbXG4gICAgbmV3IFByb2R1Y3QoaW1hZ2VzLmhvc29tYWtpLnNha2UsICdTYWtlJywgJ1NhbG1vbicsICdBIGN5bGluZHJpY2FsIHN1c2hpIHdpdGggZnJlc2ggc2FsbW9uIGluc2lkZS4nLCAxMDk5Ljk5LCA4KSxcbiAgICBuZXcgUHJvZHVjdChpbWFnZXMuaG9zb21ha2kubWFndXJvLCAnTWFndXJvJywgJ1R1bmEnLCAnQSBjeWxpbmRyaWNhbCBzdXNoaSB3aXRoIHR1bmEgaW5zaWRlLicsIDEwOTkuOTksIDgpLFxuICAgIG5ldyBQcm9kdWN0KGltYWdlcy5ob3NvbWFraS5lYmksICdFYmknLCAnU2hyaW1wJywgJ0EgY3lsaW5kcmljYWwgc3VzaGkgd2l0aCBzaHJpbXAgaW5zaWRlLicsIDExOTkuOTksIDgpLFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW1xuICAgIGNyZWF0ZVNlY3Rpb24oJ05pZ2lyaXp1c2hpJywgJ0hhbmQtcHJlc3NlZCBzdXNoaScsIGNyZWF0ZVByb2R1Y3RzKHByb2R1Y3RzLm5pZ2lyaSkpLFxuICAgIGNyZWF0ZVNlY3Rpb24oJ1VyYW1ha2knLCAnSW5zaWRlLW91dCByb2xsJywgY3JlYXRlUHJvZHVjdHMocHJvZHVjdHMudXJhbWFraSkpLFxuICAgIGNyZWF0ZVNlY3Rpb24oJ0hvc29tYWtpJywgJ1RoaW4gcm9sbCcsIGNyZWF0ZVByb2R1Y3RzKHByb2R1Y3RzLmhvc29tYWtpKSksXG4gIF0ucmV2ZXJzZSgpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlU2VjdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIHByb2R1Y3RzID0gW10pIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnc2VjdGlvbicsICdtZW51LXNlY3Rpb24nLCBcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2RpdicsICdjb250ZW50LXdyYXAgZmxleC12ZXJ0aWNhbC1jZW50ZXInLCBbXG4gICAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2gyJywgJycsIHRpdGxlKSxcbiAgICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgncCcsICcnLCBkZXNjcmlwdGlvbiksXG4gICAgICAuLi5wcm9kdWN0cyxcbiAgICBdKVxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9kdWN0cyhwcm9kdWN0cykge1xuICByZXR1cm4gcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ3Byb2R1Y3QnLCBbXG4gICAgICBjcmVhdGVJbWFnZUNvbnRhaW5lcihwcm9kdWN0LmltYWdlKSxcbiAgICAgIGNyZWF0ZUNvbnRlbnQocHJvZHVjdCksXG4gICAgXSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbWFnZUNvbnRhaW5lcihpbWFnZSkge1xuICBjb25zdCBpbWFnZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2ltZycsIHtcbiAgICBzcmM6IGltYWdlLnNyYyxcbiAgICBhbHQ6IGltYWdlLmFsdCxcbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oaW1hZ2VFbGVtZW50LnN0eWxlLCBpbWFnZS5nZXRTdHlsZU9iamVjdCgpKTtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2ltYWdlLWNvbnRhaW5lcicsIGltYWdlRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQocHJvZHVjdCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdkaXYnLCAnY29udGVudCcsIFtcbiAgICBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ2gzJywgJ3Byb2R1Y3QtbmFtZScsIHByb2R1Y3QubmFtZSksXG4gICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdwJywgJ2VuZ2xpc2gtbmFtZScsIHByb2R1Y3QuZW5nbGlzaE5hbWUpLFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgncCcsICdkZXNjcmlwdGlvbicsIHByb2R1Y3QuZGVzY3JpcHRpb24pLFxuICAgIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZVBhcmFncmFwaChbXG4gICAgICBgwqUgJHtwcm9kdWN0LnByaWNlfSBgLFxuICAgICAgRWxlbWVudENyZWF0b3IuY3JlYXRlKCdzcGFuJywgJ3F1YW50aXR5JywgYCgke3Byb2R1Y3QucXVhbnRpdHl9IHBpZWNlcylgKVxuICAgIF0sICdwcmljZScpLFxuICBdKTtcbn0iLCJpbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSBcIi4vRWxlbWVudENyZWF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdoZWFkZXInLCAncHJpbWFyeS1oZWFkZXInLCBjcmVhdGVDb250ZW50KCkpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2NvbnRlbnQtd3JhcCBmbGV4LWhvcml6b250YWwtY2VudGVyJywgW1xuICAgIGNyZWF0ZUxvZ28oKSxcbiAgICBjcmVhdGVUaXRsZSgpLFxuICBdKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9nbygpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnZGl2JywgJ2xvZ28nKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoKSB7XG4gIHJldHVybiBFbGVtZW50Q3JlYXRvci5jcmVhdGUoJ3AnLCAndGl0bGUnLCAnU3VzaGkgU3VzaGknKTtcbn0iLCJpbXBvcnQgRWxlbWVudENyZWF0b3IgZnJvbSBcIi4vRWxlbWVudENyZWF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGN1cnJlbnRUYWIsIGJ1dHRvbk9uQ2xpY2tMaXN0ZW5lcnMpIHtcbiAgY29uc3QgcHJpbWFyeU5hdiA9IEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnbmF2JywgJ3ByaW1hcnktbmF2JywgY3JlYXRlQ29udGVudCgpKTtcbiAgcHJpbWFyeU5hdi5xdWVyeVNlbGVjdG9yKGAuJHtjdXJyZW50VGFifWApLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblxuICBPYmplY3QuZW50cmllcyhidXR0b25PbkNsaWNrTGlzdGVuZXJzKS5mb3JFYWNoKChbYnV0dG9uLCBsaXN0ZW5lcl0pID0+IHtcbiAgICBwcmltYXJ5TmF2LnF1ZXJ5U2VsZWN0b3IoYC4ke2J1dHRvbn1gKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICBwcmltYXJ5TmF2LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jdXJyZW50JykuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgbGlzdGVuZXIoZSk7XG4gICAgfSk7XG4gIH0pO1xuICBcbiAgcmV0dXJuIHByaW1hcnlOYXY7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KCkge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCd1bCcsICdjb250ZW50LXdyYXAnLCBbXG4gICAgY3JlYXRlTmF2SXRlbShjcmVhdGVOYXZJdGVtQnV0dG9uKCdob21lJywgJ0hvbWUnKSksXG4gICAgY3JlYXRlTmF2SXRlbShjcmVhdGVOYXZJdGVtQnV0dG9uKCdtZW51JywgJ01lbnUnKSksXG4gICAgY3JlYXRlTmF2SXRlbShjcmVhdGVOYXZJdGVtQnV0dG9uKCdjb250YWN0JywgJ0NvbnRhY3QnKSksXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZJdGVtKGJ1dHRvbikge1xuICByZXR1cm4gRWxlbWVudENyZWF0b3IuY3JlYXRlKCdsaScsICcnLCBidXR0b24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZJdGVtQnV0dG9uKGNsYXNzTmFtZSwgdGV4dENvbnRlbnQpIHtcbiAgcmV0dXJuIEVsZW1lbnRDcmVhdG9yLmNyZWF0ZSgnYnV0dG9uJywgY2xhc3NOYW1lLCB0ZXh0Q29udGVudCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJidW5kbGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IENvbnRlbnRMb2FkZXIgZnJvbSAnLi9zY3JpcHRzL0NvbnRlbnRMb2FkZXInO1xuaW1wb3J0IGxvYWRQcmltYXJ5SGVhZGVyIGZyb20gJy4vc2NyaXB0cy9sb2FkUHJpbWFyeUhlYWRlcic7XG5pbXBvcnQgbG9hZFByaW1hcnlOYXYgZnJvbSAnLi9zY3JpcHRzL2xvYWRQcmltYXJ5TmF2JztcbmltcG9ydCBsb2FkRm9vdGVyIGZyb20gJy4vc2NyaXB0cy9sb2FkRm9vdGVyJztcbmltcG9ydCBsb2FkSG9tZUNvbnRlbnRzIGZyb20gJy4vc2NyaXB0cy9sb2FkSG9tZUNvbnRlbnRzJztcbmltcG9ydCBsb2FkTWVudUNvbnRlbnRzIGZyb20gJy4vc2NyaXB0cy9sb2FkTWVudUNvbnRlbnRzJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBsb2FkQ29udGFjdENvbnRlbnRzIGZyb20gJy4vc2NyaXB0cy9sb2FkQ29udGFjdENvbnRlbnRzJztcblxuQ29udGVudExvYWRlci5sb2FkRmlyc3QobG9hZFByaW1hcnlIZWFkZXIoKSwgJ3ByaW1hcnktaGVhZGVyJyk7XG5Db250ZW50TG9hZGVyLmxvYWQobG9hZEZvb3RlcigpLCAnZm9vdGVyJyk7XG5cbkNvbnRlbnRMb2FkZXIubG9hZEFmdGVyKGxvYWRQcmltYXJ5TmF2KCdob21lJywge1xuICBob21lOiAoKSA9PiB7XG4gICAgQ29udGVudExvYWRlci5yZW1vdmVGcm9tKCdwcmltYXJ5LW5hdicsICdmb290ZXInLCB7IGluY2x1ZGVGcm9tOiBmYWxzZSB9KTtcbiAgICBDb250ZW50TG9hZGVyLmxvYWRNdWx0aXBsZUFmdGVyKGxvYWRIb21lQ29udGVudHMoKSwgJ3ByaW1hcnktbmF2Jyk7XG4gIH0sXG4gIG1lbnU6ICgpID0+IHtcbiAgICBDb250ZW50TG9hZGVyLnJlbW92ZUZyb20oJ3ByaW1hcnktbmF2JywgJ2Zvb3RlcicsIHsgaW5jbHVkZUZyb206IGZhbHNlIH0pO1xuICAgIENvbnRlbnRMb2FkZXIubG9hZE11bHRpcGxlQWZ0ZXIobG9hZE1lbnVDb250ZW50cygpLCAncHJpbWFyeS1uYXYnKTtcbiAgfSxcbiAgY29udGFjdDogKCkgPT4ge1xuICAgIENvbnRlbnRMb2FkZXIucmVtb3ZlRnJvbSgncHJpbWFyeS1uYXYnLCAnZm9vdGVyJywgeyBpbmNsdWRlRnJvbTogZmFsc2UgfSk7XG4gICAgQ29udGVudExvYWRlci5sb2FkTXVsdGlwbGVBZnRlcihsb2FkQ29udGFjdENvbnRlbnRzKCksICdwcmltYXJ5LW5hdicpO1xuICB9LFxufSksICdwcmltYXJ5LWhlYWRlcicsICdwcmltYXJ5LW5hdicpO1xuXG5Db250ZW50TG9hZGVyLmxvYWRNdWx0aXBsZUFmdGVyKGxvYWRIb21lQ29udGVudHMoKSwgJ3ByaW1hcnktbmF2Jyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=