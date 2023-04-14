import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderMoviesMarkup } from './renderFilms';
import { startLoader, stopLoader } from './loader';
import { refs } from './refs';
import { MoviesServiceByName, totalFilmsOnSearch } from './apiServiceMovies';
import { startLoader } from './loader';

refs.moviesSearchForm.addEventListener('submit', onFormSubmit);

const moviesServiceByName = new MoviesServiceByName({
  page: 1,
  searchQuery: '',
});

export async function onFormSubmit(e) {
  e.preventDefault();
  startLoader();
  moviesServiceByName.resetPage();

  const { query } = e.target.elements;
  const searchQuery = query.value.trim();

  moviesServiceByName.query = searchQuery;

  if (searchQuery === '') {
    Notify.info('Enter something');
    stopLoader();
    return;
  } else {
    startLoader();
    try {
      moviesServiceByName
        .fetchMoviesByName()
        .then(getPageQuantity)
        .then(renderMoviesMarkup);
      refs.isTrendingMoviesActive = false;
    } catch (error) {
      console.log(error);
    }
  }
}

function getPageQuantity(response) {
  totalFilmsOnSearch = response.data.total_results;
  const pagination = new Pagination('pagination', {
    totalItems: totalFilmsOnSearch,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
  });
  pagination.on('beforeMove', event => {
    const currentPage = event.page;
    moviesServiceByName.page = currentPage;
    startLoader();
    moviesServiceByName.fetchMoviesByName().then(renderMoviesMarkup);
  });

  return response;
}
