/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/changeDOM.js":
/*!**********************************!*\
  !*** ./src/scripts/changeDOM.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeCloudCoverage: () => (/* binding */ changeCloudCoverage),
/* harmony export */   changeCurrentCondition: () => (/* binding */ changeCurrentCondition),
/* harmony export */   changeCurrentHumidity: () => (/* binding */ changeCurrentHumidity),
/* harmony export */   changeCurrentImage: () => (/* binding */ changeCurrentImage),
/* harmony export */   changeCurrentTemp: () => (/* binding */ changeCurrentTemp),
/* harmony export */   changeCurrentUV: () => (/* binding */ changeCurrentUV),
/* harmony export */   changeLocation: () => (/* binding */ changeLocation),
/* harmony export */   changeRainChance: () => (/* binding */ changeRainChance),
/* harmony export */   changeWindDirection: () => (/* binding */ changeWindDirection),
/* harmony export */   changeWindSpeed: () => (/* binding */ changeWindSpeed)
/* harmony export */ });
const currentCondition = document.querySelector('.current-weather__conidition');
const locationDOM = document.querySelector('.current-weather__location');
const currentWeatherIcon = document.querySelector('.image--weather-icon');
const currentTemp = document.querySelector('.current-weather__temperature');
const currentHumidity = document.querySelector('.humidity');
const UvIndex = document.querySelector('.UV-Index');
const windSpeed = document.querySelector('.wind-speed');
const windDirection = document.querySelector('.wind-direction');
const cloudCoverage = document.querySelector('.cloud-coverage');
const rainChange = document.querySelector('.rain-chance');
function changeCurrentCondition(condition) {
  currentCondition.innerHTML = condition;
}
function changeLocation(city, state, location, time) {
  locationDOM.innerHTML = `${city} ${state} ${location} ${time.slice(11)}`;
}
function changeCurrentImage(url) {
  currentWeatherIcon.src = url;
}
function changeCurrentTemp(temp) {
  currentTemp.innerHTML = `Feels like ${temp} °F`;
}
function changeCurrentHumidity(humidity) {
  currentHumidity.innerHTML = humidity;
}
function changeCurrentUV(UV) {
  UvIndex.innerHTML = UV;
}
function changeWindSpeed(speed) {
  windSpeed.innerHTML = `${speed} MPH`;
}
function changeWindDirection(direction) {
  windDirection.innerHTML = direction;
}
function changeCloudCoverage(coverage) {
  cloudCoverage.innerHTML = `${coverage}%`;
}
function changeRainChance(chance) {
  rainChange.innerHTML = `${chance}%`;
}


/***/ }),

/***/ "./src/scripts/changeForecast.js":
/*!***************************************!*\
  !*** ./src/scripts/changeForecast.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeForecast: () => (/* binding */ changeForecast)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ "./src/scripts/domElements.js");
/* harmony import */ var _changeDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeDOM */ "./src/scripts/changeDOM.js");
/* harmony import */ var _changeForecastDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeForecastDOM */ "./src/scripts/changeForecastDOM.js");





async function changeForecast() {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${_main__WEBPACK_IMPORTED_MODULE_0__.key}&q=${_domElements__WEBPACK_IMPORTED_MODULE_1__.searchValue.value}&days=4`,
    { mode: 'cors' },
  );
  const forecastData = await response.json();
  console.log(forecastData);
  (0,_changeDOM__WEBPACK_IMPORTED_MODULE_2__.changeRainChance)(forecastData.forecast.forecastday[0].day.daily_will_it_rain);
  for (let i = 1; i < 4; i++) {
    let day;
    if (i === 1) {
      day = 'one';
    } else if (i === 2) {
      day = 'two';
    } else {
      day = 'three';
    }
    const { date } = forecastData.forecast.forecastday[i];
    const condition = forecastData.forecast.forecastday[i].day.condition.text;
    const image = forecastData.forecast.forecastday[i].day.condition.icon;
    const min = forecastData.forecast.forecastday[i].day.mintemp_f;
    const max = forecastData.forecast.forecastday[i].day.maxtemp_f;
    (0,_changeForecastDOM__WEBPACK_IMPORTED_MODULE_3__.changeDay)(day, date, condition, image, min, max);
  }
}


/***/ }),

/***/ "./src/scripts/changeForecastDOM.js":
/*!******************************************!*\
  !*** ./src/scripts/changeForecastDOM.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeDay: () => (/* binding */ changeDay)
/* harmony export */ });
function changeDay(day, date, condition, image, min, max) {
  const changeDate = document.querySelector(`.forecast__day-${day}-date`);
  const changeCondition = document.querySelector(
    `.forecast__day-${day}-condition`,
  );
  const changeImage = document.querySelector(`.forecast__day-${day}-image`);
  const changeMin = document.querySelector(`.forecast__day-${day}-min`);
  const changeMax = document.querySelector(`.forecast__day-${day}-max`);
  changeDate.innerHTML = date;
  changeCondition.innerHTML = condition;
  changeImage.src = image;
  changeMin.innerHTML = min;
  changeMax.innerHTML = max;
}


/***/ }),

/***/ "./src/scripts/currentWeatherAPI.js":
/*!******************************************!*\
  !*** ./src/scripts/currentWeatherAPI.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/scripts/domElements.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _changeForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeForecast */ "./src/scripts/changeForecast.js");
/* harmony import */ var _changeDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeDOM */ "./src/scripts/changeDOM.js");





_domElements__WEBPACK_IMPORTED_MODULE_0__.searchButton.addEventListener('click', () => {
  currentWeather();
  (0,_changeForecast__WEBPACK_IMPORTED_MODULE_2__.changeForecast)();
  _domElements__WEBPACK_IMPORTED_MODULE_0__.searchValue.value = '';
});

async function currentWeather() {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${_main__WEBPACK_IMPORTED_MODULE_1__.key}&q=${_domElements__WEBPACK_IMPORTED_MODULE_0__.searchValue.value}`,
    { mode: 'cors' },
  );
  const currentData = await response.json();
  //   console.log(currentData);
  (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeCurrentCondition)(currentData.current.condition.text);
  (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeLocation)(
    currentData.location.name,
    currentData.location.region,
    currentData.location.country,
    currentData.location.localtime,
  );
  (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeCurrentImage)(currentData.current.condition.icon);
  (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeCurrentTemp)(currentData.current.feelslike_f);
  (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeCurrentHumidity)(currentData.current.humidity);
  (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeCurrentUV)(currentData.current.uv);
  (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeWindSpeed)(currentData.current.gust_mph);
  (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeWindDirection)(currentData.current.wind_dir);
  (0,_changeDOM__WEBPACK_IMPORTED_MODULE_3__.changeCloudCoverage)(currentData.current.cloud);
  //   changeRainChance(currentData.current.)
}


/***/ }),

/***/ "./src/scripts/domElements.js":
/*!************************************!*\
  !*** ./src/scripts/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchButton: () => (/* binding */ searchButton),
/* harmony export */   searchValue: () => (/* binding */ searchValue)
/* harmony export */ });
const searchValue = document.querySelector('.input-field');
const searchButton = document.querySelector('.button--search');


/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   key: () => (/* binding */ key)
/* harmony export */ });
/* harmony import */ var _currentWeatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentWeatherAPI */ "./src/scripts/currentWeatherAPI.js");
// const urlTest = `http://api.weatherapi.com/v1/current.json?key=${key}&q=London`;

// async function testAPI() {
//   const response = await fetch(
//     `http://api.weatherapi.com/v1/current.json?key=${key}&q=30041`,
//     { mode: 'cors' },
//   );
//   const weatherData = await response.json();
//   console.log(weatherData);
//   console.log(`${weatherData.location.name} ${weatherData.location.country}`);
//   console.log(weatherData.location.localtime);
//   console.log(weatherData.current.condition.text);
//   console.log(weatherData.current.condition.icon);
//   console.log(weatherData.current.feelslike_f);
// }
// testAPI();
// async function testforecastAPI() {
//   const response = await fetch(
//     `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=30041&days=3`,
//     { mode: 'cors' },
//   );
//   const weatherData = await response.json();
//   console.log(weatherData);
// }

// testforecastAPI();

// console.log(document.querySelector('.forecast__dayOne'));



const key = 'd317c44b140242988c7140818242005';


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
/******/ 			// no module.id needed
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjI1ZWI1NGVmNDg2ZjUyZGEyMGUubWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWU7QUFDekU7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUCwyQkFBMkIsT0FBTztBQUNsQztBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1AsK0JBQStCLFNBQVM7QUFDeEM7QUFDTztBQUNQLDRCQUE0QixPQUFPO0FBQ25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkM2QjtBQUM2QjtBQUNYO0FBQ0M7O0FBRXpDO0FBQ1A7QUFDQSxzREFBc0Qsc0NBQUcsQ0FBQyxLQUFLLHFEQUFXLE9BQU87QUFDakYsTUFBTSxjQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNERBQWdCO0FBQ2xCLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBUztBQUNiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdCTztBQUNQLDhEQUE4RCxJQUFJO0FBQ2xFO0FBQ0Esc0JBQXNCLElBQUk7QUFDMUI7QUFDQSwrREFBK0QsSUFBSTtBQUNuRSw2REFBNkQsSUFBSTtBQUNqRSw2REFBNkQsSUFBSTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMEQ7QUFDN0I7QUFDcUI7QUFZN0I7O0FBRXJCLHNEQUFZO0FBQ1o7QUFDQSxFQUFFLCtEQUFjO0FBQ2hCLEVBQUUscURBQVc7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQSxxREFBcUQsc0NBQUcsQ0FBQyxLQUFLLHFEQUFXLE9BQU87QUFDaEYsTUFBTSxjQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0VBQXNCO0FBQ3hCLEVBQUUsMERBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOERBQWtCO0FBQ3BCLEVBQUUsNkRBQWlCO0FBQ25CLEVBQUUsaUVBQXFCO0FBQ3ZCLEVBQUUsMkRBQWU7QUFDakIsRUFBRSwyREFBZTtBQUNqQixFQUFFLCtEQUFtQjtBQUNyQixFQUFFLCtEQUFtQjtBQUNyQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNPO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEUCxvRUFBb0UsSUFBSTs7QUFFeEU7QUFDQTtBQUNBLHdEQUF3RCxJQUFJO0FBQzVELFNBQVMsY0FBYztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCLEVBQUUsNkJBQTZCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsSUFBSTtBQUM3RCxTQUFTLGNBQWM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRTJDOztBQUVwQzs7Ozs7OztVQy9CUDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvY2hhbmdlRE9NLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvY2hhbmdlRm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9jaGFuZ2VGb3JlY2FzdERPTS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2N1cnJlbnRXZWF0aGVyQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC13ZWF0aGVyX19jb25pZGl0aW9uJyk7XG5jb25zdCBsb2NhdGlvbkRPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXJfX2xvY2F0aW9uJyk7XG5jb25zdCBjdXJyZW50V2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtLXdlYXRoZXItaWNvbicpO1xuY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC13ZWF0aGVyX190ZW1wZXJhdHVyZScpO1xuY29uc3QgY3VycmVudEh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5Jyk7XG5jb25zdCBVdkluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlVWLUluZGV4Jyk7XG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZCcpO1xuY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLWRpcmVjdGlvbicpO1xuY29uc3QgY2xvdWRDb3ZlcmFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG91ZC1jb3ZlcmFnZScpO1xuY29uc3QgcmFpbkNoYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWluLWNoYW5jZScpO1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gIGN1cnJlbnRDb25kaXRpb24uaW5uZXJIVE1MID0gY29uZGl0aW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUxvY2F0aW9uKGNpdHksIHN0YXRlLCBsb2NhdGlvbiwgdGltZSkge1xuICBsb2NhdGlvbkRPTS5pbm5lckhUTUwgPSBgJHtjaXR5fSAke3N0YXRlfSAke2xvY2F0aW9ufSAke3RpbWUuc2xpY2UoMTEpfWA7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3VycmVudEltYWdlKHVybCkge1xuICBjdXJyZW50V2VhdGhlckljb24uc3JjID0gdXJsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRUZW1wKHRlbXApIHtcbiAgY3VycmVudFRlbXAuaW5uZXJIVE1MID0gYEZlZWxzIGxpa2UgJHt0ZW1wfSDCsEZgO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRIdW1pZGl0eShodW1pZGl0eSkge1xuICBjdXJyZW50SHVtaWRpdHkuaW5uZXJIVE1MID0gaHVtaWRpdHk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3VycmVudFVWKFVWKSB7XG4gIFV2SW5kZXguaW5uZXJIVE1MID0gVVY7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlV2luZFNwZWVkKHNwZWVkKSB7XG4gIHdpbmRTcGVlZC5pbm5lckhUTUwgPSBgJHtzcGVlZH0gTVBIYDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VXaW5kRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICB3aW5kRGlyZWN0aW9uLmlubmVySFRNTCA9IGRpcmVjdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDbG91ZENvdmVyYWdlKGNvdmVyYWdlKSB7XG4gIGNsb3VkQ292ZXJhZ2UuaW5uZXJIVE1MID0gYCR7Y292ZXJhZ2V9JWA7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUmFpbkNoYW5jZShjaGFuY2UpIHtcbiAgcmFpbkNoYW5nZS5pbm5lckhUTUwgPSBgJHtjaGFuY2V9JWA7XG59XG4iLCJpbXBvcnQgeyBrZXkgfSBmcm9tICcuL21haW4nO1xuaW1wb3J0IHsgc2VhcmNoVmFsdWUsIHNlYXJjaEJ1dHRvbiB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xuaW1wb3J0IHsgY2hhbmdlUmFpbkNoYW5jZSB9IGZyb20gJy4vY2hhbmdlRE9NJztcbmltcG9ydCB7IGNoYW5nZURheSB9IGZyb20gJy4vY2hhbmdlRm9yZWNhc3RET00nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hhbmdlRm9yZWNhc3QoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtrZXl9JnE9JHtzZWFyY2hWYWx1ZS52YWx1ZX0mZGF5cz00YCxcbiAgICB7IG1vZGU6ICdjb3JzJyB9LFxuICApO1xuICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF0YSk7XG4gIGNoYW5nZVJhaW5DaGFuY2UoZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV93aWxsX2l0X3JhaW4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgIGxldCBkYXk7XG4gICAgaWYgKGkgPT09IDEpIHtcbiAgICAgIGRheSA9ICdvbmUnO1xuICAgIH0gZWxzZSBpZiAoaSA9PT0gMikge1xuICAgICAgZGF5ID0gJ3R3byc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheSA9ICd0aHJlZSc7XG4gICAgfVxuICAgIGNvbnN0IHsgZGF0ZSB9ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldO1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgY29uc3QgaW1hZ2UgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIGNvbnN0IG1pbiA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9mO1xuICAgIGNvbnN0IG1heCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9mO1xuICAgIGNoYW5nZURheShkYXksIGRhdGUsIGNvbmRpdGlvbiwgaW1hZ2UsIG1pbiwgbWF4KTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURheShkYXksIGRhdGUsIGNvbmRpdGlvbiwgaW1hZ2UsIG1pbiwgbWF4KSB7XG4gIGNvbnN0IGNoYW5nZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3RfX2RheS0ke2RheX0tZGF0ZWApO1xuICBjb25zdCBjaGFuZ2VDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuZm9yZWNhc3RfX2RheS0ke2RheX0tY29uZGl0aW9uYCxcbiAgKTtcbiAgY29uc3QgY2hhbmdlSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3RfX2RheS0ke2RheX0taW1hZ2VgKTtcbiAgY29uc3QgY2hhbmdlTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0X19kYXktJHtkYXl9LW1pbmApO1xuICBjb25zdCBjaGFuZ2VNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3RfX2RheS0ke2RheX0tbWF4YCk7XG4gIGNoYW5nZURhdGUuaW5uZXJIVE1MID0gZGF0ZTtcbiAgY2hhbmdlQ29uZGl0aW9uLmlubmVySFRNTCA9IGNvbmRpdGlvbjtcbiAgY2hhbmdlSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gIGNoYW5nZU1pbi5pbm5lckhUTUwgPSBtaW47XG4gIGNoYW5nZU1heC5pbm5lckhUTUwgPSBtYXg7XG59XG4iLCJpbXBvcnQgeyBzZWFyY2hWYWx1ZSwgc2VhcmNoQnV0dG9uIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgeyBrZXkgfSBmcm9tICcuL21haW4nO1xuaW1wb3J0IHsgY2hhbmdlRm9yZWNhc3QgfSBmcm9tICcuL2NoYW5nZUZvcmVjYXN0JztcbmltcG9ydCB7XG4gIGNoYW5nZUN1cnJlbnRDb25kaXRpb24sXG4gIGNoYW5nZUxvY2F0aW9uLFxuICBjaGFuZ2VDdXJyZW50SW1hZ2UsXG4gIGNoYW5nZUN1cnJlbnRUZW1wLFxuICBjaGFuZ2VDdXJyZW50SHVtaWRpdHksXG4gIGNoYW5nZUN1cnJlbnRVVixcbiAgY2hhbmdlV2luZFNwZWVkLFxuICBjaGFuZ2VXaW5kRGlyZWN0aW9uLFxuICBjaGFuZ2VDbG91ZENvdmVyYWdlLFxuICBjaGFuZ2VSYWluQ2hhbmNlLFxufSBmcm9tICcuL2NoYW5nZURPTSc7XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY3VycmVudFdlYXRoZXIoKTtcbiAgY2hhbmdlRm9yZWNhc3QoKTtcbiAgc2VhcmNoVmFsdWUudmFsdWUgPSAnJztcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBjdXJyZW50V2VhdGhlcigpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7a2V5fSZxPSR7c2VhcmNoVmFsdWUudmFsdWV9YCxcbiAgICB7IG1vZGU6ICdjb3JzJyB9LFxuICApO1xuICBjb25zdCBjdXJyZW50RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gICBjb25zb2xlLmxvZyhjdXJyZW50RGF0YSk7XG4gIGNoYW5nZUN1cnJlbnRDb25kaXRpb24oY3VycmVudERhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCk7XG4gIGNoYW5nZUxvY2F0aW9uKFxuICAgIGN1cnJlbnREYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgY3VycmVudERhdGEubG9jYXRpb24ucmVnaW9uLFxuICAgIGN1cnJlbnREYXRhLmxvY2F0aW9uLmNvdW50cnksXG4gICAgY3VycmVudERhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxuICApO1xuICBjaGFuZ2VDdXJyZW50SW1hZ2UoY3VycmVudERhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbik7XG4gIGNoYW5nZUN1cnJlbnRUZW1wKGN1cnJlbnREYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YpO1xuICBjaGFuZ2VDdXJyZW50SHVtaWRpdHkoY3VycmVudERhdGEuY3VycmVudC5odW1pZGl0eSk7XG4gIGNoYW5nZUN1cnJlbnRVVihjdXJyZW50RGF0YS5jdXJyZW50LnV2KTtcbiAgY2hhbmdlV2luZFNwZWVkKGN1cnJlbnREYXRhLmN1cnJlbnQuZ3VzdF9tcGgpO1xuICBjaGFuZ2VXaW5kRGlyZWN0aW9uKGN1cnJlbnREYXRhLmN1cnJlbnQud2luZF9kaXIpO1xuICBjaGFuZ2VDbG91ZENvdmVyYWdlKGN1cnJlbnREYXRhLmN1cnJlbnQuY2xvdWQpO1xuICAvLyAgIGNoYW5nZVJhaW5DaGFuY2UoY3VycmVudERhdGEuY3VycmVudC4pXG59XG4iLCJleHBvcnQgY29uc3Qgc2VhcmNoVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmllbGQnKTtcbmV4cG9ydCBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLS1zZWFyY2gnKTtcbiIsIi8vIGNvbnN0IHVybFRlc3QgPSBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7a2V5fSZxPUxvbmRvbmA7XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIHRlc3RBUEkoKSB7XG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2tleX0mcT0zMDA0MWAsXG4vLyAgICAgeyBtb2RlOiAnY29ycycgfSxcbi8vICAgKTtcbi8vICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbi8vICAgY29uc29sZS5sb2coYCR7d2VhdGhlckRhdGEubG9jYXRpb24ubmFtZX0gJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5fWApO1xuLy8gICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpO1xuLy8gICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KTtcbi8vICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbik7XG4vLyAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YpO1xuLy8gfVxuLy8gdGVzdEFQSSgpO1xuLy8gYXN5bmMgZnVuY3Rpb24gdGVzdGZvcmVjYXN0QVBJKCkge1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuLy8gICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7a2V5fSZxPTMwMDQxJmRheXM9M2AsXG4vLyAgICAgeyBtb2RlOiAnY29ycycgfSxcbi8vICAgKTtcbi8vICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbi8vIH1cblxuLy8gdGVzdGZvcmVjYXN0QVBJKCk7XG5cbi8vIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdF9fZGF5T25lJykpO1xuXG5pbXBvcnQgeyB0ZXN0IH0gZnJvbSAnLi9jdXJyZW50V2VhdGhlckFQSSc7XG5cbmV4cG9ydCBjb25zdCBrZXkgPSAnZDMxN2M0NGIxNDAyNDI5ODhjNzE0MDgxODI0MjAwNSc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvbWFpbi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==