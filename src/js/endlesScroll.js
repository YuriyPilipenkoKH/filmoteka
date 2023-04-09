import axios from 'axios';

export class MoviesService {
  constructor(options) {
    this.searchQuery = '';
    this.page = 2;
    // this.per_page = 40;
  }
  async fetchTrendingMovies() {
    const options = {
      BASE_URL: 'https://api.themoviedb.org/',
      API_KEY: '90c7ff0c6a89140d8ec65b5296dfcca2',
    };
    try {
      const response = await axios.get(
        `${options.BASE_URL}3/trending/movie/day?api_key=${options.API_KEY}&page=${this.page}`
      );
      this.incrementPage();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 2;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
const moviesService = new MoviesService({
  page: 2,
  searchQueryInput: '',
});

import throttle from 'lodash.throttle';
import { refs } from './refs';
import { fetchTrendingMovies } from './fetchTrendingMovies';
import { renderMoviesMarkup } from './renderFilms';

window.addEventListener('scroll', throttle(onEndlesScroll, 2000));

function onEndlesScroll() {
  const heightBeforeLoading = 250;
  const documentRect = refs.galleryList.getBoundingClientRect();
  // console.log('координата top', documentRect.top);
  // console.log('координата bottom', documentRect.bottom);
  // const firctEl = gallery.firstElementChild.getBoundingClientRect();
  // console.log('высоту окна:', clientEl);
  const clientEl = document.documentElement.clientHeight;
  // console.log(clientEl);

  if (documentRect.bottom < clientEl + heightBeforeLoading) {
    console.log(moviesService.page);
    moviesService.fetchTrendingMovies().then(renderMoviesMarkup);
  }
}
// fetchTrendingMovies().then(respons => console.log(respons.data));
