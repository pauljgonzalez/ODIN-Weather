export const searchValue = document.querySelector('.input-field');
export const searchButton = document.querySelector('.button--search');
export const errorState = document.querySelector('.main--grid__error');

export function newList(name) {
  const list = document.createElement('li');
  list.className = name;
  return list;
}
export function createListElement() {
  const list = newList('location__auto-search');
  list.innerHTML = 'this is a test';
}
