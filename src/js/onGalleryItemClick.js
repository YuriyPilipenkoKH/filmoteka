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
  const videoResponse = await axios(
    `${BASE_URL}3/movie/${id}/videos?api_key=${API_KEY}`
  );
  const videoKey = videoResponse.data.results[0]?.key;
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
    <div class="trailer-overlay">
    <a
      class="trailer-link"
      href="https://www.youtube.com/watch?v=${videoKey}"
      target="_blank"
    >
      <svg class="play-icon">
        <use href="../images/icons/sprite.svg#player"></use>
      </svg>
    </a>
  </div>
</div>
<div class="modal__info">
  <h2 class="modal__title">${title}</h2>
  
    <ul class="modal__list">
      <li class="modal__item">
        <p class="modal__list--first-list">Vote / Votes</p>
        <p>
          <span class="vote-average">${vote_average}</span><span> / </span><span
            class="vote-count"
            >${vote_count}</span
          >
        </p>
      </li>
      <li class="modal__item">
        <p class="modal__list--first-list">Popularity</p>
        <p>${popularity}</p>
      </li>
      <li class="modal__item">
        <p class="modal__list--first-list">Original Title</p>
        <p>${original_title}</p>
      </li>
      <li class="modal__item">
        <p class="modal__list--first-list">Genre</p>
        <p>${genres.map(genre => genre.name).join(', ')}</p>
      </li>
    </ul>
  
  <div>
    <h3 class="modal__subtitle">About</h3>
    <p class="modal__text">${overview}</p>
  </div>
  <div class="modal__buttons">
    <button class="modal__btn" type="button" data-id="${id}">
      add to Watched
    </button>
    <button class="modal__btn" type="button" data-id="${id}">
      add to queue
    </button>
  </div>
</div>
`;
  refs.movieModal.innerHTML = movieMarkup;
}

export { onGalleryItemClick };
