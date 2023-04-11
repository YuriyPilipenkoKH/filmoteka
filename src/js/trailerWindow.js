import { refs } from './refs';

refs.trailerBackdrop.addEventListener('click', onBackdropClose);

function onCloseVideo() {
  refs.modal.classList.remove('is-hidden');
  refs.trailerWindow.classList.toggle('is-hidden');
  refs.body.style.overflow = '';
  document.removeEventListener('keydown', onEscKeyPress);
  refs.backdropModalFilm.removeEventListener('click', onBackdropClose);
}

function onBackdropClose(e) {
  if (e.currentTarget === e.target) {
    onCloseVideo();
  }
}

function onEscKeyPress(e) {
  if (e.key === 'Escape') {
    onCloseVideo();
  }
}
