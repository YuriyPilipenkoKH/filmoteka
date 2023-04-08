import { refs } from './refs';

refs.linkByStudents.addEventListener('click', openModal);
refs.backdropModalTeam.addEventListener('click', onBackdropClick);

function openModal(e) {
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdropModalTeam.classList.remove('is-hidden');
  console.log(e.currentTarget);
}

function closeModal() {
  window.removeEventListener('keydown', onEscKeyPress);
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
