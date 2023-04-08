import { fetchTrendingMovies } from './fetchTrendingMovies';

const refs = {
  galleryList: document.querySelector('.gallery-list'),
  modal: document.querySelector('[data-modal]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modalContainer: document.querySelector('.modal__container'),
  backdropModalFilm: document.querySelector('.backdrop__film-modal'),
};
// console.log(refs.closeModalBtn);

refs.galleryList.addEventListener('click', onCardClick);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdropModalFilm.addEventListener('click', onBackdropClick);

function onCardClick(e) {
  e.preventDefault();
  // console.log(e.target.nodeName);
  if (e.target.nodeName === 'IMG' || e.target.nodeName === 'P') {
    refs.modal.classList.toggle('is-hidden');
  }
}
//----- Закриття модалки
function onCloseModal() {
  refs.modal.classList.toggle('is-hidden');
}
//-----
renderModalFilmInfo();
async function renderModalFilmInfo() {
  try {
    const filmsArray = await fetchTrendingMovies();
    const infoAboutFilm = filmsArray.data.results;
    console.log(infoAboutFilm);
  } catch (error) {
    console.log(error);
  }
}
function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}
