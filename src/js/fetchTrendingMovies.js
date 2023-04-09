import axios from 'axios';
const API_KEY = '90c7ff0c6a89140d8ec65b5296dfcca2';
const BASE_URL = 'https://api.themoviedb.org/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export async function fetchTrendingMovies() {
  try {
    const response = await axios(
      `${BASE_URL}3/trending/movie/day?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
