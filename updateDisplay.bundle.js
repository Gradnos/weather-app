(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["updateDisplay"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Raleway-VariableFont_wght.ttf */ "./src/Raleway-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    \n    --before-gradient: black;\n    --fontcol: white;\n    --degreePreference : \"C\";\n}\n\n*{\n    color : var(--fontcol);\n    margin: 0;\n    font-family: MyFont;\n}\n\nhtml{\n    position: relative;\n    margin: 0;\n    padding: 0;\n    z-index: 1;\n}\n\nbody{\n    position: relative;\n    margin: 0;\n    padding: 0;\n    z-index: 1;\n    width: 100%;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n\n}\n\nmain{\n    display: flex;\n    flex:1;\n    justify-content: space-between;\n    padding: 5vw;\n}\n\n.currentW-cont{\n    font-size: 1rem;\n    align-self: flex-start;\n}\n\n.one-line{\n    display: flex;\n    align-items: center;\n\n}\n\n.current-weather-icon{\n    position: relative;\n    top:1em;\n    left: -1.5em;\n    height: 10em;\n    display: inline;\n    fill: white;\n}\n\n.degree-preference-button div{\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    background-color: rgba(255, 255, 255, 0.4);\n    width: 2rem;\n    height: 2rem;\n    border-radius: 2rem;\n    left: 0.2rem;\n    transition-property: left;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-out;\n}\n\n.degree-preference-button div.right-toggle{\n    left: calc(100% - 2.2rem);\n}\n\n.degree-preference-button{\n    width: 4rem;\n    position: relative;\n    border: 0.1rem solid white;\n    opacity: 0.5;\n    display: flex;\n    align-items: center;\n    height: 2.5rem;\n    border-radius: 2rem;\n    background: none;\n    outline: transparent;\n    margin: 0px 1rem 0px 0px;\n    transition: opacity 0.2s linear;\n}\n\n.degrees::after{\n    content: var(--degreePreference);\n    font-weight: 600;\n    position: relative;\n    font-size: 0.3em;\n    right: 0.7em;\n    bottom: -0.1em;\n}\n\n.city-name{\n    font-weight: 200;\n    font-size: 1.5em;\n}\n\n\n.current-weather-degree{\n    font-size: 10em;\n    display: inline;\n}\n\n.current-condition{\n    font-size: 2em;\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    padding: 0.4rem;\n}\n\na{\n    text-decoration: none;\n    font-weight: 500;\n    border-radius: 50px;\n    background-color: rgba(0, 0, 0, 0.1);\n    border: 0.1rem solid rgba(255, 255, 255, 0.5);\n    padding: 2px 10px;\n    transition-property: background-color, border;\n    transition-duration: 0.3s;\n}\n\na:hover{\n    background-color: rgba(0, 0, 0, 0.4);\n    border: 0.1rem solid rgba(255, 255, 255, 0);\n}\n\na:focus{\n    outline: 1px solid rgba(255, 255, 255, 0.8);\n    outline-offset: 3px;\n}\n\nnav{\n    padding: 1rem;\n    display: flex;\n    gap:1rem;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\nh1{\n    font-size: 3rem;\n    margin: 0 1rem 0 0;\n}\n\nlabel{\n    position: relative;\n    display: flex;\n    align-items: center;\n}\n\ninput{\n    padding: 0.1rem 1rem;\n    font-size: 1rem;\n    font-weight: 300;\n    outline: transparent;\n    outline-offset: 0px;\n    height: 2rem;\n    border-radius: 4rem;\n    border: 0.1rem solid rgba(255, 255, 255, 0.5);\n    background-color: rgba(0, 0, 0, 0.1);\n    transition: all 0.2s linear;\n}\n\n\n\ninput::placeholder{\n    color: var(--fontcol);\n    opacity: 0.7;\n}\n\ninput:hover{\n    border: 0.1rem solid rgba(255, 255, 255, 0.8);\n}\n\ninput:focus{\n    border: 0.1rem solid rgba(255, 255, 255, 0.8);\n    outline: 1px solid rgba(255, 255, 255, 0.3);\n    outline-offset: 10px;\n}\n\n\n.search-button svg{\n    height: 1.5rem;\n    position: absolute;\n    fill: var(--fontcol);\n    left: 0.45rem;\n    top: 0.45rem;\n}\n\n.search-button{\n    position: relative;\n    border: 0.1rem solid white;\n    opacity: 0.5;\n    display: flex;\n    align-items: center;\n    width: 2.5rem;\n    height: 2.5rem;\n    border-radius: 2rem;\n    background: none;\n    outline: transparent;\n    margin: 0px 1rem;\n    transition: opacity 0.2s linear;\n}\n\n.search-error{\n    opacity: 0;\n    position: absolute;\n    left: 1rem;\n    padding: 2px 5px;\n    top: -0.2rem;\n    transform: translate(0, 0%);\n    background-color: rgba(255, 37, 37, 0.795);\n    transition: opacity 0.3s linear;\n    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1)\n}\n\n.search-error.visible{\n    opacity: 1;\n    transform: translate(0, -100%);\n}\n\nbutton:hover{\n    cursor: pointer;\n    opacity: 1;\n}\n\nbutton:focus{\n    outline: 1px solid rgba(255, 255, 255, 0.8);\n    outline-offset: 10px;\n}\n\n\n.bodyOverlayGradient {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    content: \"\";\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: var(--before-gradient);\n    z-index: -1;\n    transition: opacity 2s linear;\n    opacity: 0;\n}\n\n.bodyOverlayGradient.transitioning{\n    opacity: 1;\n}\n\n.right{\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n    align-self: stretch;\n}\n\n.details-buttons{\n    box-sizing: border-box;\n    display: flex;\n    align-self: flex-start;\n    padding: 0.5rem;\n}\n\n.details-buttons button{\n    border: 0.0rem solid rgba(255, 255, 255, 0.0);\n    opacity: 0.8;\n    display: flex;\n    font-weight: 700;\n    align-items: center;\n    border-radius: 2rem;\n    background-color: rgba(255, 255, 255, 0.3);\n    outline: transparent;\n    margin: 0px 0.2rem;\n    padding: 0.2rem 0.5rem;\n    transition: opacity 0.2s linear;\n    transition: background-color 0.2s linear;\n}\n\n.details-buttons button:hover{\n    background-color: rgba(0, 0, 0, 0.1);\n    opacity: 1;\n}\n\n.details-buttons button.selected{\n    opacity: 1;\n    border: 0.1rem solid rgba(255, 255, 255, 1);\n}\n\n\n.details-background{\n    box-sizing: border-box;\n    border-radius: 1rem;\n    padding: 1rem;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.3);\n}\n\n\n.details-cont{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));\n    gap: 1rem;\n}\n\n.weather-cont{\n    position: relative;\n    overflow-wrap:break-word;\n    height: 5rem;\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 1rem;\n    background-color: rgba(255, 255, 255, 0.2);\n    --hover-opacity:0;\n    transition: var(--hover-opacity) 0.3s linear;\n}\n\n.weather-cont:hover{\n    --hover-opacity:1;\n}\n\n.werther-info{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.small-weather-icon{\n    width: 3rem;\n    height: 3rem;\n}\n\n.time-small{\n    font-size: 0.9rem;\n    font-weight: 600;\n}\n\n.degrees-small{\n    font-weight: 500;\n    font-size: 0.9rem;\n    opacity: 0.8;\n}\n\n.hover-condition{\n    z-index: 2;\n    font-weight: 1000;\n    pointer-events: none;\n    position: absolute;\n    border-radius: 1rem;\n    bottom: -0.2rem;\n    transform: translate(50%, 100%);\n    text-align: center;\n    text-shadow: 0px 0px 9px rgba(0, 0, 0, 0.3);\n    background-color: rgba(255, 255, 255, 0.651);\n    padding: 0.5rem;\n    opacity: var(--hover-opacity);\n\n    right: 50%;\n\n\n}\n\n@font-face {\n    font-family: MyFont;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n\n@media only screen and (max-width: 1250px) {\n    \n    html{\n        font-size: 0.8rem;\n    }\n    .currentW-cont{\n        font-size: 0.9rem;\n    }\n    nav{\n        justify-content: center;\n    }\n\n    main{\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-evenly;\n        gap: 2rem;\n    }\n    .right{\n        width: 100%;\n    }\n}\n\n@media only screen and (max-width: 400px) {\n    .currentW-cont{\n        font-size: 0.8rem;\n    }\n    .current-weather-degree{\n        font-size: 7em;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    \n    --before-gradient: black;\n    --fontcol: white;\n    --degreePreference : \"C\";\n}\n\n*{\n    color : var(--fontcol);\n    margin: 0;\n    font-family: MyFont;\n}\n\nhtml{\n    position: relative;\n    margin: 0;\n    padding: 0;\n    z-index: 1;\n}\n\nbody{\n    position: relative;\n    margin: 0;\n    padding: 0;\n    z-index: 1;\n    width: 100%;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n\n}\n\nmain{\n    display: flex;\n    flex:1;\n    justify-content: space-between;\n    padding: 5vw;\n}\n\n.currentW-cont{\n    font-size: 1rem;\n    align-self: flex-start;\n}\n\n.one-line{\n    display: flex;\n    align-items: center;\n\n}\n\n.current-weather-icon{\n    position: relative;\n    top:1em;\n    left: -1.5em;\n    height: 10em;\n    display: inline;\n    fill: white;\n}\n\n.degree-preference-button div{\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    background-color: rgba(255, 255, 255, 0.4);\n    width: 2rem;\n    height: 2rem;\n    border-radius: 2rem;\n    left: 0.2rem;\n    transition-property: left;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-out;\n}\n\n.degree-preference-button div.right-toggle{\n    left: calc(100% - 2.2rem);\n}\n\n.degree-preference-button{\n    width: 4rem;\n    position: relative;\n    border: 0.1rem solid white;\n    opacity: 0.5;\n    display: flex;\n    align-items: center;\n    height: 2.5rem;\n    border-radius: 2rem;\n    background: none;\n    outline: transparent;\n    margin: 0px 1rem 0px 0px;\n    transition: opacity 0.2s linear;\n}\n\n.degrees::after{\n    content: var(--degreePreference);\n    font-weight: 600;\n    position: relative;\n    font-size: 0.3em;\n    right: 0.7em;\n    bottom: -0.1em;\n}\n\n.city-name{\n    font-weight: 200;\n    font-size: 1.5em;\n}\n\n\n.current-weather-degree{\n    font-size: 10em;\n    display: inline;\n}\n\n.current-condition{\n    font-size: 2em;\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    padding: 0.4rem;\n}\n\na{\n    text-decoration: none;\n    font-weight: 500;\n    border-radius: 50px;\n    background-color: rgba(0, 0, 0, 0.1);\n    border: 0.1rem solid rgba(255, 255, 255, 0.5);\n    padding: 2px 10px;\n    transition-property: background-color, border;\n    transition-duration: 0.3s;\n}\n\na:hover{\n    background-color: rgba(0, 0, 0, 0.4);\n    border: 0.1rem solid rgba(255, 255, 255, 0);\n}\n\na:focus{\n    outline: 1px solid rgba(255, 255, 255, 0.8);\n    outline-offset: 3px;\n}\n\nnav{\n    padding: 1rem;\n    display: flex;\n    gap:1rem;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\nh1{\n    font-size: 3rem;\n    margin: 0 1rem 0 0;\n}\n\nlabel{\n    position: relative;\n    display: flex;\n    align-items: center;\n}\n\ninput{\n    padding: 0.1rem 1rem;\n    font-size: 1rem;\n    font-weight: 300;\n    outline: transparent;\n    outline-offset: 0px;\n    height: 2rem;\n    border-radius: 4rem;\n    border: 0.1rem solid rgba(255, 255, 255, 0.5);\n    background-color: rgba(0, 0, 0, 0.1);\n    transition: all 0.2s linear;\n}\n\n\n\ninput::placeholder{\n    color: var(--fontcol);\n    opacity: 0.7;\n}\n\ninput:hover{\n    border: 0.1rem solid rgba(255, 255, 255, 0.8);\n}\n\ninput:focus{\n    border: 0.1rem solid rgba(255, 255, 255, 0.8);\n    outline: 1px solid rgba(255, 255, 255, 0.3);\n    outline-offset: 10px;\n}\n\n\n.search-button svg{\n    height: 1.5rem;\n    position: absolute;\n    fill: var(--fontcol);\n    left: 0.45rem;\n    top: 0.45rem;\n}\n\n.search-button{\n    position: relative;\n    border: 0.1rem solid white;\n    opacity: 0.5;\n    display: flex;\n    align-items: center;\n    width: 2.5rem;\n    height: 2.5rem;\n    border-radius: 2rem;\n    background: none;\n    outline: transparent;\n    margin: 0px 1rem;\n    transition: opacity 0.2s linear;\n}\n\n.search-error{\n    opacity: 0;\n    position: absolute;\n    left: 1rem;\n    padding: 2px 5px;\n    top: -0.2rem;\n    transform: translate(0, 0%);\n    background-color: rgba(255, 37, 37, 0.795);\n    transition: opacity 0.3s linear;\n    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1)\n}\n\n.search-error.visible{\n    opacity: 1;\n    transform: translate(0, -100%);\n}\n\nbutton:hover{\n    cursor: pointer;\n    opacity: 1;\n}\n\nbutton:focus{\n    outline: 1px solid rgba(255, 255, 255, 0.8);\n    outline-offset: 10px;\n}\n\n\n.bodyOverlayGradient {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    content: \"\";\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: var(--before-gradient);\n    z-index: -1;\n    transition: opacity 2s linear;\n    opacity: 0;\n}\n\n.bodyOverlayGradient.transitioning{\n    opacity: 1;\n}\n\n.right{\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n    align-self: stretch;\n}\n\n.details-buttons{\n    box-sizing: border-box;\n    display: flex;\n    align-self: flex-start;\n    padding: 0.5rem;\n}\n\n.details-buttons button{\n    border: 0.0rem solid rgba(255, 255, 255, 0.0);\n    opacity: 0.8;\n    display: flex;\n    font-weight: 700;\n    align-items: center;\n    border-radius: 2rem;\n    background-color: rgba(255, 255, 255, 0.3);\n    outline: transparent;\n    margin: 0px 0.2rem;\n    padding: 0.2rem 0.5rem;\n    transition: opacity 0.2s linear;\n    transition: background-color 0.2s linear;\n}\n\n.details-buttons button:hover{\n    background-color: rgba(0, 0, 0, 0.1);\n    opacity: 1;\n}\n\n.details-buttons button.selected{\n    opacity: 1;\n    border: 0.1rem solid rgba(255, 255, 255, 1);\n}\n\n\n.details-background{\n    box-sizing: border-box;\n    border-radius: 1rem;\n    padding: 1rem;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.3);\n}\n\n\n.details-cont{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));\n    gap: 1rem;\n}\n\n.weather-cont{\n    position: relative;\n    overflow-wrap:break-word;\n    height: 5rem;\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 1rem;\n    background-color: rgba(255, 255, 255, 0.2);\n    --hover-opacity:0;\n    transition: var(--hover-opacity) 0.3s linear;\n}\n\n.weather-cont:hover{\n    --hover-opacity:1;\n}\n\n.werther-info{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.small-weather-icon{\n    width: 3rem;\n    height: 3rem;\n}\n\n.time-small{\n    font-size: 0.9rem;\n    font-weight: 600;\n}\n\n.degrees-small{\n    font-weight: 500;\n    font-size: 0.9rem;\n    opacity: 0.8;\n}\n\n.hover-condition{\n    z-index: 2;\n    font-weight: 1000;\n    pointer-events: none;\n    position: absolute;\n    border-radius: 1rem;\n    bottom: -0.2rem;\n    transform: translate(50%, 100%);\n    text-align: center;\n    text-shadow: 0px 0px 9px rgba(0, 0, 0, 0.3);\n    background-color: rgba(255, 255, 255, 0.651);\n    padding: 0.5rem;\n    opacity: var(--hover-opacity);\n\n    right: 50%;\n\n\n}\n\n@font-face {\n    font-family: MyFont;\n    src: url(./Raleway-VariableFont_wght.ttf);\n}\n\n\n@media only screen and (max-width: 1250px) {\n    \n    html{\n        font-size: 0.8rem;\n    }\n    .currentW-cont{\n        font-size: 0.9rem;\n    }\n    nav{\n        justify-content: center;\n    }\n\n    main{\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-evenly;\n        gap: 2rem;\n    }\n    .right{\n        width: 100%;\n    }\n}\n\n@media only screen and (max-width: 400px) {\n    .currentW-cont{\n        font-size: 0.8rem;\n    }\n    .current-weather-degree{\n        font-size: 7em;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/API-keys.js":
/*!*************************!*\
  !*** ./src/API-keys.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEY": () => (/* binding */ KEY)
/* harmony export */ });
const KEY = '8c2b96f30df0493faba75148232503';

/***/ }),

/***/ "./src/iconGetter.js":
/*!***************************!*\
  !*** ./src/iconGetter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "day": () => (/* binding */ day),
/* harmony export */   "night": () => (/* binding */ night)
/* harmony export */ });
const nightIconsContext = __webpack_require__("./src/icons/night sync recursive svg$");

const night = nightIconsContext.keys().reduce( (night, file) => {
	const SVG = nightIconsContext(file);
	const label = file.slice(2, -4); // strip './' and '.svg'
	night[label] = SVG;
        return night;
}, {});

const dayIconsContext = __webpack_require__("./src/icons/day sync recursive svg$");
 
const day = dayIconsContext.keys().reduce( (day, file) => {
	const SVG = dayIconsContext(file);
	const label = file.slice(2, -4); // strip './' and '.svg'
	day[label] = SVG;
        return day;
}, {});


/***/ }),

/***/ "./src/icons/day sync recursive svg$":
/*!**********************************!*\
  !*** ./src/icons/day/ sync svg$ ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Blizzard.svg": "./src/icons/day/Blizzard.svg",
	"./Blowing-snow.svg": "./src/icons/day/Blowing-snow.svg",
	"./Cloudy.svg": "./src/icons/day/Cloudy.svg",
	"./Fog.svg": "./src/icons/day/Fog.svg",
	"./Freezing-drizzle.svg": "./src/icons/day/Freezing-drizzle.svg",
	"./Freezing-fog.svg": "./src/icons/day/Freezing-fog.svg",
	"./Heavy-freezing-drizzle.svg": "./src/icons/day/Heavy-freezing-drizzle.svg",
	"./Heavy-rain-at-times.svg": "./src/icons/day/Heavy-rain-at-times.svg",
	"./Heavy-rain.svg": "./src/icons/day/Heavy-rain.svg",
	"./Heavy-snow.svg": "./src/icons/day/Heavy-snow.svg",
	"./Ice-pellets.svg": "./src/icons/day/Ice-pellets.svg",
	"./Light-drizzle.svg": "./src/icons/day/Light-drizzle.svg",
	"./Light-freezing-rain.svg": "./src/icons/day/Light-freezing-rain.svg",
	"./Light-rain-shower.svg": "./src/icons/day/Light-rain-shower.svg",
	"./Light-rain.svg": "./src/icons/day/Light-rain.svg",
	"./Light-showers-of-ice-pellets.svg": "./src/icons/day/Light-showers-of-ice-pellets.svg",
	"./Light-sleet-showers.svg": "./src/icons/day/Light-sleet-showers.svg",
	"./Light-sleet.svg": "./src/icons/day/Light-sleet.svg",
	"./Light-snow-showers.svg": "./src/icons/day/Light-snow-showers.svg",
	"./Light-snow.svg": "./src/icons/day/Light-snow.svg",
	"./Mist.svg": "./src/icons/day/Mist.svg",
	"./Moderate-or-heavy-freezing-rain.svg": "./src/icons/day/Moderate-or-heavy-freezing-rain.svg",
	"./Moderate-or-heavy-rain-shower.svg": "./src/icons/day/Moderate-or-heavy-rain-shower.svg",
	"./Moderate-or-heavy-rain-with-thunder.svg": "./src/icons/day/Moderate-or-heavy-rain-with-thunder.svg",
	"./Moderate-or-heavy-showers-of-ice-pellets.svg": "./src/icons/day/Moderate-or-heavy-showers-of-ice-pellets.svg",
	"./Moderate-or-heavy-sleet-showers.svg": "./src/icons/day/Moderate-or-heavy-sleet-showers.svg",
	"./Moderate-or-heavy-sleet.svg": "./src/icons/day/Moderate-or-heavy-sleet.svg",
	"./Moderate-or-heavy-snow-showers.svg": "./src/icons/day/Moderate-or-heavy-snow-showers.svg",
	"./Moderate-or-heavy-snow-with-thunder.svg": "./src/icons/day/Moderate-or-heavy-snow-with-thunder.svg",
	"./Moderate-rain-at-times.svg": "./src/icons/day/Moderate-rain-at-times.svg",
	"./Moderate-rain.svg": "./src/icons/day/Moderate-rain.svg",
	"./Moderate-snow.svg": "./src/icons/day/Moderate-snow.svg",
	"./Overcast.svg": "./src/icons/day/Overcast.svg",
	"./Partly-cloudy.svg": "./src/icons/day/Partly-cloudy.svg",
	"./Patchy-freezing-drizzle-possible.svg": "./src/icons/day/Patchy-freezing-drizzle-possible.svg",
	"./Patchy-heavy-snow.svg": "./src/icons/day/Patchy-heavy-snow.svg",
	"./Patchy-light-drizzle.svg": "./src/icons/day/Patchy-light-drizzle.svg",
	"./Patchy-light-rain-with-thunder.svg": "./src/icons/day/Patchy-light-rain-with-thunder.svg",
	"./Patchy-light-rain.svg": "./src/icons/day/Patchy-light-rain.svg",
	"./Patchy-light-snow-with-thunder.svg": "./src/icons/day/Patchy-light-snow-with-thunder.svg",
	"./Patchy-light-snow.svg": "./src/icons/day/Patchy-light-snow.svg",
	"./Patchy-moderate-snow.svg": "./src/icons/day/Patchy-moderate-snow.svg",
	"./Patchy-rain-possible.svg": "./src/icons/day/Patchy-rain-possible.svg",
	"./Patchy-sleet-possible.svg": "./src/icons/day/Patchy-sleet-possible.svg",
	"./Sunny.svg": "./src/icons/day/Sunny.svg",
	"./Thundery-outbreaks-possible.svg": "./src/icons/day/Thundery-outbreaks-possible.svg",
	"./Torrential-rain-shower.svg": "./src/icons/day/Torrential-rain-shower.svg",
	"./partly-cloudy-day-drizzle.svg": "./src/icons/day/partly-cloudy-day-drizzle.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/icons/day sync recursive svg$";

/***/ }),

/***/ "./src/icons/night sync recursive svg$":
/*!************************************!*\
  !*** ./src/icons/night/ sync svg$ ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Blizzard.svg": "./src/icons/night/Blizzard.svg",
	"./Blowing-snow.svg": "./src/icons/night/Blowing-snow.svg",
	"./Clear.svg": "./src/icons/night/Clear.svg",
	"./Cloudy.svg": "./src/icons/night/Cloudy.svg",
	"./Fog.svg": "./src/icons/night/Fog.svg",
	"./Freezing-drizzle.svg": "./src/icons/night/Freezing-drizzle.svg",
	"./Freezing-fog.svg": "./src/icons/night/Freezing-fog.svg",
	"./Heavy-freezing-drizzle.svg": "./src/icons/night/Heavy-freezing-drizzle.svg",
	"./Heavy-rain-at-times.svg": "./src/icons/night/Heavy-rain-at-times.svg",
	"./Heavy-rain.svg": "./src/icons/night/Heavy-rain.svg",
	"./Heavy-snow.svg": "./src/icons/night/Heavy-snow.svg",
	"./Ice-pellets.svg": "./src/icons/night/Ice-pellets.svg",
	"./Light-drizzle.svg": "./src/icons/night/Light-drizzle.svg",
	"./Light-freezing-rain.svg": "./src/icons/night/Light-freezing-rain.svg",
	"./Light-rain-shower.svg": "./src/icons/night/Light-rain-shower.svg",
	"./Light-rain.svg": "./src/icons/night/Light-rain.svg",
	"./Light-showers-of-ice-pellets.svg": "./src/icons/night/Light-showers-of-ice-pellets.svg",
	"./Light-sleet-showers.svg": "./src/icons/night/Light-sleet-showers.svg",
	"./Light-sleet.svg": "./src/icons/night/Light-sleet.svg",
	"./Light-snow-showers.svg": "./src/icons/night/Light-snow-showers.svg",
	"./Light-snow.svg": "./src/icons/night/Light-snow.svg",
	"./Mist.svg": "./src/icons/night/Mist.svg",
	"./Moderate-or-heavy-freezing-rain.svg": "./src/icons/night/Moderate-or-heavy-freezing-rain.svg",
	"./Moderate-or-heavy-rain-shower.svg": "./src/icons/night/Moderate-or-heavy-rain-shower.svg",
	"./Moderate-or-heavy-rain-with-thunder.svg": "./src/icons/night/Moderate-or-heavy-rain-with-thunder.svg",
	"./Moderate-or-heavy-showers-of-ice-pellets.svg": "./src/icons/night/Moderate-or-heavy-showers-of-ice-pellets.svg",
	"./Moderate-or-heavy-sleet-showers.svg": "./src/icons/night/Moderate-or-heavy-sleet-showers.svg",
	"./Moderate-or-heavy-sleet.svg": "./src/icons/night/Moderate-or-heavy-sleet.svg",
	"./Moderate-or-heavy-snow-showers.svg": "./src/icons/night/Moderate-or-heavy-snow-showers.svg",
	"./Moderate-or-heavy-snow-with-thunder.svg": "./src/icons/night/Moderate-or-heavy-snow-with-thunder.svg",
	"./Moderate-rain-at-times.svg": "./src/icons/night/Moderate-rain-at-times.svg",
	"./Moderate-rain.svg": "./src/icons/night/Moderate-rain.svg",
	"./Moderate-snow.svg": "./src/icons/night/Moderate-snow.svg",
	"./Overcast.svg": "./src/icons/night/Overcast.svg",
	"./Partly-cloudy.svg": "./src/icons/night/Partly-cloudy.svg",
	"./Patchy-freezing-drizzle-possible.svg": "./src/icons/night/Patchy-freezing-drizzle-possible.svg",
	"./Patchy-heavy-snow.svg": "./src/icons/night/Patchy-heavy-snow.svg",
	"./Patchy-light-drizzle.svg": "./src/icons/night/Patchy-light-drizzle.svg",
	"./Patchy-light-rain-with-thunder.svg": "./src/icons/night/Patchy-light-rain-with-thunder.svg",
	"./Patchy-light-rain.svg": "./src/icons/night/Patchy-light-rain.svg",
	"./Patchy-light-snow-with-thunder.svg": "./src/icons/night/Patchy-light-snow-with-thunder.svg",
	"./Patchy-light-snow.svg": "./src/icons/night/Patchy-light-snow.svg",
	"./Patchy-moderate-snow.svg": "./src/icons/night/Patchy-moderate-snow.svg",
	"./Patchy-rain-possible.svg": "./src/icons/night/Patchy-rain-possible.svg",
	"./Patchy-sleet-possible.svg": "./src/icons/night/Patchy-sleet-possible.svg",
	"./Thundery-outbreaks-possible.svg": "./src/icons/night/Thundery-outbreaks-possible.svg",
	"./Torrential-rain-shower.svg": "./src/icons/night/Torrential-rain-shower.svg",
	"./partly-cloudy-day-drizzle.svg": "./src/icons/night/partly-cloudy-day-drizzle.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/icons/night sync recursive svg$";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentCity": () => (/* binding */ currentCity),
/* harmony export */   "moreInformationType": () => (/* binding */ moreInformationType),
/* harmony export */   "prefersTempC": () => (/* binding */ prefersTempC),
/* harmony export */   "setCurrentCity": () => (/* binding */ setCurrentCity),
/* harmony export */   "setMoreInformationType": () => (/* binding */ setMoreInformationType),
/* harmony export */   "setPrefersTempC": () => (/* binding */ setPrefersTempC)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _weatherFetcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherFetcher.js */ "./src/weatherFetcher.js");
/* harmony import */ var _updateDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateDisplay */ "./src/updateDisplay.js");








let r = document.querySelector(':root');


let toggleDom = document.querySelector(".preference-toggle"); 


let currentCity = "tbilisi"; 
function setCurrentCity(city){
    currentCity = city;
}
 


let prefersTempC = true;
function setPrefersTempC(boolean){
    prefersTempC = boolean;

    if(prefersTempC === true){
        toggleDom.classList.remove("right-toggle");
        toggleDom.innerText = "C";
        r.style.setProperty("--degreePreference", '"C"');
    }

    if(prefersTempC === false){
        toggleDom.classList.add("right-toggle");
        toggleDom.innerText = "F";
        r.style.setProperty("--degreePreference", '"F"');
    }

    (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_3__.updateDisplay)(currentCity);
}


let moreInformationType = "hourly";
function setMoreInformationType(string){
    moreInformationType = string;
}

let moreInformationButtons = Array.from(document.querySelector(".details-buttons").children);




moreInformationButtons.forEach(button => {
    button.addEventListener("click" , ()=>{
        button.classList.add("selected");
        let currentType = button.dataset.type;
        setMoreInformationType(currentType);
        (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_3__.updateDisplay)(currentCity);


        moreInformationButtons.forEach(btn =>{
            let btnType = btn.dataset.type;
            if(currentType !== btnType){
                btn.classList.remove("selected");
            }
        });
    })
});



let searchButton = document.querySelector(".search-button");
let searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        searchButton.click();
    }
});
searchButton.addEventListener("click", ()=>{
    let cityName = searchInput.value;
    if(cityName === "") return;
    (0,_updateDisplay__WEBPACK_IMPORTED_MODULE_3__.updateDisplay)(cityName);
});



let changePrefersTempCButton = document.querySelector(".degree-preference-button");
changePrefersTempCButton.addEventListener("click", ()=>{
    setPrefersTempC(!prefersTempC);
});


(0,_updateDisplay__WEBPACK_IMPORTED_MODULE_3__.updateDisplay)("tbilisi");



/***/ }),

/***/ "./src/updateDisplay.js":
/*!******************************!*\
  !*** ./src/updateDisplay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateDetails": () => (/* binding */ populateDetails),
/* harmony export */   "updateDisplay": () => (/* binding */ updateDisplay)
/* harmony export */ });
/* harmony import */ var _weatherFetcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherFetcher.js */ "./src/weatherFetcher.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _iconGetter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconGetter.js */ "./src/iconGetter.js");
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");






let weatherContainer = document.querySelector(".currentW-cont");
let cityNameDom = weatherContainer.querySelector(".city-name");
let currentTimeDom = weatherContainer.querySelector(".current-time");
let currentIconDom = weatherContainer.querySelector(".current-weather-icon");
let currentDegreeDom = weatherContainer.querySelector(".current-weather-degree");
let currentConditionDom = weatherContainer.querySelector(".current-condition");
let moreInformationDom = document.querySelector(".details-cont");
let searchError = document.querySelector(".search-error");


async function updateDisplay(cityName){



    let forecastResponse = await _weatherFetcher_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherForecast(cityName);

    let NAME = cityName;

    if(forecastResponse.ok){
        console.log("setcity")
        ;(0,___WEBPACK_IMPORTED_MODULE_1__.setCurrentCity)(NAME);
        searchError.classList.remove("visible");

        let data = forecastResponse.data;
        let location = data.location;
        let current = data.current;


        
        

        let condition = current.condition.text;

        let cityName = location.name;
        let localTime = location.localtime.split(" ")[1];




        let astro = data.forecast.forecastday[0].astro;
        let sunsetTime = Number(astro.sunset.split(" ")[0].split(":")[0]);
        if(astro.sunset.split(" ")[1] === "PM") sunsetTime+=12;
        

        let sunriseTime = Number(astro.sunrise.split(" ")[0].split(":")[0]);
        if(astro.sunrise.split(" ")[1] === "PM") sunriseTime+=12;

        console.log(sunsetTime);
        console.log(localTime.split(":")[0]);

        
        console.log(astro);
        if(current.is_day === 1) (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.transitionBodyBackground)(_utility_js__WEBPACK_IMPORTED_MODULE_3__.gradients.middayGradient);
        else if(Number(localTime.split(":")[0]) > sunsetTime + 2  || Number(localTime.split(":")[0]) < sunriseTime - 2) (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.transitionBodyBackground)(_utility_js__WEBPACK_IMPORTED_MODULE_3__.gradients.nightGradient);
        else (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.transitionBodyBackground)(_utility_js__WEBPACK_IMPORTED_MODULE_3__.gradients.eveningGradient);
        



        let tempC = Math.round(current.temp_c);
        let tempF = Math.round(current.temp_f);

        cityNameDom.innerText = cityName;
        currentTimeDom.innerText = localTime;




        if(___WEBPACK_IMPORTED_MODULE_1__.prefersTempC){
            currentDegreeDom.innerText = tempC + "°";
        } else {
            currentDegreeDom.innerText = tempF + "°";
        }

        currentConditionDom.innerText = condition;
        let dayTime 
        if(current.is_day === 1) dayTime = "day"; 
        else dayTime = "night";

        currentIconDom.src = _iconGetter_js__WEBPACK_IMPORTED_MODULE_2__[dayTime][condition.replaceAll(' ', '-')];
        currentIconDom.alt = condition;

// populate more information field

        populateDetails(data);

    } else{
        console.log("err");
        let data = forecastResponse.data;
        let errorMessage = data.error.message;

        searchError.innerText = errorMessage;
        searchError.classList.add("visible");
    }
}



function populateDetails(data){
    let forecastDays = data.forecast.forecastday;
    let localTime = data.location.localtime.split(" ")[1];



        if(___WEBPACK_IMPORTED_MODULE_1__.moreInformationType === "hourly"){
            moreInformationDom.innerHTML = "";
            let currentHour = Number(localTime.split(":")[0]);
            let currentDayId = 0;
            console.log(currentHour);
            for(let i=0; i<24; i++){
                currentHour++;
                if(currentHour === 24){
                    currentDayId++;
                    currentHour=0;
                }

                
                let hourData = forecastDays[currentDayId]["hour"][currentHour];

                let dayTime;
                if(hourData.is_day === 1) dayTime = "day";
                else dayTime = "night";
                let condition = hourData.condition.text;

                let cont = document.createElement("div");
                cont.classList.add("weather-cont");


            //<img class="small-weather-icon" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-drizzle.svg" alt="">
                let img = document.createElement("img");
                img.classList.add("small-weather-icon");
                img.src = _iconGetter_js__WEBPACK_IMPORTED_MODULE_2__[dayTime][condition.replaceAll(' ', '-')];
                img.alt = condition;
                cont.appendChild(img);

                let infoDiv = document.createElement("div");
                infoDiv.classList.add("info");
                cont.appendChild(infoDiv);

                let timeSpan = document.createElement("span");
                timeSpan.classList.add("time-small");
                timeSpan.innerText = currentHour + ":00";
                infoDiv.appendChild(timeSpan);

                let dashSpan = document.createElement("span");
                dashSpan.innerText = " - ";
                infoDiv.appendChild(dashSpan);
                
                let tempSpan = document.createElement("span");
                tempSpan.classList.add("degrees-small");
                if(___WEBPACK_IMPORTED_MODULE_1__.prefersTempC){
                    tempSpan.innerText = Math.round(hourData.temp_c) + "°";
                } else {
                    tempSpan.innerText = Math.round(hourData.temp_f) + "°";
                }
                infoDiv.appendChild(tempSpan);


                let hoverConditionDiv = document.createElement("div");
                hoverConditionDiv.classList.add("hover-condition");
                hoverConditionDiv.innerText = condition;
                infoDiv.appendChild(hoverConditionDiv);

                moreInformationDom.appendChild(cont);
            }
        }

        if(___WEBPACK_IMPORTED_MODULE_1__.moreInformationType === "daily"){
            moreInformationDom.innerHTML = "";
            let currentDayId = 1;

            for(let i=1; i<13; i++){
                currentDayId = i;


                
                let dayData = forecastDays[currentDayId]["day"];
                let dayTime = "day";

                console.log(dayData);

                let condition = dayData.condition.text;

                let cont = document.createElement("div");
                cont.classList.add("weather-cont");


            //<img class="small-weather-icon" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-drizzle.svg" alt="">
                let img = document.createElement("img");
                img.classList.add("small-weather-icon");
                img.src = _iconGetter_js__WEBPACK_IMPORTED_MODULE_2__[dayTime][condition.replaceAll(' ', '-')];
                img.alt = condition;
                cont.appendChild(img);

                let infoDiv = document.createElement("div");
                infoDiv.classList.add("info");
                cont.appendChild(infoDiv);

                let timeSpan = document.createElement("span");
                timeSpan.classList.add("time-small");

                let split = forecastDays[currentDayId]["date"].split("-");

                timeSpan.innerText = split[1] + "/" + split[2];
                infoDiv.appendChild(timeSpan);

                let dashSpan = document.createElement("span");
                dashSpan.innerText = " - ";
                infoDiv.appendChild(dashSpan);
                
                let tempSpan = document.createElement("span");
                tempSpan.classList.add("degrees-small");
                if(___WEBPACK_IMPORTED_MODULE_1__.prefersTempC){
                    tempSpan.innerText = Math.round(dayData.avgtemp_c) + "°";
                } else {
                    tempSpan.innerText = Math.round(dayData.avgtemp_f) + "°";
                }
                infoDiv.appendChild(tempSpan);


                let hoverConditionDiv = document.createElement("div");
                hoverConditionDiv.classList.add("hover-condition");
                hoverConditionDiv.innerText = condition;
                infoDiv.appendChild(hoverConditionDiv);

                moreInformationDom.appendChild(cont);
            }
        }
};

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gradients": () => (/* binding */ gradients),
/* harmony export */   "gradientsArr": () => (/* binding */ gradientsArr),
/* harmony export */   "transitionBodyBackground": () => (/* binding */ transitionBodyBackground)
/* harmony export */ });
let gradients = {
//    morningGradient : "linear-gradient(0deg, rgba(200,200,180,1) -100%, rgba(20,210,255,1) 100%)",
    middayGradient : "linear-gradient(0deg, rgba(0,180,190,1) 0%, rgba(60,120,225,1) 100%)",
    eveningGradient : "linear-gradient(0deg, rgba(0,92,170,1) 0%, rgba(0,34,126,1) 100%)",
    nightGradient : "linear-gradient(0deg, rgba(5,0,40,1) 0%, rgba(0,9,40,1) 100%)",
}
let gradientsArr = Object.values(gradients);



let state = 0;
function transitionBodyBackground(gradient){
    let body = document.querySelector("body");
    let overlay = document.querySelector(".bodyOverlayGradient");

    if(state === 0){
        state = 1;
        overlay.style.backgroundImage = gradient;
        overlay.classList.add("transitioning");
    } else if(state === 1){
        state = 0;
        body.style.backgroundImage = gradient;
        overlay.classList.remove("transitioning"); 
    }
    
}

/***/ }),

/***/ "./src/weatherFetcher.js":
/*!*******************************!*\
  !*** ./src/weatherFetcher.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWeatherForecast": () => (/* binding */ fetchWeatherForecast),
/* harmony export */   "fetchWeatherToday": () => (/* binding */ fetchWeatherToday)
/* harmony export */ });
/* harmony import */ var _API_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API-keys */ "./src/API-keys.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/utility.js");



const weatherBaseUrl = 'http://api.weatherapi.com/v1/';


async function fetchWeatherToday(cityName){
    const response = await fetch(`${weatherBaseUrl}current.json?key=${_API_keys__WEBPACK_IMPORTED_MODULE_0__.KEY}&q=${cityName}`);
    let data = await response.json();
    
    //returns [true, error data] if response isnt ok
    //return [false, weather data] if response is ok
    let ok = response.ok;
    return {ok, data};
}

async function fetchWeatherForecast(cityName){
    const response = await fetch(`${weatherBaseUrl}forecast.json?key=${_API_keys__WEBPACK_IMPORTED_MODULE_0__.KEY}&q=${cityName}&days=14`);
    let data = await response.json();
    
    //returns [true, error data] if response isnt ok
    //return [false, weather data] if response is ok
    let ok = response.ok;
    return {ok, data};
}

/***/ }),

/***/ "./src/Raleway-VariableFont_wght.ttf":
/*!*******************************************!*\
  !*** ./src/Raleway-VariableFont_wght.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "575ec9e676c7a85494bb.ttf";

/***/ }),

/***/ "./src/icons/day/Blizzard.svg":
/*!************************************!*\
  !*** ./src/icons/day/Blizzard.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bed7105cef7f982bdb73.svg";

/***/ }),

/***/ "./src/icons/day/Blowing-snow.svg":
/*!****************************************!*\
  !*** ./src/icons/day/Blowing-snow.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/day/Cloudy.svg":
/*!**********************************!*\
  !*** ./src/icons/day/Cloudy.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f6e6108ec3b4605bda2a.svg";

/***/ }),

/***/ "./src/icons/day/Fog.svg":
/*!*******************************!*\
  !*** ./src/icons/day/Fog.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0103d56b08041516e25c.svg";

/***/ }),

/***/ "./src/icons/day/Freezing-drizzle.svg":
/*!********************************************!*\
  !*** ./src/icons/day/Freezing-drizzle.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae14aba413100d921c3c.svg";

/***/ }),

/***/ "./src/icons/day/Freezing-fog.svg":
/*!****************************************!*\
  !*** ./src/icons/day/Freezing-fog.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0103d56b08041516e25c.svg";

/***/ }),

/***/ "./src/icons/day/Heavy-freezing-drizzle.svg":
/*!**************************************************!*\
  !*** ./src/icons/day/Heavy-freezing-drizzle.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae14aba413100d921c3c.svg";

/***/ }),

/***/ "./src/icons/day/Heavy-rain-at-times.svg":
/*!***********************************************!*\
  !*** ./src/icons/day/Heavy-rain-at-times.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/day/Heavy-rain.svg":
/*!**************************************!*\
  !*** ./src/icons/day/Heavy-rain.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/day/Heavy-snow.svg":
/*!**************************************!*\
  !*** ./src/icons/day/Heavy-snow.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/day/Ice-pellets.svg":
/*!***************************************!*\
  !*** ./src/icons/day/Ice-pellets.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bed7105cef7f982bdb73.svg";

/***/ }),

/***/ "./src/icons/day/Light-drizzle.svg":
/*!*****************************************!*\
  !*** ./src/icons/day/Light-drizzle.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae14aba413100d921c3c.svg";

/***/ }),

/***/ "./src/icons/day/Light-freezing-rain.svg":
/*!***********************************************!*\
  !*** ./src/icons/day/Light-freezing-rain.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/day/Light-rain-shower.svg":
/*!*********************************************!*\
  !*** ./src/icons/day/Light-rain-shower.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/day/Light-rain.svg":
/*!**************************************!*\
  !*** ./src/icons/day/Light-rain.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/day/Light-showers-of-ice-pellets.svg":
/*!********************************************************!*\
  !*** ./src/icons/day/Light-showers-of-ice-pellets.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bed7105cef7f982bdb73.svg";

/***/ }),

/***/ "./src/icons/day/Light-sleet-showers.svg":
/*!***********************************************!*\
  !*** ./src/icons/day/Light-sleet-showers.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "132391bc69732cc2373c.svg";

/***/ }),

/***/ "./src/icons/day/Light-sleet.svg":
/*!***************************************!*\
  !*** ./src/icons/day/Light-sleet.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "132391bc69732cc2373c.svg";

/***/ }),

/***/ "./src/icons/day/Light-snow-showers.svg":
/*!**********************************************!*\
  !*** ./src/icons/day/Light-snow-showers.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/day/Light-snow.svg":
/*!**************************************!*\
  !*** ./src/icons/day/Light-snow.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/day/Mist.svg":
/*!********************************!*\
  !*** ./src/icons/day/Mist.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e61faee5b9692f9897af.svg";

/***/ }),

/***/ "./src/icons/day/Moderate-or-heavy-freezing-rain.svg":
/*!***********************************************************!*\
  !*** ./src/icons/day/Moderate-or-heavy-freezing-rain.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/day/Moderate-or-heavy-rain-shower.svg":
/*!*********************************************************!*\
  !*** ./src/icons/day/Moderate-or-heavy-rain-shower.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/day/Moderate-or-heavy-rain-with-thunder.svg":
/*!***************************************************************!*\
  !*** ./src/icons/day/Moderate-or-heavy-rain-with-thunder.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "54936cd75ec331bd16bc.svg";

/***/ }),

/***/ "./src/icons/day/Moderate-or-heavy-showers-of-ice-pellets.svg":
/*!********************************************************************!*\
  !*** ./src/icons/day/Moderate-or-heavy-showers-of-ice-pellets.svg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bed7105cef7f982bdb73.svg";

/***/ }),

/***/ "./src/icons/day/Moderate-or-heavy-sleet-showers.svg":
/*!***********************************************************!*\
  !*** ./src/icons/day/Moderate-or-heavy-sleet-showers.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "132391bc69732cc2373c.svg";

/***/ }),

/***/ "./src/icons/day/Moderate-or-heavy-sleet.svg":
/*!***************************************************!*\
  !*** ./src/icons/day/Moderate-or-heavy-sleet.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "132391bc69732cc2373c.svg";

/***/ }),

/***/ "./src/icons/day/Moderate-or-heavy-snow-showers.svg":
/*!**********************************************************!*\
  !*** ./src/icons/day/Moderate-or-heavy-snow-showers.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/day/Moderate-or-heavy-snow-with-thunder.svg":
/*!***************************************************************!*\
  !*** ./src/icons/day/Moderate-or-heavy-snow-with-thunder.svg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "40d7240a211624990315.svg";

/***/ }),

/***/ "./src/icons/day/Moderate-rain-at-times.svg":
/*!**************************************************!*\
  !*** ./src/icons/day/Moderate-rain-at-times.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/day/Moderate-rain.svg":
/*!*****************************************!*\
  !*** ./src/icons/day/Moderate-rain.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/day/Moderate-snow.svg":
/*!*****************************************!*\
  !*** ./src/icons/day/Moderate-snow.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/day/Overcast.svg":
/*!************************************!*\
  !*** ./src/icons/day/Overcast.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "45e9e87bb18e1c2ae6b3.svg";

/***/ }),

/***/ "./src/icons/day/Partly-cloudy.svg":
/*!*****************************************!*\
  !*** ./src/icons/day/Partly-cloudy.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a86613b2a5a0aebf924.svg";

/***/ }),

/***/ "./src/icons/day/Patchy-freezing-drizzle-possible.svg":
/*!************************************************************!*\
  !*** ./src/icons/day/Patchy-freezing-drizzle-possible.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae14aba413100d921c3c.svg";

/***/ }),

/***/ "./src/icons/day/Patchy-heavy-snow.svg":
/*!*********************************************!*\
  !*** ./src/icons/day/Patchy-heavy-snow.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/day/Patchy-light-drizzle.svg":
/*!************************************************!*\
  !*** ./src/icons/day/Patchy-light-drizzle.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae14aba413100d921c3c.svg";

/***/ }),

/***/ "./src/icons/day/Patchy-light-rain-with-thunder.svg":
/*!**********************************************************!*\
  !*** ./src/icons/day/Patchy-light-rain-with-thunder.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "54936cd75ec331bd16bc.svg";

/***/ }),

/***/ "./src/icons/day/Patchy-light-rain.svg":
/*!*********************************************!*\
  !*** ./src/icons/day/Patchy-light-rain.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/day/Patchy-light-snow-with-thunder.svg":
/*!**********************************************************!*\
  !*** ./src/icons/day/Patchy-light-snow-with-thunder.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "40d7240a211624990315.svg";

/***/ }),

/***/ "./src/icons/day/Patchy-light-snow.svg":
/*!*********************************************!*\
  !*** ./src/icons/day/Patchy-light-snow.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/day/Patchy-moderate-snow.svg":
/*!************************************************!*\
  !*** ./src/icons/day/Patchy-moderate-snow.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/day/Patchy-rain-possible.svg":
/*!************************************************!*\
  !*** ./src/icons/day/Patchy-rain-possible.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/day/Patchy-sleet-possible.svg":
/*!*************************************************!*\
  !*** ./src/icons/day/Patchy-sleet-possible.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "132391bc69732cc2373c.svg";

/***/ }),

/***/ "./src/icons/day/Sunny.svg":
/*!*********************************!*\
  !*** ./src/icons/day/Sunny.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "54288da67b71b4b19483.svg";

/***/ }),

/***/ "./src/icons/day/Thundery-outbreaks-possible.svg":
/*!*******************************************************!*\
  !*** ./src/icons/day/Thundery-outbreaks-possible.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "639df886958499f6f0fc.svg";

/***/ }),

/***/ "./src/icons/day/Torrential-rain-shower.svg":
/*!**************************************************!*\
  !*** ./src/icons/day/Torrential-rain-shower.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/day/partly-cloudy-day-drizzle.svg":
/*!*****************************************************!*\
  !*** ./src/icons/day/partly-cloudy-day-drizzle.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae14aba413100d921c3c.svg";

/***/ }),

/***/ "./src/icons/night/Blizzard.svg":
/*!**************************************!*\
  !*** ./src/icons/night/Blizzard.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bed7105cef7f982bdb73.svg";

/***/ }),

/***/ "./src/icons/night/Blowing-snow.svg":
/*!******************************************!*\
  !*** ./src/icons/night/Blowing-snow.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/night/Clear.svg":
/*!***********************************!*\
  !*** ./src/icons/night/Clear.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9ed9031b8fd64da63790.svg";

/***/ }),

/***/ "./src/icons/night/Cloudy.svg":
/*!************************************!*\
  !*** ./src/icons/night/Cloudy.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f6e6108ec3b4605bda2a.svg";

/***/ }),

/***/ "./src/icons/night/Fog.svg":
/*!*********************************!*\
  !*** ./src/icons/night/Fog.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0103d56b08041516e25c.svg";

/***/ }),

/***/ "./src/icons/night/Freezing-drizzle.svg":
/*!**********************************************!*\
  !*** ./src/icons/night/Freezing-drizzle.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae14aba413100d921c3c.svg";

/***/ }),

/***/ "./src/icons/night/Freezing-fog.svg":
/*!******************************************!*\
  !*** ./src/icons/night/Freezing-fog.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0103d56b08041516e25c.svg";

/***/ }),

/***/ "./src/icons/night/Heavy-freezing-drizzle.svg":
/*!****************************************************!*\
  !*** ./src/icons/night/Heavy-freezing-drizzle.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae14aba413100d921c3c.svg";

/***/ }),

/***/ "./src/icons/night/Heavy-rain-at-times.svg":
/*!*************************************************!*\
  !*** ./src/icons/night/Heavy-rain-at-times.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/night/Heavy-rain.svg":
/*!****************************************!*\
  !*** ./src/icons/night/Heavy-rain.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/night/Heavy-snow.svg":
/*!****************************************!*\
  !*** ./src/icons/night/Heavy-snow.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/night/Ice-pellets.svg":
/*!*****************************************!*\
  !*** ./src/icons/night/Ice-pellets.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bed7105cef7f982bdb73.svg";

/***/ }),

/***/ "./src/icons/night/Light-drizzle.svg":
/*!*******************************************!*\
  !*** ./src/icons/night/Light-drizzle.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae14aba413100d921c3c.svg";

/***/ }),

/***/ "./src/icons/night/Light-freezing-rain.svg":
/*!*************************************************!*\
  !*** ./src/icons/night/Light-freezing-rain.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/night/Light-rain-shower.svg":
/*!***********************************************!*\
  !*** ./src/icons/night/Light-rain-shower.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/night/Light-rain.svg":
/*!****************************************!*\
  !*** ./src/icons/night/Light-rain.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/night/Light-showers-of-ice-pellets.svg":
/*!**********************************************************!*\
  !*** ./src/icons/night/Light-showers-of-ice-pellets.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bed7105cef7f982bdb73.svg";

/***/ }),

/***/ "./src/icons/night/Light-sleet-showers.svg":
/*!*************************************************!*\
  !*** ./src/icons/night/Light-sleet-showers.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "132391bc69732cc2373c.svg";

/***/ }),

/***/ "./src/icons/night/Light-sleet.svg":
/*!*****************************************!*\
  !*** ./src/icons/night/Light-sleet.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "132391bc69732cc2373c.svg";

/***/ }),

/***/ "./src/icons/night/Light-snow-showers.svg":
/*!************************************************!*\
  !*** ./src/icons/night/Light-snow-showers.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/night/Light-snow.svg":
/*!****************************************!*\
  !*** ./src/icons/night/Light-snow.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/night/Mist.svg":
/*!**********************************!*\
  !*** ./src/icons/night/Mist.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e61faee5b9692f9897af.svg";

/***/ }),

/***/ "./src/icons/night/Moderate-or-heavy-freezing-rain.svg":
/*!*************************************************************!*\
  !*** ./src/icons/night/Moderate-or-heavy-freezing-rain.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/night/Moderate-or-heavy-rain-shower.svg":
/*!***********************************************************!*\
  !*** ./src/icons/night/Moderate-or-heavy-rain-shower.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/night/Moderate-or-heavy-rain-with-thunder.svg":
/*!*****************************************************************!*\
  !*** ./src/icons/night/Moderate-or-heavy-rain-with-thunder.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "54936cd75ec331bd16bc.svg";

/***/ }),

/***/ "./src/icons/night/Moderate-or-heavy-showers-of-ice-pellets.svg":
/*!**********************************************************************!*\
  !*** ./src/icons/night/Moderate-or-heavy-showers-of-ice-pellets.svg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bed7105cef7f982bdb73.svg";

/***/ }),

/***/ "./src/icons/night/Moderate-or-heavy-sleet-showers.svg":
/*!*************************************************************!*\
  !*** ./src/icons/night/Moderate-or-heavy-sleet-showers.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "132391bc69732cc2373c.svg";

/***/ }),

/***/ "./src/icons/night/Moderate-or-heavy-sleet.svg":
/*!*****************************************************!*\
  !*** ./src/icons/night/Moderate-or-heavy-sleet.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "132391bc69732cc2373c.svg";

/***/ }),

/***/ "./src/icons/night/Moderate-or-heavy-snow-showers.svg":
/*!************************************************************!*\
  !*** ./src/icons/night/Moderate-or-heavy-snow-showers.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/night/Moderate-or-heavy-snow-with-thunder.svg":
/*!*****************************************************************!*\
  !*** ./src/icons/night/Moderate-or-heavy-snow-with-thunder.svg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "40d7240a211624990315.svg";

/***/ }),

/***/ "./src/icons/night/Moderate-rain-at-times.svg":
/*!****************************************************!*\
  !*** ./src/icons/night/Moderate-rain-at-times.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/night/Moderate-rain.svg":
/*!*******************************************!*\
  !*** ./src/icons/night/Moderate-rain.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/night/Moderate-snow.svg":
/*!*******************************************!*\
  !*** ./src/icons/night/Moderate-snow.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/night/Overcast.svg":
/*!**************************************!*\
  !*** ./src/icons/night/Overcast.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "45e9e87bb18e1c2ae6b3.svg";

/***/ }),

/***/ "./src/icons/night/Partly-cloudy.svg":
/*!*******************************************!*\
  !*** ./src/icons/night/Partly-cloudy.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f6e6108ec3b4605bda2a.svg";

/***/ }),

/***/ "./src/icons/night/Patchy-freezing-drizzle-possible.svg":
/*!**************************************************************!*\
  !*** ./src/icons/night/Patchy-freezing-drizzle-possible.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae14aba413100d921c3c.svg";

/***/ }),

/***/ "./src/icons/night/Patchy-heavy-snow.svg":
/*!***********************************************!*\
  !*** ./src/icons/night/Patchy-heavy-snow.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/night/Patchy-light-drizzle.svg":
/*!**************************************************!*\
  !*** ./src/icons/night/Patchy-light-drizzle.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae14aba413100d921c3c.svg";

/***/ }),

/***/ "./src/icons/night/Patchy-light-rain-with-thunder.svg":
/*!************************************************************!*\
  !*** ./src/icons/night/Patchy-light-rain-with-thunder.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "54936cd75ec331bd16bc.svg";

/***/ }),

/***/ "./src/icons/night/Patchy-light-rain.svg":
/*!***********************************************!*\
  !*** ./src/icons/night/Patchy-light-rain.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/night/Patchy-light-snow-with-thunder.svg":
/*!************************************************************!*\
  !*** ./src/icons/night/Patchy-light-snow-with-thunder.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "40d7240a211624990315.svg";

/***/ }),

/***/ "./src/icons/night/Patchy-light-snow.svg":
/*!***********************************************!*\
  !*** ./src/icons/night/Patchy-light-snow.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/night/Patchy-moderate-snow.svg":
/*!**************************************************!*\
  !*** ./src/icons/night/Patchy-moderate-snow.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ef3313dae88a5d1dbccb.svg";

/***/ }),

/***/ "./src/icons/night/Patchy-rain-possible.svg":
/*!**************************************************!*\
  !*** ./src/icons/night/Patchy-rain-possible.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/night/Patchy-sleet-possible.svg":
/*!***************************************************!*\
  !*** ./src/icons/night/Patchy-sleet-possible.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "132391bc69732cc2373c.svg";

/***/ }),

/***/ "./src/icons/night/Thundery-outbreaks-possible.svg":
/*!*********************************************************!*\
  !*** ./src/icons/night/Thundery-outbreaks-possible.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "639df886958499f6f0fc.svg";

/***/ }),

/***/ "./src/icons/night/Torrential-rain-shower.svg":
/*!****************************************************!*\
  !*** ./src/icons/night/Torrential-rain-shower.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6f43169e2db3a96adc41.svg";

/***/ }),

/***/ "./src/icons/night/partly-cloudy-day-drizzle.svg":
/*!*******************************************************!*\
  !*** ./src/icons/night/partly-cloudy-day-drizzle.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae14aba413100d921c3c.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/updateDisplay.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxN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QUFTO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRU87QUFDUCxvQ0FBb0MsZUFBZSxvQkFBb0IsMENBQUcsQ0FBQyxLQUFLLFNBQVM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9BUEkta2V5cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pY29uR2V0dGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ljb25zL2RheS8gc3luYyBzdmckIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ljb25zL25pZ2h0LyBzeW5jIHN2ZyQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdXBkYXRlRGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJGZXRjaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JhbGV3YXktVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIFxcbiAgICAtLWJlZm9yZS1ncmFkaWVudDogYmxhY2s7XFxuICAgIC0tZm9udGNvbDogd2hpdGU7XFxuICAgIC0tZGVncmVlUHJlZmVyZW5jZSA6IFxcXCJDXFxcIjtcXG59XFxuXFxuKntcXG4gICAgY29sb3IgOiB2YXIoLS1mb250Y29sKTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogTXlGb250O1xcbn1cXG5cXG5odG1se1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuYm9keXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDoxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDV2dztcXG59XFxuXFxuLmN1cnJlbnRXLWNvbnR7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLm9uZS1saW5le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWljb257XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOjFlbTtcXG4gICAgbGVmdDogLTEuNWVtO1xcbiAgICBoZWlnaHQ6IDEwZW07XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbi5kZWdyZWUtcHJlZmVyZW5jZS1idXR0b24gZGl2e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBsZWZ0OiAwLjJyZW07XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG59XFxuXFxuLmRlZ3JlZS1wcmVmZXJlbmNlLWJ1dHRvbiBkaXYucmlnaHQtdG9nZ2xle1xcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSAyLjJyZW0pO1xcbn1cXG5cXG4uZGVncmVlLXByZWZlcmVuY2UtYnV0dG9ue1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMHB4IDFyZW0gMHB4IDBweDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLmRlZ3JlZXM6OmFmdGVye1xcbiAgICBjb250ZW50OiB2YXIoLS1kZWdyZWVQcmVmZXJlbmNlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDAuM2VtO1xcbiAgICByaWdodDogMC43ZW07XFxuICAgIGJvdHRvbTogLTAuMWVtO1xcbn1cXG5cXG4uY2l0eS1uYW1le1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG5cXG4uY3VycmVudC13ZWF0aGVyLWRlZ3JlZXtcXG4gICAgZm9udC1zaXplOiAxMGVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5jdXJyZW50LWNvbmRpdGlvbntcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXG59XFxuXFxuYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJvcmRlcjtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG59XFxuXFxuYTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbn1cXG5cXG5hOmZvY3Vze1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBvdXRsaW5lLW9mZnNldDogM3B4O1xcbn1cXG5cXG5uYXZ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDoxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDF7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xcbn1cXG5cXG5sYWJlbHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbnB1dHtcXG4gICAgcGFkZGluZzogMC4xcmVtIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAwcHg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcXG59XFxuXFxuXFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogdmFyKC0tZm9udGNvbCk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuaW5wdXQ6aG92ZXJ7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXN7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IDEwcHg7XFxufVxcblxcblxcbi5zZWFyY2gtYnV0dG9uIHN2Z3tcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZmlsbDogdmFyKC0tZm9udGNvbCk7XFxuICAgIGxlZnQ6IDAuNDVyZW07XFxuICAgIHRvcDogMC40NXJlbTtcXG59XFxuXFxuLnNlYXJjaC1idXR0b257XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IDBweCAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xcbn1cXG5cXG4uc2VhcmNoLWVycm9ye1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDFyZW07XFxuICAgIHBhZGRpbmc6IDJweCA1cHg7XFxuICAgIHRvcDogLTAuMnJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMzcsIDM3LCAwLjc5NSk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpXFxufVxcblxcbi5zZWFyY2gtZXJyb3IudmlzaWJsZXtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwMCUpO1xcbn1cXG5cXG5idXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuYnV0dG9uOmZvY3Vze1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBvdXRsaW5lLW9mZnNldDogMTBweDtcXG59XFxuXFxuXFxuLmJvZHlPdmVybGF5R3JhZGllbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWJlZm9yZS1ncmFkaWVudCk7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzIGxpbmVhcjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmJvZHlPdmVybGF5R3JhZGllbnQudHJhbnNpdGlvbmluZ3tcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnJpZ2h0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cXG5cXG4uZGV0YWlscy1idXR0b25ze1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5kZXRhaWxzLWJ1dHRvbnMgYnV0dG9ue1xcbiAgICBib3JkZXI6IDAuMHJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCk7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiAwcHggMC4ycmVtO1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4uZGV0YWlscy1idXR0b25zIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZGV0YWlscy1idXR0b25zIGJ1dHRvbi5zZWxlY3RlZHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG59XFxuXFxuXFxuLmRldGFpbHMtYmFja2dyb3VuZHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cXG5cXG4uZGV0YWlscy1jb250e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDZyZW0sIDFmcikpO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi53ZWF0aGVyLWNvbnR7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3ctd3JhcDpicmVhay13b3JkO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICAtLWhvdmVyLW9wYWNpdHk6MDtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0taG92ZXItb3BhY2l0eSkgMC4zcyBsaW5lYXI7XFxufVxcblxcbi53ZWF0aGVyLWNvbnQ6aG92ZXJ7XFxuICAgIC0taG92ZXItb3BhY2l0eToxO1xcbn1cXG5cXG4ud2VydGhlci1pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNtYWxsLXdlYXRoZXItaWNvbntcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLnRpbWUtc21hbGx7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZGVncmVlcy1zbWFsbHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmhvdmVyLWNvbmRpdGlvbntcXG4gICAgei1pbmRleDogMjtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvdHRvbTogLTAuMnJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAxMDAlKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA5cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUxKTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBvcGFjaXR5OiB2YXIoLS1ob3Zlci1vcGFjaXR5KTtcXG5cXG4gICAgcmlnaHQ6IDUwJTtcXG5cXG5cXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG4gICAgXFxuICAgIGh0bWx7XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgfVxcbiAgICAuY3VycmVudFctY29udHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICB9XFxuICAgIG5hdntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIG1haW57XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICB9XFxuICAgIC5yaWdodHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gICAgLmN1cnJlbnRXLWNvbnR7XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgfVxcbiAgICAuY3VycmVudC13ZWF0aGVyLWRlZ3JlZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogN2VtO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLE1BQU07SUFDTiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFl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LDRDQUE0QztJQUM1QyxlQUFlO0lBQ2YsNkJBQTZCOztJQUU3QixVQUFVOzs7QUFHZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBeUM7QUFDN0M7OztBQUdBOztJQUVJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsNkJBQTZCO1FBQzdCLFNBQVM7SUFDYjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICBcXG4gICAgLS1iZWZvcmUtZ3JhZGllbnQ6IGJsYWNrO1xcbiAgICAtLWZvbnRjb2w6IHdoaXRlO1xcbiAgICAtLWRlZ3JlZVByZWZlcmVuY2UgOiBcXFwiQ1xcXCI7XFxufVxcblxcbip7XFxuICAgIGNvbG9yIDogdmFyKC0tZm9udGNvbCk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IE15Rm9udDtcXG59XFxuXFxuaHRtbHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbmJvZHl7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6MTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1dnc7XFxufVxcblxcbi5jdXJyZW50Vy1jb250e1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5vbmUtbGluZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1pY29ue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDoxZW07XFxuICAgIGxlZnQ6IC0xLjVlbTtcXG4gICAgaGVpZ2h0OiAxMGVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4uZGVncmVlLXByZWZlcmVuY2UtYnV0dG9uIGRpdntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgbGVmdDogMC4ycmVtO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxufVxcblxcbi5kZWdyZWUtcHJlZmVyZW5jZS1idXR0b24gZGl2LnJpZ2h0LXRvZ2dsZXtcXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMi4ycmVtKTtcXG59XFxuXFxuLmRlZ3JlZS1wcmVmZXJlbmNlLWJ1dHRvbntcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IDBweCAxcmVtIDBweCAwcHg7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XFxufVxcblxcbi5kZWdyZWVzOjphZnRlcntcXG4gICAgY29udGVudDogdmFyKC0tZGVncmVlUHJlZmVyZW5jZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAwLjNlbTtcXG4gICAgcmlnaHQ6IDAuN2VtO1xcbiAgICBib3R0b206IC0wLjFlbTtcXG59XFxuXFxuLmNpdHktbmFtZXtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuXFxuLmN1cnJlbnQtd2VhdGhlci1kZWdyZWV7XFxuICAgIGZvbnQtc2l6ZTogMTBlbTtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uY3VycmVudC1jb25kaXRpb257XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxufVxcblxcbmF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXI7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxufVxcblxcbmE6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuXFxuYTpmb2N1c3tcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IDNweDtcXG59XFxuXFxubmF2e1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxe1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtIDAgMDtcXG59XFxuXFxubGFiZWx7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXR7XFxuICAgIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcbiAgICBvdXRsaW5lLW9mZnNldDogMHB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxufVxcblxcblxcblxcbmlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6IHZhcigtLWZvbnRjb2wpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbmlucHV0OmhvdmVye1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcblxcbmlucHV0OmZvY3Vze1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAxMHB4O1xcbn1cXG5cXG5cXG4uc2VhcmNoLWJ1dHRvbiBzdmd7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZpbGw6IHZhcigtLWZvbnRjb2wpO1xcbiAgICBsZWZ0OiAwLjQ1cmVtO1xcbiAgICB0b3A6IDAuNDVyZW07XFxufVxcblxcbi5zZWFyY2gtYnV0dG9ue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiAwcHggMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLnNlYXJjaC1lcnJvcntcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxcmVtO1xcbiAgICBwYWRkaW5nOiAycHggNXB4O1xcbiAgICB0b3A6IC0wLjJyZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDM3LCAzNywgMC43OTUpO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKVxcbn1cXG5cXG4uc2VhcmNoLWVycm9yLnZpc2libGV7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbmJ1dHRvbjpmb2N1c3tcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IDEwcHg7XFxufVxcblxcblxcbi5ib2R5T3ZlcmxheUdyYWRpZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iZWZvcmUtZ3JhZGllbnQpO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBsaW5lYXI7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5ib2R5T3ZlcmxheUdyYWRpZW50LnRyYW5zaXRpb25pbmd7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5yaWdodHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9uc3tcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZGV0YWlscy1idXR0b25zIGJ1dHRvbntcXG4gICAgYm9yZGVyOiAwLjByZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMHB4IDAuMnJlbTtcXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9ucyBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9ucyBidXR0b24uc2VsZWN0ZWR7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxufVxcblxcblxcbi5kZXRhaWxzLWJhY2tncm91bmR7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuXFxuLmRldGFpbHMtY29udHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg2cmVtLCAxZnIpKTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ud2VhdGhlci1jb250e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93LXdyYXA6YnJlYWstd29yZDtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgLS1ob3Zlci1vcGFjaXR5OjA7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLWhvdmVyLW9wYWNpdHkpIDAuM3MgbGluZWFyO1xcbn1cXG5cXG4ud2VhdGhlci1jb250OmhvdmVye1xcbiAgICAtLWhvdmVyLW9wYWNpdHk6MTtcXG59XFxuXFxuLndlcnRoZXItaW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zbWFsbC13ZWF0aGVyLWljb257XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi50aW1lLXNtYWxse1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmRlZ3JlZXMtc21hbGx7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5ob3Zlci1jb25kaXRpb257XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3R0b206IC0wLjJyZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMTAwJSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1MSk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgb3BhY2l0eTogdmFyKC0taG92ZXItb3BhY2l0eSk7XFxuXFxuICAgIHJpZ2h0OiA1MCU7XFxuXFxuXFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogTXlGb250O1xcbiAgICBzcmM6IHVybCguL1JhbGV3YXktVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG4gICAgXFxuICAgIGh0bWx7XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgfVxcbiAgICAuY3VycmVudFctY29udHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICB9XFxuICAgIG5hdntcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIG1haW57XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICB9XFxuICAgIC5yaWdodHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gICAgLmN1cnJlbnRXLWNvbnR7XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgfVxcbiAgICAuY3VycmVudC13ZWF0aGVyLWRlZ3JlZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogN2VtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IEtFWSA9ICc4YzJiOTZmMzBkZjA0OTNmYWJhNzUxNDgyMzI1MDMnOyIsImNvbnN0IG5pZ2h0SWNvbnNDb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCcuL2ljb25zL25pZ2h0JywgdHJ1ZSwgL3N2ZyQvKTtcblxuZXhwb3J0IGNvbnN0IG5pZ2h0ID0gbmlnaHRJY29uc0NvbnRleHQua2V5cygpLnJlZHVjZSggKG5pZ2h0LCBmaWxlKSA9PiB7XG5cdGNvbnN0IFNWRyA9IG5pZ2h0SWNvbnNDb250ZXh0KGZpbGUpO1xuXHRjb25zdCBsYWJlbCA9IGZpbGUuc2xpY2UoMiwgLTQpOyAvLyBzdHJpcCAnLi8nIGFuZCAnLnN2Zydcblx0bmlnaHRbbGFiZWxdID0gU1ZHO1xuICAgICAgICByZXR1cm4gbmlnaHQ7XG59LCB7fSk7XG5cbmNvbnN0IGRheUljb25zQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi9pY29ucy9kYXknLCB0cnVlLCAvc3ZnJC8pO1xuIFxuZXhwb3J0IGNvbnN0IGRheSA9IGRheUljb25zQ29udGV4dC5rZXlzKCkucmVkdWNlKCAoZGF5LCBmaWxlKSA9PiB7XG5cdGNvbnN0IFNWRyA9IGRheUljb25zQ29udGV4dChmaWxlKTtcblx0Y29uc3QgbGFiZWwgPSBmaWxlLnNsaWNlKDIsIC00KTsgLy8gc3RyaXAgJy4vJyBhbmQgJy5zdmcnXG5cdGRheVtsYWJlbF0gPSBTVkc7XG4gICAgICAgIHJldHVybiBkYXk7XG59LCB7fSk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vQmxpenphcmQuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L0JsaXp6YXJkLnN2Z1wiLFxuXHRcIi4vQmxvd2luZy1zbm93LnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9CbG93aW5nLXNub3cuc3ZnXCIsXG5cdFwiLi9DbG91ZHkuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L0Nsb3VkeS5zdmdcIixcblx0XCIuL0ZvZy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvRm9nLnN2Z1wiLFxuXHRcIi4vRnJlZXppbmctZHJpenpsZS5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvRnJlZXppbmctZHJpenpsZS5zdmdcIixcblx0XCIuL0ZyZWV6aW5nLWZvZy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvRnJlZXppbmctZm9nLnN2Z1wiLFxuXHRcIi4vSGVhdnktZnJlZXppbmctZHJpenpsZS5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvSGVhdnktZnJlZXppbmctZHJpenpsZS5zdmdcIixcblx0XCIuL0hlYXZ5LXJhaW4tYXQtdGltZXMuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L0hlYXZ5LXJhaW4tYXQtdGltZXMuc3ZnXCIsXG5cdFwiLi9IZWF2eS1yYWluLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9IZWF2eS1yYWluLnN2Z1wiLFxuXHRcIi4vSGVhdnktc25vdy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvSGVhdnktc25vdy5zdmdcIixcblx0XCIuL0ljZS1wZWxsZXRzLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9JY2UtcGVsbGV0cy5zdmdcIixcblx0XCIuL0xpZ2h0LWRyaXp6bGUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L0xpZ2h0LWRyaXp6bGUuc3ZnXCIsXG5cdFwiLi9MaWdodC1mcmVlemluZy1yYWluLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9MaWdodC1mcmVlemluZy1yYWluLnN2Z1wiLFxuXHRcIi4vTGlnaHQtcmFpbi1zaG93ZXIuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L0xpZ2h0LXJhaW4tc2hvd2VyLnN2Z1wiLFxuXHRcIi4vTGlnaHQtcmFpbi5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvTGlnaHQtcmFpbi5zdmdcIixcblx0XCIuL0xpZ2h0LXNob3dlcnMtb2YtaWNlLXBlbGxldHMuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L0xpZ2h0LXNob3dlcnMtb2YtaWNlLXBlbGxldHMuc3ZnXCIsXG5cdFwiLi9MaWdodC1zbGVldC1zaG93ZXJzLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9MaWdodC1zbGVldC1zaG93ZXJzLnN2Z1wiLFxuXHRcIi4vTGlnaHQtc2xlZXQuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L0xpZ2h0LXNsZWV0LnN2Z1wiLFxuXHRcIi4vTGlnaHQtc25vdy1zaG93ZXJzLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9MaWdodC1zbm93LXNob3dlcnMuc3ZnXCIsXG5cdFwiLi9MaWdodC1zbm93LnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9MaWdodC1zbm93LnN2Z1wiLFxuXHRcIi4vTWlzdC5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvTWlzdC5zdmdcIixcblx0XCIuL01vZGVyYXRlLW9yLWhlYXZ5LWZyZWV6aW5nLXJhaW4uc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L01vZGVyYXRlLW9yLWhlYXZ5LWZyZWV6aW5nLXJhaW4uc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1vci1oZWF2eS1yYWluLXNob3dlci5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvTW9kZXJhdGUtb3ItaGVhdnktcmFpbi1zaG93ZXIuc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1vci1oZWF2eS1yYWluLXdpdGgtdGh1bmRlci5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvTW9kZXJhdGUtb3ItaGVhdnktcmFpbi13aXRoLXRodW5kZXIuc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1vci1oZWF2eS1zaG93ZXJzLW9mLWljZS1wZWxsZXRzLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9Nb2RlcmF0ZS1vci1oZWF2eS1zaG93ZXJzLW9mLWljZS1wZWxsZXRzLnN2Z1wiLFxuXHRcIi4vTW9kZXJhdGUtb3ItaGVhdnktc2xlZXQtc2hvd2Vycy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvTW9kZXJhdGUtb3ItaGVhdnktc2xlZXQtc2hvd2Vycy5zdmdcIixcblx0XCIuL01vZGVyYXRlLW9yLWhlYXZ5LXNsZWV0LnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9Nb2RlcmF0ZS1vci1oZWF2eS1zbGVldC5zdmdcIixcblx0XCIuL01vZGVyYXRlLW9yLWhlYXZ5LXNub3ctc2hvd2Vycy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvTW9kZXJhdGUtb3ItaGVhdnktc25vdy1zaG93ZXJzLnN2Z1wiLFxuXHRcIi4vTW9kZXJhdGUtb3ItaGVhdnktc25vdy13aXRoLXRodW5kZXIuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L01vZGVyYXRlLW9yLWhlYXZ5LXNub3ctd2l0aC10aHVuZGVyLnN2Z1wiLFxuXHRcIi4vTW9kZXJhdGUtcmFpbi1hdC10aW1lcy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvTW9kZXJhdGUtcmFpbi1hdC10aW1lcy5zdmdcIixcblx0XCIuL01vZGVyYXRlLXJhaW4uc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L01vZGVyYXRlLXJhaW4uc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1zbm93LnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9Nb2RlcmF0ZS1zbm93LnN2Z1wiLFxuXHRcIi4vT3ZlcmNhc3Quc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L092ZXJjYXN0LnN2Z1wiLFxuXHRcIi4vUGFydGx5LWNsb3VkeS5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvUGFydGx5LWNsb3VkeS5zdmdcIixcblx0XCIuL1BhdGNoeS1mcmVlemluZy1kcml6emxlLXBvc3NpYmxlLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9QYXRjaHktZnJlZXppbmctZHJpenpsZS1wb3NzaWJsZS5zdmdcIixcblx0XCIuL1BhdGNoeS1oZWF2eS1zbm93LnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9QYXRjaHktaGVhdnktc25vdy5zdmdcIixcblx0XCIuL1BhdGNoeS1saWdodC1kcml6emxlLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9QYXRjaHktbGlnaHQtZHJpenpsZS5zdmdcIixcblx0XCIuL1BhdGNoeS1saWdodC1yYWluLXdpdGgtdGh1bmRlci5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvUGF0Y2h5LWxpZ2h0LXJhaW4td2l0aC10aHVuZGVyLnN2Z1wiLFxuXHRcIi4vUGF0Y2h5LWxpZ2h0LXJhaW4uc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L1BhdGNoeS1saWdodC1yYWluLnN2Z1wiLFxuXHRcIi4vUGF0Y2h5LWxpZ2h0LXNub3ctd2l0aC10aHVuZGVyLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9QYXRjaHktbGlnaHQtc25vdy13aXRoLXRodW5kZXIuc3ZnXCIsXG5cdFwiLi9QYXRjaHktbGlnaHQtc25vdy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvUGF0Y2h5LWxpZ2h0LXNub3cuc3ZnXCIsXG5cdFwiLi9QYXRjaHktbW9kZXJhdGUtc25vdy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvUGF0Y2h5LW1vZGVyYXRlLXNub3cuc3ZnXCIsXG5cdFwiLi9QYXRjaHktcmFpbi1wb3NzaWJsZS5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvUGF0Y2h5LXJhaW4tcG9zc2libGUuc3ZnXCIsXG5cdFwiLi9QYXRjaHktc2xlZXQtcG9zc2libGUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L1BhdGNoeS1zbGVldC1wb3NzaWJsZS5zdmdcIixcblx0XCIuL1N1bm55LnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9TdW5ueS5zdmdcIixcblx0XCIuL1RodW5kZXJ5LW91dGJyZWFrcy1wb3NzaWJsZS5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvVGh1bmRlcnktb3V0YnJlYWtzLXBvc3NpYmxlLnN2Z1wiLFxuXHRcIi4vVG9ycmVudGlhbC1yYWluLXNob3dlci5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvVG9ycmVudGlhbC1yYWluLXNob3dlci5zdmdcIixcblx0XCIuL3BhcnRseS1jbG91ZHktZGF5LWRyaXp6bGUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L3BhcnRseS1jbG91ZHktZGF5LWRyaXp6bGUuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ljb25zL2RheSBzeW5jIHJlY3Vyc2l2ZSBzdmckXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0JsaXp6YXJkLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0JsaXp6YXJkLnN2Z1wiLFxuXHRcIi4vQmxvd2luZy1zbm93LnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0Jsb3dpbmctc25vdy5zdmdcIixcblx0XCIuL0NsZWFyLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0NsZWFyLnN2Z1wiLFxuXHRcIi4vQ2xvdWR5LnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0Nsb3VkeS5zdmdcIixcblx0XCIuL0ZvZy5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9Gb2cuc3ZnXCIsXG5cdFwiLi9GcmVlemluZy1kcml6emxlLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0ZyZWV6aW5nLWRyaXp6bGUuc3ZnXCIsXG5cdFwiLi9GcmVlemluZy1mb2cuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvRnJlZXppbmctZm9nLnN2Z1wiLFxuXHRcIi4vSGVhdnktZnJlZXppbmctZHJpenpsZS5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9IZWF2eS1mcmVlemluZy1kcml6emxlLnN2Z1wiLFxuXHRcIi4vSGVhdnktcmFpbi1hdC10aW1lcy5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9IZWF2eS1yYWluLWF0LXRpbWVzLnN2Z1wiLFxuXHRcIi4vSGVhdnktcmFpbi5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9IZWF2eS1yYWluLnN2Z1wiLFxuXHRcIi4vSGVhdnktc25vdy5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9IZWF2eS1zbm93LnN2Z1wiLFxuXHRcIi4vSWNlLXBlbGxldHMuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvSWNlLXBlbGxldHMuc3ZnXCIsXG5cdFwiLi9MaWdodC1kcml6emxlLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0xpZ2h0LWRyaXp6bGUuc3ZnXCIsXG5cdFwiLi9MaWdodC1mcmVlemluZy1yYWluLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0xpZ2h0LWZyZWV6aW5nLXJhaW4uc3ZnXCIsXG5cdFwiLi9MaWdodC1yYWluLXNob3dlci5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9MaWdodC1yYWluLXNob3dlci5zdmdcIixcblx0XCIuL0xpZ2h0LXJhaW4uc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvTGlnaHQtcmFpbi5zdmdcIixcblx0XCIuL0xpZ2h0LXNob3dlcnMtb2YtaWNlLXBlbGxldHMuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvTGlnaHQtc2hvd2Vycy1vZi1pY2UtcGVsbGV0cy5zdmdcIixcblx0XCIuL0xpZ2h0LXNsZWV0LXNob3dlcnMuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvTGlnaHQtc2xlZXQtc2hvd2Vycy5zdmdcIixcblx0XCIuL0xpZ2h0LXNsZWV0LnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0xpZ2h0LXNsZWV0LnN2Z1wiLFxuXHRcIi4vTGlnaHQtc25vdy1zaG93ZXJzLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0xpZ2h0LXNub3ctc2hvd2Vycy5zdmdcIixcblx0XCIuL0xpZ2h0LXNub3cuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvTGlnaHQtc25vdy5zdmdcIixcblx0XCIuL01pc3Quc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvTWlzdC5zdmdcIixcblx0XCIuL01vZGVyYXRlLW9yLWhlYXZ5LWZyZWV6aW5nLXJhaW4uc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvTW9kZXJhdGUtb3ItaGVhdnktZnJlZXppbmctcmFpbi5zdmdcIixcblx0XCIuL01vZGVyYXRlLW9yLWhlYXZ5LXJhaW4tc2hvd2VyLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L01vZGVyYXRlLW9yLWhlYXZ5LXJhaW4tc2hvd2VyLnN2Z1wiLFxuXHRcIi4vTW9kZXJhdGUtb3ItaGVhdnktcmFpbi13aXRoLXRodW5kZXIuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvTW9kZXJhdGUtb3ItaGVhdnktcmFpbi13aXRoLXRodW5kZXIuc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1vci1oZWF2eS1zaG93ZXJzLW9mLWljZS1wZWxsZXRzLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L01vZGVyYXRlLW9yLWhlYXZ5LXNob3dlcnMtb2YtaWNlLXBlbGxldHMuc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1vci1oZWF2eS1zbGVldC1zaG93ZXJzLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L01vZGVyYXRlLW9yLWhlYXZ5LXNsZWV0LXNob3dlcnMuc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1vci1oZWF2eS1zbGVldC5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9Nb2RlcmF0ZS1vci1oZWF2eS1zbGVldC5zdmdcIixcblx0XCIuL01vZGVyYXRlLW9yLWhlYXZ5LXNub3ctc2hvd2Vycy5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9Nb2RlcmF0ZS1vci1oZWF2eS1zbm93LXNob3dlcnMuc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1vci1oZWF2eS1zbm93LXdpdGgtdGh1bmRlci5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9Nb2RlcmF0ZS1vci1oZWF2eS1zbm93LXdpdGgtdGh1bmRlci5zdmdcIixcblx0XCIuL01vZGVyYXRlLXJhaW4tYXQtdGltZXMuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvTW9kZXJhdGUtcmFpbi1hdC10aW1lcy5zdmdcIixcblx0XCIuL01vZGVyYXRlLXJhaW4uc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvTW9kZXJhdGUtcmFpbi5zdmdcIixcblx0XCIuL01vZGVyYXRlLXNub3cuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvTW9kZXJhdGUtc25vdy5zdmdcIixcblx0XCIuL092ZXJjYXN0LnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L092ZXJjYXN0LnN2Z1wiLFxuXHRcIi4vUGFydGx5LWNsb3VkeS5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9QYXJ0bHktY2xvdWR5LnN2Z1wiLFxuXHRcIi4vUGF0Y2h5LWZyZWV6aW5nLWRyaXp6bGUtcG9zc2libGUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvUGF0Y2h5LWZyZWV6aW5nLWRyaXp6bGUtcG9zc2libGUuc3ZnXCIsXG5cdFwiLi9QYXRjaHktaGVhdnktc25vdy5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9QYXRjaHktaGVhdnktc25vdy5zdmdcIixcblx0XCIuL1BhdGNoeS1saWdodC1kcml6emxlLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L1BhdGNoeS1saWdodC1kcml6emxlLnN2Z1wiLFxuXHRcIi4vUGF0Y2h5LWxpZ2h0LXJhaW4td2l0aC10aHVuZGVyLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L1BhdGNoeS1saWdodC1yYWluLXdpdGgtdGh1bmRlci5zdmdcIixcblx0XCIuL1BhdGNoeS1saWdodC1yYWluLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L1BhdGNoeS1saWdodC1yYWluLnN2Z1wiLFxuXHRcIi4vUGF0Y2h5LWxpZ2h0LXNub3ctd2l0aC10aHVuZGVyLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L1BhdGNoeS1saWdodC1zbm93LXdpdGgtdGh1bmRlci5zdmdcIixcblx0XCIuL1BhdGNoeS1saWdodC1zbm93LnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L1BhdGNoeS1saWdodC1zbm93LnN2Z1wiLFxuXHRcIi4vUGF0Y2h5LW1vZGVyYXRlLXNub3cuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvUGF0Y2h5LW1vZGVyYXRlLXNub3cuc3ZnXCIsXG5cdFwiLi9QYXRjaHktcmFpbi1wb3NzaWJsZS5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9QYXRjaHktcmFpbi1wb3NzaWJsZS5zdmdcIixcblx0XCIuL1BhdGNoeS1zbGVldC1wb3NzaWJsZS5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9QYXRjaHktc2xlZXQtcG9zc2libGUuc3ZnXCIsXG5cdFwiLi9UaHVuZGVyeS1vdXRicmVha3MtcG9zc2libGUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvVGh1bmRlcnktb3V0YnJlYWtzLXBvc3NpYmxlLnN2Z1wiLFxuXHRcIi4vVG9ycmVudGlhbC1yYWluLXNob3dlci5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9Ub3JyZW50aWFsLXJhaW4tc2hvd2VyLnN2Z1wiLFxuXHRcIi4vcGFydGx5LWNsb3VkeS1kYXktZHJpenpsZS5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9wYXJ0bHktY2xvdWR5LWRheS1kcml6emxlLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pY29ucy9uaWdodCBzeW5jIHJlY3Vyc2l2ZSBzdmckXCI7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IHsgZ3JhZGllbnRzLCBncmFkaWVudHNBcnIsIHRyYW5zaXRpb25Cb2R5QmFja2dyb3VuZCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCAqIGFzIHdlYXRoZXJGZXRjaGVyIGZyb20gJy4vd2VhdGhlckZldGNoZXIuanMnO1xuaW1wb3J0IHsgdXBkYXRlRGlzcGxheSB9IGZyb20gXCIuL3VwZGF0ZURpc3BsYXlcIjtcbmltcG9ydCB7IHBvcHVsYXRlRGV0YWlscyB9IGZyb20gXCIuL3VwZGF0ZURpc3BsYXlcIjtcblxuXG5cbmxldCByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcblxuXG5sZXQgdG9nZ2xlRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVmZXJlbmNlLXRvZ2dsZVwiKTsgXG5cblxuZXhwb3J0IGxldCBjdXJyZW50Q2l0eSA9IFwidGJpbGlzaVwiOyBcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50Q2l0eShjaXR5KXtcbiAgICBjdXJyZW50Q2l0eSA9IGNpdHk7XG59XG4gXG5cblxuZXhwb3J0IGxldCBwcmVmZXJzVGVtcEMgPSB0cnVlO1xuZXhwb3J0IGZ1bmN0aW9uIHNldFByZWZlcnNUZW1wQyhib29sZWFuKXtcbiAgICBwcmVmZXJzVGVtcEMgPSBib29sZWFuO1xuXG4gICAgaWYocHJlZmVyc1RlbXBDID09PSB0cnVlKXtcbiAgICAgICAgdG9nZ2xlRG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJyaWdodC10b2dnbGVcIik7XG4gICAgICAgIHRvZ2dsZURvbS5pbm5lclRleHQgPSBcIkNcIjtcbiAgICAgICAgci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZGVncmVlUHJlZmVyZW5jZVwiLCAnXCJDXCInKTtcbiAgICB9XG5cbiAgICBpZihwcmVmZXJzVGVtcEMgPT09IGZhbHNlKXtcbiAgICAgICAgdG9nZ2xlRG9tLmNsYXNzTGlzdC5hZGQoXCJyaWdodC10b2dnbGVcIik7XG4gICAgICAgIHRvZ2dsZURvbS5pbm5lclRleHQgPSBcIkZcIjtcbiAgICAgICAgci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZGVncmVlUHJlZmVyZW5jZVwiLCAnXCJGXCInKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEaXNwbGF5KGN1cnJlbnRDaXR5KTtcbn1cblxuXG5leHBvcnQgbGV0IG1vcmVJbmZvcm1hdGlvblR5cGUgPSBcImhvdXJseVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHNldE1vcmVJbmZvcm1hdGlvblR5cGUoc3RyaW5nKXtcbiAgICBtb3JlSW5mb3JtYXRpb25UeXBlID0gc3RyaW5nO1xufVxuXG5sZXQgbW9yZUluZm9ybWF0aW9uQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWJ1dHRvbnNcIikuY2hpbGRyZW4pO1xuXG5cblxuXG5tb3JlSW5mb3JtYXRpb25CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCAoKT0+e1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBsZXQgY3VycmVudFR5cGUgPSBidXR0b24uZGF0YXNldC50eXBlO1xuICAgICAgICBzZXRNb3JlSW5mb3JtYXRpb25UeXBlKGN1cnJlbnRUeXBlKTtcbiAgICAgICAgdXBkYXRlRGlzcGxheShjdXJyZW50Q2l0eSk7XG5cblxuICAgICAgICBtb3JlSW5mb3JtYXRpb25CdXR0b25zLmZvckVhY2goYnRuID0+e1xuICAgICAgICAgICAgbGV0IGJ0blR5cGUgPSBidG4uZGF0YXNldC50eXBlO1xuICAgICAgICAgICAgaWYoY3VycmVudFR5cGUgIT09IGJ0blR5cGUpe1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG59KTtcblxuXG5cbmxldCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1idXR0b25cIik7XG5sZXQgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1pbnB1dFwiKTtcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSk9PntcbiAgICBpZihlLmtleSA9PT0gXCJFbnRlclwiKXtcbiAgICAgICAgc2VhcmNoQnV0dG9uLmNsaWNrKCk7XG4gICAgfVxufSk7XG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgbGV0IGNpdHlOYW1lID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgaWYoY2l0eU5hbWUgPT09IFwiXCIpIHJldHVybjtcbiAgICB1cGRhdGVEaXNwbGF5KGNpdHlOYW1lKTtcbn0pO1xuXG5cblxubGV0IGNoYW5nZVByZWZlcnNUZW1wQ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVncmVlLXByZWZlcmVuY2UtYnV0dG9uXCIpO1xuY2hhbmdlUHJlZmVyc1RlbXBDQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIHNldFByZWZlcnNUZW1wQyghcHJlZmVyc1RlbXBDKTtcbn0pO1xuXG5cbnVwZGF0ZURpc3BsYXkoXCJ0YmlsaXNpXCIpO1xuXG4iLCJpbXBvcnQgKiBhcyB3ZWF0aGVyRmV0Y2hlciBmcm9tICcuL3dlYXRoZXJGZXRjaGVyLmpzJztcbmltcG9ydCB7IHByZWZlcnNUZW1wQywgbW9yZUluZm9ybWF0aW9uVHlwZSB9IGZyb20gXCIuXCI7XG5pbXBvcnQgKiBhcyBpY29ucyBmcm9tICcuL2ljb25HZXR0ZXIuanMnO1xuaW1wb3J0IHsgdHJhbnNpdGlvbkJvZHlCYWNrZ3JvdW5kLCBncmFkaWVudHMgfSBmcm9tICcuL3V0aWxpdHkuanMnO1xuaW1wb3J0IHsgc2V0Q3VycmVudENpdHkgfSBmcm9tICcuJztcblxubGV0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRXLWNvbnRcIik7XG5sZXQgY2l0eU5hbWVEb20gPSB3ZWF0aGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eS1uYW1lXCIpO1xubGV0IGN1cnJlbnRUaW1lRG9tID0gd2VhdGhlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtdGltZVwiKTtcbmxldCBjdXJyZW50SWNvbkRvbSA9IHdlYXRoZXJDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXdlYXRoZXItaWNvblwiKTtcbmxldCBjdXJyZW50RGVncmVlRG9tID0gd2VhdGhlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtd2VhdGhlci1kZWdyZWVcIik7XG5sZXQgY3VycmVudENvbmRpdGlvbkRvbSA9IHdlYXRoZXJDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LWNvbmRpdGlvblwiKTtcbmxldCBtb3JlSW5mb3JtYXRpb25Eb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtY29udFwiKTtcbmxldCBzZWFyY2hFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWVycm9yXCIpO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KGNpdHlOYW1lKXtcblxuXG5cbiAgICBsZXQgZm9yZWNhc3RSZXNwb25zZSA9IGF3YWl0IHdlYXRoZXJGZXRjaGVyLmZldGNoV2VhdGhlckZvcmVjYXN0KGNpdHlOYW1lKTtcblxuICAgIGxldCBOQU1FID0gY2l0eU5hbWU7XG5cbiAgICBpZihmb3JlY2FzdFJlc3BvbnNlLm9rKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXRjaXR5XCIpXG4gICAgICAgIHNldEN1cnJlbnRDaXR5KE5BTUUpO1xuICAgICAgICBzZWFyY2hFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcblxuICAgICAgICBsZXQgZGF0YSA9IGZvcmVjYXN0UmVzcG9uc2UuZGF0YTtcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gZGF0YS5sb2NhdGlvbjtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBkYXRhLmN1cnJlbnQ7XG5cblxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgbGV0IGNvbmRpdGlvbiA9IGN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG5cbiAgICAgICAgbGV0IGNpdHlOYW1lID0gbG9jYXRpb24ubmFtZTtcbiAgICAgICAgbGV0IGxvY2FsVGltZSA9IGxvY2F0aW9uLmxvY2FsdGltZS5zcGxpdChcIiBcIilbMV07XG5cblxuXG5cbiAgICAgICAgbGV0IGFzdHJvID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3RybztcbiAgICAgICAgbGV0IHN1bnNldFRpbWUgPSBOdW1iZXIoYXN0cm8uc3Vuc2V0LnNwbGl0KFwiIFwiKVswXS5zcGxpdChcIjpcIilbMF0pO1xuICAgICAgICBpZihhc3Ryby5zdW5zZXQuc3BsaXQoXCIgXCIpWzFdID09PSBcIlBNXCIpIHN1bnNldFRpbWUrPTEyO1xuICAgICAgICBcblxuICAgICAgICBsZXQgc3VucmlzZVRpbWUgPSBOdW1iZXIoYXN0cm8uc3VucmlzZS5zcGxpdChcIiBcIilbMF0uc3BsaXQoXCI6XCIpWzBdKTtcbiAgICAgICAgaWYoYXN0cm8uc3VucmlzZS5zcGxpdChcIiBcIilbMV0gPT09IFwiUE1cIikgc3VucmlzZVRpbWUrPTEyO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHN1bnNldFRpbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFRpbWUuc3BsaXQoXCI6XCIpWzBdKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coYXN0cm8pO1xuICAgICAgICBpZihjdXJyZW50LmlzX2RheSA9PT0gMSkgdHJhbnNpdGlvbkJvZHlCYWNrZ3JvdW5kKGdyYWRpZW50cy5taWRkYXlHcmFkaWVudCk7XG4gICAgICAgIGVsc2UgaWYoTnVtYmVyKGxvY2FsVGltZS5zcGxpdChcIjpcIilbMF0pID4gc3Vuc2V0VGltZSArIDIgIHx8IE51bWJlcihsb2NhbFRpbWUuc3BsaXQoXCI6XCIpWzBdKSA8IHN1bnJpc2VUaW1lIC0gMikgdHJhbnNpdGlvbkJvZHlCYWNrZ3JvdW5kKGdyYWRpZW50cy5uaWdodEdyYWRpZW50KTtcbiAgICAgICAgZWxzZSB0cmFuc2l0aW9uQm9keUJhY2tncm91bmQoZ3JhZGllbnRzLmV2ZW5pbmdHcmFkaWVudCk7XG4gICAgICAgIFxuXG5cblxuICAgICAgICBsZXQgdGVtcEMgPSBNYXRoLnJvdW5kKGN1cnJlbnQudGVtcF9jKTtcbiAgICAgICAgbGV0IHRlbXBGID0gTWF0aC5yb3VuZChjdXJyZW50LnRlbXBfZik7XG5cbiAgICAgICAgY2l0eU5hbWVEb20uaW5uZXJUZXh0ID0gY2l0eU5hbWU7XG4gICAgICAgIGN1cnJlbnRUaW1lRG9tLmlubmVyVGV4dCA9IGxvY2FsVGltZTtcblxuXG5cblxuICAgICAgICBpZihwcmVmZXJzVGVtcEMpe1xuICAgICAgICAgICAgY3VycmVudERlZ3JlZURvbS5pbm5lclRleHQgPSB0ZW1wQyArIFwiwrBcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnREZWdyZWVEb20uaW5uZXJUZXh0ID0gdGVtcEYgKyBcIsKwXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50Q29uZGl0aW9uRG9tLmlubmVyVGV4dCA9IGNvbmRpdGlvbjtcbiAgICAgICAgbGV0IGRheVRpbWUgXG4gICAgICAgIGlmKGN1cnJlbnQuaXNfZGF5ID09PSAxKSBkYXlUaW1lID0gXCJkYXlcIjsgXG4gICAgICAgIGVsc2UgZGF5VGltZSA9IFwibmlnaHRcIjtcblxuICAgICAgICBjdXJyZW50SWNvbkRvbS5zcmMgPSBpY29uc1tkYXlUaW1lXVtjb25kaXRpb24ucmVwbGFjZUFsbCgnICcsICctJyldO1xuICAgICAgICBjdXJyZW50SWNvbkRvbS5hbHQgPSBjb25kaXRpb247XG5cbi8vIHBvcHVsYXRlIG1vcmUgaW5mb3JtYXRpb24gZmllbGRcblxuICAgICAgICBwb3B1bGF0ZURldGFpbHMoZGF0YSk7XG5cbiAgICB9IGVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIpO1xuICAgICAgICBsZXQgZGF0YSA9IGZvcmVjYXN0UmVzcG9uc2UuZGF0YTtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IGRhdGEuZXJyb3IubWVzc2FnZTtcblxuICAgICAgICBzZWFyY2hFcnJvci5pbm5lclRleHQgPSBlcnJvck1lc3NhZ2U7XG4gICAgICAgIHNlYXJjaEVycm9yLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZURldGFpbHMoZGF0YSl7XG4gICAgbGV0IGZvcmVjYXN0RGF5cyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gICAgbGV0IGxvY2FsVGltZSA9IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLnNwbGl0KFwiIFwiKVsxXTtcblxuXG5cbiAgICAgICAgaWYobW9yZUluZm9ybWF0aW9uVHlwZSA9PT0gXCJob3VybHlcIil7XG4gICAgICAgICAgICBtb3JlSW5mb3JtYXRpb25Eb20uaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGxldCBjdXJyZW50SG91ciA9IE51bWJlcihsb2NhbFRpbWUuc3BsaXQoXCI6XCIpWzBdKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF5SWQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEhvdXIpO1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8MjQ7IGkrKyl7XG4gICAgICAgICAgICAgICAgY3VycmVudEhvdXIrKztcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50SG91ciA9PT0gMjQpe1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGF5SWQrKztcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEhvdXI9MDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgaG91ckRhdGEgPSBmb3JlY2FzdERheXNbY3VycmVudERheUlkXVtcImhvdXJcIl1bY3VycmVudEhvdXJdO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRheVRpbWU7XG4gICAgICAgICAgICAgICAgaWYoaG91ckRhdGEuaXNfZGF5ID09PSAxKSBkYXlUaW1lID0gXCJkYXlcIjtcbiAgICAgICAgICAgICAgICBlbHNlIGRheVRpbWUgPSBcIm5pZ2h0XCI7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmRpdGlvbiA9IGhvdXJEYXRhLmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgICAgICAgICAgICAgbGV0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGNvbnQuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItY29udFwiKTtcblxuXG4gICAgICAgICAgICAvLzxpbWcgY2xhc3M9XCJzbWFsbC13ZWF0aGVyLWljb25cIiBzcmM9XCJodHRwczovL2JtY2RuLm5sL2Fzc2V0cy93ZWF0aGVyLWljb25zL3YzLjAvZmlsbC9zdmcvb3ZlcmNhc3QtZGF5LWRyaXp6bGUuc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC13ZWF0aGVyLWljb25cIik7XG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGljb25zW2RheVRpbWVdW2NvbmRpdGlvbi5yZXBsYWNlQWxsKCcgJywgJy0nKV07XG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9IGNvbmRpdGlvbjtcbiAgICAgICAgICAgICAgICBjb250LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICAgICAgICAgICAgICBjb250LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgdGltZVNwYW4uY2xhc3NMaXN0LmFkZChcInRpbWUtc21hbGxcIik7XG4gICAgICAgICAgICAgICAgdGltZVNwYW4uaW5uZXJUZXh0ID0gY3VycmVudEhvdXIgKyBcIjowMFwiO1xuICAgICAgICAgICAgICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQodGltZVNwYW4pO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRhc2hTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgZGFzaFNwYW4uaW5uZXJUZXh0ID0gXCIgLSBcIjtcbiAgICAgICAgICAgICAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGRhc2hTcGFuKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdGVtcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICB0ZW1wU3Bhbi5jbGFzc0xpc3QuYWRkKFwiZGVncmVlcy1zbWFsbFwiKTtcbiAgICAgICAgICAgICAgICBpZihwcmVmZXJzVGVtcEMpe1xuICAgICAgICAgICAgICAgICAgICB0ZW1wU3Bhbi5pbm5lclRleHQgPSBNYXRoLnJvdW5kKGhvdXJEYXRhLnRlbXBfYykgKyBcIsKwXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFNwYW4uaW5uZXJUZXh0ID0gTWF0aC5yb3VuZChob3VyRGF0YS50ZW1wX2YpICsgXCLCsFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHRlbXBTcGFuKTtcblxuXG4gICAgICAgICAgICAgICAgbGV0IGhvdmVyQ29uZGl0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBob3ZlckNvbmRpdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiaG92ZXItY29uZGl0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGhvdmVyQ29uZGl0aW9uRGl2LmlubmVyVGV4dCA9IGNvbmRpdGlvbjtcbiAgICAgICAgICAgICAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGhvdmVyQ29uZGl0aW9uRGl2KTtcblxuICAgICAgICAgICAgICAgIG1vcmVJbmZvcm1hdGlvbkRvbS5hcHBlbmRDaGlsZChjb250KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG1vcmVJbmZvcm1hdGlvblR5cGUgPT09IFwiZGFpbHlcIil7XG4gICAgICAgICAgICBtb3JlSW5mb3JtYXRpb25Eb20uaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF5SWQgPSAxO1xuXG4gICAgICAgICAgICBmb3IobGV0IGk9MTsgaTwxMzsgaSsrKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF5SWQgPSBpO1xuXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgZGF5RGF0YSA9IGZvcmVjYXN0RGF5c1tjdXJyZW50RGF5SWRdW1wiZGF5XCJdO1xuICAgICAgICAgICAgICAgIGxldCBkYXlUaW1lID0gXCJkYXlcIjtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRheURhdGEpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNvbmRpdGlvbiA9IGRheURhdGEuY29uZGl0aW9uLnRleHQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgY29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgY29udC5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1jb250XCIpO1xuXG5cbiAgICAgICAgICAgIC8vPGltZyBjbGFzcz1cInNtYWxsLXdlYXRoZXItaWNvblwiIHNyYz1cImh0dHBzOi8vYm1jZG4ubmwvYXNzZXRzL3dlYXRoZXItaWNvbnMvdjMuMC9maWxsL3N2Zy9vdmVyY2FzdC1kYXktZHJpenpsZS5zdmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcInNtYWxsLXdlYXRoZXItaWNvblwiKTtcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gaWNvbnNbZGF5VGltZV1bY29uZGl0aW9uLnJlcGxhY2VBbGwoJyAnLCAnLScpXTtcbiAgICAgICAgICAgICAgICBpbWcuYWx0ID0gY29uZGl0aW9uO1xuICAgICAgICAgICAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgICAgICAgICAgIGxldCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuICAgICAgICAgICAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGltZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICB0aW1lU3Bhbi5jbGFzc0xpc3QuYWRkKFwidGltZS1zbWFsbFwiKTtcblxuICAgICAgICAgICAgICAgIGxldCBzcGxpdCA9IGZvcmVjYXN0RGF5c1tjdXJyZW50RGF5SWRdW1wiZGF0ZVwiXS5zcGxpdChcIi1cIik7XG5cbiAgICAgICAgICAgICAgICB0aW1lU3Bhbi5pbm5lclRleHQgPSBzcGxpdFsxXSArIFwiL1wiICsgc3BsaXRbMl07XG4gICAgICAgICAgICAgICAgaW5mb0Rpdi5hcHBlbmRDaGlsZCh0aW1lU3Bhbik7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGFzaFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBkYXNoU3Bhbi5pbm5lclRleHQgPSBcIiAtIFwiO1xuICAgICAgICAgICAgICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoZGFzaFNwYW4pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCB0ZW1wU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIHRlbXBTcGFuLmNsYXNzTGlzdC5hZGQoXCJkZWdyZWVzLXNtYWxsXCIpO1xuICAgICAgICAgICAgICAgIGlmKHByZWZlcnNUZW1wQyl7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBTcGFuLmlubmVyVGV4dCA9IE1hdGgucm91bmQoZGF5RGF0YS5hdmd0ZW1wX2MpICsgXCLCsFwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBTcGFuLmlubmVyVGV4dCA9IE1hdGgucm91bmQoZGF5RGF0YS5hdmd0ZW1wX2YpICsgXCLCsFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHRlbXBTcGFuKTtcblxuXG4gICAgICAgICAgICAgICAgbGV0IGhvdmVyQ29uZGl0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBob3ZlckNvbmRpdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiaG92ZXItY29uZGl0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGhvdmVyQ29uZGl0aW9uRGl2LmlubmVyVGV4dCA9IGNvbmRpdGlvbjtcbiAgICAgICAgICAgICAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGhvdmVyQ29uZGl0aW9uRGl2KTtcblxuICAgICAgICAgICAgICAgIG1vcmVJbmZvcm1hdGlvbkRvbS5hcHBlbmRDaGlsZChjb250KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufTsiLCJleHBvcnQgbGV0IGdyYWRpZW50cyA9IHtcbi8vICAgIG1vcm5pbmdHcmFkaWVudCA6IFwibGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjAwLDIwMCwxODAsMSkgLTEwMCUsIHJnYmEoMjAsMjEwLDI1NSwxKSAxMDAlKVwiLFxuICAgIG1pZGRheUdyYWRpZW50IDogXCJsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDE4MCwxOTAsMSkgMCUsIHJnYmEoNjAsMTIwLDIyNSwxKSAxMDAlKVwiLFxuICAgIGV2ZW5pbmdHcmFkaWVudCA6IFwibGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCw5MiwxNzAsMSkgMCUsIHJnYmEoMCwzNCwxMjYsMSkgMTAwJSlcIixcbiAgICBuaWdodEdyYWRpZW50IDogXCJsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg1LDAsNDAsMSkgMCUsIHJnYmEoMCw5LDQwLDEpIDEwMCUpXCIsXG59XG5leHBvcnQgbGV0IGdyYWRpZW50c0FyciA9IE9iamVjdC52YWx1ZXMoZ3JhZGllbnRzKTtcblxuXG5cbmxldCBzdGF0ZSA9IDA7XG5leHBvcnQgZnVuY3Rpb24gdHJhbnNpdGlvbkJvZHlCYWNrZ3JvdW5kKGdyYWRpZW50KXtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2R5T3ZlcmxheUdyYWRpZW50XCIpO1xuXG4gICAgaWYoc3RhdGUgPT09IDApe1xuICAgICAgICBzdGF0ZSA9IDE7XG4gICAgICAgIG92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gZ3JhZGllbnQ7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInRyYW5zaXRpb25pbmdcIik7XG4gICAgfSBlbHNlIGlmKHN0YXRlID09PSAxKXtcbiAgICAgICAgc3RhdGUgPSAwO1xuICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGdyYWRpZW50O1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc2l0aW9uaW5nXCIpOyBcbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IHsgS0VZIH0gZnJvbSBcIi4vQVBJLWtleXNcIjtcbmltcG9ydCB7IGNhdGNoRW0gfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5cbmNvbnN0IHdlYXRoZXJCYXNlVXJsID0gJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvJztcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyVG9kYXkoY2l0eU5hbWUpe1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7d2VhdGhlckJhc2VVcmx9Y3VycmVudC5qc29uP2tleT0ke0tFWX0mcT0ke2NpdHlOYW1lfWApO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIC8vcmV0dXJucyBbdHJ1ZSwgZXJyb3IgZGF0YV0gaWYgcmVzcG9uc2UgaXNudCBva1xuICAgIC8vcmV0dXJuIFtmYWxzZSwgd2VhdGhlciBkYXRhXSBpZiByZXNwb25zZSBpcyBva1xuICAgIGxldCBvayA9IHJlc3BvbnNlLm9rO1xuICAgIHJldHVybiB7b2ssIGRhdGF9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRm9yZWNhc3QoY2l0eU5hbWUpe1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7d2VhdGhlckJhc2VVcmx9Zm9yZWNhc3QuanNvbj9rZXk9JHtLRVl9JnE9JHtjaXR5TmFtZX0mZGF5cz0xNGApO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIC8vcmV0dXJucyBbdHJ1ZSwgZXJyb3IgZGF0YV0gaWYgcmVzcG9uc2UgaXNudCBva1xuICAgIC8vcmV0dXJuIFtmYWxzZSwgd2VhdGhlciBkYXRhXSBpZiByZXNwb25zZSBpcyBva1xuICAgIGxldCBvayA9IHJlc3BvbnNlLm9rO1xuICAgIHJldHVybiB7b2ssIGRhdGF9O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==