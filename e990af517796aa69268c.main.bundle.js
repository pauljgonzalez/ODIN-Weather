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
    _domElements__WEBPACK_IMPORTED_MODULE_1__.errorState.style.visibility = 'visible';
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
    _domElements__WEBPACK_IMPORTED_MODULE_0__.errorState.style.visibility = 'visible';
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
/* harmony export */   errorState: () => (/* binding */ errorState),
/* harmony export */   searchButton: () => (/* binding */ searchButton),
/* harmony export */   searchValue: () => (/* binding */ searchValue)
/* harmony export */ });
const searchValue = document.querySelector('.input-field');
const searchButton = document.querySelector('.button--search');
const errorState = document.querySelector('.main--grid__error');


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
        _domElements__WEBPACK_IMPORTED_MODULE_1__.errorState.style.visibility = 'hidden';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTk5MGFmNTE3Nzk2YWE2OTI2OGMubWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWU7QUFDekU7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQLHdDQUF3QyxNQUFNO0FBQzlDO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUCwyQkFBMkIsT0FBTztBQUNsQztBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1AsK0JBQStCLFNBQVM7QUFDeEM7QUFDTztBQUNQLDRCQUE0QixPQUFPO0FBQ25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkM2QjtBQUN5QztBQUN2QjtBQUNDOztBQUV6QztBQUNQO0FBQ0E7QUFDQSx3REFBd0Qsc0NBQUcsQ0FBQyxLQUFLLHFEQUFXLE9BQU87QUFDbkYsUUFBUSxjQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2REFBUztBQUNmO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSSxvREFBVTtBQUNkO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JDTztBQUNQLDhEQUE4RCxJQUFJO0FBQ2xFO0FBQ0Esc0JBQXNCLElBQUk7QUFDMUI7QUFDQSwrREFBK0QsSUFBSTtBQUNuRSw2REFBNkQsSUFBSTtBQUNqRSw2REFBNkQsSUFBSTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNic0U7QUFDekM7QUFDcUI7QUFZN0I7O0FBRWQ7QUFDUDtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsc0NBQUcsQ0FBQyxLQUFLLHFEQUFXLE9BQU87QUFDbEYsUUFBUSxjQUFjO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLGtFQUFzQjtBQUMxQixJQUFJLDBEQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFrQjtBQUN0QixJQUFJLDZEQUFpQjtBQUNyQixJQUFJLGlFQUFxQjtBQUN6QixJQUFJLDJEQUFlO0FBQ25CLElBQUksMkRBQWU7QUFDbkIsSUFBSSwrREFBbUI7QUFDdkIsSUFBSSwrREFBbUI7QUFDdkI7QUFDQSxJQUFJO0FBQ0osSUFBSSxvREFBVTtBQUNkO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNPO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlAsb0VBQW9FLElBQUk7O0FBRXhFO0FBQ0E7QUFDQSx3REFBd0QsSUFBSTtBQUM1RCxTQUFTLGNBQWM7QUFDdkI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQixFQUFFLDZCQUE2QjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELElBQUk7QUFDN0QsU0FBUyxjQUFjO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVxRDtBQUNpQjtBQUNwQjs7QUFFM0M7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Qsc0RBQVk7QUFDWixFQUFFLGtFQUFjO0FBQ2hCLEVBQUUsK0RBQWM7QUFDaEIsRUFBRSxxREFBVztBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFjO0FBQ3RCLFFBQVEsK0RBQWM7QUFDdEIsUUFBUSxxREFBVztBQUNuQixRQUFRLG9EQUFVO0FBQ2xCO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7VUMzREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2NoYW5nZURPTS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2NoYW5nZUZvcmVjYXN0LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvY2hhbmdlRm9yZWNhc3RET00uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9jdXJyZW50V2VhdGhlckFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtd2VhdGhlcl9fY29uaWRpdGlvbicpO1xuY29uc3QgbG9jYXRpb25ET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC13ZWF0aGVyX19sb2NhdGlvbicpO1xuY29uc3QgY3VycmVudFdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlLS13ZWF0aGVyLWljb24nKTtcbmNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtd2VhdGhlcl9fdGVtcGVyYXR1cmUnKTtcbmNvbnN0IGN1cnJlbnRIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xuY29uc3QgVXZJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5VVi1JbmRleCcpO1xuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWQnKTtcbmNvbnN0IHdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1kaXJlY3Rpb24nKTtcbmNvbnN0IGNsb3VkQ292ZXJhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvdWQtY292ZXJhZ2UnKTtcbmNvbnN0IHJhaW5DaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFpbi1jaGFuY2UnKTtcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50Q29uZGl0aW9uKGNvbmRpdGlvbikge1xuICBjdXJyZW50Q29uZGl0aW9uLmlubmVySFRNTCA9IGNvbmRpdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VMb2NhdGlvbihjaXR5LCBzdGF0ZSwgbG9jYXRpb24sIHRpbWUpIHtcbiAgbG9jYXRpb25ET00uaW5uZXJIVE1MID0gYCR7Y2l0eX0gJHtzdGF0ZX0gJHtsb2NhdGlvbn0gJHt0aW1lLnNsaWNlKDExKX1gO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRJbWFnZSh1cmwpIHtcbiAgY3VycmVudFdlYXRoZXJJY29uLnNyYyA9IHVybDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50VGVtcCh0ZW1wKSB7XG4gIGN1cnJlbnRUZW1wLmlubmVySFRNTCA9IGBGZWVscyBsaWtlICR7dGVtcH0gwrBGYDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50SHVtaWRpdHkoaHVtaWRpdHkpIHtcbiAgY3VycmVudEh1bWlkaXR5LmlubmVySFRNTCA9IGh1bWlkaXR5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRVVihVVikge1xuICBVdkluZGV4LmlubmVySFRNTCA9IFVWO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVdpbmRTcGVlZChzcGVlZCkge1xuICB3aW5kU3BlZWQuaW5uZXJIVE1MID0gYCR7c3BlZWR9IE1QSGA7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlV2luZERpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgd2luZERpcmVjdGlvbi5pbm5lckhUTUwgPSBkaXJlY3Rpb247XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ2xvdWRDb3ZlcmFnZShjb3ZlcmFnZSkge1xuICBjbG91ZENvdmVyYWdlLmlubmVySFRNTCA9IGAke2NvdmVyYWdlfSVgO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJhaW5DaGFuY2UoY2hhbmNlKSB7XG4gIHJhaW5DaGFuZ2UuaW5uZXJIVE1MID0gYCR7Y2hhbmNlfSVgO1xufVxuIiwiaW1wb3J0IHsga2V5IH0gZnJvbSAnLi9tYWluJztcbmltcG9ydCB7IHNlYXJjaFZhbHVlLCBzZWFyY2hCdXR0b24sIGVycm9yU3RhdGUgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcbmltcG9ydCB7IGNoYW5nZVJhaW5DaGFuY2UgfSBmcm9tICcuL2NoYW5nZURPTSc7XG5pbXBvcnQgeyBjaGFuZ2VEYXkgfSBmcm9tICcuL2NoYW5nZUZvcmVjYXN0RE9NJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoYW5nZUZvcmVjYXN0KCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2tleX0mcT0ke3NlYXJjaFZhbHVlLnZhbHVlfSZkYXlzPTRgLFxuICAgICAgeyBtb2RlOiAnY29ycycgfSxcbiAgICApO1xuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEpO1xuICAgIGNoYW5nZVJhaW5DaGFuY2UoXG4gICAgICBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X3dpbGxfaXRfcmFpbixcbiAgICApO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICBsZXQgZGF5O1xuICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgZGF5ID0gJ29uZSc7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDIpIHtcbiAgICAgICAgZGF5ID0gJ3R3byc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXkgPSAndGhyZWUnO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBkYXRlIH0gPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV07XG4gICAgICBjb25zdCBjb25kaXRpb24gPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgY29uc3QgaW1hZ2UgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgICAgY29uc3QgbWluID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2Y7XG4gICAgICBjb25zdCBtYXggPSBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfZjtcbiAgICAgIGNoYW5nZURheShkYXksIGRhdGUsIGNvbmRpdGlvbiwgaW1hZ2UsIG1pbiwgbWF4KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIGVycm9yU3RhdGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURheShkYXksIGRhdGUsIGNvbmRpdGlvbiwgaW1hZ2UsIG1pbiwgbWF4KSB7XG4gIGNvbnN0IGNoYW5nZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3RfX2RheS0ke2RheX0tZGF0ZWApO1xuICBjb25zdCBjaGFuZ2VDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuZm9yZWNhc3RfX2RheS0ke2RheX0tY29uZGl0aW9uYCxcbiAgKTtcbiAgY29uc3QgY2hhbmdlSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3RfX2RheS0ke2RheX0taW1hZ2VgKTtcbiAgY29uc3QgY2hhbmdlTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0X19kYXktJHtkYXl9LW1pbmApO1xuICBjb25zdCBjaGFuZ2VNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3RfX2RheS0ke2RheX0tbWF4YCk7XG4gIGNoYW5nZURhdGUuaW5uZXJIVE1MID0gZGF0ZTtcbiAgY2hhbmdlQ29uZGl0aW9uLmlubmVySFRNTCA9IGNvbmRpdGlvbjtcbiAgY2hhbmdlSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gIGNoYW5nZU1pbi5pbm5lckhUTUwgPSBtaW47XG4gIGNoYW5nZU1heC5pbm5lckhUTUwgPSBtYXg7XG59XG4iLCJpbXBvcnQgeyBzZWFyY2hWYWx1ZSwgc2VhcmNoQnV0dG9uLCBlcnJvclN0YXRlIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgeyBrZXkgfSBmcm9tICcuL21haW4nO1xuaW1wb3J0IHsgY2hhbmdlRm9yZWNhc3QgfSBmcm9tICcuL2NoYW5nZUZvcmVjYXN0JztcbmltcG9ydCB7XG4gIGNoYW5nZUN1cnJlbnRDb25kaXRpb24sXG4gIGNoYW5nZUxvY2F0aW9uLFxuICBjaGFuZ2VDdXJyZW50SW1hZ2UsXG4gIGNoYW5nZUN1cnJlbnRUZW1wLFxuICBjaGFuZ2VDdXJyZW50SHVtaWRpdHksXG4gIGNoYW5nZUN1cnJlbnRVVixcbiAgY2hhbmdlV2luZFNwZWVkLFxuICBjaGFuZ2VXaW5kRGlyZWN0aW9uLFxuICBjaGFuZ2VDbG91ZENvdmVyYWdlLFxuICBjaGFuZ2VSYWluQ2hhbmNlLFxufSBmcm9tICcuL2NoYW5nZURPTSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjdXJyZW50V2VhdGhlcigpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZpc2libGUtc3RhdGUnLCAnaGlkZGVuJyk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtrZXl9JnE9JHtzZWFyY2hWYWx1ZS52YWx1ZX1gLFxuICAgICAgeyBtb2RlOiAnY29ycycgfSxcbiAgICApO1xuICAgIGNvbnN0IGN1cnJlbnREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNoYW5nZUN1cnJlbnRDb25kaXRpb24oY3VycmVudERhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCk7XG4gICAgY2hhbmdlTG9jYXRpb24oXG4gICAgICBjdXJyZW50RGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgICAgY3VycmVudERhdGEubG9jYXRpb24ucmVnaW9uLFxuICAgICAgY3VycmVudERhdGEubG9jYXRpb24uY291bnRyeSxcbiAgICAgIGN1cnJlbnREYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICApO1xuICAgIGNoYW5nZUN1cnJlbnRJbWFnZShjdXJyZW50RGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uKTtcbiAgICBjaGFuZ2VDdXJyZW50VGVtcChjdXJyZW50RGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mKTtcbiAgICBjaGFuZ2VDdXJyZW50SHVtaWRpdHkoY3VycmVudERhdGEuY3VycmVudC5odW1pZGl0eSk7XG4gICAgY2hhbmdlQ3VycmVudFVWKGN1cnJlbnREYXRhLmN1cnJlbnQudXYpO1xuICAgIGNoYW5nZVdpbmRTcGVlZChjdXJyZW50RGF0YS5jdXJyZW50Lmd1c3RfbXBoKTtcbiAgICBjaGFuZ2VXaW5kRGlyZWN0aW9uKGN1cnJlbnREYXRhLmN1cnJlbnQud2luZF9kaXIpO1xuICAgIGNoYW5nZUNsb3VkQ292ZXJhZ2UoY3VycmVudERhdGEuY3VycmVudC5jbG91ZCk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZpc2libGUtc3RhdGUnLCAndmlzaWJsZScpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGVycm9yU3RhdGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHNlYXJjaFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWZpZWxkJyk7XG5leHBvcnQgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi0tc2VhcmNoJyk7XG5leHBvcnQgY29uc3QgZXJyb3JTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLS1ncmlkX19lcnJvcicpO1xuIiwiLy8gY29uc3QgdXJsVGVzdCA9IGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtrZXl9JnE9TG9uZG9uYDtcblxuLy8gYXN5bmMgZnVuY3Rpb24gdGVzdEFQSSgpIHtcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbi8vICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7a2V5fSZxPTMwMDQxYCxcbi8vICAgICB7IG1vZGU6ICdjb3JzJyB9LFxuLy8gICApO1xuLy8gICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuLy8gICBjb25zb2xlLmxvZyhgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lfSAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnl9YCk7XG4vLyAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSk7XG4vLyAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpO1xuLy8gICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uKTtcbi8vICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZik7XG4vLyB9XG4vLyB0ZXN0QVBJKCk7XG4vLyBhc3luYyBmdW5jdGlvbiB0ZXN0Zm9yZWNhc3RBUEkoKSB7XG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtrZXl9JnE9MzAwNDEmZGF5cz0zYCxcbi8vICAgICB7IG1vZGU6ICdjb3JzJyB9LFxuLy8gICApO1xuLy8gICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuLy8gfVxuXG4vLyB0ZXN0Zm9yZWNhc3RBUEkoKTtcblxuLy8gY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0X19kYXlPbmUnKSk7XG5cbmltcG9ydCB7IGN1cnJlbnRXZWF0aGVyIH0gZnJvbSAnLi9jdXJyZW50V2VhdGhlckFQSSc7XG5pbXBvcnQgeyBzZWFyY2hWYWx1ZSwgc2VhcmNoQnV0dG9uLCBlcnJvclN0YXRlIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgeyBjaGFuZ2VGb3JlY2FzdCB9IGZyb20gJy4vY2hhbmdlRm9yZWNhc3QnO1xuXG5leHBvcnQgY29uc3Qga2V5ID0gJ2QzMTdjNDRiMTQwMjQyOTg4YzcxNDA4MTgyNDIwMDUnO1xuY29uc3QgaG9yaXpvbnRhbFNjcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWdyaWRfX2FkZGl0aW9uYWwnKTtcbmhvcml6b250YWxTY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBob3Jpem9udGFsU2Nyb2xsLnNjcm9sbEJ5KHtcbiAgICBsZWZ0OiBldmVudC5kZWx0YVkgPCAwID8gLTMwIDogMzAsXG4gIH0pO1xufSk7XG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGN1cnJlbnRXZWF0aGVyKCk7XG4gIGNoYW5nZUZvcmVjYXN0KCk7XG4gIHNlYXJjaFZhbHVlLnZhbHVlID0gJyc7XG59KTtcbi8vIGNoYW5nZSBvbiBlbnRlciBwcmVzcyB3aGVuIGlucHV0IGZpZWxkIGlzIGZvY3VzZWRcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWVsZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmllbGQnKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBjdXJyZW50V2VhdGhlcigpO1xuICAgICAgICBjaGFuZ2VGb3JlY2FzdCgpO1xuICAgICAgICBzZWFyY2hWYWx1ZS52YWx1ZSA9ICcnO1xuICAgICAgICBlcnJvclN0YXRlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL21haW4uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=