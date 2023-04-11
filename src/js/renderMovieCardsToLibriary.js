import {
  renderMovieCardsToQueue,
  renderMovieCardsToWatched,
} from './pagination';

const refs = {
  queueBtn: document.querySelector('.header__btn-queue'),
  watchedBtn: document.querySelector('.header__btn-watched'),
  watchedBtnMobile: document.querySelectorAll('.header__btn-watched'),
  queueBtnMobile: document.querySelectorAll('.header__btn-queue'),
};

// console.log(refs.watchedBtnMobile);
// console.log(refs.queueBtnMobile);
const queueBtnMobile = refs.queueBtnMobile[1];
const watchedBtnMobile = refs.watchedBtnMobile[1];

refs.queueBtn.addEventListener('click', renderMovieCardsToQueueCategory);
refs.watchedBtn.addEventListener('click', renderMovieCardsToWatchedCategory);
watchedBtnMobile.addEventListener('click', renderMovieCardsToWatchedCategory);
queueBtnMobile.addEventListener('click', renderMovieCardsToQueueCategory);



renderMovieCardsToQueue();

function renderMovieCardsToQueueCategory() {
  refs.queueBtn.classList.add('header__btn-category--current');
  refs.watchedBtn.classList.remove('header__btn-category--current');
  queueBtnMobile.classList.add('header__btn-category--current');
  watchedBtnMobile.classList.remove('header__btn-category--current');
  renderMovieCardsToQueue();
}

function renderMovieCardsToWatchedCategory() {
  refs.queueBtn.classList.remove('header__btn-category--current');
  refs.watchedBtn.classList.add('header__btn-category--current');
  queueBtnMobile.classList.remove('header__btn-category--current');
  watchedBtnMobile.classList.add('header__btn-category--current');

  renderMovieCardsToWatched();
}