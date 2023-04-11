import { refs } from './refs';
import { fetchVideoKey } from './fetchMovieTrailer';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
if (refs.trailerBtn) {
  refs.trailerBtn.addEventListener('click', onTrailerBtnClick);
}
let videoKey;

export async function onTrailerBtnClick(id) {
  const videoResponse = await fetchVideoKey(id);
  const obj = videoResponse.data.results;
  function getKey() {
    for (let i = 0; i < obj.length; i += 1) {
      if (
        obj[i].name === 'Official Trailer' ||
        obj[i].name.includes('Official Trailer')
      ) {
        return obj[i].key;
      }
    }
    return null;
  }
  videoKey = getKey();
  console.log(getKey());
  if (videoKey) {
    const videoMarkup = `<iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/${videoKey}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
    refs.trailerWindow.innerHTML = videoMarkup;
    refs.trailerBackdrop.classList.remove('visually-hidden');
  } else {
    Notify.info(`Sorry. 👀 There is no trailer for this movie yet.`);
  }
}
