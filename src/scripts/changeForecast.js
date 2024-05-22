import { key } from './main';
import { searchValue, searchButton, errorState } from './domElements';
import { changeRainChance } from './changeDOM';
import { changeDay } from './changeForecastDOM';

export async function changeForecast() {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${searchValue.value}&days=4`,
      { mode: 'cors' },
    );
    const forecastData = await response.json();
    // console.log(forecastData);
    changeRainChance(
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
      changeDay(day, date, condition, image, min, max);
    }
  } catch (error) {
    console.log(error);
    errorState.style.visibility = 'visible';
  }
}
