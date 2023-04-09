// import './js/addMovieToLibriary';
// const movieCardMarkup = '<div class="movie-card"></div>';

const refs = {
  queueBtn: document.querySelector('.header__btn-queue'),
  watchedBtn: document.querySelector('.header__btn-watched'),
};

console.log(refs.queueBtn);
console.log(refs.watchedBtn);

refs.queueBtn.addEventListener('click', renderMovieCardsToQueue);
refs.watchedBtn.addEventListener('click', renderMovieCardsToWatched);

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

const movie = { markup: movieCardMarkup, id: 2 };

const libriaryRef = document.querySelector('.libriary');
console.log(libriaryRef);

renderMovieCardsToQueue();
// renderMovieCardsToWatched();

function renderMovieCardsToQueue() {
  const savedInQueue = localStorage.getItem('queue');

  if (savedInQueue) {
    const arrOfQueueMovie = JSON.parse(savedInQueue);
    const markup = arrOfQueueMovie.map(movieCard => movieCard.markup).join('');

    document.querySelector('.libriary').innerHTML = markup;
  }
}

function renderMovieCardsToWatched() {
  const savedInwatched = localStorage.getItem('watched');

  if (savedInwatched) {
    const arrOfwatchedMovie = JSON.parse(savedInwatched);
    const markup = arrOfwatchedMovie
      .map(movieCard => movieCard.markup)
      .join('');

    document.querySelector('.libriary').innerHTML = markup;
  }
}
