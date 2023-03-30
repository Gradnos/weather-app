"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["utility"],{

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/utility.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7QUFJUDtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBsZXQgZ3JhZGllbnRzID0ge1xuLy8gICAgbW9ybmluZ0dyYWRpZW50IDogXCJsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMDAsMjAwLDE4MCwxKSAtMTAwJSwgcmdiYSgyMCwyMTAsMjU1LDEpIDEwMCUpXCIsXG4gICAgbWlkZGF5R3JhZGllbnQgOiBcImxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsMTgwLDE5MCwxKSAwJSwgcmdiYSg2MCwxMjAsMjI1LDEpIDEwMCUpXCIsXG4gICAgZXZlbmluZ0dyYWRpZW50IDogXCJsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDkyLDE3MCwxKSAwJSwgcmdiYSgwLDM0LDEyNiwxKSAxMDAlKVwiLFxuICAgIG5pZ2h0R3JhZGllbnQgOiBcImxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDUsMCw0MCwxKSAwJSwgcmdiYSgwLDksNDAsMSkgMTAwJSlcIixcbn1cbmV4cG9ydCBsZXQgZ3JhZGllbnRzQXJyID0gT2JqZWN0LnZhbHVlcyhncmFkaWVudHMpO1xuXG5cblxubGV0IHN0YXRlID0gMDtcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2l0aW9uQm9keUJhY2tncm91bmQoZ3JhZGllbnQpe1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlPdmVybGF5R3JhZGllbnRcIik7XG5cbiAgICBpZihzdGF0ZSA9PT0gMCl7XG4gICAgICAgIHN0YXRlID0gMTtcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBncmFkaWVudDtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidHJhbnNpdGlvbmluZ1wiKTtcbiAgICB9IGVsc2UgaWYoc3RhdGUgPT09IDEpe1xuICAgICAgICBzdGF0ZSA9IDA7XG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gZ3JhZGllbnQ7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zaXRpb25pbmdcIik7IFxuICAgIH1cbiAgICBcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=