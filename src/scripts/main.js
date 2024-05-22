import '../styles/styles.css';

import { currentWeather } from './currentWeatherAPI';
import { searchValue, searchButton, errorState } from './domElements';
import { changeForecast } from './changeForecast';
import { autoComplete } from './autoComplete';

const ulListContainer = document.querySelector('.ul__container');
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
  ulListContainer.style.display = 'none';
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
        ulListContainer.style.display = 'none';
      } else {
        autoComplete(searchValue.value);
      }
    });
});
