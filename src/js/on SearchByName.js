import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

// import { fetchMoviesByName } from './fetchMoviesByName';
import { renderMoviesMarkup } from './renderFilms';
import { startLoader, stopLoader } from './loader';

import { MoviesServiceByName } from './apiServiceMovies';
const moviesServiceByName = new MoviesServiceByName({
  page: 1,
  searchQuery: '',
});

export async function onFormSubmit(e) {
  e.preventDefault();
  moviesServiceByName.resetPage();

  const { query } = e.target.elements;
  const searchQuery = query.value.trim();

  moviesServiceByName.query = searchQuery;

  if (searchQuery === '') {
    Notify.info('Enter something');
    return;
  } else {
    startLoader();
    try {
      moviesServiceByName.fetchMoviesByName().then(renderMoviesMarkup);
      stopLoader();
      const pagination = new Pagination('pagination', {
        totalItems: 500,
        itemsPerPage: 10,
        visiblePages: 5,
        page: 1,
      });
      pagination.on('beforeMove', event => {
        const currentPage = event.page;
        moviesServiceByName.page = currentPage;
        moviesServiceByName.fetchMoviesByName().then(renderMoviesMarkup);
        stopLoader();
      });
    } catch (error) {
      console.log(error);
    }
  }
}
