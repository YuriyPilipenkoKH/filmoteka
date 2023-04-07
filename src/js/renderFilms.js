import { refs } from './refs';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export function renderMoviesMarkup(data) {
  const moviesArray = data.data.results;
  const genres = JSON.parse(localStorage.getItem('genres'));
  function returnGenreName(genres, id) {
    const genreToFind = genres.find(genre => genre.id === id);
    if (genreToFind) {
      return genreToFind.name;
    }
  }
  console.log(genres);
  console.log(moviesArray);
  const markup = moviesArray
    .map(
      ({ poster_path, title, genre_ids }) =>
        `<li class="film-card">
      <a href="modal-film.html" class="film-card__link">
        <div class="film-card__img">
          <img src="${IMG_URL + poster_path}" alt="${title}" loading="lazy" />
        </div>
        <div class="film-card__info">
          <p class="film-card__title">${title}</p>
          <p class="film-card__description">${returnGenreName(
            genres,
            genre_ids[0]
          )}${
          genre_ids[1] ? ` | ${returnGenreName(genres, genre_ids[1])}` : ''
        }</p>
        </div>
      </a>
    </li>`
    )
    .join('');
  refs.galleryList.innerHTML = markup;
}
