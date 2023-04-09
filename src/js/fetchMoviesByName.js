import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { stopLoader } from './loader';

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '90c7ff0c6a89140d8ec65b5296dfcca2';
export async function fetchMoviesByName(query, page = 1) {
  try {
    const response = await axios(
      `${BASE_URL}3/search/movie?api_key=${API_KEY}&include_adult=false&query=${query}&page=${page}`
    );
    if (response.data.results.length === 0) {
      Notify.info(`Nothing was found for your '${query}' request`);
      stopLoader();
      return;
    }
    return response;
  } catch (error) {
    console.log(error);
  }
}
