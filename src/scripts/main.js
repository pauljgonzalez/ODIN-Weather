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

import { currentWeather } from './currentWeatherAPI';
import { searchValue, searchButton, errorState } from './domElements';
import { changeForecast } from './changeForecast';

export const key = 'd317c44b140242988c7140818242005';
const horizontalScroll = document.querySelector('.flex-grid__additional');
horizontalScroll.addEventListener('wheel', (event) => {
  event.preventDefault();

  horizontalScroll.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});
searchButton.addEventListener('click', () => {
  currentWeather();
  changeForecast();
  searchValue.value = '';
});
// change on enter press when input field is focused
document.querySelector('.input-field').addEventListener('focus', () => {
  document
    .querySelector('.input-field')
    .addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        currentWeather();
        changeForecast();
        searchValue.value = '';
        errorState.style.visibility = 'hidden';
      }
    });
});
