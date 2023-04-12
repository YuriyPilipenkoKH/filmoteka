import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { MoviesService } from './apiServiceMovies';
// import { fetchTrendingMovies } from './fetchTrendingMovies';
import { renderMoviesMarkup } from './renderFilms';

const moviesService = new MoviesService({
  searchQuery: '',
  page: 1,
});

const container = document.getElementById('pagination');

const pagination = new Pagination('pagination', {
  totalItems: 500,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
});
pagination.on('beforeMove', event => {
  const currentPage = event.page;

  if (currentPage) {
    moviesService.page = currentPage;
    moviesService.fetchTrendingMovies().then(renderMoviesMarkup);
  }
});
