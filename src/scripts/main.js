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

import { test } from './currentWeatherAPI';

export const key = 'd317c44b140242988c7140818242005';
