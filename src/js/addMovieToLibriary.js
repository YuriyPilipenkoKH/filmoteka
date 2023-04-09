import { onGalleryItemClick } from './onGalleryItemClick';
import { refs } from './refs';

import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '90c7ff0c6a89140d8ec65b5296dfcca2';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POSTER_URL =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

refs.movieModal.addEventListener('click', onModalClick);
async function onModalClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const id = e.target.dataset.id;
  const response = await axios(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}`);

  if (e.target.name === 'watched') {
    console.log(response);
    const savedInWatched = localStorage.getItem('watched');
    const arrOfWatchedMovie = JSON.parse(savedInWatched) || [];
    const arrOfMovieId = arrOfWatchedMovie.map(movie => movie.id);

    if (arrOfMovieId.includes(response.data.id)) {
      e.target.textContent = 'remove from watched';
      e.target.classList.replace('add', 'remove');

      return;
    }

    arrOfWatchedMovie.push(response.data);
    localStorage.setItem('watched', JSON.stringify(arrOfWatchedMovie));
  } else if (e.target.name === 'queue') {
    const savedInQueue = localStorage.getItem('queue');
    const arrOfQueueMovie = JSON.parse(savedInQueue) || [];
    const arrOfMovieId = arrOfQueueMovie.map(movie => movie.id);

    if (arrOfMovieId.includes(response.data.id)) {
      e.target.textContent = 'remove from queue';
      e.target.classList.replace('add', 'remove');

      return;
    }

    arrOfQueueMovie.push(response.data);
    localStorage.setItem('queue', JSON.stringify(arrOfQueueMovie));
  }
}

// arrOfWatchedMovie.push(response.data);
// localStorage.setItem('watched', JSON.stringify(arrOfWatchedMovie));

//     return arrOfWatchedMovie;
//   } else if (e.target.name === 'queue') {
//     const savedInQueue = localStorage.getItem('queue');
//     const arrOfQueueMovie = JSON.parse(savedInQueue) || [];

//     const arrOfMovieId = arrOfQueueMovie.map(movie => movie.id);

//     if (arrOfMovieId.includes(response.data.id)) {
//       e.target.textContent = 'remove from queue';
//       e.target.classList.replace('add', 'remove');

//       return;
//     }

//     arrOfQueueMovie.push(response.data);
//     localStorage.setItem('queue', JSON.stringify(arrOfQueueMovie));

//     return arrOfQueueMovie;
//   }
// }

// function addMovieToQueue(movie) {
//   const savedInQueue = localStorage.getItem('queue');
//   const arrOfQueueMovie = JSON.parse(savedInQueue) || [];
//   const arrOfMovieId = arrOfQueueMovie.map(movie => movie.id);

//   if (arrOfMovieId.includes(movie.id)) {
//     addToQueueBtnRef.textContent = 'remove from queue';
//     addToQueueBtnRef.classList.replace('add', 'remove');

//     return;
//   }

//   arrOfQueueMovie.push(movie);
//   localStorage.setItem('queue', JSON.stringify(arrOfQueueMovie));

//   return arrOfQueueMovie;
// }

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
