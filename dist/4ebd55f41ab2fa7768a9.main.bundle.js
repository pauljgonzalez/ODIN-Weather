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
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${_main__WEBPACK_IMPORTED_MODULE_0__.key}&q=${_domElements__WEBPACK_IMPORTED_MODULE_1__.searchValue.value}&days=4`,
      { mode: 'cors' },
    );
    const forecastData = await response.json();
    // console.log(forecastData);
    (0,_changeDOM__WEBPACK_IMPORTED_MODULE_2__.changeRainChance)(
      forecastData.forecast.forecastday[0].day.daily_will_it_rain,
    );
    // eslint-disable-next-line no-plusplus
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
  } catch (error) {
    console.log(error);
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentWeather: () => (/* binding */ currentWeather)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/scripts/domElements.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _changeForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeForecast */ "./src/scripts/changeForecast.js");
/* harmony import */ var _changeDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeDOM */ "./src/scripts/changeDOM.js");





async function currentWeather() {
  document.documentElement.style.setProperty('--visible-state', 'hidden');
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${_main__WEBPACK_IMPORTED_MODULE_1__.key}&q=${_domElements__WEBPACK_IMPORTED_MODULE_0__.searchValue.value}`,
      { mode: 'cors' },
    );
    const currentData = await response.json();
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
    document.documentElement.style.setProperty('--visible-state', 'visible');
  } catch (error) {
    alert('Location Not Found');
  }
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
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ "./src/scripts/domElements.js");
/* harmony import */ var _changeForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeForecast */ "./src/scripts/changeForecast.js");
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
const horizontalScroll = document.querySelector('.flex-grid__additional');
horizontalScroll.addEventListener('wheel', (event) => {
  event.preventDefault();

  horizontalScroll.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});
_domElements__WEBPACK_IMPORTED_MODULE_1__.searchButton.addEventListener('click', () => {
  (0,_currentWeatherAPI__WEBPACK_IMPORTED_MODULE_0__.currentWeather)();
  (0,_changeForecast__WEBPACK_IMPORTED_MODULE_2__.changeForecast)();
  _domElements__WEBPACK_IMPORTED_MODULE_1__.searchValue.value = '';
});
// change on enter press when input field is focused
document.querySelector('.input-field').addEventListener('focus', () => {
  document
    .querySelector('.input-field')
    .addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        (0,_currentWeatherAPI__WEBPACK_IMPORTED_MODULE_0__.currentWeather)();
        (0,_changeForecast__WEBPACK_IMPORTED_MODULE_2__.changeForecast)();
        _domElements__WEBPACK_IMPORTED_MODULE_1__.searchValue.value = '';
      }
    });
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNGViZDU1ZjQxYWIyZmE3NzY4YTkubWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWU7QUFDekU7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUCwyQkFBMkIsT0FBTztBQUNsQztBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1AsK0JBQStCLFNBQVM7QUFDeEM7QUFDTztBQUNQLDRCQUE0QixPQUFPO0FBQ25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkM2QjtBQUM2QjtBQUNYO0FBQ0M7O0FBRXpDO0FBQ1A7QUFDQTtBQUNBLHdEQUF3RCxzQ0FBRyxDQUFDLEtBQUsscURBQVcsT0FBTztBQUNuRixRQUFRLGNBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZEQUFTO0FBQ2Y7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ087QUFDUCw4REFBOEQsSUFBSTtBQUNsRTtBQUNBLHNCQUFzQixJQUFJO0FBQzFCO0FBQ0EsK0RBQStELElBQUk7QUFDbkUsNkRBQTZELElBQUk7QUFDakUsNkRBQTZELElBQUk7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjBEO0FBQzdCO0FBQ3FCO0FBWTdCOztBQUVkO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHNDQUFHLENBQUMsS0FBSyxxREFBVyxPQUFPO0FBQ2xGLFFBQVEsY0FBYztBQUN0QjtBQUNBO0FBQ0EsSUFBSSxrRUFBc0I7QUFDMUIsSUFBSSwwREFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBa0I7QUFDdEIsSUFBSSw2REFBaUI7QUFDckIsSUFBSSxpRUFBcUI7QUFDekIsSUFBSSwyREFBZTtBQUNuQixJQUFJLDJEQUFlO0FBQ25CLElBQUksK0RBQW1CO0FBQ3ZCLElBQUksK0RBQW1CO0FBQ3ZCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFDTztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEUCxvRUFBb0UsSUFBSTs7QUFFeEU7QUFDQTtBQUNBLHdEQUF3RCxJQUFJO0FBQzVELFNBQVMsY0FBYztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCLEVBQUUsNkJBQTZCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsSUFBSTtBQUM3RCxTQUFTLGNBQWM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRXFEO0FBQ0s7QUFDUjs7QUFFM0M7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Qsc0RBQVk7QUFDWixFQUFFLGtFQUFjO0FBQ2hCLEVBQUUsK0RBQWM7QUFDaEIsRUFBRSxxREFBVztBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFjO0FBQ3RCLFFBQVEsK0RBQWM7QUFDdEIsUUFBUSxxREFBVztBQUNuQjtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7O1VDMUREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9jaGFuZ2VET00uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9jaGFuZ2VGb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2NoYW5nZUZvcmVjYXN0RE9NLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvY3VycmVudFdlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXJfX2NvbmlkaXRpb24nKTtcbmNvbnN0IGxvY2F0aW9uRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtd2VhdGhlcl9fbG9jYXRpb24nKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS0td2VhdGhlci1pY29uJyk7XG5jb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXJfX3RlbXBlcmF0dXJlJyk7XG5jb25zdCBjdXJyZW50SHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbmNvbnN0IFV2SW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVVYtSW5kZXgnKTtcbmNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkJyk7XG5jb25zdCB3aW5kRGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtZGlyZWN0aW9uJyk7XG5jb25zdCBjbG91ZENvdmVyYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3VkLWNvdmVyYWdlJyk7XG5jb25zdCByYWluQ2hhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhaW4tY2hhbmNlJyk7XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3VycmVudENvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgY3VycmVudENvbmRpdGlvbi5pbm5lckhUTUwgPSBjb25kaXRpb247XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTG9jYXRpb24oY2l0eSwgc3RhdGUsIGxvY2F0aW9uLCB0aW1lKSB7XG4gIGxvY2F0aW9uRE9NLmlubmVySFRNTCA9IGAke2NpdHl9ICR7c3RhdGV9ICR7bG9jYXRpb259ICR7dGltZS5zbGljZSgxMSl9YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50SW1hZ2UodXJsKSB7XG4gIGN1cnJlbnRXZWF0aGVySWNvbi5zcmMgPSB1cmw7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3VycmVudFRlbXAodGVtcCkge1xuICBjdXJyZW50VGVtcC5pbm5lckhUTUwgPSBgRmVlbHMgbGlrZSAke3RlbXB9IMKwRmA7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3VycmVudEh1bWlkaXR5KGh1bWlkaXR5KSB7XG4gIGN1cnJlbnRIdW1pZGl0eS5pbm5lckhUTUwgPSBodW1pZGl0eTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50VVYoVVYpIHtcbiAgVXZJbmRleC5pbm5lckhUTUwgPSBVVjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VXaW5kU3BlZWQoc3BlZWQpIHtcbiAgd2luZFNwZWVkLmlubmVySFRNTCA9IGAke3NwZWVkfSBNUEhgO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVdpbmREaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gIHdpbmREaXJlY3Rpb24uaW5uZXJIVE1MID0gZGlyZWN0aW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNsb3VkQ292ZXJhZ2UoY292ZXJhZ2UpIHtcbiAgY2xvdWRDb3ZlcmFnZS5pbm5lckhUTUwgPSBgJHtjb3ZlcmFnZX0lYDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VSYWluQ2hhbmNlKGNoYW5jZSkge1xuICByYWluQ2hhbmdlLmlubmVySFRNTCA9IGAke2NoYW5jZX0lYDtcbn1cbiIsImltcG9ydCB7IGtleSB9IGZyb20gJy4vbWFpbic7XG5pbXBvcnQgeyBzZWFyY2hWYWx1ZSwgc2VhcmNoQnV0dG9uIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgeyBjaGFuZ2VSYWluQ2hhbmNlIH0gZnJvbSAnLi9jaGFuZ2VET00nO1xuaW1wb3J0IHsgY2hhbmdlRGF5IH0gZnJvbSAnLi9jaGFuZ2VGb3JlY2FzdERPTSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGFuZ2VGb3JlY2FzdCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtrZXl9JnE9JHtzZWFyY2hWYWx1ZS52YWx1ZX0mZGF5cz00YCxcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICAgKTtcbiAgICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3REYXRhKTtcbiAgICBjaGFuZ2VSYWluQ2hhbmNlKFxuICAgICAgZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV93aWxsX2l0X3JhaW4sXG4gICAgKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgbGV0IGRheTtcbiAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgIGRheSA9ICdvbmUnO1xuICAgICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4gICAgICAgIGRheSA9ICd0d28nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF5ID0gJ3RocmVlJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgZGF0ZSB9ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldO1xuICAgICAgY29uc3QgY29uZGl0aW9uID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24udGV4dDtcbiAgICAgIGNvbnN0IGltYWdlID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICAgIGNvbnN0IG1pbiA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9mO1xuICAgICAgY29uc3QgbWF4ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2Y7XG4gICAgICBjaGFuZ2VEYXkoZGF5LCBkYXRlLCBjb25kaXRpb24sIGltYWdlLCBtaW4sIG1heCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURheShkYXksIGRhdGUsIGNvbmRpdGlvbiwgaW1hZ2UsIG1pbiwgbWF4KSB7XG4gIGNvbnN0IGNoYW5nZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3RfX2RheS0ke2RheX0tZGF0ZWApO1xuICBjb25zdCBjaGFuZ2VDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuZm9yZWNhc3RfX2RheS0ke2RheX0tY29uZGl0aW9uYCxcbiAgKTtcbiAgY29uc3QgY2hhbmdlSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3RfX2RheS0ke2RheX0taW1hZ2VgKTtcbiAgY29uc3QgY2hhbmdlTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0X19kYXktJHtkYXl9LW1pbmApO1xuICBjb25zdCBjaGFuZ2VNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3RfX2RheS0ke2RheX0tbWF4YCk7XG4gIGNoYW5nZURhdGUuaW5uZXJIVE1MID0gZGF0ZTtcbiAgY2hhbmdlQ29uZGl0aW9uLmlubmVySFRNTCA9IGNvbmRpdGlvbjtcbiAgY2hhbmdlSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gIGNoYW5nZU1pbi5pbm5lckhUTUwgPSBtaW47XG4gIGNoYW5nZU1heC5pbm5lckhUTUwgPSBtYXg7XG59XG4iLCJpbXBvcnQgeyBzZWFyY2hWYWx1ZSwgc2VhcmNoQnV0dG9uIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgeyBrZXkgfSBmcm9tICcuL21haW4nO1xuaW1wb3J0IHsgY2hhbmdlRm9yZWNhc3QgfSBmcm9tICcuL2NoYW5nZUZvcmVjYXN0JztcbmltcG9ydCB7XG4gIGNoYW5nZUN1cnJlbnRDb25kaXRpb24sXG4gIGNoYW5nZUxvY2F0aW9uLFxuICBjaGFuZ2VDdXJyZW50SW1hZ2UsXG4gIGNoYW5nZUN1cnJlbnRUZW1wLFxuICBjaGFuZ2VDdXJyZW50SHVtaWRpdHksXG4gIGNoYW5nZUN1cnJlbnRVVixcbiAgY2hhbmdlV2luZFNwZWVkLFxuICBjaGFuZ2VXaW5kRGlyZWN0aW9uLFxuICBjaGFuZ2VDbG91ZENvdmVyYWdlLFxuICBjaGFuZ2VSYWluQ2hhbmNlLFxufSBmcm9tICcuL2NoYW5nZURPTSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjdXJyZW50V2VhdGhlcigpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZpc2libGUtc3RhdGUnLCAnaGlkZGVuJyk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtrZXl9JnE9JHtzZWFyY2hWYWx1ZS52YWx1ZX1gLFxuICAgICAgeyBtb2RlOiAnY29ycycgfSxcbiAgICApO1xuICAgIGNvbnN0IGN1cnJlbnREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNoYW5nZUN1cnJlbnRDb25kaXRpb24oY3VycmVudERhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCk7XG4gICAgY2hhbmdlTG9jYXRpb24oXG4gICAgICBjdXJyZW50RGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgICAgY3VycmVudERhdGEubG9jYXRpb24ucmVnaW9uLFxuICAgICAgY3VycmVudERhdGEubG9jYXRpb24uY291bnRyeSxcbiAgICAgIGN1cnJlbnREYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICApO1xuICAgIGNoYW5nZUN1cnJlbnRJbWFnZShjdXJyZW50RGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uKTtcbiAgICBjaGFuZ2VDdXJyZW50VGVtcChjdXJyZW50RGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mKTtcbiAgICBjaGFuZ2VDdXJyZW50SHVtaWRpdHkoY3VycmVudERhdGEuY3VycmVudC5odW1pZGl0eSk7XG4gICAgY2hhbmdlQ3VycmVudFVWKGN1cnJlbnREYXRhLmN1cnJlbnQudXYpO1xuICAgIGNoYW5nZVdpbmRTcGVlZChjdXJyZW50RGF0YS5jdXJyZW50Lmd1c3RfbXBoKTtcbiAgICBjaGFuZ2VXaW5kRGlyZWN0aW9uKGN1cnJlbnREYXRhLmN1cnJlbnQud2luZF9kaXIpO1xuICAgIGNoYW5nZUNsb3VkQ292ZXJhZ2UoY3VycmVudERhdGEuY3VycmVudC5jbG91ZCk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZpc2libGUtc3RhdGUnLCAndmlzaWJsZScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KCdMb2NhdGlvbiBOb3QgRm91bmQnKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHNlYXJjaFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWZpZWxkJyk7XG5leHBvcnQgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi0tc2VhcmNoJyk7XG4iLCIvLyBjb25zdCB1cmxUZXN0ID0gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2tleX0mcT1Mb25kb25gO1xuXG4vLyBhc3luYyBmdW5jdGlvbiB0ZXN0QVBJKCkge1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuLy8gICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtrZXl9JnE9MzAwNDFgLFxuLy8gICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4vLyAgICk7XG4vLyAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4vLyAgIGNvbnNvbGUubG9nKGAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWV9ICR7d2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeX1gKTtcbi8vICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lKTtcbi8vICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCk7XG4vLyAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24pO1xuLy8gICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mKTtcbi8vIH1cbi8vIHRlc3RBUEkoKTtcbi8vIGFzeW5jIGZ1bmN0aW9uIHRlc3Rmb3JlY2FzdEFQSSgpIHtcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbi8vICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2tleX0mcT0zMDA0MSZkYXlzPTNgLFxuLy8gICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4vLyAgICk7XG4vLyAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4vLyB9XG5cbi8vIHRlc3Rmb3JlY2FzdEFQSSgpO1xuXG4vLyBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3RfX2RheU9uZScpKTtcblxuaW1wb3J0IHsgY3VycmVudFdlYXRoZXIgfSBmcm9tICcuL2N1cnJlbnRXZWF0aGVyQVBJJztcbmltcG9ydCB7IHNlYXJjaFZhbHVlLCBzZWFyY2hCdXR0b24gfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcbmltcG9ydCB7IGNoYW5nZUZvcmVjYXN0IH0gZnJvbSAnLi9jaGFuZ2VGb3JlY2FzdCc7XG5cbmV4cG9ydCBjb25zdCBrZXkgPSAnZDMxN2M0NGIxNDAyNDI5ODhjNzE0MDgxODI0MjAwNSc7XG5jb25zdCBob3Jpem9udGFsU2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZXgtZ3JpZF9fYWRkaXRpb25hbCcpO1xuaG9yaXpvbnRhbFNjcm9sbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGhvcml6b250YWxTY3JvbGwuc2Nyb2xsQnkoe1xuICAgIGxlZnQ6IGV2ZW50LmRlbHRhWSA8IDAgPyAtMzAgOiAzMCxcbiAgfSk7XG59KTtcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY3VycmVudFdlYXRoZXIoKTtcbiAgY2hhbmdlRm9yZWNhc3QoKTtcbiAgc2VhcmNoVmFsdWUudmFsdWUgPSAnJztcbn0pO1xuLy8gY2hhbmdlIG9uIGVudGVyIHByZXNzIHdoZW4gaW5wdXQgZmllbGQgaXMgZm9jdXNlZFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWZpZWxkJykuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWVsZCcpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyKCk7XG4gICAgICAgIGNoYW5nZUZvcmVjYXN0KCk7XG4gICAgICAgIHNlYXJjaFZhbHVlLnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfSk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tYWluLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9