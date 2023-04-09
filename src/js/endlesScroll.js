import throttle from 'lodash.throttle';
import { refs } from './refs';
import { fetchTrendingMovies } from './fetchTrendingMovies';
import { renderMoviesMarkup } from './renderFilms';

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '90c7ff0c6a89140d8ec65b5296dfcca2';

// window.addEventListener('scroll', throttle(onEndlesScroll, 2000));
console.log(refs.galleryList);
function onEndlesScroll() {
  const documentRect = refs.galleryList.getBoundingClientRect();
  console.log(documentRect);
  const firctEl = refs.galleryList.firstElementChild.getBoundingClientRect();
  console.log(firctEl);
  const clientEl = refs.galleryList.clientHeight;
  console.log();
  const heightBeforeLoading = 300;
  if (documentRect.bottom + heightBeforeLoading < clientEl) {
    // fetchTrendingMovies().then(renderMoviesMarkup);
    fetchTrendingMovies().then(respons => console.log(respons.data));
  }
}
