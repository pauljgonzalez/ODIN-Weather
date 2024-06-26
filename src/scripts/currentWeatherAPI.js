import { searchValue, searchButton, errorState } from './domElements';
import { key } from './main';
import { changeForecast } from './changeForecast';
import {
  changeCurrentCondition,
  changeLocation,
  changeCurrentImage,
  changeCurrentTemp,
  changeCurrentHumidity,
  changeCurrentUV,
  changeWindSpeed,
  changeWindDirection,
  changeCloudCoverage,
  changeRainChance,
} from './changeDOM';

export async function currentWeather() {
  document.documentElement.style.setProperty('--visible-state', 'hidden');
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${key}&q=${searchValue.value}`,
      { mode: 'cors' },
    );
    const currentData = await response.json();
    changeCurrentCondition(currentData.current.condition.text);
    changeLocation(
      currentData.location.name,
      currentData.location.region,
      currentData.location.country,
      currentData.location.localtime,
    );
    changeCurrentImage(currentData.current.condition.icon);
    changeCurrentTemp(currentData.current.feelslike_f);
    changeCurrentHumidity(currentData.current.humidity);
    changeCurrentUV(currentData.current.uv);
    changeWindSpeed(currentData.current.gust_mph);
    changeWindDirection(currentData.current.wind_dir);
    changeCloudCoverage(currentData.current.cloud);
    document.documentElement.style.setProperty('--visible-state', 'visible');
  } catch (error) {
    errorState.style.visibility = 'visible';
  }
}
