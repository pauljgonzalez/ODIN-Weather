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
export function changeCurrentCondition(condition) {
  currentCondition.innerHTML = condition;
}
export function changeLocation(city, state, location, time) {
  locationDOM.innerHTML = `${city} ${state} ${location} ${time.slice(11)}`;
}
export function changeCurrentImage(url) {
  currentWeatherIcon.src = url;
}
export function changeCurrentTemp(temp) {
  currentTemp.innerHTML = `Feels like ${temp} °F`;
}
export function changeCurrentHumidity(humidity) {
  currentHumidity.innerHTML = humidity;
}
export function changeCurrentUV(UV) {
  UvIndex.innerHTML = UV;
}
export function changeWindSpeed(speed) {
  windSpeed.innerHTML = `${speed} MPH`;
}
export function changeWindDirection(direction) {
  windDirection.innerHTML = direction;
}
export function changeCloudCoverage(coverage) {
  cloudCoverage.innerHTML = `${coverage}%`;
}
export function changeRainChance(chance) {
  rainChange.innerHTML = `${chance}%`;
}
