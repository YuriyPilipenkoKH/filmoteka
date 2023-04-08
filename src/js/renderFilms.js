import axios from 'axios';
import { refs } from './refs';
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '90c7ff0c6a89140d8ec65b5296dfcca2';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POSTER_URL =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';
function returnGenreName(genres, id) {
  const genreToFind = genres.find(genre => genre.id === id);
  if (genreToFind) {
    return genreToFind.name;
  }
}
export function renderMoviesMarkup(data) {
  const moviesArray = data.data.results;
  const genres = JSON.parse(localStorage.getItem('genres'));

  const markup = moviesArray
    .map(({ poster_path, title, genre_ids, id }) => {
      const genresCount = genre_ids.length;
      let genresToShow = '';
      const posterUrl = poster_path
        ? `${IMG_URL}${poster_path}`
        : DEFAULT_POSTER_URL;

      if (genresCount === 1) {
        genresToShow = returnGenreName(genres, genre_ids[0]);
      } else if (genresCount === 2) {
        genresToShow = `${returnGenreName(
          genres,
          genre_ids[0]
        )} | ${returnGenreName(genres, genre_ids[1])}`;
      } else if (genresCount === 3) {
        genresToShow = `${returnGenreName(
          genres,
          genre_ids[0]
        )}, ${returnGenreName(genres, genre_ids[1])} | ${returnGenreName(
          genres,
          genre_ids[2]
        )}`;
      }

      return `<li class="film-card">
      <a href="modal-film.html" class="film-card__link" >
        <div class="film-card__img">
          <img src="${posterUrl}" alt="${title}" loading="lazy" data-id="${id}"/>
        </div>
        <div class="film-card__info">
          <p class="film-card__title">${title}</p>
          <p class="film-card__description">${genresToShow}</p>
        </div>
      </a>
    </li>`;
    })
    .join('');

  refs.galleryList.addEventListener('click', onGalleryItemClick);
  async function onGalleryItemClick(e) {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    const id = e.target.dataset.id;
    const response = await axios(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}`);
    console.log(response);
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
        <li>${vote_average} / ${vote_count}</li>
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
      <button class="modal__btn" type="button">add to Watched</button>	
      <button class="modal__btn" type="button">add to queue</button>	
    </div>	
  </div>`;
    refs.movieModal.innerHTML = movieMarkup;
  }
  refs.galleryList.innerHTML = markup;
}
