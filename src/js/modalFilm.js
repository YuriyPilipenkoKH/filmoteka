import { fetchTrendingMovies } from './fetchTrendingMovies';

const refs = {
  galleryList: document.querySelector('.gallery-list'),
  modal: document.querySelector('[data-modal]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modalContainer: document.querySelector('.modal__container'),
};
// console.log(refs.closeModalBtn);

refs.galleryList.addEventListener('click', onCardClick);
refs.closeModalBtn.addEventListener('click', onCloseModal);

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
  function renderFilmInfo() {
    console.log(data);
    const markup = infoAboutFilm
      .map(
        ({
          original_title,
          overview,
          popularity,
          poster_path,
          release_date,
          title,
          video,
          vote_average,
          vote_count,
        }) => {
          return `<div class="modal__card-thumb">
        <img class="modal__image" src="#" alt="film-image" />
      </div>
      <div class="modal__info">
        <h2 class="modal__title">A FISTFUL OF LEAD</h2>

        <div class="modal__list-box">
          <ul class="modal__list modal__list--first-list">
            <li>Vote / Votes</li>
            <li>Popularity</li>
            <li>Original Title</li>
            <li>Genre</li>
          </ul>
          <ul class="modal__list">
            <li>7.3/ 1260</li>
            <li>100.2</li>
            <li>A FISTFUL OF LEAD</li>
            <li>Western</li>
          </ul>
        </div>

        <div>
          <h3 class="modal__subtitle">About</h3>
          <p class="modal__text">
            Four of the West’s most infamous outlaws assemble to steal a huge
            stash of gold from the most corrupt settlement of the gold rush
            towns. But not all goes to plan one is killed and the other three
            escapes with bags of gold hide out in the abandoned gold mine
            where they happen across another gang of three – who themselves
            were planning to hit the very same bank! As tensions rise, things
            go from bad to worse as they realise the bags of gold are filled
            with lead... they’ve been double crossed – but by who and how?
          </p>
        </div>
        <div class="modal__buttons">
          <button class="modal__btn" type="button">add to Watched</button>
          <button class="modal__btn" type="button">add to queue</button>
        </div>
      </div>`;
        }
      )
      .join('');
    refs.modalContainer.innerHTML = markup;
  }
}
