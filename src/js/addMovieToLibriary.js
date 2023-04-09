import { onGalleryItemClick } from './onGalleryItemClick';
import { refs } from './refs';

const movieCardMarkup = `<li class="film-card">
      <a href="modal-film.html" class="film-card__link" >
        <div class="film-card__img">
          <img src="https://image.tmdb.org/t/p/w500/rzRb63TldOKdKydCvWJM8B6EkPM.jpg" alt="#" loading="lazy" data-id="id"/>
        </div>
        <div class="film-card__info">
          <p class="film-card__title">Title</p>
          <p class="film-card__description">Geners</p>
        </div>
      </a>
    </li>`;

const movie = { markup: movieCardMarkup, id: 1 };
console.log(refs.modal);

if (!refs.modal.classList.contains('is-hidden')) {
  const addToQueueBtnRef = document.querySelector('.add-to-queue');
  const addTowatchedBtnRef = document.querySelector('.add-to-watched');

  // const removeFromQueueBtnRef = document.querySelector('.remove-from-queue');
  // const removeFromWatchedBtnRef = document.querySelector('.remove-from-watched');

  addToQueueBtnRef.addEventListener('click', addMovieToQueue);
  addTowatchedBtnRef.addEventListener('click', addMovieToWatched);

  console.log('ok');
}

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

function addMovieToQueue() {
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
  //   renderMovieCardsToQueue();
  return arrOfQueueMovie;
}

function addMovieToWatched() {
  const savedInwatched = localStorage.getItem('watched');
  const arrOfwatchedMovie = JSON.parse(savedInwatched) || [];

  arrOfwatchedMovie.push(movie);
  localStorage.setItem('watched', JSON.stringify(arrOfwatchedMovie));
  //   renderMovieCardsToWatched();
  return arrOfwatchedMovie;
}

function removeMovieFromQueue(e) {
  const savedInQueue = localStorage.getItem('queue');
  let arrOfQueueMovie = JSON.parse(savedInQueue);
  const newArrOfQueueMovie = arrOfQueueMovie.filter(
    movieCard => movie.id !== movieCard.id
  );
  localStorage.setItem('queue', JSON.stringify(newArrOfQueueMovie));
  //   renderMovieCardsToQueue();
  return newArrOfQueueMovie;
}

function removeMovieFromWatched(e) {
  const savedInWatched = localStorage.getItem('watched');
  let arrOfWatchedMovie = JSON.parse(savedInWatched);
  const newArrOfWatchedMovie = arrOfWatchedMovie.filter(
    movieCard => movie.id !== movieCard.id
  );
  localStorage.setItem('watched', JSON.stringify(newArrOfWatchedMovie));
  //   renderMovieCardsToWatched();
  return newArrOfWatchedMovie;
}
