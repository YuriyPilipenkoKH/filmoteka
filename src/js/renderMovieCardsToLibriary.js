// import './js/addMovieToLibriary';
// const movieCardMarkup = '<div class="movie-card"></div>';

const refs = {
  queueBtn: document.querySelector('.header__btn-queue'),
  watchedBtn: document.querySelector('.header__btn-watched'),
};

refs.queueBtn.addEventListener('click', renderMovieCardsToQueue);
refs.watchedBtn.addEventListener('click', renderMovieCardsToWatched);

const libriaryRef = document.querySelector('.libriary__gallery-list');

let moviesInQueue = JSON.parse(localStorage.getItem('queue')) || [];
let moviesInWatched = JSON.parse(localStorage.getItem('watched')) || [];
let markup = console.log(moviesInQueue);
let queueMarkup = moviesInQueue
  .map(
    movieCard => `<li class="film-card">
      <a href="modal-film.html" class="film-card__link" >
        <div class="film-card__img">
          <img src=https://image.tmdb.org/t/p/w500${movieCard.poster_path} alt="${movieCard.title}" loading="lazy" data-id="${movieCard.id}"/>
        </div>
        <div class="film-card__info">
          <p class="film-card__title">${movieCard.title}</p>
          <p class="film-card__description">Geners | Date</p>
        </div>
      </a>
    </li>`
  )
  .join('');

let watchedMarkup = moviesInWatched
  .map(
    movieCard => `<li class="film-card">
      <a href="modal-film.html" class="film-card__link" >
        <div class="film-card__img">
          <img src=https://image.tmdb.org/t/p/w500${movieCard.poster_path} alt="${movieCard.title}" loading="lazy" data-id="${movieCard.id}"/>
        </div>
        <div class="film-card__info">
          <p class="film-card__title">${movieCard.title}</p>
          <p class="film-card__description">Geners | Date</p>
        </div>
      </a>
    </li>`
  )
  .join('');

console.log(watchedMarkup);
renderMovieCardsToQueue(queueMarkup);

function renderMovieCardsToQueue() {
  // const savedInQueue = localStorage.getItem('queue');

  if (moviesInQueue.length !== 0) {
    // const arrOfQueueMovie = JSON.parse(savedInQueue);
    // const markup = arrOfQueueMovie
    //   .map(
    //     movieCard => `<li class="film-card">
    //   <a href="modal-film.html" class="film-card__link" >
    //     <div class="film-card__img">
    //       <img src=https://image.tmdb.org/t/p/w500${movieCard.poster_path} alt="${movieCard.title}" loading="lazy" data-id="${movieCard.id}"/>
    //     </div>
    //     <div class="film-card__info">
    //       <p class="film-card__title">${movieCard.title}</p>
    //       <p class="film-card__description">Geners | Date</p>
    //     </div>
    //   </a>
    // </li>`
    //   )
    //   .join('');

    document.querySelector('.libriary__gallery-list').innerHTML = queueMarkup;
  }
}

function renderMovieCardsToWatched() {
  // const savedInwatched = localStorage.getItem('watched');

  if (moviesInWatched.length !== 0) {
    // const arrOfwatchedMovie = JSON.parse(savedInwatched);
    // const markup = arrOfwatchedMovie
    //   .map(
    //     movieCard => `<li class="film-card">
    //   <a href="modal-film.html" class="film-card__link" >
    //     <div class="film-card__img">
    //       <img src=https://image.tmdb.org/t/p/w500${movieCard.poster_path} alt="${movieCard.title}" loading="lazy" data-id="${movieCard.id}"/>
    //     </div>
    //     <div class="film-card__info">
    //       <p class="film-card__title">${movieCard.title}</p>
    //       <p class="film-card__description">Geners | Date</p>
    //     </div>
    //   </a>
    // </li>`
    //   )
    //   .join('');

    document.querySelector('.libriary__gallery-list').innerHTML = watchedMarkup;
  }
}
