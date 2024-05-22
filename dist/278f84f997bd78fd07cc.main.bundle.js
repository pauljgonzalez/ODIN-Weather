/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/autoComplete.js":
/*!*************************************!*\
  !*** ./src/scripts/autoComplete.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autoComplete: () => (/* binding */ autoComplete)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ "./src/scripts/domElements.js");
/* harmony import */ var _changeForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeForecast */ "./src/scripts/changeForecast.js");
/* harmony import */ var _currentWeatherAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currentWeatherAPI */ "./src/scripts/currentWeatherAPI.js");





const autoSearchContainer = document.querySelector('.location__auto-search');
const ulListContainer = document.querySelector('.ul__container');
async function autoComplete(search) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/search.json?key=${_main__WEBPACK_IMPORTED_MODULE_0__.key}&q=${search}`,
    { mode: 'cors' },
  );
  const currentData = await response.json();
  const frag = new DocumentFragment();
  while (autoSearchContainer.firstChild) {
    autoSearchContainer.removeChild(autoSearchContainer.firstChild);
  }
  if (currentData.length > 0) {
    ulListContainer.style.display = 'flex';
    currentData.forEach(async (location) => {
      const place = await location;
      //   console.log(`${place.name}, ${place.region}, ${place.country}`);
      const listLocation = (0,_domElements__WEBPACK_IMPORTED_MODULE_1__.newList)('auto-search__location');
      listLocation.innerHTML = `${place.name}, ${place.region}, ${place.country}`;
      listLocation.addEventListener('click', () => {
        _domElements__WEBPACK_IMPORTED_MODULE_1__.searchValue.value = `${place.name}, ${place.region}, ${place.country}`;
        ulListContainer.style.display = 'none';
        (0,_currentWeatherAPI__WEBPACK_IMPORTED_MODULE_3__.currentWeather)();
        (0,_changeForecast__WEBPACK_IMPORTED_MODULE_2__.changeForecast)();
        _domElements__WEBPACK_IMPORTED_MODULE_1__.searchValue.value = '';
        ulListContainer.style.display = 'none';
      });
      frag.append(listLocation);
      autoSearchContainer.append(frag);
    });
  }
}


/***/ }),

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
/* harmony export */   createListElement: () => (/* binding */ createListElement),
/* harmony export */   errorState: () => (/* binding */ errorState),
/* harmony export */   newList: () => (/* binding */ newList),
/* harmony export */   searchButton: () => (/* binding */ searchButton),
/* harmony export */   searchValue: () => (/* binding */ searchValue)
/* harmony export */ });
const searchValue = document.querySelector('.input-field');
const searchButton = document.querySelector('.button--search');
const errorState = document.querySelector('.main--grid__error');

function newList(name) {
  const list = document.createElement('li');
  list.className = name;
  return list;
}
function createListElement() {
  const list = newList('location__auto-search');
  list.innerHTML = 'this is a test';
}


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
/* harmony import */ var _autoComplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoComplete */ "./src/scripts/autoComplete.js");





const ulListContainer = document.querySelector('.ul__container');
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
  ulListContainer.style.display = 'none';
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
        ulListContainer.style.display = 'none';
      } else {
        (0,_autoComplete__WEBPACK_IMPORTED_MODULE_3__.autoComplete)(_domElements__WEBPACK_IMPORTED_MODULE_1__.searchValue.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc4Zjg0Zjk5N2JkNzhmZDA3Y2MubWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQzJDO0FBQ3RCO0FBQ0c7O0FBRXJEO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0RBQW9ELHNDQUFHLENBQUMsS0FBSyxPQUFPO0FBQ3BFLE1BQU0sY0FBYztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixXQUFXLElBQUksYUFBYSxJQUFJLGNBQWM7QUFDeEUsMkJBQTJCLHFEQUFPO0FBQ2xDLGtDQUFrQyxXQUFXLElBQUksYUFBYSxJQUFJLGNBQWM7QUFDaEY7QUFDQSxRQUFRLHFEQUFXLFlBQVksV0FBVyxJQUFJLGFBQWEsSUFBSSxjQUFjO0FBQzdFO0FBQ0EsUUFBUSxrRUFBYztBQUN0QixRQUFRLCtEQUFjO0FBQ3RCLFFBQVEscURBQVc7QUFDbkI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQLDZCQUE2QixNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlO0FBQ3pFO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUCx3Q0FBd0MsTUFBTTtBQUM5QztBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1AsMkJBQTJCLE9BQU87QUFDbEM7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQLCtCQUErQixTQUFTO0FBQ3hDO0FBQ087QUFDUCw0QkFBNEIsT0FBTztBQUNuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDNkI7QUFDeUM7QUFDdkI7QUFDQzs7QUFFekM7QUFDUDtBQUNBO0FBQ0Esd0RBQXdELHNDQUFHLENBQUMsS0FBSyxxREFBVyxPQUFPO0FBQ25GLFFBQVEsY0FBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQVM7QUFDZjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUksb0RBQVU7QUFDZDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ087QUFDUCw4REFBOEQsSUFBSTtBQUNsRTtBQUNBLHNCQUFzQixJQUFJO0FBQzFCO0FBQ0EsK0RBQStELElBQUk7QUFDbkUsNkRBQTZELElBQUk7QUFDakUsNkRBQTZELElBQUk7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnNFO0FBQ3pDO0FBQ3FCO0FBWTdCOztBQUVkO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHNDQUFHLENBQUMsS0FBSyxxREFBVyxPQUFPO0FBQ2xGLFFBQVEsY0FBYztBQUN0QjtBQUNBO0FBQ0EsSUFBSSxrRUFBc0I7QUFDMUIsSUFBSSwwREFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBa0I7QUFDdEIsSUFBSSw2REFBaUI7QUFDckIsSUFBSSxpRUFBcUI7QUFDekIsSUFBSSwyREFBZTtBQUNuQixJQUFJLDJEQUFlO0FBQ25CLElBQUksK0RBQW1CO0FBQ3ZCLElBQUksK0RBQW1CO0FBQ3ZCO0FBQ0EsSUFBSTtBQUNKLElBQUksb0RBQVU7QUFDZDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNPO0FBQ0E7QUFDQTs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNacUQ7QUFDaUI7QUFDcEI7QUFDSjs7QUFFOUM7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCxzREFBWTtBQUNaLEVBQUUsa0VBQWM7QUFDaEIsRUFBRSwrREFBYztBQUNoQixFQUFFLHFEQUFXO0FBQ2I7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBYztBQUN0QixRQUFRLCtEQUFjO0FBQ3RCLFFBQVEscURBQVc7QUFDbkIsUUFBUSxvREFBVTtBQUNsQjtBQUNBLFFBQVE7QUFDUixRQUFRLDJEQUFZLENBQUMscURBQVc7QUFDaEM7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7OztVQ3BDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlL3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvYXV0b0NvbXBsZXRlLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvY2hhbmdlRE9NLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvY2hhbmdlRm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9jaGFuZ2VGb3JlY2FzdERPTS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS90ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2N1cnJlbnRXZWF0aGVyQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvdGVtcGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS90ZW1wbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvdGVtcGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGtleSB9IGZyb20gJy4vbWFpbic7XG5pbXBvcnQgeyBjcmVhdGVMaXN0RWxlbWVudCwgbmV3TGlzdCwgc2VhcmNoVmFsdWUgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcbmltcG9ydCB7IGNoYW5nZUZvcmVjYXN0IH0gZnJvbSAnLi9jaGFuZ2VGb3JlY2FzdCc7XG5pbXBvcnQgeyBjdXJyZW50V2VhdGhlciB9IGZyb20gJy4vY3VycmVudFdlYXRoZXJBUEknO1xuXG5jb25zdCBhdXRvU2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uX19hdXRvLXNlYXJjaCcpO1xuY29uc3QgdWxMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsX19jb250YWluZXInKTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRvQ29tcGxldGUoc2VhcmNoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvc2VhcmNoLmpzb24/a2V5PSR7a2V5fSZxPSR7c2VhcmNofWAsXG4gICAgeyBtb2RlOiAnY29ycycgfSxcbiAgKTtcbiAgY29uc3QgY3VycmVudERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGZyYWcgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICB3aGlsZSAoYXV0b1NlYXJjaENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgYXV0b1NlYXJjaENvbnRhaW5lci5yZW1vdmVDaGlsZChhdXRvU2VhcmNoQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG4gIGlmIChjdXJyZW50RGF0YS5sZW5ndGggPiAwKSB7XG4gICAgdWxMaXN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgY3VycmVudERhdGEuZm9yRWFjaChhc3luYyAobG9jYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHBsYWNlID0gYXdhaXQgbG9jYXRpb247XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGAke3BsYWNlLm5hbWV9LCAke3BsYWNlLnJlZ2lvbn0sICR7cGxhY2UuY291bnRyeX1gKTtcbiAgICAgIGNvbnN0IGxpc3RMb2NhdGlvbiA9IG5ld0xpc3QoJ2F1dG8tc2VhcmNoX19sb2NhdGlvbicpO1xuICAgICAgbGlzdExvY2F0aW9uLmlubmVySFRNTCA9IGAke3BsYWNlLm5hbWV9LCAke3BsYWNlLnJlZ2lvbn0sICR7cGxhY2UuY291bnRyeX1gO1xuICAgICAgbGlzdExvY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzZWFyY2hWYWx1ZS52YWx1ZSA9IGAke3BsYWNlLm5hbWV9LCAke3BsYWNlLnJlZ2lvbn0sICR7cGxhY2UuY291bnRyeX1gO1xuICAgICAgICB1bExpc3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgY3VycmVudFdlYXRoZXIoKTtcbiAgICAgICAgY2hhbmdlRm9yZWNhc3QoKTtcbiAgICAgICAgc2VhcmNoVmFsdWUudmFsdWUgPSAnJztcbiAgICAgICAgdWxMaXN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KTtcbiAgICAgIGZyYWcuYXBwZW5kKGxpc3RMb2NhdGlvbik7XG4gICAgICBhdXRvU2VhcmNoQ29udGFpbmVyLmFwcGVuZChmcmFnKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXJfX2NvbmlkaXRpb24nKTtcbmNvbnN0IGxvY2F0aW9uRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtd2VhdGhlcl9fbG9jYXRpb24nKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS0td2VhdGhlci1pY29uJyk7XG5jb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXJfX3RlbXBlcmF0dXJlJyk7XG5jb25zdCBjdXJyZW50SHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbmNvbnN0IFV2SW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVVYtSW5kZXgnKTtcbmNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkJyk7XG5jb25zdCB3aW5kRGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtZGlyZWN0aW9uJyk7XG5jb25zdCBjbG91ZENvdmVyYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3VkLWNvdmVyYWdlJyk7XG5jb25zdCByYWluQ2hhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhaW4tY2hhbmNlJyk7XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3VycmVudENvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgY3VycmVudENvbmRpdGlvbi5pbm5lckhUTUwgPSBjb25kaXRpb247XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTG9jYXRpb24oY2l0eSwgc3RhdGUsIGxvY2F0aW9uLCB0aW1lKSB7XG4gIGxvY2F0aW9uRE9NLmlubmVySFRNTCA9IGAke2NpdHl9ICR7c3RhdGV9ICR7bG9jYXRpb259ICR7dGltZS5zbGljZSgxMSl9YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50SW1hZ2UodXJsKSB7XG4gIGN1cnJlbnRXZWF0aGVySWNvbi5zcmMgPSB1cmw7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3VycmVudFRlbXAodGVtcCkge1xuICBjdXJyZW50VGVtcC5pbm5lckhUTUwgPSBgRmVlbHMgbGlrZSAke3RlbXB9IMKwRmA7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3VycmVudEh1bWlkaXR5KGh1bWlkaXR5KSB7XG4gIGN1cnJlbnRIdW1pZGl0eS5pbm5lckhUTUwgPSBodW1pZGl0eTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50VVYoVVYpIHtcbiAgVXZJbmRleC5pbm5lckhUTUwgPSBVVjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VXaW5kU3BlZWQoc3BlZWQpIHtcbiAgd2luZFNwZWVkLmlubmVySFRNTCA9IGAke3NwZWVkfSBNUEhgO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVdpbmREaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gIHdpbmREaXJlY3Rpb24uaW5uZXJIVE1MID0gZGlyZWN0aW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNsb3VkQ292ZXJhZ2UoY292ZXJhZ2UpIHtcbiAgY2xvdWRDb3ZlcmFnZS5pbm5lckhUTUwgPSBgJHtjb3ZlcmFnZX0lYDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VSYWluQ2hhbmNlKGNoYW5jZSkge1xuICByYWluQ2hhbmdlLmlubmVySFRNTCA9IGAke2NoYW5jZX0lYDtcbn1cbiIsImltcG9ydCB7IGtleSB9IGZyb20gJy4vbWFpbic7XG5pbXBvcnQgeyBzZWFyY2hWYWx1ZSwgc2VhcmNoQnV0dG9uLCBlcnJvclN0YXRlIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgeyBjaGFuZ2VSYWluQ2hhbmNlIH0gZnJvbSAnLi9jaGFuZ2VET00nO1xuaW1wb3J0IHsgY2hhbmdlRGF5IH0gZnJvbSAnLi9jaGFuZ2VGb3JlY2FzdERPTSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGFuZ2VGb3JlY2FzdCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtrZXl9JnE9JHtzZWFyY2hWYWx1ZS52YWx1ZX0mZGF5cz00YCxcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICAgKTtcbiAgICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3REYXRhKTtcbiAgICBjaGFuZ2VSYWluQ2hhbmNlKFxuICAgICAgZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV93aWxsX2l0X3JhaW4sXG4gICAgKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgbGV0IGRheTtcbiAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgIGRheSA9ICdvbmUnO1xuICAgICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4gICAgICAgIGRheSA9ICd0d28nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF5ID0gJ3RocmVlJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgZGF0ZSB9ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldO1xuICAgICAgY29uc3QgY29uZGl0aW9uID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24udGV4dDtcbiAgICAgIGNvbnN0IGltYWdlID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICAgIGNvbnN0IG1pbiA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9mO1xuICAgICAgY29uc3QgbWF4ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2Y7XG4gICAgICBjaGFuZ2VEYXkoZGF5LCBkYXRlLCBjb25kaXRpb24sIGltYWdlLCBtaW4sIG1heCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBlcnJvclN0YXRlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEYXkoZGF5LCBkYXRlLCBjb25kaXRpb24sIGltYWdlLCBtaW4sIG1heCkge1xuICBjb25zdCBjaGFuZ2VEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0X19kYXktJHtkYXl9LWRhdGVgKTtcbiAgY29uc3QgY2hhbmdlQ29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgLmZvcmVjYXN0X19kYXktJHtkYXl9LWNvbmRpdGlvbmAsXG4gICk7XG4gIGNvbnN0IGNoYW5nZUltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0X19kYXktJHtkYXl9LWltYWdlYCk7XG4gIGNvbnN0IGNoYW5nZU1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JlY2FzdF9fZGF5LSR7ZGF5fS1taW5gKTtcbiAgY29uc3QgY2hhbmdlTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0X19kYXktJHtkYXl9LW1heGApO1xuICBjaGFuZ2VEYXRlLmlubmVySFRNTCA9IGRhdGU7XG4gIGNoYW5nZUNvbmRpdGlvbi5pbm5lckhUTUwgPSBjb25kaXRpb247XG4gIGNoYW5nZUltYWdlLnNyYyA9IGltYWdlO1xuICBjaGFuZ2VNaW4uaW5uZXJIVE1MID0gbWluO1xuICBjaGFuZ2VNYXguaW5uZXJIVE1MID0gbWF4O1xufVxuIiwiaW1wb3J0IHsgc2VhcmNoVmFsdWUsIHNlYXJjaEJ1dHRvbiwgZXJyb3JTdGF0ZSB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xuaW1wb3J0IHsga2V5IH0gZnJvbSAnLi9tYWluJztcbmltcG9ydCB7IGNoYW5nZUZvcmVjYXN0IH0gZnJvbSAnLi9jaGFuZ2VGb3JlY2FzdCc7XG5pbXBvcnQge1xuICBjaGFuZ2VDdXJyZW50Q29uZGl0aW9uLFxuICBjaGFuZ2VMb2NhdGlvbixcbiAgY2hhbmdlQ3VycmVudEltYWdlLFxuICBjaGFuZ2VDdXJyZW50VGVtcCxcbiAgY2hhbmdlQ3VycmVudEh1bWlkaXR5LFxuICBjaGFuZ2VDdXJyZW50VVYsXG4gIGNoYW5nZVdpbmRTcGVlZCxcbiAgY2hhbmdlV2luZERpcmVjdGlvbixcbiAgY2hhbmdlQ2xvdWRDb3ZlcmFnZSxcbiAgY2hhbmdlUmFpbkNoYW5jZSxcbn0gZnJvbSAnLi9jaGFuZ2VET00nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3VycmVudFdlYXRoZXIoKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aXNpYmxlLXN0YXRlJywgJ2hpZGRlbicpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7a2V5fSZxPSR7c2VhcmNoVmFsdWUudmFsdWV9YCxcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICAgKTtcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjaGFuZ2VDdXJyZW50Q29uZGl0aW9uKGN1cnJlbnREYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpO1xuICAgIGNoYW5nZUxvY2F0aW9uKFxuICAgICAgY3VycmVudERhdGEubG9jYXRpb24ubmFtZSxcbiAgICAgIGN1cnJlbnREYXRhLmxvY2F0aW9uLnJlZ2lvbixcbiAgICAgIGN1cnJlbnREYXRhLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICBjdXJyZW50RGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXG4gICAgKTtcbiAgICBjaGFuZ2VDdXJyZW50SW1hZ2UoY3VycmVudERhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbik7XG4gICAgY2hhbmdlQ3VycmVudFRlbXAoY3VycmVudERhdGEuY3VycmVudC5mZWVsc2xpa2VfZik7XG4gICAgY2hhbmdlQ3VycmVudEh1bWlkaXR5KGN1cnJlbnREYXRhLmN1cnJlbnQuaHVtaWRpdHkpO1xuICAgIGNoYW5nZUN1cnJlbnRVVihjdXJyZW50RGF0YS5jdXJyZW50LnV2KTtcbiAgICBjaGFuZ2VXaW5kU3BlZWQoY3VycmVudERhdGEuY3VycmVudC5ndXN0X21waCk7XG4gICAgY2hhbmdlV2luZERpcmVjdGlvbihjdXJyZW50RGF0YS5jdXJyZW50LndpbmRfZGlyKTtcbiAgICBjaGFuZ2VDbG91ZENvdmVyYWdlKGN1cnJlbnREYXRhLmN1cnJlbnQuY2xvdWQpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aXNpYmxlLXN0YXRlJywgJ3Zpc2libGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlcnJvclN0YXRlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBzZWFyY2hWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWVsZCcpO1xuZXhwb3J0IGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tLXNlYXJjaCcpO1xuZXhwb3J0IGNvbnN0IGVycm9yU3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi0tZ3JpZF9fZXJyb3InKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0xpc3QobmFtZSkge1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdC5jbGFzc05hbWUgPSBuYW1lO1xuICByZXR1cm4gbGlzdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0RWxlbWVudCgpIHtcbiAgY29uc3QgbGlzdCA9IG5ld0xpc3QoJ2xvY2F0aW9uX19hdXRvLXNlYXJjaCcpO1xuICBsaXN0LmlubmVySFRNTCA9ICd0aGlzIGlzIGEgdGVzdCc7XG59XG4iLCJpbXBvcnQgeyBjdXJyZW50V2VhdGhlciB9IGZyb20gJy4vY3VycmVudFdlYXRoZXJBUEknO1xuaW1wb3J0IHsgc2VhcmNoVmFsdWUsIHNlYXJjaEJ1dHRvbiwgZXJyb3JTdGF0ZSB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xuaW1wb3J0IHsgY2hhbmdlRm9yZWNhc3QgfSBmcm9tICcuL2NoYW5nZUZvcmVjYXN0JztcbmltcG9ydCB7IGF1dG9Db21wbGV0ZSB9IGZyb20gJy4vYXV0b0NvbXBsZXRlJztcblxuY29uc3QgdWxMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsX19jb250YWluZXInKTtcbmV4cG9ydCBjb25zdCBrZXkgPSAnZDMxN2M0NGIxNDAyNDI5ODhjNzE0MDgxODI0MjAwNSc7XG5jb25zdCBob3Jpem9udGFsU2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZXgtZ3JpZF9fYWRkaXRpb25hbCcpO1xuaG9yaXpvbnRhbFNjcm9sbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGhvcml6b250YWxTY3JvbGwuc2Nyb2xsQnkoe1xuICAgIGxlZnQ6IGV2ZW50LmRlbHRhWSA8IDAgPyAtMzAgOiAzMCxcbiAgfSk7XG59KTtcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY3VycmVudFdlYXRoZXIoKTtcbiAgY2hhbmdlRm9yZWNhc3QoKTtcbiAgc2VhcmNoVmFsdWUudmFsdWUgPSAnJztcbiAgdWxMaXN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcbi8vIGNoYW5nZSBvbiBlbnRlciBwcmVzcyB3aGVuIGlucHV0IGZpZWxkIGlzIGZvY3VzZWRcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1maWVsZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmllbGQnKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBjdXJyZW50V2VhdGhlcigpO1xuICAgICAgICBjaGFuZ2VGb3JlY2FzdCgpO1xuICAgICAgICBzZWFyY2hWYWx1ZS52YWx1ZSA9ICcnO1xuICAgICAgICBlcnJvclN0YXRlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgdWxMaXN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdXRvQ29tcGxldGUoc2VhcmNoVmFsdWUudmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvbWFpbi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==