import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:3001/api/v1/anime",
// });

// API Axios Get Call for Anime
export const getAnimeCall = () => {
  return axios.get("http://localhost:3001/api/v1/anime");
};

// API Axios Get Call for Anime
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
// // API Axios Post Call.
// export const postAPICall = (url, data) => {
//   return axios.post(url, data);
// };
// // API Axios Put Call.
// export const putAPICall = (url, data) => {
//   return axios.put(url, data);
// };
// // API Axios Delete Call.
// export const deleteAPICall = (url) => {
//   return axios.delete(url);
// };
