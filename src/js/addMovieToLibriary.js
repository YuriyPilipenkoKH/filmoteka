import { onGalleryItemClick } from './onGalleryItemClick';
import { refs } from './refs';

import { refs } from './refs';
import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '90c7ff0c6a89140d8ec65b5296dfcca2';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POSTER_URL =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

// if (!refs.modal.classList.contains('is-hidden')) {
//   const addToQueueBtnRef = document.querySelector('.add-to-queue');
//   const addTowatchedBtnRef = document.querySelector('.add-to-watched');

//   // const removeFromQueueBtnRef = document.querySelector('.remove-from-queue');
//   // const removeFromWatchedBtnRef = document.querySelector('.remove-from-watched');

//   addToQueueBtnRef.addEventListener('click', addMovieToQueue);
//   addTowatchedBtnRef.addEventListener('click', addMovieToWatched);

//   console.log('ok');
// }

// removeFromQueueBtnRef.addEventListener('click', removeMovieFromQueue);
// removeFromWatchedBtnRef.addEventListener('click', removeMovieFromWatched);

// renderMovieCardsToQueue();
// renderMovieCardsToWatched();

// function action(e) {
//   if (e.currentTarget.classList.contains('add')) {
//     addMovieToQueue();
//     console.log(e.currentTarget);
//     return;
//   }
//   if (e.currentTarget.classList.contains('remove')) {
//     removeMovieFromQueue();
//   }
// }

refs.movieModal.addEventListener('click', onModalClick);

async function onModalClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const id = e.target.dataset.id;
  const response = await axios(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}`);
  console.log(response);

  if (e.target.name === 'watched') {
    addMovieToWatched(response.data);
  } else if (e.target.name === 'queue') {
    addMovieToQueue(response.data);
  }
}

function addMovieToQueue(movie) {
  const savedInQueue = localStorage.getItem('queue');
  const arrOfQueueMovie = JSON.parse(savedInQueue) || [];
  //   const arrOfMovieId = arrOfQueueMovie.map(movie => movie.id);

  //   if (arrOfMovieId.includes(movie.id)) {
  //     addToQueueBtnRef.textContent = 'remove from queue';
  //     addToQueueBtnRef.classList.replace('add', 'remove');

  //     return;
  //   }

  arrOfQueueMovie.push(movie);
  localStorage.setItem('queue', JSON.stringify(arrOfQueueMovie));

  return arrOfQueueMovie;
}

function addMovieToWatched(movie) {
  const savedInwatched = localStorage.getItem('watched');
  const arrOfwatchedMovie = JSON.parse(savedInwatched) || [];

  arrOfwatchedMovie.push(movie);
  localStorage.setItem('watched', JSON.stringify(arrOfwatchedMovie));

  return arrOfwatchedMovie;
}

function removeMovieFromQueue(e) {
  const savedInQueue = localStorage.getItem('queue');
  let arrOfQueueMovie = JSON.parse(savedInQueue);
  const newArrOfQueueMovie = arrOfQueueMovie.filter(
    movieCard => movie.id !== movieCard.id
  );
  localStorage.setItem('queue', JSON.stringify(newArrOfQueueMovie));

  return newArrOfQueueMovie;
}

function removeMovieFromWatched(e) {
  const savedInWatched = localStorage.getItem('watched');
  let arrOfWatchedMovie = JSON.parse(savedInWatched);
  const newArrOfWatchedMovie = arrOfWatchedMovie.filter(
    movieCard => movie.id !== movieCard.id
  );
  localStorage.setItem('watched', JSON.stringify(newArrOfWatchedMovie));

  return newArrOfWatchedMovie;
}
