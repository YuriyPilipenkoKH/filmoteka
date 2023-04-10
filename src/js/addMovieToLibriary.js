import { onGalleryItemClick } from './onGalleryItemClick';
import { refs } from './refs';

import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '90c7ff0c6a89140d8ec65b5296dfcca2';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POSTER_URL =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

refs.movieModal.addEventListener('click', onModalButtonClick);

async function onModalButtonClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const buttonToAddOrRemoveMovie = e.target;
  const id = e.target.dataset.id;
  const response = await axios(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}`);
  const movie = response.data;

  if (e.target.name === 'watched') {
    if (buttonToAddOrRemoveMovie.classList.contains('remove')) {
      removeMoveiFromLocalStorageItem(
        buttonToAddOrRemoveMovie,
        'watched',
        movie
      );
      return;
    }
    addMovieToLocalStorageItem(buttonToAddOrRemoveMovie, 'watched', movie);
  } else if (e.target.name === 'queue') {
    if (buttonToAddOrRemoveMovie.classList.contains('remove')) {
      removeMoveiFromLocalStorageItem(buttonToAddOrRemoveMovie, 'queue', movie);
      return;
    }
    addMovieToLocalStorageItem(buttonToAddOrRemoveMovie, 'queue', movie);
  }
}

function removeMoveiFromLocalStorageItem(
  clickedButton,
  localStorageItemName,
  selectedMovie
) {
  const arrOfMovies =
    JSON.parse(localStorage.getItem(localStorageItemName)) || [];

  const newArrOfMovies = arrOfMovies.filter(
    movieInLocalStoregeItem => selectedMovie.id !== movieInLocalStoregeItem.id
  );
  localStorage.setItem(localStorageItemName, JSON.stringify(newArrOfMovies));
  clickedButton.classList.remove('remove');
  clickedButton.textContent = `add to ${localStorageItemName}`;
}

function addMovieToLocalStorageItem(
  clickedButton,
  localStorageItemName,
  selectedMovie
) {
  const arrOfMovies =
    JSON.parse(localStorage.getItem(localStorageItemName)) || [];
  const arrOfMovieId = arrOfMovies.map(movie => movie.id);
  if (arrOfMovieId.includes(selectedMovie.id)) {
    clickedButton.textContent = `remove from ${localStorageItemName}`;
    clickedButton.classList.add('remove');
    return;
  }

  arrOfMovies.push(selectedMovie);
  localStorage.setItem(localStorageItemName, JSON.stringify(arrOfMovies));
  clickedButton.textContent = `remove from ${localStorageItemName}`;
  clickedButton.classList.add('remove');
}
