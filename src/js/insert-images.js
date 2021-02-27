import api from './apiService';
import update from '../templates/image-card.hbs';
import {
  inputRef,
  searchBtnRef,
  galleryRef,
  loadMoreBtnRef,
  searchForm,
} from './refs';
loadMoreBtnRef.classList.add(`is-hidden`);
searchBtnRef.addEventListener('click', onSearch);
loadMoreBtnRef.addEventListener('click', loadMoreCards);

function onSearch(event) {
  event.preventDefault();

  const input = searchForm;
  api.query = input.elements.query.value;

  loadCard();
  galleryRef.innerHTML = '';
  api.resetPage();
}
function loadMoreCards() {
  api.incrementPage();
  loadCard();
  loadMoreBtnRef.classList.remove(`is-hidden`);
}
function loadCard() {
  api.fetchCards().then(data => {
    insertList(data);
    window.scrollBy({
      top: window.innerHeight - 40,
      behavior: 'smooth',
    });
  });
}
function insertList(images) {
  const markList = update(images.hits);
  galleryRef.insertAdjacentHTML('beforeend', markList);

  loadMoreBtnRef.classList.remove(`is-hidden`);
}
