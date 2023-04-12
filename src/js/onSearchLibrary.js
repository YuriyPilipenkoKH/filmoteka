import { refs } from './refs';
// import {onSearchByName} from './js/fetchMoviesByName'

 refs.librarySubmit.addEventListener('submit', onSearchLibrary);

console.log();

function onSearchLibrary(e) {
    e.preventDefault
    window.location.href = './index.html'
 
}