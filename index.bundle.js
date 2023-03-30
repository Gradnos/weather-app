(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFL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RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVPO0FBQ1Asb0NBQW9DLGVBQWUsb0JBQW9CLDBDQUFHLENBQUMsS0FBSyxTQUFTO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvQVBJLWtleXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaWNvbkdldHRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pY29ucy9kYXkvIHN5bmMgc3ZnJCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pY29ucy9uaWdodC8gc3luYyBzdmckIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VwZGF0ZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyRmV0Y2hlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9SYWxld2F5LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICBcXG4gICAgLS1iZWZvcmUtZ3JhZGllbnQ6IGJsYWNrO1xcbiAgICAtLWZvbnRjb2w6IHdoaXRlO1xcbiAgICAtLWRlZ3JlZVByZWZlcmVuY2UgOiBcXFwiQ1xcXCI7XFxufVxcblxcbip7XFxuICAgIGNvbG9yIDogdmFyKC0tZm9udGNvbCk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IE15Rm9udDtcXG59XFxuXFxuaHRtbHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbmJvZHl7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6MTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1dnc7XFxufVxcblxcbi5jdXJyZW50Vy1jb250e1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5vbmUtbGluZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlci1pY29ue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDoxZW07XFxuICAgIGxlZnQ6IC0xLjVlbTtcXG4gICAgaGVpZ2h0OiAxMGVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4uZGVncmVlLXByZWZlcmVuY2UtYnV0dG9uIGRpdntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgbGVmdDogMC4ycmVtO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxufVxcblxcbi5kZWdyZWUtcHJlZmVyZW5jZS1idXR0b24gZGl2LnJpZ2h0LXRvZ2dsZXtcXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMi4ycmVtKTtcXG59XFxuXFxuLmRlZ3JlZS1wcmVmZXJlbmNlLWJ1dHRvbntcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IDBweCAxcmVtIDBweCAwcHg7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XFxufVxcblxcbi5kZWdyZWVzOjphZnRlcntcXG4gICAgY29udGVudDogdmFyKC0tZGVncmVlUHJlZmVyZW5jZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAwLjNlbTtcXG4gICAgcmlnaHQ6IDAuN2VtO1xcbiAgICBib3R0b206IC0wLjFlbTtcXG59XFxuXFxuLmNpdHktbmFtZXtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuXFxuLmN1cnJlbnQtd2VhdGhlci1kZWdyZWV7XFxuICAgIGZvbnQtc2l6ZTogMTBlbTtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uY3VycmVudC1jb25kaXRpb257XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxufVxcblxcbmF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXI7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxufVxcblxcbmE6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuXFxuYTpmb2N1c3tcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IDNweDtcXG59XFxuXFxubmF2e1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxe1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtIDAgMDtcXG59XFxuXFxubGFiZWx7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXR7XFxuICAgIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcbiAgICBvdXRsaW5lLW9mZnNldDogMHB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XFxufVxcblxcblxcblxcbmlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6IHZhcigtLWZvbnRjb2wpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbmlucHV0OmhvdmVye1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcblxcbmlucHV0OmZvY3Vze1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAxMHB4O1xcbn1cXG5cXG5cXG4uc2VhcmNoLWJ1dHRvbiBzdmd7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZpbGw6IHZhcigtLWZvbnRjb2wpO1xcbiAgICBsZWZ0OiAwLjQ1cmVtO1xcbiAgICB0b3A6IDAuNDVyZW07XFxufVxcblxcbi5zZWFyY2gtYnV0dG9ue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiAwcHggMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLnNlYXJjaC1lcnJvcntcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxcmVtO1xcbiAgICBwYWRkaW5nOiAycHggNXB4O1xcbiAgICB0b3A6IC0wLjJyZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDM3LCAzNywgMC43OTUpO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKVxcbn1cXG5cXG4uc2VhcmNoLWVycm9yLnZpc2libGV7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbmJ1dHRvbjpmb2N1c3tcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IDEwcHg7XFxufVxcblxcblxcbi5ib2R5T3ZlcmxheUdyYWRpZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iZWZvcmUtZ3JhZGllbnQpO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBsaW5lYXI7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5ib2R5T3ZlcmxheUdyYWRpZW50LnRyYW5zaXRpb25pbmd7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5yaWdodHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9uc3tcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZGV0YWlscy1idXR0b25zIGJ1dHRvbntcXG4gICAgYm9yZGVyOiAwLjByZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gICAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMHB4IDAuMnJlbTtcXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9ucyBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9ucyBidXR0b24uc2VsZWN0ZWR7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxufVxcblxcblxcbi5kZXRhaWxzLWJhY2tncm91bmR7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuXFxuLmRldGFpbHMtY29udHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg2cmVtLCAxZnIpKTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ud2VhdGhlci1jb250e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93LXdyYXA6YnJlYWstd29yZDtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgLS1ob3Zlci1vcGFjaXR5OjA7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLWhvdmVyLW9wYWNpdHkpIDAuM3MgbGluZWFyO1xcbn1cXG5cXG4ud2VhdGhlci1jb250OmhvdmVye1xcbiAgICAtLWhvdmVyLW9wYWNpdHk6MTtcXG59XFxuXFxuLndlcnRoZXItaW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zbWFsbC13ZWF0aGVyLWljb257XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi50aW1lLXNtYWxse1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmRlZ3JlZXMtc21hbGx7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5ob3Zlci1jb25kaXRpb257XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3R0b206IC0wLjJyZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMTAwJSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggOXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1MSk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgb3BhY2l0eTogdmFyKC0taG92ZXItb3BhY2l0eSk7XFxuXFxuICAgIHJpZ2h0OiA1MCU7XFxuXFxuXFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogTXlGb250O1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XFxuICAgIFxcbiAgICBodG1se1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIH1cXG4gICAgLmN1cnJlbnRXLWNvbnR7XFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgfVxcbiAgICBuYXZ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICBtYWlue1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgfVxcbiAgICAucmlnaHR7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAgIC5jdXJyZW50Vy1jb250e1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIH1cXG4gICAgLmN1cnJlbnQtd2VhdGhlci1kZWdyZWV7XFxuICAgICAgICBmb250LXNpemU6IDdlbTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixNQUFNO0lBQ04sOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLFdB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SUFDNUMsZUFBZTtJQUNmLDZCQUE2Qjs7SUFFN0IsVUFBVTs7O0FBR2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQXlDO0FBQzdDOzs7QUFHQTs7SUFFSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLDZCQUE2QjtRQUM3QixTQUFTO0lBQ2I7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgXFxuICAgIC0tYmVmb3JlLWdyYWRpZW50OiBibGFjaztcXG4gICAgLS1mb250Y29sOiB3aGl0ZTtcXG4gICAgLS1kZWdyZWVQcmVmZXJlbmNlIDogXFxcIkNcXFwiO1xcbn1cXG5cXG4qe1xcbiAgICBjb2xvciA6IHZhcigtLWZvbnRjb2wpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBNeUZvbnQ7XFxufVxcblxcbmh0bWx7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OjE7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNXZ3O1xcbn1cXG5cXG4uY3VycmVudFctY29udHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ub25lLWxpbmV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItaWNvbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6MWVtO1xcbiAgICBsZWZ0OiAtMS41ZW07XFxuICAgIGhlaWdodDogMTBlbTtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuLmRlZ3JlZS1wcmVmZXJlbmNlLWJ1dHRvbiBkaXZ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGxlZnQ6IDAuMnJlbTtcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbn1cXG5cXG4uZGVncmVlLXByZWZlcmVuY2UtYnV0dG9uIGRpdi5yaWdodC10b2dnbGV7XFxuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDIuMnJlbSk7XFxufVxcblxcbi5kZWdyZWUtcHJlZmVyZW5jZS1idXR0b257XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiAwcHggMXJlbSAwcHggMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xcbn1cXG5cXG4uZGVncmVlczo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IHZhcigtLWRlZ3JlZVByZWZlcmVuY2UpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMC4zZW07XFxuICAgIHJpZ2h0OiAwLjdlbTtcXG4gICAgYm90dG9tOiAtMC4xZW07XFxufVxcblxcbi5jaXR5LW5hbWV7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcblxcbi5jdXJyZW50LXdlYXRoZXItZGVncmVle1xcbiAgICBmb250LXNpemU6IDEwZW07XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmN1cnJlbnQtY29uZGl0aW9ue1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuZm9vdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC40cmVtO1xcbn1cXG5cXG5he1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbn1cXG5cXG5hOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxufVxcblxcbmE6Zm9jdXN7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAzcHg7XFxufVxcblxcbm5hdntcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XFxufVxcblxcbmxhYmVse1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0e1xcbiAgICBwYWRkaW5nOiAwLjFyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IDBweDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xcbn1cXG5cXG5cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250Y29sKTtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5pbnB1dDpob3ZlcntcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG5cXG5pbnB1dDpmb2N1c3tcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBvdXRsaW5lLW9mZnNldDogMTBweDtcXG59XFxuXFxuXFxuLnNlYXJjaC1idXR0b24gc3Zne1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmaWxsOiB2YXIoLS1mb250Y29sKTtcXG4gICAgbGVmdDogMC40NXJlbTtcXG4gICAgdG9wOiAwLjQ1cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMHB4IDFyZW07XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XFxufVxcblxcbi5zZWFyY2gtZXJyb3J7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMXJlbTtcXG4gICAgcGFkZGluZzogMnB4IDVweDtcXG4gICAgdG9wOiAtMC4ycmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAzNywgMzcsIDAuNzk1KTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSlcXG59XFxuXFxuLnNlYXJjaC1lcnJvci52aXNpYmxle1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5idXR0b246Zm9jdXN7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAxMHB4O1xcbn1cXG5cXG5cXG4uYm9keU92ZXJsYXlHcmFkaWVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tYmVmb3JlLWdyYWRpZW50KTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgbGluZWFyO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uYm9keU92ZXJsYXlHcmFkaWVudC50cmFuc2l0aW9uaW5ne1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucmlnaHR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcbi5kZXRhaWxzLWJ1dHRvbnN7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9ucyBidXR0b257XFxuICAgIGJvcmRlcjogMC4wcmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wKTtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgIG91dGxpbmU6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IDBweCAwLjJyZW07XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBsaW5lYXI7XFxufVxcblxcbi5kZXRhaWxzLWJ1dHRvbnMgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5kZXRhaWxzLWJ1dHRvbnMgYnV0dG9uLnNlbGVjdGVke1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbn1cXG5cXG5cXG4uZGV0YWlscy1iYWNrZ3JvdW5ke1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblxcblxcbi5kZXRhaWxzLWNvbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNnJlbSwgMWZyKSk7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLndlYXRoZXItY29udHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIC0taG92ZXItb3BhY2l0eTowO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1ob3Zlci1vcGFjaXR5KSAwLjNzIGxpbmVhcjtcXG59XFxuXFxuLndlYXRoZXItY29udDpob3ZlcntcXG4gICAgLS1ob3Zlci1vcGFjaXR5OjE7XFxufVxcblxcbi53ZXJ0aGVyLWluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc21hbGwtd2VhdGhlci1pY29ue1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4udGltZS1zbWFsbHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kZWdyZWVzLXNtYWxse1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uaG92ZXItY29uZGl0aW9ue1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBmb250LXdlaWdodDogMTAwMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm90dG9tOiAtMC4ycmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDEwMCUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDlweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NTEpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIG9wYWNpdHk6IHZhcigtLWhvdmVyLW9wYWNpdHkpO1xcblxcbiAgICByaWdodDogNTAlO1xcblxcblxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IE15Rm9udDtcXG4gICAgc3JjOiB1cmwoLi9SYWxld2F5LVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxufVxcblxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XFxuICAgIFxcbiAgICBodG1se1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIH1cXG4gICAgLmN1cnJlbnRXLWNvbnR7XFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgfVxcbiAgICBuYXZ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICBtYWlue1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgfVxcbiAgICAucmlnaHR7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAgIC5jdXJyZW50Vy1jb250e1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIH1cXG4gICAgLmN1cnJlbnQtd2VhdGhlci1kZWdyZWV7XFxuICAgICAgICBmb250LXNpemU6IDdlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBLRVkgPSAnOGMyYjk2ZjMwZGYwNDkzZmFiYTc1MTQ4MjMyNTAzJzsiLCJjb25zdCBuaWdodEljb25zQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi9pY29ucy9uaWdodCcsIHRydWUsIC9zdmckLyk7XG5cbmV4cG9ydCBjb25zdCBuaWdodCA9IG5pZ2h0SWNvbnNDb250ZXh0LmtleXMoKS5yZWR1Y2UoIChuaWdodCwgZmlsZSkgPT4ge1xuXHRjb25zdCBTVkcgPSBuaWdodEljb25zQ29udGV4dChmaWxlKTtcblx0Y29uc3QgbGFiZWwgPSBmaWxlLnNsaWNlKDIsIC00KTsgLy8gc3RyaXAgJy4vJyBhbmQgJy5zdmcnXG5cdG5pZ2h0W2xhYmVsXSA9IFNWRztcbiAgICAgICAgcmV0dXJuIG5pZ2h0O1xufSwge30pO1xuXG5jb25zdCBkYXlJY29uc0NvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJy4vaWNvbnMvZGF5JywgdHJ1ZSwgL3N2ZyQvKTtcbiBcbmV4cG9ydCBjb25zdCBkYXkgPSBkYXlJY29uc0NvbnRleHQua2V5cygpLnJlZHVjZSggKGRheSwgZmlsZSkgPT4ge1xuXHRjb25zdCBTVkcgPSBkYXlJY29uc0NvbnRleHQoZmlsZSk7XG5cdGNvbnN0IGxhYmVsID0gZmlsZS5zbGljZSgyLCAtNCk7IC8vIHN0cmlwICcuLycgYW5kICcuc3ZnJ1xuXHRkYXlbbGFiZWxdID0gU1ZHO1xuICAgICAgICByZXR1cm4gZGF5O1xufSwge30pO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL0JsaXp6YXJkLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9CbGl6emFyZC5zdmdcIixcblx0XCIuL0Jsb3dpbmctc25vdy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvQmxvd2luZy1zbm93LnN2Z1wiLFxuXHRcIi4vQ2xvdWR5LnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9DbG91ZHkuc3ZnXCIsXG5cdFwiLi9Gb2cuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L0ZvZy5zdmdcIixcblx0XCIuL0ZyZWV6aW5nLWRyaXp6bGUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L0ZyZWV6aW5nLWRyaXp6bGUuc3ZnXCIsXG5cdFwiLi9GcmVlemluZy1mb2cuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L0ZyZWV6aW5nLWZvZy5zdmdcIixcblx0XCIuL0hlYXZ5LWZyZWV6aW5nLWRyaXp6bGUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L0hlYXZ5LWZyZWV6aW5nLWRyaXp6bGUuc3ZnXCIsXG5cdFwiLi9IZWF2eS1yYWluLWF0LXRpbWVzLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9IZWF2eS1yYWluLWF0LXRpbWVzLnN2Z1wiLFxuXHRcIi4vSGVhdnktcmFpbi5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvSGVhdnktcmFpbi5zdmdcIixcblx0XCIuL0hlYXZ5LXNub3cuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L0hlYXZ5LXNub3cuc3ZnXCIsXG5cdFwiLi9JY2UtcGVsbGV0cy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvSWNlLXBlbGxldHMuc3ZnXCIsXG5cdFwiLi9MaWdodC1kcml6emxlLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9MaWdodC1kcml6emxlLnN2Z1wiLFxuXHRcIi4vTGlnaHQtZnJlZXppbmctcmFpbi5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvTGlnaHQtZnJlZXppbmctcmFpbi5zdmdcIixcblx0XCIuL0xpZ2h0LXJhaW4tc2hvd2VyLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9MaWdodC1yYWluLXNob3dlci5zdmdcIixcblx0XCIuL0xpZ2h0LXJhaW4uc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L0xpZ2h0LXJhaW4uc3ZnXCIsXG5cdFwiLi9MaWdodC1zaG93ZXJzLW9mLWljZS1wZWxsZXRzLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9MaWdodC1zaG93ZXJzLW9mLWljZS1wZWxsZXRzLnN2Z1wiLFxuXHRcIi4vTGlnaHQtc2xlZXQtc2hvd2Vycy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvTGlnaHQtc2xlZXQtc2hvd2Vycy5zdmdcIixcblx0XCIuL0xpZ2h0LXNsZWV0LnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9MaWdodC1zbGVldC5zdmdcIixcblx0XCIuL0xpZ2h0LXNub3ctc2hvd2Vycy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvTGlnaHQtc25vdy1zaG93ZXJzLnN2Z1wiLFxuXHRcIi4vTGlnaHQtc25vdy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvTGlnaHQtc25vdy5zdmdcIixcblx0XCIuL01pc3Quc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L01pc3Quc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1vci1oZWF2eS1mcmVlemluZy1yYWluLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9Nb2RlcmF0ZS1vci1oZWF2eS1mcmVlemluZy1yYWluLnN2Z1wiLFxuXHRcIi4vTW9kZXJhdGUtb3ItaGVhdnktcmFpbi1zaG93ZXIuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L01vZGVyYXRlLW9yLWhlYXZ5LXJhaW4tc2hvd2VyLnN2Z1wiLFxuXHRcIi4vTW9kZXJhdGUtb3ItaGVhdnktcmFpbi13aXRoLXRodW5kZXIuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L01vZGVyYXRlLW9yLWhlYXZ5LXJhaW4td2l0aC10aHVuZGVyLnN2Z1wiLFxuXHRcIi4vTW9kZXJhdGUtb3ItaGVhdnktc2hvd2Vycy1vZi1pY2UtcGVsbGV0cy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvTW9kZXJhdGUtb3ItaGVhdnktc2hvd2Vycy1vZi1pY2UtcGVsbGV0cy5zdmdcIixcblx0XCIuL01vZGVyYXRlLW9yLWhlYXZ5LXNsZWV0LXNob3dlcnMuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L01vZGVyYXRlLW9yLWhlYXZ5LXNsZWV0LXNob3dlcnMuc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1vci1oZWF2eS1zbGVldC5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvTW9kZXJhdGUtb3ItaGVhdnktc2xlZXQuc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1vci1oZWF2eS1zbm93LXNob3dlcnMuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L01vZGVyYXRlLW9yLWhlYXZ5LXNub3ctc2hvd2Vycy5zdmdcIixcblx0XCIuL01vZGVyYXRlLW9yLWhlYXZ5LXNub3ctd2l0aC10aHVuZGVyLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9Nb2RlcmF0ZS1vci1oZWF2eS1zbm93LXdpdGgtdGh1bmRlci5zdmdcIixcblx0XCIuL01vZGVyYXRlLXJhaW4tYXQtdGltZXMuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L01vZGVyYXRlLXJhaW4tYXQtdGltZXMuc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1yYWluLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9Nb2RlcmF0ZS1yYWluLnN2Z1wiLFxuXHRcIi4vTW9kZXJhdGUtc25vdy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvTW9kZXJhdGUtc25vdy5zdmdcIixcblx0XCIuL092ZXJjYXN0LnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9PdmVyY2FzdC5zdmdcIixcblx0XCIuL1BhcnRseS1jbG91ZHkuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L1BhcnRseS1jbG91ZHkuc3ZnXCIsXG5cdFwiLi9QYXRjaHktZnJlZXppbmctZHJpenpsZS1wb3NzaWJsZS5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvUGF0Y2h5LWZyZWV6aW5nLWRyaXp6bGUtcG9zc2libGUuc3ZnXCIsXG5cdFwiLi9QYXRjaHktaGVhdnktc25vdy5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvUGF0Y2h5LWhlYXZ5LXNub3cuc3ZnXCIsXG5cdFwiLi9QYXRjaHktbGlnaHQtZHJpenpsZS5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvUGF0Y2h5LWxpZ2h0LWRyaXp6bGUuc3ZnXCIsXG5cdFwiLi9QYXRjaHktbGlnaHQtcmFpbi13aXRoLXRodW5kZXIuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L1BhdGNoeS1saWdodC1yYWluLXdpdGgtdGh1bmRlci5zdmdcIixcblx0XCIuL1BhdGNoeS1saWdodC1yYWluLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9QYXRjaHktbGlnaHQtcmFpbi5zdmdcIixcblx0XCIuL1BhdGNoeS1saWdodC1zbm93LXdpdGgtdGh1bmRlci5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvUGF0Y2h5LWxpZ2h0LXNub3ctd2l0aC10aHVuZGVyLnN2Z1wiLFxuXHRcIi4vUGF0Y2h5LWxpZ2h0LXNub3cuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L1BhdGNoeS1saWdodC1zbm93LnN2Z1wiLFxuXHRcIi4vUGF0Y2h5LW1vZGVyYXRlLXNub3cuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L1BhdGNoeS1tb2RlcmF0ZS1zbm93LnN2Z1wiLFxuXHRcIi4vUGF0Y2h5LXJhaW4tcG9zc2libGUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L1BhdGNoeS1yYWluLXBvc3NpYmxlLnN2Z1wiLFxuXHRcIi4vUGF0Y2h5LXNsZWV0LXBvc3NpYmxlLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9QYXRjaHktc2xlZXQtcG9zc2libGUuc3ZnXCIsXG5cdFwiLi9TdW5ueS5zdmdcIjogXCIuL3NyYy9pY29ucy9kYXkvU3Vubnkuc3ZnXCIsXG5cdFwiLi9UaHVuZGVyeS1vdXRicmVha3MtcG9zc2libGUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L1RodW5kZXJ5LW91dGJyZWFrcy1wb3NzaWJsZS5zdmdcIixcblx0XCIuL1RvcnJlbnRpYWwtcmFpbi1zaG93ZXIuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZGF5L1RvcnJlbnRpYWwtcmFpbi1zaG93ZXIuc3ZnXCIsXG5cdFwiLi9wYXJ0bHktY2xvdWR5LWRheS1kcml6emxlLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2RheS9wYXJ0bHktY2xvdWR5LWRheS1kcml6emxlLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pY29ucy9kYXkgc3luYyByZWN1cnNpdmUgc3ZnJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9CbGl6emFyZC5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9CbGl6emFyZC5zdmdcIixcblx0XCIuL0Jsb3dpbmctc25vdy5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9CbG93aW5nLXNub3cuc3ZnXCIsXG5cdFwiLi9DbGVhci5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9DbGVhci5zdmdcIixcblx0XCIuL0Nsb3VkeS5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9DbG91ZHkuc3ZnXCIsXG5cdFwiLi9Gb2cuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvRm9nLnN2Z1wiLFxuXHRcIi4vRnJlZXppbmctZHJpenpsZS5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9GcmVlemluZy1kcml6emxlLnN2Z1wiLFxuXHRcIi4vRnJlZXppbmctZm9nLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0ZyZWV6aW5nLWZvZy5zdmdcIixcblx0XCIuL0hlYXZ5LWZyZWV6aW5nLWRyaXp6bGUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvSGVhdnktZnJlZXppbmctZHJpenpsZS5zdmdcIixcblx0XCIuL0hlYXZ5LXJhaW4tYXQtdGltZXMuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvSGVhdnktcmFpbi1hdC10aW1lcy5zdmdcIixcblx0XCIuL0hlYXZ5LXJhaW4uc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvSGVhdnktcmFpbi5zdmdcIixcblx0XCIuL0hlYXZ5LXNub3cuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvSGVhdnktc25vdy5zdmdcIixcblx0XCIuL0ljZS1wZWxsZXRzLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0ljZS1wZWxsZXRzLnN2Z1wiLFxuXHRcIi4vTGlnaHQtZHJpenpsZS5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9MaWdodC1kcml6emxlLnN2Z1wiLFxuXHRcIi4vTGlnaHQtZnJlZXppbmctcmFpbi5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9MaWdodC1mcmVlemluZy1yYWluLnN2Z1wiLFxuXHRcIi4vTGlnaHQtcmFpbi1zaG93ZXIuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvTGlnaHQtcmFpbi1zaG93ZXIuc3ZnXCIsXG5cdFwiLi9MaWdodC1yYWluLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0xpZ2h0LXJhaW4uc3ZnXCIsXG5cdFwiLi9MaWdodC1zaG93ZXJzLW9mLWljZS1wZWxsZXRzLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0xpZ2h0LXNob3dlcnMtb2YtaWNlLXBlbGxldHMuc3ZnXCIsXG5cdFwiLi9MaWdodC1zbGVldC1zaG93ZXJzLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0xpZ2h0LXNsZWV0LXNob3dlcnMuc3ZnXCIsXG5cdFwiLi9MaWdodC1zbGVldC5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9MaWdodC1zbGVldC5zdmdcIixcblx0XCIuL0xpZ2h0LXNub3ctc2hvd2Vycy5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9MaWdodC1zbm93LXNob3dlcnMuc3ZnXCIsXG5cdFwiLi9MaWdodC1zbm93LnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L0xpZ2h0LXNub3cuc3ZnXCIsXG5cdFwiLi9NaXN0LnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L01pc3Quc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1vci1oZWF2eS1mcmVlemluZy1yYWluLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L01vZGVyYXRlLW9yLWhlYXZ5LWZyZWV6aW5nLXJhaW4uc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1vci1oZWF2eS1yYWluLXNob3dlci5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9Nb2RlcmF0ZS1vci1oZWF2eS1yYWluLXNob3dlci5zdmdcIixcblx0XCIuL01vZGVyYXRlLW9yLWhlYXZ5LXJhaW4td2l0aC10aHVuZGVyLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L01vZGVyYXRlLW9yLWhlYXZ5LXJhaW4td2l0aC10aHVuZGVyLnN2Z1wiLFxuXHRcIi4vTW9kZXJhdGUtb3ItaGVhdnktc2hvd2Vycy1vZi1pY2UtcGVsbGV0cy5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9Nb2RlcmF0ZS1vci1oZWF2eS1zaG93ZXJzLW9mLWljZS1wZWxsZXRzLnN2Z1wiLFxuXHRcIi4vTW9kZXJhdGUtb3ItaGVhdnktc2xlZXQtc2hvd2Vycy5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9Nb2RlcmF0ZS1vci1oZWF2eS1zbGVldC1zaG93ZXJzLnN2Z1wiLFxuXHRcIi4vTW9kZXJhdGUtb3ItaGVhdnktc2xlZXQuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvTW9kZXJhdGUtb3ItaGVhdnktc2xlZXQuc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1vci1oZWF2eS1zbm93LXNob3dlcnMuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvTW9kZXJhdGUtb3ItaGVhdnktc25vdy1zaG93ZXJzLnN2Z1wiLFxuXHRcIi4vTW9kZXJhdGUtb3ItaGVhdnktc25vdy13aXRoLXRodW5kZXIuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvTW9kZXJhdGUtb3ItaGVhdnktc25vdy13aXRoLXRodW5kZXIuc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1yYWluLWF0LXRpbWVzLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L01vZGVyYXRlLXJhaW4tYXQtdGltZXMuc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1yYWluLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L01vZGVyYXRlLXJhaW4uc3ZnXCIsXG5cdFwiLi9Nb2RlcmF0ZS1zbm93LnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L01vZGVyYXRlLXNub3cuc3ZnXCIsXG5cdFwiLi9PdmVyY2FzdC5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9PdmVyY2FzdC5zdmdcIixcblx0XCIuL1BhcnRseS1jbG91ZHkuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvUGFydGx5LWNsb3VkeS5zdmdcIixcblx0XCIuL1BhdGNoeS1mcmVlemluZy1kcml6emxlLXBvc3NpYmxlLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L1BhdGNoeS1mcmVlemluZy1kcml6emxlLXBvc3NpYmxlLnN2Z1wiLFxuXHRcIi4vUGF0Y2h5LWhlYXZ5LXNub3cuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvUGF0Y2h5LWhlYXZ5LXNub3cuc3ZnXCIsXG5cdFwiLi9QYXRjaHktbGlnaHQtZHJpenpsZS5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9QYXRjaHktbGlnaHQtZHJpenpsZS5zdmdcIixcblx0XCIuL1BhdGNoeS1saWdodC1yYWluLXdpdGgtdGh1bmRlci5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9QYXRjaHktbGlnaHQtcmFpbi13aXRoLXRodW5kZXIuc3ZnXCIsXG5cdFwiLi9QYXRjaHktbGlnaHQtcmFpbi5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9QYXRjaHktbGlnaHQtcmFpbi5zdmdcIixcblx0XCIuL1BhdGNoeS1saWdodC1zbm93LXdpdGgtdGh1bmRlci5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9QYXRjaHktbGlnaHQtc25vdy13aXRoLXRodW5kZXIuc3ZnXCIsXG5cdFwiLi9QYXRjaHktbGlnaHQtc25vdy5zdmdcIjogXCIuL3NyYy9pY29ucy9uaWdodC9QYXRjaHktbGlnaHQtc25vdy5zdmdcIixcblx0XCIuL1BhdGNoeS1tb2RlcmF0ZS1zbm93LnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L1BhdGNoeS1tb2RlcmF0ZS1zbm93LnN2Z1wiLFxuXHRcIi4vUGF0Y2h5LXJhaW4tcG9zc2libGUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvUGF0Y2h5LXJhaW4tcG9zc2libGUuc3ZnXCIsXG5cdFwiLi9QYXRjaHktc2xlZXQtcG9zc2libGUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvUGF0Y2h5LXNsZWV0LXBvc3NpYmxlLnN2Z1wiLFxuXHRcIi4vVGh1bmRlcnktb3V0YnJlYWtzLXBvc3NpYmxlLnN2Z1wiOiBcIi4vc3JjL2ljb25zL25pZ2h0L1RodW5kZXJ5LW91dGJyZWFrcy1wb3NzaWJsZS5zdmdcIixcblx0XCIuL1RvcnJlbnRpYWwtcmFpbi1zaG93ZXIuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvVG9ycmVudGlhbC1yYWluLXNob3dlci5zdmdcIixcblx0XCIuL3BhcnRseS1jbG91ZHktZGF5LWRyaXp6bGUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbmlnaHQvcGFydGx5LWNsb3VkeS1kYXktZHJpenpsZS5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaWNvbnMvbmlnaHQgc3luYyByZWN1cnNpdmUgc3ZnJFwiOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCB7IGdyYWRpZW50cywgZ3JhZGllbnRzQXJyLCB0cmFuc2l0aW9uQm9keUJhY2tncm91bmQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgKiBhcyB3ZWF0aGVyRmV0Y2hlciBmcm9tICcuL3dlYXRoZXJGZXRjaGVyLmpzJztcbmltcG9ydCB7IHVwZGF0ZURpc3BsYXkgfSBmcm9tIFwiLi91cGRhdGVEaXNwbGF5XCI7XG5pbXBvcnQgeyBwb3B1bGF0ZURldGFpbHMgfSBmcm9tIFwiLi91cGRhdGVEaXNwbGF5XCI7XG5cblxuXG5sZXQgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG5cblxubGV0IHRvZ2dsZURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZmVyZW5jZS10b2dnbGVcIik7IFxuXG5cbmV4cG9ydCBsZXQgY3VycmVudENpdHkgPSBcInRiaWxpc2lcIjsgXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudENpdHkoY2l0eSl7XG4gICAgY3VycmVudENpdHkgPSBjaXR5O1xufVxuIFxuXG5cbmV4cG9ydCBsZXQgcHJlZmVyc1RlbXBDID0gdHJ1ZTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcmVmZXJzVGVtcEMoYm9vbGVhbil7XG4gICAgcHJlZmVyc1RlbXBDID0gYm9vbGVhbjtcblxuICAgIGlmKHByZWZlcnNUZW1wQyA9PT0gdHJ1ZSl7XG4gICAgICAgIHRvZ2dsZURvbS5jbGFzc0xpc3QucmVtb3ZlKFwicmlnaHQtdG9nZ2xlXCIpO1xuICAgICAgICB0b2dnbGVEb20uaW5uZXJUZXh0ID0gXCJDXCI7XG4gICAgICAgIHIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWRlZ3JlZVByZWZlcmVuY2VcIiwgJ1wiQ1wiJyk7XG4gICAgfVxuXG4gICAgaWYocHJlZmVyc1RlbXBDID09PSBmYWxzZSl7XG4gICAgICAgIHRvZ2dsZURvbS5jbGFzc0xpc3QuYWRkKFwicmlnaHQtdG9nZ2xlXCIpO1xuICAgICAgICB0b2dnbGVEb20uaW5uZXJUZXh0ID0gXCJGXCI7XG4gICAgICAgIHIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWRlZ3JlZVByZWZlcmVuY2VcIiwgJ1wiRlwiJyk7XG4gICAgfVxuXG4gICAgdXBkYXRlRGlzcGxheShjdXJyZW50Q2l0eSk7XG59XG5cblxuZXhwb3J0IGxldCBtb3JlSW5mb3JtYXRpb25UeXBlID0gXCJob3VybHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBzZXRNb3JlSW5mb3JtYXRpb25UeXBlKHN0cmluZyl7XG4gICAgbW9yZUluZm9ybWF0aW9uVHlwZSA9IHN0cmluZztcbn1cblxubGV0IG1vcmVJbmZvcm1hdGlvbkJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1idXR0b25zXCIpLmNoaWxkcmVuKTtcblxuXG5cblxubW9yZUluZm9ybWF0aW9uQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgKCk9PntcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgbGV0IGN1cnJlbnRUeXBlID0gYnV0dG9uLmRhdGFzZXQudHlwZTtcbiAgICAgICAgc2V0TW9yZUluZm9ybWF0aW9uVHlwZShjdXJyZW50VHlwZSk7XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoY3VycmVudENpdHkpO1xuXG5cbiAgICAgICAgbW9yZUluZm9ybWF0aW9uQnV0dG9ucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgICAgIGxldCBidG5UeXBlID0gYnRuLmRhdGFzZXQudHlwZTtcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUeXBlICE9PSBidG5UeXBlKXtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxufSk7XG5cblxuXG5sZXQgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYnV0dG9uXCIpO1xubGV0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtaW5wdXRcIik7XG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpPT57XG4gICAgaWYoZS5rZXkgPT09IFwiRW50ZXJcIil7XG4gICAgICAgIHNlYXJjaEJ1dHRvbi5jbGljaygpO1xuICAgIH1cbn0pO1xuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIGxldCBjaXR5TmFtZSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGlmKGNpdHlOYW1lID09PSBcIlwiKSByZXR1cm47XG4gICAgdXBkYXRlRGlzcGxheShjaXR5TmFtZSk7XG59KTtcblxuXG5cbmxldCBjaGFuZ2VQcmVmZXJzVGVtcENCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlZ3JlZS1wcmVmZXJlbmNlLWJ1dHRvblwiKTtcbmNoYW5nZVByZWZlcnNUZW1wQ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBzZXRQcmVmZXJzVGVtcEMoIXByZWZlcnNUZW1wQyk7XG59KTtcblxuXG51cGRhdGVEaXNwbGF5KFwidGJpbGlzaVwiKTtcblxuIiwiaW1wb3J0ICogYXMgd2VhdGhlckZldGNoZXIgZnJvbSAnLi93ZWF0aGVyRmV0Y2hlci5qcyc7XG5pbXBvcnQgeyBwcmVmZXJzVGVtcEMsIG1vcmVJbmZvcm1hdGlvblR5cGUgfSBmcm9tIFwiLlwiO1xuaW1wb3J0ICogYXMgaWNvbnMgZnJvbSAnLi9pY29uR2V0dGVyLmpzJztcbmltcG9ydCB7IHRyYW5zaXRpb25Cb2R5QmFja2dyb3VuZCwgZ3JhZGllbnRzIH0gZnJvbSAnLi91dGlsaXR5LmpzJztcbmltcG9ydCB7IHNldEN1cnJlbnRDaXR5IH0gZnJvbSAnLic7XG5cbmxldCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50Vy1jb250XCIpO1xubGV0IGNpdHlOYW1lRG9tID0gd2VhdGhlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmNpdHktbmFtZVwiKTtcbmxldCBjdXJyZW50VGltZURvbSA9IHdlYXRoZXJDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXRpbWVcIik7XG5sZXQgY3VycmVudEljb25Eb20gPSB3ZWF0aGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC13ZWF0aGVyLWljb25cIik7XG5sZXQgY3VycmVudERlZ3JlZURvbSA9IHdlYXRoZXJDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXdlYXRoZXItZGVncmVlXCIpO1xubGV0IGN1cnJlbnRDb25kaXRpb25Eb20gPSB3ZWF0aGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1jb25kaXRpb25cIik7XG5sZXQgbW9yZUluZm9ybWF0aW9uRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWNvbnRcIik7XG5sZXQgc2VhcmNoRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1lcnJvclwiKTtcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRGlzcGxheShjaXR5TmFtZSl7XG5cblxuXG4gICAgbGV0IGZvcmVjYXN0UmVzcG9uc2UgPSBhd2FpdCB3ZWF0aGVyRmV0Y2hlci5mZXRjaFdlYXRoZXJGb3JlY2FzdChjaXR5TmFtZSk7XG5cbiAgICBsZXQgTkFNRSA9IGNpdHlOYW1lO1xuXG4gICAgaWYoZm9yZWNhc3RSZXNwb25zZS5vayl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0Y2l0eVwiKVxuICAgICAgICBzZXRDdXJyZW50Q2l0eShOQU1FKTtcbiAgICAgICAgc2VhcmNoRXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG5cbiAgICAgICAgbGV0IGRhdGEgPSBmb3JlY2FzdFJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGxldCBsb2NhdGlvbiA9IGRhdGEubG9jYXRpb247XG4gICAgICAgIGxldCBjdXJyZW50ID0gZGF0YS5jdXJyZW50O1xuXG5cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIGxldCBjb25kaXRpb24gPSBjdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgICAgIGxldCBjaXR5TmFtZSA9IGxvY2F0aW9uLm5hbWU7XG4gICAgICAgIGxldCBsb2NhbFRpbWUgPSBsb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoXCIgXCIpWzFdO1xuXG5cblxuXG4gICAgICAgIGxldCBhc3RybyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm87XG4gICAgICAgIGxldCBzdW5zZXRUaW1lID0gTnVtYmVyKGFzdHJvLnN1bnNldC5zcGxpdChcIiBcIilbMF0uc3BsaXQoXCI6XCIpWzBdKTtcbiAgICAgICAgaWYoYXN0cm8uc3Vuc2V0LnNwbGl0KFwiIFwiKVsxXSA9PT0gXCJQTVwiKSBzdW5zZXRUaW1lKz0xMjtcbiAgICAgICAgXG5cbiAgICAgICAgbGV0IHN1bnJpc2VUaW1lID0gTnVtYmVyKGFzdHJvLnN1bnJpc2Uuc3BsaXQoXCIgXCIpWzBdLnNwbGl0KFwiOlwiKVswXSk7XG4gICAgICAgIGlmKGFzdHJvLnN1bnJpc2Uuc3BsaXQoXCIgXCIpWzFdID09PSBcIlBNXCIpIHN1bnJpc2VUaW1lKz0xMjtcblxuICAgICAgICBjb25zb2xlLmxvZyhzdW5zZXRUaW1lKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxUaW1lLnNwbGl0KFwiOlwiKVswXSk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGFzdHJvKTtcbiAgICAgICAgaWYoY3VycmVudC5pc19kYXkgPT09IDEpIHRyYW5zaXRpb25Cb2R5QmFja2dyb3VuZChncmFkaWVudHMubWlkZGF5R3JhZGllbnQpO1xuICAgICAgICBlbHNlIGlmKE51bWJlcihsb2NhbFRpbWUuc3BsaXQoXCI6XCIpWzBdKSA+IHN1bnNldFRpbWUgKyAyICB8fCBOdW1iZXIobG9jYWxUaW1lLnNwbGl0KFwiOlwiKVswXSkgPCBzdW5yaXNlVGltZSAtIDIpIHRyYW5zaXRpb25Cb2R5QmFja2dyb3VuZChncmFkaWVudHMubmlnaHRHcmFkaWVudCk7XG4gICAgICAgIGVsc2UgdHJhbnNpdGlvbkJvZHlCYWNrZ3JvdW5kKGdyYWRpZW50cy5ldmVuaW5nR3JhZGllbnQpO1xuICAgICAgICBcblxuXG5cbiAgICAgICAgbGV0IHRlbXBDID0gTWF0aC5yb3VuZChjdXJyZW50LnRlbXBfYyk7XG4gICAgICAgIGxldCB0ZW1wRiA9IE1hdGgucm91bmQoY3VycmVudC50ZW1wX2YpO1xuXG4gICAgICAgIGNpdHlOYW1lRG9tLmlubmVyVGV4dCA9IGNpdHlOYW1lO1xuICAgICAgICBjdXJyZW50VGltZURvbS5pbm5lclRleHQgPSBsb2NhbFRpbWU7XG5cblxuXG5cbiAgICAgICAgaWYocHJlZmVyc1RlbXBDKXtcbiAgICAgICAgICAgIGN1cnJlbnREZWdyZWVEb20uaW5uZXJUZXh0ID0gdGVtcEMgKyBcIsKwXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50RGVncmVlRG9tLmlubmVyVGV4dCA9IHRlbXBGICsgXCLCsFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudENvbmRpdGlvbkRvbS5pbm5lclRleHQgPSBjb25kaXRpb247XG4gICAgICAgIGxldCBkYXlUaW1lIFxuICAgICAgICBpZihjdXJyZW50LmlzX2RheSA9PT0gMSkgZGF5VGltZSA9IFwiZGF5XCI7IFxuICAgICAgICBlbHNlIGRheVRpbWUgPSBcIm5pZ2h0XCI7XG5cbiAgICAgICAgY3VycmVudEljb25Eb20uc3JjID0gaWNvbnNbZGF5VGltZV1bY29uZGl0aW9uLnJlcGxhY2VBbGwoJyAnLCAnLScpXTtcbiAgICAgICAgY3VycmVudEljb25Eb20uYWx0ID0gY29uZGl0aW9uO1xuXG4vLyBwb3B1bGF0ZSBtb3JlIGluZm9ybWF0aW9uIGZpZWxkXG5cbiAgICAgICAgcG9wdWxhdGVEZXRhaWxzKGRhdGEpO1xuXG4gICAgfSBlbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhcImVyclwiKTtcbiAgICAgICAgbGV0IGRhdGEgPSBmb3JlY2FzdFJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBkYXRhLmVycm9yLm1lc3NhZ2U7XG5cbiAgICAgICAgc2VhcmNoRXJyb3IuaW5uZXJUZXh0ID0gZXJyb3JNZXNzYWdlO1xuICAgICAgICBzZWFyY2hFcnJvci5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVEZXRhaWxzKGRhdGEpe1xuICAgIGxldCBmb3JlY2FzdERheXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICAgIGxldCBsb2NhbFRpbWUgPSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zcGxpdChcIiBcIilbMV07XG5cblxuXG4gICAgICAgIGlmKG1vcmVJbmZvcm1hdGlvblR5cGUgPT09IFwiaG91cmx5XCIpe1xuICAgICAgICAgICAgbW9yZUluZm9ybWF0aW9uRG9tLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgY3VycmVudEhvdXIgPSBOdW1iZXIobG9jYWxUaW1lLnNwbGl0KFwiOlwiKVswXSk7XG4gICAgICAgICAgICBsZXQgY3VycmVudERheUlkID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRIb3VyKTtcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPDI0OyBpKyspe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRIb3VyKys7XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEhvdXIgPT09IDI0KXtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudERheUlkKys7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIb3VyPTA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGhvdXJEYXRhID0gZm9yZWNhc3REYXlzW2N1cnJlbnREYXlJZF1bXCJob3VyXCJdW2N1cnJlbnRIb3VyXTtcblxuICAgICAgICAgICAgICAgIGxldCBkYXlUaW1lO1xuICAgICAgICAgICAgICAgIGlmKGhvdXJEYXRhLmlzX2RheSA9PT0gMSkgZGF5VGltZSA9IFwiZGF5XCI7XG4gICAgICAgICAgICAgICAgZWxzZSBkYXlUaW1lID0gXCJuaWdodFwiO1xuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb24gPSBob3VyRGF0YS5jb25kaXRpb24udGV4dDtcblxuICAgICAgICAgICAgICAgIGxldCBjb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBjb250LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWNvbnRcIik7XG5cblxuICAgICAgICAgICAgLy88aW1nIGNsYXNzPVwic21hbGwtd2VhdGhlci1pY29uXCIgc3JjPVwiaHR0cHM6Ly9ibWNkbi5ubC9hc3NldHMvd2VhdGhlci1pY29ucy92My4wL2ZpbGwvc3ZnL292ZXJjYXN0LWRheS1kcml6emxlLnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwic21hbGwtd2VhdGhlci1pY29uXCIpO1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpY29uc1tkYXlUaW1lXVtjb25kaXRpb24ucmVwbGFjZUFsbCgnICcsICctJyldO1xuICAgICAgICAgICAgICAgIGltZy5hbHQgPSBjb25kaXRpb247XG4gICAgICAgICAgICAgICAgY29udC5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG4gICAgICAgICAgICAgICAgY29udC5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuICAgICAgICAgICAgICAgIGxldCB0aW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIHRpbWVTcGFuLmNsYXNzTGlzdC5hZGQoXCJ0aW1lLXNtYWxsXCIpO1xuICAgICAgICAgICAgICAgIHRpbWVTcGFuLmlubmVyVGV4dCA9IGN1cnJlbnRIb3VyICsgXCI6MDBcIjtcbiAgICAgICAgICAgICAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHRpbWVTcGFuKTtcblxuICAgICAgICAgICAgICAgIGxldCBkYXNoU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIGRhc2hTcGFuLmlubmVyVGV4dCA9IFwiIC0gXCI7XG4gICAgICAgICAgICAgICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChkYXNoU3Bhbik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHRlbXBTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgdGVtcFNwYW4uY2xhc3NMaXN0LmFkZChcImRlZ3JlZXMtc21hbGxcIik7XG4gICAgICAgICAgICAgICAgaWYocHJlZmVyc1RlbXBDKXtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFNwYW4uaW5uZXJUZXh0ID0gTWF0aC5yb3VuZChob3VyRGF0YS50ZW1wX2MpICsgXCLCsFwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBTcGFuLmlubmVyVGV4dCA9IE1hdGgucm91bmQoaG91ckRhdGEudGVtcF9mKSArIFwiwrBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5mb0Rpdi5hcHBlbmRDaGlsZCh0ZW1wU3Bhbik7XG5cblxuICAgICAgICAgICAgICAgIGxldCBob3ZlckNvbmRpdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgaG92ZXJDb25kaXRpb25EaXYuY2xhc3NMaXN0LmFkZChcImhvdmVyLWNvbmRpdGlvblwiKTtcbiAgICAgICAgICAgICAgICBob3ZlckNvbmRpdGlvbkRpdi5pbm5lclRleHQgPSBjb25kaXRpb247XG4gICAgICAgICAgICAgICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChob3ZlckNvbmRpdGlvbkRpdik7XG5cbiAgICAgICAgICAgICAgICBtb3JlSW5mb3JtYXRpb25Eb20uYXBwZW5kQ2hpbGQoY29udCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihtb3JlSW5mb3JtYXRpb25UeXBlID09PSBcImRhaWx5XCIpe1xuICAgICAgICAgICAgbW9yZUluZm9ybWF0aW9uRG9tLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgY3VycmVudERheUlkID0gMTtcblxuICAgICAgICAgICAgZm9yKGxldCBpPTE7IGk8MTM7IGkrKyl7XG4gICAgICAgICAgICAgICAgY3VycmVudERheUlkID0gaTtcblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGRheURhdGEgPSBmb3JlY2FzdERheXNbY3VycmVudERheUlkXVtcImRheVwiXTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5VGltZSA9IFwiZGF5XCI7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXlEYXRhKTtcblxuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb24gPSBkYXlEYXRhLmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgICAgICAgICAgICAgbGV0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGNvbnQuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItY29udFwiKTtcblxuXG4gICAgICAgICAgICAvLzxpbWcgY2xhc3M9XCJzbWFsbC13ZWF0aGVyLWljb25cIiBzcmM9XCJodHRwczovL2JtY2RuLm5sL2Fzc2V0cy93ZWF0aGVyLWljb25zL3YzLjAvZmlsbC9zdmcvb3ZlcmNhc3QtZGF5LWRyaXp6bGUuc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC13ZWF0aGVyLWljb25cIik7XG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGljb25zW2RheVRpbWVdW2NvbmRpdGlvbi5yZXBsYWNlQWxsKCcgJywgJy0nKV07XG4gICAgICAgICAgICAgICAgaW1nLmFsdCA9IGNvbmRpdGlvbjtcbiAgICAgICAgICAgICAgICBjb250LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICAgICAgICAgICAgICBjb250LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgdGltZVNwYW4uY2xhc3NMaXN0LmFkZChcInRpbWUtc21hbGxcIik7XG5cbiAgICAgICAgICAgICAgICBsZXQgc3BsaXQgPSBmb3JlY2FzdERheXNbY3VycmVudERheUlkXVtcImRhdGVcIl0uc3BsaXQoXCItXCIpO1xuXG4gICAgICAgICAgICAgICAgdGltZVNwYW4uaW5uZXJUZXh0ID0gc3BsaXRbMV0gKyBcIi9cIiArIHNwbGl0WzJdO1xuICAgICAgICAgICAgICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQodGltZVNwYW4pO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRhc2hTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgZGFzaFNwYW4uaW5uZXJUZXh0ID0gXCIgLSBcIjtcbiAgICAgICAgICAgICAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGRhc2hTcGFuKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdGVtcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICB0ZW1wU3Bhbi5jbGFzc0xpc3QuYWRkKFwiZGVncmVlcy1zbWFsbFwiKTtcbiAgICAgICAgICAgICAgICBpZihwcmVmZXJzVGVtcEMpe1xuICAgICAgICAgICAgICAgICAgICB0ZW1wU3Bhbi5pbm5lclRleHQgPSBNYXRoLnJvdW5kKGRheURhdGEuYXZndGVtcF9jKSArIFwiwrBcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wU3Bhbi5pbm5lclRleHQgPSBNYXRoLnJvdW5kKGRheURhdGEuYXZndGVtcF9mKSArIFwiwrBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5mb0Rpdi5hcHBlbmRDaGlsZCh0ZW1wU3Bhbik7XG5cblxuICAgICAgICAgICAgICAgIGxldCBob3ZlckNvbmRpdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgaG92ZXJDb25kaXRpb25EaXYuY2xhc3NMaXN0LmFkZChcImhvdmVyLWNvbmRpdGlvblwiKTtcbiAgICAgICAgICAgICAgICBob3ZlckNvbmRpdGlvbkRpdi5pbm5lclRleHQgPSBjb25kaXRpb247XG4gICAgICAgICAgICAgICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChob3ZlckNvbmRpdGlvbkRpdik7XG5cbiAgICAgICAgICAgICAgICBtb3JlSW5mb3JtYXRpb25Eb20uYXBwZW5kQ2hpbGQoY29udCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbn07IiwiZXhwb3J0IGxldCBncmFkaWVudHMgPSB7XG4vLyAgICBtb3JuaW5nR3JhZGllbnQgOiBcImxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIwMCwyMDAsMTgwLDEpIC0xMDAlLCByZ2JhKDIwLDIxMCwyNTUsMSkgMTAwJSlcIixcbiAgICBtaWRkYXlHcmFkaWVudCA6IFwibGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwxODAsMTkwLDEpIDAlLCByZ2JhKDYwLDEyMCwyMjUsMSkgMTAwJSlcIixcbiAgICBldmVuaW5nR3JhZGllbnQgOiBcImxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsOTIsMTcwLDEpIDAlLCByZ2JhKDAsMzQsMTI2LDEpIDEwMCUpXCIsXG4gICAgbmlnaHRHcmFkaWVudCA6IFwibGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNSwwLDQwLDEpIDAlLCByZ2JhKDAsOSw0MCwxKSAxMDAlKVwiLFxufVxuZXhwb3J0IGxldCBncmFkaWVudHNBcnIgPSBPYmplY3QudmFsdWVzKGdyYWRpZW50cyk7XG5cblxuXG5sZXQgc3RhdGUgPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zaXRpb25Cb2R5QmFja2dyb3VuZChncmFkaWVudCl7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keU92ZXJsYXlHcmFkaWVudFwiKTtcblxuICAgIGlmKHN0YXRlID09PSAwKXtcbiAgICAgICAgc3RhdGUgPSAxO1xuICAgICAgICBvdmVybGF5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGdyYWRpZW50O1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uaW5nXCIpO1xuICAgIH0gZWxzZSBpZihzdGF0ZSA9PT0gMSl7XG4gICAgICAgIHN0YXRlID0gMDtcbiAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBncmFkaWVudDtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNpdGlvbmluZ1wiKTsgXG4gICAgfVxuICAgIFxufSIsImltcG9ydCB7IEtFWSB9IGZyb20gXCIuL0FQSS1rZXlzXCI7XG5pbXBvcnQgeyBjYXRjaEVtIH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG5jb25zdCB3ZWF0aGVyQmFzZVVybCA9ICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxLyc7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlclRvZGF5KGNpdHlOYW1lKXtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3dlYXRoZXJCYXNlVXJsfWN1cnJlbnQuanNvbj9rZXk9JHtLRVl9JnE9JHtjaXR5TmFtZX1gKTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBcbiAgICAvL3JldHVybnMgW3RydWUsIGVycm9yIGRhdGFdIGlmIHJlc3BvbnNlIGlzbnQgb2tcbiAgICAvL3JldHVybiBbZmFsc2UsIHdlYXRoZXIgZGF0YV0gaWYgcmVzcG9uc2UgaXMgb2tcbiAgICBsZXQgb2sgPSByZXNwb25zZS5vaztcbiAgICByZXR1cm4ge29rLCBkYXRhfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckZvcmVjYXN0KGNpdHlOYW1lKXtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3dlYXRoZXJCYXNlVXJsfWZvcmVjYXN0Lmpzb24/a2V5PSR7S0VZfSZxPSR7Y2l0eU5hbWV9JmRheXM9MTRgKTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBcbiAgICAvL3JldHVybnMgW3RydWUsIGVycm9yIGRhdGFdIGlmIHJlc3BvbnNlIGlzbnQgb2tcbiAgICAvL3JldHVybiBbZmFsc2UsIHdlYXRoZXIgZGF0YV0gaWYgcmVzcG9uc2UgaXMgb2tcbiAgICBsZXQgb2sgPSByZXNwb25zZS5vaztcbiAgICByZXR1cm4ge29rLCBkYXRhfTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=