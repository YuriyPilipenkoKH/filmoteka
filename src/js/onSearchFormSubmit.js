import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchMoviesByName } from './fetchMoviesByName';
import { renderMoviesMarkup } from './renderFilms';
export async function onFormSubmit(e) {
  e.preventDefault();
  const { query } = e.target.elements;
  const searchQuery = query.value.trim();
  if (searchQuery === '') {
    Notify.info('Enter something');
    return;
  }
  try {
    const movies = await fetchMoviesByName(searchQuery);
    renderMoviesMarkup(movies);
  } catch (error) {
    console.log(error);
  }
}
