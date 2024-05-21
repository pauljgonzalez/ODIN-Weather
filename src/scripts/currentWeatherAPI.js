import { searchValue, searchButton } from './domElements';
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

searchButton.addEventListener('click', () => {
  currentWeather();
  changeForecast();
  searchValue.value = '';
});

async function currentWeather() {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${key}&q=${searchValue.value}`,
    { mode: 'cors' },
  );
  const currentData = await response.json();
  //   console.log(currentData);
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
  //   changeRainChance(currentData.current.)
}
