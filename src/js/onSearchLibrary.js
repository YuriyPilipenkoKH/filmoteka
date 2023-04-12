import { fetchMoviesByName } from './fetchMoviesByName';
import { renderMoviesMarkup } from './renderFilms';
import { startLoader, stopLoader } from './loader';
import { refs } from './refs';
import { MoviesServiceByName } from './apiServiceMovies';
import { onFormSubmit} from './onSearchByName';

import {onFormSubmit, onSearchByName} from './onSearchByName'
// import {onSearchByName} from './js/fetchMoviesByName'

 refs.librarySubmit.addEventListener('submit', onSearchLibrary);

console.log();

function onSearchLibrary(e) {
    e.preventDefault
    window.location.href = './index.html'
    onFormSubmit()
 
}