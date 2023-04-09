import { refs } from './refs';
import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '90c7ff0c6a89140d8ec65b5296dfcca2';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POSTER_URL =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

refs.galleryList.addEventListener('click', onGalleryItemClick);
async function onGalleryItemClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const id = e.target.dataset.id;
  const response = await axios(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}`);
  // console.log(response);
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = response.data;
  const posterUrl = poster_path
    ? `${IMG_URL}${poster_path}`
    : DEFAULT_POSTER_URL;
  const movieMarkup = `<div class="modal__card-thumb">
    <img class="modal__image" src="${posterUrl}" alt="film-image" />
  </div>
  <div class="modal__info">
    <h2 class="modal__title">${title}</h2>
    <div class="modal__list-box">
      <ul class="modal__list modal__list--first-list">
        <li>Vote / Votes</li>
        <li>Popularity</li>
        <li>Original Title</li>
        <li>Genre</li>
      </ul>
      <ul class="modal__list">
  <li>
    <span class="vote-average">${vote_average}</span>
    <span class="modal__symbol">/</span>
    <span class="vote-count">${vote_count}</span>
  </li>
  <li>${popularity}</li>
  <li>${original_title}</li>
  <li>${genres.map(genre => genre.name).join(', ')}</li>
</ul>
    </div>
    <div>	
      <h3 class="modal__subtitle">About</h3>	
      <p class="modal__text">${overview}</p>	
    </div>	
    <div class="modal__buttons">	
      <button class="modal__btn" type="button" data-id="${id}">add to Watched</button>	
      <button class="modal__btn" type="button" data-id="${id}">add to queue </button>	
    </div>	
  </div>`;
  refs.movieModal.innerHTML = movieMarkup;
}

export { onGalleryItemClick };

refs.movieModal.addEventListener('click', onModalClick);
async function onModalClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const id = e.target.dataset.id;
  const response = await axios(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}`);
  console.log(response);
}
