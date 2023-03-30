"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["weatherFetcher"],{

/***/ "./src/API-keys.js":
/*!*************************!*\
  !*** ./src/API-keys.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEY": () => (/* binding */ KEY)
/* harmony export */ });
const KEY = '8c2b96f30df0493faba75148232503';

/***/ }),

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

/***/ }),

/***/ "./src/weatherFetcher.js":
/*!*******************************!*\
  !*** ./src/weatherFetcher.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/weatherFetcher.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlckZldGNoZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOzs7O0FBSVA7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCaUM7QUFDRzs7QUFFcEM7OztBQUdPO0FBQ1Asb0NBQW9DLGVBQWUsbUJBQW1CLDBDQUFHLENBQUMsS0FBSyxTQUFTO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRU87QUFDUCxvQ0FBb0MsZUFBZSxvQkFBb0IsMENBQUcsQ0FBQyxLQUFLLFNBQVM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0FQSS1rZXlzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckZldGNoZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEtFWSA9ICc4YzJiOTZmMzBkZjA0OTNmYWJhNzUxNDgyMzI1MDMnOyIsImV4cG9ydCBsZXQgZ3JhZGllbnRzID0ge1xuLy8gICAgbW9ybmluZ0dyYWRpZW50IDogXCJsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMDAsMjAwLDE4MCwxKSAtMTAwJSwgcmdiYSgyMCwyMTAsMjU1LDEpIDEwMCUpXCIsXG4gICAgbWlkZGF5R3JhZGllbnQgOiBcImxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsMTgwLDE5MCwxKSAwJSwgcmdiYSg2MCwxMjAsMjI1LDEpIDEwMCUpXCIsXG4gICAgZXZlbmluZ0dyYWRpZW50IDogXCJsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDkyLDE3MCwxKSAwJSwgcmdiYSgwLDM0LDEyNiwxKSAxMDAlKVwiLFxuICAgIG5pZ2h0R3JhZGllbnQgOiBcImxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDUsMCw0MCwxKSAwJSwgcmdiYSgwLDksNDAsMSkgMTAwJSlcIixcbn1cbmV4cG9ydCBsZXQgZ3JhZGllbnRzQXJyID0gT2JqZWN0LnZhbHVlcyhncmFkaWVudHMpO1xuXG5cblxubGV0IHN0YXRlID0gMDtcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2l0aW9uQm9keUJhY2tncm91bmQoZ3JhZGllbnQpe1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvZHlPdmVybGF5R3JhZGllbnRcIik7XG5cbiAgICBpZihzdGF0ZSA9PT0gMCl7XG4gICAgICAgIHN0YXRlID0gMTtcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBncmFkaWVudDtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidHJhbnNpdGlvbmluZ1wiKTtcbiAgICB9IGVsc2UgaWYoc3RhdGUgPT09IDEpe1xuICAgICAgICBzdGF0ZSA9IDA7XG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gZ3JhZGllbnQ7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zaXRpb25pbmdcIik7IFxuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgeyBLRVkgfSBmcm9tIFwiLi9BUEkta2V5c1wiO1xuaW1wb3J0IHsgY2F0Y2hFbSB9IGZyb20gXCIuL3V0aWxpdHlcIjtcblxuY29uc3Qgd2VhdGhlckJhc2VVcmwgPSAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS8nO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJUb2RheShjaXR5TmFtZSl7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt3ZWF0aGVyQmFzZVVybH1jdXJyZW50Lmpzb24/a2V5PSR7S0VZfSZxPSR7Y2l0eU5hbWV9YCk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgXG4gICAgLy9yZXR1cm5zIFt0cnVlLCBlcnJvciBkYXRhXSBpZiByZXNwb25zZSBpc250IG9rXG4gICAgLy9yZXR1cm4gW2ZhbHNlLCB3ZWF0aGVyIGRhdGFdIGlmIHJlc3BvbnNlIGlzIG9rXG4gICAgbGV0IG9rID0gcmVzcG9uc2Uub2s7XG4gICAgcmV0dXJuIHtvaywgZGF0YX07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJGb3JlY2FzdChjaXR5TmFtZSl7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt3ZWF0aGVyQmFzZVVybH1mb3JlY2FzdC5qc29uP2tleT0ke0tFWX0mcT0ke2NpdHlOYW1lfSZkYXlzPTE0YCk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgXG4gICAgLy9yZXR1cm5zIFt0cnVlLCBlcnJvciBkYXRhXSBpZiByZXNwb25zZSBpc250IG9rXG4gICAgLy9yZXR1cm4gW2ZhbHNlLCB3ZWF0aGVyIGRhdGFdIGlmIHJlc3BvbnNlIGlzIG9rXG4gICAgbGV0IG9rID0gcmVzcG9uc2Uub2s7XG4gICAgcmV0dXJuIHtvaywgZGF0YX07XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9