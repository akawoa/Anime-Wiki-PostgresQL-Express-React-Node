import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001/api/v1/anime",
});
// API Axios Get Call for Anime
export const getAnimeCall = () => {
  return axios.get("http://localhost:3001/api/v1/anime");
};
// API Axios Get Call for Anime
export const getSearchCall = (search) => {
  return axios.get(`http://localhost:3001/api/v1/search/${search}`);
};
// API Axios Get Call for Specific Anime
export const getSingleAnimeCall = (id) => {
  return axios.get(`http://localhost:3001/api/v1/anime/${id}`);
};
// API Axios Get Call for Genre
export const getGenreCall = () => {
  return axios.get("http://localhost:3001/api/v1/anime/genre");
};
// API Axios Get Call for all anime within a Genre
export const getAnimeInGenre = (id) => {
  return axios.get(`http://localhost:3001/api/v1/anime/genre/${id}`);
};
// API Axios Post Call to add a genre.
export const postGenreAPICall = (data) => {
  return axios.post(`http://localhost:3001/api/v1/genre/new`, data);
};
// API Axios Post Call to get a single genre.
export const getSingleGenreCall = (id) => {
  return axios.get(`http://localhost:3001/api/v1/genre/${id}`);
};
// API Axios Put Call to edit a Genre.
export const editGenreCall = (id, data) => {
  return axios.put(`http://localhost:3001/api/v1/genre/${id}/update`, data);
};
// API Axios Post Call to add an Anime.
export const postAnimeAPICall = (data) => {
  return axios.post(`http://localhost:3001/api/v1/anime/new`, data);
};
// API Axios Put Call to edit an anime.
export const editAnimeCall = (id, data) => {
  return axios.put(`http://localhost:3001/api/v1/anime/${id}/update`, data);
};
// API Axios Delete Call for an Anime.
export const deleteAnimeCall = (id) => {
  return axios.delete(`http://localhost:3001/api/v1/anime/${id}`);
};
// API Axios Delete Call for a Genre.
export const deleteGenreCall = (id) => {
  return axios.delete(`http://localhost:3001/api/v1/genre/${id}`);
};
// API Axios Post Call to add a user.
export const postUserAPICall = (data) => {
  return axios.post(`http://localhost:3001/api/v1/user/new`, data);
};

// API Axios Post Call to check a user for Login.
export const getUserAPICall = (data) => {
  return axios.post(`http://localhost:3001/api/v1/user/login`, data);
};
