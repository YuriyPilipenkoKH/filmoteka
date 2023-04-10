import {
  renderMovieCardsToQueue,
  renderMovieCardsToWatched,
} from './pagination';

const refs = {
  queueBtn: document.querySelector('.header__btn-queue'),
  watchedBtn: document.querySelector('.header__btn-watched'),
};

refs.queueBtn.addEventListener('click', renderMovieCardsToQueueCategory);
refs.watchedBtn.addEventListener('click', renderMovieCardsToWatchedCategory);

renderMovieCardsToQueue();

function renderMovieCardsToQueueCategory() {
  refs.queueBtn.classList.add('header__btn-category--current');
  refs.watchedBtn.classList.remove('header__btn-category--current');

  renderMovieCardsToQueue();
}

function renderMovieCardsToWatchedCategory() {
  refs.queueBtn.classList.remove('header__btn-category--current');
  refs.watchedBtn.classList.add('header__btn-category--current');

  renderMovieCardsToWatched();
}
