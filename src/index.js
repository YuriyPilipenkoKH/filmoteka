import './sass/index.scss';
import './js/apiServiceMovies';
import './js/renderFilms';
import { renderMoviesMarkup } from './js/renderFilms';
import { refs } from './js/refs';
import { fetchTrendingMovies } from './js/fetchTrendingMovies';
import { onFormSubmit } from './js/onSearchFormSubmit';
import { getMoviesGenres } from './js/getMoviesGenres';
import { onGalleryItemClick } from './js/onGalleryItemClick';
import './js/modalTeam';
getMoviesGenres();
fetchTrendingMovies().then(renderMoviesMarkup);

refs.galleryList.addEventListener('click', onGalleryItemClick);

import './js/onSearchByTrend';
import './js/onSearchByName';

import './js/modalFilm';
import './js/scrolled';
import './js/modalTeam';

import './js/addMovieToLibriary';

import './js/pagination-main';
import './js/fetchMovieTrailer';
import './js/trailer';
