import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { MoviesService } from './apiServiceMovies';
import { renderMoviesMarkup } from './renderFilms';
import { totalFilms } from './fetchTrendingMovies';
import { pageNumber } from './renderFilms';
import { startLoader } from './loader';

export function paginationRender() {
  const moviesService = new MoviesService({
    searchQuery: '',
    page: 1,
  });

  const pagination = new Pagination('pagination', {
    totalItems: totalFilms,
    itemsPerPage: 20,
    visiblePages: 5,
    page: pageNumber,
  });
  pagination.on('beforeMove', event => {
    const currentPage = event.page;
    if (currentPage) {
      moviesService.page = currentPage;
      startLoader();
      moviesService.fetchTrendingMovies().then(renderMoviesMarkup);
    }
  });
}
