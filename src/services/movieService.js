import API from './axiosConfig';

export const getAllMovies = () => API.get('/api/movies');
export const getMovie = (id) => API.get(`/api/movies/${id}`);
export const searchMovies = (query) => API.get(`/api/movies/search?query=${query}`);
export const getByCategory = (category) => API.get(`/api/movies/category/${category}`);