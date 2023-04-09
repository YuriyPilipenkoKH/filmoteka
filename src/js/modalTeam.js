import { refs } from './refs';

refs.linkByStudents.addEventListener('click', openModal);
refs.backdropModalTeam.addEventListener('click', onBackdropClick);

function openModal(e) {
  window.addEventListener('keydown', onEscKeyPress);
  refs.body.style.overflow = 'hidden';
  refs.backdropModalTeam.classList.remove('is-hidden');
}

function closeModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.body.style.overflow = '';
  refs.backdropModalTeam.classList.add('is-hidden');
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    closeModal();
  }
}
