import { key } from './main';
import { createListElement, newList, searchValue } from './domElements';
import { changeForecast } from './changeForecast';
import { currentWeather } from './currentWeatherAPI';

const autoSearchContainer = document.querySelector('.location__auto-search');
const ulListContainer = document.querySelector('.ul__container');
export async function autoComplete(search) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/search.json?key=${key}&q=${search}`,
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
      const listLocation = newList('auto-search__location');
      listLocation.innerHTML = `${place.name}, ${place.region}, ${place.country}`;
      listLocation.addEventListener('click', () => {
        searchValue.value = `${place.name}, ${place.region}, ${place.country}`;
        ulListContainer.style.display = 'none';
        currentWeather();
        changeForecast();
        searchValue.value = '';
        ulListContainer.style.display = 'none';
      });
      frag.append(listLocation);
      autoSearchContainer.append(frag);
    });
  }
}
